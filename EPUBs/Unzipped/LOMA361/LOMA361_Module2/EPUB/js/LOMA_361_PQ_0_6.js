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

var quizname = "LOMA 361 Practice Questions, Chapter 6";
var coursename = 'LOMA 361';
var modulenumber = 2;
var title = "LOMA_361_PPQ2019_0_6";
var intNumPools = 1;
var numQ = 6;
var numTexts = 1;
var numChap = 1;
var arrTexts = new Array();
var arrNumChap = new Array();
var duration = 0;
arrTexts[0] = "Accounting and Financial Reporting in Life Insurance Companies, Second Edition (2019)";
arrNumChap[0] = 1;
var thisChap = '6';

objPool = new Object(); 
objPool.intSelectCount = 6;
objPool.formID = 2103;
objPool.formName = 'PPQ2019_0_6';
arrPoolQuestions = new Array();
arrPoolQuestions[0] = 'LOMA_361_PQ_045';
arrPoolQuestions[1] = 'LOMA_361_PQ_046';
arrPoolQuestions[2] = 'LOMA_361_PQ_047';
arrPoolQuestions[3] = 'LOMA_361_PQ_048';
arrPoolQuestions[4] = 'LOMA_361_PQ_049';
arrPoolQuestions[5] = 'LOMA_361_PQ_050';
objPool.arrPoolQuestions = arrPoolQuestions;
arrPools[0] = objPool;

objQuestion = new Object();
objQuestion.strID = 'LOMA_361_PQ_045';
objQuestion.questionID = 110231;
objQuestion.item = 'LOMA_361_PPQ2019_045';
objQuestion.primaryLO = '6A';
objQuestion.textref = 'c. 6, pp. 2-3';
objQuestion.textbook = 0;
objQuestion.chapter = 6;
objQuestion.module = 2;
var arrLOs = new Array();
arrLOs[0] = '6A';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">One asset is not cash, but is highly liquid and can be readily converted to cash with little or no loss in value. Select the answer choice that correctly identifies and provides an example of this asset.</p>";
var arrAnsChoices = new Array();
arrAnsChoices[-1] = "<u>Type of asset</u></div><div class=\"anshead\"><u>Example</u>";
arrAnsChoices[0] = "cash equivalents</div><div class=\"anscell\" onclick=\"recordAns(1);\">Treasury bills that will mature in 30 days";
arrAnsChoices[1] = "cash equivalents</div><div class=\"anscell\" onclick=\"recordAns(2);\">prepaid expenses";
arrAnsChoices[2] = "uncollected premiums</div><div class=\"anscell\" onclick=\"recordAns(3);\">Treasury bills that will mature in 30 days";
arrAnsChoices[3] = "uncollected premiums</div><div class=\"anscell\" onclick=\"recordAns(4);\">prepaid expenses";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 445502;
arrAnsIDs[1] = 445503;
arrAnsIDs[2] = 445504;
arrAnsIDs[3] = 445505;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 1;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">Cash equivalents are short-term assets that will mature in 90 days or less from the date of purchase. Examples of cash equivalents include Treasury bills, or T-bills, that will mature within 90 days or less of the date of purchase. T-bills are short-term assets issued and guaranteed by the U.S. government.</p><p class=\"explanations\">In accounting, prepaid expenses are those expenditures, paid in advance, that the insurer expects will provide a future value or benefit. Examples include rent, subscriptions, and service contracts. Under SAP, prepaid expenses are considered nonadmitted assets, because they are not readily available to satisfy policyowner obligations. Under GAAP, prepaid expenses are classified as short-term assets, and are charged to the accounting period in which the benefits are received or used.</p><p class=\"explanations\">Under SAP, for policy premiums that are paid more frequently than annually, life insurers use short-term asset accounts—such as <i>Deferred Premiums </i>or<i> Uncollected Premiums</i>—to record and report policy premiums that were due, but that have not been received by the insurer. Deferred premiums are life insurance premiums due after the statutory reporting date but before the next policy anniversary date. Uncollected premiums are individual life insurance policy premiums that are due before the statutory reporting date but have not been received as of that date.</p><p class=\"explanations\"><b>Learning Objective: 6A. Identify and describe an insurer’s short-term assets, such as cash, cash equivalents, investment income due and accrued, deferred premiums and uncollected premiums, and prepaid expenses.</b></p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">It is true that this asset is known as cash equivalents. However, prepaid expenses are <b>not</b> an example of cash equivalents. In accounting, prepaid expenses are those expenditures, paid in advance, that the insurer expects will provide a future value or benefit.</p>";
arrAnswerFeedback[2] = "<p class=\"explanations\"><b>Uncollected premiums</b> are individual life insurance policy premiums that are due before the statutory reporting date but have not been received as of that date. In addition, although Treasury bills are short-term assets, they are <b>not</b> an example of uncollected premiums. Treasury bills, or T-bills, are short-term assets issued and guaranteed by the U.S. government.</p>";
arrAnswerFeedback[3] = "<p class=\"explanations\"><b>Uncollected premiums</b> are individual life insurance policy premiums that are due before the statutory reporting date but have not been received as of that date. In addition, although prepaid expenses are short-term assets, they are <b>not</b> an example of uncollected premiums. In accounting, prepaid expenses are those expenditures, paid in advance, that the insurer expects will provide a future value or benefit.</p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_361_PQ_045'] = objQuestion;


objQuestion = new Object();
objQuestion.strID = 'LOMA_361_PQ_046';
objQuestion.questionID = 110232;
objQuestion.item = 'LOMA_361_PPQ2019_046';
objQuestion.primaryLO = '6B';
objQuestion.textref = 'c. 6, pp. 6-7';
objQuestion.textbook = 0;
objQuestion.chapter = 6;
objQuestion.module = 2;
var arrLOs = new Array();
arrLOs[0] = '6B';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">Accounting entries to record depreciation on real estate usually involve contra accounts, which accompany specified “companion” accounts. One true statement about a contra account is that</p>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "the amounts in it usually increase the balance in the companion account";
arrAnsChoices[1] = "its purpose is to provide additional information on the transactions that occur in the companion account";
arrAnsChoices[2] = "it is an account with a normal balance that is the same as that of the companion account";
arrAnsChoices[3] = "it usually contains amounts that are larger than those contained in the companion account";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 445506;
arrAnsIDs[1] = 445507;
arrAnsIDs[2] = 445508;
arrAnsIDs[3] = 445509;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 2;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">The amounts in a contra account usually <b>decrease </b>the balance in the companion account.</p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">A contra account—usually an asset account—has a normal balance that is the opposite of its companion account. The amounts in a contra account usually decrease the balance in the companion account. The monetary amount in a contra account should not be larger than the amount in its companion account.</p><p class=\"explanations\">Because asset accounts and expense accounts have a normal debit balance, contra asset accounts and contra expense accounts have a normal credit balance. Similarly, liability accounts, equity accounts, and revenue accounts have a normal credit balance, so their contra accounts have a normal debit balance.</p><p class=\"explanations\"><b>Learning Objective: 6B. Describe how an insurer accounts for and reports real estate purchases and sales.</b></p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">A contra account is an account that has a normal balance that is the <b>opposite </b>of the companion account.</p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">The monetary amount in a contra account should <b>not </b>be larger than the amount in the companion account.</p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_361_PQ_046'] = objQuestion;


objQuestion = new Object();
objQuestion.strID = 'LOMA_361_PQ_047';
objQuestion.questionID = 110233;
objQuestion.item = 'LOMA_361_PPQ2019_047';
objQuestion.primaryLO = '6B';
objQuestion.textref = 'c. 6, pp. 6-8';
objQuestion.textbook = 0;
objQuestion.chapter = 6;
objQuestion.module = 2;
var arrLOs = new Array();
arrLOs[0] = '6B';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">Four years ago, the Mica Life Insurance Company, a U.S. company, purchased the Gamut Building for $1,000,000. The price of the land was not included in the price of the building. Recently, Mica sold the Gamut Building for $1,400,000. At the time of the sale, accumulated depreciation on the Gamut Building was $120,000. The accounting entry that Mica most likely made to record the sale of the Gamut Building at a gain was</p>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "<table cols=\"3\" cellspacing=\"0\" cellpadding=\"1\" style=\"width: 90%; margin-top:0em; margin-bottom:0em\"><tr><td class=\"acctentry_d\"><i>Cash</i></td><td class=\"debit_credit\">1,000,000</td><td class=\"debit_credit\">&nbsp;</td></tr><tr><td class=\"acctentry_d\"><i>Accumulated Depreciation—Gamut Building</i></td><td class=\"debit_credit\">120,000</td><td class=\"debit_credit\">&nbsp;</td></tr><tr><td class=\"acctentry_d\"><i>Gain on Sale of Gamut Building</i></td><td class=\"debit_credit\">280,000</td><td class=\"debit_credit\">&nbsp;</td></tr><tr><td class=\"acctentry_c\"><i>Gamut Building</i></td><td class=\"debit_credit\">&nbsp;</td><td class=\"debit_credit\">1,400,000</td></tr></table>";
arrAnsChoices[1] = "<table cols=\"3\" cellspacing=\"0\" cellpadding=\"1\" style=\"width: 90%; margin-top:0em; margin-bottom:0em\"><tr><td class=\"acctentry_d\"><i>Gamut Building</i></td><td class=\"debit_credit\">1,400,000</td><td class=\"debit_credit\">&nbsp;</td></tr><tr><td class=\"acctentry_c\"><i>Cash</i></td><td class=\"debit_credit\">&nbsp;</td><td class=\"debit_credit\">1,000,000</td></tr><tr><td class=\"acctentry_c\"><i>Accumulated Depreciation—Gamut Building</i></td><td class=\"debit_credit\">&nbsp;</td><td class=\"debit_credit\">120,000</td></tr><tr><td class=\"acctentry_c\"><i>Gain on Sale of Gamut Building</i></td><td class=\"debit_credit\">&nbsp;</td><td class=\"debit_credit\">280,000</td></tr></table>";
arrAnsChoices[2] = "<table cols=\"3\" cellspacing=\"0\" cellpadding=\"1\" style=\"width: 90%; margin-top:0em; margin-bottom:0em\"><tr><td class=\"acctentry_d\"><i>Cash</i></td><td class=\"debit_credit\">1,400,000</td><td class=\"debit_credit\">&nbsp;</td></tr><tr><td class=\"acctentry_d\"><i>Accumulated Depreciation—Gamut Building</i></td><td class=\"debit_credit\">120,000</td><td class=\"debit_credit\">&nbsp;</td></tr><tr><td class=\"acctentry_c\"><i>Gamut Building</i></td><td class=\"debit_credit\">&nbsp;</td><td class=\"debit_credit\">1,000,000</td></tr><tr><td class=\"acctentry_c\"><i>Gain on Sale of Gamut Building</i></td><td class=\"debit_credit\">&nbsp;</td><td class=\"debit_credit\">520,000</td></tr></table>";
arrAnsChoices[3] = "<table cols=\"3\" cellspacing=\"0\" cellpadding=\"1\" style=\"width: 90%; margin-top:0em; margin-bottom:0em\"><tr><td class=\"acctentry_d\"><i>Cash</i></td><td class=\"debit_credit\">1,000,000</td><td class=\"debit_credit\">&nbsp;</td></tr><tr><td class=\"acctentry_d\"><i>Gain on Sale of Gamut Building</i></td><td class=\"debit_credit\">400,000</td><td class=\"debit_credit\">&nbsp;</td></tr><tr><td class=\"acctentry_c\"><i>Gamut Building</i></td><td class=\"debit_credit\">&nbsp;</td><td class=\"debit_credit\">1,400,000</td></tr></table>";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 445510;
arrAnsIDs[1] = 445511;
arrAnsIDs[2] = 445512;
arrAnsIDs[3] = 445513;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 3;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">Mica’s sale of the Gamut Building resulted in a $520,000 realized capital gain: $1,400,000 Sale Price – ($1,000,000 Cost – $120,000 Accumulated Depreciation), also known as Book Value.</p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">Mica’s sale of the Gamut Building resulted in a $520,000 realized capital gain: $1,400,000 Sale Price – ($1,000,000 Cost – $120,000 Accumulated Depreciation), also known as Book Value.</p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">Life insurance companies in the United States depreciate the cost of real estate—except for land—over the useful economic life of the property. Contra accounts are generally used to amortize real estate depreciation. By using contra accounts for real estate, an insurer records <i>Accumulated Depreciation</i>—a contra account—separately from <i>Real Estate</i> (the named property account), the companion asset account.</p><p class=\"explanations\">Land is not depreciated under U.S. accounting standards. Instead, the insurer values land at its historical cost until the property is sold. Over time, however, depreciation will allocate the cost of the asset over the asset’s estimated useful life.</p><p class=\"explanations\">Mica’s sale of the Gamut Building resulted in a $520,000 realized capital gain: $1,400,000 Sale Price – ($1,000,000 Cost – $120,000 Accumulated Depreciation), also known as Book Value.</p><p class=\"explanations\"><b>Learning Objective: 6B. Describe how an insurer accounts for and reports real estate purchases and sales.</b></p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">Mica’s sale of the Gamut Building resulted in a $520,000 realized capital gain: $1,400,000 Sale Price – ($1,000,000 Cost – $120,000 Accumulated Depreciation), also known as Book Value.</p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_361_PQ_047'] = objQuestion;


objQuestion = new Object();
objQuestion.strID = 'LOMA_361_PQ_048';
objQuestion.questionID = 110234;
objQuestion.item = 'LOMA_361_PPQ2019_048';
objQuestion.primaryLO = '6C';
objQuestion.textref = 'c. 6, pp. 9-10';
objQuestion.textbook = 0;
objQuestion.chapter = 6;
objQuestion.module = 2;
var arrLOs = new Array();
arrLOs[0] = '6C';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">The Village Life Insurance Company issued an individual life insurance policy with a $750,000 death benefit. Village reinsured $250,000 of the risk on this policy. While the policy was in force, the insured died, and Village determined that the policy beneficiary was entitled to the $750,000 death benefit. Upon the death of the insured, the statutory accounting entry that Village most likely made to record the amount recoverable from the reinsurer under the terms of its reinsurance agreement was</p>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "<table cols=\"3\" cellspacing=\"0\" cellpadding=\"1\" style=\"width: 90%; margin-top:0em; margin-bottom:0em\"><tr><td class=\"acctentry_d\"><i>Death Claims Paid</i></td><td class=\"debit_credit\">250,000</td><td class=\"debit_credit\">&nbsp;</td></tr><tr><td class=\"acctentry_c\"><i>Cash</i></td><td class=\"debit_credit\">&nbsp;</td><td class=\"debit_credit\">250,000</td></tr></table>";
arrAnsChoices[1] = "<table cols=\"3\" cellspacing=\"0\" cellpadding=\"1\" style=\"width: 90%; margin-top:0em; margin-bottom:0em\"><tr><td class=\"acctentry_d\"><i>Cash</i></td><td class=\"debit_credit\">250,000</td><td class=\"debit_credit\">&nbsp;</td></tr><tr><td class=\"acctentry_c\"><i>Death Claims Paid</i></td><td class=\"debit_credit\">&nbsp;</td><td class=\"debit_credit\">250,000</td></tr></table>";
arrAnsChoices[2] = "<table cols=\"3\" cellspacing=\"0\" cellpadding=\"1\" style=\"width: 90%; margin-top:0em; margin-bottom:0em\"><tr><td class=\"acctentry_d\"><i>Cash</i></td><td class=\"debit_credit\">250,000</td><td class=\"debit_credit\">&nbsp;</td></tr><tr><td class=\"acctentry_c\"><i>Amount Recoverable from Reinsurer</i></td><td class=\"debit_credit\">&nbsp;</td><td class=\"debit_credit\">250,000</td></tr></table>";
arrAnsChoices[3] = "<table cols=\"3\" cellspacing=\"0\" cellpadding=\"1\" style=\"width: 90%; margin-top:0em; margin-bottom:0em\"><tr><td class=\"acctentry_d\"><i>Amount Recoverable from Reinsurer</i></td><td class=\"debit_credit\">250,000</td><td class=\"debit_credit\">&nbsp;</td></tr><tr><td class=\"acctentry_c\"><i>Death Claims Paid</i></td><td class=\"debit_credit\">&nbsp;</td><td class=\"debit_credit\">250,000</td></tr></table>";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 445514;
arrAnsIDs[1] = 445515;
arrAnsIDs[2] = 445516;
arrAnsIDs[3] = 445517;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 4;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">Village most likely would have debited <i>Death Claims Paid</i> and credited <i>Cash</i> for <b>$750,000</b> to record <b>payment of the death benefit</b> to the policy beneficiary.</p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">The correct accounting entry to record the reinsurer’s obligation under this policy would include a credit to <i>Death Claims Paid </i>of $250,000. However, the entry would <b>not</b> include a debit to <i>Cash </i>for $250,000.</p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">Village most likely would have debited <i>Death Claims Paid</i> and credited <i>Cash</i> for $250,000 to record the <b>receipt of payment for the claim recoverable from the reinsurer</b>.</p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">When an insurer obtains reinsurance on a policy, the insurer is usually responsible for paying benefits to any and all policy beneficiaries. However, because the reinsurer has assumed a portion or all of the risk associated with the policy, the reinsurer is typically obligated to pay its contracted share of the benefits to the direct writer—in this case, the insurer—to comply with the terms of the reinsurance agreement. The money that the reinsurer is obligated to pay the insurer is an asset to the insurer. <i>Amount Recoverable from Reinsurer</i> is a statutory account.</p><p class=\"explanations\"><b>Learning Objective: 6C. Describe how an insurer accounts for and reports amounts recoverable from reinsurers, policy loans, and deferred acquisition costs (DAC).</b></p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_361_PQ_048'] = objQuestion;


objQuestion = new Object();
objQuestion.strID = 'LOMA_361_PQ_049';
objQuestion.questionID = 110235;
objQuestion.item = 'LOMA_361_PPQ2019_049';
objQuestion.primaryLO = '6C';
objQuestion.textref = 'c. 6, p. 10';
objQuestion.textbook = 0;
objQuestion.chapter = 6;
objQuestion.module = 2;
var arrLOs = new Array();
arrLOs[0] = '6C';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">Cash value life insurance policies include a savings element—known as the cash value—that a policyowner can use in a number of ways. One important use of the cash value is as a policy loan. Many life insurance policies contain a provision giving the policyowner the right to request a policy loan. The basic accounting entry to record a policy loan is a</p>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "debit to an asset account such as <i>Policy Loans </i>and a credit to <i>Cash</i>, another asset account";
arrAnsChoices[1] = "credit to an asset account such as <i>Policy Loans </i>and a debit to <i>Cash</i>, another asset account";
arrAnsChoices[2] = "debit to <i>Cash</i>, a credit to <i>Policy Loans</i>, and a credit to <i>Policy Loan Interest</i>";
arrAnsChoices[3] = "credit to <i>Cash</i>, a debit to <i>Policy Loans</i>, and a debit to <i>Policy Loan Interest</i>";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 445518;
arrAnsIDs[1] = 445519;
arrAnsIDs[2] = 445520;
arrAnsIDs[3] = 445521;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 1;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">A policy loan, called a certificate loan in fraternal benefit societies, is a loan made to a policyowner and secured by a policy’s cash surrender value as collateral. Interest is charged on policy loans, which are unique to life insurers. Policyowners usually pay the accrued policy loan interest when repaying the principal on a policy loan. The typical accounting entry to record the insurer’s receipt of principal and interest on a policy loan consists of a debit to <i>Cash</i>, a credit to <i>Policy Loans </i>or <i>Contract Loans</i>, and a credit to <i>Investment Income</i> for the interest portion.</p><p class=\"explanations\">For statutory reporting purposes, policy loans typically are considered admitted assets. They are reported at book value, which means the original loan amount, plus accrued interest, minus principal repayments. <i>Contract Loans</i>, an asset account, is reported separately from <i>Investment Income</i>, a revenue account. However, for financial reporting purposes, policy loan interest that is due and accrued is reported as part of <i>Investment Income Due and Accrued</i>, an asset account.</p><p class=\"explanations\"><b>Learning Objective: 6C. Describe how an insurer accounts for and reports amounts recoverable from reinsurers, policy loans, and deferred acquisition costs (DAC).</b></p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">It is true that the basic accounting entry to record a policy loan includes a credit to <i>Cash</i>. However, the correct accounting entry does <b>not</b> include a credit to <i>Policy Loans</i>.</p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">The typical accounting entry to <b>record the receipt of principal and interest on a policy loan</b> consists of a debit to <i>Cash</i>, a credit to <i>Policy Loans</i>, and a credit to <i>Policy Loan Interest</i>.</p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">The typical accounting entry to <b>record the receipt of principal and interest on a policy loan</b> by the insurer consists of a <b>debit</b> to <i>Cash</i>, a <b>credit</b> to <i>Policy Loans</i>, and a <b>credit</b> to <i>Policy Loan Interest</i>.</p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_361_PQ_049'] = objQuestion;


objQuestion = new Object();
objQuestion.strID = 'LOMA_361_PQ_050';
objQuestion.questionID = 110236;
objQuestion.item = 'LOMA_361_PPQ2019_050';
objQuestion.primaryLO = '6D';
objQuestion.textref = 'c. 6, pp. 11-12, 13-14';
objQuestion.textbook = 0;
objQuestion.chapter = 6;
objQuestion.module = 2;
var arrLOs = new Array();
arrLOs[0] = '6D';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">The following statements about an insurer’s general account and separate accounts. Select the answer choice containing the correct statement.</p>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "Because general account and separate account assets do not belong to the insurer, they are subject to the claims of an insurer’s creditors in the event of the insurer’s insolvency.";
arrAnsChoices[1] = "The Separate Accounts Annual Statement separates the liabilities for guaranteed products from those for nonguaranteed products.";
arrAnsChoices[2] = "The customer, rather than the insurer, bears all or most of the investment risk associated with general account products.";
arrAnsChoices[3] = "The separate account is the account in which an insurer maintains assets that support its contractual obligations for guaranteed insurance products.";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 445522;
arrAnsIDs[1] = 445523;
arrAnsIDs[2] = 445524;
arrAnsIDs[3] = 445525;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 2;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">Both general account assets and separate account assets <b>belong</b> to the insurer. Although general account assets typically are subject to the claims of an insurer’s general creditors in the event of the insurer’s insolvency, unlike general account assets, separate account assets generally are <b>insulated</b> from the claims of an insurer’s general creditors in the event of the insurer’s insolvency.</p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">Like the Annual Statement, the Separate Accounts Annual Statement includes the pages that form the statutory balance sheet and income statement, along with information on reserves and an analysis of operations by lines of business. However, it includes no notes to the financial statements nor any types of noninvestment schedules.</p><p class=\"explanations\">The Separate Accounts Annual Statement, which has only an annual version, also reports on the net flow of funds between the general account and the separate accounts. In addition, the investment activities of an insurer’s separate accounts—investment purchases and sales, capital gains and losses, and investment income—are reported only in the Separate Accounts Annual Statement.</p><p class=\"explanations\">The Separate Accounts Annual Statement also includes a unique exhibit called “Guaranteed insurance and annuity products”—or “Exhibit 6”—that separates the liabilities for guaranteed products from those for nonguaranteed products. Regulators use this exhibit to differentiate between the separate account liabilities that represent risks for the company versus those that represent risks for customer.</p><p class=\"explanations\"><b>Learning Objective: 6D. Differentiate between an insurer’s general account and its separate accounts and explain the relationship between an insurer’s Annual Statement and its Separate Accounts Annual Statement.</b></p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">The <b>insurer</b> bears the investment risk for funds in the <b>general account</b>. In general, the customer bears all or most of the risk of separate account products. Although the vast majority of the products in separate accounts are nonguaranteed, some separate accounts contain guaranteed (nonvariable) products, such as modified guaranteed annuities, for which the insurer bears the investment risk.</p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">The <b>general account</b> is the account in which an insurer maintains assets that support its contractual obligations for guaranteed insurance products. A <b>separate account</b>, also called a segregated fund, is an account that the insurer maintains separately from its general account for managing the funds associated with nonguaranteed (variable) insurance products, such as variable universal life insurance and variable annuities. Although the vast majority of the products in separate accounts are nonguaranteed, some separate accounts contain guaranteed (nonvariable) products, such as modified guaranteed annuities.</p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_361_PQ_050'] = objQuestion;





var arrlotext = new Array(); 
arrlotext['6A'] = "6A. Identify and describe an insurer’s short-term assets, such as cash, cash equivalents, investment income due and accrued, deferred premiums and uncollected premiums, and prepaid expenses.";
arrlotext['6B'] = "6B. Describe how an insurer accounts for and reports real estate purchases and sales.";
arrlotext['6C'] = "6C. Describe how an insurer accounts for and reports amounts recoverable from reinsurers, policy loans, and deferred acquisition costs (DAC).";
arrlotext['6D'] = "6D. Differentiate between an insurer’s general account and its separate accounts and explain the relationship between an insurer’s Annual Statement and its Separate Accounts Annual Statement.";