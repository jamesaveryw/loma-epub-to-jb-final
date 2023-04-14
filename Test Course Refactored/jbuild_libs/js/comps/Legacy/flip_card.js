//-------------------------------------------------------------------------------------------------------------	
//-------<( Flip_Multi_New begin SA )>-------		12/19/2019 | 01/16/2020									
//-------------------------------------------------------------------------------------------------------------												
//case "Flip_Multi_New": 
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
				
				cd_sides[t_card] = Object.keys(flip_card_data[t_card]) 
				crd_content[t_card] = flip_card_data[t_card][cd_sides[t_card]]
				
								switch(String(cd_sides[t_card]))
									{
										case "Heading_New":
													cnst_heading(crd_content[t_card],t_card)
										break;
											
										case "Paragraphs_New":
													csnt_Paragraphs_New(crd_content[t_card],t_card)
										break;
											
										case "List_text_paragraph":
													csnt_list(crd_content[t_card],t_card)
										break;
											
										case "image_w_text":
													csnt_img_txt_lst(crd_content[t_card],t_card)
										break;											
									}
			}
							
							
//-=-=-=	-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-	
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
										
		flip_card_sMaker = flip_card_sMaker + "<div style='padding:"+paragraph_data[0].Padding+";'><span style='text-align:"+paragraph_data[0].heading_alignment+"; color:"+paragraph_data[0].heading_color+"'>";
										
		flip_card_sMaker = flip_card_sMaker + "<"+paragraph_data[0].heading_font_size+" style='font-weight:"+paragraph_data[0].heading_weight+";font-style:"+paragraph_data[0].heading_style+";font-variant:"+paragraph_data[0].heading_variant+"; text-transform:"+paragraph_data[0].heading_transform+"'>"+paragraph_data[0].heading+"</"+paragraph_data[0].heading_font_size+">";
										
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
		flip_mar = "20px";
		fl_fh_ht = "20px";
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
											
//break;											
//-------------------------------------------------------------------------------------------------------------	
//-------<( Flip_Multi_New end SA )>-------		12/19/2019									
//-------------------------------------------------------------------------------------------------------------	