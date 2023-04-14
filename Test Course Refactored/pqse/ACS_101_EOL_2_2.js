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

var quizname = "ACS 101 Practice Questions, Module 2, Lesson 2";
var coursename = 'ACS 101';
var modulenumber = 2;
var title = "ACS_101_EOL2020_2_2";
var intNumPools = 1;
var numQ = 10;
var numTexts = 1;
var numChap = 1;
var arrTexts = new Array();
var arrNumChap = new Array();
var duration = 0;
arrTexts[0] = "ACS 101 Module 2 (2019)";
arrNumChap[0] = 1;
var thisChap = '2';

objPool = new Object(); 
objPool.intSelectCount = 10;
objPool.formID = 2212;
objPool.formName = 'EOL2020_2_2';
arrPoolQuestions = new Array();
arrPoolQuestions[0] = 'ACS_101_EOL_042';
arrPoolQuestions[1] = 'ACS_101_EOL_043';
arrPoolQuestions[2] = 'ACS_101_EOL_044';
arrPoolQuestions[3] = 'ACS_101_EOL_045';
arrPoolQuestions[4] = 'ACS_101_EOL_046';
arrPoolQuestions[5] = 'ACS_101_EOL_047';
arrPoolQuestions[6] = 'ACS_101_EOL_048';
arrPoolQuestions[7] = 'ACS_101_EOL_049';
arrPoolQuestions[8] = 'ACS_101_EOL_050';
arrPoolQuestions[9] = 'ACS_101_EOL_051';
objPool.arrPoolQuestions = arrPoolQuestions;
arrPools[0] = objPool;

arrQuestions['ACS_101_EOL_042'] = {
"strID": "ACS_101_EOL_042",
"questionID": 113859,
"item": "ACS_101_EOL2020_042",
"primaryLO": "2A",
"textref": "c. 2, p. 1",
"textbook": 1,
"chapter": 2,
"module": 2,
"arrLOs": [ "2A" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">All communication includes four key elements: the sender, the message, the communication channel, and the receiver. Feedback and noise may also be involved. With regard to these elements of the communication process, it is correct to say</p>",
"arrAnsChoices": [ "that the sender of the message decodes the message before transmitting it to the receiver", "that the best communication channel to use for long, complex messages is the telephone", "that any distractions or distortions that interfere with the communication process are known as feedback", "that, if the receiver sends a message back to the sender, the communication process reverses" ],
"arrAnsIDs": [ 460260, 460261, 460262, 460263 ],
"intCR": 4,
"arrAnswerFeedback": [ "<p class=\"explanations\"><b>Encoding </b>is the method that the sender uses to translate his ideas into words or symbols. Decoding is the method that the <b>receiver</b> uses to translate the words and symbols in a message into meaningful ideas.</p>", "<p class=\"explanations\">Although the telephone is an effective way to deliver <b>short, simple messages</b>, it is not very effective for long, complex messages.</p>", "<p class=\"explanations\">Any distractions or distortions that interfere with the communication process are known as <b>noise</b>. Feedback is a return message that a receiver sends in response to a sender’s message.</p>", "<p class=\"explanations\">In this situation, the receiver is sending feedback, which reverses the communication process. Feedback is a response that the receiver in the communication process sends back to the sender.</p>" ]
}

arrQuestions['ACS_101_EOL_043'] = {
"strID": "ACS_101_EOL_043",
"questionID": 113860,
"item": "ACS_101_EOL2020_043",
"primaryLO": "2A",
"textref": "c. 2, p. 1",
"textbook": 1,
"chapter": 2,
"module": 2,
"arrLOs": [ "2A" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">Words that carry strong emotional overtones and are likely to trigger negative feelings in listeners are known, by definition, as</p>",
"arrAnsChoices": [ "red-flag words", "relative words", "proxemics", "jargon" ],
"arrAnsIDs": [ 460264, 460265, 460266, 460267 ],
"intCR": 1,
"arrAnswerFeedback": [ "<p class=\"explanations\">Red-flag words include political or religious statements, profanity, derogatory terms, sexist language, racial slurs, and ableist slurs. Red-flag words create noise in the communication process because the receiver reacts emotionally to the words and stops paying attention to the rest of the message.</p>", "<p class=\"explanations\">Relative words are words that imply some type of measurement but that vary widely in meaning according to the interpretation of the sender and receiver. Some examples of relative words are <i>soon</i>, <i>later</i>, <i>long</i>, <i>short</i>, and <i>frequently</i>.</p>", "<p class=\"explanations\">Proxemics is the study of the way people use space while communicating.</p>", "<p class=\"explanations\">Jargon is a specialized language of technical terms and acronyms that only a specific group of people is familiar with and understands.</p>" ]
}

arrQuestions['ACS_101_EOL_044'] = {
"strID": "ACS_101_EOL_044",
"questionID": 113861,
"item": "ACS_101_EOL2020_044",
"primaryLO": "2B",
"textref": "c. 2, p. 2",
"textbook": 1,
"chapter": 2,
"module": 2,
"arrLOs": [ "2B" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">Kerry Lowe, a customer service representative (CSR), is talking to Jacob Shaw, a customer, on the telephone. Mr.&nbsp;Shaw wants to take out a policy loan, but Ms.&nbsp;Lowe cannot process the loan request because she does not have the irrevocable beneficiary’s written consent. Mr.&nbsp;Shaw states that he has already sent Ms.&nbsp;Lowe the beneficiary’s signed consent form. Of the following statements, the <i>best</i> response that Ms.&nbsp;Lowe could make to Mr.&nbsp;Shaw to set a positive tone would be</p>",
"arrAnsChoices": [ "“I’m sorry, Mr.&nbsp;Shaw. You claim you sent the form, but I don’t have it and I can’t process your request without it.”", "“I’m sorry, Mr.&nbsp;Shaw. I haven’t received the form you sent, but as soon as I do, I will process the loan request.”", "“I just can’t process this request without the irrevocable beneficiary’s written consent, dear. It’s one of the company’s rules, and I’m sure you agree that it’s a fair rule.”", "“I’m sorry, Mr.&nbsp;Shaw. If you sent the form as you claim you did, then the mailroom must have lost it. If you want to try to get another form signed, I’ll keep your file open.”" ],
"arrAnsIDs": [ 460268, 460269, 460270, 460271 ],
"intCR": 2,
"arrAnswerFeedback": [ "<p class=\"explanations\">One way CSRs can use words to set a positive tone is by phrasing statements in a positive manner. By saying “you <i>claim</i> you sent the form,” the CSR seems to be questioning the customer’s honesty. In addition, saying “I <i>can’t</i> process your request” emphasizes what Ms.&nbsp;Lowe <i>can’t</i> do rather than what she can do. Therefore, this statement is not the best response Ms.&nbsp;Lowe could make.</p>", "<p class=\"explanations\">One way CSRs can use words to set a positive tone is by phrasing statements in a positive manner. This is the best response because it emphasizes what Ms.&nbsp;Lowe can do for the customer rather than what she can’t do. Ms.&nbsp;Lowe states that she will process the loan request as soon as she receives the form.</p>", "<p class=\"explanations\">One way CSRs can use words to set a positive tone is by phrasing statements in a positive manner. By saying “I just <i>can’t</i> process this request,” Ms.&nbsp;Lowe is emphasizing what she can’t do rather than what she can do. In addition, CSRs should avoid using overly familiar language—such as dear or honey—because it can cause customers to feel uncomfortable. Therefore, this statement is not the best response Ms.&nbsp;Lowe could make.</p>", "<p class=\"explanations\">One way CSRs can use words to set a positive tone is by phrasing statements in a positive manner. Blaming the mailroom or the customer for the missing form is not a positive response. Ms.&nbsp;Lowe should acknowledge that something has gone wrong without assigning blame. Therefore, this statement is not the best response Ms.&nbsp;Lowe could make.</p>" ]
}

arrQuestions['ACS_101_EOL_045'] = {
"strID": "ACS_101_EOL_045",
"questionID": 113862,
"item": "ACS_101_EOL2020_045",
"primaryLO": "2B",
"textref": "c. 2, p. 2",
"textbook": 1,
"chapter": 2,
"module": 2,
"arrLOs": [ "2B" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">Words can have both connotative and denotative meanings. The meaning of a word that is found in the dictionary is the word’s (<b>connotative</b> / <b>denotative</b>) meaning. The (<b>connotative</b> / <b>denotative</b>) meaning of a word varies widely, depending on a person’s background, experience, and point of view.</p>",
"arrAnsChoices": [ "connotative / connotative", "connotative / denotative", "denotative / connotative", "denotative / denotative" ],
"arrAnsIDs": [ 460272, 460273, 460274, 460275 ],
"intCR": 3,
"arrAnswerFeedback": [ "<p class=\"explanations\">It is true that the connotative meanings of words vary widely, depending on a person’s background, experience, and point of view. However, a word’s <b>denotative</b> meaning is the meaning you find in the dictionary.</p>", "<p class=\"explanations\">A word’s <b>denotative</b> meaning is the meaning you find in the dictionary. Furthermore, the <b>connotative</b> meanings of words vary widely, depending on a person’s background, experience, and point of view.</p>", "<p class=\"explanations\">The denotative meaning of a word is the direct, literal meaning of the word—the meaning you find in the dictionary. In contrast, the connotative meaning of a word is a suggested or implied meaning. Although denotative meanings are fairly universal, connotative meanings vary widely, depending on a person’s background, experience, and point of view.</p>", "<p class=\"explanations\">It is true that a word’s denotative meaning is the meaning you find in the dictionary. However, denotative meanings are fairly universal, whereas the <b>connotative</b> meanings of words vary widely, depending on a person’s background, experience, and point of view.</p>" ]
}

arrQuestions['ACS_101_EOL_046'] = {
"strID": "ACS_101_EOL_046",
"questionID": 113863,
"item": "ACS_101_EOL2020_046",
"primaryLO": "2C",
"textref": "c. 2, p. 3",
"textbook": 1,
"chapter": 2,
"module": 2,
"arrLOs": [ "2C" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">The following statements are about eye contact, which is an important form of nonverbal communication. Select the answer choice containing the correct statement about eye contact.</p>",
"arrAnsChoices": [ "In all cultures, direct eye contact is considered a polite way of demonstrating your interest in another person.", "North Americans are uncomfortable with people who stare.", "North Americans usually trust and like people who meet their eyes for one second or less and distrust people who maintain eye contact for a few seconds at a time.", "In North America, when people have face-to-face discussions, the listener looks into the speaker’s eyes about 40% of the time, and the speaker looks into the listener’s eyes about 70% of the time." ],
"arrAnsIDs": [ 460276, 460277, 460278, 460279 ],
"intCR": 2,
"arrAnswerFeedback": [ "<p class=\"explanations\">The acceptable amount and duration of eye contact differ among individuals and cultures. For example, in some cultures, <b>any</b> direct eye contact is considered rude or may even be seen as issuing a challenge.</p>", "<p class=\"explanations\">North Americans are uncomfortable with people who stare (defined as maintaining eye contact for 10 seconds or more).</p>", "<p class=\"explanations\">North Americans usually trust and like people who maintain eye contact for <b>a few seconds</b> and distrust people who meet their eyes for <b>one second or less</b>.</p>", "<p class=\"explanations\">In North America, when people have face-to-face discussions, the listener looks into the speaker’s eyes about <b>70%</b> of the time, and the speaker looks into the listener’s eyes about <b>40%</b> of the time.</p>" ]
}

arrQuestions['ACS_101_EOL_047'] = {
"strID": "ACS_101_EOL_047",
"questionID": 113864,
"item": "ACS_101_EOL2020_047",
"primaryLO": "2C",
"textref": "c. 2, p. 3",
"textbook": 1,
"chapter": 2,
"module": 2,
"arrLOs": [ "2C" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">In face-to-face meetings, people often use facial expressions to communicate with one another. With regard to the interpretation of facial expressions, it is generally correct to say that facial expressions</p><ol type=\"A\" class=\"combo\"><li>Are always an accurate reflection of what a person actually feels</li><li>Have universal meanings and can be interpreted uniformly from culture to culture</li><li>Depend on the relationship between the speaker and the listener</li><li>Can easily be overlooked</li></ol>",
"arrAnsChoices": [ "A, C, and D only", "A and B only", "C and D only", "D only" ],
"arrAnsIDs": [ 460280, 460281, 460282, 460283 ],
"intCR": 3,
"arrAnswerFeedback": [ "<p class=\"explanations\">At least one of these statements is incorrect.</p>", "<p class=\"explanations\">Both of these statements are incorrect. Most people can mask their expressions, at least to some extent, sometimes very effectively. What you see, therefore, may not be what your listener actually feels. Beyond the six basic emotions (happiness, sadness, fear, anger, disgust, and surprise), the expressions for more complex emotions―such as regret, embarrassment, sincerity, and respect―vary widely from person to person and culture to culture.</p>", "<p class=\"explanations\">Statements C and D are both correct. Facial expressions depend on the relationship between the speaker and the listener. In personal situations between people who know each other well, facial expressions are often enough to accurately indicate emotions. In business settings, facial expressions are usually interpreted best in conjunction with other forms of communication because the people communicating may not be familiar with each other’s personalities and motivations. In addition, facial expressions can easily be overlooked. Emotions typically appear on the face for only a moment. If you are not looking at the person in that moment, you will miss her expression.</p>", "<p class=\"explanations\">Statement D is correct. However, it is not the only correct statement.</p>" ]
}

arrQuestions['ACS_101_EOL_048'] = {
"strID": "ACS_101_EOL_048",
"questionID": 113865,
"item": "ACS_101_EOL2020_048",
"primaryLO": "2C",
"textref": "c. 2, p. 3",
"textbook": 1,
"chapter": 2,
"module": 2,
"arrLOs": [ "2C" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">People can use gestures, such as adaptors, illustrators, and regulators, to add meaning to words. Read the following paragraph and note the gestures that are described in italics.</p><p class=\"stem\">Hattie&nbsp;Rice, an accounting department manager, was talking with Aaron&nbsp;Garcia, an information systems (IS) department employee, about a new internal reporting form that the accounting department wanted the IS department to produce. As Ms.&nbsp;Rice spoke, <i>she drew pictures in the air and pointed several times at a printed copy of the reporting form</i> that she was showing to Mr.&nbsp;Garcia. Mr.&nbsp;Garcia remained quiet as Ms.&nbsp;Rice spoke. <i>Finally, he held up his hand to indicate that she should stop speaking for a minute.</i></p><p class=\"stem\">Select the answer choice that correctly identifies the types of gestures that Ms.&nbsp;Rice and Mr.&nbsp;Garcia used in this situation.</p>",
"columnHead": "<u>Ms.&nbsp;Rice</u></div><div class=\"anshead\"><u>Mr.&nbsp;Garcia</u>",
"arrAnsChoices": [ "adaptors</div><div class=\"anscell\" onclick=\"recordAns(1);\">a regulator", "regulators</div><div class=\"anscell\" onclick=\"recordAns(2);\">an adaptor", "illustrators</div><div class=\"anscell\" onclick=\"recordAns(3);\">a regulator", "illustrators</div><div class=\"anscell\" onclick=\"recordAns(4);\">an adaptor" ],
"arrAnsIDs": [ 460285, 460286, 460287, 460288 ],
"intCR": 3,
"arrAnswerFeedback": [ "<p class=\"explanations\">It is true that Mr.&nbsp;Garcia used a regulator, which is a gesture people use to control the flow of conversation. However, Ms.&nbsp;Rice’s gestures are not adaptors, which are unconscious movements that release some form of tension or emotion.</p>", "<p class=\"explanations\">Neither of these gesture types is correct. Ms.&nbsp;Rice’s gestures are not regulators, which are gestures people use to control the flow of conversation. Also, Mr.&nbsp;Garcia’s gesture is not an adaptor, which is an unconscious movement that releases some form of tension or emotion.</p>", "<p class=\"explanations\">Ms.&nbsp;Rice used illustrators—gestures that complement words to enhance or clarify verbal messages—during her conversation with Mr.&nbsp;Garcia. Pointing at an object, drawing pictures in the air while talking, and using the hands to indicate size or shape are common illustrators.</p><p class=\"explanations\">Regulators are the gestures people use to control the flow of conversation. Mr.&nbsp;Garcia used a regulator to indicate that Ms.&nbsp;Rice should stop talking so that he could comment.</p>", "<p class=\"explanations\">It is true that Ms.&nbsp;Rice used illustrators—gestures that complement words to enhance or clarify verbal messages—during her conversation with Mr.&nbsp;Garcia. However, Mr.&nbsp;Garcia’s gesture is not an adaptor, which is an unconscious movement that releases some form of tension or emotion.</p>" ]
}

arrQuestions['ACS_101_EOL_049'] = {
"strID": "ACS_101_EOL_049",
"questionID": 113866,
"item": "ACS_101_EOL2020_049",
"primaryLO": "2C",
"textref": "c. 2, p. 3",
"textbook": 1,
"chapter": 2,
"module": 2,
"arrLOs": [ "2C" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">The distances that people generally maintain between themselves when interacting can be categorized as intimate distance, personal distance, social distance, and public distance. Generally, the most appropriate distances for providing face-to-face customer service in North America are</p>",
"arrAnsChoices": [ "intimate distance and personal distance", "personal distance and social distance", "personal distance and public distance", "social distance and public distance" ],
"arrAnsIDs": [ 460289, 460290, 460291, 460292 ],
"intCR": 2,
"arrAnswerFeedback": [ "<p class=\"explanations\">It is true that personal distance, which ranges from 18 inches to 4 feet in North American culture, is an appropriate distance for providing face-to-face customer service. However, intimate distance typically would <b>not</b> be appropriate for providing face-to-face customer service. People typically use intimate distance, which ranges from touching distance to about 18 inches in North American culture, when communicating with someone with whom they have a close relationship, such as a spouse, child, or parent.</p>", "<p class=\"explanations\">North Americans typically use personal distance, which ranges from 18 inches to 4 feet in North American culture, when talking with casual friends and business acquaintances, and they typically maintain social distance, which ranges from about 4 feet to 7 feet in North American culture, when conducting impersonal business. Social distance and personal distance usually are the most appropriate distances for providing face-to-face customer service in North America.</p>", "<p class=\"explanations\">It is true that personal distance, which ranges from 18 inches to 4 feet in North American culture, is an appropriate distance for providing face-to-face customer service. However, public distance, which is generally about 12 feet or more in North American culture, is used in a formal setting when a speaker is addressing an audience.</p>", "<p class=\"explanations\">It is true that social distance, which ranges from about 4 feet to 7 feet in North American culture, is an appropriate distance for providing face-to-face customer service. However, public distance, which is generally about 12 feet or more in North American culture, is used in a formal setting when a speaker is addressing an audience.</p>" ]
}

arrQuestions['ACS_101_EOL_050'] = {
"strID": "ACS_101_EOL_050",
"questionID": 113867,
"item": "ACS_101_EOL2020_050",
"primaryLO": "2C",
"textref": "c. 2, p. 3",
"textbook": 1,
"chapter": 2,
"module": 2,
"arrLOs": [ "2C" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">A customer telephoned Rudy Adair, a CSR, to get information about an insurance product. Consider the following two possible responses with regard to the way in which Mr.&nbsp;Adair uses his voice:</p><ul class=\"examul\"><li><b>Response One:</b> Mr.&nbsp;Adair speaks in a low-pitched voice, pausing occasionally and adjusting his rate of speech to match the customer’s rate of speech.</li><li><b>Response Two:</b> Mr.&nbsp;Adair speaks in a high-pitched voice. To avoid taking up too much of the customer’s time, Mr.&nbsp;Adair uses a fast rate of speech and does not pause between sentences.</li></ul><p class=\"stem\">The following statement(s) can correctly be made about Responses One and Two:</p><ol type=\"A\" class=\"combo\"><li>The <i>paralanguage</i> in these two responses is very similar.</li><li>Response Two is the better response with regard to Mr.&nbsp;Adair’s use of voice.</li></ol>",
"arrAnsChoices": [ "Both A and B", "A only", "B only", "Neither A nor B" ],
"arrAnsIDs": [ 460293, 460294, 460295, 460296 ],
"intCR": 4,
"arrAnswerFeedback": [ "<p class=\"explanations\">At least one of these statements is incorrect.</p>", "<p class=\"explanations\">Statement A is incorrect. Paralanguage is the information one obtains from a person’s rate of speech, vocal pitch, tone of voice, enunciation, and pauses. Mr.&nbsp;Adair’s pitch and rate of speech are very different in these two responses.</p>", "<p class=\"explanations\">Statement B is incorrect. Response Two is not the better response because (1) a high-pitched voice is often associated with youth, enthusiasm, and a lack of control, whereas most people consider a low-pitched voice to be authoritative, and (2) if a CSR speaks rapidly without pausing, the customer might become confused or miss important information. He might think the CSR is rushing him or that the CSR does not have the time or the inclination to provide attentive service.</p>", "<p class=\"explanations\">Neither of these statements is correct. Paralanguage is the information one obtains from a person’s rate of speech, vocal pitch, tone of voice, enunciation, and pauses. Mr.&nbsp;Adair’s pitch and rate of speech are very different in these two responses.</p><p class=\"explanations\">In addition, Response Two is not the better response because (1) a high-pitched voice is often associated with youth, enthusiasm, and a lack of control, whereas most people consider a low-pitched voice to be authoritative, and (2) if a CSR speaks rapidly without pausing, the customer might become confused or miss important information. He might think the CSR is rushing him or that the CSR does not have the time or the inclination to provide attentive service.</p>" ]
}

arrQuestions['ACS_101_EOL_051'] = {
"strID": "ACS_101_EOL_051",
"questionID": 113868,
"item": "ACS_101_EOL2020_051",
"primaryLO": "2C",
"textref": "c. 2, p. 3",
"textbook": 1,
"chapter": 2,
"module": 2,
"arrLOs": [ "2C" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">One important part of communication is enunciation, which refers to</p>",
"arrAnsChoices": [ "how clearly a person pronounces vowels and consonants", "the use of facial expressions to show emotions", "the use of eye contact to communicate effectively", "a person’s ability to choose words that set a positive tone during a conversation" ],
"arrAnsIDs": [ 460297, 460298, 460299, 460300 ],
"intCR": 1,
"arrAnswerFeedback": [ "<p class=\"explanations\">The word <i>enunciation</i> refers to how strongly or clearly a person pronounces vowels and consonants. Although regional dialects affect the way that people articulate vowels and consonants, certain types of enunciation can have a negative effect on the listener.</p>", "<p class=\"explanations\">The use of facial expressions to communicate is a form of <b>body language</b> (<i>kinesics</i>).</p>", "<p class=\"explanations\">The use of eye contact to communicate is a form of <b>body language</b> (<i>kinesics</i>).</p>", "<p class=\"explanations\">A person’s choice of words is part of <b>verbal</b> communication. Enunciation is a form of <b>nonverbal</b> communication.</p>" ]
}




var arrlotext = new Array(); 
arrlotext['2A'] = "Identify the elements of the communication process and explain how to avoid problems that can arise in the process.";
arrlotext['2B'] = "Select appropriate words and use them correctly to improve verbal communication, establish meaning, set a positive tone, and achieve clarity.";
arrlotext['2C'] = "Recognize and interpret various forms of nonverbal communication—including the use of body language and paralanguage—and take steps to overcome common problems associated with nonverbal communication.";
