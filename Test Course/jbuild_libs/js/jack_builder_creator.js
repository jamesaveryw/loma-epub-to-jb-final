//Updated March 8th 2019

var toc_list;
var toc_filename_Array = [];
var toc_fly_icon;
var moduleFolder;
var contScroll;
var np_num;
var flscrollHeight;
var lesson_title_text;
var mod_lsn = [];
var term_head;
var term_def;
var header_image;
var header_alt;

var jcc;
var img_lst_ada = 0;
var toc_flyout_fn_array = []

var toc_whole;
var toc_cur_module;
var jcc_Comp_Creator;
var jcc_TOC_Creator;
var jcc_TOC_Flyout_Menu;
var jcc_toc_fly_num = 0;
var jcc_test;
var hrData;
var cmpData;
var Hero_Image_Size;
var img_loc;
var audio_loc;
var pdf_loc;

var wdg_loc;

var pfd_Array = [[],[]];
var ac_pfd_Array = [[],[]];
var Jcc_Comp_Maker;
var Key_Term_Modal_Maker;

var snglBld = [];

var Jcc_qText_Mover = [];
var Jcc_qImage_Mover =[];

var Course_Number_Val;
var Module_Number_Val;
var toc_names;
var Video_Array = [];
var Ac_Video_Array = [];
var video_counter = 0;
var Vid_count_array = [];
var vid_array = [];
var vid_click_array = [];
var v_click_array = [];
var cur_vid = [];
var vid_tracker = 0;
var vid_ref_tracker = 0;
var ref_eol = 0;
var ref_opt_num;
var cur_aud = [];

var cur_acc = [];
var acc_label_array = [];
var cur_acc_tab_labels = [[],[]];
var acc_multi = [[],[]];
var acc_Count;
var acc_count_array = [];

var car_slide_array = [[],[]];
var car_slide_count = [[],[]];
var cur_slide = 0;
var car_rpt = [];
var cur_slide_number = [[],[]];
var car_array = [];
var car_zoom_image_array = [];
var car_zoom_array = [[],[]];
var im_rnbr;
var lst_car_Array = [];
var old_caro;

var car_img_array = []; // Added by Jcc 01/07/2021

var Info_Box_Array = [];
var timeline_start_array = [];

var sBubble_Text_Array = [];
var Speech_Bub_Array = [];
var speech_number = [[],[]];											
var sp_bbl_id = [[],[]];											
var bbl_cur_id = [];
var ac_sp_bbl_id = [[],[]];

var List_Text_Num;
var List_Text_Array = [];	
var lst;

var TOC_File_Order_Array = [];

var timeline_heading;
var timeline_body;

var Q_count;
var QA_num = null;
var QC_Multi_Array = [];
var remediation_Paragraph;
var qComp_sub_Array = [];
var Question_Type_Array = [];
var Question_Total_Array = [];
var QC_Multi_Array_TF = [[],[]];
var chClass;
var MC_Answer_Array = [];
var tf_new_array = [];
var q_feedback_qNum_Array = [[],[]];
var q_feedback_user_Array = [[],[]];
var q_feedback_array = [];
var Q_Recall = [];
var Q_Choice = [];
var Q_Square = [];
var Q_IF_feedback = [];
var Q_Block = [[],[]];
var Q_Block_IC = [[],[]];

var acc_setup_array = [];
var jcc_data = [];
var csa_answer = [];

var elementExists;

var tbl_hd = [];
var tbl_id;
var tbl_head_color;
var tbl_top_data_color;
var tbl_even_color;
var tbl_odd_color;
var tbl_col_ol = [];
var tbl_row_ol = [];
var tbl_row_space;

var column_text_color;
var flip_card_Array = [[],[]];
var flip_card_multiple = [];
var flip_data;
var flip_card_data;
var flip_new_Array = [];
var jflip_array = [];
var asset_info;
var gtMain = [];
var flip_card_sMaker = [];


var jb_flp_mkr = [];
var flip_switch;
var flip_mar;
var fl_fh_ht;
var flp_fh_len = [];
var swiffy_data;

//-------<(  Added by Jack on 03_08_2019  )>-------
var pdf_logo;
var pdf_file_name;
var pdf_file_array = [];
//-------<(  Added by Jack on 03_08_2019  )>-------

//-------<(  Added by Jack on 07_13_2021  )>-------
var col_new_width;
var col_valign;
//-------<(  Added by Jack on 07_13_2021  )>-------

var jcc_car;
var car_n_data;

var tbl_row_dec = [];
var tbl_row_col = [];
var tbl_column_dec = [];
var tbl_column_col = [];
var tbl_border_array = [];
var tbl_data_border_array = [];

var tbl_rc_border_array = [];

var tbl_whole_row_array = [];
var tbl_single_cell_array = [];
var tbl_single_row_data = [];
var row_col_check;
var tbl_heading_align;	
var New_Border_Code = [];
var New_Data_Border_Code = [];
var New_Cell_Color = [];
var New_Text_Font_Array = [];
var New_Text_Font = [];
var New_Text_Alignment = [];
var New_Font_Array = [];
var TFS_array = [];
var Row_Data_Color = [];
var Row_Data_Font = [];
var Row_Data_Border = [];
var Row_Data_Height_Array = [];

var Alt_Tag_Image_Data = [];
var Alt_Tag_Image_name = [];
var Alt_image_id;
var Alt_Tag_Carousel_Data = [];
var caro_modal_info = [];
var caro_modal_text = [[],[]];

var mi_iwt_img_array = [];
var mi_iwt_array = [[],[]]; // Added By Jack on 12\07\2020
var im_count = [];
var im_count_int = [];
var im_count_whole = [[],[]];
var mi_iwt_tag_array = [];
var mi_iwt_image_array = [];
var mi_iwt_image_whole = [[],[]]; 

var mi_iwt_tag_whole = [[],[]]; 

var img_w_text_array = [];
var img_w_text_whole = [[],[]];

var img_w_text_img_array = [];

// Added By Jack on 12/15/2020
var ac_img_zoom_img = [];
var ac_img_zoom_array = [[],[]]; 

var ac_im_tag_array = [];
var ac_im_tag_array_whole = [[],[]]; 

var imgwt_ac_array = [];
var imgwt_ac_whole = [[],[]]; 

var ac_twmi = [];


// Added By Jack on 12/15/2020
var ADA_check_Array = [];
var ADA_checked_Array = [];
var ADA_String;
var aCa = 0;

var pdf_inline_call;
var source_Array = [];

var cur_swiffy_name = [];

var bCurrentMod;
var bCurrentLsn;
var bCurrentPag;

var JB_time_comp = 0;

var timer = null;

var min_txt;
var min;
var sec_txt;
var sec;
var msec_txt; 
var msec;

var pvc = 0;
var fvc = 0;
var slider_Int_pv;
var slider_Year_pv;


var top_bot_img;
var corr_resp = [];
var new_answer_array = [[],[]];
var new_multi_answer_array = [[],[]];
var std_answer = [];

var csnm;
var snipmap_array = [];
var snip_string;
//var trans_button = "Open Transcript";
//var trans_close = "Close Transcript"; //BRIAN 01/13/2020 -- var added

var trans_button = "Open Transcript";
var trans_close = "Close Transcript"; //BRIAN 01/13/2020 -- var added
var submit_button = "Submit";
var closeButton = "Close";
var imgDescButton = "Image Description"; // JAMES 01/26/2021 -- var added

var ma_alt = 0;

var img_list_array = [];
var img_list_marray = [[],[]];
var lstyp;
var lst_style;
var Img_List_Maker;
var Img_List_Arrray_Maker = [];

var img_txt_lst_array = [[],[]];

var flw;

var	bStartButton; 	
var	bBackButton; 

var survey_number = 0;
var sv_a = [];
var sv_b = [];
var sv_c = [];
var sv_d = [];
var sv_c_id_array = [[],[]];
var sv_a_id_array = [[],[]];
var survey_question_array = [];

var tfyn_labels = [[],[]];
var tfyn_quest_array = [];
var svd_current_array = [];
var c_check = [[],[]];

var survey_comp_array = [];
var display_comp = [];
var cur_s_question;
var jcc_sur_data;
var ssq_array = [[],[]];
var single_answer_array = [[],[]];
var msq_array = [[],[]];
var single_question_student_answers = [];
var multi_question_student_answers = [];
var input_text_student_answers = [];
var multi_cur_num;

var single_survey_question_array = [];
var multi_survey_question_array = [];
var input_box_question_array = [];

var single_question_final_answer_array = [];
var multi_question_final_answer_array = [];
var textbox_final_answer_array = [];

var single_question_and_answer_array = [[],[]];
var multi_question_and_answer_array = [[],[]];
var textbox_and_answer_array = [[],[]];
var text_input_array_creator = [];

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//-------<( Jack Added 11/19/2020 for icon over any image with more than 255 alt char )>-------
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
var alt_icon;

if(typeof moduleFolder !== "undefined")
		{
			alt_icon = "jbuild_libs/images/feedback-bk.png";
		}

if(typeof moduleFolder === "undefined")
		{
			var altimg = String(window.location);
			if(altimg.search("LLL") < 1)
				{
						alt_icon = "../../../jbuild_libs/images/feedback-bk.png";
				}
		
			if(altimg.search("LLL") > 1)
				{
						alt_icon = "../../../../../jbuild_libs/images/feedback-bk.png";							
				}
		}
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-


var contact_info_array = [];
var survey_end_number;

///////////BRIAN EDIT 2019-11-25////////////////
var textTOC = "";//"Table of Contents";
///////////BRIAN EDIT 2019-11-25////////////////

//pvc = 0;
//fvc = 0;
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
//-------<( Component Engine Code Begin )>-------
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/*
if(courseType === "shortcourseA")
{
for(var q_ct = 0; q_ct < Q_count; q_ct++)
{

pgQueArray[q_ct] = {
page_nm: np_num,
question: q_ct,
//answer: 0,
answer: allPgQue[np_num][q_ct].answer,
choice: allPgQue[np_num][q_ct].choice,
module_number: 1,
}
}

}
console.log(allPgQue);
}
*/

///////////BRIAN EDIT 2019-11-25////////////////
//Start BRIAN 01/13/2020 -- added variables and new var added for close transcript
function returnLocale(){
	var returnedLocale = {locale:"en-US", textTOC: "Table of Contents"};
	
	if( typeof course_settings === "undefined" || typeof course_settings == null){
		returnedLocale.locale = "en-US";			
	}else{
		returnedLocale.locale = course_settings.Portal_Setup.course_locale;
	}

	//set "TOC" based on locale
	switch (returnedLocale.locale){
		case "ar-MA": 	returnedLocale.textTOC = "جدول المحتويات";
		break;
			
		case "en-US": 	returnedLocale.textTOC = "Table of Contents";
						trans_button = "Open Transcript";
						trans_close = "Close Transcript";
						submit_button = "Submit";
						closeButton = "Close";
						bStartButton = "Start";
						bNextButton = "Next";
						bBackButton = "Back";
						bReplayButton = "Replay";
		break;
			
		case "es-MX": 	returnedLocale.textTOC = "Tabla de contenido";
		break;
		
		case "fr-CA":
		case "fr-FR": 	returnedLocale.textTOC = "Table des matières";
						trans_button = "Voir la transcription";
						trans_close = "Fermer la transcription";
						submit_button = "Envoyer";
						imgDescButton = "Description de l'image"; // JAMES 04-12-2021
						closeButton = "Fermer";
						bStartButton = "Commencer";
						bNextButton = "Suivant";
						bBackButton = "Retour";
						bReplayButton = "Revoir";
		break;
			
		case "id-ID": 	returnedLocale.textTOC = "Daftar Isi";
		break;
			
		case "ko-KR": 	returnedLocale.textTOC = "목차";
		break;
			
		case "pt-BR": 	returnedLocale.textTOC = "Índice";
		break;
			
		case "th-TH": 	returnedLocale.textTOC = "สารบัญ";
		break;
			
		case "vi-VN": 	returnedLocale.textTOC = "Mục lục";
		break;
		
		case "zh-HK":
		case "zh-MO":
		case "zh-SG":
		case "zh-TW":
		case "zh-CHT": 	returnedLocale.textTOC = "目錄菜單";//"目錄表";
						trans_button = "打開腳本";
						trans_close = "關閉腳本";
						submit_button = "提交";//"發送";
						imgDescButton = "圖像描述"; // JAMES 01/26/2021
						closeButton = "關閉";
						bStartButton = "開始";
						bNextButton = "繼續";
						bBackButton = "返回";
						bReplayButton = "重新開始";
		break;
		
		case "zh-CN":
		case "zh-CHS": 	returnedLocale.textTOC = "目录菜单";//"目录表";
						trans_button = "打开脚本";
						trans_close = "关闭脚本";
						submit_button = "提交";//"发送";
						imgDescButton = "图像描述"; // JAMES 01/26/2021
						closeButton = "关闭";
						bStartButton = "开始";
						bNextButton = "继续";
						bBackButton = "返回";
						bReplayButton = "重新开始";
		break;

		default: 		returnedLocale.textTOC = "Table of Contents";
						trans_button = "Open Transcript";
						trans_close = "Close Transcript";
						submit_button = "Submit";
						closeButton = "Close";
						bStartButton = "Start";
						bNextButton = "Next";
						bBackButton = "Back";
						bReplayButton = "Replay";
			
	
		break;
	}

	//console.log("locale = " + returnedLocale.locale + "\ntextTOC = " + returnedLocale.textTOC);

	return returnedLocale;
}
///////////End BRIAN 01/13/2020////////////////





function Component_Engine(ceData)
{
	
//alert(typeof portalSetup.course_locale);
	

	///////////BRIAN EDIT 2019-11-25////////////////
	var locale = returnLocale();
	///////////BRIAN EDIT 2019-11-25////////////////	

	
//alert(portalSetup.course_locale);		
	
//alert("jcc count: " + jcc);	
	
	
pgQueArray = [];	

if(typeof courseType !== "undefined")
	{

		//Start BRIAN 01/13/2020 : variables moved to returnLocal function (new variable added to list at top, too)
		/* if(portalSetup.course_locale === "en-US")
			{
				trans_button = "Open Transcript";
				submit_button = "Submit";
			}		
		
		
			if(portalSetup.course_locale === "zh-CHT")
			{
				trans_button = "抄本";
				submit_button = "發送";
			}

			if(portalSetup.course_locale === "fr-CA")
			{
				trans_button = "Transcription";
				submit_button = "Envoyer";
			}
		
		console.log("line 366 says that Transcript should be " + trans_button); */
		//End BRIAN 01/13/2020
		
	//if(courseType.indexOf("shortcourseA") !== -1 && courseType.indexOf("demo") === -1)
	if(courseType.indexOf("shortcourseA") !== -1)	
		{
			for(var q_ct = 0; q_ct < Q_count; q_ct++)
				{

					pgQueArray[q_ct] = 	{
											page_nm: np_num,
											question: q_ct,
											//answer: 0,
											answer: allPgQue[np_num][q_ct].answer,  // add var
											//choice: 0,
											choice: allPgQue[np_num][q_ct].choice, // add var
											module_number: 1,
										}	
				}

		}
	
	}


	if(ADA_check_Array.length > 0)
		{
			
			for(var adalngth = 0; adalngth < ADA_check_Array.length ;adalngth++)
				{
					if(typeof ADA_check_Array[adalngth] !== "undefined")
						{
								var Anum = aCa + 1;
								ADA_checked_Array[aCa] = [Anum] + ": " + ADA_check_Array[adalngth] + "\n";
								aCa = (aCa + 1);


						}
					
				}
							
			ADA_String = ADA_checked_Array.toString().replace(/,/g,"");
			
			if(typeof courseType === "undefined")
				{
					//alert(ADA_String);

				}
			
		
		}
	

	jcc_Comp_Creator = $("<div style='height:0px'></div>");

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-	
//-------<( Previous and Next buttons )>-------	
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-	
if(typeof np_num === "undefined")
	{

		$(jcc_Comp_Creator).append("<div>" + ceData + "</div>");
		$(jcc_Comp_Creator).append("</div>");
	}
	
if(typeof np_num !== "undefined")
	{

if(np_num === 1) // This is for Development Mode.
	{

		gtMain[0] = Number(mod_lsn[0] - 1);
		gtMain[1] = Number(mod_lsn[1]);
	
		///////////BRIAN EDIT 2019-11-25////////////////
		//$(jcc_Comp_Creator).append("<div id='Prev_Lesson' class='col-lg-12 col-md-12 col-xs-12 prev_lesson' onClick='javascript:view_lesson("+gtMain[0]+","+gtMain[1]+",\"TC\")' style='width:100%;margin-bottom: 10px;'><l3 id='pr_label'>&#9650 &#160 Table of Contents</l3></div>"); 		

		$(jcc_Comp_Creator).append("<div id='Prev_Lesson' class='col-lg-12 col-md-12 col-xs-12 prev_lesson' onClick='javascript:view_lesson("+gtMain[0]+","+gtMain[1]+",\"TC\")' style='width:100%;margin-bottom: 10px;'><l3 id='pr_label'>&#9650 &#160 " + locale.textTOC  + "</l3></div>"); //Back Button
		 ///////////BRIAN EDIT 2019-11-25////////////////
	}
		
		
if(np_num !== 1) // This is for portal Mode.
	{
		//alert("np_num !== 1");
		$(jcc_Comp_Creator).append("<div id='Prev_Lesson' class='col-lg-12 col-md-12 col-xs-12 prev_lesson' onClick='javascript:prev_lesson()' style='width:100%;margin-bottom: 10px;'><l3 id='pr_label'>&#9650 &#160"+toc_flyout_fn_array[np_num -1]+"</l3></div>"); //9668
	}
	
	$(jcc_Comp_Creator).append("<div id='Hero_Image_File' class='col-lg-12 col-md-12 col-xs-12 panel-group' style='width:100%;margin-top: 10px; '>");	
	$(jcc_Comp_Creator).append("<div>" + ceData + "</div>");
	$(jcc_Comp_Creator).append("</div>");

//-------<( Added by Jack for the Reflection Video Component 07/23/2021 )>-------
switch(ref_eol)
	{
		case 0:
				console.log("Not End of lesson")
				if( (np_num + 1 ) !== ( toc_flyout_fn_array.length )  )
				{
					$(jcc_Comp_Creator).append("<div id='Next_Lesson' class='col-lg-12 col-md-12 col-xs-12 next_lesson' onClick='javascript:next_lesson()' style='width:100%;margin-bottom: 50px;'><l3 id='nx_label'>"+toc_flyout_fn_array[np_num + 1]+"&#160 &#9660</l3></div>"); //9658	
				}				
		break;

		case 1:
				console.log("Is the End of lesson")
				if( (np_num + 1 ) !== ( toc_flyout_fn_array.length )  )
				{
					$(jcc_Comp_Creator).append("<div id='Next_Lesson' class='col-lg-12 col-md-12 col-xs-12 next_lesson' style='width:100%;margin-bottom: 50px;cursor:not-allowed'><l3 id='nx_label'>"+toc_flyout_fn_array[np_num + 1]+"&#160 &#9660</l3></div>"); //9658	
				}				
		break;
	}
//-------<( Added by Jack for the Reflection Video Component 07/23/2021 )>-------

// Commented out by Jack on  07/23/2021 
/* 
	if( (np_num + 1 ) !== ( toc_flyout_fn_array.length )  )
		{
			$(jcc_Comp_Creator).append("<div id='Next_Lesson' class='col-lg-12 col-md-12 col-xs-12 next_lesson' onClick='javascript:next_lesson()' style='width:100%;margin-bottom: 50px;'><l3 id='nx_label'>"+toc_flyout_fn_array[np_num + 1]+"&#160 &#9660</l3></div>"); //9658	
		}
*/
// Commented out by Jack on  07/23/2021 

}		
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-	
//-------<( Previous and Next buttons )>-------	
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-		
	
$(jcc_Comp_Creator).append("<div class='col-lg-12 col-md-12 col-xs-12 panel-group' style='display: block; margin-bottom:20px;'></div>");	
	

	$("#JcComponents").append(jcc_Comp_Creator);
	
	document.getElementById("JcComponents").scrollTop = 100;
	

	
	jcc_Comp_Creator = "";

	for(var flpr = 0; flpr < flip_card_Array.length; flpr++)
		{
		
			if(typeof flip_card_Array[flpr] === "object")
				{
					if(flip_card_Array[flpr].length > 0)
						{
							//alert("flip_card_Array: " + flip_card_Array[flpr]);
								for(var idb = 0; idb < flip_card_Array[flpr].length; idb++)
									{
										//alert(flip_card_Array[flpr][idb]);
										
										Setup_flip_id( flip_card_Array[flpr][idb] );
	
									}
						}
				}
	
		}


	
// id='vid_source_"+jcc+"'
	


	
/*	
if(video_counter > 0)
	{
	var nc_num;
		for(var vln = 0; vln < Vid_count_array.length; vln++)
			{
				if(typeof Vid_count_array[vln] !== "undefined")
					{
						nc_num = vln;
						
						//alert("vid_click_array[vln]: " + vid_click_array[vln]);
						
						vid_array[nc_num] = document.getElementById(vid_click_array[nc_num]);
						
						alert("vid_array[nc_num]: " + vid_array[nc_num]);
						
						
						vid_array[nc_num].onplay = function() {
    						alert("The video vid_source_" + nc_num + " has started to play");
						};						
						

					}
			}
	}
*/	
				/*
						var vid = document.getElementById("vid_source_3");
			alert("vid: " + vid);
						vid.onplay = function() {
    						alert("The video vid_source_" + vln + " has started to play");
						};
				*/
	//document.getElementById("vid_source_3").style.display = "none";
	
/*	
var vid = document.getElementById("myVideo");
vid.onplay = function() {
    alert("The video has started to play");
};	
*/	
	

//-=--=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-
//********************************KEY TERMS***************************************
function showKeyterm(e){
	//-------- Fuzzy Set ----------------//
	var bTermArray = [];
	
	//FUZZYSET
	
	for (var bTermNum = 0; bTermNum < glossary_settings.glossary_setup.length; bTermNum ++){

	//for (var bTermNum = 0; bTermNum < glossary_settings.glossary_setup.length - 1; bTermNum ++){
		bTermArray[bTermNum] = glossary_settings.glossary_setup[bTermNum].term;
	}
	//console.log(bTermArray);
	fs = FuzzySet(bTermArray, false);
	
	
	var kt_mod; 
	
		var lastFocus = e.target;
	
		if(!document.getElementById("keytermsdiv")){
	
			var searchTerm = lastFocus.innerHTML.toLowerCase();
	
			//FUZZYSET
			var bSearchResult = fs.get(searchTerm);	
			//console.log(bSearchResult);
			//console.log(bSearchResult[0][1]);
	
	
			for(var i = 0; i < glossary_settings.glossary_setup.length; i++){
	
				//if (searchTerm === glossary_settings.glossary_setup[i].term.toLowerCase()){
				if (bSearchResult[0][1] === glossary_settings.glossary_setup[i].term){
					
	
					term_head = glossary_settings.glossary_setup[i].term;
	
					term_def = glossary_settings.glossary_setup[i].definition;
	
					
	
					//Added 2019-09-16 Brian----------------------------------------------
	
					var ktStatement = {
						"type": "keyterm",
						"verb": "pressed",
						"activity": "http://id.tincanapi.com/activitytype/vocabulary-word",
						"module": bCurrentMod + 1,
						"lesson": bCurrentLsn + 1,
						//"page": bCurrentPag + 1,
						"page": np_num,
						"objectID": term_head.replace(/ /g, '_') 
	
					};
	
					if(isXAPI){
	
						LRSSend(ktStatement);
	
					}
	
					//Added 2019-09-16 Brian----------------------------------------------
	
			Key_Term_Modal(term_head,term_def);     
	
					break;
	
				}
	
			}
	
		}
	
		
	
		$("#keytermsparent").on("blur click keyup", function(e){
	
			//console.log(e.type);
	
			if(e.type === "click" || e.type === "blur"){
	
				closeAndRefocus();
	
			}else if (e.type === "keyup" && e.key === "Escape"|| e.type === "keyup" && e.which === 27){//Escape key
	
				closeAndRefocus();
	
			}
	
		});
	
		function closeAndRefocus(){
	
			lastFocus.focus();
	
			$("#keytermsdiv").remove();
	
			$("#keytermsparent").css("display","none");
	
	
		}
	
	}
	

	
//=====================================================================================
	$( ".sourceLine" ).click(function(e){
			//alert("sourceLine clicked = " + e);
		//alert("jcc: " + jcc);  // commeted out on 9/18/2019
		
		
		//showSourceline(e);
		//showKeyterm
	});
	
	
	

	$( ".keyterm" ).click(function(e){
		showKeyterm(e);

	});

	$(document).keydown(function(e) {
		if(e.which === 13){//Enter
			showKeyterm(e);
		}
	});		
	

	function Setup_flip_id(sfi)
	{

		
		
			$(document).ready(function(){ //document or this
				$("#" + sfi).flip({
					axis: 'y',
					trigger: 'manual'
				});

			});

	}




	

	
	for(var qstst = 0; qstst < Q_Square.length; qstst++)
		{
			if(typeof Q_Square[qstst] != "undefined")
				{
					Q_Block[np_num] = Q_Square[qstst];
					Q_Block_IC[np_num] = Q_IF_feedback[qstst];

					$(Q_Block[np_num].toString()).addClass('ma_CorrectNS');
					document.getElementById(Q_Block_IC[np_num]).style.display = "block";

				}
	
		}

	Q_Square = [];
	Q_IF_feedback = [];

	
/*	
	if(JB_time_comp > 0);
		{
			JBSW_setup();
		}
*/
	
	
	if(pvc === 1)
		{
		
			//document.getElementById("iRate").innerHTML = document.getElementById("pvIntRange").value + "%";
			
			document.getElementById("iRate").innerHTML = document.getElementById("pvIntRange").value + "%";
			
			//document.getElementById("iRate").innerHTML = document.getElementById("pvIntRange").value;

			document.getElementById("iYear").innerHTML = document.getElementById("pvYearRange").value;

			
			slider_Int_pv = document.getElementById("pvIntRange").value;
			slider_Year_pv = document.getElementById("pvYearRange").value;
			
			
			get_value();

			
			if($(document).width() >= 410)
				{
					document.getElementById("rotText").style.left = "-190px";

				}
			
			if($(document).width() <= 410)
				{
					document.getElementById("rotText").style.left = "10px";

				}			
			

		}
	
	if(fvc === 1)
		{
			
			document.getElementById("fv_iRate").innerHTML = document.getElementById("fvIntRange").value + "%";
			
			document.getElementById("fv_iYear").innerHTML = document.getElementById("fvYearRange").value;
			
			
			slider_Int_pv = document.getElementById("fvIntRange").value;
			slider_Year_pv = document.getElementById("fvYearRange").value;			
			

			get_fvalue();

			
			if($(document).width() >= 410)
				{
					document.getElementById("rotfText").style.left = "-190px";
				}
			
			if($(document).width() <= 410)
				{
					document.getElementById("rotfText").style.left = "10px";
				}			
			

		}
	
	
	
}

function acc_clicked(acc_c_num,scc_clk)
{
//aria-expanded
//console.log("accordion was clicked: " + scc_clk);
	var car_icon = document.getElementById("apm_" + acc_c_num + "_" + scc_clk);
	//console.log(car_icon.classList.value);
	
	if(car_icon.classList.value === "glyphicon glyphicon-minus")
		{
			car_icon.classList.remove("glyphicon-minus");
			car_icon.classList.add("glyphicon-plus");
		}
	else
		{
			car_icon.classList.remove("glyphicon-plus");
			car_icon.classList.add("glyphicon-minus");
		}

	
/*	
	if(car_icon.classList.value !== "glyphicon glyphicon-minus")
		{
			car_icon.classList.remove("glyphicon-plus");
			car_icon.classList.add("glyphicon-minus");
		}
*/	
	//if(scc_clk )
	//console.log("scc_clk: " + scc_clk);
	

	
	for(var lgm = 1; lgm <= acc_count_array[acc_c_num]; lgm++)
			{
				if(scc_clk !== lgm)
					{
								//console.log("Not equal scc_clk: " + scc_clk + " / lgm: " + lgm);
								//car_icon.classList.remove("glyphicon-minus");
								//car_icon.classList.add("glyphicon-plus");	
						
								document.getElementById("apm_" + acc_c_num + "_" + lgm).classList.remove("glyphicon-minus");
								document.getElementById("apm_" + acc_c_num + "_" + lgm).classList.add("glyphicon-plus");
					}
				
			

			}
	

	
	
var accordionid = "jb_accordion_" + acc_c_num;
var tb_clicked = scc_clk;	
var tb_total_tabs = acc_multi[acc_c_num];	

	
var accordionStatement = {

                "type": "accordion",

                "verb": "interacted",

                "activity": "http://adlnet.gov/expapi/activities/interaction",
				
					"module": bCurrentMod + 1, //bCurrentMod
					"lesson": bCurrentLsn + 1, //bCurrentLsn
					"page": np_num, 
	
	
                "objectID":  accordionid,

                "extensions":{

                                "tabsclicked": tb_clicked,

                                "tabstotal": tb_total_tabs,

                                }
	
}	
	
					if(isXAPI){
									LRSSend(accordionStatement);
							}	
	
}

			//alert(document.getElementById(cur_slide_number[idn][nav_test]).className);
			
								//document.getElementById("car_left_" + idn).style.visibility = "hidden";
								//document.getElementById("car_right_" + idn).style.visibility = "visible";	

function car_click(idn,ca_lr,cr_rpt,cardir) // ca_lr 0 = prev 1 = next
{


	var carouselid = idn + "_" +"jcCarousel";
	var car_slide_total = car_slide_array[idn];

if((document.getElementById("car_left_" + idn).style.visibility) === "hidden")
	{
		cur_slide = 0;
	}

if(car_rpt[idn] === "true")
	{
		
		document.getElementById("car_left_" + idn).style.visibility = "visible";
		document.getElementById("car_right_" + idn).style.visibility = "visible";
	}
	
	
if(car_rpt[idn] === "false")
	{
	switch(cardir)
		{


			

			case 1:
						if(document.getElementById(cur_slide_number[idn][0]).className === "item active")
							{
								document.getElementById("car_left_" + idn).style.visibility = "visible";
							}
				
						if(document.getElementById(cur_slide_number[idn][car_slide_array[idn] - 2]).className === "item active")
							{
								
								document.getElementById("car_right_" + idn).style.visibility = "hidden";
								
								
							}

							
							//cur_slide_number[idn].length


										if(cur_slide > 0)
											{

												cur_slide = (cur_slide + 1);
													if(cur_slide === car_slide_total)
														{
															cur_slide = (cur_slide - 1);
														}

											}


										if(cur_slide === 0)
											{
												cur_slide = (cur_slide + 1);
												
											}

								

			break;
				
			case 0:
						if(document.getElementById(cur_slide_number[idn][1]).className === "item active")
							{
								document.getElementById("car_left_" + idn).style.visibility = "hidden";
							}
				
						if(document.getElementById(cur_slide_number[idn][car_slide_array[idn] - 1]).className === "item active")
							{
								
								document.getElementById("car_right_" + idn).style.visibility = "visible";
							}	
							
							if(cur_slide > 0)
								{
									cur_slide = (cur_slide - 1);
								}

			break;	
		}
	}
/*
	if(document.getElementById(cur_slide_number[idn][0]).className !== "item active")
		{
			//alert("Left Arrow On");
		}	
*/








/*
console.log("================================================");
console.log("cur_slide: " + cur_slide)
console.log("cur_slide_number["+idn+"][cur_slide]: " + cur_slide_number[idn][cur_slide])
console.log("================================================");

console.log("idn: " + idn);
console.log("cur_slide: " + cur_slide_number[idn][0]);
console.log("car_slide_total: " + car_slide_total);

console.log("bCurrentMod + 1: " + bCurrentMod + 1);
console.log("bCurrentLsn + 1: " + bCurrentLsn + 1);

console.log("np_num: " + np_num);
console.log("carouselid: " + carouselid);
console.log("================================================");
*/



var carouselStatement = {

                "type": "carousel",

                "verb": "interacted",

                "activity": "http://adlnet.gov/expapi/activities/interaction",
				"module": bCurrentMod + 1, //bCurrentMod
				"lesson": bCurrentLsn + 1, //bCurrentLsn
				"page": np_num,

                "objectID":  carouselid,

                "extensions":{

                                "slideclicked": cur_slide,
                                "slidestotal": car_slide_total,
									
                                }

}	
						if(isXAPI){
									LRSSend(carouselStatement);
							}	

}

function bubble_call(curbid,bslidecount) //bk
{
	//alert("bubble_call was run " + curbid);
	//alert("speech_number[curbid].length: " + speech_number[curbid].length);
	//alert("current slide: " + bslidecount);
	
var speechbubbleid = ("spb_"+ curbid);
var sb_sld_num_clicked = bslidecount;
var sb_sld_total_num = (speech_number[curbid].length - 1);
	

	
				var speechbubblesStatement = {

								"type": "speechbubble",
								"verb": "interacted",
								"activity": "http://adlnet.gov/expapi/activities/interaction",
								"module": bCurrentMod + 1, //bCurrentMod
								"lesson": bCurrentLsn + 1, //bCurrentLsn
								"page": np_num,	
								"objectID":  speechbubbleid,
								"extensions":{
												"slideclicked": sb_sld_num_clicked,
												"slidestotal": sb_sld_total_num,
												}

				}	
									
				//alert(typeof isXAPI);
								
						if(typeof isXAPI !== "undefined")
							{
								LRSSend(speechbubblesStatement);
							}
					


}

function stopwatch_click(swid,sw_action,sw_cur_ro)
{
	var stopwatchID = "jb_stopwatch_" + swid;
	var stopwatch_start;
	var stopwatch_end;
	var stopwatch_duration;
	var stopwatch_reset;
	
		switch(sw_action)
			{
				case "start":
						stopwatch_start = document.getElementById("JB_readout_"+swid).innerHTML;
				break;
					
				case "stop":
						stopwatch_end = document.getElementById("JB_readout_"+swid).innerHTML;
						stopwatch_duration = document.getElementById("JB_readout_"+swid).innerHTML;
				break;
					
				case "reset":
						stopwatch_reset = document.getElementById("JB_readout_"+swid).innerHTML;
				break;	
					
			}
	
var stopwatch_data = {

                "type": "stopwatch",
                "verb": "interacted",
                "activity": "http://adlnet.gov/expapi/activities/interaction",
                "module": bCurrentMod + 1,
    			"lesson": bCurrentLsn + 1,
                ////"page": bCurrentPag + 1,
				"page": np_num,
                "objectID":  stopwatchID,
	
                "extensions":{

                                "startTime": stopwatch_start,
                                "stopTime": stopwatch_end,
                                "duration": stopwatch_duration,

                                }
								

						}

								if(typeof isXAPI !== "undefined")
							{
	
										LRSSend(stopwatch_data);
							  }	
							  
	
	
};
//vid_ref_source_
function video_reflect(vrefNum)
{
	//console.log(cur_vid[vrefNum])

	var vid_ref_dur = document.getElementById("vid_ref_source_" + vrefNum);

	vid_ref_dur.onended = function() {
		document.getElementById("reflect_input_" + vrefNum).style.display = "block";
		document.getElementById("r_option_input_" + vrefNum).style.display = "block";

		var reftop = (document.getElementById("reflect_input_" + vrefNum).offsetTop) + (document.getElementById("reflect_input_" + vrefNum).offsetHeight);


//console.log("reftop: " + reftop);

window.scrollTo({top:reftop, behavior:'smooth'});

		//document.getElementById("reflect_input_" + vrefNum).scrollTop = reftop;
		//Start a listener for the input.

		//document.getElementById('Next_Lesson').style.pointerEvents = 'auto';

/*
  var elmnt = document.getElementById("content");
  elmnt.scrollIntoView();
*/
	};

}
var rr_count = 0;
function reflect_test(rft)
{
	
	rr_count = (rr_count + 1);
	var rfc = (document.getElementById("ref_quest_"+rft).value.length);

	

	var rfcsp = (document.getElementById("ref_quest_"+rft).value);

	if(rfc < 3)
		{
			document.getElementById("refchk_"+rft).style.display = "block";
			var element = document.getElementById("rf_sub_"+rft);
			element.classList.add("disabled");
		}

	if(rfc > 3)
		{
			var element = document.getElementById("rf_sub_"+rft);

				if(!rfcsp.replace(/\s/g, '').length){
					//alert("Please answer the question.")
					//console.log('string only contains whitespace (ie. spaces, tabs or line breaks)');
					document.getElementById("refchk_"+rft).innerHTML = "* Please answer the question *";
				  }
				  else
				  {
					element.classList.remove("disabled");
					document.getElementById("refchk_"+rft).style.display = "none";
				  }
			//console.log(rfcsp.valueOf());
			//console.log( rfcsp.search(/\s/) );
		}

}

function rv_sub(rvs,optnm)
{
	var ref_Answers = [];
	//console.log(document.getElementById('ref_quest_' + rvs).value);

	ref_Answers[0] = document.getElementById('ref_quest_' + rvs).value;

  document.getElementById('vr_feedback_'+ rvs).style.display = "block";


	for(var opnm = 0; opnm < optnm; opnm++)
		{
			//console.log(document.getElementById('roption_quest_' + rvs + "_" + opnm).value);
			ref_Answers[opnm + 1] = document.getElementById('roption_quest_' + rvs + "_" + opnm).value;
			
		}

	
	

		console.log("ref_Answers: " + ref_Answers);	

	lrsVideoQuestionData(ref_Answers);
	
	//document.getElementById('ref_quest_' + rvs).style.pointerEvents = 'none'; // Do we want to disable the answer field once they answer it?

	//vr_feedback

	


//	document.getElementById('Next_Lesson').style.pointerEvents = 'auto';
	

	$(jcc_Comp_Creator).append("<div id='Next_Lesson' class='col-lg-12 col-md-12 col-xs-12 next_lesson' onClick='javascript:next_lesson()' style='width:100%;margin-bottom: 50px;'><l3 id='nx_label'>"+toc_flyout_fn_array[np_num + 1]+"&#160 &#9660</l3></div>"); //9658


	//document.getElementById('nx_label').style.pointerEvents = 'auto';
//nx_label
	
}

function lrsVideoQuestionData(vqdata)

{
//console.log("vqdata: " + vqdata);

document.getElementById('Next_Lesson').style.pointerEvents = 'auto';

         var videoQuestionStatement = {
                   "type": "videofeedback",
                   "verb": "answered",

                   "activity": "http://adlnet.gov/expapi/activities/videofeedback",
                   "module": bCurrentMod + 1,
                   "lesson": bCurrentLsn + 1,
                   "page": np_num,

                   "objectID": course_settings.Portal_Setup.Course_Folder,

                   "extensions":
				   					vqdata
                   }

         if(isXAPI){

                   LRSSend(videoQuestionStatement);
				   bSetState();

         }

}



function video_number(v_nber)
{
var jb_player = document.getElementById("vid_source_"+ v_nber);
var vid_start = jb_player.currentTime;
var vid_name = cur_vid[v_nber];
var vid_duration = jb_player.duration;	


	jb_player.onpause = function()
		{
			var vid_stop = jb_player.currentTime;
			//------------------------------------	

			var audiovideo =	{
							"type": "video",
							"verb": "played",
							"activity": "http://activitystrea.ms/schema/1.0/video",
							"module": bCurrentMod + 1, //bCurrentMod
							"lesson": bCurrentLsn + 1, //bCurrentLsn
							"page": np_num,
				
							"objectID": vid_name,
								"extensions":
								  {
									"startTime": vid_start,
									 "stopTime": vid_stop,
									 "duration": vid_duration,  
								  }
						}
									if(isXAPI){
													LRSSend(audiovideo);
												}
		};	

}

function audio_number(a_nber)
{
	//aud_source_"+jcc+"'
	//alert("aud_source_" + a_nber);
	//alert("cur_aud[a_nber]: " + cur_aud[a_nber]);
	//alert("a_nber: " + a_nber);
	//alert("audio_loc: " + audio_loc);
	var jb_aud_player = document.getElementById("aud_source_"+ a_nber);
	
	var aud_name = cur_aud[a_nber];
	var aud_duration = jb_aud_player.duration;
	var aud_start = jb_aud_player.currentTime;
	
		jb_aud_player.onpause = function()
		
		{
			var aud_stop = jb_aud_player.currentTime;
			
			
				var audiovideo =	{
							"type": "audio",
							"verb": "played",
							"activity": "http://activitystrea.ms/schema/1.0/audio",
							"module": bCurrentMod + 1, //bCurrentMod
							"lesson": bCurrentLsn + 1, //bCurrentLsn
							"page": np_num,
				
							"objectID": aud_name,
								"extensions":
								  {
									"startTime": aud_start,
									 "stopTime": aud_stop,
									 "duration": aud_duration,  
								  }
						}

										if(isXAPI){
													LRSSend(audiovideo);
												}			
		}

}


function slider_Int_pv_go_int()
{
	get_value();
	document.getElementById("iRate").innerHTML = document.getElementById("pvIntRange").value + "%";
	//document.getElementById("iRate").innerHTML = document.getElementById("pvIntRange").value;
	//value_bar  transform: scale(2, 4);
	//\\//\\//document.getElementById("value_bar").style.height = (document.getElementById("pvIntRange").value * 10) + "px";
	
}

function slider_Int_fv_go_int()
{
	get_fvalue();
	document.getElementById("fv_iRate").innerHTML = document.getElementById("fvIntRange").value + "%";
	
}

function slider_Year_pv_go_year()
{
	get_value();
	document.getElementById("iYear").innerHTML = document.getElementById("pvYearRange").value;
	
}

function slider_Year_fv_go_year()
{
	get_fvalue();
	document.getElementById("fv_iYear").innerHTML = document.getElementById("fvYearRange").value;
	
}


function get_value()
{
	var cur_val = 1000;
	var cur_int = 1 + (document.getElementById("pvIntRange").value * .01);

	
	for (i = 0; i < document.getElementById("pvYearRange").value; i++) 
	  {
		  
		  cur_val = cur_val / cur_int;

      }
	document.getElementById("calc_value").innerHTML = "$" + cur_val.toFixed(2);
	//document.getElementById("value_bar").style.height = (document.getElementById("pvIntRange").value * 10) + "px";
	
	document.getElementById("value_bar").style.height = (cur_val.toFixed(2) / 10) + "px";
}

function get_fvalue()
{
	var cur_fval = 1000;
	var cur_fint = 1 + (document.getElementById("fvIntRange").value * .01);

	/*	
for (i = 0; i < document.getElementById("fvYearRange").value; i++
	  {
           
		   cur_fval = cur_fval * cur_fint;		
      }
*/ 
	for (i = 0; i < document.getElementById("fvYearRange").value; i++) 
	  {
		  
		  cur_fval = cur_fval * cur_fint;

      }
	 
	document.getElementById("calc_fvalue").innerHTML = "$" + cur_fval.toFixed(2);
	//document.getElementById("value_bar").style.height = (document.getElementById("pvIntRange").value * 10) + "px";
	
	document.getElementById("value_fbar").style.height = ((cur_fval.toFixed(2) / 10) / 4) + "px";
}

/*
            var int = 1 + (interest * .01);

                    // Calculate FV
                    for (i = 0; i < years; i++) {
                        fv = fv * int;
                    }
*/




function showSourceline(e)
{
	//alert(e);
	
	//Source_Info
	//Source_File
	
	
	//alert(e.target);
}
/*
document.getElementsByTagName("BODY")[0].onresize = function()
	{
		//alert(window.innerWidth);
		//flw = window.innerWidth;
	};
*/
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
//-------<( Component Engine Code End )>-------
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

function TOC_Engine(toc_mod,toc_lsn)
{
	//alert( TOC[toc_mod][toc_lsn][0].Hero_Image; );
	//alert( TOC[toc_mod - 1][toc_lsn - 1][tc_con].lesson_name );
	
//  cRpage -> This is for the page number: Page x of x	
	
	//QA_num = "undefined";
	
	///////////BRIAN EDIT 2019-11-25////////////////
	var locale = returnLocale();
	// for testing commented out 12/05/2019
	//	document.getElementById("bar_close").getElementsByTagName("span")[0].innerText = locale.textTOC;
	// for testing commented out 12/05/2019
	//console.log("document.getElementById(\"bar_close\").getElementsByTagName(\"span\")[0].innerText = " + document.getElementById("bar_close").getElementsByTagName("span")[0].innerText);
	///////////BRIAN EDIT 2019-11-25////////////////	
	
	
	QA_num = null;
	
	document.getElementById("pg_header").style.display = "none";
	$("#lessonContent").empty();
	$("#JcComponents").empty();

	
	$("#flyout_scroll").empty();
	
	jcc_TOC_Creator = $("<div align='center' class='col-lg-12 col-md-12 col-xs-12 panel-group body_style' style='overflow-y: auto; overflow-x: none'>"); 	

							lesson_title_text = TOC[toc_mod - 1][toc_lsn - 1][0].TOC_Main_Title;
	
							$(jcc_TOC_Creator).append("<div><h1 style='color:#000000'>"+lesson_title_text+"</h1></div>");
	
	
							//$(jcc_TOC_Creator).append("");
							var toc_hi = moduleFolder + "images/" +	TOC[toc_mod - 1][toc_lsn - 1][0].TOC_Main_Page_Hero_Image;		
										
							$(jcc_TOC_Creator).append("<div><img alt='' src=' "+toc_hi+"' style='width:100%'></div>"); 
	
							$(jcc_TOC_Creator).append("<p style='text-align:justify; color:#000000; padding:20px;'>"+TOC[toc_mod - 1][toc_lsn - 1][0].TOC_Main_Page_Text+"</p>");
	
							mod_lsn[0] = (toc_mod);
							mod_lsn[1] = (toc_lsn);
	

toc_flyout_fn_array = [];	
TOC_File_Order_Array = [];	
	
	
	
	
var sprint_check;	
	for(var tc_con = 1; tc_con < TOC[toc_mod - 1][toc_lsn - 1].length; tc_con++)
		{
			//-=--=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-
    		//****************Added 2019-03-08 (Brian)****************************************
    		//-=--=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-
			if(courseType.indexOf("demo") === -1){
				if (bPageViews[toc_mod - 1][toc_lsn-1][tc_con-1] === 1){
					sprint_check = "chk_comp.png";
				}else{
					sprint_check = "chk_incomp.png";
				}
			}else{
				sprint_check = "chk_incomp.png";
			}
			//-=--=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-
    		//****************Added 2019-03-08 (Brian)****************************************
    		//-=--=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-
			
							//sprint_check = "chk_incomp.png";
	$(jcc_TOC_Creator).append("<div class='quest_char'><button class='toc_main_buttons' onclick='javascript:Page_Selection("+tc_con+",0)'><span style='text-align: left'>"+TOC[toc_mod - 1][toc_lsn - 1][tc_con].lesson_name+"</span><img id='toc_main_img_"+tc_con+"' src='jbuild_libs/images/"+sprint_check+"' alt='' style='width:20px; float: right'></button></div>");

			//-------<(  For Sprint display only )>-------//
		

		
				//Hero_Image
								toc_flyout_fn_array[tc_con] = TOC[toc_mod - 1][toc_lsn - 1][tc_con].lesson_name;	
			
								   TOC_File_Order_Array[tc_con] = TOC[toc_mod - 1][toc_lsn - 1][tc_con].Page_File_Name;

		} 

	

	$(jcc_TOC_Creator).append("</div>");

	

	
	$(jcc_TOC_Creator).append("<div id='Next_Lesson' class='col-lg-12 col-md-12 col-xs-12 next_lesson' onclick='javascript:Page_Selection(1,0)' style='width:100%;margin-bottom: 50px;'><l3 id='nx_label'>"+toc_flyout_fn_array[1]+"&#160 &#9660</l3></div>");	
	

	
	
	//document.getElementById("pg_header").style.display = "block";
	document.getElementById("lessonContent").style.display = "block";
	document.getElementById("portalContents").style.display = "none";
	//document.getElementById("flyout_scroll")

	$("#lessonContent").append(jcc_TOC_Creator);

	
	$("#lessonContent").scrollTop(0);
	

	
	

	$("#Toc_flyout").empty();
	$("#toc_fMenu").empty();
	$("#flyout_scroll").empty();
	
	jcc_TOC_Flyout_Menu = null;
	

	
	var flscrollTop = document.getElementById("pg_header").offsetHeight + 100;
	var flscrollBtm = document.getElementById("indexFooter").offsetTop;
	flscrollHeight = flscrollBtm - flscrollTop;	

	/*
	  	display: inline-block;
  		vertical-align: middle 20
	*/

	jcc_TOC_Flyout_Menu = $("<div style='height:"+flscrollHeight+"px; margin-top:100px;' id='toc_fMenu' class='overlay'>"); //panel-group body-style  height:70%  
	$(jcc_TOC_Flyout_Menu).append("<div id='flyout_scroll' style='overflow: hidden; overflow-y: auto;'>");
	$(jcc_TOC_Flyout_Menu).append("<div class='overlay-content'>"); //style='overflow-y: scroll'

	///////////BRIAN EDIT 2019-11-25////////////////
	//$(jcc_TOC_Flyout_Menu).append(" <button class='toc_fly_buttons' onClick='javascript:toc_back_to_main()'><span style='text-align: left;'>Table of Contents</span></button>"); //<img id='toc_fly_img_"+tocsd+"' src='jbuild_libs/images/"+sprint_check+"' alt='' style='width:20px; float: right'>		

	$(jcc_TOC_Flyout_Menu).append(" <button class='toc_fly_buttons' onClick='javascript:toc_back_to_main()'><span style='text-align: left;'>" + locale.textTOC + "</span></button>"); //<img id='toc_fly_img_"+tocsd+"' src='jbuild_libs/images/"+sprint_check+"' alt='' style='width:20px; float: right'>  // INSIDE THE TOC
	///////////BRIAN EDIT 2019-11-25////////////////
	
	
	for(var tocsd = 1; tocsd < TOC_File_Order_Array.length; tocsd++)
				{
			//-------<(  For Sprint display only )>-------//
			//-=--=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-
    		//****************Modified 2019-03-08 (Brian)*************************************
    		//-=--=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-

							if(courseType.indexOf("demo") === -1){
								if (bPageViews[toc_mod - 1][toc_lsn-1][tocsd-1] === 1){
									sprint_check = "chk_comp.png";
								}else{
									sprint_check = "chk_incomp.png";
								}
							}else{
								sprint_check = "chk_incomp.png";
							}
			//-------<(  For Sprint display only )>-------//	display:inline-block;	float: right;  style='text-align: left'; display: inline-block;
			//-=--=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-
    		//****************Modified 2019-03-08 (Brian)*************************************
    		//-=--=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-;
	
	$(jcc_TOC_Flyout_Menu).append(" <button class='toc_fly_buttons' onclick='javascript:Page_Selection("+tocsd+",1)'><span style='display:inline-block; max-width:20ch'>"+toc_flyout_fn_array[tocsd]+"</span><span><img id='toc_fly_img_"+tocsd+"' src='jbuild_libs/images/"+sprint_check+"' alt='' style='width:20px; float: right; vertical-align: middle'></span></button>");		//<span style="color:darkolivegreen;font-weight:bold">dark green</span>		

				}

	
	$(jcc_TOC_Flyout_Menu).append("</div>");
	$(jcc_TOC_Flyout_Menu).append("</div>");
	$(jcc_TOC_Flyout_Menu).append("</div>");
	
	$("#Toc_flyout").append(jcc_TOC_Flyout_Menu);
	

}


function toc_back_to_main()
{
	bShowBookmark = false; // Added 20190628 - BRIAN											 
	//alert("Number(mod_lsn[0] - 1): " + Number(mod_lsn[0] - 1) + " | Number(mod_lsn[1]): " + Number(mod_lsn[1]) );

	//view_lesson(gtMain[0],gtMain[1],"TC")
	//-------<(  Fixed by Jack on 03/06/2019  )>-------
	view_lesson(Number(mod_lsn[0] - 1),Number(mod_lsn[1]),"TC")
		toc_fly_icon.classList.remove("fa-close");
		toc_fly_icon.classList.add("fa-bars");
		jcc_toc_fly_num = 0;
}




function toc_slide()
{
//alert("tocs: " + tocs);
//bar_close
	
//document.getElementById("bar_close").style.display = "none";

toc_fly_icon = document.getElementById("bar_close");

	
	switch(jcc_toc_fly_num)
		{
		
			case 0:

				jcc_toc_fly_num = 1;
				if(screen.width <= 450)
					{
						document.getElementById("toc_fMenu").style.width = "100%";
						toc_fly_icon.classList.remove("fa-bars");
						toc_fly_icon.classList.add("fa-close");
					}
				
				else
					{
						 document.getElementById("toc_fMenu").style.width = "250px";
						toc_fly_icon.classList.remove("fa-bars");
						toc_fly_icon.classList.add("fa-close");						
					}

			break;
				
			case 1:
				jcc_toc_fly_num = 0;
				 document.getElementById("toc_fMenu").style.width = "0%";
						
						toc_fly_icon.classList.remove("fa-close");
						toc_fly_icon.classList.add("fa-bars");
			
			break;				
		}
	
}


function TOC_Generator()
{
	//alert("TOC_File_Order_Array: " + TOC_File_Order_Array);
	//alert("toc_flyout_fn_array: " + toc_flyout_fn_array);
}

function info_box_event(ibe)
{
	//$('#myModal_'+ ibe).modal('show');
	document.getElementById("myModal_"+ ibe).style.display = "block";
	document.getElementById("myModal_"+ ibe).style.marginTop = "80px";	
	
	
	var infoboxid = ("infobox_" + ibe);


var infopopStatement = {

                "type": "infopop",
                "verb": "viewed",
                "module": bCurrentMod + 1,
                "lesson": bCurrentLsn + 1,
                //"page": bCurrentPag + 1,
				"page": np_num,
                "activity": "http://id.tincanapi.com/activitytype/resource",
                "objectID": infoboxid,
}	
	
	if(typeof isXAPI !== "undefined"){

		LRSSend(infopopStatement);

	}	
	
	

}

function close_Info_modal(ibx)
{

	document.getElementById("myModal_" + ibx).style.display = "none";	
}
				
				



function Key_Term_Modal(ktrm,kdef)
{
	
	document.getElementById("jb_header_text").innerHTML = ktrm;
	document.getElementById("jb_modal_main_text").innerHTML = kdef;
	document.getElementById("keyModal").style.display = "block";

	document.getElementById("keyModal").style.marginTop = "80px"; // edited on 20190618 - BRIAN
}

function close_keyterm() {
  document.getElementById("keyModal").style.display = "none";
  document.getElementById("jb_header_text").innerHTML = "";
  document.getElementById("jb_modal_main_text").innerHTML = "";	


document.getElementById('flip_10').style.pointerEvents = 'auto';	

flip_switch = 0;
	
}


function Source_Line_Modal(lnSource)
{
	//sourceModal
	document.getElementById("source_text").innerHTML = lnSource;
	document.getElementById("sourceModal").style.display = "block";	
}


function Lesson_Data_File(LDF)
{
	
Q_count = 0;
		jcc_test = Object.keys(LDF[0]); // Lesson_Data_File main Keys:
		hrData = Object.keys(LDF[0][jcc_test[0]]); // Page_Setup

	
	cmpData = Object.keys(LDF[0][jcc_test[1]]);

	
for(var ln_num = 0; ln_num < Object.keys(LDF[0]).length; ln_num++)
		{

	switch(jcc_test[ln_num])
		{
			case "Page_Setup":
						
						for(var pps = 0; pps < hrData.length; pps++)
								{

									switch(hrData[pps])
										{
												//C:\JBuilder_Creator\LOMA_302\Modules\Mod_01\images
											case "Assets_folder":
												//../../../jbuild_libs/css/hioc.css
												//img_loc = "images/";
												//alert(typeof moduleFolder);
												
												if(typeof moduleFolder !== "undefined")
													{
														img_loc = moduleFolder.slice(0, -5) + "images/";
														audio_loc = moduleFolder.slice(0, -5) + "audio/";
														pdf_loc = moduleFolder.slice(0, -5) + "pdf/";
														wdg_loc = moduleFolder.slice(0, -5) + "widgets/";
													}
												if(typeof moduleFolder === "undefined")
													{
														img_loc = "images/";
														audio_loc = "audio/";
														pdf_loc = "pdf/";
														wdg_loc = "widgets/";
													}
												
												//str = str.slice(0, -1);
												//alert("From Page setup moduleFolder: " + moduleFolder);
												//alert(portalSetup.Course_Folder);
												//img_loc = "LOMA_302/Modules/Mod_01/images/";
												//audio_loc = "audio/";
												//pdf_loc = "pdf/";
											break;												
											case "Lesson_Header_Color":
												document.getElementById("pg_header").style.backgroundColor = "#004c9d";
												// Changed By Jack on 02/21/2022
												//document.getElementById("pg_header").style.backgroundColor = (LDF[0][jcc_test[ln_num]][hrData[pps]]);
											break;
											case "Lesson_Title_Color":
												document.getElementById("Page_Title").style.color = (LDF[0][jcc_test[ln_num]][hrData[pps]]);
											break;
												
											case "Lesson_Title_Text":
												
												//alert("typeof toc_list: " + typeof toc_list);
												//document.getElementById("Page_Title").innerHTML = (LDF[0][jcc_test[ln_num]][hrData[pps]]);
												/*
												if(typeof toc_list !== "undefined")
													{
														//alert("Ready for TOC");
														///////document.getElementById("Page_Title").innerHTML = (LDF[0][jcc_test[ln_num]][hrData[pps]]);
														//document.getElementById("Page_Title").innerHTML = (toc_whole.mod_num);
													} 
														else
													{
														//alert("Not Ready for TOC");
														
													}
												*/
											break;
										/*		
											case "Page_Title":
												document.getElementById("Lesson_Page_title").innerHTML = (LDF[0][jcc_test[ln_num]][hrData[pps]]);
											break;
										*/		
											case "Progress_Bar_Color":
												document.getElementById("prg_Bar").style.backgroundColor = (LDF[0][jcc_test[ln_num]][hrData[pps]]);
											break;
											case "Progress_Bar_Height":
												document.getElementById("prg_Bar").style.height = (LDF[0][jcc_test[ln_num]][hrData[pps]]);
											break;
												
											case "heroSize":
												Hero_Image_Size = ((LDF[0][jcc_test[ln_num]][hrData[pps]]));
												
												//alert("Boom!: " + LDF[0][jcc_test[ln_num]][hrData[pps + 2]]);
												//alert(pps);
												//hImage_alt
												
												//hImage
												
												//alert()
												
												if(LDF[0][jcc_test[ln_num]][hrData[pps + 1]].length > 0)
																{
																	header_image = LDF[0][jcc_test[ln_num]][hrData[pps + 1]];
																	header_alt = LDF[0][jcc_test[ln_num]][hrData[pps + 2]];
																	
																	//alert("header_alt: " + header_alt);
																		  
//Component_Engine("<img alt='"+LDF[0][jcc_test[ln_num]][hrData[pps + 2]]+"' src='"+img_loc+"" + LDF[0][jcc_test[ln_num]][hrData[pps + 1]] + "' alt='' style='width: " + Hero_Image_Size + "; height: " + Hero_Image_Size + "'>");			
																}
												
											break;	
											/*
											case "hImage":
												//alert( ((LDF[0][jcc_test[ln_num]][hrData[pps]])) );
												
												if(LDF[0][jcc_test[ln_num]][hrData[pps]].length > 0)
													{
														header_image = LDF[0][jcc_test[ln_num]][hrData[pps + 1]];
													}
												
												
											break;													
											*/	
											case "page_color":
												document.getElementById("Page_Body").style.backgroundColor = LDF[0][jcc_test[ln_num]][hrData[pps]];
											break;
												
											case "Course_Number":
												Course_Number_Val = (LDF[0][jcc_test[ln_num]][hrData[pps]]);
											break;
												
											case "Module_Number":
												Module_Number_Val = (LDF[0][jcc_test[ln_num]][hrData[pps]]);
											break;	
		
										}
								}	
						
				break;	
		
				
				case "JBuilder_Content":
	
				
	if(typeof header_image === "undefined")
		{
			Jcc_Comp_Maker = "<div id='jack_builder' class='col-lg-12 col-md-12 col-xs-12'></div>";	
		}
			
			
	if(typeof header_image !== "undefined")
		{

		Jcc_Comp_Maker = "<div style='width:100%;margin-top: 10px; margin-bottom: 10px'><img alt='"+header_alt+"' src='"+img_loc+"" + header_image + "' alt='' style='width: " + Hero_Image_Size + "; height: " + Hero_Image_Size + "'></div>";	
			
		//header_image = "undefined";
			
	//$(jcc_Comp_Creator).append("<div style='width:100%;margin-top: 10px;'><img alt='' src='"+img_loc+"" + header_image + "' alt='' style='width: " + Hero_Image_Size + "; height: " + Hero_Image_Size + "'></div>");
		}
		
						var SA_Data = Object.keys(LDF[0][jcc_test[ln_num]]);

				
				csnm = (SA_Data.length);
				
						var sSelections = [];
							
						
						///////var snglBld = [];

					
						for(jcc = 0; jcc < SA_Data.length; jcc++)
							{
								sSelections[jcc] = LDF[0][jcc_test[ln_num]][SA_Data[jcc]];
								snglBld[jcc] = String(Object.keys(LDF[0][jcc_test[ln_num]][SA_Data[jcc]]));
								
								switch(snglBld[jcc])
									{
//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄												
//-------------------------------------------------------------------------------------------------------------	
//-------<( Code For Stand Alone Components begin )>-------										
//-------------------------------------------------------------------------------------------------------------												
//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄	
			//Jcc_Comp_Maker = Jcc_Comp_Maker + "";
			//Jcc_Comp_Maker = Jcc_Comp_Maker + "";	
//--------------------------------------------------											
//-------<(  JB_Widget_Player Code Begin  )>-------
//--------------------------------------------------

case "JB_Present_Value_Calc":
										
		var Jb_pvc = sSelections[jcc][snglBld[jcc]];	

		pvc = 1;
											
				

Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='background-color:"+Jb_pvc[0].Main_Background_Color+";padding:10px; border-top-style:"+Jb_pvc[0].Top_line_style+"; border-top-color:"+Jb_pvc[0].Top_line_color+"; border-top-width:"+Jb_pvc[0].Top_line_weight+"; border-bottom-style:"+Jb_pvc[0].Bottom_line_style+"; border-bottom-color:"+Jb_pvc[0].Bottom_line_color+"; border-bottom-width:"+Jb_pvc[0].Bottom_line_weight+"' id='jb_slider_display' class='col-lg-12 col-md-12 col-xs-12' align='center'>";											
											

 Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='inside_sld'>";	
											
 Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='text-align:left;background-color:"+Jb_pvc[0].Main_Background_Color+"'><pv_fv_title>"+Jb_pvc[0].Title+"</pv_fv_title></div><span></span>";

Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='text-align:left' class='jb_mx_wd'>"+Jb_pvc[0].instructions+"</div>";

				Jcc_Comp_Maker = Jcc_Comp_Maker + "<table style='width:100%;border-spacing: 50px;background-color:"+Jb_pvc[0].Main_Background_Color+"'>";
											
						Jcc_Comp_Maker = Jcc_Comp_Maker + "<tr>";																	
							Jcc_Comp_Maker = Jcc_Comp_Maker + "<td class='pv_fv_td_border' style='color:#0070b0; font-weight: bold;width:20%'><pv_fv>"+Jb_pvc[0].Label_01+"<pv_fv></td>";
				
							Jcc_Comp_Maker = Jcc_Comp_Maker + "<td class='pv_fv_td_border'><div class='slidecontainer' style='padding:10px'><input type='range' min='0' max='10' value='5' step='.1' maxlength='3' class='slider' id='pvIntRange' oninput='slider_Int_pv_go_int()' onchange='slider_Int_pv_go_int()'></div><span><pv_fv_lbl>0</pv_fv_lbl></span><span style='float:right'><pv_fv_lbl>10</pv_fv_lbl></span></td>";												
										
							Jcc_Comp_Maker = Jcc_Comp_Maker + "<td class='pv_fv_td_border' style='width:20%; text-align:center'><span id='iRate' style='border-style:solid; border-color:black; border-weight:medium;padding:10px; background-color:white; display: inline-block; width:60px;font-size:18px; font-weight:bold; color:#000000'></span></td>";								
									

						Jcc_Comp_Maker = Jcc_Comp_Maker + "</tr>";					

										
											
						Jcc_Comp_Maker = Jcc_Comp_Maker + "<tr>";					
							Jcc_Comp_Maker = Jcc_Comp_Maker + "<td class='pv_fv_td_border' style='color:#0070b0; font-weight: bold;width:20%'><pv_fv>"+Jb_pvc[0].Label_02+"<pv_fv></td>";

							Jcc_Comp_Maker = Jcc_Comp_Maker + "<td class='pv_fv_td_border'><div class='slidecontainer' style='padding:10px'><input type='range' min='0' max='20' value='10' step='1' maxlength='2' class='slider' id='pvYearRange' oninput='slider_Year_pv_go_year()' onchange='slider_Year_pv_go_year()'></div><span><pv_fv_lbl>0</pv_fv_lbl></span><span style='float:right'><pv_fv_lbl>20</pv_fv_lbl></span></td>";											
													
							Jcc_Comp_Maker = Jcc_Comp_Maker + "<td class='pv_fv_td_border' style='width:20%; text-align:center'><span id='iYear' style='border-style:solid; border-color:black; border-weight:medium;padding:10px; background-color:white; display: inline-block; width:60px;font-size:18px; font-weight:bold;color: #000000'></span></td>";								
	
						Jcc_Comp_Maker = Jcc_Comp_Maker + "</tr>";												
											
				Jcc_Comp_Maker = Jcc_Comp_Maker + "</table>";					

						
	//======================

		Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='rotText'><vert_label>"+Jb_pvc[0].Graph_Label+"</vert_label></div>"; //	id='rotText'						
			//-------<>									
			Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='grDis' style='width:200px; height:200px; background-color:"+Jb_pvc[0].Main_Background_Color+"; border-left-style:solid; border-left-color:#000000; border-left-width:thick; border-bottom-style:solid; border-bottom-color:#000000; border-bottom-width:thick'>"; 
											
				
				Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='value_bar_setup' id='value_bar' style='width:100px; height:100px;background-color:#009539;'><div style='margin-top:-30px;' align='center'><span class='calc_readout' id='calc_value'></span></div></div>";
			
			Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
						
		Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";									
											
//============================
//-------										
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>"; 									
//Start End										
break;	

											
											
											
case "JB_Future_Value_Calc":
		var Jb_fvc = sSelections[jcc][snglBld[jcc]];	

		fvc = 1;
											
				

Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='background-color:"+Jb_fvc[0].Main_Background_Color+";padding:10px; border-top-style:"+Jb_fvc[0].Top_line_style+"; border-top-color:"+Jb_fvc[0].Top_line_color+"; border-top-width:"+Jb_fvc[0].Top_line_weight+"; border-bottom-style:"+Jb_fvc[0].Bottom_line_style+"; border-bottom-color:"+Jb_fvc[0].Bottom_line_color+"; border-bottom-width:"+Jb_fvc[0].Bottom_line_weight+"' id='jb_slider_display' class='col-lg-12 col-md-12 col-xs-12' align='center'>";											
											
//------- class='col-lg-12 col-md-12 col-xs-12'
 Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='inside_sld'>";	
											
 Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='text-align:left;background-color:"+Jb_fvc[0].Main_Background_Color+"'><pv_fv_title>"+Jb_fvc[0].Title+"</pv_fv_title></div><span></span>";

Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='text-align:left' class='jb_mx_wd'>"+Jb_fvc[0].instructions+"</div>";

				Jcc_Comp_Maker = Jcc_Comp_Maker + "<table style='width:100%;border-spacing: 50px;background-color:"+Jb_fvc[0].Main_Background_Color+"'>";
											
						Jcc_Comp_Maker = Jcc_Comp_Maker + "<tr>";																	
							Jcc_Comp_Maker = Jcc_Comp_Maker + "<td class='pv_fv_td_border' style='color:#0070b0; font-weight: bold;width:20%'><pv_fv>"+Jb_fvc[0].Label_01+"<pv_fv></td>";
							
								

							Jcc_Comp_Maker = Jcc_Comp_Maker + "<td class='pv_fv_td_border'><div class='slidecontainer' style='padding:10px'><input type='range' min='0' max='10' value='5' step='.1' maxlength='3' class='slider' id='fvIntRange' oninput='slider_Int_fv_go_int()' onchange='slider_Int_fv_go_int()'></div><span><pv_fv_lbl>0</pv_fv_lbl></span><span style='float:right'><pv_fv_lbl>10</pv_fv_lbl></span></td>";												
	
											
							Jcc_Comp_Maker = Jcc_Comp_Maker + "<td class='pv_fv_td_border' style='width:20%; text-align:center'><span id='fv_iRate' style='border-style:solid; border-color:black; border-weight:medium;padding:10px; background-color:white; display: inline-block; width:60px;font-size:18px; font-weight:bold; color:#000000'></span></td>";								
											

						Jcc_Comp_Maker = Jcc_Comp_Maker + "</tr>";					

										
											
						Jcc_Comp_Maker = Jcc_Comp_Maker + "<tr>";					
							Jcc_Comp_Maker = Jcc_Comp_Maker + "<td class='pv_fv_td_border' style='color:#0070b0; font-weight: bold;width:20%'><pv_fv>"+Jb_fvc[0].Label_02+"<pv_fv></td>";
							

							Jcc_Comp_Maker = Jcc_Comp_Maker + "<td class='pv_fv_td_border'><div class='slidecontainer' style='padding:10px'><input type='range' min='0' max='20' value='10' step='1' maxlength='2' class='slider' id='fvYearRange' oninput='slider_Year_fv_go_year()' onchange='slider_Year_pv_go_year()'></div><span><pv_fv_lbl>0</pv_fv_lbl></span><span style='float:right'><pv_fv_lbl>20</pv_fv_lbl></span></td>";											
													
							Jcc_Comp_Maker = Jcc_Comp_Maker + "<td class='pv_fv_td_border' style='width:20%; text-align:center'><span id='fv_iYear' style='border-style:solid; border-color:black; border-weight:medium;padding:10px; background-color:white; display: inline-block; width:60px;font-size:18px; font-weight:bold;color: #000000'></span></td>";								
	
													

						Jcc_Comp_Maker = Jcc_Comp_Maker + "</tr>";												
											
				Jcc_Comp_Maker = Jcc_Comp_Maker + "</table>";					

						
	//======================
		
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='rotfText'><vert_label>"+Jb_fvc[0].Graph_Label+"</vert_label></div>"; //	id='rotText'	Bar_Color					
			//-------<>									
			Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='grDis' style='width:200px; height:200px; background-color:"+Jb_fvc[0].Main_Background_Color+"; border-left-style:solid; border-left-color:#000000; border-left-width:thick; border-bottom-style:solid; border-bottom-color:#000000; border-bottom-width:thick'>"; 
											
				
				Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='value_fbar_setup' id='value_fbar' style='width:100px; height:100px;background-color:#009539;'><div style='margin-top:-30px;' align='center'><span class='calc_readout' id='calc_fvalue'></span></div></div>";
			
			Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
			//-------<>									
		
						
							
		Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";									
											
//============================
//-------										
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>"; 											
break;											
											
									
//document.getElementById("toc_slide").style.display = "none";											
											
//--------------------------------------------------											
//-------<(  JB_Widget_Player Code End  )>-------
//--------------------------------------------------											
											
//--------------------------------------------------											
//-------<(  Jcc_Table Code Begin  )>-------
//--------------------------------------------------
//case "JB_Table":  //commented out on 9/20/2019
var new_jcc_tbl_id;
//--------------------------------------------------											
//-------<(  Jcc_Table Code Begin  )>-------
//--------------------------------------------------
	case "JB_Table":
										
		new_jcc_tbl_id = "table_" + jcc;						
		var new_jcc_tbl_whole = sSelections[jcc][snglBld[jcc]];									

		var dev_width = ((window.innerWidth > 0) ? window.innerWidth : screen.width);									
											
//	console.log("dev_width: " + dev_width);

if(dev_width >= 768)  //  "+new_jcc_tbl_whole[2].Whole_Table_Settings[0].Table_Background_Color+"
	{
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12' style='width:100%; background-color:"+new_jcc_tbl_whole[2].Whole_Table_Settings[0].Table_Background_Color+"' align='center'>";		
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='margin-top:"+new_jcc_tbl_whole[2].Whole_Table_Settings[0].Top_Margin+"; width:"+new_jcc_tbl_whole[2].Whole_Table_Settings[0].Table_Width+" ; padding:10px; padding-right:10%; padding-left: 10%; overflow: auto; max-height:"+new_jcc_tbl_whole[2].Whole_Table_Settings[0].Table_Max_Height+";'>";

		
		
//Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12' align='center' style='margin-top:"+new_jcc_tbl_whole[2].Whole_Table_Settings[0].Top_Margin+"; width:"+new_jcc_tbl_whole[2].Whole_Table_Settings[0].Table_Width+" ; padding:10px; padding-right:10%; padding-left: 10%; overflow: auto; max-height:"+new_jcc_tbl_whole[2].Whole_Table_Settings[0].Table_Max_Height+";'>";
//width:"+new_jcc_tbl_whole[2].Whole_Table_Settings[0].Table_Width+"		
	}
if(dev_width <= 414)										
	{
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12' align='center' style='background-color:"+new_jcc_tbl_whole[2].Whole_Table_Settings[0].Table_Background_Color+"; margin-top:"+new_jcc_tbl_whole[2].Whole_Table_Settings[0].Top_Margin+"; width:100%; padding-left:5%; padding-right:5% ; padding:10px; overflow: auto; max-height:"+new_jcc_tbl_whole[2].Whole_Table_Settings[0].Table_Max_Height+";'>";		
	}
											
											
//Jcc_Comp_Maker = Jcc_Comp_Maker + "<table class='col-lg-12 col-md-12 col-xs-12' id='table_new"+jcc+"' style='width:100%;  border-collapse: collapse; padding:10px; text-align:center'>";

//-------<( Added By Jack on 06/11/2021 )>------

	//console.log("Table_Border_Settings: " + new_jcc_tbl_whole[2].Whole_Table_Settings[0].Table_Border_Settings);									
	Jcc_Comp_Maker = Jcc_Comp_Maker + "<table class='col-lg-12 col-md-12 col-xs-12' id='table_new"+jcc+"' style='width:100%;border:"+new_jcc_tbl_whole[2].Whole_Table_Settings[0].Table_Border_Settings+"; border-collapse: collapse; padding:10px; text-align:center'>";											

//-------<( Added By Jack on 06/11/2021 )>------	
	

Jcc_Comp_Maker = Jcc_Comp_Maker + "<tr>";											
		for(var tbl_head = 0; tbl_head < new_jcc_tbl_whole[0].Col_Heading.length; tbl_head++)
			{
				
//=========================================================================================================
//-------<(  Cell border for headings )>-------				
//=========================================================================================================				
				if(typeof new_jcc_tbl_whole[0].Col_Heading[tbl_head].Border !== "undefined")
					{
						//var Border_Information = new_jcc_tbl_whole[0].Col_Heading[tbl_head].Border
						//alert(new_jcc_tbl_whole[0].Col_Heading[tbl_head].Border);
						
						var BI_array = new_jcc_tbl_whole[0].Col_Heading[tbl_head].Border.split(',');
					
						switch(BI_array[0])
							{
								//// none, block, left, top, right, bottom, LT, TR, LR, LB, BR, TB, LTR, LBR, TLB, TRB	
								case "LT":
								case "TR":
								case "LR":
								case "LB":									
								case "BR":
								case "TB":
									
									if(BI_array[0] === "LT")
										{
											tbl_border_array[0] = "border-left:" + BI_array[1] + " " + BI_array[2] + " " + BI_array[3] + ";";
											tbl_border_array[1] = "border-top:" + BI_array[1] + " " + BI_array[2] + " " + BI_array[3] + ";";

											if(new_jcc_tbl_whole[0].Col_Heading[tbl_head].merge !== "true")
												{
													tbl_border_array[2] = "border-right: 1px solid black;";
													tbl_border_array[3] = "border-bottom: 1px solid black;";
												}
											
											
										}

									if(BI_array[0] === "TR")
										{
											tbl_border_array[0] = "border-top:" + BI_array[1] + " " + BI_array[2] + " " + BI_array[3] + ";";
											tbl_border_array[1] = "border-right:" + BI_array[1] + " " + BI_array[2] + " " + BI_array[3] + ";";

											if(new_jcc_tbl_whole[0].Col_Heading[tbl_head].merge !== "true")
												{
													tbl_border_array[2] = "border-left: 1px solid black;";
													tbl_border_array[3] = "border-bottom: 1px solid black;";
												}
											
																					
										}

									if(BI_array[0] === "LR")
										{
											tbl_border_array[0] = "border-left:" + BI_array[1] + " " + BI_array[2] + " " + BI_array[3] + ";";
											tbl_border_array[1] = "border-right:" + BI_array[1] + " " + BI_array[2] + " " + BI_array[3] + ";";

											if(new_jcc_tbl_whole[0].Col_Heading[tbl_head].merge !== "true")
												{
													tbl_border_array[2] = "border-top: 1px solid black;";
													tbl_border_array[3] = "border-bottom: 1px solid black;";													
												}
											
									
										}

									if(BI_array[0] === "LB")
										{
											tbl_border_array[0] = "border-left:" + BI_array[1] + " " + BI_array[2] + " " + BI_array[3] + ";";
											tbl_border_array[1] = "border-bottom:" + BI_array[1] + " " + BI_array[2] + " " + BI_array[3] + ";";

											if(new_jcc_tbl_whole[0].Col_Heading[tbl_head].merge !== "true")
												{
													tbl_border_array[2] = "border-right: 1px solid black;";
													tbl_border_array[3] = "border-top: 1px solid black;";	
												}
											
								
										}

									if(BI_array[0] === "BR")
										{
											tbl_border_array[0] = "border-bottom:" + BI_array[1] + " " + BI_array[2] + " " + BI_array[3] + ";";
											tbl_border_array[1] = "border-right:" + BI_array[1] + " " + BI_array[2] + " " + BI_array[3] + ";";
											
											if(new_jcc_tbl_whole[0].Col_Heading[tbl_head].merge !== "true")
												{
													tbl_border_array[2] = "border-top: 1px solid black;";
													tbl_border_array[3] = "border-left: 1px solid black;";	
												}
									
										}

									if(BI_array[0] === "TB")
										{
											tbl_border_array[0] = "border-top:" + BI_array[1] + " " + BI_array[2] + " " + BI_array[3] + ";";
											tbl_border_array[1] = "border-bottom:" + BI_array[1] + " " + BI_array[2] + " " + BI_array[3] + ";";
											
											if(new_jcc_tbl_whole[0].Col_Heading[tbl_head].merge !== "true")
												{
													tbl_border_array[2] = "border-left: 1px solid black;";
													tbl_border_array[3] = "border-right: 1px solid black;";	
												}
									
										}	
									
		New_Border_Code[tbl_head] = tbl_border_array[0] + " " + tbl_border_array[1] + " " + tbl_border_array[2] + " " + tbl_border_array[3];
									
									break;
									
								case "LTR":
								case "LBR":
								case "TLB":	
								case "TRB":	
		//header_line_fix = "border-top: 1px solid black; border-bottom: 1px solid black; border-right: 1px solid black;"
									
									//"Border":"LTR,4px,solid,#5f25a0"
									
									//alert(new_jcc_tbl_whole[0].Col_Heading[tbl_head].merge);
									
									
									if(BI_array[0] === "LTR")  // "Border":"LTR,#5f25a0,4px"
											{
												tbl_border_array[0] = "border-left:" + BI_array[1] + " " + BI_array[2] + " " + BI_array[3] + ";";
												tbl_border_array[1] = "border-top:" + BI_array[1] + " " + BI_array[2] + " " + BI_array[3] + ";";
												tbl_border_array[2] = "border-right:" + BI_array[1] + " " + BI_array[2] + " " + BI_array[3] + ";";
												
												if(new_jcc_tbl_whole[0].Col_Heading[tbl_head].merge !== "true")
													{
														tbl_border_array[3] = "border-bottom: 1px solid black;";
													}
								//New_Border_Code[tbl_head] = tbl_border_array[0] + " " + tbl_border_array[1] + " " + tbl_border_array[2] + " " + tbl_border_array[3];			
								
								//alert(New_Border_Code);				
												
											}

										if(BI_array[0] === "LBR")
											{
												tbl_border_array[0] = "border-left:" + BI_array[1] + " " + BI_array[2] + " " + BI_array[3] + ";";
												tbl_border_array[1] = "border-bottom:" + BI_array[1] + " " + BI_array[2] + " " + BI_array[3] + ";";
												tbl_border_array[2] = "border-right:" + BI_array[1] + " " + BI_array[2] + " " + BI_array[3] + ";";
												
												if(new_jcc_tbl_whole[0].Col_Heading[tbl_head].merge !== "true")
													{
														tbl_border_array[3] = "border-top: 1px solid black;";
													}
												

								//New_Border_Code[tbl_head] = tbl_border_array[0] + " " + tbl_border_array[1] + " " + tbl_border_array[2] + " " + tbl_border_array[3];				
											}
										if(BI_array[0] === "TLB")
											{
												tbl_border_array[0] = "border-top:" + BI_array[1] + " " + BI_array[2] + " " + BI_array[3] + ";";
												tbl_border_array[1] = "border-left:" + BI_array[1] + " " + BI_array[2] + " " + BI_array[3] + ";";
												tbl_border_array[2] = "border-bottom:" + BI_array[1] + " " + BI_array[2] + " " + BI_array[3] + ";";
												
														if(new_jcc_tbl_whole[0].Col_Heading[tbl_head].merge !== "true")
															{
																tbl_border_array[3] = "border-right: 1px solid black;";
															}


												
												
								//New_Border_Code[tbl_head] = tbl_border_array[0] + " " + tbl_border_array[1] + " " + tbl_border_array[2] + " " + tbl_border_array[3];				
											}
										
										if(BI_array[0] === "TRB")
											{
												tbl_border_array[0] = "border-top:" + BI_array[1] + " " + BI_array[2] + " " + BI_array[3] + ";";
												tbl_border_array[1] = "border-right:" + BI_array[1] + " " + BI_array[2] + " " + BI_array[3] + ";";
												tbl_border_array[2] = "border-bottom:" + BI_array[1] + " " + BI_array[2] + " " + BI_array[3] + ";";
												
												if(new_jcc_tbl_whole[0].Col_Heading[tbl_head].merge !== "true")
													{
														tbl_border_array[3] = "border-left: 1px solid black;";
													}
												
								//New_Border_Code[tbl_head] = tbl_border_array[0] + " " + tbl_border_array[1] + " " + tbl_border_array[2] + " " + tbl_border_array[3];				
											}
									
									
								New_Border_Code[tbl_head] = tbl_border_array[0] + " " + tbl_border_array[1] + " " + tbl_border_array[2] + " " + tbl_border_array[3];	
									//alert(new_jcc_tbl_whole[0].Col_Heading[tbl_head].Border.length);
									
									
									
								break;
									
								case "block":
								case "left":
								case "top":	
								case "bottom":
								case "right":
									
									if(BI_array[0] === "block")
										{
											New_Border_Code[tbl_head] = "border:" + BI_array[1] + " " + BI_array[2] + " " + BI_array[3] + ";";
										}
									
									if(BI_array[0] === "left")
										{
											tbl_border_array[0] = "border-left:" + BI_array[1] + " " + BI_array[2] + " " + BI_array[3] + ";";
											
											if(new_jcc_tbl_whole[0].Col_Heading[tbl_head].merge === "true")
													{
														console.log("DOOM: " + tbl_border_array[0])
													}

											if(new_jcc_tbl_whole[0].Col_Heading[tbl_head].merge !== "true")
												{
														tbl_border_array[1] = "border-top: 0px solid black;";
														tbl_border_array[2] = "border-right: 0px solid black;";
														tbl_border_array[3] = "border-bottom: 0px solid black;";
												}
											

							New_Border_Code[tbl_head] = tbl_border_array[0] + " " + tbl_border_array[1] + " " + tbl_border_array[2] + " " + tbl_border_array[3];				
										}
									
									if(BI_array[0] === "top")
										{
											tbl_border_array[0] = "border-top:" + BI_array[1] + " " + BI_array[2] + " " + BI_array[3] + ";";
											
											if(new_jcc_tbl_whole[0].Col_Heading[tbl_head].merge !== "true")
												{
													tbl_border_array[1] = "border-left: 1px solid black;";
													tbl_border_array[2] = "border-right: 1px solid black;";
													tbl_border_array[3] = "border-bottom: 1px solid black;";
												}

							New_Border_Code[tbl_head] = tbl_border_array[0] + " " + tbl_border_array[1] + " " + tbl_border_array[2] + " " + tbl_border_array[3];				
										}
									
									if(BI_array[0] === "bottom")
										{
											tbl_border_array[0] = "border-bottom:" + BI_array[1] + " " + BI_array[2] + " " + BI_array[3] + ";";
											
											if(new_jcc_tbl_whole[0].Col_Heading[tbl_head].merge !== "true")
												{
													tbl_border_array[1] = "border-top: 1px solid black;";
													tbl_border_array[2] = "border-right: 1px solid black;";
													tbl_border_array[3] = "border-left: 1px solid black;";													
												}
												

							New_Border_Code[tbl_head] = tbl_border_array[0] + " " + tbl_border_array[1] + " " + tbl_border_array[2] + " " + tbl_border_array[3];				
										}
									
									if(BI_array[0] === "right")
										{
											tbl_border_array[0] = "border-right:" + BI_array[1] + " " + BI_array[2] + " " + BI_array[3] + ";";
											
											if(new_jcc_tbl_whole[0].Col_Heading[tbl_head].merge !== "true")
												{
													tbl_border_array[1] = "border-top: 0px solid black;";
													tbl_border_array[2] = "border-left: 0px solid black;";
													tbl_border_array[3] = "border-bottom: 0px solid black;";													
												}
												

							New_Border_Code[tbl_head] = tbl_border_array[0] + " " + tbl_border_array[1] + " " + tbl_border_array[2] + " " + tbl_border_array[3];				
										}

								break;	
							}
					}
				
				
//=========================================================================================================
//-------<(  Cell border for headings end )>-------				
//=========================================================================================================	
				
//=========================================================================================================
//-------<( Cell Color for Headings )>-------				
//=========================================================================================================					
				if(typeof new_jcc_tbl_whole[0].Col_Heading[tbl_head].Cell_Color !== "undefined")
					{
						New_Cell_Color[tbl_head] = new_jcc_tbl_whole[0].Col_Heading[tbl_head].Cell_Color;
						//alert(new_jcc_tbl_whole[0].Col_Heading[tbl_head].Cell_Color);
					}
				else
					{
						New_Cell_Color[tbl_head] = new_jcc_tbl_whole[0].Row_Heading_Color;	
					}
				
				
				//Row_Heading_Font_Whole
//=========================================================================================================
//-------<( Cell Color for Headings )>-------				
//=========================================================================================================					

/*				
var New_Text_Alignment = [];
var New_Font_Array = [];
*/				
				
//=========================================================================================================
//-------<( Text & Font for Headings )>-------				
//=========================================================================================================	
				
				if(typeof new_jcc_tbl_whole[0].Col_Heading[tbl_head].Txt_Font_Settings !== "undefined")
					{
						TFS_array = new_jcc_tbl_whole[0].Col_Heading[tbl_head].Txt_Font_Settings.split(',');
						
						New_Text_Font[0] = "text-align:" + TFS_array[0] + ";" ;
						New_Text_Font[1] = "color:" + TFS_array[1] + ";" ;
						New_Text_Font[2] = "font-weight:" + TFS_array[2] + ";" ;
						New_Text_Font[3] = "font-style:" + TFS_array[3] + ";" ;
						
						New_Text_Alignment[tbl_head] = New_Text_Font[0];
						New_Text_Font_Array[tbl_head] = New_Text_Font[1] + New_Text_Font[2] + New_Text_Font[3];
						
						New_Font_Array[tbl_head] = TFS_array[4];

					}
						else
					{
						var TFS_Global_Array = new_jcc_tbl_whole[0].Row_Heading_Font_Whole.split(',');
						
						New_Text_Font[0] = "text-align:" + TFS_Global_Array[0] + ";" ;
						New_Text_Font[1] = "color:" + TFS_Global_Array[1] + ";" ;
						New_Text_Font[2] = "font-weight:" + TFS_Global_Array[2] + ";" ;
						New_Text_Font[3] = "font-style:" + TFS_Global_Array[3] + ";" ;
						
						New_Text_Alignment[tbl_head] = New_Text_Font[0];
						New_Text_Font_Array[tbl_head] = New_Text_Font[1] + New_Text_Font[2] + New_Text_Font[3];
						
						New_Font_Array[tbl_head] = TFS_Global_Array[4];

					}
				

//=========================================================================================================
//-------<( Text & Font for Headings )>-------				
//=========================================================================================================	

//tbl_border_array[0] + " " + tbl_border_array[1] + " " + tbl_border_array[2] + " " + tbl_border_array[3]				
				
				
				//alert(typeof new_jcc_tbl_whole[0].Col_Heading[tbl_head].merge);
				//if(typeof New_Border_Code[tbl_head] === "undefined")
					//{
				
				
				
						if(typeof new_jcc_tbl_whole[0].Col_Heading[tbl_head].merge === "undefined")
								{
									//alert("new_jcc_tbl_whole[0].Col_Heading["+tbl_head+"].merge: " + new_jcc_tbl_whole[0].Col_Heading[tbl_head].merge);
									//  New_Border_Code[tbl_head] = "border: 1px solid black"; Commented out by Jcc on 09_22_2020
								}
									else
								{
									New_Border_Code[tbl_head] = "border: 0px solid black";
								}
						/*
						if(typeof new_jcc_tbl_whole[0].Col_Heading[tbl_head].merge === "true");
								{
									
								}
						*/
							
					//} 
				
				
			
				
				
				if(typeof New_Text_Alignment[tbl_head] === "undefined")
					{
						New_Text_Alignment[tbl_head] = "text-align:left;"
					}
				
				if(typeof New_Font_Array[tbl_head] === "undefined")
					{
						New_Font_Array[tbl_head] = "jb7";
					}
				
				//alert("New_Font_Array[tbl_head]: " + New_Font_Array[tbl_head]);
				
			
if(dev_width >= 768)
	{
		//console.log(new_jcc_tbl_whole[0].Col_Heading.length);
		
		//var tblDiv = (Math.trunc(100 / new_jcc_tbl_whole[0].Col_Heading.length));
		var tblDiv = (Math.floor(100 / new_jcc_tbl_whole[0].Col_Heading.length));
		
	//		console.log(tblDiv);
		
		
		if(typeof new_jcc_tbl_whole[0].Row_Space_Even !== "undefined")
				{
					if(new_jcc_tbl_whole[0].Row_Space_Even === "true")
						{
							tbl_row_space = tblDiv + "%";
						}

					if(new_jcc_tbl_whole[0].Row_Space_Even === "false")
						{
							tbl_row_space = "";
						}					
					
				}	

		if(typeof new_jcc_tbl_whole[0].Row_Space_Even === "undefined")
				{
					tbl_row_space = "";
				}		
}
				
if(dev_width <= 414)	
	{
		tbl_row_space = "";
	}
//-------<( Added By Jack on 06/11/2021 )>------
	if(new_jcc_tbl_whole[0].Col_Heading[tbl_head].merge !== "undefined")
	{
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<th colspan='"+new_jcc_tbl_whole[0].Col_Heading[tbl_head].merge+"' style='"+New_Text_Alignment[tbl_head]+" "+New_Border_Code[tbl_head]+" ; padding:10px; background-color:"+New_Cell_Color[tbl_head]+";height:"+new_jcc_tbl_whole[0].Row_Heading_Height+";width:"+tbl_row_space+";border:"+new_jcc_tbl_whole[2].Whole_Table_Settings[0].Table_Border_Settings+"'><"+New_Font_Array[tbl_head]+" style='"+New_Text_Font_Array[tbl_head]+"'>"+new_jcc_tbl_whole[0].Col_Heading[tbl_head].Heading+"</"+New_Font_Array[tbl_head]+"></th>";		
	}	
	if(new_jcc_tbl_whole[0].Col_Heading[tbl_head].merge === "undefined")
	{
Jcc_Comp_Maker = Jcc_Comp_Maker + "<th style='"+New_Text_Alignment[tbl_head]+" "+New_Border_Code[tbl_head]+" ; padding:10px; background-color:"+New_Cell_Color[tbl_head]+";height:"+new_jcc_tbl_whole[0].Row_Heading_Height+";width:"+tbl_row_space+"'><"+New_Font_Array[tbl_head]+" style='"+New_Text_Font_Array[tbl_head]+"'>"+new_jcc_tbl_whole[0].Col_Heading[tbl_head].Heading+"</"+New_Font_Array[tbl_head]+"></th>";
	}
//-------<( Added By Jack on 06/11/2021 )>------



			}
Jcc_Comp_Maker = Jcc_Comp_Maker + "</tr>";

//New_Border_Code[tbl_head] = "";											
//	
//New_Border_Code = [];

//=========================================================================================================
//-------<( Data row code begin  )>-------				
//=========================================================================================================												
											
		for(var data_row_num = 0; data_row_num < new_jcc_tbl_whole[1].Row_Information.length; data_row_num++)
			{

				
				
				Jcc_Comp_Maker = Jcc_Comp_Maker + "<tr>";
				for(var data_row_info = 0; data_row_info < new_jcc_tbl_whole[1].Row_Information[data_row_num].Row_Data.length ;data_row_info++)
					{

					

//=========================================================================================================
//-------<(  Cell border for Data Row )>-------				
//=========================================================================================================				
			
			if(typeof new_jcc_tbl_whole[1].Row_Information[data_row_num].Row_Data[data_row_info].Border !== "undefined")
					{

						
						var DR_array = new_jcc_tbl_whole[1].Row_Information[data_row_num].Row_Data[data_row_info].Border.split(',');

						console.log("------------------------------------------");
						console.log("DR_array[0]: " + DR_array[0]);
						console.log("------------------------------------------");
	
						switch(DR_array[0])
							{
								//// none, block, left, top, right, bottom, LT, TR, LR, LB, BR, TB, LTR, LBR, TLB, TRB	
								case "LT":
								case "TR":
								case "LR":
								case "LB":									
								case "BR":
								case "TB":

									
									
									
									if(DR_array[0] === "LT")
										{
											//alert("test: " + new_jcc_tbl_whole[1].Row_Information[data_row_num].Row_Data[data_row_info].merge);
											
											tbl_rc_border_array[0] = "border-left:" + DR_array[1] + " " + DR_array[2] + " " + DR_array[3] + ";";
											tbl_rc_border_array[1] = "border-top:" + DR_array[1] + " " + DR_array[2] + " " + DR_array[3] + ";";
											
									if(new_jcc_tbl_whole[1].Row_Information[data_row_num].Row_Data[data_row_info].merge !== "true")
											{
												tbl_rc_border_array[2] = "border-right: 1px solid black;";
												tbl_rc_border_array[3] = "border-bottom: 1px solid black;";	
											}										
										}									

									if(DR_array[0] === "TR")
										{
												tbl_rc_border_array[0] = "border-top:" + DR_array[1] + " " + DR_array[2] + " " + DR_array[3] + ";";
												tbl_rc_border_array[1] = "border-right:" + DR_array[1] + " " + DR_array[2] + " " + DR_array[3] + ";";

									if(new_jcc_tbl_whole[1].Row_Information[data_row_num].Row_Data[data_row_info].merge !== "true")
											{
												tbl_rc_border_array[2] = "border-left: 1px solid black;";
												tbl_rc_border_array[3] = "border-bottom: 1px solid black;";	
											}										
										}									
									
									if(DR_array[0] === "LR")
										{

											tbl_rc_border_array[0] = "border-left:" + DR_array[1] + " " + DR_array[2] + " " + DR_array[3] + ";";
											tbl_rc_border_array[1] = "border-right:" + DR_array[1] + " " + DR_array[2] + " " + DR_array[3] + ";";
										//	tbl_rc_border_array[2] = "border-top:" + DR_array[1] + " " + DR_array[2] + " " + DR_array[3] + ";";
										//	tbl_rc_border_array[3] = "border-bottom:" + DR_array[1] + " " + DR_array[2] + " " + DR_array[3] + ";";
											

									if(new_jcc_tbl_whole[1].Row_Information[data_row_num].Row_Data[data_row_info].merge !== "true")
											{
												tbl_rc_border_array[2] = "border-top: 1px solid #ffffff;";
												tbl_rc_border_array[3] = "border-bottom: 1px solid #ffffff;";	
											}										
										}
									
									if(DR_array[0] === "LB")
										{
											tbl_rc_border_array[0] = "border-left:" + DR_array[1] + " " + DR_array[2] + " " + DR_array[3] + ";";
											tbl_rc_border_array[1] = "border-botton:" + DR_array[1] + " " + DR_array[2] + " " + DR_array[3] + ";";

									if(new_jcc_tbl_whole[1].Row_Information[data_row_num].Row_Data[data_row_info].merge !== "true")
											{
												tbl_rc_border_array[2] = "border-right: 1px solid black;";
												tbl_rc_border_array[3] = "border-top: 1px solid black;";
											}										
										}	
									
									if(DR_array[0] === "BR")
										{
											tbl_rc_border_array[0] = "border-bottom:" + DR_array[1] + " " + DR_array[2] + " " + DR_array[3] + ";";
											tbl_rc_border_array[1] = "border-right:" + DR_array[1] + " " + DR_array[2] + " " + DR_array[3] + ";";

										if(new_jcc_tbl_whole[1].Row_Information[data_row_num].Row_Data[data_row_info].merge !== "true")
											{
												tbl_rc_border_array[2] = "border-top: 1px solid black;";
												tbl_rc_border_array[3] = "border-tight: 1px solid black;";	
											}										
										}
									
									if(DR_array[0] === "TB")
										{
											tbl_rc_border_array[0] = "border-top:" + DR_array[1] + " " + DR_array[2] + " " + DR_array[3] + ";";
											tbl_rc_border_array[1] = "border-bottom:" + DR_array[1] + " " + DR_array[2] + " " + DR_array[3] + ";";

										if(new_jcc_tbl_whole[1].Row_Information[data_row_num].Row_Data[data_row_info].merge !== "true")
											{
												tbl_rc_border_array[2] = "border-right: 1px solid black;";
												tbl_rc_border_array[3] = "border-left: 1px solid black;";
											}										
										}									

		New_Data_Border_Code[data_row_num] = tbl_rc_border_array[0] + " " + tbl_rc_border_array[1] + " " + tbl_rc_border_array[2] + " " + tbl_rc_border_array[3];
					//alert("MORGAN! " + New_Data_Border_Code[data_row_num]);				
									
								break;
									
								case "LTR":
								case "LBR":
								case "TLB":
								case "TRB":
									if(DR_array[0] === "LTR")  // "Border":"LTR,#5f25a0,4px"
											{
												tbl_rc_border_array[0] = "border-left:" + DR_array[1] + " " + DR_array[2] + " " + DR_array[3] + ";";
												tbl_rc_border_array[1] = "border-top:" + DR_array[1] + " " + DR_array[2] + " " + DR_array[3] + ";";
												tbl_rc_border_array[2] = "border-right:" + DR_array[1] + " " + DR_array[2] + " " + DR_array[3] + ";";
												

												tbl_rc_border_array[3] = "border-bottom: 1px solid #ffffff;";
											
								//New_Border_Code[tbl_head] = tbl_border_array[0] + " " + tbl_border_array[1] + " " + tbl_border_array[2] + " " + tbl_border_array[3];			
								
								//alert(New_Border_Code);				
												
											}

										if(DR_array[0] === "LBR")
											{
												tbl_rc_border_array[0] = "border-left:" + DR_array[1] + " " + DR_array[2] + " " + DR_array[3] + ";";
												tbl_rc_border_array[1] = "border-bottom:" + DR_array[1] + " " + DR_array[2] + " " + DR_array[3] + ";";
												tbl_rc_border_array[2] = "border-right:" + DR_array[1] + " " + DR_array[2] + " " + DR_array[3] + ";";
												

												tbl_rc_border_array[3] = "border-top: 1px solid black;";
								//New_Border_Code[tbl_head] = tbl_border_array[0] + " " + tbl_border_array[1] + " " + tbl_border_array[2] + " " + tbl_border_array[3];				
											}
										if(DR_array[0] === "TLB")
											{
												tbl_rc_border_array[0] = "border-top:" + DR_array[1] + " " + DR_array[2] + " " + DR_array[3] + ";";
												tbl_rc_border_array[1] = "border-left:" + DR_array[1] + " " + DR_array[2] + " " + DR_array[3] + ";";
												tbl_rc_border_array[2] = "border-bottom:" + DR_array[1] + " " + DR_array[2] + " " + DR_array[3] + ";";


												tbl_rc_border_array[3] = "border-right: 1px solid black;";
											
												
								//New_Border_Code[tbl_head] = tbl_border_array[0] + " " + tbl_border_array[1] + " " + tbl_border_array[2] + " " + tbl_border_array[3];				
											}
										
										if(DR_array[0] === "TRB")
											{
												tbl_rc_border_array[0] = "border-top:" + DR_array[1] + " " + DR_array[2] + " " + DR_array[3] + ";";
												tbl_rc_border_array[1] = "border-right:" + DR_array[1] + " " + DR_array[2] + " " + DR_array[3] + ";";
												tbl_rc_border_array[2] = "border-bottom:" + DR_array[1] + " " + DR_array[2] + " " + DR_array[3] + ";";
												

												tbl_rc_border_array[3] = "border-left: 1px solid black;";
											
												
								//New_Border_Code[tbl_head] = tbl_border_array[0] + " " + tbl_border_array[1] + " " + tbl_border_array[2] + " " + tbl_border_array[3];				
											}
									
									
	New_Data_Border_Code[data_row_num] = tbl_rc_border_array[0] + " " + tbl_rc_border_array[1] + " " + tbl_rc_border_array[2] + " " + tbl_rc_border_array[3];	
								
								break;

								case "block":
								case "left":
								case "top":	
								case "bottom":
								case "right":
									
									if(DR_array[0] === "block")
										{
		New_Data_Border_Code[data_row_num] = "border:" + DR_array[1] + " " + DR_array[2] + " " + DR_array[3] + ";";

										}
									
									if(DR_array[0] === "left")
										{
											tbl_rc_border_array[0] = "border-left:" + DR_array[1] + " " + DR_array[2] + " " + DR_array[3] + ";";


											tbl_rc_border_array[1] = "border-top: 0px solid black;";
											tbl_rc_border_array[2] = "border-right: 0px solid black;";
											tbl_rc_border_array[3] = "border-bottom: 1px solid #ebebeb;";
										
		New_Data_Border_Code[data_row_num] = tbl_rc_border_array[0] + " " + tbl_rc_border_array[1] + " " + tbl_rc_border_array[2] + " " + tbl_rc_border_array[3];				
										}
									
									if(DR_array[0] === "top")
										{
											tbl_rc_border_array[0] = "border-top:" + DR_array[1] + " " + DR_array[2] + " " + DR_array[3] + ";";
											
											
											tbl_rc_border_array[1] = "border-left: 1px solid black;";
											tbl_rc_border_array[2] = "border-right: 1px solid black;";
											tbl_rc_border_array[3] = "border-bottom: 1px solid black;";
											
		New_Data_Border_Code[data_row_num] = tbl_rc_border_array[0] + " " + tbl_rc_border_array[1] + " " + tbl_rc_border_array[2] + " " + tbl_rc_border_array[3];				
										}
									
									if(DR_array[0] === "bottom")
										{
											tbl_rc_border_array[0] = "border-bottom:" + DR_array[1] + " " + DR_array[2] + " " + DR_array[3] + ";";
											

											tbl_rc_border_array[1] = "border-top: 1px solid black;";
											tbl_rc_border_array[2] = "border-right: 1px solid black;";
											tbl_rc_border_array[3] = "border-left: 1px solid black;";
										
		New_Data_Border_Code[data_row_num] = tbl_rc_border_array[0] + " " + tbl_rc_border_array[1] + " " + tbl_rc_border_array[2] + " " + tbl_rc_border_array[3];				
										}
									
									if(BI_array[0] === "right")
										{
											tbl_rc_border_array[0] = "border-right:" + BI_array[1] + " " + BI_array[2] + " " + BI_array[3] + ";";
											

											tbl_rc_border_array[1] = "border-top: 0px solid black;";
											tbl_rc_border_array[2] = "border-left: 0px solid black;";
											tbl_rc_border_array[3] = "border-bottom: 1px solid #ebebeb;";
											
		New_Data_Border_Code[data_row_num] = tbl_rc_border_array[0] + " " + tbl_rc_border_array[1] + " " + tbl_rc_border_array[2] + " " + tbl_rc_border_array[3];				
										}

								break;									
	
						}
						
				}
				
					
//=========================================================================================================
//-------<(  Cell border for Data Row )>-------				
//=========================================================================================================						
						
						
//===========================================================
//-------<( Data row color begin )>-------				
//===========================================================

					if(typeof new_jcc_tbl_whole[1].Row_Information[data_row_num].Row_Data_Height !== "undefined")	
						{
							Row_Data_Height_Array[data_row_num] = new_jcc_tbl_whole[1].Row_Information[data_row_num].Row_Data_Height;
							
						}
					
					/*	
					if(typeof Row_Data_Color[data_row_num] = new_jcc_tbl_whole[1].Row_Information[data_row_num].Row_Data_Height !== "undefined")
						{
							Row_Data_Height_Array[data_row_num] = Row_Data_Color[data_row_num] = new_jcc_tbl_whole[1].Row_Information[data_row_num].Row_Data_Height;
							alert(Row_Data_Height_Array[data_row_num]);
						}
					*/	
						
//Cell_Color	Border		Row_Data_Height	
				
//alert( new_jcc_tbl_whole[1].Row_Information[data_row_num].Row_Data_Color ); 
				
//alert( new_jcc_tbl_whole[1].Row_Information[data_row_num].Row_Data[data_row_info].Cell_Color );				

					if(typeof new_jcc_tbl_whole[1].Row_Information[data_row_num].Row_Data[data_row_info].Cell_Color !== "undefined")
						{
							Row_Data_Color[data_row_num] = new_jcc_tbl_whole[1].Row_Information[data_row_num].Row_Data[data_row_info].Cell_Color;
						}
							else
						{
							Row_Data_Color[data_row_num] = new_jcc_tbl_whole[1].Row_Information[data_row_num].Row_Data_Color
						}

//===========================================================
//-------<( Data row color end )>-------				
//===========================================================						
					
						
//===========================================================
//-------<( Data row border begin )>-------	Txt_Font_Settings			
//===========================================================							
						
						
//===========================================================
//-------<( Data row border end )>-------				
//===========================================================
						
//===========================================================
//-------<( Data row Font Settings begin )>-------				
//===========================================================	
						if(typeof new_jcc_tbl_whole[1].Row_Information[data_row_num].Row_Data[data_row_info].Txt_Font_Settings !== "undefined")
							{
								TFS_array = new_jcc_tbl_whole[1].Row_Information[data_row_num].Row_Data[data_row_info].Txt_Font_Settings.split(',');
						
								//alert(TFS_array);
								
									New_Text_Font[0] = "text-align:" + TFS_array[0] + ";" ;
									New_Text_Font[1] = "color:" + TFS_array[1] + ";" ;
									New_Text_Font[2] = "font-weight:" + TFS_array[2] + ";" ;
									New_Text_Font[3] = "font-style:" + TFS_array[3] + ";" ;

									New_Text_Alignment[data_row_num] = New_Text_Font[0];
									New_Text_Font_Array[data_row_num] = New_Text_Font[1] + New_Text_Font[2] + New_Text_Font[3];

									New_Font_Array[data_row_num] = TFS_array[4];
								
								//alert("1: " + New_Text_Alignment[data_row_num]);
								
							}	
								else
							{
								//Row_Data_Font_Whole
								TFS_array = new_jcc_tbl_whole[1].Row_Information[data_row_num].Row_Data_Font_Whole.split(',');
						
								//new_jcc_tbl_whole[1].Row_Information[data_row_num].Row_Data_Font_Whole
								//alert(TFS_array);
								
									New_Text_Font[0] = "text-align:" + TFS_array[0] + ";" ;
									New_Text_Font[1] = "color:" + TFS_array[1] + ";" ;
									New_Text_Font[2] = "font-weight:" + TFS_array[2] + ";" ;
									New_Text_Font[3] = "font-style:" + TFS_array[3] + ";" ;

									New_Text_Alignment[data_row_num] = New_Text_Font[0];
									New_Text_Font_Array[data_row_num] = New_Text_Font[1] + New_Text_Font[2] + New_Text_Font[3];

									New_Font_Array[data_row_num] = TFS_array[4];
								
								//alert("2: " + New_Text_Alignment[data_row_num]);
							}
						
//===========================================================
//-------<( Data row Font Settings end )>-------				
//===========================================================
				
				if(typeof New_Data_Border_Code[data_row_num] === "undefined")
				//if(typeof New_Data_Border_Code[data_row_info] === "undefined")
					{

						//New_Data_Border_Code[data_row_num] = "border: 1px solid black"
					} 
						else
					{

					}


//-------<( Added By Jack on 06/11/2021 )>------

if(typeof new_jcc_tbl_whole[1].Row_Information[data_row_num].Row_Data[data_row_info].merge !== "undefined")
					{
						//"merge":"2",
						//alert("col_merge: " + new_jcc_tbl_whole[1].Row_Information[data_row_num].Row_Data[data_row_info].col_merge);

						Jcc_Comp_Maker = Jcc_Comp_Maker + "<td colspan='"+new_jcc_tbl_whole[1].Row_Information[data_row_num].Row_Data[data_row_info].merge+"' style='"+New_Text_Alignment[data_row_num]+" background-color:"+Row_Data_Color[data_row_num]+";height:"+Row_Data_Height_Array[data_row_num]+";"+New_Data_Border_Code[data_row_num]+";border:"+new_jcc_tbl_whole[2].Whole_Table_Settings[0].Table_Border_Settings+"'><jb7 style='"+New_Text_Font_Array[data_row_num]+"'>"+new_jcc_tbl_whole[1].Row_Information[data_row_num].Row_Data[data_row_info].Data_Info+"</jb7></td>";
					}
// Added by JCC on July 13, 2021
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
if(typeof new_jcc_tbl_whole[1].Row_Information[data_row_num].Row_Data[data_row_info].col_merge !== "undefined")
					{

			if(typeof new_jcc_tbl_whole[1].Row_Information[data_row_num].Row_Data[data_row_info].col_width !== "undefined")
						{
							col_new_wVideo_Relectionidth = new_jcc_tbl_whole[1].Row_Information[data_row_num].Row_Data[data_row_info].col_width;
						}

			if(typeof new_jcc_tbl_whole[1].Row_Information[data_row_num].Row_Data[data_row_info].col_width === "undefined")
						{
							col_new_width = new_jcc_tbl_whole[2].Whole_Table_Settings[0].Table_Width.replace('%', '') / new_jcc_tbl_whole[0].Col_Heading.length + "%";
						}			

			//col_vert_align
			if(typeof new_jcc_tbl_whole[1].Row_Information[data_row_num].Row_Data[data_row_info].col_vert_align !== "undefined")
						{
							col_valign = new_jcc_tbl_whole[1].Row_Information[data_row_num].Row_Data[data_row_info].col_vert_align;
						}
			if(typeof new_jcc_tbl_whole[1].Row_Information[data_row_num].Row_Data[data_row_info].col_vert_align === "undefined")
						{
							col_valign = 'top';
						}						


						Jcc_Comp_Maker = Jcc_Comp_Maker + "<td rowspan='"+new_jcc_tbl_whole[1].Row_Information[data_row_num].Row_Data[data_row_info].col_merge+"' style='"+New_Text_Alignment[data_row_num]+" background-color:"+Row_Data_Color[data_row_num]+";height:"+Row_Data_Height_Array[data_row_num]+";"+New_Data_Border_Code[data_row_num]+";border:"+new_jcc_tbl_whole[2].Whole_Table_Settings[0].Table_Border_Settings+";vertical-align:"+col_valign+";width:"+col_new_width+"'><jb7 style='"+New_Text_Font_Array[data_row_num]+"'>"+new_jcc_tbl_whole[1].Row_Information[data_row_num].Row_Data[data_row_info].Data_Info+"</jb7></td>"; //;vertical-align:top
					}


//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-






if(typeof new_jcc_tbl_whole[1].Row_Information[data_row_num].Row_Data[data_row_info].merge === "undefined")
if(typeof new_jcc_tbl_whole[1].Row_Information[data_row_num].Row_Data[data_row_info].col_merge === "undefined")

					{
						//alert("col_merge none");
						Jcc_Comp_Maker = Jcc_Comp_Maker + "<td style='"+New_Text_Alignment[data_row_num]+" background-color:"+Row_Data_Color[data_row_num]+";height:"+Row_Data_Height_Array[data_row_num]+";"+New_Data_Border_Code[data_row_num]+";border:"+new_jcc_tbl_whole[2].Whole_Table_Settings[0].Table_Border_Settings+"'><jb7 style='"+New_Text_Font_Array[data_row_num]+"'>"+new_jcc_tbl_whole[1].Row_Information[data_row_num].Row_Data[data_row_info].Data_Info+"</jb7></td>";						
					}

//-------<( Added By Jack on 06/11/2021 )>------

						//Jcc_Comp_Maker = Jcc_Comp_Maker + "<td style='"+New_Text_Alignment[data_row_num]+" background-color:"+Row_Data_Color[data_row_num]+";height:"+Row_Data_Height_Array[data_row_num]+";"+New_Data_Border_Code[data_row_num]+"'><jb7 style='"+New_Text_Font_Array[data_row_num]+"'>"+new_jcc_tbl_whole[1].Row_Information[data_row_num].Row_Data[data_row_info].Data_Info+"</jb7></td>";

						New_Data_Border_Code[data_row_num] = "";
					}
				
				Jcc_Comp_Maker = Jcc_Comp_Maker + "</tr>";	

			}

Jcc_Comp_Maker = Jcc_Comp_Maker + "</table>";										
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";											
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";	//added 01/29/2020 Jcc	

New_Border_Code = [];
New_Data_Border_Code = []; // Added by Jcc 09/14/2021
break;	
//--------------------------------------------------											
//-------<(  Jcc_Table Code End  )>-------
//--------------------------------------------------											
//break;	
//--------------------------------------------------											
//-------<(  Jcc_Table Code End  )>-------
//--------------------------------------------------											
											
//-------------------------------------------------------------------------------------------------------------	
//-------<( Table_Builder original code begin )>-------	SA									
//-------------------------------------------------------------------------------------------------------------										
											
									case "Table_Builder":
											tbl_id = "table_" + jcc;
											var new_tbl	= sSelections[jcc][snglBld[jcc]]; 
											var total_rows = 0;
											var total_columns;
											
											/*
											for(var tol = 0; tol < sSelections[jcc][snglBld[jcc]][0].Outlines.length; tol++)
												{
													
													switch( String(Object.keys(sSelections[jcc][snglBld[jcc]][0].Outlines[tol])) )
														{
																
															case "col_outline":
																tbl_col_ol = sSelections[jcc][snglBld[jcc]][0].Outlines[tol].col_outline;
															break;
																
															case "row_outline":
																tbl_row_ol = sSelections[jcc][snglBld[jcc]][0].Outlines[tol].row_outline;
															break;	
																
														}
	
													
												}
											*/
				
								if(typeof new_tbl[0].tbl_column_text_color !== "undefined")
									{
										column_text_color = new_tbl[0].tbl_column_text_color;
									}
								if(typeof new_tbl[0].tbl_column_text_color === "undefined")			
									{
										column_text_color = "#000000";	
									}													

											
											
										
											
						Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12' style='margin-top:"+new_tbl[0].top_margin+";border-style:"+new_tbl[0].Table_Border_Style+"; border-width: "+new_tbl[0].Table_Border_width+"; border-color:"+new_tbl[0].Table_Border_color+"; border-radius:"+new_tbl[0].Table_Border_radius+"; padding:"+new_tbl[0].Table_Border_padding+"; background-color:"+new_tbl[0].Table_Color+";'>";

											if(new_tbl[0].caption.length > 0)
												{

							
			Jcc_Comp_Maker = Jcc_Comp_Maker + "<caption style='align:"+new_tbl[0].caption_alignment+";'><"+new_tbl[0].caption_font+" style='color:"+new_tbl[0].caption_color+";font-style:"+new_tbl[0].caption_style+";font-weight:"+new_tbl[0].caption_weight+"align:"+new_tbl[0].caption_alignment+"'>"+ new_tbl[0].caption +"</"+new_tbl[0].caption_font+"></caption>";
												}
													
											for(var tbl_num = 1; tbl_num < new_tbl.length; tbl_num++)
													{
														
														
														switch(tbl_num)
															{
																case 1: 
																	
												
												tbl_top_data_color = sSelections[jcc][snglBld[jcc]][tbl_num].Row_Data_Top_Color;					
												tbl_even_color = sSelections[jcc][snglBld[jcc]][tbl_num].Row_Data_Background_Color_Even;
												tbl_odd_color = sSelections[jcc][snglBld[jcc]][tbl_num].Row_Data_Background_Color_Odd;
				
//alert(sSelections[jcc][snglBld[jcc]][tbl_num].Table_Heading_Background_Color);
//alert(sSelections[jcc][snglBld[jcc]][tbl_num].Table_Heading_Padding);																	
																	
										if(sSelections[jcc][snglBld[jcc]][tbl_num].Table_Heading_Background_Color !== "undefined")
												{
													
													tbl_head_color = sSelections[jcc][snglBld[jcc]][tbl_num].Table_Heading_Background_Color;
												}
																	
																	
																	
																	
							Jcc_Comp_Maker = Jcc_Comp_Maker + "<table id='table_"+jcc+"' style='width:100%; border-collapse: collapse;'><thead style='background-color:"+tbl_head_color+"'><tr>";
															
																	
																	
							total_columns = sSelections[jcc][snglBld[jcc]][tbl_num].Table_Heading.length;										
																	
					for(var thd = 0; thd < sSelections[jcc][snglBld[jcc]][tbl_num].Table_Heading.length; thd++)
							{
														
																			
								if(typeof sSelections[jcc][snglBld[jcc]][tbl_num].Table_Heading[thd].colNumber === 'undefined')				{
																// Table_Heading_Padding Table_Heading_Alignment
									Jcc_Comp_Maker = Jcc_Comp_Maker + "<th style='text-align:"+new_tbl[1].Table_Heading_Alignment+"; padding:"+new_tbl[1].Table_Heading_Padding+";height:"+new_tbl[1].Table_Heading_Height+"'><"+new_tbl[0].tbl_column_font+">"+ sSelections[jcc][snglBld[jcc]][tbl_num].Table_Heading[thd].tbl_column +"</"+new_tbl[0].tbl_column_font+"></th>";	
																
																}
																			
																			
								if(typeof sSelections[jcc][snglBld[jcc]][tbl_num].Table_Heading[thd].colNumber !== 'undefined')				{
																
						Jcc_Comp_Maker = Jcc_Comp_Maker + "<th style='padding:"+new_tbl[1].Table_Heading_Padding+";' colspan='"+sSelections[jcc][snglBld[jcc]][tbl_num].Table_Heading[thd].colNumber+"'>"+ sSelections[jcc][snglBld[jcc]][tbl_num].Table_Heading[thd].tbl_column +"</th>";	
																
																}
						


							}
																	
															Jcc_Comp_Maker = Jcc_Comp_Maker + "</tr></thead>";		

	
																break;  //back_color
			
																
																default:
																	//alert("tbl_num: " + tbl_num);
																	//alert("new_tbl.length: " + new_tbl.length);
																	
																	
																	Jcc_Comp_Maker = Jcc_Comp_Maker + "<tr>";
																	for(var trw = 0; trw < sSelections[jcc][snglBld[jcc]][tbl_num].Row_Data.length; trw++)
																		{
																			//alert("trw: " + trw);
																			if(tbl_num % 2 === 0)
																				{
															switch(tbl_num)
																{
																	case 2:
																		
																	//back_color
																		
																	//alert(sSelections[jcc][snglBld[jcc]][tbl_num].Row_Data[trw].back_color);	
																		
																		
																	if(tbl_top_data_color !== "")
																		{
												
																			
								Jcc_Comp_Maker = Jcc_Comp_Maker + "<td style='background-color:"+tbl_top_data_color+"'>"+ sSelections[jcc][snglBld[jcc]][tbl_num].Row_Data[trw].tbl_column +"</td>";

																			
																		}
																	if(tbl_top_data_color === "")
																		{
																			//alert(new_tbl[0].tbl_column_text_color);
																			//Row_Data_Align
																			
																			
																			Jcc_Comp_Maker = Jcc_Comp_Maker + "<td style='text-align:"+new_tbl[1].Row_Data_Align+" ; color:"+column_text_color+" ;background-color:"+tbl_even_color+"'><"+new_tbl[0].tbl_column_font+">"+ sSelections[jcc][snglBld[jcc]][tbl_num].Row_Data[trw].tbl_column +"</"+new_tbl[0].tbl_column_font+"></td>";
																		}																		
																	break;
																		
																	default:
																		Jcc_Comp_Maker = Jcc_Comp_Maker + "<td style='text-align:"+new_tbl[1].Row_Data_Align+" ; color:"+column_text_color+"; background-color:"+tbl_even_color+"'><"+new_tbl[0].tbl_column_font+">"+ sSelections[jcc][snglBld[jcc]][tbl_num].Row_Data[trw].tbl_column +"</"+new_tbl[0].tbl_column_font+"></td>";
																		
																	break;	
																		
																}
																								
																				}
																			
																			if(tbl_num % 2 === 1)
																				{
								Jcc_Comp_Maker = Jcc_Comp_Maker + "<td style='text-align:"+new_tbl[1].Row_Data_Align+" ; color:"+column_text_color+"; background-color:"+tbl_odd_color+"'><"+new_tbl[0].tbl_column_font+">"+ sSelections[jcc][snglBld[jcc]][tbl_num].Row_Data[trw].tbl_column +"</"+new_tbl[0].tbl_column_font+"></td>";
																				}
																			
																			
																		}
																	Jcc_Comp_Maker = Jcc_Comp_Maker + "</tr>";
																			
																		
																		total_rows = (total_rows + 1);
																		
																break;
															}
														
													}
				
											
											Jcc_Comp_Maker = Jcc_Comp_Maker + "</table>";
											
											Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='xtra_"+ jcc +"'></div>";


											
											Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
											
											//alert("total_columns: " + total_columns);
											//alert("total_rows: " + total_rows);
											

									break;		
//-------------------------------------------------------------------------------------------------------------	
//-------<( Table_Builder code end )>-------	SA									
//-------------------------------------------------------------------------------------------------------------									

		case "JB_Stopwatch":
											
			var new_sw	= sSelections[jcc][snglBld[jcc]]; //sSelections[jcc][snglBld[jcc]][0];
					
					//JB_time_comp = 1;						

										
						Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12 jb_stopwatch' id='jb_stopwatch_"+jcc+"' align='center' style='background-color: "+new_sw[0].Main_Background_Color+";border-top-color:"+new_sw[1].top_line_color+"; border-top-width:"+new_sw[1].top_line_weight+"; border-top-style:"+new_sw[1].top_line_style+"; border-bottom-color:"+new_sw[3].bottom_line_color+"; border-bottom-width:"+new_sw[3].bottom_line_weight+"; border-bottom-style:"+new_sw[3].bottom_line_style+"; padding:10px; margin-top:10px'>";
						
								Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='JB_SW_Width' style='background-color:"+new_sw[2].border_background_color+";border-color: "+new_sw[2].border_inside_color+"; border-style: "+new_sw[2].border_inside_style+"; border-width: "+new_sw[2].border_inside_weight+"; border-radius:"+new_sw[2].border_inside_radius+"; padding:"+new_sw[2].border_padding+";'>";				
							//		border-color:#ffffff; border-style:solid; border-width:medium; border-radius:10px; padding:10px
									Jcc_Comp_Maker = Jcc_Comp_Maker + "<div align='center'>";	
										
		//Jcc_Comp_Maker = Jcc_Comp_Maker + "<p style='color:"+new_sw[0].Countdown_text_color+";  font-size: 30px'><span id='min'>00</span> : <span id='sec'>00</span> : <span id='msec'>00</span></p>"; 
							// In case a border is requested: border-style:solid; border-width:medium; border-color:#000000; width:70%;				
		
								
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<div>";
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='JB_readout_"+jcc+"' style='color: "+new_sw[0].Countdown_text_color+"; font-size: 30px; background-color:#0070b0;'>00:00:00</div>";									
		Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";									
									
											
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<button type='button' id='sw_start' class='btn btn-sm btn-success jb_sw_btn' onClick='jb_sw_timer("+jcc+");'>Start</button>&nbsp;";
											
		//Jcc_Comp_Maker = Jcc_Comp_Maker + "<button type='button' id='sw_stop' class='btn btn-sm btn-danger jb_sw_btn' onClick='clearTimeout(tdisplay);'>Stop</button>&nbsp;";
											
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<button type='button' id='sw_stop' class='btn btn-sm btn-danger jb_sw_btn' onClick='jb_sw_stop("+jcc+");'>Stop</button>&nbsp;";											
											
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<button style='color:#000000;' type='button' id='sw_reset'  class='btn btn btn-sm jb_sw_btn' onClick='jb_sw_reset("+jcc+");'>Reset</button>";
	
											
							
											
											
											
									Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
											
								Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";				
											
						Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";	
									
											
		break;	
											
											
											
											
											
//-------------------------------------------------------------------------------------------------------------	
//-------<( Video New code begin )>-------	SA									
//-------------------------------------------------------------------------------------------------------------											

									case "Video_Files_New":

								//		console.log("trans_button = " + trans_button);

var new_vid	= sSelections[jcc][snglBld[jcc]][0];

//alert(typeof trans_button);										

	//console.log("trans_button = " + trans_button);

//Start BRIAN 01/13/2020 - commented out -- can be removed
/*  if(typeof trans_button === "undefined")
	{
		trans_button = "Open Transcript";
		submit_button = "Submit";
	}  */
//End BRIAN 01/13/2020 - commented out -- can be removed
											
//\\//snippet_roadmap(jcc,"Video_Files_New",(new_vid.Video));											
											
					//Expert_View_Alt						
					//alert(new_vid.Expert_View_Alt);	
					//video_interaction(jcc,new_vid.Video,("vid_source_" + jcc));						
											
					//alert("jcc: " + jcc + " | new_vid.Video: " + new_vid.Video);  //vid_source_"+jcc+"						
					
				vid_tracker = 1;

				///////////////////////////BAL - 7/1/2021///////////////////////////////
				//useChinaCache, if on ChinaCache
				if(window.location.href.indexOf("ll-content.ccnetworks.cn") !== -1){
					//new_vid.Video = new_vid.Video.replace("https://ry6g4c.cloud.influxis.com/", "https://ll-content.ccnetworks.cn/ChinaCache/video/");
					new_vid.Video = new_vid.Video.replace("https://loma.azureedge.net/videos/","https://ll-content.ccnetworks.cn/ChinaCache/videos/");
				}
				///////////////////////////BAL - 7/1/2021///////////////////////////////
											
				cur_vid[jcc] = (new_vid.Video);
											
				//document.getElementById("vid_source_"+ vi).style.display = "none";								
											
					switch(new_vid.Expert_View)
						{
							case "yes":
//Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='video_container' style='background-color:"+new_vid.back_color+"; padding: 4px; margin-top: "+new_vid.top_margin+";'><div><div><img class='expert_img_pos' style=' position: absolute; top:"+new_vid.top_margin+"; right: 0px' src='../../../jbuild_libs/images/expert_video.png' width='20%' height='auto' alt=''/><video width='100%;' controls><source src='"+new_vid.Video+"' id='vid_source' type='video/mp4'></video></div><div align='center'><button id='tbtn_" + jcc+"' type='button' class='btn btn-primary btn-sm' onclick='Transcripts("+jcc+");'>Open Transcript</button></div></div></div>";
								
//-------<( Added to check for portal or development )>-------
					if(typeof moduleFolder !== "undefined")
						{
							//Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12'><img id='xprtv' style='position: absolute; top:"+new_vid.top_margin+"; right: 12px' src='jbuild_libs/images/expert_video.png' alt='"+new_vid.Expert_View_Alt+"'>";
							Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12'>";							
						}
					
					if(typeof moduleFolder === "undefined")
						{
							//Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12'><img id='xprtv' style='position: absolute; top:"+new_vid.top_margin+"; right: 12px' src='../../../jbuild_libs/images/expert_video.png' alt='"+new_vid.Expert_View_Alt+"'>";
							Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12'>";								
						}								
//-------<( Added to check for portal or development )>-------								
								
							
								
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='background-color:"+new_vid.back_color+"; padding: 4px; margin-top: "+new_vid.top_margin+";'><div><div class=\"bExpertVid\"><video id='vid_source_"+jcc+"' class='jb_car_acc_wd' width='100%;' controls onplay='video_number("+jcc+")'><source src='"+new_vid.Video+"' id='vid_source' type='video/mp4'></video></div><div align='center'><button id='tbtn_" + jcc+"' type='button' class='btn btn-primary btn-sm' onclick='Transcripts("+jcc+");'>"+trans_button+"</button></div></div></div>";// </div>								

Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";								
							break;
								
							case "no": //jb_mx_wd
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12' style='background-color:"+new_vid.back_color+"; padding: 4px; margin-top: "+new_vid.top_margin+";'><div><div ><video id='vid_source_"+jcc+"' class='jb_car_acc_wd' width='100%;' controls onplay='video_number("+jcc+")'><source src='"+new_vid.Video+"' id='vid_source' type='video/mp4'></video></div><div align='center'><button id='tbtn_" + jcc+"' type='button' class='btn btn-primary btn-sm' onclick='Transcripts("+jcc+");'>"+trans_button+"</button></div></div></div>";// </div>
							
							break;	
						}
										//jb_mx_wd	
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='jb_car_acc_wd' id='trans_" + jcc +"' style='display: none; border: medium; border-style: solid; border-color: #000000;height:300px; overflow-y: auto; overflow-x: hidden ;padding:5px;'>";									
					for(var trn = 1; trn < sSelections[jcc][snglBld[jcc]].length; trn++)
						{
							if(new_vid.Person_underline === "u")
								{
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<p class='jb_char_para' style='text-align:"+new_vid.Person_align+"; color: "+new_vid.Person_text_color+"'><"+new_vid.Person_font+"><u>"+ sSelections[jcc][snglBld[jcc]][trn].Person +"</u></"+new_vid.Person_font+"></p>";										
								}

							if(new_vid.Person_underline === "")
								{
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<p class='jb_char_para' style='text-align:"+new_vid.Person_align+"; color: "+new_vid.Person_text_color+"'><"+new_vid.Person_font+">"+ sSelections[jcc][snglBld[jcc]][trn].Person +"</"+new_vid.Person_font+"></p>";										
								}							
				
							
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<p class='jb_char_para' style='text-align:"+new_vid.Transcript_Text_align+"; color:"+new_vid.Transcript_Text_color+"'><"+new_vid.Transcript_Text_font+">"+ sSelections[jcc][snglBld[jcc]][trn].Transcript_Text +"</"+new_vid.Transcript_Text_font+"></p>";
						}						

Vid_count_array[jcc] = jcc;
vid_click_array[jcc] = "vid_source_" + jcc;
											
//alert("vid_click_array[jcc]: " + vid_click_array[jcc]);											
											
											
video_counter = (video_counter + 1);											
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";	

//=============================================================================================================
//=============================================================================================================											

// My Original
/*											
				var new_vid	= sSelections[jcc][snglBld[jcc]][0];

					//Expert_View_Alt						
					//alert(new_vid.Expert_View_Alt);				
											
					switch(new_vid.Expert_View)
						{
							case "yes":
//Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='video_container' style='background-color:"+new_vid.back_color+"; padding: 4px; margin-top: "+new_vid.top_margin+";'><div><div><img class='expert_img_pos' style=' position: absolute; top:"+new_vid.top_margin+"; right: 0px' src='../../../jbuild_libs/images/expert_video.png' width='20%' height='auto' alt=''/><video width='100%;' controls><source src='"+new_vid.Video+"' id='vid_source' type='video/mp4'></video></div><div align='center'><button id='tbtn_" + jcc+"' type='button' class='btn btn-primary btn-sm' onclick='Transcripts("+jcc+");'>Open Transcript</button></div></div></div>";
								
//-------<( Added to check for portal or development )>-------
					if(typeof moduleFolder !== "undefined")
						{
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12'><img id='xprtv' style='position: absolute; top:"+new_vid.top_margin+"; right: 12px' src='jbuild_libs/images/expert_video.png' alt='"+new_vid.Expert_View_Alt+"'>";								
						}
					
					if(typeof moduleFolder === "undefined")
						{
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12'><img id='xprtv' style='position: absolute; top:"+new_vid.top_margin+"; right: 12px' src='../../../jbuild_libs/images/expert_video.png' alt='"+new_vid.Expert_View_Alt+"'>";								
						}								
//-------<( Added to check for portal or development )>-------								
								
								
							
								
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='background-color:"+new_vid.back_color+"; padding: 4px; margin-top: "+new_vid.top_margin+";'><div><div><video class='jb_mx_wd' width='100%;' controls><source src='"+new_vid.Video+"' id='vid_source' type='video/mp4'></video></div><div align='center'><button id='tbtn_" + jcc+"' type='button' class='btn btn-primary btn-sm' onclick='Transcripts("+jcc+");'>Open Transcript</button></div></div></div>";// </div>								

Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";								
							break;
								
							case "no": //jb_mx_wd
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12' style='background-color:"+new_vid.back_color+"; padding: 4px; margin-top: "+new_vid.top_margin+";'><div><div><video class='jb_mx_wd' width='100%;' controls><source src='"+new_vid.Video+"' id='vid_source' type='video/mp4'></video></div><div align='center'><button id='tbtn_" + jcc+"' type='button' class='btn btn-primary btn-sm' onclick='Transcripts("+jcc+");'>Open Transcript</button></div></div></div>";// </div>
							
							break;	
						}
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='trans_" + jcc +"' style='display: none; border: medium; border-style: solid; border-color: #000000;height:300px; overflow-y: auto; overflow-x: hidden ;padding:5px;'>";									
					for(var trn = 1; trn < sSelections[jcc][snglBld[jcc]].length; trn++)
						{
							if(new_vid.Person_underline === "u")
								{
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<p class='jb_char_para' style='text-align:"+new_vid.Person_align+"; color: "+new_vid.Person_text_color+"'><"+new_vid.Person_font+"><u>"+ sSelections[jcc][snglBld[jcc]][trn].Person +"</u></"+new_vid.Person_font+"></p>";										
								}

							if(new_vid.Person_underline === "")
								{
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<p class='jb_char_para' style='text-align:"+new_vid.Person_align+"; color: "+new_vid.Person_text_color+"'><"+new_vid.Person_font+">"+ sSelections[jcc][snglBld[jcc]][trn].Person +"</"+new_vid.Person_font+"></p>";										
								}							
				
							
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<p class='jb_char_para' style='text-align:"+new_vid.Transcript_Text_align+"; color:"+new_vid.Transcript_Text_color+"'><"+new_vid.Transcript_Text_font+">"+ sSelections[jcc][snglBld[jcc]][trn].Transcript_Text +"</"+new_vid.Transcript_Text_font+"></p>";
						}						

Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";	

//=============================================================================================================	
*/
									break;
									
//-------------------------------------------------------------------------------------------------------------	
//-------<( Video New code end )>-------											
//-------------------------------------------------------------------------------------------------------------											


//-------------------------------------------------------------------------------------------------------------	
//-------<( Video Reflection New code begin )>-------	SA									
//-------------------------------------------------------------------------------------------------------------											

case "Video_Reflection":  //Next_Lesson

	//		console.log("trans_button = " + trans_button);
	// To disable
	//document.getElementById('Next_Lesson').style.pointerEvents = 'none';
	// To re-enable:
	//document.getElementById('Next_Lesson').style.pointerEvents = 'auto'; 


var new_reflct_vid	= sSelections[jcc][snglBld[jcc]][0];

//console.log(new_reflct_vid.End_of_lesson);

if(new_reflct_vid.End_of_lesson === "yes")
	{
		console.log(new_reflct_vid.End_of_lesson);
		ref_eol = 1;
		//document.getElementById('Next_Lesson').style.pointerEvents = 'none';
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

//console.log("Boom:" + new_reflct_vid.Reflection_Question_Feedback)


//Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12'><a style='margin-top:10px;' class='btn btn-primary disabled' id='rf_sub_"+jcc+"' onclick='rv_sub("+jcc+","+ref_opt_num+");'>"+submit_button+"</a></div>";




Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12'><button style='margin-top:10px;' class='btn btn-primary disabled' id='rf_sub_"+jcc+"' onclick='rv_sub("+jcc+","+ref_opt_num+");'>"+submit_button+"</button></div>";



Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";

Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12' style='margin-top:20px'>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-3 col-md-3 col-xs-12'></div>";

Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-6 col-md-6 col-xs-12' style='border:2px solid black;display: none' id='vr_feedback_"+jcc+"'><jb2 style='color:black'>"+new_reflct_vid.Reflection_Question_Feedback+"</jb2></div>";

Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-3 col-md-3 col-xs-12'></div>";

//new_reflct_vid.Reflection_Question_Feedback

//class='col-lg-6 col-md-6 col-xs-12'

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



case "Inline_Source_File":
											
		//alert("Inline_Source_File called");									
										
var source_new	= sSelections[jcc][snglBld[jcc]];
								
											
	for(var sfa = 0; sfa < source_new.length; sfa++)
		{
			source_Array[sfa] = source_new[sfa].Source_Info;//[sfa];
			//alert("source_Array[sfa]: " + source_Array[sfa]);
		}
											
											
//source_Array											
											
											
break;												
											
//-------------------------------------------------------------------------------------------------------------	
//-------<( Image 3 2 1 rows code begin SA )>-------											
//-------------------------------------------------------------------------------------------------------------											
									case "Image_Multi":
					var Image_Multi	= sSelections[jcc][snglBld[jcc]]; //[0]




/*					
											

		if(typeof moduleFolder !== "undefined")
			{
				mag_lens = "jbuild_libs/images/zoom.png";
				plus_icon = "jbuild_libs/images/plus_icon.png";
				minus_icon = "jbuild_libs/images/minus_sign.png";
				fit_icon = "jbuild_libs/images/resize_full.png";				
			}

		if(typeof moduleFolder === "undefined")
			{
				mag_lens = "../../../jbuild_libs/images/zoom.png";
				plus_icon = "../../../jbuild_libs/images/plus_icon.png";
				minus_icon = "../../../jbuild_libs/images/minus_sign.png";
				fit_icon = "../../../jbuild_libs/images/resize_full.png";
			}
*/										
								
		switch(Image_Multi[0].total_images)
			{
				case "1":
						im_rnbr = 12;
				break;
					
				case "2":
						im_rnbr = 6;
				break;
					
				case "3":
						im_rnbr = 4;
				break;					
			}
			
				if(Image_Multi[0].total_images === "" || Image_Multi[0].total_images > 3 || Image_Multi[0].total_images === "0")
					{
						//alert("Bad Data!"); 
						break;
					}
										
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12' style='margin-top:"+Image_Multi[0].top_margin+";height: 100%; background-color:"+Image_Multi[0].main_background_color+"; padding-bottom: 10px;'>";
		
var mlt_image_width; //-------<(  Added by Jack Coram on July 22, 2020  )>-------									
			for(var im_ttl = 1; im_ttl <= Image_Multi[0].total_images; im_ttl++)  
				{
				
									//==========================================================
									//-------<(  Added by Jack Coram on July 22, 2020  )>-------
									//==========================================================
									if($(document).width() > 414)
									{
										mlt_image_width = Image_Multi[im_ttl].image_width;
									}

									if($(document).width() <= 414)    
									{
										mlt_image_width = "100%";
									}
									//==========================================================					

					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-"+im_rnbr+" col-md-"+im_rnbr+" col-xs-12'>";
					
		
					//mi_iwt_array[jcc] = Alt_Tag_Image_name[ma_alt];

					

					mi_iwt_img_array.push(Image_Multi[im_ttl].image_file);

				//	console.log("im_ttl: "  + im_ttl + " / jcc: " + jcc);
				//	console.log("Image_Multi[im_ttl].image_file: " + Image_Multi[im_ttl].image_file);

		if(typeof Image_Multi[im_ttl].image_file_tag === "undefined")
			{
				ADA_check_Array[jcc] = "Image_Multi needs the Alt tag fields added."
				
				Jcc_Comp_Maker = Jcc_Comp_Maker + "<img style='width:"+mlt_image_width+"; margin-top: "+Image_Multi[im_ttl].image_top_margin+"; border-style: "+Image_Multi[im_ttl].image_border_style+"; border-color: "+Image_Multi[im_ttl].image_border_color+"; border-width: "+Image_Multi[im_ttl].image_border_width+"; border-radius: "+Image_Multi[im_ttl].image_border_radius+"' src='"+img_loc+"" + Image_Multi[im_ttl].image_file + "' alt='' role='button' onclick='mi_iwt_zoom("+jcc+","+im_ttl+",100)' id='mig_"+jcc+"'>";


					//Jcc_Comp_Maker = Jcc_Comp_Maker + "<img style='width:"+mlt_image_width+"; margin-top: "+Image_Multi[im_ttl].image_top_margin+"; border-style: "+Image_Multi[im_ttl].image_border_style+"; border-color: "+Image_Multi[im_ttl].image_border_color+"; border-width: "+Image_Multi[im_ttl].image_border_width+"; border-radius: "+Image_Multi[im_ttl].image_border_radius+"' src='"+img_loc+"" + Image_Multi[im_ttl].image_file + "' alt=''>";

			} //width:"+mlt_image_width+"; //-------<(  Added by Jack Coram on July 22, 2020  )>-------
			//width:"+Image_Multi[im_ttl].image_width+";		
					
		if(typeof Image_Multi[im_ttl].image_file_tag !== "undefined")			
					{

						

			if(Image_Multi[im_ttl].image_file_tag.length <= 125)
				{

					Jcc_Comp_Maker = Jcc_Comp_Maker + "<img style='width:"+mlt_image_width+"; margin-top: "+Image_Multi[im_ttl].image_top_margin+"; border-style: "+Image_Multi[im_ttl].image_border_style+"; border-color: "+Image_Multi[im_ttl].image_border_color+"; border-width: "+Image_Multi[im_ttl].image_border_width+"; border-radius: "+Image_Multi[im_ttl].image_border_radius+"' src='"+img_loc+"" + Image_Multi[im_ttl].image_file + "' alt='"+Image_Multi[im_ttl].image_file_tag+"' role='button' onclick='mi_iwt_zoom("+jcc+","+im_ttl+",100)' id='mig_"+jcc+"'>";


					//Jcc_Comp_Maker = Jcc_Comp_Maker + "<img style='width:"+mlt_image_width+"; margin-top: "+Image_Multi[im_ttl].image_top_margin+"; border-style: "+Image_Multi[im_ttl].image_border_style+"; border-color: "+Image_Multi[im_ttl].image_border_color+"; border-width: "+Image_Multi[im_ttl].image_border_width+"; border-radius: "+Image_Multi[im_ttl].image_border_radius+"' src='"+img_loc+"" + Image_Multi[im_ttl].image_file + "' alt='"+Image_Multi[im_ttl].image_file_tag+"'>"; //role='button'						
				} //width:"+mlt_image_width+"; //-------<(  Added by Jack Coram on July 22, 2020  )>-------
				//width:"+Image_Multi[im_ttl].image_width+";	
					
			if(Image_Multi[im_ttl].image_file_tag.length > 125)
				{
					console.log("+++++++ im_ttl: " + im_ttl);
					console.log("ma_alt: " + ma_alt);

					//console.log("BULLCRAP!!!! " + Image_Multi[ma_alt].image_file);


					//	ma_alt = (ma_alt + 1);

					mi_iwt_image_array.push(Image_Multi[im_ttl].image_file)

					mi_iwt_tag_array.push(Image_Multi[im_ttl].image_file_tag)

					//mi_iwt_tag_array.push(Image_Multi[im_ttl].image_file)
					
					Alt_Tag_Image_Data[ma_alt] = Image_Multi[im_ttl].image_file_tag;
					Alt_Tag_Image_name[ma_alt] = Image_Multi[im_ttl].image_file;

				//	console.log("Alt_Tag_Image_Data["+ ma_alt + "]: " + Alt_Tag_Image_Data[ma_alt]);


				//	console.log("Alt_Tag_Image_name["+ma_alt+"]: " + Alt_Tag_Image_name[ma_alt]);

					//var zm_img_name = String(Alt_Tag_Image_name[ma_alt]);

					//console.log("Alt_Tag_Image_name[ma_alt]: " + Alt_Tag_Image_name[ma_alt]);

					//Jcc_Comp_Maker = Jcc_Comp_Maker + "<img style='width:"+mlt_image_width+"; margin-top: "+Image_Multi[im_ttl].image_top_margin+"; border-style: "+Image_Multi[im_ttl].image_border_style+"; border-color: "+Image_Multi[im_ttl].image_border_color+"; border-width: "+Image_Multi[im_ttl].image_border_width+"; border-radius: "+Image_Multi[im_ttl].image_border_radius+"' src='"+img_loc+"" + Image_Multi[im_ttl].image_file + "' alt='' role='button' onclick='alt_tag_lib("+ma_alt+")' id='mig_"+jcc+"'>";

				Jcc_Comp_Maker = Jcc_Comp_Maker + "<img style='width:"+mlt_image_width+"; margin-top: "+Image_Multi[im_ttl].image_top_margin+"; border-style: "+Image_Multi[im_ttl].image_border_style+"; border-color: "+Image_Multi[im_ttl].image_border_color+"; border-width: "+Image_Multi[im_ttl].image_border_width+"; border-radius: "+Image_Multi[im_ttl].image_border_radius+"' src='"+img_loc+"" + Image_Multi[im_ttl].image_file + "' alt='' role='button' onclick='mi_iwt_zoom("+jcc+","+im_ttl+",100)' id='mig_"+jcc+"'>";




					
					//im_ttl  ma_alt
// Place this line after: onclick='alt_tag_lib("+ma_alt+")'> <img alt='Select image for more information' src='"+alt_icon+"' style='position:absolute; top:92%; left: 81%'>

						console.log("jcc: " + jcc);
						console.log("ma_alt: " + ma_alt);
				
				//-------<( Added by Jack on 11/30/2020. )>-------
				//-------<( Updated by James on 1/26/2021. )>-------
			//	Jcc_Comp_Maker = Jcc_Comp_Maker + "<div><button style='margin-top:10px;' class='btn btn-primary btn-sm' role='button' onclick='alt_tag_lib("+ma_alt+")'>Image Description</button></div>";
			Jcc_Comp_Maker = Jcc_Comp_Maker + "<div><button style='margin-top:10px;' class='btn btn-primary btn-sm' role='button' onclick='alt_tag_im_sa("+jcc+","+ma_alt+")'>" + imgDescButton + "</button></div>";			
				//-------<( Added by Jack on 11/30/2020. )>-------

				
							/*
								console.log("Image_Multi[im_ttl].image_file: " + Image_Multi[im_ttl].image_file);
								console.log("mlt_image_width: " + mlt_image_width);
								console.log("-------------------------------------------------------");
								console.log("mig_" + jcc);
							*/	
								//console.log(document.getElementById("mig_" + jcc).offsetWidth);
																 
/*
	document.getElementById("modal_image").style.height = (Number(zoomer) + 10) + "%";
	document.getElementById("modal_image").style.width = (Number(zoomer) + 10) + "%";
*/
				ma_alt = (ma_alt + 1);
					
				} //width:"+mlt_image_width+"; //-------<(  Added by Jack Coram on July 22, 2020  )>-------
					//width:"+Image_Multi[im_ttl].image_width+";

					
						}
					
					
					
				
					Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";

					

				} 

Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";												

mi_iwt_tag_whole[jcc] = mi_iwt_tag_array;

mi_iwt_image_whole[jcc] = mi_iwt_image_array


console.log("▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄");
console.log("mi_iwt_image_array: " + mi_iwt_image_array);
console.log("mi_iwt_image_whole["+jcc+"]: " + mi_iwt_image_whole[jcc]);
console.log("▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄");





//mi_iwt_tag_whole[jcc] = mi_iwt_image_array;


console.log("-------------------------------------------------------------------------------------------------------------	")
console.log("mi_iwt_tag_whole: " + mi_iwt_tag_whole);
console.log("-------------------------------------------------------------------------------------------------------------	")



mi_iwt_array[jcc] = mi_iwt_img_array;
mi_iwt_img_array = [];
//console.log("******* mi_iwt_img_array: " +mi_iwt_img_array);
//console.log("******* mi_iwt_array["+jcc+"]: " + mi_iwt_array[jcc]);
//ma_alt = 0;											
									break;	
										
//-------------------------------------------------------------------------------------------------------------	
//-------<( Image 3 2 1 rows code end )>-------											
//-------------------------------------------------------------------------------------------------------------												//
											
										case "JB_LRM":
											
											var J_Merge	= sSelections[jcc][snglBld[jcc]]; //[0]
											//background_color
											

											Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12'>";// Begin
											Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='lrm_window' style='background-color:"+J_Merge[0].background_color+"; height:500px;'>"; //lrm_window begin
											
											
							/*				
								  width: 800px;
								  height: 350px;
								  position: relative;
							*/	
											

								
	Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='image_one'><img id='lrm_01' alt='' src='"+img_loc+"" + J_Merge[0].left_image + "'></div>";
											
	Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='image_two'><img id='lrm_02' alt='' src='"+img_loc+"" + J_Merge[0].right_image + "'></div>";
											
	Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='image_three'><img id='lrm_03' alt='' src='"+img_loc+"" + J_Merge[0].center_image + "'></div>";

											Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>"; // lrm_window end
											Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>"; // End
											
											
											
				
											//LRM_setup();
										break;	
											
											
											
											
											
//	 <div id="swiffycontainer" style="width: 100%; height: 100%;"></div>
										case "JB_Swiffy":
											//alert("Swiffy Called");
											var swiffy_data = sSelections[jcc][snglBld[jcc]];
											
											
						
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12'>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='margin-top:"+swiffy_data[0].top_margin+"; background-color:"+swiffy_data[0].background_color+"; padding-bottom: 10px;height:"+swiffy_data[0].height+"; width:"+swiffy_data[0].width+"'>";					
						

	Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='swiffycontainer_"+jcc+"' style='width: 100%; height: 100%;'></div>";
    											
	cur_swiffy_name[jcc] = swiffy_data[0].swiffy_file;
											
		//alert("cur_swiffy_name: " + cur_swiffy_name);						
											
	//Jcc_Comp_Maker = Jcc_Comp_Maker + "<div role='button' onclick='Swiffy_Play(swiffycontainer_"+jcc+")'></div>";
											
						Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";					
								
Jcc_Comp_Maker = Jcc_Comp_Maker +"<div align='center' style='margin-top:20px;'><button type='button' class='btn btn-primary btn-sm' onclick='Swiffy_Play("+jcc+");'>Play Animation</button></div>";	
											
						Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";					
											
										
											
										break;	

//============================================================================================
//============================================================================================
											
											
//-------------------------------------------------------------------------------------------------------------	
//-------<( Flip_Multi_New begin SA )>-------		12/19/2019 | 01/16/2020									
//-------------------------------------------------------------------------------------------------------------												
case "Flip_Multi_New": 
flip_Count = 0;											
									flip_card_data = sSelections[jcc][snglBld[jcc]];

var card_back;
										
jflip_array = [];
									
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='flip_num_"+jcc+"' class='col-lg-12 col-md-12 col-xs-12'  style='margin-top:"+flip_card_data[0].top_margin+";height:"+flip_card_data[0].flip_box_height+"'>";			

var cd_sides = [];											
var crd_content = [];

		cflip_num = ((flip_card_data.length - 1) * 1);
											
		for(var t_card = 1; t_card <= cflip_num; t_card++)
			{
				
				cd_sides[t_card] = Object.keys(flip_card_data[t_card]); 
				crd_content[t_card] = flip_card_data[t_card][cd_sides[t_card]];
				
								switch(String(cd_sides[t_card]))
									{
										case "Heading_New":
													cnst_heading(crd_content[t_card],t_card);
										break;
											
										case "Paragraphs_New":
													csnt_Paragraphs_New(crd_content[t_card],t_card);
										break;
											
										case "List_text_paragraph":
													csnt_list(crd_content[t_card],t_card);
										break;
											
										case "image_w_text":
													csnt_img_txt_lst(crd_content[t_card],t_card);
										break;											
									}
			}
							
							
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-	
//-------<( Functions to build the content for the flipcards )>-------											
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-										

//-------<(  Flipcard Heading Code )>-------											
function cnst_heading(heading_data,crd_number)
		{
	
flip_card_sMaker = "<div class='col-lg-12 col-md-12 col-xs-12' style='height:"+flip_card_data[0].flip_box_height+"; width:100%; margin-top:"+heading_data[2].top_margin+";background-color: "+ heading_data[6].background_color +"; border-top-color:"+heading_data[7].top_line_color+"; border-top-width:"+heading_data[7].top_line_weight+"; border-top-style:"+heading_data[7].top_line_style+"; border-bottom-color:"+heading_data[9].bottom_line_color+"; border-bottom-width:"+heading_data[9].bottom_line_weight+"; border-bottom-style:"+heading_data[9].bottom_line_style+"'><"+heading_data[3].size+">";
										
flip_card_sMaker = flip_card_sMaker + "<p style='background-color:"+heading_data[8].border_background_color+"; margin-top:"+heading_data[8].border_top_margin+"; padding:"+heading_data[8].border_padding+"; border-radius:"+heading_data[8].border_inside_radius+"; border-color:"+heading_data[8].border_inside_color+"; border-width:"+heading_data[8].border_inside_weight+"; border-style:"+heading_data[8].border_inside_style+" ; width:"+heading_data[8].border_width+"; color: "+ heading_data[5].color +"; font-weight: "+ heading_data[4].style +";text-align: "+ heading_data[1].alignment +"'>"+ heading_data[0].sngl_Heading +"</p></"+heading_data[3].size+">";	//</div>
											
											
flip_card_sMaker = flip_card_sMaker + "</"+heading_data[3].size+"></div>";			
			
			
			
			
							jflip_array[crd_number * 1] = flip_card_sMaker;
					call_setup();
		}
//-------<(  Flipcard Heading Code )>-------											

											
//-------<(  Flipcard Paragraph_New Code )>-------	
										
	function csnt_Paragraphs_New(paragraph_data,crd_number)
		{
							
				if(paragraph_data[0].background_image.length > 0)
					{
	flip_card_sMaker = "<div class='col-lg-12 col-md-12 col-xs-12' style='background: linear-gradient(rgba(220, 220, 220, 0.8), rgba(220, 220, 220, 0.8)), rgba(220,220,220,0.8) url("+img_loc + paragraph_data[0].background_image+"); width:100%; height: auto; background-position: center center; background-size: cover; padding: 0px 20px; border-top-color:"+paragraph_data[0].border_color+"; border-top-width:"+paragraph_data[0].border_weight+"; border-top-style:"+paragraph_data[0].border_style+"; border-bottom-color:"+paragraph_data[0].border_color+"; border-bottom-width:"+paragraph_data[0].border_weight+"; border-bottom-style:"+paragraph_data[0].border_style+"; border-radius:"+paragraph_data[0].border_radius+"; margin-top:"+paragraph_data[0].top_margin+";'>";	
					}
			
				if(paragraph_data[0].background_image.length === 0)							
					{




	flip_card_sMaker = "<div class='col-lg-12 col-md-12 col-xs-12' style='height:auto; padding: 0px 20px; background-color:"+paragraph_data[0].background_color+"; border-top-color:"+paragraph_data[0].border_color+"; border-top-width:"+paragraph_data[0].border_weight+"; border-top-style:"+paragraph_data[0].border_style+"; border-bottom-color:"+paragraph_data[0].border_color+"; border-bottom-width:"+paragraph_data[0].border_weight+"; border-bottom-style:"+paragraph_data[0].border_style+"; border-radius:"+paragraph_data[0].border_radius+"; margin-top:"+paragraph_data[0].top_margin+";'>";		
					}

					


		flip_card_sMaker = flip_card_sMaker + "<div style='padding:"+paragraph_data[0].Padding+";'><span style='text-align:"+paragraph_data[0].heading_alignment+"; color:"+paragraph_data[0].heading_color+"'>"; //color:"+paragraph_data[0].heading_color+"
				
		flip_card_sMaker = flip_card_sMaker + "<"+paragraph_data[0].heading_font_size+" style='color:"+paragraph_data[0].heading_color+"; font-weight:"+paragraph_data[0].heading_weight+";font-style:"+paragraph_data[0].heading_style+";font-variant:"+paragraph_data[0].heading_variant+"; text-transform:"+paragraph_data[0].heading_transform+"'>"+paragraph_data[0].heading+"</"+paragraph_data[0].heading_font_size+">";
										
		flip_card_sMaker = flip_card_sMaker + "</span></div>";									
											
for(var newpara_ac = 1; newpara_ac < paragraph_data.length; newpara_ac++)
				{
						switch(paragraph_data[0].columns)
							{
								case "1":
									
flip_card_sMaker = flip_card_sMaker + "<p class='jb_column1' style='color:"+paragraph_data[0].Paragraph_Font_color+"; text-align:"+paragraph_data[0].Paragraph_align+";line-height:"+paragraph_data[0].line_spacing+"'><"+paragraph_data[0].Paragraph_Font_Size+">"+ paragraph_data[newpara_ac].Paragraph_txt +"</"+paragraph_data[0].Paragraph_Font_Size+"></p>";	
									
								break;	
									
								case "2":
flip_card_sMaker = flip_card_sMaker + "<p class='jb_column2' style='color:"+paragraph_data[0].Paragraph_Font_color+"; text-align:"+paragraph_data[0].Paragraph_align+";line-height:"+paragraph_data[0].line_spacing+"'><"+paragraph_data[0].Paragraph_Font_Size+">"+ paragraph_data[newpara_ac].Paragraph_txt +"</"+paragraph_data[0].Paragraph_Font_Size+"></p>";									
								break;	
							}
				}
flip_card_sMaker = flip_card_sMaker + "</div>";			
		
			jflip_array[crd_number * 1] = flip_card_sMaker;		
						
			call_setup();
		}

//-------<(  Flipcard Paragraph_New Code )>-------	
											
//-------<(  Flipcard List_text_paragraph Code )>-------												
	function csnt_list(list_data,crd_number)
		{
			
flip_card_sMaker = "<div>";
				
flip_card_sMaker = flip_card_sMaker + "<div style='padding: "+ list_data[6].padding +"; margin-top: " + list_data[4].top_margin + "; background-color:"+list_data[5].background_color+"'>";											
				
//-------<(  Heading )>-------	list_data[0].paragraph_text_size										
flip_card_sMaker = flip_card_sMaker + "<"+list_data[0].heading_size+" style='border-bottom-style: "+list_data[0].heading_underline+"; border-bottom-color:"+list_data[0].heading_underline_color+" ;border-bottom-width: "+list_data[0].heading_underline_height+"; color:"+list_data[0].heading_color+"; font-weight: "+list_data[0].heading_style+"; text-align: "+ list_data[0].heading_alignment +"'>"+ list_data[0].List_Heading +"</"+list_data[0].heading_size+">";
//-------<(  Heading )>-------					

//-------<(  Paragraph Top )>-------				
for(var atp = 0; atp < list_data[1].Top_Paragraphs.length; atp++)
	{
		
		flip_card_sMaker = flip_card_sMaker + "<"+list_data[0].paragraph_text_size+"><p style='text-align: "+ list_data[0].paragraph_alignment +"; color:"+list_data[0].paragraph_top_text_color+"'>"+ list_data[1].Top_Paragraphs[atp].Paragraph_text +"</p></"+list_data[0].paragraph_text_size+">";	
		
	}
//-------<(  Paragraph Top )>-------

flip_card_sMaker = flip_card_sMaker + "<"+ list_data[3].Type_of_List +" type='"+list_data[3].ol_type+"' style='list-style-type:"+list_data[3].ul_type+"'>";				
//-------<(  List )>-------	list_data[3].List_Text_Size		
				List_Text_Num = (list_data[8].list_items);
							for(lst = 0; lst < List_Text_Num.length; lst++)
								{

									List_Text_Array[lst] = (list_data[lst].lstText);
flip_card_sMaker = flip_card_sMaker + "<li style='margin-left:40px; color:"+ list_data[7].text_color +"; text-align: "+ list_data[2].align_text +";'><"+list_data[3].List_Text_Size+">"+ List_Text_Num[lst].lstText +"</"+list_data[3].List_Text_Size+"></li>";
			
								}

flip_card_sMaker = flip_card_sMaker + "</"+ list_data[3].Type_of_List +">";					
				
//-------<(  List )>-------
				
//-------<(  Paragraph Bottom )>-------				
for(var abp = 0; abp < list_data[9].Bottom_paragraphs.length; abp++)
	{
flip_card_sMaker = flip_card_sMaker + "<"+list_data[0].paragraph_text_size+"><p style='text-align: "+ list_data[0].paragraph_alignment +"; color:"+list_data[0].paragraph_bot_text_color+"'>"+ list_data[9].Bottom_paragraphs[abp].Paragraph_text +"</p></"+list_data[0].paragraph_text_size+">";		
	}
//-------<(  Paragraph Bottom )>-------					

flip_card_sMaker = flip_card_sMaker + "</div></div>";					

Jcc_Comp_Maker = Jcc_Comp_Maker +  "<div style='background-color:"+acc_setup_array[3]+";' id='collapse"+jcc+"_"+acc_Count+"' class='panel-collapse collapse'><div class='panel-body'>"+ flip_card_sMaker +"</div></div>";			
		
			
			
			jflip_array[crd_number * 1] = flip_card_sMaker;	
			call_setup();
		}
//-------<(  Flipcard List_text_paragraph Code )>-------
											
//-------<(  Flipcard image_w_text Code )>-------											
											
	function csnt_img_txt_lst(itl_data,crd_number)
		{

					flip_card_sMaker = "<div style='margin-top: " + itl_data[6].top_margin + "'>";											
					flip_card_sMaker = flip_card_sMaker + "<div style='background-color: " + itl_data[7].background_color + "'>";	

				
		function flp_text(actc)
				{

					
		//alert("typeof itl_data[3].image_list: " + typeof itl_data[3].image_list);			
					
			if(typeof itl_data[3].image_list === "undefined")
				{
					flip_card_sMaker = flip_card_sMaker + "<div style='text-align:"+itl_data[5].image_text_alignmnet+"'><"+itl_data[5].image_font_size+">"+itl_data[3].image_text+"</"+itl_data[5].image_font_size+"></div>";
					
					
				}
					
			if(typeof itl_data[3].image_list !== "undefined")
				{

					switch(itl_data[3].Type_of_List)
						{
							case "ol":
								lst_style = itl_data[3].ol_type;
								
							break;
								
							case "ul":
								lst_style = itl_data[3].ul_type;
								
							break;
							
						}
					
//List maker	
				//alert("Img_List_Maker: " + typeof Img_List_Maker);
				Img_List_Maker = "";	
					
					
				Img_List_Maker = Img_List_Maker + "<"+itl_data[3].Type_of_List+">";
					//Img_List_Maker = Img_List_Maker + "<"+itl_data[3].Type_of_List+" style='list-style-type:"+lst_style+"' type='"+lst_style+"'>"; 
					
						for(var tlist = 0; tlist < itl_data[3].image_list.length; tlist++)
							{
								
				Img_List_Maker = Img_List_Maker + "<li style='margin-left:40px ;text-align:"+itl_data[5].image_text_alignmnet+"'><"+itl_data[3].List_Text_Size+">"+itl_data[3].image_list[tlist].img_lstText+"</"+itl_data[3].List_Text_Size+"></li>";
							}
					

				Img_List_Maker = Img_List_Maker + "</"+itl_data[3].Type_of_List+">";
				
					
//List maker									
					if(actc === 1)
						{ 
							
						if(screen.width <= 540)
							{
					flip_card_sMaker = flip_card_sMaker + "<div class='col-lg-6 col-md-6 col-xs-12' style='margin-bottom:10px; margin-top:10px; background-color: " + itl_data[7].background_color + ";border-style:"+itl_data[3].list_border_style+";border-width:"+itl_data[3].list_border_height+";border-color:"+itl_data[3].list_border_color+"'>";								
							}
							
						if(screen.width > 540)	
							{
					flip_card_sMaker = flip_card_sMaker + "<div class='col-lg-6 col-md-6 col-xs-12' style='margin-bottom:10px; margin-top:"+itl_data[4].image_text_top_margin+";background-color: " + itl_data[7].background_color + ";border-style:"+itl_data[3].list_border_style+";border-width:"+itl_data[3].list_border_height+";border-color:"+itl_data[3].list_border_color+"'>";								
							}
		
						}
					
					if(actc === 0)
						{
					flip_card_sMaker = flip_card_sMaker + "<div class='col-lg-12 col-md-12 col-xs-12' style='margin-bottom:20px; margin-top:"+itl_data[4].image_text_top_margin+";background-color: " + itl_data[7].background_color + ";border-style:"+itl_data[3].list_border_style+";border-width:"+itl_data[3].list_border_height+";border-color:"+itl_data[3].list_border_color+"'>";		
						}

					if(itl_data[3].list_position === "top")
						{
							flip_card_sMaker = flip_card_sMaker + Img_List_Maker;
						}
				

					flip_card_sMaker = flip_card_sMaker + "<div style='text-align:"+itl_data[5].image_text_alignmnet+"'><"+itl_data[5].image_font_size+">"+itl_data[3].image_text+"</"+itl_data[5].image_font_size+"></div>";
	
					if(itl_data[3].list_position === "bottom")
						{
							flip_card_sMaker = flip_card_sMaker + Img_List_Maker;
						}
					
					if(itl_data[3].image_text_below !== "undefined") 
						{
							flip_card_sMaker = flip_card_sMaker + "<div style='margin-top:"+itl_data[3].image_text_below_top_margin+";text-align:"+itl_data[5].image_text_alignmnet+"'><"+itl_data[5].image_font_size+">"+itl_data[3].image_text_below+"</"+itl_data[5].image_font_size+"></div>";							
						}

					flip_card_sMaker = flip_card_sMaker + "</div>";
					
					}
				}

			//alert("itl_data[0].image_w_text_tag: " + itl_data[0].image_w_text_tag);
				switch(itl_data[1].image_position)
					{
						case "left":
							img_lst_ada = 0;
							flip_card_sMaker = flip_card_sMaker + "<div class='col-lg-6 col-md-6 col-xs-12'>";
							if(itl_data[0].image_w_text_tag.length <= 125)
								{
									flip_card_sMaker = flip_card_sMaker + "<img style='border-style:"+itl_data[0].border_style+"; border-width:"+itl_data[0].border_height+"; border-color:"+itl_data[0].border_color+"; border-radius:"+ itl_data[8].image_radius +"' src='"+img_loc+"" + itl_data[0].image_name + "' width=' " + itl_data[2].image_size + " ' height='auto' alt='"+itl_data[0].image_w_text_tag+"'>";
								}
							
							if(itl_data[0].image_w_text_tag.length > 125)
								{
									img_lst_ada = ("" + jcc + flip_Count);
									//alert("img_lst_ada: " + img_lst_ada);
									//alert("img_lst_ada: " + img_lst_ada);
									//Jcc_Comp_Maker = Jcc_Comp_Maker + "<a href='https://coramjr.com'>Click Me</a>";
									//<a href="javascript:void(0)" onclick="myJsFunc();">Run JavaScript Code</a>
									
	flip_card_sMaker = flip_card_sMaker + "<img style='z-index:100px; border-style:"+itl_data[0].border_style+"; border-width:"+itl_data[0].border_height+"; border-color:"+itl_data[0].border_color+"; border-radius:"+ itl_data[8].image_radius +"' src='"+img_loc+"" + itl_data[0].image_name + "' width=' " + itl_data[2].image_size + " ' height='auto' alt='Select image for more information' role='button' href='#' onclick='alt_tag_lib("+img_lst_ada+")'>"; //onclick='alt_tag_lib("+img_lst_ada+")'
									
						//Jcc_Comp_Maker = Jcc_Comp_Maker + "<a href='javascript:alt_tag_lib("+20+");'>Click Me</a>";			
									
										Alt_Tag_Image_Data[img_lst_ada] = itl_data[0].image_w_text_tag;
										Alt_Tag_Image_name[img_lst_ada]	= itl_data[0].image_name;									
								}							
						
			
							flip_card_sMaker = flip_card_sMaker + "</div>";	
							
							flp_text(1);
						break;
							
						case "right":
							flp_text(1);
							img_lst_ada = 0;
							flip_card_sMaker = flip_card_sMaker + "<div class='col-lg-6 col-md-6 col-xs-12'>";
							if(itl_data[0].image_w_text_tag.length <= 125)
								{
									flip_card_sMaker = flip_card_sMaker + "<img style='border-style:"+itl_data[0].border_style+"; border-width:"+itl_data[0].border_height+"; border-color:"+itl_data[0].border_color+"; border-radius:"+ itl_data[8].image_radius +"' src='"+img_loc+"" + itl_data[0].image_name + "' width=' " + itl_data[2].image_size + " ' height='auto' alt='"+itl_data[0].image_w_text_tag+"'>";
								}
							if(itl_data[0].image_w_text_tag.length > 125)
								{
									img_lst_ada = ("" + jcc + flip_Count);
									//alert("img_lst_ada: " + img_lst_ada);
									//alert("img_lst_ada: " + img_lst_ada);
									//Jcc_Comp_Maker = Jcc_Comp_Maker + "<a href='https://coramjr.com'>Click Me</a>";
									//<a href="javascript:void(0)" onclick="myJsFunc();">Run JavaScript Code</a>
									
	flip_card_sMaker = flip_card_sMaker + "<img style='z-index:100px; border-style:"+itl_data[0].border_style+"; border-width:"+itl_data[0].border_height+"; border-color:"+itl_data[0].border_color+"; border-radius:"+ itl_data[8].image_radius +"' src='"+img_loc+"" + itl_data[0].image_name + "' width=' " + itl_data[2].image_size + " ' height='auto' alt='Select image for more information' role='button' href='#' onclick='alt_tag_lib("+img_lst_ada+")'>"; //onclick='alt_tag_lib("+img_lst_ada+")'
									
						//Jcc_Comp_Maker = Jcc_Comp_Maker + "<a href='javascript:alt_tag_lib("+20+");'>Click Me</a>";			
									
										Alt_Tag_Image_Data[img_lst_ada] = itl_data[0].image_w_text_tag;
										Alt_Tag_Image_name[img_lst_ada]	= itl_data[0].image_name;									
								}							
							
							
							flip_card_sMaker = flip_card_sMaker + "</div>";
							
						break;
						
						case "top": //flp_text(0); style='margin-bottom:0px;'
							flip_card_sMaker = flip_card_sMaker + "<div class='col-lg-12 col-md-12 col-xs-12'>";
							img_lst_ada = 0;
							if(itl_data[0].image_w_text_tag.length <= 125)
								{
									flip_card_sMaker = flip_card_sMaker + "<img style='border-style:"+itl_data[0].border_style+"; border-width:"+itl_data[0].border_height+"; border-color:"+itl_data[0].border_color+"; border-radius:"+ itl_data[8].image_radius +"' src='"+img_loc+"" + itl_data[0].image_name + "' width=' " + itl_data[2].image_size + " ' height='auto' alt='"+itl_data[0].image_w_text_tag+"'>";
								}
							if(itl_data[0].image_w_text_tag.length > 125)
								{
									img_lst_ada = ("" + jcc + flip_Count);
									//alert("img_lst_ada: " + img_lst_ada);
									//alert("img_lst_ada: " + img_lst_ada);
									//Jcc_Comp_Maker = Jcc_Comp_Maker + "<a href='https://coramjr.com'>Click Me</a>";
									//<a href="javascript:void(0)" onclick="myJsFunc();">Run JavaScript Code</a>
									
	flip_card_sMaker = flip_card_sMaker + "<img style='z-index:100px; border-style:"+itl_data[0].border_style+"; border-width:"+itl_data[0].border_height+"; border-color:"+itl_data[0].border_color+"; border-radius:"+ itl_data[8].image_radius +"' src='"+img_loc+"" + itl_data[0].image_name + "' width=' " + itl_data[2].image_size + " ' height='auto' alt='Select image for more information' role='button' href='#' onclick='alt_tag_lib("+img_lst_ada+")'>"; //onclick='alt_tag_lib("+img_lst_ada+")'
									
						//Jcc_Comp_Maker = Jcc_Comp_Maker + "<a href='javascript:alt_tag_lib("+20+");'>Click Me</a>";			
									
										Alt_Tag_Image_Data[img_lst_ada] = itl_data[0].image_w_text_tag;
										Alt_Tag_Image_name[img_lst_ada]	= itl_data[0].image_name;									
								}							
				
							flp_text(0);
							flip_card_sMaker = flip_card_sMaker + "</div>";
						break;	
							
						case "bottom":
							flip_card_sMaker = flip_card_sMaker + "<div class='col-lg-12 col-md-12 col-xs-12'>";
							img_lst_ada = 0;
							flp_text(0);
							if(itl_data[0].image_w_text_tag.length <= 125)
								{
									flip_card_sMaker = flip_card_sMaker + "<img style='border-style:"+itl_data[0].border_style+"; border-width:"+itl_data[0].border_height+"; border-color:"+itl_data[0].border_color+"; border-radius:"+ itl_data[8].image_radius +"' src='"+img_loc+"" + itl_data[0].image_name + "' width=' " + itl_data[2].image_size + " ' height='auto' alt='"+itl_data[0].image_w_text_tag+"'>";
								}
							if(itl_data[0].image_w_text_tag.length > 125)
								{
									img_lst_ada = ("" + jcc + flip_Count);
									//alert("img_lst_ada: " + img_lst_ada);
									//alert("img_lst_ada: " + img_lst_ada);
									//Jcc_Comp_Maker = Jcc_Comp_Maker + "<a href='https://coramjr.com'>Click Me</a>";
									//<a href="javascript:void(0)" onclick="myJsFunc();">Run JavaScript Code</a>
									
	flip_card_sMaker = flip_card_sMaker + "<img style='z-index:100px; border-style:"+itl_data[0].border_style+"; border-width:"+itl_data[0].border_height+"; border-color:"+itl_data[0].border_color+"; border-radius:"+ itl_data[8].image_radius +"' src='"+img_loc+"" + itl_data[0].image_name + "' width=' " + itl_data[2].image_size + " ' height='auto' alt='Select image for more information' role='button' href='#' onclick='alt_tag_lib("+img_lst_ada+")'>"; //onclick='alt_tag_lib("+img_lst_ada+")'
									
						//Jcc_Comp_Maker = Jcc_Comp_Maker + "<a href='javascript:alt_tag_lib("+20+");'>Click Me</a>";			
									
										Alt_Tag_Image_Data[img_lst_ada] = itl_data[0].image_w_text_tag;
										Alt_Tag_Image_name[img_lst_ada]	= itl_data[0].image_name;									
								}							
							flip_card_sMaker = flip_card_sMaker + "</div>";							
						break;	
					}				
				

					flip_card_sMaker = flip_card_sMaker + "</div>";												
					flip_card_sMaker = flip_card_sMaker + "</div>";												
											
				Jcc_Comp_Maker = Jcc_Comp_Maker +  "<div style='background-color:"+acc_setup_array[3]+";' id='collapse"+jcc+"_"+acc_Count+"' class='panel-collapse collapse'><div class='panel-body'>"+ flip_card_sMaker +"</div></div>"; 			

			jflip_array[crd_number * 1] = flip_card_sMaker;			
			call_setup();
		
		}	
//-------<(  Flipcard image_w_text Code )>-------
											
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-	
//-------<( Functions to build the content for the flipcards )>-------											
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-												
											
function call_setup()
{
	switch(cflip_num)
		{
			case 2:
				
					
					if(jflip_array.length === 3)
						{
							card_setup((flip_card_data.length - 1) / 2)
							
						}
						
			break;
				
			case 4:

					if(jflip_array.length === 5)
						{
							card_setup((flip_card_data.length - 1) / 2)
						}				
				
			break;
				
			case 6:
				
					if(jflip_array.length === 7)
						{
							card_setup((flip_card_data.length - 1) / 2)
						}					
			break;	
		}
}
											

/*											
function crdSet()
{
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='jb_car_acc_wd'>"; //  Begin	
//-----------------------------------------------<( 1 )>
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='card_"+jcc+"_"+1+"' class='card' style='perspective: 2280px; position: relative; transform-style: preserve-3d;height:300px;'>"; // 1
//-----------------------------------------------<( 1 )>	

Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='front alert alert-warning' role='button' onclick='clicker("+jcc+",1)' style='overflow: auto; backface-visibility: hidden; transform-style: preserve-3d; position: absolute; z-index: 1; height: 100%; width: 100%; transition: all 0.5s ease-out 0s;background-color:"+flip_card_data[0].card_01_front_color+"'>"; // 2					
						
					Jcc_Comp_Maker = Jcc_Comp_Maker + jflip_array[1]; // 3 Should be closed

//-----------------------------------------------<( Front of card Content )>	
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";	// 1	
//-----------------------------------------------<( Front of card Content )>
	
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='back alert alert-warning' style='overflow: auto; backface-visibility: hidden; transform-style: preserve-3d; position: relative; z-index: 0; height: 100%; width: 100%; transform: rotateY(-180deg); transition: all 0.5s ease-out 0s;background-color:"+flip_card_data[0].card_01_back_color+"'>"; // 4
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='backface-visibility: hidden;'>"; // 5

//-----------------------------------------------<( Back of card Content )>					
Jcc_Comp_Maker = Jcc_Comp_Maker + jflip_array[2];
//-----------------------------------------------<( Back of card Content )>	
				
Jcc_Comp_Maker = Jcc_Comp_Maker + "<br style='backface-visibility: hidden;'></div>"; // 6				
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>"; // 5				
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>"; // 4 	
//-----------	
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>"; // End 		
}
*/											
											
											
function card_setup(cdset)
	{

		switch(cdset)
			{
				case 1:

if(flip_card_data[0].card_01_background_color.length > 0)
	{
		card_back = flip_card_data[0].card_01_background_color;
	}

if(flip_card_data[0].main_background_color.length > 0)
	{
		card_back = flip_card_data[0].main_background_color;
	}					
					
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='jb_car_acc_wd' style='background-color:"+card_back+"'>"; //  Begin	
				
if(flip_card_data[0].card_01_header_title.length > 0)
	{
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='height:40px;margin:auto; padding:10px;text-align:"+flip_card_data[0].card_01_header_align+"'><"+flip_card_data[0].card_01_header_font+" style='color:"+flip_card_data[0].card_01_header_text_color+"'>"+flip_card_data[0].card_01_header_title+"</"+flip_card_data[0].card_01_header_font+"></div>";	
	}
					
if(flip_card_data[0].card_01_footer_title.length > 0)
	{
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='height:40px;'></div>";	
	}					

//card_01_front_scroll_area_color					
if(flip_card_data[0].card_01_background_color.length > 0)
	{
//-----------------------------------------------<( 1 )>
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='card_"+jcc+"_"+1+"' class='card' style='perspective: 2280px; position: relative; transform-style: preserve-3d;height:320px;width:96%'>"; // 1
//-----------------------------------------------<( 1 )>	
	}
					
if(flip_card_data[0].card_01_background_color.length === 0)
	{//radius   border-radius:
//-----------------------------------------------<( 1 )>
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='card_"+jcc+"_"+1+"' class='card' style='perspective: 2280px; position: relative; transform-style: preserve-3d;height:320px;'>"; // 1
//-----------------------------------------------<( 1 )>	
	}					
//background-color:"+flip_card_data[0].card_01_front_scroll_area_color+"					
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='front alert alert-warning' role='button' onclick='clicker("+jcc+",1)' style='overflow: auto; backface-visibility: hidden; transform-style: preserve-3d; position: absolute; z-index: 1; height: 100%; width: 100%; transition: all 0.5s ease-out 0s;background-color:"+flip_card_data[0].card_01_front_color+";'>"; // 2					
						
					Jcc_Comp_Maker = Jcc_Comp_Maker + jflip_array[1]; // 3 Should be closed

//-----------------------------------------------<( Front of card Content )>	
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";	// 1	
//-----------------------------------------------<( Front of card Content )>
	
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='back alert alert-warning' style='overflow: auto; backface-visibility: hidden; transform-style: preserve-3d; position: relative; z-index: 0; height: 100%; width: 100%; transform: rotateY(-180deg); transition: all 0.5s ease-out 0s;background-color:"+flip_card_data[0].card_01_back_color+"'>"; // 4
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='backface-visibility: hidden;'>"; // 5
 
//-----------------------------------------------<( Back of card Content )>					
Jcc_Comp_Maker = Jcc_Comp_Maker + jflip_array[2];
//-----------------------------------------------<( Back of card Content )>	
				
Jcc_Comp_Maker = Jcc_Comp_Maker + "<br style='backface-visibility: hidden;'></div>"; // 6				
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>"; // 5				
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>"; // 4 
					
if(flip_card_data[0].card_01_footer_title.length > 0)
	{
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='height:40px; margin:auto; padding:10px;text-align:"+flip_card_data[0].card_01_footer_align+"'><"+flip_card_data[0].card_01_footer_font+" style='color:"+flip_card_data[0].card_01_footer_text_color+"'>"+flip_card_data[0].card_01_footer_title+"</"+flip_card_data[0].card_01_footer_font+"></div>";
	}
if(flip_card_data[0].card_01_header_title.length > 0)
	{
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='height:40px;'></div>";		
	}					
					
//-----------	
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>"; // End 					
					
			
				break;
//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄					
//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-	
//        -------<(  End Single card  )-------					
//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
//▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀					
				case 2:
//------------------------------------------<( Begin )>					
if($(document).width() > 414)
	{
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='height:300px'>"; //Begin two cards  if($(document).width() <= 414)
		flip_mar = "0px";
		fl_fh_ht = "30px";
	}

if($(document).width() <= 414)
	{
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='height:660px'>"; //Begin two cards  if($(document).width() <= 414)
		flip_mar = "40px";
		fl_fh_ht = "40px";
	}
//------------------------------------------<( Begin )>	
//-------<( Card 1 )					
if(flip_card_data[0].card_01_background_color.length > 0)
	{
		card_back = flip_card_data[0].card_01_background_color;
	}

if(flip_card_data[0].main_background_color.length > 0)
	{
		card_back = flip_card_data[0].main_background_color;
	}
//-------<( Card 1 )					
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-6 col-md-6 col-xs-12 jb_car_acc_wd' style='background-color:"+card_back+"'>";	
//@@@@@@@
//@@@@@@@					
				
if(flip_card_data[0].card_01_header_title.length > 0)
	{
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='height:"+fl_fh_ht+";margin:auto; padding:10px;text-align:"+flip_card_data[0].card_01_header_align+"'><"+flip_card_data[0].card_01_header_font+" style='color:"+flip_card_data[0].card_01_header_text_color+"'>"+flip_card_data[0].card_01_header_title+"</"+flip_card_data[0].card_01_header_font+"></div>";	
	}
					
if(flip_card_data[0].card_01_footer_title.length > 0)
	{
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='height:"+fl_fh_ht+";'></div>";	
	}					
					
if(flip_card_data[0].card_01_background_color.length > 0)
	{
//-----------------------------------------------<( 1 )>
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='card_"+jcc+"_"+1+"' class='card' style='perspective: 2280px; position: relative; transform-style: preserve-3d;height:320px;width:96%'>"; // 1
//-----------------------------------------------<( 1 )>	
	}
					
if(flip_card_data[0].card_01_background_color.length === 0)
	{//radius   border-radius:
//-----------------------------------------------<( 1 )>
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='card_"+jcc+"_"+1+"' class='card' style='perspective: 2280px; position: relative; transform-style: preserve-3d;height:320px;'>"; // 1
//-----------------------------------------------<( 1 )>	
	}					
					
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='front alert alert-warning' role='button' onclick='clicker("+jcc+",1)' style='overflow: auto; backface-visibility: hidden; transform-style: preserve-3d; position: absolute; z-index: 1; height: 100%; width: 100%; transition: all 0.5s ease-out 0s;background-color:"+flip_card_data[0].card_01_front_color+";'>"; 				
						
					Jcc_Comp_Maker = Jcc_Comp_Maker + jflip_array[1]; 

//-----------------------------------------------<( Front of card Content )>	
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";	// 1	
//-----------------------------------------------<( Front of card Content )>
	
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='back alert alert-warning' style='overflow: auto; backface-visibility: hidden; transform-style: preserve-3d; position: relative; z-index: 0; height: 100%; width: 100%; transform: rotateY(-180deg); transition: all 0.5s ease-out 0s;background-color:"+flip_card_data[0].card_01_back_color+"'>"; // 4
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='backface-visibility: hidden;'>"; // 5

//-----------------------------------------------<( Back of card Content )>					
Jcc_Comp_Maker = Jcc_Comp_Maker + jflip_array[2];
//-----------------------------------------------<( Back of card Content )>	
				
Jcc_Comp_Maker = Jcc_Comp_Maker + "<br style='backface-visibility: hidden;'></div>"; // 6				
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>"; // 5				
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>"; // 4 
					
if(flip_card_data[0].card_01_footer_title.length > 0)
	{
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='height:"+fl_fh_ht+"; margin:auto; padding:10px;text-align:"+flip_card_data[0].card_01_footer_align+"'><"+flip_card_data[0].card_01_footer_font+" style='color:"+flip_card_data[0].card_01_footer_text_color+"'>"+flip_card_data[0].card_01_footer_title+"</"+flip_card_data[0].card_01_footer_font+"></div>";
	}
if(flip_card_data[0].card_01_header_title.length > 0)
	{
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='height:"+fl_fh_ht+";'></div>";		
	}					
					
					
					
					
//@@@@@@@					
//@@@@@@@					
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";	
//-------<( Card 1 )					
//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄					
//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-	
//   -------<(  Break between the two cards  )-------					
//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
//▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
				
//------------------------------------------<( Begin )>
if(flip_card_data[0].card_02_background_color.length > 0)
	{
		card_back = flip_card_data[0].card_02_background_color;
	}

if(flip_card_data[0].main_background_color.length > 0)
	{
		card_back = flip_card_data[0].main_background_color;
	}
//-------<( Card 2 )
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-6 col-md-6 col-xs-12 jb_car_acc_wd' style='background-color:"+card_back+"'>";	
//@@@@@@@
//@@@@@@@					
				
if(flip_card_data[0].card_02_header_title.length > 0)
	{
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='height:"+fl_fh_ht+";margin:auto; padding:10px;text-align:"+flip_card_data[0].card_02_header_align+"'><"+flip_card_data[0].card_02_header_font+" style='color:"+flip_card_data[0].card_02_header_text_color+"'>"+flip_card_data[0].card_02_header_title+"</"+flip_card_data[0].card_02_header_font+"></div>";	
	}
					
if(flip_card_data[0].card_02_footer_title.length > 0)
	{
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='height:"+fl_fh_ht+";'></div>";	
	}					
					
if(flip_card_data[0].card_02_background_color.length > 0)
	{
//-----------------------------------------------<( 1 )>
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='card_"+jcc+"_"+2+"' class='card' style='perspective: 2280px; position: relative; transform-style: preserve-3d;height:320px;width:96%'>"; // 1
//-----------------------------------------------<( 1 )>	
	}
					
if(flip_card_data[0].card_02_background_color.length === 0)
	{//radius   border-radius:
//-----------------------------------------------<( 1 )>
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='card_"+jcc+"_"+2+"' class='card' style='perspective: 2280px; position: relative; transform-style: preserve-3d;height:320px;'>"; // 1
//-----------------------------------------------<( 1 )>	
	}					
					
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='front alert alert-warning' role='button' onclick='clicker("+jcc+",2)' style='overflow: auto; backface-visibility: hidden; transform-style: preserve-3d; position: absolute; z-index: 1; height: 100%; width: 100%; transition: all 0.5s ease-out 0s;background-color:"+flip_card_data[0].card_02_front_color+";'>"; 				
						
					Jcc_Comp_Maker = Jcc_Comp_Maker + jflip_array[3]; 

//-----------------------------------------------<( Front of card Content )>	
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";	// 1	
//-----------------------------------------------<( Front of card Content )>
	
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='back alert alert-warning' style='overflow: auto; backface-visibility: hidden; transform-style: preserve-3d; position: relative; z-index: 0; height: 100%; width: 100%; transform: rotateY(-180deg); transition: all 0.5s ease-out 0s;background-color:"+flip_card_data[0].card_02_back_color+"'>"; // 4
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='backface-visibility: hidden;'>"; // 5

//-----------------------------------------------<( Back of card Content )>					
Jcc_Comp_Maker = Jcc_Comp_Maker + jflip_array[4];
//-----------------------------------------------<( Back of card Content )>	
				
Jcc_Comp_Maker = Jcc_Comp_Maker + "<br style='backface-visibility: hidden;'></div>"; // 6				
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>"; // 5				
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>"; // 4 
					
if(flip_card_data[0].card_02_footer_title.length > 0)
	{
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='height:"+fl_fh_ht+"; margin:auto; padding:10px;text-align:"+flip_card_data[0].card_02_footer_align+"'><"+flip_card_data[0].card_02_footer_font+" style='color:"+flip_card_data[0].card_02_footer_text_color+"'>"+flip_card_data[0].card_02_footer_title+"</"+flip_card_data[0].card_02_footer_font+"></div>";
	}
if(flip_card_data[0].card_02_header_title.length > 0)
	{
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='height:"+fl_fh_ht+";'></div>";		
	}					
					
					
					
					
//@@@@@@@					
//@@@@@@@					
					
					

					

					
					
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";						
//-------<( Card 2 )					
//------------------------------------------<( End )>						
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
//------------------------------------------<( End )>						
				break;	

					
				case 3:
//------------------------------------------<( Begin )>					
if($(document).width() > 414)
	{
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='height:300px'>"; //Begin two cards  if($(document).width() <= 414)
		flip_mar = "0px";
		//fl_fh_ht = "30px";
	}

if($(document).width() <= 414)
	{
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='height:940px'>"; //Begin two cards  if($(document).width() <= 414)
		flip_mar = "20px";
		//fl_fh_ht = "20px";
	}

flp_fh_len[0] = flip_card_data[0].card_01_header_title;
flp_fh_len[1] = flip_card_data[0].card_02_header_title;	
flp_fh_len[2] = flip_card_data[0].card_03_header_title;						
flp_fh_len[3] = flip_card_data[0].card_01_footer_title;
flp_fh_len[4] = flip_card_data[0].card_02_footer_title;	
flp_fh_len[5] = flip_card_data[0].card_03_footer_title;					


					
//var count = (String(Object.keys(flp_fh_len[0]))).length;					

//alert(count);					
					
//alert((Object.keys(flp_fh_len))); //length					
var fh_count = 0;					
for(var fl_hf_len = 0; fl_hf_len < 6; fl_hf_len++)
		{
			//alert(flp_fh_len[fl_hf_len].length);
			fh_count = fh_count + flp_fh_len[fl_hf_len].length
			
		}
if(fh_count > 0)
	{
		fl_fh_ht = "40px"
	}
if(fh_count === 0)
	{
		fl_fh_ht = "0px"
	}
					
//------------------------------------------<( Begin )>	
//-------<( Card 1 )					
if(flip_card_data[0].card_01_background_color.length > 0)
	{
		card_back = flip_card_data[0].card_01_background_color;
	}

if(flip_card_data[0].main_background_color.length > 0)
	{
		card_back = flip_card_data[0].main_background_color;
	}
//-------<( Card 1 )					
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-4 col-md-4 col-xs-12 jb_car_acc_wd' style='background-color:"+card_back+"'>";	
//@@@@@@@
//@@@@@@@					
				
//if(flip_card_data[0].card_01_header_title.length > 0)
if(fh_count > 0)	
	{
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='height:"+fl_fh_ht+";margin:auto; padding:10px;text-align:"+flip_card_data[0].card_01_header_align+"'><"+flip_card_data[0].card_01_header_font+" style='color:"+flip_card_data[0].card_01_header_text_color+"'>"+flip_card_data[0].card_01_header_title+"</"+flip_card_data[0].card_01_header_font+"></div>";	
	}
					
//if(flip_card_data[0].card_01_footer_title.length > 0)
if(fh_count === 0)					
	{
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='height:"+fl_fh_ht+";'></div>";	
	}					
					
if(flip_card_data[0].card_01_background_color.length > 0)
	{
//-----------------------------------------------<( 1 )>
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='card_"+jcc+"_"+1+"' class='card' style='perspective: 2280px; position: relative; transform-style: preserve-3d;height:320px;width:96%'>"; // 1
//-----------------------------------------------<( 1 )>	
	}
					
if(flip_card_data[0].card_01_background_color.length === 0)
	{//radius   border-radius:
//-----------------------------------------------<( 1 )>
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='card_"+jcc+"_"+1+"' class='card' style='perspective: 2280px; position: relative; transform-style: preserve-3d;height:320px;'>"; // 1
//-----------------------------------------------<( 1 )>	
	}					
					
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='front alert alert-warning' role='button' onclick='clicker("+jcc+",1)' style='overflow: auto; backface-visibility: hidden; transform-style: preserve-3d; position: absolute; z-index: 1; height: 100%; width: 100%; transition: all 0.5s ease-out 0s;background-color:"+flip_card_data[0].card_01_front_color+";'>"; 				
						
					Jcc_Comp_Maker = Jcc_Comp_Maker + jflip_array[1]; 

//-----------------------------------------------<( Front of card Content )>	
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";	// 1	
//-----------------------------------------------<( Front of card Content )>
	
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='back alert alert-warning' style='overflow: auto; backface-visibility: hidden; transform-style: preserve-3d; position: relative; z-index: 0; height: 100%; width: 100%; transform: rotateY(-180deg); transition: all 0.5s ease-out 0s;background-color:"+flip_card_data[0].card_01_back_color+"'>"; // 4
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='backface-visibility: hidden;'>"; // 5

//-----------------------------------------------<( Back of card Content )>					
Jcc_Comp_Maker = Jcc_Comp_Maker + jflip_array[2];
//-----------------------------------------------<( Back of card Content )>	
				
Jcc_Comp_Maker = Jcc_Comp_Maker + "<br style='backface-visibility: hidden;'></div>"; // 6				
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>"; // 5				
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>"; // 4 
					
//if(flip_card_data[0].card_01_footer_title.length > 0)
if(fh_count > 0)					
	{
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='height:"+fl_fh_ht+"; margin:auto; padding:10px;text-align:"+flip_card_data[0].card_01_footer_align+"'><"+flip_card_data[0].card_01_footer_font+" style='color:"+flip_card_data[0].card_01_footer_text_color+"'>"+flip_card_data[0].card_01_footer_title+"</"+flip_card_data[0].card_01_footer_font+"></div>";
	}
//if(flip_card_data[0].card_01_header_title.length > 0)
if(fh_count === 0)					
	{
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='height:"+fl_fh_ht+";'></div>";		
	}					
					
					
					
					
//@@@@@@@					
//@@@@@@@					
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";	
//-------<( Card 1 )					
//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄					
//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-	
//   -------<(  Break between the two cards  )-------					
//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
//▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
				
//------------------------------------------<( Begin )>
if(flip_card_data[0].card_02_background_color.length > 0)
	{
		card_back = flip_card_data[0].card_02_background_color;
	}

if(flip_card_data[0].main_background_color.length > 0)
	{
		card_back = flip_card_data[0].main_background_color;
	}
//-------<( Card 2 )
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-4 col-md-4 col-xs-12 jb_car_acc_wd' style='background-color:"+card_back+"'>";	
//@@@@@@@
//@@@@@@@					
			
//if(flip_card_data[0].card_02_header_title.length > 0)
if(fh_count > 0)					
	{
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='height:"+fl_fh_ht+";margin:auto; padding:10px;text-align:"+flip_card_data[0].card_02_header_align+"'><"+flip_card_data[0].card_02_header_font+" style='color:"+flip_card_data[0].card_02_header_text_color+"'>"+flip_card_data[0].card_02_header_title+"</"+flip_card_data[0].card_02_header_font+"></div>";	
	}
					
//if(flip_card_data[0].card_02_footer_title.length > 0)
if(fh_count === 0)					
	{
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='height:"+fl_fh_ht+";'></div>";	
	}					
					
if(flip_card_data[0].card_02_background_color.length > 0)
	{
//-----------------------------------------------<( 1 )>
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='card_"+jcc+"_"+2+"' class='card' style='perspective: 2280px; position: relative; transform-style: preserve-3d;height:320px;width:96%'>"; // 1
//-----------------------------------------------<( 1 )>	
	}
					
if(flip_card_data[0].card_02_background_color.length === 0)
	{//radius   border-radius:
//-----------------------------------------------<( 1 )>
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='card_"+jcc+"_"+2+"' class='card' style='perspective: 2280px; position: relative; transform-style: preserve-3d;height:320px;'>"; // 1
//-----------------------------------------------<( 1 )>	
	}					
					
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='front alert alert-warning' role='button' onclick='clicker("+jcc+",2)' style='overflow: auto; backface-visibility: hidden; transform-style: preserve-3d; position: absolute; z-index: 1; height: 100%; width: 100%; transition: all 0.5s ease-out 0s;background-color:"+flip_card_data[0].card_02_front_color+";'>"; 				
						
					Jcc_Comp_Maker = Jcc_Comp_Maker + jflip_array[3]; 

//-----------------------------------------------<( Front of card Content )>	
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";	// 1	
//-----------------------------------------------<( Front of card Content )>
	
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='back alert alert-warning' style='overflow: auto; backface-visibility: hidden; transform-style: preserve-3d; position: relative; z-index: 0; height: 100%; width: 100%; transform: rotateY(-180deg); transition: all 0.5s ease-out 0s;background-color:"+flip_card_data[0].card_02_back_color+"'>"; // 4
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='backface-visibility: hidden;'>"; // 5

//-----------------------------------------------<( Back of card Content )>					
Jcc_Comp_Maker = Jcc_Comp_Maker + jflip_array[4];
//-----------------------------------------------<( Back of card Content )>	
				
Jcc_Comp_Maker = Jcc_Comp_Maker + "<br style='backface-visibility: hidden;'></div>"; // 6				
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>"; // 5				
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>"; // 4 
					
//if(flip_card_data[0].card_02_footer_title.length > 0)
if(fh_count > 0)					
	{
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='height:"+fl_fh_ht+"; margin:auto; padding:10px;text-align:"+flip_card_data[0].card_02_footer_align+"'><"+flip_card_data[0].card_02_footer_font+" style='color:"+flip_card_data[0].card_02_footer_text_color+"'>"+flip_card_data[0].card_02_footer_title+"</"+flip_card_data[0].card_02_footer_font+"></div>";
	}
//if(flip_card_data[0].card_02_header_title.length > 0)
if(fh_count === 0)					
	{
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='height:"+fl_fh_ht+";'></div>";		
	}					
				
//@@@@@@@					
//@@@@@@@					
			
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";						
					
//@@@@@@@					
//@@@@@@@					
					
//------------------------------------------<( Begin )>
if(flip_card_data[0].card_03_background_color.length > 0)
	{
		card_back = flip_card_data[0].card_03_background_color;
	}

if(flip_card_data[0].main_background_color.length > 0)
	{
		card_back = flip_card_data[0].main_background_color;
	}
//-------<( Card 2 )
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-4 col-md-4 col-xs-12 jb_car_acc_wd' style='background-color:"+card_back+"'>";	
//@@@@@@@
//@@@@@@@					
				
//if(flip_card_data[0].card_03_header_title.length > 0)
if(fh_count > 0)					
	{
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='height:"+fl_fh_ht+";margin:auto; padding:10px;text-align:"+flip_card_data[0].card_03_header_align+"'><"+flip_card_data[0].card_03_header_font+" style='color:"+flip_card_data[0].card_03_header_text_color+"'>"+flip_card_data[0].card_03_header_title+"</"+flip_card_data[0].card_03_header_font+"></div>";	
	}
					
//if(flip_card_data[0].card_03_footer_title.length > 0)
if(fh_count === 0)					
	{
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='height:"+fl_fh_ht+";'></div>";	
	}					
					
if(flip_card_data[0].card_03_background_color.length > 0)
	{
//-----------------------------------------------<( 1 )>
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='card_"+jcc+"_"+3+"' class='card' style='perspective: 2280px; position: relative; transform-style: preserve-3d;height:320px;width:96%'>"; // 1
//-----------------------------------------------<( 1 )>	
	}
					
if(flip_card_data[0].card_03_background_color.length === 0)
	{//radius   border-radius:
//-----------------------------------------------<( 1 )>
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='card_"+jcc+"_"+3+"' class='card' style='perspective: 2280px; position: relative; transform-style: preserve-3d;height:320px;'>"; // 1
//-----------------------------------------------<( 1 )>	
	}					
					
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='front alert alert-warning' role='button' onclick='clicker("+jcc+",3)' style='overflow: auto; backface-visibility: hidden; transform-style: preserve-3d; position: absolute; z-index: 1; height: 100%; width: 100%; transition: all 0.5s ease-out 0s;background-color:"+flip_card_data[0].card_03_front_color+";'>"; 				
						
					Jcc_Comp_Maker = Jcc_Comp_Maker + jflip_array[5]; 

//-----------------------------------------------<( Front of card Content )>	
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";	// 1	
//-----------------------------------------------<( Front of card Content )>
	
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='back alert alert-warning' style='overflow: auto; backface-visibility: hidden; transform-style: preserve-3d; position: relative; z-index: 0; height: 100%; width: 100%; transform: rotateY(-180deg); transition: all 0.5s ease-out 0s;background-color:"+flip_card_data[0].card_03_back_color+"'>"; // 4
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='backface-visibility: hidden;'>"; // 5

//-----------------------------------------------<( Back of card Content )>					
Jcc_Comp_Maker = Jcc_Comp_Maker + jflip_array[6];
//-----------------------------------------------<( Back of card Content )>	
				
Jcc_Comp_Maker = Jcc_Comp_Maker + "<br style='backface-visibility: hidden;'></div>"; // 6				
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>"; // 5				
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>"; // 4 
					
//if(flip_card_data[0].card_03_footer_title.length > 0)
if(fh_count > 0)					
	{
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='height:"+fl_fh_ht+"; margin:auto; padding:10px;text-align:"+flip_card_data[0].card_03_footer_align+"'><"+flip_card_data[0].card_03_footer_font+" style='color:"+flip_card_data[0].card_03_footer_text_color+"'>"+flip_card_data[0].card_03_footer_title+"</"+flip_card_data[0].card_03_footer_font+"></div>";
	}
//if(flip_card_data[0].card_03_header_title.length > 0)
if(fh_count === 0)					
	{
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='height:"+fl_fh_ht+";'></div>";		
	}					
					
				
					
					
//@@@@@@@					
//@@@@@@@					
					
					

					

					
					
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";					
					
//@@@@@@@
//@@@@@@@					
//------------------------------------------<( End )>						
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
//------------------------------------------<( End )>						
				break;					
					
					
			}
		

	}
											
												
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";											
											
break;											
//-------------------------------------------------------------------------------------------------------------	
//-------<( Flip_Multi_New end SA )>-------		12/19/2019									
//-------------------------------------------------------------------------------------------------------------	
																	
											
//============================================================================================
//============================================================================================											
	
											
//-------------------------------------------------------------------------------------------------------------	
//-------<( New Question Comp code begin )>-------											
//-------------------------------------------------------------------------------------------------------------												
						case "Question_Comp":
						
						//alert("Question_Comp was called + jcc: " + jcc);					
						Q_Recall = [];
						Q_Choice = [];
						//Q_Square = [];					
					
						if(typeof courseType !== "undefined")
							{

							if(courseType.indexOf("shortcourseA") !== -1)
								{
									
									if( allPgQue[np_num][Q_count].answer === 1)
										{

					Q_Recall[jcc] = ("cb_" + jcc + "_" + allPgQue[np_num][Q_count].choice);
					Q_Choice[jcc] = (allPgQue[np_num][Q_count].choice);						

											
										}
	
								}
								
							}
				
							Q_count = (Q_count + 1);
				
							if(Q_count === 1)
								{
									QA_num = null;
								}
											
						
											
							var qComp = sSelections[jcc][snglBld[jcc]];
							
							
							tf_new_array = [];
							Question_Type_Array[jcc] = qComp[0].Question_type;	
								
							//alert(jcc + " Question : " + qComp[0].question);				
											
		//\\//snippet_roadmap(jcc,"Question_Comp",(qComp[0].question));									
				
				//alert("question_image_placement: " + qComp[0].question_image_placement);							
											
											
				if(typeof qComp[0].question_image === "undefined")
					{
						
						
						ADA_check_Array[jcc] = "Please update question number " + jcc + " to the new Question snippet"
					}
											
				if(typeof qComp[0].question_image !== "undefined")
					{
						//alert(qComp[0].question_image);
					}
											
											
					if(snglBld[jcc] === "Question_Comp")
						{
							Question_Total_Array[jcc] = qComp[0].extra_image_placement;

							
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

Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12' id='sqn_" + jcc + "' style='padding: 20px; margin-top:"+qComp[0].top_margin+";background-color: " + qComp[0].background_color + "; border-top-color:"+qComp[0].border_color+"; border-top-width:"+qComp[0].border_weight+"; border-top-style:"+qComp[0].border_style+"; border-bottom-color:"+qComp[0].border_color+"; border-bottom-width:"+qComp[0].border_weight+"; border-bottom-style:"+qComp[0].border_style+"; border-radius:"+qComp[0].border_radius+" '>";																		
//-------< What do you think / Let's Review >
if(qComp[0].image.length > 0)
	{
		//-------<( Added to check for portal or development )>-------
		if(typeof moduleFolder !== "undefined")
			{													//src='jbuild_libs/images/
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div><img class='qstImg' src='jbuild_libs/images/" + qComp[0].image + "' alt=''/><br><br></div>";
			}

		if(typeof moduleFolder === "undefined")
			{												//src='../../../jbuild_libs/images/

				var floc = String(window.location);
					if(floc.search("LLL") < 1)
							{
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div><img class='qstImg' src='../../../jbuild_libs/images/" + qComp[0].image + "' alt='"+qComp[0].image_alt_text+"'/><br><br></div>";
							}

					if(floc.search("LLL") > 1)
							{
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div><img class='qstImg' src='../../../../../jbuild_libs/images/" + qComp[0].image + "' alt='"+qComp[0].image_alt_text+"'/><br><br></div>";								
							}


//Jcc_Comp_Maker = Jcc_Comp_Maker + "<div><img class='qstImg' src='../../../jbuild_libs/images/" + qComp[0].image + "' alt='"+qComp[0].image_alt_text+"'/><br><br></div>";
			}
		//-------<( Added to check for portal or development )>-------		
	
	}											

										
//-------< Paragraph Top Begin >
		for(var qPara = 0; qPara < qComp[1].paragraph_top_text.length; qPara++)
			{
				if(qComp[1].paragraph_top_text[qPara].paragraph_top.length !== 0)
					{
						//alert("No Zero"); class='jb_column1'
						Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='quest_char' style='text-align:"+qComp[2].qList[0].align_text+"'> <jb1>"+qComp[1].paragraph_top_text[qPara].paragraph_top+"</jb1></div>";
						//qpara_text
						
						if( (qPara + 1)  !== qComp[1].paragraph_top_text.length)
							{
								Jcc_Comp_Maker = Jcc_Comp_Maker + "<br>";
							}
						
						
					}
			}											
//-------< Paragraph Top End >										
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='qold_"+jcc+"' class='col-lg-12 col-md-12 col-xs-12' style='display: block; height: auto'></div>";
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='qnew_"+jcc+"' class='col-lg-12 col-md-12 col-xs-12' style='display: none; height: auto'>";
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='qleft_"+jcc+"' class='col-lg-6 col-md-6 col-xs-12' style='height: auto'>";
										
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";												
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='qright_"+jcc+"' class='col-lg-6 col-md-6 col-xs-12' style='height: auto'>";
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";												
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";											

		//class='qtext'	 quest_char								
//////////////////////////////////////////////////////////////////////////////////////////////////////											
//////////////////////////////////////////////////////////////////////////////////////////////////////												
//-------<(  Question Begin  )>-------   qstn_text
											
////alert(": qComp[0].question_image_placement: " + qComp[0].question_image_placement);										
													
if(typeof qComp[0].question_image_placement === "undefined")
	{										
		
				Jcc_qText_Mover[jcc] = "<div class='col-lg-12 col-md-12 col-xs-12'>";
				
				Jcc_qText_Mover[jcc] = Jcc_qText_Mover[jcc] + "<div class='quest_char' style='margin-top: 20px; margin-bottom: 20px; text-align:"+qComp[2].qList[0].align_text+"'>";
						Jcc_qText_Mover[jcc] = Jcc_qText_Mover[jcc] + "<jb1>"+qComp[0].question+"</jb1>";
						Jcc_qText_Mover[jcc] = Jcc_qText_Mover[jcc] + "</div>";
				
				Jcc_qText_Mover[jcc] = Jcc_qText_Mover[jcc] + "</div>";		
	

	}

											
											
if(typeof qComp[0].question_image_placement === "string")
	{

		if(qComp[0].question_image_placement === "none") 
			{										
				Jcc_qText_Mover[jcc] = "<div class='col-lg-12 col-md-12 col-xs-12'>";
				
				Jcc_qText_Mover[jcc] = Jcc_qText_Mover[jcc] + "<div class='quest_char' style='margin-top: 20px; margin-bottom: 20px; text-align:"+qComp[2].qList[0].align_text+"'>";
						Jcc_qText_Mover[jcc] = Jcc_qText_Mover[jcc] + "<jb1>"+qComp[0].question+"</jb1>";
						Jcc_qText_Mover[jcc] = Jcc_qText_Mover[jcc] + "</div>";
				
				Jcc_qText_Mover[jcc] = Jcc_qText_Mover[jcc] + "</div>";

			}
		
		
		if(qComp[0].question_image_alt_tag.length === 0)
			{
				if(qComp[0].question_image_placement !== "none")
					{
						ADA_check_Array[jcc] = "Add Alt tag for question: \n" + qComp[0].question;
					}
				
				
			}
		
		if(qComp[0].question_image_placement === "top")
			{
				if(qComp[0].question_image_alt_tag.length <= 125)
					{
		
						Jcc_qText_Mover[jcc] = "<div class='col-lg-12 col-md-12 col-xs-12'>";
Jcc_qText_Mover[jcc] = Jcc_qText_Mover[jcc] + "<img class='questImage' src='"+img_loc+"" + qComp[0].question_image + "' alt='"+qComp[0].question_image_alt_tag+"'/>";
						Jcc_qText_Mover[jcc] = Jcc_qText_Mover[jcc] + "<div class='quest_char' style='margin-top: 20px; margin-bottom: 20px; text-align:"+qComp[2].qList[0].align_text+"'>";
						Jcc_qText_Mover[jcc] = Jcc_qText_Mover[jcc] + "<jb1>"+qComp[0].question+"</jb1>";
						Jcc_qText_Mover[jcc] = Jcc_qText_Mover[jcc] + "</div>";
						Jcc_qText_Mover[jcc] = Jcc_qText_Mover[jcc] + "</div>";
						
					}
				
				if(qComp[0].question_image_alt_tag.length > 125)
					{
						Alt_Tag_Image_Data[jcc] = qComp[0].question_image_alt_tag; 
						Alt_Tag_Image_name[jcc] = qComp[0].question_image;
						
						Jcc_qText_Mover[jcc] = "<div class='col-lg-12 col-md-12 col-xs-12'>";
Jcc_qText_Mover[jcc] = Jcc_qText_Mover[jcc] + "<img class='questImage' src='"+img_loc+"" + qComp[0].question_image + "' alt='Select image for more information' role='button' onclick='alt_tag_lib("+jcc+")'>";
						Jcc_qText_Mover[jcc] = Jcc_qText_Mover[jcc] + "<div class='quest_char' style='margin-top: 20px; margin-bottom: 20px; text-align:"+qComp[2].qList[0].align_text+"'>";
						Jcc_qText_Mover[jcc] = Jcc_qText_Mover[jcc] + "<jb1>"+qComp[0].question+"</jb1>";
						Jcc_qText_Mover[jcc] = Jcc_qText_Mover[jcc] + "</div>";
						Jcc_qText_Mover[jcc] = Jcc_qText_Mover[jcc] + "</div>";
						
				
					}

			}
		
		if(qComp[0].question_image_placement === "bottom")
			{
				if(qComp[0].question_image_alt_tag.length <= 125)
					{				
						
						Jcc_qText_Mover[jcc] = "<div class='col-lg-12 col-md-12 col-xs-12'>";
						

						Jcc_qText_Mover[jcc] = Jcc_qText_Mover[jcc] + "<div class='quest_char' style='margin-top: 20px; margin-bottom: 20px; text-align:"+qComp[2].qList[0].align_text+"'>";
						Jcc_qText_Mover[jcc] = Jcc_qText_Mover[jcc] + "<jb1>"+qComp[0].question+"</jb1>";
						Jcc_qText_Mover[jcc] = Jcc_qText_Mover[jcc] + "</div>";
						
						Jcc_qText_Mover[jcc] = Jcc_qText_Mover[jcc] + "<img class='questImage' src='"+img_loc+"" + qComp[0].question_image + "' alt='"+qComp[0].question_image_alt_tag+"'/>";
						
						
						Jcc_qText_Mover[jcc] = Jcc_qText_Mover[jcc] + "</div>";
						

					}
				
				if(qComp[0].question_image_alt_tag.length > 125)
					{
						Alt_Tag_Image_Data[jcc] = qComp[0].question_image_alt_tag;
						Alt_Tag_Image_name[jcc] = qComp[0].question_image;
						
						Jcc_qText_Mover[jcc] = "<div class='col-lg-12 col-md-12 col-xs-12'>";
						

						Jcc_qText_Mover[jcc] = Jcc_qText_Mover[jcc] + "<div class='quest_char' style='margin-top: 20px; margin-bottom: 20px; text-align:"+qComp[2].qList[0].align_text+"'>";
						Jcc_qText_Mover[jcc] = Jcc_qText_Mover[jcc] + "<jb1>"+qComp[0].question+"</jb1>";
						Jcc_qText_Mover[jcc] = Jcc_qText_Mover[jcc] + "</div>";
						
						Jcc_qText_Mover[jcc] = Jcc_qText_Mover[jcc] + "<img class='questImage' src='"+img_loc+"" + qComp[0].question_image + "' alt='Select image for more information' role='button' onclick='alt_tag_lib("+jcc+")'>";
						
						
						Jcc_qText_Mover[jcc] = Jcc_qText_Mover[jcc] + "</div>";						
						
						
					}

			}			
	}
									

//-------<(  Question End  )>-------											
											
											
//-------<(  List Begin  )>-------	
											
											
if(qComp[2].qList[0].qList_on_off === "on")											
	{

Jcc_qText_Mover[jcc] = Jcc_qText_Mover[jcc] + "<"+ qComp[2].qList[0].Type_of_List +" type='"+qComp[2].qList[0].ol_type+"' style='list-style-type:"+qComp[2].qList[0].ul_type+"'>";		
		
		var list_num = (qComp[2].qList.length);
		var list_text_alignment = qComp[2].qList[0].align_text;
			for(var queList = 1; queList < list_num; queList++)
				{															//margin-left:10px;
Jcc_qText_Mover[jcc] = Jcc_qText_Mover[jcc] + "<jb1><li class='quest_char quest_list' style='text-align: "+ list_text_alignment +";'>"+ qComp[2].qList[queList].lstText +"</li></jb1>"; //</jb1>					
					
				}
		
Jcc_qText_Mover[jcc] = Jcc_qText_Mover[jcc] + "</"+ qComp[2].qList[0].Type_of_List +">"; 
		

	}
											
											
											
//-------<(  List End  )>-------											

//-------< Paragraph Bottom Begin >	  quest_char  class='quest_char'
		for(var qParab = 0; qParab < qComp[3].paragraph_bottom_text.length; qParab++)
			{
				Jcc_qText_Mover[jcc] = Jcc_qText_Mover[jcc] + "<div class='col-lg-12 col-md-12 col-xs-12'>";
				if(qComp[3].paragraph_bottom_text[qParab].paragraph_bottom.length !== 0)											
				{
					Jcc_qText_Mover[jcc] = Jcc_qText_Mover[jcc] + "<div class='quest_char' style='text-align:"+qComp[2].qList[0].align_text+"'><jb1>"+qComp[3].paragraph_bottom_text[qParab].paragraph_bottom+"</jb1></div>";
					//qpara_text
					if( (qParab + 1)  !== qComp[3].paragraph_bottom_text.length)
							{
								Jcc_qText_Mover[jcc] = Jcc_qText_Mover[jcc] + "<br>";
							}
				}
				Jcc_qText_Mover[jcc] = Jcc_qText_Mover[jcc] + "</div>";
			}											
//-------< Paragraph Bottom End >											
											
										
Jcc_Comp_Maker = Jcc_Comp_Maker + Jcc_qText_Mover[jcc];											
//////////////////////////////////////////////////////////////////////////////////////////////////////											
//////////////////////////////////////////////////////////////////////////////////////////////////////												
											
//-------< Question Answers Begin >	
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12' style='margin-top:10px;'>";
										

										
											
if(typeof Q_Recall[jcc] !== "undefined")
			{
											
					
			}
																
											
											
											
for(var qAns = 0; qAns < qComp[4].question_answers.length; qAns++)
	{
		
		
		tf_new_array[qAns] = qComp[4].question_answers[qAns].true_false;
		if(typeof qComp[4].question_answers[qAns].q_feedback !== "undefined")
			{
				////alert("qComp[4].question_answers[qAns].q_feedback: " + qComp[4].question_answers[qAns].q_feedback);
				
				if(qComp[4].question_answers[qAns].q_feedback.length > 0)
					{
						q_feedback_array[qAns] = qComp[4].question_answers[qAns].q_feedback;
					}
				
				

			}
		
		
		
		
		

		Jcc_Comp_Maker = Jcc_Comp_Maker + "<form id='fbqs_"+jcc+"_an_"+qAns+"' class='qSpacing jb_column1'>";
		
if(typeof Q_Recall[jcc] === "undefined")
	{
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<label class='container' style='font-weight: normal !important; text-align:"+qComp[2].qList[0].align_text+"'><jb1 id='qs_"+jcc+"_an_"+qAns+"' class='qtext'>"+qComp[4].question_answers[qAns].q_answer+"</jb1>";
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////		

		//alert(qComp[0].text_color);
		
			Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='display:none;color:"+qComp[0].text_color+"' id='ci_fb_"+jcc+"_"+qAns+"' class='qtext'></div>"; // this seems to work better
	
	}

if(typeof Q_Recall[jcc] !== "undefined")
					{

	
						
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<label class='container' style='font-weight: normal !important; text-align:"+qComp[2].qList[0].align_text+"'><jb1 id='qs_"+jcc+"_an_"+qAns+"' class='qtext'>"+qComp[4].question_answers[qAns].q_answer+"</jb1>";							

			Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='display:none' id='ci_fb_"+jcc+"_"+qAns+"' class='qtext'></div>"; // this seems to work better
						
					}
		
		
Jcc_Comp_Maker = Jcc_Comp_Maker + "<input onclick='nQue("+qComp[0].Question_type+","+qComp[4].question_answers[qAns].true_false+","+jcc+","+qAns+","+QA_num+");' type='checkbox' id='cbck_"+jcc+"_"+qAns+"'>";		//style='cursor:pointer;'

		if(qComp[0].Question_type === "1")
			{
				
				if(typeof Q_Recall[jcc] === "undefined")
					{
						Jcc_Comp_Maker = Jcc_Comp_Maker + "<span id='cb_"+jcc+"_"+qAns+"' class='checkmark'></span>";
					}
				
				if(typeof Q_Recall[jcc] != "undefined")
					{

						
						if(Q_Choice[jcc] === qAns)
							{
								if(qComp[4].question_answers[qAns].true_false === "true")
									{
										for(var cf_count = 0; cf_count < qComp[4].question_answers.length;cf_count++);
										{
											Q_Square[jcc] = ("#qs_"+jcc+"_an_"+cf_count);
											
											Q_IF_feedback[jcc] = ( "c_fb_" + jcc );
										}

										Jcc_Comp_Maker = Jcc_Comp_Maker + "<span id='cb_"+jcc+"_"+qAns+"' class='c_checkmark'></span>";
		
										
									}
								
								if(qComp[4].question_answers[qAns].true_false === "false")
									{
	
										for(var f_count = 0; f_count < qComp[4].question_answers.length; f_count++)
											{
												//alert("quest: " + qComp[4].question_answers[f_count].true_false);
												if(qComp[4].question_answers[f_count].true_false === "true")
													{
														Q_Square[jcc] = ("#qs_"+jcc+"_an_"+f_count);
														
														
														
														Q_IF_feedback[jcc] = ( "i_fb_" + jcc );
														//alert("In Correct: " + Q_IF_feedback[jcc]);

													}
		
												
											}
										
										
										Jcc_Comp_Maker = Jcc_Comp_Maker + "<span id='cb_"+jcc+"_"+qAns+"' class='i_checkmark'></span>";
										
										
										
									}

								
							}
						
						if(Q_Choice[jcc] != qAns)
							{
								Jcc_Comp_Maker = Jcc_Comp_Maker + "<span id='cb_"+jcc+"_"+qAns+"' class='checkmark'></span>";
								
								if(qComp[4].question_answers[qAns].true_false === "true")
									{
										//alert("qs_"+jcc+"_an_"+qAns);
									}
								
								
							}

					}
	new_answer_array[jcc] = tf_new_array;
			}
		
		if(qComp[0].Question_type === "2")
			{
				Jcc_Comp_Maker = Jcc_Comp_Maker + "<span id='cb_"+jcc+"_"+qAns+"' class='checkmark_square'></span>";
			}

		Jcc_Comp_Maker = Jcc_Comp_Maker + "</label>";
		Jcc_Comp_Maker = Jcc_Comp_Maker + "</form>";

	}
q_feedback_qNum_Array[jcc] = q_feedback_array;										
q_feedback_array = [];
											
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
											
		MC_Answer_Array[jcc] = tf_new_array;	
								
		qComp_sub_Array[jcc] = tf_new_array;
		QC_Multi_Array_TF[jcc] = tf_new_array;											
//-------< Qeustion Answers End >												
								
//-------<>	
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12' style='padding:10px; '>";

		remediation_Paragraph = "<div>";									
			if(typeof qComp[6] !== 'undefined')
				{
					for(var remed = 0; remed < qComp[6].remediation.length; remed++)
					{
						remediation_Paragraph = remediation_Paragraph + "<div><p>"+qComp[6].remediation[remed].remediation_feedback+"</p></div>";
					}
				}
		remediation_Paragraph = remediation_Paragraph + "</div>";	// no opening div										
//========================================================================================	
//-------< Correct answer / feedback											
//========================================================================================												
										
											
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='c_fb_"+jcc+"' style='display:none; padding:10px; text-align:"+qComp[0].feedback_align+"' class='ma_FB_Correct'><"+qComp[0].question_size+"><"+qComp[5].correct_incorrect_font_size+" style='color:#85be00; font-weight:bold; '>"+qComp[5].correct_feedback+"</"+qComp[5].correct_incorrect_font_size+"></"+qComp[0].question_size+">"; //font-size: 18px; // Updated on July, 20 2020	
											
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='cor_idfeedback_"+jcc+"' ><p></div>";		//style='font-size: 18px;'	  id='font-size: 18px;'	// Updated on July, 20 2020					
											
		
	if(typeof qComp[5].correct_remediation !== 'undefined')										
			{								
				Jcc_Comp_Maker = Jcc_Comp_Maker + "<div><answer_text_sel>"+qComp[5].correct_remediation+"</answer_text_sel></div>";	
				
				//Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='ci_fb_"+jcc+"'><answer_text_sel></answer_text_sel></div>";

			}
											
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='margin-top:4px'><"+qComp[5].Additional_font_size+">"+qComp[5].Additional_feedback+"</"+qComp[5].Additional_font_size+"></div></div>";
//========================================================================================	
//-------< Correct answer / feedback											
//========================================================================================	
											
//========================================================================================	
//-------< Incorrect answer / feedback											
//========================================================================================	
										
											
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<div  id='i_fb_"+jcc+"' style='display:none; padding:10px; text-align:"+qComp[0].feedback_align+"' class='ma_FB_Incorrect'><"+qComp[0].question_size+"><"+qComp[5].correct_incorrect_font_size+" style='color:#FF0004; font-weight:bold;'>"+qComp[5].incorrect_feedback+"</"+qComp[5].correct_incorrect_font_size+"></"+qComp[0].question_size+">";	//font-size: 18px; // Updated on July, 20 2020	
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='inc_idfeedback_"+jcc+"'><p></div>";	//style='font-size: 18px;' 	 id='font-size: 18px;'	// Updated on July, 20 2020			
											
					
											
	if(typeof qComp[5].incorrect_remediation !== 'undefined')										
			{											
				Jcc_Comp_Maker = Jcc_Comp_Maker + "<div><answer_text_sel>"+qComp[5].incorrect_remediation+"</answer_text_sel></div>";
				
				//Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='ii_fb_"+jcc+"'><answer_text_sel></answer_text_sel></div>";
				
			}								
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='margin-top:4px'><"+qComp[5].Additional_font_size+">"+qComp[5].Additional_feedback+"</"+qComp[5].Additional_font_size+"></div></div>";											
//========================================================================================	
//-------< Incorrect answer / feedback											
//========================================================================================											
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";											
											

//-------< Submit Button Begin >												
if(qComp[0].Question_type === "2")	// added on 10/29/2019										
{
if(typeof courseType === "undefined")
	{
		submit_button = "Submit";
	}
	
	
QC_Multi_Array[jcc] = qComp[4].question_answers.length;
	
	
	
	
//style='border-top: thin; border-top-color: #000000; border-top-style:solid; border-top-width: thin'
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12'><a style='margin-top:10px;' href='javascript:Question_Comp_Submit("+jcc+");' class='btn btn-primary disabled' id='sub_"+jcc+"'>"+submit_button+"</a></div>";
}
//-------< Submit Button End >											
											
											
//-------< End >											
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";

											
						break;	
//-------------------------------------------------------------------------------------------------------------	
//-------<( New Question Comp code end )>-------											
//-------------------------------------------------------------------------------------------------------------											
										
//=================================================================================================================
//-------------------------------------------------------------------------------------------------------------	
//-------<( New Survey code begin )>-------											
//-------------------------------------------------------------------------------------------------------------	
//=================================================================================================================											
case "Survey_Comp":

jcc_sur_data = sSelections[jcc].Survey_Comp;
//var display_comp = [];
survey_number = jcc_sur_data;



//alert(jcc_sur_data.length - 1); // total number of questions
//var survey_comp_array = [];
for(var sur_c_Data = 1; sur_c_Data < jcc_sur_data.length; sur_c_Data++)
	{
		survey_comp_array[sur_c_Data]  = String(Object.keys(jcc_sur_data[sur_c_Data]))

		if(sur_c_Data === 1)
			{
				display_comp[sur_c_Data] = "block"
				cur_s_question = 1;
				//document.getElementById("survey_prev").style.display = "none";
			}
		if(sur_c_Data > 1)
			{
				display_comp[sur_c_Data] = "none"
			}	

		
		//alert("survey_comp_array["+sur_c_Data+"]: " + survey_comp_array[sur_c_Data]);
	}




Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12' id='survey_" + jcc + "' style='margin-top:"+jcc_sur_data[0].top_margin+";background-color: " + jcc_sur_data[0].background_color + ";'>";	
for(var surData = 1; surData < jcc_sur_data.length; surData++)
	{
		//alert("jcc_sur_data: " + jcc_sur_data);

	switch(String(Object.keys(jcc_sur_data[surData])))
		{
			case "single_survey_question":

				//alert("surData: " + surData);
				var scv_current_array = [];
				var single_answer_text_array = [];
//alert("survey_comp_array["+surData+"]: " + survey_comp_array[surData]);
				//<form>   
				//<div align="left" class="jb_car_acc_wd survey_block" style="margin-top: 20px">
			

						Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='survey_comp_number_"+surData+"' align='left' class='jb_car_acc_wd survey_block' style='display:"+display_comp[surData]+"; margin-top: 20px; margin-bottom:20px;'>";

				//survey_next_question
				single_survey_question_array[surData] = jcc_sur_data[surData].single_survey_question[0].single_survey_question_text;
				//onclick='survey_next_question()' 
				single_question_final_answer_array[surData] = jcc_sur_data[surData].single_survey_question[0].single_survey_question_text;

				Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='font-size: 16px;color:#000000'>"+jcc_sur_data[surData].single_survey_question[0].single_survey_question_text+"</div><br>";	
					for(var ssq = 1; ssq < jcc_sur_data[surData].single_survey_question.length; ssq++)
						{
							//alert("ssq: " + ssq);   href='javascript:jb_survey();'
							//onclick='survey_next_question("+survey_comp_array[surData]+")'
//id='"+survey_comp_array[surData]+"_"+ssq+"'
							scv_current_array[ssq] = jcc_sur_data[surData].single_survey_question[ssq].skipto;

							Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='margin-bottom:10px; text-align:left'><input onclick='survey_next_question("+surData+","+ssq+")'  type='radio' name='editList"+surData+"'' id='single_question_"+surData+"_"+ssq+"'><span class='survey_check_alignment' style='color:#000000'>"+jcc_sur_data[surData].single_survey_question[ssq].single_survey_answer+"</span></div>";
							//alert( jcc_sur_data[surData].single_survey_question[ssq].single_survey_answer );
							//id='"+survey_comp_array[surData]+'_'+ssq'
							single_answer_text_array[ssq] = jcc_sur_data[surData].single_survey_question[ssq].single_survey_answer
						}

						ssq_array[surData] = scv_current_array;

						
						single_answer_array[surData] = single_answer_text_array;

/*
						if(jcc_sur_data.length - 1 !== surData )
						{
							Jcc_Comp_Maker = Jcc_Comp_Maker + "<div align = 'center'>";
								if(surData !== 1)
										{
											Jcc_Comp_Maker = Jcc_Comp_Maker + " <button type='button' class='btn btn-primary'>Prev</button>";	
										}	
									
											Jcc_Comp_Maker = Jcc_Comp_Maker + " <button type='button' class='btn btn-primary'>Next</button>";
							Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>"
						}
*/	
							Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>"; // 1 closed
			break;

			case "multi_survey_question":

				multi_cur_num = surData;		
				var msq_current_array = [];
				Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='survey_comp_number_"+surData+"' align='left' class='jb_car_acc_wd survey_block' style='display:"+display_comp[surData]+"; margin-top: 20px; margin-bottom:20px;'>";

				multi_question_final_answer_array[surData] = jcc_sur_data[surData].multi_survey_question[0].multiple_survey_question_text;

					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='font-size: 16px;color:#000000'>"+jcc_sur_data[surData].multi_survey_question[0].multiple_survey_question_text+"</div><br>";

						for(msq = 1; msq < jcc_sur_data[surData].multi_survey_question.length; msq++)
							{
								var c_check = ("checkbox_text_" +String(surData)+ "_"+ String(msq));

								msq_current_array[msq] = jcc_sur_data[surData].multi_survey_question[msq].multipl_survey_answer;

Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='margin-bottom:10px'><input onclick='survey_next_question("+surData+","+msq+")' type='checkbox'><span class='survey_check_alignment' id='"+c_check+"' style='color:#000000'>"+jcc_sur_data[surData].multi_survey_question[msq].multipl_survey_answer+"</span></div>";
									//
								if(jcc_sur_data[surData].multi_survey_question[msq].text_input_box === "1")
									{
										textbox_final_answer_array[surData] = jcc_sur_data[surData].multi_survey_question[0].multiple_survey_question_text;

										Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='jb_car_acc_wd'><textarea id='text_area_"+surData+"' onkeyup='countChars(this,"+surData+")' maxlength='200' style='height:100px;color:#000000' id='jb_input_"+surData+"'></textarea></div>";
									}

							}

							msq_array[surData] = msq_current_array;

			Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";	
			break;

			case "Text_box_input":

				
				//console.log("surData: " + surData);

//style='color:#000000'		
			Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='survey_comp_number_"+surData+"' align='left' class='jb_car_acc_wd survey_block' style='display:"+display_comp[surData]+"; margin-top: 20px; margin-bottom:20px;'>";

			input_box_question_array[surData] = jcc_sur_data[surData].Text_box_input[0].input_txtbox_question;

			textbox_final_answer_array[surData] = jcc_sur_data[surData].Text_box_input[0].input_txtbox_question;	
						

			Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='font-size: 16px;color:#000000' maxlength='10'>"+jcc_sur_data[surData].Text_box_input[0].input_txtbox_question+"</div>";

				
			//onclick='survey_next_question("+surData+","+msq+")'	

				Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='jb_car_acc_wd'><textarea onclick='survey_next_question("+surData+")' id='text_area_"+surData+"' onkeyup='countChars(this,"+surData+")' maxlength='200' style='height:100px;color:#000000' id='jb_input_"+surData+"'></textarea></div>";				


				//Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
				
//onkeyup='countChars(this)';



				Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";	
				
				

			break;

			case "Contact_input":

			//alert(jcc_sur_data[surData].Contact_input[0].contact_question);  #f2f2f2

				Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='survey_comp_number_"+surData+"' align='left' class='jb_car_acc_wd survey_block' style='display:"+display_comp[surData]+"; margin-top: 20px; margin-bottom:20px;background-color:#f2f2f2'>";

				Jcc_Comp_Maker = Jcc_Comp_Maker + " <div align='right'><button onclick='skip_contact()' class='skip_button' id='survey_skip' style='display:none ;disabled:false ;cursor:pointer; text-align:left' type='button'>Skip</button></div>"; //

				Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='font-size: 16px;color:#000000'>"+jcc_sur_data[surData].Contact_input[0].contact_question+"</div><br>";

				//Jcc_Comp_Maker = Jcc_Comp_Maker + "<form>";	
				
				Jcc_Comp_Maker = Jcc_Comp_Maker + "<label style='color:#000000'>Name: </label>";
				Jcc_Comp_Maker = Jcc_Comp_Maker + "<input id='contact_name' style='width:100%; height:40px; color:#000000' placeholder='Contact name.'></input>";
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<br>";
				Jcc_Comp_Maker = Jcc_Comp_Maker + "<label style='color:#000000'>Company: </label>";
				Jcc_Comp_Maker = Jcc_Comp_Maker + "<input id='contact_company' style='width:100%; height:40px; color:#000000' placeholder='Contact company.'></input>";				
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<br>";
				Jcc_Comp_Maker = Jcc_Comp_Maker + "<label style='color:#000000'>Email: </label>";
				Jcc_Comp_Maker = Jcc_Comp_Maker + "<input id='contact_email' style='width:100%; height:40px; color:#000000' placeholder='Contact email.'></input>";	

				//Jcc_Comp_Maker = Jcc_Comp_Maker + "</form>";
				
				Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";	


			break;


		}

	}
//  onclick='survey_nxt("+cur_s_question+")'



		Jcc_Comp_Maker = Jcc_Comp_Maker + " <div><button onclick='survey_nxt()' class='survey_buttons' id='survey_next' style='disabled:true ;cursor:not-allowed' type='button'>Next</button></div>"; //

		Jcc_Comp_Maker = Jcc_Comp_Maker + " <div><button onclick='submit_survey()' class='survey_buttons' id='survey_submit' style='display:none ;disabled:true ;cursor:not-allowed' type='button'>Submit</button></div>"; //

		//Jcc_Comp_Maker = Jcc_Comp_Maker + "<div><a style='display:none; margin-top:20px;' href='javascript:jb_survey();' class='btn btn-primary'>Submit</a></div>";
										
	Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";

						
break;	
//-------------------------------------------------------------------------------------------------------------	
//-------<( New Survey code end )>-------											
//-------------------------------------------------------------------------------------------------------------	







//-------------------------------------------------------------------------------------------------------------	
//-------<( Carousel code begin )>-------											
//-------------------------------------------------------------------------------------------------------------											

									case "Carousel":
										var jcc_car_data = sSelections[jcc].Carousel;
										
										ac_img_zoom_img = [];

var mag_lens;											

		if(typeof moduleFolder !== "undefined")
			{
				mag_lens = "jbuild_libs/images/zoom.png";
				plus_icon = "jbuild_libs/images/plus_icon.png";
				minus_icon = "jbuild_libs/images/minus_sign.png";
				fit_icon = "jbuild_libs/images/resize_full.png";				
			}

		if(typeof moduleFolder === "undefined")
			{

				var mgimg = String(window.location);
				if(mgimg.search("LLL") < 1)
					{
						mag_lens = "../../../jbuild_libs/images/zoom.png";
						plus_icon = "../../../jbuild_libs/images/plus_icon.png";
						minus_icon = "../../../jbuild_libs/images/minus_sign.png";
						fit_icon = "../../../jbuild_libs/images/resize_full.png";
					}
			
				if(mgimg.search("LLL") > 1)
					{
						mag_lens = "../../../../../jbuild_libs/images/zoom.png";
						plus_icon = "../../../../../jbuild_libs/images/plus_icon.png";
						minus_icon = "../../../../../jbuild_libs/images/minus_sign.png";
						fit_icon = "../../../../../jbuild_libs/images/resize_full.png";						
					}


			}									
								

//for(var jcc_car = 1; jcc_car < jcc_car_data.length; jcc_car++)
			//alert(jcc_car_data[jcc_car].Slide.dialog_text);
											
//caro_modal_text											
for(var mdl_title = 1; mdl_title < jcc_car_data.length; mdl_title++)
	{
		if(typeof jcc_car_data[mdl_title].Slide.dialog_text !== "undefined")
			{
				//alert("jcc: " + jcc);
				caro_modal_info[mdl_title] = jcc_car_data[mdl_title].Slide.dialog_text;
				//alert(caro_modal_info[mdl_title]);
				//alert(caro_modal_info);
				
			}

	}
											
caro_modal_text[jcc] = caro_modal_info;	
caro_modal_info = [];											
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='jccImgModal' class='img_modal' style='margin-top:36px'>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='img_modal_hdr_ftr'><p id='img_modal_text' style='color: #ffffff; text-align:left'></p></div>";											
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='img_modal_content' style='overflow-y:auto'>";	

Jcc_Comp_Maker = Jcc_Comp_Maker + "<img id='modal_image' style='margin-top:"+jcc_car_data[0].slide_top_margin+"; width:90%; height:90%' src='' x alt=''>";												
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";	
											
											
	//alert("jcc_car: " + jcc_car);										
//-------<( Footer begin )>
	Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='img_modal_hdr_ftr'>";	//col-lg-12 col-md-12 col-xs-12
			 Jcc_Comp_Maker = Jcc_Comp_Maker + "<div><span class='zicon'><img alt='Select to zoom in' src='"+plus_icon+"' onClick='javascript:zin_image("+jcc+")'></span><span class='zicon'><img alt='Select to zoom out' src='"+minus_icon+"' onClick='javascript:zout_image("+jcc+")'></span> <span class='zicon'><img alt='Select to zoom out' src='"+fit_icon+"' onClick='javascript:fit_image("+jcc+")'></span>  <span class='jb_close' id='img_btn'><button onclick='javascript:close_img()'><jb1>" + closeButton + "</jb1></button></span></div>";// Close										
											
											
    Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
//-------<( Footer end )>											
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";												
											
//alert("jcc_car: " + jcc_car);											
//onclick='javascript:Page_Selection("+tc_con+",0)'											
											
										
								
										
										car_slide_array[jcc] = jcc_car_data.length - 1;
car_zoom_image_array = [];	
for(var jcc_car_ctr = 1; jcc_car_ctr < jcc_car_data.length; jcc_car_ctr++)
	{
			//alert("jcc_car_ctr: " + jcc_car_ctr + " : Jcc = " + jcc);

			car_zoom_image_array[jcc_car_ctr]	= jcc_car_data[jcc_car_ctr].Slide.Image;
		
		//alert("jcc_car_ctr: " + jcc_car_ctr + " : jcc_car_data.length: " + jcc_car_data.length);
		
			if(jcc_car_ctr === (jcc_car_data.length) - 1)
				{
					//alert(car_zoom_image_array);
					car_zoom_array[jcc] = car_zoom_image_array
					//alert(car_zoom_array);
				}
	}
											
											
											
											
	for(var cbe = 0; cbe < car_slide_array[jcc]; cbe++)
		{

			car_array[cbe] = String(String(jcc) + "_" + (cbe + 1));
				if(cbe === (car_slide_array[jcc]) - 1)
					{

						cur_slide_number[jcc] = car_array;
						car_array = [];
					}

		}											
											
											
car_rpt[jcc] = jcc_car_data[0].repeat;										
								
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12' style='width:100%'>";
										
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='carousel_margin jb_car_acc_wd'><div id='"+jcc + "_" +"jcCarousel' class='carousel slide' data-ride='false' data-interval='false' data-wrap='"+jcc_car_data[0].repeat+"' style='background-color:"+jcc_car_data[0].back_color+"; margin-top:"+jcc_car_data[0].top_margin+"'>";	
// Carousel indicators 
if((jcc_car_data[0].repeat !== "true") && (jcc_car_data[0].repeat !== "false") )											
{
	old_caro = "true";
}
											
if((jcc_car_data[0].repeat === "true") || (old_caro === "true")	)										
{											
/* The below code will add indicators to the carousel, however they interfere with the image zoom. fix later										
Jcc_Comp_Maker = Jcc_Comp_Maker + "<ol class='carousel-indicators' style='bottom: -10px; margin-bottom:10px;'>"; //margin-bottom:10px;
			var car_count;								
				for(var jcc_car_ind = 1; jcc_car_ind < jcc_car_data.length; jcc_car_ind++)
							{
								if(jcc_car_ind === 1)
									{
										car_count = (jcc_car_ind - 1);  //  href='#"+jcc + "_" +"jcCarousel'
										
			                            Jcc_Comp_Maker = Jcc_Comp_Maker + "<li data-target='#"+jcc + "_" +"jcCarousel' data-slide-to='"+(Number(car_count))+"' class='active'></li>"; 
									}
										else
									{
										car_count = (jcc_car_ind - 1);
			                            Jcc_Comp_Maker = Jcc_Comp_Maker + "<li data-target='#"+jcc + "_" +"jcCarousel' data-slide-to='"+(Number(car_count)) +"'></li>";
									}
				
							}
Jcc_Comp_Maker = Jcc_Comp_Maker + "</ol>";
*/
}											
											
											
											
// Wrapper for carousel items -->

//overflow-y: auto; overflow-x: hidden

if($(document).width() <= 414)											
		{
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='carousel-inner' style='width:100%;height:340px; overflow-y: auto; z-index:200px'>";	// changed 340 to 	
		}

											
if($(document).width() > 414)
		{
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='carousel-inner' style='width:88%;height:450px; overflow-y: auto; z-index:200px'>";							}				
//var jcc_car
for(jcc_car = 1; jcc_car < jcc_car_data.length; jcc_car++)
	{


			if(jcc_car === 1) // <img src="../Mod_01/images/boom.jpg" alt="First Slide">
				{
				  Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='"+jcc+"_"+jcc_car+"' style='padding-left:"+jcc_car_data[jcc_car].Slide.Padding+";padding-right:"+jcc_car_data[jcc_car].Slide.Padding+"' class='item active'>";

if(typeof jcc_car_data[jcc_car].Slide.Image_tag === "undefined")
	{
		//alert("The ADA for the carousel needs to be added");
		ADA_check_Array[jcc] = "Alt tags for images inside the carousel needs to be added"
	
	}
					
if(jcc_car_data[jcc_car].Slide.Image.length > 0)
		{ 
			

		Alt_Tag_Carousel_Data[jcc_car] = jcc_car_data[jcc_car].Slide.Image_tag;
			if(typeof jcc_car_data[jcc_car].Slide.Image_tag === "undefined")
				{
					
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='text-align:"+jcc_car_data[jcc_car].Slide.Image_Placement+"'><img style='margin-top:"+jcc_car_data[0].slide_top_margin+"; width:"+jcc_car_data[jcc_car].Slide.image_size+"' src='"+img_loc+""+jcc_car_data[jcc_car].Slide.Image+"' x alt=''>";
					/*
						if(typeof jcc_car_data[jcc_car].Slide.image_zoom !== "undefined")
							{
								if(jcc_car_data[jcc_car].Slide.image_zoom === "true")
									{
										Jcc_Comp_Maker = Jcc_Comp_Maker + "<div><img alt='Select to enlarge image' src='"+mag_lens+"' onClick='javascript:imgZoom("+jcc+","+jcc_car+")' style='margin-top:8px'></div>";
									}
							}
					*/
					Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
				}
			
			
			if(typeof jcc_car_data[jcc_car].Slide.Image_tag !== "undefined")
				{

			var iz = jcc_car_data[jcc_car].Slide.Image		
					
					if(jcc_car_data[jcc_car].Slide.Image_tag.length <= 125)
						{

							
			Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='text-align:"+jcc_car_data[jcc_car].Slide.Image_Placement+"'><img style='margin-top:"+jcc_car_data[0].slide_top_margin+"; width:"+jcc_car_data[jcc_car].Slide.image_size+"' src='"+img_loc+""+jcc_car_data[jcc_car].Slide.Image+"' x alt='"+jcc_car_data[jcc_car].Slide.Image_tag+"' role='button' onClick='javascript:imgZoom("+jcc+","+jcc_car+")'>";
				
			//alert("typeof jcc_car_data[jcc_car].Slide.image_zoom: " + typeof jcc_car_data[jcc_car].Slide.image_zoom);				
			/*			
			if(typeof jcc_car_data[jcc_car].Slide.image_zoom !== "undefined")
				{
					if(jcc_car_data[jcc_car].Slide.image_zoom === "true")
						{
							Jcc_Comp_Maker = Jcc_Comp_Maker + "<div><img alt='Select to enlarge image' src='"+mag_lens+"' onClick='javascript:imgZoom("+jcc+","+jcc_car+")' style='margin-top:8px'></div>";	
						}
				}
			*/
							
			Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";			
							
						}
					
					if(jcc_car_data[jcc_car].Slide.Image_tag.length > 125)
						{
							
							var jcc_car_alt = (jcc +"" + jcc_car + "" + 0);
							Alt_Tag_Image_name[jcc_car_alt] = jcc_car_data[jcc_car].Slide.Image;

							//car_img_array

							//console.log("BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB")
							//console.log("jcc_car: " + jcc_car );
							//console.log("jcc_car_alt: "+ jcc_car_alt) ;
							//console.log("jcc_car_data["+jcc_car+"].Slide.Image: " + jcc_car_data[jcc_car].Slide.Image)
							//console.log("jcc_car + jcc = "  + jcc + jcc_car + 0);
							//console.log("BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB")
										

			Alt_Tag_Image_Data[jcc_car_alt] = jcc_car_data[jcc_car].Slide.Image_tag;
			//Alt_Tag_Image_name[jcc_car]	= jcc_car_data[jcc_car].Slide.Image_tag;
			//Alt_Tag_Image_name[jcc_car]	= jcc_car_data[jcc_car].Slide.Image;
			//console.log("THIS SUX! " + Alt_Tag_Image_name)
			
						
							
			Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='text-align:"+jcc_car_data[jcc_car].Slide.Image_Placement+"'><img style='margin-top:"+jcc_car_data[0].slide_top_margin+"; width:"+jcc_car_data[jcc_car].Slide.image_size+"' src='"+img_loc+""+jcc_car_data[jcc_car].Slide.Image+"' x alt='Select image for more information' role='button' onClick='javascript:imgZoom("+jcc+","+jcc_car+")'>";
			/*				
			if(typeof jcc_car_data[jcc_car].Slide.image_zoom !== "undefined")
				{
					if(jcc_car_data[jcc_car].Slide.image_zoom === "true")
						{
							Jcc_Comp_Maker = Jcc_Comp_Maker + "<div><img alt='Select to enlarge image' src='"+mag_lens+"' onClick='javascript:imgZoom("+jcc+","+jcc_car+")' style='margin-top:8px'></div>";	
						}
				}
			*/
			Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";	
			
			//-------<( Added by Jack on 12/01/2020. )>-------
						//Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='margin-top:10px'><button class='btn btn-primary btn-sm' role='button' onclick='alt_tag_lib("+jcc_car+","+jcc+")'>Image Description</button></div>";
							
				//-------<( Updated by James on 1/26/2021. )>-------
							Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='margin-top:10px'><button class='btn btn-primary btn-sm' role='button' onclick='alt_tag_lib("+jcc_car_alt+","+jcc_car+")'>" + imgDescButton + "</button></div>";
			//-------<( Added by Jack on 12/01/2020. )>-------




						}
					

				}					

						}
					
					
					//"Image_tag":"",
					
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='width: 75%; background-color:"+jcc_car_data[1].Slide.background_color+"; padding:"+jcc_car_data[jcc_car].Slide.Padding+"; text-align:"+jcc_car_data[0].Text_align+"; color:"+jcc_car_data[1].Slide.Text_Color+";'><"+jcc_car_data[jcc_car].Slide.Text_Font_Size+">"+jcc_car_data[jcc_car].Slide.Text+"</"+jcc_car_data[jcc_car].Slide.Text_Font_Size+"></div>";			
					
				  Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
					
				}

			if(jcc_car > 1)
				{
					
			//if(jcc_car_data[jcc_car].Slide.Image.length !== 0)			
			//	{
				  Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='"+jcc+"_"+jcc_car+"' style='padding-left:"+jcc_car_data[jcc_car].Slide.Padding+";padding-right:"+jcc_car_data[jcc_car].Slide.Padding+"' class='item'>";
					
		Alt_Tag_Carousel_Data[jcc_car] = jcc_car_data[jcc_car].Slide.Image_tag;
//-------					
if(jcc_car_data[jcc_car].Slide.Image.length > 0)
		{ 					
//-------	

			
			if(typeof jcc_car_data[jcc_car].Slide.Image_tag === "undefined")
				{

					
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='text-align:"+jcc_car_data[jcc_car].Slide.Image_Placement+"'><img style='margin-top:"+jcc_car_data[0].slide_top_margin+"; width:"+jcc_car_data[jcc_car].Slide.image_size+"' src='"+img_loc+""+jcc_car_data[jcc_car].Slide.Image+"' x alt='' role='button' onClick='javascript:imgZoom("+jcc+","+jcc_car+")'></div>";



			/*		
			if(typeof jcc_car_data[jcc_car].Slide.image_zoom !== "undefined")
				{
					if(jcc_car_data[jcc_car].Slide.image_zoom === "true")
						{
							Jcc_Comp_Maker = Jcc_Comp_Maker + "<div><img alt='Select to enlarge image' src='"+mag_lens+"' onClick='javascript:imgZoom("+jcc+","+jcc_car+")' style='margin-top:8px'></div>";
						}
				}
			*/		
					Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
					
				}					
					
					
			if(typeof jcc_car_data[jcc_car].Slide.Image_tag !== "undefined")
				{
					
					if(jcc_car_data[jcc_car].Slide.Image_tag.length <= 125)
						{						
							//mag_test(jcc,jcc_car);
							
							Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='text-align:"+jcc_car_data[jcc_car].Slide.Image_Placement+"'><img style='margin-top:"+jcc_car_data[0].slide_top_margin+"; width:"+jcc_car_data[jcc_car].Slide.image_size+"' src='"+img_loc+""+jcc_car_data[jcc_car].Slide.Image+"' x alt='"+jcc_car_data[jcc_car].Slide.Image_tag+"' role='button' onClick='javascript:imgZoom("+jcc+","+jcc_car+")'>";
							/*
							if(typeof jcc_car_data[jcc_car].Slide.image_zoom !== "undefined")
								{
									if(jcc_car_data[jcc_car].Slide.image_zoom === "true")
										{
											Jcc_Comp_Maker = Jcc_Comp_Maker + "<div><img alt='Select to enlarge image' src='"+mag_lens+"' onClick='javascript:imgZoom("+jcc+","+jcc_car+")' style='margin-top:8px'></div>";
										}
								}
							*/
							Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
						}	
					
					if(jcc_car_data[jcc_car].Slide.Image_tag.length > 125)
						{
							//var jcc_car_alt = (jcc +"" + jcc_car + "" + 0);
							//Alt_Tag_Image_name[jcc_car_alt] = jcc_car_data[jcc_car].Slide.Image;

							var jcc_car_alt = (jcc +"" + jcc_car + "" + 0);
							Alt_Tag_Image_name[jcc_car_alt] = jcc_car_data[jcc_car].Slide.Image;

							//console.log("BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB")
							//console.log("jcc_car: " + jcc_car );
							//console.log("jcc_car_alt: "+ jcc_car_data[jcc_car].Slide.Image) ;
							//console.log("jcc_car + jcc = "  + jcc + jcc_car + 0);
							//console.log("BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB")							

							//Alt_Tag_Image_name[jcc_car]	= jcc_car_data[jcc_car].Slide.Image_tag;
							

							//var jcc_car_alt = (jcc +"" + jcc_car + "" + 0);
							Alt_Tag_Image_Data[jcc_car_alt] = jcc_car_data[jcc_car].Slide.Image_tag;
							//Alt_Tag_Image_Data[jcc_car] = jcc_car_data[jcc_car].Slide.Image_tag;
						//	Alt_Tag_Image_name[jcc_car] = jcc_car_data[jcc_car].Slide.Image;

							//console.log("THIS SUX! " + Alt_Tag_Image_name[jcc_car])

						//		console.log("Alt_Tag_Image_Data["+jcc_car+"]: " + Alt_Tag_Image_Data[jcc_car]);	
							
							Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='text-align:"+jcc_car_data[jcc_car].Slide.Image_Placement+"'><img style='margin-top:"+jcc_car_data[0].slide_top_margin+"; width:"+jcc_car_data[jcc_car].Slide.image_size+"' src='"+img_loc+""+jcc_car_data[jcc_car].Slide.Image+"' x alt='Select image for more information'  role='button' onClick='javascript:imgZoom("+jcc+","+jcc_car+")'>";
							/*
							if(typeof jcc_car_data[jcc_car].Slide.image_zoom !== "undefined")
								{
									if(jcc_car_data[jcc_car].Slide.image_zoom === "true")
										{
											Jcc_Comp_Maker = Jcc_Comp_Maker + "<div><img alt='Select to enlarge image' src='"+mag_lens+"' onClick='javascript:imgZoom("+jcc+","+jcc_car+")' style='margin-top:8px'></div>";
										}
								}
							*/

							Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";

							//-------<( Added by Jack on 12/01/2020. )>-------
									//Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='margin-top:10px'><button class='btn btn-primary btn-sm' role='button' onclick='alt_tag_lib("+jcc_car_alt+")'>Image Description</button></div>";

							//-------<( Updated by James on 1/26/2021. )>-------
									Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='margin-top:10px'><button class='btn btn-primary btn-sm' role='button' onclick='alt_tag_lib("+jcc_car_alt+","+jcc_car+")'>" + imgDescButton + "</button></div>";

							//-------<( Added by Jack on 12/01/2020. )>-------
						}						
				
				}					

//-------
		}			
//-------					
					

					
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='width: 75%; background-color:"+jcc_car_data[1].Slide.background_color+"; padding:"+jcc_car_data[jcc_car].Slide.Padding+"; text-align:"+jcc_car_data[0].Text_align+"; color:"+jcc_car_data[1].Slide.Text_Color+";'><"+jcc_car_data[jcc_car].Slide.Text_Font_Size+">"+jcc_car_data[jcc_car].Slide.Text+"</"+jcc_car_data[jcc_car].Slide.Text_Font_Size+"></div>";	
					
				  Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
				//}
				}		
		
	}
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";	
											
//car_rpt[jcc]
// jcc_car_data[0].repeat === "true"											
	////console.log("car_n_data");	
	////console.log("car_n_data");									
//Carousel controls -->
Jcc_Comp_Maker = Jcc_Comp_Maker + "<a id='prev_"+jcc+"' class='carousel-control left' style='left: 0%;width:60px' href='#"+jcc + "_" +"jcCarousel' data-slide='prev' onClick='javascript:car_click("+jcc+",0,car_rpt["+jcc+"],0)'>";
										
			if(car_rpt[jcc] === "true")
				{
						Jcc_Comp_Maker = Jcc_Comp_Maker + "<span id='car_left_"+jcc+"' class='glyphicon glyphicon-chevron-left'></span>"; 					
				}
											
			if(car_rpt[jcc] === "false")
				{
						Jcc_Comp_Maker = Jcc_Comp_Maker + "<span style='visibility: hidden;' id='car_left_"+jcc+"' class='glyphicon glyphicon-chevron-left'></span>"; 					
				}											

Jcc_Comp_Maker = Jcc_Comp_Maker + "</a>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "<a class='carousel-control right' href='#"+jcc + "_" +"jcCarousel' data-slide='next' onClick='javascript:car_click("+jcc+",1,car_rpt["+jcc+"],1)' style='width:60px'>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "<span id='car_right_"+jcc+"' class='glyphicon glyphicon-chevron-right'></span>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "</a>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";											

Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";	// Uncommented out by Jack on 03/18/2020 was causing the paragraph background color to not extend to the edge of the page.
		
									break;
											
										
//-------------------------------------------------------------------------------------------------------------	
//-------<( Carousel code end )>-------											
//-------------------------------------------------------------------------------------------------------------
/*											
function mag_test(cur_car,mgt)
	{
		
		
		
		alert("mag_test was called: " + cur_car + " | " + mgt);
	}
*/											
//-------------------------------------------------------------------------------------------------------------	
//-------<( Divider code begin )>-------											
//-------------------------------------------------------------------------------------------------------------												
									case "Divider":
											
											
var flipper;		
	if(sSelections[jcc][snglBld[jcc]][3].flip === "false"){flipper = "0deg";}
	if(sSelections[jcc][snglBld[jcc]][3].flip === "true"){flipper = "180deg";}

Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12'>";											
//class='col-lg-12 col-md-12 col-xs-12'
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='background-color: "+sSelections[jcc][snglBld[jcc]][4].back_color+"; margin-top: "+ sSelections[jcc][snglBld[jcc]][2].top_margin +"; height:"+ sSelections[jcc][snglBld[jcc]][1].height +"; width:"+ sSelections[jcc][snglBld[jcc]][1].width +";'>";											
											
if(sSelections[jcc][snglBld[jcc]][0].divider_image.length !== 0)
	{
		
//-------<( Added to check for portal or development )>-------
if(typeof moduleFolder !== "undefined")
	{
Jcc_Comp_Maker = Jcc_Comp_Maker + "<img id='' style='transform: rotate("+ flipper +"); margin:-10px; overflow:hidden; width: 100%;' src='jbuild_libs/images/" + sSelections[jcc][snglBld[jcc]][0].divider_image + ".png' height='"+ sSelections[jcc][snglBld[jcc]][1].height + "width:"+ sSelections[jcc][snglBld[jcc]][1].width +"; ' alt=''/>";							
	}
					
if(typeof moduleFolder === "undefined")
	{
		var divimg = String(window.location);
		if(divimg.search("LLL") < 1)
			{
				Jcc_Comp_Maker = Jcc_Comp_Maker + "<img id='' style='transform: rotate("+ flipper +"); margin:-10px; overflow:hidden; width: 100%;' src='../../../jbuild_libs/images/" + sSelections[jcc][snglBld[jcc]][0].divider_image + ".png' height='"+ sSelections[jcc][snglBld[jcc]][1].height + "width:"+ sSelections[jcc][snglBld[jcc]][1].width +";' alt=''/>";	
			}
	
		if(divimg.search("LLL") > 1)
			{
				Jcc_Comp_Maker = Jcc_Comp_Maker + "<img id='' style='transform: rotate("+ flipper +"); margin:-10px; overflow:hidden; width: 100%;' src='../../../../../jbuild_libs/images/" + sSelections[jcc][snglBld[jcc]][0].divider_image + ".png' height='"+ sSelections[jcc][snglBld[jcc]][1].height + "width:"+ sSelections[jcc][snglBld[jcc]][1].width +";' alt=''/>";								
			}


		
						
	}
//-------<( Added to check for portal or development )>-------		
	
	}
											
									
if(sSelections[jcc][snglBld[jcc]][5].Line_Display === "true")
	{
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='margin-top:"+sSelections[jcc][snglBld[jcc]][5].top_margin+"; border-bottom: thick; border-bottom-color: "+sSelections[jcc][snglBld[jcc]][5].Line_Color+"; border-bottom-style: "+sSelections[jcc][snglBld[jcc]][5].Line_Style+";border-bottom-width: "+sSelections[jcc][snglBld[jcc]][5].Line_height+"'></div>";
		
	}
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";

Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
									
									break;
//-------------------------------------------------------------------------------------------------------------	
//-------<( Divider code end )>-------											
//-------------------------------------------------------------------------------------------------------------	

					case "Custom":						
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12' style='margin-top:"+sSelections[jcc][snglBld[jcc]][0].top_margin+";background-color:"+sSelections[jcc][snglBld[jcc]][1].background_color+";padding:"+sSelections[jcc][snglBld[jcc]][2].Padding+"'>";											

//Jcc_Comp_Maker = Jcc_Comp_Maker + "<div><jb1>"+sSelections[jcc][snglBld[jcc]][3].Label+"</jb1></div>";											
											
											
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";												
					break;						
											
//-------------------------------------------------------------------------------------------------------------	
//-------<( Audio code begin )>-------											
//-------------------------------------------------------------------------------------------------------------												
									case "audio": // SA
											
								//alert(typeof sSelections[jcc][snglBld[jcc]][7]);
											
						cur_aud[jcc] = (sSelections[jcc][snglBld[jcc]][0].Audio_File);					
						
											
											
											
							if(typeof sSelections[jcc][snglBld[jcc]][7] === "undefined")				
								{
									
									ADA_check_Array[jcc] =  "Please update the Audio snippet in space number: " + jcc + " to Audio V4.0";
								}
								
//Jcc_Comp_Maker = Jcc_Comp_Maker + "<div>";			
									
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12' style='margin-top:"+sSelections[jcc][snglBld[jcc]][6].top_margin+";'>";
											
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='width:100%; background-color:"+sSelections[jcc][snglBld[jcc]][4].background_color+";padding:"+sSelections[jcc][snglBld[jcc]][5].Padding+"'>";
							
						switch(sSelections[jcc][snglBld[jcc]][3].Lable_Position)
							{
								case "top": //class='jb_car_acc_wd'
									
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div><"+sSelections[jcc][snglBld[jcc]][2].Label_Font_Size+">"+sSelections[jcc][snglBld[jcc]][1].Label+"</"+sSelections[jcc][snglBld[jcc]][2].Label_Font_Size+"></div>";
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "<audio id='aud_source_"+jcc+"' controls onplay='audio_number("+jcc+")' style='width:80; margin-top: 20px;'><source src='"+audio_loc+"" + sSelections[jcc][snglBld[jcc]][0].Audio_File + "' type='audio/mpeg'></audio>";

								break;
									
								case "bottom": //class='jb_car_acc_wd'
Jcc_Comp_Maker = Jcc_Comp_Maker + "<audio controls style='width:80%; margin-top: 20px;'><source src='"+audio_loc+"" + sSelections[jcc][snglBld[jcc]][0].Audio_File + "' type='audio/mpeg'></audio>";
									
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div><"+sSelections[jcc][snglBld[jcc]][2].Label_Font_Size+">"+sSelections[jcc][snglBld[jcc]][1].Label+"</"+sSelections[jcc][snglBld[jcc]][2].Label_Font_Size+"></div>";									
								break;	
							}
							
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
											
Jcc_Comp_Maker = Jcc_Comp_Maker +"<div align='center' style='margin-top:10px;'><button id='atbtn_" + jcc+"' type='button' class='btn btn-primary btn-sm' onclick='aTranscripts("+jcc+");'>"+trans_button+"</button></div>";					
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='jb_mx_wd' id='audio_trans_" + jcc +"' style='display: none; margin-top:10px; border: medium; border-style: solid; border-color: #000000;height:300px; overflow-y: auto; overflow-x: hidden ;padding:5px;'>";
											
											
					for(var atrn = 8; atrn < sSelections[jcc][snglBld[jcc]].length; atrn++)
						{
	
							
					
							if(sSelections[jcc][snglBld[jcc]][atrn].per_underline === "u")
								{
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<p style='text-align:"+sSelections[jcc][snglBld[jcc]][7].Person_align+";font-weight:"+sSelections[jcc][snglBld[jcc]][7].Person_font_weight+";color:"+sSelections[jcc][snglBld[jcc]][7].Person_text_color+"' class='jb_char_para'><"+sSelections[jcc][snglBld[jcc]][7].Person_font+"><u>"+ sSelections[jcc][snglBld[jcc]][atrn].Person +"</u></"+sSelections[jcc][snglBld[jcc]][7].Person_font+"></p>";										
								}

							if(sSelections[jcc][snglBld[jcc]][atrn].per_underline === "")
								{
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<p style='text-align:"+sSelections[jcc][snglBld[jcc]][7].Person_align+";font-weight:"+sSelections[jcc][snglBld[jcc]][7].Person_font_weight+";color:"+sSelections[jcc][snglBld[jcc]][7].Person_text_color+"' class='jb_char_para'><"+sSelections[jcc][snglBld[jcc]][7].Person_font+">"+sSelections[jcc][snglBld[jcc]][atrn].Person+"</"+sSelections[jcc][snglBld[jcc]][7].Person_font+"></p>";										
								}							
													
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<p style='text-align:"+sSelections[jcc][snglBld[jcc]][7].Transcript_Text_align+";font-weight:"+sSelections[jcc][snglBld[jcc]][7].Transcript_Text_font_weight+";color:"+sSelections[jcc][snglBld[jcc]][7].Transcript_Text_color+";' class='jb_char_para'><"+sSelections[jcc][snglBld[jcc]][7].Transcript_Text_font+">"+ sSelections[jcc][snglBld[jcc]][atrn].Transcript_Text +"</"+sSelections[jcc][snglBld[jcc]][7].Transcript_Text_font+"></p>";					

						}						

Jcc_Comp_Maker = Jcc_Comp_Maker + "</div></div>";											
											
											
											
									break;

//-------------------------------------------------------------------------------------------------------------	
//-------<( Audio code end )>-------											
//-------------------------------------------------------------------------------------------------------------												
											
//-------------------------------------------------------------------------------------------------------------	
//-------<( Timeline code begin )>-------											
//-------------------------------------------------------------------------------------------------------------												
									case "Timeline":
										//timeline_heading_alignment
										timeline_start_array[0] = sSelections[jcc][snglBld[jcc]][0].timeline_heading;
										timeline_start_array[1] = sSelections[jcc][snglBld[jcc]][1].timeline_font_heading_color;
										timeline_start_array[2] = sSelections[jcc][snglBld[jcc]][2].timeline_heading_b_color;
										timeline_start_array[3] = sSelections[jcc][snglBld[jcc]][3].timeline_background_color;
										timeline_start_array[4] = sSelections[jcc][snglBld[jcc]][4].top_margin;	
											
										timeline_start_array[5] = sSelections[jcc][snglBld[jcc]][5];
										timeline_start_array[6] = sSelections[jcc][snglBld[jcc]][6];
										
										//sSelections[jcc][snglBld[jcc]][0].timeline_heading_alignment;	
										
										//	if(typeof moduleFolder !== "undefined")	
										/*	
											var timeline_heading;
											var timeline_body;
										*/	
											
										if(typeof timeline_start_array[6].Box_heading_text_color !== "undefined")	
											{
												timeline_heading = timeline_start_array[6].Box_heading_text_color;
											}
												
										if(typeof timeline_start_array[6].Box_heading_text_color === "undefined")	
											{
												timeline_heading = "#000000";
											}
											
											
										if(typeof timeline_start_array[6].Box_Contents_text_color !== "undefined")	
											{
												timeline_body = timeline_start_array[6].Box_heading_text_color;
											}
												
										if(typeof timeline_start_array[6].Box_Contents_text_color === "undefined")	
											{
												timeline_body = "#000000";
											}											
											
											
//On 4/25/2019 changed the z-index from 4 to 0 so the Alt tag popup would work. timeline
										
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12' style='z-index: 0; background-color: " + timeline_start_array[3] + "; margin-top: "+ timeline_start_array[4] +"'><span class='timeline_line' style='background-color:"+timeline_start_array[5].Vertical_Line_Color+"'> </span><div style='background-color: " + timeline_start_array[2] + "; text-align: "+sSelections[jcc][snglBld[jcc]][0].timeline_heading_alignment+"; padding: 10px; z-index: 1; position: relative;'><h2 style='color:"+ timeline_start_array[1] +";'>" + timeline_start_array[0] + "</h2></div>";											
//// /*											
		for(var tmln = 7; tmln < sSelections[jcc][snglBld[jcc]].length; tmln++)	
				{

				switch(tmln % 2)
						{
							case 0:
						
								
		Jcc_Comp_Maker = (Jcc_Comp_Maker + "<div class='timeline_container left'><span class='timeline_circle_left' style='background-color:"+timeline_start_array[5].Circle_Color+";border: "+timeline_start_array[5].Circle_Weight+" solid "+timeline_start_array[5].Circle_Outline_Color+"'> </span><span class='left_arrow' style='border-color: transparent transparent transparent "+timeline_start_array[5].Info_Back+";'> </span><div class='content' style='background-color:"+timeline_start_array[5].Info_Back+"'><h3 style='text-align:"+timeline_start_array[6].Box_Heading_alignment+"; font-weight:"+timeline_start_array[6].Box_Heading_weight+"; font-style:"+timeline_start_array[6].Box_Heading_style+";text-decoration: "+timeline_start_array[6].Box_Heading_underline+";font-size:"+timeline_start_array[6].Box_Heading_Size+";color:"+timeline_heading+"'>"+ sSelections[jcc][snglBld[jcc]][tmln].box_Heading +"</h3>");
								
				
			//font color="red"
			//Jcc_Comp_Maker = (Jcc_Comp_Maker + "");					
			//	"Box_heading_text_color":"",
			//	"Box_Contents_text_color":"",					
								
							
						switch(sSelections[jcc][snglBld[jcc]][tmln].box_Contents.slice(-4))
							{
								case ".jpg":
									
									if(typeof sSelections[jcc][snglBld[jcc]][tmln].timeline_img_alt === "undefined")
										{
											ADA_check_Array[tmln] = sSelections[jcc][snglBld[jcc]][tmln].box_Contents + " In the Timeline needs to have an Alt Tag";
									Jcc_Comp_Maker = (Jcc_Comp_Maker +"<div style='text-align:"+timeline_start_array[6].box_Contents_Image_alignment+"'><img src='"+img_loc+"" + sSelections[jcc][snglBld[jcc]][tmln].box_Contents + "' width='80%' height='auto' alt=''/></div>");											
										}
									
									if(typeof sSelections[jcc][snglBld[jcc]][tmln].timeline_img_alt !== "undefined")
										{
											if(sSelections[jcc][snglBld[jcc]][tmln].timeline_img_alt.length <= 125)
												{
													if(sSelections[jcc][snglBld[jcc]][tmln].timeline_img_alt.length === 0)
														{
															ADA_check_Array[tmln] = sSelections[jcc][snglBld[jcc]][tmln].box_Contents + " In the Timeline needs to have an Alt Tag";
														}
									Jcc_Comp_Maker = (Jcc_Comp_Maker +"<div style='text-align:"+timeline_start_array[6].box_Contents_Image_alignment+"'><img src='"+img_loc+"" + sSelections[jcc][snglBld[jcc]][tmln].box_Contents + "' width='80%' height='auto' alt='"+sSelections[jcc][snglBld[jcc]][tmln].timeline_img_alt+"'/></div>");													
												}
											
											if(sSelections[jcc][snglBld[jcc]][tmln].timeline_img_alt.length > 125)
												{
													Alt_Tag_Image_Data[tmln] = sSelections[jcc][snglBld[jcc]][tmln].timeline_img_alt;  //box_Contents
													Alt_Tag_Image_name[tmln] = sSelections[jcc][snglBld[jcc]][tmln].box_Contents;
													
									Jcc_Comp_Maker = (Jcc_Comp_Maker +"<div style='text-align:"+timeline_start_array[6].box_Contents_Image_alignment+"'><img src='"+img_loc+"" + sSelections[jcc][snglBld[jcc]][tmln].box_Contents + "' width='80%' height='auto' alt='Select image for more information' role='button' onclick='alt_tag_lib("+tmln+")'></div>");													
													
												}											
										}
									
									
	

								break;

								case ".png":

									
									if(typeof sSelections[jcc][snglBld[jcc]][tmln].timeline_img_alt === "undefined")
										{
											ADA_check_Array[tmln] = sSelections[jcc][snglBld[jcc]][tmln].box_Contents + " In the Timeline needs to have an Alt Tag";
											
									Jcc_Comp_Maker = (Jcc_Comp_Maker +"<div style='text-align:"+timeline_start_array[6].box_Contents_Image_alignment+"'><img src='"+img_loc+"" + sSelections[jcc][snglBld[jcc]][tmln].box_Contents + "' width='80%' height='auto' alt=''/></div>");												
										}									
									
									if(typeof sSelections[jcc][snglBld[jcc]][tmln].timeline_img_alt !== "undefined")
										{
											if(sSelections[jcc][snglBld[jcc]][tmln].timeline_img_alt.length <= 125)
												{
													if(sSelections[jcc][snglBld[jcc]][tmln].timeline_img_alt.length === 0)
														{
															ADA_check_Array[tmln] = sSelections[jcc][snglBld[jcc]][tmln].box_Contents + " In the Timeline needs to have an Alt Tag";
														}
									Jcc_Comp_Maker = (Jcc_Comp_Maker +"<div style='text-align:"+timeline_start_array[6].box_Contents_Image_alignment+"'><img src='"+img_loc+"" + sSelections[jcc][snglBld[jcc]][tmln].box_Contents + "' width='80%' height='auto' alt='"+sSelections[jcc][snglBld[jcc]][tmln].timeline_img_alt+"'/></div>");													
												}
											
											if(sSelections[jcc][snglBld[jcc]][tmln].timeline_img_alt.length > 125)
												{
													Alt_Tag_Image_Data[tmln] = sSelections[jcc][snglBld[jcc]][tmln].timeline_img_alt;
													Alt_Tag_Image_name[tmln] = sSelections[jcc][snglBld[jcc]][tmln].box_Contents;
													//alt='Select image for more information' role='button' onclick='alt_tag_lib("+tmln+")'
													
									Jcc_Comp_Maker = (Jcc_Comp_Maker +"<div style='text-align:"+timeline_start_array[6].box_Contents_Image_alignment+"'><img src='"+img_loc+"" + sSelections[jcc][snglBld[jcc]][tmln].box_Contents + "' width='80%' height='auto' alt='Select image for more information' role='button' onclick='alt_tag_lib("+tmln+")'></div>");													
												}
										}
									

								break;									
									
								case ".mp3":
				
										Jcc_Comp_Maker = (Jcc_Comp_Maker +"<div style='text-align:"+timeline_start_array[6].box_Contents_alignment+"'><audio controls><source src='"+audio_loc+"" + sSelections[jcc][snglBld[jcc]][tmln].box_Contents + "' type='audio/mpeg'></audio></div>");
									
								break;

								case ".mp4":
										Jcc_Comp_Maker = (Jcc_Comp_Maker + "<div style='text-align:"+timeline_start_array[6].box_Contents_alignment+"'><video class='jb_mx_wd' style='margin-top: 20px' width='100%;' controls><source src='"+ sSelections[jcc][snglBld[jcc]][tmln].box_Contents +"' id='vid_source' type='video/mp4'></video></div>");
								break;	
											//;color:"+timeline_body+"   Box_Contents_text_color
								default: 
										Jcc_Comp_Maker = (Jcc_Comp_Maker + "<div style='color:"+timeline_body+";text-align:"+timeline_start_array[6].box_Contents_alignment+"'><"+timeline_start_array[6].box_Contents_font_size+">"+ sSelections[jcc][snglBld[jcc]][tmln].box_Contents +"</"+timeline_start_array[6].box_Contents_font_size+"></div>");
								break;
							}

				Jcc_Comp_Maker = (Jcc_Comp_Maker + "</div></div>");										
																	
							break;
															
							case 1:

		Jcc_Comp_Maker = (Jcc_Comp_Maker + "<div class='timeline_container right'><span class='timeline_circle_right' style='background-color:"+timeline_start_array[5].Circle_Color+";border: "+timeline_start_array[5].Circle_Weight+" solid "+timeline_start_array[5].Circle_Outline_Color+"'> </span><span class='right_arrow' style='border-color: transparent  "+timeline_start_array[5].Info_Back+" transparent transparent;'> </span><div class='content' style='background-color:"+timeline_start_array[5].Info_Back+"'><h3 style='text-align:"+timeline_start_array[6].Box_Heading_alignment+"; font-weight:"+timeline_start_array[6].Box_Heading_weight+"; font-style:"+timeline_start_array[6].Box_Heading_style+";text-decoration: "+timeline_start_array[6].Box_Heading_underline+";font-size:"+timeline_start_array[6].Box_Heading_Size+";color:"+timeline_heading+"'>"+ sSelections[jcc][snglBld[jcc]][tmln].box_Heading +"</h3>");
								
						switch(sSelections[jcc][snglBld[jcc]][tmln].box_Contents.slice(-4))
							{
								case ".jpg":

									if(typeof sSelections[jcc][snglBld[jcc]][tmln].timeline_img_alt === "undefined")
										{
											ADA_check_Array[tmln] = sSelections[jcc][snglBld[jcc]][tmln].box_Contents + " In the Timeline needs to have an Alt Tag";
											
									Jcc_Comp_Maker = (Jcc_Comp_Maker +"<div style='text-align:"+timeline_start_array[6].box_Contents_Image_alignment+"'><img src='"+img_loc+"" + sSelections[jcc][snglBld[jcc]][tmln].box_Contents + "' width='80%' height='auto' alt=''/></div>");												
										}
									
									if(typeof sSelections[jcc][snglBld[jcc]][tmln].timeline_img_alt !== "undefined")
										{
											if(sSelections[jcc][snglBld[jcc]][tmln].timeline_img_alt.length <= 125)
												{
													if(sSelections[jcc][snglBld[jcc]][tmln].timeline_img_alt.length === 0)
														{
															ADA_check_Array[tmln] = sSelections[jcc][snglBld[jcc]][tmln].box_Contents + " In the Timeline needs to have an Alt Tag";
														}
									Jcc_Comp_Maker = (Jcc_Comp_Maker +"<div style='text-align:"+timeline_start_array[6].box_Contents_Image_alignment+"'><img src='"+img_loc+"" + sSelections[jcc][snglBld[jcc]][tmln].box_Contents + "' width='80%' height='auto' alt='"+sSelections[jcc][snglBld[jcc]][tmln].timeline_img_alt+"'/></div>");													
												}
											
											if(sSelections[jcc][snglBld[jcc]][tmln].timeline_img_alt.length > 125)
												{
													Alt_Tag_Image_Data[tmln] = sSelections[jcc][snglBld[jcc]][tmln].timeline_img_alt;
													Alt_Tag_Image_name[tmln] = sSelections[jcc][snglBld[jcc]][tmln].box_Contents;
													
									Jcc_Comp_Maker = (Jcc_Comp_Maker +"<div style='text-align:"+timeline_start_array[6].box_Contents_Image_alignment+"'><img src='"+img_loc+"" + sSelections[jcc][snglBld[jcc]][tmln].box_Contents + "' width='80%' height='auto' alt='Select image for more information' role='button' onclick='alt_tag_lib("+tmln+")'></div>");													
													
												}											
										}
								break;

								case ".png":

									if(typeof sSelections[jcc][snglBld[jcc]][tmln].timeline_img_alt === "undefined")
										{
											ADA_check_Array[tmln] = sSelections[jcc][snglBld[jcc]][tmln].box_Contents + " In the Timeline needs to have an Alt Tag";
											
									Jcc_Comp_Maker = (Jcc_Comp_Maker +"<div style='text-align:"+timeline_start_array[6].box_Contents_Image_alignment+"'><img src='"+img_loc+"" + sSelections[jcc][snglBld[jcc]][tmln].box_Contents + "' width='80%' height='auto' alt=''/></div>");												
										}	
									
									if(typeof sSelections[jcc][snglBld[jcc]][tmln].timeline_img_alt !== "undefined")
										{
											if(sSelections[jcc][snglBld[jcc]][tmln].timeline_img_alt.length <= 125)
												{
													if(sSelections[jcc][snglBld[jcc]][tmln].timeline_img_alt.length === 0)
														{
															ADA_check_Array[tmln] = sSelections[jcc][snglBld[jcc]][tmln].box_Contents + " In the Timeline needs to have an Alt Tag";
														}
									Jcc_Comp_Maker = (Jcc_Comp_Maker +"<div style='text-align:"+timeline_start_array[6].box_Contents_Image_alignment+"'><img src='"+img_loc+"" + sSelections[jcc][snglBld[jcc]][tmln].box_Contents + "' width='80%' height='auto' alt='"+sSelections[jcc][snglBld[jcc]][tmln].timeline_img_alt+"'/></div>");													
												}
											
											if(sSelections[jcc][snglBld[jcc]][tmln].timeline_img_alt.length > 125)
												{
													Alt_Tag_Image_Data[tmln] = sSelections[jcc][snglBld[jcc]][tmln].timeline_img_alt;
													Alt_Tag_Image_name[tmln] = sSelections[jcc][snglBld[jcc]][tmln].box_Contents;
													//alt='Select image for more information' role='button' onclick='alt_tag_lib("+tmln+")'
													
									Jcc_Comp_Maker = (Jcc_Comp_Maker +"<div style='text-align:"+timeline_start_array[6].box_Contents_Image_alignment+"'><img src='"+img_loc+"" + sSelections[jcc][snglBld[jcc]][tmln].box_Contents + "' width='80%' height='auto' alt='Select image for more information' role='button' onclick='alt_tag_lib("+tmln+")'></div>");													
												}
										}
								break;									
									
								case ".mp3":
									//alert("audio_loc: " + audio_loc + "/" + sSelections[jcc][snglBld[jcc]]);
										Jcc_Comp_Maker = (Jcc_Comp_Maker +"<div style='text-align:"+timeline_start_array[6].box_Contents_alignment+"'><audio controls><source src='"+audio_loc+"" + sSelections[jcc][snglBld[jcc]][tmln].box_Contents + "' type='audio/mpeg'></audio></div>");
								break;

								case ".mp4":
										Jcc_Comp_Maker = (Jcc_Comp_Maker + "<div style='text-align:"+timeline_start_array[6].box_Contents_alignment+"'><video class='jb_mx_wd' style='margin-top: 20px' width='100%;' controls><source src='"+ sSelections[jcc][snglBld[jcc]][tmln].box_Contents +"' id='vid_source' type='video/mp4'></video></div>");
								break;	

								default:
										Jcc_Comp_Maker = (Jcc_Comp_Maker + "<div style='color:"+timeline_body+";text-align:"+timeline_start_array[6].box_Contents_alignment+"'><"+timeline_start_array[6].box_Contents_font_size+">"+ sSelections[jcc][snglBld[jcc]][tmln].box_Contents +"</"+timeline_start_array[6].box_Contents_font_size+"></div>");
								break;
							}

				Jcc_Comp_Maker = (Jcc_Comp_Maker + "</div></div>");									
							break;	
						}					
				}
											
//// */
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";	
											
											
		/*							
			if(timeline_start_array[5].Info_Back !== "")
					{
						//alert(timeline_start_array[5].Info_Back);
						//new_row.className = "aClassName";
						
					}
		*/										
											
											
									break;		
//-------------------------------------------------------------------------------------------------------------	
//-------<( Timeline code end )>-------											
//-------------------------------------------------------------------------------------------------------------												
//-------------------------------------------------------------------------------------------------------------	
//-------<( Speech Bubble code begin )>-------											
//-------------------------------------------------------------------------------------------------------------											
									case "Speech_Bubbles":

											var speech_atl = sSelections[jcc][snglBld[jcc]][0].talking_head_image_alt;
											sBubble_Text_Array[0] = sSelections[jcc][snglBld[jcc]][0].talking_head_image;
											sBubble_Text_Array[1] = sSelections[jcc][snglBld[jcc]][1].start_text;
											sBubble_Text_Array[2] = sSelections[jcc][snglBld[jcc]][2].top_margin;
											
											

		if(typeof speech_atl === "undefined")
			{
				ADA_check_Array[jcc] =  sBubble_Text_Array[0] + " Speech bubble needs the Alt tag fields added."
			}											
											
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='spb_"+ jcc +"' class='main_bubble col-lg-12 col-md-12 col-xs-12' style='margin-top: "+ sBubble_Text_Array[2] +"; margin-bottom: 40px;'> <div class='bubbles'><div class='balloons'>";			

											
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='startBubble"+ jcc +"' class='bLeft bubble' style='display:block;'><div style='color:#000000' class='bText'><p>" + sBubble_Text_Array[1] + "</p></div></div>";												

							var sp_bl = 0;				
							for(var spb = 3; spb < sSelections[jcc][snglBld[jcc]].length; spb++)
								{
									sp_bl = (sp_bl + 1);
									
									Speech_Bub_Array[sp_bl] = sSelections[jcc][snglBld[jcc]][spb].bbl_txt;
									speech_number[jcc] = Speech_Bub_Array;
								
									
									switch(sp_bl % 2)
										{
												case 0:
									//var bbl_cur_id = [];
												
												
												
sp_bbl_id[jcc] = jcc + "_bbl_" + sp_bl;
//alert(sp_bbl_id[jcc]);												
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='" + sp_bbl_id[jcc] +"' class='bLeft bubble' style='display:none;'><div style='color:#000000' class='bText'><p>" + Speech_Bub_Array[sp_bl] + "</p></div></div>";											
												break;
												
												case 1:
												
									//alert(Speech_Bub_Array[sp_bl] + " : Case 1");			
												
sp_bbl_id[jcc] = jcc + "_bbl_" + sp_bl;	
//alert(sp_bbl_id[jcc]);												
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='" + sp_bbl_id[jcc] +"' class='bRight bubble' style='display:none;'><div style='color:#000000' class='bText'><p>" + Speech_Bub_Array[sp_bl] + "</p></div></div>";												
												break;
										}

								}
								
							//alert(Speech_Bub_Array.length);				
											
								Speech_Bub_Array = [];
		
											



									var bbl_cur_id = [];
											
							
							
		if(typeof speech_atl !== "undefined")
			{
				
			if(typeof moduleFolder === "undefined")
				{
					bStartButton = "Start";
					bBackButton = "Back";
				}	
				
				
				if(speech_atl.length <= 125)
					{
						if(speech_atl.length === 0)
							{
								ADA_check_Array[jcc] = "Speech bubble needs the Alt tag fields added."
							}
						

						
						
					
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='talkingheads'><img src='"+img_loc+"" + sBubble_Text_Array[0] +"' alt='"+speech_atl+"'></div>  <div align='center' class='col-lg-12 col-md-12 col-xs-12'><div align='left' class='col-lg-6 col-md-6 col-xs-6'><button id='bub_prev_buton"+jcc+"' style='display:none' onclick='bub_Back("+jcc+");' class='btn-primary bbl_btns' type='button'>" + bBackButton + "</button></div><div align='right' class='col-lg-6 col-md-6 col-xs-6'><button id='bub_next_button"+jcc+"' onclick='bub_Next("+jcc+");' class='btn-primary bbl_btns' type='button'>" + bStartButton + "</button></div></div>"; // Brian 20200117 Hard-coded "Start, Next, Back" now a variables for translation
					}
				
				if(speech_atl.length > 125) // role='button' onclick='alt_tag_lib("+jcc+")'
					{
				Alt_Tag_Image_Data[jcc] = speech_atl;
				Alt_Tag_Image_name[jcc]	= sSelections[jcc][snglBld[jcc]][0].talking_head_image;	
						
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='talkingheads'><img src='"+img_loc+"" + sBubble_Text_Array[0] +"' alt='Select image for more informtion' role='button' onclick='alt_tag_lib("+jcc+")'></div>  <div align='center' class='col-lg-12 col-md-12 col-xs-12'><div align='left' class='col-lg-6 col-md-6 col-xs-6'><button id='bub_prev_buton"+jcc+"' style='display:none' onclick='bub_Back("+jcc+");' class='btn-primary bbl_btns' type='button'>" + bBackButton + "</button></div><div align='right' class='col-lg-6 col-md-6 col-xs-6'><button id='bub_next_button"+jcc+"' onclick='bub_Next("+jcc+");' class='btn-primary bbl_btns' type='button'>" + bStartButton + "</button></div></div>"; // Brian 20200117 Hard-coded "Start, Next, Back" now a variables for translation
					}				
			}
											
/*				
		if(typeof sSelections[jcc][snglBld[jcc]][0].image_w_text_tag === "undefined")
			{
				ADA_check_Array[jcc] =  sSelections[jcc][snglBld[jcc]][0].image_name + " needs the Alt tag fields added."
			}
	//-----------------		
			
				if(typeof sSelections[jcc][snglBld[jcc]][0].image_w_text_tag !== "undefined")
					{
						if(sSelections[jcc][snglBld[jcc]][0].image_w_text_tag.length <= 125)
							{
								
							}
						if(sSelections[jcc][snglBld[jcc]][0].image_w_text_tag.length > 125)
							{
								
					Alt_Tag_Image_Data[jcc] = sSelections[jcc][snglBld[jcc]][0].image_w_text_tag;
								
							}
					}	
					
					
					jcc_data[0].talking_head_image_alt
*/											
	

										
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div></div></div>";											
									break;		
											
//-------------------------------------------------------------------------------------------------------------	
//-------<( Speech Bubble code end )>-------											
//-------------------------------------------------------------------------------------------------------------									

//-------------------------------------------------------------------------------------------------------------	
//-------<( Image with text and a list code begin )>-------		11/22/2019 last updated									
//-------------------------------------------------------------------------------------------------------------												
										case "image_w_text": // SA
		
		/*									
											
				if($(document).width() <= 414)
			{
				top_bot_img = "100%";
				
			}	
		*/
		
		var image_left = "";
		var image_right = "";
		var iwt_string = [];									
		var iwt_whole_array = [[],[]];									
					
		//alert("color = :" +sSelections[jcc][snglBld[jcc]][7].background_color);
			
		
		//console.log("▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄")
		//console.log("SA IWTL Image = "+ img_loc + sSelections[jcc][snglBld[jcc]][0].image_name);
		//console.log("▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄")

		img_w_text_img_array[jcc] = img_loc + sSelections[jcc][snglBld[jcc]][0].image_name;

		Jcc_Comp_Maker = Jcc_Comp_Maker + "<div width='100%' class='col-lg-12 col-md-12 col-xs-12' style='background-color:"+sSelections[jcc][snglBld[jcc]][7].background_color+"; margin-top: " + sSelections[jcc][snglBld[jcc]][6].snippet_top_margin + "'>";									
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='max-width:1400px;'>";
											
											
				for(var itl = 0; itl < sSelections[jcc][snglBld[jcc]].length; itl++)
					{
									iwt_string[itl] = String(Object.keys(sSelections[jcc][snglBld[jcc]][itl])); 
									iwt_whole_array[itl] = (iwt_string[itl].split(","));
					}
//========================
				lstyp = sSelections[jcc][snglBld[jcc]][3][iwt_whole_array[3][4]];
						switch(lstyp)
							{
								case "ul":
									lst_style = sSelections[jcc][snglBld[jcc]][3][iwt_whole_array[3][5]];
								break;
									
								case "ol":
									lst_style = sSelections[jcc][snglBld[jcc]][3][iwt_whole_array[3][6]];
								break;	
							}											
Img_List_Maker = "<div>";

											
Img_List_Maker = "<div id='img_list_"+jcc+"' align='left' style='margin-top:"+sSelections[jcc][snglBld[jcc]][3][iwt_whole_array[3][3]]+";'>";											
	Img_List_Maker = Img_List_Maker + "<"+lstyp+" type='"+lst_style+"' style='list-style-type:"+lst_style+";'>";
											
			if(typeof sSelections[jcc][snglBld[jcc]][3][iwt_whole_array[3][1]] !== "undefined")
				{
											
				for(var itl_list = 0; itl_list < sSelections[jcc][snglBld[jcc]][3][iwt_whole_array[3][1]].length; itl_list++)
					{
						// Added Color to #000000 by Jack on 03/25/2020
						Img_List_Maker = Img_List_Maker + "<li style='margin-left:40px;color:#000000'><"+sSelections[jcc][snglBld[jcc]][5][iwt_whole_array[5][1]]+">"+sSelections[jcc][snglBld[jcc]][3][iwt_whole_array[3][1]][itl_list].img_lstText+"</"+sSelections[jcc][snglBld[jcc]][5][iwt_whole_array[5][1]]+"></li>";
	
					}
				}	
				Img_List_Maker = Img_List_Maker + "</"+lstyp+">";
											
	Img_List_Maker = Img_List_Maker +  "</div>";
							
//Img_List_Maker = Img_List_Maker +  "</div>";
											
											
//========================											
				
											
		if($(document).width() >= 414)
			{
				top_bot_img = sSelections[jcc][snglBld[jcc]][2][iwt_whole_array[2][0]];
							  
			}
											
		if($(document).width() <= 414)
			{
				top_bot_img = "100%";
				
			}												
										

function iwt_text()
		{
					if(typeof sSelections[jcc][snglBld[jcc]][3][iwt_whole_array[3][2]] === "undefined")
					{
						switch(sSelections[jcc][snglBld[jcc]][1].image_position)
							{
								case "left":
									//alert("image Left");
									//alert( sSelections[jcc][snglBld[jcc]][3].image_text )
									
									////Jcc_Comp_Maker = Jcc_Comp_Maker + "<div width='100%' style='font-style:"+sSelections[jcc][snglBld[jcc]][4][iwt_whole_array[4][1]]+";font-variant:"+sSelections[jcc][snglBld[jcc]][4][iwt_whole_array[4][2]]+";font-weight:"+sSelections[jcc][snglBld[jcc]][4][iwt_whole_array[4][3]]+"; color:"+sSelections[jcc][snglBld[jcc]][4][iwt_whole_array[4][0]]+";text-align: "+ sSelections[jcc][snglBld[jcc]][5][iwt_whole_array[5][0]] +";'><"+sSelections[jcc][snglBld[jcc]][3].image_text+"></div>";
								break;
									
								case "right":
									////alert("image Right");
									//Jcc_Comp_Maker = Jcc_Comp_Maker + "<div width='100%' style='font-style:"+sSelections[jcc][snglBld[jcc]][4][iwt_whole_array[4][1]]+";font-variant:"+sSelections[jcc][snglBld[jcc]][4][iwt_whole_array[4][2]]+";font-weight:"+sSelections[jcc][snglBld[jcc]][4][iwt_whole_array[4][3]]+"; color:"+sSelections[jcc][snglBld[jcc]][4][iwt_whole_array[4][0]]+";text-align: "+ sSelections[jcc][snglBld[jcc]][5][iwt_whole_array[5][0]] +";'><"+sSelections[jcc][snglBld[jcc]][3].image_text+"></div>";
									
									//Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='margin-top:"+sSelections[jcc][snglBld[jcc]][3][iwt_whole_array[3][12]]+";font-style:"+sSelections[jcc][snglBld[jcc]][4][iwt_whole_array[4][1]]+";font-variant:"+sSelections[jcc][snglBld[jcc]][4][iwt_whole_array[4][2]]+";font-weight:"+sSelections[jcc][snglBld[jcc]][4][iwt_whole_array[4][3]]+"; color:"+sSelections[jcc][snglBld[jcc]][4][iwt_whole_array[4][0]]+";text-align: "+ sSelections[jcc][snglBld[jcc]][5][iwt_whole_array[5][0]] +";'><"+sSelections[jcc][snglBld[jcc]][5][iwt_whole_array[5][1]]+">" + sSelections[jcc][snglBld[jcc]][3][iwt_whole_array[3][11]] + "</"+sSelections[jcc][snglBld[jcc]][5][iwt_whole_array[5][1]]+"></div>";									
								break;	
							}
					}
		
						if(typeof sSelections[jcc][snglBld[jcc]][3][iwt_whole_array[3][2]] !== "undefined")		
							{	
								
							if(sSelections[jcc][snglBld[jcc]][3][iwt_whole_array[3][2]] === "top")
								{
									

									Jcc_Comp_Maker = Jcc_Comp_Maker + Img_List_Maker;
									
								}	
							}	
			
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='jb_mx_wd' style='font-style:"+sSelections[jcc][snglBld[jcc]][4][iwt_whole_array[4][1]]+";font-variant:"+sSelections[jcc][snglBld[jcc]][4][iwt_whole_array[4][2]]+";font-weight:"+sSelections[jcc][snglBld[jcc]][4][iwt_whole_array[4][3]]+"; color:"+sSelections[jcc][snglBld[jcc]][4][iwt_whole_array[4][0]]+";text-align: "+ sSelections[jcc][snglBld[jcc]][5][iwt_whole_array[5][0]] +";'><"+sSelections[jcc][snglBld[jcc]][5][iwt_whole_array[5][1]]+">" + sSelections[jcc][snglBld[jcc]][3][iwt_whole_array[3][0]] + "</"+sSelections[jcc][snglBld[jcc]][5][iwt_whole_array[5][1]]+"></div>";
			
					
						if(typeof sSelections[jcc][snglBld[jcc]][3][iwt_whole_array[3][2]] !== "undefined")		
							{	
								
							if(sSelections[jcc][snglBld[jcc]][3][iwt_whole_array[3][2]] === "bottom")
								{
									
									Jcc_Comp_Maker = Jcc_Comp_Maker + Img_List_Maker;
	
								}	
							}
			if(typeof sSelections[jcc][snglBld[jcc]][3][iwt_whole_array[3][11]] !== "undefined")
				{
			
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='jb_mx_wd' style='margin-top:"+sSelections[jcc][snglBld[jcc]][3][iwt_whole_array[3][12]]+";font-style:"+sSelections[jcc][snglBld[jcc]][4][iwt_whole_array[4][1]]+";font-variant:"+sSelections[jcc][snglBld[jcc]][4][iwt_whole_array[4][2]]+";font-weight:"+sSelections[jcc][snglBld[jcc]][4][iwt_whole_array[4][3]]+"; color:"+sSelections[jcc][snglBld[jcc]][4][iwt_whole_array[4][0]]+";text-align: "+ sSelections[jcc][snglBld[jcc]][5][iwt_whole_array[5][0]] +";'><"+sSelections[jcc][snglBld[jcc]][5][iwt_whole_array[5][1]]+">" + sSelections[jcc][snglBld[jcc]][3][iwt_whole_array[3][11]] + "</"+sSelections[jcc][snglBld[jcc]][5][iwt_whole_array[5][1]]+"></div>";
				}
	
		}

											
											
function img_w_text_tag(iwtt)
		{
			//alert("iwtt: " + iwtt);
			Alt_Tag_Image_Data[jcc] = sSelections[jcc][snglBld[jcc]][0][iwt_whole_array[0][1]]; // image alt tag
			Alt_Tag_Image_name[jcc]	= sSelections[jcc][snglBld[jcc]][0][iwt_whole_array[0][0]];	// image name			
			
			if(typeof iwtt === "undefined")
				{
					//sSelections[jcc][snglBld[jcc]][0][iwt_whole_array[0][1]] = "";
					Jcc_Comp_Maker = Jcc_Comp_Maker + "alt=''>";
				} 
			
			if(typeof iwtt !== "undefined")
				{
			
					if(iwtt.length <= 125)
						{
							//Jcc_Comp_Maker = Jcc_Comp_Maker + "alt='"+sSelections[jcc][snglBld[jcc]][0][iwt_whole_array[0][1]]+"'>";
							Jcc_Comp_Maker = Jcc_Comp_Maker + "alt='Select image to zoom.'role='button' onclick='imlt_zoom("+jcc+",0,100)'>";
						}
					if(iwtt.length > 125)
						{
							/*
							Alt_Tag_Image_Data[jcc] = sSelections[jcc][snglBld[jcc]][0][iwt_whole_array[0][1]]; // image alt tag
							Alt_Tag_Image_name[jcc]	= sSelections[jcc][snglBld[jcc]][0][iwt_whole_array[0][0]];	// image name
							*/
							img_w_text_array[jcc] = Alt_Tag_Image_Data[jcc];

							//console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ img_w_text_array["+jcc+"]" + img_w_text_array[jcc]);
							
// This is where I need to focus on the image zoom
							//Jcc_Comp_Maker = Jcc_Comp_Maker + "alt='Select image for more information.'role='button' onclick='alt_tag_lib("+jcc+")'>";
							Jcc_Comp_Maker = Jcc_Comp_Maker + "alt='Select image to zoom.'role='button' onclick='imlt_zoom("+jcc+",0,100)'>";
							

//-------<( Added by Jack on 11/30/2020. )>-------
//-------<( Updated by James on 1/26/2021. )>-------
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='margin-top:10px; margin-bottom:10px'><button class='btn btn-primary btn-sm' role='button' onclick='iwlt_alt_tag_lib("+jcc+")'>" + imgDescButton + "</button></div>";
//-------<( Added by Jack on 11/30/2020. )>-------							


						}
				}
		}
											

					switch(sSelections[jcc][snglBld[jcc]][1][iwt_whole_array[1][0]]) // Get the image position
						{
							case "left":
		
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<div>";

							
		if($(document).width() > 414)
			{
				Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-6 col-md-6 col-xs-12' align='"+sSelections[jcc][snglBld[jcc]][1].image_aligmnent+"'>";				
			}

		if($(document).width() <= 414) //class='col-lg-12 col-md-12 col-xs-12'
			{
				Jcc_Comp_Maker = Jcc_Comp_Maker + "<div  align='"+sSelections[jcc][snglBld[jcc]][1].image_aligmnent+"'>";				
			}								
						
			
			Jcc_Comp_Maker = Jcc_Comp_Maker + "<img style='margin-top:"+sSelections[jcc][snglBld[jcc]][6][iwt_whole_array[6][0]]+"; border-style:"+sSelections[jcc][snglBld[jcc]][0][iwt_whole_array[0][2]]+"; border-width:"+sSelections[jcc][snglBld[jcc]][0][iwt_whole_array[0][3]]+"; border-color:"+sSelections[jcc][snglBld[jcc]][0][iwt_whole_array[0][4]]+"; border-radius:"+ sSelections[jcc][snglBld[jcc]][8].image_radius +"' src='"+img_loc+"" + sSelections[jcc][snglBld[jcc]][0][iwt_whole_array[0][0]] + "' width=' " + top_bot_img + " ' height='auto' ";					

		    img_w_text_tag(sSelections[jcc][snglBld[jcc]][0][iwt_whole_array[0][1]]);						
			Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";	   
			                                 // place this line before the </div> the div<img alt='Select image for more information' src='"+alt_icon+"' style='position:absolute; top:92%; left: 81%'>
	
		if($(document).width() > 414)
			{						
			Jcc_Comp_Maker = Jcc_Comp_Maker + "<div width='100%' class='col-lg-6 col-md-6 col-xs-12' style='padding:"+sSelections[jcc][snglBld[jcc]][4][iwt_whole_array[4][5]]+"; margin-top:"+sSelections[jcc][snglBld[jcc]][4][iwt_whole_array[4][4]]+"; border-style:"+sSelections[jcc][snglBld[jcc]][3][iwt_whole_array[3][8]]+"; border-width:"+sSelections[jcc][snglBld[jcc]][3][iwt_whole_array[3][9]]+"; border-color:"+sSelections[jcc][snglBld[jcc]][3][iwt_whole_array[3][10]]+"'>";		
			}

		if($(document).width() <= 414) //class='col-lg-12 col-md-12 col-xs-12'
			{	
				
				
				
			Jcc_Comp_Maker = Jcc_Comp_Maker + "<div width='100%' style='padding:"+sSelections[jcc][snglBld[jcc]][4][iwt_whole_array[4][5]]+"; margin-top:"+sSelections[jcc][snglBld[jcc]][4][iwt_whole_array[4][4]]+"; border-style:"+sSelections[jcc][snglBld[jcc]][3][iwt_whole_array[3][8]]+"; border-width:"+sSelections[jcc][snglBld[jcc]][3][iwt_whole_array[3][9]]+"; border-color:"+sSelections[jcc][snglBld[jcc]][3][iwt_whole_array[3][10]]+"'>";						
			}
		iwt_text();			

								
		Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
								
		Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";						
								
								
							break;
								
							case "right":
			
				if(typeof sSelections[jcc][snglBld[jcc]][0].mobile_override !== "undefined")
					{
							
						//alert(sSelections[jcc][snglBld[jcc]][0].mobile_override);
							if(sSelections[jcc][snglBld[jcc]][0].mobile_override === "top")
									{
										if($(document).width() <= 414)
										{						
											Jcc_Comp_Maker = Jcc_Comp_Maker + "<div>";
											
											//if($(document).width() <= 414) //class='col-lg-12 col-md-12 col-xs-12'
											//	{
													Jcc_Comp_Maker = Jcc_Comp_Maker + "<div  align='"+sSelections[jcc][snglBld[jcc]][1].image_aligmnent+"'>";				
											//	}								


												Jcc_Comp_Maker = Jcc_Comp_Maker + "<img style='margin-top:"+sSelections[jcc][snglBld[jcc]][6][iwt_whole_array[6][0]]+"; border-style:"+sSelections[jcc][snglBld[jcc]][0][iwt_whole_array[0][2]]+"; border-width:"+sSelections[jcc][snglBld[jcc]][0][iwt_whole_array[0][3]]+"; border-color:"+sSelections[jcc][snglBld[jcc]][0][iwt_whole_array[0][4]]+"; border-radius:"+ sSelections[jcc][snglBld[jcc]][8].image_radius +"' src='"+img_loc+"" + sSelections[jcc][snglBld[jcc]][0][iwt_whole_array[0][0]] + "' width=' " + top_bot_img + " ' height='auto' ";					

												img_w_text_tag(sSelections[jcc][snglBld[jcc]][0][iwt_whole_array[0][1]]);						
												Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";	

											//if($(document).width() <= 414) //class='col-lg-12 col-md-12 col-xs-12'
											//	{	



												Jcc_Comp_Maker = Jcc_Comp_Maker + "<div width='100%' style='padding:"+sSelections[jcc][snglBld[jcc]][4][iwt_whole_array[4][5]]+"; margin-top:"+sSelections[jcc][snglBld[jcc]][4][iwt_whole_array[4][4]]+"; border-style:"+sSelections[jcc][snglBld[jcc]][3][iwt_whole_array[3][8]]+"; border-width:"+sSelections[jcc][snglBld[jcc]][3][iwt_whole_array[3][9]]+"; border-color:"+sSelections[jcc][snglBld[jcc]][3][iwt_whole_array[3][10]]+"'>";						
											//	}
											iwt_text();			


											Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";

											Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";									
										}
										
										if($(document).width() > 414)
										{
////////////////////////////////////////////////
								
//if($(document).width() > 414)								
//			{					
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<div width='100%' class='col-lg-6 col-md-6 col-xs-12' style='padding:"+sSelections[jcc][snglBld[jcc]][4][iwt_whole_array[4][5]]+"; margin-top:"+sSelections[jcc][snglBld[jcc]][4][iwt_whole_array[4][4]]+"; border-style:"+sSelections[jcc][snglBld[jcc]][3][iwt_whole_array[3][8]]+"; border-width:"+sSelections[jcc][snglBld[jcc]][3][iwt_whole_array[3][9]]+"; border-color:"+sSelections[jcc][snglBld[jcc]][3][iwt_whole_array[3][10]]+"'>";						
//			}


		iwt_text();			

								
		Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
								
//if($(document).width() > 414)								
//			{		
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-6 col-md-6 col-xs-12' align='"+sSelections[jcc][snglBld[jcc]][1].image_aligmnent+"'>";						
//			}

							
								
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<img style='margin-top:"+sSelections[jcc][snglBld[jcc]][6][iwt_whole_array[6][0]]+"; border-style:"+sSelections[jcc][snglBld[jcc]][0][iwt_whole_array[0][2]]+"; border-width:"+sSelections[jcc][snglBld[jcc]][0][iwt_whole_array[0][3]]+"; border-color:"+sSelections[jcc][snglBld[jcc]][0][iwt_whole_array[0][4]]+"; border-radius:"+ sSelections[jcc][snglBld[jcc]][8].image_radius +"' src='"+img_loc+"" + sSelections[jcc][snglBld[jcc]][0][iwt_whole_array[0][0]] + "' width=' " + top_bot_img + " ' height='auto' ";
	
		img_w_text_tag(sSelections[jcc][snglBld[jcc]][0][iwt_whole_array[0][1]]);						
	    Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";	

////////////////////////////////////////////////
										}
									}
					}
								
							
								
				if(typeof sSelections[jcc][snglBld[jcc]][0].mobile_override === "undefined")
					{								
								
								
								
if($(document).width() > 414)								
			{					
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<div width='100%' class='col-lg-6 col-md-6 col-xs-12' style='padding:"+sSelections[jcc][snglBld[jcc]][4][iwt_whole_array[4][5]]+"; margin-top:"+sSelections[jcc][snglBld[jcc]][4][iwt_whole_array[4][4]]+"; border-style:"+sSelections[jcc][snglBld[jcc]][3][iwt_whole_array[3][8]]+"; border-width:"+sSelections[jcc][snglBld[jcc]][3][iwt_whole_array[3][9]]+"; border-color:"+sSelections[jcc][snglBld[jcc]][3][iwt_whole_array[3][10]]+"'>";						
			}

if($(document).width() <= 414)								
			{
		// class='col-lg-12 col-md-12 col-xs-12'	
			//alert("mobile_override");

				
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<div width='100%'  style='padding:"+sSelections[jcc][snglBld[jcc]][4][iwt_whole_array[4][5]]+"; margin-top:"+sSelections[jcc][snglBld[jcc]][4][iwt_whole_array[4][4]]+"; border-style:"+sSelections[jcc][snglBld[jcc]][3][iwt_whole_array[3][8]]+"; border-width:"+sSelections[jcc][snglBld[jcc]][3][iwt_whole_array[3][9]]+"; border-color:"+sSelections[jcc][snglBld[jcc]][3][iwt_whole_array[3][10]]+"'>";
			}
		iwt_text();			

								
		Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
								
if($(document).width() > 414)								
			{		
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-6 col-md-6 col-xs-12' align='"+sSelections[jcc][snglBld[jcc]][1].image_aligmnent+"'>";						
			}

if($(document).width() <= 414)		//class='col-lg-12 col-md-12 col-xs-12'						
			{		
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<div  align='"+sSelections[jcc][snglBld[jcc]][1].image_aligmnent+"'>";						
			}								
								
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<img style='margin-top:"+sSelections[jcc][snglBld[jcc]][6][iwt_whole_array[6][0]]+"; border-style:"+sSelections[jcc][snglBld[jcc]][0][iwt_whole_array[0][2]]+"; border-width:"+sSelections[jcc][snglBld[jcc]][0][iwt_whole_array[0][3]]+"; border-color:"+sSelections[jcc][snglBld[jcc]][0][iwt_whole_array[0][4]]+"; border-radius:"+ sSelections[jcc][snglBld[jcc]][8].image_radius +"' src='"+img_loc+"" + sSelections[jcc][snglBld[jcc]][0][iwt_whole_array[0][0]] + "' width=' " + top_bot_img + " ' height='auto' ";
	
		img_w_text_tag(sSelections[jcc][snglBld[jcc]][0][iwt_whole_array[0][1]]);						
	    Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";									
					}
							break;
								
							case "top":
								
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<div align='"+sSelections[jcc][snglBld[jcc]][1].image_aligmnent+"'><img style='margin-top:"+sSelections[jcc][snglBld[jcc]][6][iwt_whole_array[6][0]]+"; border-style:"+sSelections[jcc][snglBld[jcc]][0][iwt_whole_array[0][2]]+"; border-width:"+sSelections[jcc][snglBld[jcc]][0][iwt_whole_array[0][3]]+"; border-color:"+sSelections[jcc][snglBld[jcc]][0][iwt_whole_array[0][4]]+"; border-radius:"+ sSelections[jcc][snglBld[jcc]][8].image_radius +"' src='"+img_loc+"" + sSelections[jcc][snglBld[jcc]][0][iwt_whole_array[0][0]] + "' width=' " + top_bot_img + " ' height='auto' ";
	
		img_w_text_tag(sSelections[jcc][snglBld[jcc]][0][iwt_whole_array[0][1]]);						
	    Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";								
								


		Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='jb_mx_wd' align='center' style='padding:"+sSelections[jcc][snglBld[jcc]][4][iwt_whole_array[4][5]]+"; margin-top:"+sSelections[jcc][snglBld[jcc]][4][iwt_whole_array[4][4]]+"; border-style:"+sSelections[jcc][snglBld[jcc]][3][iwt_whole_array[3][8]]+"; border-width:"+sSelections[jcc][snglBld[jcc]][3][iwt_whole_array[3][9]]+"; border-color:"+sSelections[jcc][snglBld[jcc]][3][iwt_whole_array[3][10]]+"'>";						

		iwt_text();			

								
		Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";								
							
							break;
								
							case "bottom":
								
					
								
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='jb_mx_wd' align='center' style='padding:"+sSelections[jcc][snglBld[jcc]][4][iwt_whole_array[4][5]]+"; margin-top:"+sSelections[jcc][snglBld[jcc]][4][iwt_whole_array[4][4]]+"; border-style:"+sSelections[jcc][snglBld[jcc]][3][iwt_whole_array[3][8]]+"; border-width:"+sSelections[jcc][snglBld[jcc]][3][iwt_whole_array[3][9]]+"; border-color:"+sSelections[jcc][snglBld[jcc]][3][iwt_whole_array[3][10]]+"'>";						

					iwt_text();			


		Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";					
					
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<div align='"+sSelections[jcc][snglBld[jcc]][1].image_aligmnent+"'><img style='margin-top:"+sSelections[jcc][snglBld[jcc]][6][iwt_whole_array[6][0]]+"; border-style:"+sSelections[jcc][snglBld[jcc]][0][iwt_whole_array[0][2]]+"; border-width:"+sSelections[jcc][snglBld[jcc]][0][iwt_whole_array[0][3]]+"; border-color:"+sSelections[jcc][snglBld[jcc]][0][iwt_whole_array[0][4]]+"; border-radius:"+ sSelections[jcc][snglBld[jcc]][8].image_radius +"' src='"+img_loc+"" + sSelections[jcc][snglBld[jcc]][0][iwt_whole_array[0][0]] + "' width=' " + top_bot_img + " ' height='auto' ";
	
		img_w_text_tag(sSelections[jcc][snglBld[jcc]][0][iwt_whole_array[0][1]]);						
	    Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";					
							
							break;	
						}
			
											
											
											
			Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";								
			Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";								
				
			//Alt_Tag_Image_Data[jcc]
			//img_w_text_whole[jcc] = Alt_Tag_Image_Data;

			//console.log("▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄")
			//console.log("jcc: " + jcc + " :Alt_Tag_Image_Data: " + Alt_Tag_Image_Data + " / " + img_w_text_whole[jcc]);
			//console.log("▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄")
				
			
			
										break;	
//-------------------------------------------------------------------------------------------------------------	
//-------<( Image with text and a list code end )>-------		11/22/2019 last updated									
//-------------------------------------------------------------------------------------------------------------												
											
											
//-------------------------------------------------------------------------------------------------------------	
//-------<( Old Image with Text code begin )>-------											
//-------------------------------------------------------------------------------------------------------------												
									case "image_w_text_old": //SA max-width:800px;
											
img_list_array = [];
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12' style='margin-top: " + sSelections[jcc][snglBld[jcc]][6].snippet_top_margin + "'>";			
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='max-width:1400px;'>";	//style='max-width:800px;'										
Img_List_Maker = "";
											
									
											
											
		if(typeof sSelections[jcc][snglBld[jcc]][0].image_w_text_tag === "undefined")
			{
				ADA_check_Array[jcc] =  sSelections[jcc][snglBld[jcc]][0].image_name + " needs the Alt tag fields added."
			}	
		
		if($(document).width() >= 414)
			{
				top_bot_img = sSelections[jcc][snglBld[jcc]][2].image_size;
			}
											
		if($(document).width() <= 414)
			{
				top_bot_img = "100%";
			}			

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//-------<(  List code for image_w_text to get list as an array begin  )>-------
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-										
if(typeof sSelections[jcc][snglBld[jcc]][3].image_list !== "undefined")
	{
		for(var img_list_num = 0; img_list_num < sSelections[jcc][snglBld[jcc]][3].image_list.length; img_list_num++)
			{
				img_list_array[img_list_num] = sSelections[jcc][snglBld[jcc]][3].image_list[img_list_num].img_lstText;

				
				if(img_list_num === (sSelections[jcc][snglBld[jcc]][3].image_list.length - 1))
					{
						img_list_marray[jcc] = img_list_array;
						
					}
			}
		
		
		
				switch(sSelections[jcc][snglBld[jcc]][1].image_position)
					{
						case "top":
						case "bottom":  // col-lg-12 col-md-12 col-xs-12 jb_mx_wd'  Iwtl_mg margin-left:20%;
							Img_List_Maker = "<div class='jb_mx_wd' id='img_list_"+jcc+"' align='left' style='margin-top:"+sSelections[jcc][snglBld[jcc]][3].top_margin+";'>";
      					break;	
							
						case "left":
						case "right":
							// class='col-lg-6 col-md-6 col-xs-12 jb_mx_wd'
							Img_List_Maker = "<div id='img_list_"+jcc+"' align='left' style='margin-top:"+sSelections[jcc][snglBld[jcc]][3].top_margin+";'>";
						break;	
					}

											
					if(typeof img_list_marray[jcc] !== "undefined")
						{
							
						lstyp = sSelections[jcc][snglBld[jcc]][3].Type_of_List;
						switch(lstyp)
							{
								case "ul":
									lst_style = sSelections[jcc][snglBld[jcc]][3].ul_type;
								break;
									
								case "ol":
									lst_style = sSelections[jcc][snglBld[jcc]][3].ol_type;
								break;	
							}		
		

	}	
		//<"+sSelections[jcc][snglBld[jcc]][5].image_font_size+">
		//</"+sSelections[jcc][snglBld[jcc]][5].image_font_size+">

									//Img_List_Maker = "<div id='img_list_"+jcc+"' class='col-lg-6 col-md-6 col-xs-12 jb_mx_wd' align='left' style='margin-top:"+sSelections[jcc][snglBld[jcc]][3].top_margin+";'>";
									

									Img_List_Maker = Img_List_Maker + "<"+lstyp+" type='"+lst_style+"' style='list-style-type:"+lst_style+";'>";	
							
										for(var mila = 0; mila < img_list_marray[jcc].length; mila++)
											{
												Img_List_Maker = Img_List_Maker + "<li style='margin-left:40px;'><"+sSelections[jcc][snglBld[jcc]][5].image_font_size+">"+img_list_marray[jcc][mila]+"</"+sSelections[jcc][snglBld[jcc]][5].image_font_size+"></li>";
											}
									Img_List_Maker = Img_List_Maker + "</"+lstyp+">";
									Img_List_Maker = Img_List_Maker + "</div>";
		
						}												
											
											
										
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//-------<(   List code for image_w_text to get list as an array end   )>-------
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-											
											
		switch(sSelections[jcc][snglBld[jcc]][1].image_position)
			{
				case "top": //align='sSelections[jcc][snglBld[jcc]][0].image_aligmnent'
				//jb_column1
					
	//Need to add margin top for the image				
	//margin-top:"+sSelections[jcc][snglBld[jcc]][4].image_text_top_margin+";				
					
			if(typeof sSelections[jcc][snglBld[jcc]][0].image_w_text_tag === "undefined")
					{
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div align='"+sSelections[jcc][snglBld[jcc]][1].image_aligmnent+"' style='text-align:"+sSelections[jcc][snglBld[jcc]][1].image_aligmnent+"'><img style='margin-top:"+sSelections[jcc][snglBld[jcc]][6].top_margin+"; border-style:"+sSelections[jcc][snglBld[jcc]][0].border_style+"; border-width:"+sSelections[jcc][snglBld[jcc]][0].border_height+"; border-color:"+sSelections[jcc][snglBld[jcc]][0].border_color+"; border-radius:"+ sSelections[jcc][snglBld[jcc]][8].image_radius +"' src='"+img_loc+"" + sSelections[jcc][snglBld[jcc]][0].image_name + "' width=' " + top_bot_img + " ' height='auto' alt=''>";
					//sSelections[jcc][snglBld[jcc]][2].image_size
					Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";	
						
					}
					
			if(typeof sSelections[jcc][snglBld[jcc]][0].image_w_text_tag !== "undefined")
					{
						if(sSelections[jcc][snglBld[jcc]][0].image_w_text_tag.length <= 125)
							{
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div align='"+sSelections[jcc][snglBld[jcc]][1].image_aligmnent+"' style='text-align:"+sSelections[jcc][snglBld[jcc]][1].image_aligmnent+"'><img style='margin-top:"+sSelections[jcc][snglBld[jcc]][6].top_margin+"; border-style:"+sSelections[jcc][snglBld[jcc]][0].border_style+"; border-width:"+sSelections[jcc][snglBld[jcc]][0].border_height+"; border-color:"+sSelections[jcc][snglBld[jcc]][0].border_color+"; border-radius:"+ sSelections[jcc][snglBld[jcc]][8].image_radius +"' src='"+img_loc+"" + sSelections[jcc][snglBld[jcc]][0].image_name + "' width=' " + top_bot_img + " ' height='auto' alt='"+sSelections[jcc][snglBld[jcc]][0].image_w_text_tag+"'>";
					Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";				
								
							}
						
			if(sSelections[jcc][snglBld[jcc]][0].image_w_text_tag.length > 125)
							{
								
					Alt_Tag_Image_Data[jcc] = sSelections[jcc][snglBld[jcc]][0].image_w_text_tag;
					Alt_Tag_Image_name[jcc]	= sSelections[jcc][snglBld[jcc]][0].image_name;		
								//alert("Alt_Tag_Image_Data[jcc]: " + Alt_Tag_Image_Data[jcc]);
								
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div align='"+sSelections[jcc][snglBld[jcc]][1].image_aligmnent+"' style='text-align:"+sSelections[jcc][snglBld[jcc]][1].image_aligmnent+"'><img style='margin-top:"+sSelections[jcc][snglBld[jcc]][6].top_margin+"; border-style:"+sSelections[jcc][snglBld[jcc]][0].border_style+"; border-width:"+sSelections[jcc][snglBld[jcc]][0].border_height+"; border-color:"+sSelections[jcc][snglBld[jcc]][0].border_color+"; border-radius:"+ sSelections[jcc][snglBld[jcc]][8].image_radius +"' src='"+img_loc+"" + sSelections[jcc][snglBld[jcc]][0].image_name + "' width=' " + top_bot_img + " ' height='auto' alt='Select image for more information.' role='button' onclick='alt_tag_lib("+jcc+")'>";		
					Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";				
							}
						
					}

					
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='jb_column1' style='border-style:"+sSelections[jcc][snglBld[jcc]][3].list_border_style+"; border-width:"+sSelections[jcc][snglBld[jcc]][3].list_border_height+"; border-color:"+sSelections[jcc][snglBld[jcc]][3].list_border_color+"'>";
					
							if(sSelections[jcc][snglBld[jcc]][3].list_position === "top")
							{
								Jcc_Comp_Maker = Jcc_Comp_Maker + Img_List_Maker;
							}	
					//class='jb_mx_wd'  margin-left:20%;
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='jb_mx_wd' style='font-style:"+sSelections[jcc][snglBld[jcc]][4].image_text_style+";font-variant:"+sSelections[jcc][snglBld[jcc]][4].image_text_variant+";font-weight:"+sSelections[jcc][snglBld[jcc]][4].image_text_weight+"; color:"+sSelections[jcc][snglBld[jcc]][4].image_text_color+";text-align: "+ sSelections[jcc][snglBld[jcc]][5].image_text_alignmnet +";'><"+sSelections[jcc][snglBld[jcc]][5].image_font_size+">" + sSelections[jcc][snglBld[jcc]][3].image_text + "</"+sSelections[jcc][snglBld[jcc]][5].image_font_size+"></div>";
					

							if(sSelections[jcc][snglBld[jcc]][3].list_position === "bottom")
							{
								Jcc_Comp_Maker = Jcc_Comp_Maker + Img_List_Maker;
							}
					
					
			if(typeof sSelections[jcc][snglBld[jcc]][3].image_text_below !== "undefined")
				{
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='jb_mx_wd' style='font-style:"+sSelections[jcc][snglBld[jcc]][4].image_text_style+";font-variant:"+sSelections[jcc][snglBld[jcc]][4].image_text_variant+";font-weight:"+sSelections[jcc][snglBld[jcc]][4].image_text_weight+"; color:"+sSelections[jcc][snglBld[jcc]][4].image_text_color+";text-align: "+ sSelections[jcc][snglBld[jcc]][5].image_text_alignmnet +";'><"+sSelections[jcc][snglBld[jcc]][5].image_font_size+">" + sSelections[jcc][snglBld[jcc]][3].image_text_below + "</"+sSelections[jcc][snglBld[jcc]][5].image_font_size+"></div>";
				}	

					
					Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
					
					
					
					
					
				break;
					
				case "bottom": //align='sSelections[jcc][snglBld[jcc]][0].image_aligmnent'
					
		if(screen.width <= 540)
			{
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='jb_column1' style='border-style:"+sSelections[jcc][snglBld[jcc]][3].list_border_style+"; border-width:"+sSelections[jcc][snglBld[jcc]][3].list_border_height+"; border-color:"+sSelections[jcc][snglBld[jcc]][3].list_border_color+"'>";
					
							if(sSelections[jcc][snglBld[jcc]][3].list_position === "top")
							{
								Jcc_Comp_Maker = Jcc_Comp_Maker + Img_List_Maker;
							}	
					
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='jb_mx_wd' style='font-style:"+sSelections[jcc][snglBld[jcc]][4].image_text_style+";font-variant:"+sSelections[jcc][snglBld[jcc]][4].image_text_variant+";font-weight:"+sSelections[jcc][snglBld[jcc]][4].image_text_weight+"; color:"+sSelections[jcc][snglBld[jcc]][4].image_text_color+";text-align: "+ sSelections[jcc][snglBld[jcc]][5].image_text_alignmnet +";'><"+sSelections[jcc][snglBld[jcc]][5].image_font_size+">" + sSelections[jcc][snglBld[jcc]][3].image_text + "</"+sSelections[jcc][snglBld[jcc]][5].image_font_size+"></div>";
					

							if(sSelections[jcc][snglBld[jcc]][3].list_position === "bottom")
							{
								Jcc_Comp_Maker = Jcc_Comp_Maker + Img_List_Maker;
							}
		if(typeof sSelections[jcc][snglBld[jcc]][3].image_text_below !== "undefined")
			{
				Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='jb_mx_wd' style='font-style:"+sSelections[jcc][snglBld[jcc]][4].image_text_style+";font-variant:"+sSelections[jcc][snglBld[jcc]][4].image_text_variant+";font-weight:"+sSelections[jcc][snglBld[jcc]][4].image_text_weight+"; color:"+sSelections[jcc][snglBld[jcc]][4].image_text_color+";text-align: "+ sSelections[jcc][snglBld[jcc]][5].image_text_alignmnet +";'><"+sSelections[jcc][snglBld[jcc]][5].image_font_size+">" + sSelections[jcc][snglBld[jcc]][3].image_text_below + "</"+sSelections[jcc][snglBld[jcc]][5].image_font_size+"></div>";				
			}		
					Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";	
				if(typeof sSelections[jcc][snglBld[jcc]][0].image_w_text_tag === "undefined")
					{
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div align='"+sSelections[jcc][snglBld[jcc]][1].image_aligmnent+"' style='text-align:"+sSelections[jcc][snglBld[jcc]][1].image_aligmnent+"'><img style='margin-top:"+sSelections[jcc][snglBld[jcc]][6].top_margin+"; border-style:"+sSelections[jcc][snglBld[jcc]][0].border_style+"; border-width:"+sSelections[jcc][snglBld[jcc]][0].border_height+"; border-color:"+sSelections[jcc][snglBld[jcc]][0].border_color+"; border-radius:"+ sSelections[jcc][snglBld[jcc]][8].image_radius +"' src='"+img_loc+"" + sSelections[jcc][snglBld[jcc]][0].image_name + "' width=' " + top_bot_img + " ' height='auto' alt=''></div>";							
					}
					
				if(typeof sSelections[jcc][snglBld[jcc]][0].image_w_text_tag !== "undefined")
					{
						if(sSelections[jcc][snglBld[jcc]][0].image_w_text_tag.length <= 125)
							{
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div align='"+sSelections[jcc][snglBld[jcc]][1].image_aligmnent+"' style='text-align:"+sSelections[jcc][snglBld[jcc]][1].image_aligmnent+"'><img style='margin-top:"+sSelections[jcc][snglBld[jcc]][6].top_margin+"; border-style:"+sSelections[jcc][snglBld[jcc]][0].border_style+"; border-width:"+sSelections[jcc][snglBld[jcc]][0].border_height+"; border-color:"+sSelections[jcc][snglBld[jcc]][0].border_color+"; border-radius:"+ sSelections[jcc][snglBld[jcc]][8].image_radius +"' src='"+img_loc+"" + sSelections[jcc][snglBld[jcc]][0].image_name + "' width=' " + top_bot_img + " ' height='auto' alt='"+sSelections[jcc][snglBld[jcc]][0].image_w_text_tag+"'></div>";								
							}
						
						if(sSelections[jcc][snglBld[jcc]][0].image_w_text_tag.length > 125)
							{
								
					Alt_Tag_Image_Data[jcc] = sSelections[jcc][snglBld[jcc]][0].image_w_text_tag;
					Alt_Tag_Image_name[jcc] = sSelections[jcc][snglBld[jcc]][0].image_name;		
								
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div align='"+sSelections[jcc][snglBld[jcc]][1].image_aligmnent+"' style='text-align:"+sSelections[jcc][snglBld[jcc]][1].image_aligmnent+"'><img style='margin-top:"+sSelections[jcc][snglBld[jcc]][6].top_margin+"; border-style:"+sSelections[jcc][snglBld[jcc]][0].border_style+"; border-width:"+sSelections[jcc][snglBld[jcc]][0].border_height+"; border-color:"+sSelections[jcc][snglBld[jcc]][0].border_color+"; border-radius:"+ sSelections[jcc][snglBld[jcc]][8].image_radius +"' src='"+img_loc+"" + sSelections[jcc][snglBld[jcc]][0].image_name + "' width=' " + top_bot_img + " ' height='auto' alt='Select image for more information.' role='button' onclick='alt_tag_lib("+jcc+")'></div>";								
							}
						
					}
							
			}
					
		if(screen.width > 540)			
			{														//jb_char_para
					
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='jb_column1' style='border-style:"+sSelections[jcc][snglBld[jcc]][3].list_border_style+"; border-width:"+sSelections[jcc][snglBld[jcc]][3].list_border_height+"; border-color:"+sSelections[jcc][snglBld[jcc]][3].list_border_color+"'>";
					
							if(sSelections[jcc][snglBld[jcc]][3].list_position === "top")
							{
								Jcc_Comp_Maker = Jcc_Comp_Maker + Img_List_Maker;
							}	
					
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='jb_mx_wd' style='font-style:"+sSelections[jcc][snglBld[jcc]][4].image_text_style+";font-variant:"+sSelections[jcc][snglBld[jcc]][4].image_text_variant+";font-weight:"+sSelections[jcc][snglBld[jcc]][4].image_text_weight+"; color:"+sSelections[jcc][snglBld[jcc]][4].image_text_color+";text-align: "+ sSelections[jcc][snglBld[jcc]][5].image_text_alignmnet +";'><"+sSelections[jcc][snglBld[jcc]][5].image_font_size+">" + sSelections[jcc][snglBld[jcc]][3].image_text + "</"+sSelections[jcc][snglBld[jcc]][5].image_font_size+"></div>";
					
	
							if(sSelections[jcc][snglBld[jcc]][3].list_position === "bottom")
							{
								Jcc_Comp_Maker = Jcc_Comp_Maker + Img_List_Maker;
							}					
		if(typeof sSelections[jcc][snglBld[jcc]][3].image_text_below !== "undefined")
			{
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='jb_mx_wd' style='font-style:"+sSelections[jcc][snglBld[jcc]][4].image_text_style+";font-variant:"+sSelections[jcc][snglBld[jcc]][4].image_text_variant+";font-weight:"+sSelections[jcc][snglBld[jcc]][4].image_text_weight+"; color:"+sSelections[jcc][snglBld[jcc]][4].image_text_color+";text-align: "+ sSelections[jcc][snglBld[jcc]][5].image_text_alignmnet +";'><"+sSelections[jcc][snglBld[jcc]][5].image_font_size+">" + sSelections[jcc][snglBld[jcc]][3].image_text_below + "</"+sSelections[jcc][snglBld[jcc]][5].image_font_size+"></div>";	
			}	
				
				
					Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
				
				if(typeof sSelections[jcc][snglBld[jcc]][0].image_w_text_tag === "undefined")
					{
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div align='"+sSelections[jcc][snglBld[jcc]][1].image_aligmnent+"' style='text-align:"+sSelections[jcc][snglBld[jcc]][1].image_aligmnent+"'><img style='margin-top:"+sSelections[jcc][snglBld[jcc]][6].top_margin+"; border-style:"+sSelections[jcc][snglBld[jcc]][0].border_style+"; border-width:"+sSelections[jcc][snglBld[jcc]][0].border_height+"; border-color:"+sSelections[jcc][snglBld[jcc]][0].border_color+"; border-radius:"+ sSelections[jcc][snglBld[jcc]][8].image_radius +"' src='"+img_loc+"" + sSelections[jcc][snglBld[jcc]][0].image_name + "' width=' " + top_bot_img + " ' height='auto' alt=''></div>";							
					}
					
				if(typeof sSelections[jcc][snglBld[jcc]][0].image_w_text_tag !== "undefined")
					{
						if(sSelections[jcc][snglBld[jcc]][0].image_w_text_tag.length <= 125)
							{
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div align='"+sSelections[jcc][snglBld[jcc]][1].image_aligmnent+"' style='text-align:"+sSelections[jcc][snglBld[jcc]][1].image_aligmnent+"'><img style='margin-top:"+sSelections[jcc][snglBld[jcc]][6].top_margin+"; border-style:"+sSelections[jcc][snglBld[jcc]][0].border_style+"; border-width:"+sSelections[jcc][snglBld[jcc]][0].border_height+"; border-color:"+sSelections[jcc][snglBld[jcc]][0].border_color+"; border-radius:"+ sSelections[jcc][snglBld[jcc]][8].image_radius +"' src='"+img_loc+"" + sSelections[jcc][snglBld[jcc]][0].image_name + "' width=' " + top_bot_img + " ' height='auto' alt='"+sSelections[jcc][snglBld[jcc]][0].image_w_text_tag+"'></div>";								
							}
						
						if(sSelections[jcc][snglBld[jcc]][0].image_w_text_tag.length > 125)
							{
					Alt_Tag_Image_Data[jcc] = sSelections[jcc][snglBld[jcc]][0].image_w_text_tag;
					Alt_Tag_Image_name[jcc]	= sSelections[jcc][snglBld[jcc]][0].image_name;		
								
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div align='"+sSelections[jcc][snglBld[jcc]][1].image_aligmnent+"' style='text-align:"+sSelections[jcc][snglBld[jcc]][1].image_aligmnent+"'><img style='margin-top:"+sSelections[jcc][snglBld[jcc]][6].top_margin+"; border-style:"+sSelections[jcc][snglBld[jcc]][0].border_style+"; border-width:"+sSelections[jcc][snglBld[jcc]][0].border_height+"; border-color:"+sSelections[jcc][snglBld[jcc]][0].border_color+"; border-radius:"+ sSelections[jcc][snglBld[jcc]][8].image_radius +"' src='"+img_loc+"" + sSelections[jcc][snglBld[jcc]][0].image_name + "' width=' " + top_bot_img + " ' height='auto' alt='Select image for more information.' role='button' onclick='alt_tag_lib("+jcc+")'></div>";								
							}
					}
			}	
				break; //  style='text-align:"+sSelections[jcc][snglBld[jcc]][1].image_aligmnent+"'
				
				
				case "left":
			
				//alert("sSelections[jcc][snglBld[jcc]][1].image_aligmnent: " + sSelections[jcc][snglBld[jcc]][1].image_aligmnent);
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div>"; //class='col-lg-12 col-md-12 col-xs-12 jc_mi'
		if($(document).width() > 414)
			{				
				if(typeof sSelections[jcc][snglBld[jcc]][0].image_w_text_tag === "undefined")
					{
						

					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-6 col-md-6 col-xs-12' align='"+sSelections[jcc][snglBld[jcc]][1].image_aligmnent+"'><img style='border-style:"+sSelections[jcc][snglBld[jcc]][0].border_style+"; border-width:"+sSelections[jcc][snglBld[jcc]][0].border_height+"; border-color:"+sSelections[jcc][snglBld[jcc]][0].border_color+"; border-radius:"+ sSelections[jcc][snglBld[jcc]][8].image_radius +"' src='"+img_loc+"" + sSelections[jcc][snglBld[jcc]][0].image_name + "' width=' " + top_bot_img + " ' height='auto' alt=''></div>";						
					}

				if(typeof sSelections[jcc][snglBld[jcc]][0].image_w_text_tag !== "undefined")
					{
						if(sSelections[jcc][snglBld[jcc]][0].image_w_text_tag.length <= 125) //sSelections[jcc][snglBld[jcc]][1].image_aligmnent
							{ 
//=========================================================								
//need to add the margin top field data from the json file   margin-top:"+sSelections[jcc][snglBld[jcc]][4].image_text_top_margin+";
//															 margin-top:"+sSelections[jcc][snglBld[jcc]][6].top_margin+";								
//=========================================================								
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-6 col-md-6 col-xs-12' align='"+sSelections[jcc][snglBld[jcc]][1].image_aligmnent+"'><img style='margin-top:"+sSelections[jcc][snglBld[jcc]][6].top_margin+"; border-style:"+sSelections[jcc][snglBld[jcc]][0].border_style+"; border-width:"+sSelections[jcc][snglBld[jcc]][0].border_height+"; border-color:"+sSelections[jcc][snglBld[jcc]][0].border_color+"; border-radius:"+ sSelections[jcc][snglBld[jcc]][8].image_radius +"' src='"+img_loc+"" + sSelections[jcc][snglBld[jcc]][0].image_name + "' width='100%' height='auto' alt='"+sSelections[jcc][snglBld[jcc]][0].image_w_text_tag+"'></div>";							
							}
						if(sSelections[jcc][snglBld[jcc]][0].image_w_text_tag.length > 125)
							{
					Alt_Tag_Image_Data[jcc] = sSelections[jcc][snglBld[jcc]][0].image_w_text_tag;
					Alt_Tag_Image_name[jcc]	= sSelections[jcc][snglBld[jcc]][0].image_name;		
						//alert("Alt_Tag_Image_Data[jcc]: " + Alt_Tag_Image_Data[jcc]);		
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-6 col-md-6 col-xs-12' align='"+sSelections[jcc][snglBld[jcc]][1].image_aligmnent+"'><img style=' border-style:"+sSelections[jcc][snglBld[jcc]][0].border_style+"; border-width:"+sSelections[jcc][snglBld[jcc]][0].border_height+"; border-color:"+sSelections[jcc][snglBld[jcc]][0].border_color+"; border-radius:"+ sSelections[jcc][snglBld[jcc]][8].image_radius +"' src='"+img_loc+"" + sSelections[jcc][snglBld[jcc]][0].image_name + "' width=' " + top_bot_img + " ' height='auto' alt='Select image for more information.' role='button' onclick='alt_tag_lib("+jcc+")'></div>";								
							}
					}					
				//margin-top: "+sSelections[jcc][snglBld[jcc]][4].image_text_top_margin+";
				//margin-top:"+sSelections[jcc][snglBld[jcc]][4].image_text_top_margin+";
				Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-6 col-md-6 col-xs-12 jb_mx_wd' style='margin-top:"+sSelections[jcc][snglBld[jcc]][4].image_text_top_margin+"; border-style:"+sSelections[jcc][snglBld[jcc]][3].list_border_style+"; border-width:"+sSelections[jcc][snglBld[jcc]][3].list_border_height+"; border-color:"+sSelections[jcc][snglBld[jcc]][3].list_border_color+"'>";
							if(sSelections[jcc][snglBld[jcc]][3].list_position === "top")
							{
								Jcc_Comp_Maker = Jcc_Comp_Maker + Img_List_Maker;
							}
				
				//Added on 11/13/2019
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='jb_mx_wd' align='"+sSelections[jcc][snglBld[jcc]][5].image_text_alignmnet+"' style='font-style:"+sSelections[jcc][snglBld[jcc]][4].image_text_style+";font-variant:"+sSelections[jcc][snglBld[jcc]][4].image_text_variant+";font-weight:"+sSelections[jcc][snglBld[jcc]][4].image_text_weight+";color:"+sSelections[jcc][snglBld[jcc]][4].image_text_color+";'><"+sSelections[jcc][snglBld[jcc]][5].image_font_size+">"+sSelections[jcc][snglBld[jcc]][3].image_text+"</"+sSelections[jcc][snglBld[jcc]][5].image_font_size+"></div>";	
				

						
							if(sSelections[jcc][snglBld[jcc]][3].list_position === "bottom")
							{
								Jcc_Comp_Maker = Jcc_Comp_Maker + Img_List_Maker;
							}
			if(typeof sSelections[jcc][snglBld[jcc]][3].image_text_below !== "undefined")
				{
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='jb_mx_wd' align='"+sSelections[jcc][snglBld[jcc]][5].image_text_alignmnet+"' style='font-style:"+sSelections[jcc][snglBld[jcc]][4].image_text_style+";font-variant:"+sSelections[jcc][snglBld[jcc]][4].image_text_variant+";font-weight:"+sSelections[jcc][snglBld[jcc]][4].image_text_weight+";color:"+sSelections[jcc][snglBld[jcc]][4].image_text_color+";'><"+sSelections[jcc][snglBld[jcc]][5].image_font_size+">"+sSelections[jcc][snglBld[jcc]][3].image_text_below+"</"+sSelections[jcc][snglBld[jcc]][5].image_font_size+"></div>";	
				}
				
				Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";	
				
			}
					
		if($(document).width() <= 414)
			{				
				if(typeof sSelections[jcc][snglBld[jcc]][0].image_w_text_tag === "undefined")
					{
						

					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div align='"+sSelections[jcc][snglBld[jcc]][1].image_aligmnent+"'><img style='border-style:"+sSelections[jcc][snglBld[jcc]][0].border_style+"; border-width:"+sSelections[jcc][snglBld[jcc]][0].border_height+"; border-color:"+sSelections[jcc][snglBld[jcc]][0].border_color+"; border-radius:"+ sSelections[jcc][snglBld[jcc]][8].image_radius +"' src='"+img_loc+"" + sSelections[jcc][snglBld[jcc]][0].image_name + "' width=' " + top_bot_img + " ' height='auto' alt=''></div>";						
					}

				if(typeof sSelections[jcc][snglBld[jcc]][0].image_w_text_tag !== "undefined")
					{
						if(sSelections[jcc][snglBld[jcc]][0].image_w_text_tag.length <= 125)
							{
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div'><img style='border-style:"+sSelections[jcc][snglBld[jcc]][0].border_style+"; border-width:"+sSelections[jcc][snglBld[jcc]][0].border_height+"; border-color:"+sSelections[jcc][snglBld[jcc]][0].border_color+"; border-radius:"+ sSelections[jcc][snglBld[jcc]][8].image_radius +"' src='"+img_loc+"" + sSelections[jcc][snglBld[jcc]][0].image_name + "' width=' " + top_bot_img + " ' height='auto' alt='"+sSelections[jcc][snglBld[jcc]][0].image_w_text_tag+"'></div>";							
							}
						if(sSelections[jcc][snglBld[jcc]][0].image_w_text_tag.length > 125)
							{
					Alt_Tag_Image_Data[jcc] = sSelections[jcc][snglBld[jcc]][0].image_w_text_tag;
					Alt_Tag_Image_name[jcc]	= sSelections[jcc][snglBld[jcc]][0].image_name;		
								
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div align='"+sSelections[jcc][snglBld[jcc]][1].image_aligmnent+"'><img style='border-style:"+sSelections[jcc][snglBld[jcc]][0].border_style+"; border-width:"+sSelections[jcc][snglBld[jcc]][0].border_height+"; border-color:"+sSelections[jcc][snglBld[jcc]][0].border_color+"; border-radius:"+ sSelections[jcc][snglBld[jcc]][8].image_radius +"' src='"+img_loc+"" + sSelections[jcc][snglBld[jcc]][0].image_name + "' width=' " + top_bot_img + " ' height='auto' alt='Select image for more information.' role='button' onclick='alt_tag_lib("+jcc+")'></div>";								
							}
					}
				
				
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-6 col-md-6 col-xs-12 jb_mx_wd' style='border-style:"+sSelections[jcc][snglBld[jcc]][3].list_border_style+"; border-width:"+sSelections[jcc][snglBld[jcc]][3].list_border_height+"; border-color:"+sSelections[jcc][snglBld[jcc]][3].list_border_color+"'>";	
				
								if(sSelections[jcc][snglBld[jcc]][3].list_position === "top")
							{
								Jcc_Comp_Maker = Jcc_Comp_Maker + Img_List_Maker;
							}
				//Added on 11/13/2019
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='jb_mx_wd' align='"+sSelections[jcc][snglBld[jcc]][5].image_text_alignmnet+"' style='font-style:"+sSelections[jcc][snglBld[jcc]][4].image_text_style+";font-variant:"+sSelections[jcc][snglBld[jcc]][4].image_text_variant+";font-weight:"+sSelections[jcc][snglBld[jcc]][4].image_text_weight+";color:"+sSelections[jcc][snglBld[jcc]][4].image_text_color+";' width='100%'><"+sSelections[jcc][snglBld[jcc]][5].image_font_size+">"+sSelections[jcc][snglBld[jcc]][3].image_text+"</"+sSelections[jcc][snglBld[jcc]][5].image_font_size+"></div>";				

							
							if(sSelections[jcc][snglBld[jcc]][3].list_position === "bottom")
							{
								Jcc_Comp_Maker = Jcc_Comp_Maker + Img_List_Maker;
							}				
					
			if(typeof sSelections[jcc][snglBld[jcc]][3].image_text_below !== "undefined")
				{
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='jb_mx_wd' align='"+sSelections[jcc][snglBld[jcc]][5].image_text_alignmnet+"' style='font-style:"+sSelections[jcc][snglBld[jcc]][4].image_text_style+";font-variant:"+sSelections[jcc][snglBld[jcc]][4].image_text_variant+";font-weight:"+sSelections[jcc][snglBld[jcc]][4].image_text_weight+";color:"+sSelections[jcc][snglBld[jcc]][4].image_text_color+";'><"+sSelections[jcc][snglBld[jcc]][5].image_font_size+">"+sSelections[jcc][snglBld[jcc]][3].image_text_below+"</"+sSelections[jcc][snglBld[jcc]][5].image_font_size+"></div>";
				}
				
				Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";					
				

			}			
					Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";

				break;	

				
				case "right": 
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div>";//class='col-lg-12 col-md-12 col-xs-12 jc_mi'
					
		if($(document).width() > 414)
			{	

				
				
				//alert(sSelections[jcc][snglBld[jcc]][5].image_text_alignmnet);
				
				//text-align: "+ sSelections[jcc][snglBld[jcc]][5].image_text_alignmnet +";
				
				Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-6 col-md-6 col-xs-12 jb_mx_wd' style='border-style:"+sSelections[jcc][snglBld[jcc]][3].list_border_style+"; border-width:"+sSelections[jcc][snglBld[jcc]][3].list_border_height+"; border-color:"+sSelections[jcc][snglBld[jcc]][3].list_border_color+"'>";				
					//Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-6 col-md-6 col-xs-12 jb_mx_wd'>";
				
							if(sSelections[jcc][snglBld[jcc]][3].list_position === "top")
							{
								Jcc_Comp_Maker = Jcc_Comp_Maker + Img_List_Maker;
							}
				
							Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='jb_mx_wd' align='"+sSelections[jcc][snglBld[jcc]][5].image_text_alignmnet+"' style='font-style:"+sSelections[jcc][snglBld[jcc]][4].image_text_style+";font-variant:"+sSelections[jcc][snglBld[jcc]][4].image_text_variant+";font-weight:"+sSelections[jcc][snglBld[jcc]][4].image_text_weight+";color:"+sSelections[jcc][snglBld[jcc]][4].image_text_color+";'><"+sSelections[jcc][snglBld[jcc]][5].image_font_size+">"+sSelections[jcc][snglBld[jcc]][3].image_text+"</"+sSelections[jcc][snglBld[jcc]][5].image_font_size+"></div>";
				
				
							if(sSelections[jcc][snglBld[jcc]][3].list_position === "bottom")
							{
								Jcc_Comp_Maker = Jcc_Comp_Maker + Img_List_Maker;
							}
				
				if(typeof sSelections[jcc][snglBld[jcc]][3].image_text_below !== "undefined")
					{
							Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='jb_mx_wd' align='"+sSelections[jcc][snglBld[jcc]][5].image_text_alignmnet+"' style='margin-top: "+sSelections[jcc][snglBld[jcc]][4].image_text_top_margin+";font-style:"+sSelections[jcc][snglBld[jcc]][4].image_text_style+";font-variant:"+sSelections[jcc][snglBld[jcc]][4].image_text_variant+";font-weight:"+sSelections[jcc][snglBld[jcc]][4].image_text_weight+";color:"+sSelections[jcc][snglBld[jcc]][4].image_text_color+";'><"+sSelections[jcc][snglBld[jcc]][5].image_font_size+">"+sSelections[jcc][snglBld[jcc]][3].image_text_below+"</"+sSelections[jcc][snglBld[jcc]][5].image_font_size+"></div>";				
					}
				
			
				
					Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
				

				if(typeof sSelections[jcc][snglBld[jcc]][0].image_w_text_tag === "undefined")
					{
						

					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-6 col-md-6 col-xs-12' align='"+sSelections[jcc][snglBld[jcc]][1].image_aligmnent+"'><img style='border-style:"+sSelections[jcc][snglBld[jcc]][0].border_style+"; border-width:"+sSelections[jcc][snglBld[jcc]][0].border_height+"; border-color:"+sSelections[jcc][snglBld[jcc]][0].border_color+"; border-radius:"+ sSelections[jcc][snglBld[jcc]][8].image_radius +"' src='"+img_loc+"" + sSelections[jcc][snglBld[jcc]][0].image_name + "' width=' " + top_bot_img + " ' height='auto' alt=''></div>";						
					}

				if(typeof sSelections[jcc][snglBld[jcc]][0].image_w_text_tag !== "undefined")
					{
						if(sSelections[jcc][snglBld[jcc]][0].image_w_text_tag.length <= 125)
							{
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-6 col-md-6 col-xs-12' align='"+sSelections[jcc][snglBld[jcc]][1].image_aligmnent+"'><img style='border-style:"+sSelections[jcc][snglBld[jcc]][0].border_style+"; border-width:"+sSelections[jcc][snglBld[jcc]][0].border_height+"; border-color:"+sSelections[jcc][snglBld[jcc]][0].border_color+"; border-radius:"+ sSelections[jcc][snglBld[jcc]][8].image_radius +"' src='"+img_loc+"" + sSelections[jcc][snglBld[jcc]][0].image_name + "' width=' " + top_bot_img + " ' height='auto' alt='"+sSelections[jcc][snglBld[jcc]][0].image_w_text_tag+"'></div>";							
							}
						if(sSelections[jcc][snglBld[jcc]][0].image_w_text_tag.length > 125)
							{
					Alt_Tag_Image_Data[jcc] = sSelections[jcc][snglBld[jcc]][0].image_w_text_tag;
					Alt_Tag_Image_name[jcc]	= sSelections[jcc][snglBld[jcc]][0].image_name;		
								
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-6 col-md-6 col-xs-12' align='"+sSelections[jcc][snglBld[jcc]][1].image_aligmnent+"'><img style='border-style:"+sSelections[jcc][snglBld[jcc]][0].border_style+"; border-width:"+sSelections[jcc][snglBld[jcc]][0].border_height+"; border-color:"+sSelections[jcc][snglBld[jcc]][0].border_color+"; border-radius:"+ sSelections[jcc][snglBld[jcc]][8].image_radius +"' src='"+img_loc+"" + sSelections[jcc][snglBld[jcc]][0].image_name + "' width=' " + top_bot_img + " ' height='auto' alt='Select image for more information.' role='button' onclick='alt_tag_lib("+jcc+")'></div>";								
							}
					}					

			}
					
if($(document).width() <= 414)
			{	
					
				Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-6 col-md-6 col-xs-12 jb_mx_wd' style='border-style:"+sSelections[jcc][snglBld[jcc]][3].list_border_style+"; border-width:"+sSelections[jcc][snglBld[jcc]][3].list_border_height+"; border-color:"+sSelections[jcc][snglBld[jcc]][3].list_border_color+"'>";	
				
							if(sSelections[jcc][snglBld[jcc]][3].list_position === "top")
							{
								Jcc_Comp_Maker = Jcc_Comp_Maker + Img_List_Maker;
							}					
				
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='jb_mx_wd' align='"+sSelections[jcc][snglBld[jcc]][5].image_text_alignmnet+"' style='margin-top: "+sSelections[jcc][snglBld[jcc]][4].image_text_top_margin+";font-style:"+sSelections[jcc][snglBld[jcc]][4].image_text_style+";font-variant:"+sSelections[jcc][snglBld[jcc]][4].image_text_variant+";font-weight:"+sSelections[jcc][snglBld[jcc]][4].image_text_weight+";color:"+sSelections[jcc][snglBld[jcc]][4].image_text_color+";'><"+sSelections[jcc][snglBld[jcc]][5].image_font_size+">"+sSelections[jcc][snglBld[jcc]][3].image_text+"</"+sSelections[jcc][snglBld[jcc]][5].image_font_size+"></div>";
				
				
							if(sSelections[jcc][snglBld[jcc]][3].list_position === "bottom")
							{
								Jcc_Comp_Maker = Jcc_Comp_Maker + Img_List_Maker;
							}
			if(typeof sSelections[jcc][snglBld[jcc]][3].image_text_below !== "undefined")
				{
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='jb_mx_wd' align='"+sSelections[jcc][snglBld[jcc]][5].image_text_alignmnet+"' style='margin-top: "+sSelections[jcc][snglBld[jcc]][4].image_text_top_margin+";font-style:"+sSelections[jcc][snglBld[jcc]][4].image_text_style+";font-variant:"+sSelections[jcc][snglBld[jcc]][4].image_text_variant+";font-weight:"+sSelections[jcc][snglBld[jcc]][4].image_text_weight+";color:"+sSelections[jcc][snglBld[jcc]][4].image_text_color+";'><"+sSelections[jcc][snglBld[jcc]][5].image_font_size+">"+sSelections[jcc][snglBld[jcc]][3].image_text_below+"</"+sSelections[jcc][snglBld[jcc]][5].image_font_size+"></div>";			
				}
					Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";	

				if(typeof sSelections[jcc][snglBld[jcc]][0].image_w_text_tag === "undefined")
					{
						

					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div align='"+sSelections[jcc][snglBld[jcc]][1].image_aligmnent+"'><img style='border-style:"+sSelections[jcc][snglBld[jcc]][0].border_style+"; border-width:"+sSelections[jcc][snglBld[jcc]][0].border_height+"; border-color:"+sSelections[jcc][snglBld[jcc]][0].border_color+"; border-radius:"+ sSelections[jcc][snglBld[jcc]][8].image_radius +"' src='"+img_loc+"" + sSelections[jcc][snglBld[jcc]][0].image_name + "' width=' " + top_bot_img + " ' height='auto' alt=''></div>";						
					}

				if(typeof sSelections[jcc][snglBld[jcc]][0].image_w_text_tag !== "undefined")
					{
						if(sSelections[jcc][snglBld[jcc]][0].image_w_text_tag.length <= 125)
							{
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div' align='"+sSelections[jcc][snglBld[jcc]][1].image_aligmnent+"'><img style='border-style:"+sSelections[jcc][snglBld[jcc]][0].border_style+"; border-width:"+sSelections[jcc][snglBld[jcc]][0].border_height+"; border-color:"+sSelections[jcc][snglBld[jcc]][0].border_color+"; border-radius:"+ sSelections[jcc][snglBld[jcc]][8].image_radius +"' src='"+img_loc+"" + sSelections[jcc][snglBld[jcc]][0].image_name + "' width=' " + top_bot_img + " ' height='auto' alt='"+sSelections[jcc][snglBld[jcc]][0].image_w_text_tag+"'></div>";							
							}
						if(sSelections[jcc][snglBld[jcc]][0].image_w_text_tag.length > 125)
							{
					Alt_Tag_Image_Data[jcc] = sSelections[jcc][snglBld[jcc]][0].image_w_text_tag;
					Alt_Tag_Image_name[jcc]	= sSelections[jcc][snglBld[jcc]][0].image_name;		
								
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div align='"+sSelections[jcc][snglBld[jcc]][1].image_aligmnent+"'><img style='border-style:"+sSelections[jcc][snglBld[jcc]][0].border_style+"; border-width:"+sSelections[jcc][snglBld[jcc]][0].border_height+"; border-color:"+sSelections[jcc][snglBld[jcc]][0].border_color+"; border-radius:"+ sSelections[jcc][snglBld[jcc]][8].image_radius +"' src='"+img_loc+"" + sSelections[jcc][snglBld[jcc]][0].image_name + "' width=' " + top_bot_img + " ' height='auto' alt='Select image for more information.' role='button' onclick='alt_tag_lib("+jcc+")'></div>";								
							}
					}					
					
			}					
				
					Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";			

					
				break;
					
					
			}
			Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
				Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";	//</div>							
									break;		
//-------------------------------------------------------------------------------------------------------------	
//-------<( Image with text code end )>-------											
//-------------------------------------------------------------------------------------------------------------												


				
					
//-------------------------------------------------------------------------------------------------------------	
//-------<( List Text Paragraph code begin )>-------	SA										
//-------------------------------------------------------------------------------------------------------------

									
case "List_text_paragraph": // SA

var list_bdr = "";
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12' style='background-color:"+sSelections[jcc][snglBld[jcc]][5].background_color+"; margin-top:" + sSelections[jcc][snglBld[jcc]][4].top_margin+";'>"; //padding:20px ;
																					//"+ sSelections[jcc][snglBld[jcc]][6].padding +"
										
//Jcc_Comp_Maker = Jcc_Comp_Maker + "<"+ sSelections[jcc][snglBld[jcc]][3].Type_of_List +" type='"+sSelections[jcc][snglBld[jcc]][3].ol_type+"' style='list-style-type:"+sSelections[jcc][snglBld[jcc]][3].ul_type+"'>"; 											

/*
									"border_color":"red",
									"border_weight":"4px",
									"border_style":"dashed",
*/

											
if(typeof sSelections[jcc][snglBld[jcc]][0].border_type !== "undefined")
		{
			
			
			switch(sSelections[jcc][snglBld[jcc]][0].border_type)
				{
					case "TB":
							//console.log(sSelections[jcc][snglBld[jcc]][0].border_type);
			list_bdr = "border-style:"+sSelections[jcc][snglBld[jcc]][0].border_style+" none "+sSelections[jcc][snglBld[jcc]][0].border_style+" none";
						
					//		console.log(list_bdr);
						
					break;
						
					case "Whole":
							//console.log(sSelections[jcc][snglBld[jcc]][0].border_type);	
						list_bdr = "border-style:"+sSelections[jcc][snglBld[jcc]][0].border_style;
					//		console.log(list_bdr);
					break;	
				}
			
			
		}

if(typeof sSelections[jcc][snglBld[jcc]][0].border_type === "undefined")
	{
		list_bdr = "";
	//		console.log("Boom: " + list_bdr);
		
		
	}
											

if(typeof (sSelections[jcc][snglBld[jcc]][0].border_color !== "undefined") && (sSelections[jcc][snglBld[jcc]][0].border_color !== "") )

{
	if($(document).width() <= 414)

	{
		//alert("<= 414");
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='"+list_bdr+"; border-width:"+sSelections[jcc][snglBld[jcc]][0].border_weight+"; border-color:"+sSelections[jcc][snglBld[jcc]][0].border_color+";border-radius:"+sSelections[jcc][snglBld[jcc]][0].border_radius+"; width:100%; padding:10px'>";		
		
		//Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='border-style:"+sSelections[jcc][snglBld[jcc]][0].border_style+"; border-width:"+sSelections[jcc][snglBld[jcc]][0].border_weight+"; border-color:"+sSelections[jcc][snglBld[jcc]][0].border_color+";border-radius:"+sSelections[jcc][snglBld[jcc]][0].border_radius+"; width:100%; padding:10px'>";
	}

if($(document).width() > 414)
	{
		
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='jb_car_acc_wd' style='"+list_bdr+"; border-width:"+sSelections[jcc][snglBld[jcc]][0].border_weight+"; border-color:"+sSelections[jcc][snglBld[jcc]][0].border_color+"; border-radius:"+sSelections[jcc][snglBld[jcc]][0].border_radius+"'>";		
		
	//	Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='jb_car_acc_wd' style='border-style:"+sSelections[jcc][snglBld[jcc]][0].border_style+"; border-width:"+sSelections[jcc][snglBld[jcc]][0].border_weight+"; border-color:"+sSelections[jcc][snglBld[jcc]][0].border_color+"; border-radius:"+sSelections[jcc][snglBld[jcc]][0].border_radius+"'>;";
	}
}



										
//-------<(  Heading )>-------		          quest_char									
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='jb_column1'><"+sSelections[jcc][snglBld[jcc]][0].heading_size+" style='border-bottom-style: "+sSelections[jcc][snglBld[jcc]][0].heading_underline+"; border-bottom-color:"+sSelections[jcc][snglBld[jcc]][0].heading_underline_color+" ;border-bottom-width: "+sSelections[jcc][snglBld[jcc]][0].heading_underline_height+"; color:"+sSelections[jcc][snglBld[jcc]][0].heading_color+"; font-style: "+sSelections[jcc][snglBld[jcc]][0].heading_style+";font-weight:"+sSelections[jcc][snglBld[jcc]][0].heading_style+"; text-align: "+ sSelections[jcc][snglBld[jcc]][0].heading_alignment +"'>"+ sSelections[jcc][snglBld[jcc]][0].List_Heading +"</"+sSelections[jcc][snglBld[jcc]][0].heading_size+"></div>";
//-------<(  Heading )>-------											
										
//-------<(  Paragraph Top )>-------

				for(var tpar = 0; tpar < sSelections[jcc][snglBld[jcc]][1].Top_Paragraphs.length; tpar++)
						{
							
							                  //quest_char
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='jb_column1'><"+sSelections[jcc][snglBld[jcc]][0].paragraph_text_size+"><p style='text-align: "+ sSelections[jcc][snglBld[jcc]][0].paragraph_alignment +"; color:"+sSelections[jcc][snglBld[jcc]][0].paragraph_top_text_color+"'>"+ sSelections[jcc][snglBld[jcc]][1].Top_Paragraphs[tpar].Paragraph_text +"</p></"+sSelections[jcc][snglBld[jcc]][0].paragraph_text_size+"></div>";							
						}					
											
//-------<(  Paragraph Top )>-------
											
											
											


Jcc_Comp_Maker = Jcc_Comp_Maker + "<"+ sSelections[jcc][snglBld[jcc]][3].Type_of_List +" type='"+sSelections[jcc][snglBld[jcc]][3].ol_type+"' style='list-style-type:"+sSelections[jcc][snglBld[jcc]][3].ul_type+"'>"; 											
//-------<(  List  )>-------											
List_Text_Num = (sSelections[jcc][snglBld[jcc]][8].list_items);
	console.log("===============================");	
	console.log("sSelections[jcc][snglBld["+jcc+"]][7].text_color: " + sSelections[jcc][snglBld[jcc]][7].text_color);
	console.log("===============================");	
					for(lst = 0; lst < List_Text_Num.length; lst++)
								{
									List_Text_Array[lst] = (List_Text_Num[lst].lstText);
											//quest_char							
Jcc_Comp_Maker = Jcc_Comp_Maker + "<li class='jb_column1' style='margin-left:40px; color:"+ sSelections[jcc][snglBld[jcc]][7].text_color +"; text-align: "+ sSelections[jcc][snglBld[jcc]][2].align_text +";'><"+sSelections[jcc][snglBld[jcc]][3].List_Text_Size+">"+ List_Text_Array[lst] +"</"+sSelections[jcc][snglBld[jcc]][3].List_Text_Size+"></li>";																	
												
								}
Jcc_Comp_Maker = Jcc_Comp_Maker + "</"+ sSelections[jcc][snglBld[jcc]][3].Type_of_List +">";											
//-------<(  List  )>-------




//-------<(  Paragraph Bottom )>-------											
for(var bpar = 0; bpar < sSelections[jcc][snglBld[jcc]][9].Bottom_paragraphs.length; bpar++)
						{
												//quest_char
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='jb_column1'><"+sSelections[jcc][snglBld[jcc]][0].paragraph_text_size+"><p style='font-size:"+sSelections[jcc][snglBld[jcc]][0].paragraph_text_size+";text-align: "+ sSelections[jcc][snglBld[jcc]][0].paragraph_alignment +"; color:"+sSelections[jcc][snglBld[jcc]][0].paragraph_bot_text_color+"'>"+ sSelections[jcc][snglBld[jcc]][9].Bottom_paragraphs[bpar].Paragraph_text +"</p></"+sSelections[jcc][snglBld[jcc]][0].paragraph_text_size+"></div>";							
						}
											
//-------<(  Paragraph Bottom )>-------	
/*
										
*/

if(typeof (sSelections[jcc][snglBld[jcc]][0].border_color !== "undefined") && (sSelections[jcc][snglBld[jcc]][0].border_color != "") )

{
	Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";	
}
	
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";		
									break;
//-------------------------------------------------------------------------------------------------------------	
//-------<( List Text Paragraph code end )>-------											
//-------------------------------------------------------------------------------------------------------------	
										
											
											
											

											
//-------------------------------------------------------------------------------------------------------------	
//-------<( Learning Objectives code begin )>-------
//-------------------------------------------------------------------------------------------------------------
case "Learning_Objectives":
		///////////BRIAN EDIT 2019-11-25////////////////
		console.log("Learning Objectives was called")
		
		var headlineText = "";
		var headlineTextStyle = "";
		//var locale = "";
		var colorOption = "";

		var locale = returnLocale();

		console.log(locale)
		/* if( typeof course_settings === "undefined" || typeof course_settings == null){
			locale = "en-US";			
		}else{
			locale = course_settings.Portal_Setup.course_locale;
		} */

		//var colorOption = "006aac"; // 000000 || 00ab4f || 006aac || 46a4da || 
									// 0075a8 || 82c341 || 912a74 || 007569 || 
									// 263676 || 479997 || d2232a || e72856 ||
									// f9c606 || f7921e

		//idiot-proofing the only available option...
		if (sSelections[jcc][snglBld[jcc]][0].color !== ""){
			colorOption = sSelections[jcc][snglBld[jcc]][0].color;
		}else{
			colorOption = "000000";
		}

		if(colorOption.indexOf("#") !== -1){
			colorOption = colorOption.substr(1, colorOption.length);
		}

		switch (locale.locale){
		///////////BRIAN EDIT 2019-11-25////////////////

			

			case "ar-MA": headlineText = "أهداف التعلم";
						  headlineTextStyle = "style=\"color: #" + colorOption + "; font-family: 'Tahoma'; transform: translate(-50%, -84%);\"";
			break;
				
			case "en-US": headlineText = "Learning Objectives";
						  if( typeof course_settings === "undefined" || typeof course_settings == null){
							headlineTextStyle = "style=\"color: #" + colorOption + "; font-family: 'Tahoma';\"";
						  }else{
							headlineTextStyle = "style=\"color: #" + colorOption + "; font-family: 'Archivo';\"";
						  }
			break;
				
			case "es-MX": headlineText = "objetivo de estudios";
						  headlineTextStyle = "style=\"color: #" + colorOption + "; font-family: 'Archivo';\"";
			break;
			
			case "fr-CA":
			case "fr-FR": headlineText = "Objectifs d'apprentissage";
						  headlineTextStyle = "style=\"color: #" + colorOption + "; font-family: 'Archivo';\"";
			break;
				
			case "id-ID": headlineText = "Tujuan Pembelajaran";
						  headlineTextStyle = "style=\"color: #" + colorOption + "; font-family: 'Archivo';\"";
			break;
				
			case "ko-KR": headlineText = "학습 목표";
						  //headlineTextStyle = "style=\"color: #" + colorOption + "; font-family: 'Black Han Sans';\"";
						  headlineTextStyle = "style=\"color: #" + colorOption + "; font-family: 'DoHyeon'; transform: translate(-50%, -77%);\"";
			break;
				
			case "pt-BR": headlineText = "objetivos de aprendizado";
						  headlineTextStyle = "style=\"color: #" + colorOption + "; font-family: 'Archivo';\"";
			break;
				
			case "th-TH": headlineText = "เป้าหมายการเรียนรู้";
						  headlineTextStyle = "style=\"color: #" + colorOption + "; font-family: 'Tahoma'; transform: translate(-50%, -84%);\"";
			break;
				
			case "vi-VN": headlineText = "Mục tiêu học tập";
						  headlineTextStyle = "style=\"color: #" + colorOption + "; font-family: 'Tahoma'; transform: translate(-50%, -84%);\"";
			break;
			
			case "zh-HK":
			case "zh-MO":
			case "zh-SG":
			case "zh-TW":
			case "zh-CHT": headlineText = "學習目標";
						   headlineTextStyle = "style=\"color: #" + colorOption + "; font-family: 'Microsoft Yahei'; transform: translate(-50%, -90%);\"";//-171%
			break;

			case "zh-CN":
			case "zh-CHS": headlineText = "学习目标";
						   headlineTextStyle = "style=\"color: #" + colorOption + "; font-family: 'Microsoft Yahei'; transform: translate(-50%, -90%);\"";
			break;
			default: headlineText = "Learning Objectives";
					if( typeof course_settings === "undefined" || typeof course_settings == null){
					  headlineTextStyle = "style=\"color: #" + colorOption + "; font-family: 'Tahoma';\"";
					}else{
					  headlineTextStyle = "style=\"color: #" + colorOption + "; font-family: 'Archivo';\"";
					}	
		}
		
		var loContent = "<div class=\"col-lg-12 col-md-12 col-xs-12\" style=\"margin:0; padding:0;\">";
			loContent +=  "<div id=\"bLearningObjectives\">";
			loContent += "<div id=\"bLoHeadline\" " + headlineTextStyle + ">" + headlineText + "</div>";
// Are we translating LLL activities?

var loimg = String(window.location);
//console.log("loimg: " + loimg);
//// console.log(loimg.search("LLL"))

/*

			if( typeof courseType === "undefined" || typeof courseType == null){
				loContent += "<img src=\"../../../jbuild_libs/images/LO_Images/LO_" + colorOption + ".png\" alt=\"\">";
			
			}else{
				loContent += "<img src=\"jbuild_libs/images/LO_Images/LO_" + colorOption + ".png\" alt=\"\">";
			}
*/

if( typeof courseType === "undefined" || typeof courseType == null){
				if(loimg.search("LLL") < 1)
					{
						loContent += "<img src=\"../../../jbuild_libs/images/LO_Images/LO_" + colorOption + ".png\" alt=\"\">";
					}
									
				if(loimg.search("LLL") > 1)
					{
						loContent = "<img src=\"../../../../../jbuild_libs/images/LO_Images/LO_" + colorOption + ".png\" alt=\"\">";						
					}	
				}else{
					loContent += "<img src=\"jbuild_libs/images/LO_Images/LO_" + colorOption + ".png\" alt=\"\">";
				}




			loContent += "</div></div>";

		//Jcc_Comp_Maker = Jcc_Comp_Maker + loContent;	
		Jcc_Comp_Maker += loContent;			
break;										
//-------------------------------------------------------------------------------------------------------------	
//-------<( Learning Objectives code end )>-------
//-------------------------------------------------------------------------------------------------------------											
											
											
//-------------------------------------------------------------------------------------------------------------	
//-------<( Heading code begin )>-------											
//-------------------------------------------------------------------------------------------------------------												
									case "Heading":	
	
//alert("test: " + sSelections[jcc][snglBld[jcc]] );										
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12' style='width:100%; margin-top:"+sSelections[jcc][snglBld[jcc]][2].top_margin+";background-color: "+ sSelections[jcc][snglBld[jcc]][6].background_color +"; border-top-color:"+sSelections[jcc][snglBld[jcc]][7].border_color+"; border-top-width:"+sSelections[jcc][snglBld[jcc]][8].border_weight+"; border-top-style:"+sSelections[jcc][snglBld[jcc]][9].border_style+"; border-bottom-color:"+sSelections[jcc][snglBld[jcc]][7].border_color+"; border-bottom-width:"+sSelections[jcc][snglBld[jcc]][8].border_weight+"; border-bottom-style:"+sSelections[jcc][snglBld[jcc]][9].border_style+"'><"+sSelections[jcc][snglBld[jcc]][3].size+">";
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "<p style='color: "+ sSelections[jcc][snglBld[jcc]][5].color +"; font-weight: "+ sSelections[jcc][snglBld[jcc]][4].style +";text-align: "+ sSelections[jcc][snglBld[jcc]][1].alignment +"'>"+ sSelections[jcc][snglBld[jcc]][0].sngl_Heading +"</p></"+sSelections[jcc][snglBld[jcc]][3].size+"></div>";				
											
//Jcc_Comp_Maker = Jcc_Comp_Maker + "</"+sSelections[jcc][snglBld[jcc]][3].size+"></div>";											
//\\//snippet_roadmap(jcc,"Heading",(sSelections[jcc][snglBld[jcc]][0].sngl_Heading));
										
									break;		
//-------------------------------------------------------------------------------------------------------------	
//-------<( Heading code end )>-------											
//-------------------------------------------------------------------------------------------------------------
											
//-------------------------------------------------------------------------------------------------------------	
//-------<( Heading_New code begin )>-------											
//-------------------------------------------------------------------------------------------------------------
	case "Heading_New":											


Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12' style='width:100%; margin-top:"+sSelections[jcc][snglBld[jcc]][2].top_margin+";background-color: "+ sSelections[jcc][snglBld[jcc]][6].background_color +"; border-top-color:"+sSelections[jcc][snglBld[jcc]][7].top_line_color+"; border-top-width:"+sSelections[jcc][snglBld[jcc]][7].top_line_weight+"; border-top-style:"+sSelections[jcc][snglBld[jcc]][7].top_line_style+"; border-bottom-color:"+sSelections[jcc][snglBld[jcc]][9].bottom_line_color+"; border-bottom-width:"+sSelections[jcc][snglBld[jcc]][9].bottom_line_weight+"; border-bottom-style:"+sSelections[jcc][snglBld[jcc]][9].bottom_line_style+"'><"+sSelections[jcc][snglBld[jcc]][3].size+">";
	
//max-width: 90ch;											
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "<p style='background-color:"+sSelections[jcc][snglBld[jcc]][8].border_background_color+"; margin-top:"+sSelections[jcc][snglBld[jcc]][8].border_top_margin+"; padding:"+sSelections[jcc][snglBld[jcc]][8].border_padding+"; border-radius:"+sSelections[jcc][snglBld[jcc]][8].border_inside_radius+"; border-color:"+sSelections[jcc][snglBld[jcc]][8].border_inside_color+"; border-width:"+sSelections[jcc][snglBld[jcc]][8].border_inside_weight+"; border-style:"+sSelections[jcc][snglBld[jcc]][8].border_inside_style+" ; width:"+sSelections[jcc][snglBld[jcc]][8].border_width+"; color: "+ sSelections[jcc][snglBld[jcc]][5].color +"; font-weight: "+ sSelections[jcc][snglBld[jcc]][4].style +";text-align: "+ sSelections[jcc][snglBld[jcc]][1].alignment +"'>"+ sSelections[jcc][snglBld[jcc]][0].sngl_Heading +"</p></"+sSelections[jcc][snglBld[jcc]][3].size+">";	//</div>
											
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "</"+sSelections[jcc][snglBld[jcc]][3].size+"></div>";
										
	break;										
//-------------------------------------------------------------------------------------------------------------	
//-------<( Heading_New code end )>-------											
//-------------------------------------------------------------------------------------------------------------												
									
											
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
											
//-------------------------------------------------------------------------------------------------------------	
//-------<( Paragraph New code begin )>-------	SA	Old From Work									
//-------------------------------------------------------------------------------------------------------------	
											
											
					case "Paragraphs_New": // SA  img_loc = "images/";
								var paraSetup = sSelections[jcc][snglBld[jcc]][0];
											
											
									
	Jcc_Comp_Maker = Jcc_Comp_Maker + "<div align='center'>";//
							
				if(paraSetup.background_image.length > 0)
					{
					
			
	Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12' style='background: linear-gradient(rgba(220, 220, 220, 0.8), rgba(220, 220, 220, 0.8)), rgba(220,220,220,0.8) url("+img_loc + paraSetup.background_image+"); width:100%; height: auto; background-position: center center; background-size: cover; padding: 0px 20px; border-top-color:"+paraSetup.border_color+"; border-top-width:"+paraSetup.border_weight+"; border-top-style:"+paraSetup.border_style+"; border-bottom-color:"+paraSetup.border_color+"; border-bottom-width:"+paraSetup.border_weight+"; border-bottom-style:"+paraSetup.border_style+"; border-radius:"+paraSetup.border_radius+"; margin-top:"+paraSetup.top_margin+";'>";							
					}
			
				if(paraSetup.background_image.length === 0)							
					{
						
	Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12' style='height:auto; padding: 0px 20px; background-color:"+paraSetup.background_color+"; border-top-color:"+paraSetup.border_color+"; border-top-width:"+paraSetup.border_weight+"; border-top-style:"+paraSetup.border_style+"; border-bottom-color:"+paraSetup.border_color+"; border-bottom-width:"+paraSetup.border_weight+"; border-bottom-style:"+paraSetup.border_style+"; border-radius:"+paraSetup.border_radius+"; margin-top:"+paraSetup.top_margin+";'>";						
						
			
	//Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12' style='height:auto; padding: 0px 20px; background-color:"+paraSetup.background_color+";border-color:"+paraSetup.border_color+"; border-width:"+paraSetup.border_weight+"; border-style:"+paraSetup.border_style+"; border-radius:"+paraSetup.border_radius+"; margin-top:"+paraSetup.top_margin+";'>";
						
					}
										
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='padding:"+paraSetup.Padding+";'><span style='text-align:"+paraSetup.heading_alignment+"; color:"+paraSetup.heading_color+"'>";
		
		
		//Jcc_Comp_Maker = Jcc_Comp_Maker + "<"+paraSetup.heading_font_size+" style='font-weight:"+paraSetup.heading_weight+";font-style:"+paraSetup.heading_style+";font-variant:"+paraSetup.heading_variant+"; text-transform:"+paraSetup.heading_transform+"'>"+paraSetup.heading+"</"+paraSetup.heading_font_size+">";
											
		//BRIAN 01/13/2020 -- added the color attribute from the above line to the line below
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<"+paraSetup.heading_font_size+" style='font-weight:"+paraSetup.heading_weight+";font-style:"+paraSetup.heading_style+";font-variant:"+paraSetup.heading_variant+"; text-transform:"+paraSetup.heading_transform+";color:"+paraSetup.heading_color+";'>"+paraSetup.heading+"</"+paraSetup.heading_font_size+">";											
		
		//alert(sSelections[jcc][snglBld[jcc]][newpara].Paragraph_txt);
											
		Jcc_Comp_Maker = Jcc_Comp_Maker + "</span></div>";									
						
							
											
for(var newpara = 1; newpara < sSelections[jcc][snglBld[jcc]].length; newpara++)
				{
			
						switch(paraSetup.columns)
							{
								case "1":
										
									
Jcc_Comp_Maker = Jcc_Comp_Maker + "<p class='jb_column1' style='color:"+paraSetup.Paragraph_Font_color+"; text-align:"+paraSetup.Paragraph_align+";line-height:"+paraSetup.line_spacing+"'><"+paraSetup.Paragraph_Font_Size+">"+ sSelections[jcc][snglBld[jcc]][newpara].Paragraph_txt +"</"+paraSetup.Paragraph_Font_Size+"></p>";	
									
								break;	
									
								case "2":
Jcc_Comp_Maker = Jcc_Comp_Maker + "<p class='jb_column2' style='color:"+paraSetup.Paragraph_Font_color+"; text-align:"+paraSetup.Paragraph_align+";line-height:"+paraSetup.line_spacing+"'><"+paraSetup.Paragraph_Font_Size+">"+ sSelections[jcc][snglBld[jcc]][newpara].Paragraph_txt +"</"+paraSetup.Paragraph_Font_Size+"></p>";									
								break;	
							}
					
				}
										
											
										
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
//Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";	
//Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
//paraSetup = [];

												
					break;
											
//-------------------------------------------------------------------------------------------------------------	
//-------<( Paragraph New code end )>-------											
//-------------------------------------------------------------------------------------------------------------												

//-------------------------------------------------------------------------------------------------------------	
//-------<( Paragraph_w_box code begin )>-------	SA	Old From Work									
//-------------------------------------------------------------------------------------------------------------	
	 										
					case "Paragraphs_w_box": // SA  img_loc = "images/";
						
test_box("SA");
/*								
								var paraSetup = sSelections[jcc][snglBld[jcc]];			
							
	Jcc_Comp_Maker = Jcc_Comp_Maker + "<div align='center'>";// style='width:50%;'
	
											
											
				if(paraSetup[0].background_image.length > 0)
					{
					
						
	Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12' style='background: linear-gradient(rgba(220, 220, 220, 0.8), rgba(220, 220, 220, 0.8)), rgba(220,220,220,0.8) url("+img_loc + paraSetup[0].background_image+"); width:100%; height: auto; background-position: center center; background-size: cover; padding: 0px 20px; border-top-color:"+paraSetup[0].border_color+"; border-top-width:"+paraSetup[0].border_weight+"; border-top-style:"+paraSetup[0].border_style+"; border-bottom-color:"+paraSetup[0].border_color+"; border-bottom-width:"+paraSetup[0].border_weight+"; border-bottom-style:"+paraSetup[0].border_style+"; border-radius:"+paraSetup[0].border_radius+"; margin-top:"+paraSetup[0].top_margin+";'>";							
					}
			
				if(paraSetup[0].background_image.length === 0)							
					{
	
					
						
	Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12' style='height:auto; padding: 20px 20px; background-color:"+paraSetup[0].background_color+"; border-top-color:"+paraSetup[0].border_color+"; border-top-width:"+paraSetup[0].border_weight+"; border-top-style:"+paraSetup[0].border_style+"; border-bottom-color:"+paraSetup[0].border_color+"; border-bottom-width:"+paraSetup[0].border_weight+"; border-bottom-style:"+paraSetup[0].border_style+"; border-radius:"+paraSetup[0].border_radius+"; margin-top:"+paraSetup[0].top_margin+";'>";						
	
	Jcc_Comp_Maker = Jcc_Comp_Maker + "<div align='center' style='width:80%; background-color:#ed8c01 ;border-style:solid; border-color:black; border-width: medium; border-radius:10px'>";	//padding:10px;					
			
					
					}
										
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='padding:"+paraSetup[0].Padding+";'><span style='text-align:"+paraSetup[0].heading_alignment+"; color:"+paraSetup.heading_color+"'>";
										
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<"+paraSetup[0].heading_font_size+" style='font-weight:"+paraSetup[0].heading_weight+";font-style:"+paraSetup[0].heading_style+";font-variant:"+paraSetup[0].heading_variant+"; text-transform:"+paraSetup[0].heading_transform+"'>"+paraSetup[0].heading+"</"+paraSetup[0].heading_font_size+">";
		

											
		Jcc_Comp_Maker = Jcc_Comp_Maker + "</span></div>";									
						

					for(var para_bx = 1; para_bx < paraSetup.length; para_bx++)
								{
									switch(paraSetup[0].columns)
										{
												
											case "1":
Jcc_Comp_Maker = Jcc_Comp_Maker + "<p class='jb_column1' style='color:"+paraSetup[0].Paragraph_Font_color+"; text-align:"+paraSetup[0].Paragraph_align+";line-height:"+paraSetup[0].line_spacing+"'><"+paraSetup[0].Paragraph_Font_Size+">"+ paraSetup[para_bx].Paragraph_txt +"</"+paraSetup[0].Paragraph_Font_Size+"></p>";													
											break;
												
											case "2":
Jcc_Comp_Maker = Jcc_Comp_Maker + "<p class='jb_column2' style='color:"+paraSetup[0].Paragraph_Font_color+"; text-align:"+paraSetup[0].Paragraph_align+";line-height:"+paraSetup[0].line_spacing+"'><"+paraSetup[0].Paragraph_Font_Size+">"+ paraSetup[para_bx].Paragraph_txt +"</"+paraSetup[0].Paragraph_Font_Size+"></p>";												
											break;	
												
												
												
										}


								}
											
											
											
										
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";											
										
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
*/

					break;
											
//-------------------------------------------------------------------------------------------------------------	
//-------<( Paragraph_w_box New code end )>-------											
//-------------------------------------------------------------------------------------------------------------											
											
											
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++																					

//-------------------------------------------------------------------------------------------------------------	
//-------<( PDF code begin )>-------											
//-------------------------------------------------------------------------------------------------------------													
										case "PDF_Box":
											
											var pdf_setup = sSelections[jcc][snglBld[jcc]][0];
											
											pdf_file_name = pdf_setup.Pdf_File;
											
											pdf_file_array[jcc] = sSelections[jcc][snglBld[jcc]][1].Pdf_File;
											
											
											
										
											
					if(typeof moduleFolder !== "undefined")
						{
							pdf_logo = "jbuild_libs/images/" + pdf_setup.Pdf_Icon;
						}
					
					if(typeof moduleFolder === "undefined")
						{
							var pdfimg = String(window.location);
							if(pdfimg.search("LLL") < 1)
								{
									pdf_logo = "../../../jbuild_libs/images/" + pdf_setup.Pdf_Icon;
								}
						
							if(pdfimg.search("LLL") > 1)
								{
									pdf_logo = "../../../../../jbuild_libs/images/" + pdf_setup.Pdf_Icon;							
								}


							 
						}					
											
										Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12' style='margin-top:10px;'>";	


											Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='display:inline-block; width:80%; background-color:"+sSelections[jcc][snglBld[jcc]][0].Background_Color+";outline: "+sSelections[jcc][snglBld[jcc]][0].Border_Thickness+" "+sSelections[jcc][snglBld[jcc]][0].Border_Style+" "+sSelections[jcc][snglBld[jcc]][0].Border_Color+"; padding:"+sSelections[jcc][snglBld[jcc]][0].Padding+"'>";
		
											Jcc_Comp_Maker = Jcc_Comp_Maker + "<div><p>"+sSelections[jcc][snglBld[jcc]][0].Pdf_Box_Text+"</p></div>";
											
											
										
											Jcc_Comp_Maker = Jcc_Comp_Maker + "<img src='"+pdf_logo+"' width='50px' height='50px' style='cursor: pointer;' alt='Adobe PDF icon' onclick='open_pdf_file("+jcc+")'>"; //pdf_setup.Pdf_File
											

											Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='margin-top:10px;'><p><jb1>"+sSelections[jcc][snglBld[jcc]][0].Pdf_Body_Text+"</jb1></p></div>";
			
											
											Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
											
											
											
											Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";	
											
										break;	
//-------------------------------------------------------------------------------------------------------------	
//-------<( PDF code end )>-------											
//-------------------------------------------------------------------------------------------------------------													
//-------<(  Added by Jack on 03_08_2019  )>-------
											

//-------------------------------------------------------------------------------------------------------------	
//-------<( Expert Quote code begin )>-------											
//-------------------------------------------------------------------------------------------------------------	
											
//-------<(  Expert Quote Added by Jack on 08_12_2020  )>-------	#0070b0		BarryConclusion.jpg	 heading  background-color:"+xprt_setup.heading_back_color+";
									case "Expert_Quote":
											
									var xprt_setup = sSelections[jcc][snglBld[jcc]][0];	

					


						Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='expert_quote_ "+jcc+"' class='col-lg-12 col-md-12 col-xs-12 expert_bmargin' style='width:100%; margin-top:"+xprt_setup.top_margin+"; margin-bottom:"+xprt_setup.bottom_margin+"'>"; // Whole start 									

							Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='expertContainer' style='height:auto;'>"; // container 

									Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='panel-group'>"; //style='background-color:"+xprt_setup.heading_back_color+"'
									Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='panel panel-primary'>"; // style='background-color:green'   xprt_setup.heading_font_color

									//Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='panel-heading' style='text-align:left; background-color:"+xprt_setup.heading_back_color+"; color:"+xprt_setup.heading_font_color+"'><"+xprt_setup.heading_font+">"+xprt_setup.heading+"</"+xprt_setup.heading_font+"></div>";

									if(xprt_setup.heading_bold === "yes")
										{
											xprt_setup.heading = "<b>" + xprt_setup.heading + "</b>";
										}

									if(xprt_setup.Heading_italic === "yes")
										{
											xprt_setup.heading = "<i>" + xprt_setup.heading + "</i>";
										}
									
									//Heading_italic

									Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='panel-heading' style='text-align:left; background-color:"+xprt_setup.heading_back_color+"; color:"+xprt_setup.heading_font_color+"'><jb7>"+xprt_setup.heading+"</jb7></div>";

									Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='panel-body'>";

								/*
									Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-3 col-md-3 col-xs-3'>";  
											Jcc_Comp_Maker = Jcc_Comp_Maker + "<img src='images/"+xprt_setup.image+"' class='ex_img' alt=''/>";
										Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>"; 
								*/
										
									if(xprt_setup.quote_bold === "yes")
										{
											xprt_setup.quote = "<b>" + xprt_setup.quote + "</b>";
										}	

										Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12 ex_qt' style='max-height:320px; overflow-y: auto'>"; 
											// Jcc_Comp_Maker = Jcc_Comp_Maker + "<"+xprt_setup.quote_font+">"+xprt_setup.quote+"</"+xprt_setup.quote_font+">";
											Jcc_Comp_Maker = Jcc_Comp_Maker + "<jb7 style='color:#000000'>"+xprt_setup.quote+"</jb7>";
  									    Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>"; 





									Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";  

									if(xprt_setup.expert_info_bold === "yes")
										{
											xprt_setup.expert_info = "<b>" + xprt_setup.expert_info + "</b>";
										}

									if(xprt_setup.expert_info_italic === "yes")
										{
											xprt_setup.expert_info = "<i>" + xprt_setup.expert_info + "</i>";
										}

							
							//																					// xprt_setup.expert_info_back_color
							Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='panel-footer' style='height:120px; background-color:"+xprt_setup.expert_info_back_color+"'>";
								
											
											
											
								//Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12'>";  
										//Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-3 col-md-3 col-xs-3'>";   src='"+img_loc+""


				//	Added by Jack on Feb/08/2022
		//if(document.getElementById("Page_Body").offsetWidth <= 428)
		if(document.getElementsByTagName("body")[0].offsetWidth <= 428) // Edited By BrianL on May/10/2022
			{
				Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='text-align:left'><img src='"+img_loc+""+xprt_setup.image+"' class='ex_img pull-left' alt=''/><style='display: inline-block; margin-left:20px ;'><p style='font-size: 12px; color:"+xprt_setup.expert_info_color+"'>"+ xprt_setup.expert_info+"</p></div>";	
			}
				
		//if(document.getElementById("Page_Body").offsetWidth > 428) 
		if(document.getElementsByTagName("body")[0].offsetWidth > 428) // Edited By BrianL on May/10/2022
			{
				Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='text-align:left'><img src='"+img_loc+""+xprt_setup.image+"' class='ex_img pull-left' alt=''/><style='display: inline-block; margin-left:20px ;'><jb7 style='color:"+xprt_setup.expert_info_color+"'>"+ xprt_setup.expert_info+"</jb7></div>";	
			}				
				//	Added by Jack on Feb/08/2022	
// Original:	Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='text-align:left'><img src='"+img_loc+""+xprt_setup.image+"' class='ex_img pull-left' alt=''/><style='display: inline-block; margin-left:20px ;'><jb7 style='color:"+xprt_setup.expert_info_color+"'>"+ xprt_setup.expert_info+"</jb7></div>";
										
										
											//Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";  class='pull-left'

									//Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-9 col-md-9 col-xs-9'>";	 style='margin-left: 20px;'
										////Jcc_Comp_Maker = Jcc_Comp_Maker + "<div><style='color:"+xprt_setup.expert_info_color+"'><jb7>"+ xprt_setup.expert_info+"</jb7></div>";
									//Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>"; class='pull-right'
							
								//Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
							Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";

								//Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='panel-footer' style='text-align:left; background-color:"+xprt_setup.expert_info_back_color+"; color:"+xprt_setup.expert_info_color+"'><"+xprt_setup.expert_info_font+">"+xprt_setup.expert_info+"</"+xprt_setup.expert_info_font+"></div>";

									Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
									Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";

							Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";

						Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";

 
 				
							
	
									break;	
											
//-------------------------------------------------------------------------------------------------------------	
//-------<( Expert Quote code end )>-------											
//-------------------------------------------------------------------------------------------------------------	
											
											
											
//-------------------------------------------------------------------------------------------------------------	
//-------<( Info box code begin )>-------											
//-------------------------------------------------------------------------------------------------------------												

										
									case "Info_Box":

									Info_Box_Array[0] = sSelections[jcc][snglBld[jcc]][0].Info_Box_Text;
									Info_Box_Array[1] = sSelections[jcc][snglBld[jcc]][1].Text_Color;		
									Info_Box_Array[2] = sSelections[jcc][snglBld[jcc]][2].Border_Color;
									Info_Box_Array[3] = sSelections[jcc][snglBld[jcc]][3].Border_Style;
									Info_Box_Array[4] = sSelections[jcc][snglBld[jcc]][4].Border_Thickness;
									Info_Box_Array[5] = sSelections[jcc][snglBld[jcc]][5].Text_Alignment;
									Info_Box_Array[6] = sSelections[jcc][snglBld[jcc]][6].Background_Color; 
									Info_Box_Array[7] = sSelections[jcc][snglBld[jcc]][7].Icon;
									Info_Box_Array[8] = sSelections[jcc][snglBld[jcc]][8].Icon_On_Off;
									
									Info_Box_Array[9] = sSelections[jcc][snglBld[jcc]][7].Icon_alt;		
									//Info_Box_Array[9] = sSelections[jcc][snglBld[jcc]][9].Icon_Position;
						
					if(typeof moduleFolder !== "undefined")
						{
							var new_icon = "jbuild_libs/images/" + Info_Box_Array[7];
						}
					
					if(typeof moduleFolder === "undefined")
						{
							var infoimg = String(window.location);
								if(infoimg.search("LLL") < 1)
									{
										var new_icon = "../../../jbuild_libs/images/" + Info_Box_Array[7];
									}

								if(infoimg.search("LLL") > 1)
									{
										var new_icon = "../../../../../jbuild_libs/images/" + Info_Box_Array[7];							
									}

							
						}						
						


Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='infobox_ "+jcc+"' class='col-lg-12 col-md-12 col-xs-12'>";											
											
if(sSelections[jcc][snglBld[jcc]][9].selectable === "true")
	{
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<br><br><span onclick='info_box_event("+jcc+");' style='cursor: pointer; background-color:"+Info_Box_Array[6]+"; outline: "+Info_Box_Array[4]+" "+Info_Box_Array[3]+" "+Info_Box_Array[2]+"; padding: 20px; display:inline-block';>";
	}
		else
			
	{
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<br><br><span style='background-color:"+Info_Box_Array[6]+"; outline: "+Info_Box_Array[4]+" "+Info_Box_Array[3]+" "+Info_Box_Array[2]+"; padding: 20px; display:inline-block';>";
	}
											
//<li><a href="#" data-toggle="modal" data-target="#testModal">Modal</a></li>											
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "<img style='text-align:left; display:"+Info_Box_Array[8]+"; width: 20px ;height:auto' src='"+new_icon+ "' alt='"+Info_Box_Array[9]+"'/><h3 style='color:"+Info_Box_Array[1]+";text-align:"+Info_Box_Array[5]+"'>" + Info_Box_Array[0] +"</h3></span><br><br>";

											
										
											
//-------<(  Modal Box )>-------										

											
	Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='myModal_"+jcc+"' class='jb_modal'>";	

//-------<>											
//Header
//-------<>
	Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='jb_modal-hdr-ftr' style='background-color:"+sSelections[jcc][snglBld[jcc]][9].Header_color+"'><p style='text-align:"+sSelections[jcc][snglBld[jcc]][9].title_text_alignment+" ;color:"+sSelections[jcc][snglBld[jcc]][9].title_text_color+"; font-size:"+sSelections[jcc][snglBld[jcc]][9].title_text_size+"'>"+sSelections[jcc][snglBld[jcc]][9].title_text+"</p></div>";											

//-------<>												
//Body
//-------<>
//overflow-y: scroll											
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='jb_modal-content' style='overflow-y: scroll;background-color:"+sSelections[jcc][snglBld[jcc]][9].Body_color+"'>";
		for(var mdl = 10; mdl < sSelections[jcc][snglBld[jcc]].length; mdl++) // id='jb_inf0_modal_main_text'
			{											
Jcc_Comp_Maker = Jcc_Comp_Maker + "<p style='text-align:"+sSelections[jcc][snglBld[jcc]][9].body_text_alignment+";color:"+sSelections[jcc][snglBld[jcc]][9].body_text_color+";font-size:18px'><jb8>"+sSelections[jcc][snglBld[jcc]][mdl].body_text+"</jb8></p>";
			
		

			}								
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";											
											

Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='jb_modal-hdr-ftr'><span class='jb_close' id='info_btn'><button onclick='javascript:close_Info_modal("+jcc+")'><jb1>" + closeButton + "</jb1></button></span></div>";	//Close											
											

//-------<>												
//Footer
//-------<>												

//-------<(  Modal Box )>-------											
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div></div>";											
			
										
									break;	
//-------------------------------------------------------------------------------------------------------------	
//-------<( Info box code end )>-------											
//-------------------------------------------------------------------------------------------------------------	
											
											
											
//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄												
//-------------------------------------------------------------------------------------------------------------	
//-------<( Code For Stand Alone Components End )>-------										
//-------------------------------------------------------------------------------------------------------------												
//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄	
//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄	
//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄	
											
// Accordion code goes here if this experiment does not work.
											
case "Accordion":

									acc_Count = 0;
				
				


				var acc_ck = sSelections[jcc][snglBld[jcc]][0];

				//console.log("Accordion: " + Object.keys(sSelections[jcc][snglBld[jcc]]))
				//console.log("Accordion: " + ((sSelections[jcc][snglBld[jcc]].length) - 2) / 2)
				ac_img_zoom_img = [];
				ac_im_tag_array = [];
			//ac_img_zoom_array = [];

				//Object.keys(
				//Accordion_number(jcc);
				//Acc_Label							
											
	
				acc_setup_array[0] = sSelections[jcc][snglBld[jcc]][0].Label_Alignment;	
				acc_setup_array[1] = sSelections[jcc][snglBld[jcc]][0].Label_Color;
				acc_setup_array[2] = sSelections[jcc][snglBld[jcc]][0].Label_Background_Color;
				acc_setup_array[3] = sSelections[jcc][snglBld[jcc]][1].Dropdown_Background_Color;
							
				acc_setup_array[4] = sSelections[jcc][snglBld[jcc]][0].Tab_Radius;

Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12'>";											
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='margin-top: "+sSelections[jcc][snglBld[jcc]][0].top_margin+"; border-style:"+acc_ck.Border_Style+"; border-color:"+acc_ck.Border_Color+"; border-width:"+acc_ck.Border_Thickness+"; border-radius:"+acc_ck.Border_Radius+"; ' class='panel-group jb_car_acc_wd' id='jb_accordion_" + jcc + "'>";//jb_mx_wd

											for(var accm = 2; accm < sSelections[jcc][snglBld[jcc]].length; accm++)
												{
													//alert("accm: " + accm);
													
													//alert("accm: " + sSelections[jcc][snglBld[jcc]][accm].Acc_Label);

													//cur_acc
													switch(accm % 2)
														{
															case 0:
																
															


															acc_Count = (acc_Count + 1);
															
															//im_count[jcc] = acc_Count;
															

															

															im_count.push(acc_Count);


															//im_count
															//		console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
															//		console.log("accm: " + sSelections[jcc][snglBld[jcc]][accm].Acc_Label);
															//		console.log("acc_Count: " + acc_Count);
															//		console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");															
																
															////alert("acc_Count:" + acc_Count);
															           //alert("accm: " + sSelections[jcc][snglBld[jcc]][accm].Acc_Label);
															
															//alert("acc_Count: " + acc_Count);	
																
																
															acc_label_array[acc_Count] = sSelections[jcc][snglBld[jcc]][accm].Acc_Label;
																
																
												//\\alert("acc_label_array["+acc_Count+"]: " + acc_label_array[acc_Count]);
																
												//\\cur_acc_tab_labels[jcc] = acc_label_array[acc_Count]
																
															//alert("jcc: " + jcc + " | acc_Count: " + acc_Count);
																
												//\\alert("cur_acc_tab_labels["+jcc+"]["+acc_Count+"]: " + cur_acc_tab_labels[jcc]);	
																
															
															//speech_number[jcc] = Speech_Bub_Array;
																//glyphicon glyphicon-plus

Jcc_Comp_Maker = Jcc_Comp_Maker + "<div onclick='acc_clicked("+jcc+","+acc_Count+");' class='panel'><div class='panel-heading' data-toggle='collapse' data-parent='#jb_accordion_" + jcc +"' data-target='#collapse"+jcc+"_"+acc_Count+"' style='background-color:"+acc_setup_array[2]+";border-radius:"+acc_setup_array[4]+"'><"+acc_ck.Label_Font_Size+" class='panel-title' style='color:"+acc_setup_array[1]+";text-align:"+acc_setup_array[0]+"'><a data-toggle='collapse' data-parent='#jb_accordion_" + jcc +"' href='#collapse"+jcc+"_"+acc_Count+"'><span id='apm_"+jcc+"_"+acc_Count+"' class='glyphicon glyphicon-plus' style='float:left'></span><para_head>"+sSelections[jcc][snglBld[jcc]][accm].Acc_Label+"</para_head></a></"+acc_ck.Label_Font_Size+"></div>";																	
																
															break;  //acc_lbl_name <span class='glyphicon glyphicon-plus'></span>
														/*
jQuery(function ($) {
    var $active = $('#accordion .panel-collapse.in').prev().addClass('active');
    $active.find('a').prepend('<i class="glyphicon glyphicon-minus"></i>');
    $('#accordion .panel-heading').not($active).find('a').prepend('<i class="glyphicon glyphicon-plus"></i>');
    $('#accordion').on('show.bs.collapse', function (e) {
        $('#accordion .panel-heading.active').removeClass('active').find('.glyphicon').toggleClass('glyphicon-plus glyphicon-minus');
        $(e.target).prev().addClass('active').find('.glyphicon').toggleClass('glyphicon-plus glyphicon-minus');
    })
});
														*/
															case 1:
														
var jb_Acc_Con;																
															
switch(String(Object.keys(sSelections[jcc][snglBld[jcc]][accm])))
		{
			case "Info_Box":
				
				jcc_data = sSelections[jcc][snglBld[jcc]][accm].Info_Box;

				
//-------<( Added to check for portal or development )>-------
if(typeof moduleFolder !== "undefined")
	{
		var ac_new_icon = "jbuild_libs/images/" + jcc_data[7].Icon;
		
	}
					
if(typeof moduleFolder === "undefined")
	{

		var inbximg = String(window.location);
		if(inbximg.search("LLL") < 1)
			{
				var ac_new_icon = "../../../jbuild_libs/images/" + jcc_data[7].Icon;
			}
	
		if(inbximg.search("LLL") > 1)
			{
				var ac_new_icon = "../../../../../jbuild_libs/images/" + jcc_data[7].Icon;					
			}		
							
	}
//-------<( Added to check for portal or development )>-------	
											

				
jb_Acc_Con = "<br><br><span style='background-color:"+jcc_data[6].Background_Color+"; outline: "+jcc_data[4].Border_Thickness+" "+jcc_data[3].Border_Style+" "+jcc_data[2].Border_Color+"; padding: 20px; display:inline-block';>";

jb_Acc_Con = jb_Acc_Con + "<img style='text-align:left; display:"+jcc_data[8].Icon_On_Off+"; width: 20px ;height:auto' src='"+ac_new_icon+ "' alt='"+jcc_data[7].Icon_alt+"'/>";	
	//alert(jcc_data[1].Text_Color);
jb_Acc_Con = jb_Acc_Con + "<h3 style='color:"+jcc_data[1].Text_Color+"; text-align:"+jcc_data[5].Text_Alignment+"'>"+jcc_data[0].Info_Box_Text+"</h3></span><br><br>";				
				
Jcc_Comp_Maker = Jcc_Comp_Maker +  "<div style='background-color:"+acc_setup_array[3]+";' id='collapse"+jcc+"_"+acc_Count+"' class='panel-collapse collapse'><div class='panel-body'>"+ jb_Acc_Con +"</div></div>"; 	

		
	;				
				
			break;
				
//==============================================================================================================
//-------<( Video old code begin )>-------  ACC	
//==============================================================================================================				
			case "Video_Files_New":

				//var new_vid	= sSelections[jcc][snglBld[jcc]][0];
				jcc_data = sSelections[jcc][snglBld[jcc]][accm].Video_Files_New;

				console.log(window.location.href.indexOf("ll-content.ccnetworks.cn"));
				///////////////////////////BAL - 7/1/2021///////////////////////////////
				//useChinaCache, if on ChinaCache
				var bal_vid;
				
				if(window.location.href.indexOf("ll-content.ccnetworks.cn") !== -1){
					bal_vid = jcc_data[0].Video.replace("https://loma.azureedge.net/videos/","https://ll-content.ccnetworks.cn/ChinaCache/videos/");
					//console.log("bal_vid = " + bal_vid);
					jcc_data[0].Video = bal_vid;
				}

				//cur_vid[jcc] = (new_vid.Video); // Original line...NOT USED IN ACCORDION VIDEOS!!!
				///////////////////////////BAL - 7/1/2021///////////////////////////////

					switch(jcc_data[0].Expert_View)
						{
							case "yes":
jb_Acc_Con = "<div style='background-color:"+jcc_data[0].back_color+"; padding: 4px; margin-top: "+jcc_data[0].top_margin+";'><div><div><video width='100%;' controls><source src='"+jcc_data[0].Video+"' id='vid_source' type='video/mp4'></video></div><div align='center'><button id='tbtn_" + jcc+"' type='button' class='btn btn-primary btn-sm' onclick='Transcripts("+jcc+");'>"+trans_button+"</button></div></div></div>";// </div>

							break;
								
							case "no":

							console.log("No Expert Video");
jb_Acc_Con = "<div style='background-color:"+jcc_data[0].back_color+"; padding: 4px; margin-top: "+jcc_data[0].top_margin+";'><div><div><video width='100%;' controls><source src='"+jcc_data[0].Video+"' id='vid_source' type='video/mp4'></video></div><div align='center'><button id='tbtn_" + jcc+"' type='button' class='btn btn-primary btn-sm' onclick='Transcripts("+jcc+");'>"+trans_button+"</button></div></div></div>";// </div>
							
							break;	
						}
											
jb_Acc_Con = jb_Acc_Con + "<div id='trans_" + jcc +"' style='display: none; border: medium; border-style: solid; border-color: #000000;height:300px; overflow-y: auto; overflow-x: hidden ;padding:5px;'>";									
			for(var trn_ac = 1; trn_ac < jcc_data.length; trn_ac++)
						{
							
							if(jcc_data[0].Person_underline === "u")
								{
		jb_Acc_Con = jb_Acc_Con + "<p class='jb_char_para' style='text-align:"+jcc_data[0].Person_align+"; color: "+jcc_data[0].Person_text_color+"'><"+jcc_data[0].Person_font+"><u>"+ jcc_data[trn_ac].Person +"</u></"+jcc_data[0].Person_font+"></p>";										
								}

							if(jcc_data[0].Person_underline === "")
								{
		jb_Acc_Con = jb_Acc_Con + "<p class='jb_char_para' style='text-align:"+jcc_data[0].Person_align+"; color: "+jcc_data[0].Person_text_color+"'><"+jcc_data[0].Person_font+">"+ jcc_data[trn_ac].Person +"</"+jcc_data[0].Person_font+"></p>";										
								}							
				
							
		jb_Acc_Con = jb_Acc_Con + "<p class='jb_char_para' style='text-align:"+jcc_data[0].Transcript_Text_align+"; color:"+jcc_data[0].Transcript_Text_color+"'><"+jcc_data[0].Transcript_Text_font+">"+ jcc_data[trn_ac].Transcript_Text +"</"+jcc_data[0].Transcript_Text_font+"></p>";
						
						}						

jb_Acc_Con = jb_Acc_Con + "</div>";	

	Jcc_Comp_Maker = Jcc_Comp_Maker +  "<div style='z-index: 1;background-color:"+acc_setup_array[3]+";' id='collapse"+jcc+"_"+acc_Count+"' class='panel-collapse collapse'><div class='panel-body'>"+ jb_Acc_Con +"</div></div>"; 	

				
			
				
			break;	
//==============================================================================================================
//-------<( Video old code end )>-------  ACC	
//==============================================================================================================				
				
				
//==============================================================================================================
//-------<( Video old code begin )>-------  ACC	
//==============================================================================================================				
			case "Video_Files":
								jcc_data = sSelections[jcc][snglBld[jcc]][accm].Video_Files;
				
								Ac_Video_Array[0] = jcc_data[0].Video;
								Ac_Video_Array[1] = jcc_data[1].Transcript_File;
								Ac_Video_Array[2] = jcc_data[2].Expert_View;
								Ac_Video_Array[3] = jcc_data[3].top_margin;
								Ac_Video_Array[4] = jcc_data[4].back_color;			
								//Video_Array[5] =  jcc_data[5].border;	
											
								ac_pfd_Array[jcc] = Ac_Video_Array[1];		

									switch(String(Ac_Video_Array[2]))
										{
											case "yes":

//-------<( Added to check for portal or development )>-------
if(typeof moduleFolder !== "undefined")
	{
jb_Acc_Con = "<div style='background-color:"+Ac_Video_Array[4]+"; padding: 4px; margin-top: "+Ac_Video_Array[3]+";'><div><div><img style='margin-top:4px; margin-right: 20px; position: absolute; top:"+Ac_Video_Array[3]+"; right: 0px' src='jbuild_libs/images/expert_video.png' width='20%' height='auto' alt=''/><video width='100%;' controls><source src='"+Ac_Video_Array[0]+"' id='vid_source' type='video/mp4'></video></div><div align='center'><button type='button' class='btn btn-primary btn-sm' onclick='Transcripts(ac_pfd_Array["+jcc+"]);'>Transcript</button></div></div></div>";							
	}
					
if(typeof moduleFolder === "undefined")
	{
jb_Acc_Con = "<div style='background-color:"+Ac_Video_Array[4]+"; padding: 4px; margin-top: "+Ac_Video_Array[3]+";'><div><div><img style='margin-top:4px; margin-right: 20px; position: absolute; top:"+Ac_Video_Array[3]+"; right: 0px' src='../../../jbuild_libs/images/expert_video.png' width='20%' height='auto' alt=''/><video width='100%;' controls><source src='"+Ac_Video_Array[0]+"' id='vid_source' type='video/mp4'></video></div><div align='center'><button type='button' class='btn btn-primary btn-sm' onclick='Transcripts(ac_pfd_Array["+jcc+"]);'>Transcript</button></div></div></div>";							
	}
//-------<( Added to check for portal or development )>-------
	
											break;

											case "no":
jb_Acc_Con = "<div style='background-color:"+Ac_Video_Array[4]+"; padding: 4px; margin-top: "+Ac_Video_Array[3]+";'><div><div><video width='100%;' controls><source src='"+Ac_Video_Array[0]+"' id='vid_source' type='video/mp4'></video></div><div align='center'><button type='button' class='btn btn-primary btn-sm' onclick='Transcripts(ac_pfd_Array["+jcc+"]);'>Transcript</button></div></div></div>";										
											break;	
										}
				Jcc_Comp_Maker = Jcc_Comp_Maker +  "<div style='z-index: 1;background-color:"+acc_setup_array[3]+";' id='collapse"+jcc+"_"+acc_Count+"' class='panel-collapse collapse'><div class='panel-body'>"+ jb_Acc_Con +"</div></div>"; 				
			break;	
//==============================================================================================================
//-------<( Video old code end )>-------  ACC	
//==============================================================================================================				
				
				
				
			case "Image_File_Only":
jcc_data = sSelections[jcc][snglBld[jcc]][accm].Image_File_Only;
				
jb_Acc_Con = "<div style='background-color:"+jcc_data[3].background_color+";padding:"+jcc_data[4].padding+"'><img style='margin-top: "+jcc_data[2].top_margin+"; width: "+jcc_data[1].width+";height:auto' src='"+img_loc+"" + jcc_data[0].image_file + "' height='100px' alt=''/></div>";						
				Jcc_Comp_Maker = Jcc_Comp_Maker +  "<div style='background-color:"+acc_setup_array[3]+";' id='collapse"+jcc+"_"+acc_Count+"' class='panel-collapse collapse'><div class='panel-body'>"+ jb_Acc_Con +"</div></div>"; 				
			break;
//-------<>
			case "audio": // AC
				//alert("audio_loc: " + audio_loc + "/" + sSelections[jcc][snglBld[jcc]]);
			jcc_data = sSelections[jcc][snglBld[jcc]][accm].audio;	
			//alert(jcc_data[5].Padding);
				
							if(typeof jcc_data[7] === "undefined")				
								{
									
									ADA_check_Array[jcc] =  "Please update the Audio snippet in the Accordion in space number: " + jcc + " to Audio V2.0";
								}	
				
				
		
jb_Acc_Con = "<div style='margin-top:"+jcc_data[6].top_margin+";background-color:"+jcc_data[4].background_color+";padding:"+jcc_data[5].Padding+"'>";
							
						switch(jcc_data[3].Lable_Position)
							{
								case "top":
jb_Acc_Con = jb_Acc_Con + "<div align='left'><"+jcc_data[2].Label_Font_Size+">"+jcc_data[1].Label+"</"+jcc_data[2].Label_Font_Size+"></div>";
											
jb_Acc_Con = jb_Acc_Con + "<audio controls style='width:300px; margin-top: 20px;'><source src='"+audio_loc+"" + jcc_data[0].Audio_File + "' type='audio/mpeg'></audio>";								
								break;
									
								case "bottom":
jb_Acc_Con = jb_Acc_Con + "<audio controls style='width:60%; margin-top: 20px;'><source src='"+audio_loc+"" + jcc_data[0].Audio_File + "' type='audio/mpeg'></audio>";
									
jb_Acc_Con = jb_Acc_Con + "<div><"+jcc_data[2].Label_Font_Size+">"+jcc_data[1].Label+"</"+jcc_data[2].Label_Font_Size+"></div>";									
								break;	
							}
				
jb_Acc_Con = jb_Acc_Con + "</div>";	
				


jb_Acc_Con = jb_Acc_Con +"<div align='center' style='margin-top:10px;'><button id='atbtn_" + jcc+"' type='button' class='btn btn-primary btn-sm' onclick='aTranscripts("+jcc+");'>"+trans_button+"</button></div>";						
											
jb_Acc_Con = jb_Acc_Con + "<div id='audio_trans_" + jcc +"' style='display: none; margin-top:10px; border: medium; border-style: solid; border-color: #000000;height:300px; overflow-y: auto; overflow-x: hidden ;padding:5px;'>";				
									
					for(var atrn = 8; atrn < jcc_data.length; atrn++)
						{

							if(jcc_data[atrn].per_underline === "u")
								{
		jb_Acc_Con = jb_Acc_Con + "<p style='text-align:"+jcc_data[7].Person_align+";font-weight:"+jcc_data[7].Person_font_weight+";color:"+jcc_data[7].Person_text_color+"' class='jb_char_para'><"+jcc_data[7].Person_font+"><u>"+ jcc_data[atrn].Person +"</u></"+jcc_data[7].Person_font+"></p>";										
								}

							if(jcc_data[atrn].per_underline === "")
								{
		jb_Acc_Con = jb_Acc_Con + "<p style='text-align:"+jcc_data[7].Person_align+";font-weight:"+jcc_data[7].Person_font_weight+";color:"+jcc_data[7].Person_text_color+"' class='jb_char_para'><"+jcc_data[7].Person_font+">"+jcc_data[atrn].Person+"</"+jcc_data[7].Person_font+"></p>";										
								}							
													
		jb_Acc_Con = jb_Acc_Con + "<p style='text-align:"+jcc_data[7].Transcript_Text_align+";font-weight:"+jcc_data[7].Transcript_Text_font_weight+";color:"+jcc_data[7].Transcript_Text_color+";' class='jb_char_para'><"+jcc_data[7].Transcript_Text_font+">"+ jcc_data[atrn].Transcript_Text +"</"+jcc_data[7].Transcript_Text_font+"></p>";					

						}						

jb_Acc_Con = jb_Acc_Con + "</div>";					
				
				Jcc_Comp_Maker = Jcc_Comp_Maker +  "<div style='background-color:"+acc_setup_array[3]+";' id='collapse"+jcc+"_"+acc_Count+"' class='panel-collapse collapse'><div class='panel-body'>"+ jb_Acc_Con +"</div></div>"; 
				
				
			break;				
		
			case "Divider":

					var jc_Divider = [];
				
				
				jc_Divider = sSelections[jcc][snglBld[jcc]][accm].Divider;


			break;	
//-------------------------------------------------------------------------------------------------------------	
//-------<( Image with Text code begin New )>------- AC											
//-------------------------------------------------------------------------------------------------------------				
			case "image_w_text": //AC
				
				
				
				img_list_array = [];				
				Img_List_Maker = "";

				jcc_data = sSelections[jcc][snglBld[jcc]][accm].image_w_text;
					jb_Acc_Con = "<div style='margin-top: " + jcc_data[6].top_margin + "'>";											
					jb_Acc_Con = jb_Acc_Con + "<div style='background-color: " + jcc_data[7].background_color + "'>";	

					imgwt_ac_array[acc_Count] = jcc_data[0].image_name;

				
		function ac_text(actc)
				{

			if(typeof jcc_data[3].image_list === "undefined")
				{




					jb_Acc_Con = jb_Acc_Con + "<div style='text-align:"+jcc_data[5].image_text_alignmnet+"'><"+jcc_data[5].image_font_size+">"+jcc_data[3].image_text+"</"+jcc_data[5].image_font_size+"></div>";

				}
					
			if(typeof jcc_data[3].image_list !== "undefined")
				{

					switch(jcc_data[3].Type_of_List)
						{
							case "ol":
								lst_style = jcc_data[3].ol_type;
							break;
								
							case "ul":
								lst_style = jcc_data[3].ul_type;
							break;	
						}
					
					Img_List_Maker = Img_List_Maker + "<"+jcc_data[3].Type_of_List+" style='list-style-type:"+lst_style+"' type='"+lst_style+"'>"; 
					
						for(var tlist = 0; tlist < jcc_data[3].image_list.length; tlist++)
							{


				Img_List_Maker = Img_List_Maker + "<li style='margin-left:40px ;text-align:"+jcc_data[5].image_text_alignmnet+"'><"+jcc_data[3].List_Text_Size+">"+jcc_data[3].image_list[tlist].img_lstText+"</"+jcc_data[3].List_Text_Size+"></li>";
							}
					

					Img_List_Maker = Img_List_Maker + "</"+jcc_data[3].Type_of_List+">";
									
					if(actc === 1)
						{ 
							
						if(screen.width <= 540)
							{
					jb_Acc_Con = jb_Acc_Con + "<div class='col-lg-6 col-md-6 col-xs-12' style='margin-bottom:10px; margin-top:10px; background-color: " + jcc_data[7].background_color + ";border-style:"+jcc_data[3].list_border_style+";border-width:"+jcc_data[3].list_border_height+";border-color:"+jcc_data[3].list_border_color+"'>";								
							}
							
						if(screen.width > 540)	
							{

									


					jb_Acc_Con = jb_Acc_Con + "<div class='col-lg-6 col-md-6 col-xs-12' style='margin-bottom:10px; margin-top:"+jcc_data[4].image_text_top_margin+";background-color: " + jcc_data[7].background_color + ";border-style:"+jcc_data[3].list_border_style+";border-width:"+jcc_data[3].list_border_height+";border-color:"+jcc_data[3].list_border_color+"'>";								
							}
		
						}
					
					if(actc === 0)
						{
					jb_Acc_Con = jb_Acc_Con + "<div class='col-lg-12 col-md-12 col-xs-12' style='margin-bottom:20px; margin-top:"+jcc_data[4].image_text_top_margin+";background-color: " + jcc_data[7].background_color + ";border-style:"+jcc_data[3].list_border_style+";border-width:"+jcc_data[3].list_border_height+";border-color:"+jcc_data[3].list_border_color+"'>";		
						}

					if(jcc_data[3].list_position === "top")
						{
							jb_Acc_Con = jb_Acc_Con + Img_List_Maker;
						}
				

					jb_Acc_Con = jb_Acc_Con + "<div style='text-align:"+jcc_data[5].image_text_alignmnet+"'><"+jcc_data[5].image_font_size+">"+jcc_data[3].image_text+"</"+jcc_data[5].image_font_size+"></div>";
	
					if(jcc_data[3].list_position === "bottom")
						{
							jb_Acc_Con = jb_Acc_Con + Img_List_Maker;
						}
					
					if(jcc_data[3].image_text_below !== "undefined") 
						{
							jb_Acc_Con = jb_Acc_Con + "<div style='margin-top:"+jcc_data[3].image_text_below_top_margin+";text-align:"+jcc_data[5].image_text_alignmnet+"'><"+jcc_data[5].image_font_size+">"+jcc_data[3].image_text_below+"</"+jcc_data[5].image_font_size+"></div>";							
						}
//jcc_data[3].image_text_below_top_margin
					jb_Acc_Con = jb_Acc_Con + "</div>";
					
					}
				}

		function ac_list()
				{
					
				}

				//-------<( Added by Jack on 02/29/2021 )>-------
				var iwtwfix;
				if(screen.width <= 540){iwtwfix = "100%"}
				if(screen.width > 540){iwtwfix = jcc_data[2].image_size}
				//-------<( Added by Jack on 02/29/2021 )>-------
				
				switch(jcc_data[1].image_position)
					{

						

						case "left":

						ac_twmi.push(jcc_data[0].image_name);

						imgwt_ac_whole[jcc] = ac_twmi;

							img_lst_ada = 0;
							jb_Acc_Con = jb_Acc_Con + "<div class='col-lg-6 col-md-6 col-xs-12'>";
							if(jcc_data[0].image_w_text_tag.length <= 125)
								{
									jb_Acc_Con = jb_Acc_Con + "<img style='border-style:"+jcc_data[0].border_style+"; border-width:"+jcc_data[0].border_height+"; border-color:"+jcc_data[0].border_color+"; border-radius:"+ jcc_data[8].image_radius +"' src='"+img_loc+"" + jcc_data[0].image_name + "' width=' " + iwtwfix + " ' height='auto' alt='"+jcc_data[0].image_w_text_tag+"'>";
								}
							if(jcc_data[0].image_w_text_tag.length > 125)
								{
									
								////	console.log("imgwt_ac_whole["+jcc+"]: " + imgwt_ac_whole[jcc]);

									img_lst_ada = ("" + jcc + acc_Count);
									jb_Acc_Con = jb_Acc_Con + "<img style='border-style:"+jcc_data[0].border_style+"; border-width:"+jcc_data[0].border_height+"; border-color:"+jcc_data[0].border_color+"; border-radius:"+ jcc_data[8].image_radius +"' src='"+img_loc+"" + jcc_data[0].image_name + "' width=' " + iwtwfix + " ' height='auto' alt='Select image for more information' role='button' onclick='imlt_zoom("+jcc+","+acc_Count+",101)'>";

								//-------<( Added by Jack on 11/30/2020. )>-------
								//-------<( Updated by James on 1/26/2021. )>-------
									jb_Acc_Con = jb_Acc_Con + "<div style='margin-top:10px'><button class='btn btn-primary btn-sm' role='button' onclick='alt_tag_lib("+img_lst_ada+")'>" + imgDescButton + "</button></div>";
								//-------<( Added by Jack on 11/30/2020. )>-------	
									
										Alt_Tag_Image_Data[img_lst_ada] = jcc_data[0].image_w_text_tag;
										Alt_Tag_Image_name[img_lst_ada]	= jcc_data[0].image_name;	
								}
							jb_Acc_Con = jb_Acc_Con + "</div>";	

							ac_twmi = []
							
							ac_text(1);
						break;
							
						case "right":
						//		console.log("####### case right #######")
							ac_text(1);
							img_lst_ada = 0;
							jb_Acc_Con = jb_Acc_Con + "<div class='col-lg-6 col-md-6 col-xs-12'>";
							if(jcc_data[0].image_w_text_tag.length <= 125)
								{
									jb_Acc_Con = jb_Acc_Con + "<img style='border-style:"+jcc_data[0].border_style+"; border-width:"+jcc_data[0].border_height+"; border-color:"+jcc_data[0].border_color+"; border-radius:"+ jcc_data[8].image_radius +"' src='"+img_loc+"" + jcc_data[0].image_name + "' width=' " + iwtwfix + " ' height='auto' alt='"+jcc_data[0].image_w_text_tag+"'>";
								}
							if(jcc_data[0].image_w_text_tag.length > 125)
								{
									img_lst_ada = ("" + jcc + acc_Count);

									jb_Acc_Con = jb_Acc_Con + "<img style='border-style:"+jcc_data[0].border_style+"; border-width:"+jcc_data[0].border_height+"; border-color:"+jcc_data[0].border_color+"; border-radius:"+ jcc_data[8].image_radius +"' src='"+img_loc+"" + jcc_data[0].image_name + "' width=' " + iwtwfix + " ' height='auto' alt='' role='button' onclick='imlt_zoom("+jcc+","+acc_Count+",101)'>";
																							
								//-------<( Added by Jack on 11/30/2020. )>-------
								//-------<( Updated by James on 1/26/2021. )>-------	
								jb_Acc_Con = jb_Acc_Con + "<div style='margin-top:10px'><button class='btn btn-primary btn-sm' role='button' onclick='alt_tag_lib("+img_lst_ada+")'>" + imgDescButton + "</button></div>";
								//-------<( Added by Jack on 11/30/2020. )>-------										
									
										Alt_Tag_Image_Data[img_lst_ada] = jcc_data[0].image_w_text_tag;
										Alt_Tag_Image_name[img_lst_ada]	= jcc_data[0].image_name;									
								}							
							
							
							jb_Acc_Con = jb_Acc_Con + "</div>";
							
						break;
						
						case "top": //ac_text(0); style='margin-bottom:0px;'
							jb_Acc_Con = jb_Acc_Con + "<div class='col-lg-12 col-md-12 col-xs-12'>";
							img_lst_ada = 0;
							if(jcc_data[0].image_w_text_tag.length <= 125)
								{
									jb_Acc_Con = jb_Acc_Con + "<img style='border-style:"+jcc_data[0].border_style+"; border-width:"+jcc_data[0].border_height+"; border-color:"+jcc_data[0].border_color+"; border-radius:"+ jcc_data[8].image_radius +"' src='"+img_loc+"" + jcc_data[0].image_name + "' width=' " + iwtwfix + " ' height='auto' alt='"+jcc_data[0].image_w_text_tag+"'>";
								}
							if(jcc_data[0].image_w_text_tag.length > 125)
								{
									img_lst_ada = ("" + jcc + acc_Count);
									jb_Acc_Con = jb_Acc_Con + "<img style='border-style:"+jcc_data[0].border_style+"; border-width:"+jcc_data[0].border_height+"; border-color:"+jcc_data[0].border_color+"; border-radius:"+ jcc_data[8].image_radius +"' src='"+img_loc+"" + jcc_data[0].image_name + "' width=' " + iwtwfix + " ' height='auto' alt='Select image for more information' role='button' onclick='imlt_zoom("+jcc+","+acc_Count+",101)'>";

								//-------<( Added by Jack on 11/30/2020. )>-------
								//-------<( Updated by James on 1/26/2021. )>-------
								jb_Acc_Con = jb_Acc_Con + "<div style='margin-top:10px'><button class='btn btn-primary btn-sm' role='button' onclick='alt_tag_lib("+img_lst_ada+")'>" + imgDescButton + "</button></div>";
								//-------<( Added by Jack on 11/30/2020. )>-------										
									
										Alt_Tag_Image_Data[img_lst_ada] = jcc_data[0].image_w_text_tag;
										Alt_Tag_Image_name[img_lst_ada]	= jcc_data[0].image_name;									
								}								
							ac_text(0);
							jb_Acc_Con = jb_Acc_Con + "</div>";
						break;	
							
						case "bottom": //ac_text(0);
							jb_Acc_Con = jb_Acc_Con + "<div class='col-lg-12 col-md-12 col-xs-12'>";
							img_lst_ada = 0;
							ac_text(0);
							if(jcc_data[0].image_w_text_tag.length <= 125)
								{
									jb_Acc_Con = jb_Acc_Con + "<img style='border-style:"+jcc_data[0].border_style+"; border-width:"+jcc_data[0].border_height+"; border-color:"+jcc_data[0].border_color+"; border-radius:"+ jcc_data[8].image_radius +"' src='"+img_loc+"" + jcc_data[0].image_name + "' width=' " + iwtwfix + " ' height='auto' alt='"+jcc_data[0].image_w_text_tag+"'>";
								}
							if(jcc_data[0].image_w_text_tag.length > 125)
								{
									img_lst_ada = ("" + jcc + acc_Count);
									
									jb_Acc_Con = jb_Acc_Con + "<img style='border-style:"+jcc_data[0].border_style+"; border-width:"+jcc_data[0].border_height+"; border-color:"+jcc_data[0].border_color+"; border-radius:"+ jcc_data[8].image_radius +"' src='"+img_loc+"" + jcc_data[0].image_name + "' width=' " + iwtwfix + " ' height='auto' alt='Select image for more information' role='button' onclick='imlt_zoom("+jcc+","+acc_Count+",101)'>";

								//-------<( Added by Jack on 11/30/2020. )>-------
								//-------<( Updated by James on 1/26/2021. )>-------
									jb_Acc_Con = jb_Acc_Con + "<div style='margin-top:10px'><button class='btn btn-primary btn-sm' role='button' onclick='alt_tag_lib("+img_lst_ada+")'>" + imgDescButton + "</button></div>";
								//-------<( Added by Jack on 11/30/2020. )>-------										
									
										Alt_Tag_Image_Data[img_lst_ada] = jcc_data[0].image_w_text_tag;
										Alt_Tag_Image_name[img_lst_ada]	= jcc_data[0].image_name;									
								}							
							jb_Acc_Con = jb_Acc_Con + "</div>";							
						break;	
					}				
				

					jb_Acc_Con = jb_Acc_Con + "</div>";												
					jb_Acc_Con = jb_Acc_Con + "</div>";												
											
				Jcc_Comp_Maker = Jcc_Comp_Maker +  "<div style='background-color:"+acc_setup_array[3]+";' id='collapse"+jcc+"_"+acc_Count+"' class='panel-collapse collapse'><div class='panel-body'>"+ jb_Acc_Con +"</div></div>"; 

	
			break;	
//-------------------------------------------------------------------------------------------------------------	
//-------<( Image with Text code end New )>------- AC											
//-------------------------------------------------------------------------------------------------------------					
				
//-------------------------------------------------------------------------------------------------------------	
//-------<( Image with Text code begin Old )>------- AC											
//-------------------------------------------------------------------------------------------------------------														
			case "image_w_text_old": //AC
img_list_array = [];				
Img_List_Maker = "";
//Img_List_Arrray_Maker = [];
					jcc_data = sSelections[jcc][snglBld[jcc]][accm].image_w_text;
jb_Acc_Con = "<div style='margin-top: " + jcc_data[6].top_margin + "'>";											
jb_Acc_Con = jb_Acc_Con + "<div style='background-color: " + jcc_data[7].background_color + "'>";								

		if(typeof jcc_data[0].image_w_text_tag === "undefined")
			{
				ADA_check_Array[jcc] =  jcc_data[0].image_name + " needs the Alt tag fields added in the Accordion."
			}				
			
			//alert(jcc_data[1].image_position)
			//alert(jcc_data[3].image_list);
		
	if(typeof jcc_data[3].image_list !== "undefined")
		{
		for(var img_list_num = 0; img_list_num < jcc_data[3].image_list.length; img_list_num++)
			{
				img_list_array[img_list_num] = jcc_data[3].image_list[img_list_num].img_lstText;

				
				if(img_list_num === (jcc_data[3].image_list.length - 1))
					{
						img_list_marray[jcc] = img_list_array;
						
					}				
			}

		switch(jcc_data[1].image_position)
			{
				case "left":
				case "right":
					//Img_List_Maker = "<div id='img_list_"+jcc+"' class='col-lg-6 col-md-6 col-xs-12 jb_mx_wd' align='left' style='margin-top:"+jcc_data[3].top_margin+";'>";
				break;	
					
				case "top":
				case "bottom":
					//Img_List_Maker = "<div id='img_list_"+jcc+"' class='col-lg-12 col-md-12 col-xs-12 jb_mx_wd' align='left' style='margin-top:"+jcc_data[3].top_margin+";'>";
				break;						
			}
			
						lstyp = jcc_data[3].Type_of_List;
						switch(lstyp)
							{
								case "ul":
									lst_style = jcc_data[3].ul_type;
								break;
									
								case "ol":
									lst_style = jcc_data[3].ol_type;
								break;	
							}			
			//jcc_data[3].List_Text_Size
			
					Img_List_Maker = Img_List_Maker + "<"+lstyp+" type='"+lst_style+"' style='list-style-type:"+lst_style+";'>";	
							
						for(var mila = 0; mila < img_list_marray[jcc].length; mila++)
								{
									Img_List_Maker = Img_List_Maker + "<li style='text-align:left;'><"+jcc_data[3].List_Text_Size+">"+img_list_marray[jcc][mila]+"</"+jcc_data[3].List_Text_Size+"></li>";
									
									
									
								}
					Img_List_Maker = Img_List_Maker + "</"+lstyp+">";
					//Img_List_Maker = Img_List_Maker + "</div>";			
			
			
			
		}
		
				
		switch(jcc_data[1].image_position)
			{ // border-style:"+jcc_data[0].border_style+"; border-width:"+jcc_data[0].border_height+"; border-color:"+jcc_data[0].border_color+";
				case "top": //jcc_data[5].image_font_size
				
				if(typeof jcc_data[0].image_w_text_tag === "undefined")
					{
					jb_Acc_Con = jb_Acc_Con + "<div><img style='border-style:"+jcc_data[0].border_style+"; border-width:"+jcc_data[0].border_height+"; border-color:"+jcc_data[0].border_color+"; border-radius:"+ jcc_data[8].image_radius +"' src='"+img_loc+"" + jcc_data[0].image_name + "' width=' " + jcc_data[2].image_size + " ' height='auto' alt=''></div>";							
					}
					
				if(typeof jcc_data[0].image_w_text_tag !== "undefined")
					{
						if(jcc_data[0].image_w_text_tag.length <= 125)
							{
					jb_Acc_Con = jb_Acc_Con + "<div><img style='border-style:"+jcc_data[0].border_style+"; border-width:"+jcc_data[0].border_height+"; border-color:"+jcc_data[0].border_color+"; border-radius:"+ jcc_data[8].image_radius +"' src='"+img_loc+"" + jcc_data[0].image_name + "' width=' " + jcc_data[2].image_size + " ' height='auto' alt='"+jcc_data[0].image_w_text_tag+"'></div>";										
							}
						if(jcc_data[0].image_w_text_tag.length > 125)
							{
					Alt_Tag_Image_Data[jcc] = jcc_data[0].image_w_text_tag;
					Alt_Tag_Image_name[jcc]	= jcc_data[0].image_name;		
								
					jb_Acc_Con = jb_Acc_Con + "<div><img style='border-style:"+jcc_data[0].border_style+"; border-width:"+jcc_data[0].border_height+"; border-color:"+jcc_data[0].border_color+"; border-radius:"+ jcc_data[8].image_radius +"' src='"+img_loc+"" + jcc_data[0].image_name + "' width=' " + jcc_data[2].image_size + " ' height='auto' alt='Select image for more information' role='button' onclick='alt_tag_lib("+jcc+")'></div>";									
							}
					}					
					jb_Acc_Con = jb_Acc_Con + "<div style='border-style:"+jcc_data[3].list_border_style+"; border-height:"+jcc_data[3].list_border_height+";border-color:"+jcc_data[3].list_border_color+"'>";
					if(jcc_data[3].list_position === "top")
							{
								jb_Acc_Con = jb_Acc_Con + Img_List_Maker;
							}	

					jb_Acc_Con = jb_Acc_Con + "<div class='jb_char_para' style='font-style:"+jcc_data[4].image_text_style+";font-variant:"+jcc_data[4].image_text_variant+";font-weight:"+jcc_data[4].image_text_weight+";color:"+jcc_data[4].image_text_color+";text-align: "+ jcc_data[5].image_text_alignmnet +";'><"+jcc_data[5].image_font_size+">" + jcc_data[3].image_text + "</"+jcc_data[5].image_font_size+"></div>";			
					
					if(jcc_data[3].list_position === "bottom")
							{
								jb_Acc_Con = jb_Acc_Con + Img_List_Maker;
							}
			if(typeof jcc_data[3].image_text_below !== "undefined")
				{					
					jb_Acc_Con = jb_Acc_Con + "<div class='jb_char_para' style='font-style:"+jcc_data[4].image_text_style+";font-variant:"+jcc_data[4].image_text_variant+";font-weight:"+jcc_data[4].image_text_weight+";color:"+jcc_data[4].image_text_color+";text-align: "+ jcc_data[5].image_text_alignmnet +";'><"+jcc_data[5].image_font_size+">" + jcc_data[3].image_text_below + "</"+jcc_data[5].image_font_size+"></div>";						
				}	
					
					
					jb_Acc_Con = jb_Acc_Con + "</div>";
				break;
			
					
/*
								"list_border_style":"solid",  //solid, dashed, dotted, double, ridge, groove,
								"list_border_height":"4px", // "" or 0px  will have no border, add a number with px for a border
								"list_border_color":"red",									
*/					
					
					
					
				case "bottom":
				
if(screen.width <= 540)
	{
				if(typeof jcc_data[0].image_w_text_tag === "undefined")
					{
					jb_Acc_Con = jb_Acc_Con + "<div><img style='border-style:"+jcc_data[0].border_style+"; border-width:"+jcc_data[0].border_height+"; border-color:"+jcc_data[0].border_color+"; border-radius:"+ jcc_data[8].image_radius +"' src='"+img_loc+"" + jcc_data[0].image_name + "' width=' " + jcc_data[2].image_size + " ' height='auto' alt=''></div>";							
					}
					
				if(typeof jcc_data[0].image_w_text_tag !== "undefined")
					{
						if(jcc_data[0].image_w_text_tag.length <= 125)
							{
					jb_Acc_Con = jb_Acc_Con + "<div><img style='border-style:"+jcc_data[0].border_style+"; border-width:"+jcc_data[0].border_height+"; border-color:"+jcc_data[0].border_color+"; border-radius:"+ jcc_data[8].image_radius +"' src='"+img_loc+"" + jcc_data[0].image_name + "' width=' " + jcc_data[2].image_size + " ' height='auto' alt='"+jcc_data[0].image_w_text_tag+"'></div>";										
							}
						if(jcc_data[0].image_w_text_tag.length > 125)
							{
					Alt_Tag_Image_Data[jcc] = jcc_data[0].image_w_text_tag;
					Alt_Tag_Image_name[jcc]	= jcc_data[0].image_name;		
								
					jb_Acc_Con = jb_Acc_Con + "<div><img style='border-style:"+jcc_data[0].border_style+"; border-width:"+jcc_data[0].border_height+"; border-color:"+jcc_data[0].border_color+"; border-radius:"+ jcc_data[8].image_radius +"' src='"+img_loc+"" + jcc_data[0].image_name + "' width=' " + jcc_data[2].image_size + " ' height='auto' alt='Select image for more information' role='button' onclick='alt_tag_lib("+jcc+")'></div>";									
							}
					}					
					
					jb_Acc_Con = jb_Acc_Con + "<div style='border-style:"+jcc_data[3].list_border_style+"; border-height:"+jcc_data[3].list_border_height+";border-color:"+jcc_data[3].list_border_color+"'>";		
					if(jcc_data[3].list_position === "top")
							{
								jb_Acc_Con = jb_Acc_Con + Img_List_Maker;
							}	

					jb_Acc_Con = jb_Acc_Con + "<div class='jb_char_para' style='font-style:"+jcc_data[4].image_text_style+";font-variant:"+jcc_data[4].image_text_variant+";font-weight:"+jcc_data[4].image_text_weight+";color:"+jcc_data[4].image_text_color+";text-align: "+ jcc_data[5].image_text_alignmnet +";'><"+jcc_data[5].image_font_size+">" + jcc_data[3].image_text + "</"+jcc_data[5].image_font_size+"></div>";				
					if(jcc_data[3].list_position === "bottom")
							{
								jb_Acc_Con = jb_Acc_Con + Img_List_Maker;
							}
		
			if(typeof jcc_data[3].image_text_below !== "undefined")
				{		
					jb_Acc_Con = jb_Acc_Con + "<div class='jb_char_para' style='font-style:"+jcc_data[4].image_text_style+";font-variant:"+jcc_data[4].image_text_variant+";font-weight:"+jcc_data[4].image_text_weight+";color:"+jcc_data[4].image_text_color+";text-align: "+ jcc_data[5].image_text_alignmnet +";'><"+jcc_data[5].image_font_size+">" + jcc_data[3].image_text_below + "</"+jcc_data[5].image_font_size+"></div>";			
				}
		
					jb_Acc_Con = jb_Acc_Con + "</div>";
				break;		
	}
					
if(screen.width > 540)
	{
				
				jb_Acc_Con = jb_Acc_Con + "<div style='border-style:"+jcc_data[3].list_border_style+"; border-height:"+jcc_data[3].list_border_height+";border-color:"+jcc_data[3].list_border_color+"'>";		
				
					if(jcc_data[3].list_position === "top")
							{
								//alert("Large Display Top");
								jb_Acc_Con = jb_Acc_Con + Img_List_Maker;
							}
		
					jb_Acc_Con = jb_Acc_Con + "<div class='jb_char_para' style='font-style:"+jcc_data[4].image_text_style+";font-variant:"+jcc_data[4].image_text_variant+";font-weight:"+jcc_data[4].image_text_weight+";color:"+jcc_data[4].image_text_color+";text-align: "+ jcc_data[5].image_text_alignmnet +";'><"+jcc_data[5].image_font_size+">" + jcc_data[3].image_text + "</"+jcc_data[5].image_font_size+"></div>";	
		
				if(jcc_data[3].list_position === "bottom")
							{
								jb_Acc_Con = jb_Acc_Con + Img_List_Maker;
							}		
			
			if(typeof jcc_data[3].image_text_below !== "undefined")
				{		
					jb_Acc_Con = jb_Acc_Con + "<div class='jb_char_para' style='font-style:"+jcc_data[4].image_text_style+";font-variant:"+jcc_data[4].image_text_variant+";font-weight:"+jcc_data[4].image_text_weight+";color:"+jcc_data[4].image_text_color+";text-align: "+ jcc_data[5].image_text_alignmnet +";'><"+jcc_data[5].image_font_size+">" + jcc_data[3].image_text_below + "</"+jcc_data[5].image_font_size+"></div>";			
				}
		
		
					jb_Acc_Con = jb_Acc_Con + "</div>";		
		
				if(typeof jcc_data[0].image_w_text_tag === "undefined")
					{
					jb_Acc_Con = jb_Acc_Con + "<div><img style='border-style:"+jcc_data[0].border_style+"; border-width:"+jcc_data[0].border_height+"; border-color:"+jcc_data[0].border_color+"; border-radius:"+ jcc_data[8].image_radius +"' src='"+img_loc+"" + jcc_data[0].image_name + "' width=' " + jcc_data[2].image_size + " ' height='auto' alt=''/></div>";							
					}
					
				if(typeof jcc_data[0].image_w_text_tag !== "undefined")
					{
						if(jcc_data[0].image_w_text_tag.length <= 125)
							{
					jb_Acc_Con = jb_Acc_Con + "<div><img style='border-style:"+jcc_data[0].border_style+"; border-width:"+jcc_data[0].border_height+"; border-color:"+jcc_data[0].border_color+"; border-radius:"+ jcc_data[8].image_radius +"' src='"+img_loc+"" + jcc_data[0].image_name + "' width=' " + jcc_data[2].image_size + " ' height='auto' alt='"+jcc_data[0].image_w_text_tag+"'/></div>";										
							}
						if(jcc_data[0].image_w_text_tag.length > 125)
							{
								
					Alt_Tag_Image_Data[jcc] = jcc_data[0].image_w_text_tag;
					Alt_Tag_Image_name[jcc]	= jcc_data[0].image_name;		
								
					jb_Acc_Con = jb_Acc_Con + "<div><img style='border-style:"+jcc_data[0].border_style+"; border-width:"+jcc_data[0].border_height+"; border-color:"+jcc_data[0].border_color+"; border-radius:"+ jcc_data[8].image_radius +"' src='"+img_loc+"" + jcc_data[0].image_name + "' width=' " + jcc_data[2].image_size + " ' height='auto' alt='Select image for more information' role='button' onclick='alt_tag_lib("+jcc+")'></div>";									
								
							}
					}		
	}					

					
			
				break;
					
				case "left":

					jb_Acc_Con = jb_Acc_Con + "<div class='col-lg-12 col-md-12 col-xs-12'>";
					
				if(typeof jcc_data[0].image_w_text_tag === "undefined")
					{
					jb_Acc_Con = jb_Acc_Con + "<div class='col-lg-6 col-md-6 col-xs-12'><img style='border-style:"+jcc_data[0].border_style+"; border-width:"+jcc_data[0].border_height+"; border-color:"+jcc_data[0].border_color+"; border-radius:"+ jcc_data[8].image_radius +"' src='"+img_loc+"" + jcc_data[0].image_name + "' width=' " + jcc_data[2].image_size + " ' height='auto' alt=''></div>";							
					}
					
				if(typeof jcc_data[0].image_w_text_tag !== "undefined")
					{
						if(jcc_data[0].image_w_text_tag.length <= 125)
							{
					jb_Acc_Con = jb_Acc_Con + "<div class='col-lg-6 col-md-6 col-xs-12'><img style='border-style:"+jcc_data[0].border_style+"; border-width:"+jcc_data[0].border_height+"; border-color:"+jcc_data[0].border_color+"; border-radius:"+ jcc_data[8].image_radius +"' src='"+img_loc+"" + jcc_data[0].image_name + "' width=' " + jcc_data[2].image_size + " ' height='auto' alt='"+jcc_data[0].image_w_text_tag+"'></div>";								
							}
						if(jcc_data[0].image_w_text_tag.length > 125)
							{
								
					Alt_Tag_Image_Data[jcc] = jcc_data[0].image_w_text_tag;
					Alt_Tag_Image_name[jcc]	= jcc_data[0].image_name;		
								
					jb_Acc_Con = jb_Acc_Con + "<div class='col-lg-6 col-md-6 col-xs-12'><img style='border-style:"+jcc_data[0].border_style+"; border-width:"+jcc_data[0].border_height+"; border-color:"+jcc_data[0].border_color+"; border-radius:"+ jcc_data[8].image_radius +"' src='"+img_loc+"" + jcc_data[0].image_name + "' width=' " + jcc_data[2].image_size + " ' height='auto' alt='Select image for more information' role='button' onclick='alt_tag_lib("+jcc+")'></div>";									
								
							}
					}					
					jb_Acc_Con = jb_Acc_Con + "<div class='col-lg-6 col-md-6 col-xs-12'>";

					jb_Acc_Con = jb_Acc_Con + "<div style='border-style:"+jcc_data[3].list_border_style+"; border-height:"+jcc_data[3].list_border_height+";border-color:"+jcc_data[3].list_border_color+"'>";					
					
							if(jcc_data[3].list_position === "top")
							{
								jb_Acc_Con = jb_Acc_Con + Img_List_Maker;
							}					
					//margin-top:"+sSelections[jcc][snglBld[jcc]][4].image_text_top_margin+";
					jb_Acc_Con = jb_Acc_Con + "<div style='margin-top: "+jcc_data[4].image_text_top_margin+"; display: inline-block; font-style:"+jcc_data[4].image_text_style+";font-variant:"+jcc_data[4].image_text_variant+";font-weight:"+jcc_data[4].image_text_weight+";color:"+jcc_data[4].image_text_color+"; text-align: "+ jcc_data[5].image_text_alignmnet +";'><"+jcc_data[5].image_font_size+">"+jcc_data[3].image_text+"</"+jcc_data[5].image_font_size+"></div>";					
					
					
							if(jcc_data[3].list_position === "bottom")
							{
								jb_Acc_Con = jb_Acc_Con + Img_List_Maker;
							}
			if(typeof jcc_data[3].image_text_below !== "undefined")
				{
					jb_Acc_Con = jb_Acc_Con + "<div class='jb_mx_wd' style='margin-top: "+jcc_data[4].image_text_top_margin+"; display: inline-block; font-style:"+jcc_data[4].image_text_style+";font-variant:"+jcc_data[4].image_text_variant+";font-weight:"+jcc_data[4].image_text_weight+";color:"+jcc_data[4].image_text_color+"; text-align: "+ jcc_data[5].image_text_alignmnet +";'><"+jcc_data[5].image_font_size+">"+jcc_data[3].image_text_below+"</"+jcc_data[5].image_font_size+"></div>";
				}	
					
//image_text_below					
					
					
					jb_Acc_Con = jb_Acc_Con + "</div>";					
				
					jb_Acc_Con = jb_Acc_Con + "</div>";	
					jb_Acc_Con = jb_Acc_Con + "</div>";
				break;
					
				case "right": 
					//		console.log("Place image on the right");
					jb_Acc_Con = jb_Acc_Con + "<div class='col-lg-12 col-md-12 col-xs-12'>";
					
					
					jb_Acc_Con = jb_Acc_Con + "<div class='col-lg-6 col-md-6 col-xs-12'>";
					

					jb_Acc_Con = jb_Acc_Con + "<div style='border-style:"+jcc_data[3].list_border_style+"; border-height:"+jcc_data[3].list_border_height+";border-color:"+jcc_data[3].list_border_color+"'>";					
					
							if(jcc_data[3].list_position === "top")
							{
								jb_Acc_Con = jb_Acc_Con + Img_List_Maker;
							}						
					
					jb_Acc_Con = jb_Acc_Con + "<div style='margin-top: "+jcc_data[4].image_text_top_margin+"; display: inline-block; font-style:"+jcc_data[4].image_text_style+";font-variant:"+jcc_data[4].image_text_variant+";font-weight:"+jcc_data[4].image_text_weight+";color:"+jcc_data[4].image_text_color+"; text-align: "+ jcc_data[5].image_text_alignmnet +";'><"+jcc_data[5].image_font_size+">"+jcc_data[3].image_text+"</"+jcc_data[5].image_font_size+"></div>";
					
							if(jcc_data[3].list_position === "bottom")
							{
								jb_Acc_Con = jb_Acc_Con + Img_List_Maker;
							}
					
			if(typeof jcc_data[3].image_text_below !== "undefined")
				{
					
					jb_Acc_Con = jb_Acc_Con + "<div class='jb_mx_wd' style='margin-top: "+jcc_data[4].image_text_top_margin+"; display: inline-block; font-style:"+jcc_data[4].image_text_style+";font-variant:"+jcc_data[4].image_text_variant+";font-weight:"+jcc_data[4].image_text_weight+";color:"+jcc_data[4].image_text_color+"; text-align: "+ jcc_data[5].image_text_alignmnet +";'><"+jcc_data[5].image_font_size+">"+jcc_data[3].image_text_below+"</"+jcc_data[5].image_font_size+"></div>";
				}	
					
					
					jb_Acc_Con = jb_Acc_Con + "</div>";
					
					jb_Acc_Con = jb_Acc_Con + "</div>";
					
				
				if(typeof jcc_data[0].image_w_text_tag === "undefined")
					{
					jb_Acc_Con = jb_Acc_Con + "<div class='col-lg-6 col-md-6 col-xs-12'><img style='border-style:"+jcc_data[0].border_style+"; border-width:"+jcc_data[0].border_height+"; border-color:"+jcc_data[0].border_color+"; border-radius:"+ jcc_data[8].image_radius +"' src='"+img_loc+"" + jcc_data[0].image_name + "' width=' " + jcc_data[2].image_size + " ' height='auto' alt=''></div>";							
					}
					
				if(typeof jcc_data[0].image_w_text_tag !== "undefined")
					{
						if(jcc_data[0].image_w_text_tag.length <= 125)
							{
					jb_Acc_Con = jb_Acc_Con + "<div class='col-lg-6 col-md-6 col-xs-12'><img style='border-style:"+jcc_data[0].border_style+"; border-width:"+jcc_data[0].border_height+"; border-color:"+jcc_data[0].border_color+"; border-radius:"+ jcc_data[8].image_radius +"' src='"+img_loc+"" + jcc_data[0].image_name + "' width=' " + jcc_data[2].image_size + " ' height='auto' alt='"+jcc_data[0].image_w_text_tag+"'></div>";									
							}
						if(jcc_data[0].image_w_text_tag.length > 125)
							{
								
					Alt_Tag_Image_Data[jcc] = jcc_data[0].image_w_text_tag;
					Alt_Tag_Image_name[jcc]	= jcc_data[0].image_name;		
								
					jb_Acc_Con = jb_Acc_Con + "<div class='col-lg-6 col-md-6 col-xs-12'><img style='border-style:"+jcc_data[0].border_style+"; border-width:"+jcc_data[0].border_height+"; border-color:"+jcc_data[0].border_color+"; border-radius:"+ jcc_data[8].image_radius +"' src='"+img_loc+"" + jcc_data[0].image_name + "' width=' " + jcc_data[2].image_size + " ' height='auto' alt='Select image for more information' role='button' onclick='alt_tag_lib("+jcc+")'></div>";									
								
							}
					}					
					
					jb_Acc_Con = jb_Acc_Con + "</div>";						
					
				break;				
			}
			
				
jb_Acc_Con = jb_Acc_Con + "<div>";

											
jb_Acc_Con = jb_Acc_Con + "</div>";											
									
											
jb_Acc_Con = jb_Acc_Con + "</div>";												
jb_Acc_Con = jb_Acc_Con + "</div>";												
											
				Jcc_Comp_Maker = Jcc_Comp_Maker +  "<div style='background-color:"+acc_setup_array[3]+";' id='collapse"+jcc+"_"+acc_Count+"' class='panel-collapse collapse'><div class='panel-body'>"+ jb_Acc_Con +"</div></div>"; 									
											
				break;					
				
//-------------------------------------------------------------------------------------------------------------	
//-------<( Image with Text code end )>------- AC											
//-------------------------------------------------------------------------------------------------------------												

				
			case "Heading":
					jcc_data = sSelections[jcc][snglBld[jcc]][accm].Heading;
			
jb_Acc_Con = "<p style='color: "+ jcc_data[5].color +"; font-weight: "+ jcc_data[4].style +"; font-size: "+ jcc_data[3].size +"; border-radius: "+ jcc_data[10].border_radius +";border-weight:"+ jcc_data[8].border_weight +" ;border-style:"+ jcc_data[9].border_style +"; border-color:"+ jcc_data[7].border_color +" ;background-color: "+ jcc_data[6].background_color +" ;margin-top: "+ jcc_data[2].top_margin +"; text-align: "+ jcc_data[1].alignment +"'>"+ jcc_data[0].sngl_Heading +"</p>";					
				
				Jcc_Comp_Maker = Jcc_Comp_Maker +  "<div style='background-color:"+acc_setup_array[3]+";' id='collapse"+jcc+"_"+acc_Count+"' class='panel-collapse collapse'><div class='panel-body'>"+ jb_Acc_Con +"</div></div>"; 			
			break;
				
				
			case "Heading_New": // AC
				    jcc_data = sSelections[jcc][snglBld[jcc]][accm].Heading_New;

jb_Acc_Con = "<div class='col-lg-12 col-md-12 col-xs-12' style='width:100%; margin-top:"+jcc_data[2].top_margin+";background-color: "+ jcc_data[6].background_color +"; border-top-color:"+jcc_data[7].top_line_color+"; border-top-width:"+jcc_data[7].top_line_weight+"; border-top-style:"+jcc_data[7].top_line_style+"; border-bottom-color:"+jcc_data[9].bottom_line_color+"; border-bottom-width:"+jcc_data[9].bottom_line_weight+"; border-bottom-style:"+jcc_data[9].bottom_line_style+"'><"+jcc_data[3].size+">";
	
										
											
jb_Acc_Con = jb_Acc_Con + "<p style='background-color:"+jcc_data[8].border_background_color+"; margin-top:"+jcc_data[8].border_top_margin+"; padding:"+jcc_data[8].border_padding+"; border-radius:"+jcc_data[8].border_inside_radius+"; border-color:"+jcc_data[8].border_inside_color+"; border-width:"+jcc_data[8].border_inside_weight+"; border-style:"+jcc_data[8].border_inside_style+" ; width:"+jcc_data[8].border_width+"; color: "+ jcc_data[5].color +"; font-weight: "+ jcc_data[4].style +";text-align: "+ jcc_data[1].alignment +"'>"+ jcc_data[0].sngl_Heading +"</p></"+jcc_data[3].size+"></div>";	
											

Jcc_Comp_Maker = Jcc_Comp_Maker +  "<div style='background-color:"+acc_setup_array[3]+";' id='collapse"+jcc+"_"+acc_Count+"' class='panel-collapse collapse'><div class='panel-body'>"+ jb_Acc_Con +"</div></div>"; 				
				

				
			break;	

				
				
				
				
				

//=========================================================================================================	
//=========================================================================================================	
			case "List_text": // Old
					jcc_data = sSelections[jcc][snglBld[jcc]][accm].List_text;

//=========================================================================================================				
			
jb_Acc_Con = "<div style='padding: "+ jcc_data[5].padding +"; margin-top: " + jcc_data[3].top_margin + "; background-color:"+jcc_data[4].background_color+"'>";											
				
jb_Acc_Con = jb_Acc_Con + "<"+ jcc_data[2].Type_of_List +">";

//-------<(  Heading )>-------											
jb_Acc_Con = jb_Acc_Con + "<p style='border-bottom-style: "+jcc_data[0].heading_underline+"; border-bottom-color:"+jcc_data[0].heading_underline_color+" ;border-bottom-width: "+jcc_data[0].heading_underline_height+"; font-size:"+jcc_data[0].heading_size+"; color:"+jcc_data[0].heading_color+"; font-weight: "+jcc_data[0].heading_style+"; text-align: "+ jcc_data[0].heading_alignment +"'>"+ jcc_data[0].List_Heading +"</p>";
//-------<(  Heading )>-------					

//-------<(  Paragraph )>-------
jb_Acc_Con = jb_Acc_Con + "<p style='font-size:"+jcc_data[0].paragraph_text_size+";text-align: "+ jcc_data[0].paragraph_alignment +"'>"+ jcc_data[0].Paragraph_text +"</p>";
//-------<(  Paragraph )>-------					
							for(lst = 7; lst < jcc_data.length; lst++)
								{
				
									List_Text_Array[lst] = (jcc_data[lst].lstText);
jb_Acc_Con = jb_Acc_Con + "<li style='margin-left:40px; font-size:"+jcc_data[2].List_Text_Size+"; color:"+ jcc_data[6].text_color +"; text-align: "+ jcc_data[1].align_text +";'>"+ List_Text_Array[lst] +"</li>";
									
										
								}
											
jb_Acc_Con = jb_Acc_Con + "</"+ jcc_data[2].Type_of_List +">";											
											//alert( sSelections[jcc][snglBld[jcc]][0].List_Heading );
jb_Acc_Con = jb_Acc_Con + "</div>";					

Jcc_Comp_Maker = Jcc_Comp_Maker +  "<div style='background-color:"+acc_setup_array[3]+";' id='collapse"+jcc+"_"+acc_Count+"' class='panel-collapse collapse'><div class='panel-body'>"+ jb_Acc_Con +"</div></div>"; 			

			break;
//=========================================================================================================				
//=========================================================================================================	
				
//-------------------------------------------------------------------------------------------------------------	
//-------<( Image 3 2 1 rows code begin AC )>-------											
//-------------------------------------------------------------------------------------------------------------											
									case "Image_Multi":

									//		console.log("______________________________________")	
									//		console.log("acc_Count: " + acc_Count);																
									//		console.log("--------------------------------------")	

		
					jcc_data = sSelections[jcc][snglBld[jcc]][accm].Image_Multi;
				
					

				//		console.log( (sSelections[jcc][snglBld[jcc]].length - 2) / 2 ) // gets the number of accordion tabs


					//var Image_Multi	= sSelections[jcc][snglBld[jcc]]; //[0]
							
		switch(jcc_data[0].total_images)
			{
				case "1":
						im_rnbr = 12;
				break;
					
				case "2":
						im_rnbr = 6;
				break;
					
				case "3":
						im_rnbr = 4;
				break;					
			}
	
				if(jcc_data[0].total_images === "" || jcc_data[0].total_images > 3 || jcc_data[0].total_images === "0")
					{
						//alert("Bad Data!");
						break;
					}
			
					//  mi_iwt_img_array.push(Image_Multi[im_ttl].image_file);

					//	mi_iwt_img_array.push(jcc_data[im_ttl_ac].image_file);


		
				
				
jb_Acc_Con = "<div class='col-lg-12 col-md-12 col-xs-12' style='margn-top:"+jcc_data[0].top_margin+";height: 100%; background-color:"+jcc_data[0].main_background_color+"; padding-bottom: 10px;'>";												
			for(var im_ttl_ac = 1; im_ttl_ac <= jcc_data[0].total_images; im_ttl_ac++)  //Image_Multi[im_ttl].image_border_width
				{
					
//onclick='mi_iwt_zoom("+jcc+","+im_ttl+")' id='mig_"+jcc+"'

//mi_iwt_array[8]: M1L2P2/HectorMaria.jpg
//acc_Count: 3

mi_iwt_img_array.push(jcc_data[im_ttl_ac].image_file);
					mi_iwt_array[jcc] = mi_iwt_img_array;
				//		console.log("▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄") // 12/14/2020
				//		console.log("═════════════════════════════════════════════════");
					//console.log("jcc_data: " + jcc_data.length);
				//		console.log("acc_Count: " + acc_Count);
				//		console.log("mi_iwt_array[" + jcc + "]: " + mi_iwt_array[jcc]);
					
					ac_img_zoom_img[acc_Count] = mi_iwt_array[jcc];

					////ac_img_zoom_array[acc_Count] = mi_iwt_array[jcc];  // Works

					//ac_img_zoom_array.splice(acc_Count, mi_iwt_array[jcc]); // Added on 12\15\2020

					//ac_img_zoom_array[acc_Count] = mi_iwt_array[jcc]
				//	ac_img_zoom_array.push()

					//console.log("im_count_whole["+(acc_Count - 1) +"]: " + im_count_whole[acc_Count - 1]);
					//console.log("ac_img_zoom_array : " + ac_img_zoom_array)
				//		console.log("═════════════════════════════════════════════════");
				//		console.log("▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄")
					mi_iwt_img_array = [];
					
				if(typeof jcc_data[im_ttl_ac].image_file_tag !== "undefined")	
					{
					
					if(jcc_data[im_ttl_ac].image_file_tag.length <= 125)
						{
							jb_Acc_Con = jb_Acc_Con + "<div class='col-lg-"+im_rnbr+" col-md-"+im_rnbr+" col-xs-12'>";
							jb_Acc_Con = jb_Acc_Con + "<img style='width:"+jcc_data[im_ttl_ac].image_width+"; margin-top: "+jcc_data[im_ttl_ac].image_top_margin+"; border-style: "+jcc_data[im_ttl_ac].image_border_style+"; border-color: "+jcc_data[im_ttl_ac].image_border_color+"; border-width: "+jcc_data[im_ttl_ac].image_border_width+"; border-radius: "+jcc_data[im_ttl_ac].image_border_radius+"' src='"+img_loc+"" + jcc_data[im_ttl_ac].image_file + "' alt='"+jcc_data[im_ttl_ac].image_file_tag+"' role='button' onclick='mi_iwt_zoom("+jcc+","+im_ttl_ac+",101)'>"; 
							jb_Acc_Con = jb_Acc_Con + "</div>";
						}
					
					if(jcc_data[im_ttl_ac].image_file_tag.length > 125)
						{
							jb_Acc_Con = jb_Acc_Con + "<div class='col-lg-"+im_rnbr+" col-md-"+im_rnbr+" col-xs-12'>";
							
							//console.log("####### acc_Count: " + acc_Count);
							
							//im_count.splice(0,im_count)

							im_count.push(jcc_data[im_ttl_ac].image_file);

							//var ac_image_zoom = jcc_data[im_ttl_ac].image_file;
							//console.log("()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()")
							//console.log("jcc_data["+im_ttl_ac+"].image_file;: " + jcc_data[im_ttl_ac].image_file);
							//console.log("()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()")

							//console.log("88888888 "+ im_ttl_ac + " 88888888");
							//console.log("########## Alt_Tag_Image_Data: " + Alt_Tag_Image_Data[]);

//Alt_Tag_Image_Data
							//jb_Acc_Con = jb_Acc_Con + "<img style='width:"+jcc_data[im_ttl_ac].image_width+"; margin-top: "+jcc_data[im_ttl_ac].image_top_margin+"; border-style: "+jcc_data[im_ttl_ac].image_border_style+"; border-color: "+jcc_data[im_ttl_ac].image_border_color+"; border-width: "+jcc_data[im_ttl_ac].image_border_width+"; border-radius: "+jcc_data[im_ttl_ac].image_border_radius+"' src='"+img_loc+"" + jcc_data[im_ttl_ac].image_file + "' alt='select image description' role='button' onclick='mi_iwt_zoom("+jcc+","+im_ttl_ac+",101)'>"; 
							
							//ac_img_zoom_array[acc_Count] = mi_iwt_array[jcc]


							jb_Acc_Con = jb_Acc_Con + "<img style='width:"+jcc_data[im_ttl_ac].image_width+"; margin-top: "+jcc_data[im_ttl_ac].image_top_margin+"; border-style: "+jcc_data[im_ttl_ac].image_border_style+"; border-color: "+jcc_data[im_ttl_ac].image_border_color+"; border-width: "+jcc_data[im_ttl_ac].image_border_width+"; border-radius: "+jcc_data[im_ttl_ac].image_border_radius+"' src='"+img_loc+"" + jcc_data[im_ttl_ac].image_file + "' alt='select image description' role='button' onclick='mi_iwt_zoom("+jcc+","+acc_Count+",101)'>"; 		
							
							//acc_Count
							//ac_img_zoom_array


																									//onclick='mi_iwt_zoom("+jcc+","+im_ttl+")' id='mig_"+jcc+"'

							//jb_Acc_Con = jb_Acc_Con + "<img style='width:"+jcc_data[im_ttl_ac].image_width+"; margin-top: "+jcc_data[im_ttl_ac].image_top_margin+"; border-style: "+jcc_data[im_ttl_ac].image_border_style+"; border-color: "+jcc_data[im_ttl_ac].image_border_color+"; border-width: "+jcc_data[im_ttl_ac].image_border_width+"; border-radius: "+jcc_data[im_ttl_ac].image_border_radius+"' src='"+img_loc+"" + jcc_data[im_ttl_ac].image_file + "' alt='Select image for more information' role='button' onclick='alt_tag_lib("+im_ttl+")'>"; 
							
							jb_Acc_Con = jb_Acc_Con + "</div>";

//-------<( Added by Jack on 12/15/2020. )>-------
//-------<( Updated by James on 1/26/2021. )>-------
jb_Acc_Con = jb_Acc_Con + "<div><button class='btn btn-primary btn-sm' role='button' onclick='alt_tag_im_ac("+jcc+","+acc_Count+")'>" + imgDescButton + "</button></div>";
//-------<( Added by Jack on 12/15/2020. )>-------

							ac_im_tag_array[acc_Count] = jcc_data[im_ttl_ac].image_file_tag;

							//console.log("+++++++ " + jcc_data[im_ttl_ac].image_file_tag + " +++++++");

							//List_Heading
							Alt_Tag_Image_Data[im_ttl] = jcc_data[im_ttl_ac].image_file_tag;
							Alt_Tag_Image_name[jcc] = jcc_data[0].image_name;

						//		console.log()
							
						}
					
					}

					
					if(typeof jcc_data[im_ttl_ac].image_file_tag === "undefined")
					
						{
							ADA_check_Array[jcc] = "Image_Multi in the Accordion needs the Alt tag fields added."
							
							
							jb_Acc_Con = jb_Acc_Con + "<div class='col-lg-"+im_rnbr+" col-md-"+im_rnbr+" col-xs-12'>";
							jb_Acc_Con = jb_Acc_Con + "<img style='width:"+jcc_data[im_ttl_ac].image_width+"; margin-top: "+jcc_data[im_ttl_ac].image_top_margin+"; border-style: "+jcc_data[im_ttl_ac].image_border_style+"; border-color: "+jcc_data[im_ttl_ac].image_border_color+"; border-width: "+jcc_data[im_ttl_ac].image_border_width+"; border-radius: "+jcc_data[im_ttl_ac].image_border_radius+"' src='"+img_loc+"" + jcc_data[im_ttl_ac].image_file + "' alt=''>"; 
							jb_Acc_Con = jb_Acc_Con + "</div>";
							
						}
					

				}
											
jb_Acc_Con = jb_Acc_Con + "</div>";	
				
			
											
Jcc_Comp_Maker = Jcc_Comp_Maker +  "<div style='background-color:"+acc_setup_array[3]+";' id='collapse"+jcc+"_"+acc_Count+"' class='panel-collapse collapse'><div class='panel-body'>"+ jb_Acc_Con +"</div></div>"; 											
									break;	
										
//-------------------------------------------------------------------------------------------------------------	
//-------<( Image 3 2 1 rows code end )>-------											
//-------------------------------------------------------------------------------------------------------------				
				
//=========================================================================================================					
//=========================================================================================================					
case "List_text_paragraph": // AC update
jcc_data = sSelections[jcc][snglBld[jcc]][accm].List_text_paragraph;


var list_ac_bdr = "";				
				
//jb_Acc_Con = "<div class='col-lg-12 col-md-12 col-xs-12'>";
jb_Acc_Con = "<div>";

//console.log("Accordion border style: " + jcc_data[0].border_type);
				
				
if(typeof jcc_data[0].border_type !== "undefined")	
	{
		
		switch(jcc_data[0].border_type)
			{
				case "TB":
						
					
						list_ac_bdr = "border-style:"+jcc_data[0].border_style+" none "+jcc_data[0].border_style+" none";
					//		console.log("list_ac_bdr: " + list_ac_bdr);
					
				break;
					
				case "Whole":
						list_ac_bdr = "border-style:"+jcc_data[0].border_style;
					//		console.log("list_ac_bdr: " + list_ac_bdr);
				break;	
			}
		
		
		
	}

if(typeof jcc_data[0].border_type === "undefined")	
	{
		list_ac_bdr = "";
	}
				

if((typeof jcc_data[0].border_color) === "undefined")
{
	jb_Acc_Con = jb_Acc_Con + "<div style='padding: "+ jcc_data[6].padding +"; margin-top: " + jcc_data[4].top_margin + "; background-color:"+jcc_data[5].background_color+"'>";
}

if((typeof jcc_data[0].border_color) === "string")
{

	jb_Acc_Con = jb_Acc_Con + "<div style='padding: "+ jcc_data[6].padding +"; margin-top: " + jcc_data[4].top_margin + "; background-color:"+jcc_data[5].background_color+";"+list_ac_bdr+"; border-width:"+jcc_data[0].border_weight+"; border-color:"+jcc_data[0].border_color+";border-radius:"+jcc_data[0].border_radius+"'>";


}


//-------<(  Heading )>-------	jcc_data[0].paragraph_text_size										
jb_Acc_Con = jb_Acc_Con + "<"+jcc_data[0].heading_size+" style='border-bottom-style: "+jcc_data[0].heading_underline+"; border-bottom-color:"+jcc_data[0].heading_underline_color+" ;border-bottom-width: "+jcc_data[0].heading_underline_height+"; color:"+jcc_data[0].heading_color+"; font-weight: "+jcc_data[0].heading_style+"; text-align: "+ jcc_data[0].heading_alignment +"'>"+ jcc_data[0].List_Heading +"</"+jcc_data[0].heading_size+">";
//-------<(  Heading )>-------					



//-------<(  Paragraph Top )>-------				
for(var atp = 0; atp < jcc_data[1].Top_Paragraphs.length; atp++)
{

jb_Acc_Con = jb_Acc_Con + "<"+jcc_data[0].paragraph_text_size+"><p style='text-align: "+ jcc_data[0].paragraph_alignment +"; color:"+jcc_data[0].paragraph_top_text_color+"'>"+ jcc_data[1].Top_Paragraphs[atp].Paragraph_text +"</p></"+jcc_data[0].paragraph_text_size+">";	

}
//-------<(  Paragraph Top )>-------

jb_Acc_Con = jb_Acc_Con + "<"+ jcc_data[3].Type_of_List +" type='"+jcc_data[3].ol_type+"' style='list-style-type:"+jcc_data[3].ul_type+"'>";				
//-------<(  List )>-------	jcc_data[3].List_Text_Size		
List_Text_Num = (jcc_data[8].list_items);
		for(lst = 0; lst < List_Text_Num.length; lst++)
			{

				List_Text_Array[lst] = (jcc_data[lst].lstText);
jb_Acc_Con = jb_Acc_Con + "<li style='margin-left:40px; color:"+ jcc_data[7].text_color +"; text-align: "+ jcc_data[2].align_text +";'><"+jcc_data[3].List_Text_Size+">"+ List_Text_Num[lst].lstText +"</"+jcc_data[3].List_Text_Size+"></li>";

			}

jb_Acc_Con = jb_Acc_Con + "</"+ jcc_data[3].Type_of_List +">";					

//-------<(  List )>-------

//-------<(  Paragraph Bottom )>-------				
for(var abp = 0; abp < jcc_data[9].Bottom_paragraphs.length; abp++)
{
jb_Acc_Con = jb_Acc_Con + "<"+jcc_data[0].paragraph_text_size+"><p style='text-align: "+ jcc_data[0].paragraph_alignment +"; color:"+jcc_data[0].paragraph_bot_text_color+"'>"+ jcc_data[9].Bottom_paragraphs[abp].Paragraph_text +"</p></"+jcc_data[0].paragraph_text_size+">";		
}
//-------<(  Paragraph Bottom )>-------		
/*			
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
if(typeof (jcc_data[0].border_color != "undefined") && (jcc_data[0].border_color != "") )

{
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";	
}
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
*/
jb_Acc_Con = jb_Acc_Con + "</div></div>";					


Jcc_Comp_Maker = Jcc_Comp_Maker +  "<div style='background-color:"+acc_setup_array[3]+";' id='collapse"+jcc+"_"+acc_Count+"' class='panel-collapse collapse'><div class='panel-body'>"+ jb_Acc_Con +"</div></div>"; 			


//jb_Acc_Con = jb_Acc_Con + "</div>";				
break;

//=========================================================================================================					
//=========================================================================================================					
			case "List_text_paragraph_old": // AC
					jcc_data = sSelections[jcc][snglBld[jcc]][accm].List_text_paragraph;
				
			
//jb_Acc_Con = "<div class='col-lg-12 col-md-12 col-xs-12'>";
jb_Acc_Con = "<div>";
				
jb_Acc_Con = jb_Acc_Con + "<div style='padding: "+ jcc_data[6].padding +"; margin-top: " + jcc_data[4].top_margin + "; background-color:"+jcc_data[5].background_color+"'>";											
				
//-------<(  Heading )>-------	jcc_data[0].paragraph_text_size										
jb_Acc_Con = jb_Acc_Con + "<"+jcc_data[0].heading_size+" style='border-bottom-style: "+jcc_data[0].heading_underline+"; border-bottom-color:"+jcc_data[0].heading_underline_color+" ;border-bottom-width: "+jcc_data[0].heading_underline_height+"; color:"+jcc_data[0].heading_color+"; font-weight: "+jcc_data[0].heading_style+"; text-align: "+ jcc_data[0].heading_alignment +"'>"+ jcc_data[0].List_Heading +"</"+jcc_data[0].heading_size+">";
//-------<(  Heading )>-------					

//-------<(  Paragraph Top )>-------				
for(var atp = 0; atp < jcc_data[1].Top_Paragraphs.length; atp++)
	{
		
		jb_Acc_Con = jb_Acc_Con + "<"+jcc_data[0].paragraph_text_size+"><p style='text-align: "+ jcc_data[0].paragraph_alignment +"; color:"+jcc_data[0].paragraph_top_text_color+"'>"+ jcc_data[1].Top_Paragraphs[atp].Paragraph_text +"</p></"+jcc_data[0].paragraph_text_size+">";	
		
	}
//-------<(  Paragraph Top )>-------

jb_Acc_Con = jb_Acc_Con + "<"+ jcc_data[3].Type_of_List +" type='"+jcc_data[3].ol_type+"' style='list-style-type:"+jcc_data[3].ul_type+"'>";				
//-------<(  List )>-------	jcc_data[3].List_Text_Size		
				List_Text_Num = (jcc_data[8].list_items);
							for(lst = 0; lst < List_Text_Num.length; lst++)
								{

									List_Text_Array[lst] = (jcc_data[lst].lstText);
jb_Acc_Con = jb_Acc_Con + "<li style='margin-left:40px; color:"+ jcc_data[7].text_color +"; text-align: "+ jcc_data[2].align_text +";'><"+jcc_data[3].List_Text_Size+">"+ List_Text_Num[lst].lstText +"</"+jcc_data[3].List_Text_Size+"></li>";
			
								}

jb_Acc_Con = jb_Acc_Con + "</"+ jcc_data[3].Type_of_List +">";					
				
//-------<(  List )>-------
				
//-------<(  Paragraph Bottom )>-------				
for(var abp = 0; abp < jcc_data[9].Bottom_paragraphs.length; abp++)
	{
jb_Acc_Con = jb_Acc_Con + "<"+jcc_data[0].paragraph_text_size+"><p style='text-align: "+ jcc_data[0].paragraph_alignment +"; color:"+jcc_data[0].paragraph_bot_text_color+"'>"+ jcc_data[9].Bottom_paragraphs[abp].Paragraph_text +"</p></"+jcc_data[0].paragraph_text_size+">";		
	}
//-------<(  Paragraph Bottom )>-------					

jb_Acc_Con = jb_Acc_Con + "</div></div>";					

Jcc_Comp_Maker = Jcc_Comp_Maker +  "<div style='background-color:"+acc_setup_array[3]+";' id='collapse"+jcc+"_"+acc_Count+"' class='panel-collapse collapse'><div class='panel-body'>"+ jb_Acc_Con +"</div></div>"; 			
				
				
//jb_Acc_Con = jb_Acc_Con + "</div>";				
			break;
			
				
//==============================================================================================================
// -------<(  Paragraphs_New Begin for Accordion )>-------				
//==============================================================================================================				
			case "Paragraphs_New": // AC
					//case "Paragraphs_New": // SA  img_loc = "images/";  commented out on June 12, 2019

				
							jcc_data = sSelections[jcc][snglBld[jcc]][accm].Paragraphs_New;

				var paraData = (jcc_data[0]);

															   
	
				if(paraData.background_image.length > 0)
					{
	jb_Acc_Con = "<div	style='background: linear-gradient(rgba(220, 220, 220, 0.8), rgba(220, 220, 220, 0.8)), rgba(220,220,220,0.8) url("+img_loc + paraData.background_image+"); width:100%; height: auto; background-position: center center; background-size: cover; padding: 0px 20px; background-color:"+paraData.background_color+";border-top-color:"+paraData.border_color+"; border-top-width:"+paraData.border_weight+"; border-top-style:"+paraData.border_style+"; border-bottom-color:"+paraData.border_color+"; border-bottom-width:"+paraData.border_weight+"; border-bottom-style:"+paraData.border_style+"; border-radius:"+paraData.border_radius+"'>";							
					}
				
				if(paraData.background_image.length === 0)							
					{
							
	jb_Acc_Con = "<div style='padding: 0px 20px; background-color:"+paraData.background_color+";border-top-color:"+paraData.border_color+"; border-top-width:"+paraData.border_weight+"; border-top-style:"+paraData.border_style+"; border-bottom-color:"+paraData.border_color+"; border-bottom-width:"+paraData.border_weight+"; border-bottom-style:"+paraData.border_style+"; border-radius:"+paraData.border_radius+"'>";					
					}
						
											
											
		jb_Acc_Con = jb_Acc_Con + "<div style='margin-top:"+paraData.top_margin+"; padding:"+paraData.Padding+";'><span style='text-align:"+paraData.heading_alignmet+"; color:"+paraData.heading_color+"'>";
										
		jb_Acc_Con = jb_Acc_Con + "<"+paraData.heading_font_size+" style='font-weight:"+paraData.heading_weight+";font-style:"+paraData.heading_style+";font-variant:"+paraData.heading_variant+"; text-transform:"+paraData.heading_transform+"'>"+paraData.heading+"</"+paraData.heading_font_size+">";
		
			//jcc_data							
		jb_Acc_Con = jb_Acc_Con + "</span>";									
					
		for(var newACpara = 1; newACpara < jcc_data.length; newACpara++)
												{
												
						switch(paraData.columns)
							{
								case "1":
jb_Acc_Con = jb_Acc_Con + "<p class='jb_column1' style='color:"+jcc_data[0].Paragraph_Font_color+"; text-align:"+paraData.Paragraph_align+";line-height:"+paraData.line_spacing+"'><"+paraData.Paragraph_Font_Size+">"+ jcc_data[newACpara].Paragraph_txt +"</"+paraData.Paragraph_Font_Size+"></p>";									
								break;	
									
								case "2":
jb_Acc_Con = jb_Acc_Con + "<p class='jb_column2' style='color:"+jcc_data[0].Paragraph_Font_color+"; text-align:"+paraData.Paragraph_align+";line-height:"+paraData.line_spacing+"'><"+paraData.Paragraph_Font_Size+">"+ jcc_data[newACpara].Paragraph_txt +"</"+paraData.Paragraph_Font_Size+"></p>";									
								break;	
							}
				
												}
											
		jb_Acc_Con = jb_Acc_Con + "</div></div>";	

	Jcc_Comp_Maker = Jcc_Comp_Maker +  "<div style='background-color:"+acc_setup_array[3]+";' id='collapse"+jcc+"_"+acc_Count+"' class='panel-collapse collapse'><div class='panel-body'>"+ jb_Acc_Con +"</div></div>"; 				
					break;					
	
			case "Paragraphs_w_box": // AC
				test_box("AC");
				     
			break;	
			
//==============================================================================================================
// -------<(  Paragraphs_New End for Accordion )>-------				
//==============================================================================================================				
				
				
//===========================================================================================
			case "Paragraphs": // AC
				
				jcc_data = sSelections[jcc][snglBld[jcc]][accm].Paragraphs;
			
jb_Acc_Con = "<div style='margin-top:"+jcc_data[0].top_margin+" ;padding:"+jcc_data[0].Padding+"; background-color:"+jcc_data[0].background_color+";border-color:"+jcc_data[0].border_color+"; border-width:"+jcc_data[0].border_weight+"; border-style:"+jcc_data[0].border_style+"; border-radius:"+jcc_data[0].border_radius+"'>";
				
				for(var acc_para = 1; acc_para < jcc_data.length; acc_para++)
					{
						//alert(jcc_data[para].Paragraph_txt);
						if(acc_para === 1)
							{
								jb_Acc_Con = jb_Acc_Con + "<"+jcc_data[0].Paragraph_Font_Size+" style='padding: 10px; text-align: "+ jcc_data[0].Paragraph_align +"'>"+ jcc_data[acc_para].Paragraph_txt +"</"+jcc_data[0].Paragraph_Font_Size+">";
							}
						else
							{
								jb_Acc_Con = jb_Acc_Con + "<"+jcc_data[0].Paragraph_Font_Size+" style='padding: 10px; text-align: "+ jcc_data[0].Paragraph_align +"'>"+ jcc_data[acc_para].Paragraph_txt +"</"+jcc_data[0].Paragraph_Font_Size+">";
							}
					
						
					}
jb_Acc_Con = jb_Acc_Con + "</div>";	
				
				Jcc_Comp_Maker = Jcc_Comp_Maker +  "<div style='background-color:"+acc_setup_array[3]+";' id='collapse"+jcc+"_"+acc_Count+"' class='panel-collapse collapse'><div class='panel-body'>"+ jb_Acc_Con +"</div></div>"; 		
		
			break;
				
//==============================================================================================================
// -------<(  Speech_Bubbles Begin for Accordion )>-------				
//==============================================================================================================

			case "Speech_Bubbles": //AC
									jcc_data = sSelections[jcc][snglBld[jcc]][accm].Speech_Bubbles;
				

				
		if(typeof jcc_data[0].talking_head_image_alt === "undefined")
			{
				ADA_check_Array[jcc] =  jcc_data[0].talking_head_image + " Speech Bubble in Accordion needs the Alt tag fields added."
			}				
				
jb_Acc_Con = "<div id='spb_"+ jcc +"' class='main_bubble' style='margin-top: "+ jcc_data[2].top_margin +"; margin-bottom: 40px;'> <div class='bubbles'><div class='balloons'>";			

			
jb_Acc_Con = jb_Acc_Con + "<div id='startBubble"+ jcc +"' class='bLeft bubble' style='display:block;'><div style='color:#000000' class='bText'><p>" + jcc_data[1].start_text + "</p></div></div>";												

							var ac_sp_bl = 0;				
							for(var ac_spb = 3; ac_spb < jcc_data.length; ac_spb++)
								{
									ac_sp_bl = (ac_sp_bl + 1);
									
									Speech_Bub_Array[ac_sp_bl] = jcc_data[ac_spb].bbl_txt;
									speech_number[jcc] = Speech_Bub_Array;

									switch(ac_sp_bl % 2)
										{
												case 0:
												

									//var bbl_cur_id = [];
ac_sp_bbl_id[jcc] = jcc + "_bbl_" + ac_sp_bl;
												
jb_Acc_Con = jb_Acc_Con + "<div id='" + ac_sp_bbl_id[jcc] +"' class='bLeft bubble' style='display:none;'><div style='color:#000000' class='bText'><p>" + Speech_Bub_Array[ac_sp_bl] + "</p></div></div>";											
												break;
												
												case 1:
ac_sp_bbl_id[jcc] = jcc + "_bbl_" + ac_sp_bl;												
jb_Acc_Con = jb_Acc_Con + "<div id='" + ac_sp_bbl_id[jcc] +"' class='bRight bubble' style='display:none;'><div style='color:#000000' class='bText'><p>" + Speech_Bub_Array[ac_sp_bl] + "</p></div></div>";												
												break;
										}

								}
											
								Speech_Bub_Array = [];
			
if(typeof jcc_data[0].talking_head_image_alt === "undefined")
	{
		
ADA_check_Array[jcc] = "Speech bubble in Accordion needs the Alt tag fields added."		
		
jb_Acc_Con = jb_Acc_Con + "<div class='talkingheads'><img src='"+img_loc+"" + jcc_data[0].talking_head_image +"' alt=''></div>  <div align='center' class='col-lg-12 col-md-12 col-xs-12'><div align='left' class='col-lg-6 col-md-6 col-xs-6'><button id='bub_prev_buton"+jcc+"' style='display:none' onclick='bub_Back("+jcc+");' class='btn-primary bbl_btns' type='button'>Back</button></div><div align='right' class='col-lg-6 col-md-6 col-xs-6'><button id='bub_next_button"+jcc+"' onclick='bub_Next("+jcc+");' class='btn-primary bbl_btns' type='button'>Start</button></div></div>"; //		
	}

if(typeof jcc_data[0].talking_head_image_alt !== "undefined")
	{
		
		if(jcc_data[0].talking_head_image_alt.length <= 125)
			{
				if(jcc_data[0].talking_head_image_alt.length === 0)
					{
						ADA_check_Array[jcc] = "Speech bubble in Accordion needs the Alt tag fields added."	
					}
				
				
jb_Acc_Con = jb_Acc_Con + "<div class='talkingheads'><img src='"+img_loc+"" + jcc_data[0].talking_head_image +"' alt='"+jcc_data[0].talking_head_image_alt+"'></div>  <div align='center' class='col-lg-12 col-md-12 col-xs-12'><div align='left' class='col-lg-6 col-md-6 col-xs-6'><button id='bub_prev_buton"+jcc+"' style='display:none' onclick='bub_Back("+jcc+");' class='btn-primary bbl_btns' type='button'>Back</button></div><div align='right' class='col-lg-6 col-md-6 col-xs-6'><button id='bub_next_button"+jcc+"' onclick='bub_Next("+jcc+");' class='btn-primary bbl_btns' type='button'>Start</button></div></div>"; //				
			}
		
		if(jcc_data[0].talking_head_image_alt.length > 125) // role='button' onclick='alt_tag_lib("+jcc+")'
			{
jb_Acc_Con = jb_Acc_Con + "<div class='talkingheads'><img src='"+img_loc+"" + jcc_data[0].talking_head_image +"' alt='Select image for more information' role='button' onclick='alt_tag_lib("+jcc+")'></div>  <div align='center' class='col-lg-12 col-md-12 col-xs-12'><div align='left' class='col-lg-6 col-md-6 col-xs-6'><button id='bub_prev_buton"+jcc+"' style='display:none' onclick='bub_Back("+jcc+");' class='btn-primary bbl_btns' type='button'>Back</button></div><div align='right' class='col-lg-6 col-md-6 col-xs-6'><button id='bub_next_button"+jcc+"' onclick='bub_Next("+jcc+");' class='btn-primary bbl_btns' type='button'>Start</button></div></div>"; //				
				
				Alt_Tag_Image_Data[jcc] = jcc_data[0].talking_head_image_alt;
				Alt_Tag_Image_name[jcc] = jcc_data[0].talking_head_image;
			}		
	}
				
				
	
											
											
jb_Acc_Con = jb_Acc_Con + "</div></div></div>";					
				
				
				Jcc_Comp_Maker = Jcc_Comp_Maker +  "<div style='background-color:"+acc_setup_array[3]+";' id='collapse"+jcc+"_"+acc_Count+"' class='panel-collapse collapse'><div class='panel-body'>"+ jb_Acc_Con +"</div></div>"; 				
			break;				
		}
																
	Jcc_Comp_Maker = Jcc_Comp_Maker +  "</div>";
														
																
															break;
														}
	
												}
									
											
var div_single = "</div>";
var div_count = "</div>";											

  for(var dvc = 1; dvc <= acc_Count; dvc++)
	{
								
	  if(dvc > 1)
	  {
		div_count += div_single;
	  }
	}
											
											
Jcc_Comp_Maker = Jcc_Comp_Maker + div_count;											
Jcc_Comp_Maker = Jcc_Comp_Maker +  "</div></div>";											
// Added by Jcc on 10.14.2020
acc_count_array[jcc] = acc_Count;											
//console.log("▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄	")
//console.log("im_count: " + im_count);
//console.log("▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄	")


//console.log("NEW COUNT LOOP = " + acc_Count)

im_count_int = [];

for(var iml = 0; iml < acc_Count; iml++)
	{
		im_count_int.push(im_count[iml + 1]);
			//if(iml - 1 )

	}




/*
for(var iml = 0; iml < im_count.length; iml++)
	{
		console.log("+++++++ " + im_count[iml].length)
	
		
		if(im_count[iml].length > 1)
			{
				im_count_int.push(im_count[iml])

			}

	if(im_count[iml].length === 1)	
		{
			console.log("+++++++ " + iml)
			
			im_count_int[iml = (iml)
		}
		
		
	}

console.log("()()()()()()() " + im_count_int);
*/
im_count_whole[jcc] = im_count_int;

ac_img_zoom_array[jcc] = ac_img_zoom_img;


ac_im_tag_array_whole[jcc] = ac_im_tag_array;



imgwt_ac_whole[jcc] = imgwt_ac_array;


imgwt_ac_array = [];

//console.log("▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄	")
//console.log("ac_img_zoom_array["+jcc+"]: " + ac_img_zoom_array[jcc]);

//console.log("jcc: " + jcc)
//console.log("imgwt_ac_array: " + imgwt_ac_array.length);

//console.log("imgwt_ac_whole["+jcc+"]: " + imgwt_ac_whole[jcc]);

//imgwt_ac_whole




//console.log("▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄	")
/*
console.log("▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄	")

//console.log("im_count_intL " + im_count_int);

console.log("im_count_whole["+jcc+"]: " + im_count_whole[jcc]);
console.log("▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄	")											
*/											



break;											
											
								
//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄	
//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄	
//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄

											
									}
								
//▀─▀─▀─▀─▀─▀────────────────────────────────────────────────────▀─▀─▀─▀─▀─▀							
//-------<( Functions for component creation begin )>-------
//▄─▄─▄─▄─▄─▄────────────────────────────────────────────────────▄─▄─▄─▄─▄─▄							

//==========================================================								
//-------<( Paragraphs with inside box )>-------
//==========================================================								
function test_box(comp_Type)
{
	switch(comp_Type)
		{
			case "SA":

	var paraSetup = sSelections[jcc][snglBld[jcc]];			
							
	Jcc_Comp_Maker = Jcc_Comp_Maker + "<div align='center'>";// style='width:50%;'
	
											
											
				if(paraSetup[0].background_image.length > 0)
					{
					
						
	Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12' style='background: linear-gradient(rgba(220, 220, 220, 0.8), rgba(220, 220, 220, 0.8)), rgba(220,220,220,0.8) url("+img_loc + paraSetup[0].background_image+"); width:100%; height: auto; background-position: center center; background-size: cover; padding: 0px 20px; border-top-color:"+paraSetup[0].border_color+"; border-top-width:"+paraSetup[0].border_weight+"; border-top-style:"+paraSetup[0].border_style+"; border-bottom-color:"+paraSetup[0].border_color+"; border-bottom-width:"+paraSetup[0].border_weight+"; border-bottom-style:"+paraSetup[0].border_style+"; border-radius:"+paraSetup[0].border_radius+"; margin-top:"+paraSetup[0].top_margin+";'>";							
					}
			
				if(paraSetup[0].background_image.length === 0)							
					{
	
					
						
	Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12' style='height:auto; padding: 20px 20px; background-color:"+paraSetup[0].background_color+"; border-top-color:"+paraSetup[0].border_color+"; border-top-width:"+paraSetup[0].border_weight+"; border-top-style:"+paraSetup[0].border_style+"; border-bottom-color:"+paraSetup[0].border_color+"; border-bottom-width:"+paraSetup[0].border_weight+"; border-bottom-style:"+paraSetup[0].border_style+"; border-radius:"+paraSetup[0].border_radius+"; margin-top:"+paraSetup[0].top_margin+";'>";						
	
	Jcc_Comp_Maker = Jcc_Comp_Maker + "<div align='center' style='width:80%; background-color:#ed8c01 ;border-style:solid; border-color:black; border-width: medium; border-radius:10px'>";	//padding:10px;					
			
					
					}
										
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='padding:"+paraSetup[0].Padding+";'><span style='text-align:"+paraSetup[0].heading_alignment+"; color:"+paraSetup.heading_color+"'>";
										
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<"+paraSetup[0].heading_font_size+" style='font-weight:"+paraSetup[0].heading_weight+";font-style:"+paraSetup[0].heading_style+";font-variant:"+paraSetup[0].heading_variant+"; text-transform:"+paraSetup[0].heading_transform+"'>"+paraSetup[0].heading+"</"+paraSetup[0].heading_font_size+">";
		

											
		Jcc_Comp_Maker = Jcc_Comp_Maker + "</span></div>";									
						

					for(var para_bx = 1; para_bx < paraSetup.length; para_bx++)
								{
									switch(paraSetup[0].columns)
										{
												
											case "1": //line-height: 4.5;
Jcc_Comp_Maker = Jcc_Comp_Maker + "<p class='jb_column1' style='color:"+paraSetup[0].Paragraph_Font_color+"; text-align:"+paraSetup[0].Paragraph_align+";line-height:"+paraSetup[0].line_spacing+"'><"+paraSetup[0].Paragraph_Font_Size+">"+ paraSetup[para_bx].Paragraph_txt +"</"+paraSetup[0].Paragraph_Font_Size+"></p>";													
											break;
												
											case "2":
Jcc_Comp_Maker = Jcc_Comp_Maker + "<p class='jb_column2' style='color:"+paraSetup[0].Paragraph_Font_color+"; text-align:"+paraSetup[0].Paragraph_align+";line-height:"+paraSetup[0].line_spacing+"'><"+paraSetup[0].Paragraph_Font_Size+">"+ paraSetup[para_bx].Paragraph_txt +"</"+paraSetup[0].Paragraph_Font_Size+"></p>";												
											break;	
		
										}
								}
									
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";											
										
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";				
			break;
				
			case "AC":
				//alert("Paragraph for Accordion has been called");
				//jcc_data = sSelections[jcc][snglBld[jcc]][accm].Paragraphs_w_box;
	var paraSetup = sSelections[jcc][snglBld[jcc]];			
							
	jb_Acc_Con = jb_Acc_Con + "<div align='center'>";// style='width:50%;'
	
											
											
				if(paraSetup[0].background_image.length > 0)
					{
					
						
	jb_Acc_Con = jb_Acc_Con + "<div class='col-lg-12 col-md-12 col-xs-12' style='background: linear-gradient(rgba(220, 220, 220, 0.8), rgba(220, 220, 220, 0.8)), rgba(220,220,220,0.8) url("+img_loc + paraSetup[0].background_image+"); width:100%; height: auto; background-position: center center; background-size: cover; padding: 0px 20px; border-top-color:"+paraSetup[0].border_color+"; border-top-width:"+paraSetup[0].border_weight+"; border-top-style:"+paraSetup[0].border_style+"; border-bottom-color:"+paraSetup[0].border_color+"; border-bottom-width:"+paraSetup[0].border_weight+"; border-bottom-style:"+paraSetup[0].border_style+"; border-radius:"+paraSetup[0].border_radius+"; margin-top:"+paraSetup[0].top_margin+";'>";							
					}
			
				if(paraSetup[0].background_image.length === 0)							
					{
	
					
						
	jb_Acc_Con = jb_Acc_Con + "<div class='col-lg-12 col-md-12 col-xs-12' style='height:auto; padding: 20px 20px; background-color:"+paraSetup[0].background_color+"; border-top-color:"+paraSetup[0].border_color+"; border-top-width:"+paraSetup[0].border_weight+"; border-top-style:"+paraSetup[0].border_style+"; border-bottom-color:"+paraSetup[0].border_color+"; border-bottom-width:"+paraSetup[0].border_weight+"; border-bottom-style:"+paraSetup[0].border_style+"; border-radius:"+paraSetup[0].border_radius+"; margin-top:"+paraSetup[0].top_margin+";'>";						
	
	jb_Acc_Con = jb_Acc_Con + "<div align='center' style='width:80%; background-color:#ed8c01 ;border-style:solid; border-color:black; border-width: medium; border-radius:10px'>";	//padding:10px;					
			
					
					}
										
		jb_Acc_Con = jb_Acc_Con + "<div style='padding:"+paraSetup[0].Padding+";'><span style='text-align:"+paraSetup[0].heading_alignment+"; color:"+paraSetup.heading_color+"'>";
										
		jb_Acc_Con = jb_Acc_Con + "<"+paraSetup[0].heading_font_size+" style='font-weight:"+paraSetup[0].heading_weight+";font-style:"+paraSetup[0].heading_style+";font-variant:"+paraSetup[0].heading_variant+"; text-transform:"+paraSetup[0].heading_transform+"'>"+paraSetup[0].heading+"</"+paraSetup[0].heading_font_size+">";
		

											
		jb_Acc_Con = jb_Acc_Con + "</span></div>";									
						

					for(var para_bx = 1; para_bx < paraSetup.length; para_bx++)
								{
									switch(paraSetup[0].columns)
										{
												
											case "1":
jb_Acc_Con = jb_Acc_Con + "<p class='jb_column1' style='color:"+paraSetup[0].Paragraph_Font_color+"; text-align:"+paraSetup[0].Paragraph_align+";line-height:"+paraSetup[0].line_spacing+"'><"+paraSetup[0].Paragraph_Font_Size+">"+ paraSetup[para_bx].Paragraph_txt +"</"+paraSetup[0].Paragraph_Font_Size+"></p>";													
											break;
												
											case "2":
jb_Acc_Con = jb_Acc_Con + "<p class='jb_column2' style='color:"+paraSetup[0].Paragraph_Font_color+"; text-align:"+paraSetup[0].Paragraph_align+";line-height:"+paraSetup[0].line_spacing+"'><"+paraSetup[0].Paragraph_Font_Size+">"+ paraSetup[para_bx].Paragraph_txt +"</"+paraSetup[0].Paragraph_Font_Size+"></p>";												
											break;	
		
										}
								}
									
jb_Acc_Con = jb_Acc_Con + "</div>";											
										
jb_Acc_Con = jb_Acc_Con + "</div>";	
				
Jcc_Comp_Maker = Jcc_Comp_Maker +  "<div style='background-color:"+acc_setup_array[3]+";' id='collapse"+jcc+"_"+acc_Count+"' class='panel-collapse collapse'><div class='panel-body'>"+ jb_Acc_Con +"</div></div>"; 				
				
			break;	
		}
	
	
	
}								

								
//============================================================================================================								
//-------<( Functions for component creation end )>-------
//============================================================================================================									
								
							}

//<li><a href="#" data-toggle="modal" data-target="#testModal">Modal</a></li>
//margin-top:"+jcc_car_data[0].slide_top_margin+";
//============================================================================================================								
//-------<( Modal for multi_image and Image_w_text_list: Added by Jack on 12/07/2020 )>-------
//============================================================================================================

											

var img_zoom;
var img_plus;
var img_minus;
var img_fit;

		if(typeof moduleFolder !== "undefined")
			{
				img_zoom = "jbuild_libs/images/zoom.png";
				img_plus = "jbuild_libs/images/plus_icon.png";
				img_minus = "jbuild_libs/images/minus_sign.png";
				img_fit = "jbuild_libs/images/resize_full.png";				
			}

		if(typeof moduleFolder === "undefined")
			{

				var magimg = String(window.location);
				if(magimg.search("LLL") < 1)
					{
						img_zoom = "../../../jbuild_libs/images/zoom.png";
						img_plus = "../../../jbuild_libs/images/plus_icon.png";
						img_minus = "../../../jbuild_libs/images/minus_sign.png";
						img_fit = "../../../jbuild_libs/images/resize_full.png";
					}
			
				if(magimg.search("LLL") > 1)
					{
						img_zoom = "../../../../../jbuild_libs/images/zoom.png";
						img_plus = "../../../../../jbuild_libs/images/plus_icon.png";
						img_minus = "../../../../../jbuild_libs/images/minus_sign.png";
						img_fit = "../../../../../jbuild_libs/images/resize_full.png";							
					}

				

			}	

Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='jbImgModal' class='img_modal' style='margin-top:10px'>";

Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='img_modal_hdr_ftr'><p id='jb_img_modal' style='color: #ffffff; text-align:left'></p></div>";	
									
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='img_modal_content' style='overflow-y:auto'>";	

Jcc_Comp_Maker = Jcc_Comp_Maker + "<img id='jb_modal_image' style='width:90%; height:90%; background-color:white' src='' x alt=''>";												
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";	
//-------<( Footer begin )>											
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='img_modal_hdr_ftr'>";											
//mi_iwt_zo_image
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div><span class='zicon'><img alt='Select to zoom in' src='"+img_plus+"' onClick='javascript:mi_iwt_zi_image()'></span><span class='zicon'><img alt='Select to zoom out' src='"+img_minus+"' onclick='javascript:mi_iwt_zo_image()'></span> <span class='zicon'><img alt='Select to zoom out' src='"+img_fit+"' onClick='javascript:mi_iwt_fit_image()'></span>  <span class='jb_close' id='img_btn'><button onclick='javascript:close_jbimg()'><jb1>" + closeButton + "</jb1></button></span></div>";// Close		


Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
//-------<( Footer end )>
//mi_iwt_zi_image

 /*	
//-------<( Footer begin )>
	Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='img_modal_hdr_ftr'>";	//col-lg-12 col-md-12 col-xs-12
	
	
	Jcc_Comp_Maker = Jcc_Comp_Maker + "<div><span class='zicon'><img alt='Select to zoom in' src='"+img_plus+"'></span><span class='zicon'><img alt='Select to zoom out' src='"+img_minus+"'></span> <span class='zicon'><img alt='Select to zoom out' src='"+img_fit+"'></span>  <span class='jb_close' id='img_btn'><button><jb1>" + closeButton + "</jb1></button></span></div>";// Close	



	Jcc_Comp_Maker = Jcc_Comp_Maker + "<div><span class='zicon'><img alt='Select to zoom in' src='"+plus_icon+"' onClick='javascript:zin_image("+jcc+")'></span><span class='zicon'><img alt='Select to zoom out' src='"+minus_icon+"' onClick='javascript:zout_image("+jcc+")'></span> <span class='zicon'><img alt='Select to zoom out' src='"+fit_icon+"' onClick='javascript:fit_image("+jcc+")'></span>  <span class='jb_close' id='img_btn'><button onclick='javascript:close_img()'><jb1>" + closeButton + "</jb1></button></span></div>";// Close										
											
											
    Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
//-------<( Footer end )>
*/
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";		


//============================================================================================================								
//-------<( Modal for multi_image and Image_w_text_list: Added by Jack on 12/07/2020 )>-------
//============================================================================================================




// Key term modal setup begin
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='keyModal' class='jb_modal'>";
				
//<span class='keyterm'>				
ADA_check_Array[100] = "Make Sure the key terms have been updated with the new Key Term v2 snippet";				
//<!-- Modal content -->
				
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='jb_header_text' class='jb_modal-hdr-ftr' style='color:#000000;font-size:20px'></div>";				
				
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='jb_modal-content' style='overflow-y:auto'>";
				
				
Jcc_Comp_Maker = Jcc_Comp_Maker + "<p id='jb_modal_main_text' style='color: #ffffff; text-align:left'></p>";
				
				
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";	
				
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='jb_modal-hdr-ftr'><span class='jb_close' id='kt_btn'><button onclick='javascript:close_keyterm()'><jb1>" + closeButton + "</jb1></button></span></div>";	//Close		
				
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";					
				
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";					
// Key term modal setup end

				
// Inline source modal
				
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='sourceModal' class='jb_modal'>";					
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='jb_modal-content' style='overflow-y:auto'>";	
Jcc_Comp_Maker = Jcc_Comp_Maker + "<p id='source_text' style='color: #ffffff; text-align:left'></p>";				
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";	
				
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='jb_modal-hdr-ftr'><span class='jb_close' id='kt_btn'><button onclick='javascript:close_source()'><jb1>" + closeButton + "</jb1></button></span></div>";// Close
				
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";				
			
			
Component_Engine(Jcc_Comp_Maker);

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-	
//-------<(  Test to see if the TOC json is loaded begin )>-------				
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-					

			
				
switch(typeof toc_list)
	{
		case "undefined":
			//alert("No TOC!");
			//document.getElementById("toc_slide").style.display = "none";
		break;
			
		default:
			TOC_Engine();
		break;	
	}
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-	
//-------<(  Test to see if the TOC json is loaded end )>-------				
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-	
				
				break;
		}
	}
}

                       

function Send_question_data(sqd,idn)
{
	var crsp;

	for(var tf_c = 0; tf_c < new_answer_array[idn].length; tf_c++)
		{
			//alert(new_answer_array[idn][tf_c]);
			if(new_answer_array[idn][tf_c] === "true")
				{
					crsp = tf_c;
					//alert("number " + tf_c + " is the correct answer");
				}
		}
	
	
var inlineQuestions = {
						"type": "inlinequestion",
					   	"verb": "answered",
						
						"activity": "http://adlnet.gov/expapi/activities/question",
						"module": bCurrentMod + 1, //bCurrentMod
						"lesson": bCurrentLsn + 1, //bCurrentLsn
						"page": np_num,
	
						"objectID": "sqn_" + idn,
						"extensions":
						  {
							"studentResponse": sqd,
							"correctResponse": crsp,
						  }	
						}
				


	if(isXAPI){

		LRSSend(inlineQuestions);

	}	

}

function Send_multi_question_data(mca,crmod)
{
	
	var inlineQuestions = {
						"type": "inlinequestion",
		
					   	"verb": "answered",
						
						"activity": "http://adlnet.gov/expapi/activities/question",
						"module": bCurrentMod + 1, //bCurrentMod
						"lesson": bCurrentLsn + 1, //bCurrentLsn
						"page": np_num,
		
						"objectID": "sqn_" + crmod,
						
						"extensions":
						  {
							"studentResponse": std_answer,
							"correctResponse": mca,
						  }	
		
						}
	if(isXAPI){

		LRSSend(inlineQuestions);

	}	

}


function survey_data(sdata)
{
	var surveyStatement = {
		"type": "survey",
	
		"verb": "answered",
	
		"activity": "http://id.tincanapi.com/activitytype/survey",
		"module": bCurrentMod + 1,
		"lesson": bCurrentLsn + 1,
		"page": np_num,
	
		"objectID": course_settings.Portal_Setup.Course_Folder, //"surveyTest",
	
		"extensions":
				//{
					sdata
				//}	
		}
		//console.log(surveyStatement);
		
	if(isXAPI){
		LRSSend(surveyStatement);
		doCheckComplete();
	}	
}


function nQue(qtyp,cqtn,curComp,qest,curQnum)
{
	
	
//Question_Comp_Submit
	//alert("qest: " + qest);

//csa_answer = "";
//qtyp === kind of question	
//cqtn ===	answer
//curComp === component number	
//qest === answer number, 1 = 0 2 = 1
	
	
//alert()	

if(typeof courseType !== "undefined")
	{

	//if(courseType.indexOf("shortcourseA") !== -1 && courseType.indexOf("demo") === -1)
		if(courseType.indexOf("shortcourseA") !== -1)
		{

			pgQueArray[curQnum].answer = 1;
			pgQueArray[curQnum].page_nm = np_num;
			
			pgQueArray[curQnum].choice = qest;

			
			
			allPgQue[np_num] = pgQueArray;

			//Checking to make sure that the page should be marked complete for shortcourseA
			var bQuestionsReady = true;
				
			for (var bqCheck = 0; bqCheck < allPgQue[bCurrentPag + 1].length; bqCheck++){
				//change the value of bQuestionsReady if there's an answer property and it's still set to zero
				if(allPgQue[bCurrentPag + 1][bqCheck].hasOwnProperty("answer") && allPgQue[bCurrentPag + 1][bqCheck].answer === 0){
					bQuestionsReady = false;
					break;
				}
			}

			//console.log(bQuestionsReady);

			//Update bPageViews...
			//if(bPageViews[bCurrentMod][bCurrentLsn][bCurrentPag] === 0){
			if(bPageViews[bCurrentMod][bCurrentLsn][bCurrentPag] === 0 && bQuestionsReady === true){
				bPageViews[bCurrentMod][bCurrentLsn][bCurrentPag] = 1;
				//bSetState();
			}

			//Update the flyout menu...
			for (var bCheck = 1; bCheck < document.getElementsByClassName("toc_fly_buttons").length; bCheck++){
				//console.log(document.getElementsByClassName("toc_fly_buttons")[bCheck].getElementsByTagName("span")[2].getElementsByTagName("img")[0].src);
				//console.log(bPageViews[bCurrentMod][bCurrentLsn][bCheck - 1]);
				
				if(bPageViews[bCurrentMod][bCurrentLsn][bCheck - 1] === 1){
					//if(courseType !== "hioc" || courseType !== "shortcourseA"){
					if(document.getElementsByClassName("toc_fly_buttons")[bCheck].getElementsByTagName("span")[2]){
						//slight change to deal with an extra span tag if it exists
						document.getElementsByClassName("toc_fly_buttons")[bCheck].getElementsByTagName("span")[2].getElementsByTagName("img")[0].src = "jbuild_libs/images/chk_comp.png";
					}else{
						document.getElementsByClassName("toc_fly_buttons")[bCheck].getElementsByTagName("span")[1].getElementsByTagName("img")[0].src = "jbuild_libs/images/chk_comp.png";
					}
					
				}
			}

			//Send the info to the LRS...
			Question_Tracker(curQnum);
		}
	
	}
	
	

switch(qtyp)
	{
	case 1: // Single Answer
	

//alert("qtyp: " + qtyp + " | cqtn: " + cqtn + " | curComp: " + curComp + " | qest: " + qest + " | curQnum: " + curQnum);	
		
	if(cqtn === true)
		{

			
			chClass = ("#cb_" + curComp + "_" + qest);
			
			
			$(chClass.toString()).addClass('q_comp_correct');
			
			document.getElementById("i_fb_" + curComp).style.display = "none";
			document.getElementById("c_fb_" + curComp).style.display = "block";


			
		if(typeof q_feedback_qNum_Array[curComp][qest] !== "undefined")
			{
			document.getElementById("ci_fb_"+curComp+"_"+ qest).innerHTML = "<br><jb1>" + q_feedback_qNum_Array[curComp][qest] + "</jb1>";
			document.getElementById("ci_fb_"+curComp+"_"+ qest).style.display = "block";
			}
			
		//if(typeof q_feedback_qNum_Array[curComp][qest] === "undefined")
		//	{
				
		//	}

//		

		Send_question_data(qest,curComp); //curComp for id	
	
		}	
	
	
	if(cqtn === false)
		{

			chClass = ("#cb_" + curComp + "_" + qest);
			$(chClass.toString()).addClass('q_comp_incorrect');
			
			document.getElementById("c_fb_" + curComp).style.display = "none";
			document.getElementById("i_fb_" + curComp).style.display = "block";	
//
		if(typeof q_feedback_qNum_Array[curComp][qest] !== "undefined")
			{
			document.getElementById("ci_fb_"+curComp+"_"+ qest).innerHTML = "<br><jb1>" + q_feedback_qNum_Array[curComp][qest] + "</jb1>";
			document.getElementById("ci_fb_"+curComp+"_"+ qest).style.display = "block";
			}
			
		//if(typeof q_feedback_qNum_Array[curComp][qest] === "undefined")
		//	{
				
		//	}			

//		
			for(var scans = 0; scans < MC_Answer_Array[curComp].length; scans++)
				{


					if( MC_Answer_Array[curComp][scans] === "true" )
						{

							var single_answer_fd;
							single_answer_fd = ("#qs_"+curComp+"_an_"+scans);
							$(single_answer_fd.toString()).addClass('ma_CorrectNS');
						
							////alert("xAPI correct answer: " + scans); // Use for Single answer question correct answer
							//inlineQuestions.extensions.correctResponse = scans;
							Send_question_data(qest,curComp); //curComp for id
							
							//alert("qtyp: " + qtyp + " | cqtn: " + cqtn + " | curComp: " + curComp + " | qest: " + qest + " | curQnum: " + curQnum);
							//alert("inlineQuestions.extensions.correctResponse for Single Question: " + inlineQuestions.extensions.correctResponse);
						}

				}			

			


		}
	
			
		
			
	break;
	
	case 2: // Multi Answer
			
				
			
			chClass = ("#cb_" + curComp + "_" + qest);
			$(chClass.toString()).addClass('q_comp_mw');
			
			
				$( '#sub_' + curComp.toString()).removeClass('disabled');
				$( '#sub_' + curComp.toString()).addClass('active');			
	
	break;
	}
	
}

function Question_Comp_Submit(cqest) // multi answer submit
{
	//alert("cqest: " + cqest);
	
var cb_cmp_array = [];
var cb_chk_Array = [];	
var fb_pop;
std_answer = [];
	
	//alert("QC_Multi_Array_TF[cqest]: " + QC_Multi_Array_TF[cqest]);
		for(var two_test = 0; two_test < QC_Multi_Array_TF[cqest].length; two_test++)	
			{
				cb_cmp_array[two_test] = ("cbck_" + cqest + "_" + two_test);
				cb_chk_Array[two_test] = (document.getElementById(cb_cmp_array[two_test]).checked.toString());

				
				if(cb_chk_Array[two_test] === "true")
					{
						//alert("QC_Multi_Array_TF[cqest][two_test]: " + QC_Multi_Array_TF[cqest][two_test]);	
						
						//alert("two_test: " + two_test);
						
						std_answer[std_answer.length] = two_test;
						
						
						switch(QC_Multi_Array_TF[cqest][two_test].toString())
							{
									
								case "true":
											chClass = ("#cb_" + cqest + "_" + two_test);
											$(chClass.toString()).removeClass('q_comp_mw');	//checkmark
											$(chClass.toString()).addClass('checkmark_correct_square');
									
											
								break;
									
								case "false":
											//chClass = ("#cb_" + cqest + "_" + two_test);
											//$(chClass.toString()).removeClass('q_comp_mw');	//checkmark
											//$(chClass.toString()).addClass('checkmark_wrong_square');
									
											
								break;	
									
							}
	
					}
				
				

				
				if(cb_chk_Array[two_test] === "false")
					{
						switch(QC_Multi_Array_TF[cqest][two_test].toString())
							{
								case "false":
									
								break;
									
								case "true":
											chClass = ("#cb_" + cqest + "_" + two_test);
											$(chClass.toString()).removeClass('q_comp_mw');	//checkmark  ma_CorrectNS

									
											fb_pop = ("#qs_" +cqest+ "_an_" + two_test);
											$(fb_pop.toString()).addClass('ma_CorrectNS');		//ma_FB_Correct		
									
									
											
								break;	
							}
						
						
						
					}
				
				
				
	
			}		

new_answer_array[jcc] = tf_new_array;	
//-------
	
	if(cb_chk_Array.toString() === QC_Multi_Array_TF[cqest].toString())
		{
				document.getElementById("i_fb_" + cqest).style.display = "none";
				document.getElementById("c_fb_" + cqest).style.display = "block";
			

			
			//document.getElementById("ci_fb_" + cqest).innerHTML = q_feedback_qNum_Array[curComp][cqest];
			
		}

	if(cb_chk_Array.toString() !== QC_Multi_Array_TF[cqest].toString())
		{
				document.getElementById("i_fb_" + cqest).style.display = "block";
				document.getElementById("c_fb_" + cqest).style.display = "none";

			
		}
	
//-------	
var multi_ca_array = [];	
	
	//alert("cqest: " + cqest + " : " + "jcc: " + jcc);
	
	
	
	
	
	
	//alert("multi_ca_array: " + multi_ca_array);
	
	//alert("multi?: " + new_answer_array[cqest].length);
	
//alert("QC_Multi_Array_TF[cqest]: " + QC_Multi_Array_TF[cqest]);	
	
	for(var tf_c = 0; tf_c < new_answer_array[jcc].length; tf_c++)
		{
			//alert("tf_c: " + tf_c);
			
			
			
			
			if(new_answer_array[jcc][tf_c] === "true")
				{
					//alert("true");
					multi_ca_array[multi_ca_array.length] = tf_c;

				}
			
			if( (tf_c + 1) === new_answer_array[jcc].length)
				{
					//alert("tf_c + 1: " + tf_c + 1);
					
					//alert("multi?: " + new_answer_array[cqest + 1]);
					
					////alert(multi_ca_array+" _ "+cqest);
					
					
	//Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='display:none' id='ci_fb_"+jcc+"_"+new_answer_array[cqest + 1].length+"' class='qtext'></div>"; // this seems to work better
					
					//alert("cqest: " + cqest);					
					Send_multi_question_data(multi_ca_array,cqest);
				}
			
		}
	
	
//alert("multi_ca_array: " + multi_ca_array);
	
	

	
}
					 //len,	
function check_box_fb(cbfb,qfb)
{
	for(var cboxCk = 0; cboxCk < cbfb; cboxCk++)
		{
			chClass = ("#cb_" + qfb + "_" + cboxCk);
			
			$(chClass.toString()).removeClass('q_comp_mw');	
			$(chClass.toString()).addClass('q_comp_incorrect');
		}
}



function MSub_on(ccbx)
{
	document.getElementById("mtl_sub_button" + ccbx).disabled = false;
	
	$( '#mtl_sub_button' + ccbx.toString()).removeClass('disabled');
	$( '#mtl_sub_button' + ccbx.toString()).addClass('active');

}

//╔═════════════════════════════════════════════════════════════════════════════════════════════════╗
//║ -------<( Multi Answer choice question end )>-------                                            ║
//╚═════════════════════════════════════════════════════════════════════════════════════════════════╝


	function Lesson_Selection(btnNum)
	{

		
		btnNum = (btnNum + 1);

		
		window.open(Course_Number_Val + "_M" + Module_Number_Val + "_L" + btnNum + ".html", "_self");

		
	}


//╔═════════════════════════════════════════════════════════════════════════════════════════════════╗
//║ -------<( Speech Bubble Buttons Begin )>-------                                                 ║
//╚═════════════════════════════════════════════════════════════════════════════════════════════════╝	
var bid_Count = 0;
var direction = 1;

function bub_Next(bb_cur)
{
	//bubble_call(bb_cur);


	
switch(document.getElementById("bub_next_button" + bb_cur).innerText)
	{
		case "Start":
		case bStartButton:
			//alert("Start: " + "bb_cur: " + bb_cur);
			bid_Count = 0;
			bubble_call(bb_cur,(bid_Count + 1));
			document.getElementById("bub_next_button" + bb_cur).innerText = bNextButton;//"Next";//---------------------------
				document.getElementById("startBubble" + bb_cur).style.display = "none";
				document.getElementById("bub_next_button" + bb_cur).innerText = bNextButton;//"Next";//---------------------------
			bid_Count = (bid_Count + 1);
				
				document.getElementById(bb_cur + "_bbl_" + bid_Count).style.display = "block";
				document.getElementById("bub_prev_buton" + bb_cur).style.display = "block";			

				if(bid_Count === (speech_number[bb_cur].length - 1))
						{
							document.getElementById("bub_next_button" + bb_cur).innerText = bReplayButton;//"Replay";//---------------------------
						}
						
				if(speech_number[bb_cur].length === 2)
						{
							document.getElementById("bub_next_button" + bb_cur).style.backgroundColor = "green"; // Added on July 17, 2020 by Jcc
						}						
			
		break;
			
		case "Next":
		case bNextButton:	
				document.getElementById(bb_cur + "_bbl_" + bid_Count).style.display = "none";
				bid_Count = (bid_Count + 1);
				bubble_call(bb_cur,bid_Count);
				document.getElementById(bb_cur + "_bbl_" + bid_Count).style.display = "block";

			
				if(bid_Count === (speech_number[bb_cur].length - 1))
						{
							document.getElementById("bub_next_button" + bb_cur).innerText = bReplayButton;//"Replay";//---------------------------
							document.getElementById("bub_next_button" + bb_cur).style.backgroundColor = "green"; // Added on July 17, 2020 by Jcc
						}
		break;
			
		case "Replay":
		case bReplayButton:
			document.getElementById(bb_cur + "_bbl_" + bid_Count).style.display = "none";
			document.getElementById("startBubble" + bb_cur).style.display = "block";
			document.getElementById("bub_next_button" + bb_cur).innerText = bStartButton ;//"Start";//---------------------------
			document.getElementById("bub_prev_buton" + bb_cur).style.display = "none";

			//alert(speech_number[bb_cur].length);			
			//alert(bid_Count);

			document.getElementById("bub_next_button" + bb_cur).style.backgroundColor = "#337ab7"; // Added on July 17, 2020 by Jcc
			
		break;	
	}
}


function bub_Back(bb_cur)


{
			switch(bid_Count)
			{
					
				case 1:
						
						document.getElementById("startBubble" + bb_cur).style.display = "block";
						document.getElementById(bb_cur + "_bbl_" + bid_Count).style.display = "none";
						document.getElementById("bub_next_button" + bb_cur).innerText = "Start";
						document.getElementById("bub_prev_buton" + bb_cur).style.display = "none";

							document.getElementById("bub_next_button" + bb_cur).style.backgroundColor = "#337ab7"; // Added on July 17, 2020 by Jcc

						bid_Count = 0;
						bubble_call(bb_cur,(bid_Count + 1));
						
				break;	
				
				default:	
						document.getElementById(bb_cur + "_bbl_" + bid_Count).style.display = "none";
						bid_Count = (bid_Count - 1);
						document.getElementById(bb_cur + "_bbl_" + bid_Count).style.display = "block";

							document.getElementById("bub_next_button" + bb_cur).innerText = bNextButton;  // Added on July 17, 2020 by Jcc

							document.getElementById("bub_next_button" + bb_cur).style.backgroundColor = "#337ab7";  // Added on July 17, 2020 by Jcc


						bubble_call(bb_cur,bid_Count);
				break;	
		
			}

}





//╔═════════════════════════════════════════════════════════════════════════════════════════════════╗
//║ -------<( Speech Bubble Buttons End )>-------                                                   ║
//╚═════════════════════════════════════════════════════════════════════════════════════════════════╝	

$(function(){
    $(".flip").flip({
        trigger: 'click'
    });
});	

//document.getElementById("myDIV").onscroll = function() {myFunction()};

function ref_scroll_test(rst)
{
	//console.log("rst: " + rst);

	document.getElementById("trans_" + rst).onscroll = function() {ref_scroll(rst)};
}

function ref_scroll(rsl)
{
	var rslData = document.getElementById("trans_" + rsl);
	//console.log("scrolling")
	//console.log(document.getElementById("trans_" + rsl).scrollHeight); //innerHTML.length
	//console.log(document.getElementById("trans_" + rsl).offsetHeight);

	//console.log(rslData.scrollTop)
	//console.log(rslData.scrollHeight)
	//console.log(rslData.offsetHeight)

	if( rslData.scrollTop === (rslData.scrollHeight - rslData.offsetHeight) + 6)
	{
		if(document.getElementById("reflect_input_" + rsl).style.display !== "block")
			{
				document.getElementById("reflect_input_" + rsl).style.display = "block";
				document.getElementById("r_option_input_" + rsl).style.display = "block";
		
				var reftop = (document.getElementById("reflect_input_" + rsl).offsetTop) + (document.getElementById("reflect_input_" + rsl).offsetHeight);

			}





//console.log("reftop: " + reftop);

window.scrollTo({top:reftop, behavior:'smooth'});		
		
	}


}



function Transcripts(tran)
	{
		
		

		switch(document.getElementById("tbtn_" + tran).innerHTML)
			{
				//BRIAN 01/13/2020: EDIT commented parts in both cases have been replaced with the line below it
					//case "Close Transcript":
					case trans_close:
							document.getElementById("trans_" + tran).style.display = "none";
							//document.getElementById("tbtn_" + tran).innerHTML = "Open Transcript";
							document.getElementById("tbtn_" + tran).innerHTML = trans_button;
					break;
					
					//case "Open Transcript":
					case trans_button:
							document.getElementById("trans_" + tran).style.display = "block";

						// var vrs = document.getElementById("vid_ref_source_" + tran).paused;
						var vrs = document.getElementById("vid_ref_source_" + tran)	
						

						//console.log(vrs);

							if(vrs !== null)
								{
									//console.log("vrs: " + vrs);
									ref_scroll_test(tran);
								}
							
							
						
						console.log("======================================");

						//vid_ref_source_2

							//document.getElementById("tbtn_" + tran).innerHTML = "Close Transcript";
							document.getElementById("tbtn_" + tran).innerHTML = trans_close;

							var xapiVidPath = document.getElementById("vid_source_" + tran).getElementsByTagName("source")[0].src.split("/");
							var xapiVidName = xapiVidPath[xapiVidPath.length - 1];
							//console.log(xapiVidName);

							var videoTranscriptStatement = {
								"type": "transcript",
								"verb": "viewed",
								"activity": "http://id.tincanapi.com/activitytype/resource",
								"module": bCurrentMod + 1,
								"lesson": bCurrentLsn + 1,
								//"page": bCurrentPag + 1,
								"page": np_num,
								"objectID": xapiVidName
							};

							if(isXAPI){
								LRSSend(videoTranscriptStatement);
							}
					break;
				//BRIAN 01/13/2020: EDIT commented parts in both cases have been replaced with the line below it
			}
	}

function aTranscripts(tran)
	{

		switch(document.getElementById("atbtn_" + tran).innerHTML)
			{
					//case "Close Transcript":
					case trans_close:
							document.getElementById("audio_trans_" + tran).style.display = "none";
							//document.getElementById("atbtn_" + tran).innerHTML = "Open Transcript";
							document.getElementById("atbtn_" + tran).innerHTML = trans_button;
					break;

					
					
					//case "Open Transcript":
					case trans_button:
							document.getElementById("audio_trans_" + tran).style.display = "block";
							//document.getElementById("atbtn_" + tran).innerHTML = "Close Transcript";
							document.getElementById("atbtn_" + tran).innerHTML = trans_close;

							var xapiAudPath = document.getElementById("audio_trans_" + tran).parentElement.getElementsByTagName("audio")[0].getElementsByTagName("source")[0].src.split("/");
							var xapiAudName = xapiAudPath[xapiAudPath.length - 1];
						////		console.log(xapiAudName);
							
							var audioTranscriptStatement = {
								"type": "transcript",
								"verb": "viewed",
								"activity": "http://id.tincanapi.com/activitytype/resource",
								"module": bCurrentMod + 1,
								"lesson": bCurrentLsn + 1,
								//"page": bCurrentPag + 1,
								"page": np_num,
								"objectID": xapiAudName
							};

							if(isXAPI){
								LRSSend(audioTranscriptStatement);
							}

					break;
			}

	}




function prev_lesson()
{
	
	Page_Selection(np_num - 1,1);

}

function next_lesson()
{

	
//if( np_num + 1 === (Number(toc_flyout_fn_array.length) - 1)  )
if( np_num + 1 === (Number(toc_flyout_fn_array.length) - 1) && courseType.indexOf("hioc") !== -1 )

	{
		//window.showEOLEOM(toc_mod,toc_lsn)
		//showEOLEOM(toc_mod,toc_lsn,"EOL");
		
		window.showEOLEOM(mod_lsn[0],mod_lsn[1],"EOL");
		
		//function showEOLEOM(module,lesson,type){
	
	}	
		else
	{		
		Page_Selection(np_num + 1,1);
	}
	
	
	
	
	
}

//-----<( Brians updates )>-------
//╔══════════════════════════════════════════════════════════════════════════════════╗
//║ -------<( Progress Bar Begin )>-------                                           ║
//╚══════════════════════════════════════════════════════════════════════════════════╝			

function progress_bar() //elmnt.clientHeight
{
	//var contScroll = document.getElementById("JcComponents").offsetHeight;
	//alert("contScroll: " + contScroll);



  var elmnt = document.getElementById("JcComponents");
	var x = elmnt.scrollLeft;
	var y = elmnt.scrollTop;



	

  //var scrlht = 100 / elmnt.scrollHeight;	
  //var ccmpht = elmnt.offsetHeight	
 //// var scrlht = ( (elmnt.scrollHeight) / (elmnt.scrollHeight - elmnt.offsetHeight)   );
  var scrlht = ( (elmnt.scrollHeight) - (elmnt.scrollHeight - elmnt.offsetHeight)   );	
  var nwht = (elmnt.scrollHeight - scrlht);	
	if($(window).width() < 768)
		{
			//alert("Mobile: " + contScroll);
			document.getElementById("prg_Bar").style.width = ( ( 100 / nwht ) * y) + "%";
		}
			else
		{
			//alert($('#JcComponents').height());
			//alert("sht: " + sht);
	
			//document.getElementById("prg_Bar").style.width = ( (scrlht  * y) + (nwht / 100) ) + "%";
			
  			document.getElementById("prg_Bar").style.width = ( ( 100 / nwht ) * y) + "%";
			
			//document.getElementById("first").innerHTML = "y : " + y;
			//document.getElementById("second").innerHTML = " nwht: " + nwht ;
			//document.getElementById("third").innerHTML = " elmnt.scrollHeight : " + elmnt.scrollHeight ;
			//if(y === )
		}
	
	//alert(contScroll);
	//alert("document.getElementById(JcComponents).offsetWidth: " + document.getElementById("JcComponents").clientHeight);
	// document.getElementById("prg_Bar").style.width = "100%";
	
	//-=--=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-
    //****************Added 2019-03-04 (Brian)****************************************
    //-=--=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-
	//MARK THE PAGE AS VIEWED WHEN THE USER HAS SCROLLED 90%
	if(courseType.indexOf("demo") === -1){

		
		var isNinety = ( 100 / nwht ) * y;
		if(isNinety > 90){

			//Checking to make sure that the page should be marked complete for shortcourseA
			var bQuestionsReady = true;

			if(courseType.indexOf("shortcourseA") !== -1){
				for (var bqCheck = 0; bqCheck < allPgQue[bCurrentPag + 1].length; bqCheck++){
					//change the value of bQuestionsReady if there's an answer property and it's still set to zero
					if(allPgQue[bCurrentPag + 1][bqCheck].hasOwnProperty("answer") && allPgQue[bCurrentPag + 1][bqCheck].answer === 0){
						bQuestionsReady = false;
						break;
					}
				}
			}

		////			console.log("bPageViews["+bCurrentMod+"]["+bCurrentLsn+"]["+bCurrentPag+"] = " + bPageViews[bCurrentMod][bCurrentLsn][bCurrentPag]);

			//if(bPageViews[bCurrentMod][bCurrentLsn][bCurrentPag] === 0){

				switch(ref_eol)
				{
					case 0:
						if(bPageViews[bCurrentMod][bCurrentLsn][bCurrentPag] === 0 && bQuestionsReady === true){
							bPageViews[bCurrentMod][bCurrentLsn][bCurrentPag] = 1;
							bSetState();
						}
					break;

					case 1:
							console.log("DOOOOOOM");
					break;
				}
/*
			if(bPageViews[bCurrentMod][bCurrentLsn][bCurrentPag] === 0 && bQuestionsReady === true){
				bPageViews[bCurrentMod][bCurrentLsn][bCurrentPag] = 1;
				bSetState();
			}
*/			
		}
  

		//-=--=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-
		//****************Added 2019-03-04 (Brian)****************************************
		//-=--=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-
		
		//-=--=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-
		//****************Added 2019-03-08 (Brian)****************************************
		//-=--=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-
		for (var bCheck = 1; bCheck < document.getElementsByClassName("toc_fly_buttons").length; bCheck++){
			//console.log(document.getElementsByClassName("toc_fly_buttons")[bCheck].getElementsByTagName("span")[2].getElementsByTagName("img")[0].src);
			//console.log(bPageViews[bCurrentMod][bCurrentLsn][bCheck - 1]);
			
			
				if(bPageViews[bCurrentMod][bCurrentLsn][bCheck - 1] === 1){
					//if(courseType !== "hioc" || courseType !== "shortcourseA"){
					if(document.getElementsByClassName("toc_fly_buttons")[bCheck].getElementsByTagName("span")[2]){
						//slight change to deal with an extra span tag if it exists
						document.getElementsByClassName("toc_fly_buttons")[bCheck].getElementsByTagName("span")[2].getElementsByTagName("img")[0].src = "jbuild_libs/images/chk_comp.png";
					}else{
						document.getElementsByClassName("toc_fly_buttons")[bCheck].getElementsByTagName("span")[1].getElementsByTagName("img")[0].src = "jbuild_libs/images/chk_comp.png";
					}
					
				}
			
	
		}
	}
	//-=--=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-
    //****************Added 2019-03-08 (Brian)****************************************
    //-=--=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-
	
}
//╔══════════════════════════════════════════════════════════════════════════════════╗
//║ -------<( Progress Bar End )>-------                                             ║
//╚══════════════════════════════════════════════════════════════════════════════════╝	

//-=--=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-
//****************Added 2019-06-14 (Brian)****************************************
//-=--=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-
//Called by shortcourseA courses to check for deficiencies are mark complete...
function doCheckComplete(){
	if(courseType.indexOf("demo") !== -1){
		doAlert("coursedemo");
	}else{
		var bPagesToView = [];
		course_settings.Portal_Setup.Alerts.shortCourseIncomplete.Body = "";

		if(courseType === "shortcourseA"){
			for (var bCompletion = 0; bCompletion < bPageViews[bCurrentMod][bCurrentLsn].length; bCompletion++){
				if(bPageViews[bCurrentMod][bCurrentLsn][bCompletion] === 0){
					bPagesToView[bCompletion] = bCompletion;
				}
			}
		}
		//Pages that need to be viewed...
		var bPageOutput = "Please view all the material on page(s) ";
		if (bPagesToView.length > 0){
			for (var bPageViewEntry = 0; bPageViewEntry < bPagesToView.length; bPageViewEntry++){
				if(bPagesToView[bPageViewEntry] !== undefined && bPageViewEntry !== bPagesToView.length - 1){
					bPageOutput += "<span class=\"bListLink\" onclick=\"Page_Selection("+ (bPagesToView[bPageViewEntry] + 1) +", 1)\">"  + (bPagesToView[bPageViewEntry] + 1) + "</span>, ";
				}else if(bPageViewEntry === bPagesToView.length - 1){
					bPageOutput += "<span class=\"bListLink\" onclick=\"Page_Selection("+ (bPagesToView[bPageViewEntry] + 1) +", 1)\">"  + (bPagesToView[bPageViewEntry] + 1) + "</span>";
				}
			}
		}
		//console.log(bPageOutput);

		//Questions that need to be answered...
		var bQuestionOutput = "Please answer the following questions:<br><ul style=\"list-style-type:none;\">";
		for (var allPgQueEntry = 0; allPgQueEntry < allPgQue.length; allPgQueEntry++){

			if (allPgQue[allPgQueEntry] !== "" ){ // if no questions, it was initialized as an empty string. Better than checking for null or undefined
				
				for(var pqEntryQuestion = 0; pqEntryQuestion < allPgQue[allPgQueEntry].length; pqEntryQuestion++){
					
					if(allPgQue[allPgQueEntry][pqEntryQuestion].answer === 0){
						bQuestionOutput += "<li class=\"bListLink\" onclick=\"Page_Selection("+ allPgQueEntry +", 1)\">Question " + (pqEntryQuestion + 1) + " on Page " +  allPgQueEntry + "</li>";
					}

				}

			//}else{
			//	console.log("allPgQue[" + allPgQueEntry + "] = " + allPgQue[allPgQueEntry]);
			}
		}
		bQuestionOutput += "</ul>";
		//console.log(bQuestionOutput);

		//Build the message...
		if(bPageOutput !== "Please view all the material on page(s) "){ 
			course_settings.Portal_Setup.Alerts.shortCourseIncomplete.Body += "<p style=\"width:100%;\">" + bPageOutput + "</p>";
		}else{
			course_settings.Portal_Setup.Alerts.shortCourseIncomplete.Body += "";
		}
		if(bQuestionOutput !== "Please answer the following questions:<br><ul style=\"list-style-type:none;\"></ul>"){ 
			course_settings.Portal_Setup.Alerts.shortCourseIncomplete.Body += "<p>" + bQuestionOutput + "</p>";
		}else{
			course_settings.Portal_Setup.Alerts.shortCourseIncomplete.Body += "";
		}

		//console.log(bPageOutput);
		//console.log(bQuestionOutput);

		//if the vars haven't been altered, then everything is ready to mark the course complete...
		if(course_settings.Portal_Setup.Alerts.shortCourseIncomplete.Body === ""){ 
			markLessonComplete(1, 1);
			showEOC();
		}else{
			course_settings.Portal_Setup.Alerts.shortCourseIncomplete.Body = "<p style=\"width:100%;\">Return to this page and click on the finish button once you have satisfied the requirements below.</p>" + course_settings.Portal_Setup.Alerts.shortCourseIncomplete.Body;
			doAlert("shortCourseIncomplete");
		}
	}
}
//-=--=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-
//****************Added 2019-06-14 (Brian)****************************************
//-=--=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-



//╔══════════════════════════════════════════════════════════════════════════════════╗
//║ -------<( Page Selection Begin )>-------                                         ║
//╚══════════════════════════════════════════════════════════════════════════════════╝	


function Page_Selection(pgSel,loc){
	// BL Commented the code below for some reason
//BL
//This code changes the translation and the submit buttons for the video and multi question buttons to other languages
// For some reason BL commeted this out. Need to ask him when he I see him.	
		
//Start BRIAN 01/13/2020 Should be commented or removed
/*	
		if(portalSetup.course_locale === "en-US")
			{
				trans_button = "Open Transcript";
				submit_button = "Submit";
			}		
		
		
		if(portalSetup.course_locale === "zh-CHT")
			{
				trans_button = "抄本";
				submit_button = "發送";
			}
*/			
//BL	
//End BRIAN 01/13/2020 - SHould be commented or removed	
	
	pvc = 0;
	fvc = 0;	
	
	if(document.getElementById("alertCover")){
		$("#alertCover").remove();
	}

	$("#JcComponents").empty();
	
	np_num = pgSel;
	
	if($(window).width() < 768){
		jcc_toc_fly_num = 1;
		toc_slide();
	}	
	
	if(loc !== 1){
		moduleFolder = (moduleFolder + "json/");
	}
	
	//Start BRIAN 01/13/2020 - HIOC part writtent to account for Chinese ordinal numbers...
	//if(pgSel === (Number(toc_flyout_fn_array.length) - 1)){
	if(pgSel === (Number(toc_flyout_fn_array.length) - 1) && courseType.indexOf("hioc") !== -1 ){
		window.showEOLEOM(mod_lsn[0],mod_lsn[1],"EOL");
	}else{
		document.getElementById("Page_Title").innerHTML = lesson_title_text;

		if(courseType.indexOf("hioc") === -1){
			document.getElementById("cRpage").innerHTML = "Page " + pgSel + " of " + (toc_flyout_fn_array.length - 1);
		}else{

			var pageLocale = returnLocale();
		////			console.log("pageLocale = " + pageLocale);

			switch (pageLocale.locale){
				case "en-US": 
					document.getElementById("cRpage").innerHTML = "Module " + mod_lsn[0] + ", Lesson " + mod_lsn[1] + " || Page " + pgSel + " of " + (toc_flyout_fn_array.length - 1);
				break;

				case "fr-CA":
				case "fr-FR": 
					document.getElementById("cRpage").innerHTML = "Module " + mod_lsn[0] + ", Leçon " + mod_lsn[1] + " || Page " + pgSel + " de " + (toc_flyout_fn_array.length - 1);
				break;
				
				case "zh-CT":
				case "zh-CN": 
					var chModuleNum = mod_lsn[0];
					switch(chModuleNum){
						case "一": chModuleNum = 1;break;
						case "二": chModuleNum = 2;break;
						case "三": chModuleNum = 3;break;
						case "四": chModuleNum = 4;break;
						case "五": chModuleNum = 5;break;
						case "六": chModuleNum = 6;break;
					}
					document.getElementById("cRpage").innerHTML = "第" + chModuleNum + "单元第" + mod_lsn[1] + "课第" + pgSel + "/" + (toc_flyout_fn_array.length - 1);
				break;

				default: 
					document.getElementById("cRpage").innerHTML = "Module " + mod_lsn[0] + ", Lesson " + mod_lsn[1] + " || Page " + pgSel + " of " + (toc_flyout_fn_array.length - 1);
				break;
			}
			
		}
		//End BRIAN 01/13/2020 - HIOC part writtent to account for Chinese ordinal numbers...	
	
	
		//cRpage
		//alert("moduleFolder: " + moduleFolder);

		////$("#JcComponents").empty();
		//document.getElementById("JcComponents").scrollTop.scrollTop = 0;
		document.getElementById("JcComponents").scrollTop = 0;
		document.getElementById("prg_Bar").style.width = 0;

		var myScript = document.createElement('script');

		////alert("myScript: " + myScript);

		var selected_page = moduleFolder + TOC_File_Order_Array[pgSel];
	////			console.log("selected_page: " + selected_page);
		myScript.setAttribute('src', selected_page);

		document.getElementById("lessonContent").style.display = "none";
		document.getElementById("pg_header").style.display = "block";
		document.getElementById("JcComponents").style.display = "block";
	
		//document.getElementById("JcComponents").appendChild(myScript);
	
		$("#JcComponents").append(myScript);	

		contScroll = document.getElementById("JcComponents").offsetHeight;

		//var elmnt = document.getElementById("myDIV");
		// elmnt.scrollLeft = 50;
		// elmnt.scrollTop = 0;	
		//alert("Page_Selection called with value of: " + pgSel);	

		document.getElementById("JcComponents").scrollTop = 100;

		if(courseType === "shortcourseA" && pgSel === bPageViews[bCurrentModule][bCurrentLesson].length){
			bPageViews[bCurrentModule][bCurrentLesson][bPageViews[bCurrentLesson][bCurrentLesson].length-1] = 1;
	
			//var easyBtn ="<div style=\"width: 50%; text-align: center; line-height: 3; background: #0069aa; font-size: 2em; border-radius: 50px; vertical-align: middle;\">Click to Finish</div>";
	
			//document.getElementsByClassName("jb_char_para")[0].append(easyBtn);
		}
	}    
	//-=--=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-
    //****************Added 2019-02-26 (Brian)****************************************
    //-=--=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-	
   /*  //Get the information needed from the url...
    var bTemp = TOC_File_Order_Array[pgSel].split("_");
	//console.log(bTemp);
    var bMod = bTemp[2].substr(1,1);
    var bLsn = bTemp[3].substr(1,1);
	var bPag = bTemp[4];
    //console.log("Module number = " + bTemp[2].substr(1,1));
    //console.log("Lesson number = " + bTemp[3].substr(1,1));
	//console.log("Page is " + bPag);
	
	//Make sure that we have the right page number for the array...
	if(bPag.indexOf("LO") !== -1){
		bPag = 0;
	}else if (bPag.indexOf("EOL") !== -1){
		bPag = bPageViews.length - 1;
	}else if(bPag.indexOf("P") !== -1){
		bPag = pgSel - 1;
	} */
	
	//Get the information needed from the url...
    var bTemp = TOC_File_Order_Array[pgSel].split("_");
	//console.log(bTemp);
	var bMod, bLsn, bPag;

	if(courseType === "hioc"){
		bMod = bTemp[2].substr(1,1);
		bLsn = bTemp[3].substr(1,1);
		bPag = bTemp[4];
	}else{
		bMod = 1;
		bLsn = 1;
		if(bTemp[2] !== "10.js"){
			bPag = bTemp[2].substr(0,1);
		}else{
			bPag = bTemp[2].substr(0,2);
		}
	}

	/* if(bTemp[0].indexOf("TTTT" > -1)){
		console.log("THis is TTTT");
	} */
	//console.log("isExamPrep (from creator)");


    //console.log("Module number = " + bTemp[2].substr(1,1));
    //console.log("Lesson number = " + bTemp[3].substr(1,1));
		//console.log("Page is " + bPag);

		//console.log("Module Number = " + bMod);
		//console.log("Lesson Number = " + bLsn);
		//console.log("Page Number = " + bPag);
	
	//Make sure that we have the right page number for the array...
	if(bPag.indexOf("LO") !== -1){
		bPag = 0;
	}else if (bPag.indexOf("EOL") !== -1){
		bPag = bPageViews.length - 1;
	}else if(bPag.indexOf("P") !== -1){
		bPag = pgSel - 1;
	}else{
		bPag = pgSel - 1;
	}
    
    //USED BY THE PROGRESS_BAR() FUNCTION TO KNOW WHICH PAGE TO MARK COMPLETE...
    bCurrentMod = bMod - 1;
    bCurrentLsn = bLsn - 1;
    bCurrentPag = bPag;
	
	//FOR TOC ONLY!!! 
	if(bCurrentPag === 0){
		//Mark the TOC viewed in the Portal State...
		bPageViews[bCurrentMod][bCurrentLsn][bCurrentPag] = 1;
		//Update the flyout menu...
		if(document.getElementsByClassName("toc_fly_buttons")[1].getElementsByTagName("span")[2]){
			document.getElementsByClassName("toc_fly_buttons")[1].getElementsByTagName("span")[2].getElementsByTagName("img")[0].src = "jbuild_libs/images/chk_comp.png";
		}else{
			document.getElementsByClassName("toc_fly_buttons")[1].getElementsByTagName("span")[1].getElementsByTagName("img")[0].src = "jbuild_libs/images/chk_comp.png";
		} 
	}
	
    //MOVED TO PROGRESS_BAR()...
	//bPageViews[bMod - 1][bLsn - 1][bPag] = 1;

	if(courseType.indexOf("demo") === -1){
		gBookmarks[bMod - 1][bLsn - 1] = selected_page;
							  
	
		//console.log(selected_page);
		
		//Check to see if the lesson should be marked complete
		var markComplete = true;
		//for (var i = 0; i <  bPageViews[bMod - 1][bLsn - 1].length - 1; i++){ // Original, Excludes the eols
		//if(courseType === "hioc"){
			for (var i = 0; i <  bPageViews[bMod - 1][bLsn - 1].length; i++){ //2019-03-04: INCLUDES THE EOLs...
				if(bPageViews[bMod - 1][bLsn - 1][i] === 0){
					markComplete = false;
					break;
				}
			}
   
		/* }else{//Sets it complete at the top of the last page, not at the bottom...!!!!!!!!!!!!!!!!
			for (var i = 0; i <  bPageViews[bMod - 1][bLsn - 1].length - 1; i++){ // Excludes the eols, if there are any... Mostly this is shortcourseA related.
				if(bPageViews[bMod - 1][bLsn - 1][i] === 0){
					markComplete = false;
					break;

				}
			} */
		//}
    }

	
	if(markComplete === true){
		if(bLessonCompletions[bMod - 1][bLsn - 1] === "---- - -- - --"){
			bLessonCompletions[bMod - 1][bLsn - 1] = new Date().toISOString();
			if(isXAPI){
				var lessonStatement = {
					"type": "lesson",
					"verb": "completed",
					"activity": "http://adlnet.gov/expapi/activities/lesson",
					"module": bMod,
					"lesson": bLsn,		
					"objectID": "M" + bMod + "L" + bLsn
				};
				LRSSend(lessonStatement);
                bSetState();
			}
		}
	}
	
	//console.log(markComplete);
    
    var statementType;
    var xapiPage;
    
    switch (bTemp[4]){
        case "TC.js": statementType = "Table of Contents";
            xapiPage = "TC";
            break;
        case "LO.js": statementType = "Lesson Learning Objectives";
            xapiPage = "LO"
            break;
        case "EOL.html": statementType = "End of Lesson Questions";
            xapiPage = "EOL";
			break;
		default: 
			if(isExamPrep === true){
				statementType = "Tough Topic";
				xapiPage = "Number_" + (bPag + 1); // Top Ten Tough Topics...
			}else{
				statementType = "Lesson Page"; // Normal lesson page...
				xapiPage = "P" + bPag;
			}
       		break;
	}
	
	var bPObjID;
	if(isExamPrep === true){
		//modObjID = "M" + (mdl_num + 1) + "_TTTT";
		bPObjID = "TTTT_" + xapiPage;
	}else{
		bPObjID =  "M" + bMod + "L" + bLsn + xapiPage;
	}

    var pageStatement = {
        "type": statementType,
        "verb": "viewed",
        "activity": "http://activitystrea.ms/schema/1.0/page",
        "module": bMod,
        "lesson": bLsn,		
		//"objectID": "M" + bMod + "L" + bLsn + xapiPage
		"objectID": bPObjID
    };
    if(isXAPI){
        //Send the Statement...
        LRSSend(pageStatement);
        //Set the State...
        bSetState();
    }else{
        //console.log(theStatement);
    }
    //-=--=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-
    //****************Added 2019-02-26 (Brian)****************************************
    //-=--=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-	
}

//╔══════════════════════════════════════════════════════════════════════════════════╗
//║ -------<( Page Selection End )>-------                                           ║
//╚══════════════════════════════════════════════════════════════════════════════════╝	
//-----<( Brians updates )>-------

function fine()
{
	//document.getElementById("Prev_Lesson").style.display = "none";	
	//document.getElementById("Prev_Lesson").offsetHeight;
}


function Table_set()
{
	
			if(new_tbl_whole[1].Row_Column_Data[rData_count].Row_Data[tData].Data_Cell_Text_Alignment_Single.length > 0)
					{
						tbl_single_row_data[0] = new_tbl_whole[1].Row_Column_Data[rData_count].Row_Data[tData].Data_Cell_Text_Alignment_Single;
					}
										
			if(new_tbl_whole[1].Row_Column_Data[rData_count].Row_Data[tData].Data_Cell_Text_Alignment_Single.length === 0)
					{
						tbl_single_row_data[0] = new_tbl_whole[1].Row_Column_Data[rData_count].Row_Text_Alignment;
					}
									
			if(new_tbl_whole[1].Row_Column_Data[rData_count].Row_Data[tData].Data_Cell_Color.length > 0)
					{
						tbl_single_row_data[1] = new_tbl_whole[1].Row_Column_Data[rData_count].Row_Data[tData].Data_Cell_Color;
					}
										
			if(new_tbl_whole[1].Row_Column_Data[rData_count].Row_Data[tData].Data_Cell_Color.length === 0)
					{
						tbl_single_row_data[1] = new_tbl_whole[1].Row_Column_Data[rData_count].Row_Color
					}
			
//------------------------------------	 Data_Cell_Border_Color  Data_Cell_Border_Color
			
//-------<(  Border Color )>-------										
			if(new_tbl_whole[1].Row_Column_Data[rData_count].Row_Data[tData].Data_Cell_Border_Color.length > 0)							
	 				{
						tbl_single_row_data[2] = new_tbl_whole[1].Row_Column_Data[rData_count].Row_Data[tData].Data_Cell_Border_Color;
					}
										
			if(new_tbl_whole[1].Row_Column_Data[rData_count].Row_Data[tData].Data_Cell_Border_Color.length === 0)							
	 				{
						tbl_single_row_data[2] = new_tbl_whole[1].Row_Column_Data[rData_count].Row_Outline_Color
					}
//-------<(  Border Color )>-------	
										
									
			if(new_tbl_whole[1].Row_Column_Data[rData_count].Row_Data[tData].Data_Cell_Border_Weight.length > 0)							
	 				{
						tbl_single_row_data[3] = new_tbl_whole[1].Row_Column_Data[rData_count].Row_Data[tData].Data_Cell_Border_Weight;
					}
										
			if(new_tbl_whole[1].Row_Column_Data[rData_count].Row_Data[tData].Data_Cell_Border_Weight.length === 0)							
	 				{
						tbl_single_row_data[3] = new_tbl_whole[1].Row_Column_Data[rData_count].Row_Outline_Weight
					}				
						
	
}


/*
function make_new_page()
	{
		var myScript = document.createElement('script');
		
		//LOMA_302/Modules/Mod_01/json/LOMA_302_M1_L1_P1.js
		//  LOMA_302_M1_L1_TC.js
	
		myScript.setAttribute('src', 'LOMA_302/Modules/Mod_01/json/LOMA_302_M1_L1_P2.js');
		
		//myScript.setAttribute('src', 'LOMA_302/Modules/Mod_01/json/LOMA_302_M1_L1_P1.js');
		
		//myScript.setAttribute('src', 'json/jcc_test.js');
		
		////document.head.appendChild(myScript);
		
		document.getElementById("lessonContent").appendChild(myScript);
		
		
	}

//-------<(  Added by Jack on 03_08_2019  )>-------
function open_pdf_file(opf)
{
	
	window.open("pdf/" + pdf_file_array[opf], '_blank', 'fullscreen=yes'); return false;

}
//-------<(  Added by Jack on 03_08_2019  )>-------
*/

function open_pdf_file(opf)

{

    //xAPI stuff
	 window.open("pdf/" + pdf_file_array[opf], '_blank', 'fullscreen=yes'); 

    var pdfStatement = {
        "type": "PDF",
        "verb": "viewed",
        "module": bCurrentMod + 1,
        "lesson": bCurrentLsn + 1,
       // "page": bCurrentPag + 1,
		"page": np_num,
        "activity": "http://activitystrea.ms/schema/1.0/file",
        "objectID": pdf_file_array[opf]
    };

    if(isXAPI){

        LRSSend(pdfStatement);

    }

    

    

   

    

    return false;

 

}


function lessonJump(LJ)
{


}


/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openToc() {
	
	//alert("width: " + document.getElementById("Page_Body").offsetWidth);
	//document.getElementById("Page_Body").offsetWidth
	var cur_pg_width = document.getElementById("Page_Body").offsetWidth;
	
	if(cur_pg_width <= 1024)
		{
			//alert("Use Modal for mobile view");
			document.getElementById("tocNav").style.width = "250px";
		}
	
	if(cur_pg_width > 1024)
		{
			document.getElementById("tocNav").style.width = "250px";
			document.getElementById("Page_Body").style.marginLeft = "250px";			
		}

}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeToc() {

					document.getElementById("tocNav").style.width = "0";
					document.getElementById("Page_Body").style.marginLeft = "0";

}

function closeToc1_mobile() {
	var cur_pg_width = document.getElementById("Page_Body").offsetWidth;
	
	if(cur_pg_width <= 1024)
		{
					document.getElementById("tocNav").style.width = "0";
					document.getElementById("Page_Body").style.marginLeft = "0";
		}
	
	if(cur_pg_width > 1024)
		{

		}
}

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//-------<( New Code for the new flip card )-------
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
/*
$(".card_1").click(function() {
    //window.location = "http://google.com";
	
});	
*/
function clicker(clknum,crdnum)
{

//alert(document.getElementById("keyModal").style.display.length);	

//console.log("Clicker: clknum: " + clknum + " / crdnum: " + crdnum);
	
	
//alert(clknum + " === " + crdnum);
	
	if(document.getElementById("keyModal").style.display !== 5)
		{
			//console.log("Display: " + document.getElementById("keyModal").style.display);
			$("#card_" + clknum + "_" + crdnum).flip();
			//$("#card_" + clknum + "_" + crdnum).disabled();
			
			//$("flip").prop("disabled", true)
			

		/*	
			if ("#card_" + clknum + "_" + crdnum.isFlipped)
				{
					alert("Flipped");
				}			
		*/	
			
			
			
			//$("2_1_back").prop("disabled", false)
		}
	
	if(document.getElementById("keyModal").style.display === 5)
		{

			
			

			

		}
	
//document.getElementById("myDIV").style.transform = "rotate(7deg)";	
	
}



//javascript:Jcc_New_Flip(jcc,flip_new_Array[0]+",0)'>";
/*
function Jcc_New_Flip(curCard,curCard_num,cardNumber)
{
	//alert("curCard: " + curCard + " | cardNumber: " + cardNumber);
	
	
	
	switch(cardNumber)
		{
			case 0:
						alert("zero");
						//alert("#card_"+curCard+"_"+curCard_num);
						//$("#card_"+csnip+"_"+crd_num+"").flip(true);	
						//$("#card_"+curCard+"_"+curCard_num+"").flip(true);
						////$("#card_"+curCard+"_"+curCard_num).flip(true);
				
						//document.getElementById("card_"+curCard+"_"+curCard_num).style.display = "none";
			break;
				
			case 1:
						alert("one");
						//alert("#card_"+curCard+"_"+curCard_num);
						//$("#card_"+csnip+"_"+crd_num+"").flip(true);	
						////$("#card_"+curCard+"_"+curCard_num+"").flip(false);				
			break;	
		}
	
}

function setup_flip_cards(snip,snip_num)
{
	//alert("#card_" + snip + "_" + snip_num);
	
	$("#card_"+snip+"_"+snip_num).show();
	//#card
	$(document).ready(function(){
		$("#card_"+snip+"_"+snip_num).flip({
		  axis: 'y',
		  trigger: 'manual'
		});
	});

}

function jcc_flip_snip(flnum,flp_val,jcf)
	{
		
		//alert("jcc_flip_snip: " + flnum + ", " + flp_val + ", ");
		
	if(flip_switch !== 1)	
		{
		switch(jcf)
			{
				case 0:
					//alert(jcf + " Should be 0");
						$("#card_"+flnum+"_"+flp_val).flip(true);
				break;

				case 1:
					//alert(jcf + " Should be 1");
						$("#card_"+flnum+"_"+flp_val).flip(false);
				break;
			}
		}
}


//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//-------<( Code for the new flip card )-------
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
function Jcc_Flip(csnip,crd_num,jf)
	{
		switch(jf)
			{
				case 0:
					$("#card_"+csnip+"_"+crd_num+"").flip(true);
				break;
					
				case 1:
					$("#card_"+csnip+"_"+crd_num+"").flip(false);
				break;	
			}
	}
*/
function jb_src(jbsrc)
{
	
	document.getElementById("jb_modal_main_text").innerHTML = source_Array[jbsrc];
	document.getElementById("jb_modal_main_text").style.padding = "20px";
	document.getElementById("keyModal").style.display = "block";
	document.getElementById("keyModal").style.marginTop = "80px";
}

function Source_info(sfo)
{

}


function alt_tag_im_ac(atag,atnum) // atnum
{
		console.log(ac_im_tag_array_whole[atag][atnum])	


		Alt_Tag_Modal(ac_im_tag_array_whole[atag][atnum])
		alt_xapi();

	flip_switch = 1;	
	
		
		document.getElementById('flip_10').style.pointerEvents = 'none';


}


function alt_tag_im_sa(atag,atnum) // atnum
{
		
		console.log("----------------------------")

		//console.log("atag; " + atag);
		//console.log("atnum; " + atnum);
		//console.log("mi_iwt_image_whole: " + mi_iwt_image_whole);


		//mi_iwt_image_array

		console.log("mi_iwt_image_whole["+atag+"]["+atnum+"]: " +mi_iwt_image_whole[atag][atnum]);

		Alt_image_id = (mi_iwt_image_whole[atag][atnum]);

		//console.log(mi_iwt_tag_whole[atag][atnum])	
		console.log("----------------------------")

//console.log("---------------------------------------------------------------------------------------------------------")
//console.log("mi_iwt_tag_whole: " + mi_iwt_tag_whole[atag][atnum]);
//console.log("---------------------------------------------------------------------------------------------------------")

		////Alt_Tag_Modal(mi_iwt_tag_whole[atnum][atag])

		//Alt_Tag_Modal(mi_iwt_image_array[atag][atnum])
		Alt_Tag_Modal(mi_iwt_tag_whole[atag][atnum])

		////Alt_Tag_Modal(ac_im_tag_array_whole[atag][atnum])
		alt_xapi();

	flip_switch = 1;	
	
		
		document.getElementById('flip_10').style.pointerEvents = 'none';


}


function iwlt_alt_tag_lib(iwlt_snpt)
{
		console.log(img_w_text_array[iwlt_snpt])

		

		Alt_Tag_Modal(img_w_text_array[iwlt_snpt])

		Alt_image_id = (Alt_Tag_Image_name[iwlt_snpt]);

		alt_xapi();
		// Max number of characters is 125
		//alert("Disable the onclick");
		//document.getElementById("flip_10").onclick = false;
		//document.getElementById("flip_10").unselectable="on"
	flip_switch = 1;	
	
		
		document.getElementById('flip_10').style.pointerEvents = 'none';

}


function alt_tag_lib(altag,carsl) //carsl
{
/*	
console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
console.log("Alt_Tag_Image_name["+ altag +"]: " + Alt_Tag_Image_name[altag]);
console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
*/
//jcc_car_data[jcc_car].Slide.Image)
	if(typeof carsl !== "undefined")
		{
			//console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
			//console.log("altag: " + altag + " carousel slide number = " + carsl);
			//console.log("Alt_Tag_Image_name[altag]: " + Alt_Tag_Image_name); //[altag]);
			//console.log("Alt_Tag_Image_name["+ altag +"]: " + Alt_Tag_Image_name[altag]);
			//console.log("car_img_array: " + car_img_array.length);
			//console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")

		}

	Alt_Tag_Modal(Alt_Tag_Image_Data[altag])
	//Alt_image_id = (Alt_Tag_Image_name[altag]);
	Alt_image_id = (Alt_Tag_Image_name[altag]);


	alt_xapi();
	// Max number of characters is 125
	//alert("Disable the onclick");
	//document.getElementById("flip_10").onclick = false;
	//document.getElementById("flip_10").unselectable="on"
flip_switch = 1;	


	document.getElementById('flip_10').style.pointerEvents = 'none';
	
}



function Alt_Tag_Modal(alt_mdl_text)
{
	
	//alert("Alt_Tag_Modal was called = " + alt_mdl_text);
	
	
	document.getElementById("jb_modal_main_text").innerHTML = alt_mdl_text;
	document.getElementById("keyModal").style.display = "block";
	

	document.getElementById("keyModal").style.marginTop = "80px";
	

	
}
//document.getElementById("jb_header_text").innerHTML = ktrm;
	//modal.style.display = "block";
	
	//$('#keyModal').modal('show');

function close_alt_tag() {
  document.getElementById("keyModal").style.display = "none";
  //document.getElementById("jb_header_text").innerHTML = "";
  document.getElementById("jb_modal_main_text").innerHTML = "";	
	
}


/*
	document.getElementById("jb_header_text").innerHTML = ktrm;
	document.getElementById("jb_modal_main_text").innerHTML = kdef;
	document.getElementById("keyModal").style.display = "block";
*/




function alt_xapi()
{

	console.log("????????????????????????????????????????")
	console.log("Alt_image_id: " + Alt_image_id)
	console.log("????????????????????????????????????????")


var alttagStatement = {
                "type": "alttag",
                "verb": "viewed",
                "module": bCurrentMod + 1,
                "lesson": bCurrentLsn + 1,
                //"page": bCurrentPag + 1,
				"page": np_num,
                "activity": "http://id.tincanapi.com/activitytype/resource",
                "objectID":Alt_image_id, //some sort of  generated id

};
	
	if(typeof isXAPI !== "undefined"){

		LRSSend(alttagStatement);

	}	
	
}





$(window).resize(function(){
	//alert("document.getElementById(rotText): " + document.getElementById("rotText"));
	
if(document.getElementById("rotText") !== null)
	{
		
		document.getElementById("rotText").style.left = "-190px";
		document.getElementById("rotfText").style.left = "-190px";
	}
});




function LRM_setup()
{
	//alert("LRM_setup was called");
						
						document.getElementById("lrm_window").style.backgroundColor = "blue";	
						document.getElementById("lrm_window").style.height = "400px";
						document.getElementById("lrm_window").style.width = "100%";
	
	//document.getElementById('id1').style.color = 'red'">
											//<div id ="lrm_window">
											
											/*
												#lrm_window {
												  width: 800px;
												  height: 350px;
												  position: relative;
												 background: yellow;
												}
											*/
}



//-------------------------------------------
//-------<( JB Stopwatch Code Begin )>-------
//-------------------------------------------


var jb_seconds = 0;
var jb_minutes = 0;
var jb_hours = 0;
var tdisplay = 0;
var jbid;



function jb_sw_add() {
    jb_seconds++;
    if (jb_seconds >= 60) {
        jb_seconds = 0;
        jb_minutes++;
        if (jb_minutes >= 60) {
            jb_minutes = 0;
            jb_hours++;
        }
		
    }
    
	//alert("jb_sw_add - jbid: " + jbid);

	document.getElementById("JB_readout_"+jbid).innerHTML = (jb_hours ? (jb_hours > 9 ? jb_hours : "0" + jb_hours) : "00") + ":" + (jb_minutes ? (jb_minutes > 9 ? jb_minutes : "0" + jb_minutes) : "00") + ":" + (jb_seconds > 9 ? jb_seconds : "0" + jb_seconds);	

    jb_sw_timer_start();
}

function jb_sw_timer(swid)
{
	jbid = swid;	
	stopwatch_click(swid,"start");
	jb_sw_timer_start();
}

function jb_sw_timer_start() {
	
	if(isNaN(jb_seconds) === true )
		{
			jb_seconds = 0;
		}
	if(isNaN(jb_seconds) === false )
		{
			
		}
	
	
    tdisplay = setTimeout(jb_sw_add, 10); //1000
	
}
	
function jb_sw_reset(swid)
	{
		stopwatch_click(swid,"reset");
		document.getElementById("JB_readout_"+swid).innerHTML = "00:00:00";
		jb_seconds = 0; jb_minutes = 0; jb_hours = 0;
		
	}

function jb_sw_stop(swid)
{
	clearTimeout(tdisplay);
	stopwatch_click(swid,"stop");
}

//-------------------------------------------
//-------<(  JB Stopwatch Code End  )>-------
//-------------------------------------------			




/*
  var timer = null;
    var min_txt = document.getElementById("min");
    var min = Number(min_txt.innerHTML);
    var sec_txt = document.getElementById("sec");
    var sec = Number(sec_txt.innerHTML);
    var msec_txt = document.getElementById("msec"); 
    var msec = Number(msec_txt.innerHTML);
*/	
/*
    function stopTimeMilliseconds(timer) {
        if (timer) { 
            clearInterval(timer);
            return timer;
        }
        else return timer;
    }
    function startTimeMilliseconds() {
        var currDate = new Date();
        return currDate.getTime();	
    }
    function getElapsedTimeMilliseconds(startMilliseconds) {
        if (startMilliseconds > 0) {
            var currDate = new Date();
            elapsedMilliseconds = (currDate.getTime() - startMilliseconds);
            return elapsedMilliseconds;
        }
     else {
        return elapsedMilliseconds = 0;
        }
    }
    function startWatch() { 
		
		//alert("Strt Timer Called");
        // START TIMER
        timer = stopTimeMilliseconds(timer); 
        var startMilliseconds = startTimeMilliseconds();
        timer = setInterval(function() { 
            var elapsedMilliseconds = getElapsedTimeMilliseconds(startMilliseconds); 

			if (msec < 10) {

				 msec_txt.innerHTML = "0" + (msec / 10).toFixed(0);
	
            }
            else if (msec < 100) {

				 msec_txt.innerHTML = "0" + (msec / 10).toFixed(0);
            }
            else {

				 msec_txt.innerHTML = (msec / 10).toFixed(0); 
            }
            if (sec < 10) {
                sec_txt.innerHTML = "0" + sec;
            }
            else {
                sec_txt.innerHTML = sec; 
            }
            min_txt.innerHTML = "0" + min;
			
            msec = elapsedMilliseconds;
            if (min >= 59 && sec >=59 && msec > 900) {
                timer = stopTimeMilliseconds(timer);
                return true;
            }
            if (sec > 59) {
                sec = 0;
                min++;
            }
            if (msec > 999) {
                msec = 0;
                sec++;
                startWatch();
            }
        }, 10);
    }
    function stopWatch() {
        // STOP TIMER
        timer = stopTimeMilliseconds(timer);
        return true;
    }
    function resetWatch() {
        // REZERO TIMER
        timer = stopTimeMilliseconds(timer);
        msec_txt.innerHTML = "00"; //000
        msec = 0;
        sec_txt.innerHTML = "00"; 
        sec = 0;
        min_txt.innerHTML = "00"; 
        min = 0;
        return true;
    }
*/	
//-------------------------------------------
//-------<(  JB Stopwatch Code End  )>-------
//-------------------------------------------


function snippet_roadmap(snra,sptname,sptinfo)
{
	
	//alert("snra: " + snra);
	//alert("csnm: " + csnm);
//snipmap_array[snra] = (snra,sptname,sptinfo);	
	
//snipmap_array[snra] = (sptname);	

	
	// Use the number of snippets for the row count of the text area
	
snipmap_array[snra] = [snra] + ": " + [sptname] + ": " + [sptinfo] + "\n";	
	

	
	if(jcc === (csnm - 1))
		{
			//alert("Number of snippets = " + jcc);
			//alert(snipmap_array);
			snip_string = snipmap_array.toString().replace(/,/g,"");
			document.getElementById("snip_data").innerHTML = snip_string;
	
			
		}
	
/*
				alert("snra: " + snra);
				alert("sptname : " + sptname);
				alert("sptinfo: " + sptinfo);

				alert("jcc: " + jcc);			
*/
	
	
	
	//snipmap_array[snra] = 


	
}


function close_img()
	{
		document.getElementById("jccImgModal").style.display = "none";
		if(typeof moduleFolder === "undefined")
			{
				document.getElementById("Page_Body").style.overflow = "scroll";				
			}


		
		if(typeof moduleFolder !== "undefined")
			{
				document.getElementById("lessonContent").style.overflow = "scroll";
				document.getElementById("JcComponents").style.overflow = "scroll";
			}
		
		
		
	}

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//-------<( Modal code for Multi_Image and image_w_text_list zoom )>-------
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
function close_jbimg()
{
	document.getElementById("jbImgModal").style.display = "none";
}
//acct
function imlt_zoom(c_cmp,acct,snpt)
{                  // comp num, array in image
	

/////// imgwt_ac_whole[jcc][account]


//img_w_text_img_array

	switch(snpt)
		{
			case 100:
				console.log(img_w_text_img_array[c_cmp]);
				document.getElementById("jb_modal_image").src =  img_w_text_img_array[c_cmp];
			break;
			case 101:
				//console.log(img_w_text_img_array[c_cmp]);

				//console.log("imgwt_ac_whole["+c_cmp+"]["+acct+"]: " + imgwt_ac_whole[c_cmp][acct])

				//console.log("acct: " + acct);
				//console.log("snpt: " + snpt);

				document.getElementById("jb_modal_image").src = img_loc + imgwt_ac_whole[c_cmp][acct];
			break;			
		}
	


	document.getElementById("jb_modal_image").style.height = "90%";
	document.getElementById("jb_modal_image").style.width = "90%";
	document.getElementById("jbImgModal").style.display = "block";

}


function mi_iwt_zoom(c_cmp,miwt_image,snpt)
{                  // comp num, array in image
	
	switch(snpt)
		{
			case 100:
				document.getElementById("jb_modal_image").src = img_loc + mi_iwt_array[c_cmp][miwt_image - 1];
			break;
			case 101:
				console.log("@@@@@@@ " + img_loc + mi_iwt_array[c_cmp][miwt_image - 1]);
				//document.getElementById("jb_modal_image").src = img_loc + mi_iwt_array[c_cmp][miwt_image - 1];
				document.getElementById("jb_modal_image").src = img_loc + ac_img_zoom_array[c_cmp][miwt_image];
			break;			
		}
	


	document.getElementById("jb_modal_image").style.height = "90%";
	document.getElementById("jb_modal_image").style.width = "90%";
	document.getElementById("jbImgModal").style.display = "block";

}

function mi_iwt_fit_image()
{
	document.getElementById("jb_modal_image").style.height = "90%";
	document.getElementById("jb_modal_image").style.width = "90%";	
}


function mi_iwt_zi_image()
{

	var mi_zoomer = document.getElementById("jb_modal_image").style.height.replace("%", "");

	document.getElementById("jb_modal_image").style.height = (Number(mi_zoomer) + 10) + "%";
	document.getElementById("jb_modal_image").style.width = (Number(mi_zoomer) + 10) + "%";
}

function mi_iwt_zo_image()
{

	var mi_zoomer = document.getElementById("jb_modal_image").style.height.replace("%", "");
	if(mi_zoomer >= 100)
		{
			document.getElementById("jb_modal_image").style.height = (Number(mi_zoomer) - 10) + "%";
			document.getElementById("jb_modal_image").style.width = (Number(mi_zoomer) - 10) + "%";
		}
}

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//-------<( Modal code for Multi_Image and image_w_text_list zoom )>-------
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-




function imgZoom(car_num,car_sld_num)
{
	
	//alert(typeof caro_modal_text[car_num][car_sld_num]);
	

	if(typeof caro_modal_text[car_num][car_sld_num] === "undefined")
		{
			document.getElementById("img_modal_text").innerHTML = "";
		}
	
	if(typeof caro_modal_text[car_num][car_sld_num] === "string")
		{
			document.getElementById("img_modal_text").innerHTML = caro_modal_text[car_num][car_sld_num];	
		}

	document.getElementById("modal_image").src = img_loc + car_zoom_array[car_num][car_sld_num];

	document.getElementById("jccImgModal").style.display = "block";

	
if(typeof moduleFolder === "undefined")
	{
		document.getElementById("Page_Body").style.overflow = "hidden";				
	}	
	
	
if(typeof moduleFolder !== "undefined")
	{
		document.getElementById("lessonContent").style.overflow = "hidden";
		document.getElementById("JcComponents").style.overflow = "hidden";
	}

}


function fit_image(car_num,car_sld_num)
{
	document.getElementById("modal_image").style.height = "90%";
	document.getElementById("modal_image").style.width = "90%";
}

function zin_image(car_num,car_sld_num)
{

	var zoomer = document.getElementById("modal_image").style.height.replace("%", "");

	document.getElementById("modal_image").style.height = (Number(zoomer) + 10) + "%";
	document.getElementById("modal_image").style.width = (Number(zoomer) + 10) + "%";
}

function zout_image(car_num,car_sld_num)
{
	
	var zoomer = document.getElementById("modal_image").style.height.replace("%", "");
//alert("zoomer: " + zoomer);
	
	if(zoomer >= 100)
		{
	document.getElementById("modal_image").style.height = (Number(zoomer) - 10) + "%";
	document.getElementById("modal_image").style.width = (Number(zoomer) - 10) + "%";
		}
}


function Swiffy_Play(swiffy_id)
	{
			//alert("Swiffy_Play was just called = " + "swiffycontainer_" + swiffy_id);
		
		//cur_swiffy_name[jcc]
		
		//alert("cur_swiffy_name[swiffy_id]: " + cur_swiffy_name[swiffy_id]);
		
// <script src="json/LOMA_302_M1_L1_P3.js"></script>		
		
	//<script src="swiffy/"+cur_swiffy_name[swiffy_id]+".js"></script>
		
		var swf_str = String(cur_swiffy_name[swiffy_id]);
		
		alert("swf_str: " + swf_str);
		
		/*
		var swf_str = String(cur_swiffy_name[swiffy_id]);
		
		//$.getScript( "swiffy/"+swf_str+".js");
		
		$.getScript("swiffy/Acquisition.js", function(internedStrings){
			 alert(internedStrings);
		});
		*/
		//load_swiffy_js(swf_str);
		

		
		//alert(swf_str);
		//$.getScript("swiffy/"+swf_str+".js");
		
		var cur_swiffy = String(("swiffycontainer_" + swiffy_id));
		//alert(cur_swiffy);
		
	var stage = new swiffy.Stage(document.getElementById(cur_swiffy),  //'swiffycontainer'
	/*							 
	<!-- corporations  Merger Acquisition Male_Female_Mortality_Curves_281 -->							 
	<script type="text/javascript" src="swiffy/Acquisition.js"></script> 

	<script src="json/LOMA_281_M1_L1_P1.js"></script>								 
	*/							 
	
   // var swiffy_file_name = document.createElement("script");
   // swiffy_file_name.type = "text/javascript";
   // swiffy_file_name.src = "Public/Scripts/"+swf_str+".js."; 
   // document.getElementsByTagName("head")[0].appendChild(swiffy_file_name);
   // return false;								 
	
					 
       //swiffyobject, {  }); 
	  swf_str, {  }); 							 
      
      stage.start();		

/*		
      var stage = new swiffy.Stage(document.getElementById('swiffycontainer'),
          Merger, {  }); // swiffyobject corporations Merger Acquisition Male_Female_Mortality_Curves_281
      
      stage.start();		
*/		
		

	
		
		
		
		
		/*
		switch(document.getElementById("tbtn_" + tran).innerHTML)
			{
					case "Close Transcript":
							document.getElementById("trans_" + tran).style.display = "none";
							document.getElementById("tbtn_" + tran).innerHTML = "Open Transcript";					
					break;
					
					case "Open Transcript":
							document.getElementById("trans_" + tran).style.display = "block";
							document.getElementById("tbtn_" + tran).innerHTML = "Close Transcript";
					break;
			}
		*/	

	}



/*
function loadScript(url, callback){

    var script = document.createElement("script")
    script.type = "text/javascript";

    if (script.readyState){  //IE
        script.onreadystatechange = function(){
            if (script.readyState == "loaded" ||
                    script.readyState == "complete"){
                script.onreadystatechange = null;
                callback();
            }
        };
    } else {  //Others
        script.onload = function(){
            callback();
        };
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}	
*/



/*
function Question_Recall()
{
		
						if(typeof courseType !== "undefined")
							{

							if(courseType === "shortcourseA")
								{
									//alert("Question number: " + allPgQue[np_num][Q_count].question);
									//alert("Answer: " + allPgQue[np_num][Q_count].answer);
									
									if( allPgQue[np_num][Q_count].answer === 1)
										{
											alert("Question number: " + allPgQue[np_num][Q_count].question + " Choice: " + allPgQue[np_num][Q_count].choice + " jcc: " + jcc);
										}
									
						
									//alert("jcc: " + jcc);
									
								}
								
							}
											
															
			
}
*/

function Question_Tracker(qNum){
//function nameMeWhateverMakesSense(responseNum, correctNum, qNum){
var pageNumber = np_num;
//console.log(pageNumber);

var theStatement = {
"type": "inlinequestion",
"verb": "answered",
"activity": "http://adlnet.gov/expapi/activities/question",
"module": bCurrentMod + 1,
"lesson": bCurrentLsn + 1,
"page": pageNumber,
"objectID": "M" + bCurrentMod + "L" + bCurrentLsn + "P" + pageNumber + "Q" + qNum,
//"studentResponse": responseNum,
//"correctResponse": correctNum
}

if(isXAPI){
//Send the Statement...
LRSSend(theStatement);
//Set the State...
bSetState();
}
}

function jb_survey()
{
var jb_sv_text_array = [];
var jb_sv_tfyn_array = [];
var jb_ad_sel_start = [];
var jb_ad_sel_array = [[],[]];
var jb_multi_sel_array = [];
var jb_multi_sel_array_whole = [[],[]];

//sv_a = True False Yes No
//sv_b = Agrree Disagree
//sv_c = Multiple selection
//sv_d = Text Input

//alert(survey_question_array.length);
//alert(survey_question_array);


for(var q_rpt = 1; q_rpt <= survey_question_array.length; q_rpt++)
	{
		if(typeof survey_question_array[q_rpt] !== "undefined")
			{
				//alert("q: "+ q_rpt + " = " + survey_question_array[q_rpt]);
			}
		
	}



//alert( "sv_a: " + sv_a + " sv_b: " + sv_b + " sv_c: " + sv_c + " sv_d: " + sv_d)

if(sv_a.length > 0)
	{
		//alert("sv_a: " + sv_a);

		for(var jctf = 0; jctf < sv_a.length; jctf++)
			{
				
////sv_a_id_array

				if(typeof sv_a[jctf] !== "undefined")
					{
					//alert("sv_a_id_array[jctf].length: " + sv_a_id_array[jctf]);

							for(var tf_yn = 0; tf_yn < sv_a_id_array[jctf].length; tf_yn++)
								{
									//sv_a_id_array
									//alert(jcc_sur_data);

								//	alert(document.getElementById(tfyn_quest_array[jctf]).textContent );


									if(document.getElementById(sv_a_id_array[jctf][tf_yn]).checked === true)
											{
												alert(survey_question_array[jctf] + " = " + tfyn_labels[jctf][tf_yn]); // Final Works
											}

									



								}
					

					}
				
				
			}

	}

/*
	0 = Strongly Agree
	1 = Agree
	2 = No Opinion
	3 = Disagree
    4 = Strongly Disagree 
*/

if(sv_b.length > 0)
	{
		for(var jca_d = 0; jca_d < sv_b.length; jca_d++ )
			{
				if(typeof sv_b[jca_d] !== "undefined")
					{

					  for(var ad_len = 0; ad_len < 5; ad_len++)
					  {

							jb_ad_sel_start[ad_len] = ("jbs_" + String(jca_d) + "_" + String(ad_len));

					  }

					  jb_ad_sel_array[jca_d] = jb_ad_sel_start;

					}


					if( typeof jb_ad_sel_array[jca_d] !== "undefined"  )
							{
								if(jb_ad_sel_array[jca_d].length > 0)
									{
										//alert("Question for Agree/Disagree: " + survey_question_array[jctf]);
										
										////alert(jb_ad_sel_array[jca_d]);
									}
								
								
							}


			}
			
	}



if(sv_c.length > 0)
	{
		////alert("multi section survey")
		////alert("sv_c: " + sv_c);

			for(var jca_c = 0; jca_c < sv_c.length; jca_c++)
				{
					if(typeof sv_c[jca_c] !== "undefined")
						{

								for(var jbmsa = 1; jbmsa <= sv_c_id_array[jca_c].length; jbmsa++)
									{
										if(typeof sv_c_id_array[jca_c][jbmsa] !== "undefined")
											{
												////alert(sv_c_id_array[jca_c][jbmsa]);

												////alert(document.getElementById(sv_c_id_array[jca_c][jbmsa]).checked);
												//alert("Question for Multiple Selection: " + survey_question_array[jctf]);
												jb_multi_sel_array[jbmsa] = document.getElementById(sv_c_id_array[jca_c][jbmsa]).checked;
											}
											
									}

									jb_multi_sel_array_whole[jca_c] = jb_multi_sel_array;
									jb_multi_sel_array = [];
									//alert("jb_multi_sel_array_whole[jca_c]: " + jb_multi_sel_array_whole[jca_c]); 


						}
						
				}

				//alert("jb_multi_sel_array_whole: " + jb_multi_sel_array_whole);
	}

if(sv_d.length > 0)
	{
		for(var jca_t = 0; jca_t < sv_d.length; jca_t++)
		{

				if(typeof sv_d[jca_t] !== "undefined")
				{
					//alert(sv_d[jca_t])
					//alert("Question for Text Input: " + survey_question_array[jctf]);
					////alert(document.getElementById(svd_current_array[jca_t]).value);

					//alert(svd_current_array[jca_t]);
				}
		}
		
	}


 //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
 //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-  
}

var tester;
function survey_next_question(cur_s_comp,cur_s_answer)
{
	//alert("survey_next_question was called");
	//alert("cur_s_comp: " + cur_s_comp);

	//alert(survey_comp_array[cur_s_comp]);
	//alert("cur_s_answer: " + cur_s_answer);


	tester = 1;

switch(survey_comp_array[cur_s_comp])
	{
		case "single_survey_question":

var single_survey_answer_array = []


//alert("single_survey_question_array[cur_s_comp];: " + single_survey_question_array[cur_s_comp]);

single_question_final_answer_array[cur_s_comp] = single_survey_question_array[cur_s_comp];

single_question_student_answers[cur_s_comp] = single_answer_array[cur_s_comp][cur_s_answer];


for(var ssaa = 1; ssaa <= 2; ssaa++)
 {
	if(ssaa === 1)
		{
			single_survey_answer_array[ssaa] = single_question_final_answer_array[cur_s_comp]
		}
	if(ssaa === 2)
		{
			single_survey_answer_array[ssaa] = single_question_student_answers[cur_s_comp]
		}	
	
	
}


single_question_and_answer_array[cur_s_comp] = single_survey_answer_array;

//alert(single_question_and_answer_array);

//alert(survey_comp_array[cur_s_comp]+"_"+cur_s_answer);
//alert(document.getElementById( survey_comp_array[cur_s_comp]+"_"+cur_s_answer ))


			if(ssq_array[cur_s_comp][cur_s_answer].length > 0)
				{
					cur_s_question = ssq_array[cur_s_comp][cur_s_answer];

					//alert("cur_s_question: " + cur_s_question);
				}

			if(ssq_array[cur_s_comp][cur_s_answer].length <= 0)
				{
					//var tester = 1;

					

					cur_s_question = (tester + 1);
					//alert("cur_s_question + 1 : " + cur_s_question);
				}



			document.getElementById("survey_next").style.opacity = "1";
			document.getElementById("survey_next").style.cursor = "pointer";
			document.getElementById("survey_next").disabled = false;
		// /survey_next
		
			//document.getElementById("survey_comp_number_" + (cur_s_comp + 1)).style.display = "block";

//id='survey_comp_number_"+surData+"'

		break;

		case "multi_survey_question":
				var mmaa_array = [];
				//multi_question_student_answers = [];
		//alert("multi_cur_num: " + multi_cur_num);
			//alert(document.getElementById("text_area_" + cur_s_comp).value); // Works
			//alert(multi_question_student_answers.length)
// id='text_area_"+surData+"'
			cur_s_question = (multi_cur_num + tester);	

//alert("multi_question_final_answer_array[cur_s_comp]: " + multi_question_final_answer_array[cur_s_comp]);


				for(var mmaa = 0; mmaa < 7; mmaa ++)
					{
						
					}


//alert("cur_s_answer: " + cur_s_answer);

//alert("multi_question_student_answers[cur_s_answer]: " + multi_question_student_answers[cur_s_answer]);

		
		
		multi_question_student_answers[cur_s_answer] = msq_array[cur_s_comp][cur_s_answer];







//alert("multi_question_and_answer_array[cur_s_answer]: " + multi_question_and_answer_array[cur_s_answer]);
			document.getElementById("survey_next").style.opacity = "1";
			document.getElementById("survey_next").style.cursor = "pointer";
			document.getElementById("survey_next").disabled = false;
			
			
		break;

		case "Text_box_input":

			cur_s_question = (Number(cur_s_question) + 1);
			
					
	
		break;

		case "Contact_input":

		break;
	}

}

//String(Object.keys(jcc_sur_data[surData]))
function survey_nxt() // need to collect and append user data here
{
	
//alert("survey_nxt value of cur_s_question: " + cur_s_question);

/*
id='survey_next'
id='survey_submit'
*/

//alert("cur_s_question: " + cur_s_question);


switch(cur_s_question)
	{
		case "6":
			document.getElementById("survey_next").style.display = "none";
			document.getElementById("survey_submit").style.display = "block";
			document.getElementById("survey_skip").style.display = "block";

			//document.getElementById("survey_submit").style.left = "100px";
			//document.getElementById("survey_skip").style.right = "100px";
//skp_sub
			document.getElementById("survey_submit").style.opacity = "1";
			document.getElementById("survey_submit").style.cursor = "pointer";
			document.getElementById("survey_submit").disabled = false;
			
			document.getElementById("survey_skip").style.opacity = "1";
			document.getElementById("survey_skip").style.cursor = "pointer";
			document.getElementById("survey_skip").disabled = false;			

				survey_end_number = 6;
		break;

		case "7":
			document.getElementById("survey_next").style.display = "none";
			document.getElementById("survey_submit").style.display = "block";

			document.getElementById("survey_submit").style.opacity = "1";
			document.getElementById("survey_submit").style.cursor = "pointer";
			document.getElementById("survey_submit").disabled = false;
				survey_end_number = 7;	
		break;

		default:
			document.getElementById("survey_next").style.opacity = "0.6";
			document.getElementById("survey_next").style.cursor = "not-allowed";
			document.getElementById("survey_next").disabled = true;
		break;
	}


document.getElementById("survey_comp_number_" + cur_s_question).style.display = "block";


}
//text_area_4

function countChars(obj,textbox_s_num){
var textbox_input_answer_array = [];
if(obj.value.length > 2)
	{

		//cur_s_question = (tester + 1);	

		document.getElementById("survey_next").style.opacity = "1";
		document.getElementById("survey_next").style.cursor = "pointer";
		document.getElementById("survey_next").disabled = false;	
		
		

	}
	//cur_s_question = (tester + 1);
	//alert("cur_s_question: " + cur_s_question);


//textbox_final_answer_array[cur_s_comp] = multi_survey_question_array[textbox_s_num];	
input_text_student_answers[textbox_s_num] = obj.value;

/*
for(var tbaa = 1; tbaa <= 2; tbaa++)
{
   if(tbaa === 1)
	   {
		textbox_input_answer_array[tbaa] = single_question_final_answer_array[cur_s_comp]
	   }
   if(tbaa === 2)
	   {
		textbox_input_answer_array[tbaa] = single_question_student_answers[cur_s_comp]
	   }	
   
   
}			

textbox_and_answer_array[cur_s_answer] = textbox_input_answer_array;




textbox_and_answer_array[textbox_s_num] = textbox_final_answer_array[cur_s_comp] + input_text_student_answers[textbox_s_num];
*/


}

function skip_contact()
{
	

	send_contact_to_xapi(7);

}




function submit_survey()
{
	contact_info_array = [];
	//alert("submit the survey");

//alert(document.getElementById("contact_name").value.length);


if(document.getElementById("contact_name").value !== 0)
	{
		contact_info_array[0] = document.getElementById("contact_name").value;
	}

if(document.getElementById("contact_company").value !== 0)
	{
		contact_info_array[1] = document.getElementById("contact_company").value;
	}


if(document.getElementById("contact_email").value !== 0)
	{
		
		contact_info_array[2] = document.getElementById("contact_email").value;

		//validateEmail(contact_info_array[2]);

		//validateEmail(String(contact_info_array[2]));

	}	

if(survey_end_number === 6)
	{

			ValidateEmail(contact_info_array[2]);
		
	}
	
if(survey_end_number === 7)
	{
		send_contact_to_xapi(7);
	}

}

function send_contact_to_xapi(sctx)
{

	text_input_array_creator = [];
//	console.log("sctx: " + sctx);
//	console.log("=================================================================================");


	for(var tfaa = 0; tfaa < input_text_student_answers.length; tfaa++)
		{

			//	console.log("textbox_final_answer_array["+tfaa+"]:-=-=-=- " + textbox_final_answer_array[tfaa]);	
			//	console.log("input_text_student_answers =======: " + input_text_student_answers);
		 /*
			if(typeof input_text_student_answers[tfaa] === "undefined")
				{
					text_input_array_creator[tfaa] = (textbox_final_answer_array[tfaa] + " = " + input_text_student_answers[tfaa])

				}			
		 */

				

			if(typeof input_text_student_answers[2] === "undefined")
					{
						input_text_student_answers[2] = "No input";
					}

			if(typeof input_text_student_answers[4] === "undefined")
					{
						input_text_student_answers[4] = "No input";
					}					

			if(typeof input_text_student_answers[7] === "undefined")
					{
						input_text_student_answers[7] = "No input";
					}					

			if(typeof input_text_student_answers[tfaa] !== "undefined")
				{
					text_input_array_creator[tfaa] = (textbox_final_answer_array[tfaa] + " = " + input_text_student_answers[tfaa])

				}

		}

		//	console.log("textbox_and_answer_array.length: " + textbox_and_answer_array.length)
		//	console.log("=================================================================================");

		textbox_and_answer_array[0] = text_input_array_creator;

		var sq_s_array = [];
		for(var cnt_frm = 0; cnt_frm < single_question_and_answer_array.length; cnt_frm++)
				{
					
					if(typeof single_question_and_answer_array[cnt_frm] === "object")
						{
							if(single_question_and_answer_array[cnt_frm].length > 1)
								{
											sq_s_array[sq_s_array.length] = single_question_and_answer_array[cnt_frm]
								}

						}

				}

		var txt_s_array = [];
		

		//	console.log("test length: " + text_input_array_creator.length);
		//	console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
		for(var txtin_frm = 0; txtin_frm < text_input_array_creator.length; txtin_frm++)
				{
					
					//	console.log("text_input_array_creator[txtin_frm]: " + text_input_array_creator[txtin_frm]);
					//console.log("=======")
					
				
					if(typeof text_input_array_creator[txtin_frm] !== "undefined")
						{
							
							txt_s_array[txt_s_array.length] = text_input_array_creator[txtin_frm]
							
							//alert(text_input_array_creator[txtin_frm]);
						}
					
					
					
					
				}
		//	console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")	
		

		mq_s_array = [multi_question_final_answer_array, multi_question_student_answers];

		//	console.log("txt_s_array.length: " + txt_s_array.length);

		//	console.log("txt_s_array[0]: " + txt_s_array[0]);


		var BQ2 = txt_s_array[0].split("=");
		
		var BQ4 = (txt_s_array[1] !== undefined) ? txt_s_array[1].split("=") : ["",""];
		var BQ7 = (txt_s_array[2] !== undefined) ? txt_s_array[2].split("=") : ["",""];

		
		//	console.log("BQ2[0]: " + BQ2[0]);
		//	console.log("BQ2[1]: " + BQ2[1]);
			
		
		
	//		console.log("BQ4[0]: " + BQ4[0]);
	//		console.log("BQ4[1]: " + BQ4[1]);

	//		console.log("BQ7[0]: " + BQ7[0]);
	//		console.log("BQ7[1]: " + BQ7[1]);

		var survey_input_data = {
			"contact_info": {
				"name": contact_info_array[0],
				"company": contact_info_array[1],
				"email": contact_info_array[2]
			},
			"q1":{
				"question": sq_s_array[0][1],
				"answer": sq_s_array[0][2]
			},
			"q3":{
				"question": sq_s_array[1][1],
				"answer": sq_s_array[1][2]
			},
			"q5":{
				"question": sq_s_array[2][1],
				"answer": sq_s_array[2][2]
			},

			"q2":{
				"question": mq_s_array[0][2],
				"answer": {
					"options": mq_s_array[1],
					"write-in": {
						"question": BQ2[0],
						"answer": BQ2[1]
					}						
				}
			},

			"q4":{
				"question": BQ4[0],
				"answer": BQ4[1]
			},

			"q7":{
				"question": BQ7[0],
				"answer": BQ7[1]
			}
		};
	//		console.log("BOOM!")
	//		console.log(survey_input_data)
		survey_data(survey_input_data);


		/* const survey_input_data = new Map([
			['name', contact_info_array[0]],
			['company', contact_info_array[1]],
			['email', contact_info_array[2]],

			['question01', sq_s_array[0]],
			['question03', sq_s_array[1]],
			['question05', sq_s_array[2]],

			['question02', mq_s_array],
			['question02_other', txt_s_array[0]],
			['question04', txt_s_array[1]],
		  ]); */

		//WORKS IN EDGE... NOT IE11
		//let survey_input_data = [];
		//survey_input_data.push(contact_info_array[0],contact_info_array[1],contact_info_array[2],sq_s_array[0],mq_s_array,txt_s_array[0],sq_s_array[1],txt_s_array[1],sq_s_array[2], )
		//console.log(`survey_input_data = `+survey_input_data);
		//survey_data(survey_input_data);

		//ORIGINAL CODE - DOESN"T WORK IN IE OR EDGE
		//const survey_info = Object.fromEntries(survey_input_data);
		//survey_data(survey_info);
		//console.log(survey_info);


	switch(sctx)
		{
			case 6:









				//alert("contact_info_array: " + contact_info_array)

				//alert("single_question_and_answer_array: " + single_question_and_answer_array);

				//alert("multi_question_final_answer_array: " + multi_question_final_answer_array);
				//alert("multi_question_student_answers: " + multi_question_student_answers);
						
				
				//alert(textbox_and_answer_array);

			break;

			case 7:


			

			break;
		}



}


function ValidateEmail(inputText)
{
	//alert(inputText);
//var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;

var mailformat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

if(document.getElementById("contact_email").value.match(mailformat))
{
	document.getElementById("contact_email").style.backgroundColor = "white";
	send_contact_to_xapi(6);
		//alert("You have entered a valid email address!");    //The pop up alert for a valid email address
		
//document.form1.text1.focus();
return true;
}
else
{

//alert("You have entered an invalid email address!");    //The pop up alert for an invalid email address
document.getElementById("contact_email").style.backgroundColor = "red";

//document.form1.text1.focus();
return false;
}
}

function jb_open_window(site_link)
{
//		console.log(site_link);
	
		switch(site_link)
			{
				case 1:
							window.open("https://www.loma.org/en/trending-topics/fraudsource/fraudshare/" , 'ext_window', 'fullscreen=true'); 
				break;
					
				case 2:
							window.open("https://www.loma.org/en/trending-topics/fraudsource/" , 'ext_window', 'fullscreen=true');
				break;
					
				case 3:
							window.open("https://av.limra.com/offers/fraud-subscription/subscribe.html" , 'ext_window', 'fullscreen=true');
				break;
					
				case 4:
							window.open("https://fedpaymentsimprovement.org/strategic-initiatives/payments-security/synthetic-identity-payments-fraud/" , 'ext_window', 'fullscreen=true');
				break;					
			}

	
}
				






