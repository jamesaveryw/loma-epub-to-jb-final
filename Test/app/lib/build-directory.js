"use strict";
// requires
const fs = require("fs");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const JB = require("./JB");

module.exports = {
	startBuild: function (path, courseContents) {
		// create JB_Course, Course ID, and Modules directories
		createDir(`${path}\\JB_Course`);
		createDir(`${path}\\JB_Course\\${courseContents.course_id}`);
		createDir(`${path}\\JB_Course\\${courseContents.course_id}\\Modules`);

		// folders within each module
		for (let i = 0; i < courseContents.modules.length; i++) {
			createDir(
				`${path}\\JB_Course\\${courseContents.course_id}\\Modules\\Mod_0${
					i + 1
				}`
			);
			createDir(
				`${path}\\JB_Course\\${courseContents.course_id}\\Modules\\Mod_0${
					i + 1
				}\\audio`
			);
			createDir(
				`${path}\\JB_Course\\${courseContents.course_id}\\Modules\\Mod_0${
					i + 1
				}\\images`
			);
			createDir(
				`${path}\\JB_Course\\${courseContents.course_id}\\Modules\\Mod_0${
					i + 1
				}\\json`
			);
			createDir(
				`${path}\\JB_Course\\${courseContents.course_id}\\Modules\\Mod_0${
					i + 1
				}\\pdf`
			);
			createDir(
				`${path}\\JB_Course\\${courseContents.course_id}\\Modules\\Mod_0${
					i + 1
				}\\transcripts`
			);

			// image directories for copying
			let srcDir = `${courseContents.modules[i].path}\\EPUB\\imgs`;
			let destDir = `${path}\\JB_Course\\${
				courseContents.course_id
			}\\Modules\\Mod_0${i + 1}\\images`;
			let images = fs.readdirSync(
				`${courseContents.modules[i].path}\\EPUB\\imgs`
			);

			// copy images
			for (let image of images) {
				if (/\d+-\d+/.test(image)) {
					fs.copyFileSync(`${srcDir}\\${image}`, `${destDir}\\${image}`);
				}
			}
		}
	}
};

function createDir(path) {
	// delete directory if it already exists
	if (fs.existsSync(path)) {
		fs.rmdirSync(path, { recursive: true }, (err) => {
			if (err) {
				throw err;
			}
		});
		fs.mkdirSync(path);
	} else {
		fs.mkdirSync(path);
	}
}
