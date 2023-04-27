//╔═══════════════════════════════════════════════════════════════════════════════════╗
//║ -------<( Portal Setup File )>-------                                             ║
//╚═══════════════════════════════════════════════════════════════════════════════════╝
//////////////////////////////////////////////////////////////////////////////////////
var course_settings = {
	Portal_Setup: {
		//COURSE_TYPE = hioc || hybrid || pdf || shortcourseA || demo-hioc || demo-hybrid || demo-pdf || demo-shortcourseA || immersion || more???
		Course_Type: "demo-hioc",

		Course_Number: "361", //"NY Reg 187",//
		Course_Folder: "LOMA_361", //LOMA_302, NY_Reg_187
		Course_Name: "LOMA 361", //"NY Reg 187",//"LOMA 361", // PLEASE KEEP THIS SAME FORMAT --> "LOMA 361", "SRI 111", etc !!!!

		// Requirements for entering the course
		showTerms: true,
		showIntroVideo: true,

		// resources
		Lesson_Summaries: false,
		Add_Docs: false,
		Answer_Key: false,
		Course_Glossary: false,
		Study_Plan: true,
		Expert_Videos: false,
		Library_Videos: true,
		HasExitVideo: false,

		// translations
		isTranslated: "false",
		course_locale: "en-US", // en-US || zh-CN (Simplified) || zh-TW (Traditional) || fr-CA

		LM_Logo: "LOMA_logo_Tagline_Reverse.png", // loma_blue.png, sri_logo_rev.png, or LLG.png
		Course_Title: "Accounting and Financial Reporting in Life Insurance Companies",

		//HYBRID
		About: {
			Infographic: "LOMA_361_InfoGraphic.jpg",
			Alt_Text: "An infographic describing course content by chapters using bulleted items"
		},

		Hero_Image: "LOMA_361_Portal1255011898.jpg",

		Welcome_text: {
			Intro_Copy: [
				"<em>LOMA 361—Accounting and Financial Reporting in Life Insurance Companies</em> describes the accounting function in life insurance companies. By taking this course, you’ll develop an understanding of the regulatory environment in which insurance accounting occurs, financial statements and reports, accounting for typical life insurer transactions, financial analysis, budgeting, and internal control and auditing.",

				'<span style="color: #CC0000;font-weight: bold;font-style:italic;">Warning:</span> If you open the course on more than one device at a time, you risk losing your progress. Make sure to Exit the course using the Exit icon <img src="includes/images/glyphicons-389-exit.png" alt=""> or the course menu in the course portal after each session.'
			]
		}

		/* */
	},
	// NOT USED IN HIOC COURSES
	CourseContentContent: {
		AnswerKeyPDF: "361-TXTPDF-19-AnswerKey.pdf",
		StudyPlanPDF: "StudyPlans.pdf",
		pdflinks: [
			{ link: "361-TXTPDF-19_M1.pdf" }, // Module
			{ link: "361-TXTPDF-19_M2.pdf" }, // Module
			{ link: "361-TXTPDF-19_M3.pdf" }, // Module
			{ link: "361-TXTPDF-19_M3.pdf" } // Module
		],
		ebooklinks: [
			{ link: "LOMA361_Module1.epub" }, // M1
			{ link: "LOMA361_Module2.epub" }, // M2
			{ link: "LOMA361_Module3.epub" }, // M3
			{ link: "LOMA361_Module3.epub" } // M3
		]
	},

	Lesson_setup: [
		//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
		//-------<( Module 1 )>-------		//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
		{
			Title: "Orientation to Accounting and Financial Reporting",

			Image: "",

			Paragraph: "<b>Learn the basics. Module 1</b> introduces you to the fundamental principles, concepts, and terminology of accounting and financial reporting in life insurance companies. You’ll also study accounting regulation and monitoring, as well as the different types of financial statements and reports.",

			// If HIOC, list of leaning objectives.
			// If Hybrid/PDF, list of chapters.
			List: [
				{ List_info: "" },
				{ List_info: "" },
				{ List_info: "" },
				{ List_info: "" },
				{ List_info: "" },
				{ List_info: "" }
			],

			// If HIOC, list of lesson descriptions.
			// If Hybrid/PDF, can be blank. But DO NOT DELETE! 
			// The Portal Engine expects these to exist.
			// If Hybrid/PDF, the number of these should match 
			// the number of Chapters in the module.
			lesson_paragraph: [
				{ MLP_text: "" },

				{ MLP_text: "" },

				{ MLP_text: "" },

				{ MLP_text: "" }
			]
		},
		//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
		//-------<( Module 2 )>-------				//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
		{
			Title: "Major Accounts and Financial Ratios",

			Image: "ACS101_M2.png",

			// If HIOC, list of leaning objectives.
			// If Hybrid/PDF, list of chapters.
			Paragraph: "<b>Find out how life insurers report their financial information to meet the needs of their external users. In Module 2,</b> you’ll see how they do this through the field of accounting known as financial accounting, in which an insurer produces financial statements—summaries of monetary events and transactions. You’ll also learn how an insurer can use financial ratio analysis to assess its financial condition or performance.",

			List: [
				{ List_info: "" },
				{ List_info: "" },
				{ List_info: "" },
				{ List_info: "" },
				{ List_info: "" },
				{ List_info: "" }
			],

			// If HIOC, list of lesson descriptions.
			// If Hybrid/PDF, can be blank. But DO NOT DELETE! 
			// The Portal Engine expects these to exist.
			// If Hybrid/PDF, the number of these should match 
			// the number of Chapters in the module.
			lesson_paragraph: [
				{ MLP_text: "" },

				{ MLP_text: "" },

				{ MLP_text: "" },

				{ MLP_text: "" },

				{ MLP_text: "" },

				{ MLP_text: "" },

				{ MLP_text: "" }
			]
		},
		//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
		//-------<( Module 3 )>-------			//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
		{
			Title: "Management Accounting, Internal Control, and Auditing",

			Image: "",

			Paragraph: "<b>Discover how the internal users of a life insurance company analyze the company’s financial information.</b> You’ll learn in <b>Module 3</b> how managers and other internal users apply the tools of management accounting to evaluate information and plan for the future. Plus, you’ll become acquainted with internal control and auditing.",

			// If HIOC, list of leaning objectives.
			// If Hybrid/PDF, list of chapters.
			List: [
				{ List_info: "" },
				{ List_info: "" },
				{ List_info: "" },
				{ List_info: "" }
			],

			// If HIOC, list of lesson descriptions.
			// If Hybrid/PDF, can be blank. But DO NOT DELETE! 
			// The Portal Engine expects these to exist.
			// If Hybrid/PDF, the number of these should match 
			// the number of Chapters in the module.
			lesson_paragraph: [
				{ MLP_text: "" },

				{ MLP_text: "" },

				{ MLP_text: "" },

				{ MLP_text: "" },

				{ MLP_text: "" }
			]
		},
		//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
		//-------<( Module 4 )>-------			//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
		{
			Title: "Regulations and Controls",

			Image: "",

			Paragraph: "<b>Learn about the regulation of the insurance business and how financial services companies uphold ethical standards related to their investment activities.</b> Module 4 describes important securities regulations, entities involved in securities and insurance regulation, and the primary focus of insurance regulators around the world. In addition, the module explores ethical considerations for investment professionals and the role the audit function plays in insurance company compliance.",

			// If HIOC, list of leaning objectives.
			// If Hybrid/PDF, list of chapters.
			List: [
				{ List_info: "" },
				{ List_info: "" }
			],

			// If HIOC, list of lesson descriptions.
			// If Hybrid/PDF, can be blank. But DO NOT DELETE! 
			// The Portal Engine expects these to exist.
			// If Hybrid/PDF, the number of these should match 
			// the number of Chapters in the module.
			lesson_paragraph: [
				{ MLP_text:"" },

				{ MLP_text: "" },

				{ MLP_text: "" },

				{ MLP_text: "" },

				{ MLP_text: "" }
			]
		}
	],

	Additional_Docs: [
	],

	// Immersion Materials
	Activity_Handouts: [
		// {
		// 	name: "",
		// 	doc: ""
		// }
	]


};
