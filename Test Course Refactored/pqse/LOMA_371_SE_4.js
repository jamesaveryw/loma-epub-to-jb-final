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

var quizname = "LOMA 371 Sample Examination, Module 4";
var coursename = 'LOMA 371';
var modulenumber = 4;
var title = "LOMA_371_PSE2021_M4";
var intNumPools = 1;
var numQ = 8;
var numTexts = 1;
var numChap = 2;
var duration = 16;
var arrTexts = new Array();
var arrNumChap = new Array();
arrTexts[0] = "Risk Management and Product Design for Insurance Companies, Third Edition (2020)";
arrNumChap[0] = 2;
var thisChap = '--';

objPool = new Object();
objPool.intSelectCount = 8;
objPool.formID = 2622;
objPool.formName = 'PSE2021_M4';
arrPoolQuestions = new Array();
arrPoolQuestions[0] = 'LOMA_371_SE_053';
arrPoolQuestions[1] = 'LOMA_371_SE_054';
arrPoolQuestions[2] = 'LOMA_371_SE_055';
arrPoolQuestions[3] = 'LOMA_371_SE_056';
arrPoolQuestions[4] = 'LOMA_371_SE_057';
arrPoolQuestions[5] = 'LOMA_371_SE_058';
arrPoolQuestions[6] = 'LOMA_371_SE_059';
arrPoolQuestions[7] = 'LOMA_371_SE_060';
objPool.arrPoolQuestions = arrPoolQuestions;
arrPools[0] = objPool;

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
arrlotext['10A'] = "10A. Identify the key benefits of life insurance, such as death benefits, nonforfeiture values, cash surrender values, and benefits offered through policy riders.";
arrlotext['10C'] = "10C. Describe the process of calculating the cost of benefits for one-year term life insurance products, multiyear term life insurance products, and whole life insurance products.";
arrlotext['10D'] = "10D. Identify the unique attributes of universal life insurance products and explain how policyowner options affect the calculation of the cost of benefits.";
arrlotext['11B'] = "11B. Describe how insurance companies estimate the cost of future annuity death benefits, surrender benefits, withdrawal benefits, and periodic income payments.";
arrlotext['11C'] = "11C. Describe and differentiate between the types of guaranteed annuity payout options and life annuity payout options.";
arrlotext['11D'] = "11D. Identify the fixed indexed annuity provisions that pertain to indexed crediting and explain the methods for calculating index credits, including the annual reset method, the point-to-point method, and the high water mark method.";
arrlotext['11E'] = "11E. Describe and differentiate among the types of variable annuity guarantee riders, including guaranteed minimum death benefit riders and living benefit riders.";
