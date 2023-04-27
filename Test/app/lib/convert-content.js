"use strict";
// requires
const fs = require("fs");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const JB = require("./JB");
const pretty = require("pretty");

module.exports = {
	beginConversion: function (path, contents) {
		let modules = contents.modules;
		let toc = [];
		let videoIter = 1;

		// module loop
		for (let i = 0; i < modules.length; i++) {
			let tocMod = [];
			let lessons = modules[i].lessons;

			// lesson loop
			for (let j = 0; j < lessons.length; j++) {
				console.log(`M${i+1}_L${j+1}`);
				let altKeys = [];

				if (j > 0) {
					altKeys = Object.keys(lessons[j - 1].altText);
				}
				else if (i > 0 && j == 0) {
					altKeys = Object.keys(modules[i - 1].lessons[modules[i - 1].lessons.length - 1].altText);
				}
				console.log(altKeys);
				
				
				for (let alt of altKeys) {
					if (/video/i.test(alt)) {
						videoIter++;
					}
				}
				// returns lesson toc array after building
				// the JB pages
				let lessonPages = lessonBuilder.initialize(lessons[j], j + 1, i + 1, path, contents.course_id, videoIter);

				// add lesson toc main page to array
				lessonPages.unshift( {
					"TOC_Main_Title": lessons[j].title,
					"TOC_Main_Page_Hero_Image": "",
					"TOC_Main_Page_Text": ""
				} );
				// add EOL page
				lessonPages.push( {
					"lesson_name": "End of Lesson Questinos",
					"Page_File_Name": ""
				} );

				tocMod.push(lessonPages);
			}

			toc.push(tocMod);
		}

		let folders = fs.readdirSync(path);
		let firstMod;
		for (let folder of folders) {
			if (!/JB_Course/.test(folder)) {
				firstMod = folder;
				break;
			}
		}

		// build glossary
		let glossContents = fs.readFileSync(`${path}\\${firstMod}\\EPUB\\xhtml\\raw\\glossary.xhtml`, "utf8");
		let glossary = buildGloss(glossContents);
		// write toc to file
		fs.writeFileSync(`${path}\\JB_Course\\${contents.course_id}\\glossary.js`, "var glossary_settings = " + JSON.stringify(glossary, null, 4) + ";", "utf8");

		// write toc to file
		fs.writeFileSync(`${path}\\JB_Course\\${contents.course_id}\\toc.js`, "var TOC = " + JSON.stringify(toc, null, 4) + ";", "utf8");
	}
};

// TODO
// build helper library file and move this
function slice(nodes) {
	return Array.prototype.slice.call(nodes);
}

let lessonBuilder = {
	initialize: function (lesson, lessonNum, modNum, path, courseID, videoIter) {
		lessonBuilder.modPath = lesson.pages[0].path.replace(/(C:.*?\\EPUB\\)xhtml\\chapter\d+\\page\d*\.xhtml/, '$1');
		lessonBuilder.chapter = lesson.pages[0].path.replace(/C:.*?\\EPUB\\xhtml\\chapter(\d+)\\page\d*\.xhtml/, '$1');
		lessonBuilder.lessonNum = lessonNum;
		lessonBuilder.modNum = modNum;
		lessonBuilder.answerKey = lesson.answerKey;
		lessonBuilder.altText = lesson.altText;
		lessonBuilder.objectives = lesson.objectives;
		lessonBuilder.pages = lesson.pages;
		lessonBuilder.widgets = 0;
		lessonBuilder.course_id = courseID.replace(/([A-Z]+)(\d+)/, "$1_$2");
		lessonBuilder.lesson_id = `${lessonBuilder.course_id}_M${modNum}_L${lessonNum}`;
		lessonBuilder.directory = `${path}\\JB_Course\\${courseID}\\Modules\\Mod_0${modNum}`;
		lessonBuilder.editLog = {};
		lessonBuilder.editLog[`${lessonBuilder.lesson_id}`] = [];

		// keeps track of heading level for
		// example and insight boxes
		lessonBuilder.hLevel;
		// will assign dom to this
		lessonBuilder.doc;
		lessonBuilder.prevSnippet;
		// counts how many videos are in the course
		lessonBuilder.videoIter = videoIter;

		// compare pages.length to objectives.length
		// assign objectives if equal
		// add to manual log if not equal
		let addObjectives = false;
		if (lessonBuilder.objectives.length == lessonBuilder.pages.length - 2) {
			addObjectives = true;
		} else {
			// console.log(`${lessonBuilder.lesson_id} has ${lessonBuilder.objectives.length} learning objectives, but ${lessonBuilder.pages.length - 1} pages.`);

			lessonBuilder.editLog[`${lessonBuilder.lesson_id}`].push(`Lesson has ${lessonBuilder.objectives.length} learning objectives, but ${lessonBuilder.pages.length - 2} pages. Need to add relevant LOs to the beginning of each page.`);
		}
		
		let tocPages = []
		// page loop
		for (let i = 0; i < this.pages.length; i++) {
			// add objective. first page is list of LOs
			// so it doesn't get one.
			if (addObjectives && i > 1) {
				this.pages[i].objective = lessonBuilder.objectives[i - 2];
			}

			// set the file name for the page
			let fileName;
			if (i == 0) {
				fileName = `${lessonBuilder.lesson_id}_LO`;
			} else {
				fileName = `${lessonBuilder.lesson_id}_P${i}`;
			}

			lessonBuilder.currentFileName = fileName;
			lessonBuilder.currentPage = this.pages[i];

			tocPages.push( {
				"lesson_name": lessonBuilder.currentPage.title,
				"Page_File_Name": `${fileName}.js`
			} );
			// read page contentsd
			lessonBuilder.readContents(this.pages[i], fileName);
		}

		
		// write edit log to file
		let editKeys = Object.keys(lessonBuilder.editLog);
		for (let editKey of editKeys) {
			fs.appendFileSync(`${path}\\JB_Course\\${courseID}\\manualEditsLog.txt`, `\n${editKey}:\n`, "utf8");

			for (let edit of lessonBuilder.editLog[editKey]) {
				fs.appendFileSync(`${path}\\JB_Course\\${courseID}\\manualEditsLog.txt`, `\t${edit}\n\n`, "utf8");
			}

		}

		return tocPages;
		// fs.appendFileSync(`${lessonBuilder.directory.replace(/(^.*?\\JB_Course\\).*?$/, '$1')}\\manualEditsLog.txt`, `${lessonBuilder.lesson_id}:\n${JSON.stringify(lessonBuilder.editLog, null, 4)}`, "utf8");

		// console.log(lessonBuilder.editLog)
	},

	readContents: function (page, fileName) {
		// read file
		let pageContent = page.contents;

		// convert keyterm tags
		pageContent = pageContent.replace(/<span (?:[^>]+)?class="gt" (?:[^>]+)?>/g, "<span class='keyterm' tabindex='0' role='button'>");
		pageContent = pageContent.replace(/<div class="figure"[^>]+><div class="inner"[^>]+>(.*?)<\/div><\/div>/g, "$1");
		// convert to DOM
		const dom = new JSDOM(pageContent);
		lessonBuilder.doc = dom.window.document;
		
		if (!/(?:LO|P1)$/.test(fileName)) {
			// add LO elements to beginning of page
			let divLO = lessonBuilder.doc.createElement("div");
			let headingLO = lessonBuilder.doc.createElement("h3");
			let paraLO = lessonBuilder.doc.createElement("p");

			divLO.className = "lo-cont";
			headingLO.className = "lo-heading";
			paraLO.className = "lo";

			headingLO.innerHTML = "Learning Objective";
			// only add objective text if the
			// page has an objective assigned
			if (page.objective) {
				paraLO.innerHTML = page.objective;
			}

			lessonBuilder.doc.querySelector("h2").after(divLO);
			lessonBuilder.doc.querySelector("div.lo-cont").appendChild(headingLO);
			lessonBuilder.doc.querySelector("div.lo-cont").appendChild(paraLO);
		}

		// parse the dom
		lessonBuilder.parseDOM(dom, fileName, page);
	},

	parseDOM: function (dom, fileName, page) {
		// get empty JB Page Object
		// and set Page_Title
		let JB_Page = JB.JB_Page();
		if (lessonBuilder.doc.title == 'Outline') {
			lessonBuilder.doc.title = 'Introduction';
			lessonBuilder.doc.querySelector('h2').innerHTML = 'Introduction';
		}

		// learning objectives page needs some edits
		if (lessonBuilder.doc.title == 'Objectives') {
			// change title
			lessonBuilder.doc.title = 'Learning Objectives';
			lessonBuilder.doc.querySelector('h2').remove();
			// lessonBuilder.doc.querySelector('h2').innerHTML = 'Learning Objectives';
			// lessonBuilder.doc.querySelector('h2').removeAttribute('epub:type');
			
			// remove unneeded elements
			lessonBuilder.doc.querySelector('p.obj-txt').remove();
			lessonBuilder.doc.querySelector('img.bullseye').remove();

			// remove LO leadins
			let los = slice(lessonBuilder.doc.querySelectorAll('ul.objectives li'));
			for (let lo of los) {
				lo.innerHTML = lo.innerHTML.replace(/<strong>.*?<\/strong>(.*?)$/, '$1');
			}

			// add the LO snippet
			JB_Page[0].JBuilder_Content.push({
				"Learning_Objectives":
					[
						{"color": "006aac"}
					]
			});
		}

		// collect elements
		let container = lessonBuilder.doc.querySelector("section");
		let pageEls = slice(container.children);

		JB_Page[0].Page_Setup.Page_Title = lessonBuilder.doc.title;

		// used for splice later
		let i = 0;
		for (let pageEl of pageEls) {
			// MathML equations are in spans with no content
			while (pageEl.querySelector('span.equation.kInline')) {
				// create a new span
				let span = lessonBuilder.doc.createElement('span');
				// add classes
				span.className = 'needs-edit equation';
				// add innerHTML to make sure ID sees an edit is needed
				span.innerHTML = '[[MathML equation. NEEDS EDIT!]]';
				
				// add to manual edits list
				lessonBuilder.editLog[`${lessonBuilder.lesson_id}`].push(`${fileName} has a MathML equation. Look for "[[MathML equation. NEEDS EDIT!]]" in ${fileName}.js. Refer to ${page.title} in chapter ${page.path.replace(/.*?chapter(\d+)\\page\d*\.xhtml/, '$1')} of the EPUB to see the equation.`);

				// replace old MathML node with new span
				pageEl.querySelector('span.equation.kInline').replaceWith(span);
			}

			// remove outline from intro page
			if (lessonBuilder.doc.title == "Introduction" && /(?:section-title|outline)/.test(pageEl.className)) {
				continue;
			}

			// helps determine if we need to
			// build a para or list snippet
			let containsList = false;
			if (/(UL|OL)/.test(pageEl.tagName)) {
				containsList = true;
			}
			// first heading tag or heading not followed by list or para
			if (/H\d/.test(pageEl.tagName) && !/Learning Objectives/.test(pageEl.innerHTML) && (pageEl.getAttribute("epub:type") == "title" || pageEl == container.lastElementChild || !/(p|ul|ol|)/i.test(pageEl.nextElementSibling.tagName))) {
				// build heading snippet and add to page
				JB_Page[0].JBuilder_Content.push(buildHeading(pageEl));
				continue;
			}

			// LOs come after page title
			if (pageEl.classList.contains("lo-cont")) {
				JB_Page[0].JBuilder_Content.push(buildLOs(pageEl));
			}

			// Paras or Lists
			if (/H\d/i.test(pageEl.tagName) || /(P|UL|OL)/.test(pageEl.tagName)) {
				let arrayInfo = buildParaListArr(pageEl, containsList);
				let j = arrayInfo[0];
				containsList = arrayInfo[1];
				let elArray = arrayInfo[2];

				// need to splice the pageEls araray so
				// we don't have duplicate content
				pageEls.splice(i + 1, j);

				// if array has a list, then we build
				// a list snippet
				if (containsList) {
					JB_Page[0].JBuilder_Content.push(buildList(elArray));
				}
				// otherwise build a para snippet
				else {
					JB_Page[0].JBuilder_Content.push(buildPara(elArray));
				}
			}

			// Tables
			if (/TABLE/i.test(pageEl.tagName)) {
				JB_Page[0].JBuilder_Content.push(buildTable(pageEl));
			}

			// Example/Insight boxes
			if (/DIV/i.test(pageEl.tagName) && (pageEl.classList.contains("example") || pageEl.classList.contains("insight"))) {
				// nested divs don't get processed
				// need to pull the content out
				let nestedDivs = slice(pageEl.querySelectorAll('div.figure,div.example,div.inner > div.inner,div.insight-inset'));
				for (let nestedDiv of nestedDivs) {
					pageEl = processNested(pageEl, nestedDiv);
				}

				let components = buildAside(pageEl);
				for (let component of components) {
					JB_Page[0].JBuilder_Content.push(component);
				}
			}

			// Question
			if (/DIV/i.test(pageEl.tagName) && pageEl.classList.contains("question-wrapper")) {
				// background color and top margin are
				// different when there are back-to-back
				// questions
				let bgColor = '';
				let topMargin = '30px';
				// bg color alternates 
				if (lessonBuilder.prevSnippet == 'question' && JB_Page[0].JBuilder_Content[JB_Page[0].JBuilder_Content.length - 1].Question_Comp[0].background_color == '') {
					bgColor = '#FBF6D9';
				}
				// top margin is less with 
				// consecutive questions
				if (lessonBuilder.prevSnippet == 'question') {
					topMargin = '0px';
				}

				let id = pageEl.id.replace(/-wrap/, '');
				let question = buildQuestion(pageEl.querySelector("div.question-container-static"), lessonBuilder.answerKey[id]);

				if (question) {
					// set properties
					question.Question_Comp[0].background_color = bgColor;
					question.Question_Comp[0].top_margin = topMargin;
					JB_Page[0].JBuilder_Content.push(question);
				}
			}

			// Figure
			if (/FIGURE/i.test(pageEl.tagName)) {

				let figure = fixFigures(pageEl);

				// titles need their own para
				// snippet before the figure
				if (figure.querySelector('.title')) {
					figure.querySelector('.title').innerHTML = figure.querySelector('.title').innerHTML.replace(/<span[^>]+>(.*?)<\/span>/, '<strong>$1</span>');
					JB_Page[0].JBuilder_Content.push(buildPara( [figure.querySelector('.title')] ));
				}
				// build the figure
				JB_Page[0].JBuilder_Content.push(buildFigure(figure));

				// sources need their own para 
				// snippet after the figure
				if (figure.querySelector('.fig-source')) {

				}
				
				// check if there are children of figcaptions that 
				// aren't an image description button or link
				if (slice(figure.querySelector('figcaption').children).filter(child => !/img-desc/.test(child.className)).length > 0) {
					let figCapChildren = slice(figure.querySelector('figcaption').children).filter(child => (child.tagName != 'DIV' && !/img-desc/.test(child.className)));	
					let captionParas = [];
					for (let figCapChild of figCapChildren) {
						captionParas.push(figCapChild);
					}

					JB_Page[0].JBuilder_Content.push(buildPara(captionParas));
					// Add children HTML to image_text_below
					// property of snippet
					// JB_Image.image_w_text[3].image_text_below = captionText;
				}
			}

			// video
			if (/video/.test(pageEl.id) && /figure/.test(pageEl.className)) {
				JB_Page[0].JBuilder_Content.push(buildVideo(pageEl));
				lessonBuilder.videoIter++;
			}

			// 311 widgets
			if (/widget/.test(pageEl.className)) {
				lessonBuilder.widgets++
				let questionSnippets = buildWidget();
				for (let questionSnippet of questionSnippets) {
					JB_Page[0].JBuilder_Content.push(questionSnippet);
				}
				// JB_Page[0].JBuilder_Content.push(buildWidget(pageEl, widgets));
				// widgets++;
			}

			i++;
		}

		// add source line snippet to end of JSON
		if (page.sourceLines) {
			let sourceInfo = {"Inline_Source_File": []};
			for (let sourceLine of page.sourceLines) {
				sourceInfo["Inline_Source_File"].push({
					"Source_Info": sourceLine
				});
			}
			// add Inline Source Info
			JB_Page[0].JBuilder_Content.push(sourceInfo);
		}

		// create HTML
		let html = `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"> <link rel="stylesheet" href="../../../jbuild_libs/css/bootstrap.min.css"><link rel="stylesheet" href="../../../jbuild_libs/css/hioc.css"><link href="../../../jbuild_libs/css/font-awesome.css" rel="stylesheet"><script type="text/javascript" src="../../../jbuild_libs/js/jquery.min.js"></script><!--<script type="text/javascript" src="../../../jbuild_libs/js/jc_creator.js"></script>--><script type="text/javascript" src="../../../jbuild_libs/js/jack_builder_creator.js"></script><link rel="stylesheet" href="../../../jbuild_libs/fonts/font-awesome.min.css"> <title id="Lesson_Page_title"></title></head><body id="Page_Body" class="body_style"><!--<body style="padding-left: 20%; padding-right: 20%;">--><div id="pg_header" class="navbar navbar-inverse navbar-fixed-top col-lg-12 col-md-12 col-xs-12" style="text-align: center; background-color: #9A9A9A; width: 100%;"><page_title id="Page_Title"></page_title><div id="prg_Bar" style="height: 2px; background-color: royalblue; width: 0px;margin-left: -20px; position: absolute; bottom: 0;"></div></div><div id="JcComponents" class="col-lg-12 col-md-12 col-xs-12 Main_div_settings" align="center" style="display: block; width: 100%; margin-top: 40px;"></div><div id="Next_Lesson" class="col-lg-12 col-md-12 col-xs-12 next_lesson" onClick="javascript:next_lesson()" style="display: block; width: 100%"><l3>Next Page/Lesson</l3></div></body></html> <script src="../../../jbuild_libs/css/jquery.min.js"></script> <script src="../../../jbuild_libs/css/bootstrap.min.js"></script> <script src="../../../jbuild_libs/css/jquery.navgoco.js"></script><script type="text/javascript" src="../../../jbuild_libs/js/jq_flip.js"></script><script src="json/${fileName}.js"></script>`;

		// write json to file
		fs.writeFileSync(`${lessonBuilder.directory}\\json\\${fileName}.js`, "Lesson_Data_File(" + JSON.stringify(JB_Page, null, 4) + ");", "utf8");
		// write html to file
		fs.writeFileSync(`${lessonBuilder.directory}\\${fileName}.html`, pretty(html), "utf8");
		
	}
};

// TODO
// move all functions that need lesson data
// inside lessonBuilder object
function buildGloss(content) {
	// remove line breaks and extra spacing
	content = content.replace(/[\t\r\n]/g, "");
	content = content.replace(/[ ]{2,}/g, "");
	const dom = new JSDOM(content);
	let doc = dom.window.document;

	let dts = slice(doc.querySelectorAll('dt > dfn'));

	let glossary = {
		"glossary_setup": []
	};

	for (let dt of dts) {
		let termObj = {};
		let term = dt.innerHTML;
		let sort = term.charAt(0);
		if (/[0-9]/.test(sort)) {
			sort = '#';
		}
		else {
			sort = sort.toUpperCase();
		}
		
		let definition = dt.parentNode.nextElementSibling.innerHTML;
		definition = definition.replace(/See <a[^>]+>(.*?)<\/a>/g, 'See $1');
		definition = definition.replace(/(.*?)<span[^>]+>.*?<\/span>\s*$/, '$1');
		definition = definition.replace(/(.*?)<spanclass[^>]+>.*?<\/spanclass[^>]+>\s*$/, '$1');
		definition = definition.replace(/(.*?)<a[^>]+>.*?<\/a>\s*$/, '$1');
		definition = definition.replace(/(.*?)<aclass[^>]+>.*?<\/aclass[^>]+>\s*$/, '$1');
		definition = definition.replace(/<br\s*\/?\s*>/g, '');

		termObj.sort = sort;
		termObj.term = term;
		termObj.definition = definition;

		glossary.glossary_setup.push(termObj);
	}

	return glossary;
}

function fixFigures(figure) {
	
	// some figures have two figcaption elements
	while (figure.querySelector('figcaption + figcaption')) {
		let children = slice(figure.querySelector('figcaption').children);
		if (children) {
			for (let child of children) {
				// move images before first figcaption
				if (child.tagName == 'IMG') {
					figure.querySelector('figcaption').parentNode.insertBefore(child, figure.querySelector('figcaption'));
				}
				// move everything else into second figcaption
				else {
					figure.querySelector('figcaption + figcaption').prepend(child);
				}
			}
			// remove first figcaption
			figure.querySelector('figcaption').remove();
		}
	}
	return figure;
}

function getTableStyles(className) {
	let styles = {};

	// test class for table colorsls
	switch (true) {
		case /blue/.test(className):
			styles.colors = {
				header: "#0069ad",
				light: "rgba(0, 105, 173, .09)",
				dark: "rgba(0, 105, 173, .3)",
				hText: "#ffffff"
			};
			break;

		case /teal/.test(className):
			styles.colors = {
				header: "#006a65",
				light: "rgba(0, 106, 101, .09)",
				dark: "rgba(0, 106, 101, .3);",
				hText: "#ffffff"
			};
			break;

		case /orange/.test(className):
			styles.colors = {
				header: "#EF7014",
				light: "rgba(239, 112, 20, .09)",
				dark: "rgba(239, 112, 20, .3)",
				hText: "#000000"
			};
			break;

		case /red/.test(className):
			styles.colors = {
				header: "#d90000",
				light: "rgba(217, 0, 0, .09)",
				dark: "rgba(217, 0, 0, .3)",
				hText: "#ffffff"
			};
			break;

		case /purple/.test(className):
			styles.colors = {
				header: "#7e05bb",
				light: "rgba(126, 5, 187, .09)",
				dark: "rgba(126, 5, 187, .3)",
				hText: "#ffffff"
			};
			break;

		case /green/.test(className):
			styles.colors = {
				header: "#00ab4f",
				light: "rgba(0, 171, 79, .09)",
				dark: "rgba(0, 171, 79, .3)",
				hText: "#000000"
			};

		case /black/.test(className):
			styles.colors = {
				header: "#000000",
				light: "rgba(0, 0, 0, .09)",
				dark: "rgba(0, 0, 0, .3)",
				hText: "#ffffff"
			};
			break;

		case /equation/.test(className):
			styles.colors = {
				header: "transparent",
				light: "transparent",
				dark: "transparent",
				hText: "#000000"
			};
			break;
		

		default:
			styles.colors = {
				header: "#000000",
				light: "rgba(0, 0, 0, .09)",
				dark: "rgba(0, 0, 0, .3)",
				hText: "#ffffff"
			};
			break;
	}

	// striped or solid bg
	if (/striped/.test(className)) {
		styles.bgPattern = "striped";
	} else if (/solid/.test(className)) {
		styles.bgPattern = "solid";
	}

	return styles;
}

// Insights have div.figure > div.inner elements surrounding lists. 
// We need to move those out of their containers so buildAside()
// can access them.
function processNested(element, nestedDiv) {

	// make a CSS selector
	// nestedClass = nestedClass.replace(/ /g, ".");
	// let nestedDiv = element.querySelector(`div.${nestedClass}`);
	let nestedDivEls = (nestedDiv.querySelector('div.inner')) ? slice(nestedDiv.querySelector('div.inner').children) : slice(nestedDiv.children);

	// if there's an example header, add it to the
	// beginning of the nested element array
	if (/example/.test(nestedDiv.className) && nestedDiv.querySelector('.example-header')) {
		nestedDivEls.unshift(nestedDiv.querySelector('.example-header'));
	}
	
	// move nested elements before the nested el
	// div container
	for (let nestedDivEl of nestedDivEls) {
		nestedDiv.parentNode.insertBefore(nestedDivEl, nestedDiv);
	}
	// remove the nested element div container
	nestedDiv.parentNode.removeChild(nestedDiv);
	
	return element;
}

function processWidgetAC(doc) {
	let ac = [];
	let fbs = slice(doc.querySelectorAll('.feedback > strong'));
	if (/thumbs up/i.test(doc.querySelector('.n-pro > img').getAttribute('alt'))) {
		let fbText = fbs.map(fb => fb.innerHTML.replace(/\.$/, ''));
		ac = fbText.filter((value, index, array) => array.indexOf(value) === index);	
		ac.sort();
	}
	else {
		ac[0] = 'Performing the policy';
		ac[1] = 'Contesting the policy';
	}

	return ac;
}

function processCell(cell) {
	let children = slice(cell.children);
	let cellContents = '';

	if (children.length == 1) {
		switch (children[0].tagName) {
			case "STRONG":
			case "BR":
			case "EM":
			case "SPAN":
				return cell.innerHTML;
			
			case "P":
				return children[0].innerHTML;

			case "UL":
			case "OL":
				return processTableList(children[0]);

			case "DIV":
				return processTableDiv(children[0]); 

			default:
				console.log(`Table cell has a ${children[0].tagName} in it. Not sure what to do.`);
		}
	}
	else {
		let innerHTML = '';
		for (let i = 0; i < children.length; i++) {
			innerHTML += processCellChildren(children[i], i);
		}
		return innerHTML;
	}
}

function processTableList(list) {
	let listItems = slice(list.children);
	let innerHTML = '';

	for (let listItem of listItems) {
		innerHTML += `<br/>&#8226; ${listItem.innerHTML}`;
	}

	return innerHTML;
}

function processTableDiv(div) {
	if (div.querySelector('div.inner')) {
		div = div.querySelector('div.inner');
	}

	let children = slice(div.children);
	let innerHTML = '';
	for (let i = 0; i < children.length; i++) {
		innerHTML += processCellChildren(children[i], i);
	}

	return innerHTML;
}

function processCellChildren(child, index) {
	let innerHTML = '';

	switch (child.tagName) {
		case "P":
			if (index != 0) innerHTML += '<br/>';
			innerHTML += `${child.innerHTML}`;
			innerHTML = innerHTML.replace(/&nbsp;/g, '<br/>');
			
			break;
		
		case "UL":
		case "OL":
			innerHTML += processTableList(child);
			break;

		default:
			innerHTML += child.outerHTML;
	}

	return innerHTML;
}

function buildHeading(heading) {
	lessonBuilder.prevSnippet = "heading";
	let JB_Heading = JB.JB_Heading();
	JB_Heading.Heading_New[0].sngl_Heading = heading.innerHTML;
	JB_Heading.Heading_New[3].size = heading.tagName.toLowerCase();
	lessonBuilder.hLevel = parseInt(heading.tagName.replace(/H(\d)/, "$1"));

	switch (lessonBuilder.hLevel) {
		case 3:
			JB_Heading.Heading_New[5].color = "#015d52";
			JB_Heading.Heading_New[4].style = "bold";
			break;

		
	}

	return JB_Heading;
}

function buildLOs(LO) {
	lessonBuilder.prevSnippet = "para";
	let JB_Para = JB.JB_Para();
	let paraLO = LO.querySelector("p.lo");

	JB_Para.Paragraphs_New[0].heading = "Learning Objective";
	JB_Para.Paragraphs_New[0].heading_font_size = "h3";
	JB_Para.Paragraphs_New[0].background_color = "#FBF6D9";
	JB_Para.Paragraphs_New[0].border_style = "solid";
	JB_Para.Paragraphs_New[0].heading_color = "#015d52";
	JB_Para.Paragraphs_New[0].heading_weight = "bold";
	JB_Para.Paragraphs_New.push({ Paragraph_txt: paraLO.innerHTML });

	return JB_Para;
}

function buildPara(paraArray, aside) {
	lessonBuilder.prevSnippet = "para";
	let JB_Para = JB.JB_Para();
	let firstPara = true;
	// console.log(`\n\n Building para snippet`)

	for (let para of paraArray) {
		// console.log(`\n${para.outerHTML}`)
		// para headings
		if (/H\d/.test(para.tagName)) {
			JB_Para.Paragraphs_New[0].heading = para.innerHTML;
			JB_Para.Paragraphs_New[0].heading_font_size = para.tagName.toLowerCase();

			if (!aside) {
				lessonBuilder.hLevel = parseInt(para.tagName.replace(/H(\d)/, "$1"));
				switch (lessonBuilder.hLevel) {
					case 3:
						JB_Para.Paragraphs_New[0].heading_color = "#015d52";
						break;
			
				}
			}
		}
		// paras
		else {
			if (firstPara) {
				JB_Para.Paragraphs_New.push({ Paragraph_txt: `${para.innerHTML}` });
				firstPara = false;
			}
			else {
				JB_Para.Paragraphs_New.push({ Paragraph_txt: `<br />${para.innerHTML}` });
			}
		}
	}

	return JB_Para;
}

function buildList(listArray, aside) {
	lessonBuilder.prevSnippet = "list";
	let JB_List = JB.JB_List();
	let listAdded = false;

	for (let list of listArray) {
		// list heading
		if (/H\d/.test(list.tagName)) {
			JB_List.List_text_paragraph[0].List_Heading = `<strong>${list.innerHTML}</strong>`;
			JB_List.List_text_paragraph[0].heading_size = list.tagName.toLowerCase();
			if (!aside) {
				lessonBuilder.hLevel = parseInt(list.tagName.replace(/H(\d)/, "$1"));
				switch (lessonBuilder.hLevel) {
					case 3:
						JB_List.List_text_paragraph[0].heading_color = "#015d52";
						break;
			
				}
			}
		}
		// top paras
		else if (/P/.test(list.tagName) && !listAdded) {
			JB_List.List_text_paragraph[1].Top_Paragraphs.push({
				Paragraph_text: list.innerHTML
			});
		}
		// bottom paras
		else if (/P/.test(list.tagName) && listAdded) {
			JB_List.List_text_paragraph[9].Bottom_paragraphs.push({
				Paragraph_text: list.innerHTML
			});
		}
		// list items
		else {
			let LIs = slice(list.children);
			for (let li of LIs) {
				// most lis have paras nested in them
				if (li.querySelector("p")) {
					JB_List.List_text_paragraph[8].list_items.push({
						lstText: li.querySelector("p").innerHTML
					});
				} else {
					JB_List.List_text_paragraph[8].list_items.push({
						lstText: li.innerHTML
					});
				}
			}
		}
	}

	return JB_List;
}

function buildTable(table) {
	lessonBuilder.prevSnippet = "table";

	// if the table is presenting an equation
	if (/equation/.test(table.className)) {
		let trHead = lessonBuilder.doc.createElement('tr');
		let th = lessonBuilder.doc.createElement('th');
		th.innerHTML = '[[Equation Table. NEEDS EDIT!]]';
		trHead.append(th);
		table.querySelector('tbody').prepend(trHead);
		//Add to manual edits log
		lessonBuilder.editLog[`${lessonBuilder.lesson_id}`].push(`${lessonBuilder.currentFileName} has an equation formatted in a table. Look for "[[Equation Table. NEEDS EDIT!]]" in ${lessonBuilder.currentFileName}.js. Refer to ${lessonBuilder.currentPage.title} in chapter ${lessonBuilder.currentPage.path.replace(/.*?chapter(\d+)\\page\d*\.xhtml/, '$1')} of the EPUB to see the equation.`);
	}

	let JB_Table = JB.JB_Table();
	let tableStyles = getTableStyles(table.className);
	let trs = table.querySelectorAll("tr");

	let even = false;
	let i = 0;
	for (let tr of trs) {
		let cells = slice(tr.children);
		// header row
		if (tr == trs[0] && tr.firstElementChild.tagName == "TH") {
			// set heading colors
			JB_Table.JB_Table[0].Row_Heading_Color = tableStyles.colors.header;
			JB_Table.JB_Table[0].Row_Heading_Font_Whole = `center,${tableStyles.colors.hText}`;

			// set cell data
			for (let cell of cells) {
				let headingObj = {};
				let cellHTML;
				// get all nodes of cell
				// not using .children here because innerHTML might include a mixture of text nodes and inline HTML elements
				let nodes = cell.childNodes;
				let filteredNodes = [];

				for (let node of nodes) {
					// filter for non-empty text nodes and HTML elements
					if ((node.nodeType == 3 && node.nodeValue != ' ') || node.nodeType == 1) {
						
						filteredNodes.push(node);
					}
				}

				// block level elements need extra processing
				if (filteredNodes.filter(node => /^(?:DIV|UL|OL|P)$/.test(node.nodeName)).length > 0) {
					cellHTML = processCell(cell);
				}
				else {
					cellHTML = cell.innerHTML;
				}

				headingObj.Heading = cellHTML;

				if (cell.hasAttribute('colspan')) {
					headingObj.merge = cell.getAttribute('colspan');
				}

				// let cellHTML = cell.querySelector("p") ? cell.querySelector("p").innerHTML : cell.innerHTML;
				JB_Table.JB_Table[0].Col_Heading.push(headingObj);
			}
		}
		// data row
		else {
			let row = {
				Row_Data: [],
				Row_Data_Color: "",
				Row_Data_Height: "",
				Row_Data_Font_Whole: `center,#000000`
			};

			// set row colors based on whether striped/solid and even/odd
			if (tr.style && tr.style['background-color'] != '') {
				row.Row_Data_Color = tr.style['background-color'];
			}
			else if (cells[0].style['background-color'] != '') {
				row.Row_Data_Color = cells[0].style['background-color'];
			}
			else if ((even && tableStyles.bgPattern == "striped") || tableStyles.bgPattern == "solid") {
				row.Row_Data_Color = tableStyles.colors.dark;
			} 
			else if (!even && tableStyles.bgPattern == "striped") {
				row.Row_Data_Color = tableStyles.colors.light;
			}

			// set cell data
			let i = 0;
			for (let cell of cells) {
				let cellObj = {};
				let cellHTML;
				// get all nodes of cell
				// not using .children here because innerHTML might include a mixture of text nodes and inline HTML elements
				let nodes = cell.childNodes;
				let filteredNodes = [];

				for (let node of nodes) {
					// filter for non-empty text nodes and HTML elements
					if ((node.nodeType == 3 && node.nodeValue != ' ') || node.nodeType == 1) {
						
						filteredNodes.push(node);
					}
				}

				// block level elements need extra processing
				if (filteredNodes.filter(node => /^(?:DIV|UL|OL|P)$/.test(node.nodeName)).length > 0) {
					cellHTML = processCell(cell);
				}
				else {
					cellHTML = cell.innerHTML;
				}

				cellObj.Data_Info = cellHTML;
				
				if (cell.hasAttribute('colspan')) {
					cellObj.merge = cell.getAttribute('colspan');
				}
 
				row.Row_Data.push(cellObj);
			}

			JB_Table.JB_Table[1].Row_Information.push(row);
		}

		i++;
		even = even ? false : true;
	}

	return JB_Table;
}

function buildFigure(figure) {
	lessonBuilder.prevSnippet = "image";
	let JB_Image = JB.JB_Image();
	let imgSrc = figure.querySelector("img").src;
	imgSrc = imgSrc.replace(/\.\.\/\.\.\/imgs\/(.*?\.(?:png|jpg))/, "$1");
	JB_Image.image_w_text[0].image_name = imgSrc;

	// set image title
	// if (figure.querySelector('.title')) {
	// 	let title = figure.querySelector('.title').innerHTML;
	// 	title = title.replace(/<span class="fig-num"(?:[^>]+)?>(.*?)<\/span>/, '<strong>$1</strong>');
	// 	JB_Image.image_w_text[3].image_text = title;
	// }
	

	

	// collect image descriptions from
	// end of mod appendix chapter
	if (lessonBuilder.altText[figure.id]) {
	
		// add any "NEEDS EDIT" items to manual edits
		if (/NEEDS EDIT/i.test(lessonBuilder.altText[figure.id].alt)) {
			lessonBuilder.editLog[`${lessonBuilder.lesson_id}`].push(`${lessonBuilder.currentFileName} has a figure (${lessonBuilder.altText[figure.id]['fig-num']}) with a complex image description that needs to be edited. Look for "[[NEEDS EDIT!]]" in ${lessonBuilder.currentFileName}.js. Refer to ${lessonBuilder.currentPage.title} in chapter ${lessonBuilder.currentPage.path.replace(/.*?chapter(\d+)\\page\d*\.xhtml/, '$1')} of the EPUB to see the figure description.`);
		}

		JB_Image.image_w_text[0].image_w_text_tag = lessonBuilder.altText[figure.id].alt[0];
	}

	return JB_Image;
}

function buildVideo(pageEl) {
	lessonBuilder.prevSnippet = "video";
	let vidID = pageEl.id;

	let vidNum = pageEl.querySelector('source').getAttribute('src').replace(/\.\.\/\.\.\/video\/(\d+-\d+)video\.mp4/, '$1');
	let videoFile;

	switch (lessonBuilder.course_id.replace(/([A-Z]+)_(\d+)/, '$1$2')) {
		case 'LOMA311':
			videoFile = `311_Video${vidNum}.mp4`;
			break;

		case 'LOMA335':
			videoFile = `${vidNum}video.mp4`;
			break;

		case 'LOMA357':
			videoFile = `${vidNum}Video-${lessonBuilder.videoIter}.mp4`
			break;

		case 'LOMA361':
		case 'LOMA371':
			videoFile = `${vidNum}Video.mp4`;
			break;

	}

	let source = `https://loma.azureedge.net/videos/${lessonBuilder.course_id.replace(/([A-Z]+)_(\d+)/, '$1$2')}/${videoFile}`;

	let JB_Video = JB.JB_Video();

	// set video source
	JB_Video.Video_Files_New[0].Video = source;

	// set transcript
	JB_Video.Video_Files_New.push({ Person: "", "Transcript_Text": `<strong>${lessonBuilder.altText[vidID].title}</strong>` });

	let manualLog = false;
	for (let altPara of lessonBuilder.altText[vidID].alt) {
		// Manual edits log. Check for "NEEDS EDIT"
		if (/NEEDS EDIT/i.test(altPara) && !manualLog) {
			lessonBuilder.editLog[`${lessonBuilder.lesson_id}`].push(`${lessonBuilder.currentFileName} has a video (${lessonBuilder.altText[vidID]['fig-num']}) with a complex transcript that needs to be edited. Look for "[[NEEDS EDIT!]]" in ${lessonBuilder.currentFileName}.js. Refer to ${lessonBuilder.currentPage.title} in chapter ${lessonBuilder.currentPage.path.replace(/.*?chapter(\d+)\\page\d*\.xhtml/, '$1')} of the EPUB to see the transcript.`);

			manualLog = true;
		}

		JB_Video.Video_Files_New.push({Person: "", "Transcript_Text": altPara });
	}

	return JB_Video;
}

function buildAside(aside) {
	
	let componentArray = [ 
		buildDivider(null, '60%', '50px', null, '2px', null, '50px')
	];
	let asideClass = aside.className;

	// if (/example/.test(asideClass) && aside.querySelector('table')) {
	// 	console.log(`\n${aside.outerHTML}`);
	// }
	// let bgColor;
	// switch (asideClass) {
	// 	case "insight":
	// 		bgColor = "rgba(145, 42, 116, .05)";
	// 		break;
	// 	case "example":
	// 		bgColor = "#a2f6c9";
	// 		break;
	// }


	// some asides have p.inner instead of div.inner.
	// changes p.inner to p.fig-inset, creates div.inner, and
	// adds p.fig-inset to div.inner
	if (slice(aside.querySelectorAll('p.inner')).length > 0) {
		let innerPs = aside.querySelectorAll('p.inner');
		let innerDiv = lessonBuilder.doc.createElement('div');
		innerDiv.classList.add('inner');
		innerPs[0].parentNode.insertBefore(innerDiv, innerPs[0]);
		for (let innerP of slice(aside.querySelectorAll('p.inner'))) {
			innerP.classList.add('fig-inset');
			innerP.classList.remove('inner');
			innerP.parentNode.removeChild(innerP);
			innerDiv.append(innerP);
		}
	}

	// Insights have a subtitle that needs to be added 
	// to the insight-header element
	if (aside.querySelector(`p.${asideClass}-title,p.title`)) {
		let subtitle = aside.querySelector(`p.${asideClass}-title,p.title`);
		aside.querySelector(`p.${asideClass}-header`).innerHTML = `${aside.querySelector(`p.${asideClass}-header`).innerHTML}: ${subtitle.innerHTML}`;
		subtitle.parentNode.removeChild(subtitle);
	}

	// if aside box starts with aside title
	// move it into the inner div of aside box
	//if (/aside/i.test(aside.firstElementChild.innerHTML)) {
	if (aside.querySelector(`p.${asideClass}-header`)) {
		//let hLevelString = hLevel.toString(hLevel+1);
		let heading = lessonBuilder.doc.createElement(`h${lessonBuilder.hLevel + 1}`);
		heading.innerHTML = `${aside.querySelector(`p.${asideClass}-header`).innerHTML}`;
		aside.querySelector("div.inner").prepend(heading);
	}

	
	while (aside.querySelector('ul + ul,ol + ol')) {
		let secList = aside.querySelector('ul + ul, ol + ol');
		let firstList = secList.previousElementSibling;
		let secListItems = slice(secList.children);

		for (let secListItem of secListItems) {
			firstList.append(secListItem);
		}

		secList.parentNode.removeChild(secList);
	}
	
	// collect elements in the inner div
	let asideEls = (aside.querySelector('div.inner')) ? slice(aside.querySelector("div.inner").children) : slice(aside.children);

	let i = 0;
	let returnSnippet;
	for (let asideEl of asideEls) {
		// some content is wrapped in a classless div
		if (asideEl.tagName == 'DIV' && asideEl.className == '') {
			// get children
			let children = slice(asideEl.children);


			if (children.length > 0) {
				// add children to asideEls array
				asideEls.splice.apply(asideEls, [i, 1].concat(children));
				// replace current array element
				asideEl = asideEls[i];
			}
		}
		let containsList = false;

		// skip <hr>s
		if (/HR/.test(asideEl.tagName)) {
			continue;
		}

		// list or paragraph
		if (/H\d/.test(asideEl.tagName) || /(P|UL|OL)/.test(asideEl.tagName) || (/DIV/.test(asideEl.tagName))) {
			// build an array of the content
			let arrayInfo = buildParaListArr(asideEl, containsList);
			let j = arrayInfo[0];
			containsList = arrayInfo[1];
			let elArray = arrayInfo[2];

			// need to splice the asideEls array so
			// we don't have duplicate content
			asideEls.splice(i + 1, j);

			// if array has a list, then we build
			// a list snippet
			if (containsList) {
				returnSnippet = buildList(elArray, true);
				// returnSnippet.List_text_paragraph[5].background_color = bgColor;
				//returnSnippet.List_text_paragraph[0].heading_alignment = 'left';
			}
			// otherwise build a para snippet
			else {
				returnSnippet = buildPara(elArray, true);
				
				// returnSnippet.Paragraphs_New[0].background_color = bgColor;
				//returnSnippet.Paragraphs_New[0].heading_alignment = 'left';
			}
		}
		// figure
		else if (/FIGURE/.test(asideEl.tagName)) {
			returnSnippet = buildFigure(asideEl);
			// returnSnippet.image_w_text[7].background_color = bgColor;
			returnSnippet.image_w_text[6].snippet_top_margin = "0px";
		}
		else if (/TABLE/.test(asideEl.tagName)) {
			returnSnippet = buildTable(asideEl);
		}
		componentArray.push(returnSnippet);
		i++;
	}
	//function buildDivider(contHeight, width, contTopMargin, style, dividerHeight, dividerColor, dividerTopMargin) {
	componentArray.push(buildDivider(null, '60%', '50px', null, '2px', null, '50px'));
	
	return componentArray;
}

function buildQuestion(question, answerKey) {
	let JB_Question = JB.JB_Question();
	let skip = false;

	// determine question type
	let qType = question.getAttribute("data-qtype");
	switch (qType) {
		case "blank":
		case "dd":
			// console.log("Matching question type not supported in JB");
			// Add to manual edits log
			JB_Question.Question_Comp[0].question += '[[Matching q-type. NEEDS EDIT.]]';
			lessonBuilder.editLog[`${lessonBuilder.lesson_id}`].push(`${lessonBuilder.currentFileName} has a matching question that needs to be revised. Look for "[[Matching q-type. NEEDS EDIT.]]" in ${lessonBuilder.currentFileName}.js. Refer to ${lessonBuilder.currentPage.title} in chapter ${lessonBuilder.currentPage.path.replace(/.*?chapter(\d+)\\page\d*\.xhtml/, '$1')} of the EPUB to see the question.`);
			
			skip = true;
			break;

		case "mc":
			JB_Question.Question_Comp[0].Question_type = "1";
			break;

		case "ms":
			JB_Question.Question_Comp[0].Question_type = "2";
			break;
	}

	// question image
	if (lessonBuilder.prevSnippet == "question") {
		JB_Question.Question_Comp[0].image = "";
	}
	
	// question stem
	// if stem is wrapped in div, stem has multiple paras
	if (question.querySelector('div.stem-cont')) {
		let stemParas = slice(question.querySelectorAll('p.q-stem'));
		JB_Question.Question_Comp[0].question += stemParas[stemParas.length - 1];

		for (let i = 0; i < stemParas.length - 1; i++) {
			JB_Question.Question_Comp[1].paragraph_top_text[i] = { "paragraph_top": stemParas[i].innerHTML }
		}
	}
	// single q-stem-static para
	else if (question.querySelector("p.q-stem-static")) {
		JB_Question.Question_Comp[0].question += question.querySelector("p.q-stem-static").innerHTML;
	}

	// stem para is classless
	else {
		let paras = slice(question.querySelectorAll('p'));
		let classlessPara = [];

		for (let para of paras) {
			if (para.className == '') {
				classlessPara.push(para);
			}
		}

		if (classlessPara.length == 1) {
			JB_Question.Question_Comp[0].question = classlessPara[0].innerHTML;
		}
		else {
			console.log('\n\n +++ Can\'t find a stem +++ \n\n');
		}
	}
	let choices = slice(question.querySelector(".choices-static").children);

	// collect CR and feedback
	// from end of mod answer key
	// or from question div if from a widget

	// question choices
	for (let i = 0; i < choices.length; i++) {
		let choiceObj = {
			q_answer: choices[i].innerHTML,
			true_false: "",
			q_feedback: ""
		};

		if (answerKey) {
			choiceObj.true_false = answerKey.crs[i];
			if (answerKey.feedback.length == choices.length) {
				choiceObj.q_feedback = answerKey.feedback[i];
			}
			else if (answerKey.feedback.length == 1) {
				JB_Question.Question_Comp[5].correct_remediation = answerKey.feedback[0];
				JB_Question.Question_Comp[5].incorrect_remediation = answerKey.feedback[0];
			}
		}

		
		JB_Question.Question_Comp[4].question_answers.push(choiceObj);
	}

	// TODO: alternate background color if
	// prev snippet is also a questions
	if (lessonBuilder.prevSnippet == 'question') {

	}

	lessonBuilder.prevSnippet = "question";

	// if (skip) {
	// 	return;
	// } else {
		return JB_Question;
	// }
}

function buildWidget() {
	let widgetNum = `${lessonBuilder.chapter}-${lessonBuilder.widgets}`;
	let widgetNumRE = new RegExp(widgetNum)
	let widgetPath = `${lessonBuilder.modPath}js\\widgets`;
	let widgetFolders = fs.readdirSync(widgetPath);

	for (let widgetFolder of widgetFolders) {
		// if it's a directory and it matches the widget number
		if (fs.lstatSync(`${widgetPath}\\${widgetFolder}`).isDirectory() && widgetNumRE.test(widgetFolder)) {
			// read and beautify conten)ts
			let widgetContents = fs.readFileSync(`${widgetPath}\\${widgetFolder}\\index.html`, "utf8");
			widgetContents = pretty(widgetContents);
			let widgetJS = fs.readFileSync(`${widgetPath}\\${widgetFolder}\\js\\interactive.js`, 'utf8');
			let crArrayMatch = widgetJS.match(/var answers = \[[^\]]+\];/g);
			let crArray = crArrayMatch[0].replace(/var answers = \[([^\]]+)\];/, '$1').split(', ');
			// remove line breaks and extra spacing
			widgetContents = widgetContents.replace(/[\t\r\n] +/g, " ");
			widgetContents = widgetContents.replace(/[\t\r\n]/g, "");
			widgetContents = widgetContents.replace(/[ ]{2,}/g, "");

			// convert to DOM
			const dom = new JSDOM(widgetContents);
			let doc = dom.window.document;

			// some widgets have leadin text for qs
			let leadinText = (doc.querySelector('p.leadin')) ? doc.querySelector('p.leadin').innerHTML.replace(/…/, ', ') : '';

			// get answer choices
			let answerChoices = processWidgetAC(doc);
			// get all questions			
			let questions = slice(doc.querySelectorAll('div.question'));

			let questionSnippets = [];
			for (let i = 0; i < questions.length; i++) {
				// set question type attr
				questions[i].setAttribute('data-qtype', 'mc');
				// update question statement with leadin
				questions[i].querySelector('p.statement').innerHTML = `${leadinText}${questions[i].querySelector('p.statement').innerHTML}`;
				// update classes so buildQuestion knows what to do
				questions[i].querySelector('p.statement').classList.add('q-stem-static');
				questions[i].querySelector('ul.choices').classList.add('choices-static');
				let choices = slice(questions[i].querySelector('ul.choices').children);

				// add answer choices to choices UL
				// currently they just use a thumbs up/down image
				for (let i = 0; i < choices.length; i++) {
					choices[i].innerHTML = answerChoices[i];
				}

				// save crs
				let crs = [ false, false ];
				crs[parseInt(crArray[i])] = true;

				// save feedback
				let feedback = '';
				if (questions[i].querySelector('p.feedback')) {
					feedback = questions[i].querySelector('p.feedback').innerHTML.replace(/<strong>.*?<\/strong>\s?/, '');
				}
				else if (questions[i].querySelector('div.feedback')) {
					feedback = questions[i].querySelector('div.feedback').innerHTML.replace(/<strong>.*?<\/strong>/, '');
					feedback = feedback.replace(/<\/?ul>/g, '');
					feedback = feedback.replace(/<p>/g, '');
					feedback = feedback.replace(/<\/(?:p|li)>/g, '<br/>');
					feedback = feedback.replace(/<li>/g, '&#8226;');
				}

				//let crs = processCRs(answerChoices, feedback);

				let answerKey = {
					crs: crs,
					feedback: [
						feedback
					]
				};
				questionSnippets.push(buildQuestion(questions[i], answerKey));
				
			}

			return questionSnippets;
		}
	}


}

function buildDivider(contHeight, width, contTopMargin, style, dividerHeight, dividerColor, dividerTopMargin) {
	lessonBuilder.prevSnippet = 'divider';
	let JB_Divider = JB.JB_Divider();
	JB_Divider.Divider[1].height = (contHeight) ? contHeight : JB_Divider.Divider[1].height;
	JB_Divider.Divider[1].width = (width) ? width : JB_Divider.Divider[1].width;
	JB_Divider.Divider[2].top_margin = (contTopMargin) ? contTopMargin : JB_Divider.Divider[2].top_margin;
	JB_Divider.Divider[5].Line_Style = (style) ? style : JB_Divider.Divider[5].Line_Style;
	JB_Divider.Divider[5].Line_height = (dividerHeight) ? dividerHeight : JB_Divider.Divider[5].Line_height;
	JB_Divider.Divider[5].Line_Color = (dividerColor) ? dividerColor : JB_Divider.Divider[5].Line_Color;
	JB_Divider.Divider[5].top_margin = (dividerTopMargin) ? dividerTopMargin : JB_Divider.Divider[5].top_margin;

	return JB_Divider;

}

function buildParaListArr(pageEl, containsList) {
	let currentEl = pageEl;
	let elArray = [currentEl];

	// used for splice in calling function
	let j = 0;
	// check if element has next sibliing
	while (currentEl.nextElementSibling) {
		// element is list or paragraph
		if (/(P|UL|OL)/.test(currentEl.nextElementSibling.tagName)) {
			elArray.push(currentEl.nextElementSibling);
			currentEl = currentEl.nextElementSibling;

			// helps determine if we need to
			// build a para or list snippet
			if (/(UL|OL)/.test(currentEl.tagName) && containsList == false) {
				containsList = true;
			}
			else if (containsList == true) {
				elArray.pop();
				break;
			}
			j++;
		} else {
			break;
		}
	}

	return [j, containsList, elArray];
}
