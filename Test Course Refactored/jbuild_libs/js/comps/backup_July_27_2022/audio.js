//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// -------<(  Component Begin 03/02/2020 )>-------
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

var snip_test; 
var comp_data;
var new_snippet_array = [];
c_div_maker = "";
function audio(c_data_stream,c_ccnum) //acfl
{

snip_test = Object.keys(c_data_stream[0]);

switch(snip_test.length)
	{
		case 1:
			old_snippet();
		break;

		default:

			new_snippet();	
		break;
	}



function old_snippet()
{

	c_div_maker = c_div_maker + "<div class='col-lg-12 col-md-12 col-xs-12 expert_bmargin' style='width:100%; margin-top:"+c_data_stream[6].top_margin+"; margin-bottom:10px; background-color:"+c_data_stream[4].background_color+"'>";

	if(c_data_stream[3].Lable_Position === "top")
		{
			c_div_maker = c_div_maker + "<div><"+c_data_stream[2].Label_Font_Size+">"+c_data_stream[1].Label+"</"+c_data_stream[2].Label_Font_Size+"></div>";
		}

	c_div_maker = c_div_maker + "<audio id='aud_source_"+c_ccnum+"' controls onplay='audio_number("+c_ccnum+")' style='width:80; margin-top: 20px;'><source src='"+audio_files+"" + c_data_stream[0].Audio_File + "' type='audio/mpeg'></audio>";
	
	if(c_data_stream[3].Lable_Position === "bottom")
		{
			c_div_maker = c_div_maker + "<div><"+c_data_stream[2].Label_Font_Size+">"+c_data_stream[1].Label+"</"+c_data_stream[2].Label_Font_Size+"></div>";
		}
	

		c_div_maker = c_div_maker +"<div align='center' style='margin-top:10px;margin-bottom:10px;'><button id='atbtn_" + c_ccnum+"' type='button' class='btn btn-primary btn-sm' onclick='aTranscripts("+c_ccnum+");'>Open Transcript</button></div>";

		c_div_maker = c_div_maker + "<div class='jb_mx_wd' id='audio_trans_" + c_ccnum +"' style='display: none; margin-top:10px; margin-bottom:10px; border: medium; border-style: solid; border-color: #000000;height:300px; overflow-y: auto; overflow-x: hidden ;padding:5px;'>";
	
		for(var atrn = 8; atrn < c_data_stream.length; atrn++)
		{
			
				switch(c_data_stream[atrn].per_underline)
					{
						case "u":
							
							c_div_maker = c_div_maker + "<p style='text-align:"+c_data_stream[7].Person_align+";font-weight:"+c_data_stream[7].Person_font_weight+";color:"+c_data_stream[7].Person_text_color+"' class='jb_char_para'><"+c_data_stream[7].Person_font+"><u>"+ c_data_stream[atrn].Person +"</u></"+c_data_stream[7].Person_font+"></p>";

							c_div_maker = c_div_maker + "<p style='text-align:"+c_data_stream[7].Transcript_Text_align+";font-weight:"+c_data_stream[7].Transcript_Text_font_weight+";color:"+c_data_stream[7].Transcript_Text_color+";' class='jb_char_para'><"+c_data_stream[7].Transcript_Text_font+">"+ c_data_stream[atrn].Transcript_Text +"</"+c_data_stream[7].Transcript_Text_font+"></p>";	

						break;

						default:
							c_div_maker = c_div_maker + "<p style='text-align:"+c_data_stream[7].Person_align+";font-weight:"+c_data_stream[7].Person_font_weight+";color:"+c_data_stream[7].Person_text_color+"' class='jb_char_para'><"+c_data_stream[7].Person_font+">"+ c_data_stream[atrn].Person +"</"+c_data_stream[7].Person_font+"></p>";

							c_div_maker = c_div_maker + "<p style='text-align:"+c_data_stream[7].Transcript_Text_align+";font-weight:"+c_data_stream[7].Transcript_Text_font_weight+";color:"+c_data_stream[7].Transcript_Text_color+";' class='jb_char_para'><"+c_data_stream[7].Transcript_Text_font+">"+ c_data_stream[atrn].Transcript_Text +"</"+c_data_stream[7].Transcript_Text_font+"></p>";							
						break;
					}



		}

	

c_div_maker = c_div_maker + "</div>";	

	c_div_maker = c_div_maker + "</div>";
	

	c_comp_Array[c_ccnum] = c_div_maker;
	
	comp_Array_test();

	c_div_maker = "";
}

function new_snippet()
{
	c_div_maker = c_div_maker + "<div class='col-lg-12 col-md-12 col-xs-12 expert_bmargin' style='width:100%; margin-top:"+c_data_stream[0].top_margin+"; margin-bottom:10px; background-color:"+c_data_stream[0].background_color+"'>";

	if(c_data_stream[0].Lable_Position === "top")
		{
			c_div_maker = c_div_maker + "<div><"+c_data_stream[0].Label_Font_Size+">"+c_data_stream[0].Label+"</"+c_data_stream[0].Label_Font_Size+"></div>";
		}

	c_div_maker = c_div_maker + "<audio id='aud_source_"+c_ccnum+"' controls onplay='audio_number("+c_ccnum+")' style='width:80; margin-top: 20px;'><source src='"+audio_files+"" + c_data_stream[0].Audio_File + "' type='audio/mpeg'></audio>";
	
	if(c_data_stream[0].Lable_Position === "bottom")
		{
			c_div_maker = c_div_maker + "<div><"+c_data_stream[0].Label_Font_Size+">"+c_data_stream[0].Label+"</"+c_data_stream[0].Label_Font_Size+"></div>";
		}
	

		c_div_maker = c_div_maker +"<div align='center' style='margin-top:10px;margin-bottom:10px;'><button id='atbtn_" + c_ccnum+"' type='button' class='btn btn-primary btn-sm' onclick='aTranscripts("+c_ccnum+");'>Open Transcript</button></div>";


		c_div_maker = c_div_maker + "<div class='jb_mx_wd' id='audio_trans_" + c_ccnum +"' style='display: none; margin-top:10px; margin-bottom:10px; border: medium; border-style: solid; border-color: #000000;height:300px; overflow-y: auto; overflow-x: hidden ;padding:5px;'>";
	
		for(var atrn = 2; atrn < c_data_stream.length; atrn++)
		{

				switch(c_data_stream[atrn].per_underline)
					{
						case "u":

							c_div_maker = c_div_maker + "<p style='text-align:"+c_data_stream[1].Person_align+";font-weight:"+c_data_stream[1].Person_font_weight+";color:"+c_data_stream[1].Person_text_color+"' class='jb_char_para'><"+c_data_stream[1].Person_font+"><u>"+ c_data_stream[atrn].Person +"</u></"+c_data_stream[1].Person_font+"></p>";

							c_div_maker = c_div_maker + "<p style='text-align:"+c_data_stream[1].Transcript_Text_align+";font-weight:"+c_data_stream[1].Transcript_Text_font_weight+";color:"+c_data_stream[1].Transcript_Text_color+";' class='jb_char_para'><"+c_data_stream[1].Transcript_Text_font+">"+ c_data_stream[atrn].Transcript_Text +"</"+c_data_stream[1].Transcript_Text_font+"></p>";	

						break;

						default:
							c_div_maker = c_div_maker + "<p style='text-align:"+c_data_stream[1].Person_align+";font-weight:"+c_data_stream[1].Person_font_weight+";color:"+c_data_stream[1].Person_text_color+"' class='jb_char_para'><"+c_data_stream[1].Person_font+">"+ c_data_stream[atrn].Person +"</"+c_data_stream[1].Person_font+"></p>";

							c_div_maker = c_div_maker + "<p style='text-align:"+c_data_stream[1].Transcript_Text_align+";font-weight:"+c_data_stream[1].Transcript_Text_font_weight+";color:"+c_data_stream[1].Transcript_Text_color+";' class='jb_char_para'><"+c_data_stream[1].Transcript_Text_font+">"+ c_data_stream[atrn].Transcript_Text +"</"+c_data_stream[1].Transcript_Text_font+"></p>";							
						break;
					}



		}

c_div_maker = c_div_maker + "</div>";	

	c_div_maker = c_div_maker + "</div>";
	

	c_comp_Array[c_ccnum] = c_div_maker;
	
	comp_Array_test();

	c_div_maker = "";
}




}


function aTranscripts(tran)
	{

		switch(document.getElementById("atbtn_" + tran).innerHTML)
			{
					case "Close Transcript":
							document.getElementById("audio_trans_" + tran).style.display = "none";
							document.getElementById("atbtn_" + tran).innerHTML = "Open Transcript";					
					break;

					
					
					case "Open Transcript":
							document.getElementById("audio_trans_" + tran).style.display = "block";
							document.getElementById("atbtn_" + tran).innerHTML = "Close Transcript";

						/*	
							var xapiAudPath = document.getElementById("audio_trans_" + tran).parentElement.getElementsByTagName("audio")[0].getElementsByTagName("source")[0].src.split("/");
							var xapiAudName = xapiAudPath[xapiAudPath.length - 1];
							console.log(xapiAudName);
						
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
						*/
					break;
			}

	}

