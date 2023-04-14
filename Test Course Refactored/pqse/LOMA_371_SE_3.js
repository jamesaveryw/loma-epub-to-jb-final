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

var quizname = "LOMA 371 Sample Examination, Module 3";
var coursename = 'LOMA 371';
var modulenumber = 3;
var title = "LOMA_371_PSE2021_M3";
var intNumPools = 1;
var numQ = 21;
var numTexts = 1;
var numChap = 3;
var duration = 42;
var arrTexts = new Array();
var arrNumChap = new Array();
arrTexts[0] = "Risk Management and Product Design for Insurance Companies, Third Edition (2020)";
arrNumChap[0] = 3;
var thisChap = '--';

objPool = new Object();
objPool.intSelectCount = 21;
objPool.formID = 2622;
objPool.formName = 'PSE2021_M3';
arrPoolQuestions = new Array();
arrPoolQuestions[0] = 'LOMA_371_SE_032';
arrPoolQuestions[1] = 'LOMA_371_SE_033';
arrPoolQuestions[2] = 'LOMA_371_SE_034';
arrPoolQuestions[3] = 'LOMA_371_SE_035';
arrPoolQuestions[4] = 'LOMA_371_SE_036';
arrPoolQuestions[5] = 'LOMA_371_SE_037';
arrPoolQuestions[6] = 'LOMA_371_SE_038';
arrPoolQuestions[7] = 'LOMA_371_SE_039';
arrPoolQuestions[8] = 'LOMA_371_SE_040';
arrPoolQuestions[9] = 'LOMA_371_SE_041';
arrPoolQuestions[10] = 'LOMA_371_SE_042';
arrPoolQuestions[11] = 'LOMA_371_SE_043';
arrPoolQuestions[12] = 'LOMA_371_SE_044';
arrPoolQuestions[13] = 'LOMA_371_SE_045';
arrPoolQuestions[14] = 'LOMA_371_SE_046';
arrPoolQuestions[15] = 'LOMA_371_SE_047';
arrPoolQuestions[16] = 'LOMA_371_SE_048';
arrPoolQuestions[17] = 'LOMA_371_SE_049';
arrPoolQuestions[18] = 'LOMA_371_SE_050';
arrPoolQuestions[19] = 'LOMA_371_SE_051';
arrPoolQuestions[20] = 'LOMA_371_SE_052';
objPool.arrPoolQuestions = arrPoolQuestions;
arrPools[0] = objPool;

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




var arrlotext = new Array(); 
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
