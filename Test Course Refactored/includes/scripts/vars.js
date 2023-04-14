/*****************************************************************/
//                           REFERENCE                           //
/*****************************************************************/
//TOC.length //--> number of modules
//TOC[i].length // --> number of lessons per module
//TOC[i][j].length // --> Number of pages...

/*****************************************************************/
/* VARIABLES ONLY                                                */
/*****************************************************************/
let courseReady = false;
// ------- JSON SETUP VARS --------//
var courseType = course_settings.Portal_Setup.Course_Type;
var portalSetup = course_settings.Portal_Setup;
// JW Added 2021-06-11
var courseLocale = portalSetup.course_locale;
let course;

// function variables for event listeners
let tempSwapHandler;
let pushHistoryHandler;
let examAlertHandler;
let surveyBtnHandler;
let nextBtnHandler;
let examLaunchHandler;
let myStatusHistoryHandler;

var lessonSetup = course_settings.Lesson_setup;
var vidlibrarySetup = vidLibrary.libraryvids;

// holds glossary setup
var glossarySetup = glossary_settings.glossary_setup;
// holds an array of all sort letters for the glossary
var glossarySortLetters = [];
// holds a list of terms grouped my sort letter
var glossarySorted = {};
let tempGlossArr = [];
// array of all terms for fuzzyset
let termArray = [];
// object with terms as keys
let glossByTerm = {};
let fs;


let activeFocus;
// global empty array for focusable elements
let focusableElements = [];
const focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"]:not([disabled]), [contenteditable]';
const keyCodes = Object.freeze({
	TAB: 9,
	RETURN: 13,
	ESC: 27,
	SPACE: 32,
	PAGEUP: 33,
	PAGEDOWN: 34,
	END: 35,
	HOME: 36,
	LEFT: 37,
	UP: 38,
	RIGHT: 39,
	DOWN: 40
});

var masterDiv = document.getElementById("portalContents");
var gAddedSpace = '<div style="height: 200px; width:100%; background: transparent;">&nbsp;</div>';

//Can be turned off by using the "demo" course types
var isXAPI = true;
var isSCORM = true;

// The following is now automatic - Local testing is SCORMCloud, all others are Production
var useSCORMCloud = false;
// var useJSCORMCloud = false;
var useLOMAProd = false;
var useLOMATest = false;
var useChinaCache = false;
var bCheckLRSStatus = true;

//STAGE OR PRODUCTION
var COMPANY = "loma"; // Just in case there's a switch LLGlobal or some other name...
var PRODLMS = "learning.loma.org"; // Potential hazard: url could change, but less likely than above since it's an branded url
var INTLMS = "llg-ki.mksi-lms.net"; // "integrations.loma.org";
var SCORMCLOUDLMS = "cloud.scorm.com"; // Potential hazard: url could change, but less likely than above since it's an branded url
var STAGELMS = "stage";

//LMS vars...
var lmsConnected;
var g_stillConnected;
var bIgnore301 = true;
var completionstatus;
var bStudentName = "";
var studentnamefinal = "";
var sFirstname;// = defaultContent.Labels.name;
var sID;

//LRS Vars...
var lrs;
var gUser;
var gUser_old;
var courseGUID;
var lrsActor;
var strTestLocaleId = portalSetup.course_locale; // "en-US"
var theLRSerror;

//State object is defined in setState
var xapiSaveStateConfig;
var xapiGetStateConfig;
var gReturnedState;

var bTotalLessons = 0;
var lessonCounts = [];
var bPageViews = [];

//parts of gUserState
var dateStarted = new Date();
var courseName = course_settings.Portal_Setup.Course_Name;

//Course Number - "LOMA 361" --> "loma361"
var courseNumber;
courseNumber = course_settings.Portal_Setup.Course_Name.toLowerCase();
courseNumber = courseNumber.replace(/ /g, "");

//bookmarks
//module -> lesson -> value ... [[1,3,5,7,9],[2,4,6,8,10],...etc]
var gBookmarks = [];
var bmNumber;

//scoresvar bGprcnt = [];
var bGprcnt = [];
var moduleScores = [];
var courseScore;

//completions
var bLessonCompletions = [];

//Intro
var showTerms = course_settings.Portal_Setup.showTerms;
var showIntroVideo = course_settings.Portal_Setup.showIntroVideo;
var termsViewed = false;
var videoViewed = false;

//Attempts
var bAttemptCount;
var bSuspendData;
var bExamData = [];
var lrsCourseAttempt;
var eomAttemptCount;
var lrsCourseStatus;
var bRemainingAttempts = [];

//Honesty Statements...
var honestyStatements = [];

//eReader downloaded...
var hasEreader;

//Inline question information
var pgQueArray = [[], []];
var allPgQue = [];

//RESET SCORM? -- Only false in the course. True values will come from outside intervention using Postman or some other interface
var ResetSCORMLessonStatus = false;

// ------- AUTOCOMPLETE --------//
var autoCompleteObjArray = [];

var bCurrentModule;
var bCurrentLesson;
var bCurrentPage;

var isExamPrep = false;
var isExamPage = false;
var ttttReturn = -1;

var gBook = "";

var gScrollDestination;

var bShowBookmark = true;

//-------- Browser info ----------------//
var studentBrowserInfo;
var isIOSFF = false; //Mobile Firefox
var isNewiPad = false;

// Lessons TOC
// let toc_flyout_fn_array = [];
// let TOC_File_Order_Array = [];

//Chinese Ordinal Numbers...
// var chNumbers = ["一","二","三","四","五","六","七","八"];

// vars from JB Engine
var mod_lsn = [];
var lesson_title_text;
var jcc_TOC_Flyout_Menu;
var flscrollHeight;
var jcc_toc_fly_num = 0;


// JW: 2022-12-13
// Keeps track of the question index of the page
let QNum = 0;