//English language strings
var arrStrings = new Array();

arrStrings['courseLinks'] = '<span class="no_w"><span class="spanlink" onclick="javascript: window.parent.Mod_number(' + (modulenumber - 1) + ')"; role="link" tabindex="0">Module ' + modulenumber + '</span></span> | <span class="spanlink" onclick="javascript: window.parent.showWelcome();" role="link" tabindex="0">Home</span> | <span class="spanlink" onclick="javascript: window.parent.showDash();" role="link" tabindex="0">Dashboard</span>';

arrStrings['strScoreReport0'] = "Performance Report";
arrStrings['strScoreReport1'] = "The questions that you missed have a red “X” <img src=\"media/times-circle-xs.png\" style='vertical-align:text-top;width:20px' alt=\"\"/> in the question list in the slide-out menu. Questions that you answered correctly have a green check mark  <img src=\"media/checkmark-xs.png\" style='vertical-align:text-top;width:20px' alt=\"\" />. Use the question list to review any questions you wish to review. Click the Restart button <img src=\"media/restart-bk.png\" style='vertical-align:text-top;width:20px' alt=\"\" /> if you want to start over with this set of questions."
arrStrings['strScoreReport2'] = "Congratulations on your perfect score!";
arrStrings['strScoreReport3'] = "Your score for each question is based on your first selected answer if answer choice feedback was on when you answered the question, or your last selected answer if feedback was off.";
arrStrings['strScoreReport4'] = "Chapter";
arrStrings['strScoreReport5'] = "Correct";
arrStrings['strScoreReport6'] = "Score";
arrStrings['strScoreReport7'] = "See below for a more detailed report.";
arrStrings['strScoreReport8'] = "Use the table below to review Learning Objectives for the questions you missed.";
arrStrings['strScoreReport9'] = "The table below shows your score for each chapter of the textbook, along with a list of the learning objectives covered by the questions you missed.";
arrStrings['strScoreReport10'] = "Overall Score";
arrStrings['strScoreReport11'] = "Learning Objectives";
arrStrings['strScoreReport12'] = "Restart the Questions";
arrStrings['strScoreReport13'] = "Learning Objective(s)";
arrStrings['strScoreReport14'] = "Learning Objective";
arrStrings['strScoreReport15'] = "Question";
arrStrings['strScoreReportWorking'] = "Working on it …"
arrStrings['strScoreReportF2'] = "Your score is below the minimum passing score of " + intPassingScore + "%."
arrStrings['strScoreReportP2'] = "Congratulations! You passed! ";
arrStrings['strScoreReportEOM9'] = "The table below shows your score for each lesson of the module, along with a list of the learning objectives covered by the questions you missed.";
arrStrings['strScoreReportEOM9H'] = "The table below shows your score for each chapter of the module, along with a list of the learning objectives covered by the questions you missed.";
arrStrings['strScoreReportEOM4'] = "Lesson";
arrStrings['strScoreReportHybridFail'] = '<span class="spanlink" onclick="javascript: window.parent.myFailOptions();" role="link" tabindex="0">See what my options are</span>';
arrStrings['strScoreReportHybridFail1'] = 'Sorry, you did not pass this module exam. Review the module’s study materials before trying again. Make a note of each learning objective listed below, and give extra attention to the materials that cover those learning objectives as you study to retake the module exam. <span class="maroon">You will not be able to return to this report once you navigate away from it.</span>';
arrStrings['strScoreReportEOMHome'] = 'Click or tap one of the following links to return to the course: ' + arrStrings['courseLinks'] + '</p>';
arrStrings['strScoreReportTimeExpired'] = 'The allowable amount of time to complete the exam expired, and the exam has been submitted for grading.';

arrStrings['strOf'] = "of";
arrStrings['strReference'] = "Reference:"; //label for text reference for the exam question; i.e., Reference: LO 1A
arrStrings['strReference1'] = "LO ";
arrStrings['strReference2'] = "LOs ";
arrStrings['strQuestion'] = "Question";
arrStrings['errMsg2'] = "<h2 class=\'swaphd\'>You have not answered all of the questions.</h2><p class=\'swap\'>The unanswered questions have been highlighted in yellow in the question list. Unanswered questions will be marked as incorrect if you continue to the score report.</p><p class=\'swap'>Do you want to continue to the score report?</p>";
arrStrings['btnYes'] = "Yes";
arrStrings['btnYesTitle'] = "Yes";
arrStrings['btnNo'] = "No";
arrStrings['btnNoTitle'] = "No";
arrStrings['fbMsg'] = '<h2 class="swaphd">Would you like answer choice feedback on?</h2><p class="swap">Typically, you’d want feedback on to get the full benefit of the study questions, but you can turn it off if you prefer to simulate an actual test-taking experience.</p>';
arrStrings['fbMsgSE'] = '<p class="swap">If you choose to turn feedback off, a timer will be set allowing an average of 2 minutes per question to complete the sample examination (the same amount of time you will have on the real exam). You will have to complete the entire exam in one session. If you exit the session before completing all of the questions, your progress will be lost and you will have to start over.</p>';
arrStrings['btnOn'] = "On";
arrStrings['btnOnTitle'] = "On";
arrStrings['btnOff'] = "Off";
arrStrings['btnOffTitle'] = "Off";
arrStrings['btnHelpTitle'] = "Help";
arrStrings['btnPreviousTitle'] = "Previous Question";
arrStrings['btnNextTitle'] = "Next Question";
arrStrings['btnGradeTitle'] = "Submit Exam For Grading";
arrStrings['btnReportTitle'] = 'Performance Report';
arrStrings['btnRestartTitle'] = "Restart";
arrStrings['btnFeedbackTitle'] = "Toggle Feedback On/Off";
arrStrings['btnMarkTitle'] = "Mark Question for Review";
arrStrings['welcomeBack'] = '<p class="swap2"><b>Welcome back.</b> Answers recorded during the previous study session have been restored from a web browser ‘cookie’ on this computer. <span style="color:#0069ad;text-decoration:underline;cursor:pointer;" onclick="javascript:initializeExam(true);" role="link" tabindex="0">Click to restart</span>, or press <span class="bold">r</span>, if you would prefer to erase the previous answers and start a new study session.</p>';
arrStrings['strCorrect'] = "Correct!";
arrStrings['strIncorrect'] = "Incorrect";
arrStrings['btnBeginTitle'] = "Begin Examination";
arrStrings['strTimer'] = "Timer: ";

arrStrings['strHomeNavTitle'] = "Home";
arrStrings['strHomeNav'] = "Home";
arrStrings['strPrevious'] = "Prev";
arrStrings['strNext'] = "Next";
arrStrings['strFeedback'] = "Feedback";
arrStrings['strMark'] = "Mark"
arrStrings['strHelp'] = "Help&nbsp;";
arrStrings['strGrade'] = "Submit";
arrStrings['strRestart'] = "Restart";
arrStrings['strReport'] = "Report";
arrStrings['strBegin'] = "Begin";

arrStrings['strFBoff'] = 'Note: Answer choice feedback is currently switched off. To switch it on, click the <span class="ucb">' + arrStrings['strFeedback'] + '</span> button.';

arrStrings['mnuHome'] = "Home";
arrStrings['mnuContent'] = "Course Content";
arrStrings['mnuExamPrep'] = "Exam Prep";
arrStrings['mnuPQLanding'] = "Practice Questions";
arrStrings['mnuCSLanding'] = "Case Studies";
arrStrings['mnuSE'] = "Sample Examination";
arrStrings['mnuISA'] = "Interactive Study Aid";
arrStrings['mnuHelp'] = "Help";
arrStrings['mnuFeedback'] = "Feedback";
arrStrings['mnuEmail'] = "Email";
arrStrings['mnuTerms'] = "Terms of Use";
arrStrings['mnuPrivacy'] = "Privacy Policy";
arrStrings['mnuExit'] = "Exit";
arrStrings['hide'] = "Hide";
arrStrings['show'] = "Show";
arrStrings['strFeedbackEnabled'] = "Feedback has been enabled.";
arrStrings['strFeedbackDisabled'] = "Feedback has been disabled.";

arrStrings['footertext1'] = "Copyright &copy; ";
arrStrings['footertext2'] = " LL Global, Inc. All rights reserved.<span id=\"tp\"> | <a href=\"../terms.html\">Terms of Use</a> | <a href=\"../privacy.html\">Privacy Policy</a></span>";

arrStrings['ariaMenu'] = "Main menu";
arrStrings['ariaBtnRestart'] = "restart the questions";
arrStrings['ariaBtnMark'] = "mark question for review";
arrStrings['ariaBtnHelp'] = "help";
arrStrings['ariaBtnFeedback'] = "toggle feedback on or off";
arrStrings['ariaBtnPrev'] = "previous question";
arrStrings['ariaBtnNext'] = "next question";
arrStrings['ariaBtnSubmit'] = "submit for grading";
arrStrings['ariaQL'] = "question list";
arrStrings['ariaQLItem'] = "Question "
arrStrings['ariaQLToggle'] = "toggle question list";
arrStrings['ariaCloseFB'] = "close feedback";
arrStrings['ariaCloseHelp'] = "close help";
arrStrings['ariaMarked'] = "marked for review";
arrStrings['ariaAnswered'] = "answered";
arrStrings['ariaUnanswered'] = "unanswered";
arrStrings['ariaAnsChoices'] = "answer choices";
arrStrings['ariaCorrect'] = "correct";
arrStrings['ariaIncorrect'] = "incorrect";
arrStrings['ariaLOs'] = "learning objectives";
arrStrings['ariaPR'] = "Performance report";
arrStrings['ariaBtnBegin'] = "begin examination";

arrStrings['Hybridwelcomehead'] = '<h2 class="score" id="welcomehead">Module Exam</h2>';
arrStrings['Hybridwelcomeintro'] = '<p class="score">This Module Exam consists of ' + numQ + ' objective questions. You have <b>two attempts</b> to achieve the minimum passing score of ' + intPassingScore + '%.</p>';
arrStrings['Hybridwelcomeintro'] += '<p class="score bold">Taking The Exam</p>';
arrStrings['Hybridwelcomeintro'] += '<ul><li>For each question, select the most appropriate answer choice.</li>';
arrStrings['Hybridwelcomeintro'] += '<li>Use the <span class="ucb">' + arrStrings['strNext'] + ' <img src="../examincludes/media/next-bk.png" alt="" /></span> button to advance to the next question, or select any question from the question list.</li>';
arrStrings['Hybridwelcomeintro'] += '<li>You can return to a previous question and change your answer choice at any time before you <span class="ucb">' + arrStrings['strGrade'] + ' <img src="../examincludes/media/submit-bk.png" alt="" /></span> the exam for grading.</li></ul>';
arrStrings['Hybridwelcomeintro'] += '<p class="score">For additional information about taking a Module Exam, view the help info <span class="spanlink" onclick="javascript:openHelp();" role="link">here</span>.</p>';
arrStrings['Hybridwelcomeintro'] += '<div class="wrapper"><div class="epigraph"><p class="score pcenter bold">Important Note:</p><p class="score">You must complete the exam in one session for your progress to be recorded. <span class="maroon">If you exit the session before completing all of the questions, your progress will be lost, <span class="bold">but you will still be charged with one of your two exam attempts.</span></span></p></div></div>';
arrStrings['Hybridwelcomeintro'] += '<p class="score" id="pDuration">You will have <span class="timerb" id="examduration">{duration}</span> minutes to complete the examination. The exam countdown timer appears on the right side of the screen above the exam questions. <span class="maroon">If time expires, the exam will automatically be submitted for grading. Any questions left unanswered when time expires will be marked incorrect.</span></p>';
//arrStrings['Hybridwelcomeintro'] += '<p class="score bold" id="pReady"><span id="studentname"></span>This is attempt <span id="eomattempt"></span> for your Module ' + modulenumber + ' exam. When you are ready to begin, click or tap the <span class="ucb">' + arrStrings['strBegin'] + ' <img src="../examincludes/media/begin-bk.png" alt="" /></span> button above. Otherwise, click or tap one of the links above to return to a Module home page or the course home page.</p>';
arrStrings['Hybridwelcomeintro'] += '<p class="score bold" id="pReady"><span id="studentname"></span>This is attempt <span id="eomattempt"></span> for your Module ' + modulenumber + ' exam. When you are ready to begin, click or tap the <span class="ucb">' + arrStrings['strBegin'] + ' <img src="../examincludes/media/begin-bk.png" alt="" /></span> button above. Otherwise, click or tap one of the following links to return to the course: ' + arrStrings['courseLinks'] + '</p>';
arrStrings['Hybridwelcomeintro'] += '<p class="score bold maroon" id="pFailed">You have already attempted this module exam more than once. You are allowed only two attempts. For more information: <span style="color: #0069ad; text-decoration: underline; cursor: pointer;" onclick="javascript: window.parent.myFailOptions();" role="link" tabindex="0">See what my options are</span></p>';
arrStrings['Hybridwelcomeintro'] += '<p class="score bold maroon" id="pPassed">You have already passed this module exam. You cannot take it again. Click or tap one of the following links to return to the course: ' + arrStrings['courseLinks'] + '</p>';

arrStrings['welcomeintroLRSError'] = '<p class="score bold maroon">Unable to connect to LOMA’s learning system. Cannot continue. Click or tap one of the following links to return to the course: ' + arrStrings['courseLinks'] + '</p>';


arrStrings['welcomehead'] = '<h2 class="score" id="welcomehead">Module Exam</h2>';
arrStrings['welcomeintro'] = '<p class="score">This Module Exam consists of ' + numQ + ' objective questions. The minimum passing score is ' + intPassingScore + '%.</p>';
arrStrings['welcomeintro'] += '<p class="score bold">Taking The Exam</p>';
arrStrings['welcomeintro'] += '<ul><li>For each question, select the most appropriate answer choice.</li>';
arrStrings['welcomeintro'] += '<li>Use the <span class="ucb">' + arrStrings['strNext'] + ' <img src="../examincludes/media/next-bk.png" alt="" /></span> button to advance to the next question, or select any question from the question list.</li>';
arrStrings['welcomeintro'] += '<li>You can return to a previous question and change your answer choice at any time before you <span class="ucb">' + arrStrings['strGrade'] + ' <img src="../examincludes/media/submit-bk.png" alt="" /></span> the exam for grading.</li></ul>';
arrStrings['welcomeintro'] += '<p class="score">For additional information about taking this exam, view the help info <span class="spanlink" onclick="javascript:openHelp();" role="link">here</span>.</p>';
arrStrings['welcomeintro'] += '<div class="wrapper"><div class="epigraph"><p class="score pcenter bold">Important Note:</p><p class="score">You must complete the exam in one session for your progress to be recorded. <span class="maroon">If you exit the session before completing all of the questions, your progress will be lost and you will have to start the exam again from the beginning.</span></p></div></div>';
arrStrings['welcomeintro'] += '<p class="score bold" id="pReady"><span id="studentname"></span>This is attempt <span id="eomattempt"></span> for your Module ' + modulenumber + ' exam. When you are ready to begin, click or tap the <span class="ucb">' + arrStrings['strBegin'] + ' <img src="../examincludes/media/begin-bk.png" alt="" /></span> button above. Otherwise, click or tap one of the following links to return to the course: ' + arrStrings['courseLinks'] + '</p>';
arrStrings['welcomeintro'] += '<p class="score bold maroon" id="pPassed">You have already passed this module exam. You cannot take it again. Click or tap one of the following links to return to the course: ' + arrStrings['courseLinks'] + '</p>';

arrStrings['helpTxt1'] = 'How to Use LOMA Study Questions';
arrStrings['helpTxt2'] = 'The Question List';
arrStrings['helpTxt3'] = 'To access the question list, click or tap the question list menu toggle button';
arrStrings['helpTxt4'] = 'Color-coding<span class="sr-only">, or an ARIA label if using a screen reader,</span> indicates the status of each question.';
arrStrings['helpTxtTH1sr'] = 'Question Marker';
arrStrings['helpTxtTH2sr'] = 'Explanation';
arrStrings['helpTxt5sr'] = 'white or ARIA label with question number only';
arrStrings['helpTxt5'] = 'Question has not been answered.';
arrStrings['helpTxt6sr'] = 'blue or ARIA label with question number followed by "answered"';
arrStrings['helpTxt6'] = 'Question has been answered.';
arrStrings['helpTxt7sr'] = 'grey or ARIA label with question number followed by "marked for review"';
arrStrings['helpTxt7'] = 'Question has been marked for review.';
arrStrings['helpTxt8sr'] = 'yellow or ARIA label with question number followed by "unanswered"';
arrStrings['helpTxt8'] = 'Question will be marked incorrect in the performance report if left unanswered.';
arrStrings['helpTxt9sr'] = 'green or ARIA label with question number followed by "correct"';
arrStrings['helpTxt9'] = 'Question has been graded and was answered correctly.';
arrStrings['helpTxt10sr'] = 'red or ARIA label with question number followed by "incorrect"';
arrStrings['helpTxt10'] = 'Question has been graded but was answered incorrectly.';
arrStrings['helpTxt11'] = 'Navigating and Answering the Study Questions';
arrStrings['helpTxt12'] = 'You can navigate the questions with the mouse or keyboard, or with a tap on a touchscreen. Click or tap the <span class="ucb">';
arrStrings['helpTxt13'] = arrStrings['strPrevious'] + '</span> button to return to the previous question or the <span class="ucb">' + arrStrings['strNext'];
arrStrings['helpTxt14'] = '</span> button to advance to the next question. Or click/tap the number of the question you want to go to in the <span class="bold">Question List</span>. With the keyboard, press the <span class="bold">n</span> key to advance to the next question. Press the <span class="bold">p</span> key to return to the previous question.';
arrStrings['helpTxt15'] = 'Similarly, you can answer the questions with the keyboard, a mouse click, or a tap on a touchscreen. Click or tap the answer choice you want to select. With the keyboard, press the number key that corresponds to the answer choice you want to select.';
arrStrings['helpTxt16'] = 'If you would like to mark a question for review so you can return to it later, click the <span class="ucb">';
arrStrings['helpTxt161'] = ' ' + arrStrings['strMark'] + '</span> button or press the <span class="bold">m</span> key.';
arrStrings['helpTxt17'] = 'If you return to a question you have already answered, your selected answer will be highlighted with a green checkmark';
arrStrings['helpTxt18'] = 'or red X';
arrStrings['helpTxt19'] = 'if feedback is enabled and depending on whether it is the correct answer or not. If feedback is disabled, your selected answer will be highlighted with a blue dot';
arrStrings['helpTxt20'] = 'Note: if the keyboard doesn’t work, try clicking or tapping the question window first to make sure it’s the active window.';

arrStrings['helpTxt21'] = 'Answer Choice Feedback';
arrStrings['helpTxt22'] = 'Use the <span class="ucb">';
arrStrings['helpTxt23'] = ' ' + arrStrings['strFeedback'] + '</span> button, or press the <span class="bold">f</span> key, to toggle answer choice feedback on or off. Typically, you’d want to leave feedback on to get the full benefit of the study questions, but you can turn it off if you prefer to simulate an actual test-taking experience.';
arrStrings['helpTxt24'] = 'To close the feedback popup window, click or tap it. Or, if the feedback popup is not covering the answer choices, click or tap another answer choice to close the current popup and open the popup for that answer choice.';

arrStrings['helpTxt25'] = 'Seeing How You Did';
arrStrings['helpTxt26'] = 'Click the <span class="ucb">' + arrStrings['strGrade'];
arrStrings['helpTxt27'] = '</span> button, or press the <span class="bold">s</span> key, to go to the performance report. You’ll be warned if you have left any questions unanswered.';
arrStrings['helpTxt28'] = 'The question list will be color-coded as shown above with your result on each question. Use the question list to review questions that you missed or any other questions. Click the <span class="ucb">';
arrStrings['helpTxt29'] = ' ' + arrStrings['strRestart'] + '</span> button, or press the <span class="bold">r</span> key, to clear your selected answers and start fresh with this set of study questions.';
arrStrings['helpTxt30'] = 'If answer choice feedback was on, your score is based on the first choice you selected for a question. If answer choice feedback was off, your score is based on your last selected choice.';
arrStrings['helpTxt31'] = 'Cookies';
arrStrings['helpTxt32'] = 'If your browser is set up to allow “cookies” to be stored on your computer, your answers during a study session will be stored in a cookie and restored the next time you come back to the study questions. You’ll be given the opportunity to clear the stored answers and start a new study session.';
arrStrings['helpTxt33'] = 'Exit Help';


arrStrings['helpTxtEOM1'] = 'LOMA Module Exam Help';
arrStrings['helpTxtEOM11'] = 'Navigating and Answering the Module Exam Questions';
arrStrings['helpTxtEOM19'] = 'If you return to a question you have already answered, your selected answer will be highlighted with a blue dot';
arrStrings['helpTxtEOM28'] = 'The performance report will indicate if you passed or if your score was below the minimum passing score. If you did not pass, make a note of each learning objective listed in the report, and give extra attention to the materials that cover those learning objectives as you study to retake the module exam. You will not be able to return to the performance report once you navigate away from it.';

arrStrings['helpTxtPSE21'] = 'Feedback or Timed Mode';
arrStrings['helpTxtPSE22'] = 'When you start or restart a Sample Examination, a popup asks if you would like answer choice feedback on or off. Typically, you’d want to leave feedback on to get the full benefit of the study questions, but you can turn it off if you prefer to simulate an actual test-taking experience.';
arrStrings['helpTxtPSE23'] = 'If you chose to turn feedback off, a countdown timer allows an average of 2 minutes per question to complete the sample examination (the same amount of time you will have on the real exam). You must complete the entire exam in one session. If you exit the session before completing all of the questions, your progress will be lost and you will have to start over.';
arrStrings['helpTxtPSE24'] = 'If you chose to turn feedback on, the feedback will popup each time you select an answer choice in a question. To close the feedback popup window, click or tap it. Or, if the feedback popup is not covering the answer choices, click or tap another answer choice to close the current popup and open the popup for that answer choice.';
arrStrings['helpTxtPSE32'] = 'If you chose to show answer choice feedback and your browser is set up to allow “cookies” to be stored on your computer, your answers during a study session will be stored in a cookie and restored the next time you come back to the study questions. You’ll be given the opportunity to clear the stored answers and start a new study session.';

arrStrings['helpTxtPPQ24B'] = 'If feedback is on, you cannot advance to the next question until you select the correct answer of the current question.';

arrStrings['alertNoLRSEOM'] = 'Unable to connect to LOMA’s learning system. \n\nPlease close the course window and relaunch it before attempting to continue.';

arrStrings['failedToSaveState'] = 'Failed to save exam progress. Error: ';

arrStrings['gStateError'] = '<p class="score bold maroon">An error occurred connecting to LOMA’s learning system. Cannot continue. Click or tap one of the following links to return to the course: ' + arrStrings['courseLinks'] + '</p>';

arrStrings['fbMsgHIOCEOL'] = '<h2 class="swaphd">End of Lesson Practice Questions</h2><p class="swapmb">You have completed the Content for this lesson. The following questions can help make sure you understand the concepts covered in the lesson.</p>';

var exam_settings = {
	"lrs_setup": {
		"e": "https://LRS.loma.org/ScormEngineInterface/TCAPI/default/",
		"u": "YXAtbWdtdA==",
		"p": "YXAtbWdtdC1MT01ALVBXRA=="
	}
}
