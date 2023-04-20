"use strict";
const fs = require("fs");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const pretty = require('pretty');

// C:\Users\jwilhelm\Projects\EPUB to JB\Test\LOMA357
module.exports = class CourseStruct {
	constructor(epubPath) {
		let files = fs.readdirSync(epubPath);
		// if this isn't the first time running the utility for a course,
		// there might be a JB_Course file in the folder. 
		// we need to remove it from the files array.
		if (files[0] == "JB_Course") {
			files.shift();
		}

		// save course id and title
		let course_info = getCrsInfo(`${epubPath}\\${files[1]}`);

		this.course_id = course_info[0].toUpperCase();
		this.course_title = course_info[1];
		this.modules = getModules(epubPath, files);
	}
};

function slice(nodes) {
	return Array.prototype.slice.call(nodes);
}

function getCrsInfo(path) {
	// use first page to grab course info
	let fmContent = fs.readFileSync(
		`${path}\\EPUB\\xhtml\\fm\\page1.xhtml`,
		"utf8"
	);
	let idMatches = /id="([^-]+)-fm-section-1"/.exec(fmContent);
	let nameMatches = /<h1[^>]+>(.*?)<\/h1>/.exec(fmContent);

	return [idMatches[1], nameMatches[1]];
}

function getModules(path, files) {
	let modules = [];
	// save module titles from FM
	let modTitles = getModTitles(`${path}\\${files[1]}`);

	for (let i = 0; i < files.length; i++) {
		// must be a directory and have epub contents
		if (fs.lstatSync(`${path}\\${files[i]}`).isDirectory() &&
			fs.existsSync(`${path}\\${files[i]}\\EPUB\\xhtml`)) {
			let module = {
				title: modTitles[i],
				path: `${path}\\${files[i]}`,
				lessons: getLessons(`${path}\\${files[i]}\\EPUB\\xhtml`)
			};
			// set lesson info
			modules.push(module);
		}
	}

	return modules;
}

function getModTitles(path) {
	let fmContent = fs.readFileSync(
		`${path}\\EPUB\\xhtml\\fm\\page2.xhtml`,
		"utf8"
	);
	let matches = fmContent.match(
		/Module \d+: (.*?) \(Chapters? \d+(?:–|-)\d+\)/g
	);

	let modMatches = [];

	for (let match of matches) {
		let modMatch = match.replace(
			/Module \d+: (.*?) \(Chapters? \d+(?:–|-)\d+\)/,
			"$1"
		);
		modMatches.push(modMatch);
	}

	return modMatches;
}

function getLessons(path) {
	let lessons = [];
	let chapters = fs.readdirSync(path);

	// filter for folders with chapter in name
	chapters = chapters.filter(chapter => /chapter/.test(chapter));
	// alpha numberic sort
	chapters = chapters.sort((a, b) => {
		return a.localeCompare(b, undefined, {
		  numeric: true,
		  sensitivity: 'base'
		})
	  });

	for (let i = 0; i < chapters.length; i++) {
		// must be a directory and have "chapter" in folder name
		if (
			fs.lstatSync(`${path}\\${chapters[i]}`).isDirectory() &&
			/chapter\d+/.test(chapters[i])
		) {
			// first page has lesson title and
			// a list of all pages in lesson
			let lessonContents = fs.readFileSync(
				`${path}\\${chapters[i]}\\page.xhtml`,
				"utf8"
			);
			// remove line breaks and extra spacing
			lessonContents = lessonContents.replace(/[\t\r\n]/g, "");
			lessonContents = lessonContents.replace(/[ ]{2,}/g, "");

			let lesson = {
				title: lessonContents.replace(
					/.*?<title>Chapter \d+:?\s*(.*?)<\/title>.*/,
					"$1"
				),
				path: `${path}\\${chapters[i]}`,
				pages: getPages(lessonContents, `${path}\\${chapters[i]}`),
				objectives: getLOs(`${path}\\${chapters[i]}\\page1.xhtml`),
				answerKey: getAnswerKey(
					`${path}\\raw\\answer-key.xhtml`,
					chapters[i].replace(/chapter(\d+)/, "$1")
				),
				altText: getAltText(
					`${path}\\raw\\descriptions.xhtml`,
					chapters[i].replace(/chapter(\d+)/, "$1")
				)
			};

			lessons.push(lesson);
		}
	}

	return lessons;
}

function getPages(lessonContents, path) {
	let pages = [];
	let matches = lessonContents.match(
		/<li(?:[^>]+)?><a(?:[^>]+)? href="page\d+.xhtml"(?:[^>]+)?>.*?<\/a>\n*\s*<\/li>/g
	);

	for (let match of matches) {
		let pageMatch = {
			title: match.replace(
				/<li(?:[^>]+)?><a(?:[^>]+)? href="page\d+.xhtml"(?:[^>]+)?>(.*?)<\/a><\/li>/,
				"$1"
			),
			path: `${path}\\${match.replace(
				/<li(?:[^>]+)?><a(?:[^>]+)? href="(page\d+.xhtml)"(?:[^>]+)?>.*?<\/a><\/li>/,
				"$1"
			)}`
		};

		// key terms and PQs aren't included
		if (
			pageMatch.title == "Key Terms" ||
			pageMatch.title == "Practice Questions"
		) {
			continue;
		}
		// rename Objectives
		else if (pageMatch.title == "Objectives") {
			pageMatch.title = "Learning Objectives";
		}
		// rename Outline
		else if (pageMatch.title == "Outline") {
			pageMatch.title = "Introduction";
		}

		// get file contents
		let contents = fs.readFileSync(pageMatch.path, "utf8");
		contents = pretty(contents);
		// remove line breaks and extra spacing
		contents = contents.replace(/[\t\r\n] +/g, " ");
		contents = contents.replace(/[\t\r\n]/g, "");
		contents = contents.replace(/[ ]{2,}/g, "");
		let sourceMatches = contents.match(
			/<(p|caption)(?:[^>]+)?>Source:.*?<\/\1>/g
		);

		if (sourceMatches) {
			let sourceLines = [];
			for (let i = 0; i < sourceMatches.length; i++) {
				let sourceMatch = sourceMatches[i];
				
				// replace in contents
				contents = contents.replace(/(<(p|caption)(?:[^>]+)?>)Source:.*?<\/\2>/g, `$1<a class="pdf_inline_style" href="javascript:jb_src(${i})">Source</a></$2>`);
				// add source line to page object
				sourceLines.push(sourceMatch.replace(/<(p|caption)(?:[^>]+)?>Source: (.*?)<\/\1>/, '$2'));
			}
			pageMatch.sourceLines = sourceLines;
		}

		pageMatch.contents = contents;

		pages.push(pageMatch);
	}

	return pages;
}

function getLOs(path) {
	let LOs = [];
	let LOContents = fs.readFileSync(path, "utf8");
	const dom = new JSDOM(LOContents);
	let doc = dom.window.document;
	// remove line breaks and extra spacing
	// LOContents = LOContents.replace(/[\t\r\n]/g, "");
	// LOContents = LOContents.replace(/[ ]{2,}/g, "");
	let loEls = slice(doc.querySelectorAll('ul.objectives li'));
	// let matches = LOContents.match(/<li [^>]+>.*?<\/li>/g);

	for (let loEl of loEls) {
		LOs.push(
			loEl.innerHTML.replace(/<strong>.*?<\/strong>\s?(.*?)/, "$1").replace(/[\t\r\n]/g, "").replace(/[ ]{2,}/g, "")
		);
	}

	return LOs;
}

function getAnswerKey(path, chNum) {
	let key = {};
	let answerContents = fs.readFileSync(path, "utf8");
	// remove line breaks and extra spacing
	answerContents = answerContents.replace(/[ ]{2,}/g, "");
	answerContents = answerContents.replace(/(<[a-z]+)\n/g, "$1 ");
	answerContents = answerContents.replace(/[\t\r\n]/g, "");

	// convert to DOM
	const dom = new JSDOM(answerContents);
	let doc = dom.window.document;

	// get all h2s and find the right one for this lesson
	let h2s = slice(doc.querySelectorAll("h2.ch-num"));
	let currentEl;

	for (let h2 of h2s) {
		let regExp = new RegExp(`Chapter ${chNum}`);
		if (regExp.test(h2.innerHTML)) {
			currentEl = h2;
			break;
		}
	}

	// collects questions in an array
	while (currentEl.nextElementSibling) {
		// element must be div and have right class
		if (
			/(DIV)/.test(currentEl.nextElementSibling.tagName) &&
			currentEl.nextElementSibling.classList.contains(
				"question-container-static"
			)
		) {
			currentEl = currentEl.nextElementSibling;
			let qID = currentEl.id.replace(/(.*?)-key/, "$1");
			key[qID] = parseQuestion(currentEl);
		} else {
			break;
		}
	}

	return key;
}

function parseQuestion(question) {
	let answers = slice(question.querySelectorAll(".choices-static li"));
	let crs = [];
	let feedbacks = [];

	// correct answers have class 'cr'
	for (let answer of answers) {
		if (answer.classList.contains("cr")) {
			crs.push(true);
		} else {
			crs.push(false);
		}
	}

	// some feedback is individual
	// some is general
	let feedbackEl = question.querySelector(".q-feedback");
	if (/(UL|OL)/.test(feedbackEl.tagName)) {
		let indieFeedbacks = slice(feedbackEl.querySelectorAll("li"));
		for (let indieFeedback of indieFeedbacks) {
			feedbacks.push(indieFeedback.innerHTML);
		}
	} else if (/DIV/.test(feedbackEl.tagName)) {
		let feedbackStr = "";
		let feedbackParas = slice(feedbackEl.querySelectorAll("p"));
		for (let i = 0; i < feedbackParas.length; i++) {
			if (i > 0) {
				feedbackStr += `<br />${feedbackParas[i].innerHTML}`;
			} else {
				feedbackStr += feedbackParas[i].innerHTML;
			}
		}
		feedbacks.push(feedbackStr);
	} else {
		feedbacks.push(feedbackEl.innerHTML);
	}

	return {
		crs: crs,
		feedback: feedbacks
	};
}

function getAltText(path, chNum) {
	let altText = {};
	let altContents = fs.readFileSync(path, "utf8");

	// remove line breaks and extra spacing
	altContents = altContents.replace(/[ ]{2,}/g, "");
	altContents = altContents.replace(/(<[a-z]+)\n/g, "$1 ");
	altContents = altContents.replace(/[\t\r\n]/g, "");

	// convert to DOM
	const dom = new JSDOM(altContents);
	let doc = dom.window.document;

	// get all h2s and find the right one for this lesson
	let figDescs = slice(doc.querySelectorAll("div.fig-desc"));
	let currentEl;

	for (let figDesc of figDescs) {
		let regExp = new RegExp(`${chNum}-\\d+`);
		if (regExp.test(figDesc.id)) {
			altText[figDesc.id] = parseAltText(figDesc);
		}
	}

	return altText;
}

function parseAltText(altText) {
	let figNum = "";
	let title = "";
	let textArr = [];

	// some ULs are wrapped in div.figure
	if (altText.querySelector('div.figure')) {
		let figures = slice(altText.querySelectorAll('div.figure'));

		for (let figure of figures) {
			let figChildren = slice(figure.children);
			
			for (let figChild of figChildren) {
				figure.parentNode.insertBefore(figChild, figure);
			}

			figure.remove();
		}
			
	}
	let contents = slice(altText.querySelector("div.inner-content").children);

	if (altText.querySelector("p.fig-num")) {
		figNum = altText.querySelector("p.fig-num").innerHTML;
	}

	if (altText.querySelector("p.fig-title")) {
		title = altText.querySelector("p.fig-title").innerHTML;
	}

	// numbered/unnumbered figures
	if (!figNum || /figure/i.test(figNum)) {
		let paraStr = "";
		for (let content of contents) {
			if (content.tagName == "P") {
				paraStr += `${content.innerHTML}<br /><br />`;
			} 
			else if (/(UL|OL)/.test(content.tagName)) {
				let lis = slice(content.children);

				for (let li of lis) {
					paraStr += `<span style="text-indent:-1em;margin-left:1em;"• ${li.innerHTML}</span><br />`;
				}
				paraStr += "<br />";
			} 
			else { 
				paraStr += `[[NEEDS EDIT!!]]${content.outerHTML}[[NEEDS EDIT!!]]`;
			}
		}

		paraStr = paraStr.replace(/<br \/><br \/>$/, "");
		textArr.push(paraStr);
	}
	// videos
	else if (/video/i.test(figNum)) {
		for (let content of contents) {
			// add <em> to video descpription paras
			if (content.tagName == "P" && content.classList.contains("vid-desc")) {
				textArr.push(`<em>${content.innerHTML}</em>`);
			} 
			else if (content.tagName == "P") {
				textArr.push(content.innerHTML);
			}
			// build a single para for any lists
			else if (/(UL|OL)/.test(content.tagName)) {
				let paraStr = "";
				let lis = slice(content.children);

				for (let li of lis) {
					paraStr += `<span style="text-indent:-1em;margin-left:1em;"• ${li.innerHTML}</span><br />`;
				}
				textArr.push(paraStr);
			} 
			else if (content.tagName == "SPAN" && content.classList.contains('equation') && content.classList.contains('kInline')) {
				textArr.push('[[MathML equation. NEEDS EDIT!]]');
			}			
			else { //if (content.tagName == "TABLE") {
				textArr.push(`[[NEEDS EDIT!!]]${content.outerHTML}[[NEEDS EDIT!!]]`);
			}
		}
	}

	return {
		"fig-num": figNum,
		title: title,
		alt: textArr
	};
}

/*

fbItem = {
    "loma357-ch1-question-3": {
        "crs": [
            false,
            true,
            false,
            false
        ]
        "feedback": [
            "This statement is false. Because institutional investors can negotiate their trading fees with broker-dealers, the fee rates that they pay on their trades vary. In addition, their trading fee rates typically depend on the size of their trades."
        ]
    }
}
courseStructure = {
    "course_id": "LOMA357",
    "course_name": "Institutional Investing: Principles and Practices",
    "modules": [
        {
            "title": "The Basics of Investing",
            "path": "C:\Users\jwilhelm\Projects\EPUB to JB\Test\LOMA357\LOMA357_M1"
            "lessons": [
                {
                    "title": "Introduction to Investing",
                    "path": "C:\Users\jwilhelm\Projects\EPUB to JB\Test\LOMA357\LOMA357_M1\EPUB\xhtml\chapter1",
                    "pages": [
                        {
                            "title": "Learning Objectives",
                            "path": "C:\Users\jwilhelm\Projects\EPUB to JB\Test\LOMA357\LOMA357_M1\EPUB\xhtml\chapter1\page1.xhtml",
                            "contents": // html in string
                        }
                    ],
                    "objectives": [

                    ]
                }
            ]
        }
    ]
};

*/
