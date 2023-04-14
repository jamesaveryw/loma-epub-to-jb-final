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

var quizname = "ACS 101 Practice Questions, Module 1, Lesson 1";
var coursename = 'ACS 101';
var modulenumber = 1;
var title = "ACS_101_EOL2020_1_1";
var intNumPools = 1;
var numQ = 8;
var numTexts = 1;
var numChap = 1;
var arrTexts = new Array();
var arrNumChap = new Array();
var duration = 0;
arrTexts[0] = "ACS 101 Module 1 (2019)";
arrNumChap[0] = 1;
var thisChap = '1';

objPool = new Object(); 
objPool.intSelectCount = 8;
objPool.formID = 2212;
objPool.formName = 'EOL2020_1_1';
arrPoolQuestions = new Array();
arrPoolQuestions[0] = 'ACS_101_EOL_001';
arrPoolQuestions[1] = 'ACS_101_EOL_002';
arrPoolQuestions[2] = 'ACS_101_EOL_003';
arrPoolQuestions[3] = 'ACS_101_EOL_004';
arrPoolQuestions[4] = 'ACS_101_EOL_005';
arrPoolQuestions[5] = 'ACS_101_EOL_006';
arrPoolQuestions[6] = 'ACS_101_EOL_007';
arrPoolQuestions[7] = 'ACS_101_EOL_008';
objPool.arrPoolQuestions = arrPoolQuestions;
arrPools[0] = objPool;

arrQuestions['ACS_101_EOL_001'] = {
"strID": "ACS_101_EOL_001",
"questionID": 113818,
"item": "ACS_101_EOL2020_001",
"primaryLO": "1A",
"textref": "c. 1, pp. 4-6",
"textbook": 0,
"chapter": 1,
"module": 1,
"arrLOs": [ "1A" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">The Magnolia Insurance Company classifies its customers as individual customers or organizational customers and as internal customers or external customers. Daffodil Corporation purchases insurance coverage for its employees from Magnolia. With regard to types of customers, Magnolia most likely considers Daffodil to be an</p>",
"arrAnsChoices": [ "individual, internal customer", "individual, external customer", "organizational, internal customer", "organizational, external customer" ],
"arrAnsIDs": [ 460094, 460095, 460096, 460097 ],
"intCR": 4,
"arrAnswerFeedback": [ "<p class=\"explanations\">Daffodil purchases insurance coverage for the benefit of its employees, and is therefore <b>not</b> an individual customer. Daffodil is not an employee or department within Magnolia, so Daffodil is <b>not</b> an internal customer. </p>", "<p class=\"explanations\">Daffodil is an external customer. However, Daffodil purchases insurance coverage for the benefit of its employees, and is therefore <b>not</b> an individual customer.</p>", "<p class=\"explanations\">Daffodil is an organizational customer. However, Daffodil is <b>not</b> an internal customer because Daffodil is not an employee of Magnolia.</p>", "<p class=\"explanations\">Daffodil is an organizational customer because Daffodil buys Magnolia’s insurance for the benefit of Daffodil’s employees. Daffodil is an external customer because Daffodil buys and uses Magnolia’s products and is not an employee of Magnolia.</p>" ]
}

arrQuestions['ACS_101_EOL_002'] = {
"strID": "ACS_101_EOL_002",
"questionID": 113819,
"item": "ACS_101_EOL2020_002",
"primaryLO": "1A",
"textref": "c. 1, p. 1",
"textbook": 0,
"chapter": 1,
"module": 1,
"arrLOs": [ "1A" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">At the Timber Insurance Company, the claim department, the underwriting department, and the customer service department have developed a silo mentality. One correct statement about this situation is that</p>",
"arrAnsChoices": [ "these departments most likely share a 360-degree view of the customer and a comprehensive understanding of customers’ wants and needs", "a lack of communication and information sharing between these departments at Timber is likely to cause customer service problems", "Timber most likely can improve customer service outcomes by encouraging long-term competition between these departments", "Timber most likely can reduce the silo mentality by moving these departments to separate buildings" ],
"arrAnsIDs": [ 460098, 460099, 460100, 460101 ],
"intCR": 2,
"arrAnswerFeedback": [ "<p class=\"explanations\">A silo mentality occurs when different departments within the same company fail to share information or knowledge with each other and do not collaborate for the good of the company and its customers. When a silo mentality exists, departments do <b>not</b> have a single, unified “360-degree” vision and cross-functional ownership of the customer experience.</p>", "<p class=\"explanations\">A silo mentality occurs when different departments within the same company fail to share information or knowledge with each other and do not collaborate for the good of the company and its customers. Without a single, unified vision and cross-functional ownership of the customer experience, employees can easily develop a silo mentality. When this happens, different departments may deliver different customer experiences with different management, different goals, and different ways of measuring success.</p>", "<p class=\"explanations\">Encouraging long-term competition between groups may <b>encourage</b> a silo mentality. Friendly competition can temporarily boost performance and morale; however, over the long term it may cause employees to develop greater loyalty to their teams than to the company. If people on one team try to stop another team from “winning,” someone will certainly lose. If any team in a company “loses,” then the company itself loses.</p>", "<p class=\"explanations\">When different departments have separate physical locations (buildings, floors, rooms, or even different cities), separate mailing lists, or separate goals, the organization becomes <b>fragmented</b>, which could encourage a silo mentality. When a department seems like its own organization, it has become a silo.</p>" ]
}

arrQuestions['ACS_101_EOL_003'] = {
"strID": "ACS_101_EOL_003",
"questionID": 113820,
"item": "ACS_101_EOL2020_003",
"primaryLO": "1A",
"textref": "c. 1, p. 1",
"textbook": 0,
"chapter": 1,
"module": 1,
"arrLOs": [ "1A" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">Financial professionals may be part of an insurance company’s direct distribution system or indirect distribution system. The following statement(s) can correctly be made about these types of systems:</p><ol type=\"A\" class=\"combo\"><li>In a direct distribution system, the insurance company exercises significant control over its sales force.</li><li>Financial professionals in an indirect distribution system are generally responsible for their own business expenses, including office expenses, training expenses, marketing expenses and benefits.</li><li>Financial professionals in an indirect distribution system are under no obligation to place business with a specific insurer.</li></ol>",
"arrAnsChoices": [ "A, B, and C", "A and B only", "B and C only", "A only" ],
"arrAnsIDs": [ 460102, 460103, 460104, 460105 ],
"intCR": 1,
"arrAnswerFeedback": [ "<p class=\"explanations\">Statement A is correct. In a direct distribution system, the insurer owns the distribution system and communicates directly with the customer through a direct sales force or through direct-to-consumer sales. The company exercises significant control over its direct sales force, which can include career agents, multiple-line exclusive agents, and salaried sales representatives, and also contributes significantly to their support.</p><p class=\"explanations\">Statements B and C are also correct. In an indirect distribution system, the insurer relies on independent/non-affiliated individuals and organizations. These intermediaries are generally responsible for their own business expenses, including office expenses, training expenses, marketing expenses and security benefits. They are under no obligation to place business with a specific insurer, so providing a great experience for them is a high priority for insurers.</p>", "<p class=\"explanations\">Statements A and B are correct; however, Statement C is also correct.</p>", "<p class=\"explanations\">Statement B and C are correct; however, Statement A is also correct.</p>", "<p class=\"explanations\">Statement A is correct; however, it is not the only correct statement.</p>" ]
}

arrQuestions['ACS_101_EOL_004'] = {
"strID": "ACS_101_EOL_004",
"questionID": 113821,
"item": "ACS_101_EOL2020_004",
"primaryLO": "1B",
"textref": "c. 1, p. 15",
"textbook": 0,
"chapter": 1,
"module": 1,
"arrLOs": [ "1B" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">Customer perceptions are based on facts and inferences. Select the answer choice containing an <i>inference</i>.</p>",
"arrAnsChoices": [ "John Franklin believes that Joy Brewer, a customer service representative for Graphite Financial, is a new, untrained employee after having a difficult interaction.", "Graphite Financial received two awards for excellence in customer service.", "Graphite Financial hires and trains more customer service representatives than their competitor, Micah Financial.", "Autumn Ward, an underwriter for Graphite Financial, has been nominated for “underwriter of the year” by her supervisor." ],
"arrAnsIDs": [ 460106, 460107, 460108, 460109 ],
"intCR": 1,
"arrAnswerFeedback": [ "<p class=\"explanations\">John Franklin is making an inference about Joy Brewer’s abilities as a customer service representative due to their negative interaction. Because Mr.&nbsp;Franklin is unable to verify the longevity of Ms.&nbsp;Brewer’s employment or her amount of training, Mr.&nbsp;Franklin’s belief cannot be proven as fact.</p>", "<p class=\"explanations\">Graphite Financial receiving two awards is a verifiable piece of objective information, and is therefore a <b>fact</b>.</p>", "<p class=\"explanations\">The number of customer service representatives Graphite and Micah hire are pieces of objective information that can be verified and proven true. This is a <b>fact</b>.</p>", "<p class=\"explanations\">Ms.&nbsp;Ward’s nomination for “underwriter of the year” is a verifiable, objective piece of information, and is therefore a <b>fact</b>. </p>" ]
}

arrQuestions['ACS_101_EOL_005'] = {
"strID": "ACS_101_EOL_005",
"questionID": 113822,
"item": "ACS_101_EOL2020_005",
"primaryLO": "1B",
"textref": "c. 1, p. 2",
"textbook": 0,
"chapter": 1,
"module": 1,
"arrLOs": [ "1B", "1C" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">Adam Farrell is a CSR at the Sunflower Insurance Company. One day, Mr.&nbsp;Farrell forwarded his telephone to voicemail so that he could concentrate on writing a report. When Larissa Bilson, a Sunflower customer, called Mr.&nbsp;Farrell, she was automatically sent to the company’s interactive voice response system. Ms.&nbsp;Bilson was surprised because Mr.&nbsp;Farrell had given her his direct line so that she could call him back to provide him with some necessary information. After going through the phone system, she was finally able to leave a message for Mr.&nbsp;Farrell. She hung up, disappointed that she would have to wait for him to call her back. The following statement(s) can correctly be made about this situation:</p><ol type=\"A\" class=\"combo\"><li>A service gap occurred in this situation.</li><li>A moment of truth occurred in this situation.</li></ol>",
"arrAnsChoices": [ "Both A and B", "A only", "B only", "Neither A nor B" ],
"arrAnsIDs": [ 460110, 460111, 460112, 460113 ],
"intCR": 1,
"arrAnswerFeedback": [ "<p class=\"explanations\">Statement A is correct. A service gap is the difference between expected service—the quality of the service a customer thinks he will receive—and perceived service—the quality of the service he believes he actually receives. Ms.&nbsp;Bilson’s perceived service (the service she actually received) was less than she had expected to receive, a service gap occurred. </p><p class=\"explanations\">Statement B is correct. A moment of truth is an instant when the company has an opportunity to create a lasting good or bad impression in the mind of the customer. In this situation, a moment of truth occurred when Ms.&nbsp;Bilson hung up the phone, feeling disappointed with Mr.&nbsp;Farrell, and thus with Sunflower.</p>", "<p class=\"explanations\">Statement A is correct. However, Statement B is also correct.</p>", "<p class=\"explanations\"> Statement B is correct. However, Statement A is also correct.</p>", "<p class=\"explanations\">At least one of these statements is correct.</p>" ]
}

arrQuestions['ACS_101_EOL_006'] = {
"strID": "ACS_101_EOL_006",
"questionID": 113823,
"item": "ACS_101_EOL2020_006",
"primaryLO": "1B",
"textref": "c. 1, p. 2",
"textbook": 0,
"chapter": 1,
"module": 1,
"arrLOs": [ "1B" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">Customers’ perceptions about an insurance company are often influenced by such factors as the company’s reliability, assurance, empathy, and responsiveness. The ability of a company to perform promised service consistently and accurately is most closely associated with the factor known as</p>",
"arrAnsChoices": [ "reliability", "assurance", "empathy", "responsiveness" ],
"arrAnsIDs": [ 460114, 460115, 460116, 460117 ],
"intCR": 1,
"arrAnswerFeedback": [ "<p class=\"explanations\">An insurance company is reliable if it is able to perform promised service consistently and accurately. Ways companies can enhance customers’ perceptions about reliability include consistently maintaining accurate records, processing transactions quickly and correctly, and billing customers accurately and on time, and ensuring processes are in place to guarantee prompt handling of problems.</p>", "<p class=\"explanations\">Insurance companies promote assurance by providing educated, well-trained service providers who inspire trust and confidence by being competent, credible courteous, and respectful; possess the necessary knowledge and skills; and use the right information systems. </p>", "<p class=\"explanations\">Empathy is the ability to understand another person’s emotional state and imagine how you would feel in a similar situation. An insurance company can illustrate its commitment to customer communication by listening to customers and speaking to them in language they can understand.</p>", "<p class=\"explanations\">An insurance company is responsive if it provides fast, appropriate service. Companies can support responsiveness by hiring sufficient service providers, training them appropriately, and giving them easy access to customer, product, and account information.</p>" ]
}

arrQuestions['ACS_101_EOL_007'] = {
"strID": "ACS_101_EOL_007",
"questionID": 113824,
"item": "ACS_101_EOL2020_007",
"primaryLO": "1C",
"textref": "c. 1, pp. 28-29",
"textbook": 0,
"chapter": 1,
"module": 1,
"arrLOs": [ "1C" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">The following statement(s) can correctly be made about value-added customer service:</p><ol type=\"A\" class=\"combo\"><li>The more valuable a company is to its customers, the more likely its customers will continue doing business with the company and that it will achieve its bottom-line business goals.</li><li>A service that is commonly expected by customers, and leaves them dissatisfied if it is not available, is not considered a value-added service.</li></ol>",
"arrAnsChoices": [ "Both A and B", "A only", "B only", "Neither A nor B" ],
"arrAnsIDs": [ 460118, 460119, 460120, 460121 ],
"intCR": 1,
"arrAnswerFeedback": [ "<p class=\"explanations\">Both Statements A and B are correct. Value-added customer service provides customers with additional benefits that do not routinely come with the products or services they have purchased.</p>", "<p class=\"explanations\">Statement A is correct. However, Statement B is also correct.</p>", "<p class=\"explanations\">Statement B is correct. However, Statement A is also correct. </p>", "<p class=\"explanations\">At least one of these statements are correct.</p>" ]
}

arrQuestions['ACS_101_EOL_008'] = {
"strID": "ACS_101_EOL_008",
"questionID": 113825,
"item": "ACS_101_EOL2020_008",
"primaryLO": "1D",
"textref": "c. 1, p. 31",
"textbook": 0,
"chapter": 1,
"module": 1,
"arrLOs": [ "1D" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">There are many benefits to providing an exceptional customer experience. All of the following are potential benefits of an exceptional customer experience <B>EXCEPT</B></p>",
"arrAnsChoices": [ "attracting new customers", "improving employee morale", "decreasing profitability", "enhancing the company’s image" ],
"arrAnsIDs": [ 460122, 460123, 460124, 460125 ],
"intCR": 3,
"arrAnswerFeedback": [ "<p class=\"explanations\">This is a potential benefit of exceptional customer service and therefore not the correct answer.</p>", "<p class=\"explanations\">This is a potential benefit of exceptional customer service and therefore not the correct answer.</p>", "<p class=\"explanations\">Attracting new customers, improving employee morale, and enhancing the company’s image are all potential benefits of an exceptional customer experience. Providing an exceptional customer experience may potentially <b>increase</b> profitability.</p>", "<p class=\"explanations\">This is a potential benefit of exceptional customer service and therefore not the correct answer.</p>" ]
}




var arrlotext = new Array(); 
arrlotext['1A'] = "Distinguish between an insurance company’s individual and organizational customers and between internal and external customers.";
arrlotext['1B'] = "Describe factors, including non-industry service expectations, that influence customer expectations and perceptions.";
arrlotext['1C'] = "Distinguish between basic customer service and exceptional customer service and explain how exceptional customer service can help bridge the service gap.";
arrlotext['1D'] = "Explain why providing exceptional customer experiences is a top priority for insurers, and describe the challenges involved in delivering exceptional experiences.";
