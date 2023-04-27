//╔═══════════════════════════════════════════════════════════════════════════════════╗
//║ -------<( Portal Setup File )>-------                                             ║
//╚═══════════════════════════════════════════════════════════════════════════════════╝
//////////////////////////////////////////////////////////////////////////////////////
var course_settings = {
	Portal_Setup: {
		//COURSE_TYPE = hioc || hybrid || pdf || shortcourseA || demo-hioc || demo-hybrid || demo-pdf || demo-shortcourseA || immersion || more???
		Course_Type: "demo-hioc",

		Course_Number: "357", //"NY Reg 187",//
		Course_Folder: "LOMA_357", //LOMA_302, NY_Reg_187
		Course_Name: "LOMA 357", //"NY Reg 187",//"LOMA 361", // PLEASE KEEP THIS SAME FORMAT --> "LOMA 361", "SRI 111", etc !!!!

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
		Course_Title: "Institutional Investing: Principles and Practices",

		//HYBRID
		About: {
			Infographic: "357-InfoGraphic.png",
			Alt_Text: "An infographic describing course content by chapters using bulleted items"
		},

		Hero_Image: "LOMA357_Portal_1367394132.jpg",

		Welcome_text: {
			Intro_Copy: [
				"<em>LOMA 357&mdash;Institutional Investing: Principles and Practices</em>&mdash;introduces students to basic investment principles and the \"why\" and \"how\" of institutional investing. Students will learn about institutional investment objectives and explore the institutional investment process. In addition, students will gain an understanding of how a life insurer’s investment function manages investments to support the company’s products and solvency.",

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
			Title: "The Basics of Investing",

			Image: "",

			Paragraph: "<b>Learn the fundamental investment concepts.</b> Module 1 introduces you to the basic investment concepts, basic and advanced investment vehicles, the roles for participants in capital markets, and all you need to know about investment returns and various investment-related risks.",

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

				{ MLP_text: "" }
			]
		},
		//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
		//-------<( Module 2 )>-------				//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
		{
			Title: "Planning in Institutional Investing",

			Image: "ACS101_M2.png",

			// If HIOC, list of leaning objectives.
			// If Hybrid/PDF, list of chapters.
			Paragraph: "<b>Explore how institutional investors plan their investing practices.</b> Module 2 explains the goals of institutional investing and describes how investors create investment policy statements. In addition, the module describes investment objectives and investment constraints for insurance companies. Finally, you’ll learn how insurance companies use enterprise risk management (ERM) and asset-liability management (ALM) to analyze and address investment-related risks.",

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

				{ MLP_text: "" }
			]
		},
		//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
		//-------<( Module 3 )>-------			//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
		{
			Title: "The Institutional Investing Process",

			Image: "",

			Paragraph: "<<b>Walk through the institutional investing process.</b> Module 3 describes how institutional investors analyze asset classes, determine a portfolio’s asset allocation, and evaluate securities and funds. In addition, you’ll learn how institutional investors manage specific risks in their portfolios and the operational controls they employ. Finally, you’ll learn why investment professionals monitor their portfolios and how they measure and report on the portfolio’s performance.",

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
