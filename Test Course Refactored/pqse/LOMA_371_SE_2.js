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

var quizname = "LOMA 371 Sample Examination, Module 2";
var coursename = 'LOMA 371';
var modulenumber = 2;
var title = "LOMA_371_PSE2021_M2";
var intNumPools = 1;
var numQ = 10;
var numTexts = 1;
var numChap = 2;
var duration = 20;
var arrTexts = new Array();
var arrNumChap = new Array();
arrTexts[0] = "Risk Management and Product Design for Insurance Companies, Third Edition (2020)";
arrNumChap[0] = 2;
var thisChap = '--';

objPool = new Object();
objPool.intSelectCount = 10;
objPool.formID = 2622;
objPool.formName = 'PSE2021_M2';
arrPoolQuestions = new Array();
arrPoolQuestions[0] = 'LOMA_371_SE_022';
arrPoolQuestions[1] = 'LOMA_371_SE_023';
arrPoolQuestions[2] = 'LOMA_371_SE_024';
arrPoolQuestions[3] = 'LOMA_371_SE_025';
arrPoolQuestions[4] = 'LOMA_371_SE_026';
arrPoolQuestions[5] = 'LOMA_371_SE_027';
arrPoolQuestions[6] = 'LOMA_371_SE_028';
arrPoolQuestions[7] = 'LOMA_371_SE_029';
arrPoolQuestions[8] = 'LOMA_371_SE_030';
arrPoolQuestions[9] = 'LOMA_371_SE_031';
objPool.arrPoolQuestions = arrPoolQuestions;
arrPools[0] = objPool;

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




var arrlotext = new Array(); 
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
