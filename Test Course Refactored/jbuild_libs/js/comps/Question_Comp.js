var Q_Setup_Array = [];
var Q_Setup_Key_Array = [];
var Q_Para_Top_Array = [];
var Q_List_Settings = [];
var Q_List_Settings_List_Setup = [];
var Q_List_Settings_Array = [];
var Q_lstText_Array = [];
var Q_Para_Bottom_Array = [];
var Q_Answer_Array = [];
var Q_Answer_Totals_Array = [];
var Q_Feedback_Array = [];
var Q_Answer_Key = [[], []];
var Q_Multi_Answers = [[], []];
var Q_Multi_Track = [];
var Q_Muli_Answer_Array = [];
var Q_Multi_Check_Array = [];
var Q_Alt_Tag;
var Q_Alt_Tag_Array = [];
var Q_Image = [];
var Quest_fix;
// JW: 2022-12-08
// Used to determine what role questions and answers should have depending on question type.
var groupRole;
var answerRole;
// JW: 2022-12-14
// Used to determine what checkmark answers will have depending on question type.
var qCheckClass;

function Question_Comp(c_questionData, c_ccnum) {
    //   console.log("c_questionData: " + c_questionData)


    c_div_maker = "";
    //==============================================================================================================
    Q_Setup_Array = Object.values(c_questionData[0]);
    Q_Setup_Key_Array = Object.keys(c_questionData[0]);
    //==============================================================================================================
    Q_Para_Top_Array = Object.values(c_questionData[1].paragraph_top_text);
    //==============================================================================================================
    Q_List_Settings = Object.values(c_questionData[2].qList);

    Q_List_Settings_Array = Q_List_Settings;

    Q_List_Settings_List_Setup = Object.values(Q_List_Settings[0])
    Q_lstText_Array = Object.values(Q_List_Settings).splice(1, (Q_List_Settings.length - 1))
    //==============================================================================================================

    Q_Para_Bottom_Array = Object.values(c_questionData[3].paragraph_bottom_text);
    //==============================================================================================================
    Q_Answer_Array = Object.values(c_questionData[4].question_answers);

    Q_Answer_Totals_Array = Object.values(Q_Answer_Array)

    Q_Answer_Key[c_ccnum] = Q_Answer_Array;

    for (var qa = 0; qa < Q_Answer_Array.length; qa++) {
        Q_Multi_Track[qa] = "false";
    }
    Q_Multi_Answers[c_ccnum] = Q_Multi_Track;
    Q_Multi_Track = [];
    //==============================================================================================================

    Q_Feedback_Array[c_ccnum] = Object.values(c_questionData[5])


    //==============================================================================================================                  
    // JW: 2022-12-14
    // Added another class to the question container for easy CSS seleciton.
    c_div_maker = c_div_maker + "<div class='col-lg-12 col-md-12 col-xs-12 question-container' id='sqn_" + c_ccnum + "' style='background-color:" + Q_Setup_Array[3] + ";margin-top:" + Q_Setup_Array[10] + ";border-style:" + Q_Setup_Array[6] + " none " + Q_Setup_Array[6] + " none; border-width: " + Q_Setup_Array[5] + ";border-color:" + Q_Setup_Array[4] + ";border-radius:" + Q_Setup_Array[7] + ";'>";

    if (Q_Setup_Array[0] === "1") {
        // JW: 2022-12-07
        // Removed. This kind of verbosity with a screen reader is unneccessary.
        // Rather than announcing questions, the questions should follow a 
        // predictable design pattern.
        // c_div_maker = c_div_maker + "<p class='sr-only'>Single answer question</p>"; 

        // JW: 2022-12-08
        // Setting group role, answer role, and checkmark image for single answer questions. 
        groupRole = 'radiogroup';
        answerRole = 'radio';
        qCheckClass = "checkmark";

    }
    if (Q_Setup_Array[0] === "2") {
        // JW: 2022-12-07
        // Removed. This kind of verbosity with a screen reader is unneccessary.
        // Rather than announcing questions, the questions should follow a 
        // predictable design pattern.
        // c_div_maker = c_div_maker + "<p class='sr-only'>Multiple answer question</p>"; 

        // JW: 2022-12-08
        // Setting group role, answer role, and checkmark image for multi answer questions.
        groupRole = 'group';
        answerRole = 'checkbox';
        qCheckClass = "checkmark_square";
    }


    if (Q_Setup_Array[11].length > 4) {
        // JW: 2022-12-07
        // Added content for the alt tag depending on which image file is there.
        let alt;
        if (Q_Setup_Array[12].length > 1) {
            alt = Q_Setup_Array[12];
        }
        else if (/what/i.test(Q_Setup_Array[11])) {
            // pulls content from the default_content.js file rather than hard coding
            alt = course.onReplaceTemplateVar('default_content', 'Labels.whatDoYouThink')
        }
        else if (/review/i.test(Q_Setup_Array[11])) {
            alt = course.onReplaceTemplateVar('default_content', 'Labels.letsReview')
        }
        c_div_maker = c_div_maker + '<img style="margin-top:20px" class="qstImg" src="' + comp_images + '' + Q_Setup_Array[11] + '" alt="' + alt + '">';
        // c_div_maker = c_div_maker + "<img style='margin-top:20px' class='qstImg' src='"+comp_images+""+Q_Setup_Array[11]+"' alt=''>"; 
    }
    // JW: 2022-12-08
    // Wrapping everything in question stem, including top, bottom, and list, and all answer choices inside a div 
    // with role either set to group or radio group.
    // Question label div wraps around all leadin text.
    c_div_maker = c_div_maker + "<div role='" + groupRole + "' aria-labelledby='QueLabel_" + c_ccnum + "'><div id='QueLabel_" + c_ccnum + "'>";
    //-------< Paragraph Top Begin >

    //if(Q_Para_Top_Array.length > 1){alert(Q_Para_Top_Array[0].paragraph_top.length)}


    if (Q_Para_Top_Array.length > 1) {
        for (var qPara = 0; qPara < Q_Para_Top_Array.length; qPara++) {
            if (Q_Para_Top_Array[qPara].paragraph_top.length > 0) {
                // alert(Q_Para_Top_Array[qPara].paragraph_top) // class='sr-only'
                // JW: 2022-12-07
                // changed <jb1> to <span class="jb1">
                // non-semantic HTML tags can confuse screen readers
                c_div_maker = c_div_maker + "<div class='quest_char' style='text-align:" + Q_List_Settings_List_Setup[1] + "'> <span class='jb1'>" + Q_Para_Top_Array[qPara].paragraph_top + "</span></div>";
                // c_div_maker = c_div_maker + "<div class='quest_char' style='text-align:"+Q_List_Settings_List_Setup[1]+"'> <jb1>"+Q_Para_Top_Array[qPara].paragraph_top+"</jb1></div>"; 
            }
        }

        c_div_maker = c_div_maker + "<br>";
    }


    //-------< Paragraph Top End >	
    if (Q_Setup_Array.length > 14) {
        //-------< Image Begin >
        if (Q_Setup_Array[14].length > 4) {
            //Q_Setup_Array[16]

            if (Q_Setup_Array[16].length > 125) {
                Q_Alt_Tag = "Select Image Description Button for more information";
                Q_Alt_Tag_Array[c_ccnum] = Q_Setup_Array[16];
            }
            else {
                Q_Alt_Tag = Q_Setup_Array[16];
            }


            //Q_Alt_Tag

            Q_Image[c_ccnum] = Q_Setup_Array[14];

            c_div_maker = c_div_maker + "<div id='qImg_" + c_ccnum + "'><img class='qstImg' src='" + image_locale + "" + Q_Setup_Array[14] + "' alt='" + Q_Alt_Tag + "' onclick='show_Q_image(" + c_ccnum + ")'/><br><br></div>";

            if (Q_Setup_Array[16].length > 125) {
                c_div_maker = c_div_maker + "<div style='padding-bottom:20px'><button id='mlt_btn' class='btn btn-primary btn-sm' onclick='alt_tag_image(" + c_ccnum + ",0,4)'>Image Description</button></div>";
            }


        }
        //-------< Image End > aria-label='Question'  
    }

    if (Q_Setup_Key_Array[12] === "question") {
        Quest_fix = Q_Setup_Array[12]
    }

    if (Q_Setup_Key_Array[12] !== "question") {
        Quest_fix = Q_Setup_Array[13]
    }

    // JW: 2022-12-07
    // Changed <jb1> to <span class="jb1">. Non-semantic HTML tags can confuse screen readers.
    c_div_maker = c_div_maker + "<div id='QueNum_" + c_ccnum + "' style='text-align:" + Q_Setup_Array[8] + "' class='quest_char'><span class='jb1'>" + Quest_fix + "</span>";
    // c_div_maker = c_div_maker + "<div id='QueNum_"+c_ccnum+"' style='text-align:"+Q_Setup_Array[8]+"' class='quest_char' tabindex='0'><jb1>"+Quest_fix+"</jb1></div>";


    //-------<(  List Begin  )>-------	


    if (Q_List_Settings_Array[0].qList_on_off === "on") {


        switch (Q_List_Settings_Array[0].Type_of_List) {
            case "ul":

                var lst_type = Q_List_Settings_Array[0].ul_type;
                break;

            case "ol":


                if (Q_List_Settings_Array[0].ol_type === "A") { var lst_type = "upper-alpha" }
                if (Q_List_Settings_Array[0].ol_type === "a") { var lst_type = "lower-alpha" }

                if (Q_List_Settings_Array[0].ol_type === "I") { var lst_type = "upper-roman" }
                if (Q_List_Settings_Array[0].ol_type === "i") { var lst_type = "lower-roman" }

                break;
        }


        c_div_maker = c_div_maker + "<" + Q_List_Settings_Array[0].Type_of_List + " style='list-style-type:" + lst_type + "'>"; //"+lst_type+"



        for (var qList_nun = 0; qList_nun < Q_lstText_Array.length; qList_nun++) {


            // JW: 2022-12-07
            // Removed <h4> tags from li elements. These aren't headers semantically .
            // Removed tabindex from li elements. These aren't interactive so they shouldn't be in the tabindex.
            c_div_maker = c_div_maker + "<li class='quest_char quest_list' style='text-align:" + Q_List_Settings_Array[0].align_text + "'>" + Q_lstText_Array[qList_nun].lstText + "</li>";
            // c_div_maker = c_div_maker + "<li class='quest_char quest_list' style='text-align:"+Q_List_Settings_Array[0].align_text+"' tabindex='0'><h4>"+Q_lstText_Array[qList_nun].lstText+"</h4></li>"; 


        }

        c_div_maker = c_div_maker + "</" + Q_List_Settings_Array[0].Type_of_List + ">";
    }

    //-------<(  List End  )>-------
    // /* 

    //-------< Paragraph bottom Begin >

    if (Q_Para_Bottom_Array.length > 1) {
        for (var qPara = 0; qPara < Q_Para_Bottom_Array.length; qPara++) {
            if (Q_Para_Bottom_Array[0].paragraph_bottom.length > 0) {
                // JW: 2022-12-08
                // Changed <jb1> to <span class="jb1">. Non-semantic HTML tags can confuse screen readers.
                c_div_maker = c_div_maker + "<div class='quest_char' style='text-align:" + Q_List_Settings_List_Setup[1] + "'> <span class='jb1'>" + Q_Para_Bottom_Array[qPara].paragraph_bottom + "</span></div>";
                // c_div_maker = c_div_maker + "<div class='quest_char' style='text-align:"+Q_List_Settings_List_Setup[1]+"'> <jb1>"+Q_Para_Bottom_Array[qPara].paragraph_bottom+"</jb1></div>"; 
            }
        }

        c_div_maker = c_div_maker + "<br>";
    }


    // JW: 2022-12-09
    // col classes add a float: left attribute, which does weird things to the feedback now that the structure
    // of the question has changes slightely.
    c_div_maker = c_div_maker + "</div></div>";
    // c_div_maker = c_div_maker + "</div><div class='col-lg-12 col-md-12 col-xs-12' style='margin-top:10px;'>";

    // JW: 2022-12-07
    // Changed label element to a div. Labels and divs are not valid decendents of the label element.
    c_div_maker = c_div_maker + "<div id='fbqs_" + c_ccnum + "' class='qSpacing c_jb_column1'><div class='c_container choices' style='font-weight: normal !important; text-align:left'>";
    // c_div_maker = c_div_maker + "<div id='fbqs_"+c_ccnum+"' class='qSpacing c_jb_column1'><label class='c_container' style='font-weight: normal !important; text-align:left'>";

    for (var qAns = 0; qAns < Q_Answer_Array.length; qAns++) {
        // JW: 2022-12-09
        // The first radio should be tabindex="0" and the rest are tabindex="-1".
        // All checkboxes are tabindex="0".
        let tabIndex;
        if (qAns === 0 || Q_Setup_Array[0] === "2") {
            tabIndex = "0";
        }
        else {
            tabIndex = "-1"
        }
        // JW: 2022-12-07
        // Changed button element to div with role set to appropriate type (radio or checkbox). 
        // Added aria-labelledby attribute set to the id of the element with the answer choice text.
        // Added aria-checked attribute to keep track of whether the answer is selected.
        // Added tabindex so elements are keyboard accessible.
        // Removed type attribute.
        // Changed label element to div. Using aria-labelledby attribute to connect content to the radio/checkbox instead.
        // Added keydown listener and another function to the onclick listener.
        // answerClick and answerKeyDown functions handle setting aria-checked 
        // on answer choices.
        c_div_maker = c_div_maker + "<div role='" + answerRole + "' aria-labelledby='qs_" + c_ccnum + "_an_" + qAns + "' aria-checked='false' tabindex='" + tabIndex + "' class='btn_w_image' onclick='answerClick(event);nQue(" + Q_Setup_Array[0] + "," + Q_Answer_Array[qAns].true_false + "," + c_ccnum + "," + qAns + "," + QNum + ",event);' onkeydown='answerKeyDown(event);' id='cbck_" + c_ccnum + "_" + qAns + "'><div class='c_container' style='font-weight: normal !important; text-align:left'>";
        // c_div_maker = c_div_maker + "<button aria-label='"+Q_Answer_Array[qAns].q_answer+"' class='btn_w_image' onclick='nQue("+Q_Setup_Array[0]+","+Q_Answer_Array[qAns].true_false+","+c_ccnum+","+qAns+",0);' type='c_checkbox' id='cbck_"+c_ccnum+"_"+qAns+"'><label class='c_container' style='font-weight: normal !important; text-align:left'>";

        // JW: 2022-12-08
        // Changed <jb1> to <span class="jb1">. Non-semantic HTML tags can confuse screen readers.
        c_div_maker = c_div_maker + "<span id='qs_" + c_ccnum + "_an_" + qAns + "' class='jb1 c_qtext'>" + Q_Answer_Array[qAns].q_answer + "</span>";
        // input causes the lag between tab clicks
        // JW: 2022-12-13
        // Set checkEl above based on qtype.
        c_div_maker = c_div_maker + "<div style='display:none; color:#000000' id='ci_fb_" + c_ccnum + "_" + qAns + "' class='qtext'></div><span id='cb_" + c_ccnum + "_" + qAns + "' class='" + qCheckClass + "'></span>";


        // JW: 2022-12-13
        // Moved this above so we're not repeating the check for qtype.
        // if(Q_Setup_Array[0] === "1")
        //         {
        //             c_div_maker = c_div_maker + "<span id='cb_"+c_ccnum+"_"+qAns+"' class='checkmark'></span>";
        //         }
        // if(Q_Setup_Array[0] === "2")
        //         {
        //             c_div_maker = c_div_maker + "<span id='cb_"+c_ccnum+"_"+qAns+"' class='checkmark_square'></span>";

        //         }
        // JW: 2022-12-07
        // Changed button to div.
        // Changed label to div.
        c_div_maker = c_div_maker + "</div></div><br>";
        // c_div_maker = c_div_maker + "</label></button><br>";



    }
    // JW: 2022-12-07
    // Added div closes for divs added above.
    c_div_maker = c_div_maker + "</div></div>";

    // JW: 2022-12-08
    // Moved this from below.
    if (Q_Setup_Array[0] === "2") {

        // JW: 2022-12-09
        // col classes add a float: left attribute, which does weird things to the feedback when it shows up.
        c_div_maker = c_div_maker + "<button onclick='Question_Comp_Submit(" + c_ccnum + "," + QNum + ",event);' class='btn btn-primary disabled' id='sub_" + c_ccnum + "'>submit</button>";
        //  c_div_maker = c_div_maker + "<div class='col-lg-12 col-md-12 col-xs-12' align='center' style='margin-top:10px;padding:10px'><button onclick='Question_Comp_Submit("+c_ccnum+");' class='btn btn-primary disabled' id='sub_"+c_ccnum+"'>submit</button></div>";

    }

    // JW: 2022-12-07
    // Removed an extra close div.
    // Moved Q_Setup_Array[2] to the class rather than having it be the element. Non-semantic HTML tags can confuse screen readers.
    c_div_maker = c_div_maker + "</div><div role='alert' id='q_feedback_" + c_ccnum + "' class='col-lg-12 col-md-12 col-xs-12' style='display: none; margin-top:20px; margin-bottom: 20px; height:auto; padding: 10px; max-width: 75ch; line-height: 1.5;'><div><span class='" + Q_Setup_Array[2] + "' id='q_feedback_texthead_" + c_ccnum + "'></span><br></div><span class='" + Q_Setup_Array[2] + "' id='q_feedback_text_" + c_ccnum + "'></span><div style='display: none;margin-top:20px; color:black' id='add_feedback_" + c_ccnum + "'></div>";
    // c_div_maker = c_div_maker + "<div role='alert' id='q_feedback_"+c_ccnum+"' class='col-lg-12 col-md-12 col-xs-12' style='display: none; margin-top:20px; margin-bottom: 20px; height:auto; padding: 10px; max-width: 75ch; line-height: 1.5;'><div><"+Q_Setup_Array[2]+" id='q_feedback_texthead_"+c_ccnum+"'></div><br></"+Q_Setup_Array[2]+"><"+Q_Setup_Array[2]+" id='q_feedback_text_"+c_ccnum+"'></"+Q_Setup_Array[2]+"><div style='display: none;margin-top:20px; color:black' id='add_feedback_"+c_ccnum+"'></div></div>";

    //c_div_maker = c_div_maker + "<div style='display: none;' id='add_feedback_"+c_ccnum+"'></div>"; 

    c_div_maker = c_div_maker + "</div>";

    // JW: 2022-12-08
    // Moved this before the Feedback div.
    // if(Q_Setup_Array[0] === "2")
    // {

    //    c_div_maker = c_div_maker + "<div class='col-lg-12 col-md-12 col-xs-12' align='center' style='margin-top:10px;padding:10px'><button onclick='Question_Comp_Submit("+c_ccnum+");' class='btn btn-primary disabled' id='sub_"+c_ccnum+"'>submit</button></div>";

    // }
    // */  
    c_div_maker = c_div_maker + "</div>";



    c_comp_Array[c_ccnum] = c_div_maker;
    comp_Array_test()
    c_div_maker = "";
    // JW: 2022-12-13
    // QNum is a global variable set in vars.js to keep track of question index per page    
    QNum++;

    //-------------------------------------------------------------------------------------------------------------	
    //-------<( New Question Comp code end )>-------											
    //-------------------------------------------------------------------------------------------------------------											

}

function nQue(qtyp, cqtn, curComp, qestA, curQnum, event) {
    switch (qtyp) {
        case 1:


            switch (cqtn) {
                case true:
                    document.getElementById("cb_" + curComp + "_" + qestA).className = "c_checkmark";
                    document.getElementById("q_feedback_" + curComp).className = "q_cor_border";
                    document.getElementById("q_feedback_texthead_" + curComp).className = "q_txthead_c";
                    document.getElementById("q_feedback_texthead_" + curComp).innerHTML = Q_Feedback_Array[curComp][0];
                    document.getElementById("q_feedback_text_" + curComp).innerHTML = Q_Feedback_Array[curComp][1];
                    document.getElementById("q_feedback_" + curComp).style.display = "block";


                    if (typeof Q_Feedback_Array[curComp][5] !== "undefined") {
                        document.getElementById("add_feedback_" + curComp).innerHTML = Q_Feedback_Array[curComp][5];
                        document.getElementById("add_feedback_" + curComp).style.display = "block";
                    }



                    break;

                case false:
                    document.getElementById("cb_" + curComp + "_" + qestA).className = "i_checkmark";
                    document.getElementById("q_feedback_" + curComp).className = "q_inc_border";
                    document.getElementById("q_feedback_texthead_" + curComp).className = "q_txthead_i";
                    document.getElementById("q_feedback_texthead_" + curComp).innerHTML = Q_Feedback_Array[curComp][2];
                    document.getElementById("q_feedback_text_" + curComp).innerHTML = Q_Feedback_Array[curComp][3];
                    document.getElementById("q_feedback_" + curComp).style.display = "block";



                    if (typeof Q_Feedback_Array[curComp][5] !== "undefined") {
                        document.getElementById("add_feedback_" + curComp).innerHTML = Q_Feedback_Array[curComp][5];
                        document.getElementById("add_feedback_" + curComp).style.display = "block";
                    }

                    for (var shwCor = 0; shwCor < Q_Answer_Key[curComp].length; shwCor++) {
                        if (Q_Answer_Key[curComp][shwCor].true_false === "true") {
                            document.getElementById("qs_" + curComp + "_an_" + shwCor).style.border = "2px solid #85be00";
                        }
                    }




                    break;


            }

            // JW: 2022-12-14
            // Gathering all answers to figure out what the correct response is.
            let allAs = slice(document.getElementById(`cbck_${curComp}_${qestA}`).parentElement.querySelectorAll('.btn_w_image'));
            let corA;
            for (let i = 0; i < allAs.length; i++) {
                if (/true/.test(allAs[i].getAttribute('onclick'))) {
                    corA = i;
                }
            }
            // Saving question data to LRS and suspend data
            Send_question_data(qestA, corA, curComp, curQnum)

            break;

        case 2:

            switch (document.getElementById("cb_" + curComp + "_" + qestA).className) {
                case "checkmark_square":
                    document.getElementById("cb_" + curComp + "_" + qestA).className = "checkmark_square_wait";
                    Q_Multi_Answers[curComp][qestA] = "true";


                    break;

                case "checkmark_square_wait":
                    document.getElementById("cb_" + curComp + "_" + qestA).className = "checkmark_square";
                    Q_Multi_Answers[curComp][qestA] = "false";


                    break;


            }



            document.getElementById("sub_" + curComp).className = "btn btn-primary";
            break;


    }

    // JW: 2022-12-14
    // I'm calling nQue using the JS click() method on page load if the questions have already 
    // been answered. This scroll makes the page hop around on load. If it should actually scroll,
    // the event should have x,y coordinates.
    if (((event) && (event.type == 'click' && event.x > 0 && event.y > 0) || event.type == 'keydown')) {
        document.getElementById("sqn_" + curComp).scrollIntoView(false);
    }
    //document.getElementById("sqn_"+ curComp).scrollIntoView(false);


}

// JW: 2022-12-14
// Added qNum as function paramater to keep track of the question index.
function Question_Comp_Submit(mqnum, qNum, event) {

    var stAns = Q_Multi_Answers[mqnum].toString();

    var ckLst = [];
    for (jb_ak = 0; jb_ak < Q_Answer_Key[mqnum].length; jb_ak++) {
        ckLst[jb_ak] = Q_Answer_Key[mqnum][jb_ak].true_false;

    }
    var anKey = ckLst.toString();



    document.getElementById("q_feedback_" + mqnum).style.display = "none";



    if (stAns === anKey) {
        document.getElementById("q_feedback_" + mqnum).className = "q_cor_border";
        document.getElementById("q_feedback_texthead_" + mqnum).className = "q_txthead_c";
        document.getElementById("q_feedback_texthead_" + mqnum).innerHTML = Q_Feedback_Array[mqnum][0];
        document.getElementById("q_feedback_text_" + mqnum).innerHTML = Q_Feedback_Array[mqnum][1];
        document.getElementById("q_feedback_" + mqnum).style.display = "block";


        if (typeof Q_Feedback_Array[mqnum][5] !== "undefined") {
            document.getElementById("add_feedback_" + mqnum).innerHTML = Q_Feedback_Array[mqnum][5];
            document.getElementById("add_feedback_" + mqnum).style.display = "block";

        }


    }

    if (stAns !== anKey) {
        document.getElementById("q_feedback_" + mqnum).className = "q_inc_border";
        document.getElementById("q_feedback_texthead_" + mqnum).className = "q_txthead_i";
        document.getElementById("q_feedback_texthead_" + mqnum).innerHTML = Q_Feedback_Array[mqnum][2];
        document.getElementById("q_feedback_text_" + mqnum).innerHTML = Q_Feedback_Array[mqnum][3];
        document.getElementById("q_feedback_" + mqnum).style.display = "block";


        if (typeof Q_Feedback_Array[mqnum][5] !== "undefined") {
            document.getElementById("add_feedback_" + mqnum).innerHTML = Q_Feedback_Array[mqnum][5];
            document.getElementById("add_feedback_" + mqnum).style.display = "block";

        }


        for (var shwCor = 0; shwCor < Q_Answer_Key[mqnum].length; shwCor++) {


            if (Q_Answer_Key[mqnum][shwCor].true_false === "true") {
                document.getElementById("qs_" + mqnum + "_an_" + shwCor).style.border = "2px solid #85be00";
            }

        }
    }
    if ((event.type == 'click' && event.x > 0 && event.y > 0) || event.type == 'keydown') {
        document.getElementById("sqn_" + mqnum).scrollIntoView(false);
    }
    

    // JW: 2022-121-14
    // Saves question data.
    Send_question_data(Q_Multi_Answers[mqnum], ckLst, mqnum, qNum);
}

function Send_question_data(std_answer, mca, crmod, qNum) {
    let stType;
    if (typeof mca == "object") {
        stType = "pagequestions";
    }
    else {
        stType = "inlinequestions";
    }
    var pagequestions = {
        "type": stType,

        "verb": "answered",

        "activity": "http://adlnet.gov/expapi/activities/question",
        "module": course.view.state.module, //bCurrentMod
        "lesson": course.view.state.lesson, //bCurrentLsn
        "page": course.view.state.page,

        "objectID": "sqn_" + crmod,

        "extensions":
        {
            "studentResponse": std_answer,
            "correctResponse": mca,
        }

    }
    // console.log("Send Multi Data Question Called");
    // console.log("══════════════════════════════════════════════════════")				
    // console.log("pagequestions.page " + pagequestions.page);				
    // console.log("studentResponse " + pagequestions.extensions.studentResponse);
    // console.log("correctResponse " + pagequestions.extensions.correctResponse);
    // //console.log("std_answer =======> " + Object.values(std_answer));


    let qRecord = allPgQue[course.view.state.page][qNum];
    qRecord.answer = 1;
    qRecord.choice = std_answer;

    allPgQue[course.view.state.page][qNum] = qRecord;

    if (isXAPI) {
        checkPageComplete();

        // console.log("══════════════════════════════════════════════════════")
        // console.log("pgQueArray["+curNumSel+"]: " + (pgQueArray[curNumSel].choice))
        // console.log("══════════════════════════════════════════════════════")




        LRSSend(pagequestions);
        bSetState();
    }
    else {
        checkPageComplete();
        bSetState();
    }

}
function show_Q_image(q_img_num) {


    var oImg = "images/" + Q_Image[q_img_num];
    open_image_modal(oImg)
}

// handles clicks of radio buttons
function answerClick(e) {
    let target = e.currentTarget;
    // get all children of parent node
    let children = slice(target.parentNode.querySelectorAll('.btn_w_image'));
    setChecked(target, false, children);
}

// handles keydowns for radio buttons
function answerKeyDown(e) {
    let target = e.currentTarget;
    let isRadio = target.getAttribute("role") == "radio" ? true : false;

    // get all children of parent node
    let children = slice(target.parentNode.querySelectorAll('.btn_w_image'));

    // use the keycode to decide what to do
    switch (e.key) {
        case " ":
            e.preventDefault();
            setChecked(target, true, children, e);
            break;

        case "ArrowUp":
        case "ArrowLeft":
            e.preventDefault();
            if (isRadio) movePrev(target, children);
            break;

        case "ArrowDown":
        case "ArrowRight":
            e.preventDefault();
            if (isRadio) moveNext(target, children);
            break;

        default:
            break;
    }
}

function setChecked(target, isKeyDown, children, event) {
    // get current checked status
    let cbStatus = target.getAttribute("aria-checked");
    // set boolean
    let tf = cbStatus == "true" ? true : false;

    // if radio, set all sibling elements to false
    if (target.getAttribute("role") == "radio") {
        // set all aria-checked attributes to false
        for (let child of children) {
            child.setAttribute("aria-checked", "false");
        }
    }

    // set target aria-checked attribute to true
    target.setAttribute("aria-checked", !tf);

    // Ff this is a keydown event, we need to call nQue function
    // There's already an onclick listener for nQue function.
    if (isKeyDown) {
        // nQue function paramters from the target
        let funcParam = target
            // get the onclick attribute
            .getAttribute("onclick")
            // use a regex to get the paramaters from the nQue function
            .replace(/answerClick\(event\);nQue\((.*?)\);/, "$1")
            // split paramters into array
            .split(",");
        // call nQue with those paramaters
        nQue(parseInt(funcParam[0]), funcParam[1] == "true", parseInt(funcParam[2]), parseInt(funcParam[3]), parseInt(funcParam[4]), event);
    }
}

// The default behavior of radiogroups is to automatically check the button if moving from one to the next. This is problematic for keyboard users in our use case. Moving to the next answer option would automatically select it and not give the user a chance to answer correctly on the first try. So instead, we just change the focused radio and DON'T set aria-checked to true or call nQue() until the user has explicitly hit the SPACE button
function moveNext(target, children) {
    // if on the last radio, move to first
    if (target === children[children.length - 1]) {
        children[0].focus();
        // otherwise move to next
    } else {
        children[children.indexOf(target) + 1].focus();
    }
}

function movePrev(target, children) {
    // if on the first radio, move to last
    if (target === children[0]) {
        children[children.length - 1].focus();
        // otherwise move to previous
    } else {
        children[children.indexOf(target) - 1].focus();
    }
}