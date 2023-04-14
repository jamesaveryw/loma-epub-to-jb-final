//-------------------------------------------------------------------------------------------------------------	
//-------<( Video Reflection New code begin )>-------	SA									
//-------------------------------------------------------------------------------------------------------------											

case "Video_Reflection":  //Next_Lesson

	//console.log("trans_button = " + trans_button);
	// To disable
	//document.getElementById('Next_Lesson').style.pointerEvents = 'none';
	// To re-enable:
	//document.getElementById('Next_Lesson').style.pointerEvents = 'auto'; 


var new_reflct_vid	= sSelections[jcc][snglBld[jcc]][0];

//console.log(new_reflct_vid.End_of_lesson);

if(new_reflct_vid.End_of_lesson === "yes")
	{
		//console.log(new_reflct_vid.End_of_lesson);
		ref_eol = 1;
		document.getElementById('Next_Lesson').style.pointerEvents = 'none';
	}
if(new_reflct_vid.End_of_lesson === "no")
	{
		ref_eol = 0;
		//document.getElementById('Next_Lesson').style.pointerEvents = 'none';
	}


//End_of_lesson
//console.log("new_reflct_vid: " + new_reflct_vid)
					

vid_ref_tracker = 1;
/*
///////////////////////////BAL - 7/1/2021///////////////////////////////
//useChinaCache, if on ChinaCache
if(window.location.href.indexOf("ll-content.ccnetworks.cn") !== -1){
//new_vid.Video = new_vid.Video.replace("https://ry6g4c.cloud.influxis.com/", "https://ll-content.ccnetworks.cn/ChinaCache/video/");
new_vid.Video = new_vid.Video.replace("https://loma.azureedge.net/videos/","https://ll-content.ccnetworks.cn/ChinaCache/videos/");
}
///////////////////////////BAL - 7/1/2021///////////////////////////////
*/
//duration

cur_vid[jcc] = (new_reflct_vid.Video);

Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12'>";



Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12' style='background-color:"+new_reflct_vid.back_color+"; padding: 4px; margin-top: "+new_reflct_vid.top_margin+";'>"

Jcc_Comp_Maker = Jcc_Comp_Maker + "<video id='vid_ref_source_"+jcc+"' class='jb_car_acc_wd' width='100%;' controls onplay='video_reflect("+jcc+")'><source src='"+new_reflct_vid.Video+"' id='vid_source' type='video/mp4'></video>"

Jcc_Comp_Maker = Jcc_Comp_Maker + "<div align='center'>"
Jcc_Comp_Maker = Jcc_Comp_Maker + "<button id='tbtn_" + jcc+"' type='button' class='btn btn-primary btn-sm' onclick='Transcripts("+jcc+");'>"+trans_button+"</button>"


Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='jb_car_acc_wd' id='trans_" + jcc +"' style='display: none; border: medium; border-style: solid; border-color: #000000;height:300px; overflow-y: auto; overflow-x: hidden ;padding:5px;'>";									
for(var trn = 1; trn < sSelections[jcc][snglBld[jcc]].length; trn++)
{
if(new_reflct_vid.Person_underline === "u")
	{
Jcc_Comp_Maker = Jcc_Comp_Maker + "<p class='jb_char_para' style='text-align:"+new_reflct_vid.Person_align+"; color: "+new_reflct_vid.Person_text_color+"'><"+new_reflct_vid.Person_font+"><u>"+ sSelections[jcc][snglBld[jcc]][trn].Person +"</u></"+new_reflct_vid.Person_font+"></p>";										
	}

if(new_reflct_vid.Person_underline === "")
	{
Jcc_Comp_Maker = Jcc_Comp_Maker + "<p class='jb_char_para' style='text-align:"+new_reflct_vid.Person_align+"; color: "+new_reflct_vid.Person_text_color+"'><"+new_reflct_vid.Person_font+">"+ sSelections[jcc][snglBld[jcc]][trn].Person +"</"+new_reflct_vid.Person_font+"></p>";										
	}							


Jcc_Comp_Maker = Jcc_Comp_Maker + "<p class='jb_char_para' style='text-align:"+new_reflct_vid.Transcript_Text_align+"; color:"+new_reflct_vid.Transcript_Text_color+"'><"+new_reflct_vid.Transcript_Text_font+">"+ sSelections[jcc][snglBld[jcc]][trn].Transcript_Text +"</"+new_reflct_vid.Transcript_Text_font+"></p>";
}						

Vid_count_array[jcc] = jcc;
vid_click_array[jcc] = "vid_ref_source_" + jcc;
				




video_counter = (video_counter + 1);											
				
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";	



//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//-------<( Optional Question Begin )>-------
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div>";
ref_opt_num = new_reflct_vid.Optional_Questions.length;

if(new_reflct_vid.Optional_Questions.length > 0)
{
	Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='r_option_input_"+jcc+"' style='display:none;' class='col-lg-12 col-md-12 col-xs-12'>";
	for(var roq = 0; roq < new_reflct_vid.Optional_Questions.length; roq++)
		{
			//Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12' style='height:20px; margin-top:10px; background-color:yellow'></div>";
			//console.log("new_reflct_vid.Optional_Questions.length: " + new_reflct_vid.Optional_Questions[roq].OptQuestion);
			Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12'>";
				Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-3 col-md-3 col-xs-12'></div>";

//new_reflct_vid.Reflection_Question_Font

			Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-6 col-md-6 col-xs-12' style='margin-top:20px;border:"+new_reflct_vid.Optional_Question_Border_Weight+" "+new_reflct_vid.Optional_Question_Border_Style+" "+new_reflct_vid.Optional_Question_Border_Color+";border-radius:10px;padding:10px;background-color:"+new_reflct_vid.Optional_Question_Background_Color+"'>";
			Jcc_Comp_Maker = Jcc_Comp_Maker + "<"+new_reflct_vid.OptQuestion_Font+" style='color:"+new_reflct_vid.Optional_Question_Text_Color+"'>"+new_reflct_vid.Optional_Questions[roq].OptQuestion+"</"+new_reflct_vid.OptQuestion_Font+">";
			Jcc_Comp_Maker = Jcc_Comp_Maker + "<textarea id='roption_quest_"+jcc+"_"+roq+"' style='height:100px;color:#000000' minlength='4' rows='2' required oninput='reflect_test("+jcc+")'></textarea>"
			Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";

				Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-3 col-md-3 col-xs-12'></div>";

			Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";

			
			
		}
	Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
}

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//-------<( Optional Question End )>-------
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//-------<( Reflection Question Begin )>------- Reflection_Question_Background_Color
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='reflect_input_"+jcc+"' style='display:none' class='col-lg-12 col-md-12 col-xs-12'>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-3 col-md-3 col-xs-12'></div>";

Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='margin-top:20px;border:2px solid #0070b0;border-radius:10px;padding:10px;background-color:"+new_reflct_vid.Reflection_Question_Background_Color+"' class='col-lg-6 col-md-6 col-xs-12'>";
//Jcc_Comp_Maker = Jcc_Comp_Maker + "<p>Reflection Question</p>";  new_reflct_vid.Reflection_Question_Required_Text
Jcc_Comp_Maker = Jcc_Comp_Maker + "<p><"+new_reflct_vid.Reflection_Question_Font+" style='color:"+new_reflct_vid.Reflection_Question_Text_Color+"'>"+new_reflct_vid.Reflection_Question+"</"+new_reflct_vid.Reflection_Question_Font+"></p>";
//new_reflct_vid.Reflection_Question  onclick='info_box_event("+jcc+"); onclick='rv_sub("+jcc+")
Jcc_Comp_Maker = Jcc_Comp_Maker + "<textarea id='ref_quest_"+jcc+"' style='height:100px;color:#000000' minlength='4' rows='2' required oninput='reflect_test("+jcc+")'></textarea>"
Jcc_Comp_Maker = Jcc_Comp_Maker + "<p id='refchk_"+jcc+"' style='color:"+new_reflct_vid.Reflection_Question_Text_Color+"'>"+new_reflct_vid.Reflection_Question_Required_Text+"</p>"; //*Please enter an answer above

//Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12'><a style='margin-top:10px;' class='btn btn-primary disabled' id='rf_sub_"+jcc+"' onclick='rv_sub("+jcc+","+ref_opt_num+");'>"+submit_button+"</a></div>";

Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12'><button style='margin-top:10px;' class='btn btn-primary disabled' id='rf_sub_"+jcc+"' onclick='rv_sub("+jcc+","+ref_opt_num+");'>"+submit_button+"</button></div>";

Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";

Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-3 col-md-3 col-xs-12'></div>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";

Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//-------<( Reflection Question End )>-------
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";

//ref_quest

/*
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='jb_car_acc_wd' id='trans_" + jcc +"' style='display: none; border: medium; border-style: solid; border-color: #000000;height:300px; overflow-y: auto; overflow-x: hidden ;padding:5px;'>";									
for(var trn = 1; trn < sSelections[jcc][snglBld[jcc]].length; trn++)
{
if(new_reflct_vid.Person_underline === "u")
	{
Jcc_Comp_Maker = Jcc_Comp_Maker + "<p class='jb_char_para' style='text-align:"+new_reflct_vid.Person_align+"; color: "+new_reflct_vid.Person_text_color+"'><"+new_reflct_vid.Person_font+"><u>"+ sSelections[jcc][snglBld[jcc]][trn].Person +"</u></"+new_reflct_vid.Person_font+"></p>";										
	}

if(new_reflct_vid.Person_underline === "")
	{
Jcc_Comp_Maker = Jcc_Comp_Maker + "<p class='jb_char_para' style='text-align:"+new_reflct_vid.Person_align+"; color: "+new_reflct_vid.Person_text_color+"'><"+new_reflct_vid.Person_font+">"+ sSelections[jcc][snglBld[jcc]][trn].Person +"</"+new_reflct_vid.Person_font+"></p>";										
	}							


Jcc_Comp_Maker = Jcc_Comp_Maker + "<p class='jb_char_para' style='text-align:"+new_reflct_vid.Transcript_Text_align+"; color:"+new_reflct_vid.Transcript_Text_color+"'><"+new_reflct_vid.Transcript_Text_font+">"+ sSelections[jcc][snglBld[jcc]][trn].Transcript_Text +"</"+new_reflct_vid.Transcript_Text_font+"></p>";
}						

Vid_count_array[jcc] = jcc;
vid_click_array[jcc] = "vid_ref_source_" + jcc;
				




video_counter = (video_counter + 1);											
				
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";	
*/

//=============================================================================================================
break;
//-------------------------------------------------------------------------------------------------------------	
//-------<( Video Reflection New code end )>-------											
//-------------------------------------------------------------------------------------------------------------	
