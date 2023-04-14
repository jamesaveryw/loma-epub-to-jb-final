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

var quizname = "LOMA 357 Practice Questions, Chapter 8";
var coursename = 'LOMA 357';
var modulenumber = 3;
var title = "LOMA_357_PPQ2019_0_8";
var intNumPools = 1;
var numQ = 9;
var numTexts = 1;
var numChap = 1;
var arrTexts = new Array();
var arrNumChap = new Array();
var duration = 0;
arrTexts[0] = "Institutional Investing: Principles and Practices (2019)";
arrNumChap[0] = 1;
var thisChap = '8';

objPool = new Object(); 
objPool.intSelectCount = 9;
objPool.formID = 2139;
objPool.formName = 'PPQ2019_0_8';
arrPoolQuestions = new Array();
arrPoolQuestions[0] = 'LOMA_357_PQ_081';
arrPoolQuestions[1] = 'LOMA_357_PQ_082';
arrPoolQuestions[2] = 'LOMA_357_PQ_083';
arrPoolQuestions[3] = 'LOMA_357_PQ_084';
arrPoolQuestions[4] = 'LOMA_357_PQ_085';
arrPoolQuestions[5] = 'LOMA_357_PQ_086';
arrPoolQuestions[6] = 'LOMA_357_PQ_087';
arrPoolQuestions[7] = 'LOMA_357_PQ_088';
arrPoolQuestions[8] = 'LOMA_357_PQ_089';
objPool.arrPoolQuestions = arrPoolQuestions;
arrPools[0] = objPool;

objQuestion = new Object();
objQuestion.strID = 'LOMA_357_PQ_081';
objQuestion.questionID = 111088;
objQuestion.item = 'LOMA_357_PPQ2019_081';
objQuestion.primaryLO = '8A';
objQuestion.textref = 'c. 8, pp. 2-3, 5-6';
objQuestion.textbook = 0;
objQuestion.chapter = 8;
objQuestion.module = 3;
var arrLOs = new Array();
arrLOs[0] = '8A';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">The following statements are about using diversification and hedging to manage a portfolio’s risks. Select the answer choice containing the correct statement.</p>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "Diversification and hedging strategies reduce a portfolio’s systematic risks.";
arrAnsChoices[1] = "Derivatives are a popular investment vehicle for creating hedges.";
arrAnsChoices[2] = "Diversification is a short-term portfolio management strategy.";
arrAnsChoices[3] = "Hedging generally is an investment risk elimination strategy.";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 448982;
arrAnsIDs[1] = 448983;
arrAnsIDs[2] = 448984;
arrAnsIDs[3] = 448985;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 2;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">For investors, systematic risks are <b>unavoidable</b>. Therefore, portfolio managers focus their risk management efforts on the type of risks they can control—the specific risks within a particular portfolio—through the use of diversification and hedging.</p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">Traditionally, derivatives were the primary instruments for hedging a portfolio’s investments. Some exchange-traded funds (ETFs) allow investors to hedge against specific risks such as interest-rate risk or currency risk. Because ETFs generally are less expensive and more liquid than derivatives, they appeal to smaller institutional investors.</p><p class=\"explanations\">Both hedging and diversification are risk reduction strategies that focus on specific risks in a portfolio. Hedging spreads risk through offsetting one asset’s risk by adding a complementary risk in the portfolio. In contrast, diversification spreads risk by investing in assets with different risk characteristics. In addition, hedging is a short-term portfolio management strategy, whereas diversification is a long-term, portfolio management strategy.</p><p class=\"explanations\"><b>Learning Objective: 8A. Describe diversification and hedging and explain how institutional investors can use each strategy to manage specific risks in portfolios.</b></p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">Diversification is a <b>long-term</b> portfolio management strategy. Over time, proper diversification reduces specific risks so that the majority of the portfolio’s remaining risk is made up of systematic risk. In contrast, hedging is a short-term portfolio management strategy. Investment professionals use hedges to offset adverse price movements in their investments within given periods. After a period of time, a hedge may lose its effectiveness, requiring additional action.</p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">An effective hedge balances out an investment loss with an increase in the hedge’s value. In practice, an investment professional may have a difficult time creating a hedge that perfectly offsets a potential loss. Therefore, hedging generally is an investment <b>risk reduction</b> strategy, not a risk elimination strategy.</p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_357_PQ_081'] = objQuestion;


objQuestion = new Object();
objQuestion.strID = 'LOMA_357_PQ_082';
objQuestion.questionID = 111089;
objQuestion.item = 'LOMA_357_PPQ2019_082';
objQuestion.primaryLO = '8B';
objQuestion.textref = 'c. 8, pp. 8-9';
objQuestion.textbook = 0;
objQuestion.chapter = 8;
objQuestion.module = 3;
var arrLOs = new Array();
arrLOs[0] = '8B';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">Two approaches to investing are top-down investing and bottom-up investing. In (<b>top-down / bottom-up</b>) investing, investment professionals first conduct a broad analysis of economic conditions, asset classes, risk exposures, and industries; then they select individual securities. Institutional investors generally use the <b>(top-down / bottom-up)</b> investment approach.</p>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "top-down / top-down";
arrAnsChoices[1] = "top-down / bottom-up";
arrAnsChoices[2] = "bottom-up / top-down";
arrAnsChoices[3] = "bottom-up / bottom-up";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 448986;
arrAnsIDs[1] = 448987;
arrAnsIDs[2] = 448988;
arrAnsIDs[3] = 448989;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 1;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">For both approaches, investment professionals analyze economic and market conditions, industry growth and competition, and the strength and quality of individual companies. The main difference is the order in which the factors are considered.</p><p class=\"explanations\">Top-down investing starts with assessing the big picture in financial markets and eventually, investment professionals select securities that represent the best opportunities in the type of market environment they have identified. Bottom-up investors start by analyzing individual securities and work their way up to analyzing the broad economic and market conditions that affect the securities they have analyzed.</p><p class=\"explanations\"><b>Learning Objective: 8B. Compare and contrast the security selection strategies of (1) value and growth investing and (2) bottom-up and top-down investing.</b></p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">It is correct to say that top-down investing consists of starting an investment process with a broad analysis of economic conditions. However, institutional investors generally use the <b>top-down</b> investment approach.</p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">It is correct to say that institutional investors generally use the top-down investment approach. However, <b>top-down</b> investing consists of starting an investment process with a broad analysis of economic conditions.</p>";
arrAnswerFeedback[3] = "<p class=\"explanations\"><b>Top-down</b> investing consists of starting an investment process with a broad analysis of economic conditions. Also, institutional investors generally use the <b>top-down</b> investment approach.</p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_357_PQ_082'] = objQuestion;


objQuestion = new Object();
objQuestion.strID = 'LOMA_357_PQ_083';
objQuestion.questionID = 111090;
objQuestion.item = 'LOMA_357_PPQ2019_083';
objQuestion.primaryLO = '8C';
objQuestion.textref = 'c. 8, pp. 9-10';
objQuestion.textbook = 0;
objQuestion.chapter = 8;
objQuestion.module = 3;
var arrLOs = new Array();
arrLOs[0] = '8C';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">The following statements are about how portfolio managers use tactical asset allocation (TAA) to increase portfolio returns. Three statements are true, and one statement is false. Select the answer choice containing the <B>FALSE</B> statement.</p>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "When a portfolio manager overweights some asset classes in a portfolio, other classes are underweighted.";
arrAnsChoices[1] = "Tactical changes allow a portfolio manager to change the allocation guidelines in the portfolio’s investment policy statement (IPS).";
arrAnsChoices[2] = "Decisions to adjust asset allocations in an effort to boost portfolio returns are based on predictions of future market movements in the short term.";
arrAnsChoices[3] = "Tactical adjustments can involve selected investment vehicles, such as ETFs, which investment professionals use to implement their ideas to enhance portfolio returns.";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 448990;
arrAnsIDs[1] = 448991;
arrAnsIDs[2] = 448992;
arrAnsIDs[3] = 448993;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 2;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">This statement is true; therefore, it is <b>not</b> the correct response. Tactically increasing the allocation of a particular asset class is called overweighting; tactically decreasing an allocation is called underweighting. Decisions to overweight or underweight asset classes can result in positive or negative investment results.</p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">This statement is false; therefore, it is the correct response. While tactical changes allow a portfolio manager to temporarily deviate from the SAA, the TAA must still adhere to the allocation guidelines in the portfolio’s IPS. The IPS provides a range of permissible values around the target percentage for each asset class and TAAs must fall within the acceptable range limits for each asset class. If asset class allocations exceed the acceptable limits, the portfolio needs to be rebalanced to return it to the SAA. Many institutional portfolios have policies that require rebalancing at specified intervals.</p><p class=\"explanations\"><b>Learning Objective: 8C. Explain how portfolio managers use tactical asset allocation (TAA) to enhance portfolio returns.</b></p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">This statement is true; therefore, it is <b>not</b> the correct response. TAA, which involves making adjustments to asset-class weightings based on predictions of future market movements in the short term, allows a portfolio manager to move away from the long-term SAA to take advantage of brief market opportunities.</p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">This statement is true; therefore, it is <b>not</b> the correct response. Insurance companies use ETFs in their general accounts for tactical reasons, such as holding fixed-income ETFs for short-term investment while researching individual fixed-income securities for long-term investment.</p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_357_PQ_083'] = objQuestion;


objQuestion = new Object();
objQuestion.strID = 'LOMA_357_PQ_084';
objQuestion.questionID = 111091;
objQuestion.item = 'LOMA_357_PPQ2019_084';
objQuestion.primaryLO = '8D';
objQuestion.textref = 'c. 8, pp. 11-13';
objQuestion.textbook = 0;
objQuestion.chapter = 8;
objQuestion.module = 3;
var arrLOs = new Array();
arrLOs[0] = '8D';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">Investment professionals can employ market timing strategies to improve portfolio returns. Market timing strategies include momentum investing and contrarian investing. One characteristic about these market timing strategies is</p>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "that institutional investors can use momentum investing only in situations of downward price trends";
arrAnsChoices[1] = "that, if a security’s price is going up, contrarian investors most likely are selling the same security";
arrAnsChoices[2] = "that contrarian investors intend to ride along with market sentiment as long as prices keep increasing";
arrAnsChoices[3] = "that momentum investing is a long-term market timing strategy";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 448994;
arrAnsIDs[1] = 448995;
arrAnsIDs[2] = 448996;
arrAnsIDs[3] = 448997;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 2;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">A momentum investing strategy typically seeks to allocate portfolio holdings to securities that are benefiting from <b>upward or downward</b> price trends. Momentum investors intend to ride along with the market for as long as momentum will carry prices higher or lower, depending on the price trend. In contrast, contrarian investors believe an upward or downward trend is unsustainable, and they act before market sentiment shifts and market values revert to more reasonable levels.</p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">Investment professionals use market timing strategies to position portfolios to benefit from market trends. TAA includes an element of market timing because portfolio managers make decisions about the optimum times to deviate from the SAA and overweight and underweight asset classes.</p><p class=\"explanations\">Momentum investors and contrarian investors both use market sentiment to identify upward and downward price trends. However, momentum investors intend to ride along with the market for as long as momentum will carry prices higher or lower, depending on the price trend. In contrast, contrarian investors believe an upward or downward trend is unsustainable, and they act before market sentiment shifts and market values revert to more reasonable levels.</p><p class=\"explanations\"><b>Learning Objective: 8D. Describe the market timing strategies of momentum investing and contrarian investing.</b></p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">Momentum investors and contrarian investors both use market sentiment to identify upward and downward price trends. However, <b>momentum</b> investors intend to ride along with the market for as long as momentum will carry prices higher or lower, depending on the price trend. In contrast, contrarian investors believe an upward or downward trend is unsustainable, and they act before market sentiment shifts and market values revert to more reasonable levels.</p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">Momentum investing is a somewhat speculative activity in that momentum investors are speculating that a recent price trend will continue. Speculation involves making financial decisions based on <b>short-term</b> price movements.</p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_357_PQ_084'] = objQuestion;


objQuestion = new Object();
objQuestion.strID = 'LOMA_357_PQ_085';
objQuestion.questionID = 111092;
objQuestion.item = 'LOMA_357_PPQ2019_085';
objQuestion.primaryLO = '8E';
objQuestion.textref = 'c. 8, pp. 13-15';
objQuestion.textbook = 0;
objQuestion.chapter = 8;
objQuestion.module = 3;
var arrLOs = new Array();
arrLOs[0] = '8E';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">Many institutional investors have significant bond holdings. Some institutional bondholders employ a variety of useful bond investment strategies for managing bond investments. Consider the following situations:</p><ul class=\"examul\"><li>The Badge Financial Group purchased approximately equal amounts of bonds of 1-, 2-, 3-, 4-, and 5-year maturities. When each of these issues matures, Badge will reinvest the principal in 5-year bonds.</li><li>The Captain Life Insurance Company purchased and holds short-term bonds of 1-, 2-, and 3-year maturities and long-term bonds of 20- and 30-year maturities. Captain does not hold any intermediate-term bonds in its bond portfolio.</li></ul><p class=\"stem\">With regard to bond investment strategies, this information indicates that a laddering strategy most likely is being used by</p>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "both Badge and Captain";
arrAnsChoices[1] = "Badge only";
arrAnsChoices[2] = "Captain only";
arrAnsChoices[3] = "neither Badge nor Captain";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 448998;
arrAnsIDs[1] = 448999;
arrAnsIDs[2] = 449000;
arrAnsIDs[3] = 449001;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 2;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">At least one of these companies is <b>not </b>using a laddering strategy.</p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">Bond investors use a laddering strategy when they purchase multiple bonds, each of an approximately equal monetary amount but with differing maturity dates that occur at regular intervals. By staggering maturities, a bond ladder creates a steady stream of matured principal for spending or reinvestment. For bond investors—such as Badge—a laddering strategy reduces liquidity risk. Laddering pays off in a rising interest-rate environment; principal from each maturing bond is reinvested at a higher coupon rate. In a decreasing interest-rate environment, however, the investor is steadily reinvesting principal into bonds with progressively lower coupon rates, exposing the investor to reinvestment risk.</p><p class=\"explanations\">In a barbell strategy, the split between short-term and long-term maturities in a portfolio does not need to be exactly equal. Some bond investors may choose a slightly larger short-term group of bonds, while others may prefer a slightly larger long-term group. The main takeaway is that the barbell strategy excludes intermediate-term bonds. For bond investors—such as Captain—short-term bonds generally provide more liquidity, and long-term bonds generally provide higher yields.</p><p class=\"explanations\"><b>Learning Objective: 8E. Describe the buy-and-hold, laddering, and barbell strategies for managing a portfolio’s bond investments.</b></p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">Captain is using a <b>barbell strategy</b>, in which the investor divides the bonds in a portfolio between short-term and long-term maturities and avoids intermediate-term maturities. Bond investors obtain liquidity from the portfolio’s short-term bonds and the potential for higher returns should interest rates rise.</p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">At least one of these companies <b>is</b> using a laddering strategy.</p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_357_PQ_085'] = objQuestion;


objQuestion = new Object();
objQuestion.strID = 'LOMA_357_PQ_086';
objQuestion.questionID = 111093;
objQuestion.item = 'LOMA_357_PPQ2019_086';
objQuestion.primaryLO = '8F';
objQuestion.textref = 'c. 8, pp. 17-18';
objQuestion.textbook = 0;
objQuestion.chapter = 8;
objQuestion.module = 3;
var arrLOs = new Array();
arrLOs[0] = '8F';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = 1;
objQuestion.strStem = "<p class=\"stem\">This information indicates that the Ivory Corporation bond is offered at a yield equal to</p>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "1.6%";
arrAnsChoices[1] = "1.9%";
arrAnsChoices[2] = "3.5%";
arrAnsChoices[3] = "5.1%";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 449002;
arrAnsIDs[1] = 449003;
arrAnsIDs[2] = 449004;
arrAnsIDs[3] = 449005;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 4;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">When quoting information about bonds, the yield spread usually is expressed relative to a bond that is common to a particular market—often a government bond. In this situation, Ivory’s yield spread of 160 basis points (bps) over the yield on a comparable U.S. Treasury security, symbolized as T, is expressed in a quoted yield as T + 160. A bp is one-hundredth of a percent, or 0.01%, or 0.000l. Thus, 100 bps equals 1%; 160 bps is equal to 1.6%. The yield on the U.S. Treasury security comparable in duration to the Ivory corporate bond is 3.5%; therefore, the yield on the Ivory bond is calculated as 3.5% + 1.6% = 5.1%.</p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">When quoting information about bonds, the yield spread usually is expressed relative to a bond that is common to a particular market—often a government bond. In this situation, Ivory’s yield spread of 160 basis points (bps) over the yield on a comparable U.S. Treasury security, symbolized as T, is expressed in a quoted yield as T + 160. A bp is one-hundredth of a percent, or 0.01%, or 0.000l. Thus, 100 bps equals 1%; 160 bps is equal to 1.6%. The yield on the U.S. Treasury security comparable in duration to the Ivory corporate bond is 3.5%; therefore, the yield on the Ivory bond is calculated as 3.5% + 1.6% = 5.1%.</p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">When quoting information about bonds, the yield spread usually is expressed relative to a bond that is common to a particular market—often a government bond. In this situation, Ivory’s yield spread of 160 basis points (bps) over the yield on a comparable U.S. Treasury security, symbolized as T, is expressed in a quoted yield as T + 160. A bp is one-hundredth of a percent, or 0.01%, or 0.000l. Thus, 100 bps equals 1%; 160 bps is equal to 1.6%. The yield on the U.S. Treasury security comparable in duration to the Ivory corporate bond is 3.5%; therefore, the yield on the Ivory bond is calculated as 3.5% + 1.6% = 5.1%.</p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">When quoting information about bonds, the yield spread usually is expressed relative to a bond that is common to a particular market—often a government bond. In this situation, Ivory’s yield spread of 160 basis points (bps) over the yield on a comparable U.S. Treasury security, symbolized as T, is expressed in a quoted yield as T + 160. A bp is one-hundredth of a percent, or 0.01%, or 0.000l. Thus, 100 bps equals 1%; 160 bps is equal to 1.6%. The yield on the U.S. Treasury security comparable in duration to the Ivory corporate bond is 3.5%; therefore, the yield on the Ivory bond is calculated as 3.5% + 1.6% = 5.1%.</p><p class=\"explanations\"><b>Learning Objective: 8F. Explain how bond traders use yield spreads to evaluate and compare individual bonds.</b></p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_357_PQ_086'] = objQuestion;


objQuestion = new Object();
objQuestion.strID = 'LOMA_357_PQ_087';
objQuestion.questionID = 111094;
objQuestion.item = 'LOMA_357_PPQ2019_087';
objQuestion.primaryLO = '8F';
objQuestion.textref = 'c. 8, pp. 17-18';
objQuestion.textbook = 0;
objQuestion.chapter = 8;
objQuestion.module = 3;
var arrLOs = new Array();
arrLOs[0] = '8F';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = 1;
objQuestion.strStem = "<p class=\"stem\">Select the answer choice that correctly indicates the yield spread, in basis points (bps), between the Canon bond and the Decree bond, and identify which bond is riskier, based on the quoted yields.</p>";
var arrAnsChoices = new Array();
arrAnsChoices[-1] = "<u>Yield spread</u></div><div class=\"anshead\"><u>Riskier bond?</u>";
arrAnsChoices[0] = "30 bps</div><div class=\"anscell\" onclick=\"recordAns(1);\">Canon";
arrAnsChoices[1] = "30 bps</div><div class=\"anscell\" onclick=\"recordAns(2);\">Decree";
arrAnsChoices[2] = "60 bps</div><div class=\"anscell\" onclick=\"recordAns(3);\">Canon";
arrAnsChoices[3] = "60 bps</div><div class=\"anscell\" onclick=\"recordAns(4);\">Decree";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 449007;
arrAnsIDs[1] = 449008;
arrAnsIDs[2] = 449009;
arrAnsIDs[3] = 449010;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 4;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">The yield spread between the Canon and Decree bonds is 60 bps (190 – 130). The Canon bond has a lower yield spread, which indicates that the Decree bond is riskier than the Canon bond. However, both bonds are riskier than a comparable U.S. Treasury security.</p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">The yield spread between the Canon and Decree bonds is 60 bps (190 – 130). The Canon bond has a lower yield spread, which indicates that the Decree bond is riskier than the Canon bond. However, both bonds are riskier than a comparable U.S. Treasury security.</p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">The yield spread between the Canon and Decree bonds is 60 bps (190 – 130). The Canon bond has a lower yield spread, which indicates that the Decree bond is riskier than the Canon bond. However, both bonds are riskier than a comparable U.S. Treasury security.</p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">The yield spread between the Canon and Decree bonds is 60 bps (190 – 130). The Canon bond has a lower yield spread, which indicates that the Decree bond is riskier than the Canon bond. However, both bonds are riskier than a comparable U.S. Treasury security.</p><p class=\"explanations\"><b>Learning Objective: 8F. Explain how bond traders use yield spreads to evaluate and compare individual bonds.</b></p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_357_PQ_087'] = objQuestion;


objQuestion = new Object();
objQuestion.strID = 'LOMA_357_PQ_088';
objQuestion.questionID = 111095;
objQuestion.item = 'LOMA_357_PPQ2019_088';
objQuestion.primaryLO = '8G';
objQuestion.textref = 'c. 8, pp. 19, 20-21';
objQuestion.textbook = 0;
objQuestion.chapter = 8;
objQuestion.module = 3;
var arrLOs = new Array();
arrLOs[0] = '8G';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">An institutional investor placed the following order:</p><table align=\"center\" cellspacing=\"0\" width=\"95%\" class=\"indent\"><tr><td valign=\"top\">Buy 25,000 shares of Peridot common stock at or below $47.75 a share</td></tr></table><p class=\"stem\">With regard to types of orders, this institutional investor most likely placed a</p>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "market order to buy at a limit price";
arrAnsChoices[1] = "market order to sell that specifies an ask size";
arrAnsChoices[2] = "limit order to buy at a limit price";
arrAnsChoices[3] = "limit order to sell that specifies an ask size";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 449011;
arrAnsIDs[1] = 449012;
arrAnsIDs[2] = 449013;
arrAnsIDs[3] = 449014;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 3;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">It is correct to say that the institutional investor placed an order at a limit price. However, the investor did <b>not</b> place a market order to buy, which is an order to buy a specified number of shares of a stock immediately at the best available price. Market orders do <b>not</b> designate price constraints.</p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">The institutional investor did <b>not</b> place a market order to sell, which is an order to sell a specified number of shares of a stock immediately at the best available price. Market orders do <b>not</b> designate price constraints. Also, the investor’s order does <b>not</b> specify an ask size, which is the number of shares of stock the investor is seeking to <b>sell</b>.</p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">The two main types of orders for stock trades are market orders and limit orders. A market order, which is an order to buy or sell a certain number of shares of a stock immediately at the best available price, does not designate price constraints. A trader has no control over the price at which a market order is executed; therefore, institutional investors generally do not use market orders.</p><p class=\"explanations\">A limit order is an order to buy a specified number of shares of a stock at or below a stated price—known as the limit price—or sell a specified number of shares of a stock at or above a stated price. A limit order that is not executed immediately remains in effect until it expires.</p><p class=\"explanations\">The bid price is the price a buyer is willing to pay for a share, and the ask price is the price at which a seller is willing to sell a share. The bid size is the number of shares of stock the trader is seeking to buy, and the ask size is the number of shares of stock the trader is seeking to sell. The bid-ask spread is the difference between the highest bid price and the lowest ask price for a proposed trade. In this situation, the limit order will execute immediately if the current price of Peridot common stock is at or below $47.75 per share. Otherwise, the limit order remains valid until it fills, expires, or is cancelled by the investor.</p><p class=\"explanations\"><b>Learning Objective: 8G. Explain how stock traders use bid-ask spreads and describe market and limit orders for stock trades.</b></p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">It is true that the institutional investor placed a limit order to buy. However, this limit order does <b>not</b> specify an ask size, which is the number of shares of stock the investor is seeking to <b>sell</b>.</p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_357_PQ_088'] = objQuestion;


objQuestion = new Object();
objQuestion.strID = 'LOMA_357_PQ_089';
objQuestion.questionID = 111096;
objQuestion.item = 'LOMA_357_PPQ2019_089';
objQuestion.primaryLO = '8H';
objQuestion.textref = 'c. 8, p. 24';
objQuestion.textbook = 0;
objQuestion.chapter = 8;
objQuestion.module = 3;
var arrLOs = new Array();
arrLOs[0] = '8H';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">For this question, if answer choices (1) through (3) are all correct, select answer choice (4). Otherwise, select the one correct answer choice.</p><p class=\"stem\">Life insurance companies and other institutional investors establish specific operational controls for private placement bonds in their portfolios. Examples of basic operational controls for private placements include</p>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "ensuring the initial and ongoing creditworthiness of issuers";
arrAnsChoices[1] = "regularly monitoring the issuers for adherence to any bond covenants";
arrAnsChoices[2] = "periodically submitting up-to-date private placement bond information to appropriate regulatory authorities";
arrAnsChoices[3] = "all of the above";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 449015;
arrAnsIDs[1] = 449016;
arrAnsIDs[2] = 449017;
arrAnsIDs[3] = 449018;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 4;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">It is correct to say that ensuring the initial and ongoing creditworthiness of issuers is an example of basic operational controls for private placements. However, this is <b>not</b> the only example of a basic operational control for private placements.</p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">It is correct to say that regularly monitoring the issuers for adherence to any bond covenants is an example of basic operational controls for private placements. However, this is <b>not</b> the only example of a basic operational control for private placements.</p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">It is correct to say that periodically submitting up-to-date private placement bond information to appropriate regulatory authorities is an example of basic operational controls for private placements. However, this is <b>not</b> the only example of a basic operational control for private placements.</p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">Other examples of basic operational controls for private placements include calculating the percentage of private placement bonds in the total bond portfolio and comparing the result to the authorized maximum percentage of such bonds; performing credit analysis of private placement bonds to uncover any evidence of deteriorating investment quality; and regularly reporting the results of bond and issuer analysis to an internal committee that oversees investments.</p><p class=\"explanations\"><b>Learning Objective: 8H. Identify some of the basic operational controls for private placements, dividends, and real estate properties.</b></p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_357_PQ_089'] = objQuestion;



arrMinicases[1] = "<p class=\"caseinfo\">Use the following information to answer questions 6 and 7.</p><p class=\"caseinfo\">Becca Dysart, a bond trader, obtained a bond yield quote of T + 160 for an Ivory Corporation 10-year bond. A U.S. Treasury security that is comparable in duration to the Ivory corporate bond is yielding 3.5%. Ms.&nbsp;Dysart obtained the following yield quotes for two other corporate bonds that are comparable to the Ivory bond:</p><table class=\"tbexam\" align=\"center\"><tr><td colspan=2 style=\"vertical-align: middle; text-align: left; background-color: #DCDCDC;\"><b>10-Year Corporate Bonds</b></td></tr><tr><td style=\"vertical-align: top; text-align: left; background-color: #DCDCDC;\">Issuer</td><td style=\"vertical-align: top; text-align: center; background-color: #DCDCDC;\">Quoted Yields</td></tr><tr><td style=\"vertical-align: top; text-align: left;\">Canon</td><td style=\"vertical-align: top; text-align: center;\">T + 130</td></tr><tr><td style=\"vertical-align: top; text-align: left;\">Decree</td><td style=\"vertical-align: top; text-align: center;\">T + 190</td></tr></table>";


var arrlotext = new Array(); 
arrlotext['8A'] = "8A. Describe diversification and hedging and explain how institutional investors can use each strategy to manage specific risks in portfolios.";
arrlotext['8B'] = "8B. Compare and contrast the security selection strategies of (1) value and growth investing and (2) bottom-up and top-down investing.";
arrlotext['8C'] = "8C. Explain how portfolio managers use tactical asset allocation (TAA) to enhance portfolio returns.";
arrlotext['8D'] = "8D. Describe the market timing strategies of momentum investing and contrarian investing.";
arrlotext['8E'] = "8E. Describe the buy-and-hold, laddering, and barbell strategies for managing a portfolio’s bond investments.";
arrlotext['8F'] = "8F. Explain how bond traders use yield spreads to evaluate and compare individual bonds.";
arrlotext['8G'] = "8G. Explain how stock traders use bid-ask spreads and describe market and limit orders for stock trades.";
arrlotext['8H'] = "8H. Identify some of the basic operational controls for private placements, dividends, and real estate properties.";