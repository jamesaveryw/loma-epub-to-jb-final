//╔═══════════════════════════════════════════════════════════════════════════════════╗
//║ -------<( Portal Setup File )>-------                                             ║
//╚═══════════════════════════════════════════════════════════════════════════════════╝
//////////////////////////////////////////////////////////////////////////////////////
var course_settings = {
	Portal_Setup: {
		//COURSE_TYPE = hioc || hybrid || pdf || shortcourseA || demo-hioc || demo-hybrid || demo-pdf || demo-shortcourseA || immersion || more???
		Course_Type: "demo-hioc",

		Course_Number: "335", //"NY Reg 187",//
		Course_Folder: "LOMA_335", //LOMA_302, NY_Reg_187
		Course_Name: "LOMA 335", //"NY Reg 187",//"LOMA 361", // PLEASE KEEP THIS SAME FORMAT --> "LOMA 361", "SRI 111", etc !!!!

		// Requirements for entering the course
		showTerms: true,
		showIntroVideo: true,

		// resources
		Lesson_Summaries: false,
		Add_Docs: true,
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
		Course_Title: "Operational Excellence for Insurance Professionals",

		//HYBRID
		About: {
			Infographic: "LOMA_335_InfoGraphic.jpg",
			Alt_Text: "An infographic describing course content by chapters using bulleted items"
		},

		Hero_Image: "ACS_101_hero.png",

		Welcome_text: {
			Intro_Copy: [
				"The insurance industry is in the midst of fundamental changes in technology, products and markets, and customer expectations. <i>LOMA 335—Operational Excellence for Insurance Professionals</i> presents the business conditions and risks unique to the life insurance industry and helps you understand how to maximize value from company operations.",

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
			Title: "People and Purpos",

			Image: "",

			Paragraph: "<b>Learn the fundamentals for managing insurance company operations. Module 1</b> introduces you to insurance company stakeholders, the four functions of management, as well as strategies for creating a strategically aligned organization in a changing operating environment. You’ll also learn about leading and motivating people individually, as well as in groups.",

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

				{ MLP_text: "" }
			]
		},
		//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
		//-------<( Module 2 )>-------				//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
		{
			Title: "Business Processes",

			Image: "ACS101_M2.png",

			// If HIOC, list of leaning objectives.
			// If Hybrid/PDF, list of chapters.
			Paragraph: "<b>Discover tools and techniques for improving insurance operations management. In Module 2,</b> you’ll learn process and project management techniques and see how they are applied in fictional insurance companies. You’ll also learn approaches for measuring and managing quality in insurance company operations.",

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

				{ MLP_text: "" }
			]
		},
		//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
		//-------<( Module 3 )>-------			//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
		{
			Title: "Decision Making",

			Image: "",

			Paragraph: "<b>Find out about effective decision making in insurance company operations. Module 3</b> presents the steps in the decision-making process, types of data needed for decision making, as well as data analysis and modeling concepts. Plus, you’ll learn about innovation and ways to spur innovative thinking during the decision-making process.",

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
		//-------<( Module 4 )>-------			//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
		{
			Title: "Sale and Performance of Products",

			Image: "",

			Paragraph: "<b>Explore the legal process of selling and performing life insurance and annuity contracts. Module 4</b> describes the sale and ownership of life insurance and annuity products, the rights available to a policyowner or contract holder, and provisions available to product owners. In addition, we explore the rights inherent to a contract, and how those rights can transfer to a third party. Finally, you’ll learn about contested life insurance policies, the remedies available to the parties to a life insurance policy, and the process of performing life insurance and annuity contracts.",

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
