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

var quizname = "ACS 101 Practice Questions, Module 3, Lesson 1";
var coursename = 'ACS 101';
var modulenumber = 3;
var title = "ACS_101_EOL2020_3_1";
var intNumPools = 1;
var numQ = 13;
var numTexts = 1;
var numChap = 1;
var arrTexts = new Array();
var arrNumChap = new Array();
var duration = 0;
arrTexts[0] = "ACS 101 Module 3 (2019)";
arrNumChap[0] = 1;
var thisChap = '1';

objPool = new Object(); 
objPool.intSelectCount = 13;
objPool.formID = 2212;
objPool.formName = 'EOL2020_3_1';
arrPoolQuestions = new Array();
arrPoolQuestions[0] = 'ACS_101_EOL_073';
arrPoolQuestions[1] = 'ACS_101_EOL_074';
arrPoolQuestions[2] = 'ACS_101_EOL_075';
arrPoolQuestions[3] = 'ACS_101_EOL_076';
arrPoolQuestions[4] = 'ACS_101_EOL_077';
arrPoolQuestions[5] = 'ACS_101_EOL_078';
arrPoolQuestions[6] = 'ACS_101_EOL_079';
arrPoolQuestions[7] = 'ACS_101_EOL_080';
arrPoolQuestions[8] = 'ACS_101_EOL_081';
arrPoolQuestions[9] = 'ACS_101_EOL_082';
arrPoolQuestions[10] = 'ACS_101_EOL_083';
arrPoolQuestions[11] = 'ACS_101_EOL_084';
arrPoolQuestions[12] = 'ACS_101_EOL_085';
objPool.arrPoolQuestions = arrPoolQuestions;
arrPools[0] = objPool;

arrQuestions['ACS_101_EOL_073'] = {
"strID": "ACS_101_EOL_073",
"questionID": 113890,
"item": "ACS_101_EOL2020_073",
"primaryLO": "1A",
"textref": "c. 1, pp. 2, 6",
"textbook": 2,
"chapter": 1,
"module": 3,
"arrLOs": [ "1A" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">When Hal Fiske called the Whelk Insurance Company to obtain information about purchasing a term life insurance policy, his telephone call was answered by an automated system. A recorded message prompted Mr.&nbsp;Fiske to use his telephone keypad to select from a menu of options. Mr.&nbsp;Fiske pressed “3” to be transferred to a representative for information about term life insurance. Whelk’s telephone system then routed Mr.&nbsp;Fiske’s telephone call to a service provider licensed to sell insurance. This information indicates that Whelk’s telephone system links two forms of technology known as</p>",
"arrAnsChoices": [ "an automatic call distributor (ACD) and an interactive voice response (IVR) system", "an automatic call distributor (ACD) and speech recognition technology", "a universal queue and an interactive voice response (IVR) system", "computer telephony integration (CTI) and an automated workflow system" ],
"arrAnsIDs": [ 460385, 460386, 460387, 460388 ],
"intCR": 1,
"arrAnswerFeedback": [ "<p class=\"explanations\">An automatic call distributor (ACD) is a technology that answers telephone calls and directs them to the appropriate employee or work group. An interactive voice response (IVR) system is a computer-based system that answers telephone calls, greets callers with a recorded or digitized message, and prompts them to enter information or make requests by voice or telephone keypad. Many companies link IVR systems and ACDs to allow callers to obtain information or services from a menu of prerecorded options or transfer to the appropriate person or department for assistance.</p>", "<p class=\"explanations\">It is true that Whelk’s telephone system uses an automatic call distributor (ACD). However, Whelk’s telephone system is <b>not</b> using speech recognition technology in this situation. Speech recognition technology is technology that can interpret spoken words or phrases so they can be used as input to a system. Whelk’s telephone system prompts callers to enter input using their telephone keypad rather than their voice.</p>", "<p class=\"explanations\">It is true that Whelk’s telephone system uses an interactive voice response (IVR) system. However, Whelk’s telephone system is <b>not</b> using a universal queue in this situation. A universal queue is a routing system that handles all customer contacts together, regardless of the type of communication. A universal queue handles other types of communications in addition to telephone calls, such as emails and web chats.</p>", "<p class=\"explanations\">It is true that Whelk’s telephone system uses a form of computer telephony integration (CTI), which refers to a collection of hardware, software, and programming that integrates computers and communication technology, particularly telephones. However, Whelk’s telephone system is <b>not</b> using an automated workflow system in this situation. An automated workflow system creates computer-based records about the status of specific transactions.</p>" ]
}

arrQuestions['ACS_101_EOL_074'] = {
"strID": "ACS_101_EOL_074",
"questionID": 113891,
"item": "ACS_101_EOL2020_074",
"primaryLO": "1A",
"textref": "c. 1, p. 3",
"textbook": 2,
"chapter": 1,
"module": 3,
"arrLOs": [ "1A" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">By definition, automatic transaction distribution is a type of routing that directs customer contacts to customer service representatives (CSRs) according to</p>",
"arrAnsChoices": [ "the length of time that has passed since a CSR received a customer contact", "a CSR’s proficiency with a particular communication channel", "the number of customer contacts each CSR has received in a specified period", "the skills required for a CSR to process a specific type of request" ],
"arrAnsIDs": [ 460389, 460390, 460391, 460392 ],
"intCR": 2,
"arrAnswerFeedback": [ "<p class=\"explanations\">The longest idle agent (LIA) method, rather than automatic transaction distribution, routes inbound telephone calls to the available CSRs who have gone the longest time without receiving a call.</p>", "<p class=\"explanations\">Automatic transaction distribution is a type of routing that directs customer contacts to CSRs based on a CSR’s proficiency with a particular communication channel. For example, some CSRs might receive only telephone calls, while others might receive emails and web chats.</p>", "<p class=\"explanations\">The uniform call distribution (UCD) method, rather than automatic transaction distribution, distributes inbound telephone calls evenly across available CSRs so that each CSR receives approximately the same number of calls.</p>", "<p class=\"explanations\">The skill-based routing (SBR) method, rather than automatic transaction distribution, routes inbound telephone calls to the most qualified CSRs based on the skills required to process the request.</p>" ]
}

arrQuestions['ACS_101_EOL_075'] = {
"strID": "ACS_101_EOL_075",
"questionID": 113892,
"item": "ACS_101_EOL2020_075",
"primaryLO": "1A",
"textref": "c. 1, pp. 5, 15",
"textbook": 2,
"chapter": 1,
"module": 3,
"arrLOs": [ "1A" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">Many companies establish formal procedures for handling situations in which customer requests cannot be resolved to the customer’s satisfaction. By definition, a procedure that specifies how a particular type of request should be addressed and to whom it should be directed when the service provider is not able or authorized to resolve the issue is known as</p>",
"arrAnsChoices": [ "follow-up work", "a service request", "an exception process", "an escalation process" ],
"arrAnsIDs": [ 460393, 460394, 460395, 460396 ],
"intCR": 4,
"arrAnswerFeedback": [ "<p class=\"explanations\">Follow-up work refers to any type of activity that a service provider or another person or work group in the company must perform when a customer request cannot be completed during or soon after the initial customer contact.</p>", "<p class=\"explanations\">A service request is a requisition for a person or area to complete the work that was initiated by another person or area in response to a customer’s request.</p>", "<p class=\"explanations\">Some insurers establish guidelines for making exceptions to standard procedures—an activity known as exception processing.</p>", "<p class=\"explanations\">In simple cases, escalation can be handled informally by transferring a call to a manager on duty. For more complex cases, such as situations involving extremely dissatisfied customers, many companies establish formal escalation processes.</p>" ]
}

arrQuestions['ACS_101_EOL_076'] = {
"strID": "ACS_101_EOL_076",
"questionID": 113893,
"item": "ACS_101_EOL2020_076",
"primaryLO": "1A",
"textref": "c. 1, p. 6",
"textbook": 2,
"chapter": 1,
"module": 3,
"arrLOs": [ "1A" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">An insurance company can provide its website visitors with a variety of ways to communicate with the company. One communication mechanism is ____________, which allows a customer to click on an icon on a company’s website and request a call from a service provider.</p>",
"arrAnsChoices": [ "Voice over Internet Protocol (VoIP)", "web callback", "an intelligent callback option", "click-to-call" ],
"arrAnsIDs": [ 460397, 460398, 460399, 460400 ],
"intCR": 2,
"arrAnswerFeedback": [ "<p class=\"explanations\">Voice over Internet Protocol (VoIP) is technology that transmits a person’s voice over an internet connection.</p>", "<p class=\"explanations\">Web callback is a communication mechanism that allows website visitors to click on an icon on a company’s website and request a call from a service provider.</p>", "<p class=\"explanations\">The intelligent callback option is an option for telephone callers who are waiting in a call queue. The intelligent callback option frees a caller’s time by letting her choose to exit the call queue and receive an automated callback.</p>", "<p class=\"explanations\">Click-to-call is a technology that allows website visitors to initiate a conversation with a service provider by clicking on an icon that automatically places a call to a service provider using Voice over Internet Protocol (VoIP).</p>" ]
}

arrQuestions['ACS_101_EOL_077'] = {
"strID": "ACS_101_EOL_077",
"questionID": 113894,
"item": "ACS_101_EOL2020_077",
"primaryLO": "1A",
"textref": "c. 1, p. 12",
"textbook": 2,
"chapter": 1,
"module": 3,
"arrLOs": [ "1A" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">Insurance companies in the United States must document all formal complaints and maintain records of these complaints for examination by state insurance regulators. Although complaint handling procedures vary by company and product, most companies document the following types of complaint information:</p><ol type=\"A\" class=\"combo\"><li>The date and time the complaint was received</li><li>The source of the complaint</li><li>The written acknowledgment of the complaint sent to the complaining party</li><li>The company unit or employee responsible for resolving the complaint</li></ol>",
"arrAnsChoices": [ "A, B, C, and D", "A, B, and D only", "A and C only", "B and D only" ],
"arrAnsIDs": [ 460401, 460402, 460403, 460404 ],
"intCR": 1,
"arrAnswerFeedback": [ "<p class=\"explanations\">All of these statements are correct.</p>", "<p class=\"explanations\">These statements are correct. However, insurers also document the written acknowledgment of the complaint that was sent to the complaining party.</p>", "<p class=\"explanations\">These statements are correct. However, insurers also document the source of the complaint and the company unit or employee responsible for resolving the complaint.</p>", "<p class=\"explanations\">These statements are correct. However, insurers also document the date and time the complaint was received and the written acknowledgment of the complaint sent to the complaining party.</p>" ]
}

arrQuestions['ACS_101_EOL_078'] = {
"strID": "ACS_101_EOL_078",
"questionID": 113895,
"item": "ACS_101_EOL2020_078",
"primaryLO": "1A",
"textref": "c. 1, pp. 13, 16",
"textbook": 2,
"chapter": 1,
"module": 3,
"arrLOs": [ "1A" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">Sometimes a customer service provider engages in a process known as <i>service recovery</i>, which means that the service provider is engaging in activities designed to</p>",
"arrAnsChoices": [ "fully resolve to a customer’s satisfaction a problem that initially caused customer dissatisfaction and might have resulted in a loss of business", "provide documentation of a customer contact after the contact is completed", "recruit and attract new customers", "request another person or area to complete work that was initiated in response to a customer’s request" ],
"arrAnsIDs": [ 460405, 460406, 460407, 460408 ],
"intCR": 1,
"arrAnswerFeedback": [ "<p class=\"explanations\">A service recovery refers to the actions that a company takes to win back a customer’s goodwill after a problem has caused the customer dissatisfaction.</p>", "<p class=\"explanations\">After-call work (ACW), or <i>wrap-up</i> <i>activities</i>, are the documentation activities associated with customer contacts that take place after a customer contact is completed.</p>", "<p class=\"explanations\">Service recovery involves retaining existing customers rather than recruiting and attracting new customers.</p>", "<p class=\"explanations\">A service request is a requisition for a person or area to complete work that was initiated by another person or area in response to a customer’s request.</p>" ]
}

arrQuestions['ACS_101_EOL_079'] = {
"strID": "ACS_101_EOL_079",
"questionID": 113896,
"item": "ACS_101_EOL2020_079",
"primaryLO": "1B",
"textref": "c. 1, pp. 18, 35",
"textbook": 2,
"chapter": 1,
"module": 3,
"arrLOs": [ "1B" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">During a telephone interaction, Becky Young, a financial advisor, explained to a customer the tax implications of taking an early withdrawal from a retirement plan. To ensure that she provided complete and accurate information, Ms.&nbsp;Young spoke word-for-word from a written dialogue prepared by her company’s legal department. In this situation, Ms.&nbsp;Young used a document best described as</p>",
"arrAnsChoices": [ "an infographic", "a script", "talking points", "a customer journey map" ],
"arrAnsIDs": [ 460409, 460410, 460411, 460412 ],
"intCR": 2,
"arrAnswerFeedback": [ "<p class=\"explanations\">Infographics are images that are designed to make complex information easy to understand and patterns easy to identify without a lot of reading or synthesis. Ms.&nbsp;Young did not use an infographic in this situation.</p>", "<p class=\"explanations\">In this situation, Ms.&nbsp;Young read from a script—a written dialogue or set of systematic instructions that employees usually follow word-for-word when handling certain types of customer inquiries or requests. Scripts allow service providers to give complete, accurate, and consistent responses to customer questions.</p>", "<p class=\"explanations\">Talking points are a list of important items that employees refer to using their own words. In this situation Ms.&nbsp;Young spoke word-for-word from a written dialogue; therefore, she most likely was <b>not</b> using talking points.</p>", "<p class=\"explanations\">A customer journey map is a visual depiction of a customer persona’s needs and perceptions at each touchpoint on the customer journey. Ms.&nbsp;Young did not use a customer journey map in this situation.</p>" ]
}

arrQuestions['ACS_101_EOL_080'] = {
"strID": "ACS_101_EOL_080",
"questionID": 113897,
"item": "ACS_101_EOL2020_080",
"primaryLO": "1B",
"textref": "c. 1, pp. 21-22",
"textbook": 2,
"chapter": 1,
"module": 3,
"arrLOs": [ "1B" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">Hector Lang is a CSR at the Coda Insurance Company. The following statements are examples of greetings he could use to answer inbound telephone calls. Select the answer choice that contains the <i>most </i>appropriate way for Mr.&nbsp;Lang to answer inbound calls.</p>",
"arrAnsChoices": [ "“Coda Insurance. This is Hector Lang speaking.”", "“Welcome to Coda Insurance Company.”", "“Hector Lang. May I help you?”", "“Thank you for calling Coda Insurance Company. This is Hector Lang speaking. May I help you?”" ],
"arrAnsIDs": [ 460413, 460414, 460415, 460416 ],
"intCR": 4,
"arrAnswerFeedback": [ "<p class=\"explanations\">A greeting should identify the name of the company and the name of the service provider, and it should offer assistance. This response is not the best choice because it does not contain an offer to help the customer.</p>", "<p class=\"explanations\">A greeting should identify the name of the company and the name of the service provider, and it should offer assistance. This response is not the best choice because Mr.&nbsp;Lang does not identify himself, and it does not contain an offer to help the customer.</p>", "<p class=\"explanations\">A greeting should identify the name of the company and the name of the service provider, and it should offer assistance. This response is not the best choice because Mr.&nbsp;Lang does not identify the company.</p>", "<p class=\"explanations\">This greeting has the components of the standard greeting that most companies use. It welcomes the customer, gives the name of the company and the name of the service provider, and offers assistance. Many companies take steps to help employees answer inbound calls appropriately. These steps include providing a standard greeting that all service providers are expected to use, providing general guidelines for employees to follow (without dictating the exact wording), or using auto-greeting technology that allows employees to record their best greeting.</p>" ]
}

arrQuestions['ACS_101_EOL_081'] = {
"strID": "ACS_101_EOL_081",
"questionID": 113898,
"item": "ACS_101_EOL2020_081",
"primaryLO": "1B",
"textref": "c. 1, p. 24",
"textbook": 2,
"chapter": 1,
"module": 3,
"arrLOs": [ "1B" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">When making outbound telephone calls to customers, a CSR should generally follow certain guidelines. These guidelines include</p><ol type=\"A\" class=\"combo\"><li>Asking the customer if it is a good time to talk</li><li>Avoiding small talk and getting straight to the point</li><li>Thanking the customer for his time at the end of the call</li><li>Avoiding the use of scripts and talking points because they will make you sound less spontaneous</li></ol>",
"arrAnsChoices": [ "A, B, and C only", "A, C, and D only", "A and C only", "B and D only" ],
"arrAnsIDs": [ 460417, 460418, 460419, 460420 ],
"intCR": 3,
"arrAnswerFeedback": [ "<p class=\"explanations\">At least one of these statements is incorrect.</p>", "<p class=\"explanations\">At least one of these statements is incorrect.</p>", "<p class=\"explanations\">Statements A and C are correct. Asking the customer if this is a good time to talk, especially if your call is likely to take more than a minute or two, keeps you from imposing on the customer at an inconvenient time. You should also thank the customer for her time at the end of the call.</p><p class=\"explanations\">Statements B and D are incorrect. When making outbound telephone calls, you should let the customer take the lead at the beginning of the conversation. Some customers will want to chat for a while about the weather or similar topics, while others will want to get right to the point. In addition, before any type of call, you should prepare by having your notes, scripts, or talking points organized and within reach.</p>", "<p class=\"explanations\">Both statements B and D are incorrect. When making outbound telephone calls, you should let the customer take the lead at the beginning of the conversation. Some customers will want to chat for a while about the weather or similar topics, while others will want to get right to the point. In addition, before any type of call, you should prepare by having your notes, scripts, or talking points organized and within reach.</p>" ]
}

arrQuestions['ACS_101_EOL_082'] = {
"strID": "ACS_101_EOL_082",
"questionID": 113899,
"item": "ACS_101_EOL2020_082",
"primaryLO": "1B",
"textref": "c. 1, p. 26",
"textbook": 2,
"chapter": 1,
"module": 3,
"arrLOs": [ "1B" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">Malathi Reddy is answering telephone calls for a coworker, Benny Wright. Mr.&nbsp;Wright is out of the office having surgery and will not return for two weeks. When Ms.&nbsp;Reddy answers a telephone call for Mr.&nbsp;Wright, it would be appropriate for her to tell the caller</p><ol type=\"A\" class=\"combo\"><li>Why Mr.&nbsp;Wright is out of the office</li><li>Who is handling service requests during Mr.&nbsp;Wright’s absence</li></ol>",
"arrAnsChoices": [ "Both A and B", "A only", "B only", "Neither A nor B" ],
"arrAnsIDs": [ 460421, 460422, 460423, 460424 ],
"intCR": 3,
"arrAnswerFeedback": [ "<p class=\"explanations\">At least one of these statements is incorrect.</p>", "<p class=\"explanations\">Business etiquette and privacy considerations dictate that Ms.&nbsp;Reddy should share with the caller that Mr.&nbsp;Wright is out of the office <i>without</i> discussing the reasons.</p>", "<p class=\"explanations\">It is appropriate for Ms.&nbsp;Reddy to let the caller know who is handling service requests during Mr.&nbsp;Wright’s absence.</p>", "<p class=\"explanations\">At least one of these statements is correct.</p>" ]
}

arrQuestions['ACS_101_EOL_083'] = {
"strID": "ACS_101_EOL_083",
"questionID": 113900,
"item": "ACS_101_EOL2020_083",
"primaryLO": "1B",
"textref": "c. 1, pp. 26-27",
"textbook": 2,
"chapter": 1,
"module": 3,
"arrLOs": [ "1B" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">The information in a telephone message taken for a coworker typically should include</p><ol type=\"A\" class=\"combo\"><li>The time and date of the telephone call</li><li>A good time to return the telephone call</li><li>The reason for the telephone call</li></ol>",
"arrAnsChoices": [ "A, B, and C", "A and C only", "B and C only", "A only" ],
"arrAnsIDs": [ 460425, 460426, 460427, 460428 ],
"intCR": 1,
"arrAnswerFeedback": [ "<p class=\"explanations\">Generally, a message taken for a coworker should include the following information: the time and date of the call, a good time for the coworker to return the call, and the reason for the call. Providing the reason for the call gives the coworker an opportunity to gather pertinent information before returning the call. Additionally, the message should include the caller’s name, company, and title (if one is given), telephone number, the account or policy number (if the caller is a customer), and any other pertinent information.</p>", "<p class=\"explanations\">A message should include the time and date of the call and the reason for the telephone call. However, other information should be included in the message.</p>", "<p class=\"explanations\">A message should include a good time for the coworker to return the call and the reason for the telephone call. However, other information should be included in the message.</p>", "<p class=\"explanations\">A message should include the time and date of the call. However, other information should be included in the message.</p>" ]
}

arrQuestions['ACS_101_EOL_084'] = {
"strID": "ACS_101_EOL_084",
"questionID": 113901,
"item": "ACS_101_EOL2020_084",
"primaryLO": "1B",
"textref": "c. 1, p. 29",
"textbook": 2,
"chapter": 1,
"module": 3,
"arrLOs": [ "1B" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">When Nadine Wood transferred a telephone call to a coworker recently, she stayed on the telephone line until her coworker answered and then informed him, “I’m transferring a call from Joel Miner. His number is 555-XXXX. He wants to know whether his loan was approved.” The type of call transfer that Ms.&nbsp;Wood made in this situation is known as a</p>",
"arrAnsChoices": [ "cold transfer, and companies typically discourage this type of transfer", "cold transfer, and companies typically encourage this type of transfer", "warm transfer, and companies typically discourage this type of transfer", "warm transfer, and companies typically encourage this type of transfer" ],
"arrAnsIDs": [ 460429, 460430, 460431, 460432 ],
"intCR": 4,
"arrAnswerFeedback": [ "<p class=\"explanations\">A cold transfer is a telephone call transfer in which one employee transfers a call to another employee without giving the caller’s name or explaining the nature of the call. Most companies discourage cold transfers. Ms.&nbsp;Wood stayed on the line to inform her coworker of the caller’s identity and the nature of the call; therefore, this transfer was <b>not</b> a cold transfer.</p>", "<p class=\"explanations\">A cold transfer is a telephone call transfer in which one employee transfers a call to another employee without giving the caller’s name or explaining the nature of the call. Most companies discourage cold transfers. Ms.&nbsp;Wood stayed on the line to inform her coworker of the caller’s identity and the nature of the call; therefore, this transfer was <b>not</b> a cold transfer.</p>", "<p class=\"explanations\">It is true that Ms.&nbsp;Wood made a warm transfer in this situation. However, most companies <i>encourage</i> employees to make warm transfers.</p>", "<p class=\"explanations\">Most companies encourage employees to make only warm transfers, in which the CSR gives her coworker the customer’s name, telephone number, and a brief explanation of the purpose of the call.</p>" ]
}

arrQuestions['ACS_101_EOL_085'] = {
"strID": "ACS_101_EOL_085",
"questionID": 113902,
"item": "ACS_101_EOL2020_085",
"primaryLO": "1B",
"textref": "c. 1, pp. 31-32",
"textbook": 2,
"chapter": 1,
"module": 3,
"arrLOs": [ "1B" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">Consider the ways in which Greg Boling, a CSR, uses voicemail in the following situations:</p><ul class=\"examul\"><li><b>Situation A</b>: To evaluate a caller’s words and tone of voice in a voicemail message to decide how to respond before returning the call</li><li><b>Situation B</b>: To deliver information that does not require a return call from the recipient</li><li><b>Situation C</b>: To screen telephone calls</li><li><b>Situation D</b>: To let callers know when he is temporarily unavailable, as well as when he is out of the office</li></ul><p class=\"stem\">Of these situations, the one that represents an <i>inappropriate</i> use of voicemail is</p>",
"arrAnsChoices": [ "Situation A", "Situation B", "Situation C", "Situation D" ],
"arrAnsIDs": [ 460433, 460434, 460435, 460436 ],
"intCR": 3,
"arrAnswerFeedback": [ "<p class=\"explanations\">Evaluating a caller’s message and attitude before returning a call is an <b>appropriate </b>use of voicemail.</p>", "<p class=\"explanations\">Delivering information that does not require a return call from the recipient is an <b>appropriate </b>use of voicemail.</p>", "<p class=\"explanations\">A CSR’s duty generally is to provide service to all customers who need it, when they need it, so using voicemail to pick and choose whom to talk to and when to talk to them is <b>not </b>appropriate.</p>", "<p class=\"explanations\">Letting callers know when he is temporarily unavailable and when he is out of the office are both <b>appropriate </b>uses of voicemail.</p>" ]
}




var arrlotext = new Array(); 
arrlotext['1A'] = "Explain the importance of following established procedures for receiving and routing calls, fulfilling requests, collecting information, handling complaints, and conserving business.";
arrlotext['1B'] = "Use appropriate methods for making a positive impression, answering phone calls for others, transferring calls, placing callers on hold, taking messages, and using voicemail.";
