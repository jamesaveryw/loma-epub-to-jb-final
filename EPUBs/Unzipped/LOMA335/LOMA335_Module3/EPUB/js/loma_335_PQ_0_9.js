﻿var intPassingScore = 70;
var randomize = 0;
var feedbacktype = 'answerlevel';
var arrQuestions = new Object();
var arrPools = new Array();
var objPool;
var arrPoolQuestions;
var arrMinicases = new Array();
var objQuestion;
var arrChoices;
var arrCorrectChoices;
var strTestLocaleId = 'en-US';
var strCopyright = '2019';
var mediatype = 'Practice Questions';
var mediashort = 'PPQ'; //use this in name of state status
var coursetype = 'pdf';

var quizname = "LOMA 335 Practice Questions, Chapter 9";
var coursename = 'LOMA 335';
var modulenumber = 0;
var title = "LOMA_335_PPQ2019_0_9";
var intNumPools = 1;
var numQ = 8;
var numTexts = 1;
var numChap = 1;
var arrTexts = new Array();
var arrNumChap = new Array();
var duration = 0;
arrTexts[0] = "Operational Excellence for Insurance Professionals (2019)";
arrNumChap[0] = 1;
var thisChap = '9';

objPool = new Object(); 
objPool.intSelectCount = 8;
objPool.formID = 2062;
objPool.formName = 'PPQ2019_0_9';
arrPoolQuestions = new Array();
arrPoolQuestions[0] = 'LOMA_335_PQ_089';
arrPoolQuestions[1] = 'LOMA_335_PQ_090';
arrPoolQuestions[2] = 'LOMA_335_PQ_091';
arrPoolQuestions[3] = 'LOMA_335_PQ_092';
arrPoolQuestions[4] = 'LOMA_335_PQ_093';
arrPoolQuestions[5] = 'LOMA_335_PQ_094';
arrPoolQuestions[6] = 'LOMA_335_PQ_095';
arrPoolQuestions[7] = 'LOMA_335_PQ_096';
objPool.arrPoolQuestions = arrPoolQuestions;
arrPools[0] = objPool;

objQuestion = new Object();
objQuestion.strID = 'LOMA_335_PQ_089';
objQuestion.questionID = 109377;
objQuestion.item = 'LOMA_335_PPQ2019_089';
objQuestion.primaryLO = '9A';
objQuestion.textref = 'c. 9, p. 2';
objQuestion.textbook = 0;
objQuestion.chapter = 9;
objQuestion.module = 0;
var arrLOs = new Array();
arrLOs[0] = '9A';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">The following statement(s) can correctly be made about the importance of data. </p><ol type=\"A\" class=\"combo\"><li>Prior to making analytical decisions, decision makers need access to the right data.</li><li>Insurers can use data to improve the quality of the information guiding their business decisions. </li></ol>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "Both A and B";
arrAnsChoices[1] = "A only";
arrAnsChoices[2] = "B only";
arrAnsChoices[3] = "Neither A nor B";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 442042;
arrAnsIDs[1] = 442043;
arrAnsIDs[2] = 442044;
arrAnsIDs[3] = 442045;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 1;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">Statement A is correct. Decision makers need to acquire, analyze, and report the data they need to address business needs correctly and increase value to customers.</p><p class=\"explanations\">Statement B is correct. Typically, a decision maker forms one or more answerable business questions soon after identifying an opportunity, challenge, or other situation that requires a business decision.</p><p class=\"explanations\"><b>Learning Objective: 9A. Describe the importance of data and its relationship to decision making.</b></p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">Statement A is correct; however, it is not the only correct statement.</p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">Statement B is correct; however, it is not the only correct statement.</p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">At least one of these statements is correct.</p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_335_PQ_089'] = objQuestion;


objQuestion = new Object();
objQuestion.strID = 'LOMA_335_PQ_090';
objQuestion.questionID = 109378;
objQuestion.item = 'LOMA_335_PPQ2019_090';
objQuestion.primaryLO = '9B';
objQuestion.textref = 'c. 9, pp. 3-4';
objQuestion.textbook = 0;
objQuestion.chapter = 9;
objQuestion.module = 0;
var arrLOs = new Array();
arrLOs[0] = '9B';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">Companies use quantitative and qualitative research to answer business questions. An example of qualitative research is</p>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "a study of expenses and other measures of operational performance in which a company compares its performance with that of its peers";
arrAnsChoices[1] = "a study of the longevity and ages at death of large groups of people";
arrAnsChoices[2] = "research that uses subjective data collection methods and produces data that is difficult to summarize in numerical form";
arrAnsChoices[3] = "a type of comparison study in which employers share their compensation data with an external researcher, who accumulates and analyzes the data.";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 442046;
arrAnsIDs[1] = 442047;
arrAnsIDs[2] = 442048;
arrAnsIDs[3] = 442049;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 3;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">This is a description of a benchmarking study, which is a type of <b>quantitative</b> research.</p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">This is a description of a mortality study, which is a type of <b>quantitative</b> research.</p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">Quantitative research is research designed to generate easy-to-analyze numerical data. Quantitative research emphasizes measures that result in objective data, such as polls and company web metrics. Qualitative research is research that uses subjective data collection methods and produces data that is difficult to summarize in numerical form. Whereas quantitative research usually answers a concrete question, qualitative research is more open-ended.</p><p class=\"explanations\"><b>Learning Objective: 9B. Explain how research is used to acquire business data and distinguish between quantitative and qualitative research.</b></p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">This is a description of a salary survey, which is a type of <b>quantitative</b> research.</p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_335_PQ_090'] = objQuestion;


objQuestion = new Object();
objQuestion.strID = 'LOMA_335_PQ_091';
objQuestion.questionID = 109379;
objQuestion.item = 'LOMA_335_PPQ2019_091';
objQuestion.primaryLO = '9C';
objQuestion.textref = 'c. 9, p. 5';
objQuestion.textbook = 0;
objQuestion.chapter = 9;
objQuestion.module = 0;
var arrLOs = new Array();
arrLOs[0] = '9C';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">The data can be structured data, unstructured data, or semistructured data. An example of semistructured data is</p>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "user-produced media";
arrAnsChoices[1] = "customer transactions";
arrAnsChoices[2] = "customer demographics";
arrAnsChoices[3] = "an email";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 442050;
arrAnsIDs[1] = 442051;
arrAnsIDs[2] = 442052;
arrAnsIDs[3] = 442053;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 4;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">User-produced media is an example of <b>unstructured</b> data.</p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">Customer transactions are examples of <b>structured</b> data.</p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">Customer demographics are examples of <b>structured</b> data.</p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">Structured data exists in a fixed field within a record, data file, or spreadsheet; allows for systematic organization; and is easy to enter, store, and analyze. Unstructured data does not have a rigid pattern and can’t be organized systematically. Semistructured data includes a combination of structured and unstructured elements. An email is an example of semistructured data because it includes structured data in fixed fields (sender, date, time) and unstructured data (the text or media in the body of the email).</p><p class=\"explanations\"><b>Learning Objective: 9C. Distinguish among the three data types and provide examples of each.</b></p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_335_PQ_091'] = objQuestion;


objQuestion = new Object();
objQuestion.strID = 'LOMA_335_PQ_092';
objQuestion.questionID = 109380;
objQuestion.item = 'LOMA_335_PPQ2019_092';
objQuestion.primaryLO = '9D';
objQuestion.textref = 'c. 9, p. 6';
objQuestion.textbook = 0;
objQuestion.chapter = 9;
objQuestion.module = 0;
var arrLOs = new Array();
arrLOs[0] = '9D';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">Data analysts can measure data quality in terms of several characteristics of the data. For example, the ease with which an intended user can obtain the necessary data is known as the data’s</p>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "accessibility";
arrAnsChoices[1] = "interpretability";
arrAnsChoices[2] = "relevance";
arrAnsChoices[3] = "appropriateness";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 442054;
arrAnsIDs[1] = 442055;
arrAnsIDs[2] = 442056;
arrAnsIDs[3] = 442057;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 1;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">The quality of any analytical decision depends on the quality of the data available to the decision maker. Analysts can measure data quality in terms of data’s accessibility, appropriateness, accuracy, relevance, timeliness, interpretability, and coherence.</p><p class=\"explanations\"><b>Learning Objective: 9D. Evaluate attributes of data quality and explain how data editing can contribute to data quality.</b></p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">Interpretability is the ease with which an intended user can correctly interpret the data.</p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">Relevance is the degree to which information derived through data analysis meets the needs of users.</p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">Appropriateness is the degree to which data meets the requirements of its intended applications.</p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_335_PQ_092'] = objQuestion;


objQuestion = new Object();
objQuestion.strID = 'LOMA_335_PQ_093';
objQuestion.questionID = 109381;
objQuestion.item = 'LOMA_335_PPQ2019_093';
objQuestion.primaryLO = '9E';
objQuestion.textref = 'c. 9, p. 9';
objQuestion.textbook = 0;
objQuestion.chapter = 9;
objQuestion.module = 0;
var arrLOs = new Array();
arrLOs[0] = '9E';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">The use of data analytics in the age of big data has a variety of applications to the insurance industry. Data analytics is used for</p><ol type=\"A\" class=\"combo\"><li>evaluating large sums of existing fraud data, including typical indicators, and comparing it to new data to evaluate the potential for fraud activity</li><li>modeling economic and market conditions and forecasting how changes in conditions will affect business performance</li></ol>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "both A and B";
arrAnsChoices[1] = "A only";
arrAnsChoices[2] = "B only";
arrAnsChoices[3] = "neither A nor B";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 442058;
arrAnsIDs[1] = 442059;
arrAnsIDs[2] = 442060;
arrAnsIDs[3] = 442061;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 1;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">Both statements are correct. Data analytics is the practice of applying analytical techniques to large amounts of raw data in order to draw conclusions and make business decisions. Both of these statements apply analytical techniques to large amounts of data. Data analytics is also used for intelligent underwriting, customer behavior, mortality rates, and call center analytics.</p><p class=\"explanations\"><b>Learning Objective: 9E. Give examples of how data analytics applies to the insurance industry.</b></p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">Statement A is correct; however, it is not the only correct statement.</p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">Statement B is correct; however, it is not the only correct statement.</p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">At least one of these statements is correct.</p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_335_PQ_093'] = objQuestion;


objQuestion = new Object();
objQuestion.strID = 'LOMA_335_PQ_094';
objQuestion.questionID = 109382;
objQuestion.item = 'LOMA_335_PPQ2019_094';
objQuestion.primaryLO = '9F';
objQuestion.textref = 'c. 9, p. 12';
objQuestion.textbook = 0;
objQuestion.chapter = 9;
objQuestion.module = 0;
var arrLOs = new Array();
arrLOs[0] = '9F';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">One method that analysts use for predicting future conditions involves forecasting the future movement of specified factors based on observed historical patterns of change. This method is known as <b>(trend analysis / diagnostic analysis)</b>, which generally <b>(can / cannot) </b>provide accurate predictions for variations, such as short-term changes in market interest rates, or short-term increases in claims in response to a natural disaster.</p>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "trend analysis / can";
arrAnsChoices[1] = "trend analysis / cannot";
arrAnsChoices[2] = "diagnostic analysis / can";
arrAnsChoices[3] = "diagnostic analysis / cannot";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 442062;
arrAnsIDs[1] = 442063;
arrAnsIDs[2] = 442064;
arrAnsIDs[3] = 442065;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 2;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">It is correct to say that this method is known as trend analysis. However, trend analysis generally <b>cannot</b> provide accurate predictions for variations, such as short-term changes in market interest rates, or short-term increases in claims in response to a natural disaster.</p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">Insurers often use trend analysis to identify patterns in population characteristics. Computational models used in predictive analytics can eliminate some of the uncertainty caused by variations by allowing more than one input to represent several potential states of nature.</p><p class=\"explanations\"><b>Learning Objective: 9F. Describe the three types of data analytics and explain how they are used to make business decisions.</b></p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">Diagnostic analytics is a type of analytics that examines the cause of observed patterns.</p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">It is correct to say that this method generally cannot provide accurate predictions for variations, such as short-term changes in market interest rates, or short-term increases in claims in response to a natural disaster. However, this method is <b>not </b>known as diagnostic analysis.</p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_335_PQ_094'] = objQuestion;


objQuestion = new Object();
objQuestion.strID = 'LOMA_335_PQ_095';
objQuestion.questionID = 109383;
objQuestion.item = 'LOMA_335_PPQ2019_095';
objQuestion.primaryLO = '9F';
objQuestion.textref = 'c. 9, p. 13';
objQuestion.textbook = 0;
objQuestion.chapter = 9;
objQuestion.module = 0;
var arrLOs = new Array();
arrLOs[0] = '9F';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">The following statements are about descriptive analytics, predictive analytics, and prescriptive analytics. Three statements are true, and one statement is false. Select the answer choice containing the <B>FALSE</B> statement.</p>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "Insurance companies use descriptive analytics to study data about customers, products and services, and processes housed in their databases and warehouses.";
arrAnsChoices[1] = "Analysts can use insights gathered during descriptive analytics to perform diagnostic analytics, which is a type of analytics that examines the cause of observed patterns.";
arrAnsChoices[2] = "Predictive analytics is an analytical technique used to forecast future events or customer behaviors and anticipate conditions that are likely to cause negative consequences.";
arrAnsChoices[3] = "Prescriptive analytics relies on information from predictive analytics, but not from descriptive analytics, to recommend actions.";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 442066;
arrAnsIDs[1] = 442067;
arrAnsIDs[2] = 442068;
arrAnsIDs[3] = 442069;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 4;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">This statement is true; therefore, it is <b>not</b> the correct response.</p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">This statement is true; therefore, it is <b>not</b> the correct response.</p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">This statement is true; therefore, it is <b>not</b> the correct response.</p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">This statement is false; therefore, it is the correct response. Prescriptive analytics relies on information from both descriptive and predictive analytics to recommend actions. Techniques used in prescriptive analysis include those used in descriptive and predictive analytics, in addition to complex computing algorithms based on preprogrammed rules.</p><p class=\"explanations\"><b>Learning Objective: 9F. Describe the three types of data analytics and explain how they are used to make business decisions.</b></p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_335_PQ_095'] = objQuestion;


objQuestion = new Object();
objQuestion.strID = 'LOMA_335_PQ_096';
objQuestion.questionID = 109384;
objQuestion.item = 'LOMA_335_PPQ2019_096';
objQuestion.primaryLO = '9G';
objQuestion.textref = 'c. 9, p. 16';
objQuestion.textbook = 0;
objQuestion.chapter = 9;
objQuestion.module = 0;
var arrLOs = new Array();
arrLOs[0] = '9G';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">Data visualization is the use of illustrative graphics to convey an intuitive understanding of data. A line diagram is a form of data visualization that is</p>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "a set of data organized to show the number of times each outcome occurs";
arrAnsChoices[1] = "used to check visually for a likely correlation between two variables";
arrAnsChoices[2] = "used to show changes in data over time";
arrAnsChoices[3] = "a graphical display of a frequency distribution";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 442070;
arrAnsIDs[1] = 442071;
arrAnsIDs[2] = 442072;
arrAnsIDs[3] = 442073;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 3;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">A <b>frequency distribution</b> is a set of data organized to show the number of times each outcome occurs.</p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">A <b>scatter diagram</b> is used to check visually for a likely correlation between two variables.</p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">For oral presentations, effective data visualization can be used to support a point by presenting important findings quickly. Insurance companies can use line diagrams to show trends in mortality experience.</p><p class=\"explanations\"><b>Learning Objective: 9G. Compare data visualization methods.</b></p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">A <b>bar chart</b> is a graphical display of a frequency distribution.</p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_335_PQ_096'] = objQuestion;





var arrlotext = new Array(); 
arrlotext['9A'] = "9A. Describe the importance of data and its relationship to decision making.";
arrlotext['9B'] = "9B. Explain how research is used to acquire business data and distinguish between quantitative and qualitative research.";
arrlotext['9C'] = "9C. Distinguish among the three data types and provide examples of each.";
arrlotext['9D'] = "9D. Evaluate attributes of data quality and explain how data editing can contribute to data quality.";
arrlotext['9E'] = "9E. Give examples of how data analytics applies to the insurance industry.";
arrlotext['9F'] = "9F. Describe the three types of data analytics and explain how they are used to make business decisions.";
arrlotext['9G'] = "9G. Compare data visualization methods.";
