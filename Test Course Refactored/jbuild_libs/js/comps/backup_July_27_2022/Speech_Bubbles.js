//-------------------------------------------------------------------------------------------------------------	
//-------<( Speech Bubble code begin )>-------											
//-------------------------------------------------------------------------------------------------------------
var bBackButton;
var bStartButton;
var bNextButton;
var bReplayButton;
var speech_text_array = [];
var speech_number = [[],[]];					
var bbl_ids = [];	
var bbl_ids_whole = [[],[]];
var aria_button_label = "Start";		

var sp_bl = 0;

function Speech_Bubbles(sp_data_stream,c_ccnum)

{



	sp_alt_array[c_ccnum] = sp_data_stream[0].talking_head_image_alt

        if(image_locale === "images/")
        {
                bBackButton = "Back"; 
                bStartButton = "Start";  
				bNextButton = "Next";
				bReplayButton = "Replay";				
        }



       c_div_maker = c_div_maker + "<div id='spb_"+ c_ccnum +"' class='col-lg-12 col-md-12 col-xs-12' style='margin-top: "+ sp_data_stream[2].top_margin +"; margin-bottom: 40px;'> <div class='bubbles'><div class='balloons'>";	

       c_div_maker = c_div_maker + "<div id='startBubble"+ c_ccnum +"' class='bLeft bubble' style='display:block;'><div style='color:#000000' class='bText'><p>" + sp_data_stream[1].start_text + "</p></div></div>";
	   


	  speech_text_array = [];
	  
	  for(var spa = 3; spa < sp_data_stream.length; spa++)
		{
			sp_bl = (sp_bl + 1);

			speech_text_array[sp_bl] = sp_data_stream[spa].bbl_txt
		}
		speech_number[c_ccnum] = speech_text_array
		


	  for(var spt = 1; spt < speech_text_array.length; spt++)
		{
			bbl_ids[spt] = (c_ccnum + "_bbl_" + spt);
			switch(spt % 2)
				{
					case 0:
						c_div_maker = c_div_maker + "<div id='" + bbl_ids[spt] +"' class='bLeft bubble' style='display:none;'><div style='color:#000000' class='bText'><p>" + speech_number[c_ccnum][spt] + "</p></div></div>";
					break;

					case 1:
						c_div_maker = c_div_maker + "<div id='" + bbl_ids[spt] +"' class='bRight bubble' style='display:none;'><div style='color:#000000' class='bText'><p>" + speech_number[c_ccnum][spt] + "</p></div></div>";
					break;
				}
		}
		
		bbl_ids_whole[c_ccnum] = bbl_ids


sp_alt_array[c_ccnum] = sp_data_stream[0].talking_head_image_alt;

              c_div_maker = c_div_maker + "<div class='talkingheads'><img src='"+image_locale+"" + sp_data_stream[0].talking_head_image +"' alt='Select image for more information' role='button' onclick='alt_tag_lib("+c_ccnum+","+1+")'></div>";
      
c_div_maker = c_div_maker + "<div align='center' class='col-lg-12 col-md-12 col-xs-12'><div align='left' class='col-lg-6 col-md-6 col-xs-6'><button id='bub_prev_buton"+c_ccnum+"' aria-label='Speech Bubble "+aria_button_label+"' style='display:none' onclick='bub_Back("+c_ccnum+");' class='btn-primary bbl_btns' type='button' >" + bBackButton + "</button></div><div align='right' class='col-lg-6 col-md-6 col-xs-6'><button id='bub_next_button"+c_ccnum+"' onclick='bub_Next("+c_ccnum+");' class='btn-primary bbl_btns' type='button'>" + bStartButton + "</button></div></div>"; //aria-label='Speech Bubble Back'
// */
       c_div_maker = c_div_maker + "</div>";
       c_div_maker = c_div_maker + "</div>";

        c_div_maker = c_div_maker + "</div>";
        c_comp_Array[c_ccnum] = c_div_maker;

	sp_bl = 0;

	bbl_ids = [];

        comp_Array_test();
		c_div_maker = "";



}


//╔═════════════════════════════════════════════════════════════════════════════════════════════════╗
//║ -------<( Speech Bubble Buttons Begin )>-------                                                 ║
//╚═════════════════════════════════════════════════════════════════════════════════════════════════╝	
var bid_Count = 0;
var direction = 1;

function bub_Next(bb_cur)
{

	
		switch(document.getElementById("bub_next_button" + bb_cur).innerText)
		{
			case "Start":
			case bStartButton:	

			

				bid_Count = 0;
				document.getElementById("bub_next_button" + bb_cur).innerText = bNextButton;
					document.getElementById("startBubble" + bb_cur).style.display = "none";
			
				bid_Count = (bid_Count + 1);

					document.getElementById(bbl_ids_whole[bb_cur][bid_Count]).style.display = "block";
					document.getElementById("bub_prev_buton" + bb_cur).style.display = "block";	
					aria_button_label = "Start";


			break;

			case "Next":
				case bNextButton:	

						document.getElementById(bbl_ids_whole[bb_cur][bid_Count]).style.display = "none";
						bid_Count = (bid_Count + 1);

						document.getElementById(bbl_ids_whole[bb_cur][bid_Count]).style.display = "block";

					aria_button_label = "Next";


						if(bid_Count === (speech_number[bb_cur].length - 1))
								{
									document.getElementById("bub_next_button" + bb_cur).innerText = bReplayButton;
									//"Replay";//---------------------------
									document.getElementById("bub_next_button" + bb_cur).style.backgroundColor = "green"; 
									// Added on July 17, 2020 by Jcc
								}
			break;
			case "Replay":
				case bReplayButton:
					document.getElementById("bub_next_button" + bb_cur).innerText = bNextButton;
					//"Next";//---------------------------
			document.getElementById(bbl_ids_whole[bb_cur][bid_Count]).style.display = "none";

					document.getElementById("startBubble" + bb_cur).style.display = "block";


		aria_button_label = "Replay";

					document.getElementById("bub_next_button" + bb_cur).innerText = bStartButton;
					document.getElementById("bub_prev_buton" + bb_cur).style.display = "none";
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


function bubble_call(curbid,bslidecount) //bk
{
	
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
									
								
						if(typeof isXAPI !== "undefined")
							{
								LRSSend(speechbubblesStatement);
							}
					


}

//-------------------------------------------------------------------------------------------------------------	
//-------<( Speech Bubble code end )>-------											
//-------------------------------------------------------------------------------------------------------------	
