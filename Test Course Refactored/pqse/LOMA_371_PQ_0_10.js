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

var quizname = "LOMA 371 Practice Questions, Chapter 10";
var coursename = 'LOMA 371';
var modulenumber = 4;
var title = "LOMA_371_PPQ2021_0_10";
var intNumPools = 1;
var numQ = 8;
var numTexts = 1;
var numChap = 1;
var arrTexts = new Array();
var arrNumChap = new Array();
var duration = 0;
arrTexts[0] = "Risk Management and Product Design for Insurance Companies, Third Edition (2020)";
arrNumChap[0] = 1;
var thisChap = '10';

objPool = new Object(); 
objPool.intSelectCount = 8;
objPool.formID = 2621;
objPool.formName = 'PPQ2021_0_10';
arrPoolQuestions = new Array();
arrPoolQuestions[0] = 'LOMA_371_PQ_099';
arrPoolQuestions[1] = 'LOMA_371_PQ_100';
arrPoolQuestions[2] = 'LOMA_371_PQ_101';
arrPoolQuestions[3] = 'LOMA_371_PQ_102';
arrPoolQuestions[4] = 'LOMA_371_PQ_103';
arrPoolQuestions[5] = 'LOMA_371_PQ_104';
arrPoolQuestions[6] = 'LOMA_371_PQ_105';
arrPoolQuestions[7] = 'LOMA_371_PQ_106';
objPool.arrPoolQuestions = arrPoolQuestions;
arrPools[0] = objPool;

objQuestion = new Object();
objQuestion.strID = 'LOMA_371_PQ_099';
objQuestion.questionID = 121426;
objQuestion.item = 'LOMA_371_PPQ2021_099';
objQuestion.primaryLO = '10A';
objQuestion.textref = 'c. 10, pp. 4-6';
objQuestion.textbook = 0;
objQuestion.chapter = 10;
objQuestion.module = 4;
var arrLOs = new Array();
arrLOs[0] = '10A';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">Insurers offer life insurance policies that include supplemental benefits, which usually are added as riders to a policy and require the policyowner to pay an additional premium. Examples of life insurance policy riders that insurers commonly add to policies are waiver of premium benefits, accidental death benefits, and accelerated death benefits—such as critical illness benefits and long-term care (LTC) insurance benefits. Consider the following whole life insurance policyowners:</p><ul class=\"examul\"><li>Jun Cao elected to exercise a policy rider upon learning that she had a life-threatening disease. Under the terms of the rider, the insurer paid Ms.&nbsp;Cao half of the policy proceeds after certifying that Ms.&nbsp;Cao has an insurable event that is a specified disease in the policy rider.</li><li>Ian Darby elected to exercise a policy rider after he was diagnosed with a medical condition that requires constant care. His policy defines this condition as an insurable event. The insurer pays Mr.&nbsp;Darby monthly benefits until a specified percentage of the face amount has been paid out. Any remaining death benefit is paid to Mr.&nbsp;Darby’s beneficiary after his death.</li></ul><p class=\"stem\">With regard to supplemental benefits that are offered through policy riders, most likely it is correct to say that Ms.&nbsp;Cao exercised the</p>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "critical illness benefit, and Mr.&nbsp;Darby exercised the accidental death benefit";
arrAnsChoices[1] = "critical illness benefit, and Mr.&nbsp;Darby exercised the LTC insurance benefit";
arrAnsChoices[2] = "waiver of premium benefit, and Mr.&nbsp;Darby exercised the accidental death benefit";
arrAnsChoices[3] = "waiver of premium benefit, and Mr.&nbsp;Darby exercised the LTC insurance benefit";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 491067;
arrAnsIDs[1] = 491068;
arrAnsIDs[2] = 491069;
arrAnsIDs[3] = 491070;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 2;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">It is true that Ms.&nbsp;Cao exercised the critical illness benefit. However, Mr.&nbsp;Darby did <b>not</b> exercise the accidental death benefit.</p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">One type of waiver of premium benefit is the waiver of premium for disability benefit, under which the insurer promises to give up its right to collect premiums that become due while the insured is disabled according to the policy or rider’s definition of disability. Another type of waiver of premium benefit is the waiver of premium for payor benefit, in which the insurer waives its right to collect a policy’s renewal premiums if the payor—the person paying the policy premiums—dies or becomes totally disabled.</p><p class=\"explanations\">Generally, the accidental death benefit is payable if the insured’s death was caused—directly and independently of all other causes—by an accidental bodily injury. Some policies include accelerated death benefits, also known as living benefits, which typically allow a policyowner to elect to receive all or part of the policy’s death benefit before the insured’s death if certain conditions are met.</p><p class=\"explanations\">The payment of an accelerated death benefit usually reduces the death benefit that will be paid to the beneficiary at the insured’s&nbsp;death. Under a critical illness benefit—also known as a dread disease benefit—the insurer agrees to pay a portion of the policy’s face amount to the policyowner if the insured suffers from a specified disease. With a long-term care (LTC) insurance benefit, the insurer agrees to pay a monthly benefit to the policyowner if the insured requires constant care for a medical condition.</p><p class=\"explanations\"><b>Learning Objective: 10A. Identify the key benefits of life insurance, such as death benefits, nonforfeiture values, cash surrender values, and benefits offered through policy riders.</b></p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">Ms.&nbsp;Cao did <b>not</b> exercise the waiver of premium benefit. In addition, Mr.&nbsp;Darby did <b>not</b> exercise the accidental death benefit.</p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">It is true that Mr.&nbsp;Darby exercised the LTC insurance benefit. However, Ms.&nbsp;Cao did <b>not</b> exercise the waiver of premium benefit.</p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_371_PQ_099'] = objQuestion;


objQuestion = new Object();
objQuestion.strID = 'LOMA_371_PQ_100';
objQuestion.questionID = 121427;
objQuestion.item = 'LOMA_371_PPQ2021_100';
objQuestion.primaryLO = '10B';
objQuestion.textref = 'c. 10, pp. 7-8';
objQuestion.textbook = 0;
objQuestion.chapter = 10;
objQuestion.module = 4;
var arrLOs = new Array();
arrLOs[0] = '10B';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">Life insurance companies use a variety of premium types for pricing purposes. Select the answer choice that correctly identifies the pricing premiums that typically purchase one-year term life insurance and whole life insurance.</p>";
var arrAnsChoices = new Array();
arrAnsChoices[-1] = "<u>One-year term life insurance</u></div><div class=\"anshead\"><u>Whole life insurance</u>";
arrAnsChoices[0] = "flexible premiums</div><div class=\"anscell\" onclick=\"recordAns(1);\">single premiums";
arrAnsChoices[1] = "flexible premiums</div><div class=\"anscell\" onclick=\"recordAns(2);\">level premiums";
arrAnsChoices[2] = "single premiums</div><div class=\"anscell\" onclick=\"recordAns(3);\">single premiums";
arrAnsChoices[3] = "single premiums</div><div class=\"anscell\" onclick=\"recordAns(4);\">level premiums";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 491072;
arrAnsIDs[1] = 491073;
arrAnsIDs[2] = 491074;
arrAnsIDs[3] = 491075;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 4;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">Flexible premiums typically do <b>not</b> purchase one-year term life insurance. In addition, single premiums typically do <b>not</b> purchase whole life insurance.</p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">It is true that level premiums typically purchase whole life insurance. However, flexible premiums typically do <b>not</b> purchase one-year term life insurance.</p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">It is true that single premiums typically purchase one-year term life insurance policies. However, single premiums typically do <b>not</b> purchase whole life insurance policies.</p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">Insurance companies use premiums for reserves and pricing. The portion of premiums used for reserves are set aside to pay future contract obligations and meet mandated reserve requirements. A pricing premium is the monetary amount per unit of coverage that an insurer must collect from customers to cover any portion of the product’s cost of benefits or the insurer’s costs for supporting the product that is not covered by investment earnings.</p><p class=\"explanations\">Pricing premiums can take the following forms: simple premiums, level premiums, and flexible premiums. Single premiums typically purchase one-year term life insurance policies. Typically, level premiums purchase multiyear term life insurance and whole life insurance policies. Flexible premiums typically purchase universal life insurance policies.</p><p class=\"explanations\"><b>Learning Objective: 10B. Differentiate between single, level, and flexible pricing premiums.</b></p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_371_PQ_100'] = objQuestion;


objQuestion = new Object();
objQuestion.strID = 'LOMA_371_PQ_101';
objQuestion.questionID = 121428;
objQuestion.item = 'LOMA_371_PPQ2021_101';
objQuestion.primaryLO = '10C';
objQuestion.textref = 'c. 10, pp. 9-11';
objQuestion.textbook = 0;
objQuestion.chapter = 10;
objQuestion.module = 4;
var arrLOs = new Array();
arrLOs[0] = '10C';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">A life insurer is estimating the future death benefits and the present value (PV) of the estimated future death benefits for a block of 10,000 one-year term life insurance policies issued to men age&nbsp;44. The insurer determined that the mortality rate for the block of policies is 0.31 per 1,000 lives. The assumed policy size is $100,000, all benefit payments are assumed to be made at the exact midpoint of the year, the policies are assumed to be issued at the beginning of the year, and the assumed interest rate for the policies is 8%. For this estimate, the insurer gathered the following present value interest factors (PVIFs):</p><ul class=\"examul\"><li>PVIF(½, 8%) = 0.962</li><li>PVIF(1, 8%) = 0.926</li></ul><p class=\"stem\">This information indicates that the insurer most likely would estimate that the future death benefits for this block of one-year term life insurance policies equals</p>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "$100,000, and the PV of the estimated future death benefits equals $92,600";
arrAnsChoices[1] = "$100,000, and the PV of the estimated future death benefits equals $96,200";
arrAnsChoices[2] = "$310,000, and the PV of the estimated future death benefits equals $287,060";
arrAnsChoices[3] = "$310,000, and the PV of the estimated future death benefits equals $298,220";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 491076;
arrAnsIDs[1] = 491077;
arrAnsIDs[2] = 491078;
arrAnsIDs[3] = 491079;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 4;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">To obtain the mortality rate for one life, divide the mortality rate for 1,000 lives by 1,000: 0.31 ÷ 1,000 = 0.00031. To project an average of how many of the 10,000 insureds will die during the year, multiply the mortality rate for one life by the number of insureds in the block: 0.00031 × 10,000 = 3.1 deaths. For pricing purposes, use the actuarial estimate of 3.1 deaths, rather than 3.0 or 4.0 deaths. Use the future death benefits formula to determine the total amount of future estimated death benefits for this block of policies: 3.1 deaths during the year multiplied by the $100,000 policy face amount equals $310,000.</p><p class=\"explanations\">The PV of the estimated future death benefits is calculated by multiplying the total amount of future estimated death benefits by the corresponding PVIF for 8% interest (<i>i</i>) and a ½-year period (<i>n</i>): $310,000 × 0.962 = $298,220. The PVIF for a ½-year period (<i>n</i>) is used because it is assumed that all death benefit payments are made at the exact midpoint of the year.</p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">To obtain the mortality rate for one life, divide the mortality rate for 1,000 lives by 1,000: 0.31 ÷ 1,000 = 0.00031. To project an average of how many of the 10,000 insureds will die during the year, multiply the mortality rate for one life by the number of insureds in the block: 0.00031 × 10,000 = 3.1 deaths. For pricing purposes, use the actuarial estimate of 3.1 deaths, rather than 3.0 or 4.0 deaths. Use the future death benefits formula to determine the total amount of future estimated death benefits for this block of policies: 3.1 deaths during the year multiplied by the $100,000 policy face amount equals $310,000.</p><p class=\"explanations\">The PV of the estimated future death benefits is calculated by multiplying the total amount of future estimated death benefits by the corresponding PVIF for 8% interest (<i>i</i>) and a ½-year period (<i>n</i>): $310,000 × 0.962 = $298,220. The PVIF for a ½-year period (<i>n</i>) is used because it is assumed that all death benefit payments are made at the exact midpoint of the year.</p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">To obtain the mortality rate for one life, divide the mortality rate for 1,000 lives by 1,000: 0.31 ÷ 1,000 = 0.00031. To project an average of how many of the 10,000 insureds will die during the year, multiply the mortality rate for one life by the number of insureds in the block: 0.00031 × 10,000 = 3.1 deaths. For pricing purposes, use the actuarial estimate of 3.1 deaths, rather than 3.0 or 4.0 deaths. Use the future death benefits formula to determine the total amount of future estimated death benefits for this block of policies: 3.1 deaths during the year multiplied by the $100,000 policy face amount equals $310,000.</p><p class=\"explanations\">The PV of the estimated future death benefits is calculated by multiplying the total amount of future estimated death benefits by the corresponding PVIF for 8% interest (<i>i</i>) and a ½-year period (<i>n</i>): $310,000 × 0.962 = $298,220. The PVIF for a ½-year period (<i>n</i>) is used because it is assumed that all death benefit payments are made at the exact midpoint of the year.</p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">To obtain the mortality rate for one life, divide the mortality rate for 1,000 lives by 1,000: 0.31 ÷ 1,000 = 0.00031. To project an average of how many of the 10,000 insureds will die during the year, multiply the mortality rate for one life by the number of insureds in the block: 0.00031 × 10,000 = 3.1 deaths. For pricing purposes, use the actuarial estimate of 3.1 deaths, rather than 3.0 or 4.0 deaths. Use the future death benefits formula to determine the total amount of future estimated death benefits for this block of policies: 3.1 deaths during the year multiplied by the $100,000 policy face amount equals $310,000.</p><p class=\"explanations\">The PV of the estimated future death benefits is calculated by multiplying the total amount of future estimated death benefits by the corresponding PVIF for 8% interest (<i>i</i>) and a ½-year period (<i>n</i>): $310,000 × 0.962 = $298,220. The PVIF for a ½-year period (<i>n</i>) is used because it is assumed that all death benefit payments are made at the exact midpoint of the year.</p><p class=\"explanations\"><b>Learning Objective: 10C. Describe the process of calculating the cost of benefits for one-year term life insurance products, multiyear term life insurance products, and whole life insurance products.</b></p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_371_PQ_101'] = objQuestion;


objQuestion = new Object();
objQuestion.strID = 'LOMA_371_PQ_102';
objQuestion.questionID = 121429;
objQuestion.item = 'LOMA_371_PPQ2021_102';
objQuestion.primaryLO = '10C';
objQuestion.textref = 'c. 10, pp. 17-18';
objQuestion.textbook = 0;
objQuestion.chapter = 10;
objQuestion.module = 4;
var arrLOs = new Array();
arrLOs[0] = '10C';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">Although assumptions do not necessarily apply universally, one assumption generally followed when calculating the total future benefits for most whole life insurance products is that</p>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "death benefits are paid at the midpoint of each year";
arrAnsChoices[1] = "any surrender benefits are paid at the midpoint of each year";
arrAnsChoices[2] = "level annual premiums (LAPs) are collected at the midpoint of each year";
arrAnsChoices[3] = "final benefit payments will be made when the insured group reaches age 99";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 491080;
arrAnsIDs[1] = 491081;
arrAnsIDs[2] = 491082;
arrAnsIDs[3] = 491083;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 1;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">Whole life insurance products have two features that usually are not present for one-year and most multiyear term life insurance products: death benefit coverage while the policy remains in force during the lifetime of the insured, and cash value and surrender benefits. For a block of whole life policies, the number of insureds decreases each year because some insureds die and others lapse their policies.</p><p class=\"explanations\">In calculating the total future benefits for most whole life insurance products, several general assumption apply. Level annual premiums (LAPs) are collected at the beginning of each year; death benefits are paid at the midpoint of each year. Surrender benefits, which do not begin until the policy has been in force for several years, are paid at the beginning of each year. Final benefit payments for this plan of insurance will be made when the insured group reaches an advanced age, such as age 120.</p><p class=\"explanations\">To cover the insurer’s cost of benefits—and the other premium components, such as operating expenses—actuaries must find a LAP amount for which the sum of the present values of the premium payments is equivalent to the present value of a hypothetical single premium. The process of estimating the mortality cost for a block of whole life insurance policies is to project the number of benefit payments for the term’s duration; determine the average amount of death benefit paid within the block of policies; estimate the future value of death benefits for the entire block; find the present value of the block’s future death benefits—the single premium, and then calculate the monetary amount of the level annual premium (LAP), which is any set of equal annual payments having a present value equal to a given single premium.</p><p class=\"explanations\"><b>Learning Objective: 10C: Describe the process of calculating the cost of benefits for one-year term life insurance products, multiyear term life insurance products, and whole life insurance products.</b></p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">One general assumption is that surrender benefits, which do not begin until the policy has been in force for several years, are paid at the <b>beginning</b> of each year.</p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">One general assumption is that level annual premiums are collected at the <b>beginning</b> of each year, and death benefits are paid at the midpoint of each year.</p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">One general assumption is that final benefit payments for this plan of insurance will be made when the insured group reaches an advanced age, such as age <b>120</b>.</p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_371_PQ_102'] = objQuestion;


objQuestion = new Object();
objQuestion.strID = 'LOMA_371_PQ_103';
objQuestion.questionID = 121430;
objQuestion.item = 'LOMA_371_PPQ2021_103';
objQuestion.primaryLO = '10D';
objQuestion.textref = 'c. 10, p. 19';
objQuestion.textbook = 0;
objQuestion.chapter = 10;
objQuestion.module = 4;
var arrLOs = new Array();
arrLOs[0] = '10D';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">For this question, if answer choices (1) through (3) are all correct, select answer choice (4). Otherwise, select the one correct response.</p><p class=\"stem\">Typical non-guaranteed universal life (UL) insurance is a form of cash value life insurance that is characterized by</p>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "a flexible face amount";
arrAnsChoices[1] = "fixed premiums";
arrAnsChoices[2] = "a fixed death benefit amount";
arrAnsChoices[3] = "all of the above";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 491084;
arrAnsIDs[1] = 491085;
arrAnsIDs[2] = 491086;
arrAnsIDs[3] = 491087;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 1;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">Universal life (UL) insurance is a form of cash value life insurance that is characterized by flexible premiums, a flexible face amount, a flexible death benefit amount, and separation of the three primary policy elements—mortality charges, interest rate, and expense charges.</p><p class=\"explanations\">UL insurance is available in a number of varieties, including basic fixed universal life (UL) insurance, indexed universal life (IUL) insurance, and variable universal life (VUL) insurance. All UL policies are subject to different kinds of charges, which insurers typically deduct from the cash value.</p><p class=\"explanations\"><b>Learning Objective: 10D. Identify the unique attributes of universal life insurance products and explain how policyowner options affect the calculation of the cost of benefits.</b></p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">Universal life (UL) insurance is a form of cash value life insurance that has <b>flexible </b>premiums.</p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">Universal life (UL) insurance is a form of cash value life insurance that has a <b>flexible</b> death benefit&nbsp;amount. </p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">Only <b>one</b> of these characteristics is a unique attribute of universal life (UL) insurance.</p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_371_PQ_103'] = objQuestion;


objQuestion = new Object();
objQuestion.strID = 'LOMA_371_PQ_104';
objQuestion.questionID = 121431;
objQuestion.item = 'LOMA_371_PPQ2021_104';
objQuestion.primaryLO = '10D';
objQuestion.textref = 'c. 10, pp. 21-23';
objQuestion.textbook = 0;
objQuestion.chapter = 10;
objQuestion.module = 4;
var arrLOs = new Array();
arrLOs[0] = '10D';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">Death benefits for universal life (UL) policies can take three alternative forms: a level amount death benefit, an increasing amount death benefit, and a level amount plus premiums death benefit. Under all of the options, the policyowner chooses the face amount and may adjust this amount at any time One characteristic of a policy that provides a <i>level </i>amount death benefit is that the</p>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "death benefit at any given time equals the policy’s face amount plus the policy’s cash value";
arrAnsChoices[1] = "net amount at risk is equal to the policy’s face amount";
arrAnsChoices[2] = "death benefit payable is equal to the policy’s face amount";
arrAnsChoices[3] = "net amount at risk is equal to the sum of the policy’s face amount and premiums paid, minus the cash value";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 491088;
arrAnsIDs[1] = 491089;
arrAnsIDs[2] = 491090;
arrAnsIDs[3] = 491091;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 3;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">One form of UL death benefits is an Option B plan, which has an <b>increasing</b> amount death benefit. Under an Option B plan, the death benefit is equal to the face amount plus the cash value, and the net amount at risk is equal to the policy’s face amount.</p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">One form of UL death benefits is an Option B plan, which has an <b>increasing</b> amount death benefit. Under an Option B plan, the death benefit is equal to the face amount plus the cash value, and the net amount at risk is equal to the policy’s face amount.</p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">UL death benefits can take three alternative forms: An Option A plan has a level amount death benefit, and the net amount at risk is equal to the policy’s face amount. An Option B plan has an increasing amount death benefit, and the net amount at risk is equal to the policy’s face amount. An Option C plan has a level amount plus premiums death benefit, and the net amount at risk is equal to the sum of the policy’s face amount and premiums paid, minus the cash value.</p><p class=\"explanations\">Although definitions vary from one contract to another, a UL policy’s net amount at risk generally represents the amount of the insurer’s funds that would be required at any given time to pay the policy death benefit. Therefore, at any given time, a UL policy’s net amount at risk equals the difference between the death benefit and the cash value: Net amount at risk = Death benefit – Cash value.</p><p class=\"explanations\">Assuming the face amount remains the same, with an Option A plan, as the policy’s cash value grows, the insurer’s net amount at risk decreases. With an Option B plan, as the policy’s cash value grows, the death benefit grows, but the insurer’s net amount at risk stays constant. With an Option C plan, the net amount at risk fluctuates, depending on the amount of premiums the policyowner pays and any changes made to the policy’s cash value.</p><p class=\"explanations\"><b>Learning Objective: 10D. Identify the unique attributes of universal life insurance products and explain how policyowner options affect the calculation of the cost of benefits.</b></p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">One form of UL death benefits is an Option C plan, which has a <b>level amount plus premiums</b> death benefit. Under an Option C plan, the net amount at risk is equal to the sum of the policy’s face amount and premiums paid, minus the cash value.</p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_371_PQ_104'] = objQuestion;


objQuestion = new Object();
objQuestion.strID = 'LOMA_371_PQ_105';
objQuestion.questionID = 121432;
objQuestion.item = 'LOMA_371_PPQ2021_105';
objQuestion.primaryLO = '10D';
objQuestion.textref = 'c. 10, pp. 24-25';
objQuestion.textbook = 0;
objQuestion.chapter = 10;
objQuestion.module = 4;
var arrLOs = new Array();
arrLOs[0] = '10D';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">Marla Hakim is insured under an Option B plan—an increasing death benefit option—for her UL insurance policy. The following information applies to the policy for this month:</p><ul class=\"examul\"><li>Policy face amount = $500,000</li><li>Cash value = $150,000</li><li>Monthly mortality charge = $0.85 per $1,000 of net amount at risk</li></ul><p class=\"stem\">This information indicates that Ms.&nbsp;Hakim’s UL policy’s total mortality charge for this month equals</p>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "$127.50";
arrAnsChoices[1] = "$297.50";
arrAnsChoices[2] = "$425.00";
arrAnsChoices[3] = "$552.50";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 491092;
arrAnsIDs[1] = 491093;
arrAnsIDs[2] = 491094;
arrAnsIDs[3] = 491095;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 3;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">Ms.&nbsp;Hakim’s UL insurance policy is an Option B plan; the net amount at risk equals the $500,000 face amount. The total monthly mortality charge is equal to the monthly mortality charge per $1,000 of net amount at risk multiplied by the units per $1,000 of net amount at risk. In this situation, the total monthly mortality charge for Ms.&nbsp;Hakim’s UL insurance policy equals $0.85 × ($500,000 ÷ 1,000) = $425.00.</p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">Ms.&nbsp;Hakim’s UL insurance policy is an Option B plan; the net amount at risk equals the $500,000 face amount. The total monthly mortality charge is equal to the monthly mortality charge per $1,000 of net amount at risk multiplied by the units per $1,000 of net amount at risk. In this situation, the total monthly mortality charge for Ms.&nbsp;Hakim’s UL insurance policy equals $0.85 × ($500,000 ÷ 1,000) = $425.00.</p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">Ms.&nbsp;Hakim’s UL insurance policy is an Option B plan; the net amount at risk equals the $500,000 face amount. The total monthly mortality charge is equal to the monthly mortality charge per $1,000 of net amount at risk multiplied by the units per $1,000 of net amount at risk. In this situation, the total monthly mortality charge for Ms.&nbsp;Hakim’s UL insurance policy equals $0.85 × ($500,000 ÷ 1,000) = $425.00.</p><p class=\"explanations\"><b>Learning Objective: 10D. Identify the unique attributes of universal life insurance products and explain how policyowner options affect the calculation of the cost of benefits.</b></p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">Ms.&nbsp;Hakim’s UL insurance policy is an Option B plan; the net amount at risk equals the $500,000 face amount. The total monthly mortality charge is equal to the monthly mortality charge per $1,000 of net amount at risk multiplied by the units per $1,000 of net amount at risk. In this situation, the total monthly mortality charge for Ms.&nbsp;Hakim’s UL insurance policy equals $0.85 × ($500,000 ÷ 1,000) = $425.00.</p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_371_PQ_105'] = objQuestion;


objQuestion = new Object();
objQuestion.strID = 'LOMA_371_PQ_106';
objQuestion.questionID = 121433;
objQuestion.item = 'LOMA_371_PPQ2021_106';
objQuestion.primaryLO = '10E';
objQuestion.textref = 'c. 10, pp. 27-28';
objQuestion.textbook = 0;
objQuestion.chapter = 10;
objQuestion.module = 4;
var arrLOs = new Array();
arrLOs[0] = '10E';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">Insurers combine premium components to set a product’s pricing premium rates. Typically, several premium components are added to, and one component is subtracted from, the calculation of a product’s pricing premium rates. The pricing component that, because it is expected to offset some of the charges necessary to support the product, is <i>subtracted</i> in setting a product’s pricing premium rates is</p>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "the contribution to insurer earnings";
arrAnsChoices[1] = "the charge for operating expenses";
arrAnsChoices[2] = "investment earnings";
arrAnsChoices[3] = "the charge for cost of benefits";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 491096;
arrAnsIDs[1] = 491097;
arrAnsIDs[2] = 491098;
arrAnsIDs[3] = 491099;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 3;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">The relationships between the premium components are illustrated in the following calculation to set a product’s pricing premium rates: Charge for cost of benefits + Charge for operating expenses <b>+ Contribution to insurer earnings</b> – Investment earnings&nbsp;= Premium payments.</p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">The relationships between the premium components are illustrated in the following calculation to set a product’s pricing premium rates: Charge for cost of benefits <b>+ Charge for operating expenses</b> + Contribution to insurer earnings – Investment earnings = Premium payments.</p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">The relationships between the premium components are illustrated in the following calculation to set a product’s pricing premium rates: Charge for cost of benefits + Charge for operating expenses + Contribution to insurer earnings – Investment earnings&nbsp;= Premium payments. An insurer invests a portion of the premiums it receives and expects to achieve investment earnings. Investment earnings enable the insurer to set a product’s base premium lower than the sum of its expected cost of benefits and operating&nbsp;expenses.</p><p class=\"explanations\">Actuaries use the premium components to calculate the premium for a block of policies. Next, they establish the premium rate for the block by dividing the single premium by the number of policies in the block. The premium rate is expressed as a unit of coverage; for life insurance, a unit of coverage usually is $1,000 of coverage.</p><p class=\"explanations\">To find the premium amount to charge for a particular policy, the insurer multiplies the premium rate by the number of coverage units. The product’s premium rate represents the base rate that the insurer charges to policyowners in the block. If an underwriter assesses a proposed insured as a substandard risk, the insurer would charge the policyowner a higher premium rate than owners of policies with insureds that are classified as standard risks.</p><p class=\"explanations\"><b>Learning Objective: 10E. Explain how insurers combine premium components to set a product’s pricing premium rates.</b></p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">The relationships between the premium components are illustrated in the following calculation to set a product’s pricing premium rates: <b>Charge for cost of benefits</b> + Charge for operating expenses + Contribution to insurer earnings – Investment earnings&nbsp;= Premium payments.</p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_371_PQ_106'] = objQuestion;





var arrlotext = new Array(); 
arrlotext['10A'] = "10A. Identify the key benefits of life insurance, such as death benefits, nonforfeiture values, cash surrender values, and benefits offered through policy riders.";
arrlotext['10B'] = "10B. Differentiate between single, level, and flexible pricing premiums.";
arrlotext['10C'] = "10C. Describe the process of calculating the cost of benefits for one-year term life insurance products, multiyear term life insurance products, and whole life insurance products.";
arrlotext['10D'] = "10D. Identify the unique attributes of universal life insurance products and explain how policyowner options affect the calculation of the cost of benefits.";
arrlotext['10E'] = "10E. Explain how insurers combine premium components to set a product’s pricing premium rates.";
