var intPassingScore = 70;
var randomize = 0;
var feedbacktype = 'answerlevel';
var arrQuestions = new Object();
var arrJ = new Object();
var arrPools = new Array();
var objPool;
var arrPoolQuestions;
var arrMinicases = new Array();
var objQuestion;
var arrChoices;
var arrCorrectChoices;
var strTestLocaleId = 'en-US';
var strCopyright = '2020';
var mediatype = 'End-of-Lesson';
var mediashort = 'EOL'; //use this in name of state status
var coursetype = 'hioc';

var quizname = "ACS 101 Practice Questions, Module 3, Lesson 3";
var coursename = 'ACS 101';
var modulenumber = 3;
var title = "ACS_101_EOL2020_3_3";
var intNumPools = 1;
var numQ = 6;
var numTexts = 1;
var numChap = 1;
var arrTexts = new Array();
var arrNumChap = new Array();
var duration = 0;
arrTexts[0] = "ACS 101 Module 3 (2019)";
arrNumChap[0] = 1;
var thisChap = '3';

objPool = new Object(); 
objPool.intSelectCount = 6;
objPool.formID = 2212;
objPool.formName = 'EOL2020_3_3';
arrPoolQuestions = new Array();
arrPoolQuestions[0] = 'ACS_101_EOL_095';
arrPoolQuestions[1] = 'ACS_101_EOL_096';
arrPoolQuestions[2] = 'ACS_101_EOL_097';
arrPoolQuestions[3] = 'ACS_101_EOL_098';
arrPoolQuestions[4] = 'ACS_101_EOL_099';
arrPoolQuestions[5] = 'ACS_101_EOL_100';
objPool.arrPoolQuestions = arrPoolQuestions;
arrPools[0] = objPool;

arrQuestions['ACS_101_EOL_095'] = {
"strID": "ACS_101_EOL_095",
"questionID": 113912,
"item": "ACS_101_EOL2020_095",
"primaryLO": "3A",
"textref": "c. 3, p. 1",
"textbook": 2,
"chapter": 3,
"module": 3,
"arrLOs": [ "3A" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">One way to make sure that goals are effective is to set SMART goals. SMART is an acronym that uses five individual criteria to measure and evaluate a goal and determine its viability. These five criteria are specific, measureable, achievable, relevant, and time-bound. Select the answer choice containing a question that an achievable goal will answer.</p>",
"arrAnsChoices": [ "When will I have the goal completed?", "How will I know when the goal is accomplished?", "What actions do I need to take to meet the goal?", "Does the goal support corporate, department, or team missions?" ],
"arrAnsIDs": [ 460473, 460474, 460475, 460476 ],
"intCR": 3,
"arrAnswerFeedback": [ "<p class=\"explanations\">This question will help determine if a goal is <i>specific</i>.</p>", "<p class=\"explanations\">This question will help determine if a goal is <i>measurable</i>.</p>", "<p class=\"explanations\">Other questions that determine if a goal is achievable include, “Is the goal realistic enough to be accomplished?” or “Can the goal be accomplished, given the available resources?”</p>", "<p class=\"explanations\">This question will help determine if a goal is <i>relevant</i>.</p>" ]
}

arrQuestions['ACS_101_EOL_096'] = {
"strID": "ACS_101_EOL_096",
"questionID": 113913,
"item": "ACS_101_EOL2020_096",
"primaryLO": "3A",
"textref": "c. 3, p. 1",
"textbook": 2,
"chapter": 3,
"module": 3,
"arrLOs": [ "3A" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">One of the most effective ways to prioritize tasks is to rank them according to their levels of importance and urgency. A task categorized as an essential task, such as completing mandatory training, would be considered (<b>important / not important</b>). In terms of urgency, an essential task would be considered (<b>urgent / not urgent</b>).</p>",
"arrAnsChoices": [ "important / urgent", "important / not urgent", "not important / urgent", "not important / not urgent" ],
"arrAnsIDs": [ 460477, 460478, 460479, 460480 ],
"intCR": 2,
"arrAnswerFeedback": [ "<p class=\"explanations\">At least one part of this answer choice is incorrect.</p>", "<p class=\"explanations\">Essential tasks are important, but they are not urgent. They require action, but timing is not critical. It’s important, however, to complete them as soon as possible to prevent procrastination from pushing these tasks into the critical category.</p>", "<p class=\"explanations\">At least one part of this answer choice is incorrect.</p>", "<p class=\"explanations\">At least one part of this answer choice is incorrect.</p>" ]
}

arrQuestions['ACS_101_EOL_097'] = {
"strID": "ACS_101_EOL_097",
"questionID": 113914,
"item": "ACS_101_EOL2020_097",
"primaryLO": "3B",
"textref": "c. 3, p. 2",
"textbook": 2,
"chapter": 3,
"module": 3,
"arrLOs": [ "3B" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">The following statements are about stress and distress. Three of the statements are true and one is false. Select the answer choice containing the <B>FALSE</B> statement.</p>",
"arrAnsChoices": [ "The difference between stressors and distressors is objective, and it is important to know which is which.", "Many stressors produce beneficial results by pushing us to accomplish more and helping us to grow.", "Each person needs to recognize and analyze for themselves the signs and causes of stress at work.", "Stress can be detrimental and can lead to problems with our physical, psychological, and emotional health if not handled properly." ],
"arrAnsIDs": [ 460481, 460482, 460483, 460484 ],
"intCR": 1,
"arrAnswerFeedback": [ "<p class=\"explanations\">The difference between stressors and distressors is <i>subjective</i>. Something that is a distressor for one person may not be a distressor for another person. </p>", "<p class=\"explanations\">It is true that many stressors can be beneficial—pushing us to accomplish more and helping us grow professionally, intellectually, emotionally, and physically.</p>", "<p class=\"explanations\">It is true that stress is specific to each individual and each individual should recognize and analyze the signs and causes of stress at work.</p>", "<p class=\"explanations\">It is true that stress can lead to problems with physical, psychological, and emotional health if not handled properly.</p>" ]
}

arrQuestions['ACS_101_EOL_098'] = {
"strID": "ACS_101_EOL_098",
"questionID": 113915,
"item": "ACS_101_EOL2020_098",
"primaryLO": "3B",
"textref": "c. 3, p. 2",
"textbook": 2,
"chapter": 3,
"module": 3,
"arrLOs": [ "3B" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">Three common coping styles are emotion-focused, problem-focused, and relationship-focused coping styles. An example of a <i>problem-focused</i> coping style is to</p>",
"arrAnsChoices": [ "practice mindfulness", "condition yourself to withstand stress", "set a boundary", "reinterpret stressful events" ],
"arrAnsIDs": [ 460485, 460486, 460487, 460488 ],
"intCR": 4,
"arrAnswerFeedback": [ "<p class=\"explanations\">Practicing mindfulness is an example of an <i>emotion-focused</i> coping style.</p>", "<p class=\"explanations\">Conditioning yourself to withstand stress is an example of an <i>emotion-focused</i> coping style.</p>", "<p class=\"explanations\">Setting a boundary is an example of a <i>relationship-focused</i> coping style.</p>", "<p class=\"explanations\">The problem-focused coping style encourages people to examine the factors that are causing stress. When using this coping style, you attempt to identify your options, avoid or eliminate distressors, and reinterpret stressful events.</p>" ]
}

arrQuestions['ACS_101_EOL_099'] = {
"strID": "ACS_101_EOL_099",
"questionID": 113916,
"item": "ACS_101_EOL2020_099",
"primaryLO": "3A",
"textref": "c. 3, p. 1",
"textbook": 2,
"chapter": 3,
"module": 3,
"arrLOs": [ "3A" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">Scheduling involves determining when to complete tasks, in what order to complete tasks, and how long each task will take to complete. The following statements are about scheduling. Select the answer choice containing the correct statement.</p>",
"arrAnsChoices": [ "If you have created a reasonable schedule, it will prevent unexpected events from interfering.", "Computers are good at multitasking because they use a method called chunking.", "You can’t always predict exactly how much time a new project or a particular activity is going to take.", "Completing a project from beginning to end at one time is usually the most efficient way to complete the project." ],
"arrAnsIDs": [ 460489, 460490, 460491, 460492 ],
"intCR": 3,
"arrAnswerFeedback": [ "<p class=\"explanations\">Nothing can prevent unexpected events from occurring. You should always build extra time into a schedule for handling unexpected events.</p>", "<p class=\"explanations\">Since people are not adept at multitasking, chunking is a method to help people when multitasking is unavoidable.</p>", "<p class=\"explanations\">While it is true that you can’t always predict exactly how much time a new project or activity is going to take, you can probably make a reasonable estimate.</p>", "<p class=\"explanations\">Instead of completing each project before moving on to the next, it is more efficient to divide the projects into tasks and complete the similar tasks at the same time.</p>" ]
}

arrQuestions['ACS_101_EOL_100'] = {
"strID": "ACS_101_EOL_100",
"questionID": 113917,
"item": "ACS_101_EOL2020_100",
"primaryLO": "3B",
"textref": "c. 3, p. 2",
"textbook": 2,
"chapter": 3,
"module": 3,
"arrLOs": [ "3B" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">A method of conditioning yourself to withstand stress is to practice radical acceptance. Radical acceptance involves </p>",
"arrAnsChoices": [ "being non-judgmental while not agreeing with the situation and behavior", "being non-judgmental while not being aware of emotions ", "agreeing with the situation and behavior and being non-judgmental", "agreeing with the situation and behavior while not being aware of emotions" ],
"arrAnsIDs": [ 460493, 460494, 460495, 460496 ],
"intCR": 1,
"arrAnswerFeedback": [ "<p class=\"explanations\">Radical acceptance involves accepting the reality of a stressful situation without attempting to change it, protest against it, or avoid it.</p>", "<p class=\"explanations\">Being aware of emotions is part of radical acceptance.</p>", "<p class=\"explanations\">Agreeing with the situation and behavior is not radical acceptance. Being non-judgmental is radical acceptance.</p>", "<p class=\"explanations\">Agreeing with the situation and behavior is not radical acceptance. Being aware of emotions is radical acceptance.</p>" ]
}




var arrlotext = new Array(); 
arrlotext['3A'] = "Explain the benefits of setting goals and defining priorities, and be able to create SMART goals and priority lists.";
arrlotext['3B'] = "Explain the difference between stress and distress and identify the three coping styles people use to reduce stress and distress.";
