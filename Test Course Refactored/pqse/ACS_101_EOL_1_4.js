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

var quizname = "ACS 101 Practice Questions, Module 1, Lesson 4";
var coursename = 'ACS 101';
var modulenumber = 1;
var title = "ACS_101_EOL2020_1_4";
var intNumPools = 1;
var numQ = 9;
var numTexts = 1;
var numChap = 1;
var arrTexts = new Array();
var arrNumChap = new Array();
var duration = 0;
arrTexts[0] = "ACS 101 Module 1 (2019)";
arrNumChap[0] = 1;
var thisChap = '4';

objPool = new Object(); 
objPool.intSelectCount = 9;
objPool.formID = 2212;
objPool.formName = 'EOL2020_1_4';
arrPoolQuestions = new Array();
arrPoolQuestions[0] = 'ACS_101_EOL_024';
arrPoolQuestions[1] = 'ACS_101_EOL_025';
arrPoolQuestions[2] = 'ACS_101_EOL_026';
arrPoolQuestions[3] = 'ACS_101_EOL_027';
arrPoolQuestions[4] = 'ACS_101_EOL_028';
arrPoolQuestions[5] = 'ACS_101_EOL_029';
arrPoolQuestions[6] = 'ACS_101_EOL_030';
arrPoolQuestions[7] = 'ACS_101_EOL_031';
arrPoolQuestions[8] = 'ACS_101_EOL_032';
objPool.arrPoolQuestions = arrPoolQuestions;
arrPools[0] = objPool;

arrQuestions['ACS_101_EOL_024'] = {
"strID": "ACS_101_EOL_024",
"questionID": 113841,
"item": "ACS_101_EOL2020_024",
"primaryLO": "4A",
"textref": "c. 4, p. 3",
"textbook": 0,
"chapter": 4,
"module": 1,
"arrLOs": [ "4A" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">The following paragraph contains an incomplete statement. Select the answer choice containing the term that correctly completes the paragraph.</p><p class=\"stem\">The ethical principle known as __________________ is the quality of being truthful, fair, and free from deceit or fraud. </p>",
"arrAnsChoices": [ "integrity", "rationalization", "honesty", "fair treatment" ],
"arrAnsIDs": [ 460187, 460188, 460189, 460190 ],
"intCR": 3,
"arrAnswerFeedback": [ "<p class=\"explanations\">Integrity is the consistency of actions and methods that are in agreement with a person’s morals or beliefs about right and wrong.</p>", "<p class=\"explanations\">Rationalization is a way of thinking in which a person attributes his actions to reasonable motives without analyzing the true, unconscious motives.</p>", "<p class=\"explanations\">Honesty is a core ethical principle because honesty builds trust, enhances reputation, and strengthens character. </p>", "<p class=\"explanations\">Fair treatment involves acting impartially and free from self-interest, prejudice, or favoritism. </p>" ]
}

arrQuestions['ACS_101_EOL_025'] = {
"strID": "ACS_101_EOL_025",
"questionID": 113842,
"item": "ACS_101_EOL2020_025",
"primaryLO": "4A",
"textref": "c. 4, p. 1",
"textbook": 0,
"chapter": 4,
"module": 1,
"arrLOs": [ "4A" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">Acting ethically is important for employees of insurance companies. Having good intentions generally (<b>is / is not</b>) enough to ensure that a person is acting ethically. One rationalization that can interfere with a person’s ability to act ethically is the false-necessity trap, which involves (<b>overestimating / underestimating</b>) the cost of doing the right thing.</p>",
"arrAnsChoices": [ "is / overestimating", "is / underestimating", "is not / overestimating", "is not / underestimating" ],
"arrAnsIDs": [ 460191, 460192, 460193, 460194 ],
"intCR": 3,
"arrAnswerFeedback": [ "<p class=\"explanations\">It is true that the false-necessity trap involves overestimating the cost of doing the right thing, and also underestimating the cost of failing to do so. However, having good intentions does <b>not</b> necessarily mean a person is acting ethically. Even when people recognize that their actions are questionable, they often find ways to rationalize their behavior.</p>", "<p class=\"explanations\">Unfortunately having good intentions does <b>not</b> necessarily mean a person is acting ethically. Even when people recognize that their actions are questionable, they often find ways to rationalize their behavior. Also, the false-necessity trap involves <b>overestimating</b> the cost of doing the right thing and underestimating the cost of failing to do so.</p>", "<p class=\"explanations\">People generally consider themselves to be ethical because they judge themselves by their intentions rather than their actions. Unfortunately, having good intentions doesn’t necessarily mean a person is acting ethically. Even when people recognize that their actions are questionable, they often find ways to rationalize their behavior.</p><p class=\"explanations\">One rationalization, the false necessity trap, involves overestimating the cost of doing the right thing and underestimating the cost of failing to do so. Assuming that doing nothing is worse than taking action can cause people to rationalize that their unethical actions are the best course.</p>", "<p class=\"explanations\">It is correct to say that having good intentions doesn’t necessarily mean a person is acting ethically. However, the false-necessity trap involves overestimating the cost of doing the right thing and underestimating the cost of failing to do so.</p>" ]
}

arrQuestions['ACS_101_EOL_026'] = {
"strID": "ACS_101_EOL_026",
"questionID": 113843,
"item": "ACS_101_EOL2020_026",
"primaryLO": "4A",
"textref": "c. 4, p. 1",
"textbook": 0,
"chapter": 4,
"module": 1,
"arrLOs": [ "4A" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">The following statements are about ways that companies foster an ethical environment. Select the answer choice containing the correct statement.</p>",
"arrAnsChoices": [ "A code of conduct should provide broad guidelines and avoid referring to specific practices that may be encountered in the course of the company’s work.", "One disadvantage of using a corporate ethics office is that employees who report ethics violations cannot remain anonymous.", "To maintain neutrality, an ombudsman typically reports to the board of directors or to the CEO of the company.", "Most companies provide ethics training only at the time an employee is hired rather than offering it throughout the employee’s career. " ],
"arrAnsIDs": [ 460195, 460196, 460197, 460198 ],
"intCR": 3,
"arrAnswerFeedback": [ "<p class=\"explanations\">To be most effective, a code of conduct should refer to <b>specific</b> practices that employees may encounter, followed by explanations of what the company believes would be the proper response.</p>", "A corporate ethics office <b>can</b> provide anonymity while still bringing an ethical matter to management’s attention.", "To maintain neutrality, the ombudsman typically reports directly to the board of directors or CEO.", "Ethics training should be an <b>ongoing</b> process that begins with new employee orientation and continues <b>regularly</b> throughout an employee’s career." ]
}

arrQuestions['ACS_101_EOL_027'] = {
"strID": "ACS_101_EOL_027",
"questionID": 113844,
"item": "ACS_101_EOL2020_027",
"primaryLO": "4A",
"textref": "c. 4, p. 1",
"textbook": 0,
"chapter": 4,
"module": 1,
"arrLOs": [ "4A" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">Mark Drake is an employee of the Valence Company, which is based in the United States. Mr.&nbsp;Drake learned that Valence planned to settle a major lawsuit before Valence released this information to the public. Because the announcement of this news most likely would cause a drop in Valence’s stock price, Mr.&nbsp;Drake sold the shares of Valence stock that he owned. The following statements are about this situation. Three statements are true, and one statement is false. Select the answer choice containing the <B>FALSE </B>statement.</p>",
"arrAnsChoices": [ "Mr.&nbsp;Drake was engaging in insider trading when he sold his Valence stock based on this information before it was made public.", "The information Mr.&nbsp;Drake acquired is considered to be inside information.", "The information Mr.&nbsp;Drake acquired is considered to be material information.", "Although selling his shares of Valence stock was unethical, Mr.&nbsp;Drake most likely did not commit an illegal act." ],
"arrAnsIDs": [ 460199, 460200, 460201, 460202 ],
"intCR": 4,
"arrAnswerFeedback": [ "<p class=\"explanations\">This statement is true; therefore, it is <b>not </b>the correct response. Mr.&nbsp;Drake’s sale of Valence stock based on nonpublic information would constitute insider trading.</p>", "<p class=\"explanations\">This statement is true; therefore, it is <b>not </b>the correct response. The information Mr.&nbsp;Drake acquired is inside information, which is any company information that might influence the market price of a company’s securities. </p>", "<p class=\"explanations\">This statement is true; therefore, it is <b>not </b>the correct response. The information Mr.&nbsp;Drake acquired is material information.</p>", "This statement is false; therefore, it <b>is</b> the correct response. Mr.&nbsp;Drake’s sale of Valence stock would constitute insider trading, which is an illegal act." ]
}

arrQuestions['ACS_101_EOL_028'] = {
"strID": "ACS_101_EOL_028",
"questionID": 113845,
"item": "ACS_101_EOL2020_028",
"primaryLO": "4B",
"textref": "c. 4, p. 15",
"textbook": 0,
"chapter": 4,
"module": 1,
"arrLOs": [ "4B" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">Insurance fraud can be classified as either internal fraud or external fraud. Select the answer choice containing an example of <i>internal fraud</i>.</p>",
"arrAnsChoices": [ "A doctor failed to disclose a medical condition on an attending physician’s statement. ", "An underwriter approved an insurance application for a family member despite the application not meeting the insurer’s underwriting guidelines.", "A criminal breached a company’s customer data and used the stolen documents to take out policy loans on customer’s policies.", "A policyholder faked his own death in order for his beneficiary to receive his policy’s death benefit." ],
"arrAnsIDs": [ 460203, 460204, 460205, 460206 ],
"intCR": 2,
"arrAnswerFeedback": [ "<p class=\"explanations\">This is an example of <b>external fraud</b>.</p>", "<p class=\"explanations\">Internal fraud is fraud committed by an insurer’s employees, including its officers, directors, contract employees, and financial professionals.</p>", "<p class=\"explanations\">This is an example of <b>external fraud</b>.</p>", "<p class=\"explanations\">This is an example of <b>external fraud</b>.</p>" ]
}

arrQuestions['ACS_101_EOL_029'] = {
"strID": "ACS_101_EOL_029",
"questionID": 113846,
"item": "ACS_101_EOL2020_029",
"primaryLO": "4B",
"textref": "c. 4, p. 2",
"textbook": 0,
"chapter": 4,
"module": 1,
"arrLOs": [ "4B" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">Madison Chen, an insurance company employee, reasonably believes that insurance fraud has occurred. The state in which Ms.&nbsp;Chen works has enacted laws based on the NAIC Insurance Fraud Prevention Model Act. The following statement(s) can correctly be made about this situation: </p><ol type=\"A\" class=\"combo\"><li>Ms.&nbsp;Chen is required to report her knowledge of the suspected insurance fraud to the appropriate authorities.</li><li>If Ms.&nbsp;Chen, in good faith, reports the fraud to the authorities, then she is subject to civil liability if the person reported for possible fraud later files a lawsuit against Ms.&nbsp;Chen.</li></ol>",
"arrAnsChoices": [ "Both A and B", "A only", "B only", "Neither A nor B" ],
"arrAnsIDs": [ 460207, 460208, 460209, 460210 ],
"intCR": 2,
"arrAnswerFeedback": [ "<p class=\"explanations\">At least one of these statements is incorrect.</p>", "<p class=\"explanations\">Statement A is correct. Under the Insurance Fraud Prevention Model Act, insurers and insurance company employees are required to report fraud promptly to the state insurance department.</p><p class=\"explanations\">Statement B is incorrect. To encourage people to report suspected fraud, most states <b>protect</b> from civil liability anyone who in good faith reports such information to the insurance department or to law enforcement authorities.</p>", "<p class=\"explanations\">Statement B is incorrect. To encourage people to report suspected fraud, most states protect from civil liability anyone who in good faith reports such information to the insurance department or to law enforcement authorities.</p>", "<p class=\"explanations\">At least one of these statements is correct. </p>" ]
}

arrQuestions['ACS_101_EOL_030'] = {
"strID": "ACS_101_EOL_030",
"questionID": 113847,
"item": "ACS_101_EOL2020_030",
"primaryLO": "4B",
"textref": "c. 4, p. 2",
"textbook": 0,
"chapter": 4,
"module": 1,
"arrLOs": [ "4B" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">When someone who is suspected of fraud takes legal action against the person reporting suspected fraud, the accused person often tries to sue for defamation or invasion of privacy. The type of civil wrong that occurs when a person makes spoken false statements that intend to damage the reputation of another are a form of</p>",
"arrAnsChoices": [ "defamation known as slander", "defamation known as libel", "invasion of privacy known as slander", "invasion of privacy known as libel" ],
"arrAnsIDs": [ 460211, 460212, 460213, 460214 ],
"intCR": 1,
"arrAnswerFeedback": [ "<p class=\"explanations\">Defamation is a civil wrong that occurs when a person makes false statements that intend to damage the reputation of another. A defamatory statement can be either libel or slander. Libel is a defamatory statement that is published in print, writing, pictures, or signs. Slander is a defamatory statement that is spoken, but not published.</p><p class=\"explanations\">Invasion of privacy is a civil wrong that occurs when a person (1) appropriates someone’s name or personality; (2) publicizes someone’s private affairs; (3) intrudes into someone’s private affairs and the wrong causes mental suffering, shame, or humiliation; or (4) places someone in a false light in the public eye.</p>", "<p class=\"explanations\">It is correct to say that spoken false statements that intend to damage the reputation of another are a form a defamation. However, libel is a defamatory statement that is <b>published</b> in print, writing, pictures, or signs.</p>", "<p class=\"explanations\">Invasion of privacy does <b>not</b> consist of making false statements. Invasion of privacy is a civil wrong that occurs when a person (1) appropriates someone’s name or personality; (2) publicizes someone’s private affairs; (3) intrudes into someone’s private affairs and the wrong causes mental suffering, shame, or humiliation; or (4) places someone in a false light in the public eye.</p>", "<p class=\"explanations\">Invasion of privacy does not consist of making false statements. Invasion of privacy is a civil wrong that occurs when a person (1) appropriates someone’s name or personality; (2) publicizes someone’s private affairs; (3) intrudes into someone’s private affairs and the wrong causes mental suffering, shame, or humiliation; or (4) places someone in a false light in the public eye.</p>" ]
}

arrQuestions['ACS_101_EOL_031'] = {
"strID": "ACS_101_EOL_031",
"questionID": 113848,
"item": "ACS_101_EOL2020_031",
"primaryLO": "4C",
"textref": "c. 4, p. 23",
"textbook": 0,
"chapter": 4,
"module": 1,
"arrLOs": [ "4C" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">Joann Florez, an employee of an assisted living facility, is responsible for Cybill Remedi’s care. Ms.&nbsp;Florez obtained Ms.&nbsp;Remedi’s personal identifying information (PII) and used the information to steal funds from Ms.&nbsp;Remedi’s retirement accounts and accrue debts in Ms.&nbsp;Remedi’s name. With regard to types of financial exploitation, Ms.&nbsp;Florez’s actions are <i>best</i> described as</p>",
"arrAnsChoices": [ "an improper use of power of attorney", "securities and insurance fraud", "a pyramid scheme", "identity theft" ],
"arrAnsIDs": [ 460215, 460216, 460217, 460218 ],
"intCR": 4,
"arrAnswerFeedback": [ "<p class=\"explanations\">Ms.&nbsp;Florez has <b>not </b>been granted legal authority to manage Ms.&nbsp;Remedi’s finances or other affairs. Therefore, this is <b>not</b> an improper use of power of attorney.</p>", "<p class=\"explanations\">Ms.&nbsp;Florez did <b>not </b>sell Ms.&nbsp;Remedi improper securities or investments, <b>nor</b> did Ms.&nbsp;Florez pose as a broker-dealer or investment advisor. Therefore, this is <b>not</b> securities and insurance fraud.</p>", "<p class=\"explanations\">Ms.&nbsp;Florez’s actions do <b>not </b>constitute a pyramid scheme. </p>", "<p class=\"explanations\">When relatives or caregivers seek to take advantage of their relationship with an elderly individual to obtain personal identifying information (PII) to steal funds or gain control of financial assets, they are engaging in identity theft. Once an identity thief obtains this information, he can assume the identity of the victim and steal funds from the victim’s accounts, accrue debt in the name of the victim, or engage in unauthorized or illegal transactions or other activities.</p>" ]
}

arrQuestions['ACS_101_EOL_032'] = {
"strID": "ACS_101_EOL_032",
"questionID": 113849,
"item": "ACS_101_EOL2020_032",
"primaryLO": "4D",
"textref": "c. 4, p. 31",
"textbook": 0,
"chapter": 4,
"module": 1,
"arrLOs": [ "4D" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">Insurance companies prioritize cybersecurity to help protect customers from multiple types of cybercrime, such as hacking, phishing, malware, and ransomware. <i>Ransomware</i> is best defined as</p>",
"arrAnsChoices": [ "malicious software that freezes a company’s computers or blocks access to data, restoring access only when a victim pays to remove the software", "a criminal posing as a trusted source and attempting to trick someone into revealing sensitive information", "the process of using a computer and technology to gain unauthorized access to another system’s data", "malicious software installed on a computer by an unauthorized outside user in order to perform unwanted tasks, such as stealing data" ],
"arrAnsIDs": [ 460219, 460220, 460221, 460222 ],
"intCR": 1,
"arrAnswerFeedback": [ "<p class=\"explanations\">Ransomware is a form of malware that freezes a company’s computers and only restores access once the victim pays a ransom. Failing to prevent ransomware threats exposes customers to an unacceptable level of risk.</p>", "<p class=\"explanations\">This best describes a<b> phishing </b>attack.</p>", "<p class=\"explanations\">This best describes <b>hacking</b>.</p>", "<p class=\"explanations\">This best describes a <b>malware</b> attack.</p>" ]
}




var arrlotext = new Array(); 
arrlotext['4A'] = "Describe the primary principles of ethical conduct, and explain the importance of ethical conduct for insurance companies.";
arrlotext['4B'] = "Identify red flags that may indicate fraudulent acts, and describe how insurance companies combat fraud.";
arrlotext['4C'] = "Identify methods used to financially exploit seniors, and describe how insurance companies combat financial exploitation.";
arrlotext['4D'] = "Describe the threat of cybercrime, and provide examples of cybersecurity tools that insurers use to protect customers.";
