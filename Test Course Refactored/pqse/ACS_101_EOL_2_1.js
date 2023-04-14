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

var quizname = "ACS 101 Practice Questions, Module 2, Lesson 1";
var coursename = 'ACS 101';
var modulenumber = 2;
var title = "ACS_101_EOL2020_2_1";
var intNumPools = 1;
var numQ = 9;
var numTexts = 1;
var numChap = 1;
var arrTexts = new Array();
var arrNumChap = new Array();
var duration = 0;
arrTexts[0] = "ACS 101 Module 2 (2019)";
arrNumChap[0] = 1;
var thisChap = '1';

objPool = new Object(); 
objPool.intSelectCount = 9;
objPool.formID = 2212;
objPool.formName = 'EOL2020_2_1';
arrPoolQuestions = new Array();
arrPoolQuestions[0] = 'ACS_101_EOL_033';
arrPoolQuestions[1] = 'ACS_101_EOL_034';
arrPoolQuestions[2] = 'ACS_101_EOL_035';
arrPoolQuestions[3] = 'ACS_101_EOL_036';
arrPoolQuestions[4] = 'ACS_101_EOL_037';
arrPoolQuestions[5] = 'ACS_101_EOL_038';
arrPoolQuestions[6] = 'ACS_101_EOL_039';
arrPoolQuestions[7] = 'ACS_101_EOL_040';
arrPoolQuestions[8] = 'ACS_101_EOL_041';
objPool.arrPoolQuestions = arrPoolQuestions;
arrPools[0] = objPool;

arrQuestions['ACS_101_EOL_033'] = {
"strID": "ACS_101_EOL_033",
"questionID": 113850,
"item": "ACS_101_EOL2020_033",
"primaryLO": "1A",
"textref": "c. 1, p. 1",
"textbook": 1,
"chapter": 1,
"module": 2,
"arrLOs": [ "1A" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">Elaine Rosen, a customer service representative (CSR), answered a telephone call from a customer who spoke in an abrupt, hurried manner. Ms.&nbsp;Rosen felt that the customer’s tone was rather rude. Ms.&nbsp;Rosen would be making a fundamental attribution error in this situation if she</p>",
"arrAnsChoices": [ "concluded that the customer’s behavior was a reflection of the customer’s personality rather than considering that situational factors could be affecting the customer’s behavior", "concluded that the customer’s manner was typical behavior for a resident of the city in which the customer lived", "paid so much attention to the customer’s tone and nonverbal cues that she did not correctly interpret the customer’s actual words", "interpreted the customer’s behavior as rude because she was feeling tired and irritable herself" ],
"arrAnsIDs": [ 460223, 460224, 460225, 460226 ],
"intCR": 1,
"arrAnswerFeedback": [ "<p class=\"explanations\">The fundamental attribution error is the tendency to assume that a person acts a certain way because of his personality and not because he is affected by situational factors. Ms.&nbsp;Rosen would be committing this type of error if she assumed that the customer acted the way he did because of his personality, not because he was affected by situational factors.</p>", "<p class=\"explanations\">This conclusion is an example of <b>stereotyping</b>—a perceptual error that occurs when a person draws conclusions by focusing on general traits of large groups rather than on individual traits.</p>", "<p class=\"explanations\">This response is an example of <b>selective perception</b>—a type of bias that involves reaching a conclusion based on only what we want to or expect to perceive.</p>", "<p class=\"explanations\">This response is an example of <b>projection</b>—a perceptual error that occurs when we attribute our own feelings to someone else, who may or may not have those same feelings.</p>" ]
}

arrQuestions['ACS_101_EOL_034'] = {
"strID": "ACS_101_EOL_034",
"questionID": 113851,
"item": "ACS_101_EOL2020_034",
"primaryLO": "1B",
"textref": "c. 1, p. 2",
"textbook": 1,
"chapter": 1,
"module": 2,
"arrLOs": [ "1B" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">Reasons why people have difficulty listening effectively include</p><ol type=\"A\" class=\"combo\"><li>That, because people can listen at a faster rate than they can speak, the average listener must pay attention to actual words only about 30 percent of the time</li><li>That effective listening requires a demanding physical effort that increases the listener’s heart rate and pulse</li></ol>",
"arrAnsChoices": [ "Both A and B", "A only", "B only", "Neither A nor B" ],
"arrAnsIDs": [ 460227, 460228, 460229, 460230 ],
"intCR": 1,
"arrAnswerFeedback": [ "<p class=\"explanations\">Both statements are correct. The average person can say about 135-175 words per minute, while the average person can listen to 400-500 words per minute. So, the average listener must pay attention to actual words only about 30 percent of the time; if he isn’t actively listening the remaining 70 percent of the time, he will become distracted.</p><p class=\"explanations\">Studies show effective listening requires a demanding physical effort that increases the listener’s heart rate and pulse.</p>", "<p class=\"explanations\">Statement A is correct. However, Statement B is also correct.</p>", "<p class=\"explanations\">Statement B is correct. However, Statement A is also correct.</p>", "<p class=\"explanations\">At least one of these statements is correct.</p>" ]
}

arrQuestions['ACS_101_EOL_035'] = {
"strID": "ACS_101_EOL_035",
"questionID": 113852,
"item": "ACS_101_EOL2020_035",
"primaryLO": "1B",
"textref": "c. 1, p. 2",
"textbook": 1,
"chapter": 1,
"module": 2,
"arrLOs": [ "1B" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">There are techniques that CSRs can use to develop their active listening skills. For example, a CSR (<b>should </b>/ <b>should not</b>) attempt to plan a response while the customer is speaking. In addition, interrupting a speaker is something that a CSR should (<b>avoid doing</b> / <b>never do</b>).</p>",
"arrAnsChoices": [ "should / avoid doing", "should / never do", "should not / avoid doing", "should not / never do" ],
"arrAnsIDs": [ 460231, 460232, 460233, 460234 ],
"intCR": 3,
"arrAnswerFeedback": [ "<p class=\"explanations\">At least one part of this answer choice is incorrect.</p>", "<p class=\"explanations\">At least one part of this answer choice is incorrect.</p>", "<p class=\"explanations\">Think like a listener, not a speaker. If you’re planning how you will respond to a customer while he is still speaking, you probably won’t hear everything he says, and you won’t understand what he wants. In active listening, you should not interrupt a person without having a good reason. Acceptable reasons for interrupting a customer include when you’re having difficulty hearing the customer; when you need to clarify information that you don’t understand; and when the customer begins to dominate the conversation or takes the conversation in an unproductive direction.</p>", "<p class=\"explanations\">At least one part of this answer choice is incorrect.</p>" ]
}

arrQuestions['ACS_101_EOL_036'] = {
"strID": "ACS_101_EOL_036",
"questionID": 113853,
"item": "ACS_101_EOL2020_036",
"primaryLO": "1B",
"textref": "c. 1, p. 2",
"textbook": 1,
"chapter": 1,
"module": 2,
"arrLOs": [ "1B" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">Victor Berg, a CSR, is listening to a customer on the telephone. Consider the effectiveness of Mr.&nbsp;Berg’s active listening skills in this situation:</p><p class=\"stem\">As the customer talks, Mr.&nbsp;Berg listens critically and evaluates whether the customer’s message is accurate, honest, logical, and reliable. He concentrates only on the customer’s words and ignores the questions, inferences, and assumptions behind the customer’s words. He uses verbal responses such as “Go on” and “I understand” to show that he understands the customer’s message. Mr.&nbsp;Berg is taking written notes to help him recall important information.</p><p class=\"stem\">Although Mr.&nbsp;Berg is doing an effective job of actively listening to the customer’s message in this situation, he is making one mistake. Mr.&nbsp;Berg is making a <i>mistake</i> when he</p>",
"arrAnsChoices": [ "listens critically to the customer’s message and evaluates whether it is accurate, honest, logical, and reliable", "concentrates only on the customer’s words and ignores the questions, inferences, and assumptions behind the customer’s words", "uses potentially distracting verbal responses such as “Go on” and “I understand”", "takes notes while he is listening to the customer, which interferes with his ability to concentrate" ],
"arrAnsIDs": [ 460235, 460236, 460237, 460238 ],
"intCR": 2,
"arrAnswerFeedback": [ "<p class=\"explanations\">Active listening includes listening critically, which means that Mr.&nbsp;Berg evaluates the customer’s message to determine if the message is accurate, honest, logical, and reliable. If something in a customer’s message seems unclear or inconsistent, Mr.&nbsp;Berg should ask questions to help the customer realize when he has made an error.</p>", "<p class=\"explanations\">Mr.&nbsp;Berg is making a mistake when he concentrates only on the customer’s words. Active listening requires service providers to concentrate not only on the customer’s words, but also on the questions, inferences, and assumptions behind the words.</p>", "<p class=\"explanations\">By using verbal signals such as “Go on” and “I understand,” Mr.&nbsp;Berg is letting the customer know that he is interested in what the customer is saying.</p>", "<p class=\"explanations\">Taking notes on the customer’s main points and supporting comments helps Mr.&nbsp;Berg recall important information. He can then ask questions to clarify any issues that seem inconsistent or confusing.</p>" ]
}

arrQuestions['ACS_101_EOL_037'] = {
"strID": "ACS_101_EOL_037",
"questionID": 113854,
"item": "ACS_101_EOL2020_037",
"primaryLO": "1C",
"textref": "c. 1, p. 3",
"textbook": 1,
"chapter": 1,
"module": 2,
"arrLOs": [ "1C" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">Effective methods of paraphrasing a customer’s message include</p><ol type=\"A\" class=\"combo\"><li>Giving a brief summary of the entire message in your own words</li><li>Paraphrasing only the verbal content of the message and ignoring the message’s emotional content</li><li>Using a technique known as <i>content reflection</i>, which involves repeating some of the customer’s words</li></ol>",
"arrAnsChoices": [ "A, B, and C", "A and B only", "A and C only", "C only" ],
"arrAnsIDs": [ 460239, 460240, 460241, 460242 ],
"intCR": 3,
"arrAnswerFeedback": [ "<p class=\"explanations\">At least one of these statements does <b>not</b> describe an effective method of paraphrasing.</p>", "<p class=\"explanations\">At least one of these statements does <b>not </b>describe an effective method of paraphrasing.</p>", "<p class=\"explanations\">Statements A and C are correct. Giving a brief summary of the entire message in your own words or summarizing a long or complex message shows that you understand how the entire message fits together. In addition, an important paraphrasing guideline is to repeat important information in the customer’s own words—a technique called content reflection.</p><p class=\"explanations\">Statement B is incorrect. Paraphrasing should <b>include</b> an acknowledgment of the emotional content of the message. The process of paraphrasing someone’s emotions is called <i>reflection of feelings</i>.</p>", "<p class=\"explanations\">Statement C is correct. However, it is not the only statement that correctly describes an effective method of paraphrasing.</p>" ]
}

arrQuestions['ACS_101_EOL_038'] = {
"strID": "ACS_101_EOL_038",
"questionID": 113855,
"item": "ACS_101_EOL2020_038",
"primaryLO": "1C",
"textref": "c. 1, p. 3",
"textbook": 1,
"chapter": 1,
"module": 2,
"arrLOs": [ "1C" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">Judy Post answered a telephone call from a customer, who said to her, “I have sent this form to your company two times now and you <i>still</i> claim you haven’t received it!” Of the following responses, select the one that contains the most appropriate paraphrase of the customer’s message.</p>",
"arrAnsChoices": [ "“It sounds as though you sent the form to us twice, but both times the form got lost in the mail.”", "“I’m so sorry. As I understand the problem, you are upset because you have mailed us this form twice, and we have no record of receiving either form. Is that right?”", "“As I understand the problem, you mailed the form to us at this address twice already and believe that, for some reason, I am lying about having received the forms. Right?”", "“So, would you like me to send you another form?”" ],
"arrAnsIDs": [ 460243, 460244, 460245, 460246 ],
"intCR": 2,
"arrAnswerFeedback": [ "<p class=\"explanations\">One guideline for paraphrasing is that you should not add any information to the customer’s message that the customer did not include. In this paraphrase, Ms.&nbsp;Post makes the assumption that the form got lost in the mail, which is something that the customer did not say. Also, the paraphrase should sound more tentative, and Ms.&nbsp;Post should ask the customer if she has understood the message correctly. Finally, this response does not acknowledge the customer’s frustration.</p>", "<p class=\"explanations\">This paraphrase is the best option for Ms.&nbsp;Post. In this paraphrase, Ms.&nbsp;Post makes the statement tentative and asks if she understood the customer’s message correctly. Ms.&nbsp;Post also addresses the emotional content of the message by acknowledging that the customer is upset and apologizing at the beginning of the message. Also, this paraphrase does not add any information that the customer did not include.</p>", "<p class=\"explanations\">One guideline for paraphrasing is that you should be positive and nonthreatening. In this situation, although Ms.&nbsp;Post asks the customer if she understood correctly, the response has a sarcastic tone, and Ms.&nbsp;Post accuses the customer of calling her a liar. Also, Ms.&nbsp;Post assumes that she knows to which address the form was mailed—something that the customer did not state. Finally, this response does not acknowledge the emotional content of the customer’s message.</p>", "<p class=\"explanations\">This paraphrase makes an assumption that may or may not be correct. Although the statement is tentative, which is good, the customer did not in fact ask for another form. This statement might well make the customer angrier. Overall, this paraphrase does not follow the guidelines for successful paraphrasing.</p>" ]
}

arrQuestions['ACS_101_EOL_039'] = {
"strID": "ACS_101_EOL_039",
"questionID": 113856,
"item": "ACS_101_EOL2020_039",
"primaryLO": "1C",
"textref": "c. 1, p. 3",
"textbook": 1,
"chapter": 1,
"module": 2,
"arrLOs": [ "1C" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">One type of question is phrased in a way that encourages the respondent to give a particular answer. This type of question, which generally is not useful for determining customers’ needs in customer service situations, is known as</p>",
"arrAnsChoices": [ "an open question", "a closed question", "a neutral question", "a leading question" ],
"arrAnsIDs": [ 460247, 460248, 460249, 460250 ],
"intCR": 4,
"arrAnswerFeedback": [ "<p class=\"explanations\">An open question is a broad and general inquiry that invites an answer of more than one word or just a few words. Because open questions allow the respondent a great deal of flexibility in choosing what to say, they do not direct a person to a particular answer.</p>", "<p class=\"explanations\">A closed question is a specific inquiry that can usually be answered with “yes,” “no,” or a short factual statement. Although a closed question does lead the respondent to give a particular answer (“yes,” “no,” or a factual response such as an account number), it is appropriate in customer service situations as long as it is a neutral question.</p>", "<p class=\"explanations\">A neutral question is a question that has no bias and does not imply a correct answer. Most customer service situations require neutral questions because they encourage customers to give whatever answer is most accurate.</p>", "<p class=\"explanations\">Leading questions are phrased in a way that encourages the respondent to give a particular answer. In general, leading questions should be avoided in customer service situations because they can lead to biased answers that are not useful in determining customers’ needs. However, they can be an appropriate way to assess a customer’s situation quickly and accurately and obtain a speedy resolution.</p>" ]
}

arrQuestions['ACS_101_EOL_040'] = {
"strID": "ACS_101_EOL_040",
"questionID": 113857,
"item": "ACS_101_EOL2020_040",
"primaryLO": "1C",
"textref": "c. 1, p. 3",
"textbook": 1,
"chapter": 1,
"module": 2,
"arrLOs": [ "1C" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">A CSR asked a customer the following three questions during a telephone conversation. Decide whether each question is an open question or a closed question.</p><table align=\"center\" cellspacing=\"0\" width=\"95%\" class=\"indent\"><tr><td width=\"25\" valign=\"top\"><B>A.</B></td><td>When did you purchase your annuity?</td></tr><tr><td width=\"25\" valign=\"top\"><B>B.</B></td><td>Do you understand the difference between a fixed annuity and a variable annuity?</td></tr><tr><td width=\"25\" valign=\"top\"><B>C.</B></td><td>What do you think of our company’s service?</td></tr></table><p class=\"stem\">Select the answer choice in which questions <B>A</B>, <B>B</B>, and <B>C</B> are correctly identified as either open questions or closed questions.</p>",
"columnHead": "<u><B>A</B></u></div><div class=\"anshead\"><u><B>B</B></u></div><div class=\"anshead\"><u><B>C</B></u>",
"arrAnsChoices": [ "closed</div><div class=\"anscell\" onclick=\"recordAns(1);\">open</div><div class=\"anscell\" onclick=\"recordAns(1);\">closed", "open</div><div class=\"anscell\" onclick=\"recordAns(2);\">closed</div><div class=\"anscell\" onclick=\"recordAns(2);\">open", "closed</div><div class=\"anscell\" onclick=\"recordAns(3);\">closed</div><div class=\"anscell\" onclick=\"recordAns(3);\">open", "open</div><div class=\"anscell\" onclick=\"recordAns(4);\">open</div><div class=\"anscell\" onclick=\"recordAns(4);\">closed" ],
"arrAnsIDs": [ 460252, 460253, 460254, 460255 ],
"intCR": 3,
"arrAnswerFeedback": [ "<p class=\"explanations\">At least one part of this answer choice is incorrect.</p>", "<p class=\"explanations\">At least one part of this answer choice is incorrect.</p>", "<p class=\"explanations\">A closed question is a specific inquiry that can be answered with “yes,” “no,” or a short factual statement. Questions A and B can be answered with “yes,” “no,” or a short factual statement; therefore, these questions are closed questions.</p><p class=\"explanations\">Question C, however, asks for the customer’s opinion and would be considered an open question. An open question is a broad and general inquiry that invites an answer of more than one word or just a few words. Open questions often ask for opinions, thoughts, or feelings.</p>", "<p class=\"explanations\">At least one part of this answer choice is incorrect.</p>" ]
}

arrQuestions['ACS_101_EOL_041'] = {
"strID": "ACS_101_EOL_041",
"questionID": 113858,
"item": "ACS_101_EOL2020_041",
"primaryLO": "1D",
"textref": "c. 1, p. 4",
"textbook": 1,
"chapter": 1,
"module": 2,
"arrLOs": [ "1D" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">If a CSR asks a customer broad, open questions at first and then progresses to narrow, closed questions, the CSR is using a questioning technique called the</p>",
"arrAnsChoices": [ "paraphrasing technique", "content reflection technique", "inverted funnel technique", "funnel technique" ],
"arrAnsIDs": [ 460256, 460257, 460258, 460259 ],
"intCR": 4,
"arrAnswerFeedback": [ "<p class=\"explanations\">Paraphrasing is <b>not</b> a questioning technique. Paraphrasing is the process of stating, in your own words, your understanding of another person’s position, proposition, or request.</p>", "<p class=\"explanations\">Content reflection is <b>not</b> a questioning technique. Content reflection is a paraphrasing technique that involves repeating some of a customer’s words.</p>", "<p class=\"explanations\">The inverted funnel technique is a questioning strategy in which the person asking questions moves from specific to general questions, starting with closed questions and progressing to open questions.</p>", "<p class=\"explanations\">The funnel technique is a questioning strategy in which the person asking questions moves from general to specific questions, beginning with broad, open questions and progressing to narrow, closed questions. The funnel technique is often effective when dealing with upset customers because broad, open questions at the beginning allow the customer to express her feelings. After the customer has calmed down, closed questions can help the CSR find answers to the problem.</p>" ]
}




var arrlotext = new Array(); 
arrlotext['1A'] = "Identify perceptual errors that interfere with listening and determine how overcoming these errors helps companies to better understand their customers’ needs.";
arrlotext['1B'] = "Identify active listening skills and explain how they are used to improve customer interactions.";
arrlotext['1C'] = "Explain how to use paraphrasing and questioning techniques to better understand customers’ messages.";
arrlotext['1D'] = "Apply open and closed questions to the funnel and inverted funnel techniques to obtain necessary information from a customer.";
