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

var quizname = "ACS 101 Practice Questions, Module 4, Lesson 1";
var coursename = 'ACS 101';
var modulenumber = 4;
var title = "ACS_101_EOL2020_4_1";
var intNumPools = 1;
var numQ = 7;
var numTexts = 1;
var numChap = 1;
var arrTexts = new Array();
var arrNumChap = new Array();
var duration = 0;
arrTexts[0] = "ACS 101 Module 4 (2019)";
arrNumChap[0] = 1;
var thisChap = '1';

objPool = new Object(); 
objPool.intSelectCount = 7;
objPool.formID = 2212;
objPool.formName = 'EOL2020_4_1';
arrPoolQuestions = new Array();
arrPoolQuestions[0] = 'ACS_101_EOL_101';
arrPoolQuestions[1] = 'ACS_101_EOL_102';
arrPoolQuestions[2] = 'ACS_101_EOL_103';
arrPoolQuestions[3] = 'ACS_101_EOL_104';
arrPoolQuestions[4] = 'ACS_101_EOL_105';
arrPoolQuestions[5] = 'ACS_101_EOL_106';
arrPoolQuestions[6] = 'ACS_101_EOL_107';
objPool.arrPoolQuestions = arrPoolQuestions;
arrPools[0] = objPool;

arrQuestions['ACS_101_EOL_101'] = {
"strID": "ACS_101_EOL_101",
"questionID": 113918,
"item": "ACS_101_EOL2020_101",
"primaryLO": "1A",
"textref": "c. 1, p. 1",
"textbook": 3,
"chapter": 1,
"module": 4,
"arrLOs": [ "1A" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">Customer service planning usually begins with a customer service mission statement. By definition, the customer service mission statement</p>",
"arrAnsChoices": [ "enables CSRs to implement the customer service strategies", "establishes how the company will achieve its service objectives", "defines the long-term results the company wants to achieve", "describes the company’s primary purpose for providing customer service" ],
"arrAnsIDs": [ 460497, 460498, 460499, 460500 ],
"intCR": 4,
"arrAnswerFeedback": [ "<p class=\"explanations\"><i>Tactical plans</i> enable CSRs to implement customer service strategies.</p>", "<p class=\"explanations\">It is the <i>service strategies</i> that establish how the company will achieve its objectives.</p>", "<p class=\"explanations\"><i>Service objectives </i>define long-term results the company wants to achieve.</p>", "<p class=\"explanations\">The customer service mission statement describes the company’s primary purpose for providing customer service. The customer service mission statement is where customer service planning typically begins.</p>" ]
}

arrQuestions['ACS_101_EOL_102'] = {
"strID": "ACS_101_EOL_102",
"questionID": 113919,
"item": "ACS_101_EOL2020_102",
"primaryLO": "1A",
"textref": "c. 1, p. 1",
"textbook": 3,
"chapter": 1,
"module": 4,
"arrLOs": [ "1A" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">To be effective, a company’s performance standards must be meaningful, valid, realistic, understandable, and accepted. When a company’s performance standards are said to be meaningful, they must</p>",
"arrAnsChoices": [ "accurately reflect what the company wants to achieve", "be challenging, but achievable", "be linked directly to customer expectations and business objectives", "be clearly and effectively communicated so that all service providers know what they’re expected to do" ],
"arrAnsIDs": [ 460501, 460502, 460503, 460504 ],
"intCR": 3,
"arrAnswerFeedback": [ "<p class=\"explanations\"><i>Valid </i>performance standards accurately reflect what the company wants to achieve.</p>", "<p class=\"explanations\"><i>Realistic </i>performance standards are said to be challenging but achievable.</p>", "<p class=\"explanations\">When performance standards are said to be meaningful, they are linked directly to customer expectations and business objectives as well as to activities that can be measured and modified.</p>", "<p class=\"explanations\">Understandable performance standards are those that are clearly defined and effectively communicated to all service providers.</p>" ]
}

arrQuestions['ACS_101_EOL_103'] = {
"strID": "ACS_101_EOL_103",
"questionID": 113920,
"item": "ACS_101_EOL2020_103",
"primaryLO": "1A",
"textref": "c. 1, p. 1",
"textbook": 3,
"chapter": 1,
"module": 4,
"arrLOs": [ "1A" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">The following statements are about qualitative and quantitative performance measures. Select the answer choice containing the correct statement(s).</p><ol type=\"A\" class=\"combo\"><li>Qualitative measures, especially on a large scale, are often difficult to interpret.</li><li>In general, quantitative information is more difficult to gather and communicate.</li></ol>",
"arrAnsChoices": [ "Both A and B", "A only", "B only", "Neither A nor B" ],
"arrAnsIDs": [ 460505, 460506, 460507, 460508 ],
"intCR": 2,
"arrAnswerFeedback": [ "<p class=\"explanations\">At least one of the statements is incorrect.</p>", "<p class=\"explanations\">Statement A is correct. The reason qualitative measures are difficult to interpret is that the evaluator needs to make subjective judgments.</p>", "<p class=\"explanations\">Statement B is incorrect. Quantitative information is, in general, easier to gather and communicate.</p>", "<p class=\"explanations\">At least one of the statements is correct.</p>" ]
}

arrQuestions['ACS_101_EOL_104'] = {
"strID": "ACS_101_EOL_104",
"questionID": 113921,
"item": "ACS_101_EOL2020_104",
"primaryLO": "1B",
"textref": "c. 1, p. 2",
"textbook": 3,
"chapter": 1,
"module": 4,
"arrLOs": [ "1B" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">Insurance companies use key performance indicators (KPI) to monitor their progress toward meeting stated goals. Some of these KPIs are used to measure overall company performance and others are used to measure specific insurance activities. An example of a KPI used to measure overall company performance is</p>",
"arrAnsChoices": [ "revenue per shareholder", "time to underwriter", "average hold time", "claim turnaround time" ],
"arrAnsIDs": [ 460509, 460510, 460511, 460512 ],
"intCR": 1,
"arrAnswerFeedback": [ "<p class=\"explanations\">Revenue per policyholder is the insurer’s annual revenue earned divided by the number of active policyholders. This KPI measures <i>overall company performance</i>.</p>", "<p class=\"explanations\">Time to underwriter is the average number of calendar days between the receipt of application in the home office until the first underwriting review. This KPI measures a <i>specific insurance activity</i>.</p>", "<p class=\"explanations\">Average hold time is the average amount of time that a caller waits on hold during the course of a call, as well as between transfers. This KPI measures a <i>specific insurance activity</i>.</p>", "<p class=\"explanations\">Claim turnaround time is the average number of calendar days from the receipt of all required information needed for processing to the day the benefit check is mailed. This KPI measures a <i>specific insurance activity</i>.</p>" ]
}

arrQuestions['ACS_101_EOL_105'] = {
"strID": "ACS_101_EOL_105",
"questionID": 113922,
"item": "ACS_101_EOL2020_105",
"primaryLO": "1B",
"textref": "c. 1, p. 2",
"textbook": 3,
"chapter": 1,
"module": 4,
"arrLOs": [ "1B" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">The following statements are about balanced scorecards and performance dashboards. Select the answer choice containing the correct statement.</p>",
"arrAnsChoices": [ "A performance dashboard is a graphical display of a company’s performance over a set of key performance indicators that compares these values to performance standards over a specific period.", "A balanced scorecard is a type of user interface that graphically displays the status of a company’s most important performance indicators.", "While performance dashboards are updated periodically, balanced scorecards are updated in real time.", "Managers use balanced scorecards to assign target outcomes to a small number of financial or nonfinancial activities and then monitor the actual performance of those activities to see how closely current performance meets expectations." ],
"arrAnsIDs": [ 460513, 460514, 460515, 460516 ],
"intCR": 4,
"arrAnswerFeedback": [ "<p class=\"explanations\">A <i>balanced scorecard</i> is a graphical display of a company’s performance over a set of key performance indicators that compares these values to performance standards over a specific period.</p>", "<p class=\"explanations\">A <i>performance dashboard</i> is a type of user interface that graphically displays the status of a company’s most important performance indicators.</p>", "<p class=\"explanations\"><i>Balanced scorecards</i> are updated periodically and <i>performance dashboards</i> are updated in real time.</p>", "<p class=\"explanations\">Most companies determine which specific measures they will include in their balanced scorecards and then use industry benchmarks to evaluate the company’s performance based on those specific measures.</p>" ]
}

arrQuestions['ACS_101_EOL_106'] = {
"strID": "ACS_101_EOL_106",
"questionID": 113923,
"item": "ACS_101_EOL2020_106",
"primaryLO": "1C",
"textref": "c. 1, p. 2",
"textbook": 3,
"chapter": 1,
"module": 4,
"arrLOs": [ "1C" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">To be successful, a process must be both efficient and effective. An <u><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></u> process is doing things the right way. An <u><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></u> process is doing the right things.</p>",
"columnHead": "<u><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></u></div><div class=\"anshead\"><u><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></u>",
"arrAnsChoices": [ "effective</div><div class=\"anscell\" onclick=\"recordAns(1);\">effective", "effective</div><div class=\"anscell\" onclick=\"recordAns(2);\">efficient", "efficient</div><div class=\"anscell\" onclick=\"recordAns(3);\">effective", "efficient</div><div class=\"anscell\" onclick=\"recordAns(4);\">efficient" ],
"arrAnsIDs": [ 460518, 460519, 460520, 460521 ],
"intCR": 3,
"arrAnswerFeedback": [ "<p class=\"explanations\">One part of this answer choice is incorrect.</p>", "<p class=\"explanations\">Neither part of this answer choice is correct.</p>", "<p class=\"explanations\">An efficient process achieves its objectives with a minimum of waste, errors, or delays. It is doing things the right way. An effective process satisfies customers’ needs. It is doing the right things.</p>", "<p class=\"explanations\">One part of this answer choice is incorrect.</p>" ]
}

arrQuestions['ACS_101_EOL_107'] = {
"strID": "ACS_101_EOL_107",
"questionID": 113924,
"item": "ACS_101_EOL2020_107",
"primaryLO": "1C",
"textref": "c. 1, p. 3",
"textbook": 3,
"chapter": 1,
"module": 4,
"arrLOs": [ "1C" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">Process mapping is often used as part of process documentation. Process documentation is a complete recorded description of how to execute a specific process that contains enough detail for someone to successfully perform an instance of the process. One element often used as part of process documentation is a</p>",
"arrAnsChoices": [ "benchmark", "swim lane diagram", "five-step improvement system", "root-cause analysis" ],
"arrAnsIDs": [ 460522, 460523, 460524, 460525 ],
"intCR": 2,
"arrAnswerFeedback": [ "<p class=\"explanations\">A benchmark is a performance standard that is often based on a standard achieved by leading companies and that represent the company’s goal.</p>", "<p class=\"explanations\">A swim lane diagram is a process map that visually delineates who does what in a process. It is often used as part of process documentation.</p>", "<p class=\"explanations\">A five-step improvement system focuses on evaluating and improving the performance of existing business processes.</p>", "<p class=\"explanations\">Root-cause analysis is a systematic process for identifying “root causes” of problems and approaches for responding to them.</p>" ]
}




var arrlotext = new Array(); 
arrlotext['1A'] = "Describe the role of customer service objectives and strategies, and explain how performance standards allow insurance companies to measure the success of company objectives.";
arrlotext['1B'] = "Explain how a company uses benchmarks, key performance indicators, and performance management charts to monitor progress toward meeting targets and achieving goals.";
arrlotext['1C'] = "Analyze how process management and process improvement impact a company’s customer service system, and describe process improvement methods often used by insurance companies to improve inefficient and ineffective processes.";
