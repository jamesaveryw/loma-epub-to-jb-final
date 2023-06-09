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

var quizname = "LOMA 357 Practice Questions, Chapter 10";
var coursename = 'LOMA 357';
var modulenumber = 4;
var title = "LOMA_357_PPQ2019_0_10";
var intNumPools = 1;
var numQ = 8;
var numTexts = 1;
var numChap = 1;
var arrTexts = new Array();
var arrNumChap = new Array();
var duration = 0;
arrTexts[0] = "Institutional Investing: Principles and Practices (2019)";
arrNumChap[0] = 1;
var thisChap = '10';

objPool = new Object(); 
objPool.intSelectCount = 8;
objPool.formID = 2139;
objPool.formName = 'PPQ2019_0_10';
arrPoolQuestions = new Array();
arrPoolQuestions[0] = 'LOMA_357_PQ_100';
arrPoolQuestions[1] = 'LOMA_357_PQ_101';
arrPoolQuestions[2] = 'LOMA_357_PQ_102';
arrPoolQuestions[3] = 'LOMA_357_PQ_103';
arrPoolQuestions[4] = 'LOMA_357_PQ_104';
arrPoolQuestions[5] = 'LOMA_357_PQ_105';
arrPoolQuestions[6] = 'LOMA_357_PQ_106';
arrPoolQuestions[7] = 'LOMA_357_PQ_107';
objPool.arrPoolQuestions = arrPoolQuestions;
arrPools[0] = objPool;

objQuestion = new Object();
objQuestion.strID = 'LOMA_357_PQ_100';
objQuestion.questionID = 111107;
objQuestion.item = 'LOMA_357_PPQ2019_100';
objQuestion.primaryLO = '10A';
objQuestion.textref = 'c. 10, pp. 3-5';
objQuestion.textbook = 0;
objQuestion.chapter = 10;
objQuestion.module = 4;
var arrLOs = new Array();
arrLOs[0] = '10A';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">A functional regulatory framework has separate laws specifically for each sector of the financial service industry—securities, insurance, and banking. Correct statement(s) about <i>securities</i> laws include that these laws</p><ol type=\"A\" class=\"combo\"><li>apply to life insurers that offer variable life insurance and variable annuities, as well as the separate accounts supporting those products</li><li>specify the rights and duties of insurance companies and insurance customers</li><li>require banks to hold enough capital to meet their obligations and set limits on interest charges</li></ol>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "A, B, and C";
arrAnsChoices[1] = "A and B only";
arrAnsChoices[2] = "A and C only";
arrAnsChoices[3] = "B and C only";
arrAnsChoices[4] = "A only";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 449059;
arrAnsIDs[1] = 449060;
arrAnsIDs[2] = 449061;
arrAnsIDs[3] = 449062;
arrAnsIDs[4] = 449063;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 5;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">At least one of these statements describes activities that are <b>not</b> regulated by securities laws.</p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">Statement A is applies to securities laws; however, Statement B does not. <b>Insurance</b> laws specify the rights and duties of insurance companies and insurance customers.</p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">Statement A applies to securities laws; however, Statement C does not. <b>Banking</b> laws typically require banks to hold enough capital to meet their obligations and set limits on interest charges.</p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">Neither Statement B nor Statement C apply to securities laws. <b>Insurance</b> laws specify the rights and duties of insurance companies and insurance customers. <b>Banking</b> laws typically require banks to hold enough capital to meet their obligations and set limits on interest charges.</p>";
arrAnswerFeedback[4] = "<p class=\"explanations\">Statement A is the only statement that applies to securities laws. Because financial services companies have diverse operations that can support multiple activities, these companies are hard to categorize for regulatory purposes. Therefore, regulatory entities generally use functional regulation, in which a single regulatory body oversees similar financial activities, regardless of which financial institution engages in the activity.</p><p class=\"explanations\">Securities laws address the issuance, offering, and sale of financial securities; financial reporting and other conduct of securities issuers; arrangements for the establishment and administration of securities exchanges; securities transactions; penalties for regulatory violations. Insurance laws address the formation, licensing, conduct, operation, transfer of ownership, orderly termination of insurance companies, and the issuance, sale, and administration of insurance contracts.</p><p class=\"explanations\">Banking laws typically require banks to hold enough capital to meet their obligations and set limits on interest charges.</p><p class=\"explanations\"><b>Learning Objective: 10A. Explain how functional regulatory systems oversee financial services companies and describe the types of financial activities such systems regulate.</b></p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_357_PQ_100'] = objQuestion;


objQuestion = new Object();
objQuestion.strID = 'LOMA_357_PQ_101';
objQuestion.questionID = 111108;
objQuestion.item = 'LOMA_357_PPQ2019_101';
objQuestion.primaryLO = '10B';
objQuestion.textref = 'c. 10, p. 7';
objQuestion.textbook = 0;
objQuestion.chapter = 10;
objQuestion.module = 4;
var arrLOs = new Array();
arrLOs[0] = '10B';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">In the United States, federal securities laws that protect investors and regulate the activities of participants in the securities markets include the Securities and Exchange Act of&nbsp;1934, the Trust Indenture Act of 1939, the Investment Company Act of 1940, and the Investment Advisers Act of 1940. According to the provisions of these securities laws, it is correct to say that</p>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "publicly traded companies are not required to file a proxy statement with the Securities and Exchange Commission (SEC) prior to the solicitation of shareholder votes";
arrAnsChoices[1] = "the Trust Indenture Act applies to equity securities such as stocks but not to bonds or other debt securities";
arrAnsChoices[2] = "investment companies must disclose their financial condition and investment policies to investors when their shares are initially sold, and subsequently on a regular basis";
arrAnsChoices[3] = "insurance companies are exempt from the registration requirements of the Investment Advisers Act";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 449064;
arrAnsIDs[1] = 449065;
arrAnsIDs[2] = 449066;
arrAnsIDs[3] = 449067;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 3;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">The Securities Exchange Act of 1934 act sets requirements for participants in the U.S. securities industry, including requirements governing the filing of proxy statements. Proxy statement materials <b>must</b> be filed with the SEC prior to the solicitation of shareholder vote, and they must disclose all important facts concerning the issues on which shareholders are asked to vote.</p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">The Trust Indenture Act of 1939 applies to <b>bonds and other debt securities</b> and imposes certain requirements on the issuer before the securities can be sold publicly.</p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">The Investment Company Act of 1940 regulates the organization of investment companies. In the context of this act, an investment company is an organization that issues securities and engages primarily in investing, reinvesting, and trading in securities. Examples of investment companies include mutual funds, unit investment trusts (UITs), exchange-traded funds (ETFs), and insurance company separate accounts.</p><p class=\"explanations\">The Act also stipulates a number of other requirements for investment companies, including the requirement to disclose certain information about a fund and its investment objectives, as well as about the investment company’s structure and operations.</p><p class=\"explanations\"><b>Learning Objective: 10B. Describe important U.S. securities regulations, such as the Securities Act of 1933, the Securities Exchange Act of 1934, the Trust Indenture Act of 1939, the Investment Company Act of 1940, and others.</b></p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">Generally, individuals or companies that have at least $100 million of assets under management must register with the SEC as investment advisors. Thus, many asset management companies, securities brokerages, and <b>insurance companies</b> must register as investment advisors and meet the other requirements of the Investment Advisers Act of 1940. Advisors who manage less than $100 million typically register with an individual state’s securities regulator.</p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_357_PQ_101'] = objQuestion;


objQuestion = new Object();
objQuestion.strID = 'LOMA_357_PQ_102';
objQuestion.questionID = 111109;
objQuestion.item = 'LOMA_357_PPQ2019_102';
objQuestion.primaryLO = '10B';
objQuestion.textref = 'c. 10, pp. 8-9';
objQuestion.textbook = 0;
objQuestion.chapter = 10;
objQuestion.module = 4;
var arrLOs = new Array();
arrLOs[0] = '10B';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">To facilitate reform of the U.S. financial system, The Dodd-Frank Wall Street Reform and Consumer Protection Act (the Dodd-Frank Act) created new federal agencies, including the Financial Stability Oversight Council (FSOC) and the Consumer Financial Protection Bureau (CFPB). The Dodd-Frank Act authorized the <b>(FSOC / CFPB)</b> to identify the financial institutions—including banks and nonbanks—whose failure could potentially threaten the country’s financial stability. These financial services companies are known as <b>(self-regulatory organizations / systemically important financial institutions)</b>.</p>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "FSOC / self-regulatory organizations";
arrAnsChoices[1] = "FSOC / systemically important financial institutions";
arrAnsChoices[2] = "CFPB / self-regulatory organizations";
arrAnsChoices[3] = "CFPB / systemically important financial institutions";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 449068;
arrAnsIDs[1] = 449069;
arrAnsIDs[2] = 449070;
arrAnsIDs[3] = 449071;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 2;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">It is correct to say that the Dodd-Frank Act authorized the FSOC to identify companies whose failure could potentially pose a risk to the nation’s financial system. However, these companies are <b>not</b> self-regulatory organizations (SROs), which are nongovernmental organizations that exercise regulatory authority over an industry or profession.</p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">The 2007–2008 financial crisis exposed the interconnectedness of financial institutions within the U.S. financial system. Some institutions are large and have many financial relationships with other institutions. Thus, the failure of one deeply enmeshed institution can have a significant ripple effect throughout the industry, endangering the stability of the entire system. The Dodd-Frank Act addresses the systemic risk—the risk that an adverse event significantly impairs the financial system—that such institutions pose.</p><p class=\"explanations\">To facilitate reform of the U.S. financial system, The Dodd-Frank Act created several federal agencies. The FSOC identifies emerging risks in the financial system, coordinates regulatory responses to any systemic threats, and identifies systemically important financial institutions.</p><p class=\"explanations\"><b>Learning Objective: 10B. Describe important U.S. securities regulations, such as the Securities Act of 1933, the Securities Exchange Act of 1934, the Trust Indenture Act of 1939, the Investment Company Act of 1940, and others.</b></p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">The <B>CFPB</B> establishes rules to protect consumers—including investors—from unfair, deceptive, and abusive practices arising from within the financial sector. Also, these companies are <b>not</b> self-regulatory organizations (SROs), which are nongovernmental organizations that exercise regulatory authority over an industry or profession.</p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">It is correct to say that the companies whose failure could potentially pose a risk to the nation’s financial system are known as systemically important financial institutions. However, the <B>CFPB</B> establishes rules to protect consumers—including investors—from unfair, deceptive, and abusive practices arising from within the financial sector.</p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_357_PQ_102'] = objQuestion;


objQuestion = new Object();
objQuestion.strID = 'LOMA_357_PQ_103';
objQuestion.questionID = 111110;
objQuestion.item = 'LOMA_357_PPQ2019_103';
objQuestion.primaryLO = '10C';
objQuestion.textref = 'c. 10, pp. 10-11, 12-13';
objQuestion.textbook = 0;
objQuestion.chapter = 10;
objQuestion.module = 4;
var arrLOs = new Array();
arrLOs[0] = '10C';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">For this question, if answer choices (1) through (3) are all correct, select answer choice (4). Otherwise, select the one correct answer choice.</p><p class=\"stem\">In the United States, the SEC is responsible for administering and enforcing federal securities laws. One correct statement about the SEC is that it</p>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "is correctly described as an SRO";
arrAnsChoices[1] = "was established by the Dodd-Frank Act";
arrAnsChoices[2] = "has jurisdiction over all corporations whose securities are publicly traded in the United States";
arrAnsChoices[3] = "all of the above";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 449072;
arrAnsIDs[1] = 449073;
arrAnsIDs[2] = 449074;
arrAnsIDs[3] = 449075;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 3;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">The SEC is a <b>government</b> agency that has delegated much of the authority for registering securities market participants to certain SROs, such as the Financial Industry Regulatory Authority (FINRA).</p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">The Securities Exchange Act of 1934, <b>not</b> The Dodd-Frank Act, established the SEC. The Dodd-Frank Act granted the Commodity Futures Trading Commission (CFTC), which regulates the futures and options markets, new authority within swaps markets. The SEC and the CFTC split or share jurisdiction over swaps, depending on the type of swap involved in a transaction.</p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">The SEC is the primary authority for administering and enforcing U.S. securities laws. Specifically, SEC regulation applies to companies that issue securities to support their business operations and companies that sell such securities to the investing public. The SEC also has the authority to set the accounting and reporting methods that public companies use. The SEC has delegated much of the authority for registering securities market participants to certain SROs, such as the Financial Industry Regulatory Authority (FINRA).</p><p class=\"explanations\"><b>Learning Objective: 10C. Explain how the following entities are involved in U.S. securities regulation: the Securities and Exchange Commission (SEC), the Financial Industry Regulatory Authority (FINRA), the Commodity Futures Trading Commission (CFTC), and state securities regulators.</b></p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">At least one of these answer choices is incorrect.</p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_357_PQ_103'] = objQuestion;


objQuestion = new Object();
objQuestion.strID = 'LOMA_357_PQ_104';
objQuestion.questionID = 111111;
objQuestion.item = 'LOMA_357_PPQ2019_104';
objQuestion.primaryLO = '10D';
objQuestion.textref = 'c. 10, pp. 12-13, 14-15, 4';
objQuestion.textbook = 0;
objQuestion.chapter = 10;
objQuestion.module = 4;
var arrLOs = new Array();
arrLOs[0] = '10D';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">The following statements are about state insurance regulators and U.S. insurance regulation. Select the answer choice containing the correct statement.</p>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "The National Association of Insurance Commissioners (NAIC) directly regulates insurance companies.";
arrAnsChoices[1] = "Market conduct laws are designed to ensure that insurance companies are financially able to meet their debts and to pay policy benefits when they come due.";
arrAnsChoices[2] = "Under the McCarran-Ferguson Act, the U.S. Congress completely transferred the authority to regulate insurance companies from federal insurance regulators to state insurance regulators.";
arrAnsChoices[3] = "Solvency laws typically pertain to an insurer’s capital and surplus amounts.";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 449076;
arrAnsIDs[1] = 449077;
arrAnsIDs[2] = 449078;
arrAnsIDs[3] = 449079;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 4;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">The NAIC does <b>not</b> directly regulate insurance companies. In the United States, the states are primarily responsible for insurance industry regulation and oversight; the NAIC affects state regulatory efforts.</p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">Market conduct laws are designed to ensure that insurance companies conduct their business <b>fairly and ethically</b>; the laws typically pertain to the <b>marketing, sales, and distribution</b> of insurance products.</p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">Under the federal McCarran-Ferguson Act of 1945, the U.S. Congress left insurance regulation to the state governments. However, under the Act, Congress <b>retains</b> the right to enact federal insurance legislation if Congress decides that state regulation is inadequate.</p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">Solvency laws are designed to ensure that insurance companies are financially able to meet their debts and to pay policy benefits when they come due. Market conduct laws are designed to make sure that insurance companies conduct their business fairly and ethically; these laws typically pertain to the marketing, sales, and distribution of insurance products.</p><p class=\"explanations\"><b>Learning Objective: 10D. Describe how state insurance regulators and the National Association of Insurance Commissioners (NAIC) are involved in U.S. insurance regulation.</b></p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_357_PQ_104'] = objQuestion;


objQuestion = new Object();
objQuestion.strID = 'LOMA_357_PQ_105';
objQuestion.questionID = 111112;
objQuestion.item = 'LOMA_357_PPQ2019_105';
objQuestion.primaryLO = '10E';
objQuestion.textref = 'c. 10, pp. 17-18';
objQuestion.textbook = 0;
objQuestion.chapter = 10;
objQuestion.module = 4;
var arrLOs = new Array();
arrLOs[0] = '10E';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">To ensure that insurers have sufficient assets to meet their contractual obligations when they come due, state insurance regulators generally require insurers to hold minimum amounts of capital and to follow specific asset valuation methods and financial reporting standards. With regard to state insurance requirements, it is correct to say</p>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "that insurance regulators determine the minimum capital level requirements for an insurer based on the insurer’s policies in force and return on invested assets";
arrAnsChoices[1] = "that subaccount investments held in an insurer’s separate accounts are exempt from SEC asset valuation regulations";
arrAnsChoices[2] = "that insurers with investments in debt securities rated NAIC 6 have lower risk charges than insurers with investments in debt securities rated NAIC 1";
arrAnsChoices[3] = "that, under statutory accounting principles (SAP), no value for a nonadmitted asset can be reported on the <i>Assets</i> page of an insurer’s Annual Statement";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 449080;
arrAnsIDs[1] = 449081;
arrAnsIDs[2] = 449082;
arrAnsIDs[3] = 449083;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 4;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">Insurance regulators evaluate the adequacy of an insurer’s capital by using risk-based capital (RBC) requirements, which determine the minimum capital level for an insurer based on that <b>insurer’s size and risk profile</b>, as identified by a risk-weighted formula. The NAIC maintains an RBC formula to assist state regulators in identifying weakly capitalized insurers.</p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">Variable insurance products—such as variable annuities and variable life insurance—are subject to SEC regulation because they are considered securities, and the separate accounts and subaccounts that support such products are regulated as investment companies. Although life insurance companies that conduct business in the U.S. generally value their assets—including variable insurance products—under the guidance of the <i>NAIC Accounting Practices and Procedures Manual</i> and the<i> Purposes and Procedures Manual of the NAIC Investment Analysis Office</i>, they are also <b>subject</b> to SEC guidelines regarding the valuation of assets.</p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">The NAIC Securities Valuation Office (SVO) publishes designations of bonds and other fixed-income investments. Designations range from NAIC 1, which represents the best rating, to <B>NAIC 6</B>, which represents the <b>worst rating</b>. Regulators assign lower risk charges to investments in securities with the highest NAIC ratings, and <b>higher risk charges</b> to investments in securities with the <b>lowest NAIC ratings</b>.</p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">Under SAP, insurers in the U.S. are not allowed to report the full value of specified general account investments on the <i>Assets</i> page of the Annual Statement. Assets can be admitted, partially admitted, or nonadmitted. The full value of an admitted asset can be reported on the<i> Assets</i> page. Admitted assets typically are liquid; they include cash and most invested assets, such as stocks and bonds.</p><p class=\"explanations\">Only a portion of a partially admitted asset’s monetary value is reported on the <i>Assets</i> page. No value is reported for a nonadmitted asset on the <i>Assets</i> page; its monetary value is reported elsewhere in the Annual Statement. Nonadmitted assets include furniture and office equipment.</p><p class=\"explanations\"><b>Learning Objective: 10E. Explain how capital adequacy requirements, asset and liability valuation standards, and accounting and financial reporting standards contribute to insurer solvency regulations.</b></p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_357_PQ_105'] = objQuestion;


objQuestion = new Object();
objQuestion.strID = 'LOMA_357_PQ_106';
objQuestion.questionID = 111113;
objQuestion.item = 'LOMA_357_PPQ2019_106';
objQuestion.primaryLO = '10F';
objQuestion.textref = 'c. 10, pp. 19-20';
objQuestion.textbook = 0;
objQuestion.chapter = 10;
objQuestion.module = 4;
var arrLOs = new Array();
arrLOs[0] = '10F';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">The following statement(s) can correctly be made about state regulations that affect insurance company investments in the United States:</p><ol type=\"A\" class=\"combo\"><li>The Investments of Insurers Model Act (Defined Standards Version) specifies the types of assets that insurers are permitted to treat as admitted assets and imposes quantitative limitations on the amount of each type of asset an insurer may treat as admitted assets.</li><li>The Asset Valuation Reserve (AVR) absorbs realized and unrealized investment gains and losses on assets sold, when such gains and losses are related to changes in credit quality or equity price fluctuations.</li><li>The Asset Valuation Reserve (AVR) and the Interest Maintenance Reserve (IMR) are both asset accounts that affect only insurance company separate account investments.</li></ol>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "A, B, and C";
arrAnsChoices[1] = "A and B only";
arrAnsChoices[2] = "B and C only";
arrAnsChoices[3] = "A only";
arrAnsChoices[4] = "B only";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 449084;
arrAnsIDs[1] = 449085;
arrAnsIDs[2] = 449086;
arrAnsIDs[3] = 449087;
arrAnsIDs[4] = 449088;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 5;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">At least one of these statements is incorrect.</p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">Statement B is correct; however, Statement A is incorrect. The <b>Investments of Insurers Model Act (Defined Limits Version)</b>, also known as the pigeonhole version, specifies the types of assets that insurers are permitted to treat as admitted assets and imposes quantitative limitations on the amount of each type of asset an insurer may treat as admitted assets.</p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">Statement B is correct; however, Statement C is incorrect. The AVR and IMR are both <b>liability </b>accounts. These investment reserves serve to reduce an insurer’s exposure to gains and losses arising from fluctuations in market values of assets. They apply only for statutory financial reporting purposes and concern only <b>general account </b>assets.</p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">Statement A is incorrect. The <b>Investments of Insurers Model Act (Defined Limits Version)</b>, also known as the pigeonhole version, specifies the types of assets that insurers are permitted to treat as admitted assets and imposes quantitative limitations on the amount of each type of asset an insurer may treat as admitted assets.</p>";
arrAnswerFeedback[4] = "<p class=\"explanations\">Statement A is incorrect. The Defined Limits Version gives companies specific and narrowly defined limits on specified categories in balancing portfolio risk exposures. Each limit represents an acceptable category of securities or issuers. The limits in the Defined Standards Version are broader than those of the Defined Limits Version, in that insurers have some discretion in selecting investments of varying risk exposures. Unlike the Defined Limits Version, the Defined Standards Version does not specify categories of securities and issuers that are acceptable to regulators.</p><p class=\"explanations\">Statement B is correct. The AVR minimizes the effects of both realized and unrealized gains and losses on an insurer’s invested assets when those gains and losses are related to the credit quality of the assets or fluctuations in the prices of equity securities. The IMR helps absorb realized gains and losses on an insurer’s interest-bearing assets when those gains or losses are caused by changes in market interest rates, rather than changes in the credit quality of the assets.</p><p class=\"explanations\">Statement C is incorrect. The AVR and IMR are liabilities, but they are not contractual reserves. They are noncontractual reserves that apply only under statutory financial reporting standards and concern only general account assets.</p><p class=\"explanations\"><b>Learning Objective: 10F. Describe the effects that the Investments of Insurers Model Acts, investment reserve requirements, and restrictions on general account holdings have on insurers’ investments.</b></p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_357_PQ_106'] = objQuestion;


objQuestion = new Object();
objQuestion.strID = 'LOMA_357_PQ_107';
objQuestion.questionID = 111114;
objQuestion.item = 'LOMA_357_PPQ2019_107';
objQuestion.primaryLO = '10G';
objQuestion.textref = 'c. 10, p. 23';
objQuestion.textbook = 0;
objQuestion.chapter = 10;
objQuestion.module = 4;
var arrLOs = new Array();
arrLOs[0] = '10G';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">Several international entities are important in shaping financial services regulation within member countries. Two such entities that affect the investment activities of insurance companies are the International Organisation of Securities Commissions (IOSCO) and the European Union (EU). The following statement(s) can correctly be made about these entities:</p><ol type=\"A\" class=\"combo\"><li>The IOSCO, an international self-regulatory organization (SRO) for the securities industry, develops international standards for securities regulation.</li><li>The EU’s European Insurance and Occupational Pensions Authority (EIOPA) was responsible for implementing Solvency II, a solvency standard for insurance companies, designed to support solvency testing and solvency supervision in the public interest.</li></ol>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "Both A and B";
arrAnsChoices[1] = "A only";
arrAnsChoices[2] = "B only";
arrAnsChoices[3] = "Neither A nor B";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 449089;
arrAnsIDs[1] = 449090;
arrAnsIDs[2] = 449091;
arrAnsIDs[3] = 449092;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 1;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">Statement A is correct. The IOSCO’s Multilateral Memorandum of Understanding (MMoU) provides assurance that a company’s interests can be protected after it invests across a national boundary. Thus, the MMoU supports cross-border investing by financial services companies.</p><p class=\"explanations\">Statement B is correct. The EU maintains agencies that oversee financial activities, including the European Insurance and Occupational Pensions Authority (EIOPA), which supervises insurance and pension activities to protect the interests of insurance policyowners and pension plan members and beneficiaries. Solvency II introduced risk-based capital requirements, which influenced the asset allocation decisions of many insurers in the EU.</p><p class=\"explanations\"><b>Learning Objective: 10G. Identify the primary focus of insurance regulators around the world and briefly describe the work of the International Organisation of Securities Commissions (IOSCO) and the European Union.</b></p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">Statement A is correct; however, it is not the only correct statement.</p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">Statement B is correct; however, it is not the only correct statement.</p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">At least one of these statements is correct.</p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_357_PQ_107'] = objQuestion;





var arrlotext = new Array(); 
arrlotext['10A'] = "10A. Explain how functional regulatory systems oversee financial services companies and describe the types of financial activities such systems regulate.";
arrlotext['10B'] = "10B. Describe important U.S. securities regulations, such as the Securities Act of 1933, the Securities Exchange Act of 1934, the Trust Indenture Act of 1939, the Investment Company Act of 1940, and others.";
arrlotext['10C'] = "10C. Explain how the following entities are involved in U.S. securities regulation: the Securities and Exchange Commission (SEC), the Financial Industry Regulatory Authority (FINRA), the Commodity Futures Trading Commission (CFTC), and state securities regulators.";
arrlotext['10D'] = "10D. Describe how state insurance regulators and the National Association of Insurance Commissioners (NAIC) are involved in U.S. insurance regulation.";
arrlotext['10E'] = "10E. Explain how capital adequacy requirements, asset and liability valuation standards, and accounting and financial reporting standards contribute to insurer solvency regulations.";
arrlotext['10F'] = "10F. Describe the effects that the Investments of Insurers Model Acts, investment reserve requirements, and restrictions on general account holdings have on insurers’ investments.";
arrlotext['10G'] = "10G. Identify the primary focus of insurance regulators around the world and briefly describe the work of the International Organisation of Securities Commissions (IOSCO) and the European Union.";
