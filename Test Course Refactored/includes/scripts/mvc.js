/**
 * @class Model
 *
 * Manages the data of the application.
 */
class Model {
	// course_settings = content that changes from course to course
	// default_content = content that's the same in every course (with the exception of differences between languages)
	constructor(course_settings = window["course_settings"], default_content = window["default_content"], TOC = window["TOC"], video_library = window["vidLibrary"], help = window["helptopics"]) {
		let courseType = course_settings.Portal_Setup.Course_Type;
		courseType = courseType.replace(/demo-/, "");
		this.lang = course_settings.Portal_Setup.course_locale;
		this.course_settings = course_settings;
		this.default_content = default_content[this.lang];
		this.TOC = TOC;
		this.video_library = video_library;
		this.help = help[this.lang][courseType];
		this.modules = [];

		for (const module of this.TOC) {
			let modObj = {
				lessons: module.length
			};
			this.modules.push(modObj);
		}
	}

	// Methods for getting data from course_settings and default_settings
	getData(dataSet, varString, element) {
		// returnVar base is the data-set or the window object
		let returnVar;
		if (dataSet !== "") {
			returnVar = this[dataSet];
		} else {
			returnVar = window;
		}

		if (varString) {
			// var strings for the glossary have a second variable embedded in them
			// so we need to test for double curly braces
			if (/\{\{([^\}]+)\}\}/.test(varString)) {
				// save variable contained in curly braces
				let newVarString = varString.replace(/.*\{\{([^\}]+)\}\}.*/, "$1");
				// recursively call getData again using newVarString
				varString = varString.replace(/\{\{[^\}]+\}\}/, this.getData(dataSet, newVarString, element));
			}

			// convert to dot notation
			varString = varString.replace(/\.?\[/g, ".");
			varString = varString.replace(/\]\.?/g, ".");
			varString = varString.replace(/^\.?/g, "");
			varString = varString.replace(/\.$/g, "");

			// create array of variables
			const variables = varString.split(".");

			// loop variables to create the return content
			for (const variable of variables) {
				returnVar = returnVar[variable];
			}
		}

		// if the returnVar we built still has double braces
		// (some of the content in default_content.js also uses
		// variables), we need to replace more vars
		if (/\{\{.*?\}\}/.test(returnVar)) {
			let matches = returnVar.match(/\{\{.*?\}\}/g);
			for (let match of matches) {
				// match pattern
				let matchRE = match.replace(/(\{|\}|\[|\]|\|)/g, "\\$1");
				// match regex
				let matchRegEx = new RegExp(matchRE);
				// get new var from match
				let newVar = this.onReplaceVars(match, element);
				// replace template var
				returnVar = returnVar.replace(matchRegEx, newVar);
			}
		}

		return returnVar;
	}

	bindGetFromView(callback) {
		this.onGetFromView = callback;
	}

	bindReplaceVars(callback) {
		this.onReplaceVars = callback;
	}
}

/**
 * @class View
 *
 * Visual representation of the model.
 */
class View {
	constructor(template = "home") {
		// set properties
		this.courseType = null;
		// some of the view state is set here and
		// some is set in the controller constructor
		this.state = {};
		this.state.template = template;
		
		// load section templates and portalContent template
		const placeHolders = document.getElementById("portal_container").children;
		for (const placeHolder of placeHolders) {
			// some of the elements don't load templates
			// they're placeholders for the lesson content
			if (placeHolder.getAttribute("data-skip") === "true") {
				continue;
			} else {
				let id = placeHolder.id;
				// load the home template if id is portalContents
				if (/portalContents/.test(id)) {
					this._loadTemplate(`./templates/pages/${template}.html`, document.getElementById("portalContents"));
				}
				// load the section template based on id
				// i.e., header/footer/menu/etc.
				else {
					this._loadTemplate(`./templates/${id}.html`, document.getElementById(id));
				}
			}
		}
	}

	// binds the controllers call to Model functions
	bindReplaceTemplateVar(callback) {
		this.onReplaceTemplateVar = callback;
	}

	// checks for data-length attribute and clones
	// multiple elements based on value
	_iterOrReplace(docEls, child) {
		let parent;

		for (let docEl of docEls) {
			// data-length attr is for number of clones
			// only do this if parent is undefined or
			// parent DOES not contain current docEl
			// nested elements with data-length attr
			// will be dealt with in _iterateElements
			if (docEl.getAttribute("data-length") && (!parent || !parent.contains(docEl))) {
				this._iterateElements(docEl, child);
				// set parent for check at beginning of loop
				parent = docEl;
			}
		}
	}

	// uses template placeholders to duplcate elements based on a length property
	_iterateElements(docEl, child) {
		// set mod/lesson/page indicator
		let indicator;
		if (docEl.getAttribute('data-module') == 'true') {
			indicator = "module";
		}
		if (docEl.getAttribute('data-lesson')) {
			indicator = "lesson";
		}
		if (docEl.getAttribute('data-page')) {
			indicator = "page";
		}

		// get number of elements
		let iter = this.replaceVars(docEl.getAttribute("data-length"), docEl, child);
		// get parent
		let parent = docEl.parentElement;
		// remove length attr
		docEl.removeAttribute("data-length");
		// clone element, add index, and append
		let prevEl = docEl;
		for (let i = 1; i <= iter; i++) {
			// clone
			let newEl = docEl.cloneNode(true);
			// set data-index attribute
			newEl.setAttribute("data-index", i);
			// set mod/lesson/page attribute
			if (indicator) {
				newEl.setAttribute(`data-${indicator}`, i);
			}
			// get all child elements
			let childEls = slice(newEl.querySelectorAll("*"));
			// add parent element to beginning of array
			childEls.unshift(newEl);
			// determine if child elements need to
			// be cloned and/or replace vars
			this._iterOrReplace(childEls, true);
			// append element
			parent.insertBefore(newEl, prevEl.nextSibling);
			// reset previous element
			prevEl = newEl;
		}

		// remove original element since we cloned it
		parent.removeChild(docEl);
	}

	// cycles through each element in a template and searches
	// for variables to replace
	_startReplace(docEls) {
		// loop the elements
		for (let docEl of docEls) {
			// loop the attributes
			for (let attr of slice(docEl.attributes)) {
				// get values for any variables in attributes
				if (/\{\{.*?\}\}/.test(attr.nodeValue)) {
					let nodeValue = attr.nodeValue;

					// keep replacing until variable test is false
					while (/\{\{.*?\}\}/.test(nodeValue)) {
						let varMatches = nodeValue.match(/\{\{.*?\}\}/g);
						for (let varMatch of varMatches) {
							// create a reg exp pattern based on node value
							// with special characters escaped
							let matchPattern = varMatch.replace(/(\{|\}|\.|\||\[|\])/g, "\\$1");
							// create regular expression based on pattern
							let matchRegEx = new RegExp(matchPattern);
							// use regex to replace pattern with variable
							nodeValue = nodeValue.replace(matchRegEx, this.replaceVars(varMatch, docEl));
						}
					}
					docEl.setAttribute(attr.name, nodeValue);
				}
			}

			// find text node of element if it exists
			this._findTextNode(docEl);
		}
	}

	// finds text nodes with {{ }} pattern
	_findTextNode(docEl) {
		// get child nodes
		let docElNodes = slice(docEl.childNodes);
		for (let docElNode of docElNodes) {
			// if the node is text and it matches the pattern
			if (docElNode.nodeType === 3 && /\{\{.*?\}\}/.test(docElNode.textContent)) {
				// copy text content
				let newContent = docEl.innerHTML;

				// keep replacing until variable test is false
				while (/\{\{.*?\}\}/.test(newContent)) {
					// get matches for pattern
					let varMatches = newContent.match(/\{\{.*?\}\}/g);

					for (let varMatch of varMatches) {
						// create a reg exp pattern based on content value
						// with special characters escaped
						let matchPattern = varMatch.replace(/(\{|\}|\.|\||\[|\])/g, "\\$1");
						// create regular expression based on pattern
						let matchRegEx = new RegExp(matchPattern, "g");
						// use regex to replace pattern with variable
						newContent = newContent.replace(matchRegEx, this.replaceVars(varMatch, docEl));
					}
				}

				// update element's innerHTML
				docEl.innerHTML = newContent;
			}
		}
	}

	// gets data-index value from an element or an
	// element's ancestor
	_getDataIndex(element) {
		let index;
		if (element.getAttribute("data-index")) {
			index = element.getAttribute("data-index");
		} else {
			let indexParent = findAncestor(element, "attr", "data-index");
			index = indexParent.getAttribute("data-index");
		}
		return index;
	}

	// sets up dataSet and variables needed to get info from the Model
	replaceVars(templateVar, element, child) {
		// set of data we'll be working with
		// i.e., course_settings, TOC, default_content, etc.
		let dataSet;
		// will contain the variables needed to build from the data set
		// i.e., "Course_Name" in course_settings.Course_Name
		let variables;

		// remove curly brackets
		let templateProp = templateVar.replace(/\{\{(.*)\}\}/, "$1");
		let templateProps = templateProp.split("||");

		for (let tempProp of templateProps) {
			// USE FOR STAND-ALONE VARIABLE ({{data-index}})
			// does not subtract anything to accommodate zero based-index
			// use parent's data-index attr to replace this
			// if letter is i, look for closest element with data-index attr
			// if letter is j, look for second closest element
			// if letter is k, look for third closest element and so on
			if (/data(?:-[j-z])?-index/.test(tempProp)) {
				// save the letter
				let indexLetter = tempProp.replace(/^data(?:-([j-z]))?-index$/g, "$1");
				// get the difference between letter and i
				let diff = indexLetter.charCodeAt() - "i".charCodeAt();

				// keeps track of which element we're getting the
				// the data-index attr from
				let indexEl = element;

				for (let i = 0; i <= diff; i++) {
					// if the element itself doesn't have a data-index and
					// it's not the first iteration, find the next closest
					// element with data-index attr
					if (i > 0 || !indexEl.hasAttribute("data-index")) {
						indexEl = findAncestor(indexEl, "attr", "data-index");
					}
				}

				// save the data-index
				let index = this._getDataIndex(indexEl, tempProp);
				// use a regular expression to swap letter for index
				tempProp = tempProp.replace(/data(?:-[j-z])?-index/, index);
				return tempProp;
			}

			// data-letter is used in the glossary template
			if (/data-letter/.test(tempProp)) {
				let letterEl = element;
				if (!letterEl.getAttribute("data-letter")) {
					letterEl = findAncestor(letterEl, "attr", "data-letter");
				}
				let letter = letterEl.getAttribute("data-letter");
				tempProp = tempProp.replace(/data-letter/, letter);
			}

			// mod-index looks for data-module property on element 
			// or uses the view's state.module property
			// zero based index so the property is module number minus 1
			if (/mod-index/.test(tempProp)) {
				let index;
				if (this.state.module) {
					index = this.state.module - 1;
				} 
				else if (element && element.getAttribute('data-module') || findAncestor(element, 'attr', 'data-module')) {
					let indexEl = (element.getAttribute('data-module')) ? element : findAncestor(element, 'attr', 'data-module');
					index = parseInt(indexEl.getAttribute('data-module')) - 1;
				}
				else {
					if (/demo/.test(this.courseType)) {
						alert("cant find mod-index property");
					}
				}
			
				tempProp = tempProp.replace(/mod-index/, index);
			}

			// mod-num looks for data-module property on element 
			// or uses the view's state.module property
			// 1 based index so the property is just module number
			if (/mod-num/.test(tempProp)) {
				let index;
				if (this.state.module) {
					index = this.state.module;
				}
				else if (element && element.getAttribute('data-module') || findAncestor(element, 'attr', 'data-module')) {
					let indexEl = (element.getAttribute('data-module')) ? element : findAncestor(element, 'attr', 'data-module');
					index = parseInt(indexEl.getAttribute('data-module'));
				}
				else {
					if (/demo/.test(this.courseType)) {
						alert("cant find mod-num property");
					}
				}
				tempProp = tempProp.replace(/mod-num/, index);
				return tempProp;
			}

			// lsn-index looks for data-lesson property on element
			// or uses the view's state.lesson property
			// zero based index so the property is lesson number minus 1
			if (/lsn-index/.test(tempProp)) {
				let index;
				if (this.state.lesson) {
					index = this.state.lesson - 1;
				}
				else if (element && element.getAttribute('data-lesson') || findAncestor(element, 'attr', 'data-lesson')) {
					let indexEl = (element.getAttribute('data-lesson')) ? element : findAncestor(element, 'attr', 'data-lesson');
					index = parseInt(indexEl.getAttribute('data-lesson')) - 1;
				}
				else {
					if (/demo/.test(this.courseType)) {
						alert("cant find lsn-index property");
					}
				}
				tempProp = tempProp.replace(/lsn-index/, index);
			}

			// lsn-num looks for data-lesson property on element
			// or uses the view's state.lesson property
			// 1 based index so the property is just lesson number
			if (/lsn-num/.test(tempProp)) {
				let index;
				if (this.state.lesson) {
					index = this.state.lesson;
				}
				else if (element && element.getAttribute('data-lesson') || findAncestor(element, 'attr', 'data-lesson')) {
					let indexEl = (element.getAttribute('data-lesson')) ? element : findAncestor(element, 'attr', 'data-lesson');
					index = parseInt(indexEl.getAttribute('data-lesson'));
				}
				else {
					if (/demo/.test(this.courseType)) {
						alert("cant find lsn-num property");
					}
				}
				tempProp = tempProp.replace(/lsn-num/, index);
				return tempProp;
			}

			// pg-num looks for data-page property on element
			// or uses the view's state.page property
			// zero based index so the property is page number minus 1
			if (/pg-index/.test(tempProp)) {
				let index;
				if (this.state.page) {
					index = this.state.page;
				}
				else if (element && element.getAttribute('data-page') || findAncestor(element, 'attr', 'data-page')) {
					let indexEl = (element.getAttribute('data-page')) ? element : findAncestor(element, 'attr', 'data-page');
					index = parseInt(indexEl.getAttribute('data-page'));
				}
				else {
					if (/demo/.test(this.courseType)) {
						alert("cant find pg-index property");
					}
				}
				tempProp = tempProp.replace(/pg-index/, index);
				return tempProp;
			}

			// pg-num looks for data-page property on element
			// or uses the view's state.page property
			// 1 based index so the property is just page  number
			if (/pg-num/.test(tempProp)) {
				let index;
				if (this.state.page) {
					index = this.state.page;
				}
				else if (element && element.getAttribute('data-page') || findAncestor(element, 'attr', 'data-page')) {
					let indexEl = (element.getAttribute('data-page')) ? element : findAncestor(element, 'attr', 'data-page');
					index = parseInt(indexEl.getAttribute('data-page'));
				}
				else {
					if (/demo/.test(this.courseType)) {
						alert("cant find pg-num property");
					}
				}
				tempProp = tempProp.replace(/pg-num/, index);
				return tempProp;
			}
			// pg-total uses the view's state.pgTotal property
			// or looks for data-page property on element
			// 1 based index so the property is just total number of pages
			if (/pg-total/.test(tempProp)) {
				let index;
				if (this.state.pgTotal) {
					index = this.state.pgTotal;
				}
				tempProp = tempProp.replace(/pg-total/, index);
				return tempProp;
			}

			// course-type uses the view's courseType property
			if (/course-type/.test(tempProp)) {
				let type = this.courseType.replace(/demo-/, "");
				tempProp = tempProp.replace(/course-type/, type);
			}

			// USE WHEN ACCESSING DATA'S ARRAY BY INDEX
			// subtracts to accommodate zero-based index
			// a letter inside brackets means that we need to get an index
			// if letter is i, look for closest element with data-index attr
			// if letter is j, look for second closest element
			// if letter is k, look for third closest element and so on
			if (/\[[i-z]\]/.test(tempProp)) {
				// get all the matches and loop through (there could be more
				// than one in a single prop)
				let matches = tempProp.match(/\[[i-z]\]/g);
				for (let match of matches) {
					// save the letter
					let indexLetter = match.replace(/\[([i-z])\]/g, "$1");
					// get the difference between letter and i
					let diff = indexLetter.charCodeAt() - "i".charCodeAt();

					// keeps track of which element we're getting the
					// the data-index attr from
					let indexEl = element;
					
					// run the loop as many time as the diff requires
					for (let i = 0; i <= diff; i++) {
						// if the element itself doesn't have a data-index and
						// it's not the first iteration, find the next closest
						// element with data-index attr
						if (!indexEl.getAttribute("data-index") || i > 0) {
							indexEl = findAncestor(indexEl, "attr", "data-index");
						}
					}

					// save the data-index minus one
					let index = this._getDataIndex(indexEl, tempProp) - 1;
					// use a regular expression to swap letter for index
					let regex = new RegExp("\\[" + indexLetter + "\\]", "g");
					tempProp = tempProp.replace(regex, "[" + index + "]");
				}
			}

			// set dataSet and variables based on which dataset is included
			// in the template placeholder text
			if (/^course_settings\./.test(tempProp)) {
				dataSet = "course_settings";
				variables = tempProp.replace(/course_settings\./, "");
			} else if (/^default_content\./.test(tempProp)) {
				dataSet = "default_content";
				variables = tempProp.replace(/default_content\./, "");
			} else if (/^TOC(?:\.|\[)/.test(tempProp)) {
				dataSet = "TOC";
				variables = tempProp.replace(/TOC\.?/, "");
			} else if (/^video_library\./.test(tempProp)) {
				dataSet = "video_library";
				variables = tempProp.replace(/video_library\.?/, "");
			} else if (/^help(?:\.|\[)/.test(tempProp)) {
				dataSet = "help";
				variables = tempProp.replace(/help\.?/, "");
			} else if (/^view/.test(tempProp)) {
				variables = tempProp.replace(/view\./, "");
				if (this[variables]) {
					return this[variables];
				}
				else {
					continue;
				}
			} else {
				dataSet = "";
				variables = tempProp;
			}

			// return the content stored in the vars
			let newContent = this.onReplaceTemplateVar(dataSet, variables, element);
			if (newContent) {
				return newContent;
			}
		}
	}

	// loads template sections
	// including main pages
	_loadTemplate(url, element) {
		// set template
		let template = url.replace(/\.\/templates\/(?:pages\/)?([^\.]+)\.html/, "$1");

		// clear out the contents of the template part we're loading
		removeAllChildNodes(element);

		// create an http request to get the template
		const view = this;
		const xhttp = new XMLHttpRequest();
		xhttp.open("GET", url);
		xhttp.send();
		xhttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
				// save template as string
				const content = this.responseText.toString().replace(/(\t|\n|\r|\n\r|\r\n)/g, "");

				// parse into DOM
				const parser = new DOMParser();
				const doc = parser.parseFromString(content, "text/html");

				// add all elements to an array
				let docEls = slice(doc.querySelectorAll("body *"));

				// determine if elements need to be cloned
				view._iterOrReplace(docEls, false);

				// need to reset this now that we've cloned elements
				docEls = slice(doc.querySelectorAll("body *"));

				// start replacing vars
				view._startReplace(docEls);

				// get first element of the template body
				let repEl = doc.getElementsByTagName("body")[0].firstElementChild;

				// if the first element isn't a div, we need to wrap it in one
				if (repEl.tagName !== "div") {
					let innerHTML = repEl.innerHTML;
					let id = repEl.id;
					repEl = document.createElement("div");
					repEl.id = id + "-cont";
					repEl.innerHTML = innerHTML;
				}
				// otherwise just update the id
				else {
					repEl.id = repEl.id + "-cont";
				}

				// add the template element to the page
				element.append(repEl);

				// The following are calls to functions
				// in main.js

				// set event listeners for the template
				setEventListeners(repEl.id, template);

				// collect completion info for dashboard
				// circles
				if (/myDashboard/.test(template)) {
					doCircles();
				}

				// get completions for the module landings
				if (/module/.test(template)) {
					fillCompletions(view.state.module);
				}

				// set term IDs and name attribute on glossary
				if (/glossary/.test(template)) {
					setGlossaryIds();
				}

				// determine resources available
				if (/resource/.test(template)) {
					// get all elements with resource_btn class
					let resourceBtns = slice(document.querySelectorAll(".resource_btn"));
					for (let resourceBtn of resourceBtns) {
						// get the type of button based on id
						let btnType = resourceBtn.id.replace(/(.*?)_Btn/, "$1");
						// looks in course_settings to see if each
						// resource is turned on
						if (view.onReplaceTemplateVar("course_settings", "Portal_Setup." + btnType)) {
							resourceBtn.classList.remove("hidden");
							document.querySelector("li." + btnType).classList.remove("hidden");
						}
					}

					// check if any module resource containers are empty
					let modContainers = slice(document.getElementById("portalContents").querySelectorAll('.mod_container')); 
					for (let modContainer of modContainers) {
						if (modContainer.childElementCount == 1) {
							modContainer.classList.add('hidden');
						}
					}
				}
			}
		};
	}

	// changes the main page template
	// header, footer, and other components do not change
	swapTemplate(template, role) {
		// hide any JB divs
		hideLessonStuff();
		document.getElementById("pg_header").classList.add("hidden");
		document.getElementById("Toc_flyout").classList.add("hidden");
		// show portal contents
		document.getElementById("portalContents").classList.remove("hidden");

		// remove template class from body
		if (this.state.prevTemplate) {
			document.body.classList.remove(this.state.prevTemplate);
			document.getElementById("portal_container").classList.remove(this.state.prevTemplate);
		}
		document.body.classList.add(this.state.template);
		document.getElementById("portal_container").classList.add(this.state.template);

		// if module is defined in state, set body attr
		// if (this.state.module) {
		// 	document.body.setAttribute("data-module", this.state.module);
		// }
		// // otherwise the template doesn't have a module associated with it
		// else {
		// 	document.body.removeAttribute("data-module");
		// }

		// load the template
		this._loadTemplate(`./templates/pages/${template}.html`, document.getElementById("portalContents"));
		document.getElementById("portalContents").focus();
	}

	getFromView(variable) {
		return this[variable];
	}
}

/**
 * @class Controller
 *
 * Links the user input and the view output.
 *
 * @param model
 * @param view
 */
class Controller {
	constructor(model, view) {
		this.model = model;
		this.view = view;
		
		let docTitle = "";

		if (this.onReplaceTemplateVar("course_settings", "Portal_Setup.Course_Name")) {
			docTitle = `${this.onReplaceTemplateVar("course_settings", "Portal_Setup.Course_Name")}: `;
		}
		// create course state
		let state = {
			docTitle: `${docTitle}${this.onReplaceTemplateVar("course_settings", "Portal_Setup.Course_Title")}`,
			funcName: "handleSwapTemplate",
			funcContext: "course",
			funcArgs: ["home", "link"],
			template: this.view.state.template,
			prevTemplate: null,
			module: null,
			lesson: null,
			page: null,
			pageViewed: null,
			pgTotal: null,
			url: "" //,
			// integrityCheck: false
		};

		// attach state to view
		this.view.state = state;
		// replace browser history with current state
		window.history.replaceState(state, null, "");

		// set lang attr
		document.documentElement.setAttribute("lang", this.onReplaceTemplateVar("course_settings", "Portal_Setup.course_locale"));

		// set title
		document.title = this.view.state.docTitle;

		// SET CLASES AND ATTRS ON BODY AND PORTAL CONTAINER
		// add template type and course type to body classlist
		document.body.classList.add(this.view.state.template, this.onReplaceTemplateVar("course_settings", "Portal_Setup.Course_Type"), this.onReplaceTemplateVar("course_settings", "Portal_Setup.course_locale"));
		document.getElementById("portal_container").classList.add(this.view.state.template, this.onReplaceTemplateVar("course_settings", "Portal_Setup.Course_Type"), this.onReplaceTemplateVar("course_settings", "Portal_Setup.course_locale"));
		// add data-course-type
		document.body.setAttribute("data-course-type", this.onReplaceTemplateVar("course_settings", "Portal_Setup.Course_Type"));
		document.getElementById("portal_container").setAttribute("data-course-type", this.onReplaceTemplateVar("course_settings", "Portal_Setup.Course_Type"));
		// set course type in view obj
		view.courseType = this.onReplaceTemplateVar("course_settings", "Portal_Setup.Course_Type");

		// Explicit binding
		this.view.bindReplaceTemplateVar(this.onReplaceTemplateVar);
		this.model.bindGetFromView(this.onGetFromView);
		this.model.bindReplaceVars(this.onReplaceVars);
	}

	// allows the View class to gain access to the Model via requests
	// to convert template placeholders to the Model's variables
	onReplaceTemplateVar = (dataSet, varString, element) => {
		return this.model.getData(dataSet, varString, element);
	};

	// allows the model to get info saved in the view object
	onGetFromView = (variable) => {
		return this.view.getFromView(variable);
	};

	// allows the model to call view's replaceVars
	onReplaceVars = (variable, element) => {
		return this.view.replaceVars(variable, element);
	};

	// connects element event listeners access to the view's swapTemplate function
	handleSwapTemplate = (template, role, event) => {
		this.view.swapTemplate(template, role, event);
	};
}
