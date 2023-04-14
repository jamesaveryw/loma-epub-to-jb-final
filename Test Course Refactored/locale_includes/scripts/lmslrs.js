const theProtocol = window.location.protocol;
const chinaURL = "ll-content.ccnetworks.cn/HIOS/Prod/";
const usaURL = "services.loma.org/HIOS/Dev/";
const courseFolder = "ACS101_Refactor"; //"LocalePicker/ACS101_2020"; (testing)

let studentLocale; // China/not-China
let useSCORMCloud = false;
let useLOMAProd = false;
let useLOMATest = false;
let useChinaCache = false;
let LMSIsInitialized;

//LMS Vars...
let lmsConnected;
let g_stillConnected;
let bIgnore301 = true;
let completionstatus;
let bStudentName = "";
let studentnamefinal = "";
let sID;

//LRS Vars...
let lrs;
let gUser;
let gUser_old;
let courseGUID;
let lrsActor;
let theLRSerror;

//State object is defined in setState
let xapiSaveStateConfig;
let xapiGetStateConfig;
let gReturnedState;

const strTestLocaleId = "en-US";

/*********************************/
/*     SCORM Initialization      */
/*********************************/
function initCourse(){

	loadPage();

	//GET THE STUDENT NAME
	bStudentName = getAICCData("cmi.core.student_name"); //AICC

	//STUDENT NAME
	//DISPLAY THE STUDENT'S FIRST NAME
	if (bStudentName !== ""){
		//display the username: first name + last name
		let fullname = bStudentName.split(","); 
		//using substr to remove the extra space before the first name...
		studentnamefinal = fullname[1].substr(1,fullname[1].length - 1) + " " + fullname[0];
		sFirstname = fullname[1];
	}

	lrsInitialize();
}

function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    let regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    let results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

//xAPI Initialization...
function lrsInitialize() {
	let student_and_course = getUrlParameter("AICC_SID");
	let sacArray = student_and_course.split("|");
	lrsActor =  sacArray[0];
	courseGUID = sacArray[1];
	
	if(sacArray[1] === undefined || sacArray[1] === ""){
		lrsActor =  getAICCData("cmi.core.student_id");
		//courseGUID = course_settings.Portal_Setup.Course_Name;
		courseGUID = "localetest";
	}
	
	// creating user 
	gUser = new TinCan.Agent({
		name: bStudentName, //studentnamefinal,
		"account": {
			name: lrsActor, // GUID or SCORM ID			
			"homePage": getHostname() //"homePage": "http://learning.loma.org/"
		}
	});

	
    // Determine the proper LRS to report to...
    let bHostName = window.location.hostname;
    let bHostProtocol = window.location.protocol;

	//////////////////////////////////////////////////////////////////
	//USING THE LOCATION OF THE FILES TO DETERMINE THE LRS USED NOW///
	//////////////////////////////////////////////////////////////////
	var filelocation = document.location.href;
	if(bHostProtocol.indexOf("file:") !== -1){useSCORMCloud = true;} // DESKTOP
	if(filelocation.indexOf("/Dev/") !== -1 || filelocation.indexOf("stage") !== -1){useLOMATest = true} //STAGING -- for final testing
	//if(filelocation.indexOf("/Dev/") !== -1 || filelocation.indexOf("stage") !== -1){useSCORMCloud = true} //STAGING -- for pretesting
	if(filelocation.indexOf("/Prod/") !== -1 || filelocation.indexOf("learning.loma.org") !== -1){useLOMAProd = true} //PRODUCTION
	//if(filelocation.indexOf("/chinacache/") !== -1){useChinaCache = true} // CHINACACHE -- PRODUCTION-CHINA STUDENTS ONLY
	if(filelocation.indexOf("ll-content.ccnetworks.cn") !== -1){useChinaCache = true} // CHINACACHE -- PRODUCTION-CHINA STUDENTS ONLY
	if(useChinaCache === true){useSCORMCloud = false; useLOMATest = false; useLOMAProd = false;} //make sure all others are false if useChinaCache is true..
	if(!useSCORMCloud && !useLOMATest && !useLOMAProd && !useChinaCache){useLOMAProd = true} // DEFAULT to LOMA PRODUCTION
	

	//creating LRS Object
	if(useSCORMCloud){
		//SCORM Cloud (Brian's Account) /////////////////////////////////////////////
		try {
			lrs = new TinCan.LRS(
				{
					endpoint: "https://cloud.scorm.com/tc/OMLFPP6SMA/sandbox/",
					username: "OMLFPP6SMA",
					password: "lkdanivr15epQNqVhLdCDFlHufFx2P6apO8zWDdU",
					allowFail: false
				}
			);
		} catch (ex) {
			console.log("Failed to setup LRS object: " + ex);
		}

	}else if(useChinaCache){
		//ChinaCache Production ///////////////////////////////////////////////////////
		try {
			lrs = new TinCan.LRS(
				{
					endpoint: "https://lrs-hk2.azurefd.net/rst/TCAPI/default/",
					username: "ap-mgmt",
					password: "ap-mgmt-LOM@-PWD",
					allowFail: false
				}
			);
		} catch (ex) {
			console.log("Failed to setup LRS object: " + ex);
		}

	}else if(useLOMAProd){
		//LOMA's SCORM ENGINE///////////////////////////////////////////////////////
		try {
			lrs = new TinCan.LRS(
				{
					//endpoint: "https://LRS.loma.org/ScormEngineInterface/TCAPI/default/",
					//endpoint: "http://38.103.3.169/ScormEngineInterface/TCAPI/default/",
					endpoint: "https://services.loma.org/us-lrs/ScormEngineInterface/TCAPI/default/",// NEW ENDPOINT!!!
					username: "ap-mgmt",
					password: "ap-mgmt-LOM@-PWD",
					allowFail: false
				}
			);
		} catch (ex) {
			console.log("Failed to setup LRS object: " + ex);
		}
		
	}else if (useLOMATest){ //CAN ONLY BE USED ON INTERNAL LLG NETWORKS
		//LOMA's SCORM ENGINE///////////////////////////////////////////////////////
		try {
			lrs = new TinCan.LRS(
				{
					endpoint: "https://services.loma.org/test/lrs/ScormEngineInterface/TCAPI/default/", //External Testing
					//endpoint: "https://devlrs.loma.org/ScormEngineInterface/TCAPI/default/", // internal testing
					username: "ap-mgmt",
					password: "ap-mgmt-password",
					allowFail: false
				}
			);
		} catch (ex) {
			console.log("Failed to setup LRS object: " + ex);
		}
	}

	//Get the state objects...
	//bGetLocaleState();
	bGetCourseState();
}

//Used by set/get state functions...
function getPortalActivity(theactivity){
	let stateActivity;
	let lrsCourse;
	let hname = getHostname();
	
	if(theactivity === "portal"){
		lrsCourse = hname + strTestLocaleId + '/' + courseGUID.replace(/ /g, '_');
		stateActivity = {"id": lrsCourse};

	}else if(theactivity === "eom"){
		lrsCourse = hname + 'activities/assessments/' + strTestLocaleId + '/' + courseGUID.replace(/ /g, '_');
		stateActivity = {"id": lrsCourse};
	}
	
	return stateActivity;
}

//Specific to the main portal
function bSetLocaleState(){
	const key = 'localeState';

	xapiSaveStateConfig = {
		contentType: "application/json",
		agent: gUser,
		activity: getPortalActivity("portal"),
		callback: function(error, response) {
			if(error !== null){
				//LogRocket.captureException(error); //additional log rocket tracking if needed
				//alert(course_settings.Portal_Setup.Alerts.LRSError);// #1 - Original alert
				
				//Final - only calls alert message in interface. All information will be in generated email.
				if(response.status !== "0" || response.status !== 0){
					theLRSerror = response;
					console.log(theLRSerror);
					//doAlert("notconnected");
				}
			}
		}
	};
    
    let gUserState;
	// creating a state object...

	gUserState = {
		studentLocale: studentLocale
	};

	lrs.saveState(key, gUserState, xapiSaveStateConfig);
}

function bGetCourseState(){
	var key = 'PortalStatus';
	
	xapiGetStateConfig = {
		contentType: "application/json",
		agent: gUser,
		activity: getPortalActivity("portal"),
		callback: function(error, response) {
			if(error || response === null){
				// if there's no progress data (404), then look for the locale data
				bGetLocaleState();
			}else{
				//if there's progress data on the English server, then set the locale to "notchina" and load the course
				newLOC("notchina");
			}			
		}
	};

	lrs.retrieveState(key, xapiGetStateConfig);
}

function bGetLocaleState(){
	const key = 'localeState';
	
	xapiGetStateConfig = {
		contentType: "application/json",
		agent: gUser,
		activity: getPortalActivity("portal"),
		callback: function(error, response) {
			if(error || response === null){
				console.log("response was error or null");
				displayInterface();
				return;
			}else{
				gReturnedState = response.contents;
				console.log("response was" + JSON.stringify(gReturnedState));

				if(gReturnedState.hasOwnProperty("studentLocale")){
					studentLocale = gReturnedState.studentLocale;
				}else{
					studentLocale = "";
				}
			}

			//More can be added here. Especially things that need to happen after all the above has been set...

			if(studentLocale !== ""){
				newLOC(studentLocale);
			}else{
				displayInterface();
			}
		}
	};

	lrs.retrieveState(key, xapiGetStateConfig);
}

/*********************************/
/*     General Functions         */
/*********************************/
function handleError(msg){
   alert(msg);
}

//used in most, if not all, of the lrs functions...
function getHostname() {
	let hname = window.location.hostname;
	let hprotocol = window.location.protocol;
	let retVal;
	
	//Forcing the retVal to stay as "http" 2019-07-05
	if (hname) {
		//if (hprotocol) {
			//retVal = hprotocol + '//' + hname + '/';
			retVal = 'http://' + hname + '/';
		//} else {
		//	retVal = 'http://' + hname + '/';
		//}
	} else {
		retVal = 'http://stagelearningloma.mksi-lms.net/';
		//retVal = 'http://learning.loma.org/';
	}
	return retVal;
}

/*********************************/
/*    Country List Functions     */
/*********************************/
function displayInterface(){
	//Hide the loading notice
	document.getElementById("patience").style.display = "none";
	//Show instructions...
	document.getElementById("instructions").style.display = "block";
	

	//if screen is smaller than 1200, show the lsit of countries clear the map html...
	if(window.innerWidth < 1025){
		//Hide the interface unless it is needed...
		document.getElementById("courseRegionMap").innerHTML = "";
		document.getElementById("courseRegionMap").style.display = "none";
		document.getElementById("countryList").style.display = "block";		

		//create the list ONLY if it doesn't exist...
		if(document.getElementById("listed").innerHTML === ""){
			let countrieshtml = "";
			for (let j = 0; j < countries.length; j++){
				countrieshtml += `<li id="${countries[j].countrycode}" tabindex="0"><img src="locale_includes/images/flags/${countries[j].countrycode}.png">${countries[j].name}</li>`;
				if(j === 2){
					countrieshtml += "<hr>";
				}
			}
			//apply it to where it lives...
			document.getElementById("listed").innerHTML = countrieshtml;		
		}

		$('#listed li').on("click keydown", function(e){
			if (e && e.type == 'click' || e.keyCode == 13) {
				switch (e.target.id){
					case "cn":   
						studentLocale = "china";
						break;
			
					default:
						studentLocale = "notchina";
						break;
				}
				newLOC(studentLocale);
			}
		});

	}else{
		//If the screen is larger than 1200px, show the map and clear the countryList html
		//Hide the interface unless it is needed...
		document.getElementById("listed").innerHTML = "";
		document.getElementById("courseRegionMap").style.display = "block";
		document.getElementById("countryList").style.display = "none";

		let maphtml = `
		<div class="outline">
			<div class="region1">
				<img id="globe2" tabindex="0" src="locale_includes/images/map/GlobalMap_02.png" alt="North America">
				<img id="globe10" tabindex="0" src="locale_includes/images/map/GlobalMap_10.png" alt="Mexico, Central America, South America">
			</div>
			<div class="region2"><img id="globe3" tabindex="0" src="locale_includes/images/map/GlobalMap_03.png" alt="Europe, Africa, Middle East, Russia"></div>
			<div class="region3">
				<img id="globe4" tabindex="-1" src="locale_includes/images/map/GlobalMap_04.png" alt="Europe, Africa, Middle East, Russia">
				<img id="globe6" tabindex="0" src="locale_includes/images/map/GlobalMap_06.png" alt="China">
				<img id="globe8" tabindex="0" src="locale_includes/images/map/GlobalMap_08.png" alt="Southeast Asia, Australia, Japan">
			</div>
			<div class="region4">
				<img id="globe5" tabindex="-1" src="locale_includes/images/map/GlobalMap_05.png" alt="Europe, Africa, Middle East, Russia">
				<img id="globe7" tabindex="-1" src="locale_includes/images/map/GlobalMap_07.png" alt="Southeast Asia, Australia, Japan">
				<img id="globe9" tabindex="-1" src="locale_includes/images/map/GlobalMap_09.png" alt="Southeast Asia, Australia, Japan">
			</div>
		</div>`;

		document.getElementById("courseRegionMap").innerHTML = maphtml;

		//---------------------------------------------------------------------------\\
		//-------------------------MAP MOUSE EVENTS----------------------------------\\
		//---------------------------------------------------------------------------\\
		//NORTH AMERICA
		$("#globe2").on("mouseover focus", function(){
			document.getElementById("globe2").src = "locale_includes/images/map/hover/GlobalMap_02_A.png";
		});
		$("#globe2").on("mouseout blur", function(){
			document.getElementById("globe2").src = "locale_includes/images/map/GlobalMap_02.png";
		});
		$("#globe2").on("click keydown", function(e){
			if (e && e.type == 'click' || e.keyCode == 13) {
				studentLocale = "notchina";
				newLOC(studentLocale);
			}
		});
		//SOUTH AND CENTRAL AMERICA
		$("#globe10").on("mouseover focus", function(){
			document.getElementById("globe2").src = "locale_includes/images/map/hover/GlobalMap_02_B.png";
			document.getElementById("globe10").src = "locale_includes/images/map/hover/GlobalMap_10.png";
		});
		$("#globe10").on("mouseout blur", function(){
			document.getElementById("globe2").src = "locale_includes/images/map/GlobalMap_02.png";
			document.getElementById("globe10").src = "locale_includes/images/map/GlobalMap_10.png"
		});
		$("#globe10").on("click keydown", function(e){
			if (e && e.type == 'click' || e.keyCode == 13) {
				studentLocale = "notchina";
				newLOC(studentLocale);
			}
		});
		//AFRICA, EUROPE, MIDDLE EAST, RUSSIA
		$("#globe3, #globe4, #globe5").on("mouseover focus", function(){
			document.getElementById("globe3").src = "locale_includes/images/map/hover/GlobalMap_03.png";
			document.getElementById("globe4").src = "locale_includes/images/map/hover/GlobalMap_04.png";
			document.getElementById("globe5").src = "locale_includes/images/map/hover/GlobalMap_05.png";
			document.getElementById("globe6").src = "locale_includes/images/map/hover/GlobalMap_06.png";
			document.getElementById("globe7").src = "locale_includes/images/map/hover/GlobalMap_07.png";
			document.getElementById("globe8").src = "locale_includes/images/map/hover/GlobalMap_08.png";
		});
		$("#globe3, #globe4, #globe5").on("mouseout blur", function(){
			document.getElementById("globe3").src = "locale_includes/images/map/GlobalMap_03.png";
			document.getElementById("globe4").src = "locale_includes/images/map/GlobalMap_04.png";
			document.getElementById("globe5").src = "locale_includes/images/map/GlobalMap_05.png";
			document.getElementById("globe6").src = "locale_includes/images/map/GlobalMap_06.png";
			document.getElementById("globe7").src = "locale_includes/images/map/GlobalMap_07.png";
			document.getElementById("globe8").src = "locale_includes/images/map/GlobalMap_08.png";
		});
		$("#globe3, #globe4, #globe5").on("click keydown", function(e){
			if (e && e.type == 'click' || e.keyCode == 13) {
				studentLocale = "notchina";
				newLOC(studentLocale);
			}
		});
		//CHINA
		$("#globe6").on("mouseover focus", function(){
			document.getElementById("globe4").src = "locale_includes/images/map/hover/GlobalMap_04_ZH.png";
			document.getElementById("globe5").src = "locale_includes/images/map/hover/GlobalMap_05_ZH.png";
			document.getElementById("globe6").src = "locale_includes/images/map/hover/GlobalMap_06_ZH.png";
			document.getElementById("globe7").src = "locale_includes/images/map/hover/GlobalMap_07_ZH.png";
			document.getElementById("globe8").src = "locale_includes/images/map/hover/GlobalMap_08_ZH.png";
		});
		$("#globe6").on("mouseout blur", function(){
			document.getElementById("globe4").src = "locale_includes/images/map/GlobalMap_04.png";
			document.getElementById("globe5").src = "locale_includes/images/map/GlobalMap_05.png";
			document.getElementById("globe6").src = "locale_includes/images/map/GlobalMap_06.png";
			document.getElementById("globe7").src = "locale_includes/images/map/GlobalMap_07.png";
			document.getElementById("globe8").src = "locale_includes/images/map/GlobalMap_08.png";
		});
		$("#globe6").on("click keydown", function(e){
			if (e && e.type == 'click' || e.keyCode == 13) {
				studentLocale = "china";
				newLOC(studentLocale);
			}
		});
		//SEA, INDIA, JAPAN, AUSTRALIA, etc
		$("#globe7, #globe8, #globe9").on("mouseover focus", function(){
			document.getElementById("globe5").src = "locale_includes/images/map/hover/GlobalMap_05_SEA.png";
			document.getElementById("globe6").src = "locale_includes/images/map/hover/GlobalMap_06_SEA.png";
			document.getElementById("globe7").src = "locale_includes/images/map/hover/GlobalMap_07_SEA.png";
			document.getElementById("globe8").src = "locale_includes/images/map/hover/GlobalMap_08_SEA.png";
			document.getElementById("globe9").src = "locale_includes/images/map/hover/GlobalMap_09_SEA.png";
		});
		$("#globe7, #globe8, #globe9").on("mouseout blur", function(){
			document.getElementById("globe5").src = "locale_includes/images/map/GlobalMap_05.png";
			document.getElementById("globe6").src = "locale_includes/images/map/GlobalMap_06.png";
			document.getElementById("globe7").src = "locale_includes/images/map/GlobalMap_07.png";
			document.getElementById("globe8").src = "locale_includes/images/map/GlobalMap_08.png";
			document.getElementById("globe9").src = "locale_includes/images/map/GlobalMap_09.png";
		});
		$("#globe7, #globe8, #globe9").on("click keydown", function(e){
			if (e && e.type == 'click' || e.keyCode == 13) {
				studentLocale = "notchina";
				newLOC(studentLocale);
			}
		});
	}
}

function newLOC(passedLocale){
	//Show the loading notice
	document.getElementById("patience").style.display = "block";
	//Hide interface
	document.getElementById("instructions").style.display = "none";
	document.getElementById("courseRegionMap").style.display = "none";
	document.getElementById("countryList").style.display = "none";

	let qstring = window.location.search;
	let newLOC;

	studentLocale = passedLocale;

	if (passedLocale === "china"){
		newLOC = theProtocol + "//" + chinaURL + courseFolder + "/portal.html" + qstring;
		window.location.href=newLOC;
	}else if(passedLocale === "notchina"){
		newLOC = theProtocol + "//" + usaURL + courseFolder + "/portal.html" + qstring;
		window.location.href=newLOC;
	}
	bSetLocaleState();
}

/*********************************/
/*              READY            */
/*********************************/
$(document).ready(function(){
	initCourse(); // for production
	//displayInterface(); // for local testing
});

$(window).resize(function(){
	displayInterface();
});

$("#whyasking").on("click keydown blur",function(e){
	if (e && e.type == 'click' || e.keyCode == 13) {
		$("#whyexplanation").toggle();
	}else if(e && e.type == 'blur'){ //e.keyCode == 9){
		$("#whyexplanation").css("display", "none");
	}
});

document.getElementById("whyexplanation").onclick = function(){
	$("#whyexplanation").toggle();
};