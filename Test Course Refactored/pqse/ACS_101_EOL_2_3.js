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

var quizname = "ACS 101 Practice Questions, Module 2, Lesson 3";
var coursename = 'ACS 101';
var modulenumber = 2;
var title = "ACS_101_EOL2020_2_3";
var intNumPools = 1;
var numQ = 9;
var numTexts = 1;
var numChap = 1;
var arrTexts = new Array();
var arrNumChap = new Array();
var duration = 0;
arrTexts[0] = "ACS 101 Module 2 (2019)";
arrNumChap[0] = 1;
var thisChap = '3';

objPool = new Object(); 
objPool.intSelectCount = 9;
objPool.formID = 2212;
objPool.formName = 'EOL2020_2_3';
arrPoolQuestions = new Array();
arrPoolQuestions[0] = 'ACS_101_EOL_052';
arrPoolQuestions[1] = 'ACS_101_EOL_053';
arrPoolQuestions[2] = 'ACS_101_EOL_054';
arrPoolQuestions[3] = 'ACS_101_EOL_055';
arrPoolQuestions[4] = 'ACS_101_EOL_056';
arrPoolQuestions[5] = 'ACS_101_EOL_057';
arrPoolQuestions[6] = 'ACS_101_EOL_058';
arrPoolQuestions[7] = 'ACS_101_EOL_059';
arrPoolQuestions[8] = 'ACS_101_EOL_060';
objPool.arrPoolQuestions = arrPoolQuestions;
arrPools[0] = objPool;

arrQuestions['ACS_101_EOL_052'] = {
"strID": "ACS_101_EOL_052",
"questionID": 113869,
"item": "ACS_101_EOL2020_052",
"primaryLO": "3A",
"textref": "c. 3, p. 1",
"textbook": 1,
"chapter": 3,
"module": 2,
"arrLOs": [ "3A" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">Reflecting on one’s own emotions is an important step toward gaining self-awareness. To reflect on his emotions, a person must <i>first</i></p>",
"arrAnsChoices": [ "have a plan for managing his emotions", "ask other people for perspective ", "identify what he is feeling", "accept what he is feeling without judgment" ],
"arrAnsIDs": [ 460301, 460302, 460303, 460304 ],
"intCR": 3,
"arrAnswerFeedback": [ "<p class=\"explanations\">Reflecting on your emotions involves three basic steps: have a plan for managing your own emotions, identify what you’re feeling, and accept what you’re feeling without judgment. There is a step in this process that generally occurs <b>before</b> you have a plan for managing your emotions.</p>", "<p class=\"explanations\">Asking other people for perspective is useful for increasing your emotional intelligence, but it is not a step in the process of reflecting on your own emotions. Reflecting on your emotions involves three basic steps: have a plan for managing your own emotions, identify what you’re feeling, and accept what you’re feeling without judgment.</p><p class=\"explanations\"></p>", "<p class=\"explanations\">Reflecting on your emotions involves three basic steps: (1) identify what you’re feeling, (2) accept what you’re feeling without judgment, and (3) have a plan for managing your own emotions.</p><p class=\"explanations\"></p>", "<p class=\"explanations\">Reflecting on your emotions involves three basic steps: have a plan for managing your own emotions, identify what you’re feeling, and accept what you’re feeling without judgment. There is a step in this process that generally occurs <b>before</b> you accept what you are feeling without judgment.</p><p class=\"explanations\"></p>" ]
}

arrQuestions['ACS_101_EOL_053'] = {
"strID": "ACS_101_EOL_053",
"questionID": 113870,
"item": "ACS_101_EOL2020_053",
"primaryLO": "3A",
"textref": "c. 3, p. 1",
"textbook": 1,
"chapter": 3,
"module": 2,
"arrLOs": [ "3A" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">While speaking with a customer service representative (CSR), customer Claudette Baker asked in an angry voice, “What’s wrong with you? Can’t you do anything right?” Of the following potential responses the CSR could make, select the response that shows empathy for Ms.&nbsp;Baker.</p>",
"arrAnsChoices": [ "“If you continue to insult me, I will have to end the call.”", "“I didn’t do anything wrong! That’s a Claims issue.”", "“You seem frustrated, Ms.&nbsp;Baker. Let’s see if we can get to the bottom of this issue.”", "“I’m really tired today, so I apologize for any mistakes I made.”" ],
"arrAnsIDs": [ 460305, 460306, 460307, 460308 ],
"intCR": 3,
"arrAnswerFeedback": [ "<p class=\"explanations\">It’s true that the CSR shouldn’t tolerate abusive language, but Ms.&nbsp;Baker isn’t being abusive. Rather, she’s expressing frustration with the service she received.</p>", "<p class=\"explanations\">Taking Ms.&nbsp;Baker’s words personally will prevent the CSR from showing empathy for her frustration. Instead, the CSR should set aside his feelings and focus on what the customer is trying to express. </p>", "<p class=\"explanations\">Showing empathy for Ms.&nbsp;Baker’s frustration is the quickest way to get the call back on track. Reflecting the customer’s feelings aids in understanding the customer’s complaint and shows the customer that you care.</p>", "<p class=\"explanations\">Taking Ms.&nbsp;Baker’s words personally will prevent the CSR from showing empathy for her frustration. Instead, the CSR should set aside his feelings and focus on what the customer is trying to express.</p>" ]
}

arrQuestions['ACS_101_EOL_054'] = {
"strID": "ACS_101_EOL_054",
"questionID": 113871,
"item": "ACS_101_EOL2020_054",
"primaryLO": "3A",
"textref": "c. 3, p. 1",
"textbook": 1,
"chapter": 3,
"module": 2,
"arrLOs": [ "3A" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">If a customer tells a CSR that his mother died, and the CSR’s response is “I’m so sorry to hear about the loss of your mother,” the CSR is showing __________ for the customer’s situation. </p>",
"arrAnsChoices": [ "emotional intelligence", "empathy", "perspective", "sympathy" ],
"arrAnsIDs": [ 460309, 460310, 460311, 460312 ],
"intCR": 4,
"arrAnswerFeedback": [ "<p class=\"explanations\">Emotional intelligence is the ability to manage one’s own emotions, which is a valuable skill. The CSR’s response in this situation is not an example of emotional intelligence. </p>", "<p class=\"explanations\">Empathy involves a person attempting to feel what another person feels. In this instance, nothing the CSR says indicates that she is trying to feel what the customer is feeling.</p>", "<p class=\"explanations\">Although having perspective is important, the CSR’s response in this situation is not demonstrating perspective.</p>", "<p class=\"explanations\">The CSR’s response in this situation shows <b>sympathy</b> for the customer. Sympathy is the ability to express sorrow for a customer’s situation without actually experiencing the situation or establishing a connection with what the customer is feeling.</p>" ]
}

arrQuestions['ACS_101_EOL_055'] = {
"strID": "ACS_101_EOL_055",
"questionID": 113872,
"item": "ACS_101_EOL2020_055",
"primaryLO": "3B",
"textref": "c. 3, p. 2",
"textbook": 1,
"chapter": 3,
"module": 2,
"arrLOs": [ "3B" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">Customers of different cultures have different comfort levels when interacting with people whose position in a hierarchy is higher or lower than theirs. In cultures that can be described as ___________ cultures, employees higher up the chain of command may have vastly more authority than frontline employees. A customer from this type of culture might request to speak to a manager because he expects that a frontline employee will lack the authority to help him.</p>",
"arrAnsChoices": [ "low uncertainty avoidance", "high uncertainty avoidance", "low power distance", "high power distance" ],
"arrAnsIDs": [ 460313, 460314, 460315, 460316 ],
"intCR": 4,
"arrAnswerFeedback": [ "<p class=\"explanations\">The concept of uncertainty avoidance is unrelated to how comfortable people feel when interacting with people whose position in a hierarchy is higher or lower than theirs. Uncertainty avoidance is a society’s intolerance for uncertainty and ambiguity.</p>", "<p class=\"explanations\">The concept of uncertainty avoidance is unrelated to how comfortable people feel when interacting with people whose position in a hierarchy is higher or lower than theirs. Uncertainty avoidance is a society’s intolerance for uncertainty and ambiguity.</p>", "<p class=\"explanations\">In low power distance cultures, power is evenly shared across an organization. For example, a frontline employee may have almost as much power as his boss. Customers from low power distance cultures will readily interact with anyone in a company who can help them.</p>", "<p class=\"explanations\">Power distance is the extent to which lower ranking individuals of a society accept and expect unequal distribution of power. When interacting with customers from a high power distance culture, service providers should use formal titles and show respect for the customer’s job title or position.</p>" ]
}

arrQuestions['ACS_101_EOL_056'] = {
"strID": "ACS_101_EOL_056",
"questionID": 113873,
"item": "ACS_101_EOL2020_056",
"primaryLO": "3B",
"textref": "c. 3, p. 2",
"textbook": 1,
"chapter": 3,
"module": 2,
"arrLOs": [ "3B" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">Tom Bennett, a recently widowed husband, called the Fulcrum Life Insurance Company to request a beneficiary claim form. During the course of the call, Mr.&nbsp;Bennett laughed and joked with the CSR, instead of seeming upset the way the CSR would expect him to act. This absence of expected behavior signaled to the CSR that there was a cultural or personal difference in how people deal with grief. In this situation, the moment in which the CSR noticed the absence of apparent grief from Mr.&nbsp;Bennett is an example of</p>",
"arrAnsChoices": [ "a trigger event", "indirect negative feedback", "stereotyping", "a collectivist culture" ],
"arrAnsIDs": [ 460317, 460318, 460319, 460320 ],
"intCR": 1,
"arrAnswerFeedback": [ "<p class=\"explanations\">A trigger event is the moment a person notices the absence of certain expected behaviors in another person, which serves as a clue that the other person has different values or norms. If something seems off about a customer’s response, CSRs should examine their feelings and become open to the customer’s way of speaking or acting.</p>", "<p class=\"explanations\">The CSR’s observation about the customer in this situation is not an example of indirect negative feedback. An example of indirect negative feedback is a situation in which customers disguise their complaints so that they do not seem to be directly complaining.</p>", "<p class=\"explanations\">The CSR is not stereotyping the customer in this situation; rather, she is recognizing that there are cultural or personal differences in how people deal with grief.</p>", "<p class=\"explanations\">The CSR’s observation about the customer in this situation is not an example of a collectivist culture. A collectivist culture bases an individual’s worth on his position within a hierarchy and other people’s opinions of him.</p>" ]
}

arrQuestions['ACS_101_EOL_057'] = {
"strID": "ACS_101_EOL_057",
"questionID": 113874,
"item": "ACS_101_EOL2020_057",
"primaryLO": "3B",
"textref": "c. 3, p. 2",
"textbook": 1,
"chapter": 3,
"module": 2,
"arrLOs": [ "3B" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">One cross-cultural communication guideline that a service provider should follow when speaking with a customer from a different culture or country is to</p>",
"arrAnsChoices": [ "match the customer’s rate of speech", "take cues from the customer’s word choices and use ambiguous language if the customer is using ambiguous language", "answer the customer’s questions in a direct manner, even when the feedback may be negative", "acknowledge cultural differences by asking questions to learn more about the customer’s culture" ],
"arrAnsIDs": [ 460321, 460322, 460323, 460324 ],
"intCR": 1,
"arrAnswerFeedback": [ "<p class=\"explanations\">Matching a customer’s rate of speech is always a good idea, regardless of the customer’s culture or country of origin.</p>", "<p class=\"explanations\">Service providers can show respect for a customer by taking cues from the customer’s word choices. However, even if a customer uses ambiguous language, service providers should use <b>exact</b> language to avoid miscommunications.</p>", "<p class=\"explanations\">People in Western cultures tend to answer questions directly, even when giving negative feedback. However, this is not how everyone operates around the world. Taking cues from a customer can help a service provider determine the best way to give negative feedback.</p>", "<p class=\"explanations\">Being a conscientious communicator requires insurance company employees to take into account another person’s culture and the impact that has on communication. However, asking questions about a customer’s culture would be singling the customer out as being different. Service providers should avoid drawing attention to a customer’s differences, such as an accent or a different word pronunciation.</p>" ]
}

arrQuestions['ACS_101_EOL_058'] = {
"strID": "ACS_101_EOL_058",
"questionID": 113875,
"item": "ACS_101_EOL2020_058",
"primaryLO": "3B",
"textref": "c. 3, p. 2",
"textbook": 1,
"chapter": 3,
"module": 2,
"arrLOs": [ "3B" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">People’s values and norms are learned in their natural cultures, and they are so ingrained that they are often unconscious. <b>(Values / Norms) </b>are people’s judgments of what is important in life. <b>(Values / Norms) </b>are standards that are typical or expected of a group.</p>",
"arrAnsChoices": [ "Values / Values", "Values / Norms", "Norms / Values", "Norms / Norms" ],
"arrAnsIDs": [ 460325, 460326, 460327, 460328 ],
"intCR": 2,
"arrAnswerFeedback": [ "<p class=\"explanations\">It is true that values are people’s judgments of what is important in life. However, <b>norms</b> are standards that are typical or expected of a group.</p>", "<p class=\"explanations\">Values are people’s principles of behavior, or their judgments of what is important in life. Norms are standards, especially of social behavior, that are typical or expected of a group.</p>", "<p class=\"explanations\"><b>Values</b> are people’s judgments of what is important in life. Furthermore, <b>norms</b> are standards that are typical or expected of a group.</p>", "<p class=\"explanations\">It is true that norms are standards that are typical or expected of a group. However, <b>values</b> are people’s judgments of what is important in life.</p>" ]
}

arrQuestions['ACS_101_EOL_059'] = {
"strID": "ACS_101_EOL_059",
"questionID": 113876,
"item": "ACS_101_EOL2020_059",
"primaryLO": "3C",
"textref": "c. 3, p. 3",
"textbook": 1,
"chapter": 3,
"module": 2,
"arrLOs": [ "3C" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">The following statements are about customer experience advocacy. Select the answer choice that contains the <B>FALSE</B> statement.</p>",
"arrAnsChoices": [ "To create good customer experiences, an employee should address customers’ problems.", "The customer is always right, so an employee should focus only on responding to the customer’s requests.", "An employee’s job is to do what is best for the customer while adhering to company policies.", "A customer experience advocate should meet customers’ needs, even when they are unspoken." ],
"arrAnsIDs": [ 460329, 460330, 460331, 460332 ],
"intCR": 2,
"arrAnswerFeedback": [ "<p class=\"explanations\">Customer advocacy is about taking action to address customers’ problems, which leads to creating good customer experiences.</p>", "<p class=\"explanations\">Solving customers’ problems and doing what’s best for the customer are part of every insurance company employee’s job. Sometimes customers don’t know enough about the industry to know what’s in their best interests, however, so <b>only</b> responding to their requests isn’t advisable.</p>", "<p class=\"explanations\">One of the challenges of providing good customer experiences is balancing what’s best for the customer with what’s best for the company. Insurance company employees must always adhere to company policies to ensure that both the customer’s and the company’s needs are met.</p>", "<p class=\"explanations\">Many customer–insurer interactions involve problems. But just solving the identified problem isn’t always the best course of action. A customer experience advocate needs to go beyond solving the problem and focus on giving the customer the best possible outcome.</p>" ]
}

arrQuestions['ACS_101_EOL_060'] = {
"strID": "ACS_101_EOL_060",
"questionID": 113877,
"item": "ACS_101_EOL2020_060",
"primaryLO": "3C",
"textref": "c. 3, p. 3",
"textbook": 1,
"chapter": 3,
"module": 2,
"arrLOs": [ "3C" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">The following statement(s) can correctly be made about how a customer experience advocate should respond to requests:</p><ol type=\"A\" class=\"combo\"><li>When a customer asks for something that is not possible, a customer experience advocate should firmly tell the customer “no.”</li><li>Being a customer experience advocate means always looking for a way to tell the customer “yes.”</li></ol>",
"arrAnsChoices": [ "Both A and B", "A only", "B only", "Neither A nor B" ],
"arrAnsIDs": [ 460333, 460334, 460335, 460336 ],
"intCR": 3,
"arrAnswerFeedback": [ "<p class=\"explanations\">At least one of these statements is incorrect.</p>", "<p class=\"explanations\">Statement A is incorrect. Instead of telling a customer “no,” a better option is to give the customer a modified “yes.” Even if the result isn’t exactly what the customer had in mind, insurance company employees should focus on what they <b>can</b> do for the customer rather than what they can’t do.</p>", "<p class=\"explanations\">Statement B is correct. Being a customer experience advocate means always looking for a way to tell the customer “yes,” even if the result isn’t exactly what the customer had in mind. A customer experience advocate can explain why results that customers did not think they wanted are actually in their best interest.</p><p class=\"explanations\">Statement A is incorrect. Instead of telling a customer “no,” a better option is to give the customer a modified “yes.” Insurance company employees should focus on what they <b>can</b> do for the customer rather than what they cannot do.</p>", "<p class=\"explanations\">At least one of these statements is correct.</p>" ]
}




var arrlotext = new Array(); 
arrlotext['3A'] = "Describe and demonstrate emotional intelligence skills that increase self-awareness and empathy.";
arrlotext['3B'] = "Identify cultural differences that affect communication.";
arrlotext['3C'] = "Distinguish between a customer experience advocate and a problem solver.";
