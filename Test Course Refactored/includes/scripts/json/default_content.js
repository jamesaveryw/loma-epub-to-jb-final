var default_content = {
	"en-US": {
		Labels: {
			about: "About",
			accept: "Accept",
			activityHandouts: "Activity Handouts",
			additionalDocs: "Additional Docs",
			additionalDocuments: "Additional Documents",
			answerKey: "Answer Key",
			autoCompleteHint: "When autocomplete results are available use up and down arrows to review and enter to select.",
			back: "Back",
			backToTop: "Back to Top",
			bCancel: "Cancel",
			bClose: "Close",
			bNo: "No",
			bOK: "OK",
			bookmark: "Bookmark",
			bYes: "Yes",
			Chapter: "Chapter",
			chapAbbr: "Ch.",
			comments: "Comments",
			complete: "Complete",
			completed: "Completed",
			Contact: "Contact",
			courseComplete: "Course complete",
			courseContent: "Course Content",
			courseProgress: "Course Progress",
			courseGlossary: "Course Glossary",
			currentStatus: "Current Status:",
			dashboard: "Dashboard",
			ebook: "E-book",
			email: "Email",
			english: "English",
			ereaderInstall: "E-reader Installation and Setup",
			exam: "Exam",
			examCompleted: "Exam Completed",
			examExp: "Exam Experience",
			examLocked: "Exam Locked",
			examPrep: "Exam Prep",
			exit: "Exit",
			expertVideos: "Expert Videos",
			failCloseBtn: "Return to LOMA Learning",
			flip: "Flip",
			flipCard: "Flip Card",
			flipCardNum: "Flip Card [[x]] of [[y]]",
			front: "Front",
			gettingStarted: "Getting Started",
			glossary: "Glossary",
			gotoBookmark: "Go to Bookmark",
			help: "Help",
			imageDescription: "Image Description",
			incomplete: "Incomplete",	
			integrity: "Integrity Statement",
			home: "Home",
			lesson: "Lesson",
			lessonNum: "Lesson {{default_content.numbers[lsn-index]}}",
			lessonComplete: "Lesson Complete",
			lessonSummaries: "Lesson Summaries",
			letsReview: "Let\'s Review",
			loginID: "Login ID",
			menu: "Menu", // need translations
			mod: "Mod",
			module: "Module",
			moduleExam: "Module {{default_content.numbers[mod-index]}} Exam",
			moduleNum: "Module {{default_content.numbers[mod-index]}}",
			moduleLesson: "Module {{default_content.numbers[mod-index]}}, Lesson {{default_content.numbers[lsn-index]}}",
			myDashboard: "My Dashboard",
			name: "Name",
			nextPage: "Next Page",
			noResults: "No results found",
			page: "Page {{pg-num}} of {{pg-total}}",
			participantWorkbook: "Participant Workbook",
			pdf: "PDF",
			practice: "Practice",
			practiceQuestions: "Practice questions",
			prevPage: "Previous Page",
			privacyPolicy: "Privacy Policy",
			ReportErrorBtn: "Report Error",
			returnToCrs: "Return to Course",
			resources: "Resources",
			questionPage: "Question [[x]] on Page [[y]]",
			sampleExam: "Sample Exam",
			sampleExams: "Sample Exams",
			search: "Search",
			selectToFlip: "Select to flip",
			SelectToGoToModule: "Select to go to Module {{default_content.numbers[mod-index]}}",
			SelectToGoDirectlyToALessonExam: "Select to go directly to a lesson/exam",
			sessionMaterials: "Session Materials",
			skipToMain: "Skip to main content",
			Start: "Start",
			startExam: "Start Exam",
			startOver: "Start Over",
			studyExp: "Study Experience",
			studyPlan: "Study Plan",
			survey: "Survey",
			submit: "Submit",
			suggestions: "Suggestions",
			tableOfContents: "Table of Contents",
			termsOfUse: "Terms of Use",
			TermsOfUseBtn: "Terms of Use Agreement",
			Transcript: "Transcript",
			Video: "Video",
			viewLesson: "View Lesson",
			viewPages: "Please view all the material on page(s) ",
			videoLibrary: "Video Library",
			welcome: "Welcome",
			WelcomeVideoBtn: "Welcome Video",
			whatDoYouThink: "What do you think?",
			youLeftOnPage: "You left on page ",
			YouMustAccept: "You must accept the above Agreement to use this Course Portal."
		},
		numbers: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],

		Alerts: {
			introVidTerms: {
				Body: "<p><strong>Welcome, {{sFirstname||default_content.Labels.name}}.</strong> To begin this training, you must complete the two items below.</p>",
				Buttons: ["WelcomeVideoBtn", "TermsOfUseBtn"]
			},

			examComplete: {
				Body: "<p><strong>This exam has been completed.</strong></p>",
				Buttons: ["clsBtn"]
			},

			pleaseComplete: {
				Body: "<p><strong>Please complete all lessons in order to enable the exam link.</strong></p>",
				Buttons: ["clsBtn"]
			},

			bookmark: {
				Header: "Bookmark",
				Body: "<p>You left on page {bmNumber}</p>",
				Buttons: ["gotoBookmark", "startOver"]
			},

			notconnected: {
				Header: "Something went wrong",
				Body: '<p><strong>Please tell us by using the button below.</strong></p><p><strong>Then, close the course and try again.<br>If the problem persists, please contact us at <a href="mailto:education@loma.org">education@loma.org</a></strong></p>',
				Buttons: ["ReportErrorBtn"]
			},

			integrityIncomplete: {
				Header: "Acceptance of the entire Integrity Statement is required.",
				Body: '<p><strong>You must accept all points of the Integrity Statement.<br>If you do not accept the entire Integrity Statement, contact LOMA at <a href="mailto: education@loma.org">education@loma.org</a> to un-enroll for this course.</strong></p>',
				Buttons: ["clsBtn"]
			},

			HaveEreader: {
				Body: "<p><strong>Do you already have a supported e-reader installed?</strong></p>",
				Buttons: ["yesBtn", "noBtn"]
			},

			ContactError: {
				Header: "There was a problem sending the information.",
				Body: '<p><strong>Please check your internet connection and try again or contact us by phone at 1-800-ASK-LOMA or by email at <a href="mailto:education@loma.org">education@loma.org</a></strong></p>',
				Buttons: ["clsBtn"]
			},

			ContactSuccess: {
				Header: "Thank you!",
				Body: "<p><strong>A LOMA representative will contact you shortly.</strong></p>",
				Buttons: ["clsBtn"]
			},

			shortCourseIncomplete: {
				Header: "Sorry, you aren't done yet.",
				Body: "<p id='intro'><strong>Return to this page and click on the finish button once you have satisfied the requirements below.</strong></p><p id='pages'><strong>Please view all the material on page(s) </strong></p><div id='questions'><strong>Please answer the following questions:</strong></div>", //Created by the script... NEED TO MOVE IT SOMEWHERE THAT CAN BE TRANSLATED
				Buttons: ["clsBtn"]
			},

			demoMode: {
				Header: "Demo Mode",
				Body: "<p><strong>Access to this functionality has been disabled in this mode.</strong></p>",
				Buttons: ["clsBtn"]
			},

			copyright: {
				Header: "Notification to U.S. Copyright Office",
				Body: "<p><strong>Access to this functionality has been disabled in course files submitted to the U.S. Copyright Office.</strong></p><p><strong>A separate Copyright Application has been filed for the content normally accessed via this link.</strong></p>",
				Buttons: ["clsBtn"]
			},

			fail: {
				Header: "Sorry, you did not pass this module exam.",
				Body: '<p style="text-align:left; width: 100%; font-weight: bold;">Because this was your second attempt for this module, your learning record has been updated to show a failing grade for this course.</p><p style="text-align:left; width: 100%; font-weight: bold;">To try again, you will need to re-enroll for the course. Any progress from your previous enrollment will be lost &mdash; you will need to successfully complete all Module exams through your new enrollment to pass the course.</p><p style="text-align:left; width: 100%; font-weight: bold;">If you re-enroll within six months, you will be eligible for a discounted enrollment fee.</p> <p><strong>Please take a moment to share your feedback about this course through our End of Course Survey.</strong></p>',
				Buttons: ["surveyBtn", "failCloseBtn"]
			},

			EOMWarning: {
				Body: 'This is attempt <span class=\"alertEOMCount\">[[attemptNum]] of 2 </span> for your Module [[module]] exam. When you are ready to begin, click or tap the <span class=\"ucb\"> <span style=\"padding: .25em 1em .05em 1em; margin: auto .15em; background: #0069aa; color: #fff;border-radius: .2em;\">{{default_content.Labels.bOK}}</span> button. Otherwise, click or tap the <span style=\"padding: .25em 1em .05em 1em; margin: auto .15em; background: #0069aa; color: #fff; border-radius: .2em;\">{{default_content.Labels.bCancel}}</span> button to return to the course.',
				Buttons: ["clsBtn","cnclBtn"]
			},

			loadingEOM: {
				Body: '<p style="margin-top: 1em; margin-bottom: 2em;">Please wait while the exam loads...</p>'
			},

			loadingEOLPQ: {
				Body: '<p style=\"margin-top: 1em; margin-bottom: 2em;\">Please wait while the questions load...</p>'
			},

			loadingSE: {
				Body: '<p style=\"margin-top: 1em; margin-bottom: 2em;\">Please wait while the sample exam loads...</p>'
			}
		},

		ReportError: {
			emailTellMore: "Please tell us more here", 
            emailDoNotAlter: "PLEASE DO NOT ALTER OR DELETE THE FOLLOWING INFORMATION.", 
            emailWeNeedThisInfo: "WE NEED THIS INFORMATION TO PROPERLY DIAGNOSE THE ERROR"
		},

		ReturnTo: {
			returnToModule: "&larr; Return to Module",
			returnToLesson: "&larr; Return to Lesson",
			returnToExamPrep: "&larr; Return to Exam Prep",
			returnToHelpTopics: "&#8617; Return to Help Topics"
		},

		PlaceholderText: {
			glossarySearch: "Enter a search term here...",
			glossaryFeedback: "Sorry, no matching results",
			emailAddress: "janedoe@loma.org",
			emailDescription: "Please describe your concern or issue here..."
		},

		ContactSection: {
			Header: "Contact Us",
			Intro: '<p style="width:100%">Confused about a topic? Want clarification or more information about something you read in the course? Does something in the course seem wrong? </p>',
			Directions: "* You must fill out this form completely"
		},

		ContactWarnings: {
			requiredEmail: "Please enter an email address.",
			validEmail: "Please enter a <em>valid</em> email address.",
			requiredStudentname: "Please enter your name",
			requiredLoginID: "Please enter your login id",
			alphaLoginID: "Letters, numbers, and underscores only please",
			requiredComments: "All fields are required"
		},

		Copyright: {
			partOne: "Copyright &copy; ",
			partTwo: new Date().getFullYear(),
			partThree: ", LL Global, Inc. All Rights Reserved."
		},

		Dashboard_Text:
			"<p>This dashboard shows your progress through {{course_settings.Portal_Setup.Course_Name}}. The <b>{{course_settings.Portal_Setup.Course_Number}}</b> gauge shows how far you’ve gotten in the entire course. The <b>“M”</b> gauges show your progress through each Module.</p><p>Select any “M” gauge to see your status for the lessons and exam in that module. From this view, you can launch any of those items directly, or you can jump to the landing page for that module for an overview.</p>",

		Ebook_Dashboard_Text:
			"<p>This dashboard shows your progress through the course. The gauge shows how far you’ve gotten in the entire course. Check marks indicate which module exams you have passed and when.</p><p>Select any Module link to jump to a landing page with the content and exam for that module.</p>",

		HelpSection: {
			Header: "Help",
			Intro: '<p style="text-align: left; margin-bottom: 20px; width:100%;">Click "Portal Help" for questions about the way the course works. <br>Click on "Course Help" for answers about the content.</p>',
			helpSections: {
				courseCompleteP: "Course Completion (Proctored)",
				courseCompleteSP: "Course Completion (Self-Proctored)",
				ereaders: "E-Readers/E-Books (Proctored and Self-Proctored)",
				examCompP: "Exam Component (Proctored)",
				examCompSP: "Exam Component (Self-Proctored)",
				studyTipsP: "Study Tips (Proctored)",
				studyTipsSP: "Study Tips (Self-Proctored)",
				techReq: "Technical Requirements (Proctored and Self-Proctored)"
			},
			helpTopics: "&#8617; Help Topics"
		},

		EndOfCourse: {
			passedMsg: "Congratulations!<br/>You've completed <br/>{{course_settings.Portal_Setup.Course_Name}}!",
			shortCourseEOC: "Congratulations!<br>You completed the course!",
			whatsNextBtn: "What's Next",
			whatsNextMsg: "What’s next for your professional development? Learn more about all the educational opportunities available from LOMA.",
			surveyBtn: "Survey",
			surveyMsg: "Please take a moment to share your feedback about this course through our End of Course Survey.",
			videoMsg: "You’ve completed the first course in the FSRI program. What’s next?",
			exitBtn: "Exit the course"
		},

		EOCLinks: {
			whatsNext: "https://www.loma.org/en/professional-development/designations/flmi/#Courses",
			sriNext: "https://www.loma.org/en/professional-development/designations/fsri/",
			survey: {
				hioc: "https://www.surveymonkey.com/r/LOMAhiocEOC",
				hybrid: "https://www.surveymonkey.com/r/LOMATextBasedEOC"
			}
		},

		GettingStartedContent: {
			Header: "Getting Started",
			KotobeeReader: "Kotobee Reader",
			KotobeeFeatures: "Kotobee Reader Features and Navigation",
			AppleBooks: "Apple Books",
			AppleFeatures: "Apple Books Features and Navigation",

			IntroParagraphs: [
				'The course content is delivered via an interactive e-book using one of our free supported e-readers: <a href="https://www.kotobee.com/en/products/reader" class="kotobeeDownload" target="_blank">Kotobee Reader</a><sup >&trade;</sup> or <a href="https://itunes.apple.com/us/app/apple-books/id364709193?mt=8" class="appleDownload" target="_blank">Apple Books</a><sup>&reg;</sup> (formerly iBooks; for Apple products only). Follow the steps below to install the correct e-reader on your device and download content to the e-reader:',

				'<b>Step 1:</b> Download and install an e-reader to your device(s).<br>See full details for <a href="pdf/Install-Setup.pdf" target="pdfwindow">Kotobee Reader</a> or <a href="pdf/Install-Setup.pdf" target="pdfwindow">Apple Books</a>.</p>',

				"<b>Step 2:</b> Go to each Module’s landing page to  download that Module’s e-book file (.epub) onto your e-reader.",

				"If videos do not play on your device, you can view them in the Resources section of the Course Portal.",

				'These videos explain the features of LOMA e-books using Kotobee Reader or Apple Books. To learn more, visit the <span class="helptextlink">Help</span> page.',

				'<p style="width:100%; margin-top: 30px;">The entire book is available in PDF format, though it does not contain the interactive features of the e-book.</p>'
			]
		},

		//HYBRID
		Instructions: {
			introParas: [
				// TODO: Check to make sure this renders in Hybrid/PDF course
				"Select <b>Module {{mod-num}} e-book</b> to download the content to your e-reader. Or, if you are unable to access the e-book, select <b>Module {{mod-num}} PDF</b>.",

				"The end of each chapter contains practice exam questions to check your understanding. Those questions are repeated via the <b>Practice Question</b> links below."
			],

			spParas: [
				//self-proctored
				"As a final tune-up, try the <b>Sample Exam</b>, which mimics the actual exam for this module. You can also visit <b>Exam Prep</b> for additional resources to help you prepare for the exam.",

				// TODO: Check to make sure this renders in Hybrid/PDF course
				"When you are ready to take the exam for this module, select <b>Module {{mod-num}} Exam</b>.",

				"Note – Module exams are timed, and you have only two attempts to pass each exam!"
			],

			pParas: [
				//proctored
				"You can visit <b>Exam Prep</b> for additional resources to help you prepare for the exam."
			]
		},

		Resources: {
			Header: "Resources",
			IntroParagraph: "This page contains material that you might have missed in the lessons. It is collected here for your convenience.",

			// <ul>"
			IntroLIs: [
				[
					"Lesson_Summaries",
					'<span class="boldpagelink">Lesson Summaries</span>: short pdf summaries of some of the most important points in each lesson' //hioc
				],
				[
					"Expert_Videos",
					'<span class="boldpagelink">Expert Videos</span>: Do you want to re-watch some of the Expert commentaries that appear in the course? Here they all are in one place.' //hioc
				],
				[
					"Add_Docs",
					'<span class="boldpagelink">Additional Docs</span>: additional printable documents included in the course modules' // hioc
				],
				[
					"Study_Plan",
					'<span class="boldpagelink">Study Plan</span>: Use this PDF to help you set goals for completing this course.' // hioc
				],
				[
					"Library_Videos",
					'The <span class="boldpagelink">Video Library</span> shows all of the animated figures presented in the e-book.' // ebook
				],
				[
					"Answer_Key",
					'The <span class="boldpagelink">Answer Key</span> reveals the answers – and answer choice explanations – for all of the "What do you think?" and "Let’s Review" and Practice Questions presented in the e-book.' // ebook
				],
				[
					"Course_Glossary",
					'The <span class="boldpagelink">Course Glossary</span> contains all of the key terms and definitions used in this course. Visit the LOMA website to see the complete LOMA Glossary.' // ebook
				]
			]
		},

		Exam_Prep: {
			hybrid: {
				Description: [
					"This page contains resources to help you prepare for the Module Exams.",

					'<span class="boldpagelink">Plans, Tips, and Strategies</span> to help you become test wise.',
					'<span class="boldpagelink">Practice Questions</span> test your understanding of the course content with exam-style questions from each chapter.',
					'<span class="boldpagelink">Sample Exams</span> for each module mimic the experience—time, length, and question format&mdash;of taking the actual module exams.',

					"When you are ready to take the actual exam for any module, use the links at the top of the course or in the sliding menu to the right to return to the Module landing page to launch the Module Exam.",

					'<span style="color: #CC0000;font-style:italic;">Warning:</span> If you open the course on more than one device at a time, you risk losing your progress. Make sure to Exit the course using the Exit icon <img src="includes/images/glyphicons-389-exit.png" alt=""> or the course menu in the course portal after each session.',

					"Ready to take the Module Exam? Learn more here!"
				]
			},
			pdf: {
				Description: [
					"This page contains resources to help you prepare for the Exam.",
					'<span class="boldpagelink">Plans, Tips, and Strategies</span> to help you become test wise.',
					'<span class="boldpagelink">Practice Questions</span> test your understanding of the course content with exam-style questions from each chapter.',
					'<span class="boldpagelink">The Sample Exam</span> mimics the experience—time, length, and question format&mdash;of taking the actual exam.',

					"Ready to take the Exam? Learn more here!"
				]
			},

			PlansTipsStrategy: {
				title: "Plans Tips Strategy",
				buttons: [
					{
						prepLabel: "Study Plan",
						link: "LOMA_{{course_settings.Portal_Setup.Course_Number}}_Study_Plan.pdf"
					},
					{
						prepLabel: "Study Tips",
						link: "Study_Tips-SelfProctored_2019.pdf"
					},
					{
						prepLabel: "Study Tips",
						link: "Study_Tips-Proctored_2019.pdf"
					},
					{
						prepLabel: "Policies/Procedures",
						link: "Exam_Policies_and_Procedures_(c)_2019.pdf"
					}
				]
			}
		},

		Glossary: {
			Header: "Course Glossary",
			Intro: 'Listed below are all the glossary terms, with the definitions, used in this course. Visit the LOMA website to see the full <a href="https://www.loma.org/en/professional-development/loma-glossary/" target="_blank">LOMA Glossary</a>.',
			SubIntro:
				"<em>The {{course_settings.Portal_Setup.Course_Name}} Glossary</em> Copyright &copy; " +
				new Date().getFullYear() +
				" LL Global, Inc. All rights reserved. Copying, downloading, reproducing, republishing, transmitting, or otherwise disseminating this content in any form or by any means, electronic or mechanical, without permission from LL Global is a violation of U.S. federal law and international law."
		},

		Session_Materials: {
			IntroParagraph: "Please print the Activity Handouts. The Participant Workbook is fillable and printable, so you may choose to download it to your device using Acrobat Reader, or to print a hard copy prior to the start of the first session."
		},

		EntirePDF: "Entire book PDF",
		EntirePDFtoc: "Entire Table of Contents",
		Exam_Dialog_Paragraph: "You must complete all lessons in this module to unlock the exam."
	},

	"fr-CA": {
		Labels: {
			about: "À propos de ce cours",
			accept: "Accepter",
			additionalDocs: "Documents complémentaires", //supplémentaires",
			additionalDocuments: "Documents complémentaires", //"Documents supplémentaires",
			answerKey: "Clé de correction",
			bCancel: "Annuler",
			bClose: "Fermer",
			bNo: "Non",
			bOK: "OK",
			bookmark: "Signet",
			bYes: "Oui",
			Chapter: "Chapitre",
			chapAbbr: "Chap.",
			comments: "Commentaires",
			completed: "Terminé",
			Contact: "Contact",
			courseComplete: "Cours terminé",
			courseContent: "Contenu du cours",
			courseProgress: "Progrès du cours",
			courseGlossary: "Glossaire du cours",
			currentStatus: "Statut actuel:",
			dashboard: "Tableau de bord",
			ebook: "E-book",
			email: "Courriel",
			english: "Anglais",
			ereaderInstall: "E-reader Installation and Setup (NEEDS TRANSLATION)",
			exam: " Examen",
			examCompleted: "Examen terminé",
			examExp: "Exam Experience (NEEDS TRANSLATION)",
			examLocked: "Examen verrouillé",
			examPrep: "Préparation à l'examen",
			exit: "Quitter",
			expertVideos: "Vidéos d'experts",
			failCloseBtn: "Retour au site d'apprentissage de LOMA",
			gettingStarted: "Démarrage",
			glossary: "Glossaire",
			gotoBookmark: "Aller au signet",
			help: "Aide",
			imageDescription: "Image Description",
			home: "Accueil",
			lesson: "Leçon",
			lessonComplete: "Leçon terminée",
			lessonNum: "Leçon {{data-index}}",
			lessonSummaries: "Résumés des leçons",
			loginID: "ID de connexion",
			menu: "Menu (NEEDS TRANSLATION)",
			mod: "Mod",
			module: "Module",
			moduleNum: "Module {{default_content.numbers[i]}}",
			moduleLesson: "Module {{data-j-index}}, Leçon {{data-index}}",
			myDashboard: "Mon tableau de bord",
			name: "Nom",
			page: "Page {{pg-num}} de {{pg-total}}",
			pdf: "PDF",
			practice: "Practice (NEEDS TRANSLATION)",
			practiceQuestions: "Questions de révision",
			privacyPolicy: "Politique sur la protection des renseignements personnels",
			ReportErrorBtn: "Report Error (NEEDS TRANSLATION)",
			resources: "Ressources",
			sampleExam: "Exemple d'examen",
			sampleExams: "Exemples d'examen",
			SelectToGoToModule: "Sélectionnez pour aller au module {{default_content.numbers[i]}}",
			SelectToGoDirectlyToALessonExam: "Sélectionnez pour aller directement à une leçon/un examen",
			Start: "Commencer",
			startExam: "Commencer l'examen",
			startOver: "Recommencer",
			studyPlan: "Study Plan",
			studyExp: "Study Plan (NEEDS TRANSLATION)",
			submit: "Envoyer",
			tableOfContents: "Table des matières",
			termsOfUse: "Conditions d'utilisation",
			TermsOfUseBtn: "Conditions d'utilisation",
			Transcript: "Transcription",
			Video: "Vidéo",
			viewLesson: "Voir la leçon",
			videoLibrary: "Vidéothèque",
			welcome: "Accueil",
			WelcomeVideoBtn: "Vidéo de bienvenue",
			youLeftOnPage: "Vous avez quitté à la page ",
			YouMustAccept: "Acceptez l'accord ci-dessus pour utiliser ce portail de cours."
		},
		numbers: ["1", "2", "3", "4", "5", "6"],

		Alerts: {
			IntroVidTerms: {
				Body: "<strong>Bienvenue, {{sFirstname||default_content.Labels.name}}.</strong> Pour commencer cette formation, vous devez compléter les deux éléments ci-dessous.",
				Buttons: ["WelcomeVideoBtn", "TermsOfUseBtn"]
			},

			examComplete: {
				Body: "Cet examen est terminé.",
				Buttons: ["clsBtn"]
			},

			pleaseComplete: {
				Body: "Veuillez compléter toutes les leçons afin d'activer le lien vers l'examen.",
				Buttons: ["clsBtn"]
			},

			bookmark: {
				Header: "Signet",
				Body: "Vous avez quitté à la page {bmNumber}",
				Buttons: ["gotoBookmark", "startOver"]
			},

			btnExamComplete: {
				Body: "Ce bouton a été désactivé. \n\nL'examen est terminé.",
				Buttons: ["clsBtn"]
			},

			btnPleaseCompleteLessons: {
				Body: "Ce bouton est désactivé. \n\nVeuillez compléter les leçons restantes de ce module pour activer le bouton Examen.",
				Buttons: ["clsBtn"]
			},

			notconnected: {
				Header: "Something went wrong",
				Body: 'Veuillez nous le signaler en utilisant le bouton ci-dessous.<br /><br /> Ensuite, fermez le cours et réessayez.<br /> Si le problème persiste, veuillez nous contacter à <a href="mailto:education@loma.org">education@loma.org</a>',
				Buttons: ["ReportErrorBtn"]
				/*
                "BtnB": "Close Window","emailTellMore": "Please tell us more here", 
                "emailDoNotAlter": "PLEASE DO NOT ALTER OR DELETE THE FOLLOWING INFORMATION.", 
                "emailWeNeedThisInfo": "WE NEED THIS INFORMATION TO PROPERLY DIAGNOSE THE ERROR"*/
			},

			DoNotAgree: {
				Header: "L'acceptation de la déclaration d'honnêteté est requise",
				Body: "Si vous n'acceptez pas la déclaration d'honnêteté, contactez LOMA au <a href=\"mailto: education@loma.org\">education@loma.org</a> pour faire annuler votre inscription à ce cours.",
				Btn: "Retour au cours"
			},

			integrityIncomplete: {
				Header: "L'acceptation de l'intégralité de la déclaration d'intégrité est requise.",
				Body: "Vous devez accepter tous les points de la déclaration d'intégrité. <br> Si vous n'acceptez pas l'intégralité de la déclaration d'intégrité, contactez LOMA à l'adresse <a href=\"mailto: education@loma.org\">education@loma.org</a> pour faire annuler votre inscription à ce cours.",
				Buttons: ["clsBtn"]
			},

			HaveEreader: {
				Body: "Une liseuse compatible est-elle déjà installée?",
				Buttons: ["yesBtn", "noBtn"]
			},

			ContactError: {
				Header: "Un problème est survenu lors de l'envoi de l'information.",
				Body: 'Vérifiez votre connexion Internet et réessayez ou contactez-nous par téléphone au 1-800-ASK-LOMA ou par courriel à l\'adresse <a href="mailto:education@loma.org">education@loma.org</a>',
				Buttons: ["clsBtn"]
			},

			ContactSuccess: {
				Header: "Merci!",
				Body: "Un représentant de LOMA vous contactera sous peu.",
				Buttons: ["clsBtn"]
			},

			shortCourseIncomplete: {
				Header: "Désolé, vous n'avez pas encore fini.",
				Body: "", //Created by the script... NEED TO MOVE IT SOMEWHERE THAT CAN BE TRANSLATED,
				Buttons: ["clsBtn"]
			},

			demoMode: {
				Header: "Mode démo",
				Body: "L'accès à cette fonctionnalité a été désactivé dans ce mode.",
				Buttons: ["clsBtn"]
			},

			copyright: {
				Header: "Notification au bureau américain des droits d'auteur",
				Body: "L’accès à cette fonctionnalité a été désactivé dans les fichiers de cours soumis à l’Office américain des droits d’auteur. Une demande distincte de droit d’auteur a été déposée pour le contenu auquel on accède normalement via ce lien.",
				Buttons: ["clsBtn"]
			},

			fail: {
				Header: "Désolé, vous n'avez pas réussi cet examen de fin de module.",
				Body: '<p style="text-align:left; width: 100%;">Étant donné qu’il s’agissait de votre deuxième tentative pour ce module, votre dossier d’apprentissage a été mis à jour afin d\'indiquer une note d’échec pour ce cours.</p><p style="text-align:left; width: 100%;">Pour réessayer, vous devrez vous réinscrire au cours. Tout progrès de votre inscription précédente sera perdu &mdash; vous devrez réussir tous les examens de fin de module lors de votre nouvelle inscription pour réussir le cours.</p><p style="text-align:left; width: 100%;">Si vous vous réinscrivez dans les six mois, vous aurez droit à des frais d’inscription réduits.</p>',
				Buttons: ["failCloseBtn"]
			}
		},

		ReturnTo: {
			returnToModule: "&larr; Retourner au module",
			returnToLesson: "&larr; Retourner à la leçon",
			returnToExamPrep: "&larr; Retourner à la préparation d'examen",
			returnToHelpTopics: "&#8617; Retourner aux sujets d'aide"
		},

		PlaceholderText: {
			glossarySearch: "Entrez un terme de recherche ici",
			glossaryFeedback: "Désolé, aucun résultat correspondant",
			emailAddress: "janedoe@loma.org",
			emailDescription: "Veuillez décrire votre préoccupation ou votre problème ici"
		},

		ContactSection: {
			Header: "Contact",
			Intro: '<p style="width:100%">Confus sur un sujet? Vous voulez des éclaircissements ou plus d\'informations sur quelque chose que vous avez lu dans le cours? Est-ce que quelque chose dans le cours vous semble incorrect? </p>',
			Directions: "* Vous devez remplir ce formulaire complètement"
		},

		ContactWarnings: {
			requiredEmail: "Veuillez entrer une adresse courriel.",
			validEmail: "Veuillez entrer une adresse courriel <em>valide</em> .",
			requiredStudentname: "Veuillez entrer votre nom",
			requiredLoginID: "Veuillez entrer votre ID de connexion",
			alphaLoginID: "Lettres, chiffres et traits de soulignement seulement s'il vous plaît",
			requiredComments: "Tous les champs sont obligatoires"
		},
		Copyright: {
			partOne: "Droits d'auteur &copy; ",
			partTwo: new Date().getFullYear(),
			partThree: ", LL Global, Inc. Tous droits réservés."
		},

		Dashboard_Text:
			"<p>Ce tableau de bord montre votre progression dans l'{{course_settings.Portal_Setup.Course_Name}}. L’indicateur <b>{{course_settings.Portal_Setup.Course_Number}}</b> indique où vous en êtes sur l’ensemble du cours. Les indicateurs <strong>« M »</strong> montrent votre progrès dans chaque module.</p><p>Sélectionnez n’importe quel indicateur <strong>« M »</strong> pour voir votre situation concernant les leçons et l’examen dans ce module. De là, vous pouvez lancer directement l’un de ces éléments, ou passer à la page d’accueil de ce module pour un aperçu général.</p>",

		Ebook_Dashboard_Text:
			"<p>This dashboard shows your progress through the course. The gauge shows how far you’ve gotten in the entire course. Check marks indicate which module exams you have passed and when.</p><p>Select any Module link to jump to a landing page with the content and exam for that module.</p> (NEEDS TRANSLATION)",

		HelpSection: {
			Header: "Aide",
			Intro: '<p style="text-align: left; margin-bottom: 20px; width:100%;">Cliquez sur "Aide du portail"pour des questions sur le fonctionnement du cours. <br>Cliquez sur "Aide du cours" pour des questions concernant le contenu du cours.</p>',
			helpSections: {
				courseCompleteP: "Achèvement du cours (surveillé)",
				courseCompleteSP: "Achèvement du cours (auto-surveillé)",
				ereaders: "Liseuses / Livres numériques (surveillés et auto-surveillés)",
				examCompP: "Élément d'examen (surveillé)",
				examCompSP: "Élément d'examen (auto-surveillé)",
				studyTipsP: "Conseils d'étude (surveillé)",
				studyTipsSP: "Conseils d'étude (auto-surveillé)",
				techReq: "Exigences techniques (surveillé et auto-surveillé)"
			}
		},
		EndOfCourse: {
			passedMsg: "Félicitations!<br>Vous avez terminé",
			shortCourseEOC: "Félicitations!<br>Vous avez terminé le cours!",
			whatsNextBtn: "Prochaines étapes",
			whatsNextMsg: "Quelle est la prochaine étape dans votre développement professionnel? En savoir plus sur toutes les possibilités d’éducation offertes par LOMA",
			surveyBtn: "Sondage",
			surveyMsg: "Veuillez prendre un moment pour partager vos commentaires sur ce cours dans notre sondage de fin de cours.",
			exitBtn: "Exit the course (needs translation)"
		},

		EOCLinks: {
			whatsNext: "https://www.loma.org/fr/professional-development/talent-mobility-suite/fellow-life-management-institute/?epslanguage=fr",
			sriNext: "https://www.loma.org/en/professional-development/designations/fsri/",
			survey: {
				hioc: "https://fr.surveymonkey.com/r/sondagedefindecours_interactifenligne",
				hybrid: "https://www.surveymonkey.com/r/LOMATextBasedEOC"
			}
		},

		IntegrityStatement: {
			Header: "Déclaration d'intégrité",
			theStatement:
				' <p>Ce cours est conçu pour améliorer vos connaissances professionnelles. Le soutien de votre entreprise pour votre participation à ce cours constitue un investissement dans votre développement professionnel. L’achèvement des cours et des désignations de LOMA représente un exploit professionnel et profite à tous les participants lorsque les normes d’honnêteté et d’intégrité sont respectées.&nbsp;Il est donc impératif que vous agissiez avec honnêteté et intégrité en vous représentant, vous et votre entreprise, lorsque vous passer les examens de ce cours.&nbsp;</p><p>En cochant les cases ci-dessous, je confirme que</p><ul class="honest"><li><label class="bContainer">Je suis inscrit à ce cours et je peux passer l\'examen suivant.<input type="checkbox" id="bIntegrity1"><span class="bCheckmark"></span></label></li><li><label class="bContainer">Je serai honnête et agirai avec intégrité dans toutes les démarches liées à l\'achèvement de ce cours et j\'atteste que&nbsp;<input type="checkbox" id="bIntegrity2"><span class="bCheckmark"></span></label><ul><li><label class="bContainer">Je ne tricherai pas aux examens et ne laisserai pas un autre étudiant tricher sur base de mon travail;<input type="checkbox" id="bIntegrity2a"><span class="bCheckmark"></span></label></li><li><label class="bContainer">Je ne vais pas acquérir ou partager indûment la connaissance du contenu d\'un examen ni en obtenir l\'accès par vol ou par tout autre moyen non autorisé;<input type="checkbox" id="bIntegrity2b"><span class="bCheckmark"></span></label></li><li><label class="bContainer">Je n\'utiliserai aucune source extérieure, y compris, mais sans s\'y limiter, du matériel d\'étude, du matériel de référence, du matériel non autorisé ou tout appareil numérique ou mobile au cours d\'un examen.<input type="checkbox" id="bIntegrity2c"><span class="bCheckmark"></span></label></li></ul></li><li><label class="bContainer">LOMA recueille régulièrement des données démographiques et de performance aux fins de projets de recherche statistique et de suivi des étudiants’&nbsp;le respect des éléments de comportement professionnel mentionnés dans cette déclaration d\'intégrité.<input type="checkbox" id="bIntegrity3"><span class="bCheckmark"></span></label></li><li><label class="bContainer">LOMA travaille en partenariat avec ses sociétés membres pour s\'assurer que tous les apprenants adhèrent aux normes d\'intégrité lors de la réalisation des examens<input type="checkbox" id="bIntegrity4"><span class="bCheckmark"></span></label></li><li><label class="bContainer">Je signalerai immédiatement toute violation présumée d\'un examen au bureau du registraire de LOMA. Toute violation de la présente déclaration d\'intégrité entraînera la perte du crédit du cours et toute personne soupçonnée de se livrer à une inconduite lors d\'un examen ou d\'une tâche dans le cadre de ce cours sera soumise à la&nbsp; <a href="#" onclick="window.open(https://www.loma.org/en/help-center/exams/exam-standards/due-process-policy/", "lomawin", "fullscreen=yes");>politique de LOMA sur le respect de la procédure officielle.</a>.<input type="checkbox" id="bIntegrity5"><span class="bCheckmark"></span></label></li></ul><div style="text-align: center;"><div class="hiocexam_btn_disabled" id="exam_btn">Commencez l\'examen!</div></div>'
		},

		GettingStartedContent: {
			Header: "Pour commencer",
			KotobeeReader: "Kotobee Reader",
			KotobeeFeatures: "Kotobee Reader Features and Navigation (NEEDS TRANSLATION)",
			AppleBooks: "Apple Books",
			AppleFeatures: "Apple Books Features and Navigation (NEEDS TRANSLATION)",

			IntroParagraphs: [
				'Le contenu du cours est offert via un livre numérique à l\'aide d\'une de nos liseuses gratuites: <a href="https://www.kotobee.com/en/products/reader" class="kotobeeDownload">Kotobee Reader</a><sup >&trade;</sup> or <a href="https://itunes.apple.com/us/app/apple-books/id364709193?mt=8" class="appleDownload">Apple Books</a><sup>&reg;</sup> (anciennement iBooks; pour les produits Apple uniquement). Suivez les étapes ci-dessous pour installer la bonne liseuse sur votre appareil et télécharger le contenu du cours sur celle-ci:</p>',

				'<b>Étape 1:</b> Téléchargez et installez la liseuse sur votre (vos) appareil(s).<br>Voir tous les détails pour <a href="pdfs/Install-Setup.pdf" target="pdfwindow">Kotobee Reader</a> ou <a href="pdfs/Install-Setup.pdf" target="pdfwindow">Apple Books</a>.', //{Kotobee Reader}  {Apple Books}

				"<b>Étape 2:</b> Rendez-vous à la page d'accueil de chaque module pour télécharger le fichier numérique de ce module (.epub) sur votre liseuse.", //{Module 1}	{Module 2}	{Module 3}

				"If videos do not play on your device, you can view them in the Resources section of the Course Portal. (NEEDS TRANSLATION)",

				'These videos explain the features of LOMA e-books using Kotobee Reader or Apple Books. To learn more, visit the <span class="helptextlink">Help</span> page.',

				'<p style="width:100%; margin-top: 30px;">Le livre entier est disponible en format PDF, mais il ne contient pas les fonctionnalités interactives du livre numérique.</p>'
			]
		},
		//HYBRID
		Instructions: {
			introParas: [
				"Sélectionnez <b>Module {{mod-index}} e-book</b> pour en télécharger le contenu sur votre liseuse.",

				"Vous trouverez à la fin de chaque chapitre des exemples de questions d'examen qui vous permettront de vérifier votre compréhension. Ces questions sont reprises dans les liens <b>Questions de révision</b> ci-dessous."
			],

			spParas: [
				"Pour une dernière mise au point, essayez l' <b>examen-type</b>, qui reproduit l'examen réel de ce module. Vous pouvez également consulter <b>Préparation à l'examen</b> pour obtenir des ressources supplémentaires destinées à vous aider à vous préparer à l'examen.",

				"Lorsque vous êtes prêt à passer l'examen de ce module, sélectionnez <b>Examen module 1</b>.",

				"Note – Les examens de fin de module sont chronométrés et vous ne disposez que de deux tentatives pour réussir chaque examen!"
			],

			pParas: ["Vous pouvez consulter <b>Préparation à l'examen</b> pour obtenir des ressources supplémentaires destinées à vous aider à vous préparer à l'examen."]
		},

		Resources: {
			Header: "Ressources",
			IntroParagraph: "Cette page contient du matériel que vous pourriez avoir oublié dans les leçons. Elle est recueillie ici pour votre commodité.",

			// <ul>"
			IntroLIs: [
				["Lesson_Summaries", '<span class="boldpagelink">Résumés des leçons</span>: courts résumés en pdf de certains des points les plus importants de chaque leçon'],

				["Expert_Videos", '<span class="boldpagelink">Vidéos d\'experts</span>: Souhaitez-vous voir à nouveau certains des commentaires d’experts qui apparaissent dans le cours? Vous les trouverez regroupés ici.'],

				["Add_Docs", '<span class="boldpagelink">Documents complémentaires</span>: documents complémentaires contenus dans les modules du cours pouvant être imprimés'],

				["Study_Plan", '<span class="boldpagelink">Study Plan</span>: Use this PDF to help you set goals for completing this course.'],

				["Library_Videos", 'La <span class="boldpagelink">Bibliothèque vidéo</span> montre toutes les figures animées présentées dans le livre numérique.'],

				["Answer_Key", 'La <span class="boldpagelink">Clé de correction</span> révèle les réponses - et des explications de choix de réponse – pour toutes les rubriques "Qu\'en pensez-vous?" et "Revoyons le sujet" et les questions de révision présentées dans le livre numérique.'],

				["Course_Glossary", 'Le <span class="boldpagelink">Glossaire du cours</span> contient tous les termes clés et les définitions utilisés dans ce cours. Visitez le site Web de LOMA pour consulter le glossaire complet de LOMA.']
			]
		},

		Exam_Prep: {
			hybrid: {
				Description: [
					"Cette page contient des ressources pour vous aider à vous préparer aux examens de fin de module.",

					'<span class="boldpagelink">Plans, astuces et stratégies</span> pour vous aider à réussir vos tests.',
					'<span class="boldpagelink"><span class="boldpagelink">Les questions de révision</span> testent votre compréhension du cours avec des exemples de questions d\'examen provenant de chaque chapitre.',
					'<span class="boldpagelink">Les exemples d\'examens</span> pour chaque module reproduisent l’expérience (durée, longueur et format des questions)&mdash;des examens de fin de module.',

					"Lorsque vous êtes prêt à passer l'examen d'un module, utilisez les liens en haut de la page ou dans le menu déroulant à droite pour revenir à la page d'accueil du module et démarrer l'examen.",

					'<span style="color: #CC0000;font-style:italic;">Attention:</span> Si vous ouvrez le cours sur plusieurs appareils à la fois, vous risquez de perdre votre progression. Assurez-vous de quitter le cours en utilisant l\'icône Quitter <img src="includes/images/glyphicons-389-exit.png" alt=""> ou le menu du portail du cours après chaque session.',

					"Prêt à passer l'examen du module? Cliquez ici pour en savoir plus!"
				]
			},
			pdf: {
				Description: [
					"Cette page contient des ressources pour vous aider à vous préparer à l'examen.",
					'<span class="boldpagelink">Plans, astuces et stratégies</span> pour vous aider réussir vos tests.',
					'<span class="boldpagelink">Les questions de révision</span> testent votre compréhension du cours  avec des exempples de questions d\'examen provenant de chaque chapitre.',
					"<span class=\"boldpagelink\">L'examen-type</span> reproduit l'expérience (durée, longueur et format des questions)&mdash;de l'examen.",

					"Prêt à passer l'examen? Cliquez ici pour en savoir plus!"
				]
			},

			PlansTipsStrategy: {
				title: "Plans Tips Strategy",
				buttons: [
					{
						prepLabel: "Study Plan",
						link: "LOMA_{{course_settings.Portal_Setup.Course_Number}}_Study_Plan.pdf"
					},
					{
						prepLabel: "Study Tips",
						link: "Study_Tips-SelfProctored_2019.pdf"
					},
					{
						prepLabel: "Study Tips",
						link: "Study_Tips-Proctored_2019.pdf"
					},
					{
						prepLabel: "Policies/Procedures",
						link: "Exam_Policies_and_Procedures_(c)_2019.pdf"
					}
				]
			}
		},

		Glossary: {
			Header: "Glossaire",

			Intro: 'Vous trouverez ci-dessous tous les termes, avec leurs définitions, utilisés dans ce cours. <!--Visitez le site Web de LOMA pour consulter le <a href="https://www.loma.org/en/professional-development/loma-glossary/" target="_blank">glossaire complet de LOMA</a>.-->',
			SubIntro:
				"<em>Glossaire du {{course_settings.Portal_Setup.Course_Name}}</em> Copyright &copy; " +
				new Date().getFullYear() +
				" LL Global, Inc. Tous droits réservés. Copier, télécharger, reproduire, republier, transmettre ou diffuser ce contenu de quelque manière que ce soit, par quelque moyen que ce soit, électronique ou mécanique, sans l'autorisation de LL Global est une violation du droit fédéral américain et du droit international."
		},

		EntirePDF: "Livre entier en PDF",
		EntirePDFtoc: "Table des matières complète",
		Exam_Dialog_Paragraph: "Vous devez compléter toutes les leçons de ce module pour déverrouiller l'examen."
	},

	"zh-CN": {
		Labels: {
			about: "关于",
			accept: "接受",
			additionalDocs: "补充文件",
			additionalDocuments: "补充文件",
			answerKey: "正确答案",
			bCancel: "取消",
			bClose: "关",
			bNo: "不是",
			bOK: "好",
			bookmark: "书签页",
			bYes: "是",
			Chapter: "章",
			chapAbbr: "章",
			comments: "评论",
			completed: "已完成",
			Contact: "联系",
			courseComplete: "课程已经圆满完成",
			courseContent: "课程内容",
			courseProgress: "航向进程",
			courseGlossary: "词汇表",
			currentStatus: "当前状态:",
			dashboard: "仪表盘",
			ebook: "电子书签",
			email: "电子邮件",
			english: "英语",
			ereaderInstall: "",
			exam: "考试",
			examCompleted: "已完成考试",
			examExp: "考试准备",
			examLocked: "考试尚待启动",
			examPrep: "考试准备",
			exit: "退出",
			expertVideos: "专家视频",
			failCloseBtn: "返回 LOMA Learning",
			gettingStarted: "准备开始",
			glossary: "词汇表",
			gotoBookmark: "返回书签",
			help: "服务台",
			home: "主页",
			imageDescription: "图像描述",
			lesson: " 课 ",
			lessonComplete: "已经完成课程",
			lessonNum: "第{{data-index}}课",
			lessonSummaries: "课程摘要",
			loginID: "用户名",
			menu: "菜单",
			mod: "单元 ",
			module: "单元 ",
			moduleNum: "第{{default_content.numbers[mod-index]}}单元",
			moduleLesson: "第{{default_content.numbers[mod-index]}}单元第{{lsn-num}}课",
			myDashboard: "我的学习进度仪表盘",
			name: "姓名",
			page: "第{{pg-num}}/{{pg-total}}页",
			pdf: "PDF",
			practiceQuestions: "练习题",
			privacyPolicy: "隐私政策",
			resources: "资源",
			sampleExam: "模拟考试",
			sampleExams: "模拟考试",
			SelectToGoToModule: "选择到第{{default_content.numbers[i]}}单元",
			SelectToGoDirectlyToALessonExam: "直达相关课程/考试",
			Start: "开始",
			startExam: "启动考试",
			startOver: "重新开始",
			studyExp: "学习体验",
			studyPlan: "学习计划",
			submit: "发送",
			tableOfContents: "目录菜单",
			termsOfUse: "使用条款",
			TermsOfUseBtn: "同意使用条款",
			Transcript: "脚本",
			Video: "视频",
			viewLesson: "视听课",
			videoLibrary: "视频集",
			welcome: "欢迎",
			WelcomeVideoBtn: "欢迎视频",
			youLeftOnPage: "您上次阅读的是第{{number}}页",
			YouMustAccept: "您必须接受上述协议才能使用本课程门户。"
		},
		numbers: ["一", "二", "三", "四", "五", "六", "七", "八", "九"],

		Alerts: {
			introVidTerms: {
				Body: "<strong>欢迎您！{{sFirstname||default_content.Labels.name}}.</strong> 为了开始本课程的学习，您必须首先完成下述两项：",
				Buttons: ["WelcomeVideoBtn", "TermsOfUseBtn"]
			},

			examComplete: {
				Body: "本考试已经完成。",
				Buttons: ["clsBtn"]
			},

			pleaseComplete: {
				Body: "请按顺序完成所有的课程内容，然后才能启动考试。",
				Buttons: ["clsBtn"]
			},

			bookmark: {
				Header: "书签页",
				Body: "您上次阅读的是第{bmNumber}页",
				Buttons: ["gotoBookmark", "startOver"]
			},

			btnExamComplete: {
				Body: "本考试已经完成，此键失效。",
				Buttons: ["clsBtn"]
			},

			btnPleaseCompleteLessons: {
				Body: "此键失效， \n\n请完成本单元的剩余课程，以启动此键。",
				Buttons: ["clsBtn"]
			},

			notconnected: {
				Header: "出问题了",
				Body: '请使用下面的按键通知我们。</p><p>然后，关闭课程，重试。<br>如果问题依然存在，请通过<a href="mailto:education@loma.org">education@loma.org</a>与我们联系',
				Buttons: ["ReportErrorBtn"]
			},

			DoNotAgree: {
				Header: "必须接受诚信声明",
				Body: '如果不接受诚信声明，请与 LOMA 联系： <a href="mailto: education@loma.org">education@loma.org</a>  退出本课程。',
				Btn: "必须接受诚信声明"
			},

			integrityIncomplete: {
				Header: "必须接受诚信声明",
				Body: '您必须接受完整性声明。<br> 如果不接受完整性声明，请与 LOMA 联系： <a href="mailto: education@loma.org">education@loma.org</a> 退出本课程。'
			},

			HaveEreader: {
				Body: "您是否已经安装了电子阅读器？",
				Buttons: ["yesBtn", "noBtn"]
			},

			ContactError: {
				Header: "发送资讯时出现问题。",
				Body: '请检查网路连接，然后重试。或者与我们联系，电话：1-800-ASK-LOMA；电子邮件： <a href="mailto:education@loma.org">education@loma.org</a>',
				Buttons: ["clsBtn"]
			},

			ContactSuccess: {
				Header: "谢谢您！",
				Body: "LOMA 的工作人员会尽快与您联系",
				Buttons: ["clsBtn"]
			},

			shortCourseIncomplete: {
				Header: "抱歉，您尚未完成。",
				Body: "", //Created by the script... NEED TO MOVE IT SOMEWHERE THAT CAN BE TRANSLATED
				Buttons: ["clsBtn"]
			},

			demoMode: {
				Header: "课程简介模式",
				Body: "课程简介模式下本功能无效",
				Buttons: ["clsBtn"]
			},

			copyright: {
				Header: "通知美国版权局",
				Body: "在美国版权局注册的本课程功能已经失效。通过此连结可以正常访问单独版权的课程内容。",
				Buttons: ["clsBtn"]
			},

			fail: {
				Header: "抱歉，您没有通过本单元的考试。",
				Body: '<p style="text-align:left; width: 100%;">因为这是您第二次参加本单元的考试，所以，您的学习记录已被更新为本课程不及格。</p><p style="text-align:left; width: 100%;">为了完成本课程，您需要重新注册该课程。 您就本课程以前的学习记录都不复存在。&mdash; 您必须通过新注册课程每个单元的考试，才能通过本课程。 </p><p style="text-align:left; width: 100%;">如果您在六个月内重新注册本课程，您就有资格享受注册费用的优惠。</p>',
				Buttons: ["failCloseBtn"]
			}
		},

		ReturnTo: {
			returnToModule: "&larr; 返回单元",
			returnToLesson: "&larr; 返回课程",
			returnToExamPrep: "&larr; 返回考试准备",
			returnToHelpTopics: "&#8617; 返回辅助主题"
		},

		PlaceholderText: {
			glossarySearch: "在此处输入欲搜索的词",
			glossaryFeedback: "抱歉，搜索无果",
			emailAddress: "janedoe@loma.org",
			emailDescription: "请在这里描述您的担忧或问题"
		},

		ContactSection: {
			Header: "请与我们联系。",
			Intro: '<p style="width:100%">对主题感到困惑不解吗？ 是否需要澄清、或有关课程内容的更多资讯？ 课程内容是否有误？ </ p>',
			Directions: "* 您必须完整填写此表格。"
		},

		ContactWarnings: {
			requiredEmail: "请输入电子邮寄地址。",
			validEmail: "请输入 <em>有效的</em> 电子邮寄地址。",
			requiredStudentname: "请填写您的姓名",
			requiredLoginID: "请输入您的登录用户名",
			alphaLoginID: "仅限于小写的字母、数字。",
			requiredComments: "所有的空格都必须填写"
		},

		Copyright: {
			partOne: "版权 &copy; ",
			partTwo: new Date().getFullYear(),
			partThree: ", LL Global, Inc. 版权所有。"
		},

		Dashboard_Text:
			'<p>此仪表板显示您学习{{course_settings.Portal_Setup.Course_Name}}的进度。<b> {{course_settings.Portal_Setup.Course_Number}} </b>指标显示您在整个课程中取得的进展。 <b>"M"</b>指标显示您在每个单元的进度。</p><p>点选 M 指标，查阅您在相关单元的学习状态。在查阅过程中，您也可以通过目录菜单，跳转到课程的其它部分。</p>',

		Ebook_Dashboard_Text: "<p>该仪表盘显示您课程的学习进度。仪表显示您在整个课程中的进度。对钩表示您已经通过的单元考试，并显示通过时间。</p><p>点击任何单元的链接，可跳转至包含该单元内容和考试的页面。</p>",

		HelpSection: {
			Header: "服务台",
			Intro: '<p style="text-align：left; margin-bottom：20px; width：100％;">点选" 课程门户服务台 "，询问课程播放方式。 <br>点选 "课程辅助"，询问课程内容。</ p>',
			helpSections: {
				courseCompleteP: "完成课程（有人监考）",
				courseCompleteSP: "完成课程（无人监考）",
				ereaders: "电子阅读器 / 电子书（有人监考和无人监考）",
				examCompP: "考试组成部分（有人监考）",
				examCompSP: "考试组成部分（无人监考）",
				studyTipsP: "学习技巧（有人监考）",
				studyTipsSP: "学习技巧（无人监考）",
				techReq: "技术要求（有人监考和无人监考）"
			}
		},

		EndOfCourse: {
			passedMsg: "祝贺！<br>您已完成。",
			shortCourseEOC: "祝贺！<br>您已完成本课程。",
			whatsNextBtn: "下一个学习目标",
			whatsNextMsg: "您专业发展的下一个目标是什么？ 深入了解LOMA所有的教育培训课程。",
			surveyBtn: "问卷调查",
			surveyMsg: "请花一点时间，通过本课程后附的问卷调查，对本课程提出您宝贵的建议。",
			videoMsg: "您已经完成了退休保障规画师（FSRI）的第一门课程。 您的下一门课程是什么？",
			exitBtn: "退出课程"
		},

		EOCLinks: {
			whatsNext: "https://www.loma.org/zh-hans/professional-development/designations/fellow-life-management-institute/?epslanguage=zh-Hans",
			sriNext: "https://www.loma.org/en/professional-development/designations/fsri/",
			survey: {
				hioc: "https://www.surveymonkey.com/r/CS_combeocsurveys_hioc",
				hybrid: "https://www.surveymonkey.com/r/LOMATextBasedEOC"
			}
		},

		IntegrityStatement: {
			Header: "诚信声明",
			theStatement:
				'<p>本课程旨在充实您的专业知识。 贵公司支持您选修本课程是对您专业发展的投资。 恪守诚实和正直的标准，学习LOMA的课程，获得专业资格认证，代表你的专业成就。所有取得专业成就的人士都会从中受益。 因此，当您参加本课程的考试时，您必须诚实、正直，这既代表您自己，也代表您的公司。 </p><p> 勾选下述方框，我同意：</p><ul class="honest"><li><label class="bContainer">我已注册本课程，所以，我有资格参加下述考试。<input type="checkbox" id="bIntegrity1"><span class="bCheckmark"></span></label></li><li><label class="bContainer">我必须恪守诚实和正直的标准，完成本课程。我保证：<input type="checkbox" id="bIntegrity2"><span class="bCheckmark"></span></label><ul><li><label class="bContainer">考试时自己不作弊，也不允许他人抄袭我的答案。<input type="checkbox" id="bIntegrity2a"><span class="bCheckmark"></span></label></li><li><label class="bContainer">我不剽窃考试内容，也不采用不正当的手段。<input type="checkbox" id="bIntegrity2b"><span class="bCheckmark"></span></label></li><li><label class="bContainer"> 参加考试时，我不夹带考试禁止的物品，包括但不限于：学习资料、参考资料、数码的或遥控的装置。<input type="checkbox" id="bIntegrity2c"><span class="bCheckmark"></span></label></li></ul></li><li><label class="bContainer">为了进行统计研究，LOMA会定期收集人口统计资料和考试成绩资料。s&rsquo; 籍此保证考生严格遵守诚信声明。<input type="checkbox" id="bIntegrity3"><span class="bCheckmark"></span></label></li><li><label class="bContainer">LOMA会与会员公司合作，确保所有的考生在完成课程考试时都遵循诚信标准。<input type="checkbox" id="bIntegrity4"><span class="bCheckmark"></span></label></li><li><label class="bContainer"> 对于违反LOMA考试规定的行为，我一定向 &rsquo;s 注册办公室及时举报。任何违反诚信声明的行为都会导致学分的丧失，任何涉事的考生都会受到 LOMA 的 <a href="https://www.loma.org/en/help-center/exams/exam-standards/due-process-policy/" target="_blank"> 处罚。</a>.<input type="checkbox" id="bIntegrity5"><span class="bCheckmark"></span></label></li></ul><div style="text-align: center;"><div class="hiocexam_btn_disabled" id="exam_btn">开始考试！</div></div>'
		},

		GettingStartedContent: {
			Header: "Getting Started",
			KotobeeReader: "Kotobee Reader",
			KotobeeFeatures: "Kotobee Reader Features and Navigation (NEEDS TRANSLATION)",
			AppleBooks: "Apple Books",
			AppleFeatures: "Apple Books Features and Navigation (NEEDS TRANSLATION)",

			IntroParagraphs: [
				'The course content is delivered via an interactive e-book using one of our free supported e-readers: <a href="https://www.kotobee.com/en/products/reader" class="kotobeeDownload" target="_blank">Kotobee Reader</a><sup >&trade;</sup> or <a href="https://itunes.apple.com/us/app/apple-books/id364709193?mt=8" class="appleDownload" target="_blank">Apple Books</a><sup>&reg;</sup> (formerly iBooks; for Apple products only). Follow the steps below to install the correct e-reader on your device and download content to the e-reader:',

				'<b>Step 1:</b> Download and install an e-reader to your device(s).<br>See full details for <a href="pdf/Install-Setup.pdf" target="pdfwindow">Kotobee Reader</a> or <a href="pdf/Install-Setup.pdf" target="pdfwindow">Apple Books</a>.</p>',

				"<b>Step 2:</b> Go to each Module’s landing page to  download that Module’s e-book file (.epub) onto your e-reader.",

				"If videos do not play on your device, you can view them in the Resources section of the Course Portal.",

				'These videos explain the features of LOMA e-books using Kotobee Reader or Apple Books. To learn more, visit the <span class="helptextlink">Help</span> page.',

				'<p style="width:100%; margin-top: 30px;">The entire book is available in PDF format, though it does not contain the interactive features of the e-book.</p>'
			]
		},

		//HYBRID
		Instructions: {
			introParas: [
				"Select <b>Module {{mod-num}} e-book</b> to download the content to your e-reader. Or, if you are unable to access the e-book, select <b>Module {{mod-num}} PDF</b>.",

				"The end of each chapter contains practice exam questions to check your understanding. Those questions are repeated via the <b>Practice Question</b> links below."
			],

			spParas: [
				"As a final tune-up, try the <b>Sample Exam</b>, which mimics the actual exam for this module. You can also visit <b>Exam Prep</b> for additional resources to help you prepare for the exam.",

				"When you are ready to take the exam for this module, select <b>Module {{mod-num}} Exam</b>.",

				"Note – Module exams are timed, and you have only two attempts to pass each exam!"
			],

			pParas: [
				//proctored
				"You can visit <b>Exam Prep</b> for additional resources to help you prepare for the exam."
			]
		},

		Resources: {
			Header: "资源",
			IntroParagraph: "本页包含您可能在课程中遗漏的资料，这是为方便您的学习而收集的。",

			IntroLIs: [
				["Lesson_Summaries", '<span class="boldpagelink">课程摘要</span>：课程中最重要的关键摘要pdf版'],

				["Expert_Videos", '<span class="boldpagelink">专家视频</span>：您是否想重新观看课程中的专家述评？ 这里是专家述评总汇。'],

				["Add_Docs", '<span class="boldpagelink">补充文件<!--附加文件--></span>：课程单元中包含的附加可打印文件'],

				["Study_Plan", '<span class="boldpagelink">学习计划</span>: 此功能可以帮助你设定完成本课程的目标。'],

				["liBRARY_Videos", '<li><span class="boldpagelink">视频库</span>显示电子书中呈现的所有视频。'],

				["Answer_Key", '<span class="boldpagelink">标准答案</span>显示所有"您怎么认为？"、"让我们复习"、和电子书中多项选择练习题的答案。'],

				["Course_Glossaary", '<span class="boldpagelink">课程词汇表</span>包含本课程中的所有关键术语和定义。 访问LOMA网站，查阅完整的LOMA词汇表。']
			]
		},

		Exam_Prep: {
			hybrid: {
				Description: [
					"此页面包含有助于您准备单元考试的资源。",

					'<span class="boldpagelink">计划、提示、和策略</span> 帮助您通过考试。',
					'<span class="boldpagelink">应用题</span>采用类似正式考试的问题来测试您对每章课程内容的理解。',
					'<span class="boldpagelink"模拟考试</span>适用于每个单元的模拟考试，包括时间、长度、和问题形式，&mdash;就像正式考试一样。',

					"当您准备进行任何单元的考试时，请使用课程顶部的连结，或者通过页面右边的滑动功能表，返回单元登录页面，启动单元考试。",

					'<span style="color: #CC0000;font-style:italic;">请注意：</span> 如果您在多个设备上同时打开相同的课程，那么您就可能失去您的学习进度记录。 在每次学习之后，请使用Exit键，退出课程。（<img src=" includes/images/glyphicons-389-exit.png" alt="exiticon">）您也可以在课程门户中使用课程菜单退出课程。',

					"准备进行单元考试了吗？ 在这里了解细节！"
				]
			},
			pdf: {
				Description: [
					"此页面包含有助于您准备考试的资源。",
					'<span class="boldpagelink">计划、提示、和策略</span> 帮助您通过考试。',
					'<span class="boldpagelink">应用题</span> 采用类似正式考试的问题来测试您对每章课程内容的理解。',
					'<span class="boldpagelink">模拟考试</span> 模拟考试体验，包括时间、长度、和问题形式，&mdash;就像正式考试一样。',

					"准备进行考试了吗？ 在这里了解细节！"
				]
			},

			PlansTipsStrategy: {
				title: "计划、提示、和策略",
				buttons: [
					{
						prepLabel: "学习计划",
						link: "LOMA_{{course_settings.Portal_Setup.Course_Number}}_Study_Plan.pdf"
					},
					{
						prepLabel: "学习技巧",
						link: "Study_Tips-SelfProctored_2019.pdf"
					},
					{
						prepLabel: "学习技巧",
						link: "Study_Tips-Proctored_2019.pdf"
					},
					{
						prepLabel: "政策和规定",
						link: "Exam_Policies_and_Procedures_(c)_2019.pdf"
					}
				]
			}
		},

		Glossary: {
			Header: "课程词汇表",
			Intro: '下面列出的是本课程的专业术语及其定义。 请访问LOMA网站，查阅完整的LOMA词汇表。<a href="https://www.loma.org/en/professional-development/loma-glossary/"target="_blank"> LOMA词汇表</a>。',
			SubIntro: "<em>LOMA 281 词汇表</em> 版权所有 &copy; 2020，LL Global，保留所有权利。 未经LL Global许可，不得以任何形式、任何手段（电子的或机械的）来复制、下载、拷贝、重新发布、传播、或以其他方式散布本课程的内容。上述行为是违反美国联邦法律和国际法律的。"
		},

		EntirePDF: "Entire book PDF (NEEDS TRANSLATION)",
		EntirePDFtoc: "Entire Table of Contents (NEEDS TRANSLATION)",
		Exam_Dialog_Paragraph: "您必须完成本单元的所有课程内容，才能启动考试。"
	},

	"zh-TW": {
		Labels: {
			about: "關於",
			accept: "接受",
			additionalDocs: "補充文件",
			additionalDocuments: "補充文件",
			answerKey: "正確答案",
			bCancel: "取消",
			bClose: "關",
			bNo: "不是",
			bOK: "好",
			bookmark: "書籤頁",
			bYes: "是",
			Chapter: "章",
			chapAbbr: "章",
			comments: "評論",
			completed: "已完成",
			Contact: "聯繫",
			courseComplete: "課程已經圓滿完成",
			courseContent: "課程內容",
			courseProgress: "航向進程",
			courseGlossary: "詞彙表",
			currentStatus: "當前狀態:",
			dashboard: "儀表盤",
			ebook: "電子書籤",
			email: "電子郵件",
			english: "英語",
			ereaderInstall: "",
			exam: "考試",
			examCompleted: "已完成考試",
			examExp: "Exam Experience (NEEDS TRANSLATION)",
			examLocked: "考試尚待啓動",
			examPrep: "考試準備",
			exit: "退出",
			expertVideos: "專家視頻",
			failCloseBtn: "返回 LOMA Learning",
			gettingStarted: "準備開始",
			glossary: "詞彙表",
			gotoBookmark: "返回書籤",
			help: "服務檯",
			home: "主頁",
			imageDescription: "圖像描述",
			lesson: " 課 ",
			lessonComplete: "已經完成課程",
			lessonNum: "第{{data-index}}課",
			lessonSummaries: "課程摘要",
			loginID: "用戶名",
			menu: "Menu (NEEDS TRANSLATION)",
			mod: "單元 ",
			module: "單元 ",
			moduleNum: "第{{default_content.numbers[i]}}單元",
			moduleLesson: "第{{data-j-index}}單元第{{data-index}}",
			myDashboard: "我的學習進度儀表盤",
			name: "姓名",
			page: "第{{pg-num}}/{{pg-total}}頁",
			pdf: "PDF (NEEDS TRANSLATION)",
			practiceQuestions: "練習題",
			privacyPolicy: "隱私政策",
			resources: "資源",
			sampleExam: "模擬考試",
			sampleExams: "Sample Exams (NEEDS TRANSLATION)",
			SelectToGoToModule: "選擇到第{{default_content.numbers[i]}}單元",
			SelectToGoDirectlyToALessonExam: "直達相關課程/考試",
			Start: "開始",
			startExam: "啓動考試",
			startOver: "重新開始",
			studyExp: "Study Experience (NEEDS TRANSLATION)",
			studyPlan: "學習計劃",
			submit: "發送",
			tableOfContents: "目錄菜單",
			termsOfUse: "使用條款",
			TermsOfUseBtn: "同意使用條款",
			Transcript: "腳本",
			Video: "視頻",
			viewLesson: "視聽課",
			videoLibrary: "視頻集",
			welcome: "歡迎",
			WelcomeVideoBtn: "歡迎視頻",
			youLeftOnPage: "您上次閱讀的是第{{number}}頁",
			YouMustAccept: "您必須接受上述協議才能使用本課程門戶。"
		},
		numbers: ["一", "二", "三", "四", "五", "六"],

		Alerts: {
			introVidTerms: {
				Body: "<strong>歡迎您！{{sFirstname||default_content.Labels.name}}.</strong> 爲了開始本課程的學習，您必須首先完成下述兩項：",
				Buttons: ["WelcomeVideoBtn", "TermsOfUseBtn"]
			},

			examComplete: {
				Body: "本考試已經完成。",
				Buttons: ["clsBtn"]
			},

			pleaseComplete: {
				Body: "請按順序完成所有的課程內容，然後才能啓動考試。",
				Buttons: ["clsBtn"]
			},

			bookmark: {
				Header: "書籤頁",
				Body: "您上次閱讀的是第{bmNumber}頁",
				Buttons: ["gotoBookmark", "startOver"]
			},

			btnExamComplete: {
				Body: "本考試已經完成，此鍵失效。",
				Buttons: ["clsBtn"]
			},

			btnPleaseCompleteLessons: {
				Body: "此鍵失效， \n\n請完成本單元的剩餘課程，以啓動此鍵。",
				Buttons: ["clsBtn"]
			},

			notconnected: {
				Header: "出問題了",
				Body: '請使用下面的按鍵通知我們。</p><p>然後，關閉課程，重試。<br>如果問題依然存在，請通過<a href="mailto:education@loma.org">education@loma.org</a>與我們聯繫',
				Buttons: ["ReportErrorBtn"]
			},

			DoNotAgree: {
				Header: "必須接受誠信聲明",
				Body: '如果不接受誠信聲明，請與 LOMA 聯繫： <a href="mailto: education@loma.org">education@loma.org</a>  退出本課程。',
				Btn: "必須接受誠信聲明"
			},

			integrityIncomplete: {
				Header: "必須接受誠信聲明",
				Body: '您必須接受完整性聲明。<br> 如果不接受完整性聲明，請與 LOMA 聯繫： <a href="mailto: education@loma.org">education@loma.org</a> 退出本課程。'
			},

			HaveEreader: {
				Body: "您是否已經安裝了電子閱讀器？",
				Buttons: ["yesBtn", "noBtn"]
			},

			ContactError: {
				Header: "發送資訊時出現問題。",
				Body: '請檢查網路連接，然後重試。或者與我們聯繫，電話：1-800-ASK-LOMA；電子郵件： <a href="mailto:education@loma.org">education@loma.org</a>',
				Buttons: ["clsBtn"]
			},

			ContactSuccess: {
				Header: "謝謝您！",
				Body: "LOMA 的工作人員會盡快與您聯繫",
				Buttons: ["clsBtn"]
			},

			shortCourseIncomplete: {
				Header: "抱歉，您尚未完成。",
				Body: "", //Created by the script... NEED TO MOVE IT SOMEWHERE THAT CAN BE TRANSLATED
				Buttons: ["clsBtn"]
			},

			demoMode: {
				Header: "課程簡介模式",
				Body: "課程簡介模式下本功能無效",
				Buttons: ["clsBtn"]
			},

			copyright: {
				Header: "通知美國版權局",
				Body: "在美國版權局註冊的本課程功能已經失效。通過此連結可以正常訪問單獨版權的課程內容。",
				Buttons: ["clsBtn"]
			},

			fail: {
				Header: "抱歉，您沒有通過本單元的考試。",
				Body: '<p style="text-align:left; width: 100%;">因爲這是您第二次參加本單元的考試，所以，您的學習記錄已被更新爲本課程不及格。</p><p style="text-align:left; width: 100%;">爲了完成本課程，您需要重新註冊該課程。 您就本課程以前的學習記錄都不復存在。&mdash; 您必須通過新註冊課程每個單元的考試，才能通過本課程。 </p><p style="text-align:left; width: 100%;">如果您在六個月內重新註冊本課程，您就有資格享受註冊費用的優惠。</p>',
				Buttons: ["failCloseBtn"]
			}
		},

		ReturnTo: {
			returnToModule: "&larr; 返回單元",
			returnToLesson: "&larr; 返回課程",
			returnToExamPrep: "&larr; 返回考試準備",
			returnToHelpTopics: "&#8617; 返回輔助主題"
		},

		PlaceholderText: {
			glossarySearch: "在此處輸入欲搜索的詞",
			glossaryFeedback: "抱歉，搜索無果",
			emailAddress: "janedoe@loma.org",
			emailDescription: "請在這裏描述您的擔憂或問題"
		},

		ContactSection: {
			Header: "請與我們聯繫。",
			Intro: '<p style="width:100%">對主題感到困惑不解嗎？ 是否需要澄清、或有關課程內容的更多資訊？ 課程內容是否有誤？ </ p>',
			Directions: "* 您必須完整填寫此表格。"
		},

		ContactWarnings: {
			requiredEmail: "請輸入電子郵寄地址。",
			validEmail: "請輸入 <em>有效的</em> 電子郵寄地址。",
			requiredStudentname: "請填寫您的姓名",
			requiredLoginID: "請輸入您的登錄用戶名",
			alphaLoginID: "僅限於小寫的字母、數字。",
			requiredComments: "所有的空格都必須填寫"
		},

		Copyright: {
			partOne: "版權 &copy; ",
			partTwo: new Date().getFullYear(),
			partThree: ", LL Global, Inc. 版權所有。"
		},

		Dashboard_Text:
			'<p>此儀表板顯示您學習{{course_settings.Portal_Setup.Course_Name}}的進度。<b> {{course_settings.Portal_Setup.Course_Number}} </b>指標顯示您在整個課程中取得的進展。 <b>"M"</b>指標顯示您在每個單元的進度。</p><p>點選 M 指標，查閱您在相關單元的學習狀態。在查閱過程中，您也可以通過目錄菜單，跳轉到課程的其它部分。</p>',

		Ebook_Dashboard_Text:
			"<p>This dashboard shows your progress through the course. The gauge shows how far you’ve gotten in the entire course. Check marks indicate which module exams you have passed and when.</p><p>Select any Module link to jump to a landing page with the content and exam for that module. (NEEDS TRANSLATION)</p>",

		HelpSection: {
			Header: "服務檯",
			Intro: '<p style="text-align：left; margin-bottom：20px; width：100％;">點選" 課程門戶服務檯 "，詢問課程播放方式。 <br>點選 "課程輔助"，詢問課程內容。</ p>',
			helpSections: {
				courseCompleteP: "完成課程（有人監考）",
				courseCompleteSP: "完成課程（無人監考）",
				ereaders: "電子閱讀器 / 電子書（有人監考和無人監考）",
				examCompP: "考試組成部分（有人監考）",
				examCompSP: "考試組成部分（無人監考）",
				studyTipsP: "學習技巧（有人監考）",
				studyTipsSP: "學習技巧（無人監考）",
				techReq: "技術要求（有人監考和無人監考）"
			},
			helpTopics: "&#8617; 輔助主題"
		},

		EndOfCourse: {
			passedMsg: "祝賀！<br>您已完成。",
			shortCourseEOC: "祝賀！<br>您已完成本課程。",
			whatsNextBtn: "下一個學習目標",
			whatsNextMsg: "您專業發展的下一個目標是什麼？ 深入瞭解LOMA所有的教育培訓課程。",
			surveyBtn: "問卷調查",
			surveyMsg: "請花一點時間，通過本課程後附的問卷調查，對本課程提出您寶貴的建議。",
			videoMsg: "您已經完成了退休保障規畫師（FSRI）的第一門課程。 您的下一門課程是什麼？",
			exitBtn: "Exit the course (needs translation)"
		},

		EOCLinks: {
			whatsNext: "https://www.loma.org/zh-hant/professional-development/designations/fellow-life-management-institute/?epslanguage=zh-Hant",
			sriNext: "https://www.loma.org/en/professional-development/designations/fsri/",
			survey: {
				hioc: "https://www.surveymonkey.com/r/CT_combeocsurveys_hioc",
				hybrid: "https://www.surveymonkey.com/r/LOMATextBasedEOC"
			}
		},

		IntegrityStatement: {
			Header: "誠信聲明",
			theStatement:
				'<p>本課程旨在充實您的專業知識。 貴公司支持您選修本課程是對您專業發展的投資。 恪守誠實和正直的標準，學習LOMA的課程，獲得專業資格認證，代表你的專業成就。所有取得專業成就的人士都會從中受益。 因此，當您參加本課程的考試時，您必須誠實、正直，這既代表您自己，也代表您的公司。 </p><p> 勾選下述方框，我同意：</p><ul class="honest"><li><label class="bContainer">我已註冊本課程，所以，我有資格參加下述考試。<input type="checkbox" id="bIntegrity1"><span class="bCheckmark"></span></label></li><li><label class="bContainer">我必須恪守誠實和正直的標準，完成本課程。我保證：<input type="checkbox" id="bIntegrity2"><span class="bCheckmark"></span></label><ul><li><label class="bContainer">考試時自己不作弊，也不允許他人抄襲我的答案。<input type="checkbox" id="bIntegrity2a"><span class="bCheckmark"></span></label></li><li><label class="bContainer">我不剽竊考試內容，也不採用不正當的手段。<input type="checkbox" id="bIntegrity2b"><span class="bCheckmark"></span></label></li><li><label class="bContainer"> 參加考試時，我不夾帶考試禁止的物品，包括但不限於：學習資料、參考資料、數碼的或遙控的裝置。<input type="checkbox" id="bIntegrity2c"><span class="bCheckmark"></span></label></li></ul></li><li><label class="bContainer">爲了進行統計研究，LOMA會定期收集人口統計資料和考試成績資料。s&rsquo; 籍此保證考生嚴格遵守誠信聲明。<input type="checkbox" id="bIntegrity3"><span class="bCheckmark"></span></label></li><li><label class="bContainer">LOMA會與會員公司合作，確保所有的考生在完成課程考試時都遵循誠信標準。<input type="checkbox" id="bIntegrity4"><span class="bCheckmark"></span></label></li><li><label class="bContainer"> 對於違反LOMA考試規定的行爲，我一定向 &rsquo;s 註冊辦公室及時舉報。任何違反誠信聲明的行爲都會導致學分的喪失，任何涉事的考生都會受到 LOMA 的 <a href="https://www.loma.org/en/help-center/exams/exam-standards/due-process-policy/" target="_blank"> 處罰。</a>.<input type="checkbox" id="bIntegrity5"><span class="bCheckmark"></span></label></li></ul><div style="text-align: center;"><div class="hiocexam_btn_disabled" id="exam_btn">開始考試！</div></div>'
		},

		GettingStartedContent: {
			Header: "Getting Started",
			KotobeeReader: "Kotobee Reader",
			KotobeeFeatures: "Kotobee Reader Features and Navigation (NEEDS TRANSLATION)",
			AppleBooks: "Apple Books",
			AppleFeatures: "Apple Books Features and Navigation (NEEDS TRANSLATION)",

			IntroParagraphs: [
				'The course content is delivered via an interactive e-book using one of our free supported e-readers: <a href="https://www.kotobee.com/en/products/reader" class="kotobeeDownload" target="_blank">Kotobee Reader</a><sup >&trade;</sup> or <a href="https://itunes.apple.com/us/app/apple-books/id364709193?mt=8" class="appleDownload" target="_blank">Apple Books</a><sup>&reg;</sup> (formerly iBooks; for Apple products only). Follow the steps below to install the correct e-reader on your device and download content to the e-reader:',

				'<b>Step 1:</b> Download and install an e-reader to your device(s).<br>See full details for <a href="pdf/Install-Setup.pdf" target="pdfwindow">Kotobee Reader</a> or <a href="pdf/Install-Setup.pdf" target="pdfwindow">Apple Books</a>.</p>',

				"<b>Step 2:</b> Go to each Module’s landing page to  download that Module’s e-book file (.epub) onto your e-reader.",

				"If videos do not play on your device, you can view them in the Resources section of the Course Portal.",

				'These videos explain the features of LOMA e-books using Kotobee Reader or Apple Books. To learn more, visit the <span class="helptextlink">Help</span> page.',

				'<p style="width:100%; margin-top: 30px;">The entire book is available in PDF format, though it does not contain the interactive features of the e-book.</p>'
			]
		},

		//HYBRID
		Instructions: {
			introParas: [
				"Select <b>Module {{mod-num}} e-book</b> to download the content to your e-reader. Or, if you are unable to access the e-book, select <b>Module {{mod-num}} PDF</b>.",

				"The end of each chapter contains practice exam questions to check your understanding. Those questions are repeated via the <b>Practice Question</b> links below."
			],

			spParas: [
				"As a final tune-up, try the <b>Sample Exam</b>, which mimics the actual exam for this module. You can also visit <b>Exam Prep</b> for additional resources to help you prepare for the exam.",

				"When you are ready to take the exam for this module, select <b>Module {{mod-num}} Exam</b>.",

				"Note – Module exams are timed, and you have only two attempts to pass each exam!"
			],

			pParas: [
				//proctored
				"You can visit <b>Exam Prep</b> for additional resources to help you prepare for the exam."
			]
		},

		Resources: {
			Header: "資源",
			IntroParagraph: "本頁包含您可能在課程中遺漏的資料，這是爲方便您的學習而收集的。",

			IntroLIs: [
				["Lesson_Summaries", '<span class="boldpagelink">課程摘要</span>：課程中最重要的關鍵摘要pdf版'],

				["Expert_Videos", '<span class="boldpagelink">專家視頻</span>：您是否想重新觀看課程中的專家述評？ 這裏是專家述評總彙。'],

				["Add_Docs", '<span class="boldpagelink">補充文件<!--附加文件--></span>：課程單元中包含的附加可打印文件'],

				["Study_Plan", '<span class="boldpagelink">學習計劃</span>: 此功能可以幫助你設定完成本課程的目標。'],

				["liBRARY_Videos", '<li><span class="boldpagelink">視頻庫</span>顯示電子書中呈現的所有視頻。'],

				["Answer_Key", '<span class="boldpagelink">標準答案</span>顯示所有"您怎麼認爲？"、"讓我們複習"、和電子書中多項選擇練習題的答案。'],

				["Course_Glossaary", '<span class="boldpagelink">課程詞彙表</span>包含本課程中的所有關鍵術語和定義。 訪問LOMA網站，查閱完整的LOMA詞彙表。']
			]
		},

		Exam_Prep: {
			hybrid: {
				Description: [
					"此頁面包含有助於您準備單元考試的資源。",

					'<span class="boldpagelink">計劃、提示、和策略</span> 幫助您通過考試。',
					'<span class="boldpagelink">應用題</span>採用類似正式考試的問題來測試您對每章課程內容的理解。',
					'<span class="boldpagelink"模擬考試</span>適用於每個單元的模擬考試，包括時間、長度、和問題形式，&mdash;就像正式考試一樣。',

					"當您準備進行任何單元的考試時，請使用課程頂部的連結，或者通過頁面右邊的滑動功能表，返回單元登錄頁面，啓動單元考試。",

					'<span style="color: #CC0000;font-style:italic;">請注意：</span> 如果您在多個設備上同時打開相同的課程，那麼您就可能失去您的學習進度記錄。 在每次學習之後，請使用Exit鍵，退出課程。（<img src=" includes/images/glyphicons-389-exit.png" alt="exiticon">）您也可以在課程門戶中使用課程菜單退出課程。',

					"準備進行單元考試了嗎？ 在這裏瞭解細節！"
				]
			},
			pdf: {
				Description: [
					"此頁面包含有助於您準備考試的資源。",
					'<span class="boldpagelink">計劃、提示、和策略</span> 幫助您通過考試。',
					'<span class="boldpagelink">應用題</span> 採用類似正式考試的問題來測試您對每章課程內容的理解。',
					'<span class="boldpagelink">模擬考試</span> 模擬考試體驗，包括時間、長度、和問題形式，&mdash;就像正式考試一樣。',

					"準備進行考試了嗎？ 在這裏瞭解細節！"
				]
			},

			PlansTipsStrategy: {
				title: "計劃、提示、和策略",
				buttons: [
					{
						prepLabel: "學習計劃",
						link: "LOMA_{{course_settings.Portal_Setup.Course_Number}}_Study_Plan.pdf"
					},
					{
						prepLabel: "學習技巧",
						link: "Study_Tips-SelfProctored_2019.pdf"
					},
					{
						prepLabel: "學習技巧",
						link: "Study_Tips-Proctored_2019.pdf"
					},
					{
						prepLabel: "政策和規定",
						link: "Exam_Policies_and_Procedures_(c)_2019.pdf"
					}
				]
			}
		},

		Glossary: {
			Header: "課程詞彙表",
			Intro: '下面列出的是本課程的專業術語及其定義。 請訪問LOMA網站，查閱完整的LOMA詞彙表。<a href="https://www.loma.org/en/professional-development/loma-glossary/"target="_blank"> LOMA詞彙表</a>。',
			SubIntro: "<em>LOMA 281 詞彙表</em> 版權所有 &copy; 2020，LL Global，保留所有權利。 未經LL Global許可，不得以任何形式、任何手段（電子的或機械的）來複制、下載、拷貝、重新發布、傳播、或以其他方式散佈本課程的內容。上述行爲是違反美國聯邦法律和國際法律的。"
		},

		EntirePDF: "Entire book PDF (NEEDS TRANSLATION)",
		EntirePDFtoc: "Entire Table of Contents (NEEDS TRANSLATION)",
		Exam_Dialog_Paragraph: "您必須完成本單元的所有課程內容，才能啓動考試。"
	}
};
