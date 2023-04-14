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

var quizname = "ACS 101 Practice Questions, Module 1, Lesson 2";
var coursename = 'ACS 101';
var modulenumber = 1;
var title = "ACS_101_EOL2020_1_2";
var intNumPools = 1;
var numQ = 9;
var numTexts = 1;
var numChap = 1;
var arrTexts = new Array();
var arrNumChap = new Array();
var duration = 0;
arrTexts[0] = "ACS 101 Module 1 (2019)";
arrNumChap[0] = 1;
var thisChap = '2';

objPool = new Object(); 
objPool.intSelectCount = 9;
objPool.formID = 2212;
objPool.formName = 'EOL2020_1_2';
arrPoolQuestions = new Array();
arrPoolQuestions[0] = 'ACS_101_EOL_009';
arrPoolQuestions[1] = 'ACS_101_EOL_010';
arrPoolQuestions[2] = 'ACS_101_EOL_011';
arrPoolQuestions[3] = 'ACS_101_EOL_012';
arrPoolQuestions[4] = 'ACS_101_EOL_013';
arrPoolQuestions[5] = 'ACS_101_EOL_014';
arrPoolQuestions[6] = 'ACS_101_EOL_015';
arrPoolQuestions[7] = 'ACS_101_EOL_016';
arrPoolQuestions[8] = 'ACS_101_EOL_017';
objPool.arrPoolQuestions = arrPoolQuestions;
arrPools[0] = objPool;

arrQuestions['ACS_101_EOL_009'] = {
"strID": "ACS_101_EOL_009",
"questionID": 113826,
"item": "ACS_101_EOL2020_009",
"primaryLO": "2A",
"textref": "c. 2, p. 1",
"textbook": 0,
"chapter": 2,
"module": 1,
"arrLOs": [ "2A" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">The following statements are about actions that companies might take to become more customer centric. Select the answer choice that correctly identifies a customer-centric approach.</p>",
"arrAnsChoices": [ "Becoming customer-centric requires companies to focus on finding customers who are willing to buy their products.", "Customer experience management is a strategy that customer-centric companies use to manage their interactions with current customers only, but they do not apply the strategy to potential customers. ", "A customer-centric company encourages employees to listen only to what customers say rather than try to determine how customers feel.", "Customer-centric companies ensure that every customer interaction is convenient, effective, and delivered through customers’ preferred channels. " ],
"arrAnsIDs": [ 460126, 460127, 460128, 460129 ],
"intCR": 4,
"arrAnswerFeedback": [ "<p class=\"explanations\">Becoming customer-centric requires companies to shift their focus from finding customers who are willing to buy their products to developing products that meet their customers’ needs.</p>", "<p class=\"explanations\">Customer experience management is an enterprise-wide business strategy that allows companies to manage all aspects of their interactions with current <b>and</b> potential customers.</p>", "<p class=\"explanations\">A customer-centric company determines what customers need and want by encouraging employees to listen to not only what customers say but also to how they feel. Employees who go beyond listening to what customers say and determine what customers want and need play an important role in promoting customer centricity.</p>", "<p class=\"explanations\">Customer-centric companies carefully examine customer interactions to make sure their products and services meet customers’ needs in ways that are convenient and effective from the customer’s perspective, as well as provided through the customer’s preferred communication channel.</p>" ]
}

arrQuestions['ACS_101_EOL_010'] = {
"strID": "ACS_101_EOL_010",
"questionID": 113827,
"item": "ACS_101_EOL2020_010",
"primaryLO": "2A",
"textref": "c. 2, p. 1",
"textbook": 0,
"chapter": 2,
"module": 1,
"arrLOs": [ "2A" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">When shifting from a company-centric culture to a customer-centric culture, companies often <b>(overcome / encourage)</b> the silo mentality by focusing on employee communication and collaboration. Another characteristic of customer-centric companies is that they most likely promote <b>(top-down / bottom-up)</b> change among their employees.</p>",
"arrAnsChoices": [ "overcome / top-down", "overcome / bottom-up", "encourage / top-down", "encourage / bottom-up" ],
"arrAnsIDs": [ 460130, 460131, 460132, 460133 ],
"intCR": 2,
"arrAnswerFeedback": [ "<p class=\"explanations\">It is true that creating a customer-centric culture often requires companies to overcome the silo mentality. However, motivated employees drive <b>bottom-up</b> change in a customer-centric company because they feel comfortable making suggestions.</p>", "<p class=\"explanations\">One challenge of creating a customer-centric culture is that it often requires companies to overcome the silo mentality. Motivated employees drive bottom-up change in a customer-centric company because they feel comfortable making suggestions to improve the business. Bottom-up change is change that begins with employees who have the most interaction with customers and moves up the chain of command.</p>", "<p class=\"explanations\">Creating a customer-centric culture often requires companies to <b>overcome</b> the silo mentality. In addition, motivated employees drive <b>bottom-up</b> change in a customer-centric company because they feel comfortable making suggestions.</p>", "<p class=\"explanations\">It is true that motivated employees drive bottom-up change in a customer-centric company because they feel comfortable making suggestions. However, creating a customer-centric culture often requires companies to <b>overcome</b> the silo mentality.</p>" ]
}

arrQuestions['ACS_101_EOL_011'] = {
"strID": "ACS_101_EOL_011",
"questionID": 113828,
"item": "ACS_101_EOL2020_011",
"primaryLO": "2A",
"textref": "c. 2, p. 1",
"textbook": 0,
"chapter": 2,
"module": 1,
"arrLOs": [ "2A" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">With regard to the benefits and challenges of creating a customer-centric culture in a company, it is generally correct to say that</p>",
"arrAnsChoices": [ "shifting to a customer-centric culture requires a company to create a new mission statement that focuses on company results", "a customer-centric culture is designed to improve customer satisfaction, which is easy to measure, and documented increases in satisfaction always translate into increased profit", "a customer-centric culture provides a way for a company to create a competitive advantage by differentiating products and services from those of competitors", "shifting to a customer-centric culture is less disruptive to business because making this change generally does not require changes to processes and activities" ],
"arrAnsIDs": [ 460134, 460135, 460136, 460137 ],
"intCR": 3,
"arrAnswerFeedback": [ "<p class=\"explanations\">One challenge of shifting from a company-centric culture to a customer-centric culture is that it often requires a company to create a new mission statement that focuses on <b>customer</b> results rather than company results.</p>", "<p class=\"explanations\">Even though a customer-centric culture is designed to improve customer satisfaction, satisfaction is <b>difficult</b> to measure, and even documented increases in satisfaction <b>do not</b> always translate into increased profit.</p>", "<p class=\"explanations\">A customer-centric company can gain a competitive advantage by understanding customer needs and responding quickly with the right products delivered through the right channels.</p>", "<p class=\"explanations\">Creating a customer-centric culture often <b>does</b> require making changes to processes and activities that disrupt business as usual.</p>" ]
}

arrQuestions['ACS_101_EOL_012'] = {
"strID": "ACS_101_EOL_012",
"questionID": 113829,
"item": "ACS_101_EOL2020_012",
"primaryLO": "2B",
"textref": "c. 2, p. 2",
"textbook": 0,
"chapter": 2,
"module": 1,
"arrLOs": [ "2B" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">The following statements are about an insurance company’s customer-facing employees, who include general customer service representatives (CSRs) and dedicated CSRs. Select the answer choice containing the correct statement.</p>",
"arrAnsChoices": [ "Only customer-facing employees who interact directly with a company’s customers can affect the customer experience.", "General CSRs usually perform a wider variety of tasks than dedicated CSRs.", "Dedicated CSRs tend to be more experienced in making customer service decisions and developing creative solutions to customers’ problems.", "Customers who purchase term life insurance products generally are assigned to work with dedicated CSRs rather than general CSRs." ],
"arrAnsIDs": [ 460138, 460139, 460140, 460141 ],
"intCR": 3,
"arrAnswerFeedback": [ "<p class=\"explanations\">Both customer-facing employees and non-customer-facing employees can affect the customer experience. Although non-customer-facing employees do not interact directly with customers, they contribute to the customer experience by performing activities that facilitate customers’ receipt of the information, products, and services they need.</p>", "<p class=\"explanations\"><b>Dedicated</b> CSRs usually perform a wider variety of tasks than general CSRs.</p>", "<p class=\"explanations\">Dedicated CSRs usually have more experience and wider latitude to solve problems than general CSRs.</p>", "<p class=\"explanations\">Most CSRs are qualified to handle questions about simple products, such as term life insurance products. Dedicated CSRs often receive additional training that allows them to answer questions about complex products and services.</p>" ]
}

arrQuestions['ACS_101_EOL_013'] = {
"strID": "ACS_101_EOL_013",
"questionID": 113830,
"item": "ACS_101_EOL2020_013",
"primaryLO": "2B",
"textref": "c. 2, p. 2",
"textbook": 0,
"chapter": 2,
"module": 1,
"arrLOs": [ "2B" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">During the course of a telephone call with a life insurance policyowner, George Putnam, a customer service provider at the Dacula Financial Services Company, informed the customer of Dacula’s investment services. Mr.&nbsp;Putnam did not attempt to sell any investment services to the customer, but offered to send additional information or have someone from the investment services area call the customer. In this situation, Mr.&nbsp;Putnam engaged in a sales-related activity known as</p>",
"arrAnsChoices": [ "up-selling", "cross-telling", "cross-selling", "omnichannel service" ],
"arrAnsIDs": [ 460142, 460143, 460144, 460145 ],
"intCR": 2,
"arrAnswerFeedback": [ "<p class=\"explanations\">Up-selling is a sales activity in which customers are invited to purchase additional amounts or features of a product they already own or are considering buying. Because Mr.&nbsp;Putnam did not attempt to sell any investment services to the customer, this situation is not an example of up-selling.</p>", "<p class=\"explanations\">Cross-telling is a sales-related activity in which a customer service provider informs a customer of a product but does not attempt to make a sale, as Mr.&nbsp;Putnam did in this situation.</p>", "<p class=\"explanations\">Cross-selling is a sales activity in which customers are invited to purchase a product other than, or in addition to, the product they already own. Because Mr.&nbsp;Putnam did not attempt to sell any investment services to the customer, this is not an example of cross-selling.</p>", "<p class=\"explanations\">Omnichannel service is not a sales-related activity. Rather, companies provide their customers with omnichannel customer service by offering multiple, integrated communication channels.</p>" ]
}

arrQuestions['ACS_101_EOL_014'] = {
"strID": "ACS_101_EOL_014",
"questionID": 113831,
"item": "ACS_101_EOL2020_014",
"primaryLO": "2B",
"textref": "c. 2, p. 2",
"textbook": 0,
"chapter": 2,
"module": 1,
"arrLOs": [ "2B" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">Consider whether the employees of the Maven Life Insurance Company in the following situations are customer-facing employees or non-customer-facing employees:</p><ul class=\"examul\"><li>Lloyd Knight, a financial professional, helped a client select and apply for a Maven life insurance policy.</li><li>Gabby Dunne, a Maven underwriter, processed an application for a life insurance policy that Mr.&nbsp;Knight submitted.</li></ul>",
"arrAnsChoices": [ "Both Mr.&nbsp;Knight and Ms.&nbsp;Dunne are customer-facing employees.", "Both Mr.&nbsp;Knight and Ms.&nbsp;Dunne are non-customer-facing employees.", "Mr.&nbsp;Knight is a customer-facing employee, and Ms.&nbsp;Dunne is a non-customer-facing employee.", "Mr.&nbsp;Knight is a non-customer-facing employee, and Ms.&nbsp;Dunne is a customer-facing employee." ],
"arrAnsIDs": [ 460146, 460147, 460148, 460149 ],
"intCR": 3,
"arrAnswerFeedback": [ "<p class=\"explanations\">At least one of these Maven employees is a non-customer-facing employee.</p>", "<p class=\"explanations\">At least one of these Maven employees is a customer-facing employee.</p>", "<p class=\"explanations\">Mr.&nbsp;Knight is a customer-facing employee—a person who routinely communicates directly with the company’s external customers and serves as their link to the information, products, or services they need. Ms.&nbsp;Dunne is a non-customer-facing employee who does not interact directly with customers.</p>", "<p class=\"explanations\">Mr.&nbsp;Knight is a customer-facing employee, and Ms.&nbsp;Dunne is a non-customer-facing employee.</p>" ]
}

arrQuestions['ACS_101_EOL_015'] = {
"strID": "ACS_101_EOL_015",
"questionID": 113832,
"item": "ACS_101_EOL2020_015",
"primaryLO": "2C",
"textref": "c. 2, p. 3",
"textbook": 0,
"chapter": 2,
"module": 1,
"arrLOs": [ "2C" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">The following statements are about how a company’s processes can contribute to customer centricity. Select the answer choice containing the correct statement.</p>",
"arrAnsChoices": [ "Entering customer complaints in a complaint log and tracking their progress through to completion enhances customer centricity.", "One way for insurers to improve customer centricity and increase customer satisfaction is to eliminate standardized procedures that require CSRs to verify a customer’s identity.", "Maintaining standardized procedures for handling routine requests detracts from customer centricity because such procedures prevent CSRs from delivering a personalized experience to customers.", "Collecting customer data during customer contacts, customer surveys, and visits to the company website decreases an insurer’s ability to be customer-centric." ],
"arrAnsIDs": [ 460150, 460151, 460152, 460153 ],
"intCR": 1,
"arrAnswerFeedback": [ "<p class=\"explanations\">Keeping up with customer complaints and tracking their progress through to completion enhances customer centricity by ensuring that the customer was heard and that all his needs were met. In addition to enhancing customer centricity, this process helps a company comply with regulatory complaint-logging requirements effective in most jurisdictions.</p>", "<p class=\"explanations\">Insurers are required by law to safeguard the privacy of confidential customer information. To satisfy this requirement, insurers implement standardized procedures that require CSRs to verify a customer’s identity before providing confidential information.</p>", "<p class=\"explanations\">To ensure that service providers handle routine requests consistently, insurers usually create standardized procedures that describe the specific steps or activities CSRs are expected to perform. These procedures <b>support</b> customer centricity by meeting customer expectations of quick, reliable resolutions to their inquiries.</p>", "<p class=\"explanations\">Companies that have a process in place to collect customer data during customer contacts, customer surveys, and visits to the company website can analyze how effectively they are meeting customer needs. Collecting customer data <b>supports</b> customer centricity by allowing service providers to deliver a personalized, unique experience to the customer.</p>" ]
}

arrQuestions['ACS_101_EOL_016'] = {
"strID": "ACS_101_EOL_016",
"questionID": 113833,
"item": "ACS_101_EOL2020_016",
"primaryLO": "2B",
"textref": "c. 2, p. 3",
"textbook": 0,
"chapter": 2,
"module": 1,
"arrLOs": [ "2B", "2C" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">For this question, select the answer choice containing the terms that correctly complete the blanks labeled <B>A</B> and <B>B</B> in the following paragraph.</p><p class=\"stem\">One way that insurance companies can improve customer satisfaction is by establishing processes that allow service providers to perform activities <u><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></u>, which means that the process helps ensure that prescribed actions produce expected results. Improved customer satisfaction and engagement can lead to better <u><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></u>, which is defined as the act of keeping current business in force.</p>",
"columnHead": "<u><B>A</B></u></div><div class=\"anshead\"><u><B>B</B></u>",
"arrAnsChoices": [ "consistently</div><div class=\"anscell\" onclick=\"recordAns(1);\">product persistency", "consistently</div><div class=\"anscell\" onclick=\"recordAns(2);\">customer retention", "seamlessly</div><div class=\"anscell\" onclick=\"recordAns(3);\">product persistency", "seamlessly</div><div class=\"anscell\" onclick=\"recordAns(4);\">customer retention " ],
"arrAnsIDs": [ 460155, 460156, 460157, 460158 ],
"intCR": 1,
"arrAnswerFeedback": [ "<p class=\"explanations\">A process allows service providers to perform activities consistently when it helps ensure that prescribed actions produce expected results. Improved customer satisfaction and engagement lead to better product persistency, which involves keeping current business in force, and better customer retention, which involves keeping the business of current customers.</p>", "<p class=\"explanations\">It is true that service providers perform activities consistently when the process helps ensure that prescribed actions produce expected results. However, customer retention is the act of keeping the business of current customers, whereas product persistency specifically refers to keeping current business in force.</p>", "<p class=\"explanations\">It is true that product persistency is keeping current business in force. However, service providers perform activities <b>consistently</b> when the process helps ensure that prescribed actions produce expected results. Service providers perform activities seamlessly when the process fulfills a customer’s need with limited customer effort and without the customer being aware of handoffs between departments.</p>", "<p class=\"explanations\">Service providers perform activities <b>consistently</b> when the process helps ensure that prescribed actions produce expected results. Service providers perform activities seamlessly when the process fulfills a customer’s need with limited customer effort and without the customer being aware of handoffs between departments. In addition, customer retention is the act of keeping the business of current customers, whereas product persistency specifically refers to keeping current business in force.</p>" ]
}

arrQuestions['ACS_101_EOL_017'] = {
"strID": "ACS_101_EOL_017",
"questionID": 113834,
"item": "ACS_101_EOL2020_017",
"primaryLO": "2D",
"textref": "c. 2, p. 4",
"textbook": 0,
"chapter": 2,
"module": 1,
"arrLOs": [ "2D" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">Financial professionals can submit applications for certain types of policies to the Hamlet Insurance Company’s new business system via computer. The system can then process the information, underwrite the policy, issue the policy, and send it to the financial professional electronically for delivery to the policyowner. The type of technology that allows Hamlet to complete transactions without manual intervention by automating the steps of the new business process is best described as</p>",
"arrAnsChoices": [ "a document management system", "a customer relationship management (CRM) system", "an automated workflow system (AWS)", "straight-through processing (STP)" ],
"arrAnsIDs": [ 460159, 460160, 460161, 460162 ],
"intCR": 4,
"arrAnswerFeedback": [ "<p class=\"explanations\">A document management system is a system that centralizes and organizes document storage, controls access to documents, automates routines for archiving information, and ensures regulatory compliance with records retention and privacy requirements.</p>", "<p class=\"explanations\">A customer relationship management (CRM) system allows insurers to collect, store, consolidate, analyze, and use information about customers and their interactions.</p>", "<p class=\"explanations\">An automated workflow system (AWS) is a software package designed to coordinate the flow of physical or electronic documents between staff members involved in a process in order to improve process control and business process management.</p>", "<p class=\"explanations\">By automating all steps in a transaction, STP reduces the need for data entry and human input, decreases errors, increases service consistency and quality, and improves customer satisfaction. Hamlet is using STP in this situation.</p>" ]
}




var arrlotext = new Array(); 
arrlotext['2A'] = "Identify the components of a customer-centric culture and describe the benefits and challenges of creating such a culture in an insurance company.";
arrlotext['2B'] = "Describe the functions performed by an insurance company’s customer-facing and non-customer-facing employees and explain how these functions impact the customer experience.";
arrlotext['2C'] = "Provide examples of customer-centric processes and explain how seamless processes contribute to customer centricity.";
arrlotext['2D'] = "Explain how technology helps shape customer expectations and contributes to the customer experience.";
