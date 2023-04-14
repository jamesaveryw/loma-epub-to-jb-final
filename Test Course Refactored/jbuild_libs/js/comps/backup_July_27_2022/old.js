
    c_div_maker = "";	

    // c_div_maker = c_div_maker + "<div class='col-lg-12 col-md-12 col-xs-12 container' id='Survey_ID_" + c_ccnum + "' style='background-color:#F1F1F1;'>";
 
     c_div_maker = c_div_maker + "<div class='col-lg-12 col-md-12 col-xs-12' id='survey_" + c_ccnum + "' style='margin-top:"+c_data_stream[0].top_margin+";background-color: " + c_data_stream[0].background_color + ";'>";
 
 
     //c_div_maker = c_div_maker + "<div class='col-lg-12 col-md-12 col-xs-12' style='background-color:#0070b0;'>";
         c_div_maker = c_div_maker + "<h2 style='background-color:#0070b0; color: #ffffff; font-weight: bold;text-align: center;'>Survey</h2>";
    // c_div_maker = c_div_maker + "</div>";
 
 
 
 
 
 
 
 jcc_sur_data_array = c_data_stream;
 
 for(var sur_c_Data = 1; sur_c_Data < jcc_sur_data_array.length; sur_c_Data++)
     {
         
         survey_data_array[sur_c_Data] = jcc_sur_data_array[sur_c_Data];
 
     switch(String(Object.keys(jcc_sur_data_array[sur_c_Data])))
     {
         case "single_survey_question":
             //c_div_maker = c_div_maker + "<div>'"+jcc_sur_data_array[SQD].single_survey_question[0].single_survey_question_text+"'</div>";
 
                     //class = survey_block
 
 
                   Single_Q(sur_c_Data);
         break;
 
         case "multi_survey_question":
                   Multiple_Q();
               //console.log("Multi Question");
         break;
 
         case "Text_box_input":
                   Text_IB();
               //console.log("Text Box Called");
         break;
         
         case "Contact_input":
                   Contact_FM();
               //console.log("Contact Form Called");
         break;          
 
     }
 
 
     c_div_maker = c_div_maker + "</div>";	
 }
 c_comp_Array[c_ccnum] = c_div_maker;
 
     
 comp_Array_test();
 }
 
 /*
 switch(jcc_sur_data_array[1].single_survey_question[0].s_question_type)
     {
         case "0":
             for(var ssq = 1; ssq < jcc_sur_data_array[1].single_survey_question.length; ssq++)
             {
                 //single_survey_answer
                 console.log(jcc_sur_data_array[1].single_survey_question[ssq].single_survey_answer)
             }
         break;
 
         case "1":
 
         break;
     }
 */
 
 
 
 
 function Single_Q(SQD)
 {
 /*
 Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='margin-bottom:10px; text-align:left'><input onclick='survey_next_question("+surData+","+ssq+")'  type='radio' name='editList"+surData+"'' id='single_question_"+surData+"_"+ssq+"'><span class='survey_check_alignment' style='color:#000000'>"+jcc_sur_data[surData].single_survey_question[ssq].single_survey_answer+"</span></div>";
                             //alert( jcc_sur_data[surData].single_survey_question[ssq].single_survey_answer );
                             //id='"+survey_comp_array[surData]+'_'+ssq'
                             single_answer_text_array[ssq] = jcc_sur_data[surData].single_survey_question[ssq].single_survey_answer
 */
 
 //console.log("SQD: " + SQD);   
 //console.log("single_survey_question: " + jcc_sur_data_array[SQD].single_survey_question.length);
 
 //c_jb_car_acc_wd survey_block
 //display:"+display_comp[surData]+"; 
 
 //c_div_maker = c_div_maker + "<div>'"+jcc_sur_data_array[SQD].single_survey_question[0].single_survey_question_text+"'</div>";
 ////\\\\c_div_maker = c_div_maker + "<div class='col-lg-12 col-md-12 col-xs-6' class='c_jb_car_acc_wd survey_block'>";
 //console.log(jcc_sur_data_array[SQD].single_survey_question[0].single_survey_question_text) //[SQD].single_survey_question_text
 
 c_div_maker = c_div_maker + "<div id='survey_comp_number_"+SQD+"' align='left'  style='margin-top: 20px; margin-bottom:20px;'>";
 
 //class='c_jb_car_acc_wd survey_block'
 
     for(var ssq = 1;ssq < jcc_sur_data_array[SQD].single_survey_question.length;ssq++)
         {
             //console.log(jcc_sur_data_array[SQD].single_survey_question[ssq].single_survey_answer); //[ssq]
             c_div_maker = c_div_maker + "<div><input  type='radio'><span class='survey_check_alignment' style='color:#000000'>'"+jcc_sur_data_array[SQD].single_survey_question[ssq].single_survey_answer+"'</span></div>";
         }
 console.log("<=======>")
 
 
 //c_div_maker = c_div_maker + "<div style='background-color:green;height:100px'>DOOM!</div>";
        //console.log(jcc_sur_data_array[sur_c_Data]);
 c_div_maker = c_div_maker + "</div>";
 
 
 
 
 
 }
 
 
 function Multiple_Q()
 {
     console.log("Multiple Question Called")
 }
 
 function Text_IB()
 {
     console.log("Text Box Called")
 }
 
 function Contact_FM()
 {
     console.log("Contact Form Called")
 }
 
 
 
 
 /*
 <div class="col-lg-12 col-md-12 col-xs-12" style="width:100%; margin-top:10px;background-color: #0070b0; border-top-color:; border-top-width:; border-top-style:; border-bottom-color:; border-bottom-width:; border-bottom-style:"><h2><p style="background-color:; margin-top:-10px; padding:; border-radius:; border-color:; border-width:; border-style: ; width:; color: #ffffff; font-weight: bold;text-align: center">Survey</p></h2></div>
 */
 
 //single_survey_question
 //multi_survey_question
 //Text_box_input
 //Contact_input