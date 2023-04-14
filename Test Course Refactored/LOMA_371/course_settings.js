//╔═══════════════════════════════════════════════════════════════════════════════════╗
//║ -------<( Portal Setup File )>-------                                             ║
//╚═══════════════════════════════════════════════════════════════════════════════════╝
//////////////////////////////////////////////////////////////////////////////////////
var course_settings = {
	Portal_Setup: {
		//COURSE_TYPE = hioc || hybrid || pdf || shortcourseA || demo-hioc || demo-hybrid || demo-pdf || demo-shortcourseA || immersion || more???
		Course_Type: "demo-hioc",

		Course_Number: "371", //"NY Reg 187",//
		Course_Folder: "LOMA_371", //LOMA_302, NY_Reg_187
		Course_Name: "LOMA 371", //"NY Reg 187",//"LOMA 361", // PLEASE KEEP THIS SAME FORMAT --> "LOMA 361", "SRI 111", etc !!!!

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
		Course_Title: "Risk Management and Product Development for Life Insurance Companies",

		//HYBRID
		About: {
			Infographic: "371-infographic.png",
			Alt_Text: "An infographic describing course content by chapters using bulleted items"
		},

		Hero_Image: "LOMA_371_Portal.jpg",

		Welcome_text: {
			Intro_Copy: [
				"<emLOMA 371—Risk Management and Product Development for Life Insurance Companies</em>—discusses how insurance companies approach the processes of risk management and product development, as well as how the presence of risk informs both general product development and technical product design.",

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
			Title: "Risk Management",

			Image: "",

			Paragraph: "<b>Module 1</b> discusses the various risks that insurers face, and outlines the steps that insurers take to manage those risks. You’ll learn about the actuarial function, about solvency standards, and about risk management strategies. Finally, you’ll lear about financial modeling and its role in risk management and product design.",

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
			Title: "The Product Development Process",

			Image: "",

			// If HIOC, list of leaning objectives.
			// If Hybrid/PDF, list of chapters.
			Paragraph: "<b>Module 2</b> describes the process of developing products from inception to introduction and beyond. You’ll learn how insurance companies generate and assess ideas for new products, how they plan to develop these products, and how they analyze a product’s potential success. You’ll also learn about the process of technical product design, about the steps necessary to introduce a product to market, and about monitoring a product that has been introduced.",

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
			Title: "Factors Considered in Technical Product Design",

			Image: "",

			Paragraph: "<b>Module 3</b> details many of the factors that influence a product’s technical design. You’ll learn how insurers calculate potential investment earnings and modify assumptions to ensure the best chance of a new product being profitable. You’ll also learn about mortality assumptions and how mortality affects the design of both life insurance and annuity products. Finally, you’ll learn about operating expenses and policyholder behavior and the methods insurers use to anticipate these factors in technical product design.",

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
			Title: "Technical Product Design for Life Insurance and Annuity Products",

			Image: "",

			Paragraph: "b>Module 4</b> goes into greater detail about the specific factors and techniques of technical design based on the type of products. First, you’ll learn about how insurers determine the cost of benefits and premium structures of life insurance products. Then, you’ll learn about the various types of annuity products, the benefits and payout options they provide, and the riders that may further influence an annuity product’s design.",

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
