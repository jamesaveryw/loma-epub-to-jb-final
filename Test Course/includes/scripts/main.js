$(document).ready(function(){
	//force the scorm window to have a mobile meta tag...
	var vp = document.createElement('meta');
	vp.id = "viewport";
	vp.name = "viewport";
	vp.content = "width=device-width, initial-scale=1.0";
	window.parent.document.getElementsByTagName('head')[0].appendChild(vp);

	studentBrowserInfo = getOSandBROWSER();
		//alert("studentBrowserInfo.device.type = " + studentBrowserInfo.device.type);
		//alert("studentBrowserInfo.browser.name = " + studentBrowserInfo.browser.name);
		//alert("studentBrowserInfo.os.name = " + studentBrowserInfo.os.name);
	//See if the student is using Firefox on iOS
	if(studentBrowserInfo.device.type === "mobile" && studentBrowserInfo.browser.name === "Firefox" && studentBrowserInfo.os.name === "iOS"){
		isIOSFF = true;
	}
	
	//******************ENABLE FOR PRODUCTION******************
	//Prevent Right-Clicks in general...
	//$("html, body").on("contextmenu",function(e){e.preventDefault();});

	initCourse();	//******************ENABLE FOR PRODUCTION******************

	//Header Text...
	document.getElementById("courseTitle").innerText = portalSetup.Course_Number;

	//STUDENT NAME
	//DISPLAY THE STUDENT'S FIRST NAME
	if (bStudentName !== ""){
		//Just show the student's first name... and middle name since that is how Meridian returns the name
		document.getElementById("indexName").innerHTML = sFirstname + " <span style=\"padding-left: 15px;\"><img src=\"includes/images/sm_rev_hamburger.png\" /></span></span>"; // small hamburger  // &#9660; - downward arrow
	}else{
		//otherwise, show the default text...
		document.getElementById("indexName").innerHTML = portalSetup.Labels.name + " <span style=\"padding-left: 15px;\"><img src=\"includes/images/sm_rev_hamburger.png\" /></span></span>"; // small hamburger // // &#9660; - downward arrow
	}


	//Footer Text...
	var footerDate = new Date();
	document.getElementById("copyrightnotice").innerHTML = portalSetup.Copyright.partOne + footerDate.getFullYear() + portalSetup.Copyright.partTwo;
	document.getElementsByClassName("termslink")[document.getElementsByClassName("termslink").length -1].innerText = portalSetup.Labels.termsOfUse;
	document.getElementsByClassName("privacylink")[document.getElementsByClassName("privacylink").length -1].innerText = portalSetup.Labels.privacyPolicy;
	//Footer Links
	document.getElementById("footMenu").getElementsByClassName("dashlink")[1].innerHTML = portalSetup.Labels.dashboard;
	document.getElementById("footMenu").getElementsByClassName("resourcelink")[1].innerHTML = portalSetup.Labels.resources;
	document.getElementById("footMenu").getElementsByClassName("preplink")[1].innerHTML = portalSetup.Labels.examPrep;
	
	//--Resources or Exam Prep
	if(courseType.indexOf("hioc") !== -1){
		$(".resourcelink").parent().css("display","inline-block");
		$(".preplink").parent().css("display","none");
	}else{
		$(".preplink").parent().css("display","inline-block");
		$(".resourcelink").parent().css("display","none");
	}
   
	document.getElementById("footMenu").getElementsByClassName("contactlink")[1].innerHTML = portalSetup.Labels.Contact;
	document.getElementById("footMenu").getElementsByClassName("glossarylink")[1].innerHTML = portalSetup.Labels.Glossary;

	document.getElementById("indexTOCText").innerText = portalSetup.Labels.tableOfContents;
	
	//FOR SHORT COURSES -> HIDE UNUSED BUTTONS...
	if(courseType.indexOf("shortcourseA")!==-1){
		//Hide header links to Modules...
		$("#headerModules").remove();
		//Hide all links in the footer except for contact and glossary
		$(".dashlink").parent().remove();
		$(".resourcelink").parent().remove();
		$(".preplink").parent().remove();
	}
	if(courseType.indexOf("shortcourseB") !== -1){
		//Hide header links to Modules...
		$("#headerModules").remove();
		//Hide all links in the footer except for contact and glossary
		$(".dashlink").parent().remove();
		$(".resourcelink").parent().remove();
		$(".preplink").parent().remove();
		$(".glossarylink").parent().remove(); 
	}

	if(studentnamefinal !== ""){
		sFirstname = studentnamefinal.split(" ")[0];
	}
	
	if(courseType.indexOf("pdf") !== -1){
		$("#footMenu div:first-child").css("display", "none");
	}
	
	//Show the correct logo...
	if (portalSetup.Course_Folder.indexOf("LOMA")!== -1){
		document.getElementById("course_logo").src = "includes/images/" + portalSetup.LM_Logo;
	}else if (portalSetup.Course_Folder.indexOf("SRI")!== -1){
		document.getElementById("course_logo").src = "includes/images/" + portalSetup.SRI_Logo;
	}else{
		document.getElementById("course_logo").src = "includes/images/" + portalSetup.LM_Logo; // LOMA Logo for short courses... for now
	}

	document.getElementById("hhe_home").setAttribute("tooltip", portalSetup.Labels.home);
	document.getElementById("hhe_help").setAttribute("tooltip", portalSetup.Labels.help);
	document.getElementById("hhe_exit").setAttribute("tooltip", portalSetup.Labels.exit);
	
	showWelcome();
		
	bPortalResize();    
	
	//show only the gauges used...
	for(var cNum = 0; cNum < TOC.length + 2; cNum++){
		$(document.getElementsByClassName("circle")[cNum]).css("display","inline-block");
		$(document.getElementsByClassName("labeled")[cNum]).css("display","inline-block");
	}
    
    //setup vars to use later... 
	for(var module = 0; module < TOC.length; module++){
		var tempCount = TOC[module].length;

        lessonCounts[module] = tempCount;
        //console.log("lessonCounts = " + lessonCounts);

        bTotalLessons += tempCount;
		//console.log("bTotalLessons = " + bTotalLessons);
  
		//show the proper number of module links in the header...
		if(courseType.indexOf("shortcourse") === -1){
			if(portalSetup.course_locale.indexOf("zh") === -1){
				document.getElementsByClassName("moduleLink")[module].style.display = "inline-block";
				document.getElementsByClassName("moduleLink")[module].innerText = portalSetup.Labels.module + (module + 1);
			}else{
				document.getElementsByClassName("moduleLink")[module].style.display = "inline-block";
				document.getElementsByClassName("moduleLink")[module].innerText = "第" + chNumbers[module] + portalSetup.Labels.module;
			}
		}
    } 
	
	//if(courseType.indexOf("hybrid") !== -1){
		$("#returnToLsn").html(portalSetup.ReturnTo.returnToModule);//Return to Module
	//}
});

//LESSON SCROLLING...
//ONSCROLL PROBLEM WORKAROUND FOR FF
var bInterval;
$(document).on("mousedown touchstart", function(){
	var mouseBrowser = getOSandBROWSER();

	if(mouseBrowser.browser.name.indexOf("Firefox") !== -1 && document.getElementById("JcComponents").style.display === "block"){
		bInterval = setInterval(function(){
			progress_bar();
		}, 100);
	}	
});

$(document).on("mouseup touchend", function(){
	clearInterval(bInterval);
});
//LESSON SCROLLING...
//All OTHER BROWSERS...
document.getElementById("JcComponents").ontouchmove = function(){progress_bar();};
//document.getElementById("JcComponents").onscroll = function(){progress_bar();}; // original line, works except for ff on desktop
document.getElementById("JcComponents").addEventListener("scroll", function () { // recommended via research, but works everywhere except for ff on desktop
	progress_bar();
}, false);


//OTHER GENERAL FUNCTIONS...
$(window).resize(function(){
	bPortalResize();
});

//After choosing an item in the menu, make sure it closes...
$("#menu ul li").on("click", function(){
	$('.toggle').trigger('click');
});
//DASHBOARD
$(".dashlink").on("click", function(){
	showDash();
});
//WELCOME
$(".homelink").on("click", function(){
	hideLessonStuff();
	showWelcome();
});
//Show the Module Landing Page
$(".moduleLink").on("click", function(){
	var currentModule;
	if(portalSetup.course_locale.indexOf("zh") === -1){
		currentModule = parseInt(this.innerText.substr(this.innerText.length - 1));
	}else{
		currentModule = this.innerText.substr(1, 1);
		switch(currentModule){
			case "一": currentModule = 1; break;
			case "二": currentModule = 2; break;
			case "三": currentModule = 3; break;
			case "四": currentModule = 4; break;
			case "五": currentModule = 5; break;
			case "六": currentModule = 6; break;
			case "七": currentModule = 7; break;
			case "八": currentModule = 8; break;
		}
	}
	Mod_number(currentModule - 1); //ZERO based
});
//Resources
$(".resourcelink").on("click", function(){
	showResourceHead();	
});
//Exam Prep
$(".preplink").on("click", function(){
	showExamPrep();
});
//Exit Button
$(".exitlink").on("click", function(){
	if(courseType.indexOf("demo") === -1 && courseType !== "hioc"){
		doLMSFinish();
	}
	window.top.close();
});
//Email
$(".contactlink").on("click", function(){
    location.href = "mailto:education@loma.org?subject=" + courseName;
	//showContact();
});
//Glossary
$(".glossarylink").on("click", function(){
	setupGlossary();
});
//Help
$(".helplink").on("click", function(){
	showHelpHead();
});
//Return to lesson (for EOLs and EOMs)
$("#returnToLsn").on("click", function(){
	if(courseType.indexOf("hioc") !== -1){
		//Go to current lesson...
		//bShowBookmark = false; //turning off the bookmark from here... seems annoying
		//view_lesson(bCurrentModule -1, bCurrentLesson, "TC");

		//Go to current Module landing page -- All will return to module landing instead of the lesson now
		Mod_number(bCurrentModule - 1);
		
	}else if(courseType.indexOf("hybrid") !== -1 || courseType.indexOf("pdf") !== -1 ){
		if(isExamPrep === true){
			showExamPrep();
			isExamPrep = false;

		}else if(ttttReturn !== -1){
			Mod_number(ttttReturn);
			ttttReturn = -1;

		}else{
			Mod_number(bCurrentModule - 1);
		}
	}

    $("#returnToLsn").css("display","none");
});

//TERMS
$(".termslink").on("click", function(){
	document.getElementsByClassName("terms_p")[0].innerText = "";
	document.getElementById("closeBtn").style.display = "inline-block";
	document.getElementById("acceptBtn").style.display = "none";
	document.getElementById("terms_cover").style.display = "block";
	showLegal("terms");
});
//PRIVACY
$(".privacylink").on("click", function(){
	document.getElementsByClassName("terms_p")[0].innerText = "";
	document.getElementById("closeBtn").style.display = "inline-block";
	document.getElementById("acceptBtn").style.display = "none";
	document.getElementById("terms_cover").style.display = "block";
	showLegal("privacy");
});

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//Resets most everything at once...
function hideLessonStuff(){
    $("#lessonContent, #pg_header, #JcComponents, #Toc_flyout").css("display", "none");
    $("#portalContents").css("display", "block");
	masterDiv.style.overflowY = "auto";
	$("#returnToLsn").css("display","none");		
	
	if(isExamPage === true){bGetState();}

	isExamPrep = false;
	isExamPage = false;
	bPortalResize();
}

//SLIDING MENU
//Necessary to do it this way because of the way that mobile devices add page space to the right for the menu if it is just hidden
document.getElementById("main-nav-check").onclick = function(){
	//MY STATUS...
	var modNum;
	var lsnNum;

	//Current Status:
	var myStatusSpan = "<span style=\"font-size:85%;font-style:italic;\">" + portalSetup.Labels.currentStatus + "</span><br>";
    
	//Module 1 Lesson 1
	var myStatus = myStatusSpan + portalSetup.Labels.module + "1" + portalSetup.Labels.lesson + "1";
	
	if(courseType.indexOf("hioc") !== -1){
		//if(courseType.indexOf("demo") === -1){
			 for(var m = 0; m < TOC.length; m++){
				//console.log(bLessonCompletions[m]);
				//console.log(moduleScores[m]);
				if(moduleScores[m][1] === "---- - -- - --"){ // means we have a module that is not complete...
					modNum = m + 1; // variable to pass to view_lesson()
					for (var l = 0; l < TOC[m].length; l++){ // so, let's look at the lessons				
						if(bLessonCompletions[m][l] === "---- - -- - --"){
							lsnNum = l + 1;// variable to pass to view_lesson()
							//if the lesson has not been completed, set the status to the lesson
							
							//Chinese (simplified) --> 第一单元第1课
							if(portalSetup.course_locale.indexOf("zh-") !== -1 ){
								var chModule;
								switch (m + 1){
									case 1:	chModule = "一"; break;
									case 2:	chModule = "二"; break;
									case 3:	chModule = "三"; break;
									case 4:	chModule = "四"; break;
									case 5:	chModule = "五"; break;
									case 6:	chModule = "六"; break;
									default: chModule = "一"; break;
								}
								if(portalSetup.course_locale === "zh-CN"){
									myStatus = myStatusSpan + "第" + chModule + "单元第" + (l + 1) + "课" ; //Simplified
								}else{
									myStatus = myStatusSpan + "第" + chModule + "單元第" + (l + 1) + "課" ; //Traditional
								}
								

							//English --> Module 1 Lesson 1
							}else{
								myStatus = myStatusSpan + portalSetup.Labels.module + (m + 1) + portalSetup.Labels.lesson + (l + 1);
							}
							
							break;

						}else{
							lsnNum = "Exam";
							//otherwise set the status to the exam --> "Module 1 Exam"
							myStatus = myStatusSpan + portalSetup.Labels.module + (m + 1) + portalSetup.Labels.exam;
						}	
					}
					break;

				}else{
					lsnNum = "Complete";
					
					myStatus = myStatusSpan + portalSetup.Labels.courseComplete;// --> "Course complete"
				}
		}
       
	}else if(courseType.indexOf("hybrid") !== -1 || courseType.indexOf("pdf") !== -1 ){
		for(var hm = 0; hm < TOC.length; hm++){
			if(moduleScores[hm][1] === "---- - -- - --"){ // means we have a module that is not complete...
				modNum = hm + 1; // variable to pass to view_lesson()
				lsnNum = "Exam";
				//"Module 1 Exam"
				myStatus = myStatusSpan + portalSetup.Labels.module + (hm + 1) + portalSetup.Labels.exam;
				break;
			}else{
				lsnNum = "Complete";
				//Course complete
				myStatus = myStatusSpan + portalSetup.Labels.courseComplete;
			}
		}
	}

	//THE MENU...
    if(!document.getElementById("menu")){
        var menuHTML = "<div id=\"menu\">";
        menuHTML += "<label for=\"main-nav-check\" class=\"toggle\" onclick=\"\" title=\"Close\">&times;</label>";
        menuHTML += "<ul>";
        menuHTML +=    "<li>" + sFirstname + "</li>";

		if(courseType.indexOf("hioc") !== -1 || courseType.indexOf("hybrid") !== -1){
			menuHTML +=    "<li class=\"mystatuslink\">" + myStatus + "</li>";
		}		
		
		//if(courseType.indexOf("shortcourseA") === -1){
		if(courseType.indexOf("shortcourse") === -1){								   
			//MODULES
			if(portalSetup.course_locale.indexOf("zh") === -1){
				for(var moduleLink = 0; moduleLink < TOC.length; moduleLink++){
					menuHTML +=  "<li class=\"moduleLink\">" + portalSetup.Labels.module + (moduleLink + 1) + "</li>";
				}
			}else{
				for(var moduleLink = 0; moduleLink < TOC.length; moduleLink++){
					//menuHTML +=  "<li class=\"moduleLink\">" + portalSetup.Labels.module + (moduleLink + 1) + "</li>";
					menuHTML +=  "<li class=\"moduleLink\">" + "第" + chNumbers[moduleLink] + portalSetup.Labels.module + "</li>";
				}
			}
					
		
			//if(courseType !== "hioc"){menuHTML += "<li class=\"contentlink\">" + portalSetup.Labels.courseContent + "</li>";}//Course Content
			
			//if(courseType.indexOf("hioc") === -1){menuHTML += "<li class=\"getStartedlink\">" + portalSetup.Labels.gettingStarted + "</li>";}//Getting Started -> replaced with next block
			// JW edited 09-22-21 for hybrid Chinese
			if (courseType.indexOf("hioc") === -1 && !/zh/.test(portalSetup.course_locale)) { 
				menuHTML += "<li class=\"getStartedlink\">" + portalSetup.Labels.gettingStarted + "</li>";//Getting Started
			}//Getting Started

			//if(courseType !== "hioc"){menuHTML += "<li class=\"preplink\">" + portalSetup.Labels.examPrep + "</li>";}//Exam Prep

			if(courseType.indexOf("hioc") === -1){
				menuHTML +=    "<li class=\"aboutlink\">" + portalSetup.Labels.about + "</li>";//ABOUT -- TEMPORARILY REMOVED FROM HIOCS
			}
			
			// JW edited 2022-04-27
			// Chinese hybrid/pdf courses don't use the resources page
			if (!/(hybrid|pdf)/.test(courseType) && !/zh/.test(portalSetup.course_locale)) {
				menuHTML +=    "<li class=\"resourcelink\">" + portalSetup.Labels.resources + "</li>";//Resources
			}
			
		}
		menuHTML +=    "<li class=\"homelink\">"+ portalSetup.Labels.home + "</li>";//Home
		menuHTML +=    "<li class=\"helplink\">" + portalSetup.Labels.help + "</li>";//Help		
		menuHTML +=    "<li class=\"termslink\">" + portalSetup.Labels.termsOfUse + "</li>";//Terms of Use
		menuHTML +=    "<li class=\"privacylink\">" + portalSetup.Labels.privacyPolicy + "</li>";//Privacy Policy
		menuHTML +=    "<li class=\"exitlink\">" + portalSetup.Labels.exit + "</li>";//Exit
        menuHTML += "</ul>";
        menuHTML += "</div>";

        $("body").prepend(menuHTML);
	}
	
    if($("#menu").css("opacity") === "0"){ //Slide the menu into view
        $("#menu").css({
            "opacity": "1",
            "webkitTransform":"translate(-13.75em, 0)",
            "MozTransform":"translate(-13.75em, 0)",
            "msTransform":"translate(-13.75em, 0)",
            "OTransform":"translate(-13.75em, 0)",
            "transform":"translate(-13.75em, 0)",
        });
    }else{ //Reset all the css and remove the menu
        $("#menu").css({
            "opacity": "0",
            "webkitTransform":"",
            "MozTransform":"",
            "msTransform":"",
            "OTransform":"",
            "transform":"",
        });
       $("#menu").remove();
    }
    
    //THERE HAS TO BE A BETTER WAY, BUT FOR NOW, THE NEXT PARTS ARE DUPLICATED FROM ABOVE...
    //BUT THIS IS THE PRICE TO PAY FOR THE SLIDING MENU...
    
    //After choosing an item in the menu, make sure it closes...
    $("#menu ul li").on("click", function(){
        $('.toggle').trigger('click');
    });
	//MY STATUS
	$(".mystatuslink").on("click", function(){
		if(lsnNum === "Exam"){
			if(courseType.indexOf("hioc") !== -1){
				showEOLEOM(modNum,0,"EOM");
			}else{
				//showEOLEOM(modNum - 1,0,"EOM");
				Mod_number(modNum - 1);
			}
			
		}else if(lsnNum === "Complete"){
			showEOC();
		}else{
			view_lesson(modNum-1,lsnNum,"TC");
		}
	});
    //DASHBOARD
    $(".dashlink").on("click", function(){
        showDash();
    });
	//ABOUT
	$(".aboutlink").on("click", function(){
		showAbout();
	});
    //WELCOME
    $(".homelink").on("click", function(){
		hideLessonStuff();
        showWelcome();
    });
    //MODULE LANDING
   /*  $(".moduleLink").on("click", function(){
		var currentModule = parseInt(this.innerText.substr(this.innerText.length - 1));
		Mod_number(currentModule - 1); //ZERO based
	}); */
	$(".moduleLink").on("click", function(){
		var currentModule;
		if(portalSetup.course_locale.indexOf("zh") === -1){
			currentModule = parseInt(this.innerText.substr(this.innerText.length - 1));
		}else{
			currentModule = this.innerText.substr(1, 1);
			switch(currentModule){
				case "一": currentModule = 1; break;
				case "二": currentModule = 2; break;
				case "三": currentModule = 3; break;
				case "四": currentModule = 4; break;
				case "五": currentModule = 5; break;
				case "六": currentModule = 6; break;
				case "七": currentModule = 7; break;
				case "八": currentModule = 8; break;
			}
		}
		Mod_number(currentModule - 1); //ZERO based
	});
    //RESOURCES
    $(".resourcelink").on("click", function(){
        showResourceHead();
    });
    //EXIT BUTTON
    $(".exitlink").on("click", function(){
		if(courseType.indexOf("demo") === -1 && courseType !== "hioc"){
			doLMSFinish();
		}
        window.top.close();
    });
    //EMAIL
    $(".contactlink").on("click", function(){
		location.href = "mailto:education@loma.org?subject=" + courseName;
        //showContact(); // add back and remove the previous line when API is finally available
    });
    //GLOSSARY
    $(".glossarylink").on("click", function(){
        setupGlossary();
    });
	//Help
	$(".helplink").on("click", function(){
		showHelpHead();
	});
	//TERMS
	$(".termslink").on("click", function(){
		document.getElementsByClassName("terms_p")[0].innerText = "";
		document.getElementById("closeBtn").style.display = "inline-block";
		document.getElementById("acceptBtn").style.display = "none";
		document.getElementById("terms_cover").style.display = "block";
		showLegal("terms");
	});
	//PRIVACY
	$(".privacylink").on("click", function(){
		document.getElementsByClassName("terms_p")[0].innerText = "";
		document.getElementById("closeBtn").style.display = "inline-block";
		document.getElementById("acceptBtn").style.display = "none";
		document.getElementById("terms_cover").style.display = "block";
		showLegal("privacy");
	});
	//GETTING STARTED
	$(".getStartedlink").on("click", function(){
		showGettingStarted();
	});
	//EXAM PREP
	$(".preplink").on("click", function(){
        showExamPrep();
	});
};

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- 

//Make sure the content area is the right size...
function bPortalResize(){
	//turn off the main scroller...
	document.getElementsByTagName("body")[0].style.overflow = "hidden";
	document.getElementById("lessonContent").style.overflow = "hidden";

	//get the height needed
	var targetTop = document.getElementById("indexHead").offsetHeight + 25;
	var targetBtm = document.getElementById("indexFooter").offsetTop;
	var targetHeight = targetBtm - targetTop;
	
	//Master div
	//Remove first block if covering the screen isn't needed...
	if(isExamPage === true){
		masterDiv.style.top = 0;
		masterDiv.style.bottom = 0;
		masterDiv.style.height = "100%";
		masterDiv.style.zIndex = 999997;
	}else{ 
		masterDiv.style.top = targetTop + "px";
		masterDiv.style.height = (targetHeight) + "px";
		masterDiv.style.zIndex = 99;
	}
	
	
	//Lessons
	document.getElementById("lessonContent").style.position = "relative";
	document.getElementById("lessonContent").style.top = (targetTop) + "px";
	document.getElementById("lessonContent").style.height = (targetHeight) + "px";
	document.getElementById("lessonContent").style.overflowY = "auto";

	document.getElementById("JcComponents").style.position = "relative";
	document.getElementById("JcComponents").style.top = (targetTop + 50) + "px";
	document.getElementById("JcComponents").style.height = (targetHeight - 50) + "px";
	document.getElementById("JcComponents").style.overflowY = "auto";
	
}

function doAlert(alertType){
	var alertContent;
	var bAlertHeader;
	var bAlertMessage;
	var bAlertBtn;
	var bAlertBtnB;

	switch(alertType){
		case "fail":
			bAlertHeader = course_settings.FailDialog.failHeader;
			bAlertMessage = course_settings.FailDialog.failMessage;
			bAlertBtn = course_settings.FailDialog.failCloseBtn;
		break;

		case "examComplete":
			bAlertMessage = portalSetup.Alerts.linkExamCompleted;
			bAlertBtn =  portalSetup.Labels.bOK;
		break;

		case "pleaseComplete":
			bAlertMessage = portalSetup.Alerts.pleaseCompleteLessons;
			bAlertBtn =  portalSetup.Labels.bOK;
		break;

		case "ereader": 
			if(hasEreader === true){
				downloadEbook();
				return;
			}else{
				bAlertMessage = portalSetup.Alerts.HaveEreader;
				bAlertBtn =  portalSetup.Labels.bYes;
				bAlertBtnB = portalSetup.Labels.bNo;
			}
		break;

		case "contactError":
			bAlertHeader = portalSetup.Alerts.ContactError.Header;
			bAlertMessage = portalSetup.Alerts.ContactError.Body;
			bAlertBtn =  portalSetup.Labels.bOK;
		break;

		case "contactSuccess":
			bAlertHeader = portalSetup.Alerts.ContactSuccess.Header;
			bAlertMessage = portalSetup.Alerts.ContactSuccess.Body;
			bAlertBtn =  portalSetup.Labels.bOK;
		break;

		case "shortCourseIncomplete":
			bAlertHeader = portalSetup.Alerts.shortCourseIncomplete.Header;
			bAlertMessage = portalSetup.Alerts.shortCourseIncomplete.Body;
			bAlertBtn =  portalSetup.Labels.bOK;
		break;

		case "coursedemo":
			if(courseType.indexOf("copyright") !== -1){
				bAlertHeader = portalSetup.Alerts.copyright.Header;
				bAlertMessage = portalSetup.Alerts.copyright.Body;
				bAlertBtn =  portalSetup.Labels.bOK;
			}else{
				bAlertHeader = portalSetup.Alerts.demoMode.Header;
				bAlertMessage = portalSetup.Alerts.demoMode.Body;
				bAlertBtn =  portalSetup.Labels.bOK;
			}
		break;

		case "integrityIncomplete": 
			bAlertHeader = portalSetup.Alerts.integrityIncomplete.Header;
			bAlertMessage = portalSetup.Alerts.integrityIncomplete.Body;
			bAlertBtn =  portalSetup.Labels.bOK;
		break;

		case "notconnected":
			bAlertHeader = course_settings.Portal_Setup.Alerts.LRSError.Header;
			bAlertMessage = course_settings.Portal_Setup.Alerts.LRSError.Body;
			bAlertBtn =  course_settings.Portal_Setup.Alerts.LRSError.Btn;
			bAlertBtnB = course_settings.Portal_Setup.Alerts.LRSError.BtnB;
		break;

		default:
			alert("Specify an alert type...");
		break;
	}

	if(!document.getElementById("alertCover")){
		alertContent = "<div id=\"alertCover\">";
			if(alertType !== "notconnected"){
				alertContent += "	<div id=\"alertCoverContainer\">";
			}else{
				alertContent += "	<div id=\"alertCoverContainer\" style=\"background-image: url('includes/images/nuts.png');background-repeat: no-repeat;background-position: bottom;\">";
			}		
			if(alertType !== "notconnected"){alertContent += "   <div class=\"xSpot\">X</div>";}
			if(bAlertHeader !== undefined){alertContent += "<p class=\"alertHead\">" + bAlertHeader + "</p>";}
		alertContent += "		<div id=\"alertBtns\">";
		alertContent += "			<div class=\"alertMessage\">";
		alertContent += "				<div class=\"alertText\" style=\"width: 90%; margin: auto;\">" + bAlertMessage + "</div>";
			if(bAlertBtn !== undefined){alertContent += "<a class=\"alertBtn\">" + bAlertBtn + "</a>";}
			if(bAlertBtnB !== undefined && alertType !== "notconnected"){
				alertContent += "<a class=\"alertBtn\">" + bAlertBtnB + "</a>";
			}else{
				alertContent += "<a class=\"alertBtn\" style=\"display: none;\">" + bAlertBtnB + "</a>";
			}
		alertContent += "			</div>";
		alertContent += "		</div>";
		alertContent += "	</div>";
		alertContent += "</div>";
		$("body").prepend(alertContent);
	}
	
	//if the buttons exist, then...
	if(document.getElementsByClassName("alertBtn")[0]){
		document.getElementsByClassName("alertBtn")[0].onclick = function(){

			if(alertType === "ereader"){
				hasEreader = true;
				//Moved to downloadEbook()
				/* var modContentStatemnt = {
					"type": "e-book",
					"verb": "downloaded",
					"activity": "http://id.tincanapi.com/activitytype/book",
					"module": bCurrentModule - 1,
					"objectID": gBook
				};*/
				
				if(isXAPI){
					if(navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1){
						isNewiPad = true;
					}
					if(studentBrowserInfo.ua.indexOf("iPad") !== -1){
						isNewiPad = true;
					}
					if(isNewiPad === false){
						bSetState();
					}					
				}

				downloadEbook();
			}
			if(alertType !== "notconnected"){
				$("#alertCover").remove();
			}else{
				//%0D%0A = line break in most email packages

				var IESubject = portalSetup.Course_Name + " - Error " + theLRSerror.status + ": " + theLRSerror.responseText;
				var IEBody;

				//IE and Outlook 2016 throw a system error when trying to create the email with line breaks. 
				//Any other combination works fine with the line breaks...ugh
				if(studentBrowserInfo.browser.name === "IE"){
					//console.log("This is " + studentBrowserInfo.browser.name);
					IEBody = encodeURIComponent("---" + course_settings.Portal_Setup.Alerts.LRSError.emailTellMore + "------------------------------------------------------------------------------------------------------------" + course_settings.Portal_Setup.Alerts.LRSError.emailDoNotAlter + "-----" + course_settings.Portal_Setup.Alerts.LRSError.emailWeNeedThisInfo + "---------------" + theLRSerror.status + ": " + theLRSerror.responseText + "---------------" + lrsActor + "---------------" + JSON.stringify(studentBrowserInfo) + "---------------");
				}else{
					IEBody = "---" + course_settings.Portal_Setup.Alerts.LRSError.emailTellMore + "---%0D%0A%0D%0A %0D%0A%0D%0A %0D%0A%0D%0A %0D%0A%0D%0A %0D%0A%0D%0A ---------------------------------------------------------------------------------------------------------%0D%0A---" + course_settings.Portal_Setup.Alerts.LRSError.emailDoNotAlter + "---%0D%0A---" + course_settings.Portal_Setup.Alerts.LRSError.emailWeNeedThisInfo + "---%0D%0A %0D%0A" + theLRSerror.status + ": " + theLRSerror.responseText + "%0D%0A%0D%0A" + lrsActor + "%0D%0A%0D%0A" + JSON.stringify(studentBrowserInfo) + "%0D%0A%0D%0A";
				}

				var theWholeEmail = "mailto:ReportThisIssue@loma.org?subject=" + IESubject + "&body=" + IEBody;

				window.location.href = theWholeEmail;

				document.getElementsByClassName("alertBtn")[0].style.display = "none";
				document.getElementsByClassName("alertBtn")[1].style.display = "block";
			}
		};
	}
	if(document.getElementsByClassName("alertBtn")[1]){
		document.getElementsByClassName("alertBtn")[1].onclick = function(e){
			
			if(alertType !== "notconnected"){
			
				if(courseType !== "hioc" && alertType === "ereader"){
					e.preventDefault();
					hasEreader = false;
					if(isXAPI){bSetState();}
				}
				showGettingStarted();
				$("#alertCover").remove();
			
			}else{
				window.parent.close();
			}

		};
	}

	if(document.getElementsByClassName("xSpot")[0]){
		document.getElementsByClassName("xSpot")[0].onclick = function(){
			$("#alertCover").remove();
		}
	}
}

function downloadEbook(){

	if(navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1){
		isNewiPad = true;
	}
	if(studentBrowserInfo.ua.indexOf("iPad") !== -1){
		isNewiPad = true;
	}

	//console.log(studentBrowserInfo);
	//console.log("isNewiPad = " + isNewiPad);

	if(studentBrowserInfo.device.type !== "mobile"){
		var tempLink = document.createElement("a");
		tempLink.download = gBook;
		tempLink.href = "ebooks/" + gBook;
		document.body.appendChild(tempLink);
		tempLink.click();
		document.body.removeChild(tempLink);
	}else{
		var tempPDF = "ebooks/" + gBook;   // Original Line
		window.open(tempPDF, "pdfwindow", "fullscreen=yes"); // Original Line
	}	

	var modContentStatemnt = {
				"type": "e-book",
				"verb": "downloaded",
				"activity": "http://id.tincanapi.com/activitytype/book",
				"module": bCurrentModule, // - 1,
				"objectID": gBook
			};
	if(isXAPI && !isNewiPad){
		LRSSend(modContentStatemnt);
		//bSetState();
	}
}

function showWelcome(){
	 hideLessonStuff(); 
	
	masterDiv.scrollTop = 0;

	//if(courseType.indexOf("shortcourseA") !== -1){
	if(courseType.indexOf("shortcourse") !== -1){
		var portalContents = "<style>@media (min-width: 750px){.theContent p{width:50%;} #portalContents .theContent{background: url('./includes/images/" + portalSetup.Hero_Image + "') no-repeat right 5% top 1%; background-size: 40%;}} @media (max-width: 750px){div p{width:100%;} .theContent{background:none;}}</style>";
		portalContents += "<div class=\"theContent\">"; 		
		portalContents += "<style>@media (min-width: 750px){.theContent p{width:50%;}}@media (max-width: 750px){p{width:100%;}}</style>";

		portalContents += "<header>" + portalSetup.Course_Title + "</header>";

		portalContents += "<p>";
		portalContents += portalSetup.Welcome_text.shortcourse[0];
		portalContents += "</p>";				   
		for(var welcome = 0; welcome < portalSetup.Welcome_text.Intro_Copy.length; welcome++){
			portalContents += "<p>";
			portalContents += portalSetup.Welcome_text.Intro_Copy[welcome];
			portalContents += "</p>";
		}

		//START BUTTON...
		portalContents += "<div id=\"gotoTTTT\" class=\"examprep_btn\" tabindex=\"0\" role=\"button\" style=\"float:left;\">" + course_settings.Portal_Setup.Labels.Start + "</div>"
		portalContents += gAddedSpace;
		portalContents += "</div>"
		
		masterDiv.innerHTML = portalContents;
		
		document.getElementById("gotoTTTT").onclick = function(){
			view_lesson(0, 1, "TC");
		};
		document.getElementById("gotoTTTT").onkeydown = function(e){
			var code = e.which;
			if ((code === 13) || (code === 32)) {
				view_lesson(0, 1, "TC");
			}
		};

		// can be for any course really, but for now it'll stay in the shortcourse arena
		if(courseType.indexOf("demo") === -1 && doLMSGetValue("cmi.core.lesson_status") === "completed"){
			showEOC();
		}
		
	}else{
		var portalContents = "<style>@media (min-width: 750px){.theContent p{width:50%;} #portalContents .theContent{background: url('./includes/images/" + portalSetup.Hero_Image + "') no-repeat right 5% top 1%; background-size: 40%;}} @media (max-width: 750px){p{width:100%;} .theContent{background:none;}}</style>";
		
		portalContents += "<div class=\"theContent\">"; 
		
		portalContents += "<style>@media (min-width: 750px){.theContent p{width:50%;}}@media (max-width: 750px){p{width:100%;}}</style>";
		portalContents += "<header>" + portalSetup.Course_Title + "</header>";
		
		//INTRO PARAGRAPHS...

		for(var welcome = 0; welcome < portalSetup.Welcome_text.Intro_Copy.length; welcome++){
			portalContents += "<p>";
			portalContents += portalSetup.Welcome_text.Intro_Copy[welcome];
			portalContents += "</p>";
		}

		portalContents += "<div id=\"contentBtns\">";
		// JW edited 09-22-21 for hybrid Chinese
		if (courseType.indexOf("hioc") === -1 && !/zh/.test(portalSetup.course_locale)) { 
			portalContents += "<div class=\"indexBtn getStartedlink\"><img src=\"includes/images/glyphicons-45-keys.png\" alt=\"Getting Started\"/>" + portalSetup.Labels.gettingStarted + "</div>";
		}//GETTING STARTED
		if(courseType.indexOf("hioc") === -1){portalContents += "<div class=\"indexBtn aboutlink\"><img src=\"includes/images/info_btn_blk.png\" alt=\"About\"/>" + portalSetup.Labels.about + "</div>";}//ABOUT -- TEMPORARILY REMOVED FROM HIOCS
		if(courseType.indexOf("pdf") === -1){portalContents += "<div class=\"indexBtn dashlink\"><img src=\"includes/images/dash_btn_color.png\" alt=\"Dashboard\"/>" +  portalSetup.Labels.myDashboard + "</div>";}//DASHBOARD
		if(courseType.indexOf("hioc") === -1){portalContents += "<div class=\"indexBtn preplink\"><img src=\"includes/images/glyphicons-88-log-book.png\" alt=\"Exam Prep\"/>" + portalSetup.Labels.examPrep + "</div>";}//EXAM PREP	
		// JW edited 2022-04-27
		// Chinese hybrid/pdf courses don't use the resources page
		if (!/(hybrid|pdf)/.test(courseType) && !/zh/.test(portalSetup.course_locale)) {
			portalContents += "<div class=\"indexBtn resourcelink\"><img src=\"includes/images/xtra_features_btn.png\" alt=\"Resources\"/>" + portalSetup.Labels.resources +"</div>";//RESOURCES
		}
		
		portalContents += "<div class=\"indexBtn helplink\"><img src=\"includes/images/glyphicons-195-question-sign.png\" alt=\"Help\"/>" + portalSetup.Labels.help + "</div>";//ABOUT
		portalContents += "</div>";
		portalContents += gAddedSpace;
		portalContents += "</div>"
		
		masterDiv.innerHTML = portalContents;

		gScrollDestination = document.getElementById("contentBtns").getBoundingClientRect();

		//Bold text actions...
		$(".boldpagelink").on("click", function(){
			gotoList();
		});

		//Set the actions for the buttons...
		$(".dashlink").on("click", function(){
			showDash();
		});
		$(".aboutlink").on("click", function(){
			showAbout();
		});
		$(".resourcelink").on("click", function(){
			showResourceHead();
		});
		$(".getStartedlink").on("click", function(){
			showGettingStarted();
		});
		$(".preplink").on("click", function(){
			showExamPrep();
		});
		$(".helplink").on("click", function(){
			showHelpHead();
		});
	}
}

function showAbout(){
	if(!document.getElementById("aboutClose")){
		var aboutContent  = "<div id=\"aboutCover\">";
			aboutContent +=	"<div id=\"imageHolder\">";
			aboutContent +=		"<div id=\"aboutClose\">X</div>";
			aboutContent +=		"<img src=\"includes/images/" + portalSetup.About.Infographic + "\" alt=\"" + portalSetup.About.Alt_Text + "\">";
			aboutContent += 	"</div>";
			aboutContent += "</div>";

		$("body").append(aboutContent);
	}

	document.getElementById("aboutClose").onclick = function(){
		$("#aboutCover").remove();
	};
}

//DASHBOARD...
function showDash(){
	if(courseType!=="pdf"){
		doCircles();
	}
	
	masterDiv.scrollTop = 0;
    hideLessonStuff();
	
	var dashContent = "<div class=\"theContent\">";
	dashContent += "<header>" + portalSetup.Labels.myDashboard + "</header>";
	dashContent += "<div id=\"dashLarge\">";
	dashContent += "<div class=\"circle btooltiplarge\" id=\"big_circle\" tooltip=\"" + portalSetup.Course_Name + "\">";
	dashContent += "<span class=\"labeled\">" + portalSetup.Course_Number + "</span>";
	dashContent += "</div>";
	dashContent += "</div>";
	dashContent += "<div id=\"dashInfo\">";
	if(courseType.indexOf("hioc") !== -1){
		dashContent += portalSetup.Dashboard_Text
	}else if(courseType.indexOf("hybrid") !== -1){
		if(courseType.indexOf("demo") === -1){
			for(var mExam = 0; mExam < moduleScores.length; mExam ++){
				//If it is a hybrid, then we are only showing the main gauge and all the exam info...
				var dashCheck = "<img src=\"includes/images/lesson_indicator_check.png\" alt=\"check\">";
				if(moduleScores[mExam][1] === "---- - -- - --"){
					dashCheck = "";
				}else if(moduleScores[mExam][1] !== "---- - -- - --" && moduleScores[mExam][1].length > 1){
					dashCheck = "<img src=\"includes/images/lesson_indicator_check.png\" alt=\"check\">";
				}
				//dashContent += "<div class=\"dashgroup\" id=\"examlink\" style=\"cursor: pointer; margin-bottom:" + (20 + (20 * mExam)) + "px;\">";
				dashContent += "<div class=\"dashgroup\" style=\"cursor: pointer;\">";
				dashContent += "<div class=\"dashcheckmark\">" + dashCheck + "</div>";
				// JW edited 09-22-21 for hybrid Chinese
				if (/zh/.test(portalSetup.course_locale)) {
					dashContent += "<div class=\"dashlessonnumber\">第" + chNumbers[mExam] + portalSetup.Labels.module + "</div>";
				}
				else {
					dashContent += "<div class=\"dashlessonnumber\">Module " + (mExam + 1) +  "</div>";
				}
				dashContent += "<div class=\"dashlessondate\">"+ moduleScores[mExam][1] +"</div>";
				if(moduleScores[mExam][0] === 0){
					dashContent += "<div class=\"dashscore\"> -- </div>";
				}else{
					dashContent += "<div class=\"dashscore\">"+ moduleScores[mExam][0] +"</div>";
				}			
				dashContent += "</div>"; 
			}
		}else{
			for(var mExam = 0; mExam < TOC.length; mExam ++){
				dashContent += "<div class=\"dashgroup\" style=\"cursor: pointer;\">";
				dashContent += "<div class=\"dashcheckmark\"></div>";
				// JW edited 09-22-21 for hybrid Chinese
				if (/zh/.test(portalSetup.course_locale)) {
					dashContent += "<div class=\"dashlessonnumber\">第" + chNumbers[mExam] + portalSetup.Labels.module + "</div>";
				}
				else {
					dashContent += "<div class=\"dashlessonnumber\">Module " + (mExam + 1) +  "</div>";
				}
				dashContent += "<div class=\"dashlessondate\">---- - -- - --</div>";
				dashContent += "<div class=\"dashscore\"> -- </div>";
				dashContent += "</div>";
			}
		}
	}
	
	dashContent += "</div>";

	//HIOC
    if(courseType.indexOf("hioc") !== -1){
        dashContent += "<div id=\"dashSmall\">";
		dashContent += "<div class=\"circle btooltip\" id=\"circle-x\" tooltip=\"" + portalSetup.Labels.courseProgress + "\">";
        dashContent += "<span class=\"labeled\">" + portalSetup.Course_Number + "</span>";
        dashContent += "</div>";
    
        //create the right number of module circles...
		for (var circleDiv = 0; circleDiv < TOC.length; circleDiv++){
			if(portalSetup.course_locale.indexOf("zh-") !== -1){
				dashContent += "<div class=\"circle btooltip\" id=\"circle-" + (circleDiv + 1) + "\" tooltip=\"第" + chNumbers[circleDiv] + portalSetup.Labels.module + "\">";
			}else{
				dashContent += "<div class=\"circle btooltip\" id=\"circle-" + (circleDiv + 1) + "\" tooltip=\"" + portalSetup.Labels.module + " " + (circleDiv + 1) + "\">";
			}
			
            dashContent += "<span class=\"labeled\">M" + (circleDiv + 1) + "</span>";
            dashContent += "</div>";
        }
	}else{ //HYBRID
		dashContent += "<div id=\"dashSmall\">";
		dashContent += "<div id=\"dashHybrid\">";//needed to provide extra padding on small devices
		//dashContent += portalSetup.PDF_Dashboard_Text;
		dashContent += portalSetup.Dashboard_Text;
		dashContent += "</div>";//end #dashHybrid
	}
    
	dashContent += "</div>";
	dashContent += "</div>";

	dashContent += gAddedSpace;
	
	masterDiv.innerHTML = dashContent;
	
	//EBOOK LINKS
	if (courseType !== "hioc"){
		$(".ebook").on("click", function(e){
			var tempBOOK;
			
			if(this.innerHTML !== "e-book"){
				tempBOOK = "pdf/" + course_settings.CourseContentContent.pdflinks[course_settings.CourseContentContent.pdflinks.length -1].link;
			}else{
				tempBOOK = "ebooks/" + course_settings.CourseContentContent.ebooklinks[course_settings.CourseContentContent.ebooklinks.length -1].link;
			}
			
			window.open(tempBOOK, "pdfwindow", "fullscreen=yes");
			var dashContentStatemnt = {
					"type": "e-book",
					"verb": "downloaded",
					"activity": "http://id.tincanapi.com/activitytype/book",
					"objectID": tempBOOK
				};

			if(isXAPI){
				LRSSend(dashContentStatemnt);
			}
			
			e.preventDefault();
		});
	
		$(".kotobeelink").on("click", function(){
			var kotobeeStatemnt = {
				"type": "Kotobee_Reader",
				"verb": "viewed",
				"activity": "http://adlnet.gov/expapi/activities/link",
				"objectID": "KotobeeReader"
			};
			if(isXAPI){
				LRSSend(kotobeeStatemnt);
			}
		});
	}
	
	//attach the scripts to the module links
	$(".dashgroup").on("click", function(){
		var thisModule;
		if(courseType.indexOf("hybrid") !== -1){
			if (!/zh/.test(portalSetup.course_locale)) {
				thisModule = this.childNodes[1].innerHTML.substring(this.childNodes[1].innerHTML.length-1);
			}else{
				thisModule = this.childNodes[1].innerHTML.substring(1,2);
				switch(thisModule){
					case "一": thisModule = 1; break;
					case "二": thisModule = 2; break;
					case "三": thisModule = 3; break;
					case "四": thisModule = 4; break;
					case "五": thisModule = 5; break;
					case "六": thisModule = 6; break;
					case "七": thisModule = 7; break;
					case "八": thisModule = 8; break;
				}
				//console.log(this.childNodes[1].innerHTML);
				//console.log("thisModule = " + thisModule);
			}

			Mod_number(thisModule - 1);
		}
	});

	$(".circle").on("click",function(){
		if(this.id === "big_circle"){
			if(this.lastElementChild.innerHTML == portalSetup.Course_Number){
				//Clicking here should not do anything until there is a module number
				showCircles();

			}else{
				//LINK TO THE MODULE LANDING PAGE
				var circleModule = parseInt(this.lastElementChild.innerHTML.substr(this.lastElementChild.innerHTML.substr.length - 1));
				//console.log(circleModule);
				Mod_number(circleModule - 1);
			}

		}else if(this.id === "circle-x"){
			//change the big circle to the whole course data
			$('#big_circle').circleProgress({size: 200,emptyFill:'#cccccc',startAngle: -Math.PI / 4 * 90, value : ( crsCirWhole / 100) ,thickness: "20",fill: {color: '#0785E0'}});

			//change the big circle label to the course number
			document.getElementsByClassName("labeled")[0].innerText = portalSetup.Course_Number;
			document.getElementsByClassName("circle")[0].setAttribute("tooltip", portalSetup.Course_Name);
			
			if (courseType.indexOf("hioc") !== -1){
				//show the intro message...
				document.getElementById("dashInfo").innerHTML =  portalSetup.Dashboard_Text;
			}

			//Make sure the dashInfo area is tall enough...
			document.getElementById("dashInfo").style.height = "250px";

		}else{        
			var tempLesson = this.id.substr(7) - 1;
            //console.log("tempLesson = " + tempLesson);

			//change the big circle to the module data
			 $('#big_circle').circleProgress({size: 200,emptyFill:'#cccccc',startAngle: -Math.PI / 4 * 90, value : (bGprcnt[tempLesson] / 100) ,thickness: "20",fill: {color: '#1C971E'}});

			//change the big circle label to the module number
			document.getElementsByClassName("labeled")[0].innerText = "M" + this.id.substr(7);
			if(portalSetup.course_locale.indexOf("zh") !== -1){
				document.getElementsByClassName("circle")[0].setAttribute("tooltip", portalSetup.Labels.SelectToGoToModule.replace("{{number}}", chNumbers[ (this.id.substr(7)) - 1]));
			}else{
				document.getElementsByClassName("circle")[0].setAttribute("tooltip", portalSetup.Labels.SelectToGoToModule + this.id.substr(7));
			}

			//Get the total number of lessons
			var tempLessonCount = TOC[tempLesson];
			var tempLessonArrayCount = tempLessonCount.length;

			//create the html that will show the completions
			var lessonTemplate = "";
			for(var i = 0; i < tempLessonArrayCount; i++){
				lessonTemplate += "<div class=\"dashgroup\" style=\"cursor: pointer;\">";            

				//var used below with defualt values
				var theCheck = "<img src=\"includes/images/lesson_indicator_check.png\" alt=\"check\">";
				var lDateTime;
				var lDate = "---- - -- - --";

				if(bLessonCompletions[tempLesson][i] !== lDate){
					lDateTime = bLessonCompletions[tempLesson][i].split("T");
					lDate = lDateTime[0];
				}else{
					theCheck = "";
				}

				lessonTemplate += "<div class=\"dashcheckmark\">" + theCheck + "</div>";
				if(portalSetup.course_locale.indexOf("zh") === -1){
					lessonTemplate += "<div class=\"dashlessonnumber\">" + portalSetup.Labels.lesson + (i + 1) + "</div>";//Lesson-----------------------------------------------------
				}else{
					lessonTemplate += "<div class=\"dashlessonnumber\">第" + (i+1) + portalSetup.Labels.lesson + "</div>";//Lesson-----------------------------------------------------
				}
				
				lessonTemplate += "<div class=\"dashlessondate\">" + lDate + "</div>";
				lessonTemplate += "</div>";
			}
            
            var allowExam = true;
            for (var dashLesson = 0; dashLesson < tempLessonArrayCount; dashLesson++){
                if(bLessonCompletions[tempLesson][dashLesson] === "---- - -- - --"){
					allowExam = false;
                    break;
				}
            }            

			//add the exam
			var examclass = "<div class=\"dashgroup\" id=\"examlink\" style=\"cursor: pointer;\">";

			//make sure the correct html is ready for the checkmark...
			if(moduleScores[tempLesson][1] === "---- - -- - --"){
				theCheck = "";			
			}else if(moduleScores[tempLesson][1] !== "---- - -- - --" && moduleScores[tempLesson][1].length > 1){
				theCheck = "<img src=\"includes/images/lesson_indicator_check.png\" alt=\"check\">";
				allowExam = false;
			}
			if(!allowExam){
				examclass = "<div class=\"dashgroup\" id=\"examlink\" style=\"cursor: not-allowed; color:#bfbfbf;\">";
			}

			lessonTemplate += examclass;
			lessonTemplate += "<div class=\"dashcheckmark\">" + theCheck + "</div>";
			lessonTemplate += "<div class=\"dashlessonnumber\">" + portalSetup.Labels.exam + "</div>";//Exam
			lessonTemplate += "<div class=\"dashlessondate\">"+ moduleScores[tempLesson][1] +"</div>";
			lessonTemplate += "</div>"; 

			//And then apply it to the html...
			document.getElementById("dashInfo").style.height = ((tempLessonArrayCount + 1) * 25) + "px";
			document.getElementById("dashInfo").innerHTML = "<div style=\"color: #000; margin-bottom:-35px; font-size: 14px;\">" + portalSetup.Labels.SelectToGoDirectlyToALessonExam + "</div>" + lessonTemplate;

			//mostly for small sizes, reset the scrollTop so the user can see the lesson links
			masterDiv.scrollTop = 0;

			$(".dashgroup").on("click", function(){
				if(courseType.indexOf("hioc") !== -1){
					var module = tempLesson;
					if(portalSetup.course_locale.indexOf("zh") === -1){
						var lesson = this.childNodes[1].innerHTML.substr(this.childNodes[1].innerHTML.length -1);
					}else{
						var lesson = this.childNodes[1].innerHTML.substr(1,1);
						switch(lesson){
							case "一": lesson = 1; break;
							case "二": lesson = 2; break;
							case "三": lesson = 3; break;
							case "四": lesson = 4; break;
							case "五": lesson = 5; break;
							case "六": lesson = 6; break;
							case "七": lesson = 7; break;
							case "八": lesson = 8; break;
						}
					}

					//if(this.childNodes[1].innerText === "Exam"){
					if(this.childNodes[1].innerText === portalSetup.Labels.exam.trim()){
						//first, if the exam is completed...
						if(moduleScores[module][0] > 0){
							//Exam completed...
							doAlert("examComplete", false);

						}else if(!allowExam && courseType.indexOf("demo") === -1){
							//Not enough lessons completed...
							doAlert("pleaseComplete", false);

						}else if(!allowExam && courseType.indexOf("demo") !== -1){
							doAlert("coursedemo", false);

						}else{
							showEOLEOM(tempLesson + 1,0,"EOM");
						}
					}else{
						//hard-coded to just go to the Table of Contents of the lesson by using "TC" as the last parameter
						view_lesson(module,lesson, "TC");
					}
				}				
			});
		}
	});

	if(courseType.indexOf("pdf") === -1){
		showCircles();
	}
	
}
// FILL IN THE CIRCLES
function showCircles(){
	if(courseType.indexOf("pdf") === -1){
		$('#big_circle').circleProgress({
			size: 200, 							// Large circle - this number is measured in pixels...
			thickness: "20", 					// thicker than the original example...
			startAngle: -Math.PI / 4 * 90, 		// Start at top...
			value: (crsCirWhole / 100),         // hHow much to fill in...
			fill: {color: '#0785E0'} 			// LOMA Blue-ish for whole course progress..
												// #1C971E - Green for lesson progress...
		});
		
		//if(courseType === "hioc"){
		if(courseType.indexOf("hioc") !== -1){
			$('#circle-x').circleProgress({size: 100,emptyFill:'#cccccc',startAngle: -Math.PI / 4 * 90, value : (crsCirWhole / 100) ,thickness: "10",fill: {color: '#0785E0'}});
			$('#circle-1').circleProgress({size: 100,emptyFill:'#cccccc',startAngle: -Math.PI / 4 * 90, value : (bGprcnt[0] / 100) ,thickness: "10",fill: {color: '#1C971E'}});
			$('#circle-2').circleProgress({size: 100,emptyFill:'#cccccc',startAngle: -Math.PI / 4 * 90, value : (bGprcnt[1] / 100) ,thickness: "10",fill: {color: '#1C971E'}});
			$('#circle-3').circleProgress({size: 100,emptyFill:'#cccccc',startAngle: -Math.PI / 4 * 90, value : (bGprcnt[2] / 100) ,thickness: "10",fill: {color: '#1C971E'}});
			$('#circle-4').circleProgress({size: 100,emptyFill:'#cccccc',startAngle: -Math.PI / 4 * 90, value : (bGprcnt[3] / 100) ,thickness: "10",fill: {color: '#1C971E'}});
			$('#circle-5').circleProgress({size: 100,emptyFill:'#cccccc',startAngle: -Math.PI / 4 * 90, value : (bGprcnt[4] / 100) ,thickness: "10",fill: {color: '#1C971E'}});
			$('#circle-6').circleProgress({size: 100,emptyFill:'#cccccc',startAngle: -Math.PI / 4 * 90, value : (bGprcnt[5] / 100) ,thickness: "10",fill: {color: '#1C971E'}});
			$('#circle-7').circleProgress({size: 100,emptyFill:'#cccccc',startAngle: -Math.PI / 4 * 90, value : (bGprcnt[6] / 100) ,thickness: "10",fill: {color: '#1C971E'}});
			$('#circle-8').circleProgress({size: 100,emptyFill:'#cccccc',startAngle: -Math.PI / 4 * 90, value : (bGprcnt[7] / 100) ,thickness: "10",fill: {color: '#1C971E'}});
		}
	}
}
//DO THE PREMILINARY CALCULATIONS FOR THE CIRCLES (MOVED FROM LMSLRS.JS)
function doCircles(){
    var bigNumer = 0;

	if(courseType.indexOf("hioc") !== -1 && courseType.indexOf("demo") === -1){
		for (var a = 0; a < TOC.length; a++){
			//get the count of the number of lessons completed overall...
			for (var b = 0; b < bLessonCompletions[a].length; b++){	
				if(bLessonCompletions[a][b] !== "---- - -- - --"){
					bigNumer++;
				}else{
					continue;
				}
			}
			//***May need to change if the number of lessons to access the exam is ever reduced from 100%***
			if(moduleScores[a] !== undefined){
				if (moduleScores[a][0] !== undefined && moduleScores[a][0] > 0){
					bGprcnt[a] = 100; // if the exam has been passed, mark the whole module as complete...
					bigNumer++;

				}else{
					var denom = TOC[a].length + 1;
					//console.log("denom[" + a + "] = " + denom);

					// get a proper count of things with a date...                   
					var numer = 0;
					for(var g = 0; g < bLessonCompletions[a].length; g++){
						if(bLessonCompletions[a][g] !== "---- - -- - --"){
							numer += 1;
						}
					}
					//console.log("numer" + a + " = " + numer);
					//console.log("denom" + a + " = " + denom);

					if(numer > 0 || numer !== undefined){
						bGprcnt[a] = parseInt((numer/denom) * 100);	// if the exam hasn't been completed, then show the partial fill-in...
					}
				}
			}
		}

		//set percentage for whole course circle...
		crsCirWhole = parseInt((bigNumer/(bTotalLessons + TOC.length)) * 100);

	}else if(courseType.indexOf("hybrid") !== -1 && courseType.indexOf("demo") === -1){
		for (var b = 0; b < TOC.length; b++){
		if(moduleScores[b] !== undefined){
				if (moduleScores[b][0] !== undefined && moduleScores[b][0] > 0){
					bigNumer++;
				}
			}
		}
		//set percentage for whole course circle...
		crsCirWhole = parseInt((bigNumer/TOC.length) * 100);
		
	}else{ // it's a demo, so there's no progress at all...
		crsCirWhole = 0;
		for(var bDemoPercent = 0; bDemoPercent < TOC.length; bDemoPercent++){
			bGprcnt[bDemoPercent] = 0;
			moduleScores[bDemoPercent] = "---- - -- - --";
		}
	}
}
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- 
//-------<( Lesson Launch Begin )>-------
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- 
			     // Module Number, Lesson Number, Page Number
function view_lesson(mdl_num,vlsn,pnum){
	//console.log(TOC.Mod_01[0].lesson_01[0].lesson_name);
    $("#returnToLsn").css("display","none");
	bPortalResize();


	
//	console.log("mdl_num = " + mdl_num);
//	console.log("vlsn = " + vlsn);
//	console.log("pnum = " + pnum);

	bCurrentModule = mdl_num;
	bCurrentLesson = vlsn - 1;
	bCurrentPage = pnum;
	
	//console.log("bCurrentModule = " + bCurrentModule);
	//console.log("bCurrentLesson = " + bCurrentLesson);
	//console.log(bPageViews);
	
	//reset the page scrollTop
	$('html, body, #lessonContent').scrollTop(0);
	$("#indexContent, #dashContent ").css("display","none");
   // $('#portalContents').removeClass("bkgrdGrad");
    
	//$("#lessonContent, #pg_header, #JcComponents, #Toc_flyout").css("display","block");
	$("#lessonContent, #pg_header, #Toc_flyout").css("display","block");
	$("#portalContents").html("");
        
    //Create the full path to the html file...	
	moduleFolder = portalSetup.Course_Folder + "/Modules/Mod_0" + (mdl_num + 1) + "/";
	//And open the lesson...
    TOC_Engine((mdl_num + 1),vlsn);
    
	
	//var lessonName = portalSetup.Course_Folder + "_M" + (mdl_num + 1) + "_L" + vlsn;
	//console.log("lessonName = " + lessonName);
    
    //XAPI Stuff...    
    //var finalLessonPath = moduleFolder + lessonName + "_TC";
	//gBookmarks[mdl_num][vlsn] = finalLessonPath; // bookmark should really not be set from view_lesson, only retrieved...
	
	//BOOKMARK DISPLAY
	if(courseType.indexOf("demo") === -1 && bShowBookmark === true){
		if(gBookmarks[mdl_num][vlsn-1] !== undefined){
			if(gBookmarks[mdl_num][vlsn-1].indexOf("_LO") === -1 || gBookmarks[mdl_num][vlsn-1].indexOf(" Number 1") === -1){

				//console.log("gBookmarks[mdl_num][vlsn-1] = " + gBookmarks[mdl_num][vlsn-1]);

				var bmContents =  " <div id=\"bookmarkCover\">";
					bmContents += "	<div id=\"bookmarkDisplay\">";
					bmContents += "		<header>" + portalSetup.Labels.bookmark + "</header>";//Bookmark
				var bmNumberArray = gBookmarks[mdl_num][vlsn-1].split(".");

				var bmNumberTemp = bmNumberArray[0].split("_");
				var bmNumber = bmNumberTemp[bmNumberTemp.length - 1];

				//console.log(bmNumber);
				
				if(bmNumber.indexOf("P") !== -1){
					bmNumber = bmNumber.substr(1,bmNumber.length); // Just need the number...
				}

				bCurrentPage = bmNumber;

				//console.log("bmNumber = " + bmNumber);

				/* if(courseType.indexOf("hioc") !== -1 || courseType.indexOf("shortcourseA") !== -1){
					bmContents += "		<p style=\"width:90%;\">" + portalSetup.Labels.youLeftOnPage + (parseInt(bmNumber) + 1) + "</p>";//You left on page...
				}else{ */
					if(portalSetup.course_locale.indexOf("zh") !== -1){
						bmContents += "		<p style=\"width:90%;\">" + portalSetup.Labels.youLeftOnPage.replace("{{number}}", (parseInt(bmNumber) + 1 )) + "</p>";
					//if(portalSetup.course_locale === "zh-CN"){
					//	bmContents += "		<p style=\"width:90%;\">" + portalSetup.Labels.youLeftOnPage + (parseInt(bmNumber)) + "页</p>";//You left on page... SIMPLIFIED CHINESE
					//}else if(portalSetup.course_locale === "zh-TW"){
					//	bmContents += "		<p style=\"width:90%;\">" + portalSetup.Labels.youLeftOnPage + (parseInt(bmNumber)) + "頁</p>";//You left on page... TRADITIONAL CHINESE
					}else{
						bmContents += "		<p style=\"width:90%;\">" + portalSetup.Labels.youLeftOnPage + (parseInt(bmNumber) + 1) + "</p>";//You left on page... ENGLISH AND OTHERS
					}
				//}				
					bmContents += "		<div id=\"goBookmark\" tabindex=\"0\" role=\"button\">" + portalSetup.Labels.gotoBookmark + "</div>";//Go to bookmark
					bmContents += "		<div id=\"startOver\" tabindex=\"0\" role=\"button\">" + portalSetup.Labels.startOver + "</div>";//Start over
					bmContents += "	</div>";
					bmContents += " </div>";

				//Don't show the bookmark dialog if it's the learning objectives page...
				if(bmNumber !== "LO"){
					$("body").append(bmContents);
				}
				

				$("#goBookmark").focus();

				
				$("#goBookmark").on("click",function(){
					$("#bookmarkCover").remove();
					if(courseType.indexOf("hioc") !== -1 || courseType.indexOf("shortcourse") !== -1){
					//if(courseType.indexOf("hioc") !== -1 || courseType.indexOf("shortcourseA") !== -1){
						Page_Selection(parseInt(bmNumber) + 1, 0);
					}else{
						Page_Selection(parseInt(bmNumber), 0);
					}
					$("#JcComponents").focus();
				});

				$("#startOver").on("click",function(){
					$("#bookmarkCover").remove();
					$("#lessonContent").focus();
				});

				$("#goBookmark").on("keydown", function(e){
					e.preventDefault();
					var bmcode = e.which || e.keyCode;
					if ((bmcode === 13) || (bmcode === 32)) {
						$("#bookmarkCover").remove();
						if(courseType.indexOf("hioc") !== -1 || courseType.indexOf("shortcourse") !== -1){
						//if(courseType.indexOf("hioc") !== -1 || courseType.indexOf("shortcourseA") !== -1){
							Page_Selection(parseInt(bmNumber) + 1, 0);
						}else{
							Page_Selection(parseInt(bmNumber), 0);
						}
					}else if (bmcode === 9) {
						$("#startOver").focus();
					}
				});

				$("#startOver").on("keydown", function(e){
					e.preventDefault();
					var bscode = e.which || e.keyCode;
					if ((bscode === 13) || (bscode === 32)) {
						$("#bookmarkCover").remove();
					}else if (bscode === 9) {
						$("#goBookmark").focus();
					}
				});
			}
		}
	}
	
	bShowBookmark = true;

	//Mark the table of contents as "viewed" in HIOC courses... TTTT works differently
	if((courseType.indexOf("hioc") !== -1 || courseType.indexOf("shortcourse") !== -1) && courseType.indexOf("demo") === -1){
	//if((courseType.indexOf("hioc") !== -1 || courseType.indexOf("shortcourseA") !== -1) && courseType.indexOf("demo") === -1){
		bPageViews[mdl_num][vlsn - 1][0] = 1;
	}

	//console.log(bPageViews);

	//console.log("isExamPrep (from main)");

	var modObjID;
	if(isExamPrep === true){
		//modObjID = "M" + (mdl_num + 1) + "_TTTT";
		modObjID = "TTTT";
	}else{
		modObjID = "M" + (mdl_num + 1) + "L" + vlsn + "_TC";
	}

	var theStatement = {
		"type": "Table of Contents",
		"verb": "viewed",
		//"activity": "http://adlnet.gov/expapi/activities/lesson",
		"activity": "http://activitystrea.ms/schema/1.0/page",
		"module": (mdl_num + 1),
		"lesson": vlsn,		
		"objectID": modObjID
	};	
    
	if(isXAPI){
		//Send the Statement...
		LRSSend(theStatement);
		//Set the State...
		bSetState();
	//}else{
		//console.log(theStatement);
	}
}

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- 
//-------<( Module Pages )>-------
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- 
function Mod_number(mNumber){
	//console.log("mNumber = " + mNumber);
	// JW added 4-7-22
	// Makes switching between Chinese and English easier
	let chModule;
	switch (mNumber + 1) {
		case 1:	
			chModule = "一"; 
			break;
		case 2:	
			chModule = "二"; 
			break;
		case 3:	
			chModule = "三"; 
			break;
		case 4:	
			chModule = "四"; 
			break;
		case 5:	
			chModule = "五"; 
			break;
		case 6:	
			chModule = "六"; 
			break;
		case 7:	
			chModule = "七"; 
			break;
		case 8:	
			chModule = "八"; 
			break;
	}

	let pdfBtnLbl;
	let examBtnLbl;
	if (!/zh/.test(portalSetup.course_locale)) {
		pdfBtnLbl = `${portalSetup.Labels.module}${mNumber + 1} PDF`;
		examBtnLbl = `${portalSetup.Labels.module}${mNumber + 1} ${portalSetup.Labels.exam}`;
	}
	else if (/CN/i.test(portalSetup.course_locale)) {
		pdfBtnLbl = `第${chModule}单元 PDF`;
		examBtnLbl = `第${chModule}单元 考试`;
	}
	else {
		pdfBtnLbl = `第${chModule}單元 PDF`;
		examBtnLbl = `第${chModule}單元 考試`;
	}

	//console.log("Mod_number says  that mNumber = " + mNumber);
    
	document.getElementById("pg_header").style.display = "none";
    document.getElementById("JcComponents").style.display = "none";	
	
	masterDiv.scrollTop = 0;

	//masterDiv.style.display = "block";
	hideLessonStuff();
	
	bCurrentModule = mNumber + 1;
	
	var md_Num = (mNumber + 1);

	//blurbs for each lesson...
	var lesson_paragraph_Array = [];

	for(var lpa = 0; lpa < TOC.length; lpa++){
		lesson_paragraph_Array[lpa] = lessonSetup[lpa].lesson_paragraph;
	}

	var lesson_number_mod = TOC[mNumber];
	//console.log(lesson_number_mod);

	masterDiv.innerHTML = "";
	
	var moduleOutput = "";
		
	moduleOutput = "<div class='bTopBlock'>";
	//moduleOutput += "<div class='description' style='background:url(includes/images/LOMA_302_hero.png) no-repeat 100% 20%/50%'>";
	if(courseType.indexOf("hioc") !== -1){
		moduleOutput += "<div class='description' style='background-image:url(includes/images/" + lessonSetup[mNumber].Image + ")'>";
	}else{	
		moduleOutput += "<div class='description'>";
	}
	
	moduleOutput += "<header>" + lessonSetup[mNumber].Header + " " + lessonSetup[mNumber].Title + "</header>";
	if(courseType.indexOf("hioc") !== -1){
		moduleOutput += "<p style=\"width:50%;\">" + lessonSetup[mNumber].Paragraph + "</p>";
		moduleOutput += "<ul style=\"width:50%;\">";
	}else{
		moduleOutput += "<p>" + lessonSetup[mNumber].Paragraph + "</p>";
		moduleOutput += "<ul>";
	}
	
	var lsn_tot_array = lessonSetup[mNumber].List;//
	
	//console.log(lsn_tot_array); 
	
	for(var curList = 0; curList < lsn_tot_array.length; curList++){
		//console.log(lsn_tot_array[curList].List_info);
		moduleOutput += "<li>"+lsn_tot_array[curList].List_info+"</li>";
	}
	moduleOutput += "</ul>";	
	moduleOutput += "</div>";
	moduleOutput += "</div>";
	
	//HIOC (LIVE COURSE)
	if(courseType.indexOf("hioc") !== -1){
		if(courseType.indexOf("demo") === -1){
			moduleOutput += "<div class=\"bLessonBlock\">";
			moduleOutput += "<div class=\"flex-container\">";
	
			for(var lsnNum = 0; lsnNum < lesson_number_mod.length; lsnNum++){
				moduleOutput += "<div class='modulePageBlocks lessonBlock' id='M" + md_Num + "_L" + (lsnNum + 1) +"'>";
				if(portalSetup.course_locale.indexOf("zh") === -1){
					moduleOutput += "<header class='lesson_num'>" + portalSetup.Labels.lesson + (lsnNum + 1) + "</header>";//Lesson
				}else{
					//moduleOutput += "<header class='lesson_num'>第" + chNumbers[lsnNum] + portalSetup.Labels.lesson + "</header>";//Lesson-------第一课
					moduleOutput += "<header class='lesson_num'>第" + (lsnNum + 1) + portalSetup.Labels.lesson + "</header>";//Lesson-------第1课
				}
								
				//Lesson Dates and Completion Indicators...
				var allowExam = true;
				//var lessonBtnText = "View Lesson";
				var lessonBtnText = portalSetup.Labels.viewLesson;

				//console.log(bLessonCompletions[mNumber][lsnNum]);
				//console.log(bLessonCompletions[mNumber]);

				if(bLessonCompletions[mNumber][lsnNum] !== "---- - -- - --"){
					var bLessonTimeStamp = bLessonCompletions[mNumber][lsnNum].split("T");
					moduleOutput += "<div class='lesson_date'>" + bLessonTimeStamp[0] + "</div>";
					moduleOutput += "<div class='lesson_indicator lesson_indicator_complete'></div>";
					lessonBtnText = portalSetup.Labels.lessonComplete; //Lesson Complete
				}else{
					moduleOutput += "<div class='lesson_date'>---- - -- - --</div>";
					moduleOutput += "<div class='lesson_indicator lesson_indicator_incomplete'></div>";
					
				}
	
				moduleOutput += "<div class='lesson_description'>" + lesson_paragraph_Array[mNumber][lsnNum].MLP_text + "</div>";
				moduleOutput += "<div class='lesson_launch_btn' onClick='javascript:view_lesson(" + (md_Num - 1) + "," + (lsnNum + 1) + ",\"TC\");'>" + lessonBtnText + "</div>"; 
	
				moduleOutput += "</div>";
			}//end parent For Loop
	
			//ALLOW EXAM?
			for(var blsn = 0; blsn < lesson_number_mod.length; blsn++){
				if(bLessonCompletions[mNumber][blsn] === "---- - -- - --" || moduleScores[mNumber][1] !== "---- - -- - --"){
					allowExam = false;
					break;
				}
			}
	
			if(allowExam){
				moduleOutput += "<div class='modulePageBlocks examBlock'>";
			}else{
				moduleOutput += "<div class='modulePageBlocks examBlockDisabled'>";
			}
	
			moduleOutput += "<header class='lesson_num'>" + portalSetup.Labels.exam + "</header>";
	
			//Exam Date and Completion Indicator...
			if(moduleScores[mNumber][1] !== "---- - -- - --"){
				moduleOutput += "<div class='lesson_date'>" + moduleScores[mNumber][1] + "</div>";
				moduleOutput += "<div class='lesson_indicator lesson_indicator_complete'></div>";
			}else{
				moduleOutput += "<div class='lesson_date'>--/--/----</div>";			
				moduleOutput += "<div class='lesson_indicator lesson_indicator_incomplete'></div>";
			}
	
			moduleOutput += "<div class='lesson_description'>" + lessonSetup[mNumber].Exam_Dialog_Paragraph + "</div>";
	
			if(allowExam){
				moduleOutput += "<div class='lesson_launch_btn' id='moduleexam'>" + portalSetup.Labels.startExam + "</div>";//Start Exam
			}else{
				if(moduleScores[mNumber][1] !== "---- - -- - --"){
					moduleOutput += "<div class='disabled_launch_btn' id='moduleexam'>" + portalSetup.Labels.examCompleted + "</div>";//Exam Completed
				}else{
					moduleOutput += "<div class='disabled_launch_btn' id='moduleexam'>" + portalSetup.Labels.examLocked + "</div>";//Exam Locked
				}
			}
			moduleOutput += "</div>";
			moduleOutput += "</div>";
			moduleOutput += "</div>";

		//HIOC DEMO
		}else if(courseType.indexOf("demo") !== -1){
			//console.log(courseType);
			moduleOutput += "<div class=\"bLessonBlock\">";
			moduleOutput += "<div class=\"flex-container\">";
			for(var lsnNum = 0; lsnNum < lesson_number_mod.length; lsnNum++){
				moduleOutput += "<div class='modulePageBlocks lessonBlock' id='M" + md_Num + "_L" + (lsnNum + 1) +"'>";
				if(portalSetup.course_locale.indexOf("zh") === -1){
					moduleOutput += "<header class='lesson_num'>" + portalSetup.Labels.lesson + (lsnNum + 1) + "</header>";//Lesson
				}else{
					moduleOutput += "<header class='lesson_num'>第" + (lsnNum + 1) + portalSetup.Labels.lesson + "</header>";//Lesson-------第1课
				}
				//Lesson Dates and Completion Indicators...
				var allowExam = true;
				//var lessonBtnText = "View Lesson";
				var lessonBtnText = portalSetup.Labels.viewLesson;
				moduleOutput += "<div class='lesson_date'>---- - -- - --</div>";
				moduleOutput += "<div class='lesson_indicator lesson_indicator_incomplete'></div>";

				moduleOutput += "<div class='lesson_description'>" + lesson_paragraph_Array[mNumber][lsnNum].MLP_text + "</div>";
				moduleOutput += "<div class='lesson_launch_btn' onClick='javascript:view_lesson(" + (md_Num - 1) + "," + (lsnNum + 1) + ",\"TC\");'>" + lessonBtnText + "</div>"; 

				moduleOutput += "</div>";
			}//end For Loop

			moduleOutput += "<div class='modulePageBlocks examBlockDisabled'>";
			moduleOutput += "<header class='lesson_num'>" + portalSetup.Labels.exam + "</header>";
			moduleOutput += "<div class='lesson_date'>--/--/----</div>";			
			moduleOutput += "<div class='lesson_indicator lesson_indicator_incomplete'></div>";
			moduleOutput += "<div class='lesson_description'>" + lessonSetup[mNumber].Exam_Dialog_Paragraph + "</div>";
			moduleOutput += "<div class='disabled_launch_btn' id='moduleexam'>" + portalSetup.Labels.examLocked + "</div>";//Start Exam
			moduleOutput += "</div>";
			moduleOutput += "</div>";
			moduleOutput += "</div>";
		}		

	//HYBRID - SELF-PROCTORED
	//}else if(courseType === "hybrid"){
	}else if(courseType.indexOf("hybrid") !== -1){

		moduleOutput += "<div id=\"moduleBtns\">";
		
		//if it's M1, then show the inline help video links...
		if(mNumber === 0){
			moduleOutput += "<p><img src=\"includes/images/" + vidLibrary.helpVideos.studyExperience.image + "\" class=\"paraImageLeft\" style=\"margin-left:0; margin-top:0;\" onclick=\"showVid(vidLibrary.helpVideos.studyExperience)\">" + lessonSetup[mNumber].Instructions[0] + "</p>"; 
		}else{
			moduleOutput += "<p>" + lessonSetup[mNumber].Instructions[0] + "</p>";
			
		}
		
		//REWRITE THIS LINE FOR E-BOOK TESTING
		if(isIOSFF === false){
			
			// JW edited 9-22-21 for hybrid Chinese
			// no epubs in Chinese courses
			if (!/zh/.test(portalSetup.course_locale)) {
				moduleOutput += "<div class=\"module_btn ebook_btn\" id=\"ebook_btn\">" + portalSetup.Labels.module + (mNumber + 1) + " " + portalSetup.Labels.ebook + "</div>"; // Module...E-book
			}
			if (course_settings.CourseContentContent.moduleEBooks && !/zh/.test(portalSetup.course_locale)) {
				moduleOutput += "<a class=\"module_btn pdf_btn\" id=\"pdf_btn\" href=\"ebooks/" + course_settings.CourseContentContent.pdflinks[mNumber].link +"\" download>" + pdfBtnLbl + "</a>"; // Module...PDF -- Just a regular link unless someone requests otherwise
			}
			else if (course_settings.CourseContentContent.moduleEBooks) {
				moduleOutput += "<a class=\"module_btn pdf_btn\" id=\"pdf_btn\" href=\"ebooks/" + course_settings.CourseContentContent.pdflinks[mNumber].link +"\" download>" + pdfBtnLbl + "</a>";
			}
		}else{
			// JW edited 9-22-21 for hybrid Chinese
			// no epubs in Chinese courses
			if (!/zh/.test(portalSetup.course_locale)) {
				moduleOutput += "<a class=\"module_btn ebook_btn\" id=\"ebook_btn\" href=\"ebooks/" + course_settings.CourseContentContent.ebooklinks[mNumber].link +"\" download>" + portalSetup.Labels.module + (mNumber + 1) + " " + portalSetup.Labels.ebook + "</a>"; // Module...E-book
			}
			if (course_settings.CourseContentContent.moduleEBooks && !/zh/.test(portalSetup.course_locale)) {
				moduleOutput += "<a class=\"module_btn pdf_btn\" id=\"pdf_btn\" href=\"ebooks/" + course_settings.CourseContentContent.pdflinks[mNumber].link +"\" download>" + pdfBtnLbl + "</a"; // Module...PDF -- Just a regular link unless someone requests otherwise
			}
			else if (course_settings.CourseContentContent.moduleEBooks) {
				moduleOutput += "<a class=\"module_btn pdf_btn\" id=\"pdf_btn\" href=\"ebooks/" + course_settings.CourseContentContent.pdflinks[mNumber].link +"\" download>" + pdfBtnLbl + "</a>";
			}
		}
		
		
		moduleOutput += "<div class=\"dotted_seperator\"></div>";

		moduleOutput += "<p>" + lessonSetup[mNumber].Instructions[1] + "</p>";

		//Show the proper Practice Question buttons...
		for (var bPQ = 0; bPQ < course_settings.Exam_Prep.Sections[1].buttons.length; bPQ++){
			
			if ((mNumber + 1).toString() === course_settings.Exam_Prep.Sections[1].buttons[bPQ].module){
				moduleOutput += "<div class=\"module_btn pq_btn\" mybtn=\"" + bPQ + "\">" + course_settings.Exam_Prep.Sections[1].buttons[bPQ].modLabel + "</div>";//Practice questions
			}
			
		}

		moduleOutput += "<p>" + lessonSetup[mNumber].Instructions[2] + "</p>";
		//moduleOutput += "<div class=\"module_btn tttt_btn\">" + course_settings.Exam_Prep.Sections[2].title + "</div>";//Top Ten Tough Topics - TTTT
		moduleOutput += "<div class=\"module_btn se_btn\">" + portalSetup.Labels.sampleExam + "</div>";//Sample Exam		
		
		moduleOutput += "<div class=\"dotted_seperator\"></div>";

		//if it's M1, then show the inline help video links...
		if(mNumber === 0){
			moduleOutput += "<p><img src=\"includes/images/" + vidLibrary.helpVideos.examExperience_self_proctored.image + "\" class=\"paraImageLeft\" style=\"margin-left:0; margin-top:0;\" onclick=\"showVid(vidLibrary.helpVideos.examExperience_self_proctored)\">" + lessonSetup[mNumber].Instructions[4] + "</p>";
		}else{
			moduleOutput += "<p>" + lessonSetup[mNumber].Instructions[4] + "</p>";
		}
		
		moduleOutput += "<p class=\"NOTE\">" + lessonSetup[mNumber].Instructions[5] + "</p>";
		

		if(courseType.indexOf("demo") === -1){
			if(moduleScores[mNumber][1] === "---- - -- - --"){
				// Incomplete
				moduleOutput += "<div class=\"module_btn\" id=\"exam_btn\">" + examBtnLbl + "</div>"; //Module...Exam
			}else{
				// Complete
				moduleOutput += "<div class=\"module_btn_disabled\" id=\"exam_btn\">" + examBtnLbl + "</div>";//Module...Exam
			}
		}else{
			moduleOutput += "<div class=\"module_btn\" id=\"exam_btn\">" + examBtnLbl + "</div>"; //Module...Exam
		}
		
		moduleOutput += "</div>";

	//PDF - PROCTORED
	//}else if (courseType === "pdf"){
	}else if (courseType.indexOf("pdf") !== -1){
		moduleOutput += "<div id=\"moduleBtns\">";
		
		//if it's M1, then show the inline help video links...
		if(mNumber === 0){
			moduleOutput += "<p><img src=\"includes/images/" + vidLibrary.helpVideos.studyExperience.image + "\" class=\"paraImageLeft\" style=\"margin-left:0; margin-top:0;\" onclick=\"showVid(vidLibrary.helpVideos.studyExperience)\">" + lessonSetup[mNumber].Instructions[0] + "</p>";
		}else{
			moduleOutput += "<p>" + lessonSetup[mNumber].Instructions[0] + "</p>";
		}
		
		if(isIOSFF === false){
			// JW edited 9-22-21 for hybrid Chinese
			// no epubs in Chinese courses
			if (!/zh/.test(portalSetup.course_locale)) {
				moduleOutput += "<div class=\"module_btn ebook_btn\" id=\"ebook_btn\">" + portalSetup.Labels.module + (mNumber + 1) + " " + portalSetup.Labels.ebook + "</div>"; // Module...E-book
			}
			if (course_settings.CourseContentContent.moduleEBooks && !/zh/.test(portalSetup.course_locale)) {
				moduleOutput += "<a class=\"module_btn pdf_btn\" id=\"pdf_btn\" href=\"ebooks/" + course_settings.CourseContentContent.pdflinks[mNumber].link +"\" download>" + pdfBtnLbl + "</a>"; // Module...PDF -- Just a regular link unless someone requests otherwise
			}
			else if (course_settings.CourseContentContent.moduleEBooks) {
				moduleOutput += "<a class=\"module_btn pdf_btn\" id=\"pdf_btn\" href=\"ebooks/" + course_settings.CourseContentContent.pdflinks[mNumber].link +"\" download>" + pdfBtnLbl + "</a>";
			}
		}else{
			// JW edited 9-22-21 for hybrid Chinese
			// no epubs in Chinese courses
			if (!/zh/.test(portalSetup.course_locale)) {
				moduleOutput += "<a class=\"module_btn ebook_btn\" id=\"ebook_btn\" href=\"ebooks/" + course_settings.CourseContentContent.ebooklinks[mNumber].link +"\" download>" + portalSetup.Labels.module + (mNumber + 1) + " " + portalSetup.Labels.ebook + "</a>"; // Module...E-book
			}
			if (course_settings.CourseContentContent.moduleEBooks && !/zh/.test(portalSetup.course_locale)) {
				moduleOutput += "<a class=\"module_btn pdf_btn\" id=\"pdf_btn\" href=\"ebooks/" + course_settings.CourseContentContent.pdflinks[mNumber].link +"\" download>" + pdfBtnLbl + "</a"; // Module...PDF -- Just a regular link unless someone requests otherwise
			}
			else if (course_settings.CourseContentContent.moduleEBooks) {
				moduleOutput += "<a class=\"module_btn pdf_btn\" id=\"pdf_btn\" href=\"ebooks/" + course_settings.CourseContentContent.pdflinks[mNumber].link +"\" download>" + pdfBtnLbl + "</a>";
			}
		}

		moduleOutput += "<div class=\"dotted_seperator\"></div>";

		moduleOutput += "<p>" + lessonSetup[mNumber].Instructions[3] + "</p>";
		//moduleOutput += "<div class=\"module_btn tttt_btn\">" + course_settings.Exam_Prep.Sections[2].title + "</div>";//Top Ten Tough Topics - TTTT

		moduleOutput += "<p>" + lessonSetup[mNumber].Instructions[1] + "</p>";
		//Show the proper Practice Question buttons...
		for (var bPQ = 0; bPQ < course_settings.Exam_Prep.Sections[1].buttons.length; bPQ++){
			
			if ((mNumber + 1).toString() === course_settings.Exam_Prep.Sections[1].buttons[bPQ].module){
				moduleOutput += "<div class=\"module_btn pq_btn\" mybtn=\"" + bPQ + "\">" + course_settings.Exam_Prep.Sections[1].buttons[bPQ].modLabel + "</div>";//Practice questions
			}
			
		}

		moduleOutput += "<div class=\"dotted_seperator\"></div>";

		//if it's M1, then show the inline help video links...
		if(mNumber === TOC.length - 1){
			moduleOutput += "<p><img src=\"includes/images/" + vidLibrary.helpVideos.examExperience_proctored.image + "\" class=\"paraImageLeft\" style=\"margin-left:0; margin-top:0;\" onclick=\"showVid(vidLibrary.helpVideos.examExperience_proctored)\"></p>";
		}
		
		moduleOutput += "</div>";
	}
	//console.log(moduleOutput);
	
	$("#lessonContent, #dashContent, #indexContent").css("display", "none");

	moduleOutput += gAddedSpace;
	masterDiv.innerHTML = moduleOutput;

	if(courseType.indexOf("hioc") !== -1){
		$(".examBlock, .examBlockDisabled").css("height",document.getElementsByClassName("lessonBlock")[document.getElementsByClassName("lessonBlock").length -1].offsetHeight);
		//ADJUST POSITION OF BACKGROUND IMAGE...
		document.getElementsByClassName("description")[0].style.backgroundPositionY = document.getElementsByClassName("description")[0].getElementsByTagName("p")[0].offsetTop + "px";
		document.getElementsByClassName("description")[0].style.backgroundPositionX = "100%";
	}
	
	$("#moduleexam").on("click", function(){
		if(courseType.indexOf("demo") === -1){
			//first, if the exam is completed...
			if(moduleScores[mNumber][0] > 0){
				//disabled...completed
				//portalSetup.Alerts.btnExamComplete
				doAlert("examComplete", false);
			}else if(!allowExam){
				//disabled...completed remaining lessons
				//portalSetup.Alerts.btnPleaseCompleteLessons
				doAlert("pleaseComplete", false);
			}else{
                showEOLEOM(mNumber + 1,0, "EOM");
			}
		}else{
			doAlert("coursedemo");
		}
	});

	
	$("#ebook_btn").on("click", function(e){
		if(isIOSFF){
			//console.log("isIOSFF = " + isIOSFF);
			if(hasEreader !== true){
				r = confirm("Do you have an e-reader installed and you are ready to download this e-book?");
				if(r === true){
					hasEreader = true;
					//bSetState();
				}else{
					e.preventDefault();
					showGettingStarted();
				}
			}
		}else{
			gBook = course_settings.CourseContentContent.ebooklinks[mNumber].link;
			//console.log(gBook);
			doAlert("ereader");
		}
	});

	$("#pdf_btn").on("click", function(e){
		e.preventDefault();
		var pdfPath = e.target.href.split("/");

		window.open(e.target.href, "pdfwindow", "fullscreen=yes"); // Original Line

		//console.log(pdfPath[pdfPath.length - 1]);

		if(isXAPI){
			var theStatement = {
				"type": "PDF",
				"verb": "viewed",
				"activity": "http://activitystrea.ms/schema/1.0/file",
				"objectID": pdfPath[pdfPath.length - 1]
			};
			LRSSend(theStatement);
		}

	});

	$("#pqse_btn").on("click", function(){
		var theLink = course_settings.Exam_Prep.Sections[3].buttons[0].link;
		//console.log(theLink);
		var objectTag = "<object id=\"eoleomobject\" type=\"text/html\" data=\"pqse/" + theLink + "\" style=\"width:100%; height:100%;\"></object>";
		masterDiv.innerHTML = objectTag;
		$("#returnToLsn").html(portalSetup.ReturnTo.returnToModule);//Return to Module
		$("#returnToLsn").css("display","inline-block");
	});
	$(".pq_btn").on("click", function(){
		var theLink = course_settings.Exam_Prep.Sections[1].buttons[this.getAttribute("mybtn")].link;
		//console.log(theLink);
		var objectTag = "<object id=\"eoleomobject\" type=\"text/html\" data=\"pqse/" + theLink + "\" style=\"width:100%; height:100%;\"></object>";
		masterDiv.innerHTML = objectTag;
		$("#returnToLsn").html(portalSetup.ReturnTo.returnToModule);//Return to Module
		$("#returnToLsn").css("display","inline-block");
	});
	$(".se_btn").on("click", function(){
		var theLink = course_settings.Exam_Prep.Sections[course_settings.Exam_Prep.Sections.length -1].buttons[mNumber + 1].link;
		//console.log(theLink);
		var objectTag = "<object id=\"eoleomobject\" type=\"text/html\" data=\"pqse/" + theLink + "\" style=\"width:100%; height:100%;\"></object>";
		masterDiv.innerHTML = objectTag;
		$("#returnToLsn").html(portalSetup.ReturnTo.returnToModule);//Return to Module
		$("#returnToLsn").css("display","inline-block");
	});
	$(".tttt_btn").on("click", function(){
		//isExamPrep = true;
		view_lesson(0, 1, "TC");
		ttttReturn = mNumber;
		$("#returnToLsn").html(portalSetup.ReturnTo.returnToModule);//Return to Module
		$("#returnToLsn").css("display","inline-block");
	});
	$("#exam_btn").on("click", function(){
		if(courseType.indexOf("demo") === -1){
			if(moduleScores[mNumber][1] === "---- - -- - --"){
				showEOLEOM(mNumber,0,"EOM");
			}else{
				//disabled...completed
				//portalSetup.Alerts.btnExamComplete
				doAlert("examComplete", false);
			}
		}else{
			doAlert("coursedemo", false);
		}
		
	});
}
//-=--=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-
//*********************************RESOURCES**************************************
function showResourceHead(){
	masterDiv.scrollTop = 0;
    hideLessonStuff();

	var resourceOutput = "<div class=\"theContent\">";
	resourceOutput += "<div class=\"description\">";
	resourceOutput += "<header>" + course_settings.Resources.Header + "</header>";
	resourceOutput += "<p style=\"text-align: left; margin-bottom: 20px;\">" + course_settings.Resources.IntroParagraph + "</p>";
	//resourceOutput += "<ul>";//
	resourceOutput += "<ul style=\"margin:0; padding: 1em; width: 100%\">";

	//HIOCs
	if(course_settings.Lesson_Summaries){resourceOutput += course_settings.Resources.IntroLIs.Lesson_Summaries;}
	if(vidLibrary.expertvids_setup.length > 0){resourceOutput += course_settings.Resources.IntroLIs.Expert_Videos;}
	if(course_settings.Additional_Docs.length > 0){resourceOutput += course_settings.Resources.IntroLIs.Additional_Docs;}
	if(course_settings.Study_Plan){resourceOutput += course_settings.Resources.IntroLIs.Study_Plan;}
	//E-BOOKs
	if(vidLibrary.libraryvids.length > 0){resourceOutput += course_settings.Resources.IntroLIs.Figure_Videos;}
	if(course_settings.Answer_Key){resourceOutput += course_settings.Resources.IntroLIs.Answer_Key;}
	if(course_settings.Course_Glossary){resourceOutput += course_settings.Resources.IntroLIs.Glossaary_Link;}

	resourceOutput += "</ul>";
	resourceOutput += "<div style=\"text-align: center;\">";

	if(course_settings.Lesson_Summaries){resourceOutput += "<div class=\"resource_btn type_summary\" id=\"summaryBtn\">" + portalSetup.Labels.lessonSummaries + "</div>";} //Lesson Summaries
	if(vidLibrary.expertvids_setup.length > 0){resourceOutput += "<div class=\"resource_btn type_expert_vid\" id=\"expertvidBtn\">" + portalSetup.Labels.expertVideos + "</div>";} // Expert Videos	
	if(course_settings.Additional_Docs.length > 0){resourceOutput += "<div class=\"resource_btn type_doc\" id=\"adddocsBtn\">" + portalSetup.Labels.additionalDocs + "</div>";} // Additional Docs
	if(vidLibrary.libraryvids.length > 0){resourceOutput += "<div class=\"resource_btn type_expert_vid\" id=\"vidlibraryBtn\">" + portalSetup.Labels.videoLibrary + "</div>";} // Videos...
	if(course_settings.Answer_Key){resourceOutput += "<div class=\"resource_btn type_summary\" id=\"answerkeyBtn\">" + portalSetup.Labels.answerKey + "</div>";} // Answer Key...
	if(course_settings.Course_Glossary){ resourceOutput += "<div class=\"resource_btn type_summary\" id=\"crsglossBtn\">" + portalSetup.Labels.courseGlossary + "</div>";} // Course Glossary...
	if(course_settings.Study_Plan){resourceOutput += "<div class=\"resource_btn type_summary\" id=\"studyplanBtn\">" + portalSetup.Labels.studyPlan + "</div>";} // Study Plan PDF...

	resourceOutput += "</div>";
	resourceOutput += "</div>";
	resourceOutput += "<div id=\"theResources\">";
	resourceOutput += "<div id=\"lesson_summaries_all\" style=\"display:none;\"></div>";
	resourceOutput += "<div id=\"expert_videos_all\" style=\"display:none;\"></div>";
	resourceOutput += "<div id=\"library_videos_all\" style=\"display:none;\"></div>";
	resourceOutput += "<div id=\"more_resources_all\" style=\"display:none;\"></div>";
	resourceOutput += gAddedSpace;
	resourceOutput += "</div>";
	resourceOutput += "</div>"; 
	masterDiv.innerHTML = resourceOutput;
	
	$(".theContent p").css("width","100%");

	//RESOURCES...
	$(".boldpagelink, .resource_btn").on("click", function(e){
		switch(e.target.innerText){
			case portalSetup.Labels.lessonSummaries:
				showResources("lesson_summaries");
			break;
			case portalSetup.Labels.expertVideos:
				showResources("expert_videos");
			break;
			case portalSetup.Labels.additionalDocs:
				showResources("additional_docs");
			break;
			case portalSetup.Labels.videoLibrary:
				showResources("figure_videos");
			break;
			case portalSetup.Labels.answerKey:
				window.open(course_settings.CourseContentContent.AnswerKeyPDF, "pdfwindow", "fullscreen=yes");
			break;
			case portalSetup.Labels.courseGlossary:
				setupGlossary();
			break;
			case portalSetup.Labels.studyPlan:
				window.open(course_settings.CourseContentContent.StudyPlanPDF, "pdfwindow", "fullscreen=yes");
			break;
		}		
	});

	gScrollDestination = document.getElementById("theResources").getBoundingClientRect();

}

function showResources(resourceType){
    if(resourceType === "lesson_summaries"){ //LESSON SUMMARIES
        var summaryOutput = "<div class=\"bSubHead\">" + portalSetup.Labels.lessonSummaries + "</div>";//Lesson Summaries

        for(var module = 0; module < lessonCounts.length; module++){
            for( var lessonSum = 0; lessonSum < lessonCounts[module]; lessonSum ++){
				if(portalSetup.course_locale.indexOf("zh") === -1){
					summaryOutput += "<div class=\"summary_btn\" onclick=\"openSummary(" + (module + 1) + "," + (lessonSum + 1) + ");\">"+ portalSetup.Labels.module + (module + 1) + portalSetup.Labels.lesson + (lessonSum + 1) + "</div>";
				}else{
					summaryOutput += "<div class=\"summary_btn\" onclick=\"openSummary(" + (module + 1) + "," + (lessonSum + 1) + ");\">第" + chNumbers[module] + portalSetup.Labels.module + "第" + (lessonSum + 1) + portalSetup.Labels.lesson + "</div>";
				}
                if((module + 1) !== lessonCounts.length){
                    if((lessonSum + 1) ===  lessonCounts[module]){
                        summaryOutput += "<div class=\"dotted_seperator\"></div>";
                    }
                }
            }
        }
        document.getElementById("lesson_summaries_all").innerHTML = summaryOutput;

		document.getElementById("expert_videos_all").style.display = "none";
		document.getElementById("library_videos_all").style.display = "none";
        document.getElementById("lesson_summaries_all").style.display = "block";
		document.getElementById("more_resources_all").style.display = "none";

    }else if(resourceType === "expert_videos"){ //EXPERT VIDEOS        
        var expertVidCount = vidLibrary.expertvids_setup.length;
        
        //var expertOutput = "<div class=\"bSubHead\">" + portalSetup.Labels.expertVideos + "</div><p style=\"text-align:left;\">" + portalSetup.Labels.module + " 1</p>";//Expert Videos  --- Module
		var expertOutput = "<div class=\"bSubHead\">" + portalSetup.Labels.expertVideos + "</div><p style=\"text-align:left;\">" + portalSetup.Labels.module + " " + vidLibrary.expertvids_setup[0].module + "</p>";//Expert Videos  --- Module
        
        for (var j = 0; j < expertVidCount; j++){
			expertOutput += "<div class=\"expertVidBlock\" onclick=\"showVid(vidLibrary.expertvids_setup[" + j + "]);\">";//video_url
            expertOutput += "<p><img src=\"includes/images/expertVideos/" + vidLibrary.expertvids_setup[j].thumb_image +  "\"" + "alt=\"\">";
            expertOutput += vidLibrary.expertvids_setup[j].vid_description;
            expertOutput += "<span class=\"expertVidBlockTime\">(" + vidLibrary.expertvids_setup[j].vid_time + ")</span></p>";
            expertOutput += "</div>";
            
            //Add the seperator if needed...
            if(vidLibrary.expertvids_setup[j + 1]){
                if(vidLibrary.expertvids_setup[j].module !== vidLibrary.expertvids_setup[j + 1].module){
                    expertOutput += "<div class=\"dotted_seperator\"></div>";
                    expertOutput += "<p style=\"text-align:left;\">" + portalSetup.Labels.module + vidLibrary.expertvids_setup[j + 1].module + "</p>";//Module
                }
            }
        }
        
        document.getElementById("expert_videos_all").innerHTML = expertOutput;        
        
		document.getElementById("expert_videos_all").style.display = "block";
		document.getElementById("library_videos_all").style.display = "none";
        document.getElementById("lesson_summaries_all").style.display = "none";
		document.getElementById("more_resources_all").style.display = "none";
	
	}else if(resourceType === "figure_videos"){
		var figureVidCount = vidlibrarySetup.length;
		var figureVidContent = "<div class=\"bSubHead\">" + portalSetup.Labels.videoLibrary + "</div><p style=\"text-align:left;\">" + portalSetup.Labels.module + " 1</p>";//Library Videos  --- Module
		
		for (var j = 0; j < figureVidCount; j++){
			figureVidContent += "<div class=\"figureVidBlock\" onclick=\"showVid(vidlibrarySetup[" + j + "]);\">";
			

            figureVidContent += "<img src=\"includes/images/libraryvids/" + vidlibrarySetup[j].thumb_image +  "\"" + "alt=\"\"><p>";
            figureVidContent += "<strong>" + vidlibrarySetup[j].label + "</strong>";
            //figureVidContent += "<span class=\"expertVidBlockTime\">(" + vidlibrarySetup[j].vid_time + ")</span></p>"; // not sure if we need time, bring back if necessary...
            figureVidContent += "</div>";
            
            //Add the seperator if needed...
            if(vidlibrarySetup[j + 1]){
                if(vidlibrarySetup[j].module !== vidlibrarySetup[j + 1].module){
                    figureVidContent += "<div class=\"dotted_seperator\"></div>";
                    figureVidContent += "<p style=\"text-align:left;\">" + portalSetup.Labels.module + vidlibrarySetup[j + 1].module + "</p>";//Module
                }
            }
		}
		
		document.getElementById("library_videos_all").innerHTML = figureVidContent;

        document.getElementById("library_videos_all").style.display = "block";
        document.getElementById("expert_videos_all").style.display = "none";
        document.getElementById("lesson_summaries_all").style.display = "none";
		document.getElementById("more_resources_all").style.display = "none";
		
    }else if(resourceType === "additional_docs"){
		var addDocsOutput = "<div class=\"bSubHead\">" + portalSetup.Labels.additionalDocuments + "</div>";//Additional Documents
		
		for(var doc = 0; doc < course_settings.Additional_Docs.length; doc++){
			addDocsOutput += "<div class=\"summary_btn\" onclick=\"openAddedDoc('" + course_settings.Additional_Docs[doc].doc + "');\">" + course_settings.Additional_Docs[doc].name + "</div>";
        }
		document.getElementById("more_resources_all").innerHTML = addDocsOutput;
		
		document.getElementById("expert_videos_all").style.display = "none";
		document.getElementById("library_videos_all").style.display = "none";		
        document.getElementById("lesson_summaries_all").style.display = "none";
		document.getElementById("more_resources_all").style.display = "block";

	}

	gotoList();
}

//specific functions for resource content
function openSummary(modnum, lsnnum){
    var summaryPath = "pdf/" + portalSetup.Course_Folder + "_M" + modnum + "_L" + lsnnum + "_Summary.pdf";
    window.open(summaryPath, "PDFWindow", "fullscreen=yes");
	
	//xAPI stuff
	var theStatement = {
		"type": "PDF",
		"verb": "viewed",
		"activity": "http://activitystrea.ms/schema/1.0/file",
		"objectID": portalSetup.Course_Folder + "_M" + modnum + "_L" + lsnnum + "_Summary.pdf"
	};
	LRSSend(theStatement);
}
function openAddedDoc(addedDoc){
	//console.log(addedDoc);
	var summaryPath = "pdf/" + addedDoc;
    window.open(summaryPath, "PDFWindow", "fullscreen=yes");
	
	//xAPI stuff
	var theStatement = {
		"type": "PDF",
		"verb": "viewed",
		"activity": "http://activitystrea.ms/schema/1.0/file",
		"objectID": portalSetup.Course_Folder + "/AdditionalDocuments/" + addedDoc
	};
	LRSSend(theStatement);
}
function showVid(vidurl){

	var localVidURL;
	if(useChinaCache){
		//localVidURL = vidurl.video_url.replace("https://ry6g4c.cloud.influxis.com/","https://ll-content.ccedge.cn/ChinaCache/video/");
		localVidURL = vidurl.video_url.replace("https://loma.azureedge.net/videos/","https://ll-content.ccedge.cn/ChinaCache/videos/");
    }else{
		localVidURL = vidurl.video_url;
	}
    var vidOverlay = "<div id=\"vidOverlay\">";
    vidOverlay += "<div id=\"vidContainer\">";
    vidOverlay += "<div id=\"vidClose\">X</div>";
    vidOverlay += "<video controls webkitallowfullscreen mozallowfullscreen allowfullscreen>";
    //vidOverlay += "<source src=\"" + vidurl.video_url + "\" type=\"video/mp4\">";
	vidOverlay += "<source src=\"" + localVidURL + "\" type=\"video/mp4\">";
	vidOverlay += "</video>";
	if(vidurl.transcript !== ""){//Show the button if there's a transcript...
		vidOverlay += "<div id=\"bTranscript\">" + vidurl.transcript + "</div>";
		vidOverlay += "<div id=\"transcriptBtn\">" + course_settings.Portal_Setup.Labels.Transcript + "</div>"
	}
	vidOverlay += "</div>";
    vidOverlay += "</div>";
    
	$("body").prepend(vidOverlay);
	
	if(vidurl.transcript === ""){
		document.getElementById("vidContainer").style.height = "360px";
		document.getElementById("vidContainer").style.paddingBottom = "30px";
	}
    
    $("#vidClose").on("click", function(){
        $("#vidOverlay").remove();
	});
	
	$("#transcriptBtn").on("click", function(){
		if(document.getElementById("bTranscript").style.display !== "block"){
			document.getElementById("bTranscript").style.display = "block";
			document.getElementsByTagName("video")[0].style.display = "none";
			document.getElementsByTagName("video")[0].pause();
			document.getElementById("transcriptBtn").innerText = course_settings.Portal_Setup.Labels.Video;
		}else{
			document.getElementById("bTranscript").style.display = "none";
			document.getElementsByTagName("video")[0].style.display = "block";
			document.getElementsByTagName("video")[0].play();
			document.getElementById("transcriptBtn").innerText = course_settings.Portal_Setup.Labels.Transcript;
		}
	});
	
	//xAPI stuff
	var vid = document.getElementById("vidOverlay").getElementsByTagName("video")[0];
	var vidName = vid.getElementsByTagName("source")[0].src.split("/");
	if(isXAPI){
		vid.onpause = function(){sendVidStatement();};
		window.onunload = function(){sendVidStatement();};
	}	
	
	function sendVidStatement(){
		var vidStartTime;
		var vidEndTime;
		var vidDuration = vid.duration;
		
		if(vid.played.length === 0){
			vidStartTime = vid.played.start(0);
			vidEndTime = vid.played.end(0);
		}else{
			vidStartTime = vid.played.start(vid.played.length - 1);
			vidEndTime = vid.played.end(vid.played.length - 1);
		}
		
		var theStatement = {
			"type": "video",
			"verb": "played",
			"activity": "http://activitystrea.ms/schema/1.0/video",
			"objectID":  vidName[vidName.length - 1],
			"extensions":{
				"startTime": vidStartTime,
				"stopTime": vidEndTime,
				"duration": vidDuration
				}
		};
		LRSSend(theStatement);
	}
}
//USED IN RESOURCES...
//function gotoList(myParent, thisList){
function gotoList(){
    //Uncomment if statement to restrict this to only mobile sizes...
	//if((window.innerHeight < 750 && window.innerWidth < 450) || (window.innerWidth < 750 && window.innerHeight < 450)){
		//var destination = document.getElementById(thisList).getBoundingClientRect();
		var scrollMe = masterDiv;

		scrollMe.scrollTo({
			//top: destination.top - 75,
			top: gScrollDestination.top - 75,
    		behavior: "smooth"
		});
	//}	
}
//-=--=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-
//**********************************GLOSSARY**************************************
function setupGlossary(){
	masterDiv.scrollTop = 0;
    hideLessonStuff();
	
	var glossContent = "<div class=\"bTopBlock\">";
	glossContent += "<div class=\"description\">";
	glossContent += "<header>" + course_settings.Glossary.Header + "</header>";
	glossContent += "<p style=\"width:100%\">" + course_settings.Glossary.Intro + "</p>";
	//glossContent += "<hr style=\"margin: 5px 0; border-color:rgba(233,233,233,.5);\">";
	glossContent += "<hr style=\"margin: 5px 0;\">";
	if(window.innerWidth > 400){
		glossContent += "<p style=\"width:100%\" class=\"perLOMACOM\">" + course_settings.Glossary.SubIntro + "</p>";
	}
	glossContent += "</div>";
	glossContent += "</div>";
	glossContent += "<dl class=\"glossary_items\"></dl>";
	
	masterDiv.innerHTML = glossContent;
	
	showGlossary();
}
function showGlossary(){
	 //Make the html for the glossary from the data in glossary.js
	var dlList = "<input type=\"text\" class=\"biginput\" id=\"autocomplete\" placeholder=\"" + portalSetup.PlaceholderText.glossarySearch + "\">";//Enter a search term here...
	
	//if(portalSetup.course_locale.indexOf("zh-") === -1){
		dlList += "<ul>";
		//Generate the alpha links using only the alpha that are actually in the glossary...
		dlList += "<li><a href=\"#gloss" +  glossarySetup[0].sort + "\"><span>" + glossarySetup[0].sort + "</span></a>";
		for(var glossLI = 0; glossLI < glossarySetup.length; glossLI++){
			if(glossarySetup[glossLI + 1]){
				if(glossarySetup[glossLI].sort !== glossarySetup[glossLI + 1].sort){
					dlList += "<li><a href=\"#gloss" +  glossarySetup[glossLI + 1].sort + "\"><span>" + glossarySetup[glossLI + 1].sort + "</span></a>";
				}
			}
		}
		
		dlList += "</ul>";
	
		dlList += "<a name=\"gloss" + glossarySetup[0].sort + "\"></a>";
		dlList += "<h3 id=\"alpha_" + glossarySetup[0].sort + "\" class=\"bAlpha\">" + glossarySetup[0].sort + "</h3><hr style=\"margin-top: 0;\">";
	//}else{
	//	dlList += "<div style=\"margin-bottom:10px;\">&nbsp;</div>";
	//}

	//The glossary items...
	for(var glossitem = 0; glossitem < glossarySetup.length; glossitem++){
		dlList += "<div>";
		
		var glossTemp = glossarySetup[glossitem].term.replace(/\(/, "");
		glossTemp = glossTemp.replace(/\)/, "");
		glossTemp = glossTemp.replace(/ /g, "_");
		dlList += "<a name=\"" + glossTemp + "\" + id=\"" + glossTemp + "\"></a>";
		dlList += "<dt>" + glossarySetup[glossitem].term + "</dt>";
		dlList += "<dd>" + glossarySetup[glossitem].definition + "</dd>";
		dlList += "</div>";
		
		if(glossarySetup[glossitem + 1]){
			if(glossarySetup[glossitem].sort !== glossarySetup[glossitem + 1].sort){
				//console.log(course_settings.glossary_setup[glossitem + 1].sort);
				dlList += "<a name=\"gloss" + glossarySetup[glossitem + 1].sort + "\"></a>";
				dlList += "<h3 id=\"alpha_" + glossarySetup[glossitem + 1].sort + "\" class=\"bAlpha\">" + glossarySetup[glossitem + 1].sort + "</h3><hr style=\"margin-top: 0;\">";
			}
		}
	}

	dlList += gAddedSpace;
	
	//Show the glossary...
	document.getElementsByClassName("glossary_items")[0].innerHTML = dlList;
	
	// ------- AUTOCOMPLETE --------//
	$("#autocomplete").on("click", function(){	
		if(!autoCompleteObjArray[0]){
			var dtArray = $(".glossary_items dt");
			for(var i = 0; i<dtArray.length;i++){				
				var dataTemp = dtArray[i].innerText.replace(/\(/, "");
				dataTemp = dataTemp.replace(/\)/, "");
				dataTemp = dataTemp.replace(/ /g, "_");
				
				var tempObj = {value: dtArray[i].innerText, data: dataTemp};
				autoCompleteObjArray.push(tempObj);
			}
            //console.log(autoCompleteObjArray);
		}
		//if the previous search link exists, remove it
		if($("#glossItemLink")){$("#glossItemLink").remove();}
		
	});
	
	$('#autocomplete').autocomplete({
		lookup:	autoCompleteObjArray,
		minChars: 2,
		width: "auto",
		onSelect: function (suggestion) {
			var link = document.createElement("a");
			link.id = 'glossItemLink';
			link.href = "#" + suggestion.data
			masterDiv.appendChild(link);
			document.getElementById('glossItemLink').click();
			document.getElementById('autocomplete').value = ""; // clear the input field for the next search...
		},
		autoSelectFirst: true,
		triggerSelectOnValidInput: false, // doesn't work well, so disable this option
		showNoSuggestionNotice: true,
		noSuggestionNotice: portalSetup.PlaceholderText.glossaryFeedback,//'Sorry, no matching results'
	});
}

//-=--=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-
//**********************************CONTACT**************************************
//Disabled until Shug fixes the API...
function showContact(){	
	masterDiv.scrollTop = 0;
    hideLessonStuff();
	
	var contactContent = "<div class=\"bTopBlock\">";
    contactContent +=    "<div class=\"description\">";
	contactContent +=         "<header>" + course_settings.ContactSection.Header + "</header>";
    contactContent +=         course_settings.ContactSection.Intro;
    contactContent +=         "<hr style=\"margin: 5px 0; border-color:rgba(233,233,233,.5);\">";
    contactContent +=         "<form id=\"lomacontact\" name=\"lomacontact\">";
    contactContent +=             "<p style=\"width:100%\">" + course_settings.ContactSection.Directions + "</p>";
	contactContent += 				"<div>";
	contactContent += 					"<label for=\"cname\">" + portalSetup.Labels.name + "</label>";//Name
	contactContent += 					"<input type=\"text\" id=\"studentname\" name=\"studentname\" min-lengh=\"3\" required>";
	contactContent += 				"</div>";
	contactContent += 				"<div>";
	contactContent += 					"<label for=\"cemail\">" + portalSetup.Labels.email + "</label>";//Email
	contactContent += 					"<input type=\"email\" id=\"cemail\" name=\"cemail\" placeholder=\"" + portalSetup.PlaceholderText.emailAddress + "\" required>";//janedoe@loma.org
	contactContent += 				"</div>";
	contactContent += 				"<div>";
	contactContent += 					"<label for=\"cloginid\">" + portalSetup.Labels.loginID + "</label>";//Login ID
	contactContent += 					"<input type=\"text\" id=\"cloginid\" name=\"cloginid\" placeholder=\"\" required>";
	contactContent += 				"</div>";
	contactContent += 				"<div>";
	contactContent += 					"<label for=\"ccomments\">" + portalSetup.Labels.comments + "</label>";//Comments
	contactContent += 					"<textarea id=\"ccomments\" name=\"ccomments\" placeholder=\"" + portalSetup.PlaceholderText.emailDescription + "\" required></textarea>";//Please describe your concern or issue here...
	contactContent += 				"</div>";
	contactContent += 			"<span id=\"sumbitBtn\">" + portalSetup.Labels.submit + "</span>";//Submit
    contactContent +=         "</form>";
    contactContent +=     "</div>";
	contactContent += "</div>";

	contactContent += gAddedSpace;
	
	masterDiv.innerHTML = contactContent;
	
	$("#lomacontact").validate({
		rules:{
			studentname: {
				required: true,
				//alphanumeric: true,
				minlength: 2
			},
			cemail: {
				required: true,
				email:true
			},
			cloginid:{
				required: true,
				alphanumeric: true,
			},
			ccomments:{
				required: true,
				letterswithbasicpunc: true,
			}
		},
		messages: {
			email:{
				required: portalSetup.ContactWarnings.requiredEmail, //"Please enter an email address.",
				email: portalSetup.ContactWarnings.validEmail //"Please enter a <em>valid</em> email address."
			},
			studentname: {
				required: portalSetup.ContactWarnings.requiredStudentname //"Please enter your name",
				//alphanumeric: "Letters, numbers, and underscores only please"
			},
			cloginid: {
				required: portalSetup.ContactWarnings.requiredLoginID, //"Please enter your login id",
				alphanumeric: portalSetup.ContactWarnings.alphaLoginID //"Letters, numbers, and underscores only please"
			},
			ccomments: {
				required: portalSetup.ContactWarnings.requiredComments //"All fields are required",
				//letterswithbasicpunc: "Letters, numbers, and underscores only please"
			}
		 }

	});

	$("#lomacontact").on("submit", function(e){
		e.preventDefault();
	});

	$("#sumbitBtn").on("click",function(){
		$("#lomacontact").submit();

		var FD = {
			"IsSuccess": "0",
			"SupportNumber": "0",
			"ErrorDescription": document.getElementById("ccomments").value,
			"CourseNumber": portalSetup.Course_Name, //portalSetup.Course_Folder,
			"Module":"1",
			"Lesson": "2",
			"Page": "3",
			"Student_Name": studentnamefinal,
			"StudentId": sID,
			"Email": document.getElementById("cemail").value,
			"Course": portalSetup.Course_Name,
			"Course_GUID": courseGUID,
			"Login_ID": document.getElementById("cloginid").value,
			"Description": document.getElementById("ccomments").value,
			"Browser": studentBrowserInfo.browser.name + " " + studentBrowserInfo.browser.version,
			"OS": studentBrowserInfo.os.name + " " + studentBrowserInfo.os.version
		}

		//console.log(FD);
		
		var formReady = false;

		$.each( FD, function( key, value ) {
			if(value === "" || value === null){
				formReady = false;
				return formReady;
			}else{
				formReady = true;
				//console.log(key + " : " + value );
			}
		});
			
		//console.log(formReady);

		if(formReady === true){
			$.post("https://services.loma.org/InCourseHelp/api/Request/", FD, function(){
				//console.log("success");
			})
			.done(function(){
				//console.log("done");
				document.getElementById("lomacontact").reset();
				doAlert("contactSuccess");
			})
			.fail(function() {
				//console.log( "error" );
				doAlert("contactError");
			});
			// .always(function() {
			// 	console.log( "finished" );
			// });
		}
	});
}

function getOSandBROWSER(){
	var bParser = new UAParser();
	var bResult = bParser.getResult();
	//console.log(bResult);
	return bResult;
}


//-=--=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-
//**********************************HELP******************************************
function showHelpHead(){
	masterDiv.scrollTop = 0;
	hideLessonStuff();

	var curTopic;
	
	var helpContents = "<div class=\"theContent\">";
	helpContents += "<div class=\"description\">";
	helpContents += "<header>" + course_settings.HelpSection.Header + "</header>";
	//helpContents += course_settings.HelpSection.Intro; // May still need this if someone wants to write the intro...

	helpContents += "<div style=\"text-align: center;\">";
	for(var helpSectionBtn = 0; helpSectionBtn < helptopics.length; helpSectionBtn++){

		if (courseType.indexOf("hybrid") !== -1){
			if (helptopics[helpSectionBtn].sectionType === "hybrid" || helptopics[helpSectionBtn].sectionType === "both" || helptopics[helpSectionBtn].sectionType === "all"){
				helpContents += "<div class=\"resource_btn\" topicIndex=\"" + helpSectionBtn + "\">" + helptopics[helpSectionBtn].sectionTitle + "</div>";
			}

		}else if(courseType.indexOf("pdf") !== -1){
			if (helptopics[helpSectionBtn].sectionType === "pdf" || helptopics[helpSectionBtn].sectionType === "both" || helptopics[helpSectionBtn].sectionType === "all"){
				helpContents += "<div class=\"resource_btn\" topicIndex=\"" + helpSectionBtn + "\">" + helptopics[helpSectionBtn].sectionTitle + "</div>";
			}

		}else if(courseType.indexOf("shortcourseA") !== -1){
			if (helptopics[helpSectionBtn].sectionType === "shortcourseA"){
				helpContents += "<div class=\"resource_btn\" topicIndex=\"" + helpSectionBtn + "\">" + helptopics[helpSectionBtn].sectionTitle + "</div>";
			}
		
		}else if(courseType.indexOf("shortcourseB") !== -1){
			if (helptopics[helpSectionBtn].sectionType === "hioc"){
				helpContents += "<div class=\"resource_btn\" topicIndex=\"" + helpSectionBtn + "\">" + helptopics[helpSectionBtn].sectionTitle + "</div>";
			}

		}else if(courseType.indexOf("hioc") !== -1){
			if (helptopics[helpSectionBtn].sectionType === "hioc"){
				helpContents += "<div class=\"resource_btn\" topicIndex=\"" + helpSectionBtn + "\">" + helptopics[helpSectionBtn].sectionTitle + "</div>";
			}
		}
	}
	helpContents += "</div>";
	helpContents += "</div>";

	helpContents += "	<div id=\"theHelp\">";
	helpContents += "		<div id=\"portal_help\" style=\"display:none; color: #1d1d1d;\">";
	helpContents += "			<div class=\"bSubHead\"></div>";
	helpContents += "			<div id=\"portalhelpanswer\">";
	helpContents += "				<div class=\"helpback\">" + course_settings.HelpSection.helpTopics + "</div>";
	helpContents += "				<div class=\"helptopichead\"></div>";
	helpContents += "				<div class=\"helptopicbody\"></div>";
	helpContents += "			</div>";
	helpContents += "			<div id=\"bHelptopics\">";
	helpContents += "			</div>";			
	helpContents += "		</div>";
	helpContents += "	</div>";

	helpContents += gAddedSpace;

	masterDiv.innerHTML = helpContents;

	gScrollDestination = document.getElementById("theHelp").getBoundingClientRect();

	$(".resource_btn").on("click", function(e){			
		curTopic = e.target.getAttribute("topicIndex");
		showHelpTopics();
		gotoList();
	});

	$(".helpback").on("click", function(){
		showHelpTopics();
	});	

	function showHelpTopics(){
		var bHelptopicsInnerHTML = "";

		document.getElementsByClassName("bSubHead")[0].innerHTML = helptopics[curTopic].sectionTitle;

		for (var bTopic = 0; bTopic < helptopics[curTopic].sectionTopics.length; bTopic++){
			bHelptopicsInnerHTML += "<div class=\"bHelpItem\" topicnumber=\"" + bTopic + "\">" + helptopics[curTopic].sectionTopics[bTopic].topic + "</div>";
		}

		document.getElementById("bHelptopics").innerHTML = bHelptopicsInnerHTML;

		document.getElementById("portalhelpanswer").style.display = "none";
		document.getElementById("bHelptopics").style.display = "block";

		document.getElementById("portal_help").style.display = "block";

		$(".bHelpItem").on("click", function(e){			
			document.getElementsByClassName("helptopichead")[0].innerHTML = helptopics[curTopic].sectionTopics[e.target.getAttribute("topicnumber")].topic;
			document.getElementsByClassName("helptopicbody")[0].innerHTML = helptopics[curTopic].sectionTopics[e.target.getAttribute("topicnumber")].answer;
			document.getElementById("portalhelpanswer").style.display = "block";
			document.getElementById("bHelptopics").style.display = "none";
		});
	}
}

//-=--=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-
//***************************END OF COURSE CONGRATS MESSAGE***********************
function showEOC(){
	if(!document.getElementById("eocmessagecover")){
		var eocContents  = "<div id=\"eocmessagecover\">";
			eocContents += "	<div id=\"eocmessagesPassed\">";
			
			switch(courseType){
				case "pdf":
				case "hybrid":
					eocContents += "		<p class=\"passed\">" + course_settings.EndOfCourse.passedMsg + "<br>" + course_settings.Portal_Setup.Course_Name + "!</p>";
					eocContents += "		<div id=\"eocbtns\">";					
					eocContents += "			<div class=\"eocmessage\">";
					eocContents += "				<div class=\"eocbtn\" id=\"eocsurvey\">" + course_settings.EndOfCourse.surveyBtn + "</div>";
					eocContents += "				<div class=\"eoctext\">" + course_settings.EndOfCourse.surveyMsg + "</div>";
					eocContents += "			</div>";
					eocContents += "			<div class=\"eocmessage\">";
					eocContents += "				<div class=\"eocbtn\" id=\"eocnext\">" + course_settings.EndOfCourse.whatsNextBtn + "</div>";
					eocContents += "				<div class=\"eoctext\">" + course_settings.EndOfCourse.whatsNextMsg + "</div>";
					eocContents += "			</div>";					
					eocContents += "		</div>";
				break;

				case "demo-hioc":
				case "hioc":
					eocContents += "		<p class=\"passed\">" + course_settings.EndOfCourse.passedMsg + "<br>" + course_settings.Portal_Setup.Course_Name + "!</p>";
					eocContents += "		<div id=\"eocbtns\">";
					
					eocContents += "			<div class=\"eocmessage\">";
					eocContents += "				<div class=\"eocbtn\" id=\"eocsurvey\">" + course_settings.EndOfCourse.surveyBtn + "</div>";
					eocContents += "				<div class=\"eoctext\">" + course_settings.EndOfCourse.surveyMsg + "</div>";
					eocContents += "			</div>";

					eocContents += "			<div class=\"eocmessage\">";
					eocContents += "				<div class=\"eocbtn\" id=\"eocnext\">" + course_settings.EndOfCourse.whatsNextBtn + "</div>";
					eocContents += "				<div class=\"eoctext\">" + course_settings.EndOfCourse.whatsNextMsg + "</div>";
					eocContents += "			</div>";

					if(course_settings.HasExitVideo){
						eocContents += "			<div class=\"eocmessage\">";
						eocContents += "				<div><img src=\"" + vidLibrary.helpVideos.courseExitVideo.image + "\" alt=\"" + vidLibrary.helpVideos.courseExitVideo.alt + "\" onclick=\"showVid(vidLibrary.helpVideos.courseExitVideo)\"></div>";
						eocContents += "				<div class=\"eoctext\">" + course_settings.EndOfCourse.videoMsg + "</div>";
						eocContents += "			</div>";
					}
					
					eocContents += "		</div>";
				break;

				case "shortcourseA":
				case "shortcourseB":
					eocContents += "		<p class=\"passed\">" + course_settings.EndOfCourse.shortCourseEOC + "</p>";
					eocContents += "		<div class=\"alertBtn\">Exit the course</div>";
				break;
			}

			eocContents += "		<div id=\"eocX\">X</div>";
			eocContents += "	</div>";
			eocContents += "</div>";
		$("body").prepend(eocContents);

		//!!!!!!!!Hard-coded for a single lesson!!!!!!!!
		if(courseType.indexOf("shortcourse") !== -1 && TOC.length === 1){
			if(courseType !== "shortcourseB"){
				//if(bLessonCompletions[bCurrentModule][bCurrentLesson] !== "---- - -- - --"){
				if(bLessonCompletions[0][0] !== "---- - -- - --"){
					doLMSSetValue("cmi.core.lesson_status","completed");
					doLMSCommit();
				}
			}
		}
	}
	
	//Close
	$("#eocX").on("click",function(){
		$("#eocmessagecover").remove();
	});
	$(".eocbtn").on("click", function(e){
		if (e.target.id === "eocnext"){
			if(portalSetup.Course_Name.indexOf("SRI ") !== -1){
				window.open("https://www.loma.org/en/professional-development/designations/fsri/","WhatsNext", "fullscreen=yes");
			}else{
				switch(portalSetup.course_locale){
					case "en-US": window.open("https://www.loma.org/en/professional-development/designations/flmi/#Courses","WhatsNext", "fullscreen=yes"); break;
					case "zh-CN": window.open("https://www.loma.org/zh-hans/professional-development/designations/fellow-life-management-institute/?epslanguage=zh-Hans","WhatsNext", "fullscreen=yes"); break;
					case "zh-TW": window.open("https://www.loma.org/zh-hant/professional-development/designations/fellow-life-management-institute/?epslanguage=zh-Hant","WhatsNext", "fullscreen=yes"); break;

					default: window.open("https://www.loma.org/en/professional-development/designations/flmi/#Courses","WhatsNext", "fullscreen=yes"); break; // English is the default...
				}

			}
			
		}else if (e.target.id === "eocsurvey"){
			if(courseType.indexOf("hioc") !== -1){
				switch(portalSetup.course_locale){
					case "en-US": window.open("https://www.surveymonkey.com/r/LOMAhiocEOC","Survey", "fullscreen=yes");break;
					case "fr-CA":
					case "fr-FR": window.open("https://fr.surveymonkey.com/r/sondagedefindecours_interactifenligne","Survey", "fullscreen=yes"); break;
					case "zh-CN": window.open("https://www.surveymonkey.com/r/CS_combeocsurveys_hioc","Survey", "fullscreen=yes"); break;
					case "zh-TW": window.open("https://www.surveymonkey.com/r/CT_combeocsurveys_hioc","Survey", "fullscreen=yes"); break;
					default:  window.open("https://www.surveymonkey.com/r/LOMAhiocEOC","Survey", "fullscreen=yes");break;
				}
				
			}else{
				window.open("https://www.surveymonkey.com/r/LOMATextBasedEOC","Survey", "fullscreen=yes");
			}
		}
	});
	//Close Course button for the short courses...
	$(".alertBtn").on("click", function(){
		if(courseType !== "hioc"){
			doLMSFinish();
		}		
		window.top.close();
	});
}
//-=--=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-
//***************************END OF COURSE FAILED MESSAGE***********************
function myFailOptions(){showFAIL();}

function showFAIL(){
	if(!document.getElementById("eocmessagecover")){
		var eocFailed  = "<div id=\"eocmessagecover\">";
			eocFailed += "	<div id=\"eocmessagesFailed\">";	
			eocFailed += "		<p class=\"failed\">" + course_settings.FailDialog.failHeader + "</p>";
			eocFailed += "		<div id=\"eocbtns\">";
			eocFailed += "			<div class=\"eocmessage\">";
			// JW updated 2022-05-04
			// add survey link to fail
			eocFailed += "				<div class=\"eoctext\" style=\"width: 90%; margin-left: 0;\">" + course_settings.FailDialog.failMessage + "</div>";
			eocFailed += "				<div class=\"eoctext\" style=\"width: 90%; margin-left: 0;\">" + course_settings.EndOfCourse.surveyMsg + "</div>";
			eocFailed += "				<div class=\"eocbtn\" id=\"eocsurvey\">" + course_settings.EndOfCourse.surveyBtn + "</div>";
			eocFailed += "				<div class=\"eocbtn\" id=\"eocnext\">" + course_settings.FailDialog.failCloseBtn + "</div>";
			eocFailed += "			</div>";
			eocFailed += "		</div>";
			eocFailed += "	</div>";
			eocFailed += "</div>";
			$("body").prepend(eocFailed);
	}

	// JW added 2022-05-04
	// event listener for survey
	$("#eocsurvey").on("click", function(e){
		
		if (courseType.indexOf("hioc") !== -1) {
			switch(portalSetup.course_locale){
				case "en-US": 
				window.open("https://www.surveymonkey.com/r/LOMAhiocEOC","Survey", "fullscreen=yes");
				break;
				
				case "fr-CA":
				case "fr-FR": 
				window.open("https://fr.surveymonkey.com/r/sondagedefindecours_interactifenligne","Survey", "fullscreen=yes"); 
				break;
				
				case "zh-CN": 
				window.open("https://www.surveymonkey.com/r/CS_combeocsurveys_hioc","Survey", "fullscreen=yes"); 
				break;
				
				case "zh-TW": 
				window.open("https://www.surveymonkey.com/r/CT_combeocsurveys_hioc","Survey", "fullscreen=yes"); 
				break;
				
				default:  
				window.open("https://www.surveymonkey.com/r/LOMAhiocEOC","Survey", "fullscreen=yes");
				break;
				
			}
			
		} else {
			//J W We'll eventually have different
			// surveys for different languages
			// for now all are using english
			// switch(portalSetup.course_locale){
				// case "en-US": 
				window.open("https://www.surveymonkey.com/r/LOMATextBasedEOC","Survey", "fullscreen=yes");
				// break;
				
				// case "fr-CA":
				// case "fr-FR": 
				// window.open("https://fr.surveymonkey.com/r/sondagedefindecours_interactifenligne","Survey", "fullscreen=yes"); 
				// break;
				
				// case "zh-CN": 
				// window.open("https://www.surveymonkey.com/r/CS_combeocsurveys_hioc","Survey", "fullscreen=yes"); 
				// break;
				
				// case "zh-TW": 
				// window.open("https://www.surveymonkey.com/r/CT_combeocsurveys_hioc","Survey", "fullscreen=yes"); 
				// break;
				
				// default:  
				// window.open("https://www.surveymonkey.com/r/LOMAhiocEOC","Survey", "fullscreen=yes");
				// break;
				
			// }
		}
	});

	// JW updated 2022-05-04
	// using ID instead
	$("#eocnext").on("click", function(e){
		if(courseType !== "hioc"){
			doLMSFinish();
		}
		window.top.close();
	});
}
//-=--=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-
//**********************************EOLs******************************************
function showEOLEOM(module,lesson,type){     
    bCurrentModule = module;
    bCurrentLesson = lesson;
    
    
	masterDiv.style.overflow = "hidden";
	var thisFile;
	
	if (type === "EOM"){
		showIntegrityStatement(module,lesson); // !!!!!!!! NEW INTEGRITY STATEMENT !!!!!!!!!!!

	}else if(type === "EOL"){
		thisFile = "data=\"pqse/" + portalSetup.Course_Folder + "_EOL_" + module + "_" + lesson + ".html\"";
		if(!isExamPrep){
			hideLessonStuff();
		}else{
			hideLessonStuff();
			isExamPrep = true;
		}
	
		//Array and State object is zero-based...
		bPageViews[module-1][lesson-1][bPageViews[module-1][lesson-1].length - 1] = 1;

		//Check to see if the lesson should be marked complete
		var markComplete = true;

		for (var i = 0; i <  bPageViews[module - 1][lesson - 1].length; i++){ //2019-03-04: INCLUDES THE EOLs...
			if(bPageViews[module - 1][lesson - 1][i] === 0){
				markComplete = false;
				break;
			}
		}
		if(markComplete === true){
			markLessonComplete(module, lesson);
		}

		var objectTag = "<object id=\"eoleomobject\" type=\"text/html\" " + thisFile + " style=\"width:100%; height:100%;\"></object>";
		if(isExamPrep !== true){
			$("#returnToLsn").css("display","inline-block");
		}
    	
		masterDiv.innerHTML = objectTag;
	}		
}

function markLessonComplete(module, lesson){
	if(bLessonCompletions[module - 1][lesson - 1] === "---- - -- - --"){
		bLessonCompletions[module - 1][lesson - 1] = new Date().toISOString();

		if(isXAPI){
			var lessonStatement = {
				"type": "lesson",
				"verb": "completed",
				"activity": "http://adlnet.gov/expapi/activities/lesson",
				"module": module,
				"lesson": lesson,		
				"objectID": "M" + module + "L" + lesson
			};
			LRSSend(lessonStatement);
			bSetState();
		}
	}	
}
//-=--=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-
//**********************************EOMs******************************************
function showIntegrityStatement(module,lesson){
	if(courseType.indexOf("hioc") === - 1){
		module = module + 1;
	}	

	masterDiv.scrollTop = 0;
	hideLessonStuff();

	//if(courseType === "hybrid"){module = module + 1; isExamPage = true;}
	//if(courseType.indexOf("hioc") !== -1){ isExamPage = true;} // ALLOW THE EXAM TO COVER THE WINDOW...
	isExamPage = true; // latest version of code seems to want the same module name... 2019-10-07

	var intergrityContent  = "<div class=\"bTopBlock\">";
		intergrityContent += "	<div class=\"description\">";
		intergrityContent += "		<header>" + course_settings.IntegrityStatement.Header + "</header>";
		intergrityContent += course_settings.IntegrityStatement.theStatement;
		intergrityContent += "	</div>";
		intergrityContent += "</div>";

		intergrityContent += gAddedSpace; 

		masterDiv.innerHTML = intergrityContent;

		$("input").on("change", function(e){
			
			//toggle all sub-checks
			if(e.target.id === "bIntegrity2"){
				if($("#bIntegrity2").prop("checked") === true){
					$("#bIntegrity2a, #bIntegrity2b, #bIntegrity2c").prop( "checked", true );
				}else{
					$("#bIntegrity2a, #bIntegrity2b, #bIntegrity2c").prop( "checked", false );
				}
				
			}
			//toggle parent check
			if(e.target.id.indexOf("bIntegrity2") !== -1){
				if($("#bIntegrity2a").prop("checked") && $("#bIntegrity2b").prop("checked") && $("#bIntegrity2c").prop("checked")){
					$("#bIntegrity2").prop( "checked", true );
				}else{
					$("#bIntegrity2").prop( "checked", false );
				}
			}

			//make sure that all the boxes are checked...
			for(var i = 0; i < document.getElementById("portalContents").getElementsByTagName("input").length; i++){
				if(document.getElementById("portalContents").getElementsByTagName("input")[i].checked !== true){
					document.getElementById("exam_btn").className = "hiocexam_btn_disabled";
					break;
				}else if(document.getElementById("portalContents").getElementsByTagName("input")[i].checked === true && i === document.getElementById("portalContents").getElementsByTagName("input").length - 1){
					//console.log("Ready for the next step...");
					//enable the exam button when ready...
					document.getElementById("exam_btn").className = "hiocexam_btn";
				}
			}
			
		});

		document.getElementById("exam_btn").onclick = function(){

			if(document.getElementById("exam_btn").className === "hiocexam_btn"){
				masterDiv.style.overflow = "hidden";
				
				//if(document.referrer.indexOf(stageURL) !== -1){ // if we know the exact url of the stage environment...
				//if(document.referrer.indexOf("stage") !== -1){ // a little more loose, no extra vars... but may cause other domains to display actual exams instead of test exams
				
				var eomFile = "";

				//Is it on any COMPANY BRANDED LMS or SCORM Cloud?
				//if(document.referrer.indexOf(COMPANY) !== -1 || document.referrer.indexOf(SCORMCLOUDLMS) !== -1){
					// Is it local, on Staging, or on SCORMCloud?
					//if(document.referrer.indexOf("file:") !== -1 || document.referrer.indexOf(PRODLMS) === -1 || document.referrer.indexOf(SCORMCLOUDLMS) !== -1){ 
				//On Staging
				if(useSCORMCloud){
					eomFile = "data=\"exam_ALL_CR=1/" + portalSetup.Course_Folder + "_EOM_" + module + ".html\""; // TESTING EOLs
				}else if(useLOMATest){
					eomFile = "data=\"exam_ALL_CR=1/" + portalSetup.Course_Folder + "_EOM_" + module + ".html\""; // TESTING EOLs
				
				//On production	
				}else if(useLOMAProd) {
					eomFile = "data=\"exam/" + portalSetup.Course_Folder + "_EOM_" + module + ".html\""; // FINAL EOLs
				}else if(useChinaCache) {
					eomFile = "data=\"exam/" + portalSetup.Course_Folder + "_EOM_" + module + ".html\""; // FINAL EOLs
				}
				// ANY OTHER LMS - should show FINAL EOLs (like when we supply a set of scorm files to another company)
				//}else{
				//	eomFile = "data=\"exam/" + portalSetup.Course_Folder + "_EOM_" + module + ".html\""; // FINAL EOLs
				//}
				

				var objectTag = "<object id=\"eoleomobject\" type=\"text/html\" " + eomFile + " style=\"width:100%; height:100%;\"></object>";
				masterDiv.innerHTML = objectTag;
				bPortalResize();
				honestyStatements[module - 1] = new Date().toISOString();
				
				if(isXAPI === true){
					bSetState();
					var honestyStatement = {
						"type": "Integrity_Statement",
						"verb": "accepted",
						"activity": "http://adlnet.gov/expapi/activities/file",
						"module": module,
						"lesson": lesson,
						"objectID": "M" + module
					};
					LRSSend(honestyStatement);
				}
			}else{
				doAlert("integrityIncomplete");
			}
		};
			
}

//-=--=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-
//****************************GETTING STARTED*************************************
function showGettingStarted(){
	masterDiv.scrollTop = 0;
	hideLessonStuff();
	
	var gsContent =  "<div class=\"bTopBlock\">";
		gsContent += "<div class=\"description\">";
		gsContent += "<header>" + course_settings.GettingStartedContent.Header + "</header>";
		gsContent += course_settings.GettingStartedContent.IntroParagraphs[0];
		gsContent += course_settings.GettingStartedContent.IntroParagraphs[1];
		gsContent += "<div class=\"module_btn kotobeeDownload\">" + course_settings.GettingStartedContent.KotobeeReader + "</div>";
		gsContent += "<div class=\"module_btn appleDownload\">" + course_settings.GettingStartedContent.AppleBooks + "</div>";

		gsContent += course_settings.GettingStartedContent.IntroParagraphs[2];
		for(var mLanding = 0; mLanding < TOC.length; mLanding++){
			gsContent += "<div class=\"module_btn modulePageBtns\">" + course_settings.CourseContentContent.Module + (mLanding + 1) + "</div>";
		}

		gsContent += course_settings.GettingStartedContent.IntroParagraphs[3];
		
		if(course_settings.CourseContentContent.pdflinks[course_settings.CourseContentContent.pdflinks.length - 2].link !== ""){
			gsContent += course_settings.GettingStartedContent.IntroParagraphs[4];
			gsContent += "<div class=\"module_btn entirePDF\">" + course_settings.CourseContentContent.EntirePDF + "</div>";
		}
		
		//if(portalSetup.courseName === "LOMA 361"){gsContent += "<div class=\"module_btn tocPDF\">" + course_settings.CourseContentContent.EntirePDFtoc + "</div>";} // ONLY FOR 361!!!
		if(course_settings.CourseContentContent.pdflinks[course_settings.CourseContentContent.pdflinks.length - 1].link !== ""){gsContent += "<div class=\"module_btn tocPDF\">" + course_settings.CourseContentContent.EntirePDFtoc + "</div>";} // ONLY FOR 361!!!

		gsContent += "</div>";
		gsContent += "</div>";
	
		//console.log(gsContent);
	
		gsContent += gAddedSpace;

	masterDiv.innerHTML = gsContent;

	$(".kotobeeDownload").on("click", function(e){
		e.preventDefault();
		window.open("https://www.kotobee.com/en/products/reader", "kotobeeReader", "fullscreen=yes");
	});
	$(".appleDownload").on("click", function(e){
		e.preventDefault();
		window.open("https://itunes.apple.com/us/app/apple-books/id364709193?mt=8", "appleBooks", "fullscreen=yes");
	});
	$(".modulePageBtns").on("click", function(e){
		var thisMod = parseInt(this.innerHTML.substr(this.innerHTML.length - 1));
		Mod_number(thisMod - 1);
	});
	$(".entirePDF").on("click", function(e){
		e.preventDefault();
		window.open("pdf/" + course_settings.CourseContentContent.pdflinks[course_settings.CourseContentContent.pdflinks.length - 2].link, "EntirePDF", "fullscreen=yes");
		var modContentStatemnt = {
			"type": "pdf",
			"verb": "downloaded",
			"activity": "http://activitystrea.ms/schema/1.0/file",
			"objectID": course_settings.CourseContentContent.pdflinks[course_settings.CourseContentContent.pdflinks.length - 2].link
		};
		if(isXAPI){
			LRSSend(modContentStatemnt);
		}
	});
	$(".tocPDF").on("click", function(e){
		e.preventDefault();
		window.open("pdf/" + course_settings.CourseContentContent.pdflinks[course_settings.CourseContentContent.pdflinks.length - 1].link, "EntireTOC", "fullscreen=yes");
		var modContentStatemnt = {
			"type": "pdf",
			"verb": "downloaded",
			"activity": "http://activitystrea.ms/schema/1.0/file",
			"objectID": course_settings.CourseContentContent.pdflinks[course_settings.CourseContentContent.pdflinks.length - 1].link
		};
		if(isXAPI){
			LRSSend(modContentStatemnt);
		}
	});
	$(".helptextlink").on("click", function(){
		showHelpHead();
	});
}

//-=--=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-
//****************************EXAM PREP PAGE**************************************
function showExamPrep(){
    masterDiv.scrollTop = 0;
	hideLessonStuff();
    
    var prepContent  = "<div class=\"theContent\">";
        prepContent += "<div class=\"description\">";
        prepContent += "<header>" + course_settings.Exam_Prep.Header + "</header>";

		if(courseType.indexOf("hybrid") !== -1){
			prepContent += course_settings.Exam_Prep.Description[0];
			prepContent += course_settings.Exam_Prep.Description[2];
			prepContent += course_settings.Exam_Prep.Description[4];
			prepContent += course_settings.Exam_Prep.Description[5];
		}else if(courseType.indexOf("pdf") !== -1){
			prepContent += course_settings.Exam_Prep.Description[1];
			prepContent += course_settings.Exam_Prep.Description[3];
		}

		prepContent += "</div>";
        prepContent += "<div id=\"theResources\">";
    
    for(var subHead = 0; subHead < course_settings.Exam_Prep.Sections.length; subHead++){
        prepContent += "<div class=\"examprep_block\" style=\"display: block;\">";
		prepContent += "<div class=\"bSubHead\">" + course_settings.Exam_Prep.Sections[subHead].title + "</div>";
		
		//Practice Questions - Setup the section to start with a Module 1 header
		if (course_settings.Exam_Prep.Sections[subHead].title === course_settings.Exam_Prep.indexOFLabel.PracticeQuestions){
			// JW edited 9-22-21 for hybrid Chinese
			if (/zh/.test(portalSetup.course_locale)) {
				//portalSetup.Labels.module + course_settings.Exam_Prep.Sections[subHead].buttons[0].module
				prepContent += "<div style=\"text-align:left;margin-top: 25px;\">第" + chNumbers[course_settings.Exam_Prep.Sections[subHead].buttons[0].module - 1] + portalSetup.Labels.module + "</div>";
			}
			else {
				prepContent += "<div style=\"text-align:left;margin-top: 25px;\">" + portalSetup.Labels.module + course_settings.Exam_Prep.Sections[subHead].buttons[btns + 1].module + "</div>";
			}
			prepContent += "<div class=\"dotted_seperator\" style=\"text-align:left;\"></div>";
		}

		for(var btns = 0; btns < course_settings.Exam_Prep.Sections[subHead].buttons.length; btns++){
			//Proctored courses have a single sample exam, only use the first item
			if(course_settings.Exam_Prep.Sections[subHead].title === course_settings.Exam_Prep.indexOFLabel.SampleExam && courseType.indexOf("pdf") !== -1){
				prepContent += "<div class=\"examprep_btn\" mypart=\"" + subHead + "\" mybtn=\"" + btns + "\">" + course_settings.Exam_Prep.Sections[subHead].buttons[0].prepLabel + "</div>";
				prepContent += "<div class=\"dotted_seperator\" style=\"text-align:left;\"></div>";
				prepContent += "<p style=\"text-align:center; font-weight: bold;\">" + course_settings.Exam_Prep.Description[8] + "</p>"; //Ready to take the Exam? Learn more here! 
				prepContent += "<img src=\"includes/images/" + vidLibrary.helpVideos.examExperience_proctored.image + "\" class=\"paraImage\" style=\"margin-left:0; margin-top:0;\" onclick=\"showVid(vidLibrary.helpVideos.examExperience_proctored)\">"; 
				break;

			//first item is the whole course SE for proctored, skip if hybrid
			}else if(course_settings.Exam_Prep.Sections[subHead].title === course_settings.Exam_Prep.indexOFLabel.SampleExam && courseType.indexOf("hybrid") !== -1 && btns === 0){			
				continue;

			//self-proctored has an exam for each module
			}else if(course_settings.Exam_Prep.Sections[subHead].title === course_settings.Exam_Prep.indexOFLabel.SampleExam && courseType.indexOf("hybrid") !== -1 && btns !== 0){
				prepContent += "<div class=\"examprep_btn\" mypart=\"" + subHead + "\" mybtn=\"" + btns + "\">" + course_settings.Exam_Prep.Sections[subHead].buttons[btns].prepLabel + "</div>";
			
			//Practice Questions - Group by module
			}else if(course_settings.Exam_Prep.Sections[subHead].title === course_settings.Exam_Prep.indexOFLabel.PracticeQuestions){
				prepContent += "<div class=\"examprep_btn\" mypart=\"" + subHead + "\" mybtn=\"" + btns + "\">" + course_settings.Exam_Prep.Sections[subHead].buttons[btns].prepLabel + "</div>";
				if (course_settings.Exam_Prep.Sections[subHead].buttons[btns + 1] && course_settings.Exam_Prep.Sections[subHead].buttons[btns].module !== course_settings.Exam_Prep.Sections[subHead].buttons[btns + 1].module){
						// JW edited 9-22-21 for hybrid Chinese
						// "第" + chNumbers[module] + portalSetup.Labels.module;
						if (/zh/.test(portalSetup.course_locale)) {
							prepContent += "<div style=\"text-align:left;margin-top: 25px;\">第" + chNumbers[course_settings.Exam_Prep.Sections[subHead].buttons[btns + 1].module - 1] + portalSetup.Labels.module + "</div>";
						}
						else {
							prepContent += "<div style=\"text-align:left;margin-top: 25px;\">" + portalSetup.Labels.module + course_settings.Exam_Prep.Sections[subHead].buttons[btns + 1].module + "</div>";
						}
						prepContent += "<div class=\"dotted_seperator\" style=\"text-align:left;\"></div>";
				}

			}else if(course_settings.Exam_Prep.Sections[subHead].title === course_settings.Exam_Prep.indexOFLabel.PlansTipsStrategy && courseType.indexOf("hybrid") !== -1 && btns === 2){
					continue;
			}else if(course_settings.Exam_Prep.Sections[subHead].title === course_settings.Exam_Prep.indexOFLabel.PlansTipsStrategy && courseType.indexOf("pdf") !== -1 && btns === 1){
					continue;

			//Other sections...
			}else{
				prepContent += "<div class=\"examprep_btn\" mypart=\"" + subHead + "\" mybtn=\"" + btns + "\">" + course_settings.Exam_Prep.Sections[subHead].buttons[btns].prepLabel + "</div>";
			}
		}

		prepContent += "</div>";
	}

	//if(courseType === "hybrid"){
	if(courseType.indexOf("hybrid") !== -1){
		prepContent += "<div class=\"dotted_seperator\" style=\"text-align:left;\"></div>";
		prepContent += "<p style=\"text-align:center; font-weight: bold;\">" + course_settings.Exam_Prep.Description[7] + "</p>"; //Ready to take the Module Exam? Learn more here! 
		prepContent += "<img src=\"includes/images/" + vidLibrary.helpVideos.examExperience_self_proctored.image + "\" class=\"paraImage\" style=\"margin-left:0; margin-top:0;\" onclick=\"showVid(vidLibrary.helpVideos.examExperience_self_proctored)\">"; 
	}

	prepContent += gAddedSpace;
    prepContent += "</div>";
	prepContent += "</div>";
    
	masterDiv.innerHTML = prepContent;

	//HARD-CODED FOR ENGLISH!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	if(courseType.indexOf("hybrid") !== -1 && strTestLocaleId === "en-US"){
		document.getElementsByClassName("bSubHead")[2].innerText = "Sample Exams"; // change the array number if TTTT used
	}
	//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

	var bSubHead0 = document.getElementsByClassName("bSubHead")[0].getBoundingClientRect();
	var bSubHead1 = document.getElementsByClassName("bSubHead")[1].getBoundingClientRect();
	var bSubHead2 = document.getElementsByClassName("bSubHead")[2].getBoundingClientRect();
	//var bSubHead3 = document.getElementsByClassName("bSubHead")[3].getBoundingClientRect();

	$(".boldpagelink:eq(0)").on("click", function(){
		gScrollDestination = bSubHead0;
		gotoList();
	});

	$(".boldpagelink:eq(1)").on("click", function(){
		gScrollDestination = bSubHead1;
		gotoList();
	});

	$(".boldpagelink:eq(2)").on("click", function(){
		gScrollDestination = bSubHead2;
		gotoList();
	});

	//Not needed quite yet, but when the TTTT comes back...
	// $(".boldpagelink:eq(3)").on("click", function(){
	// 	gScrollDestination = document.getElementsByClassName("bSubHead")[3].getBoundingClientRect();
	//	gScrollDestination = bSubHead3;
	// 	gotoList();
	// });


    
	$(".examprep_btn").on("click", function(){
		var theLabel = course_settings.Exam_Prep.Sections[this.getAttribute("mypart")].buttons[this.getAttribute("mybtn")].prepLabel;
		var theLink = course_settings.Exam_Prep.Sections[this.getAttribute("mypart")].buttons[this.getAttribute("mybtn")].link;

		//Practice Questions or Sample Exams...
		if(theLabel.indexOf(course_settings.Exam_Prep.indexOFLabel.Chapter) > -1 || theLabel.indexOf(course_settings.Exam_Prep.indexOFLabel.SampleExam) > -1){
			//console.log("Sample Exam or Chapter...");
			//console.log(theLabel);
			var objectTag = "<object id=\"eoleomobject\" type=\"text/html\" data=\"pqse/" + theLink + "\" style=\"width:100%; height:100%;\"></object>";
			masterDiv.innerHTML = objectTag;
			isExamPrep = true;
			$("#returnToLsn").html(portalSetup.ReturnTo.returnToExamPrep);
			$("#returnToLsn").css("display","inline-block");

		//Top Ten Tough Topics
		}else if(theLabel.indexOf(course_settings.Exam_Prep.indexOFLabel.TTTT) > -1){
			//console.log("TTTT...");
			//console.log(theLabel);
			isExamPrep = true;
			view_lesson(0, 1, "TC");
			$("#returnToLsn").html(portalSetup.ReturnTo.returnToExamPrep);
			$("#returnToLsn").css("display","inline-block");

		//Plans, Tips, Strategy...
		}else{
			switch (theLabel){
				case course_settings.Exam_Prep.Sections[0].buttons[0].prepLabel:// "Study Plan"
				case course_settings.Exam_Prep.Sections[0].buttons[1].prepLabel:// "Study Tips"
				case course_settings.Exam_Prep.Sections[0].buttons[2].prepLabel:// "Study Tips"
				case course_settings.Exam_Prep.Sections[0].buttons[3].prepLabel:// "Policies/Procedures"
					//console.log("Plans, Tips, or Strategy...");
					//console.log(theLabel);
					window.open("pdf/" + theLink, "studyaids", "fullscreen=yes");

					var theStatement = {
						"type": "PDF",
						"verb": "viewed",
						"activity": "http://activitystrea.ms/schema/1.0/file",
						"objectID": theLink
					};
					LRSSend(theStatement);
					
					break;
			}		
		}
		
	});
}