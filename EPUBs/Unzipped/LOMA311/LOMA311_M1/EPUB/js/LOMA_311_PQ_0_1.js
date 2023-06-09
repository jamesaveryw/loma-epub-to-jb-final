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

var quizname = "LOMA 311 Practice Questions, Chapter 1";
var coursename = 'LOMA 311';
var modulenumber = 1;
var title = "LOMA_311_PPQ2020_0_1";
var intNumPools = 1;
var numQ = 11;
var numTexts = 1;
var numChap = 1;
var arrTexts = new Array();
var arrNumChap = new Array();
var duration = 0;
arrTexts[0] = "Business Law for Insurance Professionals (2020)";
arrNumChap[0] = 1;
var thisChap = '1';

objPool = new Object(); 
objPool.intSelectCount = 11;
objPool.formID = 2380;
objPool.formName = 'PPQ2020_0_1';
arrPoolQuestions = new Array();
arrPoolQuestions[0] = 'LOMA_311_PQ_001';
arrPoolQuestions[1] = 'LOMA_311_PQ_002';
arrPoolQuestions[2] = 'LOMA_311_PQ_003';
arrPoolQuestions[3] = 'LOMA_311_PQ_004';
arrPoolQuestions[4] = 'LOMA_311_PQ_005';
arrPoolQuestions[5] = 'LOMA_311_PQ_006';
arrPoolQuestions[6] = 'LOMA_311_PQ_007';
arrPoolQuestions[7] = 'LOMA_311_PQ_008';
arrPoolQuestions[8] = 'LOMA_311_PQ_009';
arrPoolQuestions[9] = 'LOMA_311_PQ_010';
arrPoolQuestions[10] = 'LOMA_311_PQ_011';
objPool.arrPoolQuestions = arrPoolQuestions;
arrPools[0] = objPool;

objQuestion = new Object();
objQuestion.strID = 'LOMA_311_PQ_001';
objQuestion.questionID = 116966;
objQuestion.item = 'LOMA_311_PPQ2020_001';
objQuestion.primaryLO = '1A';
objQuestion.textref = 'c. 1, p. 3';
objQuestion.textbook = 0;
objQuestion.chapter = 1;
objQuestion.module = 1;
var arrLOs = new Array();
arrLOs[0] = '1A';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">A life insurance company’s stakeholders include</p><ol type=\"A\" class=\"combo\"><li>The board of directors</li><li>Potential customers</li><li>Regulators</li></ol>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "A, B, and C";
arrAnsChoices[1] = "A and B only";
arrAnsChoices[2] = "B and C only";
arrAnsChoices[3] = "A only";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 472929;
arrAnsIDs[1] = 472930;
arrAnsIDs[2] = 472931;
arrAnsIDs[3] = 472932;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 1;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">Life insurers balance the needs of a variety of stakeholders. By stakeholders, we mean the parties that have an interest in how the company conducts its business. Stakeholders of a life insurance company also include stockholders (for stock companies), executives, managers, employees, agents, policyowners, beneficiaries, and annuity participants, among others. </p><p class=\"explanations\"><b>Learning Objective: 1A. Explain why industry professionals need a basic understanding of the legal system.</b></p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">It is true that a life insurance company’s stakeholders include the board of directors and potential customers. However, regulators are also stakeholders of a life insurance company.</p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">It is true that a life insurance company’s stakeholders include potential customers and regulators. However, the board of directors is also stakeholders of a life insurance company.</p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">It is true that a life insurance company’s stakeholders include the board of directors. However, it is not the only stakeholder of a life insurance company.</p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_311_PQ_001'] = objQuestion;


objQuestion = new Object();
objQuestion.strID = 'LOMA_311_PQ_002';
objQuestion.questionID = 116967;
objQuestion.item = 'LOMA_311_PPQ2020_002';
objQuestion.primaryLO = '1C';
objQuestion.textref = 'c. 1, p. 5';
objQuestion.textbook = 0;
objQuestion.chapter = 1;
objQuestion.module = 1;
var arrLOs = new Array();
arrLOs[0] = '1C';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">In the United States and most other countries, governmental powers are divided among three branches of government: the judicial branch, the executive branch, and the legislative branch. The <i>judicial </i>branch of government in any given jurisdiction performs the function of</p>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "enacting the jurisdiction’s laws";
arrAnsChoices[1] = "administering the jurisdiction’s laws";
arrAnsChoices[2] = "carrying out the jurisdiction’s laws";
arrAnsChoices[3] = "interpreting the jurisdiction’s laws ";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 472933;
arrAnsIDs[1] = 472934;
arrAnsIDs[2] = 472935;
arrAnsIDs[3] = 472936;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 4;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">The <b>legislative </b>branch of government consists of one or more legislative bodies that are responsible for enacting laws to govern the applicable jurisdiction.</p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">The <b>executive </b>branch of government consists of a system of administrative agencies that are responsible for administering, enforcing, or carrying out the jurisdiction’s laws.</p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">The <b>executive </b>branch of government consists of a system of administrative agencies that are responsible for administering, enforcing, or carrying out the jurisdiction’s laws.</p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">The judicial branch of government consists of a system of courts that are responsible for applying and interpreting the jurisdiction’s laws and for resolving disputes.</p><p class=\"explanations\"><b>Learning Objective: 1C. Explain how the three primary governmental functions are divided among the branches of government.</b></p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_311_PQ_002'] = objQuestion;


objQuestion = new Object();
objQuestion.strID = 'LOMA_311_PQ_003';
objQuestion.questionID = 116968;
objQuestion.item = 'LOMA_311_PPQ2020_003';
objQuestion.primaryLO = '1C';
objQuestion.textref = 'c. 1, p. 5';
objQuestion.textbook = 0;
objQuestion.chapter = 1;
objQuestion.module = 1;
var arrLOs = new Array();
arrLOs[0] = '1C';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">Countries can organize their governments as a parliamentary democracy or establish a federal system of government. The following statement(s) can correctly be made about parliamentary democracies and countries that have a federal system of government:</p><ol type=\"A\" class=\"combo\"><li>In a parliamentary democracy, the legislative branch of government has ultimate authority for making all laws.</li><li>In a country that has a federal system of government, the federal government holds all governmental powers rather than sharing power with lower level governments.</li></ol>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "Both A and B";
arrAnsChoices[1] = "A only";
arrAnsChoices[2] = "B only";
arrAnsChoices[3] = "Neither A nor B";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 472937;
arrAnsIDs[1] = 472938;
arrAnsIDs[2] = 472939;
arrAnsIDs[3] = 472940;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 2;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">At least one of these statements is incorrect.</p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">In a parliamentary democracy, the legislative branch of government, usually known as the Parliament, has ultimate authority for making all laws. Although specific details of how a parliamentary system operates vary from country to country, the executive branch of government typically is led by a prime minister. The prime minister is the individual who heads the political party that holds a majority of elected seats in the Parliament.</p><p class=\"explanations\">Statement B is incorrect because, in a federal system, a federal government and a number of lower level governments share governmental powers.</p><p class=\"explanations\"><b>Learning Objective: 1C. Explain how the three primary governmental functions are divided among the branches of government.</b></p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">Statement B is incorrect because, in a federal system of government, a federal government and a number of lower level governments <b>share</b> governmental powers. </p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">At least one of these statements is correct.</p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_311_PQ_003'] = objQuestion;


objQuestion = new Object();
objQuestion.strID = 'LOMA_311_PQ_004';
objQuestion.questionID = 116969;
objQuestion.item = 'LOMA_311_PPQ2020_004';
objQuestion.primaryLO = '1B';
objQuestion.textref = 'c. 1, p. 6';
objQuestion.textbook = 0;
objQuestion.chapter = 1;
objQuestion.module = 1;
var arrLOs = new Array();
arrLOs[0] = '1B';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">By definition, the laws enacted by a legislature create the body of law known as</p>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "statutory law";
arrAnsChoices[1] = "procedural law ";
arrAnsChoices[2] = "case law";
arrAnsChoices[3] = "administrative law";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 472941;
arrAnsIDs[1] = 472942;
arrAnsIDs[2] = 472943;
arrAnsIDs[3] = 472944;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 1;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">The laws enacted by a legislature are referred to as statutes, which typically are laws that declare, command, or prohibit something. These legislative enactments create the body of law known as statutory law.</p><p class=\"explanations\"><b>Learning Objective: 1B. Identify the primary sources of law and describe how they are created.</b></p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">Procedural laws specify the rules and methods that courts use to enforce substantive laws, which create, define, and regulate legal rights and duties. Procedural laws specify the types of cases that each court has jurisdiction to hear.</p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">In common law jurisdictions, case law is a body of law composed of the written decisions of the courts.</p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">Regulations are rules or orders that are issued by administrative agencies and that have the force and effect of law, as long as they do not conflict with the underlying statute. Regulations make up the body of law known as administrative law.</p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_311_PQ_004'] = objQuestion;


objQuestion = new Object();
objQuestion.strID = 'LOMA_311_PQ_005';
objQuestion.questionID = 116970;
objQuestion.item = 'LOMA_311_PPQ2020_005';
objQuestion.primaryLO = '1C';
objQuestion.textref = 'c. 1, p. 7';
objQuestion.textbook = 0;
objQuestion.chapter = 1;
objQuestion.module = 1;
var arrLOs = new Array();
arrLOs[0] = '1C';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">In the United States, the federal administrative agency that is responsible for enforcing federal criminal laws, representing the United States in federal cases, and providing legal advice to other federal officials and departments is known as the</p>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "Department of the Treasury";
arrAnsChoices[1] = "Office of the Secretary of State";
arrAnsChoices[2] = "Department of Justice (DOJ)";
arrAnsChoices[3] = "Securities and Exchange Commission (SEC)";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 472945;
arrAnsIDs[1] = 472946;
arrAnsIDs[2] = 472947;
arrAnsIDs[3] = 472948;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 3;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">The Department of the Treasury is a federal administrative agency that has primary responsibility for administering federal banking and tax laws.</p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">The Office of the Secretary of State is a <b>state </b>administrative agency that is responsible for licensing corporations and businesses.</p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">Each executive branch of government consists of administrative agencies which are responsible for administering, enforcing, or carrying out the jurisdiction’s laws. In the United States, the DOJ is the federal administrative agency that is responsible for enforcing federal criminal laws, representing the United States in federal cases, and providing legal advice to other federal officials and departments.</p><p class=\"explanations\"><b>Learning Objective: 1C. Explain how the three primary governmental functions are divided among the branches of government.</b></p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">The Securities and Exchange Commission (SEC) is the federal agency that administers federal laws governing securities and the investment industry.</p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_311_PQ_005'] = objQuestion;


objQuestion = new Object();
objQuestion.strID = 'LOMA_311_PQ_006';
objQuestion.questionID = 116971;
objQuestion.item = 'LOMA_311_PPQ2020_006';
objQuestion.primaryLO = '1B';
objQuestion.textref = 'c. 1, p. 7';
objQuestion.textbook = 0;
objQuestion.chapter = 1;
objQuestion.module = 1;
var arrLOs = new Array();
arrLOs[0] = '1B';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">In the United States and many other jurisdictions, the executive branch of government consists of a variety of departments, generally known as administrative agencies, that issue rules or orders to fill in the details of the law. These rules or orders are known as</p>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "codes";
arrAnsChoices[1] = "regulations ";
arrAnsChoices[2] = "substantive laws";
arrAnsChoices[3] = "customary laws";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 472949;
arrAnsIDs[1] = 472950;
arrAnsIDs[2] = 472951;
arrAnsIDs[3] = 472952;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 2;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">All of the laws enacted by <b>legislative </b>bodies are compiled and organized into a collection of laws that typically is referred to as a code.</p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">In the United States and many other jurisdictions, the legislatures enact statutes in relatively general terms and delegate authority to the executive branch to fill in the details of the law. Regulations are rules or orders that are issued by administrative agencies and that have the force and effect of law; such regulations make up the type of law known as administrative law.</p><p class=\"explanations\"><b>Learning Objective: 1B. Identify the primary sources of law and describe how they are created.</b></p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">The types of laws that the courts apply to specific cases are known as substantive laws, which are laws that create, define, and regulate legal rights and duties.</p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">Many countries have mixed legal systems that include a common law and/or a civil law system <i>and</i> a <b>customary law</b> <b>system</b> in which members of a community have accepted local customs as binding on the community’s members.</p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_311_PQ_006'] = objQuestion;


objQuestion = new Object();
objQuestion.strID = 'LOMA_311_PQ_007';
objQuestion.questionID = 116972;
objQuestion.item = 'LOMA_311_PPQ2020_007';
objQuestion.primaryLO = '1D';
objQuestion.textref = 'c. 1, pp. 11-12';
objQuestion.textbook = 0;
objQuestion.chapter = 1;
objQuestion.module = 1;
var arrLOs = new Array();
arrLOs[0] = '1D';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">Use the following information to answer this question:</p><ul class=\"examul\"><li>The legal system in Country X is a civil law system</li><li>The legal system in Country Y is a common law system</li></ul><p class=\"stem\">One true statement about the legal systems in Country X and Country Y is that</p>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "the legal system in <i>Country X</i> consists of an uncodified body of general principles and rules of law developed and followed by the courts";
arrAnsChoices[1] = "courts in<i> Country X</i> are required to follow the general rule known as the doctrine of <i>stare decisis</i>";
arrAnsChoices[2] = "the legal system in <i>Country Y</i> is based on the Roman legal system in which the laws are codified into written codes enacted by the legislature";
arrAnsChoices[3] = "each court in <i>Country Y</i> generally is bound to adhere to its own precedents and to the precedents established by higher courts in the same jurisdiction";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 472953;
arrAnsIDs[1] = 472954;
arrAnsIDs[2] = 472955;
arrAnsIDs[3] = 472956;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 4;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">In its broadest sense, the <b>common law</b> is an uncodified body of general principles and rules of law developed and followed by the courts. In a civil law system, the laws are codified into written codes enacted by the legislature.</p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">Courts in a <b>common law </b>jurisdiction are required to follow the general rule known as the doctrine of <i>stare decisis</i> by following precedents. A court in a civil law jurisdiction looks first to the jurisdiction’s codes for the applicable rules of law.</p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">A <b>civil law </b>system is a legal system based on the Roman legal system in which the laws are codified into written codes enacted by the legislature. In contrast, a <b>common law </b>system is a legal system that is based on the common law of England.</p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">An important feature of the common law system is that, in making decisions, the courts follow a general rule known as the doctrine of <i>stare decisis</i>. According to this doctrine, when a court finds that a specific principle of law applies to a certain set of facts, the court will apply that principle to all future cases in which the facts are substantially the same. The decision in such a prior case is known as a precedent. By relying on precedent, the courts are able to enforce the laws in a uniform, predictable, and impartial manner.</p><p class=\"explanations\"><b>Learning Objective: 1D. Distinguish among the various types of legal systems.</b></p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_311_PQ_007'] = objQuestion;


objQuestion = new Object();
objQuestion.strID = 'LOMA_311_PQ_008';
objQuestion.questionID = 116973;
objQuestion.item = 'LOMA_311_PPQ2020_008';
objQuestion.primaryLO = '1E';
objQuestion.textref = 'c. 1, pp. 16-17';
objQuestion.textbook = 0;
objQuestion.chapter = 1;
objQuestion.module = 1;
var arrLOs = new Array();
arrLOs[0] = '1E';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">The following statements are about the federal and court systems in the United States. Select the answer choice containing the correct statement.</p>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "The federal court system includes the Supreme Court, which primarily reviews cases that involve a matter of national importance.";
arrAnsChoices[1] = "The federal courts have jurisdiction over controversies between two or more states, but they do not have jurisdiction over controversies between citizens of different states.";
arrAnsChoices[2] = "Most states have two levels of appellate courts, and the higher level appellate court usually is known as the state court of appeal.";
arrAnsChoices[3] = "One level of the federal court system consists of 13 district courts that have jurisdiction to hear cases in which the decision of a lower level federal court is appealed by one of the parties involved in a trial.";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 472957;
arrAnsIDs[1] = 472958;
arrAnsIDs[2] = 472959;
arrAnsIDs[3] = 472960;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 1;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">The Supreme Court is the country’s highest court; it hears only certain appeals from lower courts and cases involving any of the states or a foreign official, such as an ambassador. The Court primarily reviews cases that involve a matter of national importance, such as cases that involve the U.S. Constitution or cases in which two or more lower courts have reached different results.</p><p class=\"explanations\"><b>Learning Objective: 1E. Describe the organization of the federal and state court systems in the United States and the decision-making procedures that courts follow.</b></p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">The U.S. Constitution identifies the types of cases over which the federal courts have jurisdiction. These types of cases include controversies between two or more states <b>and</b> controversies between citizens of different states.</p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">Most states have two levels of appellate courts. The higher level appellate court—known as the <b>state supreme court</b>—has authority to review the decisions of the lower appellate court—often known as the state court of appeal.</p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">In the federal court system, thirteen <b>circuit courts of appeal </b>have jurisdiction to hear cases in which the decision of a <b>district court </b>is appealed by one of the parties involved in a trial.</p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_311_PQ_008'] = objQuestion;


objQuestion = new Object();
objQuestion.strID = 'LOMA_311_PQ_009';
objQuestion.questionID = 116974;
objQuestion.item = 'LOMA_311_PPQ2020_009';
objQuestion.primaryLO = '1F';
objQuestion.textref = 'c. 1, pp. 17-18';
objQuestion.textbook = 0;
objQuestion.chapter = 1;
objQuestion.module = 1;
var arrLOs = new Array();
arrLOs[0] = '1F';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">The following statement(s) can correctly be made about the legal and compliance functions at insurance companies:</p><ol type=\"A\" class=\"combo\"><li>The compliance function refers to actions a company takes to handle legal matters such as contracts and lawsuits.</li><li>One way insurers meet the challenge of legal and regulatory pressures that arise from innovations in technology as well as the complexities of various insurance laws and regulations is with regtech.</li></ol>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "Both A and B";
arrAnsChoices[1] = "A only";
arrAnsChoices[2] = "B only";
arrAnsChoices[3] = "Neither A nor B";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 472961;
arrAnsIDs[1] = 472962;
arrAnsIDs[2] = 472963;
arrAnsIDs[3] = 472964;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 3;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">At least one of these statements is incorrect.</p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">Statement A is incorrect. The <b>legal function</b> refers to actions a company takes to handle legal matters such as contracts and lawsuits. The compliance function refers to actions a company takes to make sure it follows the laws and regulations of the jurisdictions where it operates. </p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">Regtech is a type of technology that helps regulators, as well as insurance companies, manage regulatory and compliance activities more effectively and at a reduced cost. With regtech, for instance, a company might use big data to better manage its compliance records. Similarly, a company might use predictive analytics to identify compliance risks. </p><p class=\"explanations\">Statement A is incorrect. The legal function refers to actions a company takes to handle legal matters such as contracts and lawsuits. The compliance function refers to actions a company takes to make sure it follows the laws and regulations of the jurisdictions where it operates.</p><p class=\"explanations\"><b>Learning Objective: 1F. Define ethics and explain the value of a corporate culture that encourages ethical conduct.</b></p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">At least one of these statements is correct.</p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_311_PQ_009'] = objQuestion;


objQuestion = new Object();
objQuestion.strID = 'LOMA_311_PQ_010';
objQuestion.questionID = 116975;
objQuestion.item = 'LOMA_311_PPQ2020_010';
objQuestion.primaryLO = '1F';
objQuestion.textref = 'c. 1, p. 18';
objQuestion.textbook = 0;
objQuestion.chapter = 1;
objQuestion.module = 1;
var arrLOs = new Array();
arrLOs[0] = '1F';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">The following statement(s) can correctly be made about insurance companies’ compliance and ethics programs:</p><ol type=\"A\" class=\"combo\"><li>Situations in which companies and employees must make decisions that cannot be based solely on legally established rules call for ethical guidelines.</li><li>Individual decisions are influenced by an organization’s corporate culture, which consists of the values, beliefs, goals, and patterns of behavior that employees of an organization share.</li></ol>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "Both A and B";
arrAnsChoices[1] = "A only";
arrAnsChoices[2] = "B only";
arrAnsChoices[3] = "Neither A nor B";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 472965;
arrAnsIDs[1] = 472966;
arrAnsIDs[2] = 472967;
arrAnsIDs[3] = 472968;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 1;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">Both statements are correct. Ethics is a system of accepted standards of conduct and moral judgment that combines honesty, integrity, and fair treatment. Acting ethically means, among other things, upholding promises to customers, operating in a responsible manner, treating customers and employees equitably, and keeping confidential information private.</p><p class=\"explanations\">Businesses that value ethical conduct typically try to create a corporate culture that emphasizes ethics. Many businesses—especially large corporations—have adopted written standards of ethical conduct.</p><p class=\"explanations\"><b>Learning Objective: 1F. Define ethics and explain the value of a corporate culture that encourages ethical conduct.</b></p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">Statement A is correct. However, Statement B is also correct.</p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">Statement B is correct. However, Statement A is also correct. </p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">At least one of these statements is correct.</p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_311_PQ_010'] = objQuestion;


objQuestion = new Object();
objQuestion.strID = 'LOMA_311_PQ_011';
objQuestion.questionID = 116976;
objQuestion.item = 'LOMA_311_PPQ2020_011';
objQuestion.primaryLO = '1G';
objQuestion.textref = 'c. 1, p. 19';
objQuestion.textbook = 0;
objQuestion.chapter = 1;
objQuestion.module = 1;
var arrLOs = new Array();
arrLOs[0] = '1G';
objQuestion.arrLOs = arrLOs;
objQuestion.strType = 'choice';
objQuestion.intMinicase = -1;
objQuestion.strStem = "<p class=\"stem\">The Federal Sentencing Guidelines are U.S. federal rules that set out uniform policies for sentencing (<b>individuals and organizations </b>/ <b>organizations but not individuals</b>) convicted of serious federal crimes. State insurance departments and other state regulators (<b>voluntarily follow </b>/ <b>are required to follow</b>) some of the practices contained in the guidelines, such as the practice of assessing the degree of blame to place on a company for allowing illegal activities to occur.</p>";
var arrAnsChoices = new Array();
arrAnsChoices[0] = "individuals and organizations / voluntarily follow";
arrAnsChoices[1] = "individuals and organizations / are required to follow";
arrAnsChoices[2] = "organizations but not individuals / voluntarily follow";
arrAnsChoices[3] = "organizations but not individuals / are required to follow";
objQuestion.arrAnsChoices = arrAnsChoices;
var arrAnsIDs = [];
arrAnsIDs[0] = 472969;
arrAnsIDs[1] = 472970;
arrAnsIDs[2] = 472971;
arrAnsIDs[3] = 472972;
objQuestion.arrAnsIDs = arrAnsIDs;
objQuestion.intCR = 1;
var arrAnswerFeedback = new Array();
arrAnswerFeedback[0] = "<p class=\"explanations\">Federal judges must consider the Federal Sentencing Guidelines when setting a punishment for individuals and organizations convicted of serious federal crimes, but they may consider other factors. Although the guidelines are federal rules, they have influenced many state regulators. For example, state insurance departments voluntarily follow some of the practices contained in the guidelines, especially the practice of assessing the degree of blame to place on a company for allowing illegal activities to occur.</p><p class=\"explanations\"><b>Learning Objective: 1G. Describe the purpose of the U.S. Federal Sentencing Guidelines and explain their significance to a company’s compliance and ethics programs.</b></p>";
arrAnswerFeedback[1] = "<p class=\"explanations\">It is true that the Federal Sentencing Guidelines are federal rules that set out uniform policies for sentencing individuals and organizations convicted of serious federal crimes. However, although many state regulators have been influenced by the guidelines, they are <b>not</b> required to follow the practices contained in the guidelines.</p>";
arrAnswerFeedback[2] = "<p class=\"explanations\">It is true that state insurance departments voluntarily follow some of the practices contained in the guidelines, such as the practice of assessing the degree of blame to place on a company for allowing illegal activities to occur. However, the Federal Sentencing Guidelines are federal rules that set out uniform policies for sentencing <b>individuals and organizations</b> convicted of serious federal crimes.</p>";
arrAnswerFeedback[3] = "<p class=\"explanations\">The Federal Sentencing Guidelines are federal rules that set out uniform policies for sentencing <b>individuals and organizations</b> convicted of serious federal crimes. In addition, although many state regulators have been influenced by the guidelines, they are <b>not</b> required to follow the practices contained in the guidelines.</p>";
objQuestion.arrAnswerFeedback = arrAnswerFeedback;
arrQuestions['LOMA_311_PQ_011'] = objQuestion;





var arrlotext = new Array(); 
arrlotext['1A'] = "1A. Explain why industry professionals need a basic understanding of the legal system.";
arrlotext['1B'] = "1B. Identify the primary sources of law and describe how they are created.";
arrlotext['1C'] = "1C. Explain how the three primary governmental functions are divided among the branches of government.";
arrlotext['1D'] = "1D. Distinguish among the various types of legal systems.";
arrlotext['1E'] = "1E. Describe the organization of the federal and state court systems in the United States and the decision-making procedures that courts follow.";
arrlotext['1F'] = "1F. Define ethics and explain the value of a corporate culture that encourages ethical conduct.";
arrlotext['1G'] = "1G. Describe the purpose of the U.S. Federal Sentencing Guidelines and explain their significance to a company’s compliance and ethics programs.";
