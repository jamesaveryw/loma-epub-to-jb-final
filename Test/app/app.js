"use strict";
// requires
const fs = require("fs");
const readline = require("readline");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const CourseStruct = require("./lib/course-structure");
const buildDirectory = require("./lib/build-directory");
const convertContent = require("./lib/convert-content");

// CL interface
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	prompt: ">>>>:"
});

// console prompts
let prompts = ["Enter file path for page to be converted:", "Enter file path:", "Unrecognized input."];

function slice(nodes) {
	return Array.prototype.slice.call(nodes);
}

(function start() {
	startPrompt();
})();

function startPrompt() {
	let epubPath;

	// C:\Users\jwilhelm\Projects\EPUB to JB\Test\TestCourse\testpage.xhtml
	// D:\LOMA\EPUB to JB\EPUB to JB\Test\LOMA357

	// recursively ask for path until path is valid
	var recursiveReadPath = function () {
		rl.question(`${prompts[1]}\n>>>>: `, (answer) => {
			try {
				if (fs.existsSync(answer.trim())) {
					epubPath = answer.trim();
					// use path to create course structure
					let courseContents = new CourseStruct(epubPath);

					// build course directory (this includes moving images from EPUBs to course)
					buildDirectory.startBuild(epubPath, courseContents);

					fs.writeFileSync(`${epubPath}\\JB_Course\\courseContents.json`, JSON.stringify(courseContents, null, 4), "utf8");

					// fs.writeFileSync(`${epubPath}\\JB_Course\\manualEditsLog.txt`, "Items that require manual edits\n", "utf8");

					// convert EPUB content
					convertContent.beginConversion(epubPath, courseContents);
				} else {
					console.log("\n\n###########\n## ERROR ##\n########### \nCan't find your file. Please confirm your file path.\n\n");
					recursiveReadPath();
				}
			} catch (e) {
				console.log("An error occured.");
				console.log(e);
			}
		});
	};

	// recursively ask for language until input is valid
	var recursiveReadLang = function () {
		rl.question(`${prompts[1]}\n>>>>: `, (answer) => {
			/*if (answer.trim().match(/[1-4]/)) {
                switch (parseInt(answer.trim())) {
                    case 1:
                        lang = "en-US";
                        break;
                    
                    case 2:
                        lang = "zh-CN";
                        break;
                    
                    case 3:
                        lang = "zh-TW";
                        break;
                    
                    case 4:
                        lang = "fr-CA";
                        break;
                }
                readExcel(excelPath, lang);
            }
            else {
                console.log(`\n\n###########\n## ERROR ##\n########### \nPlease enter a number (1-4).\n\n`)
                recursiveReadLang();
            }*/
		});
	};

	// call first recursive question call
	recursiveReadPath();
}
