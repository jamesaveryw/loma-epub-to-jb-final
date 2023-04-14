

//jcc_sur_data = sSelections[jcc].Survey_Comp;
    //var display_comp = [];
//survey_number = jcc_sur_data;
var jcc_sur_data_array = [];
var survey_data_array = [];

var sur_structure_array = [];
var brnum = 0;
var txbnum;
var CQS = 1;
var contact_form = 0;
var contact_skip;
var sur_length;
//var snip_test; 
//var comp_data;
//var new_snippet_array = [];
//c_div_maker = "";
function Survey_Comp(c_data_stream,c_ccnum) //acfl
{
//console.log("Survey comp has started")
//c_data_stream[sda].Contact_input[0]

sur_length = (c_data_stream.length - 1)
//console.log("sur_length: " + sur_length)
    c_div_maker = "";

c_div_maker = c_div_maker + "<div class='col-lg-12 col-md-12 col-xs-12' id='survey_" + c_ccnum + "' style='margin-top:"+c_data_stream[0].top_margin+";background-color: " + c_data_stream[0].background_color + ";'>";
c_div_maker = c_div_maker + "<div><h2 style='color: '"+c_data_stream[0].heading_color+"'; font-weight: bold;text-align: center;'>Survey</h2></div>";


for(var sda = 1; sda < c_data_stream.length; sda++)
{
    switch(String(Object.keys(c_data_stream[sda])))
        {
            case "single_survey_question":
                c_div_maker = c_div_maker + "<div id='survey_comp_number_"+sda+"' align='left' class='jb_car_acc_wd survey_block' style='display:none; margin-top: 20px; margin-bottom:20px;background-color:"+c_data_stream[0].block_color+"'>"; //"+c_data_stream[0].block_color+"
               // console.log(c_data_stream[sda].single_survey_question[0].single_survey_question_text);

                    c_div_maker = c_div_maker + "<div class='survey_question_color'>'"+c_data_stream[sda].single_survey_question[0].single_survey_question_text+"'</div>";   // = '"+sda+"'


                  
                        for(var ssq_a = 1; ssq_a < c_data_stream[sda].single_survey_question.length; ssq_a++)
                            {
                                
                                //console.log(c_data_stream[sda].single_survey_question[ssq_a].skipto); skipto
c_div_maker = c_div_maker + "<div style='margin-bottom:10px; text-align:left'><input onclick='survey_next_question("+sda+","+ssq_a+","+c_data_stream[sda].single_survey_question[ssq_a].skipto+")' type='radio' name='editList_"+ssq_a+"' id='single_answer_"+sda+"_"+ssq_a+"'><span class='survey_check_alignment' style='color:#000000'>"+c_data_stream[sda].single_survey_question[ssq_a].single_survey_answer+"</span></div>";

                            }
                   
                   c_div_maker = c_div_maker + "</div>";
            break;

            case "multi_survey_question":
                c_div_maker = c_div_maker + "<div id='survey_comp_number_"+sda+"' align='left' class='jb_car_acc_wd survey_block' style='display:none; margin-top: 20px; margin-bottom:20px;background-color:"+c_data_stream[0].block_color+"'>";


                c_div_maker = c_div_maker + "<div class='survey_question_color'>'"+c_data_stream[sda].multi_survey_question[0].multiple_survey_question_text+"'</div>";   // = '"+sda+"'
//===============

         for(var ssq_a = 1; ssq_a < c_data_stream[sda].multi_survey_question.length; ssq_a++)
             {
                 
                 //console.log(c_data_stream[sda].single_survey_question[ssq_a].skipto); skipto
c_div_maker = c_div_maker + "<div style='margin-bottom:10px; text-align:left'><input onclick='survey_next_question("+sda+","+ssq_a+")'  type='checkbox' id='single_answer_"+sda+"_"+ssq_a+"'><span class='survey_check_alignment' style='color:#000000'>"+c_data_stream[sda].multi_survey_question[ssq_a].multipl_survey_answer+"</span></div>";

                
//console.log("c_data_stream[sda].multi_survey_question[ssq_a].text_input_box: " + c_data_stream[sda].multi_survey_question[ssq_a].text_input_box);

            if(c_data_stream[sda].multi_survey_question[ssq_a].text_input_box === "1")
                    {
                        c_div_maker = c_div_maker + "<div class='jb_car_acc_wd'><textarea id='text_area_"+sda+"_"+ssq_a+"' onkeyup='countChars(this)' maxlength='200' style='height:100px;color:#000000'></textarea></div>";
                    }
}
         
//===============
                c_div_maker = c_div_maker + "</div>";

            break;

            case "Text_box_input":
                c_div_maker = c_div_maker + "<div id='survey_comp_number_"+sda+"' align='left' class='jb_car_acc_wd survey_block' style='display:none; margin-top: 20px; margin-bottom:20px;background-color:"+c_data_stream[0].block_color+"'>";

                    c_div_maker = c_div_maker + "<div class='survey_question_color' style='padding:4px;'>"+c_data_stream[sda].Text_box_input[0].input_txtbox_question+"</div>"; 
                    
                    c_div_maker = c_div_maker + "<div class='jb_car_acc_wd'><textarea id='text_box_input_"+sda+"' onkeyup='countChars(this,"+sda+")' maxlength='200' style='height:100px;color:#000000'></textarea></div>";    
                    
                    //onkeyup='countChars(this,"+surData+")

                c_div_maker = c_div_maker + "</div>";
            break;
            
            case "Contact_input":
                //console.log("From Contact Imput: " + sda);
                contact_form = sda;
               contact_skip = c_data_stream[sda].Contact_input[0].required;
//required
                c_div_maker = c_div_maker + "<div id='survey_comp_number_"+sda+"' align='left' class='jb_car_acc_wd survey_block' style='display:none; margin-top: 20px; margin-bottom:20px;background-color:"+c_data_stream[0].block_color+"'>"; 


                c_div_maker = c_div_maker + " <div align='right'><button onclick='skip_contact()' class='skip_button' id='survey_skip' style='display:none ;disabled:false ;cursor:pointer; text-align:left' type='button'>Skip</button></div>";

                c_div_maker = c_div_maker + "<div style='font-size: 16px;color:#000000'>"+c_data_stream[sda].Contact_input[0].contact_question+"</div><br>";

                c_div_maker = c_div_maker + "<label style='color:#000000'>Name: </label>";
				c_div_maker = c_div_maker + "<input id='contact_name' style='width:100%; height:40px; color:#000000' placeholder='Contact name.'></input>";
                c_div_maker = c_div_maker + "<br>";
				c_div_maker = c_div_maker + "<label style='color:#000000'>Company: </label>";
				c_div_maker = c_div_maker + "<input id='contact_company' style='width:100%; height:40px; color:#000000' placeholder='Contact company.'></input>";				
                c_div_maker = c_div_maker + "<br>";
				c_div_maker = c_div_maker + "<label style='color:#000000'>Email: </label>";
				c_div_maker = c_div_maker + "<input id='contact_email' style='width:100%; height:40px; color:#000000' placeholder='Contact email.'></input>";
				c_div_maker = c_div_maker + "<label style='color:#000000'>Phone: </label>";
				c_div_maker = c_div_maker + "<input id='contact_phone' style='width:100%; height:40px; color:#000000' placeholder='Contact phone.'></input>";                

               
                c_div_maker = c_div_maker + "</div>";
            break;  


        }
}

c_div_maker = c_div_maker + " <div><button onclick='survey_nxt()' class='survey_buttons' id='survey_next' style='disabled:true ;cursor:not-allowed' type='button'>Next</button></div>"; //

c_div_maker = c_div_maker + " <div><button onclick='submit_survey()' class='survey_buttons' id='survey_submit' style='display:none ;disabled:true ;cursor:not-allowed' type='button'>Submit</button></div>"; //


c_div_maker = c_div_maker + "</div>";

c_comp_Array[c_ccnum] = c_div_maker;
 
     
comp_Array_test();

document.getElementById("survey_comp_number_" + 1).style.display = "block";
}


function survey_next_question(sComp,sAnswer,skipnum)
{
    console.log("skipnum: " + skipnum);
    console.log("sComp: " + sComp);
// /*
        if(typeof skipnum === "undefined")
            {
                brnum = (sComp + 1);
                console.log("brnum: " + brnum);
            }

        if(typeof skipnum !== "undefined")
            {
                brnum = skipnum;
                skipnum = "";
            }

        
// */  
    //console.log("sComp: " + sComp + " / sAnswer: " + sAnswer + " / skipnum: " + skipnum);
    
    document.getElementById("survey_next").style.opacity = "1";
    document.getElementById("survey_next").style.cursor = "pointer";
    document.getElementById("survey_next").disabled = false;
}

function survey_nxt()
{
  
//alert(document.getElementById("myP").style.display); 
console.log("From survey_nxt: " + brnum);

//'survey_comp_number_"+sda+"'
//console.log(document.getElementById("survey_comp_number_" + contact_form).style.display);

/*
if(document.getElementById("survey_comp_number_" + contact_form).style.display === "block")
    {
       console.log("Diaplay: " + document.getElementById("survey_comp_number_" + contact_form).style.display);
       
       // document.getElementById("survey_next").style.display = "none";
       // document.getElementById("survey_submit").style.display = "block";
    }
*/


//if(document.getElementById("myP").style.display)
//document.getElementById("survey_comp_number_" + brnum).style.display

//console.log("contact_name style: " + document.getElementById("contact_name").style.display);
/*
    if(document.getElementById("contact_name").style.display === "block")
    {
            console.log("Turn on sumbit survey!")
        document.getElementById("survey_next").style.display = "none";
        document.getElementById("survey_submit").style.display = "block";

    }  
*/


    document.getElementById("survey_comp_number_" + brnum).style.display = "block";
 
    document.getElementById("survey_next").style.opacity = "0.6";
    document.getElementById("survey_next").style.cursor = "not-allowed";
    document.getElementById("survey_next").disabled = true;

    //brnum = 0;



if(document.getElementById("survey_comp_number_" + contact_form).style.display === "block")
    {
       //console.log("Diaplay: " + document.getElementById("survey_comp_number_" + contact_form).style.display);
       
        document.getElementById("survey_next").style.display = "none";
        document.getElementById("survey_submit").style.display = "block";

        if(contact_skip === "0")
            {
                document.getElementById("survey_skip").style.display = "block";

            }
    }

if(sur_length === brnum)
    {
        document.getElementById("survey_next").style.display = "none";
        document.getElementById("survey_submit").style.display = "block";  
    }




}

function countChars(obj,textbox_s_num){
    var textbox_input_answer_array = [];



    if(obj.value.length >= 2)
        {
            document.getElementById("survey_next").style.opacity = "1";
            document.getElementById("survey_next").style.cursor = "pointer";
            document.getElementById("survey_next").disabled = false;   
            brnum = textbox_s_num + 1;
        }

        if(obj.value.length <= 2)
        {
            document.getElementById("survey_next").style.opacity = "0.6";
            document.getElementById("survey_next").style.cursor = "not-allowed";
            document.getElementById("survey_next").disabled = true;            
        } 
              
    }
 