/*********************************/
/*     SCORM Initialization      */
/*********************************/
function initCourse() {
	studentBrowserInfo = getOSandBROWSER();

	//turned off based on courseType -- for now, only "demo" should not report
	// JW ILT: added immersion courseType to test
	if (/(?:demo|immersion)/.test(courseType)) {
		isSCORM = false;
		isXAPI = false;
	} 
	else if (/shortcourseA/.test(courseType)) {
		isXAPI = false;
	}
	/*else{
		//make sure that no one can access the course until the lrs data is delivered...
		document.getElementById("alertCover").classList.remove('hidden');
		document.getElementById("alertCover").classList.add('visible');
		document.getElementById("alertCoverContainer").classList.add('hidden');
	}*/

	//if we are using scorm to connect to a LMS...
	if (courseType !== "hioc") {
		if (isSCORM) {
			//find out if the course is already connected to the scorm api
			g_stillConnected = LMSIsInitialized();
			//if not connected, then connect...
			if (!g_stillConnected) {
				lmsConnected = doLMSInitialize();
			} else {
				//anything??
			}

			//If the doLMSInitialize succeeded...
			if (lmsConnected || g_stillConnected) {
				//get the completion status
				completionstatus = doLMSGetValue("cmi.core.lesson_status");
				
				//!!!NOTE: SHOULD NOT send any completion to the LMS in Hybrid courses unless the value is "PASSED" or "FAILED"!!! (lower case, of course)
				if (/shortcourseA/.test(courseType)) {
					//best practice: set the lesson_status to incomplete if the course has not been accessed before
					if (completionstatus === "not attempted" || completionstatus === "unknown") {
						doLMSSetValue("cmi.core.lesson_status","incomplete");
					}
				}

				sID = doLMSGetValue("cmi.core.student_id");

				//COURSE ATTEMPTS... and potentially other data if a scorm course
				bSuspendData = doLMSGetValue("cmi.suspend_data");

				//DETERMINE WHETHER OR NOT TO CHECK THE LRS FOR DATA - This is used at the end of lrsInitialize()
				if (bSuspendData.length > 1) {
					bCheckLRSStatus = false;
				}

				//If the course couldn't connect to the LMS for some reason...
			} else {
				handleError("Error: Course could not connect with the LMS");
			}
		}
	} else {
		//AICC
		if (courseType.indexOf("hioc") !== -1 && courseType.indexOf("demo") === -1) {
			loadPage(); // aicc.js - call to start LMS connection
		}
	}

	//GET THE STUDENT NAME
	// JW ILT: added immersion courseType to test
	if (!/(?:demo|immersion)/.test(courseType)) {
		if (!/hioc/.test(courseType)) {
			bStudentName = doLMSGetValue("cmi.core.student_name"); // SCORM
		} else {
			bStudentName = getAICCData("cmi.core.student_name"); //AICC
			completionstatus = getAICCData("cmi.core.lesson_status");
		}
	}

	//STUDENT NAME
	//DISPLAY THE STUDENT'S FIRST NAME
	if (bStudentName !== "") {
		if (bStudentName.indexOf(",") !== -1) {
			//display the username: first name + last name
			var fullname = bStudentName.split(",");
			//using substr to remove the extra space before the first name...
			studentnamefinal = fullname[1].substr(1, fullname[1].length - 1) + " " + fullname[0];
			sFirstname = fullname[1];
		} else {
			//display the username: first name + last name
			var fullname = bStudentName.split(" ");
			//using substr to remove the extra space before the first name...
			studentnamefinal = fullname[0] + " " + fullname[1];
			sFirstname = fullname[0];
		}
	}

	//////////////////////////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////////////////////////
	//DEFAULT VALUES FOR xAPI STATE
	//Honesty Statements and Bookmarks
	for (var i = 0; i < TOC.length; i++) {
		honestyStatements[i] = 0;
	}

	//ONLY FOR HIOCS and SHORTCOURSES
	if (!/(?:hybrid|pdf)/.test(courseType)) {
		//Honesty Statements and Bookmarks
		for (var i = 0; i < TOC.length; i++) {
			gBookmarks[i] = [];
			for (var j = 0; j <= lessonCounts[i]; j++) {
				gBookmarks[i][j] = 1;
			}
		}

		//INITIALIZE PAGE VIEWS
		for (var j = 0; j < TOC.length; j++) {
			bPageViews[j] = [];
			for (var k = 0; k < TOC[j].length; k++) {
				bPageViews[j][k] = [];
				for (var l = 0; l < TOC[j][k].length - 1; l++) {
					bPageViews[j][k][l] = 0;
				}
			}
		}

		//set up bLessonCompletions with empty slots for each module and lesson
		for (var c = 0; c < TOC.length; c++) {
			var bTempCount = TOC[c].length; // find out how many lessons there are in each module

			bLessonCompletions[c] = []; // create an array for each module

			for (var d = 0; d < bTempCount; d++) {
				bLessonCompletions[c][d] = "---- - -- - --"; //set default values for each lesson completion
			}
		}
	}

	//Setting up Inline Question Array -- ONLY SHORTCOURSES!!!
	if (/shortcourse/.test(courseType)) {
		for (var page = 0; page < TOC[0][0].length; page++) {
			if (TOC[0][0][page].hasOwnProperty("Questions_YN") && TOC[0][0][page].Questions_YN > 0) {
				allPgQue[page] = [];
				//console.log(TOC[0][0][page]);
				for (var qcount = 0; qcount < parseInt(TOC[0][0][page].QuestionCount); qcount++) {
					allPgQue[page][qcount] = {
						page_nm: page,
						question: qcount,
						answer: 0,
						choice: 0,
						module_number: 1
					};
				}
			} else {
				allPgQue[page] = [""];
			}
		}
	}
	//Scores
	for (var i = 0; i < TOC.length; i++) {
		moduleScores[i] = [0, "---- - -- - --"];
	}
	//////////////////////////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////////////////////////

	setActorCourseGUIDs()
	//LRS should be initialized for all HIOC/Upper FLMI
	//Still need statements saved as long as firewalls allow it
	if (isXAPI) {
		lrsInitialize();
	}
	else if (isSCORM) {
		bGetState();
	}
}

function getUrlParameter(name) {
	name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
	var results = regex.exec(location.search);
	return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

// sets lrsActor and courseGUID vars
// moved from lrsInitialize()
function setActorCourseGUIDs() {
	//SCORM
	if (courseType !== "hioc") {
		//PRODUCTION
		try {
			lrsActor = window.parent.scorm_course_api.strUserId; // GUID
			courseGUID = window.parent.scorm_course_api.strCourseId;
		} catch (ex) {
			//values not found...
		}
		//LOCAL
		if (!lrsActor) {
			lrsActor = sID; //SCORM Student ID
		}
		if (!courseGUID) {
			courseGUID = courseName;
		}
		//AICC
	} else {
		var student_and_course = getUrlParameter("AICC_SID");
		var sacArray = student_and_course.split("|");
		lrsActor = sacArray[0];
		courseGUID = sacArray[1];

		//works for SCORMCloud, not sure if other LMSs will be the same as Meridian or SCORMCloud...
		//REMEMBER TO USE THE NON-MERIDIAN AICC.JS FILE!!!
		if (sacArray[1] === undefined || sacArray[1] === "") {
			lrsActor = getAICCData("cmi.core.student_id");
			courseGUID = course_settings.Portal_Setup.Course_Name;
		}
	}
}

//xAPI Initialization...
function lrsInitialize() {
	//SCORM
	// if (courseType !== "hioc") {
	// 	//PRODUCTION
	// 	try {
	// 		lrsActor = window.parent.scorm_course_api.strUserId; // GUID
	// 		courseGUID = window.parent.scorm_course_api.strCourseId;
	// 	} catch (ex) {
	// 		//values not found...
	// 	}
	// 	//LOCAL
	// 	if (!lrsActor) {
	// 		lrsActor = sID; //SCORM Student ID
	// 	}
	// 	if (!courseGUID) {
	// 		courseGUID = courseName;
	// 	}
	// 	//AICC
	// } else {
	// 	var student_and_course = getUrlParameter("AICC_SID");
	// 	var sacArray = student_and_course.split("|");
	// 	lrsActor = sacArray[0];
	// 	courseGUID = sacArray[1];

	// 	//works for SCORMCloud, not sure if other LMSs will be the same as Meridian or SCORMCloud...
	// 	//REMEMBER TO USE THE NON-MERIDIAN AICC.JS FILE!!!
	// 	if (sacArray[1] === undefined || sacArray[1] === "") {
	// 		lrsActor = getAICCData("cmi.core.student_id");
	// 		courseGUID = course_settings.Portal_Setup.Course_Name;
	// 	}
	// }

	//▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
	//                                   LogRocket
	//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
	//var lomatestname = getAICCData("cmi.core.student_name");
	//var lomatestid = getAICCData("cmi.core.student_id");//***
	//console.log("lomatestname = " + lomatestname);
	//console.log("lomatestid = " + lomatestid);
	//LogRocket.identify(lomatestid);//***
	//LogRocket.identify(lrsActor);
	//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄

	/////////////////////////////////////////////////////////////////////////////////////
	// USED BY PQSE AND EXAM CODE
	window.lrsActorID = lrsActor;
	window.lrsCourseGUID = courseGUID;
	window.lrsActorName = studentnamefinal;
	lrsCourseAttempt = bAttemptCount;
	window.lrsCourseType = courseType;

	if (completionstatus === "not attempted" || completionstatus === "unknown" || completionstatus === "i" || completionstatus === "n") {
		lrsCourseStatus = "in progress";
	} else {
		lrsCourseStatus = completionstatus;
	}
	/////////////////////////////////////////////////////////////////////////////////////

	// creating user
	gUser = new TinCan.Agent({
		name: studentnamefinal,
		account: {
			name: lrsActor, // GUID or SCORM ID
			homePage: getHostname() //"homePage": "http://learning.loma.org/" (services.loma.org, ll-content.ccedge.cn.cn, etc)
		}
	});

	// Determine the proper LRS to report to...
	//var bHostName = window.location.hostname; // doesn't appear to be used ???
	var bHostProtocol = window.location.protocol;
	//console.log("bHostName = " + bHostName);
	//console.log("bHostProtocol = " + bHostProtocol);

	//▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
	//                               USING THE LOCATION OF THE FILES TO DETERMINE THE LRS USED NOW
	//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
	var filelocation = document.location.href;
	if (bHostProtocol.indexOf("file:") !== -1) { useSCORMCloud = true; } // DESKTOP
	if (filelocation.indexOf("/Dev/") !== -1 || filelocation.indexOf("stage") !== -1) { useLOMATest = true } //STAGING -- for final testing
	//if(filelocation.indexOf("/Dev/") !== -1 || filelocation.indexOf("stage") !== -1){useSCORMCloud = true} //STAGING -- for pretesting
	if (filelocation.indexOf("/Prod/") !== -1 || filelocation.indexOf("learning.loma.org") !== -1) { useLOMAProd = true } //PRODUCTION
	if(filelocation.indexOf("ll-content.ccedge.cn") !== -1 || filelocation.indexOf("ll-content.ccnetworks.cn") !== -1){useChinaCache = true} // CHINACACHE -- PRODUCTION-CHINA STUDENTS ONLY
	if (useChinaCache === true) { useSCORMCloud = false; useLOMATest = false; useLOMAProd = false; } //make sure all others are false if useChinaCache is true..
	if (!useSCORMCloud && !useLOMATest && !useLOMAProd && !useChinaCache) { useLOMAProd = true } // DEFAULT to LOMA PRODUCTION

	// console.log("useSCORMCloud =" + useSCORMCloud);
	// console.log("useLOMAProd = " + useLOMAProd);

	//creating LRS Object
	if (useSCORMCloud) {
		//SCORM Cloud///////////////////////////////////////////////////////////////
		try {
			lrs = new TinCan.LRS({
				// Brian's ScormCloud
				// endpoint: "https://cloud.scorm.com/tc/OMLFPP6SMA/sandbox/",
				// username: "OMLFPP6SMA",
				// password: "lkdanivr15epQNqVhLdCDFlHufFx2P6apO8zWDdU",
				// James's ScormCloud
				endpoint: "https://cloud.scorm.com/tc/LEVSHT1MHO/",
				username: "LEVSHT1MHO",
				password: "EBEMFvJQuDxn7qc1pcQ0qRqBBP5nIZE5Qu7EmIWV",
				allowFail: false
			});
		} catch (ex) {
			console.log("Failed to setup LRS object: " + ex);
		}
	} else if (useChinaCache) {
		//ChinaCache Production ///////////////////////////////////////////////////////
		try {
			lrs = new TinCan.LRS({
				endpoint: "https://lrs-hk2.azurefd.net/rst/TCAPI/default/",
				username: "ap-mgmt",
				password: "ap-mgmt-LOM@-PWD",
				allowFail: false
			});
		} catch (ex) {
			console.log("Failed to setup LRS object: " + ex);
		}
	} else if (useLOMAProd) {
		//LOMA's SCORM ENGINE///////////////////////////////////////////////////////
		try {
			lrs = new TinCan.LRS({
				endpoint: "https://services.loma.org/us-lrs/ScormEngineInterface/TCAPI/default/", // CURRENT ENDPOINT!!!
				username: "ap-mgmt",
				password: "ap-mgmt-LOM@-PWD",
				allowFail: false
			});
		} catch (ex) {
			console.log("Failed to setup LRS object: " + ex);
		}
	} else if (useLOMATest) {
		//LOMA's SCORM ENGINE///////////////////////////////////////////////////////
		try {
			lrs = new TinCan.LRS({
				endpoint: "https://services.loma.org/test/lrs/ScormEngineInterface/TCAPI/default/", // External Testing
				//endpoint: "https://devlrs.loma.org/ScormEngineInterface/TCAPI/default/", // internal testing --> CAN ONLY BE USED ON INTERNAL LLG NETWORKS
				username: "ap-mgmt",
				password: "ap-mgmt-password",
				allowFail: false
			});
		} catch (ex) {
			console.log("Failed to setup LRS object: " + ex);
		}
	}

	var browserStatement = {
		type: "browser",
		verb: "experienced",
		activity: "http://activitystrea.ms/schema/1.0/device",
		objectID: portalSetup.Course_Name.replace(/ /g, "_"),
		extensions: studentBrowserInfo
	};

	LRSSend(browserStatement);

	//Get the state objects...
	if (bCheckLRSStatus === true) {
		bLRSGetState(true);
	} else {
		bGetState();
	}
}

//Used by xAPI set/get state functions...
function getPortalActivity(theactivity) {
	var stateActivity;
	var lrsCourse;
	var hname = getHostname();

	if (theactivity === "portal") {
		lrsCourse = hname + strTestLocaleId + "/" + courseGUID.replace(/ /g, "_");
		stateActivity = { id: lrsCourse };
	} else if (theactivity === "eom") {
		lrsCourse = hname + "activities/assessments/" + strTestLocaleId + "/" + courseGUID.replace(/ /g, "_");
		stateActivity = { id: lrsCourse };
	}

	return stateActivity;
}

//▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
//                                          SET STATE / SAVE PROGRESS DATA
//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
function bSetState() {
	//console.log(bExamData);

	var key = "PortalStatus";

	xapiSaveStateConfig = {
		contentType: "application/json",
		agent: gUser,
		activity: getPortalActivity("portal"),
		callback: function (error, response) {
			if (error !== null) {
				if (courseType.indexOf("hioc") !== -1) {
					//LogRocket.captureException(error); //additional log rocket tracking if needed
					//Final - only calls alert message in interface. All information will be in generated email.

					//if(response.status !== "0" || response.status !== 0){
					if (response.status >= 400) {
						//Actually ignore error: 0
						theLRSerror = response;
						doAlert("notconnected");
					}
				}
			}
		}
	};

	var gUserState;
	// creating a state object...

	gUserState = {
		dateStarted: dateStarted,

		//Terms of Use
		TermsAccepted: termsViewed,

		//Intro Video
		VideoViewed: videoViewed,

		//bookmarks
		gBookmarks: gBookmarks,

		//lesson completions...
		bLessonCompletions: bLessonCompletions,

		//Attempt Count...
		bAttemptCount: bAttemptCount,

		//Pages viewed...
		bPageViews: bPageViews,

		//Honesty...
		honestyStatements: honestyStatements,

		//Ereader...
		hasEreader: hasEreader,

		//Page Question Array (specifically shortcourseA for now)...
		allPgQue: allPgQue,

		//Date the data was saved
		dateSaved: new Date()
	};

	//ONLY SAVING STATE TO LRS IF THE COURSE IS FAILED. OTHERWISE, SAVE THE STATE TO SUSPEND_DATA.
	//if(lrsCourseStatus === "failed" || courseType === "hioc"){
	if (lrsCourseStatus === "failed") {
		//save the state...
		//try{
		//	//save the state...
		lrs.saveState(key, gUserState, xapiSaveStateConfig);
		//}catch(err){
		//	// or Report to LogRocket
		//	LogRocket.captureException(err);
		//}
	}

	//Save suspend_data
	// 1. Prepare data
	var suspend_data;

	//2021-09-16 --> Get Latest Copy of Exam Data (eom, pqse, se, eomprogress, etc.)
	var rawPortalState;
	if (courseType.indexOf("hioc") === -1) {
		//AICC or SCORM...
		//HIOCs Should still use the LRS... keep following code in case we start using in aicc courses, too
		// if(courseType.indexOf("hioc") !== -1){
		// 	rawPortalState = getAICCData("cmi.suspend_data");
		// }else{
		rawPortalState = doLMSGetValue("cmi.suspend_data");
		// }

		var portalStateLMS;

		if (rawPortalState.indexOf("||") !== -1) {
			portalStateLMS = rawPortalState.split("||"); // if there's more data than just the attempt count, split use the array

			if (portalStateLMS.length > 3) {
				bExamData = portalStateLMS.slice(2, portalStateLMS.length);
			}
		}
	}

	// 1. Put the full string together
	if (bExamData.length > 0) {
		suspend_data = bAttemptCount + "||" + JSON.stringify(gUserState) + "||" + bExamData.join("||");
	} else {
		suspend_data = bAttemptCount + "||" + JSON.stringify(gUserState);
	}

	// 2. save the data to the corrent location depending on the course type
	// ------ only USA based scorm courses (pdf||hybrid||shortcourse) should use suspend_data, all others should use xAPI
	if (courseType.indexOf("hioc") !== -1) {
		if (courseType.indexOf("demo") === -1) {
			//save the state...
			lrs.saveState(key, gUserState, xapiSaveStateConfig);
		}
		//HIOCs Should still use the LRS... keep following code in case we start using in aicc courses, too
		/* setAICCData("cmi.suspend_data", suspend_data);
		if(bCheckLRSStatus === true){
			lrs.dropState(key, xapiSaveStateConfig); // Delete the state object since we aren't using it
			bCheckLRSStatus = false; //set to false so that the extra traffic to the LRS isn't happening when not needed
		} */

		// ------ SCORM, so save to suspend_data
	} else {
		//ONLY SAVING STATE TO LRS IF THE COURSE IS FAILED. OTHERWISE, SAVE THE STATE TO SUSPEND_DATA.
		//if(lrsCourseStatus === "failed" || courseType === "hioc"){
		// if(lrsCourseStatus === "failed"){
		// 	console.log("fail saved to LRS...")
		// 	//save the state...
		// 	lrs.saveState(key, gUserState, xapiSaveStateConfig);
		// }else{
		doLMSSetValue("cmi.suspend_data", suspend_data);
		doLMSCommit();
		if (bCheckLRSStatus === true) {
			lrs.dropState(key, xapiSaveStateConfig); // Delete the state object since we aren't using it
			bCheckLRSStatus = false; //set to false so that the extra traffic to the LRS isn't happening when not needed
		}
		// }
	}

	//console.log(JSON.stringify(gUserState));
}

//▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
//                                                  GET PORTAL DATA
//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
//*******************************************************************************************************
///                                          LMS VERSION                                              ///
//*******************************************************************************************************

function bGetState() {
	if (courseType === "hioc") {
		bLRSGetState(true);
		return;
	}
	var rawPortalState;
	//AICC or SCORM...
	if (/hioc/.test(courseType)) {
		rawPortalState = getAICCData("cmi.suspend_data");
	} else {
		rawPortalState = doLMSGetValue("cmi.suspend_data");
	}

	var portalStateLMS;

	if (/\|\|/.test(rawPortalState)) {
		portalStateLMS = rawPortalState.split("||"); // if there's more data than just the attempt count, split use the array

		//save the eomstate to a var if it exists in the suspend_data
		/* if(portalStateLMS.length > 3){
			bExamData = portalStateLMS.slice(2, portalStateLMS.length - 1);
			//console.log(portalStateLMS);
		}else{
			bExamData = portalStateLMS[2];
		} */
		//if there's exam data of any kind...
		if (portalStateLMS.length > 2) {
			// save it to a var so that it will be saved to the suspend_data later
			bExamData = portalStateLMS.slice(2, portalStateLMS.length);

			//if there's no portal data at this point, try to get it again from the LRS
			if (portalStateLMS[1] === "") {
				bLRSGetState(false);
				return;
			}
		}
	} else {
		portalStateLMS = rawPortalState; // if the only thing in suspend_data is the attempt count, use the value without the split
	}

	//suspend_data needs to have something for JSON.parse() to work without error...
	if (rawPortalState !== "") {
		var portalStateJSON;
		if (/\|\|/.test(rawPortalState)) {
			portalStateJSON = portalStateLMS[1]; // if there was data other than the attempt count
		} else {
			portalStateJSON = portalStateLMS; // if there was only the attempt count
		}

		gReturnedState = JSON.parse(portalStateJSON);

		//DATE STARTED...
		if (gReturnedState.hasOwnProperty("dateStarted")) {
			dateStarted = gReturnedState.dateStarted;
		}
		// -*RESET*- DATE IF A NEW ATTEMPT (hybrid courses only)
		if (courseType.indexOf("hybrid") !== -1 && bSuspendData.toString() === "") {
			dateStarted = new Date();
		}

		//Terms of Use
		if (gReturnedState.hasOwnProperty("TermsAccepted")) {
			termsViewed = gReturnedState.TermsAccepted;
		}

		//Intro Video
		if (gReturnedState.hasOwnProperty("VideoViewed")) {
			videoViewed = gReturnedState.VideoViewed;
		}

		//Attempt Count(s)
		if (gReturnedState.hasOwnProperty("bAttemptCount")) {
			lrsCourseAttempt = gReturnedState.bAttemptCount;
			bAttemptCount = gReturnedState.bAttemptCount;
		} else {
			//make sure that this value can never be undefined
			lrsCourseAttempt = 1;
			bAttemptCount = 1;
		}

		//Honesty Statements...
		if (gReturnedState.hasOwnProperty("honestyStatements")) {
			honestyStatements = gReturnedState.honestyStatements;
		}

		//Bookmarks...
		if (gReturnedState.hasOwnProperty("gBookmarks")) {
			gBookmarks = gReturnedState.gBookmarks;
		}

		//PAGE VIEWS...
		if (gReturnedState.hasOwnProperty("bPageViews")) {
			bPageViews = gReturnedState.bPageViews;
		}

		//lesson completions...
		if (gReturnedState.hasOwnProperty("bLessonCompletions")) {
			bLessonCompletions = gReturnedState.bLessonCompletions;
		}

		//EREADER...
		if (gReturnedState.hasOwnProperty("hasEreader")) {
			hasEreader = gReturnedState.hasEreader;
		}

		//ALLPGQUE - Inline questions...
		if (gReturnedState.hasOwnProperty("allPgQue")) {
			allPgQue = gReturnedState.allPgQue;
		}

		//DATESAVED -- used to determine if the LRS State or the LMS suspend_data is newest
		if (gReturnedState.hasOwnProperty("dateSaved")) {
			dateSaved = gReturnedState.dateSaved;
		} // Need to do more than this... need to do comparison somewhere?
	} else {
		//SET DEFAULT VALUES NOT COVERED BY VARS FILE
		dateStarted = new Date();

		//INTRO - Terms and Video
		/*document.getElementById("closeBtn").style.display = "none";
		document.getElementById("acceptBtn").style.display = "inline-block";
		document.getElementsByClassName("terms_p")[0].innerText = defaultContent.TermsPrivacy.YouMustAccept;*/

		//COURSE ATTEMPTS...bAttemptCount
		//No LRS data means that this is the first attempt...
		bAttemptCount = 1;
		bSuspendData = 1;
		lrsCourseAttempt = bAttemptCount; // These should always be equal... unless I can find a way to get rid of one of them...
	}

	console.log('course is ready');
	console.log(termsViewed);
	console.log(videoViewed);
	courseReady = true; 

	getEOMState(); // Will call bSetState
}
//▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
//                                                  GET PORTAL DATA
//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
//*******************************************************************************************************
///                                          LRS VERSION                                              ///
//*******************************************************************************************************
function bLRSGetState(goNext) {
	var key = "PortalStatus";

	xapiGetStateConfig = {
		contentType: "application/json",
		agent: gUser,
		activity: getPortalActivity("portal"),
		callback: function (error, response) {
			if (error || response === null) {
				if (courseType !== "hioc") {
					// only go to the LMS version if this is NOT AICC
					bGetState(); // New enrollment --> Head to to LMS Version instead and set-up
					return;
				}
			} else {
				gReturnedState = response.contents;

				//DATE STARTED...
				if (gReturnedState.hasOwnProperty("dateStarted")) {
					dateStarted = gReturnedState.dateStarted;
				}
				// -*RESET*- DATE IF A NEW ATTEMPT (hybrid courses only)
				if (courseType.indexOf("hybrid") !== -1 && bSuspendData.toString() === "") {
					dateStarted = new Date();
				}

				//Terms of Use
				if (gReturnedState.hasOwnProperty("TermsAccepted")) {
					termsViewed = gReturnedState.TermsAccepted;
				}

				//Intro Video
				if (gReturnedState.hasOwnProperty("VideoViewed")) {
					videoViewed = gReturnedState.VideoViewed;
				}

				//Attempt Count(s)
				if (gReturnedState.hasOwnProperty("bAttemptCount")) {
					lrsCourseAttempt = gReturnedState.bAttemptCount;
					bAttemptCount = gReturnedState.bAttemptCount;
					if (course_settings.Portal_Setup.Course_Type.indexOf("hioc") === -1) {
						doLMSSetValue("cmi.suspend_data", gReturnedState.bAttemptCount);
					}
				}

				//Honesty Statements...
				if (gReturnedState.hasOwnProperty("honestyStatements")) {
					honestyStatements = gReturnedState.honestyStatements;
				}

				//Bookmarks...
				if (gReturnedState.hasOwnProperty("gBookmarks")) {
					gBookmarks = gReturnedState.gBookmarks;
				}

				//PAGE VIEWS...
				if (gReturnedState.hasOwnProperty("bPageViews")) {
					bPageViews = gReturnedState.bPageViews;
				}

				//lesson completions...
				if (gReturnedState.hasOwnProperty("bLessonCompletions")) {
					bLessonCompletions = gReturnedState.bLessonCompletions;
				}

				//EREADER...
				if (gReturnedState.hasOwnProperty("hasEreader")) {
					hasEreader = gReturnedState.hasEreader;
				}

				//ALLPGQUE - Inline questions...
				//if(gReturnedState.hasOwnProperty("allPgQue") && gReturnedState.allPgQue[3][0] !== ""){allPgQue = gReturnedState.allPgQue;}
				if (gReturnedState.hasOwnProperty("allPgQue")) {
					allPgQue = gReturnedState.allPgQue;
				}

			}

			// portal engine uses this to determine when 
			// the LRS state is ready. Won't load content
			// until this has been set to true.
			console.log('course is ready');
			console.log(termsViewed);
			console.log(videoViewed);
			courseReady = true;

			//More can be added here. Especially things that needs to happen after all the above has been set...

			if (goNext === true) {
				getLRSEOMState(); // --> proceed to the LRS EOM State, which will call bSetState (normal function)
			} else {
				getEOMState(); // if the Portal state didn't exist in suspend_data, go back to LMS version of functions since it should exist now
			}
		}
	};

	lrs.retrieveState(key, xapiGetStateConfig);
}

//▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
//                                         Intro Video/Terms of Use
//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
function bShowIntro() {

	doAlert("introVidTerms");
}

//▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
//                                                  GET EOM DATA
//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
//*******************************************************************************************************
///                                         LMS VERSION                                               ///
//*******************************************************************************************************
function getEOMState() {
	if (courseType === "hioc") {
		getLRSEOMState();
		return;
	}
	// var numberOfQuestions = Number();
	// var numberCorrect = []; //EOMnumCorrect
	var scoreArray = [];
	var qArray = [];
	// var finalNumerator = Number();

	var readyForScore = true;
	var gReturnedState;

	if (bExamData[0] === undefined || bExamData[0] === "") {
		//Only courses that are not ARA 440 or UND 386 should have moduleScores as an array
		if (courseNumber.indexOf("386") === -1 && courseNumber.indexOf("440") === -1) {
			//console.log(courseNumber);
			for (var c = 0; c < TOC.length; c++) {
				moduleScores[c] = [];
				moduleScores[c][0] = 0;
				moduleScores[c][1] = "---- - -- - --";
			}

			//doCircles();
			bSetState();
		}
	} else {
		//Start: ALL HYBRID COURSES USE THIS INFO...
		//Convert the saved data back to json from text
		if (typeof bExamData === "string") {
			gReturnedState = JSON.parse(bExamData);
		} else {
			gReturnedState = JSON.parse(bExamData[0]);
		}
		//console.log(gReturnedState);

		//COURSE STATUS
		lrsCourseStatus = gReturnedState.CourseStatus;
		eomAttemptCount = gReturnedState.CourseAttempt;
		bEOMAttempts = gReturnedState.EOMAttempts;
		bRemainingAttempts = gReturnedState.RemainingAttempts;
		//End: ALL HYBRID COURSES USE THIS INFO...

		//SPECIFIC to 386 and 440
		if (courseNumber.indexOf("386") !== -1 || courseNumber.indexOf("440") !== -1) {
			//Step one complete
			if (gReturnedState.EOMPassingScore[0] >= 70) {
				gAllowExam = false;

				// showEOC();

				// //save pass stuff
				// doLMSSetValue("cmi.core.score.raw", gReturnedState.EOMPassingScore);

				// var completedCourseStatement = {
				// 	type: "course",
				// 	verb: "completed",
				// 	activity: "http://adlnet.gov/expapi/activities/course",
				// 	objectID: "Course_Complete",
				// 	finalScore: gReturnedState.EOMPassingScore,
				// 	qCorrect: gReturnedState.EOMnumCorrect[0],
				// 	qTotal: gReturnedState.EOMnumQ[0]
				// };
				// LRSSend(completedCourseStatement);

				// doLMSSetValue("cmi.core.lesson_status", "passed");
				// doLMSCommit();

				if (doLMSGetValue("cmi.core.lesson_status") === "passed") {
					showEOC();
				}
				
			} else {
				if (lrsCourseStatus === "failed" && eomAttemptCount === bAttemptCount) {
					//console.log('fail block running...');
					//allowExam = false;
					//update the attempt count if failed
					bAttemptCount = bAttemptCount + 1;
					//console.log("bAttemptCount = " + bAttemptCount);

					//reset the terms and video
					termsViewed = false;
					videoViewed = false;
					
					//RESET EREADER...
					hasEreader = false;

					//Bookmarks... and exam Honesty Statements
					for (var i = 0; i < TOC.length; i++) {//TOC.length
						gBookmarks[i] = [];
						honestyStatements[i] = 0;
						for (var j = 0; j <= lessonCounts[i]; j++) {
							gBookmarks[i][j] = 1;
						}
					}
					
					//RESET EOMStatus
					var bExamDataReset = {
						"state": "EOMStatus",
						"timestamp": new Date(),
						"vForms": gReturnedState.hasOwnProperty("vForms") ? gReturnedState.vForms : "",
						"satForms": gReturnedState.hasOwnProperty("satForms") ? gReturnedState.satForms : "",
						"EOMAttempts": [],
						"EOMnumQ": [],
						"EOMnumCorrect": [],
						"EOMSuccess": [],
						"EOMPassingScore": [],
						"EOMCompletionD": [],
						"RemainingAttempts": [],
						"CourseAttempt": gReturnedState.CourseAttempt,
						"CourseStatus": "in progress",
						"EOMFailedAttemptnumCorrectSum": [],
						"EOMFailedAttemptnumQSum": []
					};

					bExamData = JSON.stringify(bExamDataReset);

					// var failScore = (gReturnedState.EOMFailedAttemptnumCorrectSum[0] / gReturnedState.EOMFailedAttemptnumQSum[0]) * 100;
					// console.log("failScore = " + failScore);

					// var failedCourseStatement = {
					// 	type: "course",
					// 	verb: "failed",
					// 	activity: "http://adlnet.gov/expapi/activities/course",
					// 	objectID: "Course_Failed",
					// 	finalScore: failScore,
					// 	qCorrect: gReturnedState.EOMnumCorrect[0],
					// 	qTotal: gReturnedState.EOMnumQ[0]
					// };

					// LRSSend(failedCourseStatement);

					// //save fail stuff
					// doLMSSetValue("cmi.suspend_data", bAttemptCount);
					bSetState();
					// doLMSSetValue("cmi.core.score.raw", Math.round(failScore));
					// doLMSSetValue("cmi.core.lesson_status", "failed");
					// doLMSCommit();
				}
			}
		} else {
			// ALL OTHER HYBRID COURSES

			//check to make sure that we have a number to use...
			for (var i = 0; i < TOC.length; i++) {
				// if (gReturnedState.EOMnumQ[i] === undefined || gReturnedState.EOMnumQ[i] === null) {
				// 	numberOfQuestions = null;
				// } else {
				// 	numberOfQuestions += gReturnedState.EOMnumQ[i];
				// 	numberCorrect[i] = gReturnedState.EOMnumCorrect[i];
				// }

				scoreArray[i] = gReturnedState.EOMPassingScore[i];
				qArray[i] = gReturnedState.EOMnumQ[i];

				// if ((gReturnedState.EOMPassingScore[i] && eomAttemptCount === bAttemptCount) || (gReturnedState.EOMPassingScore[i] && courseType === "hioc")) {
				if (gReturnedState.EOMPassingScore[i]) {
					//use the lrs data...
					moduleScores[i] = [gReturnedState.EOMPassingScore[i], gReturnedState.EOMCompletionD[i].split("T")[0]];
				} else {
					//or set the default...
					moduleScores[i] = [0, "---- - -- - --"];
					readyForScore = false;
				}
			}

			if (courseType === "hybrid") {
				// if (lrsCourseStatus === "failed" && eomAttemptCount === bAttemptCount) {
				if (lrsCourseStatus === "failed") {
					// for (var modExam = 0; modExam < TOC.length; modExam++) {
					// 	if (bEOMAttempts[modExam] === 2) {
					// 		if (isExamPage !== true) {
								showFAIL();
							// }
							// //Calculate a failing grade and set the course status to "failed"
							// var failScore = (gReturnedState.EOMFailedAttemptnumCorrectSum[modExam] / gReturnedState.EOMFailedAttemptnumQSum[modExam]) * 100;
							// //increment
							bAttemptCount = bAttemptCount + 1;

							//reset the terms and video
							termsViewed = false;
							videoViewed = false;

							//RESET EREADER...
							hasEreader = false;

							//Bookmarks... and exam Honesty Statements
							for (var i = 0; i < TOC.length; i++) {
								gBookmarks[i] = [];
								honestyStatements[i] = 0;
								for (var j = 0; j <= lessonCounts[i]; j++) {
									gBookmarks[i][j] = 1;
								}
							}

							//RESET EOMStatus
							var bExamDataReset = {
								"state": "EOMStatus",
								"timestamp": new Date(),
								"vForms": gReturnedState.hasOwnProperty("vForms") ? gReturnedState.vForms : "",
								"satForms": gReturnedState.hasOwnProperty("satForms") ? gReturnedState.satForms : "",
								"EOMAttempts": [],
								"EOMnumQ": [],
								"EOMnumCorrect": [],
								"EOMSuccess": [],
								"EOMPassingScore": [],
								"EOMCompletionD": [],
								"RemainingAttempts": [],
								"CourseAttempt": gReturnedState.CourseAttempt,
								"CourseStatus": "in progress",
								"EOMFailedAttemptnumCorrectSum": [],
								"EOMFailedAttemptnumQSum": []
							};
		
							bExamData = JSON.stringify(bExamDataReset);

							// var failedCourseStatement = {
							// 	type: "course",
							// 	verb: "failed",
							// 	activity: "http://adlnet.gov/expapi/activities/course",
							// 	objectID: "Course_Failed",
							// 	finalScore: failScore,
							// 	qCorrect: gReturnedState.EOMFailedAttemptnumCorrectSum[modExam],
							// 	qTotal: gReturnedState.EOMFailedAttemptnumQSum[modExam]
							// };

							// LRSSend(failedCourseStatement);
							bSetState();
							// doLMSSetValue("cmi.core.score.raw", Math.round(failScore));
							// doLMSSetValue("cmi.core.lesson_status", "failed");
							// doLMSCommit();
							// break;
						}
					}

					// 	/*********************************/
					// 	/*     IF ALL ARE PASSED         */
					// 	/*********************************/	
					if (courseType !== "hioc") {
						if (doLMSGetValue("cmi.core.lesson_status") === "passed") {
							showEOC();
						}
					} else {
						if (getAICCData("cmi.core.lesson_status") === "p") {
							showEOC();
						}
					}

			//If the course has already been completed...
			// if (completionstatus !== "completed" || completionstatus !== "passed" || completionstatus !== "c" || completionstatus !== "p") {
			// 	/*********************************/
			// 	/*     SCORM Scoring             */
			// 	/*********************************/
			// 	//PASSING SCORE
			// 	if (readyForScore === true) {
			// 		if (numberOfQuestions) {
			// 			for (var j = 0; j < TOC.length; j++) {
			// 				finalNumerator = finalNumerator + numberCorrect[j]; // add up all correct answers...
			// 			}

			// 			var finalWeightedScore = Math.round((finalNumerator / numberOfQuestions) * 100); // divide by the total number of questions...

			// 			if (finalWeightedScore >= 70) {
			// 				if (courseType !== "hioc") {
			// 					//SCORM
			// 					doLMSSetValue("cmi.core.score.raw", finalWeightedScore);
			// 					doLMSSetValue("cmi.core.lesson_status", "passed");
			// 					doLMSCommit();

			// 					if (doLMSGetValue("cmi.core.lesson_status") === "passed") {
			// 						showEOC();
			// 					} else {
			// 						doLMSSetValue("cmi.core.score.raw", finalWeightedScore);
			// 						doLMSSetValue("cmi.core.lesson_status", "passed");
			// 						doLMSCommit();
			// 					}
			// 				} else {
			// 					//AICC
			// 					setAICCData("cmi.core.score.raw", finalWeightedScore);
			// 					setAICCData("cmi.core.lesson_status", "p");
			// 					AICC_Save();

			// 					if (getAICCData("cmi.core.lesson_status") === "p") {
			// 						showEOC();
			// 					} else {
			// 						setAICCData("cmi.core.score.raw", finalWeightedScore);
			// 						setAICCData("cmi.core.lesson_status", "p");
			// 						AICC_Save();
			// 					}
			// 				}

			// 				//Check if the statement has already been sent...
			// 				LRSReturn(finalWeightedScore, finalNumerator, numberOfQuestions); // includes results
			// 			}
			// 		}
			// 	}
			// }

			if (courseType !== "pdf" || courseType !== "shortcourseA") {
				//CIRCLES...
				//doCircles();
			}
		}

		bSetState();
	}
}

//▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
//                                                  GET EOM DATA
//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
//*******************************************************************************************************
///                                         LRS VERSION                                               ///
//*******************************************************************************************************
function getLRSEOMState() {
	var gReturnedState;
	var key = "EOMStatus";

	// var numberOfQuestions = Number();
	// var numberCorrect = []; //EOMnumCorrect
	var scoreArray = [];
	var qArray = [];
	// var finalNumerator = Number();

	// create a config object for retrieving state, plus a callback function
	// http://rusticisoftware.github.io/TinCanJS/doc/api/latest/classes/TinCan.LRS.html#method_retrieveState
	xapiGetStateConfig = {
		contentType: "application/json",
		agent: gUser, // CURRENT USER AGENT
		activity: getPortalActivity("eom"),
		callback: function (error, response) {
			if (error || response === null) {
				if (courseNumber.indexOf("386") !== -1 || courseNumber.indexOf("440") !== -1) {
					//DO NOTHING FOR 386 or 440
					console.log(courseNumber);
				} else {
					//ALL OTHER HYBRID COURSES...
					//set default values for moduleScores array
					for (var c = 0; c < TOC.length; c++) {
						moduleScores[c] = [];
						moduleScores[c][0] = 0;
						moduleScores[c][1] = "---- - -- - --";
					}

					//doCircles();
					bSetState();
					return; //NOTHING AFTER THE XHR RESULTS, BUT ADDED TO BE CERTAIN
				}


			} else {
				var readyForScore = true;

				//get what I actually need from the exams...
				gReturnedState = response.contents;

				//COURSE STATUS
				lrsCourseStatus = gReturnedState.CourseStatus;
				eomAttemptCount = gReturnedState.CourseAttempt;
				bEOMAttempts = gReturnedState.EOMAttempts;

				// ONLY 386 AND 440
				if (courseNumber.indexOf("386") !== -1 || courseNumber.indexOf("440") !== -1) {
					//Step one complete
					if (gReturnedState.EOMPassingScore[0] >= 70) {
						gAllowExam = false;

						// showEOC();

						// //save pass stuff
						// doLMSSetValue("cmi.core.score.raw", gReturnedState.EOMPassingScore);

						// var completedCourseStatement = {
						// 	type: "course",
						// 	verb: "completed",
						// 	activity: "http://adlnet.gov/expapi/activities/course",
						// 	objectID: "Course_Complete",
						// 	finalScore: gReturnedState.EOMPassingScore,
						// 	qCorrect: gReturnedState.EOMnumCorrect[0],
						// 	qTotal: gReturnedState.EOMnumQ[0]
						// };
						// LRSSend(completedCourseStatement);

						// doLMSSetValue("cmi.core.lesson_status", "passed");
						// doLMSCommit();

						if (doLMSGetValue("cmi.core.lesson_status") === "passed") {
							showEOC();
						}

					} else {
						if (lrsCourseStatus === "failed" && eomAttemptCount === bAttemptCount) {
							allowExam = false;

							showFAIL();

							//update the attempt count if failed
							bAttemptCount = bAttemptCount + 1;
							//console.log("bAttemptCount = " + bAttemptCount);

							//reset the terms and video
							termsViewed = false;
							videoViewed = false;

							//RESET EREADER...
							hasEreader = false;

							//Bookmarks... and exam Honesty Statements
							for (var i = 0; i < TOC.length; i++) {//TOC.length
								gBookmarks[i] = [];
								honestyStatements[i] = 0;
								for (var j = 0; j <= lessonCounts[i]; j++) {
									gBookmarks[i][j] = 1;
								}
							}

							//RESET EOMStatus
							var bExamDataReset = {
								"state": "EOMStatus",
								"timestamp": new Date(),
								"vForms": gReturnedState.vForms,
								"satForms": gReturnedState.satForms,
								"EOMAttempts": [],
								"EOMnumQ": [],
								"EOMnumCorrect": [],
								"EOMSuccess": [],
								"EOMPassingScore": [],
								"EOMCompletionD": [],
								"CourseAttempt": gReturnedState.CourseAttempt,
								"CourseStatus": "in progress",
								"EOMFailedAttemptnumCorrectSum": [],
								"EOMFailedAttemptnumQSum": []
							};

							bExamData = JSON.stringify(bExamDataReset);
							// var failScore = (gReturnedState.EOMFailedAttemptnumCorrectSum[0] / gReturnedState.EOMFailedAttemptnumQSum[0]) * 100;
							// console.log("failScore = " + failScore);

							// var failedCourseStatement = {
							// 	type: "course",
							// 	verb: "failed",
							// 	activity: "http://adlnet.gov/expapi/activities/course",
							// 	objectID: "Course_Failed",
							// 	finalScore: failScore,
							// 	qCorrect: gReturnedState.EOMnumCorrect[0],
							// 	qTotal: gReturnedState.EOMnumQ[0]
							// };

							// LRSSend(failedCourseStatement);

							// //save fail stuff
							// doLMSSetValue("cmi.suspend_data", bAttemptCount);
							bSetState();
							// doLMSSetValue("cmi.core.score.raw", Math.round(failScore));
							// doLMSSetValue("cmi.core.lesson_status", "failed");
							// doLMSCommit();
						}
					}


				} else {
					//OTHER HYBRID COURSES...
					//check to make sure that we have a number to use...
					for (var i = 0; i < TOC.length; i++) {
						// if (gReturnedState.EOMnumQ[i] === undefined || gReturnedState.EOMnumQ[i] === null) {
						// 	numberOfQuestions = null;
						// } else {
						// 	numberOfQuestions += gReturnedState.EOMnumQ[i];
						// 	numberCorrect[i] = gReturnedState.EOMnumCorrect[i];
						// }

						scoreArray[i] = gReturnedState.EOMPassingScore[i];
						qArray[i] = gReturnedState.EOMnumQ[i];

						if (gReturnedState.EOMPassingScore[i] && eomAttemptCount === bAttemptCount || gReturnedState.EOMPassingScore[i] && courseType === "hioc") {
							//use the lrs data...
							moduleScores[i] = [gReturnedState.EOMPassingScore[i], gReturnedState.EOMCompletionD[i].split("T")[0]];
						} else {
							//or set the default...
							moduleScores[i] = [0, "---- - -- - --"];
							readyForScore = false;
						}
					}

					if (courseType === "hybrid") {
						if (lrsCourseStatus === "failed" && eomAttemptCount === bAttemptCount) {
							// for (var modExam = 0; modExam < TOC.length; modExam++) {
							// 	if (bEOMAttempts[modExam] === 2) {
							// 		if (isExamPage !== true) {
							showFAIL();
									// }
									// //Calculate a failing grade and set the course status to "failed"
									// var failScore = (gReturnedState.EOMFailedAttemptnumCorrectSum[modExam] / gReturnedState.EOMFailedAttemptnumQSum[modExam]) * 100;
									// //increment
							bAttemptCount = bAttemptCount + 1;

							//reset the terms and video
							termsViewed = false;
							videoViewed = false;

							//RESET EREADER...
							hasEreader = false;

							//Bookmarks... and exam Honesty Statements
							for (var i = 0; i < TOC.length; i++) {
								gBookmarks[i] = [];
								honestyStatements[i] = 0;
								for (var j = 0; j <= lessonCounts[i]; j++) {
									gBookmarks[i][j] = 1;
								}
							}

							//RESET EOMStatus
							var bExamDataReset = {
								"state": "EOMStatus",
								"timestamp": new Date(),
								"vForms": gReturnedState.vForms,
								"satForms": gReturnedState.satForms,
								"EOMAttempts": [],
								"EOMnumQ": [],
								"EOMnumCorrect": [],
								"EOMSuccess": [],
								"EOMPassingScore": [],
								"EOMCompletionD": [],
								"CourseAttempt": gReturnedState.CourseAttempt,
								"CourseStatus": "in progress",
								"EOMFailedAttemptnumCorrectSum": [],
								"EOMFailedAttemptnumQSum": []
							};

							bExamData = JSON.stringify(bExamDataReset);

							// var failedCourseStatement = {
							// 	type: "course",
							// 	verb: "failed",
							// 	activity: "http://adlnet.gov/expapi/activities/course",
							// 	objectID: "Course_Failed",
							// 	finalScore: failScore,
							// 	qCorrect: gReturnedState.EOMnumCorrect[0],
							// 	qTotal: gReturnedState.EOMnumQ[0]
							// };

							// LRSSend(failedCourseStatement);
							bSetState();
							// doLMSSetValue("cmi.core.score.raw", Math.round(failScore));
							// doLMSSetValue("cmi.core.lesson_status", "failed");
							// doLMSCommit();
							// break;
						}
					}

					// 	/*********************************/
					// 	/*     IF ALL ARE PASSED         */
					// 	/*********************************/	
					if (courseType !== "hioc") {
						if (doLMSGetValue("cmi.core.lesson_status") === "passed") {
							showEOC();
						}
					} else {
						if (getAICCData("cmi.core.lesson_status") === "p") {
							showEOC();
						}
					}

					//If the course has already been completed...
					// if (completionstatus !== "completed" || completionstatus !== "passed" || completionstatus !== "c" || completionstatus !== "p") {
					// 	/*********************************/
					// 	/*     SCORM Scoring             */
					// 	/*********************************/
					// 	//PASSING SCORE
					// 	if (readyForScore === true) {
					// 		if (numberOfQuestions) {
					// 			for (var j = 0; j < TOC.length; j++) {
					// 				finalNumerator = finalNumerator + numberCorrect[j]; // add up all correct answers...
					// 			}

					// 			var finalWeightedScore = Math.round((finalNumerator / numberOfQuestions) * 100); // divide by the total number of questions...

					// 			if (finalWeightedScore >= 70) {
					// 				if (courseType !== "hioc") {
					// 					//SCORM
					// 					doLMSSetValue("cmi.core.score.raw", finalWeightedScore);
					// 					doLMSSetValue("cmi.core.lesson_status", "passed");
					// 					doLMSCommit();

					// 					if (doLMSGetValue("cmi.core.lesson_status") === "passed") {
					// 						showEOC();
					// 					} else {
					// 						doLMSSetValue("cmi.core.score.raw", finalWeightedScore);
					// 						doLMSSetValue("cmi.core.lesson_status", "passed");
					// 						doLMSCommit();
					// 					}
					// 				} else {
					// 					//AICC
					// 					setAICCData("cmi.core.score.raw", finalWeightedScore);
					// 					setAICCData("cmi.core.lesson_status", "p");
					// 					AICC_Save();

					// 					if (getAICCData("cmi.core.lesson_status") === "p") {
					// 						showEOC();
					// 					} else {
					// 						setAICCData("cmi.core.score.raw", finalWeightedScore);
					// 						setAICCData("cmi.core.lesson_status", "p");
					// 						AICC_Save();
					// 					}
					// 				}

					// 				//Check if the statement has already been sent...
					// 				LRSReturn(finalWeightedScore, finalNumerator, numberOfQuestions);
					// 			}
					// 		}
					// 		//}else{
					// 		//console.log("The score was NOT calculated...");
					// 	}
					// }

					if (courseType !== "pdf" || courseType !== "shortcourseA") {
						//CIRCLES...
						//doCircles();
					}

					//bExamData = JSON.stringify(response.contents);
					bExamData[0] = JSON.stringify(response.contents);
				}
			}
			bSetState();
		}
	};

	//retrieve the state
	lrs.retrieveState(key, xapiGetStateConfig);
}

//STATEMENTS RELATED CODE STARTS HERE...
var allVerbs = {
	accepted: {
		id: "http://activitystrea.ms/schema/1.0/accept",
		display: { "en-US": "accepted" }
	},
	answered: {
		id: "http://adlnet.gov/expapi/verbs/answered",
		display: { "en-US": "answered" }
	},
	completed: {
		id: "http://adlnet.gov/expapi/verbs/completed",
		display: { "en-US": "completed" }
	},
	confirmed: {
		id: "http://activitystrea.ms/schema/1.0/confirm",
		display: { "en-US": "confirmed" }
	},
	downloaded: {
		id: "http://id.tincanapi.com/verb/downloaded",
		display: { "en-US": "downloaded" }
	},
	experienced: {
		id: "http://adlnet.gov/expapi/verbs/experienced",
		display: { "en-US": "experienced" }
	},
	failed: {
		id: "http://adlnet.gov/expapi/verbs/failed",
		display: { "en-US": "failed" }
	},
	focused: {
		id: "http://adlnet.gov/expapi/verbs/focused",
		display: { "en-US": "focused" }
	},
	interacted: {
		id: "http://adlnet.gov/expapi/verbs/interacted",
		display: { "en-US": "interacted" }
	},
	paused: {
		id: "http://id.tincanapi.com/verb/paused",
		display: { "en-US": "paused" }
	},
	played: {
		id: "http://activitystrea.ms/schema/1.0/play",
		display: { "en-US": "played" }
	},
	preferred: {
		id: "http://adlnet.gov/expapi/verbs/preferred",
		display: { "en-US": "preferred" }
	},
	pressed: {
		id: "http://future-learning.info/xAPI/verb/pressed",
		display: { "en-US": "pressed" }
	},
	released: {
		id: "http://future-learning.info/xAPI/verb/released",
		display: { "en-US": "released" }
	},
	resumed: {
		id: "http://adlnet.gov/expapi/verbs/resumed",
		display: { "en-US": "resumed" }
	},
	scored: {
		id: "http://adlnet.gov/expapi/verbs/scored",
		display: { "en-US": "scored" }
	},
	skipped: {
		id: "http://id.tincanapi.com/verb/skipped",
		display: { "en-US": "skipped" }
	},
	started: {
		id: "http://activitystrea.ms/schema/1.0/start",
		display: { "en-US": "started" }
	},
	suspended: {
		id: "http://adlnet.gov/expapi/verbs/suspended",
		display: { "en-US": "suspended" }
	},
	unlocked: {
		id: "https://w3id.org/xapi/seriousgames/verbs/unlocked",
		display: { "en-US": "unlocked" }
	},
	viewed: {
		id: "http://id.tincanapi.com/verb/viewed",
		display: { "en-US": "viewed" }
	},
	voided: {
		id: "http://adlnet.gov/expapi/verbs/voided",
		display: { "en-US": "voided" }
	}
};

function LRSSend(xapiObject) {
	if (isXAPI) {
		var localID = getPortalActivity("portal");
		var xapiExtensions;

		switch (xapiObject.type) {
			case "video":
			case "audio":
			case "stopwatch":
				xapiExtensions = {
					"http://id.tincanapi.com/extension/starting-point": xapiObject.extensions.startTime,
					"http://id.tincanapi.com/extension/ending-point": xapiObject.extensions.stopTime,
					"http://id.tincanapi.com/extension/duration": xapiObject.extensions.duration
				};
				break;

			case "inlinequestion":
				if (courseType.indexOf("shortcourseA") === -1) {
					xapiExtensions = {
						"http://id.learning.loma.org/extensions/inline-response-student": xapiObject.extensions.studentResponse,
						"http://id.learning.loma.org/extensions/inline-response-correct": xapiObject.extensions.correctResponse
					};
				}
				break;

			case "inlinefield":
				xapiExtensions = {
					"http://id.tincanapi.com/extension/feedback": xapiObject.extensions.studentFeedback
				};
				break;

			case "accordion":
				xapiExtensions = {
					"http://id.learning.loma.org/extensions/tabclicked": xapiObject.extensions.tabsclicked,
					"http://id.learning.loma.org/extensions/tabstotal": xapiObject.extensions.tabstotal
				};
				break;

			case "carousel":
			case "speechbubble":
				xapiExtensions = {
					"http://id.learning.loma.org/extensions/slideclicked": xapiObject.extensions.slideclicked,
					"http://id.learning.loma.org/extensions/slidesstotal": xapiObject.extensions.slidestotal
				};
				break;

			case "browser":
				xapiExtensions = {
					"http://id.tincanapi.com/extension/browser-info": xapiObject.extensions
				};
				break;

			case "survey":
				xapiExtensions = {
					"http://id.tincanapi.com/extension/feedback": xapiObject.extensions
				};
				break;

			case "videofeedback":
				xapiExtensions = {
					"http://id.tincanapi.com/extension/feedback": xapiObject.extensions
				};
				break;

			default:
				xapiExtensions = {};
		}


		var object_id;
		var context_id;

		//Looking for "module" and "lesson"
		if (isExamPrep !== true) {
			if (xapiObject.page && xapiObject.lesson && xapiObject.module) {
				object_id = localID.id + "/M" + xapiObject.module + "/L" + xapiObject.lesson + "/" + "P" + xapiObject.page + "/" + xapiObject.objectID;
				context_id = localID.id + "/M" + xapiObject.module + "/L" + xapiObject.lesson + "/" + "P" + xapiObject.page + "/";
			} else if (!xapiObject.page && xapiObject.lesson && xapiObject.module) {
				object_id = localID.id + "/M" + xapiObject.module + "/L" + xapiObject.lesson + "/" + xapiObject.objectID;
				context_id = localID.id + "/M" + xapiObject.module + "/L" + xapiObject.lesson + "/";
			} else if (!xapiObject.page && !xapiObject.lesson && xapiObject.module) {
				object_id = localID.id + "/M" + xapiObject.module + "/" + xapiObject.objectID;
				context_id = localID.id + "/M" + xapiObject.module + "/";
			} else if (!xapiObject.page && !xapiObject.lesson && !xapiObject.module) {
				object_id = localID.id + "/" + xapiObject.objectID;
				context_id = localID.id + "/";
			}
		} else {
			object_id = localID.id + "/" + xapiObject.objectID;
			context_id = localID.id + "/" + xapiObject.objectID;
		}


		var preppedStatement = {
			actor: gUser,

			verb: allVerbs[xapiObject.verb],

			object: {
				id: object_id,
				objectType: "Activity",
				definition: {
					name: {
						"en-US": xapiObject.objectID // id should be ok here... aka a short description
					},
					description: {
						"en-US": xapiObject.type // need to figure out a way to use this as a long description...
					},
					type: xapiObject.activity
				}
			},
			context: {
				language: strTestLocaleId,
				contextActivities: {
					parent: [
						{
							definition: {
								name: {
									"en-US": courseNumber
								},
								description: {
									//"en-US": courseName
									"en-US": courseGUID.replace(/ /g, "_")
								},
								type: xapiObject.objActivity
							},
							id: context_id,
							objectType: "Activity"
						}
					]
				},
				extensions: xapiExtensions
				//{
				//just about anything seems to be able to go here...
				//research extensions... need valid uri here
				//}
			}
		};

		//ONLY FOR CORUSE COMPLETION STATEMENTS (That have a score)!!!
		// if (xapiObject.type === "course") {
		// 	preppedStatement.result = {
		// 		score: {
		// 			scaled: xapiObject.finalScore * 0.01,
		// 			raw: xapiObject.qCorrect,
		// 			min: 0,
		// 			max: xapiObject.qTotal
		// 		},
		// 		success: true,
		// 		completion: true
		// 	};
		// }

		//the completed statement through a new TinCan object...
		var statement = new TinCan.Statement(preppedStatement);

		//Send the constructed statement/object...
		lrs.saveStatement(statement, {
			callback: function (err, xhr) {
				if (err !== null) {
					if (xhr !== null) {
						//LogRocket.captureException(err);
						console.log("Failed to save statement: " + xhr.responseText + " (" + xhr.status + ")");
						// TODO: do something with error, didn't save statement
						return;
					}
					console.log("Failed to save statement: " + err);
					// TODO: do something with error, didn't save statement
					return;
				}
				// TOOO: do something with success... can be ignored or used to do more
				//console.log("Statement saved");
			}
		});
		//////////////////////////////////////////
	} //end if...
}

//Specifically lookking for course completion, but can be modified to return other statements...
function LRSReturn(finalScore, qCorrect, qTotal) {
	var activityID = getPortalActivity("portal").id + "/Course_Complete";
	var thisVerb = allVerbs.completed.id;

	if (isXAPI) {
		lrs.queryStatements({
			params: {
				verb: new TinCan.Verb({
					id: thisVerb
				}),

				agent: gUser,

				activity: new TinCan.Activity({
					id: activityID
				}),
				related_activities: true //related_activities will grab all activities related to this
			},
			callback: function (err, sr) {
				if (err !== null) {
					console.log("Failed to query statements: " + err);
					// TODO: do something with error, didn't get statements
					return;
				} else {
					// TODO: do something with returned statements in sr.statements

					//Send the Course_Complete statement if it hasn't been sent before -- should only be sent one time
					if (!sr.statements[0]) {
						//console.log("Is this running?");
						var completedCourseStatement = {
							type: "course",
							verb: "completed",
							activity: "http://adlnet.gov/expapi/activities/course",
							objectID: "Course_Complete",
							finalScore: finalScore,
							qCorrect: qCorrect,
							qTotal: qTotal
						};
						LRSSend(completedCourseStatement);
					}
				}

				if (sr.more !== null) {
					// TODO: additional page(s) of statements should be fetched
				}
			}
		});
	}
}

/*********************************/
/*     General Functions         */
/*********************************/
function handleError(msg) {
	alert(msg);
}

//used in most, if not all, of the lrs functions...
function getHostname() {
	var hname = window.location.hostname;
	var hprotocol = window.location.protocol;
	var retVal;

	//Forcing the retVal to stay as "http" 2019-07-05
	if (hname) {
		if (document.location.href.indexOf("ll-content.ccedge.cn") !== -1) {
			retVal = 'http://ll-content.ccnetworks.cn/';
		} else {
			retVal = 'http://' + hname + '/';
		}
	} else {
		retVal = 'http://stagelearningloma.mksi-lms.net/';
	}

	//console.log("retVal = " + retVal);

	return retVal;
}