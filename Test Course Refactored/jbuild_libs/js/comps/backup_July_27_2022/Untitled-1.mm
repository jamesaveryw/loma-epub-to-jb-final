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