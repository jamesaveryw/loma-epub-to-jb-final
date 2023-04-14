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

var quizname = "ACS 101 Practice Questions, Module 2, Lesson 4";
var coursename = 'ACS 101';
var modulenumber = 2;
var title = "ACS_101_EOL2020_2_4";
var intNumPools = 1;
var numQ = 12;
var numTexts = 1;
var numChap = 1;
var arrTexts = new Array();
var arrNumChap = new Array();
var duration = 0;
arrTexts[0] = "ACS 101 Module 2 (2019)";
arrNumChap[0] = 1;
var thisChap = '4';

objPool = new Object(); 
objPool.intSelectCount = 12;
objPool.formID = 2212;
objPool.formName = 'EOL2020_2_4';
arrPoolQuestions = new Array();
arrPoolQuestions[0] = 'ACS_101_EOL_061';
arrPoolQuestions[1] = 'ACS_101_EOL_062';
arrPoolQuestions[2] = 'ACS_101_EOL_063';
arrPoolQuestions[3] = 'ACS_101_EOL_064';
arrPoolQuestions[4] = 'ACS_101_EOL_065';
arrPoolQuestions[5] = 'ACS_101_EOL_066';
arrPoolQuestions[6] = 'ACS_101_EOL_067';
arrPoolQuestions[7] = 'ACS_101_EOL_068';
arrPoolQuestions[8] = 'ACS_101_EOL_069';
arrPoolQuestions[9] = 'ACS_101_EOL_070';
arrPoolQuestions[10] = 'ACS_101_EOL_071';
arrPoolQuestions[11] = 'ACS_101_EOL_072';
objPool.arrPoolQuestions = arrPoolQuestions;
arrPools[0] = objPool;

arrQuestions['ACS_101_EOL_061'] = {
"strID": "ACS_101_EOL_061",
"questionID": 113878,
"item": "ACS_101_EOL2020_061",
"primaryLO": "4A",
"textref": "c. 4, p. 1",
"textbook": 1,
"chapter": 4,
"module": 2,
"arrLOs": [ "4A" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">Audrey Bowen, a customer service provider, received a telephone call from Kyle Tate, a customer who wanted an explanation of his life insurance policy’s guaranteed insurability option. Ms.&nbsp;Bowen has just finished explaining the option to him. The end of their conversation is shown below:</p><table align=\"center\" cellspacing=\"0\" width=\"95%\" class=\"indent\"><tr><td valign=\"top\"><b>Ms.&nbsp;Bowen:</b> (<i>self-assured voice</i>) Do you understand, Mr.&nbsp;Tate?</td></tr><tr><td valign=\"top\"><b>Mr.&nbsp;Tate:</b> (<i>hesitant voice</i>) Well, I think so. I, uh … yes, I think I understand.</td></tr><tr><td valign=\"top\"><b>Ms.&nbsp;Bowen:</b> OK, great. Please don’t hesitate to give me a call if you have any more questions.</td></tr><tr><td valign=\"top\"><b>Mr.&nbsp;Tate:</b> OK. Uhmm, well, just one more … that part about the …</td></tr><tr><td valign=\"top\"><b>Ms.&nbsp;Bowen:</b> Yes?</td></tr><tr><td valign=\"top\"><b>Mr.&nbsp;Tate:</b> Oh, never mind. It’s OK. Thanks again.</td></tr><tr><td valign=\"top\"><b>Ms.&nbsp;Bowen:</b> You’re very welcome. Goodbye.</td></tr></table><p class=\"stem\">With regard to Mr.&nbsp;Tate’s behavior in this situation and to how well Ms.&nbsp;Bowen dealt with this type of behavior, it is correct to say that Mr.&nbsp;Tate exhibited the type of behavior called</p>",
"arrAnsChoices": [ "assertive behavior, and Ms.&nbsp;Bowen made no mistakes in dealing with Mr.&nbsp;Tate", "assertive behavior, and Ms.&nbsp;Bowen should have drawn Mr.&nbsp;Tate out more by asking him further questions", "passive behavior, and Ms.&nbsp;Bowen made no mistakes in dealing with Mr.&nbsp;Tate", "passive behavior, and Ms.&nbsp;Bowen should have drawn Mr.&nbsp;Tate out more by asking him further questions" ],
"arrAnsIDs": [ 460337, 460338, 460339, 460340 ],
"intCR": 4,
"arrAnswerFeedback": [ "<p class=\"explanations\">Assertive behavior occurs when a person states his position clearly and firmly, but in a constructive rather than a destructive manner. In this situation, Mr.&nbsp;Tate is clearly hesitant about expressing his concerns; therefore, his behavior would <b>not </b>be considered assertive.</p>", "<p class=\"explanations\">It is correct to say that Ms.&nbsp;Bowen should have noticed that Mr.&nbsp;Tate was reluctant to express his concerns, and she should have asked questions to let him know that his concerns are important. However, Mr.&nbsp;Tate’s behavior would <b>not</b> be considered assertive in this situation because he is clearly hesitant about expressing his concerns. Assertive behavior occurs when a person states his position clearly and firmly, but in a constructive rather than a destructive manner.</p>", "<p class=\"explanations\">In this situation, Mr.&nbsp;Tate <b>is</b> showing passive behavior, which occurs when a person does not try to influence the behavior of other people. However, it is incorrect to say that Ms.&nbsp;Bowen made no mistakes in this situation. She should have noticed that Mr.&nbsp;Tate had concerns he was reluctant to express, and she should have asked questions to let him know that his concerns are important.</p>", "<p class=\"explanations\">Passive behavior occurs when a person does not try to influence the behavior of other people. Generally, passive people rarely state their views or feelings, and they rarely express what they want, or do so indirectly. In this situation, Mr.&nbsp;Tate is showing passive behavior.</p><p class=\"explanations\">In addition, Ms.&nbsp;Bowen should have noticed that Mr.&nbsp;Tate was reluctant to express his concerns. She should have asked questions to let Mr.&nbsp;Tate know that his concerns are important and that she is listening to him.</p>" ]
}

arrQuestions['ACS_101_EOL_062'] = {
"strID": "ACS_101_EOL_062",
"questionID": 113879,
"item": "ACS_101_EOL2020_062",
"primaryLO": "4A",
"textref": "c. 4, p. 1",
"textbook": 1,
"chapter": 4,
"module": 2,
"arrLOs": [ "4A" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">In one behavior pattern that CSRs may encounter, a customer feels hostile about something but is afraid or unwilling to express this hostility. Such a customer is exhibiting the type of behavior known as (<b>assertive </b>/<b> passive-aggressive</b>) behavior. A customer service provider (<b>should</b> /<b> should not</b>) encourage the customer who exhibits this type of behavior to express his underlying hostile emotions.</p>",
"arrAnsChoices": [ "assertive / should", "assertive / should not", "passive-aggressive / should", "passive-aggressive / should not" ],
"arrAnsIDs": [ 460341, 460342, 460343, 460344 ],
"intCR": 3,
"arrAnswerFeedback": [ "<p class=\"explanations\">It is true that a service provider should encourage a customer who exhibits this type of behavior to express his underlying hostile emotions. However, the behavior pattern described is <b>not</b> assertive behavior, which occurs when a person states his position clearly and firmly, but in a constructive rather than a destructive manner.</p>", "<p class=\"explanations\">The behavior pattern described is <b>not</b> assertive behavior, which occurs when a person states his position clearly and firmly, but in a constructive rather than a destructive manner. In addition, a service provider <b>should</b> encourage a customer who exhibits this type of behavior to express his underlying hostile emotions.</p>", "<p class=\"explanations\">Passive-aggressive behavior occurs when a customer feels hostile about something but is afraid or unwilling to be openly aggressive and show hostility. When a service provider senses that hostile feelings lie beneath a customer’s passive words or behavior, the service provider must encourage the customer to express those emotions. Unless such a customer is allowed to release his aggressive energy, the service provider will not be able to help him find a solution.</p>", "<p class=\"explanations\">It is true that passive-aggressive behavior occurs when a customer feels hostile about something but is afraid or unwilling to express this hostility. However, a service provider <b>should</b> encourage a customer who exhibits this type of behavior to express his underlying hostile emotions.</p>" ]
}

arrQuestions['ACS_101_EOL_063'] = {
"strID": "ACS_101_EOL_063",
"questionID": 113880,
"item": "ACS_101_EOL2020_063",
"primaryLO": "4B",
"textref": "c. 4, p. 2",
"textbook": 1,
"chapter": 4,
"module": 2,
"arrLOs": [ "4B" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">Chester Hall, a customer service provider, received a telephone call from an upset customer. Shown below is a portion of the conversation in which the customer described her problem to Mr.&nbsp;Hall:</p><table align=\"center\" cellspacing=\"0\" width=\"95%\" class=\"indent\"><tr><td width=\"25\" valign=\"top\"></td><td>This is Mary Cabot, and I’m sick and tired of being bounced all over your company trying to find someone who knows what they are doing. I hope you’re the right person to contact about transferring money in my annuity from the bond account to the stock account.</td></tr></table><p class=\"stem\">The following answer choices contain responses that Mr.&nbsp;Hall could make to Ms.&nbsp;Cabot. Select the answer choice that contains the most appropriate response that Mr.&nbsp;Hall could make to address Ms.&nbsp;Cabot’s problem.</p>",
"arrAnsChoices": [ "“Could you spell your last name, please?”", "“A lot of people here still don’t know that I handle these types of requests. You would think they’d have it figured out by now. Let me get some information from you so I can help you.”", "“Ms.&nbsp;Cabot, I can help you, but not if you are going to be verbally abusive.”", "“I’m sorry you were transferred so often, Ms.&nbsp;Cabot. I know how frustrating that can be. Let me get some information from you so we can proceed with the transfer of funds.”" ],
"arrAnsIDs": [ 460345, 460346, 460347, 460348 ],
"intCR": 4,
"arrAnswerFeedback": [ "<p class=\"explanations\">This response is <b>not</b> the most appropriate response that Mr.&nbsp;Hall could make in this situation.</p>", "<p class=\"explanations\">This response is <b>not</b> the most appropriate response that Mr.&nbsp;Hall could make in this situation.</p>", "<p class=\"explanations\">This response is <b>not</b> the most appropriate response that Mr.&nbsp;Hall could make in this situation.</p>", "<p class=\"explanations\">This response is the most appropriate response because it follows guidelines for dealing with upset customers: (1) it offers an apology without blaming others or the company’s processes, and (2) it shows empathy for the customer’s feelings before moving to a discussion of the problem. Ms.&nbsp;Cabot is more likely to calm down if she knows that Mr.&nbsp;Hall understands her feelings and cares about her needs, and that he is genuinely sorry for her trouble.</p>" ]
}

arrQuestions['ACS_101_EOL_064'] = {
"strID": "ACS_101_EOL_064",
"questionID": 113881,
"item": "ACS_101_EOL2020_064",
"primaryLO": "4B",
"textref": "c. 4, p. 2",
"textbook": 1,
"chapter": 4,
"module": 2,
"arrLOs": [ "4B" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">Customer service providers should follow certain steps when dealing with upset customers. These steps include</p><ol type=\"A\" class=\"combo\"><li>Apologizing to the customer, even if you or your company are not responsible for the situation</li><li>Determining the facts of the situation before recognizing the customer’s emotions</li><li>Identifying with the customer by relating personal stories about similar experiences</li></ol>",
"arrAnsChoices": [ "A, B, and C", "A and B only", "B and C only", "A only" ],
"arrAnsIDs": [ 460349, 460350, 460351, 460352 ],
"intCR": 4,
"arrAnswerFeedback": [ "<p class=\"explanations\">At least one of these statements is <b>not</b> a recommended guideline for working with upset customers.</p>", "<p class=\"explanations\">At least one of these statements is <b>not</b> a recommended guideline for working with upset customers.</p>", "<p class=\"explanations\">At least one of these statements is <b>not </b>a recommended guideline for working with upset customers.</p>", "<p class=\"explanations\">Statement A is correct. Even if you or your company are not responsible for the customer’s situation, you can still apologize because your customer is upset. Statements B and C are incorrect. Service providers should recognize the customer’s emotions before determining the facts of the situation. In addition, even though recalling one’s experience in similar situations is a good way to understand the customer’s feelings, it is not appropriate for a service provider to share these personal stories with the customer.</p>" ]
}

arrQuestions['ACS_101_EOL_065'] = {
"strID": "ACS_101_EOL_065",
"questionID": 113882,
"item": "ACS_101_EOL2020_065",
"primaryLO": "4C",
"textref": "c. 4, p. 3",
"textbook": 1,
"chapter": 4,
"module": 2,
"arrLOs": [ "4C" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">At Embry Financial Services, both customers and service providers have been unable to access account information because of problems with Embry’s computer system. Alex Garcia, an Embry customer service provider, recently received a telephone call from a customer who was upset because Embry’s computer system was down, and she could not obtain immediate information about her account. The guidelines that Mr.&nbsp;Garcia should follow to provide the customer with an effective explanation in this situation include</p><ol type=\"A\" class=\"combo\"><li>Tailoring the explanation to the specific customer and her needs</li><li>Providing additional information even if it does not contribute to the overall goal of the customer interaction</li></ol>",
"arrAnsChoices": [ "Both A and B", "A only", "B only", "Neither A nor B" ],
"arrAnsIDs": [ 460353, 460354, 460355, 460356 ],
"intCR": 2,
"arrAnswerFeedback": [ "<p class=\"explanations\">At least one of these statements is <b>not</b> a recommended guideline for providing effective explanations.</p>", "<p class=\"explanations\">Statement A is an appropriate guideline for Mr.&nbsp;Garcia to follow. A standard explanation may not work for everyone, so he should be aware of each customer’s situation and needs.</p><p class=\"explanations\">Statement B is incorrect because Mr.&nbsp;Garcia should be concise and provide additional information only if it is relevant and helpful. He should avoid raising issues or questions that do not contribute to the overall goal of the customer interaction.</p>", "<p class=\"explanations\">Statement B is <b>not</b> a recommended guideline for providing effective explanations.</p>", "<p class=\"explanations\">At least one of these statements is a recommended guideline for providing effective explanations.</p>" ]
}

arrQuestions['ACS_101_EOL_066'] = {
"strID": "ACS_101_EOL_066",
"questionID": 113883,
"item": "ACS_101_EOL2020_066",
"primaryLO": "4C",
"textref": "c. 4, p. 3",
"textbook": 1,
"chapter": 4,
"module": 2,
"arrLOs": [ "4C" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">In a customer service context, <i>persuasion</i> is correctly defined as</p>",
"arrAnsChoices": [ "the process of reaching a mutually acceptable solution when there is a disagreement or conflict of interest", "a factual description of how things work or why certain actions are taken", "an intentional verbal attempt to influence the attitude or behavior of others", "an intentional verbal attempt to convince others to do something they do not want to do" ],
"arrAnsIDs": [ 460357, 460358, 460359, 460360 ],
"intCR": 3,
"arrAnswerFeedback": [ "<p class=\"explanations\">The process of reaching a mutually acceptable solution in the event of a disagreement or a conflict of interest is known as <b>negotiation</b>,<b> </b>not persuasion. Although closely related to persuasion, negotiation goes a step further in finding a solution that is acceptable to both parties.</p>", "<p class=\"explanations\">A factual description of how things work or why certain actions are taken is an <b>explanation</b>, not persuasion.</p>", "<p class=\"explanations\">Persuasion is an intentional verbal attempt to influence the attitude or behavior of others. Persuasion relies on personal credibility and logical reasoning to encourage others to think in a certain way.</p>", "<p class=\"explanations\">An attempt to convince others to do something they do not want to do is <b>coercion</b>, not persuasion.</p>" ]
}

arrQuestions['ACS_101_EOL_067'] = {
"strID": "ACS_101_EOL_067",
"questionID": 113884,
"item": "ACS_101_EOL2020_067",
"primaryLO": "4C",
"textref": "c. 4, p. 3",
"textbook": 1,
"chapter": 4,
"module": 2,
"arrLOs": [ "4C" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">A customer service provider’s personal credibility with customers can come from a variety of sources. For example, Henry Jain, a CSR, has earned credibility with his customers through his intentions, and they trust him to act in their best interests. This information indicates that Mr.&nbsp;Jain’s personal credibility is based on</p>",
"arrAnsChoices": [ "his apparent motives", "his integrity and principles", "his knowledge and abilities", "the personal impression he creates" ],
"arrAnsIDs": [ 460361, 460362, 460363, 460364 ],
"intCR": 1,
"arrAnswerFeedback": [ "<p class=\"explanations\">Intention is a person’s apparent motive. A customer service provider’s intention shows customers that his actions are based on their needs and that he has their best interests in mind.</p>", "<p class=\"explanations\">Character refers to a person’s integrity and principles.</p>", "<p class=\"explanations\">Competence refers to a person’s knowledge and ability.</p>", "<p class=\"explanations\">Personal impression is the image a person presents to others. It is created by a person’s appearance, attitude, tone of voice, and organization.</p>" ]
}

arrQuestions['ACS_101_EOL_068'] = {
"strID": "ACS_101_EOL_068",
"questionID": 113885,
"item": "ACS_101_EOL2020_068",
"primaryLO": "4C",
"textref": "c. 4, p. 3",
"textbook": 1,
"chapter": 4,
"module": 2,
"arrLOs": [ "4C" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">A customer service provider may need to use logical reasoning to persuade a customer to accept a recommended plan of action. To be effective, logical reasoning must</p><ol type=\"A\" class=\"combo\"><li>Offer a valid argument</li><li>Provide evidence to support a recommendation</li><li>Address issues from the customer’s point of view</li></ol>",
"arrAnsChoices": [ "A, B, and C", "A and B only", "A and C only", "B and C only" ],
"arrAnsIDs": [ 460365, 460366, 460367, 460368 ],
"intCR": 1,
"arrAnswerFeedback": [ "<p class=\"explanations\">When using logical reasoning, a service provider must offer a valid argument—one in which the reasons given are true, and the conclusion is a logical extension of those reasons. Any recommendation given should be supported by facts and examples from outside sources. To be effective, logical reasoning must address the customer’s needs from the customer’s point of view and focus on the benefits the customer receives (or the harm he will avoid) by agreeing with you.</p>", "<p class=\"explanations\">Statements A and B are correct. However, Statement C is also correct.</p>", "<p class=\"explanations\">Statements A and C are correct. However, Statement B is also correct.</p>", "<p class=\"explanations\">Statements B and C are correct. However, Statement A is also correct.</p>" ]
}

arrQuestions['ACS_101_EOL_069'] = {
"strID": "ACS_101_EOL_069",
"questionID": 113886,
"item": "ACS_101_EOL2020_069",
"primaryLO": "4C",
"textref": "c. 4, p. 3",
"textbook": 1,
"chapter": 4,
"module": 2,
"arrLOs": [ "4C" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">In some customer service situations, negotiation is appropriate to find a solution to a problem. Two important facts about negotiation are that a service provider (<b>needs to </b>/ <b>should never</b>) give up something to get something in return, and a service provider (<b>can</b> / <b>cannot</b>) win an argument with a customer.</p>",
"arrAnsChoices": [ "needs to / can", "needs to / cannot", "should never / can", "should never / cannot" ],
"arrAnsIDs": [ 460369, 460370, 460371, 460372 ],
"intCR": 2,
"arrAnswerFeedback": [ "<p class=\"explanations\">It is true that, in a negotiation, service providers need to give up something to get something in return. However, service providers <b>cannot</b> win an argument with a customer. If a service provider comes out of a negotiation feeling that she’s beaten the customer, that’s not likely to be the case. In the long run, she and her company have probably lost because a customer who isn’t satisfied is unlikely to continue doing business with the company.</p>", "<p class=\"explanations\">Service providers need to be willing to give up something to get something in return, even if that means stepping outside their comfort zone. If a service provider comes out of a negotiation feeling that she’s beaten the customer, that’s not likely to be the case. In the long run, she and her company have probably lost because a customer who feels as if he lost an argument won’t feel satisfied and isn’t likely to continue doing business with the company.</p>", "<p class=\"explanations\">In a negotiation, service providers <b>need to</b> be willing to give up something to get something in return, even if that means stepping outside their comfort zone. In addition, service providers <b>cannot</b> win an argument with a customer. If a service provider comes out of a negotiation feeling that she’s beaten the customer, that’s not likely to be the case. In the long run, she and her company have probably lost because a customer who isn’t satisfied is unlikely to continue doing business with the company.</p>", "<p class=\"explanations\">It is true that service providers cannot win an argument with a customer. However, in a negotiation, service providers <b>need to</b> give up something to get something in return.</p>" ]
}

arrQuestions['ACS_101_EOL_070'] = {
"strID": "ACS_101_EOL_070",
"questionID": 113887,
"item": "ACS_101_EOL2020_070",
"primaryLO": "4C",
"textref": "c. 4, p. 3",
"textbook": 1,
"chapter": 4,
"module": 2,
"arrLOs": [ "4C" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">The following statements describe the various stages of the negotiation process in customer service situations. Select the answer choice containing the description of the <i>discussion</i> stage.</p>",
"arrAnsChoices": [ "During this stage, the negotiating parties present information and express their feelings about needs, limitations that might make agreement on certain points difficult, and any grievances related to the situation.", "During this stage, one person proposes a solution to the situation, and the other person either agrees to the solution or proposes an alternate solution.", "In customer service situations, this stage generally occurs when a disagreement requires a service provider to suspend the negotiation process temporarily to gather relevant information and identify a possible solution.", "Although not technically a stage of the negotiation process, this activity, if left undone, can derail an apparently successful negotiation." ],
"arrAnsIDs": [ 460373, 460374, 460375, 460376 ],
"intCR": 1,
"arrAnswerFeedback": [ "<p class=\"explanations\">During the discussion stage, the parties to the negotiation present information and express their feelings about needs, limitations, and grievances. Discussion lets both parties see the situation from the other person’s point of view.</p>", "<p class=\"explanations\">This answer choice describes the <b>proposal/counterproposal</b> stage of negotiation.</p>", "<p class=\"explanations\">This answer choice describes the <b>preparation or research </b>stage of negotiation.</p>", "<p class=\"explanations\">This answer choice describes <b>follow through</b>.</p>" ]
}

arrQuestions['ACS_101_EOL_071'] = {
"strID": "ACS_101_EOL_071",
"questionID": 113888,
"item": "ACS_101_EOL2020_071",
"primaryLO": "4D",
"textref": "c. 4, p. 4",
"textbook": 1,
"chapter": 4,
"module": 2,
"arrLOs": [ "4D" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">Four conflict management techniques are surrender, cooperation, coercion, and avoidance. Typically, the best way for a customer service provider to manage conflict is through</p>",
"arrAnsChoices": [ "surrender", "cooperation", "coercion", "avoidance" ],
"arrAnsIDs": [ 460377, 460378, 460379, 460380 ],
"intCR": 2,
"arrAnswerFeedback": [ "<p class=\"explanations\">Surrender involves one person giving in to end the conflict. Surrender is <b>not</b> an effective way of dealing with conflict because even though surrender ends the argument, it doesn’t offer a rational, reasonable solution to the problem.</p>", "<p class=\"explanations\">Cooperation—a conflict management technique in which the parties involved in a conflict discuss the conflict openly and honestly and look for a resolution—usually is the best way for a service provider to manage conflict.</p>", "<p class=\"explanations\">Coercion is an attempt to persuade others to do something using force, threats, or intimidation to gain compliance. The use of coercion by a service provider is <b>never</b> appropriate and can even expose companies to legal or regulatory liabilities.</p>", "<p class=\"explanations\">Avoidance involves physically or psychologically removing oneself from a conflict situation. Although there are times when temporary avoidance can be useful, avoidance does not make the problem go away and, in fact, it often compounds the problem.</p>" ]
}

arrQuestions['ACS_101_EOL_072'] = {
"strID": "ACS_101_EOL_072",
"questionID": 113889,
"item": "ACS_101_EOL2020_072",
"primaryLO": "4D",
"textref": "c. 4, p. 4",
"textbook": 1,
"chapter": 4,
"module": 2,
"arrLOs": [ "4D" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">Customer service providers may occasionally encounter rude or abusive customers. Acceptable techniques for dealing with rude or abusive customers include all of the following <B>EXCEPT</B></p>",
"arrAnsChoices": [ "reminding the customer, in a nonthreatening way, that the call is being recorded, if that is the case", "asking a question to slow down the customer and give her a chance to compose herself", "hanging up on the customer without saying a word", "asking a manager or coworker to intercede" ],
"arrAnsIDs": [ 460381, 460382, 460383, 460384 ],
"intCR": 3,
"arrAnswerFeedback": [ "<p class=\"explanations\">This is an acceptable technique for dealing with rude or abusive customers; therefore, it is <b>not </b>the correct response.</p>", "<p class=\"explanations\">This is an acceptable technique for dealing with rude or abusive customers; therefore, it is <b>not </b>the correct response.</p>", "<p class=\"explanations\">A service provider should never hang up on the customer without saying a word. Instead, the service provider should state calmly that if the customer does not stop the abusive language, she will have to hang up.</p>", "<p class=\"explanations\">This is an acceptable technique for dealing with rude or abusive customers; therefore, it is <b>not </b>the correct response.</p>" ]
}




var arrlotext = new Array(); 
arrlotext['4A'] = "Analyze customers’ personalities and behavior patterns.";
arrlotext['4B'] = "Determine the appropriate way to manage specific customer behaviors.";
arrlotext['4C'] = "Use logical reasoning, personal credibility, and negotiating techniques to effectively manage interactions with customers.";
arrlotext['4D'] = "Recognize the kinds of situations that cause customers to become upset, apply conflict management techniques to calm upset or angry customers, and create appropriate solutions.";
