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

var quizname = "ACS 101 Practice Questions, Module 1, Lesson 3";
var coursename = 'ACS 101';
var modulenumber = 1;
var title = "ACS_101_EOL2020_1_3";
var intNumPools = 1;
var numQ = 6;
var numTexts = 1;
var numChap = 1;
var arrTexts = new Array();
var arrNumChap = new Array();
var duration = 0;
arrTexts[0] = "ACS 101 Module 1 (2019)";
arrNumChap[0] = 1;
var thisChap = '3';

objPool = new Object(); 
objPool.intSelectCount = 6;
objPool.formID = 2212;
objPool.formName = 'EOL2020_1_3';
arrPoolQuestions = new Array();
arrPoolQuestions[0] = 'ACS_101_EOL_018';
arrPoolQuestions[1] = 'ACS_101_EOL_019';
arrPoolQuestions[2] = 'ACS_101_EOL_020';
arrPoolQuestions[3] = 'ACS_101_EOL_021';
arrPoolQuestions[4] = 'ACS_101_EOL_022';
arrPoolQuestions[5] = 'ACS_101_EOL_023';
objPool.arrPoolQuestions = arrPoolQuestions;
arrPools[0] = objPool;

arrQuestions['ACS_101_EOL_018'] = {
"strID": "ACS_101_EOL_018",
"questionID": 113835,
"item": "ACS_101_EOL2020_018",
"primaryLO": "3A",
"textref": "c. 3, pp. 2-3",
"textbook": 0,
"chapter": 3,
"module": 1,
"arrLOs": [ "3A" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">Voice of the customer (VOC) data can be captured actively or passively. (<b>Active </b>/ <b>Passive</b>) VOC data is solicited from customers by how they respond when directly asked a question. One tool used to collect passive VOC data are data files sent by a company’s website to a visitor’s web browser, known as (<b>surveys </b>/ <b>cookies</b>). </p>",
"arrAnsChoices": [ "Active / surveys", "Active / cookies", "Passive / surveys", "Passive / cookies" ],
"arrAnsIDs": [ 460163, 460164, 460165, 460166 ],
"intCR": 2,
"arrAnswerFeedback": [ "<p class=\"explanations\">Active VOC data is solicited directly from customers. However, surveys are <b>not </b>used to collect passive VOC data.</p>", "<p class=\"explanations\">Active VOC data is solicited directly from customers by how they respond when directly asked questions via surveys, focus groups, interviews, and advisory panels. Cookies are a tool used to collect passive VOC data, and can be categorized as single-session cookies or persistent cookies.</p>", "<p class=\"explanations\">Passive VOC data is <b>not </b>solicited from customers by how they respond when directly asked a question. Additionally, surveys are <b>not</b> used to collect passive VOC data.</p>", "<p class=\"explanations\">It is true that cookies are a tool used to collect passive VOC data. However, passive VOC data is <b>not </b>solicited from customers by how they respond when directly asked a question.</p>" ]
}

arrQuestions['ACS_101_EOL_019'] = {
"strID": "ACS_101_EOL_019",
"questionID": 113836,
"item": "ACS_101_EOL2020_019",
"primaryLO": "3B",
"textref": "c. 3, pp. 9-10",
"textbook": 0,
"chapter": 3,
"module": 1,
"arrLOs": [ "3B" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">Surveys can use both qualitative and quantitative questions to gather voice of the customer (VOC) data. Select the answer choice containing a <i>qualitative</i> question.</p>",
"arrAnsChoices": [ "On a scale from 1 to 5, how would you rate your last interaction with our customer service representative?", "How long did it take to fulfill your request?", "Were you kept informed during your application process?", "How do you feel we could best improve our claims process?" ],
"arrAnsIDs": [ 460167, 460168, 460169, 460170 ],
"intCR": 4,
"arrAnswerFeedback": [ "<p class=\"explanations\">This is a <b>quantitative</b> question.</p>", "<p class=\"explanations\">This is a <b>quantitative</b> question.</p>", "<p class=\"explanations\">This is a <b>quantitative</b> question.</p>", "<p class=\"explanations\">Qualitative, open-ended questions help companies learn more about customers’ specific circumstances, identify pain points, and discover potential solutions to those pain points. </p>" ]
}

arrQuestions['ACS_101_EOL_020'] = {
"strID": "ACS_101_EOL_020",
"questionID": 113837,
"item": "ACS_101_EOL2020_020",
"primaryLO": "3B",
"textref": "c. 3, p. 2",
"textbook": 0,
"chapter": 3,
"module": 1,
"arrLOs": [ "3B" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">Insurance companies use quantitative research tools and qualitative research tools to gather information about customers. Examples of <i>quantitative</i> research tools include</p>",
"arrAnsChoices": [ "in-depth interviews", "advisory panels", "sampling", "focus groups" ],
"arrAnsIDs": [ 460171, 460172, 460173, 460174 ],
"intCR": 3,
"arrAnswerFeedback": [ "<p class=\"explanations\">In-depth interviews—loosely structured conversations during which a few respondents are interviewed individually and asked to provide detailed information on a specific topic—are <b>qualitative</b> research tools. Quantitative research uses objective data collection methods and provides data that can be analyzed and summarized in the form of numbers.</p>", "<p class=\"explanations\">Advisory panels—standing groups that meet on a regular basis to provide a company with qualitative information about a company’s services and to suggest ways to improve those services—are <b>qualitative </b>research tools. Quantitative research uses objective data collection methods and provides data that can be analyzed and summarized in the form of numbers.</p>", "<p class=\"explanations\">Sampling, a technique used in quantitative research, consists of examining a portion of a given group to develop conclusions about the entire group. Quantitative research uses objective data collection methods and provides data that can be analyzed and summarized in the form of numbers.</p><p class=\"explanations\">Qualitative research uses subjective data collection methods—such as in-depth interview, advisory panels, focus groups, complaint monitoring—to examine what people think, how they feel about the subject under study, and the words they use to express those thoughts and feelings. Although surveys are typically designed to provide quantitative data, they may also include qualitative questions.</p>", "<p class=\"explanations\">Focus groups—unstructured, informal sessions during which six to ten participants are asked to discuss their opinions about a certain topic—are <b>qualitative</b> research tools. Quantitative research uses objective data collection methods and provides data that can be analyzed and summarized in the form of numbers.</p>" ]
}

arrQuestions['ACS_101_EOL_021'] = {
"strID": "ACS_101_EOL_021",
"questionID": 113838,
"item": "ACS_101_EOL2020_021",
"primaryLO": "3C",
"textref": "c. 3, p. 3",
"textbook": 0,
"chapter": 3,
"module": 1,
"arrLOs": [ "3C" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">To better understand the habits, needs, and motivations of consumers in a particular portion of a market segment for term life insurance, a marketing researcher at the Opal Company developed a type of model known as a (<b>persona / inference</b>). During this process, the researcher collected stories of user experiences using in-depth interviews, which is a type of research known as (<b>analytical / anecdotal</b>) research.</p>",
"arrAnsChoices": [ "persona / analytical", "persona / anecdotal", "stakeholder / analytical", "stakeholder / anecdotal" ],
"arrAnsIDs": [ 460175, 460176, 460177, 460178 ],
"intCR": 2,
"arrAnswerFeedback": [ "<p class=\"explanations\">It is correct to say the researcher created a type of model known as a persona; however, collecting stories of user experiences is <b>not</b> analytical research, which is based on compiling specific data and metrics.</p>", "<p class=\"explanations\">A persona is a model developed to represent a particular portion of a market segment to better understand the habits, needs, and motivations of consumers in that segment. The foundation of persona creation may be a mix of analytical research, which compiles specific data and metrics using quantitative methods, and anecdotal research, which collects anecdotes, or stories, of user experiences using qualitative methods.</p>", "<p class=\"explanations\">The model created by the Opal researcher is <b>not</b> a stakeholder, which is any party that has an interest in how a company conducts its business. Also, collecting stories of user experiences is not analytical research, which is based on compiling specific data and metrics.</p>", "<p class=\"explanations\">It is correct to say that the Opal researcher used anecdotal research when he collected stories of user experiences. However, the model created by the researcher is <b>not</b> a stakeholder, which is any party that has an interest in how a company conducts its business.</p>" ]
}

arrQuestions['ACS_101_EOL_022'] = {
"strID": "ACS_101_EOL_022",
"questionID": 113839,
"item": "ACS_101_EOL2020_022",
"primaryLO": "3C",
"textref": "c. 3, p. 16",
"textbook": 0,
"chapter": 3,
"module": 1,
"arrLOs": [ "3C" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">During the customer journey, real or imagined problems that a company plans to solve are known as </p>",
"arrAnsChoices": [ "customer journey maps", "pain points", "infographics", "touchpoints" ],
"arrAnsIDs": [ 460179, 460180, 460181, 460182 ],
"intCR": 2,
"arrAnswerFeedback": [ "<p class=\"explanations\">A customer journey map is a visual depiction of a customer persona’s needs and perceptions at each touchpoint on the customer journey.</p>", "<p class=\"explanations\">The most negative experiences on a customer journey map indicate critical pain points. Pain points reveal areas where the company must improve.</p>", "<p class=\"explanations\">Infographics are images designed to make complex information easy to understand and patterns easy to identify without a lot of reading or synthesis.</p>", "<p class=\"explanations\">Touchpoints occur any time a company and its customers–or potential customers–interact.</p>" ]
}

arrQuestions['ACS_101_EOL_023'] = {
"strID": "ACS_101_EOL_023",
"questionID": 113840,
"item": "ACS_101_EOL2020_023",
"primaryLO": "3D",
"textref": "c. 3, p. 20",
"textbook": 0,
"chapter": 3,
"module": 1,
"arrLOs": [ "3D" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">The following statement(s) can correctly be made about a closed-loop feedback process:</p><ol type=\"A\" class=\"combo\"><li>The closed-loop feedback process encourages a continuous dialogue with customers.</li><li>Customers feel valued when they receive a response, even if their feedback was negative.</li></ol>",
"arrAnsChoices": [ "Both A and B", "A only", "B only", "Neither A nor B" ],
"arrAnsIDs": [ 460183, 460184, 460185, 460186 ],
"intCR": 1,
"arrAnswerFeedback": [ "<p class=\"explanations\">In a closed-loop feedback process, an insurance company collects and listens to customer feedback, tells the customer what the company will do in response to the feedback, and then acts on the feedback. Customers feel valued when they receive a response, even if their feedback was negative, because the closed-loop feedback process encourages a continuous dialogue with customers.</p>", "<p class=\"explanations\">Statement A is <b>not</b> the only correct statement.</p>", "<p class=\"explanations\">Statement B is <b>not </b>the only correct statement.</p>", "<p class=\"explanations\">At least one of the statements is correct.</p>" ]
}




var arrlotext = new Array(); 
arrlotext['3A'] = "Define the voice of the customer; distinguish between active VOC data and passive VOC data; and describe how insurance companies use VOC data to drive change.";
arrlotext['3B'] = "Give examples of the quantitative and qualitative research methods companies use to collect VOC data.";
arrlotext['3C'] = "Describe the customer journey, and identify the key touchpoints on that journey.";
arrlotext['3D'] = "Describe how closing the loop improves customer satisfaction.";
