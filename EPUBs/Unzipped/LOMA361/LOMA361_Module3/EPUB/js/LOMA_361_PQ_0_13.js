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

var quizname = "LOMA 361 Practice Questions, Chapter 13";
var coursename = 'LOMA 361';
var modulenumber = 3;
var title = "LOMA_361_PPQ2019_0_13";
var intNumPools = 1;
var numQ = 8;
var numTexts = 1;
var numChap = 1;
var arrTexts = new Array();
var arrNumChap = new Array();
var duration = 0;
arrTexts[0] = "Accounting and Financial Reporting in Life Insurance Companies, Second Edition (2019)";
arrNumChap[0] = 1;
var thisChap = '13';

objPool = new Object(); 
objPool.intSelectCount = 8;
objPool.formID = 2103;
objPool.formName = 'PPQ2019_0_13';
arrPoolQuestions = new Array();
arrPoolQuestions[0] = 'LOMA_361_PQ_105';
arrPoolQuestions[1] = 'LOMA_361_PQ_106';
arrPoolQuestions[2] = 'LOMA_361_PQ_107';
arrPoolQuestions[3] = 'LOMA_361_PQ_108';
arrPoolQuestions[4] = 'LOMA_361_PQ_109';
arrPoolQuestions[5] = 'LOMA_361_PQ_110';
arrPoolQuestions[6] = 'LOMA_361_PQ_111';
arrPoolQuestions[7] = 'LOMA_361_PQ_112';
objPool.arrPoolQuestions = arrPoolQuestions;
arrPools[0] = objPool;

objQuestion = new Object();
objQuestion.strID = 'LOMA_361_PQ_105';
objQuestion.questionID = 110291;
objQuestion.item = 'LOMA_361_PPQ2019_105';
objQuestion.primaryLO = '13A';
objQuestion.textref = 'c. 13, pp. 3-4; c. 12, p. 4';
objQuestion.textbook = 0;
objQuestion.chapter = 13;
objQuestion.module = 3;
var arrLOs = new Array();
arrLOs[0] = '12A';
arrLOs[1] = '13A';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">The first step toward analyzing costs is classifying them in practical ways. From an individual responsibility manager’s perspective, home office rent typically can be classified as both</p>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "a direct cost and a controllable cost";
arrAnsChoices[1] = "a differential cost and a sunk cost";
arrAnsChoices[2] = "a discretionary cost and a noncontrollable cost";
arrAnsChoices[3] = "an indirect cost and a noncontrollable cost";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 445747;
arrAnsIDs[1] = 445748;
arrAnsIDs[2] = 445749;
arrAnsIDs[3] = 445750;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 4;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">Home office rent typically <b>cannot</b> be classified as a direct cost because this cost is not identified specifically with a single cost object. In addition, an individual responsibility manager does not have decision-making authority over home office rent; therefore, home office rent typically <b>cannot</b> be classified as a controllable cost.</p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">Home office rent typically <b>cannot</b> be classified as a sunk cost, which is defined as a cost that already has been incurred and cannot change as a result of a current or future decision. In addition, home office rent typically <b>cannot</b> be classified as a differential cost, which is defined as the difference in cost between two alternative choices.</p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">It is true that office rental expense is considered to be a noncontrollable cost to an individual responsibility manager, because a noncontrollable cost is a cost over which an individual responsible manager has no decision-making authority. However, home office rent typically <b>cannot</b> be classified as a differential cost, which is defined as the difference in cost between two alternative choices.</p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">An indirect cost is a cost that cannot be identified specifically with a single cost object. A noncontrollable cost is a cost over which an individual responsibility manager has no decision-making authority. For example, to a company’s line of business, home office rent typically is classified as an indirect, noncontrollable cost. However, to the company’s CEO, home office rent typically is classified as a direct, controllable cost.</p><p class=\"explanations\"><b>Learning Objective: (1) 13A. Identify and distinguish costs that are classified by description, behavior, and measurement; (2) 12A. Define <i>responsibility accounting</i> and identify the features of four types of responsibility centers: cost centers, revenue centers, profit centers, and investment centers.</b></p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_361_PQ_105'] = objQuestion;


objQuestion = new Object();
objQuestion.strID = 'LOMA_361_PQ_106';
objQuestion.questionID = 110292;
objQuestion.item = 'LOMA_361_PPQ2019_106';
objQuestion.primaryLO = '13A';
objQuestion.textref = 'c. 13, pp. 3-4, 6-7';
objQuestion.textbook = 0;
objQuestion.chapter = 13;
objQuestion.module = 3;
var arrLOs = new Array();
arrLOs[0] = '13A';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">Costs classified by measurement are especially helpful for management reports and for cost-volume-profit (CVP) analysis. Select the answer choice that correctly identifies the following two costs:</p><ul class=\"examul\"><li><b>Cost A</b>—The additional cost incurred as a result of producing one additional unit of an existing product or service</li><li><b>Cost B</b>—The benefit that is forfeited or given up in choosing one decision alternative over another</li></ul>";
var arrAnsChoices = new Array();
arrAnsChoices[-1] = "<u>Cost A</u></div><div class=\"anshead\"><u>Cost B</u>";
arrAnsChoices[0] = "marginal cost</div><div class=\"anscell\" onclick=\"recordAns(1);\">opportunity cost";
arrAnsChoices[1] = "marginal cost</div><div class=\"anscell\" onclick=\"recordAns(2);\">unit cost";
arrAnsChoices[2] = "standard cost</div><div class=\"anscell\" onclick=\"recordAns(3);\">opportunity cost";
arrAnsChoices[3] = "standard cost</div><div class=\"anscell\" onclick=\"recordAns(4);\">unit cost";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 445752;
arrAnsIDs[1] = 445753;
arrAnsIDs[2] = 445754;
arrAnsIDs[3] = 445755;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 1;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">Cost A describes a marginal cost, which a company incurs after all fixed costs applicable to a product or service have already been accounted for; therefore, marginal costs are always variable costs. Marginal costs measure the additional total expense of increased volume of an already existing product or service: Marginal Cost = Change in Costs ÷ Additional Units Produced. Unlike marginal costs, differential costs measure the expected increase or decrease in cost for undertaking a new product or service.</p><p class=\"explanations\">Cost B describes an opportunity cost, which is associated with all out-of-pocket costs—which require outlays of cash or other resources. A sunk cost is an actual financial cost that the company has already incurred. However, an opportunity cost may or may not yet be incurred. A company estimates its opportunity costs because they are not known in advance. The company’s accounting system does not capture the financial impact of opportunity costs because these costs are not actual, objective costs, and no transactions are involved. Thus, the company’s financial statements do not include opportunity costs.</p><p class=\"explanations\"><b>Learning Objective: 13A. Identify and distinguish costs that are classified by description, behavior, and measurement.</b></p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">It is true that Cost A describes a marginal cost. However, Cost B does <b>not</b> describe a unit cost, also known as an average cost, which is the incurred expense attributable to a single measured amount of work.</p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">It is true that Cost B describes an opportunity cost. However, Cost A does <b>not</b> describe a standard cost, which is a predetermined cost expected to be incurred for particular items during normal business operations. Two important standard costs for insurance companies are the unit cost of processing one claim and the unit cost of maintaining one policy.</p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">Cost A does <b>not</b> describe a standard cost, which is a predetermined cost expected to be incurred for particular items during normal business operations. Two important standard costs for insurance companies are the unit cost of processing one claim and the unit cost of maintaining one policy. In addition, Cost B does <b>not</b> describe a unit cost, also known as an average cost, which is the incurred expense attributable to a single measured amount of work.</p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_361_PQ_106'] = objQuestion;


objQuestion = new Object();
objQuestion.strID = 'LOMA_361_PQ_107';
objQuestion.questionID = 110293;
objQuestion.item = 'LOMA_361_PPQ2019_107';
objQuestion.primaryLO = '13A';
objQuestion.textref = 'c. 13, pp. 5-6';
objQuestion.textbook = 0;
objQuestion.chapter = 13;
objQuestion.module = 3;
var arrLOs = new Array();
arrLOs[0] = '13A';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">The most common cost classifications by behavior are fixed costs, variable costs, and semi-variable costs. One example of a <i>semi-variable </i>cost is the cost of</p>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "rent for a branch office";
arrAnsChoices[1] = "electricity";
arrAnsChoices[2] = "agent commissions";
arrAnsChoices[3] = "premium processing";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 445756;
arrAnsIDs[1] = 445757;
arrAnsIDs[2] = 445758;
arrAnsIDs[3] = 445759;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 2;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">Rent for a branch office is an example of a <b>fixed cost</b>. A fixed cost remains constant for all levels of operating activity or production.</p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">The behavior of a cost describes how the cost changes with time and volume. A fixed cost remains constant for all levels of operating activity or production. A variable cost changes in direct response to changes in the level of operating activity.</p><p class=\"explanations\">A semi-variable cost, also called a mixed cost, includes a fixed cost component plus the amount of a variable component over time and at each volume level. Other examples of semi-variable costs include the costs for heat, repairs, telephone, and building maintenance.</p><p class=\"explanations\"><b>Learning Objective: 13A. Identify and distinguish costs that are classified by description, behavior, and measurement.</b></p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">Agent commissions is an example of a <b>variable </b>cost. A variable cost changes in direct response to changes in the level of operating activity.</p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">The cost of premium processing is an example of a <b>variable </b>cost. A variable cost changes in direct response to changes in the level of operating activity.</p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_361_PQ_107'] = objQuestion;


objQuestion = new Object();
objQuestion.strID = 'LOMA_361_PQ_108';
objQuestion.questionID = 110294;
objQuestion.item = 'LOMA_361_PPQ2019_108';
objQuestion.primaryLO = '13A';
objQuestion.textref = 'c. 13, pp. 7-8';
objQuestion.textbook = 0;
objQuestion.chapter = 13;
objQuestion.module = 3;
var arrLOs = new Array();
arrLOs[0] = '13A';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">Insurers typically classify costs by one of three categories: description, behavior, and measurement. Unit costs are classified by <b>(behavior / measurement)</b> and <b>(do / do not)</b> include all fixed costs and all variable costs.</p>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "behavior / do";
arrAnsChoices[1] = "behavior / do not";
arrAnsChoices[2] = "measurement / do";
arrAnsChoices[3] = "measurement / do not";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 445760;
arrAnsIDs[1] = 445761;
arrAnsIDs[2] = 445762;
arrAnsIDs[3] = 445763;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 3;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">It is true that unit costs include all fixed costs and all variable costs. However, unit costs are <b>not</b> classified by behavior.</p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">Unit costs are <b>not</b> classified by behavior. In addition, unit costs <b>include</b> all fixed costs and variable costs.</p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">The single measured amount of work is usually one unit of a product or a service. An insurance company typically expresses unit costs in the form of unit cost per policy issued, $1,000 of face amount issued, $100 of agent commissions paid, or $1,000 of investment income.</p><p class=\"explanations\">Unit costs can be established for direct and indirect expenses and for fixed and variable expenses. The formula is the same: Unit cost = Total cost ÷ Number of units. Managers typically use unit costs to evaluate or adjust a product’s profitability. Normally, as production volume or the amount of activity increases, unit costs decrease. Conversely, as volume decreases, unit costs typically increase.</p><p class=\"explanations\"><b>Learning Objective: 13A. Identify and distinguish costs that are classified by description, behavior, and measurement.</b></p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">It is true that unit costs are classified by measurement. However, unit costs <b>include</b> all fixed costs and all variable costs.</p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_361_PQ_108'] = objQuestion;


objQuestion = new Object();
objQuestion.strID = 'LOMA_361_PQ_109';
objQuestion.questionID = 110295;
objQuestion.item = 'LOMA_361_PPQ2019_109';
objQuestion.primaryLO = '13B';
objQuestion.textref = 'c. 13, pp. 6-7';
objQuestion.textbook = 0;
objQuestion.chapter = 13;
objQuestion.module = 3;
var arrLOs = new Array();
arrLOs[0] = '13B';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">In 2017, the Lantana Life Insurance Company issued 10,000 life insurance policies at a total cost of $700,000. In 2018, Lantana issued 10,250 life insurance policies at a total cost of $725,000. This information indicates that Lantana’s marginal cost of issuing <i>each</i> additional life insurance policy in 2018 is equal to</p>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "$70.00";
arrAnsChoices[1] = "$72.50";
arrAnsChoices[2] = "$100.00";
arrAnsChoices[3] = "$250.00";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 445764;
arrAnsIDs[1] = 445765;
arrAnsIDs[2] = 445766;
arrAnsIDs[3] = 445767;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 3;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">Marginal costs solely measure the additional total expense of increased volume of an already existing product or service. The formula for calculating marginal cost is: Marginal Cost = Change in Costs ÷ Additional Units Produced. In this situation, the marginal cost of each additional life insurance policy Lantana issued in 2018 is $100, calculated as ($725,000 ‒ $700,000) ÷ 250.</p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">Marginal costs solely measure the additional total expense of increased volume of an already existing product or service. The formula for calculating marginal cost is: Marginal Cost = Change in Costs ÷ Additional Units Produced. In this situation, the marginal cost of each additional life insurance policy Lantana issued in 2018 is $100, calculated as ($725,000 ‒ $700,000) ÷ 250.</p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">Marginal costs solely measure the additional total expense of increased volume of an already existing product or service. The formula for calculating marginal cost is: Marginal Cost = Change in Costs ÷ Additional Units Produced. In this situation, the marginal cost of each additional life insurance policy Lantana issued in 2018 is $100, calculated as ($725,000 ‒ $700,000) ÷ 250.</p><p class=\"explanations\"><b>Learning Objective: 13B. Determine the marginal cost for a specific increase of units and cost.</b></p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">Marginal costs solely measure the additional total expense of increased volume of an already existing product or service. The formula for calculating marginal cost is: Marginal Cost = Change in Costs ÷ Additional Units Produced. In this situation, the marginal cost of each additional life insurance policy Lantana issued in 2018 is $100, calculated as ($725,000 ‒ $700,000) ÷ 250.</p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_361_PQ_109'] = objQuestion;


objQuestion = new Object();
objQuestion.strID = 'LOMA_361_PQ_110';
objQuestion.questionID = 110296;
objQuestion.item = 'LOMA_361_PPQ2019_110';
objQuestion.primaryLO = '13C';
objQuestion.textref = 'c. 13, pp. 9-11';
objQuestion.textbook = 0;
objQuestion.chapter = 13;
objQuestion.module = 3;
var arrLOs = new Array();
arrLOs[0] = '13C';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">Cost accumulation is the process of capturing all company costs and categorizing them in meaningful ways. Most effective cost accounting systems categorize costs by type of cost, line of business, department or cost center, or function. The following statements are about these methods of cost accumulation. Select the answer choice containing the correct statement.</p>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "Accumulating costs by type allows a company to determine which areas of the company incur each cost.";
arrAnsChoices[1] = "When accumulating costs by line of business, an insurer identifies all costs that are directly attributable to a particular line and charges these costs to that line.";
arrAnsChoices[2] = "When accumulating costs by cost center, the costs of departments at each level are absorbed into the cost reports for departments at lower levels in the organization.";
arrAnsChoices[3] = "When accumulating costs by function, if a series of activities is used by more than one function, the cost is allocated to the function that first incurred the cost.";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 445768;
arrAnsIDs[1] = 445769;
arrAnsIDs[2] = 445770;
arrAnsIDs[3] = 445771;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 2;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">In accumulating costs by type, a company accumulates costs <b>without </b>regard to the specified area of the company that incurs the expense.</p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">When accumulating costs by line of business, an insurer identifies all costs that are directly attributable to a particular line and charges these costs to that line. When accumulating costs by department or cost center, insurers consolidate department costs at one level into the department costs at the next higher level in the company.</p><p class=\"explanations\">A company accumulates costs by type without regard to the specified area of the company that incurs the expense. This method enables companies to satisfy financial reporting requirements. To accumulate costs by function, an insurer directs the costs to the company operation that generates the costs. Within each function, managers accumulate costs by behavior, and then by type.</p><p class=\"explanations\"><b>Learning Objective: 13C. Interpret how costs are accumulated by type, by line of business, by cost center, and by function.</b></p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">When accumulating costs by department or cost center, insurers consolidate the costs of departments at each level of a company into the cost reports for departments at <b>higher</b> levels in the organization.</p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">When accumulating costs by function, if a series of activities is used by more than one function, a <b>portion</b> of the cost incurred by the series is allocated <b>to each function</b>.</p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_361_PQ_110'] = objQuestion;


objQuestion = new Object();
objQuestion.strID = 'LOMA_361_PQ_111';
objQuestion.questionID = 110297;
objQuestion.item = 'LOMA_361_PPQ2019_111';
objQuestion.primaryLO = '13D';
objQuestion.textref = 'c. 13, pp. 12-13; c. 12, p. 4';
objQuestion.textbook = 0;
objQuestion.chapter = 13;
objQuestion.module = 3;
var arrLOs = new Array();
arrLOs[0] = '12A';
arrLOs[1] = '13D';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">An insurance company allocates the costs incurred by a department according to whether the department is classified as an operating department or a service department. A typical <i>service</i> department in an insurance company is the</p>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "policy issue department, and its costs are direct costs";
arrAnsChoices[1] = "policyowner service department, and its costs are indirect costs";
arrAnsChoices[2] = "claims administration department, and its costs are indirect costs";
arrAnsChoices[3] = "actuarial department, and its costs are indirect costs";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 445772;
arrAnsIDs[1] = 445773;
arrAnsIDs[2] = 445774;
arrAnsIDs[3] = 445775;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 4;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">It is true that the policy issue department’s costs are direct costs because they are directly traceable to a specific product. However, the policy issue department is correctly classified as an <b>operating department</b>.</p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">The policyowner service department is correctly classified as an <b>operating department</b>. In addition, all costs incurred by an operating department are <b>direct costs</b> because they are directly traceable to a specific product.</p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">The claims administration department is correctly classified as an <b>operating department</b>. In addition, all costs incurred by an operating department are <b>direct costs</b> because they are directly traceable to a specific product.</p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">A department that engages in an insurance company’s revenue-generating activities is often called an operating department or a production department. An insurer’s operating departments provide products and services directly to and for the insurer’s external customers in order to generate revenue for the insurer. Typical operating departments in an insurance company include claims administration, policy issue, policyowner service, premium collection, sales, and underwriting. All costs incurred by an operating department are direct costs because they are directly traceable to a specific product.</p><p class=\"explanations\">A service department provides support services to operating departments and to other service departments, but it does not generate revenue. An insurer’s service departments provide products and services for the insurer’s internal customers, including its operating departments and other service departments, but not directly to the insurer’s external customers. Other examples of service departments include accounting, human resources, information technology, legal, and marketing. A service department’s costs are indirect costs, which a company typically allocates to the centers that use the services.</p><p class=\"explanations\"><b>Learning Objective: (1) 13D. Differentiate the basic methods of service department cost allocation; (2) 12A. Define <i>responsibility accounting</i> and identify the features of four types of responsibility centers: cost centers, revenue centers, profit centers, and investment centers.</b></p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_361_PQ_111'] = objQuestion;


objQuestion = new Object();
objQuestion.strID = 'LOMA_361_PQ_112';
objQuestion.questionID = 110298;
objQuestion.item = 'LOMA_361_PPQ2019_112';
objQuestion.primaryLO = '13D';
objQuestion.textref = 'c. 13, pp. 13-14';
objQuestion.textbook = 0;
objQuestion.chapter = 13;
objQuestion.module = 3;
var arrLOs = new Array();
arrLOs[0] = '13D';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">The Vim Life Insurance Company uses a method of service department cost allocation that requires the allocation of costs back and forth between all service departments using simultaneous equations. This information indicates that Vim uses the method of allocating service department costs called the</p>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "chargeback method";
arrAnsChoices[1] = "step method";
arrAnsChoices[2] = "direct method";
arrAnsChoices[3] = "reciprocal method";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 445776;
arrAnsIDs[1] = 445777;
arrAnsIDs[2] = 445778;
arrAnsIDs[3] = 445779;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 4;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">Using the chargeback method, a department allocates its indirect costs to departments based on usage. When one department performs work for another department, the first department records the costs of the service, in effect billing the second department for its services. Chargebacks are most common for corporate service functions such as building services, accounting, information technology (IT) services, human resources, and office services.</p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">The step method of cost allocation, also called step-down allocation, assumes that service departments perform services for other service departments as well as for operating departments. Under the step method, a service department’s costs are allocated to other benefiting service departments first, and then to benefiting operating departments.</p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">The direct method of cost allocation assumes that service departments benefit operating departments only. No consideration is given to services provided by one service department to another, such as information technology (IT) services provided to accounting.</p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">The reciprocal method, also called the simultaneous method, of cost allocation fully recognizes the activities that service departments perform for each other.</p><p class=\"explanations\"><b>Learning Objective: 13D. Differentiate the basic methods of service department cost allocation.</b></p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_361_PQ_112'] = objQuestion;





var arrlotext = new Array(); 
arrlotext['12A'] = "12A. Define <i>responsibility accounting</i> and identify the features of four types of responsibility centers: cost centers, revenue centers, profit centers, and investment centers.";
arrlotext['13A'] = "13A. Identify and distinguish costs that are classified by description, behavior, and measurement.";
arrlotext['13B'] = "13B. Determine the marginal cost for a specific increase of units and cost.";
arrlotext['13C'] = "13C. Interpret how costs are accumulated by type, by line of business, by cost center, and by function.";
arrlotext['13D'] = "13D. Differentiate the basic methods of service department cost allocation.";
