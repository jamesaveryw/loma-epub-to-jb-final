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
var strCopyright = '2020';
var mediatype = 'Practice Questions';
var mediashort = 'PPQ'; //use this in name of state status
var coursetype = 'pdf';

var quizname = "LOMA 357 Practice Questions, Chapter 6";
var coursename = 'LOMA 357';
var modulenumber = 2;
var title = "LOMA_357_PPQ2019_0_6";
var intNumPools = 1;
var numQ = 9;
var numTexts = 1;
var numChap = 1;
var arrTexts = new Array();
var arrNumChap = new Array();
var duration = 0;
arrTexts[0] = "Institutional Investing: Principles and Practices (2019)";
arrNumChap[0] = 1;
var thisChap = '6';

objPool = new Object(); 
objPool.intSelectCount = 9;
objPool.formID = 2139;
objPool.formName = 'PPQ2019_0_6';
arrPoolQuestions = new Array();
arrPoolQuestions[0] = 'LOMA_357_PQ_060';
arrPoolQuestions[1] = 'LOMA_357_PQ_061';
arrPoolQuestions[2] = 'LOMA_357_PQ_062';
arrPoolQuestions[3] = 'LOMA_357_PQ_063';
arrPoolQuestions[4] = 'LOMA_357_PQ_064';
arrPoolQuestions[5] = 'LOMA_357_PQ_065';
arrPoolQuestions[6] = 'LOMA_357_PQ_066';
arrPoolQuestions[7] = 'LOMA_357_PQ_067';
arrPoolQuestions[8] = 'LOMA_357_PQ_068';
objPool.arrPoolQuestions = arrPoolQuestions;
arrPools[0] = objPool;

objQuestion = new Object();
objQuestion.strID = 'LOMA_357_PQ_060';
objQuestion.questionID = 111067;
objQuestion.item = 'LOMA_357_PPQ2019_060';
objQuestion.primaryLO = '6A';
objQuestion.textref = 'c. 6, pp. 2-4';
objQuestion.textbook = 0;
objQuestion.chapter = 6;
objQuestion.module = 2;
var arrLOs = new Array();
arrLOs[0] = '6A';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">The following statements are about the function of enterprise risk management (ERM) and asset-liability management (ALM) within an insurance company. Three statements are true, and one statement is false. Select the answer choice containing the <B>FALSE</B> statement.</p>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "In an insurance company, ALM encompasses ERM.";
arrAnsChoices[1] = "ALM involves interaction between the functions within an insurance company.";
arrAnsChoices[2] = "An ERM program shapes an insurance company’s risk policy and risk management practices.";
arrAnsChoices[3] = "Both ERM and ALM systems collect and manage information pertaining to an insurance company’s KPIs and KRIs.";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 448897;
arrAnsIDs[1] = 448898;
arrAnsIDs[2] = 448899;
arrAnsIDs[3] = 448900;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 1;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">This statement is false; therefore, it is the correct response. ERM, which encompasses ALM, also supports a company’s strategic objectives by providing a comprehensive framework for risk management. In addition to identifying risks, ERM involves prioritizing risks based on potential losses, planning responses to potential threats, and monitoring corporate progress on controlling risks.</p><p class=\"explanations\">The ALM function monitors an insurer’s liquidity and is responsible for ensuring that the company always has enough cash available to pay its obligations on time. ALM also ensures the company remains solvent by monitoring cash-flow issues that could cause significant financial losses over time. Thus, ALM is an important component of an insurance company’s capital management practices.</p><p class=\"explanations\"><b>Learning Objective: 6A. Explain the function of enterprise risk management (ERM) within an insurance company and describe how asset-liability management (ALM) relates to ERM.</b></p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">This statement is true; therefore, it is <b>not</b> the correct response. For instance, in performing ALM roles, investment and actuarial professionals attempt to achieve a pattern of investment cash inflows that will, along with other kinds of cash inflows, ensure that an insurance company’s cash on hand always remains equal to or greater than its cash outflows.</p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">This statement is true; therefore, it is <b>not</b> the correct response. ERM supports an insurer’s strategic objectives by providing a comprehensive framework for risk management. All insurer functions, including the investment function, are affected by ERM decisions.</p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">This statement is true; therefore, it is <b>not</b> the correct response. Both ERM and ALM systems also generate performance dashboards and reports that senior management can use to track and analyze key metrics and a variety of reports that provide relevant information to regulators, internal auditors, and managers of specific business lines.</p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_357_PQ_060'] = objQuestion;


objQuestion = new Object();
objQuestion.strID = 'LOMA_357_PQ_061';
objQuestion.questionID = 111068;
objQuestion.item = 'LOMA_357_PPQ2019_061';
objQuestion.primaryLO = '6B';
objQuestion.textref = 'c. 6, pp. 4-5';
objQuestion.textbook = 0;
objQuestion.chapter = 6;
objQuestion.module = 2;
var arrLOs = new Array();
arrLOs[0] = '6B';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">Although each insurance company may have a different organizational structure for its ALM function, this function generally consists of a risk committee, an ALM committee, and an ALM unit. The following statement(s) can correctly be made about the ALM function in an insurance company:</p><ol type=\"A\" class=\"combo\"><li>The risk committee consist of actuarial and investment professionals who analyze ALM risks, implement the ALM framework, and perform ALM support activities at the operational level.</li><li>The ALM committee consists of senior-level actuarial and investment professionals that review ALM performance.</li></ol>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "Both A and B";
arrAnsChoices[1] = "A only";
arrAnsChoices[2] = "B only";
arrAnsChoices[3] = "Neither A nor B";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 448901;
arrAnsIDs[1] = 448902;
arrAnsIDs[2] = 448903;
arrAnsIDs[3] = 448904;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 3;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">At least one of these statements is incorrect.</p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">Statement A is incorrect. The <b>ALM unit</b>, which works at the operational level and reports to the company’s ALM committee, implements the ALM framework and performs ALM support activities.</p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">Statement A is incorrect. The ALM unit, which works at the operational level and reports to the company’s ALM committee, implements the ALM framework and performs ALM support activities. The ALM committee reviews ALM performance and recommends ALM policy changes to the risk committee.</p><p class=\"explanations\">Statement B is correct. The risk committee, also known as the enterprise risk committee<i>,</i> assists the board of directors in supervising the management of the company’s assets, liabilities, capital, and risks. This committee also supervises the ALM committee and coordinates that committee’s efforts within the broader ERM framework.</p><p class=\"explanations\"><b>Learning Objective: 6B. Identify the basic organizational structure for the ALM function within an insurance company.</b></p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">At least one of these statements is correct.</p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_357_PQ_061'] = objQuestion;


objQuestion = new Object();
objQuestion.strID = 'LOMA_357_PQ_062';
objQuestion.questionID = 111069;
objQuestion.item = 'LOMA_357_PPQ2019_062';
objQuestion.primaryLO = '6C';
objQuestion.textref = 'c. 6, pp. 6-7';
objQuestion.textbook = 0;
objQuestion.chapter = 6;
objQuestion.module = 2;
var arrLOs = new Array();
arrLOs[0] = '6C';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">The following statement(s) can correctly be made about the practice of segmentation, in the context of an insurer’s general account portfolios:</p><ol type=\"A\" class=\"combo\"><li>Segmentation aligns the objectives of a portfolio segment with those of a specific product line.</li><li>Segmentation supports an insurer’s efforts to match asset and liability cash flows and manage exposure to interest-rate risk.</li><li>Regardless of portfolio segmentation, all general account assets are available to support any liabilities of the general account.</li></ol>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "A, B, and C";
arrAnsChoices[1] = "A and B only";
arrAnsChoices[2] = "A and C only";
arrAnsChoices[3] = "B and C only";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 448905;
arrAnsIDs[1] = 448906;
arrAnsIDs[2] = 448907;
arrAnsIDs[3] = 448908;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 1;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">Statement A is correct. Each segment is subject to its own investment policies as well as the company’s general account investment policies.</p><p class=\"explanations\">Statement B is correct. Segmentation can also provide additional benefits, which include providing a clear basis for evaluating the performance of each product line relative to its management objectives, and facilitating communication between the actuarial and investment functions.</p><p class=\"explanations\">Statement C is correct. Portfolio segmentation provides a framework for analyzing general account assets and can aid managers in decision-making. However, segmentation is simply a convenient way of organizing assets. Ultimately, all general account assets are available to support any liabilities of the general account.</p><p class=\"explanations\"><b>Learning Objective: 6C. Describe the practice of segmentation in the context of insurer general account portfolios.</b></p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">Statement A and Statement B are correct; however, Statement C is also correct.</p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">Statement A and Statement C are correct; however, Statement B is also correct.</p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">Statement B and Statement C are correct; however, Statement A is also correct.</p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_357_PQ_062'] = objQuestion;


objQuestion = new Object();
objQuestion.strID = 'LOMA_357_PQ_063';
objQuestion.questionID = 111070;
objQuestion.item = 'LOMA_357_PPQ2019_063';
objQuestion.primaryLO = '6D';
objQuestion.textref = 'c. 6, pp. 8-9';
objQuestion.textbook = 0;
objQuestion.chapter = 6;
objQuestion.module = 2;
var arrLOs = new Array();
arrLOs[0] = '6D';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">The paragraph below contains an incomplete statement. Select the answer choice containing the term that correctly completes the paragraph.</p><p class=\"stem\">Insurers use different methods to allocate investment income to liabilities in the general account. Under the _______________ method of investment income allocation, an insurer uses the cash flows associated with a product line or portfolio segment to purchase specific assets for that line or segment, and the segment receives any investment income that its assets generate.</p>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "financial modeling";
arrAnsChoices[1] = "mean liabilities";
arrAnsChoices[2] = "investment segmentation";
arrAnsChoices[3] = "back-testing";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 448909;
arrAnsIDs[1] = 448910;
arrAnsIDs[2] = 448911;
arrAnsIDs[3] = 448912;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 3;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">Typically, an ALM system includes financial modeling capabilities. A financial model is a computer-based mathematical model that approximates the operation of <b>real-world financial processes</b>.</p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">With the mean liabilities method, an insurer<i><b> </b></i>assigns investment income to each of its product lines <b>in proportion to the reserves attributed</b> to that product line. For an insurer, reserves are liabilities that represent the amounts of money that the insurer expects to need to meet future contractual obligations.</p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">Two common investment income allocation methods are the mean liabilities method and the investment segmentation method.</p><p class=\"explanations\">Under the mean liabilities method, an insurer assigns investment income to each of its product lines in proportion<b> </b>to the reserves attributed to that product line. For example, if 40% of the insurer’s reserves are attributable to group life insurance, then the group life product line will receive 40% of the general account’s investment income.</p><p class=\"explanations\">With the investment segmentation method, the insurer treats each product line as though the product line owned specified investments. Under this method, an insurer can develop separate investment strategies for different lines of business.</p><p class=\"explanations\"><b>Learning Objective: 6D. Describe two methods for allocating investment income to company liabilities.</b></p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">In cash-flow testing, an insurer uses financial modeling software to project the future values of its cash flows, and then conducts <b>back-testing</b>, which involves applying the models and their assumptions to known past data, to see if the models produce accurate projections of known data, in order to identify areas for improvement.</p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_357_PQ_063'] = objQuestion;


objQuestion = new Object();
objQuestion.strID = 'LOMA_357_PQ_064';
objQuestion.questionID = 111071;
objQuestion.item = 'LOMA_357_PPQ2019_064';
objQuestion.primaryLO = '6E';
objQuestion.textref = 'c. 6, pp. 11-12';
objQuestion.textbook = 0;
objQuestion.chapter = 6;
objQuestion.module = 2;
var arrLOs = new Array();
arrLOs[0] = '6E';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">By definition, a replicating portfolio is a virtual pool of <b>(assets / liabilities)</b> created to mimic the cash flows and market values observed in a specified pool of <b>(assets / liabilities)</b>.</p>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "assets / assets";
arrAnsChoices[1] = "assets / liabilities";
arrAnsChoices[2] = "liabilities / assets";
arrAnsChoices[3] = "liabilities / liabilities";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 448913;
arrAnsIDs[1] = 448914;
arrAnsIDs[2] = 448915;
arrAnsIDs[3] = 448916;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 2;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">It is correct to say that a replicating portfolio is a virtual pool of assets. However, the virtual pool of assets is created to mimic the cash flows and market values observed in a specified pool of <b>liabilities</b>.</p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">To create a replicating portfolio for a pool of liabilities, modelers find market-traded assets that exhibit the financial risk and return characteristics of the company’s liabilities. Then, they select and assemble component market indexes that display the relevant characteristics of the selected asset classes to use as source data for the replicating portfolio. The resulting virtual portfolio reasonably approximates the financial profile of a given product type, or even the insurer’s entire pool of liabilities.</p><p class=\"explanations\">Because liability cash flows can be hard to estimate for some insurance products, a replicating portfolio is unlikely to be a perfect match for an actual liability pool. However, creating a replicating portfolio on a best-efforts basis is a valuable exercise for an insurer, which can quickly model the effects that changes in financial conditions have on their liability pools.</p><p class=\"explanations\"><b>Learning Objective: 6E. Discuss an integrated portfolio benchmarking model for insurance companies and describe how insurers create replicating portfolios for their liabilities.</b></p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">A replicating portfolio is a virtual pool of <b>assets</b>. Also, the virtual pool of assets is created to mimic the cash flows and market values observed in a specified pool of <b>liabilities</b>.</p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">It is correct to say that a replicating portfolio is created to mimic the cash flows and market values observed in a specified pool of liabilities. However, a replicating portfolio is a virtual pool of <b>assets</b>.</p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_357_PQ_064'] = objQuestion;


objQuestion = new Object();
objQuestion.strID = 'LOMA_357_PQ_065';
objQuestion.questionID = 111072;
objQuestion.item = 'LOMA_357_PPQ2019_065';
objQuestion.primaryLO = '6F';
objQuestion.textref = 'c. 6, pp. 14-16';
objQuestion.textbook = 0;
objQuestion.chapter = 6;
objQuestion.module = 2;
var arrLOs = new Array();
arrLOs[0] = '6F';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">The method of testing the adequacy of an insurance company’s cash flows, in which the mathematical model changes the inputs of multiple variables in a single simulation, is known as (<b>scenario&nbsp;testing / sensitivity analysis</b>). Duration analysis is a type of (<b>scenario testing / sensitivity&nbsp;analysis</b>).</p>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "scenario testing / scenario testing";
arrAnsChoices[1] = "scenario testing / sensitivity analysis";
arrAnsChoices[2] = "sensitivity analysis / scenario testing";
arrAnsChoices[3] = "sensitivity analysis / sensitivity analysis";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 448917;
arrAnsIDs[1] = 448918;
arrAnsIDs[2] = 448919;
arrAnsIDs[3] = 448920;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 2;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">It is correct to say that, in scenario testing, the mathematical model changes the inputs of multiple variables in a single simulation. However, duration analysis is <b>not</b> a type of scenario testing.</p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">Sensitivity analysis measures the responsiveness of the outputs produced by a mathematical model to changes in the values of the model’s input variables. Insurers can apply sensitivity analysis to an entire portfolio or to just a portfolio segment.</p><p class=\"explanations\">Duration analysis involves evaluating and comparing the market value sensitivity of assets portfolios and liabilities portfolios to changes in market interest rates, and noting differences in duration. A duration gap is a mismatch between the asset duration and the liability duration.</p><p class=\"explanations\">Scenario testing evaluates modeling results that involves entering different sets of data, which represent a given scenario, into a model and then determining how changes in the input data affect the model’s output. Unlike sensitivity analysis, which changes the input of one variable between a series of simulations, scenario testing changes the inputs of multiple variables for a single simulation.</p><p class=\"explanations\"><b>Learning Objective: 6F. Identify and describe approaches for analyzing the risks in an insurance company’s cash flows, including sensitivity analysis and scenario testing.</b></p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">Sensitivity analysis is <b>not</b> the mathematical model that changes the inputs of multiple variables in a single simulation. Also, duration analysis is <b>not</b> a type of scenario testing.</p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">It is correct to say that duration analysis is a type of sensitivity analysis. However, sensitivity analysis is <b>not</b> the mathematical model changes the inputs of multiple variables in a single simulation.</p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_357_PQ_065'] = objQuestion;


objQuestion = new Object();
objQuestion.strID = 'LOMA_357_PQ_066';
objQuestion.questionID = 111073;
objQuestion.item = 'LOMA_357_PPQ2019_066';
objQuestion.primaryLO = '6G';
objQuestion.textref = 'c. 6, p. 16';
objQuestion.textbook = 0;
objQuestion.chapter = 6;
objQuestion.module = 2;
var arrLOs = new Array();
arrLOs[0] = '6G';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">The Portico Life Insurance Company generates a number of internal ALM reports. One ALM report specifies realized and unrealized capital gain and loss status, estimated investment returns, and the portfolio’s risk metrics in relation to the company’s risk policies. Portico’s ALM report is known as</p>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "an investment activity report";
arrAnsChoices[1] = "a hedge effectiveness report";
arrAnsChoices[2] = "an investment portfolio performance review";
arrAnsChoices[3] = "a duration gap report";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 448921;
arrAnsIDs[1] = 448922;
arrAnsIDs[2] = 448923;
arrAnsIDs[3] = 448924;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 1;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">An investment activity report specifies the details of all investment portfolio transactions, including all asset acquisitions and all dispositions of assets from the portfolio through sales, prepayments, or repayment at maturity. For each newly acquired debt security, the investment activity report typically provides the asset’s yield, yield to maturity, duration, and quality rating. Although narrow in scope, this report typically is the most detailed and most frequently produced formal, routine investment report.</p><p class=\"explanations\"><b>Learning Objective: 6G. Describe the various types of ALM reports that insurance companies use, including the investment activity report, investment portfolio performance review, duration gap report, risk positioning report, and hedge effectiveness report.</b></p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">Portico did <b>not </b>prepare a hedge effectiveness report, which provides information on the effectiveness of every position the insurer established for hedging purposes.</p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">Portico did <b>not </b>prepare<b> </b>an investment portfolio performance review, which presents a portfolio’s investment performance in summary form to the company’s oversight committees.</p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">Portico did <b>not </b>prepare a duration gap report, which provides a snapshot of a company’s asset-liability match at the time of the report, and discusses the insurer’s current exposure to cash-flow mismatches arising from changes in market interest rates.</p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_357_PQ_066'] = objQuestion;


objQuestion = new Object();
objQuestion.strID = 'LOMA_357_PQ_067';
objQuestion.questionID = 111074;
objQuestion.item = 'LOMA_357_PPQ2019_067';
objQuestion.primaryLO = '6H';
objQuestion.textref = 'c. 6, pp. 20-21';
objQuestion.textbook = 0;
objQuestion.chapter = 6;
objQuestion.module = 2;
var arrLOs = new Array();
arrLOs[0] = '6H';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">One investment strategy related to ALM protects debt-based portfolios from interest-rate risk so that a portfolio’s value is insensitive to small changes in interest-rates. Insurers typically implement this strategy by matching the duration statistics for fixed-income assets, such as bonds, with the duration statistics for the insurer’s liabilities that the assets support. This investment strategy of protecting a portfolio against loss or undue risk is known as</p>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "portfolio dedication";
arrAnsChoices[1] = "cash-flow matching";
arrAnsChoices[2] = "an asset adequacy strategy";
arrAnsChoices[3] = "portfolio immunization through duration matching";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 448925;
arrAnsIDs[1] = 448926;
arrAnsIDs[2] = 448927;
arrAnsIDs[3] = 448928;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 4;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">This investment strategy is <b>not</b> a portfolio dedication strategy, which involves the linking of asset and liability cash flows by deliberately structuring a portfolio of assets so that the anticipated future cash flows from those assets perfectly match<b> </b>the future cash needs that the portfolio was assembled to fulfill.</p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">This investment strategy is <b>not</b> cash-flow matching, which involves identifying the patterns of cash outflows for insurance products and matching those cash outflows with a selection of assets that will produce a similar pattern of cash inflows. In other words, portfolio assets are selected for their ability to generate cash inflows that offset the estimated cash outflows related to an insurer’s liabilities.</p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">This investment strategy is <b>not</b> asset adequacy analysis, which is an ALM tool that determines whether an insurer’s assets are sufficient to support certain reserves and other liabilities. Asset adequacy analysis also tests the liquidity of assets, because insurers must be able to pay obligations in cash on short notice.</p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">Asset and liability durations do not stay constant, so investment professionals have to make periodic adjustments to keep durations matched. For assets and liabilities with long durations, duration matching is particularly important because their market values are more sensitive to market interest-rate changes. Life insurers may have trouble finding assets with durations long enough to match the long durations of certain liabilities, such as contractual obligations for whole life insurance and annuity products.</p><p class=\"explanations\">Another drawback of duration matching is that it does not appropriately address insurer cash flow needs. For example, even when the asset and liability durations are matched, the asset cash inflows could be insufficient to match the liability cash outflows, which would threaten the insurer’s surplus.</p><p class=\"explanations\"><b>Learning Objective: 6H. Describe insurer investment strategies related to ALM—such as portfolio immunization, portfolio dedication, and interest-rate anticipation—and explain the techniques of duration matching and cash-flow matching.</b></p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_357_PQ_067'] = objQuestion;


objQuestion = new Object();
objQuestion.strID = 'LOMA_357_PQ_068';
objQuestion.questionID = 111075;
objQuestion.item = 'LOMA_357_PPQ2019_068';
objQuestion.primaryLO = '6H';
objQuestion.textref = 'c. 6, pp. 22-23';
objQuestion.textbook = 0;
objQuestion.chapter = 6;
objQuestion.module = 2;
var arrLOs = new Array();
arrLOs[0] = '6H';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">For this question, select the answer choice containing the terms that correctly complete the blanks labeled <B>A</B> and <B>B </B>in the paragraph below.</p><p class=\"stem\">Adele Laurier manages a fixed-income life insurance portfolio. Because she expects market interest rates to decrease over the next three months, she sold some shorter-duration bonds from the portfolio and purchased bonds with longer durations to replace them. This information indicates that the purpose of Ms.&nbsp;Laurier’s transactions was to <u><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></u> the portfolio’s overall duration. Ms.&nbsp;Laurier is using the insurer investment strategy known as an <u><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></u>.</p>";
var arrAnsChoices = new Array();
arrAnsChoices[-1] = "<u><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></u></div><div class=\"anshead\"><u><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></u>";
arrAnsChoices[0] = "increase</div><div class=\"anscell\" onclick=\"recordAns(1);\">interest-rate anticipation strategy";
arrAnsChoices[1] = "increase</div><div class=\"anscell\" onclick=\"recordAns(2);\">optimization strategy";
arrAnsChoices[2] = "decrease</div><div class=\"anscell\" onclick=\"recordAns(3);\">interest-rate anticipation strategy";
arrAnsChoices[3] = "decrease</div><div class=\"anscell\" onclick=\"recordAns(4);\">optimization strategy";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 448930;
arrAnsIDs[1] = 448931;
arrAnsIDs[2] = 448932;
arrAnsIDs[3] = 448933;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 1;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">Investment professionals who use an interest-rate anticipation strategy trade fixed-income securities in anticipation of estimated future changes in market interest rates. This strategy has the objectives of preserving capital when interest rates are increasing and achieving capital appreciation when interest rates are decreasing.</p><p class=\"explanations\">When investment professionals expect interest rates to decrease, they should take steps to increase a portfolio’s duration, thus positioning the portfolio for larger gains in market value as rates decrease. When investment professionals expect interest rates to increase, they should take steps to reduce a portfolio’s duration, thus positioning the portfolio for smaller losses in market value as rates increase.</p><p class=\"explanations\"><b>Learning Objective: 6H. Describe insurer investment strategies related to ALM—such as portfolio immunization, portfolio dedication, and interest-rate anticipation—and explain the techniques of duration matching and cash-flow matching.</b></p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">It is correct to say that Ms.&nbsp;Laurier’s transactions increased the portfolio’s overall duration. However, Ms.&nbsp;Laurier is <b>not</b> using the optimization strategy. Insurance companies can develop strategic benchmarks by using optimization modeling, which is a form of mathematical modeling that focuses on finding an optimal solution to several simultaneous equations.</p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">It is correct to say that Ms.&nbsp;Laurier is using the interest-rate anticipation strategy. However, Ms.&nbsp;Laurier’s transactions did<b> not</b> decrease the portfolio’s overall duration.</p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">Ms.&nbsp;Laurier is <b>not</b> using the optimization strategy. Insurance companies can develop strategic benchmarks by using optimization modeling, which is a form of mathematical modeling that focuses on finding an optimal solution to several simultaneous equations. In addition, Ms.&nbsp;Laurier’s transactions did<b> not</b> decrease the portfolio’s overall duration.</p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_357_PQ_068'] = objQuestion;





var arrlotext = new Array(); 
arrlotext['6A'] = "6A. Explain the function of enterprise risk management (ERM) within an insurance company and describe how asset-liability management (ALM) relates to ERM.";
arrlotext['6B'] = "6B. Identify the basic organizational structure for the ALM function within an insurance company.";
arrlotext['6C'] = "6C. Describe the practice of segmentation in the context of insurer general account portfolios.";
arrlotext['6D'] = "6D. Describe two methods for allocating investment income to company liabilities.";
arrlotext['6E'] = "6E. Discuss an integrated portfolio benchmarking model for insurance companies and describe how insurers create replicating portfolios for their liabilities.";
arrlotext['6F'] = "6F. Identify and describe approaches for analyzing the risks in an insurance company’s cash flows, including sensitivity analysis and scenario testing.";
arrlotext['6G'] = "6G. Describe the various types of ALM reports that insurance companies use, including the investment activity report, investment portfolio performance review, duration gap report, risk positioning report, and hedge effectiveness report.";
arrlotext['6H'] = "6H. Describe insurer investment strategies related to ALM—such as portfolio immunization, portfolio dedication, and interest-rate anticipation—and explain the techniques of duration matching and cash-flow matching.";
