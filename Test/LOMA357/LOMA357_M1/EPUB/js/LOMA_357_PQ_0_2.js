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

var quizname = "LOMA 357 Practice Questions, Chapter 2";
var coursename = 'LOMA 357';
var modulenumber = 1;
var title = "LOMA_357_PPQ2019_0_2";
var intNumPools = 1;
var numQ = 8;
var numTexts = 1;
var numChap = 1;
var arrTexts = new Array();
var arrNumChap = new Array();
var duration = 0;
arrTexts[0] = "Institutional Investing: Principles and Practices (2019)";
arrNumChap[0] = 1;
var thisChap = '2';

objPool = new Object(); 
objPool.intSelectCount = 8;
objPool.formID = 2139;
objPool.formName = 'PPQ2019_0_2';
arrPoolQuestions = new Array();
arrPoolQuestions[0] = 'LOMA_357_PQ_010';
arrPoolQuestions[1] = 'LOMA_357_PQ_011';
arrPoolQuestions[2] = 'LOMA_357_PQ_012';
arrPoolQuestions[3] = 'LOMA_357_PQ_013';
arrPoolQuestions[4] = 'LOMA_357_PQ_014';
arrPoolQuestions[5] = 'LOMA_357_PQ_015';
arrPoolQuestions[6] = 'LOMA_357_PQ_016';
arrPoolQuestions[7] = 'LOMA_357_PQ_017';
objPool.arrPoolQuestions = arrPoolQuestions;
arrPools[0] = objPool;

objQuestion = new Object();
objQuestion.strID = 'LOMA_357_PQ_010';
objQuestion.questionID = 111017;
objQuestion.item = 'LOMA_357_PPQ2019_010';
objQuestion.primaryLO = '2A';
objQuestion.textref = 'c. 2, p. 3; c. 8, pp. 3-6';
objQuestion.textbook = 0;
objQuestion.chapter = 2;
objQuestion.module = 1;
var arrLOs = new Array();
arrLOs[0] = '2A';
arrLOs[1] = '8A';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">Two portfolio management strategies for reducing investment risk are hedging and diversification. Investors achieve <b>(hedging / diversification)</b> by investing in a variety of assets with different risk characteristics. Balancing one risk with a complementary risk that will ideally offset the original risk is the definition of <b>(hedging / diversification)</b>.</p>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "hedging / hedging";
arrAnsChoices[1] = "hedging / diversification";
arrAnsChoices[2] = "diversification / hedging";
arrAnsChoices[3] = "diversification / diversification";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 448693;
arrAnsIDs[1] = 448694;
arrAnsIDs[2] = 448695;
arrAnsIDs[3] = 448696;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 3;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">It is correct to say that balancing one risk with a complementary risk that will ideally offset the original risk is an example of hedging. However, investors achieve <b>diversification</b> by investing in a variety of assets with different risk characteristics.</p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">Investors achieve <b>diversification</b> by investing in a variety of assets with different risk characteristics. In addition, balancing one risk with a complementary risk that will ideally offset the original risk is the definition of <b>hedging</b>.</p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">Typically, an investment portfolio includes assets that represent multiple asset classes. An important aspect of portfolio management is managing risks to the portfolio. As such, a portfolio manager chooses assets and asset classes to reduce investment risk using strategies such as diversification and hedging.</p><p class=\"explanations\"><b>Learning Objective: (1) 2A. Define the term <i>investment vehicle</i> and explain its purpose in investing; (2) 8A. Describe diversification and hedging and explain how institutional investors can use each strategy to manage specific risks in portfolios.</b></p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">It is correct to say that investors achieve diversification by investing in a variety of assets with different risk characteristics. However, balancing one risk with a complementary risk that will ideally offset the original risk is the definition of <b>hedging</b>.</p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_357_PQ_010'] = objQuestion;


objQuestion = new Object();
objQuestion.strID = 'LOMA_357_PQ_011';
objQuestion.questionID = 111018;
objQuestion.item = 'LOMA_357_PPQ2019_011';
objQuestion.primaryLO = '2B';
objQuestion.textref = 'c. 2, p. 8';
objQuestion.textbook = 0;
objQuestion.chapter = 2;
objQuestion.module = 1;
var arrLOs = new Array();
arrLOs[0] = '2B';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">The Laud Company’s bond issue has a single maturity date of 20 years. The bond is backed only by the full faith and credit of Laud. In this situation, Laud issued a type of corporate bond known by definition as</p>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "a callable bond";
arrAnsChoices[1] = "a collateralized bond";
arrAnsChoices[2] = "a secured bond";
arrAnsChoices[3] = "an unsecured bond";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 448697;
arrAnsIDs[1] = 448698;
arrAnsIDs[2] = 448699;
arrAnsIDs[3] = 448700;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 4;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">The Laud Company’s bond is <b>not</b> a callable bond, which allows the bond issuer to retire the bond prior to its maturity date at a specified price per bond, known as the call price.</p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">The Laud Company’s bond is <b>not</b> a collateralized bond, also known as a secured bond, in which the issuer pledges something of value, called collateral, to guarantee the safety of the bondholder’s investment.</p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">The Laud Company’s bond is <b>not</b> a <b>secured bond</b>, in which the issuer pledges something of value, called collateral, to guarantee the safety of the bondholder’s investment. Laud’s bond is an <b>unsecured</b> bond, also called a debenture, which means that the bond is not backed by collateral, but only by the full faith and credit of Laud, the bond issuer.</p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">Bonds can be either secured or unsecured. A secured bond is a bond in which the issuer pledges something of value—called collateral—to guarantee the safety of the bondholder’s investment. Secured bondholders typically have first priority in satisfying their claims against a defaulted issuer’s collateral.</p><p class=\"explanations\">Thus, secured bonds typically are senior bonds, because senior bonds have a higher claim priority than other bonds from the same issuer in the event of the issuer’s default. If the bond issuer does not have any outstanding secured bonds, senior unsecured bondholders have a higher claim priority on the issuer’s assets than subordinated unsecured bondholders.</p><p class=\"explanations\"><b>Learning Objective: 2B. Describe the basic characteristics of bonds and distinguish between the types of bond issuers.</b></p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_357_PQ_011'] = objQuestion;


objQuestion = new Object();
objQuestion.strID = 'LOMA_357_PQ_012';
objQuestion.questionID = 111019;
objQuestion.item = 'LOMA_357_PPQ2019_012';
objQuestion.primaryLO = '2B';
objQuestion.textref = 'c. 2, p. 9';
objQuestion.textbook = 0;
objQuestion.chapter = 2;
objQuestion.module = 1;
var arrLOs = new Array();
arrLOs[0] = '2B';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">In the United States, the government of State A issued bonds to help fund the construction of a toll road. The bonds will be supported by the income produced from the toll road. This information indicates that State A issued a type of</p>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "municipal bond known as a revenue bond";
arrAnsChoices[1] = "municipal bond known as a general obligation bond";
arrAnsChoices[2] = "sovereign bond known as a revenue bond";
arrAnsChoices[3] = "sovereign bond known as a general obligation bond";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 448701;
arrAnsIDs[1] = 448702;
arrAnsIDs[2] = 448703;
arrAnsIDs[3] = 448704;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 1;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">Municipal bonds, or munis, are debt securities issued by U.S. local city, county, and state governments and government agencies to raise funds for public works, such as schools, parks, bridges, highways, and hospitals. In the United States, a general obligation bond is a type of municipal bond that is backed by the full faith and credit of the issuer—which includes the taxing and further borrowing power of the issuer—and a revenue bond is supported by a specific income-producing project, such as a toll road.</p><p class=\"explanations\"><b>Learning Objective: 2B. Describe the basic characteristics of bonds and distinguish between the types of bond issuers.</b></p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">It is correct to say that State A issued a municipal bond. However, in the United States, a general obligation bond is <b>not</b> supported by a specific income-producing project, such as a toll road, but is backed by the full faith and credit of the issuer, which includes the taxing and further borrowing power of the issuer.</p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">It is correct to say that State A issued a revenue bond, which is supported by a specific income-producing project, such as a toll road. However, a sovereign bond, also known as a federal government bond, is issued by a <b>national</b> government rather than a local city, county, or state government. Sovereign bonds cover the cost of public spending that is not fully supported by tax revenues.</p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">A sovereign bond, also known as a federal government bond, is issued by a <b>national</b> government rather than a local city, county, or state government. Sovereign bonds cover the cost of public spending that is not fully supported by tax revenues. Also, in the United States, a general obligation bond is <b>not</b> supported by a specific income-producing project, such as a toll road, but is backed by the full faith and credit of the issuer, which includes the taxing and further borrowing power of the issuer.</p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_357_PQ_012'] = objQuestion;


objQuestion = new Object();
objQuestion.strID = 'LOMA_357_PQ_013';
objQuestion.questionID = 111020;
objQuestion.item = 'LOMA_357_PPQ2019_013';
objQuestion.primaryLO = '2B';
objQuestion.textref = 'c. 2, pp. 9-10';
objQuestion.textbook = 0;
objQuestion.chapter = 2;
objQuestion.module = 1;
var arrLOs = new Array();
arrLOs[0] = '2B';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">The following statements are about U.S. government bonds, including Treasury bills, Treasury notes, Treasury bonds, and Treasury Inflation-Protected Securities (TIPS). Select the answer choice containing the correct statement.</p>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "Treasury bills have a maturity date of two years or more.";
arrAnsChoices[1] = "Treasury notes have long maturity dates, often 20 to 30 years.";
arrAnsChoices[2] = "Treasury bonds are commonly referred to as supranational bonds.";
arrAnsChoices[3] = "Unlike Treasury bills, Treasury notes, and Treasury bonds, TIPS offer inflation protection.";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 448705;
arrAnsIDs[1] = 448706;
arrAnsIDs[2] = 448707;
arrAnsIDs[3] = 448708;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 4;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">Treasury bills have a maturity date of <b>one year or less</b>.</p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">Treasury notes have a maturity date of at least 1 year but not more than 10 years, <b>commonly 2 to 10 years</b>.</p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">Supranational bonds are issued by <b>multinational</b> or supranational entities—such as the World Bank and regional development banks—which operate in more than one country. Treasury bonds are issued by the U.S. government.</p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">Federal government bonds issued by the U.S. government usually are referred to as Treasuries. Treasury bills have a maturity date of one year or less. Treasury notes have a maturity date of at least one year but not more than 10 years, commonly 2 to 10 years. Treasury bonds have a maturity date of more than 10 years, often 20 to 30 years. TIPS have maturity dates of 5, 10, and 30 years.</p><p class=\"explanations\"><b>Learning Objective: 2B. Describe the basic characteristics of bonds and distinguish between the types of bond issuers.</b></p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_357_PQ_013'] = objQuestion;


objQuestion = new Object();
objQuestion.strID = 'LOMA_357_PQ_014';
objQuestion.questionID = 111021;
objQuestion.item = 'LOMA_357_PPQ2019_014';
objQuestion.primaryLO = '2C';
objQuestion.textref = 'c. 2, pp. 13-15';
objQuestion.textbook = 0;
objQuestion.chapter = 2;
objQuestion.module = 1;
var arrLOs = new Array();
arrLOs[0] = '2C';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">Corporations issue two basic types of stock: common stock and preferred stock. One correct statement about these two types of stock is that</p>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "<i>common</i> stock is a hybrid security that has characteristics of both debt and equity";
arrAnsChoices[1] = "<i>common</i> stockholders have a higher claim priority over company assets than preferred stockholders";
arrAnsChoices[2] = "<i>preferred </i>stocks typically have a stronger potential for price appreciation than common stocks";
arrAnsChoices[3] = "<i>preferred </i>stocks have a stated stock dividend rate";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 448709;
arrAnsIDs[1] = 448710;
arrAnsIDs[2] = 448711;
arrAnsIDs[3] = 448712;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 4;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">Common stock is an <b>equity</b> security. Preferred stock is a hybrid security because it has characteristics of both debt securities and equity securities.</p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">In the event of a company’s liquidation, <b>preferred</b> stockholders have a higher claim priority over company assets than common shareholders, but a lower claim priority than a company’s bondholders.</p>";
arrAnswerFeedback[2] = "<p class=\"explanations\"><b>Common stocks</b> typically have a stronger potential for price appreciation than preferred stocks.</p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">A company’s common stockholders and preferred stockholders have an ownership interest in the company. Common stock is an equity security. Preferred stock is a hybrid security that has characteristics of both debt securities and equity securities.</p><p class=\"explanations\">In the event of a company’s liquidation, preferred stockholders have a higher claim priority over company assets than common shareholders. However, a company’s bondholders have a higher claim priority than its preferred stockholders and common shareholders.</p><p class=\"explanations\"><b>Learning Objective: 2C. Distinguish between common and preferred stocks and explain the different ways that companies can pay dividends.</b></p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_357_PQ_014'] = objQuestion;


objQuestion = new Object();
objQuestion.strID = 'LOMA_357_PQ_015';
objQuestion.questionID = 111022;
objQuestion.item = 'LOMA_357_PPQ2019_015';
objQuestion.primaryLO = '2D';
objQuestion.textref = 'c. 2, pp. 16-17';
objQuestion.textbook = 0;
objQuestion.chapter = 2;
objQuestion.module = 1;
var arrLOs = new Array();
arrLOs[0] = '2D';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">To determine the value of a real estate property, an appraiser estimates a property’s value as of a given date. A property’s value varies depending on approach the appraiser uses. A real estate appraiser who values a property at its highest and best use most likely is using <b>(a value-in-use / an&nbsp;investment value)</b> appraisal. The type of appraisal that excludes the value of the land is known as <b>(an insurance value / a market value)</b> appraisal.</p>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "a value-in-use / an insurance value";
arrAnsChoices[1] = "a value-in-use / a market value";
arrAnsChoices[2] = "an investment value / an insurance value";
arrAnsChoices[3] = "an investment value / a market value";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 448713;
arrAnsIDs[1] = 448714;
arrAnsIDs[2] = 448715;
arrAnsIDs[3] = 448716;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 3;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">It is correct to say that an insurance value appraisal excludes the value of land. However, in a value-in-use appraisal, an appraiser estimates a property’s value to a particular user; the user is <b>not</b> necessarily assumed to be making the best use of the property. Sometimes a property is dedicated to a particular use or has special benefits. In such cases, a value-in-use appraisal can be lower or higher than a market value appraisal for the same property.</p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">In a value-in-use appraisal, an appraiser estimates a property’s value to a particular user; the user is <b>not</b> necessarily assumed to be making the best use of the property. Sometimes a property is dedicated to a particular use or has special benefits. In such cases, a value-in-use appraisal can be lower or higher than a market value appraisal for the same property. In addition, a market value appraisal <b>includes </b>the value of the land.</p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">In a market value appraisal, an appraiser typically uses the comparables method—referring to recent selling prices for other properties that have similar characteristics—to estimate the price a buyer would be willing to pay for the property in current market conditions.</p><p class=\"explanations\">In a value-in-use appraisal, also known as a use value appraisal, an appraiser estimates a property’s value to a particular user. Sometimes a property is dedicated to a particular use or has special benefits. An investment value appraisal assumes that an investor is making the best use of the property. This appraisal approach usually results in higher values than market value appraisals.</p><p class=\"explanations\">In an insurance value appraisal, also known as a replacement value appraisal, the appraiser estimates the amount an insurance company would potentially cover under property insurance if all buildings and fixtures on a property were destroyed. Because an insurance value appraisal excludes the value of the land, this appraisal is typically lower than a market value appraisal, value-in-use appraisal, or an investment value appraisal.</p><p class=\"explanations\"><b>Learning Objective: 2D. Describe the different types of real estate properties and explain the various methods of real estate appraisal.</b></p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">It is correct to say that an investment value is an appraiser’s estimate of the value of the property to a particular investor, with the property value at its highest and best use. However, a market value appraisal <b>includes </b>the value of land.</p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_357_PQ_015'] = objQuestion;


objQuestion = new Object();
objQuestion.strID = 'LOMA_357_PQ_016';
objQuestion.questionID = 111023;
objQuestion.item = 'LOMA_357_PPQ2019_016';
objQuestion.primaryLO = '2E';
objQuestion.textref = 'c. 2, pp. 18-19';
objQuestion.textbook = 0;
objQuestion.chapter = 2;
objQuestion.module = 1;
var arrLOs = new Array();
arrLOs[0] = '2E';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">Generally, the level of protection provided to a lender depends upon whether the mortgage is a recourse loan or a nonrecourse loan. Consider the following two mortgages. In each case, the borrower has failed to pay the loan, and the value of the property is <i>not</i> enough to cover the outstanding liability:</p><ul class=\"examul\"><li><b>Mortgage X</b>—The lender may seek financial damages through a deficiency judgment to enforce collection of the outstanding amount owed to the lender from the borrower’s other assets.</li><li><b>Mortgage Y</b>—The lender is allowed to seize the property and can then sell the property to satisfy the outstanding liability. However, the contract does not permit the lender to pursue the borrower for the additional funds, and the lender must take a loss.</li></ul><p class=\"stem\">Select the answer choice that correctly identifies Mortgage X and Mortgage Y as a recourse loan or a nonrecourse loan.</p>";
var arrAnsChoices = new Array();
arrAnsChoices[-1] = "<u>Mortgage X</u></div><div class=\"anshead\"><u>Mortgage Y</u>";
arrAnsChoices[0] = "recourse loan</div><div class=\"anscell\" onclick=\"recordAns(1);\">recourse loan";
arrAnsChoices[1] = "recourse loan</div><div class=\"anscell\" onclick=\"recordAns(2);\">nonrecourse loan";
arrAnsChoices[2] = "nonrecourse loan</div><div class=\"anscell\" onclick=\"recordAns(3);\">recourse loan";
arrAnsChoices[3] = "nonrecourse loan</div><div class=\"anscell\" onclick=\"recordAns(4);\">nonrecourse loan";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 448718;
arrAnsIDs[1] = 448719;
arrAnsIDs[2] = 448720;
arrAnsIDs[3] = 448721;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 2;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">It is correct to say that Mortgage X is a recourse loan. However, Mortgage Y is <b>not</b> a recourse loan. A recourse loan allows the lender to obtain legal action, known as a deficiency judgment, to enforce collection of the outstanding amount owed from the borrower’s other assets.</p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">Most lenders for both recourse loans and nonrecourse loans expect loan balances to be amortizing—amortization is the reduction of a debt by regular payments of principal and interest that result in full payment of the debt by the maturity date—at a steady rate. Mortgage lenders develop amortization schedules for borrowers to repay loans by a given date.</p><p class=\"explanations\">Typically, mortgage loans held by life insurers are nonrecourse loans.</p><p class=\"explanations\"><b>Learning Objective: 2E. Distinguish between recourse and nonrecourse loans and residential and commercial mortgages.</b></p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">Mortgage X is <b>not</b> a nonrecourse loan. A nonrecourse loan does not permit the lender to pursue the borrower for the additional funds, and the lender must take a loss. Mortgage Y is <b>not</b> a recourse loan. A recourse loan allows the lender to obtain legal action, known as a deficiency judgment, to enforce collection of the outstanding amount owed from the borrower’s other assets.</p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">It is correct to say that Mortgage Y is a nonrecourse loan. However, Mortgage X is <b>not</b> a nonrecourse loan. A nonrecourse loan does not permit the lender to pursue the borrower for the additional funds, and the lender must take a loss.</p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_357_PQ_016'] = objQuestion;


objQuestion = new Object();
objQuestion.strID = 'LOMA_357_PQ_017';
objQuestion.questionID = 111024;
objQuestion.item = 'LOMA_357_PPQ2019_017';
objQuestion.primaryLO = '2F';
objQuestion.textref = 'c. 2, pp. 20-21';
objQuestion.textbook = 0;
objQuestion.chapter = 2;
objQuestion.module = 1;
var arrLOs = new Array();
arrLOs[0] = '2F';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">The following statements are about real estate investment trusts (REITs). Three statements are true, and one statement is false. Select the answer choice containing the <B>FALSE </B>statement.</p>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "In an equity REIT, the REIT is the property owner and is responsible for managing the property.";
arrAnsChoices[1] = "By law, a REIT must distribute at least 90 percent of its taxable income to shareholders annually in the form of dividends.";
arrAnsChoices[2] = "Because public REITs tend to be less liquid than private REITs, they are limited to institutional investors and other affluent investors.";
arrAnsChoices[3] = "Mortgage REITs can invest in individual mortgages or in investment vehicles that represent a group of mortgages, and they earn income from the interest on the loans.";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 448722;
arrAnsIDs[1] = 448723;
arrAnsIDs[2] = 448724;
arrAnsIDs[3] = 448725;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 3;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">This statement is true; therefore, it is <b>not</b> the correct response. Equity REITs use capital to purchase income-producing assets, such as apartments or office buildings. Equity REITs produce revenues for investors by collecting lease and rental payments.</p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">This statement is true; therefore, it is <b>not</b> the correct response. REITs are attractive to investors that seek income-generating investments. Also, REIT dividends generally offer higher yields than stock dividends.</p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">This statement is false; therefore, it is the correct response. Equity REITs use capital to purchase income-producing assets, such as apartments or office buildings. They produce revenue for investors by collecting lease and rental payments. Mortgage REITs invest in loans to borrowers who wish to purchase real estate. They earn income from the interest on the loans.</p><p class=\"explanations\">Public REITs are traded on securities exchanges, which are organized marketplaces where members of an exchange buy and sell specific types of securities, such as common stocks and bonds. Public REITs tend to be more liquid than private REITs. Most REITs are private REITs, which are limited to institutional investors and other affluent investors.</p><p class=\"explanations\"><b>Learning Objective: 2F. Explain the benefits and risks of investing in real estate investment trusts.</b></p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">This statement is true; therefore, it is <b>not</b> the correct response. Mortgage REITs invest in loans to borrowers who wish to purchase real estate.</p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_357_PQ_017'] = objQuestion;





var arrlotext = new Array(); 
arrlotext['2A'] = "2A. Define the term <i>investment vehicle</i> and explain its purpose in investing.";
arrlotext['2B'] = "2B. Describe the basic characteristics of bonds and distinguish between the types of bond issuers.";
arrlotext['2C'] = "2C. Distinguish between common and preferred stocks and explain the different ways that companies can pay dividends.";
arrlotext['2D'] = "2D. Describe the different types of real estate properties and explain the various methods of real estate appraisal.";
arrlotext['2E'] = "2E. Distinguish between recourse and nonrecourse loans and residential and commercial mortgages.";
arrlotext['2F'] = "2F. Explain the benefits and risks of investing in real estate investment trusts.";
arrlotext['8A'] = "8A. Describe diversification and hedging and explain how institutional investors can use each strategy to manage specific risks in portfolios.";
