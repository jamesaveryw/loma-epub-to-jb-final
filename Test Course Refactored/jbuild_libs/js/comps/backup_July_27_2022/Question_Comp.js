
                var Q_Setup_Array = [];
                var Q_Para_Top_Array = [];
                var Q_List_Settings = [];
                var Q_List_Settings_List_Setup = [];
                var Q_List_Settings_Array = [];
                var Q_lstText_Array = [];
                var Q_Para_Bottom_Array = [];
                var Q_Answer_Array = [];
                var Q_Answer_Totals_Array = [];
                var Q_Feedback_Array = [];
                var Q_Answer_Key = [[],[]];
                var Q_Multi_Answers = [[],[]];
                var Q_Multi_Track = [];
                var Q_Muli_Answer_Array = [];
                var Q_Multi_Check_Array = [];
                var Q_Alt_Tag;
                var Q_Alt_Tag_Array = [];
                var Q_Image = [];

function Question_Comp(c_questionData,c_ccnum)
{
        
					c_div_maker = "";
//==============================================================================================================
               Q_Setup_Array = Object.values(c_questionData[0]);
//==============================================================================================================
               Q_Para_Top_Array = Object.values(c_questionData[1].paragraph_top_text);
//==============================================================================================================
                Q_List_Settings = Object.values(c_questionData[2].qList);

                Q_List_Settings_Array = Q_List_Settings;
    
              Q_List_Settings_List_Setup = Object.values(Q_List_Settings[0])
              Q_lstText_Array = Object.values(Q_List_Settings).splice(1,(Q_List_Settings.length - 1))
//==============================================================================================================

                Q_Para_Bottom_Array = Object.values(c_questionData[3].paragraph_bottom_text);
//==============================================================================================================
                Q_Answer_Array = Object.values(c_questionData[4].question_answers);

                Q_Answer_Totals_Array = Object.values(Q_Answer_Array)

    Q_Answer_Key[c_ccnum] = Q_Answer_Array;

                        for(var qa = 0; qa < Q_Answer_Array.length; qa++)
                                {
                                    Q_Multi_Track[qa] = "false";
                                }
                    Q_Multi_Answers[c_ccnum] = Q_Multi_Track;
                        Q_Multi_Track = [];
//==============================================================================================================
                
                Q_Feedback_Array[c_ccnum] = Object.values(c_questionData[5])    
//==============================================================================================================                  

c_div_maker = c_div_maker + "<div class='col-lg-12 col-md-12 col-xs-12' id='sqn_" + c_ccnum + "' style='background-color:"+Q_Setup_Array[3]+";margin-top:"+Q_Setup_Array[10]+";border-style:"+Q_Setup_Array[6]+" none "+Q_Setup_Array[6]+" none; border-width: "+Q_Setup_Array[5]+";border-color:"+Q_Setup_Array[4]+";border-radius:"+Q_Setup_Array[7]+";'>";

if(Q_Setup_Array[0] === "1")
        {
            c_div_maker = c_div_maker + "<p class='sr-only'>Single answer question</p>"; 
        }
if(Q_Setup_Array[0] === "2")
        {
            c_div_maker = c_div_maker + "<p class='sr-only'>Multiple answer question</p>"; 
        }


if(Q_Setup_Array[11].length > 4)
        {
           c_div_maker = c_div_maker + "<img style='margin-top:20px' class='qstImg' src='"+comp_images+""+Q_Setup_Array[11]+"' alt=''>"; 
        }


    //-------< Paragraph Top Begin >

    if(Q_Para_Top_Array.length > 1)
        {
            for(var qPara = 0; qPara < Q_Para_Top_Array.length; qPara++)
                {
                    if(Q_Para_Top_Array[0].paragraph_top.length > 0)
                        {
                            c_div_maker = c_div_maker + "<div class='quest_char' style='text-align:"+Q_List_Settings_List_Setup[1]+"'> <jb1 class='sr-only'>"+Q_Para_Top_Array[qPara].paragraph_top+"</jb1></div>"; 
                        }
                }

                c_div_maker = c_div_maker + "<br>";
        }


//-------< Paragraph Top End >	

//-------< Image Begin >
    if(Q_Setup_Array[14].length > 4)
    {
        //Q_Setup_Array[16]

        if(Q_Setup_Array[16].length > 125)
            {
                Q_Alt_Tag = "Select Image Description Button for more information";
                Q_Alt_Tag_Array[c_ccnum] = Q_Setup_Array[16];
            }
             else
            {
                Q_Alt_Tag = Q_Setup_Array[16];
            }


//Q_Alt_Tag

        Q_Image[c_ccnum] = Q_Setup_Array[14];

        c_div_maker = c_div_maker + "<div id='qImg_"+c_ccnum+"'><img class='qstImg' src='"+image_locale+"" + Q_Setup_Array[14] + "' alt='"+Q_Alt_Tag+"' onclick='show_Q_image("+c_ccnum+")'/><br><br></div>";

        if(Q_Setup_Array[16].length > 125)
        {
            c_div_maker = c_div_maker + "<div style='padding-bottom:20px'><button id='mlt_btn' class='btn btn-primary btn-sm' onclick='alt_tag_image("+c_ccnum+",0,4)'>Image Description</button></div>";
        }


    }
//-------< Image End > aria-label='Question'


c_div_maker = c_div_maker + "<div id='QueNum_"+c_ccnum+"' style='text-align:"+Q_Setup_Array[8]+"' class='quest_char' tabindex='0'><jb1>"+Q_Setup_Array[13]+"</jb1></div>";


    //-------<(  List Begin  )>-------	
                                                

     if(Q_List_Settings_Array[0].qList_on_off === "on")		  									
        {


switch(Q_List_Settings_Array[0].Type_of_List)
            {
                case "ul":

                        var lst_type = Q_List_Settings_Array[0].ul_type;
                break;

                case "ol":


                        if(Q_List_Settings_Array[0].ol_type === "A"){var lst_type = "upper-alpha"}
                        if(Q_List_Settings_Array[0].ol_type === "a"){var lst_type = "lower-alpha"}

                        if(Q_List_Settings_Array[0].ol_type === "I"){var lst_type = "upper-roman"}
                        if(Q_List_Settings_Array[0].ol_type === "i"){var lst_type = "lower-roman"}

                break;
            }


            c_div_maker = c_div_maker + "<"+Q_List_Settings_Array[0].Type_of_List+" style='list-style-type:"+lst_type+"'>"; //"+lst_type+"



            for(var qList_nun = 0; qList_nun < Q_lstText_Array.length; qList_nun++)
                {


        c_div_maker = c_div_maker + "<li class='quest_char quest_list' style='text-align:"+Q_List_Settings_Array[0].align_text+"' tabindex='0'><h4>"+Q_lstText_Array[qList_nun].lstText+"</h4></li>"; 


                    
                }

            c_div_maker = c_div_maker + "</"+Q_List_Settings_Array[0].Type_of_List+">";
        }
                                            
    //-------<(  List End  )>-------
    //-------< Paragraph bottom Begin >

    if(Q_Para_Bottom_Array.length > 1)
        {
            for(var qPara = 0; qPara < Q_Para_Bottom_Array.length; qPara++)
                {
                    if(Q_Para_Bottom_Array[0].paragraph_bottom.length > 0)
                        {
                            c_div_maker = c_div_maker + "<div class='quest_char' style='text-align:"+Q_List_Settings_List_Setup[1]+"'> <jb1>"+Q_Para_Bottom_Array[qPara].paragraph_bottom+"</jb1></div>"; 
                        }
                }

                c_div_maker = c_div_maker + "<br>";
        }

c_div_maker = c_div_maker + "<div class='col-lg-12 col-md-12 col-xs-12' style='margin-top:10px;'>";


c_div_maker = c_div_maker + "<div id='fbqs_"+c_ccnum+"' class='qSpacing c_jb_column1'><label class='c_container' style='font-weight: normal !important; text-align:left'>";

        for(var qAns = 0; qAns < Q_Answer_Array.length; qAns++)
            {
               
                   c_div_maker = c_div_maker + "<button aria-label='"+Q_Answer_Array[qAns].q_answer+"' class='btn_w_image' onclick='nQue("+Q_Setup_Array[0]+","+Q_Answer_Array[qAns].true_false+","+c_ccnum+","+qAns+",0);' type='c_checkbox' id='cbck_"+c_ccnum+"_"+qAns+"'><label class='c_container' style='font-weight: normal !important; text-align:left'>";
                        c_div_maker = c_div_maker + "<jb1 id='qs_"+c_ccnum+"_an_"+qAns+"' class='c_qtext'>"+Q_Answer_Array[qAns].q_answer+"</jb1>";
                                                                                // input causes the lag between tab clicks
    c_div_maker = c_div_maker + "<div style='display:none; color:#000000' id='ci_fb_"+c_ccnum+"_"+qAns+"' class='qtext'></div>";
 

                                
                                    if(Q_Setup_Array[0] === "1")
                                            {
                                                c_div_maker = c_div_maker + "<span id='cb_"+c_ccnum+"_"+qAns+"' class='checkmark'></span>";
                                            }
                                    if(Q_Setup_Array[0] === "2")
                                            {
                                                c_div_maker = c_div_maker + "<span id='cb_"+c_ccnum+"_"+qAns+"' class='checkmark_square'></span>";

                                            }
                                
                   c_div_maker = c_div_maker + "</label></button><br>";

                   

            }

c_div_maker = c_div_maker + "</div>"; 

c_div_maker = c_div_maker + "<div role='alert' id='q_feedback_"+c_ccnum+"' class='col-lg-12 col-md-12 col-xs-12' style='display: none; margin-top:20px; margin-bottom: 20px; height:auto; padding: 10px; max-width: 75ch; line-height: 1.5;'><div><"+Q_Setup_Array[2]+" id='q_feedback_texthead_"+c_ccnum+"'></div><br></"+Q_Setup_Array[2]+"><"+Q_Setup_Array[2]+" id='q_feedback_text_"+c_ccnum+"'></"+Q_Setup_Array[2]+"></div>";

c_div_maker = c_div_maker + "</div>";

if(Q_Setup_Array[0] === "2")
{

   c_div_maker = c_div_maker + "<div class='col-lg-12 col-md-12 col-xs-12' align='center' style='margin-top:10px;padding:10px'><button onclick='Question_Comp_Submit("+c_ccnum+");' class='btn btn-primary disabled' id='sub_"+c_ccnum+"'>submit</button></div>";

}

c_div_maker = c_div_maker + "</div>";


   
    c_comp_Array[c_ccnum] = c_div_maker;
    comp_Array_test()  
    c_div_maker = "";                                           
    
    //-------------------------------------------------------------------------------------------------------------	
    //-------<( New Question Comp code end )>-------											
    //-------------------------------------------------------------------------------------------------------------											
    
}

function nQue(qtyp,cqtn,curComp,qestA,curQnum)
{

       switch(qtyp)
        {
            case 1:
                                  
                        switch(cqtn)
                            {
                                case true:
                                       document.getElementById("cb_" + curComp + "_" + qestA).className = "c_checkmark";
                                       document.getElementById("q_feedback_"+ curComp).className = "q_cor_border";
                                       document.getElementById("q_feedback_texthead_" + curComp).className = "q_txthead_c";
                                       document.getElementById("q_feedback_texthead_"+curComp).innerHTML = Q_Feedback_Array[curComp][0];
                                       document.getElementById("q_feedback_text_"+curComp).innerHTML = Q_Feedback_Array[curComp][1];
                                       document.getElementById("q_feedback_"+ curComp).style.display = "block";
                                break;

                                case false:
                                      document.getElementById("cb_" + curComp + "_" + qestA).className = "i_checkmark";
                                      document.getElementById("q_feedback_"+ curComp).className = "q_inc_border";
                                      document.getElementById("q_feedback_texthead_" + curComp).className = "q_txthead_i";
                                      document.getElementById("q_feedback_texthead_"+curComp).innerHTML = Q_Feedback_Array[curComp][2];
                                      document.getElementById("q_feedback_text_"+curComp).innerHTML = Q_Feedback_Array[curComp][3];
                                      document.getElementById("q_feedback_"+ curComp).style.display = "block";

                                            for(var shwCor = 0; shwCor < Q_Answer_Key[curComp].length; shwCor++)
                                                {
                                                   if(Q_Answer_Key[curComp][shwCor].true_false === "true")
                                                        {
                                                            document.getElementById("qs_"+curComp+"_an_"+shwCor).style.border = "2px solid #85be00"; 
                                                        }
                                                }
                                    
                                break;
                            }

            break;

            case 2:

                        switch(document.getElementById("cb_" + curComp + "_" + qestA).className)
                            {
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



        document.getElementById("sqn_"+ curComp).scrollIntoView(false);


}

function Question_Comp_Submit(mqnum)
{
         
        var stAns = Q_Multi_Answers[mqnum].toString();

    var ckLst = [];
        for(jb_ak = 0; jb_ak < Q_Answer_Key[mqnum].length; jb_ak++)
                {
                    ckLst[jb_ak] = Q_Answer_Key[mqnum][jb_ak].true_false;

                }
                var anKey = ckLst.toString();

                
    
    document.getElementById("q_feedback_"+ mqnum).style.display = "none";


            if(stAns === anKey)
                {
                    document.getElementById("q_feedback_"+ mqnum).className = "q_cor_border";
                    document.getElementById("q_feedback_texthead_" + mqnum).className = "q_txthead_c";
                    document.getElementById("q_feedback_texthead_"+mqnum).innerHTML = Q_Feedback_Array[mqnum][0];
                    document.getElementById("q_feedback_text_"+mqnum).innerHTML = Q_Feedback_Array[mqnum][1];
                    document.getElementById("q_feedback_"+ mqnum).style.display = "block";
                }

            if(stAns !== anKey)
                {
                    document.getElementById("q_feedback_"+ mqnum).className = "q_inc_border";
                    document.getElementById("q_feedback_texthead_" + mqnum).className = "q_txthead_i";
                    document.getElementById("q_feedback_texthead_"+mqnum).innerHTML = Q_Feedback_Array[mqnum][2];
                    document.getElementById("q_feedback_text_"+mqnum).innerHTML = Q_Feedback_Array[mqnum][3];
                    document.getElementById("q_feedback_"+ mqnum).style.display = "block";



                    for(var shwCor = 0; shwCor < Q_Answer_Key[mqnum].length; shwCor++)
                    {

                       
                        if(Q_Answer_Key[mqnum][shwCor].true_false === "true")
                            {
                                document.getElementById("qs_"+mqnum+"_an_"+shwCor).style.border = "2px solid #85be00"; 
                            }
                        
                    }
                }   
                document.getElementById("sqn_"+ mqnum).scrollIntoView(false);
}

function show_Q_image(q_img_num)
        {


           var oImg = "images/" + Q_Image[q_img_num];
           open_image_modal(oImg)
        }