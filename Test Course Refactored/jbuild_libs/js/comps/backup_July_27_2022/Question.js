//-------------------------------------------------------------------------------------------------------------	
//-------<( New Question Comp code begin )>-------											
//-------------------------------------------------------------------------------------------------------------												
    //c_comp_Array[c_ccnum] = c_div_maker;
    //comp_Array_test()
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// -------<(  Question Begin 02/24/2020 )>-------
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

function c_Question(c_questionData,c_ccnum)
{
        //alert("c_questionData: " + c_questionData + " | c_ccnum: " + c_ccnum);
        
        var Q_Recall = [];
        var Q_Choice = [];
        var Question_Type_Array = [];
        var c_ccnum_qText_Mover = [];
        var c_q_image = [];
        Question_Type_Array[c_ccnum] = c_questionData[0].Question_type;

//alert( Question_Type_Array[c_ccnum]);



c_div_maker = "";
//c_div_maker = c_div_maker + "<div class='col-lg-12 col-md-12 col-xs-12' id='sqn_" + c_ccnum + "' style='height:50px; background-color:#FBF6D9'>";

c_div_maker = c_div_maker + "<div class='col-lg-12 col-md-12 col-xs-12' id='sqn_" + c_ccnum + "' style='padding: 20px; margin-top:"+c_questionData[0].top_margin+";background-color: " + c_questionData[0].background_color + "; border-top-color:"+c_questionData[0].border_color+"; border-top-width:"+c_questionData[0].border_weight+"; border-top-style:"+c_questionData[0].border_style+"; border-bottom-color:"+c_questionData[0].border_color+"; border-bottom-width:"+c_questionData[0].border_weight+"; border-bottom-style:"+c_questionData[0].border_style+"; border-radius:"+c_questionData[0].border_radius+" '>";


//-------< What do you think / Let's Review >
if(c_questionData[0].image.length > 0)
{
//-------<( Added to check for portal or development )>-------
if(typeof moduleFolder !== "undefined")
{													//src='jbuild_libs/images/
c_div_maker = c_div_maker + "<div><img class='qstImg' src='jbuild_libs/images/" + c_questionData[0].image + "' alt=''/><br><br></div>";
}

if(typeof moduleFolder === "undefined")
{												//src='../../../jbuild_libs/images/
c_div_maker = c_div_maker + "<div><img class='qstImg' src='../../../jbuild_libs/images/" + c_questionData[0].image + "' alt='"+c_questionData[0].image_alt_text+"'/><br><br></div>";
}
//-------<( Added to check for portal or development )>-------		

}											


//c_ccnum_qText_Mover[c_ccnum] = c_ccnum_qText_Mover[c_ccnum] + "<jb1><li class='quest_char quest_list' style='text-align: "+ list_text_alignment +";'>"+ c_questionData[2].qList[queList].lstText +"</li></jb1>"; //</jb1>
                    
//-------< Paragraph Top Begin >
for(var qPara = 0; qPara < c_questionData[1].paragraph_top_text.length; qPara++)
{
if(c_questionData[1].paragraph_top_text[qPara].paragraph_top.length !== 0)
{
    
    //alert("No Zero"); class='jb_column1'
    c_div_maker = c_div_maker + "<div class='quest_char' style='text-align:"+c_questionData[2].qList[0].align_text+"'> <p class='jb1'>"+c_questionData[1].paragraph_top_text[qPara].paragraph_top+"</p></div>";
    //qpara_text
    
    if( (qPara + 1)  !== c_questionData[1].paragraph_top_text.length)
        {
            c_div_maker = c_div_maker + "<br>";
        }
    
    
}
}

//-------< Paragraph Top End >										
c_div_maker = c_div_maker + "<div id='qold_"+c_ccnum+"' class='col-lg-12 col-md-12 col-xs-12' style='display: block; height: auto'></div>";
                        
c_div_maker = c_div_maker + "<div id='qnew_"+c_ccnum+"' class='col-lg-12 col-md-12 col-xs-12' style='display: none; height: auto'>";
                        
c_div_maker = c_div_maker + "<div id='qleft_"+c_ccnum+"' class='col-lg-6 col-md-6 col-xs-12' style='height: auto'>";
                    
c_div_maker = c_div_maker + "</div>";												
                        
c_div_maker = c_div_maker + "<div id='qright_"+c_ccnum+"' class='col-lg-6 col-md-6 col-xs-12' style='height: auto'>";
                        
c_div_maker = c_div_maker + "</div>";												
                        
c_div_maker = c_div_maker + "</div>";

//-------<(  Question Begin  )>-------   qstn_text
                        
////alert(": c_questionData[0].question_image_placement: " + c_questionData[0].question_image_placement);										
//alert("typeof c_questionData[0].question_image_placement: " + typeof c_questionData[0].question_image_placement);  

//alert(c_questionData[0].question_image_placement);
//alert(c_questionData[0].question_image);
c_q_image[c_ccnum] = "<div><img class='questImage' src='images/" + c_questionData[0].question_image + "' alt='"+c_questionData[0].question_image_alt_tag+"'/></div>";




if(typeof c_questionData[0].question_image_placement === "string")
{										

    c_div_maker = c_div_maker + "<div class='col-lg-12 col-md-12 col-xs-12'>";

       if(c_questionData[0].question_image_placement !== "none")
                {
                    if(c_questionData[0].question_image_placement === "top")
                        {
                             c_div_maker = c_div_maker + "<div class='quest_char'>" + c_q_image[c_ccnum] + "</div>";
                        } 
                }
    
           

    c_div_maker = c_div_maker + "<div class='quest_char' style='margin-top: 20px; margin-bottom: 20px; text-align:"+c_questionData[2].qList[0].align_text+"'>";
    c_div_maker = c_div_maker + "<p class='jb2'>"+c_questionData[0].question+"</p>";
    c_div_maker = c_div_maker + "</div>";

        if(c_questionData[0].question_image_placement !== "none")
        {
            if(c_questionData[0].question_image_placement === "bottom")
                {
                    c_div_maker = c_div_maker + "<div class='quest_char'>" + c_q_image[c_ccnum] + "</div>";
                } 
        }

    c_div_maker = c_div_maker + "</div>";		


}

//alert(c_questionData[2].qList.length);

//alert(c_questionData[2].qList[0].align_text);

//align_text

for(var c_q_list = 1; c_q_list < c_questionData[2].qList.length;c_q_list++)
{
    //alert(c_questionData[2].qList[c_q_list].lstText);

    c_div_maker = c_div_maker + "<p class='jb1 quest_char'><li class='quest_char quest_list' style='text-align: "+ c_questionData[2].qList[0].align_text +";'>"+ c_questionData[2].qList[c_q_list].lstText +"</li></p>"; //</jb1>	

}

//alert( c_questionData[3].paragraph_bottom_text[0].paragraph_bottom );

for(var c_q_para_b = 0; c_q_para_b < c_questionData[3].paragraph_bottom_text.length ;c_q_para_b++)
{
    c_div_maker = c_div_maker + "<div class='quest_char' style='text-align:left'><p class='jb1'>" + c_questionData[3].paragraph_bottom_text[c_q_para_b].paragraph_bottom + "</p></div>";
        //alert( c_questionData[3].paragraph_bottom_text[c_q_para_b].paragraph_bottom );
}


c_div_maker = c_div_maker + "<div class='quest_char' style='margin-top:50px; text-align:left'>";

for(var c_qAns = 0; c_qAns < c_questionData[4].question_answers.length; c_qAns++)
{
    //c_div_maker = c_div_maker + "<form id='fbqs_"+c_ccnum+"_an_"+c_qAns+"' class='qSpacing jb_column1'><p class='jb1'>" + c_questionData[4].question_answers[c_qAns].q_answer + "</p></form>";
    c_div_maker = c_div_maker + "<form id='fbqs_"+c_ccnum +"_an_"+c_qAns+"' class='qSpacing jb_column1'>";
    c_div_maker = c_div_maker + "<p class='jb1'>" + c_questionData[4].question_answers[c_qAns].q_answer + "</p>";



    c_div_maker = c_div_maker + "</form>";
//type='checkbox' id='cbck_"+c_ccnum+"_"+qAns+"'


    //c_div_maker = c_div_maker + "<input onclick='nQue("+c_questionData[0].Question_type+","+c_questionData[4].question_answers[qAns].true_false+","+c_ccnum+","+qAns+","+QA_num+");' type='checkbox' id='cbck_"+c_ccnum+"_"+qAns+"'>";		//style='cursor:pointer;'


   // c_div_maker = c_div_maker + "<p class='jb1'>" + c_questionData[4].question_answers[c_qAns].q_answer + "</p>";
    
    
    //alert(c_questionData[4].question_answers[c_qAns].q_answer);

    //alert(c_questionData[4].question_answers[c_qAns].true_false);

    //alert(c_questionData[4].question_answers[c_qAns].q_feedback);


/*

tf_new_array[qAns] = c_questionData[4].question_answers[qAns].true_false;
if(typeof c_questionData[4].question_answers[qAns].q_feedback !== "undefined")
{
////alert("c_questionData[4].question_answers[qAns].q_feedback: " + c_questionData[4].question_answers[qAns].q_feedback);

if(c_questionData[4].question_answers[qAns].q_feedback.length > 0)
{
    q_feedback_array[qAns] = c_questionData[4].question_answers[qAns].q_feedback;
}


*/
}

c_div_maker = c_div_maker + "</div>";



//-------------------------------------
c_div_maker = c_div_maker + "</div>";

c_comp_Array[c_ccnum] = c_div_maker;
comp_Array_test()
}

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// -------<(  Question End 02/24/2020 )>-------
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
										
