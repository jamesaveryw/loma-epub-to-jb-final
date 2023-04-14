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

var quizname = "ACS 101 Practice Questions, Module 4, Lesson 2";
var coursename = 'ACS 101';
var modulenumber = 4;
var title = "ACS_101_EOL2020_4_2";
var intNumPools = 1;
var numQ = 6;
var numTexts = 1;
var numChap = 1;
var arrTexts = new Array();
var arrNumChap = new Array();
var duration = 0;
arrTexts[0] = "ACS 101 Module 4 (2019)";
arrNumChap[0] = 1;
var thisChap = '2';

objPool = new Object(); 
objPool.intSelectCount = 6;
objPool.formID = 2212;
objPool.formName = 'EOL2020_4_2';
arrPoolQuestions = new Array();
arrPoolQuestions[0] = 'ACS_101_EOL_108';
arrPoolQuestions[1] = 'ACS_101_EOL_109';
arrPoolQuestions[2] = 'ACS_101_EOL_110';
arrPoolQuestions[3] = 'ACS_101_EOL_111';
arrPoolQuestions[4] = 'ACS_101_EOL_112';
arrPoolQuestions[5] = 'ACS_101_EOL_113';
objPool.arrPoolQuestions = arrPoolQuestions;
arrPools[0] = objPool;

arrQuestions['ACS_101_EOL_108'] = {
"strID": "ACS_101_EOL_108",
"questionID": 113925,
"item": "ACS_101_EOL2020_108",
"primaryLO": "2A",
"textref": "c. 2, p. 1",
"textbook": 3,
"chapter": 2,
"module": 4,
"arrLOs": [ "2A" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">Operational metrics measure the efficiency and effectiveness of company processes. The operational metrics commonly used by insurance companies to measure customer service performance include accessibility, timeliness, accuracy, productivity, and quality. An example of a timeliness metric is</p>",
"arrAnsChoices": [ "calls answered on time", "processes completed", "first-contact resolution", "average speed of answer" ],
"arrAnsIDs": [ 460526, 460527, 460528, 460529 ],
"intCR": 3,
"arrAnswerFeedback": [ "<p class=\"explanations\">Calls answered on time is an example of an <i>accessibility</i> metric.</p>", "<p class=\"explanations\">Processes completed is an example of a <i>productivity</i> metric.</p>", "<p class=\"explanations\">First-contact resolution is an example of a timeliness metric. Insurance companies often use timeliness as an indicator of how efficient their service providers are. Additional examples include response time—the amount of time that transpires from receipt of a customer contact to resolution of the request.</p>", "<p class=\"explanations\">Average speed of answer is an example of an <i>accessibility</i> metric.</p>" ]
}

arrQuestions['ACS_101_EOL_109'] = {
"strID": "ACS_101_EOL_109",
"questionID": 113926,
"item": "ACS_101_EOL2020_109",
"primaryLO": "2A",
"textref": "c. 2, p. 1",
"textbook": 3,
"chapter": 2,
"module": 4,
"arrLOs": [ "2A" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">One measure of service quality for an insurer is to evaluate the amount of business that remains in force through a certain period of time. At the Argyle Insurance Company, 200 policies were in force at the beginning of the year. By the end of the year, 15 policies had lapsed. This information indicates that Argyle’s customer retention rate for that year is</p>",
"arrAnsChoices": [ "7.5%", "12.33%", "56%", "92.5%" ],
"arrAnsIDs": [ 460530, 460531, 460532, 460533 ],
"intCR": 4,
"arrAnswerFeedback": [ "<p class=\"explanations\">The customer retention rate can be computed as the number of policies in force at the end of the period divided by the number of policies at the beginning of the period, or (200 – 15) / 200 = 0.925 x 100 = 92.5%.</p>", "<p class=\"explanations\">The customer retention rate can be computed as the number of policies in force at the end of the period divided by the number of policies at the beginning of the period, or (200 – 15) / 200 = 0.925 x 100 = 92.5%.</p>", "<p class=\"explanations\">The customer retention rate can be computed as the number of policies in force at the end of the period divided by the number of policies at the beginning of the period, or (200 – 15) / 200 = 0.925 x 100 = 92.5%.</p>", "<p class=\"explanations\">Argyle’s customer retention rate is 92.5%, computed as the number of policies in force at the end of the year divided by the number of policies in force at the beginning of the year, or (200 – 15) / 200 = 0.925 x 100 = 92.5%.</p>" ]
}

arrQuestions['ACS_101_EOL_110'] = {
"strID": "ACS_101_EOL_110",
"questionID": 113927,
"item": "ACS_101_EOL2020_110",
"primaryLO": "2A",
"textref": "c. 2, p. 1",
"textbook": 3,
"chapter": 2,
"module": 4,
"arrLOs": [ "2A" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">Choosing the right metrics allows a company to continuously improve. In addition to choosing appropriate operational and service metrics, a company needs to ensure that the metrics it uses are actionable metrics. The following statements are about actionable metrics. Select the answer choice containing the correct statement(s).</p><ol type=\"A\" class=\"combo\"><li>By linking specific and repeatable actions to identifiable results, actionable metrics help a company make informed business decisions in order to meet company goals.</li><li>Actionable metrics are typically more effective if they measure total numbers rather than growth.</li></ol>",
"arrAnsChoices": [ "Both A and B", "A only", "B only", "Neither A nor B" ],
"arrAnsIDs": [ 460534, 460535, 460536, 460537 ],
"intCR": 2,
"arrAnswerFeedback": [ "<p class=\"explanations\">At least one of the statements is incorrect.</p>", "<p class=\"explanations\">Actionable metrics link specific and repeatable actions to identifiable results and, therefore, help a company make informed business decisions in order to meet company goals.</p>", "<p class=\"explanations\">Actionable metrics are generally more effective when they measure rates rather than total numbers. While total numbers provide information, a company often learns more relevant and useful information by determining growth rather than totals.</p>", "<p class=\"explanations\">At least one of the statements is correct.</p>" ]
}

arrQuestions['ACS_101_EOL_111'] = {
"strID": "ACS_101_EOL_111",
"questionID": 113928,
"item": "ACS_101_EOL2020_111",
"primaryLO": "2B",
"textref": "c. 2, p. 2",
"textbook": 3,
"chapter": 2,
"module": 4,
"arrLOs": [ "2B" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">Arnie Pollard, a customer of the Flugelhorn Insurance Company, called Flugelhorn to check on the status of his automatic premium payment request. At the end of the call, Mr.&nbsp;Pollard was asked to remain on the line to take a brief survey. This survey was most likely a</p>",
"arrAnsChoices": [ "transaction survey, and its purpose was for Flugelhorn to learn about the CSR’s courtesy, communication skills, and product knowledge", "transaction survey, and its purpose was for Flugelhorn to obtain general feedback on a variety of issues", "general survey, and its purpose was for Flugelhorn to learn about a CSR’s courtesy, communication skills, and product knowledge", "general survey, and its purpose was for Flugelhorn to obtain general feedback on a variety of issues" ],
"arrAnsIDs": [ 460538, 460539, 460540, 460541 ],
"intCR": 1,
"arrAnswerFeedback": [ "<p class=\"explanations\">The survey Mr.&nbsp;Pollard was asked to take was most likely a transaction survey, which provides the company with information about the particular services or actions performed by an organization or its representatives during a specific customer contact. A transaction survey also may ask a customer to assign an overall satisfaction rating to the transaction and to the company as a whole.</p>", "<p class=\"explanations\">The survey Mr.&nbsp;Pollard was asked to take was most likely a transaction survey; however, the purpose of a transaction survey is not to obtain feedback on a variety of issues, which is the purpose of a general survey.</p>", "<p class=\"explanations\">The purpose of the survey Mr.&nbsp;Pollard was asked to take was most likely to learn about the CSR’s courtesy, communication skills, and product knowledge. However, such a survey is not a general survey.</p>", "<p class=\"explanations\">The survey Mr.&nbsp;Pollard was asked to take most likely was not a general survey. General surveys are typically done in the form of mass mailings, emails, or outbound telephone calls to obtain feedback on a variety of issues.</p>" ]
}

arrQuestions['ACS_101_EOL_112'] = {
"strID": "ACS_101_EOL_112",
"questionID": 113929,
"item": "ACS_101_EOL2020_112",
"primaryLO": "2B",
"textref": "c. 2, p. 2",
"textbook": 3,
"chapter": 2,
"module": 4,
"arrLOs": [ "2B" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">Barksdale Insurance hires independent contractors to conduct insurance transactions as if they were real customers. This information indicates that Barksdale monitors its customer service interactions through the use of</p>",
"arrAnsChoices": [ "real-time monitoring", "recorded monitoring", "mystery shoppers", "remote monitoring" ],
"arrAnsIDs": [ 460542, 460543, 460544, 460545 ],
"intCR": 3,
"arrAnswerFeedback": [ "<p class=\"explanations\">Real-time monitoring allows an evaluator to provide immediate feedback to the service provider and, if necessary, make corrections to the information the service provider is relaying to the customer.</p>", "<p class=\"explanations\">Recorded monitoring is a process in which customer service interactions are recorded for later review by the service provider and supervisor together.</p>", "<p class=\"explanations\">The use of mystery shoppers eliminates some of the stress created by real-time monitoring because service providers are unaware of being monitored. It also provides greater flexibility than monitoring actual customer interactions because the mystery shopper can manipulate the circumstances to see how service providers respond to different scenarios.</p>", "<p class=\"explanations\">In remote monitoring, the evaluator is electronically linked to a customer service interaction from a location away from the service provider’s workstation.</p>" ]
}

arrQuestions['ACS_101_EOL_113'] = {
"strID": "ACS_101_EOL_113",
"questionID": 113930,
"item": "ACS_101_EOL2020_113",
"primaryLO": "2B",
"textref": "c. 2, p. 2",
"textbook": 3,
"chapter": 2,
"module": 4,
"arrLOs": [ "2B" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">Emerging technology offers insurers a more holistic view of their customer service skills and customer satisfaction. Social media monitoring</p>",
"arrAnsChoices": [ "allows insurers to identify and assess what people say about the company, its products, and the insurance industry", "uses software to turn all customer interactions into structured data companies can use to give feedback to service providers", "gathers passive voice-of-the-customer (VOC) data, which can help a company identify which employees excel at conflict resolution and which could use additional training or supervision", "allows service providers and their supervisors to listen to the service provider’s performance together and identify strengths and opportunities for improvement" ],
"arrAnsIDs": [ 460546, 460547, 460548, 460549 ],
"intCR": 1,
"arrAnswerFeedback": [ "<p class=\"explanations\">This answer choice is an example of social media monitoring. Social media monitoring software collects every mention of a company.</p>", "<p class=\"explanations\"><i>Omnichannel customer interaction analytics</i> uses software to turn all customer interactions via voice, web chat, email, text, social media, and other communication channels into structured data that companies can use to give feedback to service providers. It gives insurers a complete view of how employees interact with customers and how customers feel about the company during those interactions. </p>", "<p class=\"explanations\">This answer choice is an example of the use of <i>speech analytics</i>.</p>", "<p class=\"explanations\">This answer choice is an advantage of <i>recorded monitoring</i>.</p>" ]
}




var arrlotext = new Array(); 
arrlotext['2A'] = "Distinguish between operational and service metrics and explain how insurance companies use them to measure the accessibility, timeliness, productivity, and quality of customer service processes.";
arrlotext['2B'] = "Describe how insurers use customer satisfaction surveys, observations, and monitoring to evaluate their customer service system and service provider performance.";
