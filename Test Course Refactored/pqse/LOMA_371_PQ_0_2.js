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
var strCopyright = '2021';
var mediatype = 'Practice Questions';
var mediashort = 'PPQ'; //use this in name of state status
var coursetype = 'pdf';

var quizname = "LOMA 371 Practice Questions, Chapter 2";
var coursename = 'LOMA 371';
var modulenumber = 1;
var title = "LOMA_371_PPQ2021_0_2";
var intNumPools = 1;
var numQ = 9;
var numTexts = 1;
var numChap = 1;
var arrTexts = new Array();
var arrNumChap = new Array();
var duration = 0;
arrTexts[0] = "Risk Management and Product Design for Insurance Companies, Third Edition (2020)";
arrNumChap[0] = 1;
var thisChap = '2';

objPool = new Object(); 
objPool.intSelectCount = 9;
objPool.formID = 2621;
objPool.formName = 'PPQ2021_0_2';
arrPoolQuestions = new Array();
arrPoolQuestions[0] = 'LOMA_371_PQ_009';
arrPoolQuestions[1] = 'LOMA_371_PQ_010';
arrPoolQuestions[2] = 'LOMA_371_PQ_011';
arrPoolQuestions[3] = 'LOMA_371_PQ_012';
arrPoolQuestions[4] = 'LOMA_371_PQ_013';
arrPoolQuestions[5] = 'LOMA_371_PQ_014';
arrPoolQuestions[6] = 'LOMA_371_PQ_015';
arrPoolQuestions[7] = 'LOMA_371_PQ_016';
arrPoolQuestions[8] = 'LOMA_371_PQ_017';
objPool.arrPoolQuestions = arrPoolQuestions;
arrPools[0] = objPool;

objQuestion = new Object();
objQuestion.strID = 'LOMA_371_PQ_009';
objQuestion.questionID = 121336;
objQuestion.item = 'LOMA_371_PPQ2021_009';
objQuestion.primaryLO = '2A';
objQuestion.textref = 'c. 2, pp. 2-3';
objQuestion.textbook = 0;
objQuestion.chapter = 2;
objQuestion.module = 1;
var arrLOs = new Array();
arrLOs[0] = '2A';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">Regulating contractual reserves and capital adequacy is important to an insurer’s solvency. Individuals and businesses that buy insurance policies, as well as their policy beneficiaries, expect the insurers that issue those policies to remain solvent over the long term so that the insurers will be able to pay benefits when due. Regulatory monitoring also indirectly helps other insurer stakeholders,&nbsp;including</p><ol type=\"A\" class=\"combo\"><li>Insurance company employees</li><li>Governments</li><li>Vendors</li><li>Creditors</li></ol>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "A, B, C, and D";
arrAnsChoices[1] = "A, B, and C only";
arrAnsChoices[2] = "B and D only";
arrAnsChoices[3] = "C and D only";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 490700;
arrAnsIDs[1] = 490701;
arrAnsIDs[2] = 490702;
arrAnsIDs[3] = 490703;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 1;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">The best way for an insurer to meet stakeholder expectations is to identify the risks that can affect insurer solvency and manage insurer exposure to those risks.</p><p class=\"explanations\">Insurance company employees expect the insurer to remain solvent so that they will continue to have jobs and earn paychecks. Governments—and society in general—expect insurers to remain solvent to support needs that the state potentially would have to provide otherwise. Vendors, including reinsurers, expect insurers to remain solvent in order to avoid business interruption to their companies. Creditors expect insurers to remain solvent so that they will cover their debts. In addition, stockholders expect public insurers to stay in business and grow so that they can benefit from their investment in the company.</p><p class=\"explanations\"><b>Learning Objective: 2A. Explain why regulating contractual reserves and capital adequacy is important to an insurer’s solvency.</b></p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">It is true that regulatory monitoring indirectly helps other insurer stakeholders, including company employees, governments, and vendors. However, regulatory monitoring also indirectly helps <b>other</b> insurer&nbsp;stakeholders.</p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">It is true that regulatory monitoring indirectly helps other insurer stakeholders, including governments and creditors. However, regulatory monitoring also indirectly helps <b>other</b> insurer stakeholders.</p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">It is true that regulatory monitoring indirectly helps other insurer stakeholders, including vendors and creditors. However, regulatory monitoring also indirectly helps <b>other</b> insurer stakeholders.</p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_371_PQ_009'] = objQuestion;


objQuestion = new Object();
objQuestion.strID = 'LOMA_371_PQ_010';
objQuestion.questionID = 121337;
objQuestion.item = 'LOMA_371_PPQ2021_010';
objQuestion.primaryLO = '2A';
objQuestion.textref = 'c. 2, p. 4';
objQuestion.textbook = 0;
objQuestion.chapter = 2;
objQuestion.module = 1;
var arrLOs = new Array();
arrLOs[0] = '2A';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">The Actuarial Opinion and Memorandum (AOM) is a formal asset-liability management (ALM) report that consists of two documents: an actuarial opinion and an actuarial memorandum. The following statement(s) can correctly be made about the actuarial <i>opinion</i>:</p><ol type=\"A\" class=\"combo\"><li>Only large insurers are required to complete the actuarial opinion.</li><li>An appointed or a qualified actuary is required to sign the actuarial opinion.</li></ol>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "Both A and B";
arrAnsChoices[1] = "A only";
arrAnsChoices[2] = "B only";
arrAnsChoices[3] = "Neither A nor B";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 490704;
arrAnsIDs[1] = 490705;
arrAnsIDs[2] = 490706;
arrAnsIDs[3] = 490707;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 3;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">At least one of these statements is incorrect.</p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">Statement A is incorrect. All insurers licensed in the United States <b>must</b> submit an actuarial opinion to regulatory authorities with their Annual Statement. For large insurers, extensive financial modeling and actuarial analysis are required to justify the actuarial opinion. In addition, an appointed or a qualified actuary <b>must</b> sign the opinion.</p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">Statement A is incorrect. All insurers licensed in the United States must submit an actuarial opinion to regulatory authorities with their Annual Statement. For large insurers, extensive financial modeling and actuarial analysis are required to justify the actuarial opinion. In addition, an appointed or a qualified actuary must sign the opinion.</p><p class=\"explanations\">Statement B is correct. The Standard Valuation Law (SVL) is an NAIC model law that (1) imposes minimum requirements on the size of insurance and annuity reserves and (2) establishes guidelines insurers must follow when calculating their reserves. Under the SVL, an insurer is required to submit annually an actuarial opinion to regulators. The actuarial memorandum contains documentation that supports the conclusion expressed in the actuarial opinion.</p><p class=\"explanations\"><b>Learning Objective: 2A. Explain why regulating contractual reserves and capital adequacy is important to an insurer’s solvency.</b></p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">At least one of these statements is correct.</p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_371_PQ_010'] = objQuestion;


objQuestion = new Object();
objQuestion.strID = 'LOMA_371_PQ_011';
objQuestion.questionID = 121338;
objQuestion.item = 'LOMA_371_PPQ2021_011';
objQuestion.primaryLO = '2B';
objQuestion.textref = 'c. 2, pp. 4-5';
objQuestion.textbook = 0;
objQuestion.chapter = 2;
objQuestion.module = 1;
var arrLOs = new Array();
arrLOs[0] = '2B';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">Historically, all life insurers in the United States established statutory reserves for their products based on prescribed formulas and assumptions using an approach to reserve valuation known as (<b>rules-based / principles-based</b>) reserving. The approach in which the assumptions, and therefore reserve levels, can change as the economic environment and other risk factors change is known as (<b>rules-based / principles-based</b>) reserving.</p>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "rules-based / rules-based";
arrAnsChoices[1] = "rules-based / principles-based";
arrAnsChoices[2] = "principles-based / rules-based";
arrAnsChoices[3] = "principles-based / principles-based";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 490708;
arrAnsIDs[1] = 490709;
arrAnsIDs[2] = 490710;
arrAnsIDs[3] = 490711;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 2;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">It is true that, historically, all life insurers in the United States have followed a rules-based reserving approach to reserve valuation. However, under <b>principles-based</b> reserving, assumptions and reserves can change as the economic environment and other risk factors change.</p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">Under the rules-based approach, life insurers establish statutory reserves for their products based on prescribed formulas and assumptions. All life insurers that sold a specific product were required to use the same formula for reserve valuation and the same estimates of future mortality and investment experience. The rules-based approach is a “one-size-fits-all” approach that created situations in which some insurers were holding either too little or too much in statutory reserves for a given product.</p><p class=\"explanations\">To address this imbalance, insurers are shifting toward principles-based reserving&nbsp;(PBR), which attempts to “right-size” an insurer’s reserves, so that the reserves an insurer holds are based on either prescribed factors or on the insurer’s own experience and risks, whichever is greater. By enabling insurers to calculate and report more accurate estimates for their statutory reserves, PBR enhances the reporting function and strengthens the financial position of the insurers that use it.</p><p class=\"explanations\"><b>Learning Objective: 2B. Differentiate between rules-based reserving and principles-based reserving for reserve valuation.</b></p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">Historically, all life insurers in the United States have followed a <b>rules-based</b> reserving approach to reserve valuation. In addition, under <b>principles-based</b> reserving, assumptions and reserves can change as the economic environment and other risk factors change.</p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">It is true that, under principles-based reserving, assumptions and reserves can change as the economic environment and other risk factors change. However, historically, all life insurers in the United States have followed a <b>rules-based</b> reserving approach to reserve valuation.</p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_371_PQ_011'] = objQuestion;


objQuestion = new Object();
objQuestion.strID = 'LOMA_371_PQ_012';
objQuestion.questionID = 121339;
objQuestion.item = 'LOMA_371_PPQ2021_012';
objQuestion.primaryLO = '2C';
objQuestion.textref = 'c. 2, pp. 5-7';
objQuestion.textbook = 0;
objQuestion.chapter = 2;
objQuestion.module = 1;
var arrLOs = new Array();
arrLOs[0] = '2C';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">To guard against the possibility of a gap between an insurer’s contractual reserves and its contractual obligations to customers, most jurisdictions require insurers to maintain at least a minimum amount, or standard, of capital to cover the gap. In particular, the legal minimum standard of capital that an insurer must maintain in order to be considered solvent by regulatory authorities is known as (<b>statutory / economic</b>) capital. From an insurer’s perspective, the parties that set the requirements for rating agency capital are considered to be (<b>internal / external</b>) to the insurer.</p>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "statutory / internal";
arrAnsChoices[1] = "statutory / external";
arrAnsChoices[2] = "economic / internal";
arrAnsChoices[3] = "economic / external";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 490712;
arrAnsIDs[1] = 490713;
arrAnsIDs[2] = 490714;
arrAnsIDs[3] = 490715;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 2;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">It is true that statutory capital is the legal minimum standard of capital that an insurer must maintain in order to be considered solvent by regulatory authorities. However, from an insurer’s perspective, the parties that set the requirements for rating agency capital are <b>external</b> to the insurer.</p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">The various forms of required capital generally are referred to as regulatory capital. Failure to meet the requirement for statutory capital signals impending insolvency.</p><p class=\"explanations\">Rating agency capital refers to the minimum standard of capital that an insurer must maintain in order to receive a favorable quality rating from a specific rating agency. Rating agency capital generally is higher than regulatory capital because it factors in profitability.</p><p class=\"explanations\">Economic capital, also known as internal capital, is an estimate of the amount of capital that an insurer calculates to internally manage its own risks. A typical value for the specified percentage is 99.5 percent. Economic capital is designed to cover unexpected obligations and adverse deviations in pricing assumptions. Economic capital usually is higher than rating agency capital and regulatory capital.</p><p class=\"explanations\"><b>Learning Objective: 2C. Differentiate between regulatory capital, rating agency capital, and economic capital.</b></p>";
arrAnswerFeedback[2] = "<p class=\"explanations\"><b>Statutory capital</b> is the legal minimum standard of capital that an insurer must maintain to be considered solvent by regulatory authorities. In addition, from an insurer’s perspective, the parties that set the requirements for rating agency capital are <b>external</b> to the insurer.</p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">It is true that, from an insurer’s perspective, the parties that set the requirements for rating agency capital are external to the insurer. However, <b>statutory capital</b> is the legal minimum standard of capital that an insurer must maintain to be considered solvent by regulatory authorities.</p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_371_PQ_012'] = objQuestion;


objQuestion = new Object();
objQuestion.strID = 'LOMA_371_PQ_013';
objQuestion.questionID = 121340;
objQuestion.item = 'LOMA_371_PPQ2021_013';
objQuestion.primaryLO = '2D';
objQuestion.textref = 'c. 2, p. 7';
objQuestion.textbook = 0;
objQuestion.chapter = 2;
objQuestion.module = 1;
var arrLOs = new Array();
arrLOs[0] = '2D';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">For this question, if answer choices (1) through (3) are all correct, select answer choice (4). Otherwise, select the one correct response.</p><p class=\"stem\">In the United States, life insurers must regularly demonstrate their solvency to state insurance regulators in jurisdictions in which they are licensed to sell their products. To monitor the financial condition of insurers, with assistance and guidance from the NAIC, regulators routinely use specific tools, which include</p>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "the Own Risk and Solvency Assessment (ORSA)";
arrAnsChoices[1] = "financial condition examinations";
arrAnsChoices[2] = "the Financial Analysis and Solvency Tracking (FAST) System";
arrAnsChoices[3] = "all of the above";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 490716;
arrAnsIDs[1] = 490717;
arrAnsIDs[2] = 490718;
arrAnsIDs[3] = 490719;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 4;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">It is true that the Own Risk and Solvency Assessment (ORSA) is a tool that regulators use to monitor the financial condition of insurers. However, this is <b>not</b> the correct answer choice.</p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">It is true that financial condition examinations are a tool that regulators use to monitor the financial condition of insurers. However, this is <b>not</b> the correct answer choice.</p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">It is true that the Financial Analysis and Solvency Tracking (FAST) System is a tool that regulators use to monitor the financial condition of insurers. However, this is <b>not</b> the correct answer choice.</p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">Regulators and state insurance departments also use risk-based capital (RBC) requirements, the Insurance Regulatory and Information System (IRIS), and Annual Statements to monitor insurance company solvency in the United States.</p><p class=\"explanations\"><b>Learning Objective: 2D. Identify tools regulators use to monitor insurer solvency and explain the role of risk-based capital.</b></p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_371_PQ_013'] = objQuestion;


objQuestion = new Object();
objQuestion.strID = 'LOMA_371_PQ_014';
objQuestion.questionID = 121341;
objQuestion.item = 'LOMA_371_PPQ2021_014';
objQuestion.primaryLO = '2E';
objQuestion.textref = 'c. 2, pp. 7-8';
objQuestion.textbook = 0;
objQuestion.chapter = 2;
objQuestion.module = 1;
var arrLOs = new Array();
arrLOs[0] = '2E';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">Contingency risks (C-risks) generally are separated into four categories to which insurers are exposed. The contingency risk that an insurer’s actual experience with specific factors—such as mortality rates, operating expenses, or policyholder behavior—will differ significantly from the actuarial assumptions used in the product’s financial design, causing the insurer to lose money on its products, is known as</p>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "asset risk (C-1 risk)";
arrAnsChoices[1] = "pricing risk (C-2 risk)";
arrAnsChoices[2] = "interest-rate risk (C-3 risk)";
arrAnsChoices[3] = "general management risk (C-4 risk)";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 490720;
arrAnsIDs[1] = 490721;
arrAnsIDs[2] = 490722;
arrAnsIDs[3] = 490723;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 2;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\"><b>Asset risk (C-1 risk)</b> is the risk that the insurer will lose money on its investments in stocks, bonds, mortgages, and real estate.</p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">The Risk-Based Capital for Insurers Model Act<i><b> </b></i>is an NAIC model law that establishes the risk-based capital (RBC) requirements and enables state insurance departments to identify potentially impaired insurers. These RBC requirements are used to determine the minimum capital level of an insurer and are based on the insurer’s size and risk profile, as identified by a specific risk-weighted formula.</p><p class=\"explanations\">In the United States, regulators have identified four officially recognized categories of contingency risks (C-risks) that are crucial to an insurer’s cash flows and that directly affect an insurer’s capital adequacy. This contingency risk classification system does not necessarily reflect how an individual company might classify, define, and prioritize all of its risks.</p><p class=\"explanations\">Insurers can control pricing risk (C-2 risk) by maintaining sound actuarial and underwriting practices, evaluating insurance risks conservatively, using reinsurance when appropriate, controlling their expenses, designing products sensibly, and conducting routine experience analysis on mortality, lapse, and interest rate assumptions.</p><p class=\"explanations\"><b>Learning Objective: 2E. Differentiate between the four contingency risks to which insurers are exposed and provide examples of each.</b></p>";
arrAnswerFeedback[2] = "<p class=\"explanations\"><b>Interest-rate risk (C-3 risk)</b> is the risk that unpredictable movements in market interest rates will cause an insurer’s assets to lose value or its liabilities to gain value.</p>";
arrAnswerFeedback[3] = "<p class=\"explanations\"><b>General management risk</b> <b>(C-4 risk)</b> is the risk of losses resulting from the insurer’s ineffective general business practices or from the need to pay a special assessment to cover another insurer’s unsound business practices.</p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_371_PQ_014'] = objQuestion;


objQuestion = new Object();
objQuestion.strID = 'LOMA_371_PQ_015';
objQuestion.questionID = 121342;
objQuestion.item = 'LOMA_371_PPQ2021_015';
objQuestion.primaryLO = '2F';
objQuestion.textref = 'c. 2, pp. 13-14';
objQuestion.textbook = 0;
objQuestion.chapter = 2;
objQuestion.module = 1;
var arrLOs = new Array();
arrLOs[0] = '2F';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">When an insurer becomes financially unsound, insurance regulators generally are authorized to intervene in the insurer’s operations to protect policyowner interests. In the United States, state laws prescribe the types of corrective action when an insurer’s financial soundness is impaired. When drastic regulatory action is required, state regulators may place the insurer in receivership. The two possible outcomes of receivership are</p>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "rehabilitation and administrative supervision";
arrAnsChoices[1] = "rehabilitation and liquidation";
arrAnsChoices[2] = "the company action level and administrative supervision";
arrAnsChoices[3] = "the company action level and liquidation";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 490724;
arrAnsIDs[1] = 490725;
arrAnsIDs[2] = 490726;
arrAnsIDs[3] = 490727;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 2;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">It is true that rehabilitation is a possible outcome of receivership. However, administrative supervision is <b>not</b> a possible outcome of receivership, but a type of corrective action taken before insolvency occurs. Administrative supervision is a legal condition under which an insurer may be required to obtain the insurance commissioner’s permission before taking any of a variety of specified actions.</p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">The company action level and administrative supervision are not possible outcomes of receivership, but are types of corrective actions taken before insolvency occurs. When more drastic regulatory action is required, state regulators either are authorized or mandated to place the insurer in receivership. In rehabilitation, regulators take over operation of the insolvent company from management and attempt to restore the company to solvent.</p><p class=\"explanations\">In liquidation, regulators either transfer all of the insurer’s business to other insurers or sell the insurer’s assets and terminate the insurer’s business. State guaranty associations provide insurers with financial support to protect customers of a failed insurer with continuation coverage. Many other countries have a national guaranty association.</p><p class=\"explanations\"><b>Learning Objective: 2F. Describe the remedies that regulators can apply when an insurer becomes financially impaired or insolvent.</b></p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">The company action level and administrative supervision are <b>not</b> possible outcomes of receivership, but are types of corrective actions taken before insolvency occurs. The company action level occurs when an insurer’s RBC ratio is within the 150-199% range. In this situation, the insurer must submit a confidential plan of action to the state of domicile, proposing corrections to its financial condition. Administrative supervision is a legal condition under which an insurer may be required to obtain the insurance commissioner’s permission before taking any of a variety of specified actions.</p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">It is true that liquidation is one possible outcome of placing an insurer in receivership. However, the company action level is <b>not</b> a possible outcome of receivership; this action occurs when an insurer’s RBC ratio is within the 150-199% range. In this situation, the insurer must submit a confidential plan of action to the state of domicile, proposing corrections to its financial condition.</p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_371_PQ_015'] = objQuestion;


objQuestion = new Object();
objQuestion.strID = 'LOMA_371_PQ_016';
objQuestion.questionID = 121343;
objQuestion.item = 'LOMA_371_PPQ2021_016';
objQuestion.primaryLO = '2G';
objQuestion.textref = 'c. 2, pp. 21-22';
objQuestion.textbook = 0;
objQuestion.chapter = 2;
objQuestion.module = 1;
var arrLOs = new Array();
arrLOs[0] = '2G';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">One type of risk that an insurer faces is the risk the insurer will not receive the cash flows to which it is entitled because a party with which the insurer has a financial arrangement is late with payments or entirely fails to fulfill its debt obligations. By definition, this type of risk is known as</p>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "market risk";
arrAnsChoices[1] = "currency risk";
arrAnsChoices[2] = "liquidity risk";
arrAnsChoices[3] = "default risk";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 490728;
arrAnsIDs[1] = 490729;
arrAnsIDs[2] = 490730;
arrAnsIDs[3] = 490731;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 4;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\"><b>Market risk</b> is the risk of losses or reduced investment returns caused by movements in overall market conditions or in a specific sector of the market.</p>";
arrAnswerFeedback[1] = "<p class=\"explanations\"><b>Currency risk</b>, also known as foreign exchange risk, is the risk arising from changes in currency exchange&nbsp;rates.</p>";
arrAnswerFeedback[2] = "<p class=\"explanations\"><b>Liquidity risk</b> is the risk that an asset might not be easily sold for its underlying value.</p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">Insurer solvency is linked directly to an insurer’s ability to manage the risks associated with its investments, pricing, business, and operations. Because insurers hold a large amount of debt securities in their general accounts, credit risk exposures are one of the main threats for insurer portfolios.</p><p class=\"explanations\">Credit risk is the risk that (1) a borrower defaults on debt obligations by failing to make payments of principal or interest on time, or (2) a lender sustains a financial loss based on an adverse change in a borrower’s creditworthiness. These two types of credit risk are known as default risk and downgrade risk.</p><p class=\"explanations\">Default risk affects all types of debt securities and affects corporate equity securities, which lose substantial market value if the issuing company defaults on its debt obligations and becomes insolvent. Downgrade risk involves the risk of deterioration in a credit rating assigned to an issuer of a debt security.</p><p class=\"explanations\">When an investment goes into default or is downgraded, its market value also decreases. A credit downgrade does not affect payments of principal or interest to investors. Typically, defaults cause larger market value drops than downgrades.</p><p class=\"explanations\"><b>Learning Objective: 2G. Describe the types of risks that insurers face—such as investment risk, pricing risk, business risk, and operational risk—and explain how each type of risk can affect insurer solvency.</b></p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_371_PQ_016'] = objQuestion;


objQuestion = new Object();
objQuestion.strID = 'LOMA_371_PQ_017';
objQuestion.questionID = 121344;
objQuestion.item = 'LOMA_371_PPQ2021_017';
objQuestion.primaryLO = '2G';
objQuestion.textref = 'c. 2, pp. 29-30';
objQuestion.textbook = 0;
objQuestion.chapter = 2;
objQuestion.module = 1;
var arrLOs = new Array();
arrLOs[0] = '2G';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">Insurers must face and manage many types of risks—including investment risk, pricing risk, business risk, and operational risk. Operational risk is challenging because one situation can affect multiple areas, such as marketing, product development, claim administration, information technology, customer service, and underwriting. Select the answer choice that best describes an example of the type of operational risk known as distribution risk.</p>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "The Lakeside Insurance Company experienced a business disruption and a significant financial loss after a home office employee inadvertently downloaded malware.";
arrAnsChoices[1] = "The Merry Insurance Company is concerned that its relative market position will be affected adversely by changes in industry structure or changes in industry standards for technology use.";
arrAnsChoices[2] = "The compensation structure at the Nonesuch Insurance Company lacks procedures to safeguard against churning, which may encourage the replacement of multiple insurance policies.";
arrAnsChoices[3] = "Profits on the Oleander Life Insurance Company’s new life insurance product were lower than assumed because product mortality rates were higher than the product model’s assumptions.";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 490732;
arrAnsIDs[1] = 490733;
arrAnsIDs[2] = 490734;
arrAnsIDs[3] = 490735;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 3;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">This answer choice does <b>not</b> describe distribution risk. <b>Cyber risk</b>, a type of operational risk, is the risk of a financial loss, business disruption, theft of proprietary information, or damage to the reputation of an organization caused by failure in a process, procedure, or technology involving interconnected systems.</p><p class=\"explanations\">Types of operational risk include strategy risk, reputation risk, human resources risk, business process risk, cyber risk, and fraud risk.</p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">This answer choice does <b>not</b> describe distribution risk. <b>Competition risk</b>, a type of business risk, is the risk that relative market position of an insurer, such as Merry, will be affected adversely by the actions of its direct competitors, changes in industry structure, or changes in standards for the use of technology.</p><p class=\"explanations\">Types of business risk include regulatory risk, competition risk, event risk, and geopolitical risk. Some companies also recognize industry risk as a type of business risk.</p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">Distribution risk, a type of operational risk, is the risk of financial losses resulting from activities and resources involved in making products available to customers. Given the crucial role distribution channels play in the insurance business, this risk can potentially threaten a company’s financial condition.</p><p class=\"explanations\">Types of operational risk include strategy risk, distribution risk, reputation risk, human resources risk, business process risk, cyber risk, and fraud risk.</p><p class=\"explanations\">The types of investment risk that have the greatest priority for life insurers are credit risk and market risk. Market risk can take many forms, including equity risk, inflation risk, interest-rate risk, reinvestment-rate risk, currency risk, foreign investment risk, and liquidity risk.</p><p class=\"explanations\"><b>Learning Objective: 2G. Describe the types of risks that insurers face—such as investment risk, pricing risk, business risk, and operational risk—and explain how each type of risk can affect insurer solvency.</b></p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">This answer choice does <b>not</b> describe distribution risk. One of the most significant pricing risks for life insurers, such as Oleander, is <b>mortality risk</b>, which is the risk that actual mortality—the incidence of death in a specified group of people—will differ from expectations. For life insurance, mortality risk is the likelihood that a person will die sooner than statistically expected; for annuities, it is the likelihood that a person will live longer than statistically expected.</p><p class=\"explanations\">Types of pricing risks include pricing risk (C-2 risk), underwriting risk, mortality risk, expense risk, and policyholder behavior risk.</p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_371_PQ_017'] = objQuestion;





var arrlotext = new Array(); 
arrlotext['2A'] = "2A. Explain why regulating contractual reserves and capital adequacy is important to an insurer’s solvency.";
arrlotext['2B'] = "2B. Differentiate between rules-based reserving and principles-based reserving for reserve valuation.";
arrlotext['2C'] = "2C. Differentiate between regulatory capital, rating agency capital, and economic capital.";
arrlotext['2D'] = "2D. Identify tools regulators use to monitor insurer solvency and explain the role of risk-based capital.";
arrlotext['2E'] = "2E. Differentiate between the four contingency risks to which insurers are exposed and provide examples of each.";
arrlotext['2F'] = "2F. Describe the remedies that regulators can apply when an insurer becomes financially impaired or insolvent.";
arrlotext['2G'] = "2G. Describe the types of risks that insurers face—such as investment risk, pricing risk, business risk, and operational risk—and explain how each type of risk can affect insurer solvency.";
