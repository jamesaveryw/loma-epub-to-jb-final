var whole_ltp_Array = [[],[]];
var ltp_Array = [];

var ltp = [];

var List_Text_Num;
var List_Text_Array = [];	
var lst;
var lcount = 0;
function List_text_paragraph(c_data_stream,c_ccnum,acfl)
{

console.log("acfl from LTP: " + acfl);
console.log("c_ccnum from LTP: " + c_ccnum);

  whole_ltp_Array[c_ccnum] = c_data_stream;



if(typeof acfl !== "undefined")
  {

//========================================= 
c_div_maker = c_div_maker + "<div class='col-lg-12 col-md-12 col-xs-12' style=' background-color:"+whole_ltp_Array[c_ccnum][5].background_color+"; margin-top:" + whole_ltp_Array[c_ccnum][4].top_margin+";'>";

c_div_maker = c_div_maker + "<div class='c_lesson_width'>";


c_div_maker = c_div_maker + "<div style='border-style:"+whole_ltp_Array[c_ccnum][0].border_style+"; border-color:"+whole_ltp_Array[c_ccnum][0].border_color+"; border-width:"+whole_ltp_Array[c_ccnum][0].border_width+"; border-radius:"+whole_ltp_Array[c_ccnum][0].border_radius+"; width:100%; padding:10px'>";

//-------<(  Heading )>-------		          quest_char									
c_div_maker = c_div_maker + "<div class='jb_column1'><"+whole_ltp_Array[c_ccnum][0].heading_size+" style='border-bottom-style: "+whole_ltp_Array[c_ccnum][0].heading_underline+"; border-bottom-color:"+whole_ltp_Array[c_ccnum][0].heading_underline_color+" ;border-bottom-width: "+whole_ltp_Array[c_ccnum][0].heading_underline_height+"; color:"+whole_ltp_Array[c_ccnum][0].heading_color+"; font-style: "+whole_ltp_Array[c_ccnum][0].heading_style+"; text-align: "+ whole_ltp_Array[c_ccnum][0].heading_alignment +"'>"+ whole_ltp_Array[c_ccnum][0].List_Heading +"</"+whole_ltp_Array[c_ccnum][0].heading_size+"></div>";
//-------<(  Heading )>-------
//-------<(  Paragraph Top )>-------

for(var tpar = 0; tpar < whole_ltp_Array[c_ccnum][1].Top_Paragraphs.length; tpar++)
{
    
                      //quest_char
    c_div_maker = c_div_maker + "<div class='jb_column1'><"+whole_ltp_Array[c_ccnum][0].paragraph_text_size+"><p style='text-align: "+ whole_ltp_Array[c_ccnum][0].paragraph_alignment +"; color:"+whole_ltp_Array[c_ccnum][0].paragraph_top_text_color+"'>"+ whole_ltp_Array[c_ccnum][1].Top_Paragraphs[tpar].Paragraph_text +"</p></"+whole_ltp_Array[c_ccnum][0].paragraph_text_size+"></div>";							
}					
                    
//-------<(  Paragraph Top )>-------

c_div_maker = c_div_maker + "<"+ whole_ltp_Array[c_ccnum][3].Type_of_List +" type='"+whole_ltp_Array[c_ccnum][3].ol_type+"' style='list-style-type:"+whole_ltp_Array[c_ccnum][3].ul_type+"'>"; 											
//-------<(  List  )>-------											
List_Text_Num = (whole_ltp_Array[c_ccnum][8].list_items);


					for(lst = 0; lst < List_Text_Num.length; lst++)
								{
									List_Text_Array[lst] = (List_Text_Num[lst].lstText);
											//quest_char	
				
                        c_div_maker = c_div_maker + "<li class='jb_column1' style='margin-left:40px; color:"+ whole_ltp_Array[c_ccnum][7].text_color +"; text-align: left'><"+whole_ltp_Array[c_ccnum][3].List_Text_Size+">"+ List_Text_Array[lst] +"</"+whole_ltp_Array[c_ccnum][3].List_Text_Size+"></li>";
                                      
												
								}
                                c_div_maker = c_div_maker + "</"+ whole_ltp_Array[c_ccnum][3].Type_of_List +">";											
//-------<(  List  )>-------

//-------<(  Paragraph Bottom )>-------											
for(var bpar = 0; bpar < whole_ltp_Array[c_ccnum][9].Bottom_paragraphs.length; bpar++)
						{
												//quest_char
                            c_div_maker = c_div_maker + "<div class='jb_column1'><"+whole_ltp_Array[c_ccnum][0].paragraph_text_size+"><p style='font-size:"+whole_ltp_Array[c_ccnum][0].paragraph_text_size+";text-align: "+ whole_ltp_Array[c_ccnum][0].paragraph_alignment +"; color:"+whole_ltp_Array[c_ccnum][0].paragraph_bot_text_color+"'>"+ whole_ltp_Array[c_ccnum][9].Bottom_paragraphs[bpar].Paragraph_text +"</p></"+whole_ltp_Array[c_ccnum][0].paragraph_text_size+"></div>";							
						}
											
//-------<(  Paragraph Bottom )>-------	


//=========================================
c_div_maker = c_div_maker + "</div> ";
c_div_maker = c_div_maker + "</div></div>";


  }

//------------------------------------------------
//-------<( Break between the AC and SA  )>-------
//------------------------------------------------


  if(typeof acfl === "undefined")
  {
//========================================= 

c_div_maker = c_div_maker + "<div class='col-lg-12 col-md-12 col-xs-12' style=' background-color:"+whole_ltp_Array[c_ccnum][5].background_color+"; margin-top:" + whole_ltp_Array[c_ccnum][4].top_margin+";'>";

c_div_maker = c_div_maker + "<div class='lst_border_width' style='border-style:"+whole_ltp_Array[c_ccnum][0].border_style+"; border-color:"+whole_ltp_Array[c_ccnum][0].border_color+"; border-width:"+whole_ltp_Array[c_ccnum][0].border_width+"; border-radius:"+whole_ltp_Array[c_ccnum][0].border_radius+";padding:10px'>"; //padding:10px

c_div_maker = c_div_maker + "<div class='c_lesson_width'>";

//-------<(  Heading )>-------		          quest_char									
c_div_maker = c_div_maker + "<div class='jb_column1'><"+whole_ltp_Array[c_ccnum][0].heading_size+" style='border-bottom-style: "+whole_ltp_Array[c_ccnum][0].heading_underline+"; border-bottom-color:"+whole_ltp_Array[c_ccnum][0].heading_underline_color+" ;border-bottom-width: "+whole_ltp_Array[c_ccnum][0].heading_underline_height+"; color:"+whole_ltp_Array[c_ccnum][0].heading_color+"; font-style: "+whole_ltp_Array[c_ccnum][0].heading_style+"; text-align: "+ whole_ltp_Array[c_ccnum][0].heading_alignment +"'>"+ whole_ltp_Array[c_ccnum][0].List_Heading +"</"+whole_ltp_Array[c_ccnum][0].heading_size+"></div>";
//-------<(  Heading )>-------
//-------<(  Paragraph Top )>-------

for(var tpar = 0; tpar < whole_ltp_Array[c_ccnum][1].Top_Paragraphs.length; tpar++)
{
    
                      //quest_char
    c_div_maker = c_div_maker + "<div class='jb_column1'><"+whole_ltp_Array[c_ccnum][0].paragraph_text_size+"><p style='text-align: "+ whole_ltp_Array[c_ccnum][0].paragraph_alignment +"; color:"+whole_ltp_Array[c_ccnum][0].paragraph_top_text_color+"'>"+ whole_ltp_Array[c_ccnum][1].Top_Paragraphs[tpar].Paragraph_text +"</p></"+whole_ltp_Array[c_ccnum][0].paragraph_text_size+"></div>";							
}					
                    
//-------<(  Paragraph Top )>-------

c_div_maker = c_div_maker + "<"+ whole_ltp_Array[c_ccnum][3].Type_of_List +" type='"+whole_ltp_Array[c_ccnum][3].ol_type+"' style='list-style-type:"+whole_ltp_Array[c_ccnum][3].ul_type+"'>"; 											
//-------<(  List  )>-------											
List_Text_Num = (whole_ltp_Array[c_ccnum][8].list_items);	
	
					for(lst = 0; lst < List_Text_Num.length; lst++)
								{
									List_Text_Array[lst] = (List_Text_Num[lst].lstText);
											//quest_char							
                                            c_div_maker = c_div_maker + "<li class='jb_column1' style='margin-left:40px; color:"+ whole_ltp_Array[c_ccnum][7].text_color +"; text-align: left'><"+whole_ltp_Array[c_ccnum][3].List_Text_Size+">"+ List_Text_Array[lst] +"</"+whole_ltp_Array[c_ccnum][3].List_Text_Size+"></li>";																	
												
								}
                                c_div_maker = c_div_maker + "</"+ whole_ltp_Array[c_ccnum][3].Type_of_List +">";											
//-------<(  List  )>-------

//-------<(  Paragraph Bottom )>-------											
for(var bpar = 0; bpar < whole_ltp_Array[c_ccnum][9].Bottom_paragraphs.length; bpar++)
						{
												//quest_char
                            c_div_maker = c_div_maker + "<div class='jb_column1'><"+whole_ltp_Array[c_ccnum][0].paragraph_text_size+"><p style='font-size:"+whole_ltp_Array[c_ccnum][0].paragraph_text_size+";text-align: "+ whole_ltp_Array[c_ccnum][0].paragraph_alignment +"; color:"+whole_ltp_Array[c_ccnum][0].paragraph_bot_text_color+"'>"+ whole_ltp_Array[c_ccnum][9].Bottom_paragraphs[bpar].Paragraph_text +"</p></"+whole_ltp_Array[c_ccnum][0].paragraph_text_size+"></div>";							
						}
											
//-------<(  Paragraph Bottom )>-------	


//=========================================

c_div_maker = c_div_maker + "</div>";

c_div_maker = c_div_maker + "</div></div>";
  c_comp_Array[c_ccnum] = c_div_maker;
  comp_Array_test(); 
  c_div_maker = "";      
}

  


}


	