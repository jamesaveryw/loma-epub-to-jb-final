// immediately invoked function
(function courseLoad() {
	// lmslrs.js
	initCourse();

	// start template engine
	course = new Controller(new Model(), new View("home"));

	// set up mutation observer so we know when the portal content is loaded
	// target and config
	const portalMutTarget = document.getElementById("portalContents");
	const portalMutConfig = { childList: true };

	const portalObserverCB = function (mutationList, observer) {
		if (document.getElementById("portalContents-cont") && document.getElementById("namebar")) {
			// stop observing mutations
			observer.disconnect();
			observer.takeRecords();

			// force the scorm window to have a mobile meta tag...
			var vp = document.createElement("meta");
			vp.id = "viewport";
			vp.name = "viewport";
			vp.content = "width=device-width, initial-scale=1.0";
			window.parent.document.getElementsByTagName("head")[0].appendChild(vp);

			// set up some vars for glossary and portal functions
			setGlossVars();
			setPortalVars();

			//See if the student is using Firefox on iOS
			if (studentBrowserInfo.device.type === "mobile" && studentBrowserInfo.browser.name === "Firefox" && studentBrowserInfo.os.name === "iOS") {
				isIOSFF = true;
			}

			showWelcome();

			//LESSON SCROLLING...
			//ONSCROLL PROBLEM WORKAROUND FOR FF
			document.addEventListener("mousedown", ffOnScrollStart, false);
			document.addEventListener("touchstart", ffOnScrollStart, false);
			document.addEventListener("mouseup", ffOnScrollStop, false);
			document.addEventListener("touchend", ffOnScrollStop, false);

			// click on outside flyouts closes flyout
			document.addEventListener("click", closeFlyouts, false);

			//LESSON SCROLLING...
			//All OTHER BROWSERS...
			document.getElementById("JcComponents").ontouchmove = function () {
				progress_bar();
			};
			document.getElementById("JcComponents").addEventListener(
				"scroll",
				function () {
					// recommended via research, but works everywhere except for ff on desktop
					progress_bar();
				},
				false
			);

			window.addEventListener("resize", bPortalResize);

			document.getElementById('skip-to-main').innerHTML = course.onReplaceTemplateVar('default_content', 'Labels.skipToMain');
			document.getElementById('skip-to-main').addEventListener('click', skipToMain,false);
			document.getElementById('skip-to-main').addEventListener('keydown', skipToMain,false);

			// need to see if we should show terms and intro vid
			// but we have to wait until LRS state is retrieved
			if (!/demo/.test(courseType)) {
				let lrsReady = setInterval(function() {
					if (courseReady && document.getElementById("termsCover-cont")) {
						clearInterval(lrsReady);

						// show intro alert
						if ((showTerms && showIntroVideo) && (!termsViewed || !videoViewed) && !/demo/.test(course.view.courseType)) {
							doAlert("introVidTerms");
						}
						else if (showTerms && !termsViewed && !/demo/.test(course.view.courseType)) {
							showLegal();
						}
						
					}
				}, 100);
			}

			window.addEventListener('popstate', popState, false);
		}
	};

	// mutation observer
	const portalObserver = new MutationObserver(portalObserverCB);
	portalObserver.observe(portalMutTarget, portalMutConfig);

})();


/***** START HISTORY API FUNCTIONS *****/

// When the page changes, a new state is pushed to window.history.
// This function creates a new state with the function name
// that changes the page, the arguments for said function, and
// context (if other than window). then it renders the state 
// based on the function name.
function pushHistory(context, functionName, functionArgs, e) {
	if (e.type === "click" || (e.type === "keydown" && (e.which === keyCodes.RETURN))) {
		let lessonName;
		// setting the state url using current window's search params
		let url = `?${new URLSearchParams(window.location.search).toString()}`;
		course.view.state.url = url.replace(/&?(?:template|module|lesson|page)=[^&]+/g, "");

		// update generic state items
		course.view.state.funcName = functionName;
		course.view.state.funcContext = context;
		course.view.state.funcArgs = functionArgs;
		course.view.state.prevTemplate = course.view.state.template;
		// always reset pageView to null
		// Page_Selection/progress_bar will set this
		course.view.state.pageViewed = null;
		
		// only reset integrityCheck if we're not on the integrity or exam templates
		// if (!/(?:integrity|exam)/i.test(functionName)) {
		// 	course.view.state.integrityCheck = false;
		// }

		// set state mod number 
		if (e.target.getAttribute('data-module') || findAncestor(e.target, 'attr', 'data-module')) {
			course.view.state.module = (e.target.getAttribute('data-module')) ? Number(e.target.getAttribute('data-module')) : Number(findAncestor(e.target, 'attr', 'data-module').getAttribute('data-module'));
		}

		// set state lesson number
		if (e.target.getAttribute('data-lesson') || findAncestor(e.target, 'attr', 'data-lesson')) {
			course.view.state.lesson = (e.target.getAttribute('data-lesson')) ? Number(e.target.getAttribute('data-lesson')) : Number(findAncestor(e.target, 'attr', 'data-lesson').getAttribute('data-lesson'));
			course.view.state.pgTotal = course.onReplaceTemplateVar('TOC', `[${course.view.state.module - 1}][${course.view.state.lesson - 1}]`).length - 1;
		}

		// set state page number
		if (e.target.getAttribute('data-page') || findAncestor(e.target, 'attr', 'data-page')) {
			course.view.state.page = (e.target.getAttribute('data-page')) ? Number(e.target.getAttribute('data-page')) : Number(findAncestor(e.target, 'attr', 'data-page').getAttribute('data-page'));
		}

		// use functionName to determine what other state
		// parameters need to change
		switch (functionName) {
			case "handleSwapTemplate":
				swapTemplateHandler(functionArgs, e);
				break;

			case "updateDash":
				course.view.state.template = "myDashboard";
				course.view.state.docTitle = `${course.onReplaceTemplateVar('course_settings', 'Portal_Setup.Course_Name')}: ${course.onReplaceTemplateVar('default_content', 'Labels.myDashboard')}: ${course.onReplaceTemplateVar('default_content', 'Labels.moduleNum')}`;
				break;

			case "view_lesson":
				lessonName = course.onReplaceTemplateVar('TOC', `[${course.view.state.module - 1}][${course.view.state.lesson - 1}][0].TOC_Main_Title`);
				course.view.state.template = "lesson";
				course.view.state.docTitle = `${course.onReplaceTemplateVar('course_settings', 'Portal_Setup.Course_Name')}: ${lessonName}`;
				course.view.state.page = null;
				break;

			case "Page_Selection":
				lessonName = course.onReplaceTemplateVar('TOC', `[${course.view.state.module - 1}][${course.view.state.lesson - 1}][0].TOC_Main_Title`);
				course.view.state.template = "page";
				course.view.state.docTitle = `${course.onReplaceTemplateVar('course_settings', 'Portal_Setup.Course_Name')}: ${lessonName}, ${course.onReplaceTemplateVar("default_content", "Labels.page")}`;
				break;

			// case "showEOL":
			// 	course.view.state.template = "eol";
			// 	course.view.state.docTitle = `${course.onReplaceTemplateVar('course_settings', 'Portal_Setup.Course_Name')}: ${course.onReplaceTemplateVar('default_content', 'Labels.practiceQuestions')}`;
			// 	if (/hioc/.test(course.view.courseType)) {
			// 		course.view.state.docTitle += `, ${course.onReplaceTemplateVar("default_content", "Labels.page")}`;
			// 	}
			// 	break;

			// case "showIntegrityStatement":
			// 	course.view.state.docTitle = `${course.onReplaceTemplateVar('course_settings', 'Portal_Setup.Course_Name')}: ${course.onReplaceTemplateVar('default_content', 'Labels.integrity')}`;
			// 	course.view.state.template = "integrity";
			// 	break;

			// case "launchExam":
			// 	course.view.state.docTitle = `${course.onReplaceTemplateVar('course_settings', 'Portal_Setup.Course_Name')}: ${course.onReplaceTemplateVar('default_content', 'Labels.moduleExam')}`;
			// 	course.view.state.template = "exam";
			// 	break;
		}

		// SET STATE URL
		// template
		if (course.view.state.template != 'home') {
			course.view.state.url = `${course.view.state.url}&template=${course.view.state.template}`;
		} 
		// module
		if (course.view.state.module) {
			course.view.state.url = `${course.view.state.url}&module=${course.view.state.module}`;
		}
		// lesson
		if (course.view.state.lesson) {
			course.view.state.url = `${course.view.state.url}&lesson=${course.view.state.lesson}`;
		}
		// page
		if (course.view.state.page) {
			course.view.state.url = `${course.view.state.url}&page=${course.view.state.page}`;
		}
		
		// push state to window.history
		window.history.pushState(course.view.state, null, course.view.state.url);
		render(course.view.state);
	}
}

function swapTemplateHandler(functionArgs, e) {
	let template = functionArgs[0];
	course.view.state.template = template;
	course.view.state.pgTotal = null;
	course.view.state.lesson = null;
	course.view.state.page = null;

	if (template != "module") {
		course.view.state.module = null;
		document.body.removeAttribute('data-module');
	}

	if (template != "home") {
		// course.view.state.url = `template=${template}`
	}

	if (!/(?:module|home)/.test(template)) {
		course.view.state.docTitle = `${course.onReplaceTemplateVar('course_settings', 'Portal_Setup.Course_Name')}: ${course.onReplaceTemplateVar('default_content', `Labels.${template}`)}`;
	}

	switch (template) {
		case "home":
			course.view.state.docTitle = `${course.onReplaceTemplateVar("course_settings", "Portal_Setup.Course_Name")}: ${course.onReplaceTemplateVar("course_settings", "Portal_Setup.Course_Title")}`;
			break;

		case "module":
			course.view.state.docTitle = `${course.onReplaceTemplateVar("course_settings", "Portal_Setup.Course_Name")}: ${course.onReplaceTemplateVar("default_content", "Labels.moduleNum")}: ${course.onReplaceTemplateVar('course_settings', `Lesson_setup[${course.view.state.module - 1}].Title`)}`;
			document.body.setAttribute('data-module', course.view.state.module);
			break;
	}
}

// calls the function name and args
function render(state) {
	// close any open menus or modals
	if (document.getElementById('Toc_flyout').classList.contains('open')) {
		toc_slide();
	}
	if (document.getElementById('menu').classList.contains('open')) {
		menuToggle();
	}
	closeAlert(null);

	// set the document title
	document.title = course.view.state.docTitle;
	// call function to change portal view
	callFuncByVar(state.funcName, state.funcContext, state.funcArgs);
}

// uses apply to call function name that's been saved in a var
function callFuncByVar(functionName, context = window, args) {
	// set context to course object if context is text equal to "course"
	if (context == "course") context = course;
	// check if there are namespaces specified in funcName
	let namespaces = functionName.split(".");
	// the function name is the last of the namespace array
	let func = namespaces.pop();
	// cycle through namespace array to build context for
	// function call
	for (let i = 0; i < namespaces.length; i++) {
		context = context[namespaces[i]];
	}

	// use apply method to call function with context and args 
	return context[func].apply(context, args);
}

// onpopstate happens when the back/fwd button is activated
function popState (event) {
	console.log(event);
	if (event.state) {
		// save the previous template
		let prevTemplate = course.view.state.template;
		// // save state of integrityCheck
		// let integrityCheck = course.view.state.integrityCheck;

		// reset the state based on the pop event
		course.view.state = event.state;
		// reset prevTemplate and integrity check
		course.view.state.prevTemplate = prevTemplate;
		// course.view.state.integrityCheck = integrityCheck;
		// render new state if there's a state
		if (event.state) {
			render(event.state);
		}
	}
};

/***** END HISTORY API FUNCTIONS *****/

/***** START UTILITY FUNCTIONS *****/
function skipToMain(e) {
	if (e.type == 'click' || (e.type == 'keydown' && e.which == keyCodes.RETURN)) {
		document.querySelector('[role="main"]').focus()
	}
}

function getOSandBROWSER() {
	var bParser = new UAParser();
	var bResult = bParser.getResult();

	return bResult;
}

function ffOnScrollStart() {
	var mouseBrowser = getOSandBROWSER();

	if (mouseBrowser.browser.name.indexOf("Firefox") !== -1 && document.getElementById("JcComponents").style.display === "block") {
		window.bInterval = setInterval(function () {
			progress_bar();
		}, 100);
	}
}

function ffOnScrollStop() {
	clearInterval(window.bInterval);
}

function setPortalVars() {
	for (let i = 0; i < TOC.length; i++) {
		var tempCount = TOC[i].length;

		lessonCounts[i] = tempCount;

		bTotalLessons += tempCount;
	}
}

function bPortalResize() {
	//turn off the main scroller...
	document.getElementsByTagName("body")[0].style.overflow = "hidden";
	document.getElementById("lessonContent").style.overflow = "hidden";

	//get the height needed
	var targetTop = document.getElementById("indexHead").offsetHeight + document.getElementById("namebar").offsetHeight;
	var targetBtm = document.getElementById("indexFooter").offsetTop;
	var targetHeight = targetBtm - targetTop;

	//Master div
	//Remove first block if covering the screen isn't needed...
	if (isExamPage === true) {
		masterDiv.style.top = 0;
		masterDiv.style.bottom = 0;
		masterDiv.style.height = "100%";
		masterDiv.style.zIndex = 999997;
	} else {
		masterDiv.style.top = targetTop + "px";
		masterDiv.style.height = targetHeight + "px";
		masterDiv.style.zIndex = 99;
	}
	
	// menu
	document.getElementById("menu").style.top = targetTop + "px";
	document.getElementById("menu").style.height = targetHeight + "px";
	// document.getElementById("menu").style.overflowY = "auto";

	//Lessons
	document.getElementById("lessonContent").style.position = "relative";
	document.getElementById("lessonContent").style.top = targetTop + "px";
	document.getElementById("lessonContent").style.height = targetHeight + "px";
	document.getElementById("lessonContent").style.overflowY = "auto";

	// JB components
	document.getElementById("JcComponents").style.position = "relative";
	document.getElementById("JcComponents").style.top = targetTop + document.getElementById("pg_header").offsetHeight + "px";
	document.getElementById("JcComponents").style.height = targetHeight - document.getElementById("pg_header").offsetHeight + "px";
	document.getElementById("JcComponents").style.overflowY = "auto";
}

function hideLessonStuff() {
	document.getElementById("lessonContent").classList.add("hidden");
	document.getElementById("lessonContent").removeAttribute('role');
	document.getElementById("pg_header").classList.add("hidden");
	document.getElementById("JcComponents").classList.add("hidden");
	document.getElementById("JcComponents").removeAttribute('role');
	// if (document.getElementById("Toc_flyout").classList.contains("open")) {
	// 	toc_slide();
	// }

	document.getElementById("portalContents").classList.remove("hidden");
	document.getElementById("portalContents").setAttribute('role', 'main');
	document.getElementById("indexHead").classList.remove("hidden");
	masterDiv.style.overflowY = "auto";
	if (document.getElementById("returnToLsn")) {
		document.getElementById("returnToLsn").classList.add("hidden");
		document.getElementById("returnToLsn").setAttribute("aria-disabled", "true");
	}

	if (isExamPage === true) bGetState();

	isExamPrep = false;
	isExamPage = false;
	bPortalResize();
}

function closeFlyouts(e) {
	let portalMenu = document.getElementById("menu");
	let tocMenu = document.getElementById("Toc_flyout");

	if (portalMenu.classList.contains("open")) {
		menuToggle(e);
	}

	if (tocMenu.classList.contains("open")) {
		toc_slide(e);
	}
}

// depending on where the call is coming from,
// the arg might be an event or just null.
// all are valid.
function toc_slide(e) {
	if (!e || e.type === "click" || (e.type === "keydown" && (e.which === keyCodes.SPACE || e.which === keyCodes.RETURN))) {
		let toc_fly_icon = document.getElementById("bar_close");

		// opening menu
		if (!document.getElementById("Toc_flyout").classList.contains("open")) {
			// set padding of flyout menu
			document.getElementById('toc_fMenu').style.paddingTop = `${document.getElementById('JcComponents').offsetTop + 1}px`;
			activeFocus = document.activeElement;
			document.getElementById("toc_toggle").setAttribute("aria-expanded", "true");
			toc_fly_icon.classList.remove("fa-bars");
			toc_fly_icon.classList.add("fa-close");
			document.getElementById("Toc_flyout").classList.add("open");
			document.getElementById('toc-fContainer').removeAttribute('aria-hidden');
			document.querySelector("#toc-fContainer > li:first-child.toc_fly_buttons").focus();

		// closing menu
		} else {
			document.getElementById("toc_toggle").removeAttribute("aria-expanded");
			toc_fly_icon.classList.add("fa-bars");
			toc_fly_icon.classList.remove("fa-close");
			document.getElementById("Toc_flyout").classList.remove("open");
			document.getElementById('toc-fContainer').setAttribute('aria-hidden', 'true');

			if (!e || e.target.id == "toc_toggle") {
				activeFocus.focus();
				if (e) e.preventDefault();
			}
		}

		if (e) {
			e.stopPropagation();
			e.preventDefault();
		}
	}
}

// depending on where the call is coming from,
// the arg might be an event or just null.
// all are valid.
function menuToggle(e) {
	if (!e || e.type === "click" || (e.type === "keydown" && (e.which === keyCodes.RETURN || e.which === keyCodes.SPACE))) {
		let toggleIcon = document.getElementById('menu_close');

		// if menu is closed (it's display is none)
		if (!document.getElementById("menu").classList.contains('open')) {
			document.getElementById("menu").classList.add("open");
			document.getElementById("menu").removeAttribute("aria-hidden");
			// update my status if it's non-demo hioc or hybrid
			// if (!/demo/.test(course.view.courseType) && /(?:hybrid|hioc)/.test(course.view.courseType)) {
				checkMyStatus();
			// }
			// menu
			document.getElementById("menu").style.top = document.querySelector('[role="main"]').offsetTop - 1 + "px";
			activeFocus = document.activeElement;
			document.getElementById("indexName").setAttribute("aria-expanded", "true");
			toggleIcon.classList.remove("fa-bars");
			toggleIcon.classList.add("fa-close");

			// had to use transition all to get a smooth
			// transition on the open/close animation. 
			// so we have to wait before trying to focus inside the menu. 
			setTimeout(function() { 
				document.querySelector("#menu-container > li").focus();
			}, 50);
			
		}
		// if menu is open
		else {
			document.getElementById("indexName").removeAttribute("aria-expanded");
			toggleIcon.classList.remove("fa-close");
			toggleIcon.classList.add("fa-bars");
			document.getElementById("menu").classList.remove("open");
			document.getElementById("menu").setAttribute("aria-hidden", "true");

			if (!e || e.target.id == "indexClose") {
				activeFocus.focus();
				if (e) e.preventDefault();
			}
		}
		if (e) {
			e.stopPropagation();
			e.preventDefault();
		}
	}
}

// handles keydown actions in a menu. allows esc
// to close menu. use with .bind(menuContainer)
// to ensure that "this" is the menuContainer
function portalMenuHandler(toggleFunction, e) {
    let target = e.target
    let key = e.key;
    let flag = false;
    let menuitems = slice(this.querySelectorAll('[role="menuitem"]'));
    let firstMenuItem = menuitems[0];
    let lastMenuItem = menuitems[menuitems.length - 1];

    // // find out which item is currently focused
    // let currentItemIndex;
    // for (let i = 0; i < menuitems.length; i++) {
    //     if (menuitems[i] == target) {
    //         currentItemIndex = i;
    //         break;
    //     }
    // }

    switch (key) {
        case "Esc":
        case "Escape":
            toggleFunction();
            activeFocus.focus();
            flag = true;
            break;

        case "Up":
        case "ArrowUp":
            if (target == firstMenuItem) {
                lastMenuItem.focus();
            }
            else {
                target.previousElementSibling.focus();
            }
            flag = true;
            break;

        case "Down":
        case "ArrowDown":
            if (target == lastMenuItem) {
                firstMenuItem.focus();
            }
            else {
                target.nextElementSibling.focus();
            }
            flag = true;
            break;

        case "Home":
        case "PageUp":
            firstMenuItem.focus();
            flag = true;
            break;

        case "End":
        case "PageDown":
            lastMenuItem.focus();
            flag = true;
            break;

        case "Tab":
            toggleFunction();
            if (e.shiftKey) {
                activeFocus.focus();
            }
            break;

    }

    if (flag) {
        e.stopPropagation();
        e.preventDefault();
    }

}

function setEventListeners(id, template) {
	let parentEl = document.getElementById(id);
	let listenerEls = slice(parentEl.querySelectorAll('[role="link"], [role="button"], [role="checkbox"], [role="menuitem"], button, input'));

	if (template == "myDashboard") {
		// reference to swap call so we can add/remove
		// event listeners on the dashboard elements
		pushHistoryHandler = pushHistory.bind(course, "course", "handleSwapTemplate", ["module", "link"]);
	}
	if (template == "module") {
		// reference to doAlert call so we can add/remove
		// event listeners for the exam launch buttons
		examAlertHandler = doAlert.bind(null, "pleaseComplete");
	}
	if (/Cover-cont/.test(id)) {
		parentEl.addEventListener("keydown", portalModalTrap.bind(parentEl), false);
	}

	if (/menu-cont/.test(id)) {
		parentEl.addEventListener("keydown", portalMenuHandler.bind(parentEl, menuToggle), false);
	}
	else if (/Toc_flyout-cont/.test(id)) {
		parentEl.addEventListener("keydown", portalMenuHandler.bind(parentEl, toc_slide), false);
	}

	for (let listenerEl of listenerEls) {
		// set the role of the element
		let role = listenerEl.getAttribute("role") ? listenerEl.getAttribute("role") : listenerEl.tagName.toLowerCase();
		let classList = listenerEl.classList;
		let cls;

		// if targets are part of toggle menu,
		// add menuToggle listener
		if (/menu/.test(template)) {
			// listenerEl.addEventListener("click", menuToggle, false);
			// listenerEl.addEventListener("keydown", menuToggle, false);
		}

		// using classnames to determine what listener to add
		for (let className of classList) {
			// anything with link in the class
			// swaps a template
			if (/(.*?)link/i.test(className)) {
				cls = className.replace(/(.*?)(?:L|l)ink/, "$1");
				// listenerEl.addEventListener("click", course.handleSwapTemplate.bind(course, cls, role), false);
				// listenerEl.addEventListener("keydown", course.handleSwapTemplate.bind(course, cls, role), false);
				listenerEl.addEventListener("click", pushHistory.bind(course, "course", "handleSwapTemplate", [cls, role]), false);
				listenerEl.addEventListener("keydown", pushHistory.bind(course, "course", "handleSwapTemplate", [cls, role]), false);

			}

			// anything with lesson_launch in the class
			// opens a lesson
			else if (/lesson_launch/.test(className)) {
				// listenerEl.addEventListener("click", view_lesson.bind(null, mNum, lsNum, "TC"), false);
				// listenerEl.addEventListener("keydown", view_lesson.bind(null, mNum, lsNum, "TC"), false);
				listenerEl.addEventListener("click", pushHistory.bind(course, undefined, "view_lesson", []), false);
				listenerEl.addEventListener("keydown", pushHistory.bind(course, undefined, "view_lesson", []), false);
			}

			// anything with aboutClose  in the class
			// closes an open about modal
			else if (/aboutClose/.test(className)) {
				listenerEl.addEventListener("click", closeAbout, false);
				listenerEl.addEventListener("keydown", closeAbout, false);
			}

			// about opens the about modal
			// w/ infographic
			else if (/about/i.test(className)) {
				listenerEl.addEventListener("click", showAbout, false);
				listenerEl.addEventListener("keydown", showAbout, false);
			}

			// start opens the first lesson page
			else if (/start/i.test(className)) {
				// TODO: Test in shortcourse to make sure this works like it should
				// listenerEl.addEventListener("click", view_lesson.bind(null, 0, 1, "TC"), false);
				// listenerEl.addEventListener("keydown", view_lesson.bind(null, 0, 1, "TC"), false);
				// history api listeners
				listenerEl.addEventListener("click", pushHistory.bind(course, undefined, "view_lesson", []), false);
				listenerEl.addEventListener("keydown", pushHistory.bind(course, undefined, "view_lesson", []), false);
			}

			// anything with contact in the class
			// opens the contact email
			else if (/contact/.test(className)) {
				listenerEl.addEventListener(
					"click",
					function (e) {
						location.href = "mailto:education@loma.org?subject=" + courseName;
					},
					false
				);
				listenerEl.addEventListener(
					"keydown",
					function (e) {
						if (e.which === keyCodes.RETURN) {
							location.href = "mailto:education@loma.org?subject=" + courseName;
						}
					},
					false
				);
			}

			// anything with menu-toggle in the class
			// toggles the hamburger menu
			else if (/menu-toggle/.test(className) && /Head/.test(template)) {
				listenerEl.addEventListener("click", menuToggle, false);
				listenerEl.addEventListener("keydown", menuToggle, false);
			}

			// anything with videoBtn in the class
			// opens the video modal
			else if (/videoBtn/.test(className)) {
				let video = listenerEl.getAttribute("data-video");
				listenerEl.addEventListener("click", showVid.bind(null, vidLibrary.helpVideos[video]));
				listenerEl.addEventListener("keydown", showVid.bind(null, vidLibrary.helpVideos[video]));
			}

			// anything with ebook_btn in the class
			// downloads an ebook
			else if (/ebook_btn/.test(className)) {
				listenerEl.addEventListener("click", downloadEbook, false);
				listenerEl.addEventListener("keydown", downloadEbook, false);
			}

			// anything with circle in the class
			// updates the dashboard
			else if (/circle/.test(className)) {
				// listenerEl.addEventListener("click", updateDash, true);
				// listenerEl.addEventListener("keydown", updateDash, true);
				// history api listener
				listenerEl.addEventListener("click", pushHistory.bind(course, undefined, 'updateDash', []), false);
				listenerEl.addEventListener("keydown", pushHistory.bind(course, undefined, 'updateDash', []), false);
			}

			// anything with pq_btn in the class
			// opens practice questions
			else if (/pq_btn/.test(className)) {
				
				listenerEl.addEventListener("click", goQM.bind(window, course.view.state.module, Number(listenerEl.getAttribute('data-chapter')) - 1, "PQ"), false);
				listenerEl.addEventListener("keydown", goQM.bind(window, course.view.state.module, Number(listenerEl.getAttribute('data-chapter')) - 1, "PQ"), false);

				// let lessonPage = false;
				// if (course.view.state.template == "lesson") {
				// 	lessonPage = true
				// }
				// history api listener
				// listenerEl.addEventListener("click", pushHistory.bind(course, undefined, 'showEOL', ["EOL", lessonPage]), false);
				// listenerEl.addEventListener("keydown", pushHistory.bind(course, undefined, 'showEOL', ["EOL", lessonPage]), false);
			}

			// anything with se_btn in the class
			// opens sample exam
			else if (/se_btn/.test(className)) {
				
				listenerEl.addEventListener("click", goQM.bind(window, course.view.state.module, 0, "SE"), false);
				listenerEl.addEventListener("keydown", goQM.bind(window, course.view.state.module, 0, "SE"), false);
				// history api listener
				// listenerEl.addEventListener("click", pushHistory.bind(course, undefined, 'showEOL', ["SE"]), false);
				// listenerEl.addEventListener("keydown", pushHistory.bind(course, undefined, 'showEOL', ["SE"]), false);
			}

			// anything with pdf_btn in the class
			// opens a pdf
			else if (/pdf_btn/.test(className) || /pts_btn/.test(className)) {
				let pdf = listenerEl.getAttribute("data-pdf");
				listenerEl.addEventListener("click", openPDF.bind(null, pdf), false);
				listenerEl.addEventListener("keydown", openPDF.bind(null, pdf), false);
			}

			// anything with exam_btn in the class
			// opens sample exam
			// else if (/hiocexam_btn/.test(className)) {
			// 	// listenerEl.addEventListener("click", launchExam.bind(null), false);
			// 	// listenerEl.addEventListener("keydown", launchExam.bind(null), false);
			// 	// history api listener
			// 	listenerEl.addEventListener("click", pushHistory.bind(course, undefined, 'launchExam', []), false);
			// 	listenerEl.addEventListener("keydown", pushHistory.bind(course, undefined, 'launchExam', []), false);
			// }

			// anything with exam_btn in the class
			// opens QM 
			else if (/exam_btn/.test(className)) {
				// examLaunchHandler = pushHistory.bind(course, undefined, "showIntegrityStatement", []);
				
				if (courseType === "hybrid") {
					examAlertHandler = EOMWarning.bind(window, course.view.state.module, 0, "EOM");
				}
				else {
					examAlertHandler = goQM.bind(window, course.view.state.module, 0, "EOM");
				}
				listenerEl.addEventListener("click", examLaunchHandler, false);
				listenerEl.addEventListener("keydown", examLaunchHandler, false);
				// history api listener
				// listenerEl.addEventListener("click", pushHistory.bind(course, undefined, 'showEOL', [pqMod, 0, "EOM"]), false);
				// listenerEl.addEventListener("keydown", pushHistory.bind(course, undefined, 'showEOL', [pqMod, 0, "EOM"]), false);
			}

			// anything with wVideo in the class
			// opens a modal to show welcome video
			else if (/wVideoBtn/.test(className)) {
				listenerEl.addEventListener("click", showWelcomeVideo, false);
				listenerEl.addEventListener("keydown", showWelcomeVideo, false);
			}

			// anything with terms or privacy in the class
			// opens a modal to show terms/privacy
			else if (/(termsBtn|privacyBtn)/.test(className)) {
				listenerEl.addEventListener("click", showLegal, false);
				listenerEl.addEventListener("keydown", showLegal, false);
			}

			// anything with reportBtn in the class
			// redirects to getting started page to
			// download the ereader
			else if (/reportBtn/.test(className)) {
				listenerEl.addEventListener("click", reportError, false);
				listenerEl.addEventListener("keydown", reportError, false);
			}

			// anything with hasErBtn in the class
			// sets hasEreader to ture and saves
			// the state
			else if (/hasErBtn/.test(className)) {
				listenerEl.addEventListener("click", ereaderDownloaded, false);
				listenerEl.addEventListener("keydown", ereaderDownloaded, false);
			}

			// anything with erBtn in the class
			// redirects to getting started page to
			// download the ereader
			else if (/erBtn/.test(className)) {
				listenerEl.addEventListener("click", getEreader, false);
				listenerEl.addEventListener("keydown", getEreader, false);
			}

			// anything with xSpotEOC  in the class
			// closes an open eoc model
			else if (/xSpotEOC/.test(className)) {
				listenerEl.addEventListener("click", closeEoc, false);
				listenerEl.addEventListener("keydown", closeEoc, false);
			}

			// anything with xSpot or clsBtn in the class
			// closes an open alertBox
			else if (/(xSpot|clsBtn|cnclBtn)/.test(className)) {
				listenerEl.addEventListener("click", closeAlert, false);
				listenerEl.addEventListener("keydown", closeAlert, false);
			}

			// anything with surveyBtn in the class
			// goes to survey
			else if (/(surveyBtn)/.test(className)) {
				let url = (/hioc/.test(course.onReplaceTemplateVar('course_settings', 'Portal_Setup.Course_Type'))) ? course.onReplaceTemplateVar('default_content', 'EOCLinks.survey.hioc') : course.onReplaceTemplateVar('default_content', 'EOCLinks.survey.hybrid');
				listenerEl.addEventListener("click", openLink.bind(window, url), false);
				listenerEl.addEventListener("keydown", openLink.bind(window, url), false);
			}

			// anything with xSpot or clsBtn in the class
			// closes an open alertBox
			else if (/EOMbtn/.test(className)) {
				listenerEl.addEventListener("click", goQM(course.view.state.module, 0, "EOM"), false);
				listenerEl.addEventListener("keydown", goQM(course.view.state.module, 0, "EOM"), false);
			}

			// anything with kt-btn in the class
			// closes an open keyterm modal
			else if (/(kt-btn)/.test(className)) {
				listenerEl.addEventListener("click", closeKeyterm, false);
				listenerEl.addEventListener("keydown", closeKeyterm, false);
			}

			// disabled exam buttons launch and alert
			else if (/disabled_launch_btn/.test(className)) {
				listenerEl.addEventListener("click", examAlertHandler, false);
				listenerEl.addEventListener("keydown", examAlertHandler, false);
			}

			// return buttons return to module
			else if (/returnToLsn/.test(className)) {
				listenerEl.addEventListener("click", returnToMod, false);
				listenerEl.addEventListener("keydown", returnToMod, false);
			}

			// bookmark button takes user to bookmark
			else if (/goBookmark/.test(className)) {
				listenerEl.addEventListener("click", goToBookmark, false);
				listenerEl.addEventListener("keydown", goToBookmark, false);
			}

			// buttons on TOC page call page selection
			else if (/toc_main_btn/.test(className)) {
				listenerEl.addEventListener("click", pushHistory.bind(course, undefined, "Page_Selection", []), false);
				listenerEl.addEventListener("keydown", pushHistory.bind(course, undefined, "Page_Selection", []), false);
			}

			// resource_btn class calls showResources (shows resource sections)
			else if (/resource_btn/.test(className)) {
				listenerEl.addEventListener("click", showResources, false);
				listenerEl.addEventListener("keydown", showResources, false);
			}

			// help_btn class calls showResources (shows resource sections)
			else if (/help_btn/.test(className) || /helpback/.test(className)) {
				listenerEl.addEventListener("click", showHelpTopics, false);
				listenerEl.addEventListener("keydown", showHelpTopics, false);
			}

			// bHelpItem class calls showHelpAnswer
			else if (/bHelpItem/.test(className)) {
				listenerEl.addEventListener("click", showHelpAnswer, false);
				listenerEl.addEventListener("keydown", showHelpAnswer, false);
			} else if (/helpback/.test(className)) {
			}

			// add_doc_btn class calls openAddedDoc (additional docs)
			else if (/add_doc_btn/.test(className)) {
				listenerEl.addEventListener("click", openAddedDoc, false);
				listenerEl.addEventListener("keydown", openAddedDoc, false);
			}

			// summary_btn class calls openSummary (lesson summaries)
			else if (/summary_btn/.test(className)) {
				listenerEl.addEventListener("click", openSummary, false);
				listenerEl.addEventListener("keydown", openSummary, false);
			}

			// help_vid_btn calls showVid
			else if (/help_vid_btn/.test(className)) {
				let videoKey = listenerEl.getAttribute("data-vidnum");
				let video = course.view.replaceVars("video_library.helpVideos." + videoKey, listenerEl);
				listenerEl.addEventListener("click", showVid.bind(null, video), false);
				listenerEl.addEventListener("keydown", showVid.bind(null, video), false);
			}

			// vid_btn class calls showVid
			else if (/vid_btn/.test(className)) {
				let vidNums = listenerEl.getAttribute("data-vidnum").split(",");
				let vidModIndex = Number(vidNums[0]) - 1;
				let vidNumIndex = Number(vidNums[1]) - 1;
				let video;
				if (/expert/.test(listenerEl.className)) {
					video = course.view.replaceVars("video_library.expertvids_setup[" + vidModIndex + "][" + vidNumIndex + "]", listenerEl);
				} else if (/figure/.test(listenerEl.className)) {
					video = course.view.replaceVars("video_library.libraryvids[" + vidModIndex + "][" + vidNumIndex + "]", listenerEl);
				}
				listenerEl.addEventListener("click", showVid.bind(null, video), false);
				listenerEl.addEventListener("keydown", showVid.bind(null, video), false);
			}

			// vidClose calls closeVid
			else if (/vidClose/.test(className)) {
				listenerEl.addEventListener("click", closeVid, false);
				listenerEl.addEventListener("keydown", closeVid, false);
			}

			// transcript-toggle calls closeVid
			else if (/transcript-toggle/.test(className)) {
				listenerEl.addEventListener("click", transToggle, false);
				listenerEl.addEventListener("keydown", transToggle, false);
			}

			// toc_toggle class calls toc_slide()
			else if (/toc_toggle/.test(className)) {
				listenerEl.addEventListener("click", toc_slide, false);
				listenerEl.addEventListener("keydown", toc_slide, false);
			}

			// open_toc_btn class calls toc_back_to_main()
			else if (/open_toc_btn/.test(className)) {
				listenerEl.addEventListener("click", toc_back_to_main, false);
				listenerEl.addEventListener("keydown", toc_back_to_main, false);
			}

			// open_page_btn class calls Page_Selection()
			else if (/open_page_btn/.test(className)) {
				//let id = parseInt(listenerEl.id.replace(/^.*_(\d+)$/, "$1"));
				// listenerEl.addEventListener("click", Page_Selection.bind(null, id, 1), true);
				// listenerEl.addEventListener("keydown", Page_Selection.bind(null, id, 1), true);
				listenerEl.addEventListener("click", pushHistory.bind(course, undefined, "Page_Selection", []), true);
				listenerEl.addEventListener("keydown", pushHistory.bind(course, undefined, "Page_Selection", []), true);
			}
			
			else if (/biginput/.test(className)) {
				var element = document.getElementById('gloss-input')
				var id = 'autocomplete'
				accessibleAutocomplete({
					element: element,
					id: id,
					source: termArray
				});
			}

			// language swaps
			else if (/langSwap/.test(className)) {
				listenerEl.addEventListener("click", legalLang, false);
				listenerEl.addEventListener("keydown", legalLang, false);
			}

			// terms/privacy close
			else if (/closeBtn/.test(listenerEl.id)) {
				listenerEl.addEventListener("click", closeTerms, false);
				listenerEl.addEventListener("keydown", closeTerms, false);
			}

			// terms accept
			else if (/acceptBtn/.test(className)) {
				listenerEl.addEventListener("click", acceptTerms, false);
				listenerEl.addEventListener("keydown", acceptTerms, false);
			}

			// honesty checkmarks
			// else if (/integrity-check/.test(className)) {
			// 	listenerEl.addEventListener("click", integrityCheck.bind(listenerEl), false);
			// 	listenerEl.addEventListener("keydown", integrityCheck.bind(listenerEl), false);
			// } 
			
			// exit
			else if (/(exit|failCloseBtn)/.test(className)) {
				listenerEl.addEventListener("click", closeCourse, false);
				listenerEl.addEventListener("keydown", closeCourse, false);
			}

			else if (/autocomplete/.test(className)) {
				listenerEl.addEventListener("keyup", onAutocompleteSuggest.bind(window, listenerEl, termArray), false);
				listenerEl.addEventListener("focus", onAutocompleteSuggest.bind(window, listenerEl, termArray), false);
				listenerEl.addEventListener("keydown", onAutocompleteKeydown.bind(window, listenerEl), false);
			}
			
			// glossary links
			else if (/glossLnk/.test(className)) {
				listenerEl.addEventListener("click", glossLink.bind(listenerEl), false);
				listenerEl.addEventListener("keydown", glossLink.bind(listenerEl), false);
			}
		}
	}
}

function checkMyStatus() {
	let statusElement = document.getElementById('mystatus');
	let statusParent = statusElement.parentElement;
	// demo hioc or hybrid always goes to M1L1
	if (/demo/.test(course.view.courseType) && /(?:hybrid|hioc)/.test(course.view.courseType)) {
		statusParent.addEventListener('click', pushHistory.bind(null, undefined, "view_lesson", []), false);
		statusParent.addEventListener('keydown', pushHistory.bind(null, undefined, "view_lesson", []), false);
	}
	else {
		let status;
		let modNum;
		let lsnNum

		// clear status element contents and attributes
		statusElement.innerHTML = "";
		let attrs = statusElement.getAttributeNames();
		for (let attr of attrs) {
			if (attr != 'id') {
				statusElement.removeAttribute(attr);
			}
		}

		// clear eventlisteners
		// statusParent.removeEventListener('click', myStatusHandler, false);
		// statusParent.removeEventListener('keydown', myStatusHandler, false);
		statusParent.removeEventListener('click', myStatusHistoryHandler, false);
		statusParent.removeEventListener('keydown', myStatusHistoryHandler, false);

		// cycle through module scores
		for (let m = 0; m < TOC.length; m++) {
			// means we have a module that is not complete...
			if (moduleScores[m][1] === "---- - -- - --") { 
				modNum = m + 1;
				break;
			}
		}

		// if a mod num wasn't set above, course is complete
		if (!modNum) {
			// set status text
			status = course.view.replaceVars("default_content.Labels.courseComplete", statusElement);
			myStatusHistoryHandler = null;
		}
		else {	
			// if it's hioc, we need to see if all lessons are complete
			if (/hioc/.test(course.view.courseType)) {
				for (let l = 0; l < TOC[modNum - 1].length; l++) {
					if (bLessonCompletions[modNum - 1][l] === "---- - -- - --") {
						lsnNum = l + 1;
						setAttrs(statusParent, {
							"data-module": modNum,
							"data-lesson": lsnNum
						});
						status = course.view.replaceVars("default_content.Labels.moduleLesson", statusParent);
		
						// myStatusHandler = view_lesson.bind(null, modNum - 1, lsnNum, "TC");
						myStatusHistoryHandler = pushHistory.bind(null, undefined, "view_lesson", []);
						break;
					}
				}
			}

			// if a lesson number wasn't set above, 
			// a module exam is the next step
			if (!lsnNum) {
				// set the module number 
				statusParent.setAttribute('data-module', modNum);
				// set status text
				status = course.view.replaceVars("default_content.Labels.moduleExam", statusParent);

				// myStatusHandler = course.handleSwapTemplate.bind(course, "module", "link");
				myStatusHistoryHandler = pushHistory.bind(course, "course", "handleSwapTemplate", ["module", "link"]);
			} 
		}

		// add status text to element
		statusElement.innerHTML = status;

		// only add event listeners if myStatusHistoryHandler isn't null
		if (myStatusHistoryHandler) {
			// statusParent.addEventListener('click', myStatusHandler, false);
			// statusParent.addEventListener('keydown', myStatusHandler, false);
			statusParent.addEventListener('click', myStatusHistoryHandler, false);
			statusParent.addEventListener('keydown', myStatusHistoryHandler, false);
		}
	}
}

/***** END UTILITY FUNCTIONS *****/

/***** START WELCOME FUNCTIONS *****/
function showWelcome() {
	hideLessonStuff();

	if (!document.getElementById("portal_container").classList.contains("home")) {
		course.handleSwapTemplate("home", "link");
	}

	masterDiv.scrollTop = 0;

	if (/shortcourse/.test(course.view.courseType)) {
		// can be for any course really, but for now it'll stay in the shortcourse arena
		if (!/demo/.test(course.view.courseType) && doLMSGetValue("cmi.core.lesson_status") === "completed") {
			showEOC();
		}
	} else {
		gScrollDestination = document.getElementById("contentBtns").getBoundingClientRect();
	}
}

function showWelcomeVideo(e) {
	if (e.type === "click" || (e.type === "keydown" && (e.which === keyCodes.RETURN || e.which === keyCodes.SPACE))) {
		videoViewed = true;

		switch (course.view.courseType) {
			case "hybrid":
				showVid(vidLibrary.helpVideos.welcome_self_proctored, e);
				break;
			case "pdf":
				showVid(vidLibrary.helpVideos.welcome_proctored, e);
				break;
			case "hioc":
				showVid(vidLibrary.helpVideos.welcome_hioc, e);
				break;
			// NEED TO FILL IN WHAT HAPPENS FOR THE REST...
			//case "shortcourseA":
			default:
				break;
		}

		document.querySelector("#alertButtons .wVideoBtn .welcomeChk").classList.remove("hidden");

		if (termsViewed === true) {
			closeAlert(e);
		}

		//xAPI stuff
		if (isXAPI) {
			bSetState();
			var theStatement = {
				type: "intro_video",
				verb: "viewed",
				activity: "http://activitystrea.ms/schema/1.0/video",
				objectID: "/introvideo"
			};

			LRSSend(theStatement);
		}
		else {
			bSetState();
		}
	}
}
/****** END WELCOME FUNCTIONS ******/


/********* START MOD LANDING FUNCTIONS **********/
function fillCompletions(module) {
	let mNumber = module - 1;
	let examBtn = document.getElementById("moduleexam");
	// only make these updates if we're in a hioc (nondemo)
	if (/hioc/.test(course.view.courseType)) {
		// fill/exam lesson completion dates
		// collect all date elements on the page
		let dateEls = slice(document.querySelectorAll(".lesson_date"));
		// get the current module
		let mod = module - 1;
		let compLessons = 0;
		for (let i = 0; i < dateEls.length; i++) {
			let date;
			let blockParent;

			// get date and parent block depending
			// on whether this iteration is an exam
			// or a lesson

			// if we're on the last iteration,
			// this is the exam
			if (i == dateEls.length - 1) {
				date = moduleScores[mod][1].split("T")[0];
				blockParent = document.getElementById("examBlock");
			}
			// otherwise it's a lesson
			else {
				date = bLessonCompletions[mod][i].split("T")[0];
				blockParent = findAncestor(dateEls[i], "class", "lessonBlock");
			}

			// if the date exists, add it to the element
			if (date) dateEls[i].innerHTML = date;

			// if the date isn't null or blank, set the
			// lesson indicator class to complete and unhide 
			// lesson date from screen readers
			if (date !== null && date !== undefined && date !== "---- - -- - --") {
				// keep track of the number of completed lessons
				compLessons++;
				blockParent.querySelector(".lesson_indicator").classList.remove("lesson_indicator_incomplete");
				blockParent.querySelector(".lesson_indicator").classList.add("lesson_indicator_complete");
				blockParent.querySelector(".lesson_indicator .sr-only").innerHTML = course.onReplaceTemplateVar('default_content', 'Labels.complete');
				blockParent.querySelector(".lesson_date").removeAttribute('aria-hidden');
			}
		}

		// if all lessons are complete and exam isn't,
		// unlock the exam
		if (compLessons === dateEls.length - 1) {

			// swap button classes
			examBtn.classList.remove("disabled_launch_btn");
			examBtn.classList.add("lesson_launch_btn");

			// removed disabled attribute
			examBtn.removeAttribute("aria-disabled");

			// remove event listnerers
			examBtn.removeEventListener("click", examAlertHandler, false);
			examBtn.removeEventListener("keydown", examAlertHandler, false);

			// update the variable with the new event listener
			// doing this so we can remove it after the exam
			// has been completed
			if (courseType === "hybrid") {
				examAlertHandler = EOMWarning.bind(window, mNumber + 1, 0, "EOM");
			}
			else {
				examAlertHandler = goQM.bind(window, course.view.state.module, 0, "EOM");
			}
			// examAlertHandler = pushHistory.bind(course, undefined, "showIntegrityStatement", []);
			
			// add new event listener to launch exam
			examBtn.addEventListener("click", examAlertHandler, false);
			examBtn.addEventListener("keydown", examAlertHandler, false);

			// update button text
			examBtn.innerHTML = course.view.replaceVars("default_content.Labels.startExam", examBtn);
		}
		// if all lessons and exam are complete,
		// update the doAlert listener
		// TODO: Test this once exam launch works
		else if (compLessons === dateEls.length) {
			// remove event listnerers
			examBtn.removeEventListener("click", examAlertHandler, false);
			examBtn.removeEventListener("keydown", examAlertHandler, false);

			// update the variable with the new event listener
			// doing this so we can remove it after the exam
			// has been completed
			examAlertHandler = doAlert.bind(null, "examComplete");
			// add new event listener to doAlert exam completed
			examBtn.addEventListener("click", examAlertHandler, false);
			examBtn.addEventListener("keydown", examAlertHandler, false);

			// update button text
			examBtn.innerHTML = course.view.replaceVars("default_content.Labels.examCompleted", examBtn);
		}

		// adjust the position of the background image
		document.getElementsByClassName("description")[0].style.backgroundPositionY = document.getElementsByClassName("description")[0].getElementsByTagName("p")[0].offsetTop + "px";
		document.getElementsByClassName("description")[0].style.backgroundPositionX = "100%";
	}
	// if we're in demo mode
	else if (/demo/.test(course.view.courseType)) {
		// remove event listnerers
		examBtn.removeEventListener("click", examAlertHandler, false);
		examBtn.removeEventListener("keydown", examAlertHandler, false);

		// update the variable with the new event listener
		// doing this so we can remove it after the exam
		// has been completed
		examAlertHandler = doAlert.bind(null, "demoMode");
		// add new event listener to doAlert exam completed
		examBtn.addEventListener("click", examAlertHandler, false);
		examBtn.addEventListener("keydown", examAlertHandler, false);
	} else if (/hybrid/.test(course.view.courseType)) {
		if (moduleScores[mNumber][1] !== "---- - -- - --") {
			document.getElementById("exam_btn").classList.add("disabled");
			document.getElementById("exam_btn").removeEventListener("click", examLaunchHandler, false);
			document.getElementById("exam_btn").removeEventListener("keydown", examLaunchHandler, false);
			document.getElementById("exam_btn").addEventListener("click", doAlert.bind(null, "examComplete", false));
			document.getElementById("exam_btn").addEventListener("keydown", doAlert.bind(null, "examComplete", false));
		}
	}

	// set exam block height
	let lessonBlks = slice(document.querySelectorAll(".lessonBlock"));

	document.getElementById("examBlock").style.height = lessonBlks[lessonBlks.length - 1].offsetHeight + "px";
}

// depending on where the call is coming from,
// the arg might be an event, a number, or just null.
// all three are valid.
function returnToMod(e) {
	if (!e || e.type === "click" || (e.type === "keydown" && e.which === keyCodes.SPACE)) {
		if (!e) {
			e = Number(document.body.getAttribute("data-module"));
		}

		if (/hioc/.test(course.view.courseType)) {

			//Go to current Module landing page -- All will return to module landing instead of the lesson now
			// course.handleSwapTemplate("module", "link", e);
			pushHistory("course", "handleSwapTemplate", ["module", "link"], e);
		} else if (/(?:pdf|hybrid)/.test(course.view.courseType)) {
			if (isExamPrep === true) {
				// course.handleSwapTemplate("prep", "link", e);
				pushHistory("course", "handleSwapTemplate", ["examPrep", "link"], e);
				isExamPrep = false;
			} else {
				// course.handleSwapTemplate("module", "link", e);
				pushHistory("course", "handleSwapTemplate", ["module", "link"], e);
			}
		}
	}
}

function Mod_number(module) {
	// course.handleSwapTemplate("module", "link", module + 1);
	pushHistory("course", "handleSwapTemplate", ["module", "link", module + 1]);
}
/********* END MOD LANDING FUNCTIONS **********/

/******* START LESSON FUNCTIONS *******/

function view_lesson() {
	// hide portal contents/display lesson div
	document.getElementById("lessonContent").classList.remove("hidden");
	document.getElementById("lessonContent").setAttribute('role', 'main');
	document.getElementById("pg_header").classList.remove("hidden");
	document.getElementById("Toc_flyout").classList.remove("hidden");
	document.getElementById("portalContents").classList.add("hidden");
	document.getElementById("portalContents").removeAttribute('role');
	document.getElementById("JcComponents").removeAttribute('role');
	document.getElementById("returnToLsn").classList.add("hidden");
	document.getElementById("returnToLsn").setAttribute("aria-disabled", "true");

	bPortalResize();

	//reset the page scrollTop
	document.querySelector("html").scrollTop = 0;
	document.body.scrollTop = 0;
	document.getElementById("lessonContent").scrollTop = 0;

	document.getElementById("lessonContent").focus();

	if (course.view.state.pgTotal > 1) {
		//Create the full path to the html file...
		moduleFolder = `${course.onReplaceTemplateVar("course_settings", "Portal_Setup.Course_Folder")}/Modules/Mod_0${course.view.state.module}/`;
		
		//And open the lesson...
		TOC_Engine(course.view.state.module, course.view.state.lesson);

		//BOOKMARK DISPLAY
		if (!/demo/.test(course.view.courseType) && bShowBookmark === true) {
			bmNumber = undefined;
			if (gBookmarks[course.view.state.module - 1][course.view.state.lesson - 1] !== undefined) {
				if (gBookmarks[course.view.state.module - 1][course.view.state.lesson - 1].indexOf("_LO") === -1) {

					bmNumber = gBookmarks[course.view.state.module - 1][course.view.state.lesson - 1].replace(/.*?_P(\d+)\.js/, "$1");
					doAlert("bookmark");
					document.getElementById('goBookmark').setAttribute('data-page', Number(bmNumber) + 1);
				}
			}
		}

		bShowBookmark = true;

		//Mark the table of contents as "viewed" in HIOC courses...
		if ((/(hioc|shortcourse)/.test(course.view.courseType) || course.view.courseType.indexOf("shortcourse") !== -1) && !/demo/.test(course.view.courseType)) {
			bPageViews[course.view.state.module - 1][course.view.state.lesson - 1][0] = 1;
		}

		var modObjID;
		if (isExamPrep === true) {
			modObjID = "TTTT";
		} else {
			modObjID = `M${course.view.state.module}L${course.view.state.lesson}_TC`;
		}

		var theStatement = {
			type: "Table of Contents",
			verb: "viewed",
			//"activity": "http://adlnet.gov/expapi/activities/lesson",
			activity: "http://activitystrea.ms/schema/1.0/page",
			module: course.view.state.module,
			lesson: course.view.state.lesson,
			objectID: modObjID
		};

		if (isXAPI) {
			//Send the Statement...
			LRSSend(theStatement);
			//Set the State...
			bSetState();
		}
		else {
			bSetState();
		}
	}
	else {
		course.view.state.page = 1;
		document.getElementById('toc_toggle').classList.add('hidden');
		Page_Selection();
	}
	
}

function TOC_Engine() {
	QA_num = null;

	document.getElementById("pg_header").classList.add("hidden");
	document.getElementById("lessonContent").innerHTML = "";
	document.getElementById("JcComponents").innerHTML = "";

	// create TOC page
	// toc container div
	let tocCont = document.createElement("div");
	setAttrs(tocCont, {
		class: "col-lg-12 col-md-12 col-xs-12 panel-group body_style",
		id: "toc-container"
	});

	// toc title
	let tocTitle = document.createElement("h1");
	// this will be used in Page_Selection()
	lesson_title_text = course.onReplaceTemplateVar('TOC', `[${course.view.state.module - 1}][${course.view.state.lesson - 1}][0].TOC_Main_Title`);
	tocTitle.innerText = lesson_title_text;

	// main toc image
	let tocImg = document.createElement("img");
	setAttrs(tocImg, {
		src: `${moduleFolder}images/${course.onReplaceTemplateVar('TOC', `[${course.view.state.module - 1}][${course.view.state.lesson - 1}][0].TOC_Main_Page_Hero_Image`)}`,
		alt: "",
		class: "TOC_img"
	});

	// append title and TOC img
	tocCont.append(tocTitle, tocImg);

	// if the TOC includes main lesson text, append that
	if (course.onReplaceTemplateVar('TOC', `[${course.view.state.module - 1}][${course.view.state.lesson - 1}][0].TOC_Main_Page_Text`) !== "") {
		let TOCMainTxt = document.createElement("p");
		TOCMainTxt.classList.add("TOC_main_txt");
		tocCont.append(tocImg);
	}

	// probably getting rid of this at some point
	mod_lsn[0] = course.view.state.module;
	mod_lsn[1] = course.view.state.lesson;

	// Main Page TOC UL container
	let tocUL = document.createElement("ul");
	tocUL.classList.add("toc_list");

	// Flyout TOC container
	// let flscrollTop = document.getElementById("pg_header").offsetHeight + 100;
	// let flscrollBtm = document.getElementById("indexFooter").offsetTop;
	// flscrollHeight = flscrollBtm - flscrollTop;
	// document.getElementById("toc_fMenu").style.height = flscrollHeight + "px";

	let tocList = document.getElementById('toc-fContainer');

	while (tocList.lastElementChild && document.querySelector("#toc-fContainer > li:first-of-type") != tocList.lastElementChild) {
		tocList.removeChild(tocList.lastElementChild);
	}

	let lessonCompImg;
	let lessonCompImg_alt;
	// cycle through pages to build links for all TOC (main page and flyout)
	for (let page = 1; page < course.onReplaceTemplateVar('TOC', `[${course.view.state.module - 1}][${course.view.state.lesson - 1}].length`); page++) {
		// mark complete or incomplete
		if (!/demo/.test(course.view.courseType)) {
			if (bPageViews[course.view.state.module - 1][course.view.state.lesson - 1][page - 1] === 1) {
				lessonCompImg = "lesson_indicator_chk.png";
				lessonCompImg_alt = course.onReplaceTemplateVar("default_content", "Labels.complete");
			} else {
				lessonCompImg = "lesson_indicator_circle_grey.png";
				lessonCompImg_alt = course.onReplaceTemplateVar("default_content", "Labels.incomplete");
			}
		} else {
			lessonCompImg = "lesson_indicator_circle_grey.png";
			lessonCompImg_alt = course.onReplaceTemplateVar("default_content", "Labels.incomplete");
		}

		// ****** MAIN PAGE ******/
		// create LI
		let tocLI = document.createElement("li");
		setAttrs(tocLI, {
			class: "quest_char",
			"data-index": course.view.state.lesson
		});
		// create button
		let tocLink = document.createElement("div");
		setAttrs(tocLink, {
			role: "link",
			tabindex: 0,
			class: "toc_main_buttons",
			id: "toc_button_" + page,
			"aria-labelledby": "toc_main_lbl_" + page + " toc_main_img_" + page,
			"data-index": course.view.state.lesson,
			"data-page": page
		});
		// create label span
		let tocLinkLbl = document.createElement("span");
		setAttrs(tocLinkLbl, {
			class: "toc_main_lbl",
			id: "toc_main_lbl_" + page
		});
		tocLinkLbl.innerText = course.onReplaceTemplateVar('TOC', `[${course.view.state.module - 1}][${course.view.state.lesson - 1}][${page}].lesson_name`);
		// create completion indicator img
		let tocSymbolIcon = document.createElement("img");
		setAttrs(tocSymbolIcon, {
			class: "toc_main_img",
			id: "toc_main_img_" + page,
			src: "includes/images/" + lessonCompImg,
			alt: lessonCompImg_alt
		});

		tocLink.append(tocLinkLbl, tocSymbolIcon);
		tocLI.append(tocLink);
		tocUL.append(tocLI);

		// TODO: We'll probably delete this after removing arguments from Page_Selection
		// used for creating the flyout TOC
		// TOC_File_Order_Array[page] = TOC[course.view.state.module - 1][course.view.state.lesson - 1][page].Page_File_Name;

		let menuLI = document.createElement("li");
		setAttrs(menuLI, {
			id: "toc_fly_buttons_" + page,
			"data-index": course.view.state.lesson,
			"data-page": page,
			class: "toc_fly_buttons",
			role: "menuitem",
			tabindex: -1
		});
		// // build lesson page button
		// let menuLink = document.createElement("div");
		// setAttrs(menuLink, {
		// 	id: "toc_fly_buttons_" + page,
		// 	"data-index": course.view.state.lesson,
		// 	"data-page": page,
		// 	class: "toc_fly_buttons",
		// 	role: "menuitem",
		// 	tabindex: 0
		// });

		// page title
		let pgTitle = document.createElement("span");
		setAttrs(pgTitle, {
			class: "fo_pgTitle",
			id: "fo_pgTitle_" + page
		});
		pgTitle.innerText = course.onReplaceTemplateVar('TOC', `[${course.view.state.module - 1}][${course.view.state.lesson - 1}][${page}].lesson_name`);
		// complete/incomplete marker
		let compCont = document.createElement("span");
		let compImg = document.createElement("img");
		setAttrs(compImg, {
			src: "includes/images/" + lessonCompImg,
			alt: lessonCompImg_alt,
			class: "pg_complete",
			id: "pg_complete_" + page
		});

		if (page == course.view.state.pgTotal && /hioc/.test(course.view.courseType)) {
			tocLink.classList.add('pq_btn');
			menuLI.classList.add('pq_btn');
			setAttrs(tocLink, {
				'data-module': course.view.state.module,
				'data-lesson': course.view.state.lesson
			})
			setAttrs(menuLI, {
				'data-module': course.view.state.module,
				'data-lesson': course.view.state.lesson
			})

		}
		else {
			tocLink.classList.add('toc_main_btn');
			menuLI.classList.add('open_page_btn');
		}

		compCont.appendChild(compImg);
		menuLI.append(pgTitle, compCont);
		// append to flyout
		tocList.appendChild(menuLI);
	}

	// next button div

	// next button
	let nextBtn = document.createElement("div");
	setAttrs(nextBtn, {
		id: "Next_Lesson_" + 1,
		class: "nxt_lesson",
		"data-index": 1,
		"data-page": 1,
		role: "link",
		tabindex: 0
	});
	nextBtn.innerHTML = `<span class="sr-only">${course.onReplaceTemplateVar('default_content', 'Labels.nextPage')}:</span> ${course.onReplaceTemplateVar('TOC', `[${course.view.state.module - 1}][${course.view.state.lesson - 1}][1].lesson_name`)} &#160 <span aria-hidden="true">&#9660</span>`;

	tocCont.append(tocUL, nextBtn);

	// nextBtn.addEventListener("click", Page_Selection.bind(null, 1, 0), false);
	// nextBtn.addEventListener("keydown", Page_Selection.bind(null, 1, 0), false);
	nextBtn.addEventListener("click", pushHistory.bind(course, undefined, "Page_Selection", []), false);
	nextBtn.addEventListener("keydown", pushHistory.bind(course, undefined, "Page_Selection", []), false);

	document.getElementById("lessonContent").classList.remove("hidden");
	document.getElementById("lessonContent").append(tocCont);
	document.getElementById("lessonContent").scrollTop = 0;
	setEventListeners("toc-container", null);
	setEventListeners("toc_fMenu", null);	
}

function Page_Selection() {
	document.getElementById("pg_header").classList.remove("hidden");
	document.getElementById("Toc_flyout").classList.remove("hidden");
	document.getElementById("portalContents").classList.add("hidden");
	document.getElementById("portalContents").removeAttribute('role');
	document.getElementById("lessonContent").removeAttribute('role');
	document.getElementById("returnToLsn").classList.add("hidden");
	document.getElementById("returnToLsn").setAttribute("aria-disabled", "true");

	// state needs know if page has been fully viewed
	if (bPageViews[course.view.state.module - 1][course.view.state.lesson - 1][course.view.state.page - 1] == 1) {
		course.view.state.pageViewed = true;
	}
	else {
		course.view.state.pageViewed = false;
	}
	moduleFolder = `${course.onReplaceTemplateVar("course_settings", "Portal_Setup.Course_Folder")}/Modules/Mod_0${course.view.state.module}/`;

	// let jsonFolder = `${moduleFolder}json/`;
	// bools for present/future value calculators?
	pvc = 0;
	fvc = 0;

	// hide alertCover
	if (!document.getElementById("alertCover").classList.contains("hidden")) {
		document.getElementById("alertCover").classList.add("hidden");
	}

	// clear contents of JcComponents
	while (document.getElementById("JcComponents").firstChild) {
		document.getElementById("JcComponents").removeChild(document.getElementById("JcComponents").firstChild);
	}

	// jb engine needs this set
	np_num = course.view.state.page;

	if (!/json/.test(moduleFolder)) {
		moduleFolder = moduleFolder + "json/";
	}

	// if last page in array, it's an EOL
	if (course.view.state.page == course.view.state.pgTotal && /hioc/.test(course.view.courseType)) {
		// window.showEOL(course.view.state.module, course.view.state.lesson, "EOL");
	}
	// otherwise regular page
	else {
		// add page title
		document.getElementById("Page_Title").innerHTML = course.onReplaceTemplateVar('TOC', `[${course.view.state.module - 1}][${course.view.state.lesson - 1}][0].TOC_Main_Title`);
		// set page x of x
		// hioc
		if (/hioc/.test(course.view.courseType)) {
			document.getElementById("cRpage").innerHTML = `${course.onReplaceTemplateVar("default_content", "Labels.moduleLesson")} || ${course.onReplaceTemplateVar("default_content", "Labels.page")}`;
		}
		// not hioc
		else {
			document.getElementById("cRpage").innerHTML = course.onReplaceTemplateVar("default_content", "Labels.page");
		}

		document.getElementById("JcComponents").scrollTop = 0;
		document.getElementById("prg_Bar").style.width = 0;

		let myScript = document.createElement("script");

		//var selected_page = `${jsonFolder}${TOC_File_Order_Array[course.view.state.page]}`;
		//course.onReplaceTemplateVar('TOC', `[${course.view.state.module - 1}][${course.view.state.lesson - 1}][${page}]
		let selected_page = `${moduleFolder}${course.onReplaceTemplateVar('TOC', `[${course.view.state.module - 1}][${course.view.state.lesson - 1}][${course.view.state.page}].Page_File_Name`)}`;
		myScript.setAttribute("src", selected_page);

		// JW: Using classes rather than style.display
		document.getElementById("lessonContent").classList.add("hidden");
		document.getElementById("pg_header").classList.remove("hidden");
		document.getElementById("JcComponents").classList.remove("hidden");
		document.getElementById("JcComponents").setAttribute('role', 'main');

		// prev button
		let prevBtn = document.createElement("div");
		setAttrs(prevBtn, {
			id: "Prev_Lesson_" + 1,
			class: "prv_lesson",
			"data-index": course.view.state.page - 1,
			"data-page": course.view.state.page - 1,
			role: "link",
			tabindex: 0
		});
		if (course.view.state.page == 1) {
			prevBtn.innerHTML = `<span aria-hidden="true">&#9650</span> &#160 <span class="sr-only">${course.onReplaceTemplateVar('default_content', 'Labels.prevPage')}:</span> ${course.onReplaceTemplateVar("default_content", "Labels.tableOfContents")}`;

			// prev button event listners
			prevBtn.addEventListener("click", pushHistory.bind(course, undefined, "view_lesson", []), false);
			prevBtn.addEventListener("keydown", pushHistory.bind(course, undefined, "view_lesson", []), false);
		} else {
			prevBtn.innerHTML = `<span aria-hidden="true">&#9650</span> &#160 <span class="sr-only">${course.onReplaceTemplateVar('default_content', 'Labels.prevPage')}:</span> ${course.onReplaceTemplateVar('TOC', `[${course.view.state.module - 1}][${course.view.state.lesson - 1}][${course.view.state.page - 1}].lesson_name`)}`;

			// prev button event listners
			prevBtn.addEventListener("click", pushHistory.bind(course, undefined, "Page_Selection", []), false);
			prevBtn.addEventListener("keydown", pushHistory.bind(course, undefined, "Page_Selection", []), false);
		}

		// next button
		let nextBtn = document.createElement("div");
		setAttrs(nextBtn, {
			id: "Next_Lesson_" + 1,
			class: "nxt_lesson",
			"data-index": course.view.state.page + 1,
			"data-page": course.view.state.page + 1,
			"data-lesson": course.view.state.lesson,
			"data-module": course.view.state.module,
			role: "link",
			tabindex: 0
		});

		if (/hioc/.test(course.view.courseType) || course.view.state.page != course.view.state.pgTotal) {
			nextBtn.innerHTML = `<span class="sr-only">${course.onReplaceTemplateVar('default_content', 'Labels.nextPage')}:</span> ${course.onReplaceTemplateVar('TOC', `[${course.view.state.module - 1}][${course.view.state.lesson - 1}][${course.view.state.page + 1}].lesson_name`)} &#160 <span aria-hidden="true">&#9660</span`;
		}

		// next button event listners
		if (course.view.state.page + 1 == course.view.state.pgTotal && /hioc/.test(course.view.courseType)) {
			nextBtn.addEventListener("click", goQM.bind(window, course.view.state.module, course.view.state.lesson - 1, "PQ"), false);
			nextBtn.addEventListener("keydown", goQM.bind(window, course.view.state.module, course.view.state.lesson - 1, "PQ"), false);
			// nextBtn.addEventListener("click", pushHistory.bind(course, undefined, "showEOL", ["EOL", true]), false);
			// nextBtn.addEventListener("keydown", pushHistory.bind(course, undefined, "showEOL", ["EOL", true]), false);
		}
		else {
			nextBtn.addEventListener("click", pushHistory.bind(course, undefined, "Page_Selection", []), false);
			nextBtn.addEventListener("keydown", pushHistory.bind(course, undefined, "Page_Selection", []), false);
		}	

		QNum = 0


		// attach JB Content
		document.getElementById("JcComponents").append(myScript);

		// set up mutation observer so we know when the JB components are loaded
		// target and config
		const jbMutTarget = document.getElementById("JcComponents");
		const jbMutConfig = { childList: true };
			
		// callback
		const jbObserverCB = function (mutationList, observer) {
			if (document.getElementById("JcComponents").firstElementChild != null && document.getElementById("JcComponents").firstElementChild.tagName == "DIV"
			&& !document.getElementById("JcComponents").querySelector('.clr-fix')) {
				// stop observing mutations
				observer.disconnect();
				observer.takeRecords();
				
				// only add prev button if the lesson has more than one page
				if (course.view.state.pgTotal > 1) {
					document.getElementById("JcComponents").insertBefore(prevBtn, document.getElementById("JcComponents").firstElementChild);
				}

				// need an empty div to act as clear fix since JB divs have float
				let clrFixDiv = document.createElement("div");
				clrFixDiv.classList.add("clr-fix");
				document.getElementById("JcComponents").append(clrFixDiv);
				
				// we only add the next button if it's a hioc or not the last page
				if (/hioc/.test(course.view.courseType) || course.view.state.page != course.view.state.pgTotal) {
					nextBtn.innerHTML = `<span class="sr-only">${course.onReplaceTemplateVar('default_content', 'Labels.nextPage')}:</span> ${course.onReplaceTemplateVar('TOC', `[${course.view.state.module - 1}][${course.view.state.lesson - 1}][${course.view.state.page + 1}].lesson_name`)} &#160 <span aria-hidden="true">&#9660</span`;
					document.getElementById("JcComponents").append(nextBtn);
				}

				// scroll down so prev button isn't showing
				document.getElementById("JcComponents").scrollTop = 100;

				// keyterm event listeners
				let kts = slice(document.querySelectorAll(".keyterm"));
				for (let kt of kts) {
					kt.addEventListener("click", showKeyterm, false);
					kt.addEventListener("keydown", showKeyterm, false);
				}

				// add modal trap to kt modal
				//document.getElementById("keyTermModal").addEventListener("keydown", portalModalTrap.bind(document.getElementById("keyTermModal")), false);
				if (document.getElementById("survey_comp_number_1")) {
					document.getElementById("survey_comp_number_1").style.display = "block";
				}

				// change source links to buttons
				let pdfInlineClassEls = slice(document.querySelectorAll('.pdf_inline_style'));
				let inlineSourceEls = [];

				for (let pdfInlineClassEl of pdfInlineClassEls) {
					if (/jb_src/.test(pdfInlineClassEl.getAttribute('href'))) {
						let inlineSrcBtn = document.createElement('button');
						inlineSrcBtn.innerHTML = pdfInlineClassEl.innerHTML;
						let srcNum = pdfInlineClassEl.getAttribute('href').replace(/javascript:jb_src\((\d+)\)/, "$1")
						inlineSrcBtn.setAttribute('onclick', `jb_src(${srcNum}, event)`);
						inlineSrcBtn.className = pdfInlineClassEl.className;

						pdfInlineClassEl.parentNode.replaceChild(inlineSrcBtn, pdfInlineClassEl);
					}
				}

				bPortalResize();
				contScroll = document.getElementById("JcComponents").offsetHeight;

				// check for answered questions
				if (/shortcoursea/i.test(courseType) && !/demo/.test(courseType)) {
					let pageQues = allPgQue[course.view.state.page];
					let queEls = slice(document.querySelectorAll('.question-container'));
					for (let i = 0; i < pageQues.length; i++) {
						if (pageQues[i].answer == 1) {
							let choice = pageQues[i].choice;
							let choiceEls = queEls[i].querySelectorAll('.choices .btn_w_image');
							if (typeof choice == 'object') {
								console.log(choice);
								for (let j = 0; j < choice.length; j++) {
									if (choice[j] == 'true') {
										choiceEls[j].click();
									}
								}
								queEls[i].querySelector('.btn-primary').click();
							}
							else {
								let choiceEl = choiceEls[choice];
								choiceEl.click();
							}
						}
					}
				}
				
			}
		};

		// mutation observer
		const jbObserver = new MutationObserver(jbObserverCB);
		jbObserver.observe(jbMutTarget, jbMutConfig);

		// set bookmark
		gBookmarks[course.view.state.module - 1][course.view.state.lesson - 1] = `${moduleFolder}${course.onReplaceTemplateVar('TOC', `[${course.view.state.module - 1}][${course.view.state.lesson - 1}][${course.view.state.page}].Page_File_Name`)}`;

		// focus on the page content
		document.getElementById("JcComponents").focus();

		// if it's LO, automatically mark it viewed
		if (course.view.state.page === 1 && course.view.state.pgTotal > 1) {
			//Mark the LO viewed in the Portal State...
			bPageViews[course.view.state.module - 1][course.view.state.lesson - 1][course.view.state.page - 1] = 1;
			//Update the flyout menu...
			if (document.getElementsByClassName("toc_fly_buttons")[1].getElementsByTagName("span")[2]) {
				document.getElementsByClassName("toc_fly_buttons")[1].getElementsByTagName("span")[2].getElementsByTagName("img")[0].src = "includes/images/lesson_indicator_chk.png";
			} else {
				document.getElementsByClassName("toc_fly_buttons")[1].getElementsByTagName("span")[1].getElementsByTagName("img")[0].src = "includes/images/lesson_indicator_chk.png";
			}
		}
	}

}

function checkPageComplete() {
	//Checking to make sure that the page should be marked complete for shortcourseA
	var bQuestionsReady = true;

	if (/shortcourseA/.test(course.view.courseType)) {
		for (var bqCheck = 0; bqCheck < allPgQue[course.view.state.page].length; bqCheck++) {
			//change the value of bQuestionsReady if there's an answer property and it's still set to zero
			if (allPgQue[course.view.state.page][bqCheck].hasOwnProperty("answer") && allPgQue[course.view.state.page][bqCheck].answer === 0) {
				bQuestionsReady = false;
				break;
			}
		}
	}

	// if the page hasn't been marked as viewed
	if (bPageViews[course.view.state.module - 1][course.view.state.lesson - 1][course.view.state.page - 1] === 0 && bQuestionsReady === true && course.view.state.pageViewed === true) {
		bPageViews[course.view.state.module - 1][course.view.state.lesson - 1][course.view.state.page - 1] = 1;
		bSetState();
		markPageComplete();
	}
}

// TODO: Working on refactoring this so pages get marked complete 
// this should be called from progress_bar
function markPageComplete() {
	let bMod = course.view.state.module;
	let bLsn = course.view.state.lesson;
	let bPag = course.view.state.page - 1;

	//USED BY THE PROGRESS_BAR() FUNCTION TO KNOW WHICH PAGE TO MARK COMPLETE...
	bCurrentMod = bMod - 1;
	bCurrentLsn = bLsn - 1;
	bCurrentPag = bPag;

	if (!/demo/.test(course.view.courseType)) {
	
		// add checkmark to toc fly
		if (document.getElementsByClassName("toc_fly_buttons")[course.view.state.page].getElementsByTagName("span")[2]) {
			//slight change to deal with an extra span tag if it exists
			document.getElementsByClassName("toc_fly_buttons")[course.view.state.page].getElementsByTagName("span")[2].getElementsByTagName("img")[0].src = "includes/images/lesson_indicator_chk.png";
		} else {
			document.getElementsByClassName("toc_fly_buttons")[course.view.state.page].getElementsByTagName("span")[1].getElementsByTagName("img")[0].src = "includes/images/lesson_indicator_chk.png";
		}

		//Check to see if the lesson should be marked complete
		var markComplete = true;
		for (var i = 0; i < bPageViews[course.view.state.module - 1][course.view.state.lesson - 1].length; i++) {
			if (bPageViews[course.view.state.module - 1][course.view.state.lesson - 1][i] === 0) {
				markComplete = false;
				break;
			}
		}
	}


	var statementType;
	var xapiPage;

	switch (course.view.state.page) {
		case 1:
			statementType = "Lesson Learning Objectives";
			xapiPage = "LO";
			break;
		case course.view.state.pgTotal:
			statementType = "End of Lesson Questions";
			xapiPage = "EOL";
			break;
		default:
			statementType = "Lesson Page"; // Normal lesson page...
			xapiPage = `P${course.view.state.page - 1}`;
			break;
	}	

	var pageStatement = {
		type: statementType,
		verb: "viewed",
		activity: "http://activitystrea.ms/schema/1.0/page",
		module: course.view.state.module,
		lesson: course.view.state.lesson,
		objectID: `M${course.view.state.module}L${course.view.state.lesson}${xapiPage}`
	};
	if (isXAPI) {
		//Send the Statement...
		LRSSend(pageStatement);
		//Set the State...
		bSetState();
	} else {
		//console.log(theStatement);
		bSetState();
	}

	if (markComplete === true) {
		markLessonComplete(course.view.state.module, course.view.state.lesson);
	}
}

function progress_bar() {
	var elmnt = document.getElementById("JcComponents");
	var x = elmnt.scrollLeft;
	var y = elmnt.scrollTop;

	var scrlht = elmnt.scrollHeight - (elmnt.scrollHeight - elmnt.offsetHeight);
	var nwht = elmnt.scrollHeight - scrlht;
	if ($(window).width() < 768) {
		document.getElementById("prg_Bar").style.width = (100 / nwht) * y + "%";
	} else {

		document.getElementById("prg_Bar").style.width = (100 / nwht) * y + "%";
	}
	//MARK THE PAGE AS VIEWED WHEN THE USER HAS SCROLLED 90%
	if (!/demo/.test(course.view.courseType)) {
		var isNinety = (100 / nwht) * y;
		if (isNinety > 90) {
			course.view.state.pageViewed = true;
			checkPageComplete();
		}

		//START ADDED 2020-03-18 BRIAN
		if (course.view.courseType === "shortcourseB" && isNinety > 98) {
			var scbShouldBeComplete = true;

			for (var scb = 0; scb < bPageViews[course.view.state.module - 1][course.view.state.lesson - 1].length; scb++) {
				if (bPageViews[course.view.state.module - 1][course.view.state.lesson - 1][scb] === 0) {
					scbShouldBeComplete = false;
					break;
				}
			}

			if (scbShouldBeComplete === true) {
				markLessonComplete(1, 1);
				//showEOC();
				if (course.view.courseType.indexOf("shortcourse") !== -1 && TOC.length === 1) {
					if (bLessonCompletions[course.view.state.module - 1][course.view.state.lesson - 1] !== "---- - -- - --") {
						doLMSSetValue("cmi.core.lesson_status", "completed");
						doLMSCommit();
					}
				}
			}
		}
	}
}

function toc_back_to_main(e) {
	if (e.type === "click" || (e.type === "keydown" && (e.which === keyCodes.SPACE || e.which === keyCodes.RETURN))) {
		bShowBookmark = false;
		// view_lesson(mod_lsn[0] - 1, mod_lsn[1], "TC", e);
		// history api listeners
		pushHistory(undefined, "view_lesson", [], e);
	}
}

function goToBookmark(e) {
	if (!e || e.type === "click" || (e.type === "keydown" && (e.which === keyCodes.RETURN || e.which === keyCodes.SPACE))) {
		activeFocus = document.getElementById("JcComponents");
		closeAlert(e);
		if (/(hioc|shortcourse)/.test(course.view.courseType)) {
			// Page_Selection(parseInt(bmNumber) + 1, 0);
			pushHistory(undefined, "Page_Selection", [], e);
		} else {
			// Page_Selection(parseInt(bmNumber), 0);
			pushHistory(undefined, "Page_Selection", [], e);
		}

	}
}

function markLessonComplete(module, lesson) {
	if (bLessonCompletions[module - 1][lesson - 1] === "---- - -- - --") {
		bLessonCompletions[module - 1][lesson - 1] = new Date().toISOString();

		if (isXAPI) {
			var lessonStatement = {
				type: "lesson",
				verb: "completed",
				activity: "http://adlnet.gov/expapi/activities/lesson",
				module: module,
				lesson: lesson,
				objectID: "M" + module + "L" + lesson
			};
			LRSSend(lessonStatement);
			bSetState();
		}
		else {
			bSetState();
		}
	}
}
/******** END LESSON FUNCTIONS ********/

/******** START EOLEOM FUNCTIONS ********/
function showEOL(type, lessonPage) {
	// if (!e || typeof e == "number" || e.type === "click" || (e.type === "keydown" && (e.which === keyCodes.RETURN || e.which === keyCodes.SPACE))) {
	bCurrentModule = course.view.state.module;
	bCurrentLesson = course.view.state.lesson;

	masterDiv.style.overflow = "hidden";
	let thisFile;

	hideLessonStuff();
	if (/hioc/.test(course.view.courseType)) {
		thisFile = `data="pqse/${portalSetup.Course_Folder}_EOL_${course.view.state.module}_${course.view.state.lesson}.html"`;
		//Array and State object is zero-based...
		bPageViews[course.view.state.module - 1][course.view.state.lesson - 1][bPageViews[course.view.state.module - 1][course.view.state.lesson - 1].length - 1] = 1;

		//Check to see if the lesson should be marked complete
		var markComplete = true;

		for (var i = 0; i < bPageViews[course.view.state.module - 1][course.view.state.lesson - 1].length; i++) {
			//2019-03-04: INCLUDES THE EOLs...
			if (bPageViews[course.view.state.module - 1][course.view.state.lesson - 1][i] === 0) {
				markComplete = false;
				break;
			}
		}
		if (markComplete === true) {
			markLessonComplete(course.view.state.module, course.view.state.lesson);
		}
	} else {
		if (type === "EOL") {
			thisFile = `data="pqse/${portalSetup.Course_Folder}_PQ_0_${course.view.state.lesson}.html"`;
		} else if (type === "SE" && course.view.state.module === null) {
			thisFile = `data="pqse${portalSetup.Course_Folder}_SE.html"`;
		} else if (type === "SE") {
			thisFile = 'data="pqse/' + portalSetup.Course_Folder + "_SE_" + course.view.state.module + '.html"';
			thisFile = `data="pqse/${portalSetup.Course_Folder}_SE_${course.view.state.module}.html"`;
		}
		if (course.view.state.template =="examPrep") {
			isExamPrep = true;
		}
	}

	var objectTag = '<object id="eoleomobject" type="text/html" ' + thisFile + ' style="width:100%; height:100%;"></object>';

	if (isExamPrep) {
		document.getElementById("returnToLsn").innerHTML = course.onReplaceTemplateVar("default_content", "ReturnTo.returnToExamPrep");
	} else {
		document.getElementById("returnToLsn").innerHTML = course.onReplaceTemplateVar("default_content", "ReturnTo.returnToModule");
	}
	document.getElementById("returnToLsn").classList.remove("hidden");
	document.getElementById("returnToLsn").removeAttribute("aria-disabled");

	masterDiv.innerHTML = objectTag;
	masterDiv.classList.remove("hidden");

	if (lessonPage) {
		markPageComplete();
	}
		// }
	// }
}

// function showIntegrityStatement() {
// 	masterDiv.style.overflow = "hidden";
// 	masterDiv.scrollTop = 0;
// 	hideLessonStuff();

// 	course.handleSwapTemplate("integrity", "link");

// 	// set up mutation observer so we can add some
// 	// attributes after the template loads
// 	const intMutTarget = document.getElementById('portalContents');
// 	const intMutConfig = { childList: true };

// 	const intObserverCB = function (mutationList, observer) {
// 		if (document.getElementById("portalContents-cont")) {
// 			// stop observing mutations
// 			observer.disconnect();
// 			observer.takeRecords();

// 			// set the module number on exam launch button so we know which exam to launch
// 			let examBtns = slice(masterDiv.querySelectorAll(".hiocexam_btn"));
// 			for (let examBtn of examBtns) {
// 				examBtn.setAttribute("data-module", course.view.state.module);
// 			}

// 			masterDiv.querySelector(`#${courseLocale}`).classList.remove("hidden");
			
// 			if (course.view.state.integrityCheck) {
// 				let checkboxes = slice(document.querySelectorAll('.integrity-check'));
// 				for (let checkbox of checkboxes) {
// 					checkbox.setAttribute('aria-checked', true);
// 				}

				
// 				document.getElementById("exam_btn").disabled = false;
// 			}
// 		}
// 	}

// 	const intObserver = new MutationObserver(intObserverCB);
// 	intObserver.observe(intMutTarget, intMutConfig);
// }

// function integrityCheck(e) {
// 	if (e.type === "click" || (e.type === "keydown" && e.which === keyCodes.SPACE)) {
// 		if (this.getAttribute("aria-checked") === "true") {
// 			this.setAttribute("aria-checked", "false");
// 			if (/bIntegrity2/.test(this.id)) {
// 				let parentLI = findAncestor(this, "node", "LI");
// 				let childInputs = slice(parentLI.querySelectorAll(".integrity-check"));
// 				for (let childInput of childInputs) {
// 					childInput.setAttribute("aria-checked", "false");
// 				}
// 			}
// 		} else {
// 			this.setAttribute("aria-checked", "true");
// 			if (/bIntegrity2/.test(this.id)) {
// 				let parentLI = findAncestor(this, "node", "LI");
// 				let childInputs = slice(parentLI.querySelectorAll(".integrity-check"));
// 				for (let childInput of childInputs) {
// 					childInput.setAttribute("aria-checked", "true");
// 				}
// 			}
// 		}
// 	}

// 	let inputs = slice(document.querySelectorAll(`#${courseLocale} ul.honest div.integrity-check`));
// 	let allChecked = true;
// 	for (let input of inputs) {
// 		if (input.getAttribute("aria-checked") == "false") {
// 			allChecked = false;
// 			break;
// 		}
// 	}

// 	if (allChecked) {
// 		// set state
// 		course.view.state.integrityCheck = true;
// 		document.getElementById("exam_btn").disabled = false;
// 	}
// }

// function launchExam() {
// 	// if (e.type === "click" || (e.type === "keydown" && (e.which === keyCodes.RETURN || e.which === keyCodes.SPACE))) {
// 		let module = course.view.state.module;

// 		masterDiv.style.overflow = "hidden";
// 		//masterDiv.classList.add('exam');
// 		document.getElementById("indexHead").classList.add("hidden");

// 		var eomFile;
// 		// On Staging
// 		if (useSCORMCloud || useLOMATest) {
// 			eomFile = 'data="exam_ALL_CR=1/' + portalSetup.Course_Folder + "_EOM_" + module + '.html"'; // TESTING EOLs
// 		} else if (useLOMAProd || useChinaCache) {
// 			eomFile = 'data="exam/' + portalSetup.Course_Folder + "_EOM_" + module + '.html"'; // FINAL EOLs
// 		}

// 		isExamPage = true; // latest version of code seems to want the same module name... 2019-10-07

// 		var objectTag = '<object id="eoleomobject" type="text/html" ' + eomFile + ' style="width:100%; height:100%;"></object>';
// 		masterDiv.innerHTML = objectTag;
// 		bPortalResize();
// 		honestyStatements[module - 1] = new Date().toISOString();

// 		if (isXAPI) {
// 			bSetState();
// 			var honestyStatement = {
// 				type: "Integrity_Statement",
// 				verb: "accepted",
// 				activity: "http://adlnet.gov/expapi/activities/file",
// 				module: module,
// 				lesson: 0,
// 				objectID: "M" + module
// 			};
// 			LRSSend(honestyStatement);
// 		}
// 	// }
// }

function EOMWarning(module, lesson, type){
	// console.log(`
	// 	module = ${module}
	// 	lesson = ${lesson}
	// 	type = ${type}
	// `);
	// return;

	if (courseType.indexOf("demo") === -1){
		if (courseType.indexOf("hybrid") !== -1){
			//console.log(courseType);
			doAlert("EOMWarning");
		}
	}
}

function goQM(module, lesson, type){


	if(type === "EOL"){
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
	}
	

	// lrsActor should be defined when the course loads
	// if lrsActor isn't defined, the rest won't defined either, so show the error screen
	// if this part fires, then the student probably tried to bypass the error screen in the console
	// theLRSerror = response; // ==> Should already have a value from initial fail, no need to redefine
	if(typeof lrsActor === "undefined"){
		doAlert("notconnected");
		return;
	}else{
		switch (type){
			case "EOM": doAlert("loadingEOM");
			break;

			case "PQ":
			case "EOL": doAlert("loadingEOLPQ");
			break;

			case "SE": doAlert("loadingSE");
			break;
		}
	}

	bCurrentModule = module;
    bCurrentLesson = lesson;	

	if (type === "PQ"){
		lesson = (Number(lesson) + 1);
	}

	var courseID;

	if(courseType === "hybrid" || courseType === "pdf" ){
		if (window.top.opener !== null){
			var lmsid = "id";
			var regex = new RegExp('[\\?&]' + lmsid + '=([^&#]*)');
			var results = regex.exec(window.top.opener.location.search);
			results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
			courseID = results[1];
		}else{
			courseID = courseGUID;
		}
	}else{
		courseID = courseGUID;
	}

	// console.log(
	// 	`
	// 	Student ID = ${lrsActor}
	// 	Course ID = ${courseID}
	// 	Course Portal ID = ${courseGUID}
	// 	Exam Type = ${type}
	// 	Module Number = ${bCurrentModule}
	// 	Lesson Number = ${bCurrentLesson}
	// 	LRS Region = ${useChinaCache ? "HongKong" : "Domestic" }
	// 	Course Language = ${course_settings.Portal_Setup.course_locale}
	// 	`
	// );

	var bLRSRegion = useChinaCache ? "HongKong" : "Domestic";

	$.ajax({
		// Our sample url to make request
		url:
			//'https://localhost:7045/SelfProctor/StartExam2',
			'https://exams20x.loma.org/test/SelfProctor/StartExam',

		xhrFields: {
			withCredentials: true
		},

		// Type of Request
		type: "GET",

		data: {
			'lessonNumber': lesson,
			'moduleNumber': module,
			'studentId': lrsActor,
			'courseId': courseID,
			'examType': type,
			'lrsRegion': bLRSRegion,
			'courseLanguage': course_settings.Portal_Setup.course_locale,
			'coursePortalId': courseGUID
		},

		//dataType: 'jsonp',
		dataType: 'json',

		success: function (data) {
			if(courseType === "pdf" || courseType === "hybrid"){
				doLMSFinish();
        		doLMSCommit();
				window.parent.location.href = data.url;
			}else{
				window.location.href = data.url;
			}
		},


		error: function (error) {
			console.log(`error.responseJSON.response:`, error.responseJSON.response);
			theLRSerror = error;
			//$("#alertCover").remove(); // make sure the previous message isn't showing
			closeAlert();
			doAlert("notconnected");
		}
	});
}
/******** END EOLEOM FUNCTIONS ********/

/******** START END OF COURSE FUNCTIONS ********/
function showEOC() {
	document.getElementById("eocCover").classList.remove("hidden");
	document.getElementById("eocContainer").focus();

	//!!!!!!!!Hard-coded for a single lesson!!!!!!!!
	if (/shortcourse/.test(course.view.courseType) && TOC.length === 1) {
		if (course.view.courseType !== "shortcourseB") {
			if (bLessonCompletions[0][0] !== "---- - -- - --") {
				doLMSSetValue("cmi.core.lesson_status", "completed");
				doLMSCommit();
			}
		}
	}

	let nextURL;
	let surveyURL;

	// modal is different for short courses
	if (/shortcourse/.test(course.view.courseType)) {
		document.getElementById("eocHeader_full").classList.add("hidden");
		document.getElementById("surveyBlock").classList.add("hidden");
		document.getElementById("nextBlock").classList.add("hidden");
		document.getElementById("eocHeader_soc").classList.remove("hidden");
		document.getElementById("exitBlock").classList.remove("hidden");

		document.getElementById("eocSurvey").disabled = true;
		document.getElementById("eocNext").disabled = true;
		document.getElementById("eocExit").disabled = false;
	} else {
		// FSRI next link
		if (/SRI/.test(portalSetup.Course_Name)) {
			nextURL = course.onReplaceTemplateVar('default_content', 'EOCLinks.sriNext');
			//"https://www.loma.org/en/professional-development/designations/fsri/";
		}

		else {
			// FLMI next link
			nextURL = course.onReplaceTemplateVar('default_content', 'EOCLinks.whatsNext');

		//if (!/SRI/.test(portalSetup.Course_Name)) {	
			// switch (courseLocale) {
			// 	case "en-US":
			// 		nextURL = "https://www.loma.org/en/professional-development/designations/flmi/#Courses";
			// 		break;

			// 	case "zh-CN":
			// 		nextURL = "https://www.loma.org/zh-hans/professional-development/designations/fellow-life-management-institute/?epslanguage=zh-Hans";
			// 		break;

			// 	case "zh-TW":
			// 		nextURL = "https://www.loma.org/zh-hant/professional-development/designations/fellow-life-management-institute/?epslanguage=zh-Hant";
			// 		break;

			// 	default:
			// 		nextURL = "https://www.loma.org/en/professional-development/designations/flmi/#Courses";
			// 		break;
			// }
		}

			// HIOC survey link
		if (/hioc/.test(course.view.courseType)) {
			surveyURL = course.onReplaceTemplateVar('default_content', 'EOCLinks.survey.hioc');
			// switch (portalSetup.course_locale) {
			// 	case "en-US":
			// 		surveyURL = "https://www.surveymonkey.com/r/LOMAhiocEOC";
			// 		break;

			// 	case "fr-CA":
			// 	case "fr-FR":
			// 		surveyURL = "https://fr.surveymonkey.com/r/sondagedefindecours_interactifenligne";
			// 		break;

			// 	case "zh-CN":
			// 		surveyURL = "https://www.surveymonkey.com/r/CS_combeocsurveys_hioc";
			// 		break;

			// 	case "zh-TW":
			// 		surveyURL = "https://www.surveymonkey.com/r/CT_combeocsurveys_hioc";
			// 		break;

			// 	default:
			// 		surveyURL = "https://www.surveymonkey.com/r/LOMAhiocEOC";
			// 		break;
			// }
		}

		// EBOOK survey link
		else if (/(?:pdf|hybrid)/.test(course.view.courseType)) {
			surveyURL = course.onReplaceTemplateVar('default_content', 'EOCLinks.survey.hybrid');
			// "https://www.surveymonkey.com/r/LOMATextBasedEOC";
		}
		//}

		// using a handler so we can easily remove the event listener when the modal closes
		nextBtnHandler = openLink.bind(window, nextURL);
		surveyBtnHandler = openLink.bind(window, surveyURL);

		document.getElementById("eocNext").addEventListener("click", nextBtnHandler, false);
		document.getElementById("eocNext").addEventListener("keydown", nextBtnHandler, false);
		document.getElementById("eocSurvey").addEventListener("click", surveyBtnHandler, false);
		document.getElementById("eocSurvey").addEventListener("keydown", surveyBtnHandler, false);
	}

	// set up focusable elements and tab trap
	focusableElements = slice(document.getElementById("eocContainer").querySelectorAll(focusableElementsString));
	firstTabStop = focusableElements[0];
	lastTabStop = focusableElements[focusableElements.length - 1];
}

function closeEoc(e) {
	if (!e || e.type === "click" || (e.type === "keydown" && (e.which === keyCodes.RETURN || e.which === keyCodes.SPACE))) {
		document.getElementById("eocCover").classList.add("hidden");
		document.getElementById("eocHeader_full").classList.remove("hidden");
		document.getElementById("surveyBlock").classList.remove("hidden");
		document.getElementById("nextBlock").classList.remove("hidden");
		document.getElementById("eocHeader_soc").classList.add("hidden");
		document.getElementById("exitBlock").classList.add("hidden");

		document.getElementById("eocSurvey").disabled = false;
		document.getElementById("eocNext").disabled = false;
		document.getElementById("eocExit").disabled = true;

		document.getElementById("eocNext").removeEventListener("click", nextBtnHandler, false);
		document.getElementById("eocNext").removeEventListener("keydown", nextBtnHandler, false);
		document.getElementById("eocSurvey").removeEventListener("click", surveyBtnHandler, false);
		document.getElementById("eocSurvey").removeEventListener("keydown", surveyBtnHandler, false);
	}
}

function myFailOptions() {
	doAlert("fail");
}

// Called by shortcourseA courses to check for deficiencies are mark complete...
// TODO: Test and refactor
function doCheckComplete() {
	if (course.view.courseType.indexOf("demo") !== -1) {
		doAlert("demoMode");
	} else {
		var bPagesToView = [];
		//course_settings.Portal_Setup.Alerts.shortCourseIncomplete.Body = "";

		if (course.view.courseType === "shortcourseA") {
			for (var bCompletion = 0; bCompletion < bPageViews[course.view.state.module - 1][course.view.state.lesson - 1].length; bCompletion++) {
				if (bPageViews[course.view.state.module - 1][course.view.state.lesson - 1][bCompletion] === 0) {
					bPagesToView[bCompletion] = bCompletion;
				}
			}
		}

		//Pages that need to be viewed
		let pageListEl = document.createElement("span");	
		// only build list if there's more than one page to view.
		if (bPagesToView.length > 1) {
			for (var bPageViewEntry = 0; bPageViewEntry < bPagesToView.length; bPageViewEntry++) {
				let pageLink = document.createElement("a");
				setAttrs(pageLink, {
					role: "link",
					tabindex: "0",
					id: `page_link_${bPagesToView[bPageViewEntry] + 1}`,
					'data-page': bPagesToView[bPageViewEntry] + 1
				});

				// add text
				pageLink.textContent = bPagesToView[bPageViewEntry] + 1;

				// eventlisteners
				pageLink.addEventListener("click", pushHistory.bind(course, undefined, "Page_Selection", []), false);
				pageLink.addEventListener("keydown", pushHistory.bind(course, undefined, "Page_Selection", []), false);

				// add a comma if it's not the last missing page
				if (bPagesToView[bPageViewEntry] !== undefined && bPageViewEntry !== bPagesToView.length - 1) {
					let commaNode = document.createTextNode(", ");	
					pageListEl.append(pageLink, commaNode);
				} else if (bPageViewEntry === bPagesToView.length - 1) {
					pageListEl.append(pageLink);
				}
			}
		}

		// Questions that need to be answered
		let queListEl = document.createElement('ul');

		for (var allPgQueEntry = 0; allPgQueEntry < allPgQue.length; allPgQueEntry++) {
			// if no questions, it was initialized as an empty string. Better than checking for null or undefined
			if (allPgQue[allPgQueEntry] !== "") {

				for (var pqEntryQuestion = 0; pqEntryQuestion < allPgQue[allPgQueEntry].length; pqEntryQuestion++) {
					if (allPgQue[allPgQueEntry][pqEntryQuestion].answer === 0) {
						let li = document.createElement('li');
						let queLink = document.createElement('a');
						setAttrs(queLink, {
							role: "link",
							tabindex: "0",
							id: `que_link_p${allPgQueEntry}_q${pqEntryQuestion}`,
							'data-page': allPgQueEntry
						});

						// replace placeholders in the default_content variable
						let linkText = course.onReplaceTemplateVar('default_content', 'Labels.questionPage').replace(/\[\[x\]\]/, pqEntryQuestion + 1);
						linkText = linkText.replace(/\[\[y\]\]/, allPgQueEntry);

						queLink.textContent = linkText;
						
						queLink.addEventListener("click", pushHistory.bind(course, undefined, "Page_Selection", []), false);
						queLink.addEventListener("keydown", pushHistory.bind(course, undefined, "Page_Selection", []), false);

						li.append(queLink);
						queListEl.append(li);
					}
				}
			}
		}

		// if pageListEl or queListEl build above have any children, the course isn't complete
		if (pageListEl.childElementCount > 0 || queListEl.childElementCount > 0) {
			doAlert("shortCourseIncomplete");
	
			// add or hide pages
			if (pageListEl.childElementCount > 0) {
				document.getElementById('pages').append(pageListEl);
			}
			else {
				document.getElementById('pages').classList.add('hidden');
			}
			// add or hide questions
			if (queListEl.childElementCount > 0) {
				document.getElementById('questions').append(queListEl);
			}
			else {
				document.getElementById('questions').classList.add('hidden');
			}
		}
		else {
			markLessonComplete(1, 1);
			showEOC();
		}
	}
}
/******** END END OF COURSE FUNCTIONS ********/

function openLink(url, e) {
	if (!e || e.type === "click" || (e.type === "keydown" && (e.which === keyCodes.RETURN || e.which === keyCodes.SPACE))) {
		window.open(url, "_blank", "fullscreen='yes'");
	}
}

function closeCourse(e) {
	if (e.type === "click" || (e.type === "keydown" && (e.which === keyCodes.RETURN || e.which === keyCodes.SPACE))) {
		if (!/demo/.test(course.view.courseType) && course.view.courseType !== "hioc") {
			doLMSFinish();
		}

		window.top.close();
	}
}

/****** START ALERTS ******/

// builds buttons for alert modals
function buildButton(btnType) {
	let button = document.createElement("button");
	let check = document.createElement('span');
	let label = document.createElement('span');
	let checkContainer;
	let labelVar;
	
	check.classList.add('welcome-chk');
	check.innerHTML = '&#10004;';
	label.classList.add('sr-only');
	label.innerHTML = course.onReplaceTemplateVar("default_content", "Labels.completed");

	switch (btnType) {
		case "clsBtn":
			labelVar = "bOK";
			button.classList.add("clsBtn");

			break;

		case "cnclBtn":
			labelVar = "bCancel";
			button.classList.add("cnclBtn");

			break;

		case "WelcomeVideoBtn":
			labelVar = "WelcomeVideoBtn";
			button.classList.add('wVideoBtn', "introVidTerms");
			checkContainer = document.createElement('div');
			checkContainer.classList.add('hidden', 'welcomeChk');
			checkContainer.append(check, label);

			break;

		case "TermsOfUseBtn":
			labelVar = "TermsOfUseBtn";
			button.classList.add("termsBtn", "introVidTerms");
			checkContainer = document.createElement('div');
			checkContainer.classList.add('hidden', 'welcomeChk');
			checkContainer.append(check, label);

			break;

		case "ReportErrorBtn":
			labelVar = "ReportErrorBtn";
			button.classList.add("reportBtn");

			break;

		case "noBtn":
			labelVar = "bNo";
			button.classList.add("erBtn");

			break;

		case "yesBtn":
			labelVar = "bYes";
			button.classList.add("hasErBtn");
			button.classList.add("clsBtn");

			break;
			
		case "surveyBtn":
			labelVar = "survey";
			button.id = "surveyBtn";
			button.classList.add("surveyBtn");

			break;

		case "failCloseBtn":
			labelVar = "failCloseBtn";
			button.classList.add("failCloseBtn");

			break;

		case "gotoBookmark":
			labelVar = "gotoBookmark";
			button.id = "goBookmark";
			button.classList.add("goBookmark");

			break;

		case "startOver":
			labelVar = "startOver";
			button.id = "startOver";
			button.classList.add("clsBtn");

			break;

		// case "returnToCrs":
		// 	labelVar = "returnToCrs";
		// 	button.id = "returnToCrs";
		// 	button.classList.add("clsBtn");

		// 	break;
	}

	let buttonContent = course.onReplaceTemplateVar("default_content", "Labels." + labelVar);
	button.innerHTML = buttonContent;
	if (checkContainer) button.append(checkContainer);
	button.classList.add("alertBtn");

	return button;
}

function doAlert(alertType, e) {
	if (!e || e.type === "click" || (e.type === "keydown" && (e.which === keyCodes.RETURN || e.which === keyCodes.SPACE))) {

		// clear out any existing content
		document.getElementById('alertHeader').innerHTML = "";
		document.getElementById('alertBody').innerHTML = "";
		document.getElementById('alertButtons').innerHTML = "";

		// if the course type is copyright and the alertType
		// is demo change alertType to copyright
		if (alertType === "demoMode" && course.view.courseType.indexOf("copyright") !== -1) {
			alertType = "copyright";
		}

		// // alertType is ereader and the student has already
		// // confirmed they've downloaded an ereader
		// if (alertType === "HaveEreader" && hasEreader === true) {
		// 	downloadEbook(e);
		// 	return;
		// }

		// get content for alert from default_content dataset
		let content = course.onReplaceTemplateVar("default_content", "Alerts." + alertType);

		// collect all the keys from the dataset
		let contentKeys = Object.keys(content);

		// cycle through dataset keys
		for (let contentKey of contentKeys) {
			// save content for each key
			let currentContent = content[contentKey];
			// element for each key
			let contentElement;

			// if the currentContent is an object (not a string)
			// then it's the set of buttons
			if (typeof currentContent === "object") {
				let buttons = currentContent;
				contentElement = document.createElement("div");
				contentElement.classList.add("btnContainer");

				for (let button of buttons) {
					buttonElement = buildButton(button);
					contentElement.append(buttonElement);
				}
			}
			// otherwise it's just a string
			else {
				// create a span
				contentElement = document.createElement("span");
				if (/\{bmNumber\}/.test(currentContent)) {
				}
				currentContent = currentContent.replace(/\{bmNumber\}/, Number(bmNumber) + 1); // bookmark page numbers
				if (alertType === "EOMWarning") {
					if (bRemainingAttempts !== undefined && bRemainingAttempts[bCurrentModule - 1] !== undefined){
						currentContent = currentContent.replace("\[\[attemptNum\]\]", bRemainingAttempts[bCurrentModule - 1] + 1);
					}
					else {
						currentContent = currentContent.replace("\[\[attemptNum\]\]", "1");
					}
				}
				if (/\{\{.*?\}\}/.test(currentContent)) {
					let matches = currentContent.match(/\{\{.*?\}\}/g);
					for (let match of matches) {
						let matchPattern = match.replace(/(\{|\}|\.|\||\[|\])/g, "\\$1");
						let matchRegEx = new RegExp(matchPattern);
						// replace pattern with variable
						currentContent = currentContent.replace(matchRegEx, course.view.replaceVars(match, contentElement));
					}
				}
				// add content
				contentElement.innerHTML = currentContent;
			}
			
			// append to appropriate div
			document.getElementById("alert" + contentKey).append(contentElement);
		}
		document.getElementById("alertCoverContainer").classList.add(alertType);

		// xSpot close button not included on introVidTerms and LRSerror
		if (/(intro|notconnected|bookmark|loadingEOM|fail)/.test(alertType)) {
			document.querySelector("#alertCoverContainer .xSpot").classList.add("hidden");
			document.querySelector("#alertCoverContainer .xSpot").disabled = true;
		} else {
			document.querySelector("#alertCoverContainer .xSpot").classList.remove("hidden");
			document.querySelector("#alertCoverContainer .xSpot").disabled = false;
		}

		// not connected error has a bg image
		// add class to connect bg image
		// if (alertType === "notconnected") {
		// 	document.getElementById("alertCoverContainer").classList.add("reportError");
		// }

		// intro vid/terms popup has different style
		// add class for style
		if (alertType === "introVidTerms") {
			// document.getElementById("alertCoverContainer").classList.add("introVidTerms");

			if (termsViewed) {
				document.querySelector("#alertButtons .termsBtn .welcomeChk").classList.remove("hidden");
			}
			if (videoViewed) {
				document.querySelector("#alertButtons .wVideoBtn .welcomeChk").classList.remove("hidden");
			}
		}

		// bookmark popup has different style
		// add class for style
		if (alertType === "bookmark") {
			// document.getElementById("alertCoverContainer").classList.add("bookmark");
			activeFocus = document.getElementById('lessonContent');
		}

		setEventListeners("alertCover", "alertCover");

		document.getElementById("alertCover").classList.remove("hidden");
		document.getElementById("alertCoverContainer").focus();

		// set up focusable elements and tab trap
		if (e) activeFocus = e.target;
		focusableElements = slice(document.getElementById("alertCoverContainer").querySelectorAll(focusableElementsString));
		firstTabStop = focusableElements[0];
		lastTabStop = focusableElements[focusableElements.length - 1];
		//document.getElementById('alertCoverContainer').addEventListener('keydown', modalTrap.bind(document.getElementById('alertCoverContainer')), false);
	}
}

function closeAlert(e) {
	if (!e || e.type === "click" || (e.type === "keydown" && (e.which === keyCodes.RETURN || e.which === keyCodes.SPACE))) {
		// set alertCover to hidden
		document.getElementById("alertCover").classList.add("hidden");
		// remove reportError/introVidTerms class if it exists
		document.getElementById("alertCoverContainer").classList.remove("reportError");
		document.getElementById("alertCoverContainer").classList.remove("introVidTerms");
		document.getElementById("alertCoverContainer").classList.remove("bookmark");
		document.getElementById("alertHeader").innerHTML = "";
		document.getElementById("alertBody").innerHTML = "";
		document.getElementById("alertButtons").innerHTML = "";

		// gather all elements with visible class
		let visibleComps = slice(document.querySelectorAll(".visible"));
		for (let visibleComp of visibleComps) {
			// remove visible class
			visibleComp.classList.remove("visible");
		}

		if (activeFocus) activeFocus.focus();
	}
}

function showKeyterm(e) {
	if (e.type === "click" || (e.type === "keydown" && (e.which === keyCodes.RETURN || e.which === keyCodes.SPACE))) {
		activeFocus = e.target;
	
		let searchTerm = activeFocus.innerHTML.toLowerCase();

		// FUZZYSET -- get term and def from glossary
		let searchResult = fs.get(searchTerm);
		let term_head = searchResult[0][1];
		let term_def = glossByTerm[searchResult[0][1]].definition;

		// TODO: Commenting this out until we know what we're doing with xAPI statements
		// let ktStatement = {
		// 	type: "keyterm",
		// 	verb: "pressed",
		// 	activity: "http://id.tincanapi.com/activitytype/vocabulary-word",
		// 	module: bCurrentMod + 1,
		// 	lesson: bCurrentLsn + 1,
		// 	//"page": bCurrentPag + 1,
		// 	page: np_num,
		// 	objectID: term_head.replace(/ /g, "_")
		// };

		// if (isXAPI) {
		// 	LRSSend(ktStatement);
		// }

		// fill in term and definition
		document.getElementById("kt-term").innerHTML = term_head;
		document.getElementById("kt-def").innerHTML = term_def;
		// unhide
		document.getElementById("keytermCover").classList.remove('hidden');
		

		// set up focusable elements and tab trap
		focusableElements = slice(document.getElementById("keytermCover").querySelectorAll(focusableElementsString));
		firstTabStop = focusableElements[0];
		lastTabStop = focusableElements[focusableElements.length - 1];

		// focus
		document.getElementById("keytermCoverContainer").focus();
	}
}

function closeKeyterm(e) {
	if (!e || e.type === "click" || (e.type === "keydown" && (e.which === keyCodes.RETURN || e.which === keyCodes.SPACE))) {
		// clear the term and definition
		document.getElementById("kt-term").innerHTML = "";
		document.getElementById("kt-def").innerHTML = "";
		// hide
		document.getElementById("keytermCover").classList.add('hidden');

		if (activeFocus) activeFocus.focus();
	}
}

function reportError(e) {
	// %0D%0A = line break in most email packages

	if (e.type === "click" || (e.type === "keydown" && (e.which === keyCodes.RETURN || e.which === keyCodes.SPACE))) {
		var IESubject = portalSetup.Course_Name + " - Error " + theLRSerror.status + ": " + theLRSerror.responseText;
		var IEBody;

		// IE and Outlook 2016 throw a system error when trying to create the email with line breaks.
		// Any other combination works fine with the line breaks...ugh
		if (studentBrowserInfo.browser.name === "IE") {
			IEBody = encodeURIComponent(
				"---" +
					course_settings.Portal_Setup.Alerts.LRSError.emailTellMore +
					"------------------------------------------------------------------------------------------------------------" +
					course_settings.Portal_Setup.Alerts.LRSError.emailDoNotAlter +
					"-----" +
					course_settings.Portal_Setup.Alerts.LRSError.emailWeNeedThisInfo +
					"---------------" +
					theLRSerror.status +
					": " +
					theLRSerror.responseText +
					"---------------" +
					lrsActor +
					"---------------" +
					JSON.stringify(studentBrowserInfo) +
					"---------------"
			);
		} else {
			IEBody =
				"---" +
				course_settings.Portal_Setup.Alerts.LRSError.emailTellMore +
				"---%0D%0A%0D%0A %0D%0A%0D%0A %0D%0A%0D%0A %0D%0A%0D%0A %0D%0A%0D%0A ---------------------------------------------------------------------------------------------------------%0D%0A---" +
				course_settings.Portal_Setup.Alerts.LRSError.emailDoNotAlter +
				"---%0D%0A---" +
				course_settings.Portal_Setup.Alerts.LRSError.emailWeNeedThisInfo +
				"---%0D%0A %0D%0A" +
				theLRSerror.status +
				": " +
				theLRSerror.responseText +
				"%0D%0A%0D%0A" +
				lrsActor +
				"%0D%0A%0D%0A" +
				JSON.stringify(studentBrowserInfo) +
				"%0D%0A%0D%0A";
		}

		var theWholeEmail = "mailto:ReportThisIssue@loma.org?subject=" + IESubject + "&body=" + IEBody;

		window.location.href = theWholeEmail;

		document.getElementsByClassName("alertBtn")[0].style.display = "none";
		document.getElementsByClassName("alertBtn")[1].style.display = "block";
	}
}
/****** END ALERTS ******/

/****** START VIDEO FUNCTIONS ******/
function showVid(video, e) {
	if (!e || e.type === "click" || (e.type === "keydown" && (e.which === keyCodes.RETURN || e.which === keyCodes.SPACE))) {
		let container = document.getElementById("vidCover");
		var vid = container.querySelector("video");
		var vidName = video.video_url;

		// show video modal
		container.classList.remove("hidden");
		// set url
		container.querySelector("source").setAttribute("src", video.video_url);
		// add transcript
		container.querySelector("#bTranscript").innerHTML = video.transcript;
		// focus in modal
		container.querySelector("#vidContainer").focus();

		vid.load();

		// save trigger focus
		if (e) activeFocus = e.target;

		// modal trap
		focusableElements = slice(document.getElementById("vidContainer").querySelectorAll(focusableElementsString));
		firstTabStop = focusableElements[0];
		lastTabStop = focusableElements[focusableElements.length - 1];

		// send xAPI statement
		if (isXAPI) {
			// use bind to send the video as 'this'
			vid.addEventListener("pause", sendVidStatement.bind(vid), false);
			window.addEventListener("unload", sendVidStatement.bind(vid), false);
		}
	}
}

function sendVidStatement(e) {
	// get video from 'this'
	let vid = this;
	// get video name
	let vidName = vid.querySelector("source").src.split("/");
	let vidStartTime;
	let vidEndTime;
	let vidDuration = vid.duration;

	// set start and end time
	if (vid.played.length === 0) {
		vidStartTime = vid.played.start(0);
		vidEndTime = vid.played.end(0);
	} else {
		vidStartTime = vid.played.start(vid.played.length - 1);
		vidEndTime = vid.played.end(vid.played.length - 1);
	}

	// build statement
	var theStatement = {
		type: "video",
		verb: "played",
		activity: "http://activitystrea.ms/schema/1.0/video",
		objectID: vidName[vidName.length - 1],
		extensions: {
			startTime: vidStartTime,
			stopTime: vidEndTime,
			duration: vidDuration
		}
	};

	LRSSend(theStatement);
}

function closeVid(e) {
	if (!e || e.type === "click" || (e.type === "keydown" && (e.which === keyCodes.RETURN || e.which === keyCodes.SPACE))) {
		let container = document.getElementById("vidCover");

		// set show/hide of elements back to original state
		container.classList.add("hidden");
		container.querySelector("#bTranscript").classList.add("hidden");
		container.querySelector(".transcript-label").classList.remove("hidden");
		container.querySelector(".video-label").classList.add("hidden");
		container.querySelector("video").classList.remove("hidden");
		container.querySelector("source").setAttribute("src", "");

		// return focus
		if (activeFocus) {
			activeFocus.focus();

			// prevents a click event from fire when button gets focus
			if (e) e.preventDefault();
		}

		if (!document.getElementById("alertCover").classList.contains("hidden")) {
			focusableElements = slice(document.getElementById("alertCoverContainer").querySelectorAll(focusableElementsString));
			firstTabStop = focusableElements[0];
			lastTabStop = focusableElements[focusableElements.length - 1];
		}
	}
}

function transToggle(e) {
	if (e.type === "click" || (e.type === "keydown" && (e.which === keyCodes.RETURN || e.which === keyCodes.SPACE))) {
		let container = document.getElementById("vidCover");
		let transcriptBtn = document.getElementById("transcriptBtn");

		// show video
		if (transcriptBtn.querySelector(".transcript-label").classList.contains("hidden")) {
			// swap button labels
			transcriptBtn.querySelector(".transcript-label").classList.remove("hidden");
			transcriptBtn.querySelector(".video-label").classList.add("hidden");
			// show video
			container.querySelector("video").classList.remove("hidden");
			// hide transcript
			container.querySelector("#bTranscript").classList.add("hidden");
			// focus on video
			container.querySelector("video").focus();
		}
		// show transcript
		else {
			transcriptBtn.querySelector(".transcript-label").classList.add("hidden");
			transcriptBtn.querySelector(".video-label").classList.remove("hidden");
			// hide video
			container.querySelector("video").classList.add("hidden");
			// show transcript
			container.querySelector("#bTranscript").classList.remove("hidden");
			// focus on transcript
			container.querySelector("#bTranscript").focus();
			// scroll to top
			document.getElementById("bTranscript").scrollTop = 0;
		}
	}
}
/****** END VIDEO FUNCTIONS ******/

/****** START LEGAL FUNCTIONS ******/
function showLegal(e) {
	if (!e || e.type === "click" || (e.type === "keydown" && (e.which === keyCodes.RETURN || e.which === keyCodes.SPACE))) {
		console.log('calling showLegal')
		// set type of legal popup
		let legalType;
		if (!e || e.target.classList.contains("termsBtn")) {
			legalType = "terms";
		} else if (e.target.classList.contains("privacyBtn")) {
			legalType = "privacy";
		}

		// show lang links if local isn't US
		if (courseLocale != "en-US") {
			// remove hidden class
			document.getElementById("lang_links").classList.remove("hidden");
			document.getElementById(courseLocale).classList.remove("hidden");
			document.getElementById("en-US").classList.remove("hidden");
			// add active class
			document.getElementById("lang_links").classList.add("visible");
			document.getElementById(courseLocale).classList.add("visible");
			document.getElementById(courseLocale).classList.add("activated");
			document.getElementById(courseLocale).setAttribute("disabled", true);
			document.getElementById("en-US").classList.add("visible");
		}

		// if terms have been viewed or we're looking at
		// the privacy statement, only show close button
		if (termsViewed || legalType == "privacy" || /demo/.test(course.view.courseType)) {
			document.getElementById("accept_terms").classList.remove("must-accept");
			document.getElementById("accept_terms").classList.add("closable");
			document.getElementById(`closeBtn_${courseLocale}`).classList.remove("hidden");
			document.getElementById(`closeBtn_${courseLocale}`).classList.add("visible");
			//document.getElementById('closeBtn').addEventListener('click')
		} else {
			document.getElementById("accept_terms").classList.add("must-accept");
			document.getElementById(`terms_p_${courseLocale}`).classList.remove("hidden");
			document.getElementById(`acceptBtn_${courseLocale}`).classList.remove("hidden");
			document.getElementById(`terms_p_${courseLocale}`).classList.add("visible");
			document.getElementById(`acceptBtn_${courseLocale}`).classList.add("visible");
		}

		// display the terms/privacy modal
		document.getElementById("termsCover").classList.remove("hidden");
		document.getElementById(`${legalType}_content_${courseLocale}`).classList.remove("hidden");
		document.getElementById(legalType + "_load").classList.remove("hidden");
		document.getElementById("termsCover").classList.add("visible");
		document.getElementById(`${legalType}_content_${courseLocale}`).classList.add("visible");
		document.getElementById(legalType + "_load").classList.add("visible");

		// scroll to top
		document.getElementById(`${legalType}_load`).scrollTop = 0;

		// move focus to modal
		document.getElementById("termsCover-cont").setAttribute("tabindex", "-1");
		document.getElementById("termsCover-cont").focus();

		// trap focus in modal
		if (e) { activeFocus = e.target; }
		// get visible divs
		let visibleDivs = [document.querySelector("#lang_links:not(.hidden)"), document.querySelector(`#${legalType}_load #${legalType}_content_${courseLocale}`), document.getElementById("accept_terms")];

		// collect all focusable elements from
		// visible divs in the modal
		focusableElements = [];
		for (let visibleDiv of visibleDivs) {
			if (visibleDiv) {
				let focusableChildren = slice(visibleDiv.querySelectorAll(focusableElementsString));
				for (let focusableChild of focusableChildren) {
					if (!focusableChild.classList.contains("hidden")) {
						focusableElements.push(focusableChild);
					}
				}
			}
		}

		// set first and last tab stops
		firstTabStop = focusableElements[0];
		lastTabStop = focusableElements[focusableElements.length - 1];
	}
}

function legalLang(e) {
	if (e.type === "click" || (e.type === "keydown" && (e.which === keyCodes.RETURN || e.which === keyCodes.SPACE))) {
		let newLang = e.target.id;
		let oldLang = document.querySelector("#lang_links .activated").id;
		let container = document.querySelector(".tp_container.visible");
		let buttonContainer = document.getElementById("accept_terms");
		let legalType = container.id.replace(/([^_]+)_load/, "$1");

		// remove activated class and enable button
		document.querySelector("#lang_links .activated").removeAttribute("disabled");
		document.querySelector("#lang_links .activated").classList.remove("activated");

		// add activated class and disable button
		document.querySelector("#lang_links #" + newLang).classList.add("activated");
		document.querySelector("#lang_links #" + newLang).setAttribute("disabled", true);

		// hide old lang text
		container.querySelector(".visible").classList.add("hidden");
		container.querySelector(".visible").classList.remove("visible");

		// show new lang text
		container.querySelector(`#${legalType}_content_${newLang}`).classList.add("visible");
		container.querySelector(`#${legalType}_content_${newLang}`).classList.remove("hidden");

		// collect classes of visible accept_terms elements
		let visibleElements = slice(buttonContainer.querySelectorAll(".visible"));
		let classes = [];
		for (let visibleElement of visibleElements) {
			let className = visibleElement.className.replace(/visible/, "").trim();
			classes.push(className);
		}

		// hide old lang buttons
		buttonContainer.querySelector(".visible").classList.add("hidden");
		buttonContainer.querySelector(".visible").classList.remove("visible");

		// use classes to show new lang buttons
		for (let className of classes) {
			buttonContainer.querySelector(`#${className}_${newLang}`).classList.remove("hidden");
			buttonContainer.querySelector(`#${className}_${newLang}`).classList.add("visible");
		}

		container.focus();
	}
}

function acceptTerms(e) {
	if (!e || e.type === "click" || (e.type === "keydown" && (e.which === keyCodes.RETURN || e.which === keyCodes.SPACE))) {
		//xAPI stuff
		termsViewed = true;

		if (isXAPI) {
			bSetState();
			var theStatement = {
				type: "terms_of_use",
				verb: "accepted",
				activity: "http://activitystrea.ms/schema/1.0/file",
				objectID: "/terms_of_use"
			};
			LRSSend(theStatement);
		}
		else {
			bSetState();
		}

		// hide the intro alert if video has also been viewed
		if (showTerms === true && showIntroVideo === true) {
			// show checkmark
			document.querySelector("#alertButtons .termsBtn .welcomeChk").classList.remove("hidden");
			if (videoViewed === true) {
				closeAlert(e);
			}
		}

		// close popup
		closeTerms(e);
	}
}

function closeTerms(e) {
	if (!e || e.type === "click" || (e.type === "keydown" && (e.which === keyCodes.RETURN || e.which === keyCodes.SPACE))) {
		let container = document.getElementById("termsCover");
		let visibleChildren = slice(container.querySelectorAll(".visible"));
		visibleChildren.unshift(container);

		for (let visibleChild of visibleChildren) {
			visibleChild.classList.remove("visible");
			visibleChild.classList.add("hidden");
		}

		// re-enable lang link buttons
		if (container.querySelector(".activated")) {
			container.querySelector(".activated").removeAttribute("disabled");
			container.querySelector(".activated").classList.remove("activated");
		}

		// remove closable class from accept_terms div
		document.getElementById("accept_terms").classList.remove("closable");

		if (activeFocus) {
			activeFocus.focus();
			// prevents a click event from fire when button gets focus
			if (e) {
				e.preventDefault();
			}
		}

		if (!document.getElementById("alertCover").classList.contains("hidden")) {
			focusableElements = slice(document.getElementById("alertCoverContainer").querySelectorAll(focusableElementsString));
			firstTabStop = focusableElements[0];
			lastTabStop = focusableElements[focusableElements.length - 1];
		}
	}
}

/****** START EBOOKS FUNCTIONS ******/
function ereaderDownloaded(e) {
	if (e.type === "click" || (e.type === "keydown" && (e.which === keyCodes.RETURN || e.which === keyCodes.SPACE))) {
		hasEreader = true;

		if (isXAPI) {
			if (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1) {
				isNewiPad = true;
			}
			if (studentBrowserInfo.ua.indexOf("iPad") !== -1) {
				isNewiPad = true;
			}
			if (isNewiPad === false) {
				bSetState();
			}
		}

		downloadEbook(e);
	}
}

function getEreader(e) {
	if (e.type === "click" || (e.type === "keydown" && (e.which === keyCodes.RETURN || e.which === keyCodes.SPACE))) {
		e.preventDefault();
		hasEreader = false;

		// set state
		if (isXAPI) {
			bSetState();
		}

		// close the alert
		closeAlert(e);

		// swap template to getting started
		//course.handleSwapTemplate("getting-started", "button", e);
		pushHistory("course", "handleSwapTemplate", ["gettingStarted", "button"]);
	}
}

function downloadEbook(e) {
	e.preventDefault();
	if (e.type === "click" || (e.type === "keydown" && (e.which === keyCodes.RETURN || e.which === keyCodes.SPACE))) {
		gBook = e.target.href.replace(/.*?ebooks\//, "");

		if (hasEreader !== true) {
			if (isIOSFF) {
				r = confirm("Do you have an e-reader installed and you are ready to download this e-book?");
				if (r === true) {
					hasEreader = true;
					//bSetState();
				} else {
					e.preventDefault();
					getEreader(e);
				}
			} else {
				doAlert("HaveEreader", e);
			}
		} else {
			if (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1) {
				isNewiPad = true;
			}
			if (studentBrowserInfo.ua.indexOf("iPad") !== -1) {
				isNewiPad = true;
			}

			if (studentBrowserInfo.device.type !== "mobile") {
				var tempLink = document.createElement("a");
				tempLink.download = gBook;
				tempLink.href = "ebooks/" + gBook;
				document.body.appendChild(tempLink);
				tempLink.click();
				document.body.removeChild(tempLink);
			} else {
				var tempPDF = "ebooks/" + gBook; // Original Line
				window.open(tempPDF, "pdfwindow", "fullscreen=yes"); // Original Line
			}

			var modContentStatemnt = {
				type: "e-book",
				verb: "downloaded",
				activity: "http://id.tincanapi.com/activitytype/book",
				module: bCurrentModule, // - 1,
				objectID: gBook
			};
			if (isXAPI && !isNewiPad) {
				LRSSend(modContentStatemnt);
			}
		}
	}
}

function openPDF(theLink, e) {
	if (e.type === "click" || (e.type === "keydown" && (e.which === keyCodes.RETURN || e.which === keyCodes.SPACE))) {
		window.open(theLink, "studyaids", "fullscreen=yes");

		var theStatement = {
			type: "PDF",
			verb: "viewed",
			activity: "http://activitystrea.ms/schema/1.0/file",
			objectID: theLink
		};
		LRSSend(theStatement);
	}
}

function showAbout(e) {
	if (e.type === "click" || (e.type === "keydown" && (e.which === keyCodes.RETURN || e.which === keyCodes.SPACE))) {
		document.getElementById("aboutCover").classList.remove("hidden");
		activeFocus = e.target;
		document.getElementById("aboutContainer").focus();

		// set up focusable elements and tab trap
		focusableElements = slice(document.getElementById("aboutContainer").querySelectorAll(focusableElementsString));
		firstTabStop = focusableElements[0];
		lastTabStop = focusableElements[focusableElements.length - 1];
	}
}

function closeAbout(e) {
	if (!e || e.type === "click" || (e.type === "keydown" && (e.which === keyCodes.RETURN || e.which === keyCodes.SPACE))) {
		document.getElementById("aboutCover").classList.add("hidden");
		activeFocus.focus();
	}
}
/****** END EBOOKS FUNCTIONS ******/

/******* START DASHBOARD FUNCTIONS *******/


function showDash(update) {
	hideLessonStuff();
	course.handleSwapTemplate("myDashboard", "link");
	if (!update) {
		pushHistory(undefined, "showDash", []);
	}
}

//DO THE PREMILINARY CALCULATIONS FOR THE CIRCLES (MOVED FROM LMSLRS.JS)
function doCircles() {
	let bigNumer = 0;

	// if hioc and not demo
	if (/hioc/.test(course.view.courseType) && !/demo/.test(course.view.courseType)) {
		// for each module
		for (let a = 0; a < TOC.length; a++) {
			//get the count of the number of lessons completed overall...
			for (let b = 0; b < bLessonCompletions[a].length; b++) {
				if (bLessonCompletions[a][b] !== "---- - -- - --") {
					bigNumer++;
				} else {
					continue;
				}
			}
			//***May need to change if the number of lessons to access the exam is ever reduced from 100%***
			if (moduleScores[a] !== undefined) {
				if (moduleScores[a][0] !== undefined && moduleScores[a][0] > 0) {
					bGprcnt[a] = 100; // if the exam has been passed, mark the whole module as complete...
					bigNumer++;
				} else {
					let denom = TOC[a].length + 1;

					// get a proper count of things with a date...
					let numer = 0;
					for (let g = 0; g < bLessonCompletions[a].length; g++) {
						if (bLessonCompletions[a][g] !== "---- - -- - --") {
							numer += 1;
						}
					}

					if (numer > 0 || numer !== undefined) {
						bGprcnt[a] = parseInt((numer / denom) * 100); // if the exam hasn't been completed, then show the partial fill-in...
					}
				}
			}
		}

		//set percentage for whole course circle...
		crsCirWhole = parseInt((bigNumer / (bTotalLessons + TOC.length)) * 100);
	} else if (/(hybrid)/.test(course.view.courseType) && !/demo/.test(course.view.courseType)) {
		document.getElementById("dashModule").classList.remove("hidden");
		let dashCheck = document.createElement("img");
		dashCheck.setAttribute("src", "includes/images/lesson_indicator_chk.png");
		dashCheck.setAttribute("alt", '');

		for (let b = 0; b < TOC.length; b++) {
			let dashGroupHeight = document.querySelector(".dashlessonnumber").offsetHeight;
			// set height of the dashgroup
			document.querySelector(`#dashgroup-${b + 1}`).style.height = dashGroupHeight + "px";
			if (moduleScores[b] !== undefined) {
				if (moduleScores[b][0] !== undefined && moduleScores[b][0] > 0) {
					bigNumer++;
					document.querySelector(`#dashgroup-${b + 1} .dashcheckmark`).append(dashCheck.cloneNode(true));
					document.querySelector(`#dashgroup-${b + 1} .lesson-date`).innerHTML = moduleScores[b][1];
					document.querySelector(`#dashgroup-${b + 1} .lesson-date`).setAttribute('aria-hidden', 'false')
					document.querySelector(`#dashgroup-${b + 1} .sr-only`).innerHTML = course.onReplaceTemplateVar('default_content', 'Labels.complete');
					document.querySelector(`#dashgroup-${b + 1} .dashscore`).innerHTML = moduleScores[b][0];
				}
			}
		}
		//set percentage for whole course circle...
		crsCirWhole = parseInt((bigNumer / TOC.length) * 100);
	} else {
		if (/hybrid/.test(course.view.courseType)) {
			document.getElementById("dashModule").classList.remove("hidden");
		}
		
		// it's a demo, so there's no progress at all...
		crsCirWhole = 0;
		for (let bDemoPercent = 0; bDemoPercent < TOC.length; bDemoPercent++) {
			bGprcnt[bDemoPercent] = 0;
			moduleScores[bDemoPercent][1] = "---- - -- - --";
		}
	}

	showCircles();
}

// FILL IN THE CIRCLES
function showCircles() {
	let circles = slice(document.querySelectorAll(".circle"));

	let iter = 0;
	for (let circle of circles) {
		let canvasID = circle.getElementsByTagName("CANVAS")[1].getAttribute("id");
		let values = [];
		let colors = [];
		let compPercent;

		if (circle.getAttribute("id") === "big_circle" || circle.getAttribute("id") === "circle-x") {
			values = [crsCirWhole, 100 - crsCirWhole];
			colors = ["#0785E0", "#E5E5E5"];
			let myDougnutChart = new Piechart({
				canvas: document.getElementById(canvasID + "-bg"),
				data: [99, 1],
				colors: ["#E5E5E5", "#E5E5E5"],
				doughnutHoleSize: 0.8
			});
			myDougnutChart.draw();
			compPercent = crsCirWhole;
		} else {
			values = [bGprcnt[iter], 100 - bGprcnt[iter]];
			colors = ["#1C971E", "#cccccc"];

			let myDougnutChart = new Piechart({
				canvas: document.getElementById(canvasID + "-bg"),
				data: [99, 1],
				colors: ["#cccccc", "#cccccc"],
				doughnutHoleSize: 0.8
			});
			myDougnutChart.draw();
			compPercent = bGprcnt[iter];
			iter++;
		}

		generatePieGraph(canvasID, {
			animation: true,
			animationSpeed: 5,
			doughnutHoleSize: 80,
			doughnutHoleColor: "#fff",
			values: values,
			colors: colors
		});

		findAncestor(document.getElementById(canvasID), "class", "circle").setAttribute("aria-description", `${compPercent}% ${course.view.replaceVars("default_content.Labels.complete")}`);
	}
}

function updateDash() {
	let waitForDash = false;
	// if dash isn't already showing, we need to call showDash
	if (course.view.state.prevTemplate != "myDashboard") {
		waitForDash = true;
		showDash(true);
	}

	
	// set up mutation observer so we know when the JB components are loaded
	// target and config
	const dashMutTarget = document.getElementById("portalContents");
	const dashMutConfig = { childList: true };

	const dashObserverCB = function (mutationList, observer) {
		if (document.getElementById("dashSmall")) {
			if (observer) {
				// stop observing mutations
				observer.disconnect();
				observer.takeRecords();
			}

			let bigCircle = document.getElementById("big_circle");

			// circle-x is for the whole course (small circle)
			// state module will be null
			if (!course.view.state.module) {
				//change the big circle to the whole course data
				generatePieGraph("big_canvas", {
					animation: true,
					animationSpeed: 5,
					doughnutHoleSize: 80,
					doughnutHoleColor: "#fff",
					values: [crsCirWhole, 100 - crsCirWhole],
					colors: ["#1C971E", "#E5E5E5"]
				});
				document.getElementById("big_circle").setAttribute("aria-description", `${crsCirWhole}% ${course.view.replaceVars("default_content.Labels.complete")}`);

				//change the big circle label to the module number
				document.getElementsByClassName("labeled")[0].innerText = course.view.replaceVars("course_settings.Portal_Setup.Course_Number", document.getElementsByClassName("labeled")[0]);
				// get tooltip text
				let toolTipText = course.view.replaceVars("course_settings.Portal_Setup.Course_Name", document.getElementsByClassName("labeled")[0]);

				// get aria-label text
				let label = course.view.replaceVars("default_content.Labels.courseProgress", bigCircle);

				// set tooltip text
				setAttrs(bigCircle, {
					tooltip: toolTipText,
					"aria-label": label
				});

				// remove attrs
				bigCircle.removeAttribute("role");
				bigCircle.removeAttribute("tabindex");
				bigCircle.removeAttribute("data-index");

				// remove event listeners
				// (tempSwapHandler is set in setEventListeners function)
				bigCircle.removeEventListener("click", pushHistoryHandler, false);
				bigCircle.removeEventListener("keydown", pushHistoryHandler, false);

				// remove modLink class (controls cursor style)
				bigCircle.classList.remove("modLink");

				// remove the data-module attr from body
				document.body.removeAttribute("data-module");
				course.view.module = null;

				// add/remove hidden classes
				document.getElementById("dashModule").classList.add("hidden");
				document.getElementById("dashIntro").classList.remove("hidden");

				//Make sure the dashInfo area is tall enough...
				document.getElementById("dashInfo").style.height = "250px";
			}
			// all other circles are for modules
			else {

				let tempLesson = course.view.state.module - 1;
				//change the big circle to the module data
				generatePieGraph("big_canvas", {
					animation: true,
					animationSpeed: 5,
					doughnutHoleSize: 80,
					doughnutHoleColor: "#fff",
					values: [bGprcnt[tempLesson], 100 - bGprcnt[tempLesson]],
					colors: ["#1C971E", "#E5E5E5"]
				});
				document.getElementById("big_circle").setAttribute("aria-description", `${bGprcnt[tempLesson]}% ${course.view.replaceVars("default_content.Labels.complete")}`);

				//change the big circle label to the module number
				document.getElementsByClassName("labeled")[0].innerText = `M${course.view.state.module}`;

				// set attrs
				setAttrs(bigCircle, {
					role: "link",
					tabindex: "0",
					"data-index": course.view.state.module,
					"data-module": course.view.state.module
				});
				
				// get aria-label text
				let label = course.view.replaceVars("default_content.Labels.moduleNum", bigCircle);
				// get tooltip text
				let toolTipText = course.view.replaceVars("default_content.Labels.SelectToGoToModule", bigCircle);

				// set tooltip/label attrs
				setAttrs(bigCircle, {
					tooltip: toolTipText,
					"aria-label": label,
				});

				// add modLink class (controls cursor style)
				bigCircle.classList.add("modLink");

				// add event listeners
				// opens module page when big circle is module
				// (pushHistoryHandler is set in setEventListeners function)
				bigCircle.addEventListener("click", pushHistoryHandler, false);
				bigCircle.addEventListener("keydown", pushHistoryHandler, false);

				//Get the total number of lessons
				let tempLessonCount = TOC[tempLesson];
				let tempLessonArrayCount = tempLessonCount.length;
				let lessonsComplete = 0;
				let allowExam = false;

				// remove contents from dashGroupCont
				removeAllChildNodes(document.getElementById("dashGroupCont"));

				// create the html that will show the completions
				for (let i = 0; i < tempLessonArrayCount + 1; i++) {
					let lDateTime;
					let lDate = "---- - -- - --";
					let lComplete = course.view.replaceVars("default_content.Labels.incomplete");
					let lessonNum = i + 1;

					// CREATE ELEMENTS
					// group holder
					let dashGroup = document.createElement("div");
					// checkmark container
					let dashCheckContainer = document.createElement("div");
					// lesson number
					let dashLessonNum = document.createElement("div");
					dashLessonNum.setAttribute("data-index", lessonNum);
					// completion date
					let dashLessonDate = document.createElement("div");
					let dashLessonDateSts = document.createElement("span");
					let dashLessonDateTxt = document.createElement("span");

					dashLessonDateSts.className = "sr-only";
					// set aria-hidden to true so sr users don't
					// hear series of dashes
					setAttrs(dashLessonDateTxt, {
						class: "lesson-date",
						"aria-hidden": true
					});
					dashLessonDate.append(dashLessonDateSts, dashLessonDateTxt);

					// completion image
					let theCheck = document.createElement("img");
					setAttrs(theCheck, {
						// TODO: Test after app server blackout
						src: "includes/images/lesson_indicator_chk.png",
						//alt: course.view.replaceVars("default_content.Labels.completed", theCheck)
						alt: ""
					});

					// set up attr and innerHTML text
					let labelledBy = `lesson-${lessonNum}`;
					let describedBy = `lessondate-${lessonNum}`;
					let dashGroupClass = "dashgroup";
					let dashLessonText;

					// SET ATTRIBUTES
					// group holder
					setAttrs(dashGroup, {
						tabindex: "0",
						role: "link",
						"aria-labelledby": labelledBy,
						"aria-describedby": describedBy
					});
					// checkmark container
					setAttrs(dashCheckContainer, {
						class: "dashcheckmark"
					});
					// lesson number
					setAttrs(dashLessonNum, {
						id: "lesson-" + lessonNum,
						class: "dashlessonnumber",
						"data-index": lessonNum
					});
					// completion date/exam score
					setAttrs(dashLessonDate, {
						id: "lessondate-" + lessonNum,
						class: "dashlessondate"
					});

					
					// if this iteration equals count, this is the exam dashgroup
					if (i === tempLessonArrayCount) {
						dashGroupClass += " disabled exam";
						dashLessonText = course.view.replaceVars("default_content.Labels.exam", dashLessonNum);
						lDate = "--";
					}
					// otherwise it's a lesson dashgroup
					else {
						dashGroup.setAttribute('data-lesson', lessonNum);
						dashLessonNum.setAttribute('data-lesson', lessonNum);
						dashGroupClass += " lesson";
						dashLessonText = course.view.replaceVars("default_content.Labels.lessonNum", dashLessonNum);
					}

					// set lesson number
					dashLessonNum.innerHTML = dashLessonText;
					// set dashGroup class 
					dashGroup.setAttribute('class', dashGroupClass);

					// get completion date for lessons
					if (bLessonCompletions[tempLesson][i] !== lDate && bLessonCompletions[tempLesson][i] !== undefined) {
						// get completion date
						lDateTime = bLessonCompletions[tempLesson][i].split("T");
						lDate = lDateTime[0];
						// set completion status
						lComplete = course.view.replaceVars("default_content.Labels.complete");
						// append checkmark
						dashCheckContainer.append(theCheck);

						// lesson-date aria-hidden false
						dashLessonDateTxt.removeAttribute("aria-hidden");
						lessonsComplete++;
					}
					// get completion date for exam
					else if (moduleScores[tempLesson][1] !== "---- - -- - --" && moduleScores[tempLesson][1] !== undefined && moduleScores[tempLesson][1].length > 1) {
						// get completion date
						lDate = moduleScores[tempLesson][0];
						// append checkmark
						dashCheckContainer.append(theCheck);
						// set completion status
						lComplete = course.view.replaceVars("default_content.Labels.complete");
						// lesson-date aria-hidden false
						dashLessonDateTxt.removeAttribute("aria-hidden");
					}
					// unlock exam
					// this will only be true on the last item in loop (Exam)
					// and if the exam hasn't already been marked complete
					else if (lessonsComplete >= tempLessonArrayCount) {
						allowExam = true;
						dashGroup.classList.remove("disabled");
					}

					// if exam dashgroup is disabled, add aria-disabled
					if (dashGroup.classList.contains("disabled")) {
						setAttrs(dashGroup, {
							"aria-disabled": "true"
						});
					}

					// set completion status
					dashLessonDateSts.innerHTML = lComplete;
					// set completion date
					dashLessonDateTxt.innerHTML = lDate;

					// append everything to go groupholder
					dashGroup.append(dashCheckContainer, dashLessonNum, dashLessonDate);
					// append groupholder to dashModule div
					document.getElementById("dashGroupCont").appendChild(dashGroup);

					// add/remove hidden classes
					document.getElementById("dashModule").classList.remove("hidden");
					document.getElementById("dashIntro").classList.add("hidden");

					// set height
					document.getElementById("dashInfo").style.height = (tempLessonArrayCount + 1) * 25 + "px";
					// get height of lessonNum
					let dashGroupHeight = document.querySelector(".dashlessonnumber").offsetHeight;
					// set height of the dashgroup
					dashGroup.style.height = dashGroupHeight + "px";

					if (dashGroup.classList.contains("lesson")) {
						// set event listeners
						dashGroup.addEventListener("click", pushHistory.bind(course, undefined, "view_lesson", []), false);
						dashGroup.addEventListener("keydown", pushHistory.bind(course, undefined, "view_lesson", []), false);
					} else {
						// set event listeners
						//first, if the exam is completed...
						if (moduleScores[tempLesson][0] > 0) {
							//Exam completed...
							dashGroup.addEventListener("click", doAlert.bind(null, "examComplete"), false);
							dashGroup.addEventListener("keydown", doAlert.bind(null, "examComplete"), false);
						} else if (!allowExam && course.view.courseType.indexOf("demo") === -1) {
							//Not enough lessons completed...
							dashGroup.addEventListener("click", doAlert.bind(null, "pleaseComplete"), false);
							dashGroup.addEventListener("keydown", doAlert.bind(null, "pleaseComplete"), false);
						} else if (!allowExam && course.view.courseType.indexOf("demo") !== -1) {
							// course is in demo mode
							dashGroup.addEventListener("click", doAlert.bind(null, "demoMode"), false);
							dashGroup.addEventListener("keydown", doAlert.bind(null, "demoMode"), false);
						} else {
							// launch exam
							// dashGroup.addEventListener("click", pushHistory.bind(course, undefined, "showIntegrityStatement", []), false);
							// dashGroup.addEventListener("keydown", pushHistory.bind(course, undefined, "showIntegrityStatement", []), false);
							if (courseType === "hybrid") {
								EOMWarning(course.view.state.module, 0, "EOM");
							}
							else {
								goQM(course.view.state.module, 0, "EOM");
							}
						}
					}
				}

				// manage focus
				activeFocus = (course.view.state.module) ? document.getElementById(`circle-${course.view.state.module}`) : document.getElementById('circle-x');
				document.querySelector(".theContent").focus();

				//mostly for small sizes, reset the scrollTop so the user can see the lesson links
				masterDiv.scrollTop = 0;
			}
		}
	}

	// if we had to call showDash() above, then we
	// need to wait for the content to load with a
	// mutation observer before running the 
	// updateDash() code
	// mutation observer
	const dashObserver = new MutationObserver(dashObserverCB);
	
	if (waitForDash) {
		dashObserver.observe(dashMutTarget, dashMutConfig);
	}
	else {
		// if we didn't have to call showDash()
		// then we can just call the mutation observer
		// callback funtion
		dashObserverCB();
	}
}

function drawPieSlice(ctx, centerX, centerY, radius, startAngle, endAngle, color) {
	ctx.fillStyle = color;
	ctx.beginPath();
	ctx.moveTo(centerX, centerY);
	ctx.arc(centerX, centerY, radius, startAngle, endAngle);
	ctx.closePath();
	ctx.fill();
}

class Piechart {
	constructor(options) {
		this.options = options;
		this.canvas = options.canvas;
		this.ctx = this.canvas.getContext("2d");
		this.colors = options.colors;
	}

	draw() {
		var total_value = 0;
		var color_index = 0;
		for (var categ in this.options.data) {
			var val = this.options.data[categ];
			total_value += val;
		}

		// TODO: Change start angle and remove
		// rotation css in new-portal.css
		var start_angle = 0;
		for (categ in this.options.data) {
			val = this.options.data[categ];
			var slice_angle = (2 * Math.PI * val) / total_value;

			drawPieSlice(this.ctx, this.canvas.width / 2, this.canvas.height / 2, Math.min(this.canvas.width / 2, this.canvas.height / 2), start_angle, start_angle + slice_angle, this.colors[color_index % this.colors.length]);

			start_angle += slice_angle;
			color_index++;
		}

		//drawing a white circle over the chart
		//to create the doughnut chart
		if (this.options.doughnutHoleSize) {
			drawPieSlice(this.ctx, this.canvas.width / 2, this.canvas.height / 2, this.options.doughnutHoleSize * Math.min(this.canvas.width / 2, this.canvas.height / 2), 0, 2 * Math.PI, "#ffffff");
		}
	}
}
/******* END DASHBOARD FUNCTIONS *******/

/******** START RESOURCES FUNCTIONS ********/
function showResources(e) {
	if (e.type === "click" || (e.type === "keydown" && e.which === keyCodes.SPACE)) {
		// save id for corresponding resource section
		// based on the id of the event target
		let resourcesID = e.target.id.replace(/Btn/, "all");

		// if there's a corresponding div, show the
		// resource section
		if (document.getElementById(resourcesID)) {
			// hide any currently visible resource sections
			let allResourceSects = slice(document.querySelectorAll("#theResources > div:not(.spacer):not(.hidden)"));
			for (let allResourceSect of allResourceSects) {
				allResourceSect.classList.add("hidden");
			}

			// show the appropriate section
			document.getElementById(resourcesID).classList.remove("hidden");

			// set focus on theResources div
			document.getElementById("theResources").focus();
		} else {
			switch (e.target.id) {
				case "Answer_Key_Btn":
				case "Study_Plan_Btn":
					openAddedDoc(e);
					break;

				case "Course_Glossary_Btn":
					course.view.swapTemplate("glossary", "link", e);
					break;
			}
		}
	}
}

function openAddedDoc(e) {
	if (e.type === "click" || (e.type === "keydown" && e.which === keyCodes.SPACE)) {
		let addedDoc = e.target.getAttribute("data-doc");
		var summaryPath = "pdf/" + addedDoc;
		window.open(summaryPath, "PDFWindow", "fullscreen=yes");

		//xAPI stuff
		var theStatement = {
			type: "PDF",
			verb: "viewed",
			activity: "http://activitystrea.ms/schema/1.0/file",
			objectID: portalSetup.Course_Folder + "/AdditionalDocuments/" + addedDoc
		};
		LRSSend(theStatement);
	}
}

function openSummary(e) {
	if (e.type === "click" || (e.type === "keydown" && e.which === keyCodes.SPACE)) {
		let docNums = e.target.getAttribute("data-docnum").split(",");
		var summaryPath = "pdf/" + portalSetup.Course_Folder + "_M" + docNums[0] + "_L" + docNums[1] + "_Summary.pdf";
		window.open(summaryPath, "PDFWindow", "fullscreen=yes");

		//xAPI stuff
		var theStatement = {
			type: "PDF",
			verb: "viewed",
			activity: "http://activitystrea.ms/schema/1.0/file",
			objectID: portalSetup.Course_Folder + "_M" + modnum + "_L" + lsnnum + "_Summary.pdf"
		};
		LRSSend(theStatement);
	}
}
/******** END RESOURCES FUNCTIONS ********/

/******** START GLOSSARY FUNCTIONS ********/
// // ------- AUTOCOMPLETE --------//
// function buildAcArray(e) {
// 	if (e.type === "click" || e.type === "focus") {
// 		if (!autoCompleteObjArray[0]) {
// 			var dtArray = $(".glossary_items dt");
// 			for (var i = 0; i < dtArray.length; i++) {
// 				var dataTemp = dtArray[i].innerText.replace(/(?:\(|\))/g, "");
// 				dataTemp = dataTemp.replace(/ /g, "_");

// 				var tempObj = { value: dtArray[i].innerText, data: dataTemp };
// 				autoCompleteObjArray.push(tempObj);
// 			}
// 		}

// 		//if the previous search link exists, remove it
// 		if (document.getElementById("glossItemLink")) {
// 			document.getElementById("glossItemLink").remove();
// 		}
// 	}
// }


// input is the textbox 
// source is the array of glossary terms
function onAutocompleteSuggest(input, source, e) {
	let suggestionList = document.getElementById(input.getAttribute('aria-controls'));

	// add visual focus when input gets focus
	if (e.type == 'focus') {
		input.classList.add('focus');
	}

	// only register keydowns with printable characters/delete/backspace
	// start suggesting when 2 or more characters are input
	if (input.value.length > 1 && (e.type == 'focus' || isPrintableChar(e.key) || e.key == "Delete" || e.key == "Backspace")) {
		// add visual focus when typing in input
		input.classList.add('focus');
		removeAllChildNodes(suggestionList);
		// create a regular expression from input value
		let inputRegEx = new RegExp(input.value, 'i');
		// use filter to collect matches in an array
		let suggestions = source.filter(term => inputRegEx.test(term));

		// if there are suggestions
		if (suggestions.length > 0) {
			// create an li element for each match
			for (let i = 0; i < suggestions.length; i++) {
				let option = document.createElement('li');
				setAttrs(option, {
					id: `ac-option-${i}`,
					class: 'ac-option',
					'aria-selected': false,
					role: 'option'
				});
				option.innerText = suggestions[i];
				// append li to suggestions list
				suggestionList.append(option);
				// TODO: add click event listener
				option.addEventListener('click', goToTerm.bind(null, null), false);
			}
		}
		// display no results if no suggestions
		else {
			let option = document.createElement('li');
			option.className = 'no-results';
			option.innerText = course.onReplaceTemplateVar('default_content', 'Labels.noResults');
			// append li to suggestions list
			suggestionList.append(option);
		}

		
		// show the list
		suggestionList.classList.remove('hidden');
		input.setAttribute('aria-expanded', 'true');
	}
	// hide list of suggestions if other keys are pressed
	else if (input.value.length < 2) {
		suggestionList.classList.add('hidden');
		input.setAttribute('aria-expanded', 'false');
	}
}

function onAutocompleteKeydown(input, e) {
	// determines if preventDefault is called
	let flag = false;
	let suggestionUL = document.getElementById(input.getAttribute('aria-controls'));
	let firstEl = suggestionUL.querySelector('.ac-option:first-child');
	let lastEl = suggestionUL.querySelector('.ac-option:last-child');
	let currentEl = suggestionUL.querySelector('[aria-selected="true"]');
	let nextEl;
	let prevEl; 

	// only set prev/next els if current el exists
	if (currentEl) {
		nextEl = currentEl.nextElementSibling;
		prevEl = currentEl.previousElementSibling;
	}

	// control and shift won't trigger anything 
	if (e.ctrlKey || e. shiftKey) {
		return;
	}

	switch (e.key) {
		// return visible focus to input
		case 'Left':
		case 'ArrowLeft':
		case 'Right':
		case 'ArrowRight':
		case 'End':
		case 'Home':
			if (suggestionUL.querySelector('[aria-selected="true"]')) {
				suggestionUL.querySelector('[aria-selected="true"]').setAttribute('aria-selected', 'false');
			}
			input.classList.add('focus');

		break;

		// change visible focus of item in listbox
		case 'Down':
		case 'ArrowDown':
			if (!suggestionUL.classList.contains('hidden') && suggestionUL.querySelector('.ac-option')) {
				// already an active element and it isn't the last in the list
				if (currentEl && nextEl) {
					updateActiveSuggestion(input, suggestionUL, currentEl, nextEl);
				}
				// already an active element and it is the last in the list
				else if (currentEl) {
					updateActiveSuggestion(input, suggestionUL, currentEl, firstEl);
				}
				// no active element yet
				else if (firstEl) {
					updateActiveSuggestion(input, suggestionUL, null, firstEl);
				}

				flag = true;
				if (input.classList.contains('focus')) input.classList.remove('focus');
			}
		break;

		// change visible focus of item in listbox
		case 'Up':
		case 'ArrowUp':
			if (!suggestionUL.classList.contains('hidden') && suggestionUL.querySelector('.ac-option')) {
				// already an active element and it isn't the first in the list
				if (currentEl && prevEl) {
					updateActiveSuggestion(input, suggestionUL, currentEl, prevEl);
				}
				// already an active element and it is the first in the list
				else if (currentEl) {
					updateActiveSuggestion(input, suggestionUL, currentEl, lastEl);
				}
				// no active element yet
				else if (lastEl) {
					updateActiveSuggestion(input, suggestionUL, null, lastEl);
				}

				flag = true;
				if (input.classList.contains('focus')) input.classList.remove('focus');
			}
		break;
		
		// hide suggestions 
		case 'Tab':
			suggestionUL.classList.add('hidden');
			input.setAttribute('aria-expanded', 'false');
			input.classList.remove('focus');
		break;
		
		// hide suggestions
		case 'Esc':
		case 'Escape':
			suggestionUL.classList.add('hidden');
			input.setAttribute('aria-expanded', 'false');
			flag = true;
		break;

		// select suggestion and scroll to suggestion in page
		case 'Enter':
			if (suggestionUL.querySelector('[aria-selected="true"]')) {
				goToTerm(suggestionUL.querySelector('[aria-selected="true"]'));
			}
			flag = true;
		break;


		default:
		break;
	}

	if (flag) {
		e.stopPropagation();
		e.preventDefault();
	}
}

// scroll to term when selected in suggestions
function goToTerm(optionEl, e) {
	if (!optionEl) {
		optionEl = e.target;
	}
	let option = optionEl.innerText;
	let suggestionUL = optionEl.parentNode;
	let input = document.querySelector(`[aria-controls="${suggestionUL.id}"`);
	input.value = option;

	// remove parentheses from term
	let optionID = option.replace(/[\)\(]/g, "");
	// swap spaces for underscores
	optionID = optionID.replace(/\s/g, "_");
	// get element to scroll to
	let element = document.getElementById(optionID);
	let portalContainer = document.getElementById('portalContents');
	// find element position
	let elTop = findPosition(element);
	let contTop = findPosition(portalContainer);
	portalContainer.scroll(0, elTop - contTop);
	element.focus();
	
	if (suggestionUL.querySelector('[aria-selected="true"]')) {
		suggestionUL.querySelector('[aria-selected="true"]').setAttribute('aria-selected', 'false');
	}
	suggestionUL.classList.add('hidden');
	input.setAttribute('aria-expanded', 'false');
	input.classList.remove('focus');
}

// change which suggestion has visible focus
function updateActiveSuggestion(input, parent, currentEl, newEl) {
	if (currentEl) currentEl.setAttribute('aria-selected', 'false');
	newEl.setAttribute('aria-selected', true);

	input.setAttribute('aria-activedescendant', newEl.id);
	if (!isInView(newEl, parent)) {
		newEl.scrollIntoView({ 
			behavior: 'smooth', 
			block: 'nearest'
		});
	}
}

// check if suggestion is in view in listbox
function isInView(option, parent) {
	let optBounding = option.getBoundingClientRect();
	let parentBounding = parent.getBoundingClientRect();

	return (optBounding.top >= parentBounding.top && optBounding.bottom <= parentBounding.bottom);
}

// handles to top and letter section links
function glossLink(e) {
	if (e.type === "click" || (e.type === "keydown" && e.key === "Enter")) {
		let linkEl = this;
		let linkID;
		let scrollPos;

		// set link id and scroll possition
		if (linkEl.id == "to-top") {
			linkID = 'portalContents';
			scrollPos = 0;
		}
		else {
			linkID = `gloss${linkEl.innerText}`;
			scrollPos = findPosition(document.getElementById(`gloss${linkEl.innerText}`)) - findPosition(document.getElementById('portalContents'));
		}
		// scroll to position and focus
		document.getElementById('portalContents').scroll(0, scrollPos)
		document.getElementById(linkID).focus();
	}
}

function setGlossVars() {
	for (let i = 0; i < glossarySetup.length; i++) {
		// if sort letter isn't already in array
		if (!glossarySortLetters.includes(glossarySetup[i].sort)) {
			// and if this isn't the first sort letter we're adding
			if (glossarySortLetters.length > 0) {
				// get the previous sort letter
				let currentLetter = glossarySortLetters[glossarySortLetters.length - 1];
				// and add all the terms for that letter to an object
				glossarySorted[currentLetter] = tempGlossArr;
			}

			// push new sort letter to array
			glossarySortLetters.push(glossarySetup[i].sort);
			// clear temp array of all terms for the previous sort letter
			tempGlossArr = [];
		}

		// push new term to sort letter array
		tempGlossArr.push({
			term: glossarySetup[i].term,
			definition: glossarySetup[i].definition
		});

		// if this is the last term, we need to add the sort letter array
		// to the terms grouped by sort letter object
		if (i + 1 == glossarySetup.length) {
			let currentLetter = glossarySortLetters[glossarySortLetters.length - 1];
			glossarySorted[currentLetter] = tempGlossArr;
		}

		// FUZZYSET
		termArray[i] = glossarySetup[i].term;
		// glossary with term as key
		glossByTerm[glossarySetup[i].term] = {
			sort: glossarySetup[i].sort,
			definition: glossarySetup[i].definition
		};
	}

	//
	fs = FuzzySet(termArray, false);
}

function setGlossaryIds() {
	let glossEntries = slice(document.querySelectorAll(".gloss-entry"));

	for (let glossEntry of glossEntries) {
		let id = glossEntry.getAttribute("id").replace(/(?:\(|\))/g, "");
		id = id.replace(/ /g, "_");
		setAttrs(glossEntry, {
			id: id // ,
			// name: id
		});
		glossEntry.setAttribute("id", id);
	}
}
/******** END GLOSSARY FUNCTIONS ********/

/********* START HELP FUNCTIONS **********/
function showHelpTopics(e) {
	if (e.type === "click" || (e.type === "keydown" && (e.which === keyCodes.SPACE || e.which === keyCodes.RETURN))) {
		document.querySelector("#portalhelpanswer .helpback").setAttribute("data-index", e.target.getAttribute("data-index"));
		// save container
		let topicContainer = document.getElementById("bHelptopics");
		topicContainer.setAttribute("data-index", e.target.getAttribute("data-index"));
		// clear container
		topicContainer.innerHTML = "";
		// get all topics
		let topics = course.view.replaceVars("help[i].sectionTopics", e.target);
		// get category of topics
		document.getElementById("helpSubHead").innerHTML = course.view.replaceVars("help[i].sectionTitle", e.target);

		let index = 0;
		// build elements for each topic
		for (let topic of topics) {
			index++;
			let li = document.createElement("li");
			let button = document.createElement("button");
			setAttrs(button, {
				class: "bHelpItem",
				"data-index": index
			});
			button.classList.add("bHelpItem");
			button.innerHTML = topic.topic;
			li.append(button);
			topicContainer.append(li);
		}

		// remove hidden class to show list
		topicContainer.classList.remove("hidden");
		// hide the help answer
		document.getElementById("portalhelpanswer").classList.add("hidden");
		// add event listeners to each help question
		setEventListeners("bHelptopics", null);
		// focus in the question list
		document.getElementById("theHelp").focus();
	}
}

function showHelpAnswer(e) {
	if (e.type === "click" || (e.type === "keydown" && (e.which === keyCodes.SPACE || e.which === keyCodes.RETURN))) {
		let answerContainer = document.getElementById("portalhelpanswer");
		// get question and answer
		let qA = course.view.replaceVars("help[j].sectionTopics[i]", e.target);

		answerContainer.querySelector(".helptopichead").innerHTML = qA.topic;
		answerContainer.querySelector(".helptopicbody").innerHTML = qA.answer;
		// remove hidden class to show list
		answerContainer.classList.remove("hidden");
		// hide the help answer
		document.getElementById("bHelptopics").classList.add("hidden");
		// focus in the question answer
		answerContainer.focus();
	}
}
/********* END HELP FUNCTIONS **********/
