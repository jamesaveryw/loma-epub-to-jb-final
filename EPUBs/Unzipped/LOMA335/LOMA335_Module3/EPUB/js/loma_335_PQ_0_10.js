﻿var intPassingScore = 70;
var randomize = 0;
var feedbacktype = 'answerlevel';
var arrQuestions = new Object();
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

var quizname = "LOMA 335 Practice Questions, Chapter 10";
var coursename = 'LOMA 335';
var modulenumber = 0;
var title = "LOMA_335_PPQ2019_0_10";
var intNumPools = 1;
var numQ = 9;
var numTexts = 1;
var numChap = 1;
var arrTexts = new Array();
var arrNumChap = new Array();
var duration = 0;
arrTexts[0] = "Operational Excellence for Insurance Professionals (2019)";
arrNumChap[0] = 1;
var thisChap = '10';

objPool = new Object(); 
objPool.intSelectCount = 9;
objPool.formID = 2062;
objPool.formName = 'PPQ2019_0_10';
arrPoolQuestions = new Array();
arrPoolQuestions[0] = 'LOMA_335_PQ_097';
arrPoolQuestions[1] = 'LOMA_335_PQ_098';
arrPoolQuestions[2] = 'LOMA_335_PQ_099';
arrPoolQuestions[3] = 'LOMA_335_PQ_100';
arrPoolQuestions[4] = 'LOMA_335_PQ_101';
arrPoolQuestions[5] = 'LOMA_335_PQ_102';
arrPoolQuestions[6] = 'LOMA_335_PQ_103';
arrPoolQuestions[7] = 'LOMA_335_PQ_104';
arrPoolQuestions[8] = 'LOMA_335_PQ_105';
objPool.arrPoolQuestions = arrPoolQuestions;
arrPools[0] = objPool;

objQuestion = new Object();
objQuestion.strID = 'LOMA_335_PQ_097';
objQuestion.questionID = 109385;
objQuestion.item = 'LOMA_335_PPQ2019_097';
objQuestion.primaryLO = '10A';
objQuestion.textref = 'c. 10, p. 2';
objQuestion.textbook = 0;
objQuestion.chapter = 10;
objQuestion.module = 0;
var arrLOs = new Array();
arrLOs[0] = '10A';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">The following statement(s) can correctly be made about disruptive changes and how companies react to them:</p><ol type=\"A\" class=\"combo\"><li>Disruptive changes are changes that have the potential to influence how a business operates.</li><li>Company leaders who see disruptive changes as opportunities consider innovative ways to recreate the business in order to be relevant in the future. </li></ol>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "Both A and B";
arrAnsChoices[1] = "A only";
arrAnsChoices[2] = "B only";
arrAnsChoices[3] = "Neither A nor B";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 442074;
arrAnsIDs[1] = 442075;
arrAnsIDs[2] = 442076;
arrAnsIDs[3] = 442077;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 1;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">Statement A is correct. Technological, regulatory, and economic changes in the insurance environment are disrupting the insurance business.</p><p class=\"explanations\">Statement B is correct. Whether company leaders view disruptive changes as opportunities or as threats to business often determine a company’s chances of thriving or even surviving. Company leaders who see disruptive changes as threats look for ways to protect the current business. </p><p class=\"explanations\"><b>Learning Objective: 10A. Define disruptive change and explain how viewing change as an opportunity or threat can impact an insurer.</b></p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">Statement A is correct. However, it is not the only correct statement.</p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">Statement B is correct. However, it is not the only correct statement. </p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">At least one of these statements is correct. </p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_335_PQ_097'] = objQuestion;


objQuestion = new Object();
objQuestion.strID = 'LOMA_335_PQ_098';
objQuestion.questionID = 109386;
objQuestion.item = 'LOMA_335_PPQ2019_098';
objQuestion.primaryLO = '10B';
objQuestion.textref = 'c. 10, p. 3';
objQuestion.textbook = 0;
objQuestion.chapter = 10;
objQuestion.module = 0;
var arrLOs = new Array();
arrLOs[0] = '10B';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">Insurers’ innovative efforts can be classified according to four business objectives. Organizational innovation is one such business objective that consists of the introduction of a </p>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "new product that is significantly different from existing products";
arrAnsChoices[1] = "new or significantly improved design for business practices ";
arrAnsChoices[2] = "new or significantly improved production process or method of delivery";
arrAnsChoices[3] = "new or significantly improved marketing method, product design, or product packaging";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 442078;
arrAnsIDs[1] = 442079;
arrAnsIDs[2] = 442080;
arrAnsIDs[3] = 442081;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 2;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\"><b>Product innovation</b> refers to the introduction of a new product that is significantly different from existing products in terms of its characteristics, materials, components, software, functions, or intended uses. </p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">Insurers’ innovative efforts can be classified into four business objectives: process innovation, organizational innovation, product innovation, and marketing innovation. Innovation in any of these areas has the potential for increasing a company’s profits and growth. Process and organizational innovations support efficient operations and typically produce improved service levels, expanded service availability, or cost savings. Product and marketing innovations attempt to better satisfy customer and market needs. </p><p class=\"explanations\"><b>Learning Objective: 10B. Describe the four primary business objectives for innovation.</b></p>";
arrAnswerFeedback[2] = "<p class=\"explanations\"><b>Process innovation</b> consists of introduction of a new or significantly improved production process or method of delivery.</p>";
arrAnswerFeedback[3] = "<p class=\"explanations\"><b>Marketing innovation</b> consists of a new or significantly improved marketing method, product design, or product packaging.</p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_335_PQ_098'] = objQuestion;


objQuestion = new Object();
objQuestion.strID = 'LOMA_335_PQ_099';
objQuestion.questionID = 109387;
objQuestion.item = 'LOMA_335_PPQ2019_099';
objQuestion.primaryLO = '10C';
objQuestion.textref = 'c. 10, p. 4';
objQuestion.textbook = 0;
objQuestion.chapter = 10;
objQuestion.module = 0;
var arrLOs = new Array();
arrLOs[0] = '10C';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">Two types of innovation are incremental innovation and breakthrough innovation. Creating a new and improved version of an existing insurance product is an example of <b>(breakthrough / incremental)</b> innovation. Creating an entirely new market for an insurance product is an example of <b>(breakthrough / incremental) </b>innovation.</p>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "breakthrough / breakthrough";
arrAnsChoices[1] = "breakthrough / incremental";
arrAnsChoices[2] = "incremental / breakthrough";
arrAnsChoices[3] = "incremental / incremental";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 442082;
arrAnsIDs[1] = 442083;
arrAnsIDs[2] = 442084;
arrAnsIDs[3] = 442085;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 3;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">It is correct to say that creating an entirely new market is an example of breakthrough innovation. However, creating a new and improved version of an existing product, service, process, or organization is <b>not </b>an example of breakthrough innovation. </p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">Creating a new and improved version of an existing insurance product is <b>not</b> an example of breakthrough innovation. Also, creating an entirely new market is <b>not</b> an example of incremental innovation. </p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">Breakthrough innovation has the potential for large gains in productivity and profits but also typically presents greater risk and costs than incremental innovations. Incremental innovation involves less risk and cost because it builds upon existing knowledge and typically involves familiar components—improvements to existing processes or products, expanding further into an existing market, or broadening an existing delivery channel.</p><p class=\"explanations\"><b>Learning Objective: 10C. Distinguish between incremental and breakthrough innovation, and explain the importance to insurers of moving beyond incremental innovation to breakthrough innovation.</b></p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">It is correct to say that creating a new and improved version of an existing insurance product is incremental innovation. However, creating an entirely new market is <b>not </b>an example of incremental innovation.</p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_335_PQ_099'] = objQuestion;


objQuestion = new Object();
objQuestion.strID = 'LOMA_335_PQ_100';
objQuestion.questionID = 109388;
objQuestion.item = 'LOMA_335_PPQ2019_100';
objQuestion.primaryLO = '10D';
objQuestion.textref = 'c. 10, p. 6';
objQuestion.textbook = 0;
objQuestion.chapter = 10;
objQuestion.module = 0;
var arrLOs = new Array();
arrLOs[0] = '10D';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">Companies need to distinguish between complicated and complex problems in order to determine whether to use innovative or analytical thinking. The following statements are about these two types of problems. Select the answer choice containing the correct statement. </p>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "For complicated problems, companies’ success with a similar problem does not guarantee future success.";
arrAnsChoices[1] = "For complicated problems, it is difficult to separate parts from the whole.";
arrAnsChoices[2] = "Complex problems are unique and not often repeated.";
arrAnsChoices[3] = "For complex problems, companies’ experience is critical and often sufficient.";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 442086;
arrAnsIDs[1] = 442087;
arrAnsIDs[2] = 442088;
arrAnsIDs[3] = 442089;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 3;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">For <b>complex problems</b>, companies’ success with a similar problem does not guarantee future success.</p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">For <b>complex problems</b>, it is difficult to separate parts from the whole.</p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">In addition, complex problems involve an ambiguous context and a lot of uncertainty. Innovative thinking works well with complex problems. </p><p class=\"explanations\"><b>Learning Objective: 10D. Distinguish between analytical and innovative thinking and describe the steps in the innovative thinking framework, including problems such as plastic words.</b></p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">For <b>complicated problems</b>, companies’ experience is critical and often sufficient.</p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_335_PQ_100'] = objQuestion;


objQuestion = new Object();
objQuestion.strID = 'LOMA_335_PQ_101';
objQuestion.questionID = 109389;
objQuestion.item = 'LOMA_335_PPQ2019_101';
objQuestion.primaryLO = '10D';
objQuestion.textref = 'c. 10, pp. 6-8';
objQuestion.textbook = 0;
objQuestion.chapter = 10;
objQuestion.module = 0;
var arrLOs = new Array();
arrLOs[0] = '10D';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">Innovation experts Charles Legrand and David Weiss proposed several basic principles of innovative thinking. The following statements are about these principles. Three statements are true, and one statement is false. Select the answer choice containing the <B>FALSE</B> statement. </p>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "A project team should use convergent thinking to select the best possible options from the range of possibilities identified during divergence.";
arrAnsChoices[1] = "All stakeholders should be actively involved in the innovation process.";
arrAnsChoices[2] = "A project team should identify three alternatives, evaluate all of them, and choose one option to recommend to management. ";
arrAnsChoices[3] = "Innovative thinking requires questioning the appropriateness of all assumptions.";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 442090;
arrAnsIDs[1] = 442091;
arrAnsIDs[2] = 442092;
arrAnsIDs[3] = 442093;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 2;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">This statement is true; therefore, it is <b>not</b> the correct response.</p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">This is a false statement; therefore, it is the correct response. Not all stakeholders will be or should be actively involved in the innovation process. However, stakeholders with an interest in the outcome need to be aware of and sign off at major decision points. In particular, the decision maker who will ultimately have to approve the plan before implementation should be aware of and on board with a group’s solution and implementation plans. </p><p class=\"explanations\"><b>Learning Objective: 10D. Distinguish between analytical and innovative thinking and describe the steps in the innovative thinking framework, including problems such as plastic words.</b></p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">This statement is true; therefore, it is <b>not</b> the correct response. </p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">This statement is true; therefore, it is <b>not</b> the correct response. </p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_335_PQ_101'] = objQuestion;


objQuestion = new Object();
objQuestion.strID = 'LOMA_335_PQ_102';
objQuestion.questionID = 109390;
objQuestion.item = 'LOMA_335_PPQ2019_102';
objQuestion.primaryLO = '10E';
objQuestion.textref = 'c. 10, p. 10';
objQuestion.textbook = 0;
objQuestion.chapter = 10;
objQuestion.module = 0;
var arrLOs = new Array();
arrLOs[0] = '10E';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">Innovation experts Chris Trimble and Vijay Govindarajan presented three models for organizing innovation. The following statement(s) can correctly be made about these models: </p><ol type=\"A\" class=\"combo\"><li>Model S works best within a culture of innovation where employees are encouraged to pursue innovation on their own initiative.</li><li>The main advantage of Model C is that it does not require a dedicated team.</li></ol>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "Both A and B";
arrAnsChoices[1] = "A only";
arrAnsChoices[2] = "B only";
arrAnsChoices[3] = "Neither A nor B";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 442094;
arrAnsIDs[1] = 442095;
arrAnsIDs[2] = 442096;
arrAnsIDs[3] = 442097;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 2;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">At least one of these statements is incorrect. </p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">Statement A is correct. If an innovation project can be executed by one person or a small number of people in naturally occurring spare time, Model S is appropriate. Model S is suitable for limited projects intended to improve processes within the existing organizational and management structure.</p><p class=\"explanations\">Statement B is incorrect. If an innovation project cannot be accomplished with existing staff or with current organizational structures, a customized approach identified as Model C is essential. All innovation projects that do not fit Model S or Model R should be accomplished one unique initiative at a time with a dedicated innovation team. Innovation requiring specialized expertise is often best conducted outside of normal business operations. The main challenge of Model C is that it requires a dedicated team.</p><p class=\"explanations\"><b>Learning Objective: 10E. Describe Vijay Govindarajan and Chris Trimble’s three models of executing innovation initiatives.</b></p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">Statement B is incorrect. The main <b>challenge</b> of Model C is that it requires a dedicated team.</p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">At least one of these statements is correct.</p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_335_PQ_102'] = objQuestion;


objQuestion = new Object();
objQuestion.strID = 'LOMA_335_PQ_103';
objQuestion.questionID = 109391;
objQuestion.item = 'LOMA_335_PPQ2019_103';
objQuestion.primaryLO = '10F';
objQuestion.textref = 'c. 10, p. 12';
objQuestion.textbook = 0;
objQuestion.chapter = 10;
objQuestion.module = 0;
var arrLOs = new Array();
arrLOs[0] = '10F';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">During the innovation process, the innovation team is susceptible to many cognitive biases that can impede the learning process. The tendency to try to outdo one another in order to win is known as</p>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "ego bias";
arrAnsChoices[1] = "simplicity bias";
arrAnsChoices[2] = "political bias";
arrAnsChoices[3] = "size bias";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 442098;
arrAnsIDs[1] = 442099;
arrAnsIDs[2] = 442100;
arrAnsIDs[3] = 442101;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 3;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">Ego bias is a memory distortion that leads an individual or group to recall information in a self-serving manner.</p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">Simplicity bias is the tendency to believe that a complex outcome must have come from a complex cause, and a complex outcome cannot have come from a simple cause.</p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">Such competition may come from within the innovation team or from outside the team. Within the team, one or more members may not be fully committed to a goal or in agreement about steps in the process and may act to sabotage the initiative to gain support for their view. People outside the team may act in ways that undermine the initiative because they fear the effects of the innovation on their area of the company. </p><p class=\"explanations\"><b>Learning Objective: 10F. Describe cognitive biases and constraints that can affect the execution of innovation in business organizations.</b></p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">Size bias is the tendency to prefer large concepts instead of smaller ones.</p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_335_PQ_103'] = objQuestion;


objQuestion = new Object();
objQuestion.strID = 'LOMA_335_PQ_104';
objQuestion.questionID = 109392;
objQuestion.item = 'LOMA_335_PPQ2019_104';
objQuestion.primaryLO = '10G';
objQuestion.textref = 'c. 10, p. 14';
objQuestion.textbook = 0;
objQuestion.chapter = 10;
objQuestion.module = 0;
var arrLOs = new Array();
arrLOs[0] = '10G';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">For this question, if answer choices (1) through (3) are all correct, select answer choice (4). Otherwise, select the one correct answer choice.</p><p class=\"stem\">Innovation, like any other business endeavor, needs to support and advance a company’s value proposition and mission through established corporate strategies. An innovation steering committee is an executive-level committee that meets regularly to foster innovation and set priorities for innovation initiatives. The main responsibilities of this committee include</p>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "ensuring that innovation strategies are linked to corporate strategies, with an emphasis on achieving synergies";
arrAnsChoices[1] = "balancing incremental innovation with more ambitious innovation initiatives needed for future growth";
arrAnsChoices[2] = "allocating resources across ongoing initiatives and new initiatives";
arrAnsChoices[3] = "all of the above";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 442102;
arrAnsIDs[1] = 442103;
arrAnsIDs[2] = 442104;
arrAnsIDs[3] = 442105;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 4;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">This answer choice is correct; however, there are other correct answer choices.</p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">This answer choice is correct; however, there are other correct answer choices.</p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">This answer choice is correct; however, there are other correct answer choices.</p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">All three of the above answer choices are in fact responsibilities of the innovation steering committee.</p><p class=\"explanations\"><b>Learning Objective: 10G. Describe the management of innovation and the use of an innovation portfolio matrix as an aid in decision making.</b></p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_335_PQ_104'] = objQuestion;


objQuestion = new Object();
objQuestion.strID = 'LOMA_335_PQ_105';
objQuestion.questionID = 109393;
objQuestion.item = 'LOMA_335_PPQ2019_105';
objQuestion.primaryLO = '10F';
objQuestion.textref = 'c. 10, p. 15';
objQuestion.textbook = 0;
objQuestion.chapter = 10;
objQuestion.module = 0;
var arrLOs = new Array();
arrLOs[0] = '10F';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">One problem for which an innovation steering committee needs to be alert is sunflower bias, which can correctly be defined as the tendency to </p>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "focus on incremental innovation with a short-term impact";
arrAnsChoices[1] = "accept evaluations of proposals when the innovation proponent is a trusted associate";
arrAnsChoices[2] = "avoid risky projects that have the potential for attractive rewards";
arrAnsChoices[3] = "promote consensus around the senior-most person’s choice of project";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 442106;
arrAnsIDs[1] = 442107;
arrAnsIDs[2] = 442108;
arrAnsIDs[3] = 442109;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 4;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">Focusing on incremental innovation with a short-term impact refers to the problem of <b>misaligned time horizons</b>.</p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">Accepting evaluations of proposals when the innovation proponent is a trusted associate refers to the problem of <b>champion bias</b>. </p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">Avoiding risky projects that have the potential for attractive rewards refers to the problem of<b> risk aversion</b>.</p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">An innovation steering committee is an executive-level committee that meets regularly to foster innovation and set priorities for innovation initiatives. Once a company selects an innovation strategy, the innovation steering committee should consider several primary factors before going forward with a specific innovation project. The innovation steering committee needs to be alert to problems that can occur with the potential to sabotage innovation. </p><p class=\"explanations\"><b>Learning Objective: 10F. Describe cognitive biases and constraints that can affect the execution of innovation in business organizations.</b></p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_335_PQ_105'] = objQuestion;





var arrlotext = new Array(); 
arrlotext['10A'] = "10A. Define disruptive change and explain how viewing change as an opportunity or threat can impact an insurer.";
arrlotext['10B'] = "10B. Describe the four primary business objectives for innovation.";
arrlotext['10C'] = "10C. Distinguish between incremental and breakthrough innovation, and explain the importance to insurers of moving beyond incremental innovation to breakthrough innovation.";
arrlotext['10D'] = "10D. Distinguish between analytical and innovative thinking and describe the steps in the innovative thinking framework, including problems such as plastic words.";
arrlotext['10E'] = "10E. Describe Vijay Govindarajan and Chris Trimble’s three models of executing innovation initiatives.";
arrlotext['10F'] = "10F. Describe cognitive biases and constraints that can affect the execution of innovation in business organizations.";
arrlotext['10G'] = "10G. Describe the management of innovation and the use of an innovation portfolio matrix as an aid in decision making.";
