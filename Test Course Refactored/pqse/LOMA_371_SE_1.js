var intPassingScore = 70;
var randomize = 1;
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
var mediatype = 'Sample Exam';
var mediashort = 'PSE'; //use this in name of state status
var coursetype = 'pdf';

var quizname = "LOMA 371 Sample Examination, Module 1";
var coursename = 'LOMA 371';
var modulenumber = 1;
var title = "LOMA_371_PSE2021_M1";
var intNumPools = 1;
var numQ = 21;
var numTexts = 1;
var numChap = 4;
var duration = 42;
var arrTexts = new Array();
var arrNumChap = new Array();
arrTexts[0] = "Risk Management and Product Design for Insurance Companies, Third Edition (2020)";
arrNumChap[0] = 4;
var thisChap = '--';

objPool = new Object();
objPool.intSelectCount = 21;
objPool.formID = 2622;
objPool.formName = 'PSE2021_M1';
arrPoolQuestions = new Array();
arrPoolQuestions[0] = 'LOMA_371_SE_001';
arrPoolQuestions[1] = 'LOMA_371_SE_002';
arrPoolQuestions[2] = 'LOMA_371_SE_003';
arrPoolQuestions[3] = 'LOMA_371_SE_004';
arrPoolQuestions[4] = 'LOMA_371_SE_005';
arrPoolQuestions[5] = 'LOMA_371_SE_006';
arrPoolQuestions[6] = 'LOMA_371_SE_007';
arrPoolQuestions[7] = 'LOMA_371_SE_008';
arrPoolQuestions[8] = 'LOMA_371_SE_009';
arrPoolQuestions[9] = 'LOMA_371_SE_010';
arrPoolQuestions[10] = 'LOMA_371_SE_011';
arrPoolQuestions[11] = 'LOMA_371_SE_012';
arrPoolQuestions[12] = 'LOMA_371_SE_013';
arrPoolQuestions[13] = 'LOMA_371_SE_014';
arrPoolQuestions[14] = 'LOMA_371_SE_015';
arrPoolQuestions[15] = 'LOMA_371_SE_016';
arrPoolQuestions[16] = 'LOMA_371_SE_017';
arrPoolQuestions[17] = 'LOMA_371_SE_018';
arrPoolQuestions[18] = 'LOMA_371_SE_019';
arrPoolQuestions[19] = 'LOMA_371_SE_020';
arrPoolQuestions[20] = 'LOMA_371_SE_021';
objPool.arrPoolQuestions = arrPoolQuestions;
arrPools[0] = objPool;

arrQuestions['LOMA_371_SE_001'] = {
"strID": "LOMA_371_SE_001",
"questionID": 121440,
"item": "LOMA_371_PSE2021_001",
"primaryLO": "1A",
"textref": "c. 1, p. 2",
"textbook": 0,
"chapter": 1,
"module": 1,
"arrLOs": [ "1A" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">The two primary goals of any insurer are to ensure solvency and increase profitability. Two main threats to an insurer’s solvency are inadequate capital and inadequate liquidity. Capital generally is measured by comparing an insurer’s assets to its liabilities. The most significant <i>liability</i> for an insurer is its</p>",
"arrAnsChoices": [ "employee wages", "contractual reserves", "investments", "policy dividends" ],
"arrAnsIDs": [ 491125, 491126, 491127, 491128 ],
"intCR": 2,
"arrAnswerFeedback": [ "<p class=\"explanations\">Employee wages are <b>not</b> the most significant liability for an insurer.</p>", "<p class=\"explanations\">Capital is generally measured by comparing a company’s assets—the things of value the company owns—to its liabilities, which are its debts and future obligations. The most significant liability for an insurer is contractual reserves, which identifies the amount that, together with future premiums and investment income, an insurer estimates it will need to pay policy benefits as they come due.</p><p class=\"explanations\"><b>Learning Objective: 1A. Describe the strengths of strong solvency and strong profitability.</b></p>", "<p class=\"explanations\">Investments are <b>not</b> the most significant liability for an insurer.</p>", "<p class=\"explanations\">Policy dividends are <b>not</b> the most significant liability for an insurer.</p>" ]
}

arrQuestions['LOMA_371_SE_002'] = {
"strID": "LOMA_371_SE_002",
"questionID": 121441,
"item": "LOMA_371_PSE2021_002",
"primaryLO": "1B",
"textref": "c. 1, pp. 3-4",
"textbook": 0,
"chapter": 1,
"module": 1,
"arrLOs": [ "1B" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">The characteristics of a given investment transaction affect that investment’s potential risk and return. The following statements are about risk and return in investment transactions. Select the answer choice containing the correct statement.</p>",
"arrAnsChoices": [ "A long-term investment typically would have <i>higher</i> risk and a <i>lower</i> potential return than would an otherwise identical short-term investment.", "Owning an investment that pays returns in the investor’s domestic currency typically would have <i>higher</i> risk and a <i>higher</i> potential return than would owning an otherwise identical investment that pays returns in a foreign currency.", "A new product that has low initial costs would typically have <i>lower</i> risk and a <i>lower</i> potential return than would an otherwise identical new product that has high initial costs.", "Lending to a borrower with a good credit rating typically would have <i>lower</i> risk and a <i>higher</i> potential return than would lending to a borrower with unestablished&nbsp;credit." ],
"arrAnsIDs": [ 491129, 491130, 491131, 491132 ],
"intCR": 3,
"arrAnswerFeedback": [ "<p class=\"explanations\">A long-term investment typically would have higher risk and a <b>higher</b> potential return than would an otherwise identical short-term investment.</p>", "<p class=\"explanations\">Owning an investment that pay returns in the investor’s domestic currency typically would have <b>lower </b>risk and a <b>lower</b> potential return than would owning an otherwise identical investment that pays returns in a foreign currency.</p>", "<p class=\"explanations\">Generally, according to the risk-return trade-off, all other factors being equal, the greater the risk associated with an investment, the greater the potential return on the investment, and the lower the risk associated with an investment, the lower the potential return on the investment. In some cases, two comparable transactions potentially may offer the same return, but on average the higher-risk transaction offers lower returns overall due to the higher risk that the investor simply will not receive a return. </p><p class=\"explanations\"><b>Learning Objective:</b> <b>1B. Identify the characteristics of high-risk and low-risk investments.</b></p>", "<p class=\"explanations\">Lending to a borrower with a good credit rating typically would have lower risk and a <b>lower</b> potential return than would lending to a borrower with unestablished credit.</p>" ]
}

arrQuestions['LOMA_371_SE_003'] = {
"strID": "LOMA_371_SE_003",
"questionID": 121442,
"item": "LOMA_371_PSE2021_003",
"primaryLO": "1C",
"textref": "c. 1, p. 7",
"textbook": 0,
"chapter": 1,
"module": 1,
"arrLOs": [ "1C" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">One key method of establishing a risk management culture is by instituting the practice of (<b>risk&nbsp;mapping / enterprise risk management, or ERM</b>), which is a system that identifies and quantifies risks from both potential threats and potential opportunities and focuses on operations (<b>of&nbsp;one&nbsp;functional area / throughout an organization</b>).</p>",
"arrAnsChoices": [ "risk mapping / of one functional area", "risk mapping / throughout an organization", "ERM / of one functional area", "ERM / throughout an organization" ],
"arrAnsIDs": [ 491133, 491134, 491135, 491136 ],
"intCR": 4,
"arrAnswerFeedback": [ "<p class=\"explanations\">A risk map, also called a risk heat map, categorizes each risk identified for a particular operational or business process along two dimensions—(1) impact or significance and (2) likelihood. </p>", "<p class=\"explanations\">A risk map, also called a risk heat map, categorizes each risk identified for a particular operational or business process along two dimensions—(1) impact or significance and (2) likelihood. </p>", "<p class=\"explanations\">It is true that one key method of establishing a risk management culture is by instituting the practice of ERM, which is a system that identifies and quantifies risks from both potential threats and potential opportunities. However, ERM focuses on operations <b>throughout an organization</b>.</p>", "<p class=\"explanations\">Risk appetite defines a company’s long-term capacity for risk-taking. Risk tolerance usually is expressed as a company’s stated limits on risk-taking in specified categories. Under this two-tiered approach, risk appetite is a qualitative concept describing the company’s attitude toward risk, while risk tolerance becomes the quantitative expression of the company’s risk appetite.</p><p class=\"explanations\"><b>Learning Objective: 1C. Explain the relationship between a risk management culture and product development.</b></p>" ]
}

arrQuestions['LOMA_371_SE_004'] = {
"strID": "LOMA_371_SE_004",
"questionID": 121443,
"item": "LOMA_371_PSE2021_004",
"primaryLO": "1D",
"textref": "c. 1, p. 7",
"textbook": 0,
"chapter": 1,
"module": 1,
"arrLOs": [ "1D", "1E" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">The following statements are about an actuary’s roles and responsibilities within an insurance company. Three statements are true, and one statement is false. Select the answer choice containing the <B>FALSE </B>statement.</p>",
"arrAnsChoices": [ "Some of an actuary’s responsibilities are defined within the actuarial control cycle, which consists of defining the need, designing the solution, and monitoring the results.", "Risk actuaries specialize in risk management and are typically involved in a company’s enterprise risk management (ERM) processes.", "Because reserve valuation is necessary only for technical product design, actuaries do not typically have an interest in the insurer’s reserve valuation.", "Technical product design relies on averages and probabilities, and actuaries typically extrapolate those figures based on the law of large numbers." ],
"arrAnsIDs": [ 491137, 491138, 491139, 491140 ],
"intCR": 3,
"arrAnswerFeedback": [ "<p class=\"explanations\">This is a true statement; therefore, it is <b>not</b> the correct response. New product development begins with the first two steps. Once the product is on the market, the company can monitor the results, which is an ongoing step in the process. The cycle then repeats by defining a new need.</p>", "<p class=\"explanations\">This is a true statement; therefore, it is <b>not</b> the correct response. The majority of actuaries work in the insurance industry, either as employees or outside consultants. Some specialize in a specific function; others have a variety of responsibilities. Risk actuaries are a common type of actuaries.</p>", "<p class=\"explanations\">This is a false statement; therefore, it is the correct response. Reserve valuation is necessary for both risk management and technical product design. Actuaries do play a role in the process of valuation, or calculating the monetary value of a company’s assets, liabilities, and capital for accounting and financial reporting purposes. Valuation examines not only the resources that an insurance company has, but the resources that the company can be expected to need or earn in the future. Actuarial skills such as modeling are therefore critical to arriving at an accurate projection of a company’s future success.</p><p class=\"explanations\"><b>Learning Objectives</b>: <b>(1) 1D. Explain the actuary’s role in risk management and technical product design and differentiate between actuaries and data scientists; (2) 1E. Describe the actuarial control cycle.</b></p>", "<p class=\"explanations\">This is a true statement; therefore, it is <b>not</b> the correct response. Actuaries build mortality tables—one example of probabilities determined by the law of large numbers—by examining demographics on a large scale and recording the average mortality results by age, sex, risk class, and other factors. </p>" ]
}

arrQuestions['LOMA_371_SE_005'] = {
"strID": "LOMA_371_SE_005",
"questionID": 121444,
"item": "LOMA_371_PSE2021_005",
"primaryLO": "2A",
"textref": "c. 2, p. 4",
"textbook": 0,
"chapter": 2,
"module": 1,
"arrLOs": [ "2A" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">A specific National Association of Insurance Commissioners (NAIC) model law imposes minimum requirements on the size of insurance and annuity reserves and establishes guidelines insurers must follow when calculating their reserves. By definition, this NAIC model law is known as the</p>",
"arrAnsChoices": [ "Standard Valuation Law (SVL)", "Model Supervision Act", "Model Hazardous Condition Regulation", "Life and Health Insurance Guaranty Association Model Act" ],
"arrAnsIDs": [ 491141, 491142, 491143, 491144 ],
"intCR": 1,
"arrAnswerFeedback": [ "<p class=\"explanations\">Under the Standard Valuation Law, an insurer is required to submit an actuarial opinion annually to regulators. The Actuarial Opinion and Memorandum (AOM) is a formal asset-liability management report that consists of two separate documents: the actuarial opinion and the actuarial memorandum. By evaluating this opinion, regulators can ensure that all material aspects of an insurer’s financial reporting are accurate.</p><p class=\"explanations\"><b>Learning Objective: 2A. Explain why regulating contractual reserves and capital adequacy is important to an insurer’s solvency.</b></p>", "<p class=\"explanations\">The NAIC developed the Model Supervision Act, also known as the Administrative Supervision Model Act, to provide details about a state insurance department’s authority to require administrative supervision of an insurer</p>", "<p class=\"explanations\">The Model Hazardous Condition Regulation, a model law developed by the NAIC, describes the mandatory corrective actions an insurance commissioner can order an insurer to take to improve its financial condition.</p>", "<p class=\"explanations\">The Life and Health Insurance Guaranty Association Model Act enables the state guaranty association to provide protection to state residents who are holders of life insurance policies and annuities from an insolvent insurer.</p>" ]
}

arrQuestions['LOMA_371_SE_006'] = {
"strID": "LOMA_371_SE_006",
"questionID": 121445,
"item": "LOMA_371_PSE2021_006",
"primaryLO": "2C",
"textref": "c. 2, pp. 5-7",
"textbook": 0,
"chapter": 2,
"module": 1,
"arrLOs": [ "2C" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">One type of capital standard, which is determined internally by an insurer, is designed to cover unexpected obligations and adverse deviations in pricing assumptions. This capital standard, which is an estimate of the amount of capital that a financial institution calculates to internally manage its own risks, is known as the __________ standard.</p>",
"arrAnsChoices": [ "regulatory capital", "statutory capital", "rating agency capital", "economic capital" ],
"arrAnsIDs": [ 491145, 491146, 491147, 491148 ],
"intCR": 4,
"arrAnswerFeedback": [ "<p class=\"explanations\">Regulators require insurance companies to maintain specified levels of capital, over and above reserves, in order to continue conducting business. The various forms of required capital are generally referred to as <b>regulatory capital</b>.</p>", "<p class=\"explanations\"><b>Statutory capital</b> is the legal minimum standard of capital that an insurer must maintain in order to be considered solvent by the regulatory authorities.</p>", "<p class=\"explanations\"><b>Rating agency capital</b> refers to the minimum standard of capital that an insurer must maintain in order to receive a favorable quality rating from a specific rating agency. </p>", "<p class=\"explanations\">Three types of capital standards are regulatory capital, rating agency capital, and economic capital. Regulators determine regulatory capital externally. Rating agency capital is determined externally by rating agencies. The insurer determines economic capital internally. In determining economic capital, an insurer asks, “How much capital does our company need to hold in order to remain solvent, given our risk profile?” </p><p class=\"explanations\"><b>Learning Objective: 2C. Differentiate between regulatory capital, rating agency capital, and economic capital.</b></p>" ]
}

arrQuestions['LOMA_371_SE_007'] = {
"strID": "LOMA_371_SE_007",
"questionID": 121446,
"item": "LOMA_371_PSE2021_007",
"primaryLO": "2E",
"textref": "c. 2, pp. 7-9",
"textbook": 0,
"chapter": 2,
"module": 1,
"arrLOs": [ "2E" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">Risk-based capital (RBC) requirements are used to determine the minimum capital level of an insurer. RBC requirements are based on the insurer’s size and risk profile, as identified by a specific risk-weighted formula based on four types of contingency risks, or C-risks. One C-risk is pricing risk (C-2 risk). Insurers can control pricing risk (C-2 risk) by (<b>using reinsurance when appropriate / investing in safe assets</b>). The risk-weighted formula is used to determine a company’s risk-based capital (RBC) ratio. For an insurer, the (<b>lower / higher</b>) the RBC ratio, the better.</p>",
"arrAnsChoices": [ "using reinsurance when appropriate / lower", "using reinsurance when appropriate / higher", "investing in safe assets / lower", "investing in safe assets / higher" ],
"arrAnsIDs": [ 491149, 491150, 491151, 491152 ],
"intCR": 2,
"arrAnswerFeedback": [ "<p class=\"explanations\">It is true that insurers can control pricing risk (C-2 risk) by using reinsurance when appropriate. However, for an insurer, the <b>higher</b> the RBC ratio, the better.</p>", "<p class=\"explanations\">The RBC ratio is calculated by dividing the company’s total adjusted capital (TAC) by its required risk-based capital (RBC). A company with a 400% RBC ratio has four times as much total adjusted capital as risk-based capital.</p><p class=\"explanations\"><b>Learning Objective: 2E. Differentiate between the four contingency risks to which insurers are exposed and provide examples of each.</b></p>", "<p class=\"explanations\">Insurers can control pricing risk is by <b>using reinsurance when appropriate</b>. In addition, for an insurer, the <b>higher</b> the RBC ratio, the better.</p>", "<p class=\"explanations\">It is true that, for an insurer, the higher the RBC ratio, the better. However, insurers can control pricing risk is by <b>using reinsurance when appropriate</b>. </p>" ]
}

arrQuestions['LOMA_371_SE_008'] = {
"strID": "LOMA_371_SE_008",
"questionID": 121447,
"item": "LOMA_371_PSE2021_008",
"primaryLO": "2G",
"textref": "c. 2, pp. 21-22",
"textbook": 0,
"chapter": 2,
"module": 1,
"arrLOs": [ "2G" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">Brock Financial issued a loan to the Meadowview Corporation. Two years later, Meadowview filed for bankruptcy after failing to make a series of principal and interest payments on the loan. Because Meadowview was unable to pay the loan back in full, Brock suffered a financial loss, which affected its solvency. In this situation, Brock experienced the type of risk known as</p>",
"arrAnsChoices": [ "credit risk", "market risk", "policyholder behavior risk", "liquidity risk" ],
"arrAnsIDs": [ 491153, 491154, 491155, 491156 ],
"intCR": 1,
"arrAnswerFeedback": [ "<p class=\"explanations\">Credit risk is the risk that (1) a borrower defaults on debt obligations by failing to make payments of principal or interest on time, or (2) a lender sustains a financial loss based on an adverse change in a borrower’s creditworthiness. These two categories of credit risk are also known as default risk and downgrade risk.</p><p class=\"explanations\"><b>Learning Objective: 2G. Describe the types of risks that insurers face—such as investment risk, pricing risk, business risk, and operational risk—and explain how each type of risk can affect insurer solvency.</b></p>", "<p class=\"explanations\"><b>Market risk</b> is the risk of losses or reduced investment returns caused by movements in overall market conditions or in a specific sector of the market.</p>", "<p class=\"explanations\"><b>Policyholder behavior risk</b>, or customer behavior risk, is the risk that individual policyholder actions or decisions will adversely affect product performance.</p>", "<p class=\"explanations\"><b>Liquidity risk</b> is the risk that an asset might not be easily sold for its underlying value.</p>" ]
}

arrQuestions['LOMA_371_SE_009'] = {
"strID": "LOMA_371_SE_009",
"questionID": 121448,
"item": "LOMA_371_PSE2021_009",
"primaryLO": "3A",
"textref": "c. 3, pp. 3-4",
"textbook": 0,
"chapter": 3,
"module": 1,
"arrLOs": [ "3A" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">The Chetola Life Insurance Company processed an application for life insurance covering a proposed insured who represents a higher-than-average risk. Chetola approved the application because it meets company insurability standards, but Chetola charged the proposed insured a higher premium rate than it would have charged an applicant who represented an average or a lower-than-average risk. With regard to the five basic risk management strategies, by approving the application, but charging the proposed insured a higher premium rate, Chetola is</p>",
"arrAnsChoices": [ "avoiding risk and transferring risk", "accepting risk and transferring risk", "accepting risk and controlling risk", "controlling risk and exploiting risk" ],
"arrAnsIDs": [ 491157, 491158, 491159, 491160 ],
"intCR": 3,
"arrAnswerFeedback": [ "<p class=\"explanations\">Chetola did not avoid risk by rejecting this insurance application; rather, it approved this life insurance application because it <b>meets</b> company insurability standards.</p><p class=\"explanations\">In addition, transferring risk involves shifting the financial responsibility associated with that risk to another party. Insurers also can transfer their risk under insurance and annuity contracts by purchasing reinsurance<i>.</i> Chetola did <b>not</b> shift financial responsibility to another party or purchase reinsurance.</p>", "<p class=\"explanations\">It is true that Chetola accepted risk when it approved the application. However, transferring risk involves shifting the financial responsibility associated with that risk to another party. Insurers also can transfer their risk under insurance and annuity contracts by purchasing reinsurance<i>.</i> Chetola did <b>not</b> shift financial responsibility to another party or purchase reinsurance.</p>", "<p class=\"explanations\">By approving the life insurance application, Chetola is accepting the risk and assuming financial responsibility for the risk exposure represented by the proposed insured. Chetola also is controlling the risk—mitigating the potential losses from the risk exposure—by charging the applicant a higher premium rate than it would charge a similar applicant who represents an average or a lower-than-average risk.</p><p class=\"explanations\"><b>Learning Objective: 3A. Describe five basic risk management strategies and provide examples of each.</b></p>", "<p class=\"explanations\">It is true that Chetola controlled risk when it charged a higher premium rate than it would charge a similar applicant who represents an average or a lower-than-average risk. However, exploiting risk involves taking advantage of an opportunity presented by a risk, such as an insurer’s use of a competitive advantage to develop a new product that satisfies a customer need.</p>" ]
}

arrQuestions['LOMA_371_SE_010'] = {
"strID": "LOMA_371_SE_010",
"questionID": 121449,
"item": "LOMA_371_PSE2021_010",
"primaryLO": "3B",
"textref": "c. 3, p. 7",
"textbook": 0,
"chapter": 3,
"module": 1,
"arrLOs": [ "3B" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">The three lines of defense approach is a comprehensive, systematic approach to enhancing communication on risk management and controls by assigning clear responsibilities and roles to three key components. The following statements are about the three lines of defense. Three statements are true, and one statement is false. Select the answer choice containing the <B>FALSE</B> statement.</p>",
"arrAnsChoices": [ "Operational managers are responsible for internal monitoring and oversight functions and provide a high level of independence and objectivity.", "A risk committee and compliance personnel oversee risks throughout the company and ensure that controls are being properly managed.", "Internal auditors provide independent assurance to the board of directors and senior management on the effectiveness of the company’s governance, internal controls, and its risk management practices.", "Every insurer should aim to employ some variation of the three lines of defense, regardless of its size or risk approach." ],
"arrAnsIDs": [ 491161, 491162, 491163, 491164 ],
"intCR": 1,
"arrAnswerFeedback": [ "<p class=\"explanations\">This is a false statement; therefore, it is the correct response. Operational Management (the first line of defense) consists of managers who identify and assess risk within their unit on a day-to-day basis, ensure controls are in place, and take corrective actions when needed. Risk Management and Compliance (the second line of defense) consists of internal monitoring and oversight functions that ensure risks and controls are properly managed by operational managers in the first line of defense. Internal Audit (the third line of defense) also provides assurance on the level of performance achieved for the first two lines of defense. Together, the three lines of defense form a comprehensive risk management approach.</p><p class=\"explanations\"><b>Learning Objective: 3B. Describe the risk management approach known as the three lines of defense.</b></p>", "<p class=\"explanations\">This is a true statement; therefore, it is <b>not </b>the correct response. At the heart of most insurance companies’ internal control system is a cross-functional risk committee, which reports to the board of directors. The risk committee is a key part of the second line of defense.</p>", "<p class=\"explanations\">This is a true statement; therefore, it is <b>not </b>the correct response. Internal Audit is the third line of defense, which differs from the other two levels in its high level of independence and objectivity.</p>", "<p class=\"explanations\">This is a true statement; therefore, it is <b>not </b>the correct response. Risk management is vital to an insurer’s overall success. Generally, effective risk management programs have an established governance structure, a risk taxonomy, and a system of internal controls. When combined, these practices contribute to a risk management approach called the three lines of defense.</p>" ]
}

arrQuestions['LOMA_371_SE_011'] = {
"strID": "LOMA_371_SE_011",
"questionID": 121450,
"item": "LOMA_371_PSE2021_011",
"primaryLO": "3C",
"textref": "c. 3, pp. 8-9",
"textbook": 0,
"chapter": 3,
"module": 1,
"arrLOs": [ "3C" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">Three key elements of an insurer’s risk management program are governance, risk taxonomy, and internal controls. Select the answer choice that best describes a company’s use of an approach for the <i>governance </i>of its risk management function.</p>",
"arrAnsChoices": [ "Derocha Insurance created a comprehensive list of all of its key risk exposures and classified all of the risks based on each risk’s core, defining characteristics.", "Goshen Financial, a large U.S. insurer, expanded its risks into several subcategories, creating a hierarchical structure of risks, which allowed Goshen to study relationships between risks.", "Bechard Insurance utilizes a risk committee, a compliance function, and internal audits to encourage adherence to its policies, promote operating efficiency, and safeguard its assets.", "Tyner Financial, a large U.S. insurer, employed a chief risk officer (CRO) and a large staff, reporting to the CRO, who is responsible for all of Tyner’s risk management activities." ],
"arrAnsIDs": [ 491165, 491166, 491167, 491168 ],
"intCR": 4,
"arrAnswerFeedback": [ "<p class=\"explanations\">This example describes an insurer’s use of the approach for establishing a <b>risk taxonomy</b>. With the evolving nature of risk, each insurer must be able to create a comprehensive list of all of its key risk exposures, including emerging nonfinancial risks.</p>", "<p class=\"explanations\">This example describes a company’s use of the approach for establishing a <b>risk taxonomy</b>. With the evolving nature of risk, each insurer must be able to create a comprehensive list of all of its key risk exposures, including emerging nonfinancial risks.</p>", "<p class=\"explanations\">This example describes an insurer’s use of the approach for establishing <b>internal controls</b>. Proper internal control helps ward off potential misconduct and establishes accountability for compliance throughout the company. </p>", "<p class=\"explanations\">Governance refers to the combination of people, rules, controls, and policies put in place to provide oversight and direction for a company’s operations and actions. A governance structure provides guidance so that the company can achieve its strategic objectives. Under one approach, typically used by large insurers, an insurer employs a chief risk officer (CRO), who, along with a large staff, is responsible for all of the insurer’s risk management activities. </p><p class=\"explanations\"><b>Learning Objective: 3C. Explain how insurers use governance, a risk taxonomy, internal controls, and the three lines of defense to manage risk.</b></p>" ]
}

arrQuestions['LOMA_371_SE_012'] = {
"strID": "LOMA_371_SE_012",
"questionID": 121451,
"item": "LOMA_371_PSE2021_012",
"primaryLO": "3D",
"textref": "c. 3, pp. 14-16",
"textbook": 0,
"chapter": 3,
"module": 1,
"arrLOs": [ "3D" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">A risk management framework is a set of components and principles that supports risk management throughout an organization. Published in 2009 and updated in 2018, the (<b>ISO&nbsp;31000&nbsp;standard / ORSA ERM framework</b>) lists eight principles of risk management believed to be crucial for a company to successfully manage its risk exposures. The (<b>ISO&nbsp;31000&nbsp;standard / ORSA ERM framework</b>) requires each insurer to evaluate its risk management framework on an annual basis.</p>",
"arrAnsChoices": [ "ISO 31000 standard / ISO 31000 standard", "ISO 31000 standard / ORSA ERM framework", "ORSA ERM framework / ISO 31000 standard", "ORSA ERM framework / ORSA ERM framework" ],
"arrAnsIDs": [ 491169, 491170, 491171, 491172 ],
"intCR": 2,
"arrAnswerFeedback": [ "<p class=\"explanations\">It is true that the ISO 31000 standard lists eight principles of risk management believed to be crucial for a company to successfully manage its risk exposures. However, the <b>ORSA ERM framework</b> requires each insurer to evaluate its risk management framework on an annual basis.</p>", "<p class=\"explanations\">Three of the most well known risk management frameworks are the ORSA ERM framework, the COSO ERM framework, and the ISO 31000 standard. The ISO 31000 standard lists eight principles of risk management believed to be crucial for a company to successfully manage its risk exposures.</p><p class=\"explanations\">ORSA requires each insurer to evaluate its risk management framework on an annual basis. In the first section of the Own Risk Solvency Assessment (ORSA)<i> </i>Summary Report, an insurer lists ORSA’s five risk management framework<i> </i>principles, and describes how the insurer identifies, evaluates, and mitigates its material risk exposures. Neither the COSO ERM framework nor the ISO 31000 standard requires an insurer to evaluate its risk management framework on an annual basis (each is voluntary).</p><p class=\"explanations\"><b>Learning Objective: 3D. Describe the components of an effective enterprise risk management (ERM) program, including a risk management culture, strategic risk management, a risk control process, a risk management framework, and catastrophic event management.</b></p>", "<p class=\"explanations\">The <b>ISO 31000 standard</b> lists eight principles of risk management believed to be crucial for a company to successfully manage its risk exposures. In addition, the <b>ORSA ERM framework</b> requires each insurer to evaluate its risk management framework on an annual basis.</p>", "<p class=\"explanations\">It is true that the ORSA ERM framework requires each insurer to evaluate its risk management framework on an annual basis. However, the <b>ISO 31000 standard</b> lists eight principles of risk management believed to be crucial for a company to successfully manage its risk exposures.</p>" ]
}

arrQuestions['LOMA_371_SE_013'] = {
"strID": "LOMA_371_SE_013",
"questionID": 121452,
"item": "LOMA_371_PSE2021_013",
"primaryLO": "3F",
"textref": "c. 3, pp. 18-19",
"textbook": 0,
"chapter": 3,
"module": 1,
"arrLOs": [ "3F" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">Asset-liability management (ALM) consists of a portfolio approach to managing the risks associated with a company’s assets and liabilities. ALM involves four primary portfolio risk management strategies or approaches. When insurers carefully spread their investment selections among the securities of different issuers in different business categories, they are engaging in the ALM practice known as</p>",
"arrAnsChoices": [ "duration matching", "cash-flow matching", "hedging", "diversification" ],
"arrAnsIDs": [ 491173, 491174, 491175, 491176 ],
"intCR": 4,
"arrAnswerFeedback": [ "<p class=\"explanations\"><b>Duration matching</b> is a risk management strategy that involves matching the duration statistics for fixed-income assets such as bonds with the duration statistics for the insurance company liabilities that the assets support.</p>", "<p class=\"explanations\"><b>Cash-flow matching</b> is a risk management strategy that involves identifying the patterns of cash outflows for insurance products and matching those cash outflows with a selection of assets that will produce a similar pattern of cash inflows.</p>", "<p class=\"explanations\">Insurers often use <b>hedging</b>, or counterbalance risks in some assets by holding other assets with offsetting risk characteristics. </p>", "<p class=\"explanations\">Diversification is a risk management strategy for spreading risk by investing in different assets having different risk profiles. To diversify their investments, insurers carefully spread their investment selections among the securities of different issuers in different business categories. Diversification is effective in controlling diversifiable risk, especially asset concentration risk. </p><p class=\"explanations\"><b>Learning Objective: 3F. Define portfolio risk management strategies—such as diversification, hedging, cash-flow matching, and duration matching—and explain their use.</b></p>" ]
}

arrQuestions['LOMA_371_SE_014'] = {
"strID": "LOMA_371_SE_014",
"questionID": 121453,
"item": "LOMA_371_PSE2021_014",
"primaryLO": "3G",
"textref": "c. 3, pp. 26-27",
"textbook": 0,
"chapter": 3,
"module": 1,
"arrLOs": [ "3G" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">One of the most popular methods insurers use to manage operating expenses and improve operating efficiency is to benchmark company operations. Benchmarking is best described as</p>",
"arrAnsChoices": [ "using quantitative metrics that indicate the level of operational risk exposures at a given point of time in order to help companies forecast future occurrences", "eliminating nonessential jobs within an organization to help eliminate expenses", "hiring an external vendor to perform specified operations or functions", "identifying the best outcomes that other companies have achieved, and the practices that produced those outcomes, and implementing those practices internally" ],
"arrAnsIDs": [ 491177, 491178, 491179, 491180 ],
"intCR": 4,
"arrAnswerFeedback": [ "<p class=\"explanations\">A <b>key risk indicator (KRI)</b> is a quantitative metric that indicates the level of operational risk exposures at a given point of time in order to help companies forecast future occurrences.</p>", "<p class=\"explanations\">One way to eliminate expenses is through <b>rightsizing</b>, also known as downsizing, which is the elimination of nonessential jobs within an organization.</p>", "<p class=\"explanations\"><b>Outsourcing</b> is the practice of hiring an external vendor to perform specified operations or functions.</p>", "<p class=\"explanations\">Benchmarking consists of (1) identifying the best outcomes that other companies have achieved for a specific activity or process and the practices that produced those outcomes and (2) implementing the best practices to equal or surpass the best outcomes. In effect, benchmarking allows companies to improve operations without reinventing the wheel.</p><p class=\"explanations\"><b>Learning Objective: 3G. Explain how insurers can eliminate or reduce expense risk through outsourcing certain functions and benchmarking.</b></p>" ]
}

arrQuestions['LOMA_371_SE_015'] = {
"strID": "LOMA_371_SE_015",
"questionID": 121454,
"item": "LOMA_371_PSE2021_015",
"primaryLO": "4A",
"textref": "c. 4, pp. 3, 9-10",
"textbook": 0,
"chapter": 4,
"module": 1,
"arrLOs": [ "4A" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">With regard to the use of financial models, it is correct to say that</p>",
"arrAnsChoices": [ "estimating future cash inflows is not a practical use of financial models", "the goal of financial modeling is to test a scenario by extrapolating a single outcome", "only a substantial change in an assumption’s value can result in significant changes in the model’s results", "an insurer’s long-term financial success relies on the ability to estimate the future behavior of key risk factors, such as mortality or investment performance, over a product’s lifetime" ],
"arrAnsIDs": [ 491181, 491182, 491183, 491184 ],
"intCR": 4,
"arrAnswerFeedback": [ "<p class=\"explanations\">Financial models forecast a company’s or product’s future financial performance using historical data and assumptions about the future. Therefore, estimating future cash inflows <b>is</b> <b>a practical use</b> of financial models.</p>", "<p class=\"explanations\">The goal of financial modeling is to test a scenario by extrapolating <b>multiple outcomes</b> as variables change, determining the most probable outcomes so that the insurer can plan for them accordingly.</p>", "<p class=\"explanations\">The accuracy of the assumptions and inputs used in financial models directly affect the success or failure of new and existing products. <b>Even a small change</b> in an assumption’s value can result in significant changes in the model’s results.</p>", "<p class=\"explanations\">Poor assumptions and ineffective models can lead to problems in risk management and product development—in particular, the technical product design phase, where most financial modeling occurs. An insurer’s long-term financial success relies on the ability to estimate the future behavior of key risk factors, such as mortality or investment performance, over the lifetime of insurance and annuity products.</p><p class=\"explanations\"><b>Learning Objective: 4A. Identify and describe the four primary components of financial models.</b></p>" ]
}

arrQuestions['LOMA_371_SE_016'] = {
"strID": "LOMA_371_SE_016",
"questionID": 121455,
"item": "LOMA_371_PSE2021_016",
"primaryLO": "4A",
"textref": "c. 4, pp. 3-5",
"textbook": 0,
"chapter": 4,
"module": 1,
"arrLOs": [ "4A", "4B" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">The Copley Insurance Company is modeling the effect of investment earnings on the interest-crediting rate for a proposed annuity. As investment earnings increase, the interest-crediting rate increases. In this model, the interest-crediting rate is an example of an (<b>input / output</b>) and is (<b>a&nbsp;dependent / an independent</b>) variable.</p>",
"arrAnsChoices": [ "input / a dependent", "input / an independent", "output / a dependent", "output / an independent" ],
"arrAnsIDs": [ 491185, 491186, 491187, 491188 ],
"intCR": 3,
"arrAnswerFeedback": [ "<p class=\"explanations\">It is true that the interest-crediting rate is a dependent variable in this model. However, the interest-crediting rate also is an <b>output</b> in this model.</p>", "<p class=\"explanations\">The interest-crediting rate is both an <b>output</b> and a <b>dependent variable</b> in this model<b>.</b></p>", "<p class=\"explanations\">The outputs of financial models represent the projected future values produced by processing inputs—the independent variables—through the model. Changes in an independent variable, which in this case is the investment earnings, influence the behavior of a dependent variable—a variable that reacts to changes in other variables—which in this case is the interest-crediting rate.</p><p class=\"explanations\"><b>Learning Objectives: (1) 4A. Identify and describe the four primary components of financial models; (2) 4B. Describe the role of variables in financial modeling.</b></p>", "<p class=\"explanations\">It is true that the interest-crediting rate is an output in this model. However, the interest-crediting rate also is a <b>dependent variable</b> in this model<b>.</b></p>" ]
}

arrQuestions['LOMA_371_SE_017'] = {
"strID": "LOMA_371_SE_017",
"questionID": 121456,
"item": "LOMA_371_PSE2021_017",
"primaryLO": "4C",
"textref": "c. 4, pp. 6-7",
"textbook": 0,
"chapter": 4,
"module": 1,
"arrLOs": [ "4C" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">Companies use fixed, dynamic, or stochastic assumptions to represent unknown future values within the context of product pricing, product reserving, and other modeling applications for life insurance and annuity products. The following statements are about the use of fixed, dynamic, and stochastic assumptions. Select the answer choice containing the correct statement.</p>",
"arrAnsChoices": [ "Actuaries use fixed assumptions to model policyholder behavior with regard to lapse rates and surrender rates.", "Dynamic assumptions are variables that are selected randomly from a specified statistical distribution applied across multiple simulations or scenarios.", "Stochastic assumptions are variables for which actuaries assign a specific value or proportional relationship, and the value or proportion remains unchanged.", "Insurers can use stochastic assumptions to model unknown future quantities, as well as to measure the sensitivity of an assumption to the model’s result." ],
"arrAnsIDs": [ 491189, 491190, 491191, 491192 ],
"intCR": 4,
"arrAnswerFeedback": [ "<p class=\"explanations\">Actuaries use <b>dynamic assumptions</b> to model policyholder behavior with regard to lapse rates and surrender rates, flexible premium payments, and utilization of optional benefits.</p>", "<p class=\"explanations\"><b>Stochastic assumptions </b>are variables that are selected randomly from a specified statistical distribution applied across multiple simulations or scenarios.</p>", "<p class=\"explanations\"><b>Fixed assumptions</b>, also known as<i> </i>constants, are variables for which actuaries assign a specific value or proportional relationship, and the value or proportion remains unchanged throughout multiple iterations of a model. Fixed assumptions typically are fixed by policy or contract terms, or are dictated by regulation.</p>", "<p class=\"explanations\">Stochastic assumptions are used when assumptions are unknown and cannot be easily modeled using a dynamic formula. Some assumptions are unknown because a product is new or contains new features with which an insurer has no experience. Other times, assumptions are unknown because they are based on factors that are completely outside the control of the insurer, such as assumptions about market interest rates and equity market returns. Insurers can use stochastic assumptions to model unknown future quantities, as well as to measure the sensitivity of an assumption to the model’s result.</p><p class=\"explanations\">Within any model, a company may use combinations of fixed, dynamic, and stochastic assumptions. In addition, actuaries must decide which assumptions will be represented by variables and which assumptions will be fixed by the model’s software.</p><p class=\"explanations\"><b>Learning Objective: 4C. Distinguish between fixed, dynamic, and stochastic assumptions.</b></p>" ]
}

arrQuestions['LOMA_371_SE_018'] = {
"strID": "LOMA_371_SE_018",
"questionID": 121457,
"item": "LOMA_371_PSE2021_018",
"primaryLO": "4D",
"textref": "c. 4, pp. 8-9",
"textbook": 0,
"chapter": 4,
"module": 1,
"arrLOs": [ "4D" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">Actuaries use data from experience studies to help them determine the appropriate input to use in a model and to test the model’s assumptions against past experience. The following statements are about the use of experience studies. Select the answer choice containing the correct statement.</p>",
"arrAnsChoices": [ "Typically, an experience study focuses on specific subsets of customers, such as studying mortality rates among groups selected by age, sex, or smoking status.", "Outcomes derived from experience data may fall outside the range of real-world observation.", "An experience study is a form of technical analysis that projects the future movement of specified variables based on historical patterns.", "Experience data can be used to accurately predict how variables will behave if future conditions do not follow historical trends." ],
"arrAnsIDs": [ 491193, 491194, 491195, 491196 ],
"intCR": 1,
"arrAnswerFeedback": [ "<p class=\"explanations\">Insurer records and systems maintain a large amount of experience data about the past behavior of factors such as mortality rates and expenses. Insurers also have access to external experience data published in experience studies. Insurance industry and company experience studies address observed trends in mortality rates, lapse rates, product expenses, product persistency, and policyholder behavior.</p><p class=\"explanations\"><b>Learning Objective: 4D. Explain how insurers use experience data and estimates of future conditions, including trend analysis and futures studies.</b></p>", "<p class=\"explanations\">Unlike the outcomes derived from experience data, outcomes derived from <b>estimated future values </b>may fall outside the range of real-world observation.</p>", "<p class=\"explanations\"><b>Trend analysis</b> is a form of technical analysis that projects the future movement of specified variables based on historical patterns. An experience study<i><b> </b></i>is a compilation of data representing company or industry-wide historical experience with a specified modeling variable.</p>", "<p class=\"explanations\">Experience data can provide insurers with valuable information about how financial variables behaved in the past and how they can be expected to behave in the future, if conditions remain stable. One limitation of experience data is that such data <b>cannot </b>accurately predict how variables will behave if future conditions do not follow historical trends.</p>" ]
}

arrQuestions['LOMA_371_SE_019'] = {
"strID": "LOMA_371_SE_019",
"questionID": 121458,
"item": "LOMA_371_PSE2021_019",
"primaryLO": "4E",
"textref": "c. 4, pp. 9-10",
"textbook": 0,
"chapter": 4,
"module": 1,
"arrLOs": [ "4E" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">Insurers must be careful to use high-quality data to receive accurate results, rather than selecting data that implies the most favorable result for the insurer. With regard to data quality, by definition, (<b>accuracy / relevance</b>) is the degree to which data correctly describes the real-world phenomena they are designed to measure, and (<b>interpretability / coherence</b>) represents the degree to which the data can be successfully integrated with other statistical information over time.</p>",
"arrAnsChoices": [ "accuracy / interpretability", "accuracy / coherence", "relevance / interpretability", "relevance / coherence" ],
"arrAnsIDs": [ 491197, 491198, 491199, 491200 ],
"intCR": 2,
"arrAnswerFeedback": [ "<p class=\"explanations\">It is true that, with regard to data quality, by definition, accuracy is the degree to which data correctly describes the real-world phenomena they are designed to measure. However, data <b>interpretability</b> is the ease with which data can be correctly interpreted.</p>", "<p class=\"explanations\">A model’s outputs are only as good as the inputs and assumptions that go into it. Ideally, data used in financial modeling should have all the attributes of quality data. In reality, trade-offs are often necessary. For example, new products have no existing data from which to draw assumptions, and an insurer must determine which data from other existing products would meet the required quality standards.</p><p class=\"explanations\"><b>Learning Objective: 4E. Describe the factors that affect the quality of model inputs.</b></p>", "<p class=\"explanations\">Data <b>relevance</b> is the degree to which information derived through data analysis meets the needs of users. In addition, data <b>interpretability</b> is the ease with which data can be correctly interpreted.</p>", "<p class=\"explanations\">It is true that, with regard to data quality, coherence<b> </b>represents the degree to which the data can be successfully integrated with other statistical information over time. However, data <b>relevance</b> is the degree to which information derived through data analysis meets the needs of users. </p>" ]
}

arrQuestions['LOMA_371_SE_020'] = {
"strID": "LOMA_371_SE_020",
"questionID": 121459,
"item": "LOMA_371_PSE2021_020",
"primaryLO": "4F",
"textref": "c. 4, pp. 13-16",
"textbook": 0,
"chapter": 4,
"module": 1,
"arrLOs": [ "4F" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">Deterministic modeling and stochastic modeling are two financial modeling approaches that insurance companies can use to help them explore possibilities and describe potential future outcomes. With regard to these modeling approaches, it most likely is correct to say that</p>",
"arrAnsChoices": [ "deterministic models require running thousands of iterations of the model in order to produce thousands of results in the form of scenarios", "deterministic models produce results that are accompanied by assessments of probability and&nbsp;risk", "stochastic models focus on finding a single optimum solution to several simultaneous equations", "stochastic models produce output data that can be described in the form of a probability distribution" ],
"arrAnsIDs": [ 491201, 491202, 491203, 491204 ],
"intCR": 4,
"arrAnswerFeedback": [ "<p class=\"explanations\">In <b>stochastic</b> models, also known as probabilistic models, an automatic process randomly assigns values to specified input data to create a large number of scenarios, conduct numerous process iterations as needed, and produce output data in the form of a probability distribution.</p>", "<p class=\"explanations\">The output data of <b>stochastic</b> models, also known as probabilistic models, is produced in the form of a probability distribution, indicating how likely certain results are to occur, which allows an insurer to better analyze risk.</p>", "<p class=\"explanations\">The output data of stochastic models, also known as probabilistic models, consists of <b>multiple</b> values arranged in a probability distribution. <b>Optimization</b> models focus on finding an optimum solution to several simultaneous equations. </p>", "<p class=\"explanations\">In stochastic modeling, also known as probabilistic modeling, an automatic process randomly assigns values to specified input data, thus creating a large number of scenarios. Numerous process iterations are conducted as needed. The data output could then be described in the form of a probability distribution. </p><p class=\"explanations\"><b>Learning Objective: 4F. Describe and distinguish between the modeling approaches of deterministic, stochastic, and optimization modeling.</b></p>" ]
}

arrQuestions['LOMA_371_SE_021'] = {
"strID": "LOMA_371_SE_021",
"questionID": 121460,
"item": "LOMA_371_PSE2021_021",
"primaryLO": "4G",
"textref": "c. 4, pp. 19-20",
"textbook": 0,
"chapter": 4,
"module": 1,
"arrLOs": [ "4G" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">Individual data values in a normal distribution, which is the most common form of probability distribution, are dispersed around the mean so that approximately</p>",
"arrAnsChoices": [ "68.27 percent of the data fall within <i>one</i> standard deviation on either side of the mean", "68.27 percent of the data fall within <i>two</i> standard deviations on either side of the mean", "95.45 percent of the data fall within <i>one</i> standard deviation on either side of the mean", "95.45 percent of the data fall within <i>three </i>standard deviations on either side of the mean" ],
"arrAnsIDs": [ 491205, 491206, 491207, 491208 ],
"intCR": 1,
"arrAnswerFeedback": [ "<p class=\"explanations\">A normal distribution, also known as a normal probability distribution, is one in which the number of values that are less than the mean is the same as the number of values greater than the mean, and in which the values are dispersed in a specific proportion. When plotted on a graph, the data values in a normal distribution form a bell-shaped curve called a normal curve, also known as a normal distribution curve. Normal distributions are symmetrical. The midpoint of the curve is the mean.</p><p class=\"explanations\">Individual data values in a normal distribution are dispersed around the mean so that approximately 68.27 percent of the data fall within one standard deviation on either side of the mean, 95.45 percent of the data fall within two standard deviations on either side of the mean, and 99.73 percent of the data fall within three<i> </i>standard deviations on either side of the mean.</p><p class=\"explanations\"><b>Learning Objective: 4G. Explain how insurers interpret model outputs such as point estimates, range estimates, and probability distributions.</b></p>", "<p class=\"explanations\">Individual data values in a normal distribution are dispersed around the mean so that approximately <b>95.45</b> percent of the data fall within two standard deviations on either side of the mean.</p>", "<p class=\"explanations\">Individual data values in a normal distribution are dispersed around the mean so that approximately 95.45 percent of the data fall within <b>two</b> standard deviations on either side of the mean.</p>", "<p class=\"explanations\">Individual data values in a normal distribution are dispersed around the mean so that approximately<b> </b>95.45 percent of the data fall within <b>two</b> standard deviations on either side of the mean, and <b>99.73</b> percent of the data fall within three<i> </i>standard deviations on either side of the mean.</p>" ]
}




var arrlotext = new Array(); 
arrlotext['1A'] = "1A. Describe the strengths of strong solvency and strong profitability.";
arrlotext['1B'] = "1B. Identify the characteristics of high-risk and low-risk investments.";
arrlotext['1C'] = "1C. Explain the relationship between a risk management culture and product development.";
arrlotext['1D'] = "1D. Explain the actuary’s role in risk management and technical product design and differentiate between actuaries and data scientists.";
arrlotext['1E'] = "1E. Describe the actuarial control cycle.";
arrlotext['2A'] = "2A. Explain why regulating contractual reserves and capital adequacy is important to an insurer’s solvency.";
arrlotext['2C'] = "2C. Differentiate between regulatory capital, rating agency capital, and economic capital.";
arrlotext['2E'] = "2E. Differentiate between the four contingency risks to which insurers are exposed and provide examples of each.";
arrlotext['2G'] = "2G. Describe the types of risks that insurers face—such as investment risk, pricing risk, business risk, and operational risk—and explain how each type of risk can affect insurer solvency.";
arrlotext['3A'] = "3A. Describe five basic risk management strategies and provide examples of each.";
arrlotext['3B'] = "3B. Describe the risk management approach known as the three lines of defense.";
arrlotext['3C'] = "3C. Explain how insurers use governance, a risk taxonomy, internal controls, and the three lines of defense to manage risk.";
arrlotext['3D'] = "3D. Describe the components of an effective enterprise risk management (ERM) program, including a risk management culture, strategic risk management, a risk control process, a risk management framework, and catastrophic event management.";
arrlotext['3F'] = "3F. Define portfolio risk management strategies—such as diversification, hedging, cash-flow matching, and duration matching—and explain their use.";
arrlotext['3G'] = "3G. Explain how insurers can eliminate or reduce expense risk through outsourcing certain functions and benchmarking.";
arrlotext['4A'] = "4A. Identify and describe the four primary components of financial models.";
arrlotext['4B'] = "4B. Describe the role of variables in financial modeling.";
arrlotext['4C'] = "4C. Distinguish between fixed, dynamic, and stochastic assumptions.";
arrlotext['4D'] = "4D. Explain how insurers use experience data and estimates of future conditions, including trend analysis and futures studies.";
arrlotext['4E'] = "4E. Describe the factors that affect the quality of model inputs.";
arrlotext['4F'] = "4F. Describe and distinguish between the modeling approaches of deterministic, stochastic, and optimization modeling.";
arrlotext['4G'] = "4G. Explain how insurers interpret model outputs such as point estimates, range estimates, and probability distributions.";
