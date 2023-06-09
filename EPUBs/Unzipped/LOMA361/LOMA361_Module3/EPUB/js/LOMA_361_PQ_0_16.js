﻿var intPassingScore = 70;
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
var strCopyright = '2019';
var mediatype = 'Practice Questions';
var mediashort = 'PPQ'; //use this in name of state status
var coursetype = 'pdf';

var quizname = "LOMA 361 Practice Questions, Chapter 16";
var coursename = 'LOMA 361';
var modulenumber = 3;
var title = "LOMA_361_PPQ2019_0_16";
var intNumPools = 1;
var numQ = 8;
var numTexts = 1;
var numChap = 1;
var arrTexts = new Array();
var arrNumChap = new Array();
var duration = 0;
arrTexts[0] = "Accounting and Financial Reporting in Life Insurance Companies, Second Edition (2019)";
arrNumChap[0] = 1;
var thisChap = '16';

objPool = new Object(); 
objPool.intSelectCount = 8;
objPool.formID = 2103;
objPool.formName = 'PPQ2019_0_16';
arrPoolQuestions = new Array();
arrPoolQuestions[0] = 'LOMA_361_PQ_129';
arrPoolQuestions[1] = 'LOMA_361_PQ_130';
arrPoolQuestions[2] = 'LOMA_361_PQ_131';
arrPoolQuestions[3] = 'LOMA_361_PQ_132';
arrPoolQuestions[4] = 'LOMA_361_PQ_133';
arrPoolQuestions[5] = 'LOMA_361_PQ_134';
arrPoolQuestions[6] = 'LOMA_361_PQ_135';
arrPoolQuestions[7] = 'LOMA_361_PQ_136';
objPool.arrPoolQuestions = arrPoolQuestions;
arrPools[0] = objPool;

objQuestion = new Object();
objQuestion.strID = 'LOMA_361_PQ_129';
objQuestion.questionID = 110315;
objQuestion.item = 'LOMA_361_PPQ2019_129';
objQuestion.primaryLO = '16A';
objQuestion.textref = 'c. 16, p. 2';
objQuestion.textbook = 0;
objQuestion.chapter = 16;
objQuestion.module = 3;
var arrLOs = new Array();
arrLOs[0] = '16A';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">Two key aspects of the control function that directly affect all insurance operations are internal control and financial auditing. <i>Internal control</i> is a process in which an insurance company takes actions, including those designed to</p><ol type=\"A\" class=\"combo\"><li>Monitor the reliability of its accounting records</li><li>Protect its assets</li></ol>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "Both A and B";
arrAnsChoices[1] = "A only";
arrAnsChoices[2] = "B only";
arrAnsChoices[3] = "Neither A nor B";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 445844;
arrAnsIDs[1] = 445845;
arrAnsIDs[2] = 445846;
arrAnsIDs[3] = 445847;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 1;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">All insurers have a control function, which measures and monitors an insurer’s transactions as it pursues its corporate objectives, such as solvency and profitability. The activities associated with accounting and financial reporting are an integral part of this control function, which consists of two key aspects: internal control and financial auditing.</p><p class=\"explanations\">Internal controls are the steps a company takes to protect its assets, monitor the accuracy of its accounting records, encourage both operational efficiency and adherence to the company’s management policies, and comply with applicable laws and regulations. Internal controls are designed to prevent or reduce losses arising from unexpected events or contingencies and mistakes or irregularities in transaction processing and asset handling.</p><p class=\"explanations\"><b>Learning Objective: 16A. Explain the purpose of internal control and differentiate between preventive controls and detective controls.</b></p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">Statement A is correct; however, Statement B is also correct.</p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">Statement B is correct; however, Statement A is also correct.</p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">At least one of these statements is correct.</p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_361_PQ_129'] = objQuestion;


objQuestion = new Object();
objQuestion.strID = 'LOMA_361_PQ_130';
objQuestion.questionID = 110316;
objQuestion.item = 'LOMA_361_PPQ2019_130';
objQuestion.primaryLO = '16A';
objQuestion.textref = 'c. 16, pp. 4-5';
objQuestion.textbook = 0;
objQuestion.chapter = 16;
objQuestion.module = 3;
var arrLOs = new Array();
arrLOs[0] = '16A';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">An insurer’s internal controls should include both preventive controls and detective controls. One example of an insurer’s <i>preventive </i>controls is a</p>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "daily review of reports of questionable data";
arrAnsChoices[1] = "monthly review of claims disbursements";
arrAnsChoices[2] = "valid code to be entered for each transaction";
arrAnsChoices[3] = "daily balance of department accounts";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 445848;
arrAnsIDs[1] = 445849;
arrAnsIDs[2] = 445850;
arrAnsIDs[3] = 445851;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 3;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">A daily review of reports of questionable data is an example of a <b>detective </b>control.</p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">A monthly review of claims disbursements is an example of a <b>detective </b>control.</p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">A preventive control is designed to keep an error or a problem from occurring. Normally, preventive controls involve steps that must be taken before a business transaction occurs. Preventive controls in insurance companies include internal procedures that require proper documentation and two signatures on checks written over a specified dollar amount before claims processors disburse benefit payments.</p><p class=\"explanations\">A detective control identifies an error or a problem after it has occurred. Most detective controls are undertaken after a series of business transactions. Detective controls in insurance companies include internal procedures such as a daily review of reports of questionable data, a daily balance of department accounts, and a monthly review of claims disbursements.</p><p class=\"explanations\">Preventive controls are usually more effective at reducing errors or problems than are detective controls, but preventive controls are also typically more expensive. Insurers analyze both preventive and detective controls to ensure that they provide benefits that are worth their costs.</p><p class=\"explanations\"><b>Learning Objective: 16A. Explain the purpose of internal control and differentiate between preventive controls and detective controls.</b></p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">A daily balance of department accounts is an example of a <b>detective </b>control.</p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_361_PQ_130'] = objQuestion;


objQuestion = new Object();
objQuestion.strID = 'LOMA_361_PQ_131';
objQuestion.questionID = 110317;
objQuestion.item = 'LOMA_361_PPQ2019_131';
objQuestion.primaryLO = '16B';
objQuestion.textref = 'c. 16, pp. 6-7';
objQuestion.textbook = 0;
objQuestion.chapter = 16;
objQuestion.module = 3;
var arrLOs = new Array();
arrLOs[0] = '16B';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">The accounting system at the Perceptive Life Insurance Company is designed so that Perceptive’s controller must approve invoices for payment, and Perceptive’s treasurer must sign the checks that pay the invoices that have been approved for payment. Perceptive’s practice is an example of a key principle of an effective system of internal control, which requires the</p>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "employer to design jobs so that incompatible functions are assigned to different individuals";
arrAnsChoices[1] = "delegation and communication of authority to perform specified tasks at a specified authorization level";
arrAnsChoices[2] = "itemized count and listing of a company’s assets, such as property, products, materials, or securities";
arrAnsChoices[3] = "maintenance of written recovery plans and off-premises storage of back-up files for all critical records in case of a business disaster";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 445852;
arrAnsIDs[1] = 445853;
arrAnsIDs[2] = 445854;
arrAnsIDs[3] = 445855;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 1;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">The principle of segregation of duties, also known as the principle of dual control, requires an employer to design jobs so that incompatible functions are assigned to different individuals, who typically work in different areas or functions of the company. In this context, incompatible functions are job duties that, when combined, place an employee in a position to commit an illegal act or to conceal errors or irregularities in the normal course of his or her employment.</p><p class=\"explanations\"><b>Learning Objective: 16B. Describe the key principles of an effective system of internal controls.</b></p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">The <b>execution of transactions as authorized</b> concerns the delegation of authority to perform specified tasks and the communication of that authority. An authorization level is the maximum monetary amount that a company employee has been granted official power to approve for disbursement. Under this internal control, the employees typically work in the same area or function, but at different levels. Each authorization level should reflect the transaction and the experience and responsibility of the employee.</p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">The <b>physical comparison of recorded amounts</b> means that a company counts its assets on a periodic basis and compares this count to the amounts in its accounting records. This physical comparison is typically accomplished by means of an <b>inventory</b>—an itemized count and listing of a company’s assets.</p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">The <b>safeguarding of assets</b> is the process of limiting access to offices, documents, and records; storing certain documents in vaults to which no person has sole access; maintaining written recovery plans and off-premises storage of back-up files for all critical records in case of a business disaster; investigating the integrity of employees hired to fill sensitive positions; taking a physical inventory of all assets and comparing this count to a written record; and reviewing the adequacy of insurance coverage, given a company’s risk exposure.</p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_361_PQ_131'] = objQuestion;


objQuestion = new Object();
objQuestion.strID = 'LOMA_361_PQ_132';
objQuestion.questionID = 110318;
objQuestion.item = 'LOMA_361_PPQ2019_132';
objQuestion.primaryLO = '16B';
objQuestion.textref = 'c. 16, pp. 9-10';
objQuestion.textbook = 0;
objQuestion.chapter = 16;
objQuestion.module = 3;
var arrLOs = new Array();
arrLOs[0] = '16B';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">As part of its system of internal controls, the Domain Life Insurance Company numbers all policy applications and claims as they are received. Domain’s internal auditors separately check the policy application and claim sequences and reconcile any number that is missing or out of sequence. Domain’s internal control is an example of</p>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "the maintenance of control totals";
arrAnsChoices[1] = "a comparison with third-party information";
arrAnsChoices[2] = "prenumbering";
arrAnsChoices[3] = "timeliness of operation";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 445856;
arrAnsIDs[1] = 445857;
arrAnsIDs[2] = 445858;
arrAnsIDs[3] = 445859;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 3;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\"><b>Maintenance of control totals</b> includes listing and subtotaling all policy loans separately, and then reconciling the subtotals to the insurer’s total policy loans; and grouping and totaling premium checks to obtain a batch total, and then entering the batch total into the insurer’s automated system.</p>";
arrAnswerFeedback[1] = "<p class=\"explanations\"><b>Comparison with third-party information</b> includes reconciling the insurer’s cash receipts and cash disbursements with the insurer’s bank statement, cash accounts, and suspense accounts; reconciling information concerning notes payable in the insurer’s accounting records with statements provided by the notes’ owners; and comparing on a routine basis notifications of errors in payments or policy records or confirmations of amounts receivable from persons or companies that owe the insurer money.</p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">Prenumbering is one example of the internal control known as the physical comparison of recorded amounts, in which a company counts its assets on a periodic basis and compares this count to the amounts in its accounting records. Prenumbering includes printing checks and purchase orders with sequential numbers, numbering policy applications and claims as they are received, and having internal auditors check the numbering sequence and reconcile any number that is missing or out of sequence.</p><p class=\"explanations\">Other examples of the physical comparison of recorded amounts include inventory; approval, review, checking, and recalculation (claim payments); maintenance of control totals (policy loans, premium checks); comparison with third-party information (cash receipts, cash disbursements); document cancellation (void, shred); and timeliness of operation (transactions, policy application status).</p><p class=\"explanations\"><b>Learning Objective: 16B. Describe the key principles of an effective system of internal controls.</b></p>";
arrAnswerFeedback[3] = "<p class=\"explanations\"><b>Timeliness of operation</b> includes reviewing new business periodically to resolve insurance policies that have neither been issued nor denied after a specified time and ensuring that all transactions are processed promptly, including daily deposits of cash receipts.</p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_361_PQ_132'] = objQuestion;


objQuestion = new Object();
objQuestion.strID = 'LOMA_361_PQ_133';
objQuestion.questionID = 110319;
objQuestion.item = 'LOMA_361_PPQ2019_133';
objQuestion.primaryLO = '16C';
objQuestion.textref = 'c. 16, pp. 13-14';
objQuestion.textbook = 0;
objQuestion.chapter = 16;
objQuestion.module = 3;
var arrLOs = new Array();
arrLOs[0] = '16C';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">All insurance companies undergo periodic internal and external accounting audits and examinations. The following statement(s) can correctly be made about these audits and examinations:</p><ol type=\"A\" class=\"combo\"><li>That all U.S. insurance companies must undergo periodic financial condition examinations, which are a type of internal audit</li><li>That a company’s internal auditors should have unrestricted access to all records, procedures, files, and reports that concern the scope of the audit</li></ol>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "Both A and B";
arrAnsChoices[1] = "A only";
arrAnsChoices[2] = "B only";
arrAnsChoices[3] = "Neither A nor B";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 445860;
arrAnsIDs[1] = 445861;
arrAnsIDs[2] = 445862;
arrAnsIDs[3] = 445863;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 3;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">At least one of these statements is incorrect.</p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">Statement A is incorrect. All U.S. insurance companies undergo periodic financial condition examinations, which are a specific type of <b>external</b> audit. An external audit, also known as an independent audit, is a financial audit performed by external auditors, who are employed by public accounting companies, insurance regulators, or reinsurers.</p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">Statement A is incorrect. All U.S. insurance companies undergo periodic financial condition examinations, which are a specific type of external audit. An external audit, also known as an independent audit, is a financial audit performed by external auditors, who are employed by public accounting companies, insurance regulators, or reinsurers.</p><p class=\"explanations\">Statement B is correct. An internal audit is a financial audit performed by company employees. Internal auditors should not directly supervise or report to the areas they audit. Internal auditors usually report to a senior-level executive or to the audit committee of the insurer’s board of directors.</p><p class=\"explanations\"><b>Learning Objective: 16C. Differentiate between internal auditing and external auditing.</b></p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">At least one of these statements is correct.</p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_361_PQ_133'] = objQuestion;


objQuestion = new Object();
objQuestion.strID = 'LOMA_361_PQ_134';
objQuestion.questionID = 110320;
objQuestion.item = 'LOMA_361_PPQ2019_134';
objQuestion.primaryLO = '16D';
objQuestion.textref = 'c. 16, pp. 14-15';
objQuestion.textbook = 0;
objQuestion.chapter = 16;
objQuestion.module = 3;
var arrLOs = new Array();
arrLOs[0] = '16D';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">One type of auditor’s opinion that an insurer may receive indicates that the insurer’s financial statements present fairly, in all material respects, the financial position, results of operations, and cash flows of the insurer in conformity with GAAP or, for “special purpose” financial statements, in accordance with statutory accounting principles (SAP). This type of auditor’s opinion is known as</p>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "a qualified opinion";
arrAnsChoices[1] = "a modified opinion";
arrAnsChoices[2] = "an adverse opinion";
arrAnsChoices[3] = "an unqualified opinion";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 445864;
arrAnsIDs[1] = 445865;
arrAnsIDs[2] = 445866;
arrAnsIDs[3] = 445867;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 4;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">The auditor’s opinion described in this situation is <b>not</b> a qualified opinion, a type of modified opinion. An auditor expresses a qualified opinion when he has obtained sufficient appropriate evidence and concludes that a company’s financial statements contain misstatements that are material but not pervasive.</p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">The auditor’s opinion described in this situation is <b>not</b> a modified opinion. A modified opinion states the area of exception to an otherwise unqualified opinion.</p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">The auditor’s opinion described in this situation is <b>not</b> an adverse opinion, a type of modified opinion. An auditor expresses an adverse opinion when she has obtained sufficient appropriate evidence and concludes that the financial statements contain misstatements that are both material and pervasive.</p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">External auditors prepare and sign the auditor’s opinion or report, which is included in a company’s Annual Report. An auditor’s opinion is a statement, prepared by a public accounting company, that indicates (1) whether the information contained in an insurer’s Annual Report fairly represents the insurer’s financial position, the results of its operations, and its cash flows and (2) whether the audit was conducted in accordance with applicable auditing standards. An auditor’s opinion does not, however, guarantee the accuracy of the financial statements.</p><p class=\"explanations\">Depending on the results of the audit, auditors issue one of several different types of auditor’s opinions. Types of auditor’s opinions include unqualified opinions and modified opinions. An unqualified opinion, also called a standard report or clean opinion, is the type of auditor’s opinion that companies prefer. An unqualified opinion with explanatory language, which is another type of unqualified opinion, contains explanatory language concerning specific circumstances, such as material inconsistencies resulting from a change in accounting principles. Types of modified opinions include a qualified opinion, an adverse opinion, and a disclaimer of opinion. In the insurance industry, a disclaimer of opinion is extremely rare.</p><p class=\"explanations\"><b>Learning Objective: 16D. Describe the different kinds of auditor’s opinions.</b></p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_361_PQ_134'] = objQuestion;


objQuestion = new Object();
objQuestion.strID = 'LOMA_361_PQ_135';
objQuestion.questionID = 110321;
objQuestion.item = 'LOMA_361_PPQ2019_135';
objQuestion.primaryLO = '16E';
objQuestion.textref = 'c. 16, pp. 15-16';
objQuestion.textbook = 0;
objQuestion.chapter = 16;
objQuestion.module = 3;
var arrLOs = new Array();
arrLOs[0] = '16E';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">A government regulatory authority is examining the Sidereal Life Insurance Company to determine whether Sidereal’s financial statements adhere to the laws, regulations, policies, and procedures prescribed by internal and external regulatory authorities. This information indicates that Sidereal is undergoing the type of audit known, by definition, as a</p>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "program results audit";
arrAnsChoices[1] = "compliance audit";
arrAnsChoices[2] = "financial audit";
arrAnsChoices[3] = "performance audit";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 445868;
arrAnsIDs[1] = 445869;
arrAnsIDs[2] = 445870;
arrAnsIDs[3] = 445871;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 2;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">A program results audit, which is a type of performance audit, determines whether the <b>desired results or benefits</b> are actually being achieved under a specified program.</p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">A financial audit verifies that a company’s assets are accounted for and that they are safeguarded from loss; assesses the soundness and the application of the company’s administrative and accounting controls; ensures that employees follow specified policies and procedures; verifies the reliability of the company’s accounting records and financial reports; and evaluates the effectiveness and efficiency of operating procedures. Financial audits also uncover unintentional errors, false information, fraud, or collusion.</p><p class=\"explanations\">Other important types of audits are compliance audits and performance audits. All three types of audits can be conducted on either an internal or external basis. Compliance auditing focuses on the market conduct of an insurer’s producers. External auditors in the United States use specified guidelines in conducting compliance audits.</p><p class=\"explanations\"><b>Learning Objective: 16E. Differentiate between compliance audits and performance audits.</b></p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">A financial audit verifies that a company’s assets are accounted for and that they are safeguarded from loss; assesses the soundness and the application of the company’s administrative and accounting controls; ensures that employees follow specified policies and procedures; verifies the reliability of the company’s accounting records and financial reports; and evaluates the effectiveness and efficiency of operating procedures. Financial audits also uncover unintentional errors, false information, fraud, or collusion.</p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">A performance audit measures and evaluates <b>progress toward achieving management objectives</b> for a particular function or goal.</p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_361_PQ_135'] = objQuestion;


objQuestion = new Object();
objQuestion.strID = 'LOMA_361_PQ_136';
objQuestion.questionID = 110322;
objQuestion.item = 'LOMA_361_PPQ2019_136';
objQuestion.primaryLO = '16F';
objQuestion.textref = 'c. 16, p. 18';
objQuestion.textbook = 0;
objQuestion.chapter = 16;
objQuestion.module = 3;
var arrLOs = new Array();
arrLOs[0] = '16F';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">In the United States, two important regulations that govern an insurer’s internal control and auditing activities are the:</p><ul class=\"examul\"><li>Sarbanes-Oxley Act of 2002, or SOX</li><li>NAIC’s Annual Financial Reporting Model Regulation, also known as the <i>Model Audit Rule</i></li></ul><p class=\"stem\">One characteristic about these important regulations is that</p>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "SOX applies to all stock, mutual, and fraternal insurance companies";
arrAnsChoices[1] = "SOX requires a stock insurer’s chief executive officer (CEO) and chief financial officer (CFO) to certify the accuracy of its financial statements";
arrAnsChoices[2] = "the NAIC’s <i>Model Audit Rule</i> applies only to small life insurers";
arrAnsChoices[3] = "the NAIC’s <i>Model Audit Rule</i> does not require an insurer to disclose material weaknesses noted during the course of the audit";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 445872;
arrAnsIDs[1] = 445873;
arrAnsIDs[2] = 445874;
arrAnsIDs[3] = 445875;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 2;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">SOX, which focuses specifically on internal control and reporting and more stringent requirements for external auditor independence, applies <b>only to</b> <b>life insurers</b> that are public companies, or <b>stock insurers</b>.</p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">Under SOX, a stock insurer’s CEO and CFO are required to attest to the accuracy of the insurer’s financial statements. In addition, a stock insurer must select an internal control framework—in this context, a system of principles and components designed to aid an organization in achieving certain objectives—and assess and report on the design and operating effectiveness of the insurer’s internal controls annually. In the United States, the most popular internal control framework was developed by the <i>Committee of Sponsoring Organizations of the Treadway Commission</i>, known as <I>COSO</I>.</p><p class=\"explanations\">The NAIC’s Model Regulation requires that insurers file an annual audit and two specific reports with the appropriate state insurance commissioner. The annual audit must be prepared by an independent certified public accountant (CPA) and must be conducted in accordance with generally accepted auditing standards (GAAS). In the report called <i>Communication of Internal Control Related to Matters Noted in the Audit</i>, the CPA describes any uncorrected material weaknesses in internal controls that might lead to material misstatements in the financial statements during the course of the audit.</p><p class=\"explanations\">The report called <i>Management’s Report of Internal Control over Financial Reporting</i> includes a statement that the insurer’s internal control over financial reporting is effective in providing reasonable assurance as to the reliability of the company’s financial statements. SOX requires stock insurers to prepare a comparable report. Therefore, stock insurers are permitted to use this report to satisfy this requirement of the Model Regulation.</p><p class=\"explanations\"><b>Learning Objective: 16F. Explain the effect that regulations have on the internal control and auditing functions for U.S. life insurance companies.</b></p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">The NAIC’s <i>Model Audit Rule</i> applies only to <b>large</b> U.S. life insurers.</p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">In the report called <i>Communication of Internal Control Related to Matters Noted in the Audit</i>, the external auditor describes any uncorrected material weaknesses in internal controls that might lead to material misstatements in the insurer’s financial statements during the course of the audit. If the report does not describe the specific actions taken by the insurer to correct an unremediated (uncorrected) material weakness, then the insurer is <b>required</b> to provide this description to the state insurance commissioner. If the external auditor found no unremediated material weaknesses, she should disclose this fact in her report.</p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_361_PQ_136'] = objQuestion;





var arrlotext = new Array(); 
arrlotext['16A'] = "16A. Explain the purpose of internal control and differentiate between preventive controls and detective controls.";
arrlotext['16B'] = "16B. Describe the key principles of an effective system of internal controls.";
arrlotext['16C'] = "16C. Differentiate between internal auditing and external auditing.";
arrlotext['16D'] = "16D. Describe the different kinds of auditor’s opinions.";
arrlotext['16E'] = "16E. Differentiate between compliance audits and performance audits.";
arrlotext['16F'] = "16F. Explain the effect that regulations have on the internal control and auditing functions for U.S. life insurance companies.";
