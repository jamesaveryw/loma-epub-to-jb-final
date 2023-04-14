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

var quizname = "LOMA 371 Sample Examination";
var coursename = 'LOMA 371';
var modulenumber = 0;
var title = 'LOMA_371_PSE2021';
var intNumPools = 1;
var numQ = 60;
var numTexts = 1;
var numChap = 11;
var arrTexts = new Array();
var arrNumChap = new Array();
var duration = 120;
arrTexts[0] = "Risk Management and Product Design for Insurance Companies, Third Edition (2020)";
arrNumChap[0] = 11;
var thisChap = '--';

objPool = new Object(); 
objPool.intSelectCount = 60;
objPool.formID = 2622;
objPool.formName = 'PSE2021';
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
arrPoolQuestions[21] = 'LOMA_371_SE_022';
arrPoolQuestions[22] = 'LOMA_371_SE_023';
arrPoolQuestions[23] = 'LOMA_371_SE_024';
arrPoolQuestions[24] = 'LOMA_371_SE_025';
arrPoolQuestions[25] = 'LOMA_371_SE_026';
arrPoolQuestions[26] = 'LOMA_371_SE_027';
arrPoolQuestions[27] = 'LOMA_371_SE_028';
arrPoolQuestions[28] = 'LOMA_371_SE_029';
arrPoolQuestions[29] = 'LOMA_371_SE_030';
arrPoolQuestions[30] = 'LOMA_371_SE_031';
arrPoolQuestions[31] = 'LOMA_371_SE_032';
arrPoolQuestions[32] = 'LOMA_371_SE_033';
arrPoolQuestions[33] = 'LOMA_371_SE_034';
arrPoolQuestions[34] = 'LOMA_371_SE_035';
arrPoolQuestions[35] = 'LOMA_371_SE_036';
arrPoolQuestions[36] = 'LOMA_371_SE_037';
arrPoolQuestions[37] = 'LOMA_371_SE_038';
arrPoolQuestions[38] = 'LOMA_371_SE_039';
arrPoolQuestions[39] = 'LOMA_371_SE_040';
arrPoolQuestions[40] = 'LOMA_371_SE_041';
arrPoolQuestions[41] = 'LOMA_371_SE_042';
arrPoolQuestions[42] = 'LOMA_371_SE_043';
arrPoolQuestions[43] = 'LOMA_371_SE_044';
arrPoolQuestions[44] = 'LOMA_371_SE_045';
arrPoolQuestions[45] = 'LOMA_371_SE_046';
arrPoolQuestions[46] = 'LOMA_371_SE_047';
arrPoolQuestions[47] = 'LOMA_371_SE_048';
arrPoolQuestions[48] = 'LOMA_371_SE_049';
arrPoolQuestions[49] = 'LOMA_371_SE_050';
arrPoolQuestions[50] = 'LOMA_371_SE_051';
arrPoolQuestions[51] = 'LOMA_371_SE_052';
arrPoolQuestions[52] = 'LOMA_371_SE_053';
arrPoolQuestions[53] = 'LOMA_371_SE_054';
arrPoolQuestions[54] = 'LOMA_371_SE_055';
arrPoolQuestions[55] = 'LOMA_371_SE_056';
arrPoolQuestions[56] = 'LOMA_371_SE_057';
arrPoolQuestions[57] = 'LOMA_371_SE_058';
arrPoolQuestions[58] = 'LOMA_371_SE_059';
arrPoolQuestions[59] = 'LOMA_371_SE_060';
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

arrQuestions['LOMA_371_SE_022'] = {
"strID": "LOMA_371_SE_022",
"questionID": 121461,
"item": "LOMA_371_PSE2021_022",
"primaryLO": "5B",
"textref": "c. 5, p. 4",
"textbook": 0,
"chapter": 5,
"module": 2,
"arrLOs": [ "5B" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">Calisto Financial sells term life insurance products, which are designed as lower-cost offerings for customers with more limited means, and variable universal life (VUL) insurance products for affluent customers or organizations. By designing each of its products to target a narrow or specialized section of the market, Calisto is using a strategy known as</p>",
"arrAnsChoices": [ "first mover", "fast follower", "focused differentiation", "cost leadership" ],
"arrAnsIDs": [ 491209, 491210, 491211, 491212 ],
"intCR": 3,
"arrAnswerFeedback": [ "<p class=\"explanations\">A company that uses a <b>first mover</b> strategy attempts to be the first to offer a particular product or service in a new market or the first to enter a current market with an innovative product. In the insurance industry, first mover strategies often involve new companies or startups that leverage technological advances to create products for the growing market of digitally literate consumers.</p>", "<p class=\"explanations\">A <b>fast follower</b> strategy typically involves a company’s imitating and iterating on a competitor’s product. In the insurance industry, the fast follower strategy often focuses on taking technological innovations and adapting them to product design.</p>", "<p class=\"explanations\">When using a focused differentiation or niche strategy, insurers design products that are targeted at a narrow or specialized section of the market. In the life insurance industry, income level—used by Calisto—is just one category of potential specialized markets.</p><p class=\"explanations\"><b>Learning Objective: 5B. Describe common product development strategies.</b></p>", "<p class=\"explanations\">A <b>cost leadership</b> strategy involves offering a product at a cost lower than the average cost in the market, or lower than the cost of a comparable product offered by a competitor. Insurers may adopt a cost leadership strategy for a new product during times of slow economic growth, when customers with tighter budgets carefully consider the cost of any purchase.</p>" ]
}

arrQuestions['LOMA_371_SE_023'] = {
"strID": "LOMA_371_SE_023",
"questionID": 121462,
"item": "LOMA_371_PSE2021_023",
"primaryLO": "5C",
"textref": "c. 5, p. 5",
"textbook": 0,
"chapter": 5,
"module": 2,
"arrLOs": [ "5C" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">When launching a new product, a company’s product portfolio and product mix are both affected. The following statements are about an insurer’s product portfolio and product mix. Select the answer choice containing the correct statement.</p>",
"arrAnsChoices": [ "A product portfolio is a company’s total assortment of products within each line of business according to a monetary measure of business volume.", "When a company decides to change its product portfolio, it typically does not make this decision within the context of any competing products within the financial services industry.", "Maintaining a balanced product mix is one form of risk management.", "A product mix is the array of all products a company offers for sale, categorized by line of business." ],
"arrAnsIDs": [ 491213, 491214, 491215, 491216 ],
"intCR": 3,
"arrAnswerFeedback": [ "<p class=\"explanations\">A <b>product mix</b> is a company’s total assortment of products within each line of business according to a monetary measure of business volume, such as premiums collected, reserves, or in the case of life insurance, face amount in force. Insurers typically measure a product mix by proportion.</p>", "<p class=\"explanations\">When a company decides to change its <b>product mix</b>, it makes this decision within the context of, 1) its product lines and overall product portfolio, 2) its strategic goals and risk preferences, and 3) any competing products within the financial services industry.</p>", "<p class=\"explanations\">This is a true statement. Maintaining a balanced product mix is one form of risk management. Consistent with ALM and ERM practices, insurers manage their product mixes using approaches that are suited for managing any portfolio of risks.</p><p class=\"explanations\"><b>Learning Objective: 5C. Explain the importance of a product mix and differentiate it from a product portfolio.</b></p>", "<p class=\"explanations\">A <b>product portfolio</b> is the array of all products a company offers for sale, categorized by line of business. For example, an insurer might have a life insurance or an annuity portfolio. </p>" ]
}

arrQuestions['LOMA_371_SE_024'] = {
"strID": "LOMA_371_SE_024",
"questionID": 121463,
"item": "LOMA_371_PSE2021_024",
"primaryLO": "5D",
"textref": "c. 5, p. 6",
"textbook": 0,
"chapter": 5,
"module": 2,
"arrLOs": [ "5D" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">For this question, if answer choices (1) through (3) are all correct, select answer choice (4). Otherwise, select the one correct answer choice.</p><p class=\"stem\">In the context of product development, shelf life refers to how long an insurer can offer a product in the marketplace before it becomes obsolete and needs to be revised, repriced, or retired. With regard to the shelf life of specific life insurance products, it is correct to say</p>",
"arrAnsChoices": [ "that insurers in the United States typically revise, reprice, or retire the average life insurance or annuity product after one to five years", "that whole life insurance and life insurance products with riders tend to have longer shelf lives than term life insurance products", "that indexed universal life insurance products and indexed annuity products are the most prone to revision or retirement, with an average shelf life of about one to two years", "all of the above" ],
"arrAnsIDs": [ 491217, 491218, 491219, 491220 ],
"intCR": 4,
"arrAnswerFeedback": [ "<p class=\"explanations\">It is true that insurers in the United States typically revise, reprice, or retire the average life insurance or annuity product after one to five years. However, this is <b>not</b> the only correct response.</p>", "<p class=\"explanations\">It is true that whole life insurance and life insurance products with riders tend to have longer shelf lives than term life insurance products. However, this is <b>not</b> the only correct response.</p>", "<p class=\"explanations\">It is true that indexed universal life insurance products and indexed annuity products are the most prone to revision or retirement, with an average shelf life of about one to two years. However, this is <b>not</b> the only correct response.</p>", "<p class=\"explanations\">According to Society of Actuaries (SOA) 2017 data, the shelf life of life insurance and annuity products is as follows: life insurance products—universal life: 1.25 years, term life: 1.5 years, variable universal life: 3.4 years, and whole life: 4.6 years; annuity products—indexed annuity:1.4 years, variable annuity: 1.6 years, and fixed annuity: 4.8 years.</p><p class=\"explanations\"><b>Learning Objective: 5D. Identify a product’s average shelf life.</b></p>" ]
}

arrQuestions['LOMA_371_SE_025'] = {
"strID": "LOMA_371_SE_025",
"questionID": 121464,
"item": "LOMA_371_PSE2021_025",
"primaryLO": "5G",
"textref": "c. 5, p. 9",
"textbook": 0,
"chapter": 5,
"module": 2,
"arrLOs": [ "5G" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">An insurer’s marketing committee is a cross-functional team, which comprises of representatives from different functional areas of the company. Typical activities of a marketing committee include</p>",
"arrAnsChoices": [ "reviewing new product designs and approving or rejecting further development of each new product design", "providing overall guidance and control of enterprise risk management (ERM) efforts", "planning, budgeting, and scheduling for product development", "conducting research about product features, market demand, competitive activity, target markets, company experience with mortality or morbidity, and customer behavior" ],
"arrAnsIDs": [ 491221, 491222, 491223, 491224 ],
"intCR": 1,
"arrAnswerFeedback": [ "<p class=\"explanations\">An insurer’s marketing committee is a senior management group whose primary role is to provide overall guidance and control of the product development process. Other cross-functional teams include the risk committee and the product development team.</p><p class=\"explanations\"><b>Learning Objective: 5G. Describe the teams that usually participate in the product development process.</b></p>", "<p class=\"explanations\">Providing overall guidance and control of ERM efforts is the primary role of an insurer’s <b>risk committee.</b> The risk committee reviews all risk exposures, risk policies, risk standards, and risk limits associated with the new product and must express its support for any new product before the product can be launched.</p>", "<p class=\"explanations\">Planning, budgeting, and scheduling for product development are typical activities of an insurer’s <b>product development team.</b></p>", "<p class=\"explanations\">Conducting research about product features, market demand, competitive activity, target markets, company experience with mortality or morbidity, and customer behavior are typical activities of an insurer’s <b>product development team.</b></p>" ]
}

arrQuestions['LOMA_371_SE_026'] = {
"strID": "LOMA_371_SE_026",
"questionID": 121465,
"item": "LOMA_371_PSE2021_026",
"primaryLO": "5I",
"textref": "c. 5, pp. 15-16, 19",
"textbook": 0,
"chapter": 5,
"module": 2,
"arrLOs": [ "5I", "5J" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">The product planning stage of product development consists of two main activities: idea generation and idea screening. By definition, a search for new product ideas that are consistent with the needs of a company’s target markets and the company’s overall product development strategy is known as (<b>idea generation / idea screening</b>). One element of the comprehensive business analysis stage of product development consists of evaluating whether a company has the capability to take a new product to market. This evaluation, which can include a review of the results of another company’s introduction of a similar product, is known as a (<b>product proposal / feasibility study</b>).</p>",
"arrAnsChoices": [ "idea generation / product proposal", "idea generation / feasibility study", "idea screening / product proposal", "idea screening / feasibility study" ],
"arrAnsIDs": [ 491225, 491226, 491227, 491228 ],
"intCR": 2,
"arrAnswerFeedback": [ "<p class=\"explanations\">It is true that idea generation involves searching for new product ideas that are consistent with the needs of the company’s target markets and the company’s overall product development strategy. However, a <b>product proposal</b>, or business plan, is a document used to present a product idea to an internal team that decides whether to allocate company resources toward developing the product idea.</p>", "<p class=\"explanations\">During idea generation, a company considers new product ideas, product revisions, and product rate changes. During idea screening, a team quickly and inexpensively evaluates new product ideas to separate workable ideas from those that have little or no potential.</p><p class=\"explanations\">A feasibility study should evaluate and demonstrate how product implementation will compete for resources with other company initiatives and how this interaction might affect the product’s speed to market. A product proposal that receives full management approval serves as an overall guide for technical product design and product introduction.</p><p class=\"explanations\"><b>Learning Objectives: (1) 5I. Explain the product planning stage of product development, including idea generation and idea screening; (2) 5J. Describe the elements of the comprehensive business analysis stage of product development, including a market analysis, product design objectives, a feasibility study, a marketing plan, marketing projections, and a product proposal.</b></p>", "<p class=\"explanations\">During <b>idea screening</b>, a team quickly and inexpensively evaluates new product ideas to separate workable ideas from those that have little or no potential. In addition, a<b> product proposal</b>, or business plan, is a document used to present a product idea to an internal team that decides whether to allocate company resources toward developing the product idea.</p>", "<p class=\"explanations\">It is true that a feasibility study evaluates whether a company has the capability to take a new product to market. However, during <b>idea screening</b>, a team quickly and inexpensively evaluates new product ideas to separate workable ideas from those that have little or no potential.</p>" ]
}

arrQuestions['LOMA_371_SE_027'] = {
"strID": "LOMA_371_SE_027",
"questionID": 121466,
"item": "LOMA_371_PSE2021_027",
"primaryLO": "6B",
"textref": "c. 6, p. 4",
"textbook": 0,
"chapter": 6,
"module": 2,
"arrLOs": [ "6B" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">A life insurance company must determine several important components of financial design for a life insurance or annuity product, including the new product’s investment earnings, cost of providing benefits, operating expenses, cash flows, expected loss scenarios, and unexpected financial results. Each estimated value used in the product design is known as</p>",
"arrAnsChoices": [ "an actuarial assumption; where applicable, insurers compare actuarial assumptions to relevant experience data from similar&nbsp;products", "an actuarial assumption; insurers are not allowed to compare actuarial assumptions to relevant experience data from similar products", "a derivative; where applicable, insurers compare actuarial assumptions to relevant experience data from similar products", "a derivative; insurers are not allowed to compare actuarial assumptions to relevant experience data from similar&nbsp;products" ],
"arrAnsIDs": [ 491229, 491230, 491231, 491232 ],
"intCR": 1,
"arrAnswerFeedback": [ "<p class=\"explanations\">Each component of financial design must meet the valuation standards specific to the actuarial profession, such as the Actuarial Standards of Practice (ASOPs) set by the Actuarial Standards Board (ASB). Companies generally model the cost of benefits for each rider similarly to how they would model the costs for any other benefit. After the product design team estimates a premium amount, the team can then evaluate this amount to see if it meets product design goals. </p><p class=\"explanations\"><b>Learning Objective: 6B. Describe important components of financial design for life insurance and annuity products, including company expenses, the cost of benefits, and investment earnings.</b></p>", "<p class=\"explanations\">It is true that each estimated value used in a life insurance or an annuity product design is known as an actuarial assumption. However, where applicable, insurers <b>are allowed</b> to compare actuarial assumptions to relevant experience data from similar products.</p>", "<p class=\"explanations\">It is true that, where applicable, insurers <b>are allowed</b> to compare actuarial assumptions to relevant experience data from similar products. However, a <b>derivative security</b>, or derivative, is a financial security that derives its value from another security. </p>", "<p class=\"explanations\">A <b>derivative security</b>, or derivative, is a financial security that derives its value from another security. In addition, where applicable, insurers <b>are allowed</b> to compare actuarial assumptions to relevant experience data from similar products.</p>" ]
}

arrQuestions['LOMA_371_SE_028'] = {
"strID": "LOMA_371_SE_028",
"questionID": 121467,
"item": "LOMA_371_PSE2021_028",
"primaryLO": "6C",
"textref": "c. 6, pp. 8-9",
"textbook": 0,
"chapter": 6,
"module": 2,
"arrLOs": [ "6C" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">Premium structure is a key component of life insurance products’ financial design. When an insurer uses (<b>a contingency pricing / an indeterminate premium</b>) structure, the insurer can periodically reset premium rates on individual life insurance products while guaranteeing to customers that premiums will not exceed a maximum specified level. This structure (<b>allows / does not allow</b>) insurers to adjust product charges to reflect its anticipated future interest and mortality experience.</p>",
"arrAnsChoices": [ "a contingency pricing / allows", "a contingency pricing / does not allow", "an indeterminate premium / allows", "an indeterminate premium / does not allow" ],
"arrAnsIDs": [ 491233, 491234, 491235, 491236 ],
"intCR": 3,
"arrAnswerFeedback": [ "<p class=\"explanations\">It is true that insurers are allowed to adjust product charges to reflect its anticipated future interest and mortality experience, but this is with an <b>indeterminate premium</b> structure. A <b>contingency pricing structure</b> gives an insurer mechanisms for adjusting its charges for an in-force product to reflect the company’s financial results for the product. </p>", "<p class=\"explanations\">An <b>indeterminate premium</b> structure allows insurers to periodically reset premium rates on individual life insurance products while guaranteeing to customers that premiums will not exceed a maximum specified level. In addition, an indeterminate premium structure <b>allows</b> an insurer to adjust product charges to reflect its anticipated future interest and mortality experience.</p>", "<p class=\"explanations\">Under an indeterminate premium structure, if an insurer discovers a product is underperforming at its current premium, and is at risk of not being able to pay out benefits, the insurer can raise the product’s premium rate. However, the higher premium rate must adhere to the product’s contract language, which includes a scale of guaranteed maximum premiums.</p><p class=\"explanations\"><b>Learning Objective: 6C. Explain premium structures for individual life insurance, such as a contingency pricing structure and an indeterminate premium structure.</b></p>", "<p class=\"explanations\">It is true that an indeterminate premium structure allows insurers to periodically reset premium rates on individual life insurance products while guaranteeing to customers that premiums will not exceed a maximum specified level. However, this structure <b>does allow </b>an insurer to adjust its product charges to reflect its anticipated future interest and mortality experience.</p>" ]
}

arrQuestions['LOMA_371_SE_029'] = {
"strID": "LOMA_371_SE_029",
"questionID": 121468,
"item": "LOMA_371_PSE2021_029",
"primaryLO": "6D",
"textref": "c. 6, p. 10",
"textbook": 0,
"chapter": 6,
"module": 2,
"arrLOs": [ "6D" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">During product design for a given life insurance or annuity product, actuaries can ordinarily improve a product model’s profitability results by making certain changes to the model’s values. One assumed value that actuaries can change, which would ordinarily improve a product model’s profitability, if all other factors remain the same, would be to </p>",
"arrAnsChoices": [ "increase assumed investment earnings", "decrease charges to customers", "increase benefit costs", "increase product expenses" ],
"arrAnsIDs": [ 491237, 491238, 491239, 491240 ],
"intCR": 1,
"arrAnswerFeedback": [ "<p class=\"explanations\">Actuaries can ordinarily improve a product model’s profitability results by increasing<b> </b>the model’s values for assumed investment earnings. Actuaries can also ordinarily improve a product model’s profitability results by changing the model’s values in the following ways: increasing charges to customers; decreasing product expenses; and/or decreasing benefit costs. </p><p class=\"explanations\"><b>Learning Objective: 6D. Describe modeling and testing for technical product design and explain how actuaries can improve the financial results of a product model.</b></p>", "<p class=\"explanations\">Actuaries can ordinarily improve a product model’s profitability results by <b>increasing </b>the model’s values for charges to customers.</p>", "<p class=\"explanations\">Actuaries can ordinarily improve a product model’s profitability results by <b>decreasing </b>the model’s values for benefit costs.</p>", "<p class=\"explanations\">Actuaries can ordinarily improve a product model’s profitability results by <b>decreasing </b>the model’s values for product expenses.</p>" ]
}

arrQuestions['LOMA_371_SE_030'] = {
"strID": "LOMA_371_SE_030",
"questionID": 121469,
"item": "LOMA_371_PSE2021_030",
"primaryLO": "6E",
"textref": "c. 6, pp. 15-16",
"textbook": 0,
"chapter": 6,
"module": 2,
"arrLOs": [ "6E" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">In order to speed up the implementation process, companies generally divide product implementation activities into two categories: Day 1 functionality and Day 2 functionality. With regard to <i>Day 1</i> functionality, an insurer will likely have in place elements pertaining to</p><ol type=\"A\" class=\"combo\"><li>Administration of policy ownership rights that customers can exercise immediately upon issue</li><li>Product illustrations based on in force performance</li></ol>",
"arrAnsChoices": [ "Both A and B", "A only", "B only", "Neither A nor B" ],
"arrAnsIDs": [ 491241, 491242, 491243, 491244 ],
"intCR": 2,
"arrAnswerFeedback": [ "<p class=\"explanations\">At least one of these statements is incorrect.</p>", "<p class=\"explanations\">Statement A is correct. Day 1 functionality refers to product administration and IT elements that a company must have in place and functioning when the product is first made available for sale. These elements include product illustrations, administration of policy ownership rights that customers can exercise immediately upon issue, premium processing, commission payment, and billing.</p><p class=\"explanations\"><b>Learning Objective: 6E. Describe the activities required for product implementation and launch, differentiating between Day 1 functionality and Day 2 functionality.</b></p>", "<p class=\"explanations\">Statement B is incorrect. <b>Day 2 functionality</b> refers to product administration and IT elements that are necessary at some future date to service and administer an insurance product, but which can be implemented after the product has been launched. Some typical Day 2 elements are product illustrations based on in force performance, implementation in states where the product was approved after Day 1, and administration of ownership rights that the customer cannot exercise immediately upon policy issue.</p>", "<p class=\"explanations\">At least one of these statements is correct.</p>" ]
}

arrQuestions['LOMA_371_SE_031'] = {
"strID": "LOMA_371_SE_031",
"questionID": 121470,
"item": "LOMA_371_PSE2021_031",
"primaryLO": "6F",
"textref": "c. 6, pp. 18-19",
"textbook": 0,
"chapter": 6,
"module": 2,
"arrLOs": [ "6F" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">For this question, if answer choices (1) through (3) are all correct, select answer choice (4). Otherwise, select the one correct answer choice.</p><p class=\"stem\">An adverse deviation arises whenever a specific product result differs from the modeled assumptions so that</p>",
"arrAnsChoices": [ "benefit payments are <i>greater</i> than assumed", "product revenue is <i>greater</i> than assumed", "product expenses are <i>lower </i>than assumed", "all of the above" ],
"arrAnsIDs": [ 491245, 491246, 491247, 491248 ],
"intCR": 1,
"arrAnswerFeedback": [ "<p class=\"explanations\">In product operations, an adverse deviation occurs whenever a specific product result differs from the assumptions used in product design so that benefit payments are greater than assumed, product revenue is lower than assumed, and product expenses are greater than assumed, and produces a decrease in actual product profitability compared to assumed product profitability. If large adverse deviations develop, then the insurer must try to identify the reasons for them and, if possible, take corrective action, such as cutting operating expenses. </p><p class=\"explanations\"><b>Learning Objective: 6F. Describe the typical activities of product monitoring, evaluation, and feedback.</b></p>", "<p class=\"explanations\">An adverse deviation arises when product revenue is <b>lower </b>than assumed.</p>", "<p class=\"explanations\">An adverse deviation arises when product expenses are <b>greater</b> than assumed.</p>", "<p class=\"explanations\">Only one of these answer choices is correct. </p>" ]
}

arrQuestions['LOMA_371_SE_032'] = {
"strID": "LOMA_371_SE_032",
"questionID": 121471,
"item": "LOMA_371_PSE2021_032",
"primaryLO": "7A",
"textref": "c. 7, pp. 2-3",
"textbook": 0,
"chapter": 7,
"module": 3,
"arrLOs": [ "7A" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">An insurer typically divides its assets into two main types of accounts: a general account and one or more separate accounts. An insurer’s (<b>general account / separate account</b>) holds assets that support the insurer’s contractual obligations to policyholders and contract owners of the company’s guaranteed products. The (<b>insurer / customer</b>) determines how premiums are applied to subaccounts within a separate account.</p>",
"arrAnsChoices": [ "general account / insurer", "general account / customer", "separate account / insurer", "separate account / customer" ],
"arrAnsIDs": [ 491249, 491250, 491251, 491252 ],
"intCR": 2,
"arrAnswerFeedback": [ "<p class=\"explanations\">It is true that an insurer’s general account holds assets that support the insurer’s contractual obligations to policyholders and contract owners of the company’s guaranteed products. However, the <b>customer</b> determines how premiums are applied to subaccounts within a separate account.</p>", "<p class=\"explanations\">An insurer’s general account holds assets that support the insurer’s contractual obligations to policyholders and contract owners of the company’s guaranteed products, including whole life insurance, term life insurance, fixed-rate annuities, and other non-variable products. </p><p class=\"explanations\">Insurers typically maintain one or more separate accounts for assets that support variables products. They can then divide separate accounts into smaller subaccounts, each of which consists of a pool of different investments. Since the customer determines how premiums are applied to subaccounts within a separate account, the customer bears investment risks associated with a variable product that is funded by a separate account.</p><p class=\"explanations\"><b>Learning Objective: 7A. Describe how an insurer’s general account and separate account affect the insurer’s investment earnings.</b></p>", "<p class=\"explanations\">An insurer’s <b>general account</b> holds assets that support the insurer’s contractual obligations to policyholders and contract owners of the company’s guaranteed products. In addition, the <b>customer</b> determines how premiums are applied to subaccounts within a separate account.</p>", "<p class=\"explanations\">It is true that the customer determines how premiums are applied to subaccounts within a separate account. However, an insurer’s <b>general account</b> holds assets that support the insurer’s contractual obligations to policyholders and contract owners of the company’s guaranteed products.</p>" ]
}

arrQuestions['LOMA_371_SE_033'] = {
"strID": "LOMA_371_SE_033",
"questionID": 121472,
"item": "LOMA_371_PSE2021_033",
"primaryLO": "7B",
"textref": "c. 7, p. 4",
"textbook": 0,
"chapter": 7,
"module": 3,
"arrLOs": [ "7B" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">When investment earnings are expressed as a percentage of the principal, they are called the rate of return on the investment. Consider the following details regarding Sampson Life Insurance Company’s stock investment:</p><ul class=\"examul\"><li>Sampson purchased stock for $200,000 and held it for one year</li><li>Total dividends paid to Sampson during the year were $10,000</li><li>At the end of the year, Sampson sold all of its stock for $220,000</li></ul><p class=\"stem\">In this situation, the total rate of return of Sampson’s investment was</p>",
"arrAnsChoices": [ "a loss of 5%", "a loss of 10%", "a gain of 10%", "a gain of 15%" ],
"arrAnsIDs": [ 491253, 491254, 491255, 491256 ],
"intCR": 4,
"arrAnswerFeedback": [ "<p class=\"explanations\">The total return on the investment is the sum of Sampson’s dividend earnings of $10,000 and its gain upon the sale of the stock ($220,000 - $200,000) = $20,000; $10,000 + $20,000 = $30,000. The investment’s total rate of return is the total earnings of $30,000 expressed as a percentage of the stock’s purchase price of $200,000, or 15%.</p>", "<p class=\"explanations\">The total return on the investment is the sum of Sampson’s dividend earnings of $10,000 and its gain upon the sale of the stock ($220,000 - $200,000) = $20,000; $10,000 + $20,000 = $30,000. The investment’s total rate of return is the total earnings of $30,000 expressed as a percentage of the stock’s purchase price of $200,000, or 15%.</p>", "<p class=\"explanations\">The total return on the investment is the sum of Sampson’s dividend earnings of $10,000 and its gain upon the sale of the stock ($220,000 - $200,000) = $20,000; $10,000 + $20,000 = $30,000. The investment’s total rate of return is the total earnings of $30,000 expressed as a percentage of the stock’s purchase price of $200,000, or 15%.</p>", "<p class=\"explanations\">The total return on the investment is the sum of Sampson’s dividend earnings of $10,000 and its gain upon the sale of the stock ($220,000 - $200,000) = $20,000; $10,000 + $20,000 = $30,000. The investment’s total rate of return is the total earnings of $30,000 expressed as a percentage of the stock’s purchase price of $200,000, or 15%.</p><p class=\"explanations\"><b>Learning Objective: 7B. Define investment concepts such as <i>price appreciation</i>, <i>price depreciation</i>, and <i>rate of return</i>.</b></p>" ]
}

arrQuestions['LOMA_371_SE_034'] = {
"strID": "LOMA_371_SE_034",
"questionID": 121473,
"item": "LOMA_371_PSE2021_034",
"primaryLO": "7C",
"textref": "c. 7, p. 5",
"textbook": 0,
"chapter": 7,
"module": 3,
"arrLOs": [ "7C" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">The effects of the time value of money can be expressed by calculating the future value (FV) and the present value (PV) of a sum of money. The following statements are about the time value of money and the relationship between FV and PV. Select the answer choice containing the correct statement.</p>",
"arrAnsChoices": [ "When calculating future value, each period that interest is paid is known as a discounting&nbsp;period.", "The periods used in present value calculations are known as compounding periods.", "Present value calculations are useful when an insurer has identified a specific sum as a future goal and needs to know how much to invest to achieve that goal.", "Present value calculations are useful when an insurer knows the specific sum it intends to invest and needs to know how much the investment is likely to earn." ],
"arrAnsIDs": [ 491257, 491258, 491259, 491260 ],
"intCR": 3,
"arrAnswerFeedback": [ "<p class=\"explanations\">When calculating future value, each period that interest is paid is known as a <b>compounding period</b>.</p>", "<p class=\"explanations\">The periods used in present value calculations are known as <b>discounting periods</b>.</p>", "<p class=\"explanations\">Investment growth is based on a concept known as the time value of money, which states that the value of a sum of money changes over time because of the effects of interest. The present value (PV) of a sum of money is the amount that, if invested at a specified interest rate on a specified date, would grow to equal a specified future amount. The future value (FV) of a sum of money is the amount that the original sum is expected to be worth at a specified future date, given a specified interest rate. In simple terms: the PV is the principal of an investment, and the FV is the principal of an investment plus its accumulated earnings.</p><p class=\"explanations\"><b>Learning Objective: 7C. Explain the time value of money and the relationship between present value and future value.</b></p>", "<p class=\"explanations\"><b>Future value</b> calculations are useful when an insurer knows the specific sum it intends to invest and needs to know how much the investment is likely to earn.</p>" ]
}

arrQuestions['LOMA_371_SE_035'] = {
"strID": "LOMA_371_SE_035",
"questionID": 121474,
"item": "LOMA_371_PSE2021_035",
"primaryLO": "7D",
"textref": "c. 7, p. 6",
"textbook": 0,
"chapter": 7,
"module": 3,
"arrLOs": [ "7D" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">Kathleen Stanton plans to invest $2,000 at a 6% interest rate for one year. The calculation used to determine the future value of her investment after one year is</p>",
"arrAnsChoices": [ "$2,000 × 0.06", "$2,000 ÷ 0.06", "$2,000 × 1.06", "$2,000 ÷ 1.06" ],
"arrAnsIDs": [ 491261, 491262, 491263, 491264 ],
"intCR": 3,
"arrAnswerFeedback": [ "<p class=\"explanations\">The correct calculation to use is FV = PV × (1 + i). In this situation, plugging in this numbers results in $2,000 × 1.06 = $2,120. Therefore, $2,120 would be the value of Ms.&nbsp;Stanton’s investment after one year.</p>", "<p class=\"explanations\">The correct calculation to use is FV = PV × (1 + i). In this situation, plugging in this numbers results in $2,000 × 1.06 = $2,120. Therefore, $2,120 would be the value of Ms.&nbsp;Stanton’s investment after one year.</p>", "<p class=\"explanations\">The correct calculation to use is FV = PV × (1 + i). In this situation, plugging in this numbers results in $2,000 × 1.06 = $2,120. Therefore, $2,120 would be the value of Ms.&nbsp;Stanton’s investment after one year.</p><p class=\"explanations\"><b>Learning Objective: 7D. Explain the applications for future values and present values.</b></p>", "<p class=\"explanations\">The correct calculation to use is FV = PV × (1 + i). In this situation, plugging in this numbers results in $2,000 × 1.06 = $2,120. Therefore, $2,120 would be the value of Ms.&nbsp;Stanton’s investment after one year.</p>" ]
}

arrQuestions['LOMA_371_SE_036'] = {
"strID": "LOMA_371_SE_036",
"questionID": 121475,
"item": "LOMA_371_PSE2021_036",
"primaryLO": "7F",
"textref": "c. 7, pp. 15-16",
"textbook": 0,
"chapter": 7,
"module": 3,
"arrLOs": [ "7F" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">The following statements are about the accumulated value within annuity products. Three statements are true, and one statement is false. Select the answer choice containing the <B>FALSE</B> statement.</p>",
"arrAnsChoices": [ "Like the cash value of a life insurance policy, the accumulated value in an annuity represents the owner’s equity in the contract.", "For fixed annuities, the insurer applies the current interest-crediting rate to the annuity contract values to determine the accumulated value.", "For variable deferred annuities, most insurers offer only variable subaccounts, which are nonguaranteed but have a high potential for gain.", "The accumulated value of a variable annuity contract is determined by the current value and number of accumulation units the contract owner has in each subaccount investment." ],
"arrAnsIDs": [ 491265, 491266, 491267, 491268 ],
"intCR": 3,
"arrAnswerFeedback": [ "<p class=\"explanations\">This is a true statement; therefore, it is <b>not </b>the correct response. Unlike a life insurance policy’s cash value, which is generally separate from the policy’s face amount, the accumulated value in an annuity represents the current value of the annuity contract.</p>", "<p class=\"explanations\">This is a true statement; therefore, it is <b>not </b>the correct response. Fixed-rate deferred annuities accumulate value through interest.</p>", "<p class=\"explanations\">This is a false statement; therefore, it is the correct response. When contract owners pay premiums into a variable deferred annuity, they specify how they wish their premiums to be invested. Most insurers offer both fixed accounts, which are guaranteed, and variable subaccounts, which are nonguaranteed but have a higher potential for gain.</p><p class=\"explanations\"><b>Learning Objective: 7F. Explain how actuaries account for cash values and accumulated values in product design.</b></p>", "<p class=\"explanations\">This is a true statement; therefore, it is <b>not </b>the correct response. The insurer uses premiums allocated to subaccounts to purchase accumulation units, which represent ownership shares in the selected subaccounts. The value of a contract owner’s accumulation units is not guaranteed. Accumulation units increase or decrease in value based on the performance of subaccount investments.</p>" ]
}

arrQuestions['LOMA_371_SE_037'] = {
"strID": "LOMA_371_SE_037",
"questionID": 121476,
"item": "LOMA_371_PSE2021_037",
"primaryLO": "7G",
"textref": "c. 7, p. 19",
"textbook": 0,
"chapter": 7,
"module": 3,
"arrLOs": [ "7G" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">Changes in market interest rates cause the value of investments to change. When market interest rates decrease, the price of existing interest-bearing investments (<b>increases / decreases</b>). When market interest rates are decreasing, one potential outcome for insurers is that their liabilities may (<b>shorten / lengthen</b>).</p>",
"arrAnsChoices": [ "increases / shorten", "increases / lengthen", "decreases / shorten", "decreases / lengthen" ],
"arrAnsIDs": [ 491269, 491270, 491271, 491272 ],
"intCR": 2,
"arrAnswerFeedback": [ "<p class=\"explanations\">It is true that, when market interest rates decrease, the price of existing interest-bearing investments increases. However, when market interest rates are decreasing, one potential negative outcome for insurers is that their liabilities may <b>lengthen</b>. Liabilities lengthen when fixed-rate products, such as fixed deferred annuities, remain in force for longer than the insurer assumed, because the insurer’s current interest-crediting rate is higher than market interest rates. </p>", "<p class=\"explanations\">When market interest rates decrease, the price of existing interest-bearing investments increases. However, when market interest rates are decreasing, one potential negative outcome for insurers is that their liabilities may lengthen. Liabilities lengthen when fixed-rate products, such as fixed deferred annuities, remain in force for longer than the insurer assumed, because the insurer’s current interest-crediting rate is higher than market interest rates.</p><p class=\"explanations\"><b>Learning Objective: 7G. Describe the effects on insurers when market interest rates are decreasing, increasing, or remaining at a sustained low level.</b></p>", "<p class=\"explanations\">When market interest rates decrease, the price of existing interest-bearing investments <b>increases</b>. In addition, when market interest rates are decreasing, one potential negative outcome for insurers is that their liabilities may <b>lengthen</b>.</p>", "<p class=\"explanations\">It is true that, when market interest rates are decreasing, one potential negative outcome for insurers is that their liabilities may lengthen. However, when market interest rates decrease, the price of existing interest-bearing investments <b>increases</b>. </p>" ]
}

arrQuestions['LOMA_371_SE_038'] = {
"strID": "LOMA_371_SE_038",
"questionID": 121477,
"item": "LOMA_371_PSE2021_038",
"primaryLO": "7H",
"textref": "c. 7, p. 21",
"textbook": 0,
"chapter": 7,
"module": 3,
"arrLOs": [ "7H" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">To manage interest-rate risk associated with the general account, insurers rely on a simple control cycle. As a part of the control cycle, insurers typically establish specific types of controls in advance, which describe the company’s performance expectations. These types of controls are known as</p>",
"arrAnsChoices": [ "steering controls; a typical steering control is the initial interest-crediting rate on a&nbsp;product", "steering controls; a typical steering control is the automatic checks in a system", "concurrent controls; a typical concurrent control is a code of conduct", "concurrent controls; a typical concurrent control is a system’s risk tolerances " ],
"arrAnsIDs": [ 491273, 491274, 491275, 491276 ],
"intCR": 1,
"arrAnswerFeedback": [ "<p class=\"explanations\">The typical control cycle consists of three specific types of controls: steering controls, concurrent controls, and feedback controls. Concurrent and feedback controls ensure adherence to the policies, procedures, and standards set as steering controls. Examples of steering controls include policies, procedures, risk tolerances, and codes of conduct. Concurrent controls address a company’s current activities by continuously monitoring them. A typical example of a concurrent control is the automatic checks in a system. Feedback controls compare actual performance or output with established standards, typically at the end of a measurement period. A typical example of a feedback control is an internal audit.</p><p class=\"explanations\"><b>Learning Objective: 7H. Describe common strategies for managing interest-rate risk.</b></p>", "<p class=\"explanations\">It is true that specific controls that are established in advance and describe the company’s expectations of performance, are known as steering controls. However, the automatic checks in a system is an example of a <b>concurrent control</b>.</p>", "<p class=\"explanations\">Specific controls that are established in advance and describe the company’s expectations of performance, are known as <b>steering controls</b>. In addition, a code of conduct is an example of a <b>steering control</b>.</p>", "<p class=\"explanations\">Specific controls that are established in advance and describe the company’s expectations of performance, are known as <b>steering controls</b>. In addition, a system’s risk tolerances is an example of a <b>steering control</b>.</p>" ]
}

arrQuestions['LOMA_371_SE_039'] = {
"strID": "LOMA_371_SE_039",
"questionID": 121478,
"item": "LOMA_371_PSE2021_039",
"primaryLO": "7I",
"textref": "c. 7, p. 28",
"textbook": 0,
"chapter": 7,
"module": 3,
"arrLOs": [ "7I" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">Deerfield Financial Services created a product that is projected to earn $1,000,000 over five years, the expected life of the product. The present value (PV) of the product’s total earnings during this period is $758,000. Deerfield’s initial investment in the product is $600,000. This information indicates that the product’s net present value (NPV) over the five-year period is</p>",
"arrAnsChoices": [ "$158,000", "$600,000", "$758,000", "$1,000,000" ],
"arrAnsIDs": [ 491277, 491278, 491279, 491280 ],
"intCR": 1,
"arrAnswerFeedback": [ "<p class=\"explanations\">If the NPV is a positive number, then we expect to earn a profit as long as the assumptions are accurate. The general rule for NPV is that, as long as a proposed product’s NPV is positive, the insurer should consider pursuing the product. When calculating the PV of earnings, an insurer selects an interest rate, <i>i</i>, that reflects the return the insurer believes would be necessary to accept the risk inherent in the product. Insurers generally select lower interest rates for products that represent lower risks and higher interest rates for products that represent higher risks, with a general eye towards conservatism.</p><p class=\"explanations\">In this situation, the product’s NPV is equal to the present value (PV) of the product’s earnings for the period, minus the initial investment in the product: $758,000 – $600,000 = $158,000.</p><p class=\"explanations\"><b>Learning Objective: 7I. Define and calculate profitability measures such as net present value, internal rate of return, and profit margin.</b></p>", "<p class=\"explanations\">In this situation, the product’s NPV is equal to the present value (PV) of the product’s earnings for the period, minus the initial investment in the product: $758,000 – $600,000 = $158,000.</p>", "<p class=\"explanations\">In this situation, the product’s NPV is equal to the present value (PV) of the product’s earnings for the period, minus the initial investment in the product: $758,000 – $600,000 = $158,000.</p>", "<p class=\"explanations\">In this situation, the product’s NPV is equal to the present value (PV) of the product’s earnings for the period, minus the initial investment in the product: $758,000 – $600,000 = $158,000. </p>" ]
}

arrQuestions['LOMA_371_SE_040'] = {
"strID": "LOMA_371_SE_040",
"questionID": 121479,
"item": "LOMA_371_PSE2021_040",
"primaryLO": "8B",
"textref": "c. 8, pp. 3-4",
"textbook": 0,
"chapter": 8,
"module": 3,
"arrLOs": [ "8B" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">Actuaries develop mortality assumptions and rates for a variety of purposes, including pricing, reserving, and product modeling. By definition, the rate that an actuary enters into an actuarial model of an insurance product is the</p>",
"arrAnsChoices": [ "tabular mortality rate", "assumed mortality rate", "survival rate", "experience mortality rate" ],
"arrAnsIDs": [ 491281, 491282, 491283, 491284 ],
"intCR": 2,
"arrAnswerFeedback": [ "<p class=\"explanations\">The mortality rates that are shown in mortality tables are known as <b>tabular mortality rates</b>.</p>", "<p class=\"explanations\">By adjusting expected mortality, the actuary creates useful mortality assumptions in the form of assumed mortality rates. Assumed mortality refers to the hypothetical or assumed number or rate of deaths in a given group of people. Most U.S. companies create mortality tables for pricing by modifying basic tables to reflect their research with regard to risk class, smoking status, policy duration, age, sex, and policy&nbsp;size.</p><p class=\"explanations\"><b>Learning Objective: 8B. Describe a basic process for developing mortality assumptions.</b></p>", "<p class=\"explanations\">Mortality tables can provide survival rates for each age, which are particularly useful for designing annuities. A <b>survival rate</b> is the percentage of people within a cohort who have attained a given age and are expected to be alive at their next birthday.</p>", "<p class=\"explanations\">Mortality experience refers to the number of deaths that actually occur in a given group of people. Accordingly, <b>experience mortality rates</b> are the historical rates of death in a given cohort.</p>" ]
}

arrQuestions['LOMA_371_SE_041'] = {
"strID": "LOMA_371_SE_041",
"questionID": 121480,
"item": "LOMA_371_PSE2021_041",
"primaryLO": "8C",
"textref": "c. 8, p. 6",
"textbook": 0,
"chapter": 8,
"module": 3,
"arrLOs": [ "8C" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">Use the following data from an annuity mortality table for females to answer this question:</p><table class=\"tbexam\" align=\"center\"><tr><td style=\"vertical-align: middle; text-align: center; background-color: #DCDCDC;\"><b>Age</b></td><td style=\"vertical-align: middle; text-align: center; background-color: #DCDCDC;\"><b>Mortality Rate<br />per 1,000</b></td><td style=\"vertical-align: middle; text-align: center; background-color: #DCDCDC;\"><b>Number<br />Living</b></td><td style=\"vertical-align: middle; text-align: center; background-color: #DCDCDC;\"><b>Number<br />Dying</b></td></tr><tr><td style=\"vertical-align: middle; text-align: center;\">70</td><td style=\"vertical-align: middle; text-align: center;\">??</td><td style=\"vertical-align: middle; text-align: center;\">82,533</td><td style=\"vertical-align: middle; text-align: center;\">1,163</td></tr><tr><td style=\"vertical-align: middle; text-align: center;\">71</td><td style=\"vertical-align: middle; text-align: center;\">??</td><td style=\"vertical-align: middle; text-align: center;\">81.272</td><td style=\"vertical-align: middle; text-align: center;\">1,261</td></tr></table><p class=\"stem\">The mortality rate for females aged 71 is approximately</p>",
"arrAnsChoices": [ "15.30 per thousand", "15.50 per thousand", "64.45 per thousand", "65.45 per thousand" ],
"arrAnsIDs": [ 491285, 491286, 491287, 491288 ],
"intCR": 2,
"arrAnswerFeedback": [ "<p class=\"explanations\">In this scenario, the mortality rate for females aged 71 is calculated as: 1,261 ÷ 81,272 = 0.0155 (1,000 × 0.016 = <b>15.50 per thousand</b>).</p>", "<p class=\"explanations\">To determine the mortality rate for the age 71 cohort, an actuary divides the number of deaths by the size of the cohort, as follows: 1,261 ÷ 81,272 = 0.0155. If an actuary were building a mortality table that expresses the mortality rate as the number of deaths per thousand lives, the mortality rate for the cohort of females at age 71 would be (1,000 × 0.0155 = 15.50 per thousand). </p><p class=\"explanations\"><b>Learning Objective: 8C. Identify and perform calculations on data from a mortality table.</b></p>", "<p class=\"explanations\">In this scenario, the mortality rate for females aged 71 is calculated as: 1,261 ÷ 81,272 = 0.0155 (1,000 × 0.016 = <b>15.50 per thousand</b>).</p>", "<p class=\"explanations\">In this scenario, the mortality rate for females aged 71 is calculated as: 1,261 ÷ 81,272 = 0.0155 (1,000 × 0.016 = <b>15.50 per thousand</b>).</p>" ]
}

arrQuestions['LOMA_371_SE_042'] = {
"strID": "LOMA_371_SE_042",
"questionID": 121481,
"item": "LOMA_371_PSE2021_042",
"primaryLO": "8D",
"textref": "c. 8, p. 10",
"textbook": 0,
"chapter": 8,
"module": 3,
"arrLOs": [ "8D" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">In the United States, a mortality table that shows the expected mortality rates of people who have recently been underwritten for insurance policies is called</p>",
"arrAnsChoices": [ "a select mortality table", "an ultimate mortality table", "a unisex mortality table", "a published mortality table" ],
"arrAnsIDs": [ 491289, 491290, 491291, 491292 ],
"intCR": 1,
"arrAnswerFeedback": [ "<p class=\"explanations\">A select mortality table shows the expected mortality rates of people who have recently been underwritten for insurance policies. People whose risk characteristics have been evaluated recently are likely to have better mortality risk characteristics during a specified select mortality period following the underwriting evaluation than do people who have not recently undergone an underwriting selection process. (Better mortality risk characteristics for life insurance are risk characteristics that indicate lower mortality.) For mortality tables used in pricing, the select mortality period can range from three to up to 25 years.</p><p class=\"explanations\"><b>Learning Objective: 8D. Identify the purposes and characteristics of different types of mortality tables.</b></p>", "<p class=\"explanations\">An ultimate mortality table shows the expected mortality rates of people who <b>have not recently been underwritten</b> for insurance policies. Several years after a person has been examined in an underwriting process, the person could develop new risk characteristics. In this context, the ultimate mortality period is the period of time after the select mortality period has ended. </p>", "<p class=\"explanations\">Unisex mortality tables are mortality tables that show a single set of mortality rates to be used for both males and females. When an insurer uses unisex mortality tables, men and women of the same age are charged the same rates for the same type and amount of coverage.</p>", "<p class=\"explanations\">Published mortality tables, also called public mortality tables, are mortality tables that are made available to the public through printed documents and electronic sources. Published mortality tables are based on the mortality of the public at large or a broad cross-section of the population. The mortality tables compiled and published by the Society of Actuaries are examples of published mortality tables.</p>" ]
}

arrQuestions['LOMA_371_SE_043'] = {
"strID": "LOMA_371_SE_043",
"questionID": 121482,
"item": "LOMA_371_PSE2021_043",
"primaryLO": "8E",
"textref": "c. 8, p. 11",
"textbook": 0,
"chapter": 8,
"module": 3,
"arrLOs": [ "8E" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">Mortality patterns typically differ between certain groups, and insurers have several mortality table options available to use, or they can develop their own. Generally, the mortality rate of men at any given age—up to the end of a mortality table—is (<b>higher / lower</b>) than that for women. Larger insurers are (<b>more / less</b>) likely to develop proprietary mortality tables than are smaller insurers.</p>",
"arrAnsChoices": [ "higher / more", "higher / less", "lower / more", "lower / less" ],
"arrAnsIDs": [ 491293, 491294, 491295, 491296 ],
"intCR": 1,
"arrAnswerFeedback": [ "<p class=\"explanations\">Actual mortality rates and life expectancies differ by sex. On average, women live longer than do men. Therefore, the mortality rate of men at any given age—up to the end of a mortality table—is generally higher than that for women.</p><p class=\"explanations\">Proprietary mortality tables are the mortality tables a single insurance company develops for internal use, based largely on its experience with its own customers. Larger insurance companies are more likely to develop proprietary mortality tables than are smaller insurers.</p><p class=\"explanations\"><b>Learning Objective: 8E. Describe the difference between the mortality patterns of different groups and explain the effect these differences have on product design.</b></p>", "<p class=\"explanations\">It is true that the mortality rate of men at any given age—up to the end of a mortality table—is higher than that for women. However, larger insurance companies are <b>more</b> likely to develop proprietary mortality tables than are smaller insurers.</p>", "<p class=\"explanations\">It is true that larger insurance companies are more likely to develop proprietary mortality tables than are smaller insurers. However, the mortality rate of men at any given age—up to the end of a mortality table—is <b>higher</b> than that for women.</p>", "<p class=\"explanations\">Generally, the mortality rate of men at any given age—up to the end of a mortality table—is <b>higher</b> than that for women. In addition, larger insurance companies are <b>more</b> likely to develop proprietary mortality tables than are smaller insurers.</p>" ]
}

arrQuestions['LOMA_371_SE_044'] = {
"strID": "LOMA_371_SE_044",
"questionID": 121483,
"item": "LOMA_371_PSE2021_044",
"primaryLO": "8F",
"textref": "c. 8, pp. 13-14",
"textbook": 0,
"chapter": 8,
"module": 3,
"arrLOs": [ "8F" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">Naleema Patel, an actuary at the Ballantyne Life Insurance Company, expects a group of 74-year-old insureds to live longer than the tabular mortality rates indicate. If Ms.&nbsp;Patel used the setback method to modify the tabular mortality rates for this group, she would</p>",
"arrAnsChoices": [ "multiply the tabular rate by a factor smaller than 100 percent", "multiply the tabular rate by a factor greater than 100 percent", "use the tabular rate for a group of insureds who are less than 74 years old", "use the tabular rate for a group of insureds who are more than 74 years old" ],
"arrAnsIDs": [ 491297, 491298, 491299, 491300 ],
"intCR": 3,
"arrAnswerFeedback": [ "<p class=\"explanations\">Using the <b>projection method</b>, an insurer would multiply the tabular rates by a factor smaller than 100 percent, if the insurer expects people in the specified group to live longer than the tabular mortality rates indicate.</p>", "<p class=\"explanations\">Using the <b>projection method</b>, an insurer would multiply the tabular rates by a factor greater than 100 percent, if the insurer expects people in the specified group to die sooner than the tabular mortality rates indicate.</p>", "<p class=\"explanations\">The setback method of adjusting tabular mortality rates consists of showing future decreases in mortality for people of a given age by using the tabular mortality rate for a younger age. When applying an age setback, insurers typically use values of one to five years. Generally, insurers avoid using a setback of greater than five years, as a large setback could distort the mortality curve.</p><p class=\"explanations\"><b>Learning Objective: 8F. Describe the projection method and the setback method for modifying tabular mortality rates.</b></p>", "<p class=\"explanations\">The setback method of adjusting tabular mortality rates consists of showing future decreases in mortality for people of a given age by using the tabular mortality rate for a <b>younger age</b>. When applying an age setback, insurers typically use values of one to five years. </p>" ]
}

arrQuestions['LOMA_371_SE_045'] = {
"strID": "LOMA_371_SE_045",
"questionID": 121484,
"item": "LOMA_371_PSE2021_045",
"primaryLO": "8H",
"textref": "c. 8, pp. 17-18",
"textbook": 0,
"chapter": 8,
"module": 3,
"arrLOs": [ "8H" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">Building an expected mortality margin into a life insurance or an annuity product’s technical design may help the insurer meet its benefit obligations if actual mortality rates turn out to be different from what was expected. If a life insurance product’s actual mortality rates are lower than the margin-adjusted mortality rates, the life insurance product’s profits will be (<b>lower / higher</b>). If an annuity product’s actual mortality rates are lower than the margin-adjusted mortality rates, the annuity product’s profits will be (<b>lower/ higher</b>).</p>",
"arrAnsChoices": [ "lower / lower", "lower / higher", "higher / lower", "higher / higher" ],
"arrAnsIDs": [ 491301, 491302, 491303, 491304 ],
"intCR": 3,
"arrAnswerFeedback": [ "<p class=\"explanations\">It is true that if actual mortality rates on an annuity product turn out to be lower than the margin-adjusted mortality rates, the product’s profits will be lower. However, if actual mortality rates on a life insurance product are lower than the margin-adjusted mortality rates, the life insurance product’s profits will be <b>higher.</b></p>", "<p class=\"explanations\">If actual mortality on a life insurance product turns out to be lower than the margin-adjusted mortality rates, the life insurance product’s profits will be <b>higher. </b>If actual mortality on an annuity product are lower than the margin-adjusted mortality rates, the annuity product’s profits will be <b>lower</b>.</p>", "<p class=\"explanations\">For insurance companies, a mortality margin is a provision for conservatism in mortality risk projections. When actual mortality rates on a life insurance product are lower than the margin-adjusted mortality rates, the life insurance product’s profits will be higher. When actual mortality on an annuity product are lower than the margin-adjusted mortality rates, the annuity product’s profits will be lower.</p><p class=\"explanations\"><b>Learning Objective: 8H. Define a mortality margin and describe its use in life insurance and annuity products.</b></p>", "<p class=\"explanations\">It is true that if actual mortality rates on a life insurance product are lower than the margin-adjusted mortality rates, the life insurance product’s profits will be higher. However, if actual mortality on an annuity product are lower than the margin-adjusted mortality rates, the annuity product’s profits will be lower.</p>" ]
}

arrQuestions['LOMA_371_SE_046'] = {
"strID": "LOMA_371_SE_046",
"questionID": 121485,
"item": "LOMA_371_PSE2021_046",
"primaryLO": "9A",
"textref": "c. 9, pp. 3-4",
"textbook": 0,
"chapter": 9,
"module": 3,
"arrLOs": [ "9A" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">Insurers typically track four types of operating expenses: development expenses, acquisition expenses, maintenance expenses, and overhead expenses. One example of an insurer’s <i>acquisition</i> expenses includes the costs associated with</p>",
"arrAnsChoices": [ "research", "an inforce contract", "starting a new product line", "product advertising" ],
"arrAnsIDs": [ 491305, 491306, 491307, 491308 ],
"intCR": 4,
"arrAnswerFeedback": [ "<p class=\"explanations\"><b>Development expenses</b>, also known as <b>research</b> and development expenses, are expenses the insurer incurs in starting a new product or product line. </p>", "<p class=\"explanations\"><b>Maintenance expenses</b>, or renewal expenses, are expenses the insurer incurs while a contract is in force.</p>", "<p class=\"explanations\"><b>Development expenses</b> are expenses the insurer incurs in starting a new product or product line.</p>", "<p class=\"explanations\">Acquisition expenses are expenses an insurer incurs to obtain and issue new life insurance policies and annuity contracts. </p><p class=\"explanations\">For expense control purposes, companies further divide operating expenses into controllable and noncontrollable expenses, direct and indirect expenses, and variable and fixed expenses. A typical expense falls into multiple categories. For example, the cost of product advertising is an<b> acquisition expense</b>, a controllable expense, a direct expense, and a variable expense.</p><p class=\"explanations\"><b>Learning Objective: 9A. Identify the primary internal and external sources from which insurance companies gather expense data.</b></p>" ]
}

arrQuestions['LOMA_371_SE_047'] = {
"strID": "LOMA_371_SE_047",
"questionID": 121486,
"item": "LOMA_371_PSE2021_047",
"primaryLO": "9B",
"textref": "c. 9, p. 8",
"textbook": 0,
"chapter": 9,
"module": 3,
"arrLOs": [ "9B" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">Insurance companies can use one of two methods—full costing or marginal costing—for costing life insurance and annuity products. By using (<b>full costing / marginal costing</b>), an insurer counts both direct and indirect expenses. Insurers typically set margins that are designed to cover contingencies when using (<b>full costing / marginal costing</b>).</p>",
"arrAnsChoices": [ "full costing / full costing", "full costing / marginal costing", "marginal costing / full costing", "marginal costing / marginal costing" ],
"arrAnsIDs": [ 491309, 491310, 491311, 491312 ],
"intCR": 2,
"arrAnswerFeedback": [ "<p class=\"explanations\">It is true that, by using full costing, an insurer counts both direct and indirect expenses. However, insurers typically set margins that are designed to cover contingencies when using <b>marginal&nbsp;costing</b>.</p>", "<p class=\"explanations\">Full costing requires an insurer to allocate all operating expenses to each product line and potentially to each product. Under marginal costing, indirect expenses are not allocated to products. As a result, marginal costing generally produces a smaller operating expense estimate than full costing produces. To offset this difference, insurers typically set margins that are designed to cover contingencies.</p><p class=\"explanations\"><b>Learning Objective: 9B. Distinguish between full costing and marginal costing and calculate expenses for a product using full costing and marginal costing.</b></p>", "<p class=\"explanations\">By using <b>full costing</b>, an insurer counts both direct and indirect expenses. In addition, insurers typically set margins that are designed to cover contingencies when using <b>marginal costing</b>.</p>", "<p class=\"explanations\">It is true that insurers typically set margins that are designed to cover contingencies when using marginal costing. However, by using <b>full costing</b>, an insurer counts both direct and indirect expenses. </p>" ]
}

arrQuestions['LOMA_371_SE_048'] = {
"strID": "LOMA_371_SE_048",
"questionID": 121487,
"item": "LOMA_371_PSE2021_048",
"primaryLO": "9D",
"textref": "c. 9, p. 10",
"textbook": 0,
"chapter": 9,
"module": 3,
"arrLOs": [ "9D" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">Adam Randall is a life insurance sales agent for Hampshire Financial. His compensation schedule includes both first-year commissions and renewal commissions. Mr.&nbsp;Randall receives relatively high first-year commissions and lower renewal commissions. Renewal commissions are payable to Mr.&nbsp;Randall only if he still represents Hampshire when the commission becomes due. In this scenario, it most likely is correct to say that the commissions Hampshire pays to Mr.&nbsp;Randall are</p>",
"arrAnsChoices": [ "heaped commissions with nonvested renewal commissions", "heaped commissions with vested renewal commissions", "deposit-based commissions with nonvested renewal commissions", "deposit-based commissions with vested renewal commissions " ],
"arrAnsIDs": [ 491313, 491314, 491315, 491316 ],
"intCR": 1,
"arrAnswerFeedback": [ "<p class=\"explanations\">A common arrangement for life insurance sales is the heaped commission schedule, which features relatively high first-year commissions and lower renewal commissions. In this situation, Mr.&nbsp;Randall’s compensation schedule is a heaped commission schedule with nonvested renewal commissions. A heaped commission schedule encourages agents to focus on generating new business. A nonvested commission is payable only if the agent still represents the company when the commission becomes due.</p><p class=\"explanations\"><b>Learning Objective: 9D. Explain how insurers manage commission expenses for life insurance and annuity products.</b></p>", "<p class=\"explanations\">It is true that Hampshire pays heaped commissions to Mr.&nbsp;Randall. However, a vested commission is guaranteed payable to an agent <b>whether or not</b> the agent represents the company when the commission becomes due.</p>", "<p class=\"explanations\">It is true that the renewal commissions are nonvested. However, a deposit-based commission schedule is the simplest form of commission schedule <b>for annuities</b>. A deposit-based commission schedule pays commissions only on premium payments. Annuity commission schedules generally do not distinguish between first-year and renewal commissions</p>", "<p class=\"explanations\">A vested commission is guaranteed payable to an agent <b>whether or not</b> the agent represents the company when the commission becomes due. A deposit-based commission schedule is the simplest form of commission schedule <b>for annuities</b>, which pays commissions only on premium payments. Annuity commission schedules generally do not distinguish between first-year and renewal commissions</p>" ]
}

arrQuestions['LOMA_371_SE_049'] = {
"strID": "LOMA_371_SE_049",
"questionID": 121488,
"item": "LOMA_371_PSE2021_049",
"primaryLO": "9E",
"textref": "c. 9, pp. 13-15",
"textbook": 0,
"chapter": 9,
"module": 3,
"arrLOs": [ "9E" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">For a block of life insurance policies, the ratio of business in force that terminates for nonpayment of premium during a given period to the total business in force at the beginning of that period is known as the</p>",
"arrAnsChoices": [ "nonguaranteed element", "withdrawal rate", "surrender rate", "lapse rate" ],
"arrAnsIDs": [ 491317, 491318, 491319, 491320 ],
"intCR": 4,
"arrAnswerFeedback": [ "<p class=\"explanations\"><b>Nonguaranteed elements</b> (NGEs) in life insurance and annuities are product features that allow an insurer to reward customers when the insurer has experienced or anticipates it will experience favorable deviations from its assumptions, or, conversely, allow the insurer to charge customers more when the insurer has experienced or anticipates it will experience unfavorable deviations from its assumptions.</p>", "<p class=\"explanations\">Insurers typically allow customers to withdraw a certain percentage of the cash value of a life insurance policy or the accumulated value of a deferred annuity contract each year without charge. In the context of addressing specific risks associated with variable deferred annuities, one way in which insurers can adjust product designs is by applying age-based guaranteed withdrawals, in which contract owners receive a higher guaranteed <b>withdrawal rate</b> if they delay drawing income until a specified age.</p>", "<p class=\"explanations\">The <b>surrender rate</b> for a block of insurance or annuity contracts is the ratio of the number of contracts surrendered during a given period to the total number of contracts in force at the beginning of that period. A surrender is a transaction in which the owner of a cash value life insurance contract or deferred annuity contract chooses to receive the contract’s monetary value before the contract matures.</p>", "<p class=\"explanations\">The lapse rate for a block of life insurance policies is the ratio of business in force that terminates for nonpayment of premium during a given period to the total business in force at the beginning of that period. A lapse is the termination of a life insurance policy due to nonpayment of premium. Lapses, surrenders, and withdrawals are some of the policyholder behaviors that can affect a product’s performance.</p><p class=\"explanations\"><b>Learning Objective: 9E. Describe how policyholder behavior affects life insurance and annuity product design and modeling.</b></p>" ]
}

arrQuestions['LOMA_371_SE_050'] = {
"strID": "LOMA_371_SE_050",
"questionID": 121489,
"item": "LOMA_371_PSE2021_050",
"primaryLO": "9F",
"textref": "c. 9, pp. 17-18",
"textbook": 0,
"chapter": 9,
"module": 3,
"arrLOs": [ "9F" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">The relative size of a margin can be affected by a variety of product characteristics. Margins tend to be <i>smaller</i> if</p>",
"arrAnsChoices": [ "marketplace competition is strong", "investment risk to the insurer is high", "investment risk to the customer is low", "the contract gives the customer longer-term interest-rate guarantees" ],
"arrAnsIDs": [ 491321, 491322, 491323, 491324 ],
"intCR": 1,
"arrAnswerFeedback": [ "<p class=\"explanations\">Margins tend to be smaller if marketplace competition is strong, investment risk to the insurer is low, investment risk to the customer is high, and the contract gives the customer shorter-term interest-rate guarantees.</p><p class=\"explanations\">Margins tend to be larger if marketplace competition is weak, investment risk to the insurer is high, investment risk to the customer is low, and the contract gives the customer longer-term interest-rate&nbsp;guarantees.</p><p class=\"explanations\"><b>Learning Objective: 9F. Decide whether a given product characteristic is associated with a smaller or a larger margin.</b></p>", "<p class=\"explanations\">A product that presents a higher investment risk to the insurer also presents a lower investment risk to the customer, and therefore is likely to require a <b>higher margin</b>—which also makes the product vulnerable to interest rate compression.</p>", "<p class=\"explanations\">A product that presents a lower investment risk to the customer also presents a higher investment risk to the insurer, and therefore is likely to require a <b>higher margin</b>—which also makes the product vulnerable to interest rate compression</p>", "<p class=\"explanations\">If an insurer is locked into a product with longer-term interest-rate guarantees, the product represents a greater risk to the insurer and is likely to have a <b>higher margin</b>.</p>" ]
}

arrQuestions['LOMA_371_SE_051'] = {
"strID": "LOMA_371_SE_051",
"questionID": 121490,
"item": "LOMA_371_PSE2021_051",
"primaryLO": "9G",
"textref": "c. 9, p. 22",
"textbook": 0,
"chapter": 9,
"module": 3,
"arrLOs": [ "9G" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">The number and type of charges incorporated into a product structure depend partly on whether the product is fixed or variable. The following statements are about how an insurer incorporates operating expense charges into product design. Select the answer choice containing the correct&nbsp;statement.</p>",
"arrAnsChoices": [ "For fixed life insurance products, insurers generally impose surrender charges that are lowest during the early years of a contract and then increase gradually over time.", "U.S. securities laws require that all expense charges in variable products—including variable life insurance and variable annuity products—be disclosed separately.", "For universal life products, insurers typically assess separate transaction charges, which may be either front-end sales charges or, more commonly, back-end sales charges.", "A common administrative charge in variable contracts is a mortality and expense (M&E) risk charge, which is a periodic charge assessed to cover general maintenance costs, such as preparation of account and other statements." ],
"arrAnsIDs": [ 491325, 491326, 491327, 491328 ],
"intCR": 2,
"arrAnswerFeedback": [ "<p class=\"explanations\">For both fixed life insurance products and fixed-rate deferred annuities, insurers generally impose surrender charges that are <b>highest</b> during the early years of a contract and then <b>decrease</b> gradually over time.</p>", "<p class=\"explanations\">The expense charges for variable products can be categorized as administrative charges and transaction charges. Common administrative charges on variable life insurance and annuity products include a contract maintenance charge, a rider charge, a mortality and expense (M&E) risk charge, and a fund operating expense charge. Transaction charges for variable products can be divided into sales charges, transfer charges, and surrender charges. </p><p class=\"explanations\"><b>Learning Objective: 9G. Explain how insurers incorporate operating expense charges into the product design of fixed and variable products.</b></p>", "<p class=\"explanations\">Most insurers do not assess separate sales charges on fixed insurance and annuity products. However, for <b>variable annuity products</b>, insurers typically assess transaction charges, which include sales charges: either front-end sales charges or, more commonly, back-end sales charges.</p>", "<p class=\"explanations\">A <b>contract maintenance charge</b> a periodic administrative charge assessed to cover general maintenance costs, such as preparation of account and other statements.</p>" ]
}

arrQuestions['LOMA_371_SE_052'] = {
"strID": "LOMA_371_SE_052",
"questionID": 121491,
"item": "LOMA_371_PSE2021_052",
"primaryLO": "9H",
"textref": "c. 9, p. 25",
"textbook": 0,
"chapter": 9,
"module": 3,
"arrLOs": [ "9H" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">For fixed-rate universal life insurance, fixed-rate deferred annuities, and variable products that offer fixed fund options, design adjustments that can help control a life insurance company’s product risks include</p>",
"arrAnsChoices": [ "lengthening the guarantee period for minimum guaranteed interest-crediting rates", "limiting withdrawals of account values by monetary amount, frequency, and percentage of account value", "increasing current interest-crediting rates", "designing a higher minimum guaranteed interest-crediting rate, where regulations permit" ],
"arrAnsIDs": [ 491329, 491330, 491331, 491332 ],
"intCR": 2,
"arrAnswerFeedback": [ "<p class=\"explanations\">Design adjustments that can help control a life insurance company’s product risks include <b>shortening</b> the guarantee period for minimum guaranteed interest-crediting rates.</p>", "<p class=\"explanations\">For life insurance and annuity products, design features insurers can use to combat risk include surrender charges, restrictions on policy loan activity, adjustable interest rates for policy loans, and nonguaranteed elements (NGEs), such as policy dividends on participating fixed premium life insurance policies or adjustments in periodic charges deducted from accumulated values.</p><p class=\"explanations\">Design adjustments to mitigate risk for variable universal life insurance and variable deferred annuities include limiting new premium additions to fixed accounts in a specified period. To address specific risks associated with variable deferred annuities, insurers can use index-based guarantees, asset transfer algorithms, or impose restrictions on the kinds of investments that contract owners can select.</p><p class=\"explanations\"><b>Learning Objective: 9H. Describe the strategies that life insurance companies use for managing the risks in life insurance and annuity products.</b></p>", "<p class=\"explanations\">Design adjustments that can help control an insurer’s product risks include <b>decreasing </b>current interest-crediting rates within allowable limits.</p>", "<p class=\"explanations\">Design adjustments that can help control an insurer’s product risks include designing a <b>lower</b> minimum guaranteed interest-crediting rate, where regulations permit.</p>" ]
}

arrQuestions['LOMA_371_SE_053'] = {
"strID": "LOMA_371_SE_053",
"questionID": 121492,
"item": "LOMA_371_PSE2021_053",
"primaryLO": "10A",
"textref": "c. 10, pp. 4-5",
"textbook": 0,
"chapter": 10,
"module": 4,
"arrLOs": [ "10A" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">Many insurers offer life insurance policies that include supplemental benefits, which are typically added as riders to a policy. One common benefit allows a policyowner to elect to receive all or part of the policy’s death benefit before the insured’s death if certain conditions are met. Select the answer choice that correctly identifies this benefit and whether a payment of this benefit reduces the death benefit that would be paid to the beneficiary after the insured’s death.</p>",
"columnHead": "<u>Type of benefit</u></div><div class=\"anshead\"><u>Reduces death benefit paid</u>",
"arrAnsChoices": [ "nonforfeiture value</div><div class=\"anscell\" onclick=\"recordAns(1);\">no", "nonforfeiture value</div><div class=\"anscell\" onclick=\"recordAns(2);\">yes", "accelerated death benefit</div><div class=\"anscell\" onclick=\"recordAns(3);\">no", "accelerated death benefit</div><div class=\"anscell\" onclick=\"recordAns(4);\">yes" ],
"arrAnsIDs": [ 491334, 491335, 491336, 491337 ],
"intCR": 4,
"arrAnswerFeedback": [ "<p class=\"explanations\">For policyowners of cash value life insurance policies, an important benefit is the <b>nonforfeiture value</b>, which is the benefit that an insurer guarantees to a policyowner if the insurance contract lapses. In addition, the payment of an accelerated death benefit usually <b>reduces</b> the death benefit that will be paid to the beneficiary at the insured’s death.</p>", "<p class=\"explanations\">It is true that the payment of an accelerated death benefit usually reduces the death benefit that will be paid to the beneficiary at the insured’s death. However, for policyowners of cash value life insurance policies, an important benefit is the <b>nonforfeiture value</b>, which is the benefit that an insurer guarantees to a policyowner if the insurance contract lapses.</p>", "<p class=\"explanations\">It is true that the accelerated death benefit allows a policyowner to elect to receive all or part of the policy’s death benefit before the insured’s death if certain conditions are met. However, the payment of an accelerated death benefit usually <b>reduces </b>the death benefit that will be paid to the beneficiary at the insured’s death.</p>", "<p class=\"explanations\">Two types of accelerated death benefits, also known as living benefits, are the critical illness benefit and the long-term care (LTC) insurance benefit. Under a critical illness benefit—also known as a dread disease benefit—the insurer agrees to pay a portion of the policy’s face amount to the policyowner if the insured suffers from a specified disease. With a long-term care (LTC) insurance benefit, the insurer agrees to pay a monthly benefit to the policyowner if the insured requires constant care for a medical condition.</p><p class=\"explanations\"><b>Learning Objective: 10A. Identify the key benefits of life insurance, such as death benefits, nonforfeiture values, cash surrender values, and benefits offered through policy riders.</b></p>" ]
}

arrQuestions['LOMA_371_SE_054'] = {
"strID": "LOMA_371_SE_054",
"questionID": 121493,
"item": "LOMA_371_PSE2021_054",
"primaryLO": "10C",
"textref": "c. 10, pp. 11-12",
"textbook": 0,
"chapter": 10,
"module": 4,
"arrLOs": [ "10C" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">In establishing a premium rate for a particular product, actuaries do not calculate specific rates for individual policies; instead, they develop a rate for a block of policies. The following statements are about calculating the cost of benefits for a block of multiyear term life insurance policies. Select the answer choice containing the correct statement.</p>",
"arrAnsChoices": [ "The cost of benefits calculations for a block of multiyear term life insurance policies must address both level annual premium rates and lapse rates.", "Because term life insurance policies usually accumulate cash values, actuaries need to calculate nonforfeiture values as part of the cost of benefits.", "Actuaries need to consider in their calculations that policyowners generally purchase multiyear term life insurance products by paying a single premium payment.", "When calculating rates for a block of multiyear term insurance policies, actuaries consider the fact that surrender benefits do not begin until the policy has been in force for several years." ],
"arrAnsIDs": [ 491338, 491339, 491340, 491341 ],
"intCR": 1,
"arrAnswerFeedback": [ "<p class=\"explanations\">For a block of multiyear term life insurance policies, the number of insureds decreases each year because some insureds die and others allow their policies to lapse. To calculate the total number of death benefit payments for the block, an insurer must project the total number of deaths for the duration of the term. In the first year of the block’s term, the insurer multiplies the number of insureds at the beginning of the year by the appropriate mortality rate to project the number of deaths expected during the year.</p><p class=\"explanations\">After the first year, the insurer must account for both policy lapses and insured deaths. The insurer repeats these calculations to find the number of deaths for each year in the term. The total number of deaths represents the number of benefit payments the insurer expects to make during the entire term.</p><p class=\"explanations\"><b>Learning Objective: 10C. Describe the process of calculating the cost of benefits for one-year term life insurance products, multiyear term life insurance products, and whole life insurance products.</b></p>", "<p class=\"explanations\">Because term life insurance policies usually <b>do not</b> accumulate cash values, actuaries <b>do not</b> need to calculate nonforfeiture values.</p>", "<p class=\"explanations\">Policyowners typically purchase multiyear term life insurance products with <b>level premiums</b>, which are periodic premium payments that are equal in amount and generally are paid to the insurer monthly, quarterly, or annually<b>.</b></p>", "<p class=\"explanations\">Term life insurance policies typically do not have surrender benefits, because they usually do not accumulate cash values. Most cash value life insurance products, including <b>whole life insurance</b> policies, do not build a cash value until the policy has been in force for several years. Therefore, surrender benefits do not begin until these policies have been in force for several years.</p>" ]
}

arrQuestions['LOMA_371_SE_055'] = {
"strID": "LOMA_371_SE_055",
"questionID": 121494,
"item": "LOMA_371_PSE2021_055",
"primaryLO": "10D",
"textref": "c. 10, p. 21",
"textbook": 0,
"chapter": 10,
"module": 4,
"arrLOs": [ "10D" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">Universal Life (UL) death benefits can take three alternative forms: a level amount death benefit option, an increasing amount death benefit option, and a level amount plus premiums death benefit option. Under all three options, the (<b>insurer / policyowner</b>) chooses the face amount and (<b>may / may not</b>) adjust this amount at any time after policy issue.</p>",
"arrAnsChoices": [ "insurer / may", "insurer / may not", "policyowner / may", "policyowner / may not" ],
"arrAnsIDs": [ 491342, 491343, 491344, 491345 ],
"intCR": 3,
"arrAnswerFeedback": [ "<p class=\"explanations\">It is true that the face amount may be adjusted at any time after policy issue. However, under all three death benefit options, the <b>policyowner </b>chooses the face amount and may adjust this amount at any time.</p>", "<p class=\"explanations\">Under all three death benefit options, the <b>policyowner </b>chooses the face amount and <b>may</b> adjust this amount at any time.</p>", "<p class=\"explanations\">The different options available to policyowners affect how actuaries calculate the mortality cost. Insurers use death benefit calculations to determine the monthly mortality charges for UL policies. These three options are usually known as Option A, Option B, and Option C. Some insurance companies use the terms Option I, Option II, and Option III. </p><p class=\"explanations\"><b>Learning Objective: 10D. Identify the unique attributes of universal life insurance products and explain how policyowner options affect the calculation of the cost of benefits.</b></p>", "<p class=\"explanations\">It is true that, under all three death benefit options, the policyowner chooses the face amount. However, the policyowner <b>may</b> adjust this amount at any time.</p>" ]
}

arrQuestions['LOMA_371_SE_056'] = {
"strID": "LOMA_371_SE_056",
"questionID": 121495,
"item": "LOMA_371_PSE2021_056",
"primaryLO": "10D",
"textref": "c. 10, pp. 23-24",
"textbook": 0,
"chapter": 10,
"module": 4,
"arrLOs": [ "10D" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">Typically, the monthly mortality rate applied varies by gender and underwriting risk class and increases as the insureds age. One type of monthly mortality rate that is applied to Universal Life (UL) products is the current mortality rate, which represents</p>",
"arrAnsChoices": [ "the expected mortality rate minus a mortality margin", "the expected mortality rate plus a mortality margin", "the guaranteed maximum mortality rate minus a mortality margin", "the guaranteed maximum mortality rate plus a mortality margin" ],
"arrAnsIDs": [ 491346, 491347, 491348, 491349 ],
"intCR": 2,
"arrAnswerFeedback": [ "<p class=\"explanations\">The current mortality rate is the monthly mortality rate used to calculate the monthly mortality charge and is generally substantially lower than the guaranteed maximum mortality rate. However, the current mortality rate represents the expected mortality rate <b>plus</b> a mortality margin.</p>", "<p class=\"explanations\">The current mortality rate is the monthly mortality rate actually used to calculate the monthly mortality charge and is generally substantially lower than the guaranteed maximum mortality rate. The current mortality rate represents the expected mortality rate plus a mortality margin.</p><p class=\"explanations\">The guaranteed maximum mortality rate is specified in the contract and sets an upper limit on the mortality charge. The insurer guarantees not to charge a rate higher than the guaranteed maximum mortality rate.</p><p class=\"explanations\"><b>Learning Objective: 10D. Identify the unique attributes of universal life insurance products and explain how policyowner options affect the calculation of the cost of benefits.</b></p>", "<p class=\"explanations\">The current mortality rate is the monthly mortality rate used to calculate the monthly mortality charge and is generally substantially lower than the guaranteed maximum mortality rate. The current mortality rate represents the expected mortality rate <b>plus </b>a mortality margin.</p><p class=\"explanations\">The <b>guaranteed maximum mortality rate</b> is specified in the contract and sets an upper limit on the mortality charge. The insurer guarantees not to charge a rate higher than the guaranteed maximum mortality rate.</p>", "<p class=\"explanations\">The current mortality rate is the monthly mortality rate used to calculate the monthly mortality charge and is generally substantially lower than the guaranteed maximum mortality rate. The current mortality rate represents the expected mortality rate plus a mortality margin.</p><p class=\"explanations\">The <b>guaranteed maximum mortality rate</b> is specified in the contract and sets an upper limit on the mortality charge. The insurer guarantees not to charge a rate higher than the guaranteed maximum mortality rate.</p>" ]
}

arrQuestions['LOMA_371_SE_057'] = {
"strID": "LOMA_371_SE_057",
"questionID": 121496,
"item": "LOMA_371_PSE2021_057",
"primaryLO": "11B",
"textref": "c. 11, p. 6",
"textbook": 0,
"chapter": 11,
"module": 4,
"arrLOs": [ "11B" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">For many types of annuities, the contract owner selects a death benefit or death benefit rider for the contract. The following statements are about the methods an insurer uses to calculate the cost of future deferred annuity death benefits. Select the answer choice containing the correct statement.</p>",
"arrAnsChoices": [ "Typically, an insurer will add the expected number of surrenders from the number of in-force contracts at the end of the contract year.", "The process insurers use to estimate the cost of future deferred annuity death benefits is different from the process used to estimate the cost of life insurance death benefits.", "The total of the future death benefits equals the sum of the projected death benefits payable for each year in the accumulation period.", "Because annuitants tend to live as long as life insureds, insurers will often use the same sets of mortality data for annuity products as they do for life insurance products." ],
"arrAnsIDs": [ 491350, 491351, 491352, 491353 ],
"intCR": 3,
"arrAnswerFeedback": [ "<p class=\"explanations\">Typically, an insurer will <b>subtract</b> the expected number of surrenders from the number of in-force contracts at the <b>beginning</b> of the contract year.</p>", "<p class=\"explanations\">The process insurance companies use to estimate the cost of future deferred annuity death benefits <b>is similar</b> to the process they use to estimate the cost of life insurance death benefits.</p>", "<p class=\"explanations\">Typically, an insurer (1) subtracts the expected number of surrenders from the number of in-force contracts at the beginning of the contract year; (2) applies an appropriate mortality rate to the remaining number of contracts to determine the number of death benefits payable for the year; and (3) repeat the process for each year of the accumulation period. The total of the future death benefits equals the sum of the projected death benefits payable for each year in the accumulation period.</p><p class=\"explanations\"><b>Learning Objective: 11B. Describe how insurance companies estimate the cost of future annuity death benefits, surrender benefits, withdrawal benefits, and periodic income payments.</b></p>", "<p class=\"explanations\">Because annuitants tend to <b>live longer</b> than life insureds, insurers <b>don’t use</b> the same sets of mortality data for annuity products as they do for life insurance products.</p>" ]
}

arrQuestions['LOMA_371_SE_058'] = {
"strID": "LOMA_371_SE_058",
"questionID": 121497,
"item": "LOMA_371_PSE2021_058",
"primaryLO": "11C",
"textref": "c. 11, p. 9",
"textbook": 0,
"chapter": 11,
"module": 4,
"arrLOs": [ "11C" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">For her annuity contract, Nancy Xiong chose an annuity with a payout option that guarantees a series of periodic income payments to her, as an annuitant, and another annuitant on the contract, until both of them die. Based on the terms of her annuity, payments will continue after the first annuitant dies, but will likely decrease. The type of annuity payout option Ms.&nbsp;Xiong chose is known as a</p>",
"arrAnsChoices": [ "single life annuity with period certain", "single life with refund annuity", "joint life annuity", "joint and survivor (J&S) annuity" ],
"arrAnsIDs": [ 491354, 491355, 491356, 491357 ],
"intCR": 4,
"arrAnswerFeedback": [ "<p class=\"explanations\">A <b>single life annuity with period certain</b> is a payout option that guarantees periodic income payments throughout the lifetime of one annuitant and guarantees that the payments will continue for at least a specified period. If the annuitant dies before the end of the specified period, the insurer provides the periodic income payments to the beneficiary until the end of the period. </p>", "<p class=\"explanations\"><b>A single life with refund annuity</b> is a payout option that guarantees specified periodic income payments throughout the lifetime of one annuitant, and guarantees that the insurer will provide a refund if the annuitant dies before the total of the periodic income payments made equals the amount paid for the annuity. In such a scenario, the contract’s beneficiary receives the refund. </p>", "<p class=\"explanations\">A joint life annuity is a payout option that typically covers more than one life and guarantees periodic income payments until<b> one of the annuitants dies</b>,<b> </b>and then pays nothing more.</p>", "<p class=\"explanations\">A joint and survivor (J&S) annuity, also known as a joint and last survivorship annuity, is a payout option that guarantees a series of periodic income payments to two or more annuitants until both or all of the annuitants die. The insurer bases periodic income payments on the life expectancies of the annuitants. Depending on the terms of the annuity, payments may decrease after the first annuitant dies.</p><p class=\"explanations\"><b>Learning Objective: 11C. Describe and differentiate between the types of guaranteed annuity payout options and life annuity payout options.</b></p>" ]
}

arrQuestions['LOMA_371_SE_059'] = {
"strID": "LOMA_371_SE_059",
"questionID": 121498,
"item": "LOMA_371_PSE2021_059",
"primaryLO": "11D",
"textref": "c. 11, pp. 13-14",
"textbook": 0,
"chapter": 11,
"module": 4,
"arrLOs": [ "11D" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">The Timberlake Insurance Company offers an indexed annuity that contains a participation percentage of 80% and an interest-rate cap of 10%. Timberlake determined that, for the most recent contract year, the reference index increased by 9%. This information indicates that, for the most recent contract year, the amount of index credits that Timberlake will award to annuity contract owners is equal to</p>",
"arrAnsChoices": [ "7.2%", "8.0%", "9.0%", "10.0%" ],
"arrAnsIDs": [ 491358, 491359, 491360, 491361 ],
"intCR": 1,
"arrAnswerFeedback": [ "<p class=\"explanations\">In general, the index-crediting formula calculates index credits by multiplying a fixed indexed annuity (FIA) contract’s accumulated value by the crediting rate, which is based on the reference index’s growth rate, but is affected by provisions. The limiting provisions may include a participation percentage, a cap, or a yield spread. A cap is an upper limit, expressed as a percent, on the rate of a reference index’s gain in value that the insurer credits to the annuity contract as interest. In this scenario, the reference index increased by 9%, which is less than the interest rate cap of 10%. Thus, the interest rate cap does need to be considered with this calculation. The participation percentage of 80% reduces the growth rate credited to the contract’s accumulated value to <b>7.2 percent</b> (0.09 x 0.80 = 0.072).</p><p class=\"explanations\"><b>Learning Objective: 11D. Identify the fixed indexed annuity provisions that pertain to indexed crediting and explain the methods for calculating index credits, including the annual reset method, the point-to-point method, and the high water mark method.</b></p>", "<p class=\"explanations\">The index-crediting formula calculates index credits by multiplying a fixed indexed annuity (FIA) contract’s accumulated value by the <b>crediting rate</b>, which, in this scenario, is based on the reference index’s growth rate of 9%. The participation percentage of 80% reduces the growth rate credited to the contract’s accumulated value to <b>7.2 percent</b> (0.09 x 0.80 = 0.072).</p>", "<p class=\"explanations\">In this scenario, the reference index increased by 9%, which is less than the interest rate cap of 10%. Thus, the interest rate cap does need to be considered with this calculation. However, the participation percentage of 80% needs to be included in the calculation, as it reduces the growth rate credited to the contract’s accumulated value to <b>7.2 percent</b> (0.09 x 0.80 = 0.072).</p>", "<p class=\"explanations\">In this scenario, the reference index increased by 9%, which is less than the interest rate cap of 10%. Thus, the interest rate cap does need to be considered with this calculation. The participation percentage of 80% reduces the growth rate credited to the contract’s accumulated value to <b>7.2 percent</b> (0.09 x 0.80 = 0.072).</p>" ]
}

arrQuestions['LOMA_371_SE_060'] = {
"strID": "LOMA_371_SE_060",
"questionID": 121499,
"item": "LOMA_371_PSE2021_060",
"primaryLO": "11E",
"textref": "c. 11, pp. 21-23",
"textbook": 0,
"chapter": 11,
"module": 4,
"arrLOs": [ "11E" ],
"strType": "choice",
"intMinicase": -1,
"strStem": "<p class=\"stem\">Most variable annuity contracts offer one or more living benefit riders, which can offer some type of guaranteed benefit while the annuitant is alive. One type of living benefit rider guarantees a minimum protected value for a variable annuity contract, even if its accumulated value declines because of poor investment performance. By definition, this rider is known as</p>",
"arrAnsChoices": [ "guaranteed minimum income benefit (GMIB)", "guaranteed minimum withdrawal benefit (GMWB)", "guaranteed lifetime withdrawal benefit (GLWB)", "guaranteed minimum accumulation benefit (GMAB)" ],
"arrAnsIDs": [ 491362, 491363, 491364, 491365 ],
"intCR": 4,
"arrAnswerFeedback": [ "<p class=\"explanations\">The <b>guaranteed minimum income benefit (GMIB)</b> is a living benefit rider that guarantees a minimum protected value that can be converted into periodic income payments—usually after a waiting period of seven to ten years—even if the variable annuity’s accumulated value declines because of poor investment performance. </p>", "<p class=\"explanations\">The <b>guaranteed minimum withdrawal benefit (GMWB)</b> is a living benefit rider that guarantees a minimum protected value against which a variable annuity contract owner may make annual withdrawals of a specified amount, without charge, even if the contract’s accumulated value falls below the protected value because of poor investment performance.</p>", "<p class=\"explanations\">The <b>guaranteed lifetime withdrawal benefit (GLWB)</b> is a living benefit rider that guarantees minimum withdrawals to a variable annuity owner for life. The withdrawal amount is usually specified as a percentage of the contract’s living benefit value or accumulated value, whichever is greater. </p>", "<p class=\"explanations\">Usually, the contract owner must wait for a specified period before the guaranteed value provided under the GMAB becomes available. The amount of the GMAB’s protected value is generally equal to a return of the contract owner’s premium or the premium plus a modest growth factor. </p><p class=\"explanations\"><b>Learning Objective: 11E. Describe and differentiate among the types of variable annuity guarantee riders, including guaranteed minimum death benefit riders and living benefit riders.</b></p>" ]
}




var arrlotext = new Array(); 
arrlotext['1A'] = "1A. Describe the strengths of strong solvency and strong profitability.";
arrlotext['1B'] = "1B. Identify the characteristics of high-risk and low-risk investments.";
arrlotext['1C'] = "1C. Explain the relationship between a risk management culture and product development.";
arrlotext['1D'] = "1D. Explain the actuary’s role in risk management and technical product design and differentiate between actuaries and data scientists.";
arrlotext['1E'] = "1E. Describe the actuarial control cycle.";
arrlotext['10A'] = "10A. Identify the key benefits of life insurance, such as death benefits, nonforfeiture values, cash surrender values, and benefits offered through policy riders.";
arrlotext['10C'] = "10C. Describe the process of calculating the cost of benefits for one-year term life insurance products, multiyear term life insurance products, and whole life insurance products.";
arrlotext['10D'] = "10D. Identify the unique attributes of universal life insurance products and explain how policyowner options affect the calculation of the cost of benefits.";
arrlotext['11B'] = "11B. Describe how insurance companies estimate the cost of future annuity death benefits, surrender benefits, withdrawal benefits, and periodic income payments.";
arrlotext['11C'] = "11C. Describe and differentiate between the types of guaranteed annuity payout options and life annuity payout options.";
arrlotext['11D'] = "11D. Identify the fixed indexed annuity provisions that pertain to indexed crediting and explain the methods for calculating index credits, including the annual reset method, the point-to-point method, and the high water mark method.";
arrlotext['11E'] = "11E. Describe and differentiate among the types of variable annuity guarantee riders, including guaranteed minimum death benefit riders and living benefit riders.";
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
arrlotext['5B'] = "5B. Describe common product development strategies.";
arrlotext['5C'] = "5C. Explain the importance of a product mix and differentiate it from a product portfolio.";
arrlotext['5D'] = "5D. Identify a product’s average shelf life.";
arrlotext['5G'] = "5G. Describe the teams that usually participate in the product development process.";
arrlotext['5I'] = "5I. Explain the product planning stage of product development, including idea generation and idea screening.";
arrlotext['5J'] = "5J. Describe the elements of the comprehensive business analysis stage of product development, including a market analysis, product design objectives, a feasibility study, a marketing plan, marketing projections, and a product proposal.";
arrlotext['6B'] = "6B. Describe important components of financial design for life insurance and annuity products, including company expenses, the cost of benefits, and investment earnings.";
arrlotext['6C'] = "6C. Explain premium structures for individual life insurance, such as a contingency pricing structure and an indeterminate premium structure.";
arrlotext['6D'] = "6D. Describe modeling and testing for technical product design and explain how actuaries can improve the financial results of a product model.";
arrlotext['6E'] = "6E. Describe the activities required for product implementation and launch, differentiating between Day 1 functionality and Day 2 functionality.";
arrlotext['6F'] = "6F. Describe the typical activities of product monitoring, evaluation, and feedback.";
arrlotext['7A'] = "7A. Describe how an insurer’s general account and separate account affect the insurer’s investment earnings.";
arrlotext['7B'] = "7B. Define investment concepts such as <i>price appreciation</i>, <i>price depreciation</i>, and <i>rate of return</i>.";
arrlotext['7C'] = "7C. Explain the time value of money and the relationship between present value and future value.";
arrlotext['7D'] = "7D. Explain the applications for future values and present values.";
arrlotext['7F'] = "7F. Explain how actuaries account for cash values and accumulated values in product design.";
arrlotext['7G'] = "7G. Describe the effects on insurers when market interest rates are decreasing, increasing, or remaining at a sustained low level.";
arrlotext['7H'] = "7H. Describe common strategies for managing interest-rate risk.";
arrlotext['7I'] = "7I. Define and calculate profitability measures such as net present value, internal rate of return, and profit margin.";
arrlotext['8B'] = "8B. Describe a basic process for developing mortality assumptions.";
arrlotext['8C'] = "8C. Identify and perform calculations on data from a mortality table.";
arrlotext['8D'] = "8D. Identify the purposes and characteristics of different types of mortality tables.";
arrlotext['8E'] = "8E. Describe the difference between the mortality patterns of different groups and explain the effect these differences have on product design.";
arrlotext['8F'] = "8F. Describe the projection method and the setback method for modifying tabular mortality rates.";
arrlotext['8H'] = "8H. Define a mortality margin and describe its use in life insurance and annuity products.";
arrlotext['9A'] = "9A. Identify the primary internal and external sources from which insurance companies gather expense data.";
arrlotext['9B'] = "9B. Distinguish between full costing and marginal costing and calculate expenses for a product using full costing and marginal costing.";
arrlotext['9D'] = "9D. Explain how insurers manage commission expenses for life insurance and annuity products.";
arrlotext['9E'] = "9E. Describe how policyholder behavior affects life insurance and annuity product design and modeling.";
arrlotext['9F'] = "9F. Decide whether a given product characteristic is associated with a smaller or a larger margin.";
arrlotext['9G'] = "9G. Explain how insurers incorporate operating expense charges into the product design of fixed and variable products.";
arrlotext['9H'] = "9H. Describe the strategies that life insurance companies use for managing the risks in life insurance and annuity products.";
