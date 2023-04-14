//╔═══════════════════════════════════════════════════════════════════════════════════╗
//║ -------<( Portal Setup File )>-------                                             ║
//╚═══════════════════════════════════════════════════════════════════════════════════╝
//////////////////////////////////////////////////////////////////////////////////////
var course_settings = {
	Portal_Setup: {
		//COURSE_TYPE = hioc || hybrid || pdf || shortcourseA || demo-hioc || demo-hybrid || demo-pdf || demo-shortcourseA || immersion || more???
		Course_Type: "demo-hioc",

		Course_Number: "311", //"NY Reg 187",//
		Course_Folder: "LOMA_311", //LOMA_302, NY_Reg_187
		Course_Name: "LOMA 311", //"NY Reg 187",//"LOMA 361", // PLEASE KEEP THIS SAME FORMAT --> "LOMA 361", "SRI 111", etc !!!!

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
		Course_Title: "Business Law for Insurance Professionals",

		//HYBRID
		About: {
			Infographic: "LOMA_361_InfoGraphic.jpg",
			Alt_Text: "An infographic describing course content by chapters using bulleted items"
		},

		Hero_Image: "ACS_101_hero.png",

		Welcome_text: {
			Intro_Copy: [
				"LOMA 311—<i>Business Law for Insurance Professionals</i>—provides a basic knowledge of the legal and regulatory environment surrounding the life insurance industry. Students will gain more awareness of potential legal and regulatory issues that may arise as they do their jobs. In addition, students will gain better understanding of important legal and regulatory challenges that affect the life insurance industry. Select <b>About</b> for a course overview.",

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
			Title: "Life Insurance Companies and Legal Issues",

			Image: "",

			Paragraph: "<b>Learn the basics about legal systems and how they affect life insurance companies. Module 1</b> 1 explains primary sources of law, types of legal systems, and the organization of federal and court systems in the United States. In addition, this module describes civil actions, tort law, and the methods that courts use to resolve disputes. Finally, you’ll learn about the legal requirements that apply to life insurance companies, the legal characteristics of corporations, and the antitrust, consumer protection, and nondiscrimination laws and regulations that a life insurer must obey.",

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
			Title: "Areas of Business Law",

			Image: "ACS101_M2.png",

			// If HIOC, list of leaning objectives.
			// If Hybrid/PDF, list of chapters.
			Paragraph: "<b>Learn about the laws that affect a company’s day-to-day business. Module 2</b> explains contract law, from the various types of contracts to the requirements for the formation of a valid contract and the various remedies and legal defenses that apply to a breach of contract. The module also describes agency laws that regulate the relationship between a principal and an agent. Finally, we explore property law and ownership rights, including the various ways that ownership rights can transfer from one party to another.",

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
			Title: "Regulation of the Life Insurance Business",

			Image: "",

			Paragraph: "<b>Explore the regulatory environment of the life insurance industry. Module 3</b> explains the operation of state and federal regulation and the methods regulators use to monitor and guide insurers. You’ll also learn about common state regulatory requirements, electronic commerce laws, and measures to detect and prevent insurance fraud. Finally, we’ll explore the regulations and contract laws that govern group life insurance and retirement plans.",

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
