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

var quizname = "ACS 101 Practice Questions, Module 3, Lesson 2";
var coursename = 'ACS 101';
var modulenumber = 3;
var title = "ACS_101_EOL2020_3_2";
var intNumPools = 1;
var numQ = 9;
var numTexts = 1;
var numChap = 1;
var arrTexts = new Array();
var arrNumChap = new Array();
var duration = 0;
arrTexts[0] = "ACS 101 Module 3 (2019)";
arrNumChap[0] = 1;
var thisChap = '2';

objPool = new Object(); 
objPool.intSelectCount = 9;
objPool.formID = 2212;
objPool.formName = 'EOL2020_3_2';
arrPoolQuestions = new Array();
arrPoolQuestions[0] = 'ACS_101_EOL_086';
arrPoolQuestions[1] = 'ACS_101_EOL_087';
arrPoolQuestions[2] = 'ACS_101_EOL_088';
arrPoolQuestions[3] = 'ACS_101_EOL_089';
arrPoolQuestions[4] = 'ACS_101_EOL_090';
arrPoolQuestions[5] = 'ACS_101_EOL_091';
arrPoolQuestions[6] = 'ACS_101_EOL_092';
arrPoolQuestions[7] = 'ACS_101_EOL_093';
arrPoolQuestions[8] = 'ACS_101_EOL_094';
objPool.arrPoolQuestions = arrPoolQuestions;
arrPools[0] = objPool;

arrQuestions['ACS_101_EOL_086'] = {
"strID": "ACS_101_EOL_086",
"questionID": 113903,
"item": "ACS_101_EOL2020_086",
"primaryLO": "2C",
"textref": "c. 2, pp. 2, 3",
"textbook": 2,
"chapter": 2,
"module": 3,
"arrLOs": [ "2C" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">Different types of communication—formal, informal, internal, external—require insurers to use different communication channels. When an insurer needs to communicate a legal disclaimer to customers, the most appropriate communication channel to use is</p>",
"arrAnsChoices": [ "a letter", "an email", "instant messaging", "face-to-face or telephone" ],
"arrAnsIDs": [ 460437, 460438, 460439, 460440 ],
"intCR": 1,
"arrAnswerFeedback": [ "<p class=\"explanations\">Using a business letter to make customers aware of legal disclaimers is the best choice because customers will be able to keep the disclaimers for later reference.</p>", "<p class=\"explanations\">Although insurance companies rely on email communication, email is not the best communication channel for providing legal disclaimers to customers.</p>", "<p class=\"explanations\">Insurance companies often use instant messaging to encourage collaboration and communication among employees. However, it is not a good communication channel for providing legal disclaimers to customers.</p>", "<p class=\"explanations\">Face-to-face or telephone communication is not a good choice for providing legal disclaimers to customers because no record of the legal disclaimers will be available for later reference.</p>" ]
}

arrQuestions['ACS_101_EOL_087'] = {
"strID": "ACS_101_EOL_087",
"questionID": 113904,
"item": "ACS_101_EOL2020_087",
"primaryLO": "2A",
"textref": "c. 2, p. 1",
"textbook": 2,
"chapter": 2,
"module": 3,
"arrLOs": [ "2A" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">Below are two sentences from a written communication that a CSR is planning to send to an external customer. Each sentence contains a pair of word choices that the CSR could use to complete the sentence. Select the word choice from each pair that will make the CSR’s writing more effective.</p><p class=\"stem\">I have enclosed information about a term life insurance product that I believe is the <b>(best / optimum)</b> solution to your financial security needs. Please call me (<b>in the event that / if</b>) you have any questions.</p>",
"arrAnsChoices": [ "best / in the event that", "best / if", "optimum / in the event that", "optimum / if" ],
"arrAnsIDs": [ 460441, 460442, 460443, 460444 ],
"intCR": 2,
"arrAnswerFeedback": [ "<p class=\"explanations\">At least one of the sentences could be improved by using a different word choice.</p>", "<p class=\"explanations\">Two ways to make writing more effective are to (1) use simple, everyday words instead of long or technical words, and (2) eliminate unnecessary words and phrases. The word choices in this answer choice reflect a simpler and more effective writing style.</p>", "<p class=\"explanations\">At least one of the sentences could be improved by using a different word choice.</p>", "<p class=\"explanations\">At least one of the sentences could be improved by using a different word choice.</p>" ]
}

arrQuestions['ACS_101_EOL_088'] = {
"strID": "ACS_101_EOL_088",
"questionID": 113905,
"item": "ACS_101_EOL2020_088",
"primaryLO": "2A",
"textref": "c. 2, p. 1",
"textbook": 2,
"chapter": 2,
"module": 3,
"arrLOs": [ "2A" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">One general guideline for effective written communications is that writers should</p>",
"arrAnsChoices": [ "combine two or three short sentences into one long sentence", "use long paragraphs", "include only one main idea in a paragraph", "avoid the use of bulleted lists" ],
"arrAnsIDs": [ 460445, 460446, 460447, 460448 ],
"intCR": 3,
"arrAnswerFeedback": [ "<p class=\"explanations\">In general, effective written communication typically uses sentences that are short and clear. Readers often find complex words and sentences confusing and annoying. Simplifying long sentences by breaking them into shorter sentences enhances comprehension.</p>", "<p class=\"explanations\">Try to keep paragraphs short by cutting unnecessary words, phrases, and sentences.</p>", "<p class=\"explanations\">The most effective writing typically includes only one main idea per paragraph, along with supporting information. When finished describing that idea, start a new paragraph.</p>", "<p class=\"explanations\">Using bulleted lists is a good way to add clarity to long sentences. Placing key elements in a bullet list helps to draw attention to important information.</p>" ]
}

arrQuestions['ACS_101_EOL_089'] = {
"strID": "ACS_101_EOL_089",
"questionID": 113906,
"item": "ACS_101_EOL2020_089",
"primaryLO": "2B",
"textref": "c. 2, p. 2",
"textbook": 2,
"chapter": 2,
"module": 3,
"arrLOs": [ "2B" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">Will Bay, a customer service provider, is writing a business letter to Renee Clark, a policyowner who has written to complain about a premium increase in a term policy she had renewed. Two examples of a salutation that Mr.&nbsp;Bay could use in his letter are labeled <B>A</B> and <B>B</B> below, and two examples of an opening that Mr.&nbsp;Bay could use are labeled <B>C</B> and <B>D</B>.</p><table align=\"center\" cellspacing=\"0\" width=\"95%\" class=\"indent\"><tr><td width=\"25\" valign=\"top\"><B>A.</B></td><td>Dear Madam:</td></tr><tr><td width=\"25\" valign=\"top\"><B>B.</B></td><td>Dear Ms.&nbsp;Renee Clark:</td></tr><tr><td width=\"25\" valign=\"top\"><B>C.</B></td><td>I received your letter regarding the increase in the premium rate upon renewal of your term insurance policy. I am sorry that this increase caused you some concern. I hope that this letter will help clarify the situation.</td></tr><tr><td width=\"25\" valign=\"top\"><B>D.</B></td><td>An insured’s current age is one factor insurers consider when calculating premium rates for life insurance policies. When you purchased your five-year renewable term policy, we calculated your premium based on your age at that time, which was 40. We used your current age, 45, to determine the premium rate for your renewed policy. Women at age 45 have a higher rate of mortality than do women at age 40.</td></tr></table><p class=\"stem\">Of the above salutations and openings, the better salutation is</p>",
"arrAnsChoices": [ "<B>A</B>, and the better opening is <B>C</B>", "<B>A</B>, and the better opening is <B>D</B>", "<B>B</B>, and the better opening is <B>C</B>", "<B>B</B>, and the better opening is <B>D</B>" ],
"arrAnsIDs": [ 460449, 460450, 460451, 460452 ],
"intCR": 3,
"arrAnswerFeedback": [ "<p class=\"explanations\">The opening of the letter in Example C is the appropriate choice because it states the purpose of the letter, acknowledges Ms.&nbsp;Clark’s concerns, and establishes a helpful tone. However, the salutation in Example A is <b>not</b> the best choice. A salutation typically includes the receiver’s first name and title, such as Ms.&nbsp;or Mr., followed by the receiver’s last name. A letter should use a generic salutation, such as “Dear Sir or Madam,” only when a receiver’s name is unknown.</p>", "<p class=\"explanations\">The salutation in Example A is <b>not</b> the best choice. A salutation typically includes the receiver’s first name and title, such as Ms.&nbsp;or Mr., followed by the receiver’s last name. A letter should use a generic salutation, such as “Dear Sir or Madam,” only when a receiver’s name is unknown.</p><p class=\"explanations\">Also, the opening in Example D is <b>not</b> the best choice to open this letter. The opening of a letter should attract the reader’s attention, establish the tone of the message, and state the purpose of the letter. Example D does not state the purpose of the letter (a response to Ms.&nbsp;Clark’s letter) and does not establish a helpful tone. Instead, it presents a complicated explanation of premium rates without any information to help orient the reader.</p>", "<p class=\"explanations\">A salutation typically includes the receiver’s first name and title, such as Ms.&nbsp;or Mr., followed by the receiver’s last name. A letter should use a generic salutation, such as “Dear Sir or Madam,” only when a receiver’s name is unknown. The opening of the letter in Example C is appropriate because it states the purpose of the letter, acknowledges Ms.&nbsp;Clark’s concerns, and establishes a helpful tone.</p>", "<p class=\"explanations\">Example B is the better salutation because a salutation typically includes the receiver’s first name and title, such as Ms.&nbsp;or Mr., followed by the receiver’s last name.&nbsp;</p><p class=\"explanations\">However, Example D is <b>not</b> the best choice to open this letter. The opening of a letter should attract the reader’s attention, establish the tone of the message, and state the purpose of the letter. Example D does not state the purpose of the letter (a response to Ms.&nbsp;Clark’s letter) and does not establish a helpful tone. Instead, it presents a complicated explanation of premium rates without any information to help orient the reader.</p>" ]
}

arrQuestions['ACS_101_EOL_090'] = {
"strID": "ACS_101_EOL_090",
"questionID": 113907,
"item": "ACS_101_EOL2020_090",
"primaryLO": "2B",
"textref": "c. 2, p. 2",
"textbook": 2,
"chapter": 2,
"module": 3,
"arrLOs": [ "2B" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">Business letters generally follow a standard format that includes an opening, a body, and a conclusion. Some companies create templates for business letters to ensure that customers receive consistent, accurate information. With respect to guidelines for writing business letters, a letter writer generally should</p>",
"arrAnsChoices": [ "provide all the information needed to accomplish the letter’s purpose in the opening paragraph of the letter", "never modify the information in a template that the company provides for business letters", "keep the letter as brief as possible by not summarizing information in the conclusion of the letter", "provide specific information in the conclusion of the letter about how and when the reader should reply to the letter" ],
"arrAnsIDs": [ 460453, 460454, 460455, 460456 ],
"intCR": 4,
"arrAnswerFeedback": [ "<p class=\"explanations\">The body of a letter, rather than the opening of a letter, should provide the information needed to accomplish the letter’s purpose.</p>", "<p class=\"explanations\">Some templates for business letters include prescribed text for important information but allow employees to customize other information based on the specifics of a customer’s inquiry or request.</p>", "<p class=\"explanations\">It is appropriate for a letter writer to summarize important points from the body of a letter in the conclusion of the letter.</p>", "<p class=\"explanations\">In addition to giving specific information about how and when the reader should reply, the conclusion of a letter allows the letter writer to summarize important points from the body of the letter, indicate any steps the writer will take, and ask for any response needed from the reader.</p>" ]
}

arrQuestions['ACS_101_EOL_091'] = {
"strID": "ACS_101_EOL_091",
"questionID": 113908,
"item": "ACS_101_EOL2020_091",
"primaryLO": "2C",
"textref": "c. 2, p. 3",
"textbook": 2,
"chapter": 2,
"module": 3,
"arrLOs": [ "2C" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">Business letters and emails should follow certain guidelines. The following statements describe how two CSRs approached using email to send a long message:</p><ul class=\"examul\"><li><b>Approach A</b>: Lenore Whitley decided to divide the message into three emails.</li><li><b>Approach B</b>: Kyle Hildreth limited the email to one screen with key points and then included an attachment to provide more details.</li></ul><p class=\"stem\">The CSRs followed acceptable guidelines for business emails in</p>",
"arrAnsChoices": [ "both Approach A and Approach B", "Approach A only", "Approach B only", "neither Approach A nor Approach B" ],
"arrAnsIDs": [ 460457, 460458, 460459, 460460 ],
"intCR": 3,
"arrAnswerFeedback": [ "<p class=\"explanations\">At least one of the approaches did <b>not </b>follow acceptable guidelines for business email.</p>", "<p class=\"explanations\">Approach A did <b>not </b>follow acceptable guidelines for business email.</p>", "<p class=\"explanations\">By presenting only the key points in the body of the message and using an attachment for the details, Mr.&nbsp;Hildreth followed acceptable guidelines for business email. In general, business letters should be no longer than one page, and email messages should be no longer than one screen.</p>", "<p class=\"explanations\">At least one of the approaches followed acceptable guidelines for business email.</p>" ]
}

arrQuestions['ACS_101_EOL_092'] = {
"strID": "ACS_101_EOL_092",
"questionID": 113909,
"item": "ACS_101_EOL2020_092",
"primaryLO": "2C",
"textref": "c. 2, p. 3",
"textbook": 2,
"chapter": 2,
"module": 3,
"arrLOs": [ "2C" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">The following statements are about email communication. Select the answer choice containing the correct statement.</p>",
"arrAnsChoices": [ "Employees should reply to every email message they receive, even those that do not require a response.", "Employees should avoid using electronic jargon in business email messages.", "Because of its informal nature, email does not require the same attention to purpose and clarity as other forms of writing.", "It is acceptable to leave the subject line of an email blank." ],
"arrAnsIDs": [ 460461, 460462, 460463, 460464 ],
"intCR": 2,
"arrAnswerFeedback": [ "<p class=\"explanations\">Employees should reply promptly to email messages that require a response, but if a message does not require a response, they should not feel obligated to reply.</p>", "<p class=\"explanations\">Email messages should not include electronic jargon, such as BTW (“by the way”), FYI (“for your information”), and THX (“thanks”). Although these shortcuts are common in personal emails, in business emails they can be confusing and unprofessional.</p>", "<p class=\"explanations\">When writing an email message, use the same care you would use when writing a letter. The message should state its purpose up front and then provide relevant information to support it. Keep the message short and to the point.</p>", "<p class=\"explanations\">Always ensure that the subject line of an email is filled in. Because people often rely on subject lines to screen their emails, choose a subject line that attracts the recipient’s attention and that accurately reflects the content of the message.</p>" ]
}

arrQuestions['ACS_101_EOL_093'] = {
"strID": "ACS_101_EOL_093",
"questionID": 113910,
"item": "ACS_101_EOL2020_093",
"primaryLO": "2C",
"textref": "c. 2, p. 3",
"textbook": 2,
"chapter": 2,
"module": 3,
"arrLOs": [ "2C" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">In an email program, the _____________ feature is an option that automatically includes the user’s complimentary close at the end of each message the user sends.</p>",
"arrAnsChoices": [ "prewriting", "auto-greeting", "form paragraph", "auto-signature" ],
"arrAnsIDs": [ 460465, 460466, 460467, 460468 ],
"intCR": 4,
"arrAnswerFeedback": [ "<p class=\"explanations\">Prewriting is the part of the writing process that occurs when a writer determines the audience, the reason for writing, and the best way to present the information.</p>", "<p class=\"explanations\">Auto-greeting is a telephone technology that records a person’s “best” greeting and then automatically plays that greeting each time a call arrives.</p>", "<p class=\"explanations\">A form paragraph is a type of communication template that includes prescribed text for important information but allows employees to customize other information based on the specifics of a customer inquiry or request.</p>", "<p class=\"explanations\">An auto-signature feature automatically includes the user’s complimentary close at the end of each email message the user sends. The complimentary close typically identifies the sender’s name, position, organization, and contact information (address, telephone number, and fax).</p>" ]
}

arrQuestions['ACS_101_EOL_094'] = {
"strID": "ACS_101_EOL_094",
"questionID": 113911,
"item": "ACS_101_EOL2020_094",
"primaryLO": "2D",
"textref": "c. 2, p. 4",
"textbook": 2,
"chapter": 2,
"module": 3,
"arrLOs": [ "2D" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">Many insurance companies have established a social media presence. Employees who make social media posts on behalf of an insurance company need to be aware of and ensure that such social media communications comply with all applicable laws and regulations related to</p><ol type=\"A\" class=\"combo\"><li>Advertising and marketing</li><li>Recordkeeping</li><li>Consumer privacy</li><li>Consumer complaints</li></ol>",
"arrAnsChoices": [ "A, B, C, and D", "A, B, and D only", "B and D only", "C only" ],
"arrAnsIDs": [ 460469, 460470, 460471, 460472 ],
"intCR": 1,
"arrAnswerFeedback": [ "<p class=\"explanations\">All social media posts that an insurer makes must comply with all of these regulations. In addition, employees who handle such social media communications must possess social awareness and tact in order to create content that is inoffensive, relevant, and branded.</p>", "<p class=\"explanations\">These are not the only laws and regulations with which an insurer’s social media communications must be in compliance.</p>", "<p class=\"explanations\">These are not the only laws and regulations with which an insurer’s social media communications must be in compliance.</p>", "<p class=\"explanations\">These are not the only laws and regulations with which an insurer’s social media communications must be in compliance.</p>" ]
}




var arrlotext = new Array(); 
arrlotext['2A'] = "Plan, create, and deliver clear, concise, and accurate written communications and avoid common communication errors.";
arrlotext['2B'] = "Follow guidelines for using standard formats for business letters.";
arrlotext['2C'] = "Use email and instant messaging effectively and appropriately.";
arrlotext['2D'] = "Describe how life insurance companies use social media to improve the customer experience.";
