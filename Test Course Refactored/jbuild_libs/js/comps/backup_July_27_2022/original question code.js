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


if(typeof c_questionData[0].question_image_placement === "string")
{										

    c_div_maker = c_div_maker + "<div class='col-lg-12 col-md-12 col-xs-12'>";

    c_div_maker = c_div_maker + "<div class='quest_char' style='margin-top: 20px; margin-bottom: 20px; text-align:"+c_questionData[2].qList[0].align_text+"'>";
    c_div_maker = c_div_maker + "<p class='jb2'>"+c_questionData[0].question+"</p>";
    c_div_maker = c_div_maker + "</div>";

    c_div_maker = c_div_maker + "</div>";		


}



//-------------------------------------
c_div_maker = c_div_maker + "</div>";
//c_div_maker = c_div_maker + "<div class='col-lg-12 col-md-12 col-xs-12' id='sqn_" + c_ccnum + "' style='padding: 20px; margin-top:"+c_questionData[0].top_margin+";background-color: " + c_questionData[0].background_color + "; border-top-color:"+c_questionData[0].border_color+"; border-top-width:"+c_questionData[0].border_weight+"; border-top-style:"+c_questionData[0].border_style+"; border-bottom-color:"+c_questionData[0].border_color+"; border-bottom-width:"+c_questionData[0].border_weight+"; border-bottom-style:"+c_questionData[0].border_style+"; border-radius:"+c_questionData[0].border_radius+" '>";


//c_div_maker = c_div_maker + "</div>";
//-------< What do you think / Let's Review >
//if(c_questionData[0].image.length > 0)



//alert(c_questionData[0].question);

//alert(c_questionData.length);
c_comp_Array[c_ccnum] = c_div_maker;

//alert(c_comp_Array[c_ccnum]);
comp_Array_test()
}

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// -------<(  Question End 02/24/2020 )>-------
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-






    //alert("Question_Comp was called + c_ccnum: " + c_ccnum);					
    Q_Recall = [];
    Q_Choice = [];
    //Q_Square = [];					

    if(typeof courseType !== "undefined")
        {

        if(courseType.indexOf("shortcourseA") !== -1)
            {
                
                if( allPgQue[np_num][Q_count].answer === 1)
                    {

Q_Recall[c_ccnum] = ("cb_" + c_ccnum + "_" + allPgQue[np_num][Q_count].choice);
Q_Choice[c_ccnum] = (allPgQue[np_num][Q_count].choice);						

                        
                    }

            }
            
        }

        Q_count = (Q_count + 1);

        if(Q_count === 1)
            {
                QA_num = null;
            }
                        
    
                        
        var c_questionData = sSelections[c_ccnum][snglBld[c_ccnum]];
        
        
        tf_new_array = [];
        Question_Type_Array[c_ccnum] = c_questionData[0].Question_type;	
            
        //alert(c_ccnum + " Question : " + c_questionData[0].question);				
                        
//\\//snippet_roadmap(c_ccnum,"Question_Comp",(c_questionData[0].question));									

//alert("question_image_placement: " + c_questionData[0].question_image_placement);							
                        
                        
if(typeof c_questionData[0].question_image === "undefined")
{
    
    
    ADA_check_Array[c_ccnum] = "Please update question number " + c_ccnum + " to the new Question snippet"
}
                        
if(typeof c_questionData[0].question_image !== "undefined")
{
    //alert(c_questionData[0].question_image);
}
                        
                        
if(snglBld[c_ccnum] === "Question_Comp")
    {
        Question_Total_Array[c_ccnum] = c_questionData[0].extra_image_placement;

        
        if(QA_num === null)
            {
                QA_num = 0;

            }
                else
            {
                QA_num = (QA_num + 1);
            }

        
    }
                    
        
//-------< Start > class='jb_column1'   Alter the border here

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

                    
//-------< Paragraph Top Begin >
for(var qPara = 0; qPara < c_questionData[1].paragraph_top_text.length; qPara++)
{
if(c_questionData[1].paragraph_top_text[qPara].paragraph_top.length !== 0)
{
    //alert("No Zero"); class='jb_column1'
    c_div_maker = c_div_maker + "<div class='quest_char' style='text-align:"+c_questionData[2].qList[0].align_text+"'> <jb1>"+c_questionData[1].paragraph_top_text[qPara].paragraph_top+"</jb1></div>";
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

//class='qtext'	 quest_char								
//////////////////////////////////////////////////////////////////////////////////////////////////////											
//////////////////////////////////////////////////////////////////////////////////////////////////////												
//-------<(  Question Begin  )>-------   qstn_text
                        
////alert(": c_questionData[0].question_image_placement: " + c_questionData[0].question_image_placement);										
                                
if(typeof c_questionData[0].question_image_placement === "undefined")
{										

c_ccnum_qText_Mover[c_ccnum] = "<div class='col-lg-12 col-md-12 col-xs-12'>";

c_ccnum_qText_Mover[c_ccnum] = c_ccnum_qText_Mover[c_ccnum] + "<div class='quest_char' style='margin-top: 20px; margin-bottom: 20px; text-align:"+c_questionData[2].qList[0].align_text+"'>";
    c_ccnum_qText_Mover[c_ccnum] = c_ccnum_qText_Mover[c_ccnum] + "<jb1>"+c_questionData[0].question+"</jb1>";
    c_ccnum_qText_Mover[c_ccnum] = c_ccnum_qText_Mover[c_ccnum] + "</div>";

c_ccnum_qText_Mover[c_ccnum] = c_ccnum_qText_Mover[c_ccnum] + "</div>";		


}

                        
                        
if(typeof c_questionData[0].question_image_placement === "string")
{

if(c_questionData[0].question_image_placement === "none") 
{										
c_ccnum_qText_Mover[c_ccnum] = "<div class='col-lg-12 col-md-12 col-xs-12'>";

c_ccnum_qText_Mover[c_ccnum] = c_ccnum_qText_Mover[c_ccnum] + "<div class='quest_char' style='margin-top: 20px; margin-bottom: 20px; text-align:"+c_questionData[2].qList[0].align_text+"'>";
    c_ccnum_qText_Mover[c_ccnum] = c_ccnum_qText_Mover[c_ccnum] + "<jb1>"+c_questionData[0].question+"</jb1>";
    c_ccnum_qText_Mover[c_ccnum] = c_ccnum_qText_Mover[c_ccnum] + "</div>";

c_ccnum_qText_Mover[c_ccnum] = c_ccnum_qText_Mover[c_ccnum] + "</div>";

}


if(c_questionData[0].question_image_alt_tag.length === 0)
{
if(c_questionData[0].question_image_placement !== "none")
{
    ADA_check_Array[c_ccnum] = "Add Alt tag for question: \n" + c_questionData[0].question;
}


}

if(c_questionData[0].question_image_placement === "top")
{
if(c_questionData[0].question_image_alt_tag.length <= 125)
{

    c_ccnum_qText_Mover[c_ccnum] = "<div class='col-lg-12 col-md-12 col-xs-12'>";
c_ccnum_qText_Mover[c_ccnum] = c_ccnum_qText_Mover[c_ccnum] + "<img class='questImage' src='"+img_loc+"" + c_questionData[0].question_image + "' alt='"+c_questionData[0].question_image_alt_tag+"'/>";
    c_ccnum_qText_Mover[c_ccnum] = c_ccnum_qText_Mover[c_ccnum] + "<div class='quest_char' style='margin-top: 20px; margin-bottom: 20px; text-align:"+c_questionData[2].qList[0].align_text+"'>";
    c_ccnum_qText_Mover[c_ccnum] = c_ccnum_qText_Mover[c_ccnum] + "<jb1>"+c_questionData[0].question+"</jb1>";
    c_ccnum_qText_Mover[c_ccnum] = c_ccnum_qText_Mover[c_ccnum] + "</div>";
    c_ccnum_qText_Mover[c_ccnum] = c_ccnum_qText_Mover[c_ccnum] + "</div>";
    
}

if(c_questionData[0].question_image_alt_tag.length > 125)
{
    Alt_Tag_Image_Data[c_ccnum] = c_questionData[0].question_image_alt_tag; 
    Alt_Tag_Image_name[c_ccnum] = c_questionData[0].question_image;
    
    c_ccnum_qText_Mover[c_ccnum] = "<div class='col-lg-12 col-md-12 col-xs-12'>";
c_ccnum_qText_Mover[c_ccnum] = c_ccnum_qText_Mover[c_ccnum] + "<img class='questImage' src='"+img_loc+"" + c_questionData[0].question_image + "' alt='Select image for more information' role='button' onclick='alt_tag_lib("+c_ccnum+")'>";
    c_ccnum_qText_Mover[c_ccnum] = c_ccnum_qText_Mover[c_ccnum] + "<div class='quest_char' style='margin-top: 20px; margin-bottom: 20px; text-align:"+c_questionData[2].qList[0].align_text+"'>";
    c_ccnum_qText_Mover[c_ccnum] = c_ccnum_qText_Mover[c_ccnum] + "<jb1>"+c_questionData[0].question+"</jb1>";
    c_ccnum_qText_Mover[c_ccnum] = c_ccnum_qText_Mover[c_ccnum] + "</div>";
    c_ccnum_qText_Mover[c_ccnum] = c_ccnum_qText_Mover[c_ccnum] + "</div>";
    

}

}

if(c_questionData[0].question_image_placement === "bottom")
{
if(c_questionData[0].question_image_alt_tag.length <= 125)
{				
    
    c_ccnum_qText_Mover[c_ccnum] = "<div class='col-lg-12 col-md-12 col-xs-12'>";
    

    c_ccnum_qText_Mover[c_ccnum] = c_ccnum_qText_Mover[c_ccnum] + "<div class='quest_char' style='margin-top: 20px; margin-bottom: 20px; text-align:"+c_questionData[2].qList[0].align_text+"'>";
    c_ccnum_qText_Mover[c_ccnum] = c_ccnum_qText_Mover[c_ccnum] + "<jb1>"+c_questionData[0].question+"</jb1>";
    c_ccnum_qText_Mover[c_ccnum] = c_ccnum_qText_Mover[c_ccnum] + "</div>";
    
    c_ccnum_qText_Mover[c_ccnum] = c_ccnum_qText_Mover[c_ccnum] + "<img class='questImage' src='"+img_loc+"" + c_questionData[0].question_image + "' alt='"+c_questionData[0].question_image_alt_tag+"'/>";
    
    
    c_ccnum_qText_Mover[c_ccnum] = c_ccnum_qText_Mover[c_ccnum] + "</div>";
    

}

if(c_questionData[0].question_image_alt_tag.length > 125)
{
    Alt_Tag_Image_Data[c_ccnum] = c_questionData[0].question_image_alt_tag;
    Alt_Tag_Image_name[c_ccnum] = c_questionData[0].question_image;
    
    c_ccnum_qText_Mover[c_ccnum] = "<div class='col-lg-12 col-md-12 col-xs-12'>";
    

    c_ccnum_qText_Mover[c_ccnum] = c_ccnum_qText_Mover[c_ccnum] + "<div class='quest_char' style='margin-top: 20px; margin-bottom: 20px; text-align:"+c_questionData[2].qList[0].align_text+"'>";
    c_ccnum_qText_Mover[c_ccnum] = c_ccnum_qText_Mover[c_ccnum] + "<jb1>"+c_questionData[0].question+"</jb1>";
    c_ccnum_qText_Mover[c_ccnum] = c_ccnum_qText_Mover[c_ccnum] + "</div>";
    
    c_ccnum_qText_Mover[c_ccnum] = c_ccnum_qText_Mover[c_ccnum] + "<img class='questImage' src='"+img_loc+"" + c_questionData[0].question_image + "' alt='Select image for more information' role='button' onclick='alt_tag_lib("+c_ccnum+")'>";
    
    
    c_ccnum_qText_Mover[c_ccnum] = c_ccnum_qText_Mover[c_ccnum] + "</div>";						
    
    
}

}			
}
                

//-------<(  Question End  )>-------											
                        
                        
//-------<(  List Begin  )>-------	
                        
                        
if(c_questionData[2].qList[0].qList_on_off === "on")											
{

c_ccnum_qText_Mover[c_ccnum] = c_ccnum_qText_Mover[c_ccnum] + "<"+ c_questionData[2].qList[0].Type_of_List +" type='"+c_questionData[2].qList[0].ol_type+"' style='list-style-type:"+c_questionData[2].qList[0].ul_type+"'>";		

var list_num = (c_questionData[2].qList.length);
var list_text_alignment = c_questionData[2].qList[0].align_text;
for(var queList = 1; queList < list_num; queList++)
{															//margin-left:10px;
c_ccnum_qText_Mover[c_ccnum] = c_ccnum_qText_Mover[c_ccnum] + "<jb1><li class='quest_char quest_list' style='text-align: "+ list_text_alignment +";'>"+ c_questionData[2].qList[queList].lstText +"</li></jb1>"; //</jb1>					

}

c_ccnum_qText_Mover[c_ccnum] = c_ccnum_qText_Mover[c_ccnum] + "</"+ c_questionData[2].qList[0].Type_of_List +">"; 


}
                        
                        
                        
//-------<(  List End  )>-------											

//-------< Paragraph Bottom Begin >	  quest_char  class='quest_char'
for(var qParab = 0; qParab < c_questionData[3].paragraph_bottom_text.length; qParab++)
{
c_ccnum_qText_Mover[c_ccnum] = c_ccnum_qText_Mover[c_ccnum] + "<div class='col-lg-12 col-md-12 col-xs-12'>";
if(c_questionData[3].paragraph_bottom_text[qParab].paragraph_bottom.length !== 0)											
{
c_ccnum_qText_Mover[c_ccnum] = c_ccnum_qText_Mover[c_ccnum] + "<div class='quest_char' style='text-align:"+c_questionData[2].qList[0].align_text+"'><jb1>"+c_questionData[3].paragraph_bottom_text[qParab].paragraph_bottom+"</jb1></div>";
//qpara_text
if( (qParab + 1)  !== c_questionData[3].paragraph_bottom_text.length)
        {
            c_ccnum_qText_Mover[c_ccnum] = c_ccnum_qText_Mover[c_ccnum] + "<br>";
        }
}
c_ccnum_qText_Mover[c_ccnum] = c_ccnum_qText_Mover[c_ccnum] + "</div>";
}											
//-------< Paragraph Bottom End >											
                        
                    
c_div_maker = c_div_maker + c_ccnum_qText_Mover[c_ccnum];											
//////////////////////////////////////////////////////////////////////////////////////////////////////											
//////////////////////////////////////////////////////////////////////////////////////////////////////												
                        
//-------< Question Answers Begin >	
                        
c_div_maker = c_div_maker + "<div class='col-lg-12 col-md-12 col-xs-12' style='margin-top:10px;'>";
                    

                    
                        
if(typeof Q_Recall[c_ccnum] !== "undefined")
{
                        

}
                                            
                        
                        
                        
for(var qAns = 0; qAns < c_questionData[4].question_answers.length; qAns++)
{


tf_new_array[qAns] = c_questionData[4].question_answers[qAns].true_false;
if(typeof c_questionData[4].question_answers[qAns].q_feedback !== "undefined")
{
////alert("c_questionData[4].question_answers[qAns].q_feedback: " + c_questionData[4].question_answers[qAns].q_feedback);

if(c_questionData[4].question_answers[qAns].q_feedback.length > 0)
{
    q_feedback_array[qAns] = c_questionData[4].question_answers[qAns].q_feedback;
}



}






c_div_maker = c_div_maker + "<form id='fbqs_"+c_ccnum+"_an_"+qAns+"' class='qSpacing jb_column1'>";

if(typeof Q_Recall[c_ccnum] === "undefined")
{
c_div_maker = c_div_maker + "<label class='container' style='font-weight: normal !important; text-align:"+c_questionData[2].qList[0].align_text+"'><jb1 id='qs_"+c_ccnum+"_an_"+qAns+"' class='qtext'>"+c_questionData[4].question_answers[qAns].q_answer+"</jb1>";
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////		

//alert(c_questionData[0].text_color);

c_div_maker = c_div_maker + "<div style='display:none;color:"+c_questionData[0].text_color+"' id='ci_fb_"+c_ccnum+"_"+qAns+"' class='qtext'></div>"; // this seems to work better

}

if(typeof Q_Recall[c_ccnum] !== "undefined")
{


    
c_div_maker = c_div_maker + "<label class='container' style='font-weight: normal !important; text-align:"+c_questionData[2].qList[0].align_text+"'><jb1 id='qs_"+c_ccnum+"_an_"+qAns+"' class='qtext'>"+c_questionData[4].question_answers[qAns].q_answer+"</jb1>";							

c_div_maker = c_div_maker + "<div style='display:none' id='ci_fb_"+c_ccnum+"_"+qAns+"' class='qtext'></div>"; // this seems to work better
    
}


c_div_maker = c_div_maker + "<input onclick='nQue("+c_questionData[0].Question_type+","+c_questionData[4].question_answers[qAns].true_false+","+c_ccnum+","+qAns+","+QA_num+");' type='checkbox' id='cbck_"+c_ccnum+"_"+qAns+"'>";		//style='cursor:pointer;'

if(c_questionData[0].Question_type === "1")
{

if(typeof Q_Recall[c_ccnum] === "undefined")
{
    c_div_maker = c_div_maker + "<span id='cb_"+c_ccnum+"_"+qAns+"' class='checkmark'></span>";
}

if(typeof Q_Recall[c_ccnum] != "undefined")
{

    
    if(Q_Choice[c_ccnum] === qAns)
        {
            if(c_questionData[4].question_answers[qAns].true_false === "true")
                {
                    for(var cf_count = 0; cf_count < c_questionData[4].question_answers.length;cf_count++);
                    {
                        Q_Square[c_ccnum] = ("#qs_"+c_ccnum+"_an_"+cf_count);
                        
                        Q_IF_feedback[c_ccnum] = ( "c_fb_" + c_ccnum );
                    }

                    c_div_maker = c_div_maker + "<span id='cb_"+c_ccnum+"_"+qAns+"' class='c_checkmark'></span>";

                    
                }
            
            if(c_questionData[4].question_answers[qAns].true_false === "false")
                {

                    for(var f_count = 0; f_count < c_questionData[4].question_answers.length; f_count++)
                        {
                            //alert("quest: " + c_questionData[4].question_answers[f_count].true_false);
                            if(c_questionData[4].question_answers[f_count].true_false === "true")
                                {
                                    Q_Square[c_ccnum] = ("#qs_"+c_ccnum+"_an_"+f_count);
                                    
                                    
                                    
                                    Q_IF_feedback[c_ccnum] = ( "i_fb_" + c_ccnum );
                                    //alert("In Correct: " + Q_IF_feedback[c_ccnum]);

                                }

                            
                        }
                    
                    
                    c_div_maker = c_div_maker + "<span id='cb_"+c_ccnum+"_"+qAns+"' class='i_checkmark'></span>";
                    
                    
                    
                }

            
        }
    
    if(Q_Choice[c_ccnum] != qAns)
        {
            c_div_maker = c_div_maker + "<span id='cb_"+c_ccnum+"_"+qAns+"' class='checkmark'></span>";
            
            if(c_questionData[4].question_answers[qAns].true_false === "true")
                {
                    //alert("qs_"+c_ccnum+"_an_"+qAns);
                }
            
            
        }

}
new_answer_array[c_ccnum] = tf_new_array;
}

if(c_questionData[0].Question_type === "2")
{
c_div_maker = c_div_maker + "<span id='cb_"+c_ccnum+"_"+qAns+"' class='checkmark_square'></span>";
}

c_div_maker = c_div_maker + "</label>";
c_div_maker = c_div_maker + "</form>";

}
q_feedback_qNum_Array[c_ccnum] = q_feedback_array;										
q_feedback_array = [];
                        
                        
c_div_maker = c_div_maker + "</div>";
                        
MC_Answer_Array[c_ccnum] = tf_new_array;	
            
c_questionData_sub_Array[c_ccnum] = tf_new_array;
QC_Multi_Array_TF[c_ccnum] = tf_new_array;											
//-------< Qeustion Answers End >												
            
//-------<>	
                        
c_div_maker = c_div_maker + "<div class='col-lg-12 col-md-12 col-xs-12' style='padding:10px; '>";

remediation_Paragraph = "<div>";									
if(typeof c_questionData[6] !== 'undefined')
{
for(var remed = 0; remed < c_questionData[6].remediation.length; remed++)
{
    remediation_Paragraph = remediation_Paragraph + "<div><p>"+c_questionData[6].remediation[remed].remediation_feedback+"</p></div>";
}
}
remediation_Paragraph = remediation_Paragraph + "</div>";	// no opening div										
//========================================================================================	
//-------< Correct answer / feedback											
//========================================================================================												
                        
                        
c_div_maker = c_div_maker + "<div id='c_fb_"+c_ccnum+"' style='display:none; padding:10px; text-align:"+c_questionData[0].feedback_align+"' class='ma_FB_Correct'><"+c_questionData[0].question_size+"><"+c_questionData[5].correct_incorrect_font_size+" style='color:#85be00; font-size: 18px; font-weight:bold; '>"+c_questionData[5].correct_feedback+"</"+c_questionData[5].correct_incorrect_font_size+"></"+c_questionData[0].question_size+">";
                        
c_div_maker = c_div_maker + "<div id='cor_idfeedback_"+c_ccnum+"' style='font-size: 18px;'><p id='font-size: 18px;'></div>";									
                        

if(typeof c_questionData[5].correct_remediation !== 'undefined')										
{								
c_div_maker = c_div_maker + "<div><answer_text_sel>"+c_questionData[5].correct_remediation+"</answer_text_sel></div>";	

//c_div_maker = c_div_maker + "<div id='ci_fb_"+c_ccnum+"'><answer_text_sel></answer_text_sel></div>";

}
                        
c_div_maker = c_div_maker + "<div style='margin-top:4px'><"+c_questionData[5].Additional_font_size+">"+c_questionData[5].Additional_feedback+"</"+c_questionData[5].Additional_font_size+"></div></div>";
//========================================================================================	
//-------< Correct answer / feedback											
//========================================================================================	
                        
//========================================================================================	
//-------< Incorrect answer / feedback											
//========================================================================================	
                    
                        
c_div_maker = c_div_maker + "<div  id='i_fb_"+c_ccnum+"' style='display:none; padding:10px; text-align:"+c_questionData[0].feedback_align+"' class='ma_FB_Incorrect'><"+c_questionData[0].question_size+"><"+c_questionData[5].correct_incorrect_font_size+" style='color:#FF0004; font-size: 18px; font-weight:bold;'>"+c_questionData[5].incorrect_feedback+"</"+c_questionData[5].correct_incorrect_font_size+"></"+c_questionData[0].question_size+">";	
                        
c_div_maker = c_div_maker + "<div id='inc_idfeedback_"+c_ccnum+"' style='font-size: 18px;'><p id='font-size: 18px;'></div>";					
                        

                        
if(typeof c_questionData[5].incorrect_remediation !== 'undefined')										
{											
c_div_maker = c_div_maker + "<div><answer_text_sel>"+c_questionData[5].incorrect_remediation+"</answer_text_sel></div>";

//c_div_maker = c_div_maker + "<div id='ii_fb_"+c_ccnum+"'><answer_text_sel></answer_text_sel></div>";

}								
c_div_maker = c_div_maker + "<div style='margin-top:4px'><"+c_questionData[5].Additional_font_size+">"+c_questionData[5].Additional_feedback+"</"+c_questionData[5].Additional_font_size+"></div></div>";											
//========================================================================================	
//-------< Incorrect answer / feedback											
//========================================================================================											
                        
c_div_maker = c_div_maker + "</div>";											
                        

//-------< Submit Button Begin >												
if(c_questionData[0].Question_type === "2")	// added on 10/29/2019										
{
if(typeof courseType === "undefined")
{
submit_button = "Submit";
}


QC_Multi_Array[c_ccnum] = c_questionData[4].question_answers.length;




//style='border-top: thin; border-top-color: #000000; border-top-style:solid; border-top-width: thin'
c_div_maker = c_div_maker + "<div class='col-lg-12 col-md-12 col-xs-12'><a style='margin-top:10px;' href='javascript:Question_Comp_Submit("+c_ccnum+");' class='btn btn-primary disabled' id='sub_"+c_ccnum+"'>"+submit_button+"</a></div>";
}
//-------< Submit Button End >											
                        
                        
//-------< End >											
c_div_maker = c_div_maker + "</div>";

                     

//-------------------------------------------------------------------------------------------------------------	
//-------<( New Question Comp code end )>-------											
//-------------------------------------------------------------------------------------------------------------											
