var whole_ltp_Array = [[],[]];
var ltp_Array = [];

var ltp = [];

var List_Text_Num;
var List_Text_Array = [];	
var lst;
var lcount = 0;
function List_text_paragraph(c_data_stream,c_ccnum,acfl)
{
console.log("Morbo says DOOOOM!");


var result = c_data_stream[0];
   //alert("result: " + result); 
    $.each(result, function(k, v) {
        //display the key and value pair
       // alert(k + ' is ' + v);
        //alert("k: " + k);


        ltp_Array[lcount] = v;

        

        lcount = (lcount + 1);
    });

//alert( String(Object.keys( ltp_Array)) );

    for(var lstnm = 0; lstnm < ltp_Array.length; lstnm++)
            {
               //alert(ltp_Array[lstnm]);
            }

            whole_ltp_Array[0] = ltp_Array;
    

           // alert(whole_ltp_Array[0][0]);

   // alert(c_data_stream[0].List_Heading);

  // alert(c_data_stream[0].paragraph_alignment);
  //whole_ltp_Array[0][x]


//alert(c_data_stream[0].border_color);

if(typeof acfl !== "undefined")
  {
//========================================= 
c_div_maker = c_div_maker + "<div class='col-lg-12 col-md-12 col-xs-12' style=' background-color:"+c_data_stream[5].background_color+"; margin-top:" + c_data_stream[4].top_margin+";'>";

c_div_maker = c_div_maker + "<div class='c_lesson_width'>";


c_div_maker = c_div_maker + "<div style='border-style:"+c_data_stream[0].border_style+"; border-color:"+c_data_stream[0].border_color+"; border-width:"+c_data_stream[0].border_width+"; border-radius:"+c_data_stream[0].border_radius+"; width:100%; padding:10px'>";

//-------<(  Heading )>-------		          quest_char									
c_div_maker = c_div_maker + "<div class='jb_column1'><"+c_data_stream[0].heading_size+" style='border-bottom-style: "+c_data_stream[0].heading_underline+"; border-bottom-color:"+c_data_stream[0].heading_underline_color+" ;border-bottom-width: "+c_data_stream[0].heading_underline_height+"; color:"+c_data_stream[0].heading_color+"; font-style: "+c_data_stream[0].heading_style+"; text-align: "+ c_data_stream[0].heading_alignment +"'>"+ c_data_stream[0].List_Heading +"</"+c_data_stream[0].heading_size+"></div>";
//-------<(  Heading )>-------
//-------<(  Paragraph Top )>-------

for(var tpar = 0; tpar < c_data_stream[1].Top_Paragraphs.length; tpar++)
{
    
                      //quest_char
    c_div_maker = c_div_maker + "<div class='jb_column1'><"+c_data_stream[0].paragraph_text_size+"><p style='text-align: "+ c_data_stream[0].paragraph_alignment +"; color:"+c_data_stream[0].paragraph_top_text_color+"'>"+ c_data_stream[1].Top_Paragraphs[tpar].Paragraph_text +"</p></"+c_data_stream[0].paragraph_text_size+"></div>";							
}					
                    
//-------<(  Paragraph Top )>-------

c_div_maker = c_div_maker + "<"+ c_data_stream[3].Type_of_List +" type='"+c_data_stream[3].ol_type+"' style='list-style-type:"+c_data_stream[3].ul_type+"'>"; 											
//-------<(  List  )>-------											
List_Text_Num = (c_data_stream[8].list_items);	
	
					for(lst = 0; lst < List_Text_Num.length; lst++)
								{
									List_Text_Array[lst] = (List_Text_Num[lst].lstText);
											//quest_char							
                                            c_div_maker = c_div_maker + "<li class='jb_column1' style='margin-left:40px; color:"+ c_data_stream[7].text_color +"; text-align: "+ c_data_stream[2].align_text +";'><"+c_data_stream[3].List_Text_Size+">"+ List_Text_Array[lst] +"</"+c_data_stream[3].List_Text_Size+"></li>";																	
												
								}
                                c_div_maker = c_div_maker + "</"+ c_data_stream[3].Type_of_List +">";											
//-------<(  List  )>-------

//-------<(  Paragraph Bottom )>-------											
for(var bpar = 0; bpar < c_data_stream[9].Bottom_paragraphs.length; bpar++)
						{
												//quest_char
                            c_div_maker = c_div_maker + "<div class='jb_column1'><"+c_data_stream[0].paragraph_text_size+"><p style='font-size:"+c_data_stream[0].paragraph_text_size+";text-align: "+ c_data_stream[0].paragraph_alignment +"; color:"+c_data_stream[0].paragraph_bot_text_color+"'>"+ c_data_stream[9].Bottom_paragraphs[bpar].Paragraph_text +"</p></"+c_data_stream[0].paragraph_text_size+"></div>";							
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
      c_div_maker = ""

      // c_data_stream[0].    c_div_maker = c_div_maker + "<div style='border-style:solid; border-color:red; border-width:2px'>this is a test</div>";
//========================================= 

c_div_maker = c_div_maker + "<div class='col-lg-12 col-md-12 col-xs-12' style=' background-color:"+c_data_stream[5].background_color+"; margin-top:" + c_data_stream[4].top_margin+";'>";

c_div_maker = c_div_maker + "<div class='lst_border_width' style='border-style:"+c_data_stream[0].border_style+"; border-color:"+c_data_stream[0].border_color+"; border-width:"+c_data_stream[0].border_width+"; border-radius:"+c_data_stream[0].border_radius+";padding:10px'>"; //padding:10px

c_div_maker = c_div_maker + "<div class='c_lesson_width'>";

//-------<(  Heading )>-------		          quest_char									
c_div_maker = c_div_maker + "<div class='jb_column1'><"+c_data_stream[0].heading_size+" style='border-bottom-style: "+c_data_stream[0].heading_underline+"; border-bottom-color:"+c_data_stream[0].heading_underline_color+" ;border-bottom-width: "+c_data_stream[0].heading_underline_height+"; color:"+c_data_stream[0].heading_color+"; font-style: "+c_data_stream[0].heading_style+"; text-align: "+ c_data_stream[0].heading_alignment +"'>"+ c_data_stream[0].List_Heading +"</"+c_data_stream[0].heading_size+"></div>";
//-------<(  Heading )>-------
//-------<(  Paragraph Top )>-------

for(var tpar = 0; tpar < c_data_stream[1].Top_Paragraphs.length; tpar++)
{
    
                      //quest_char
    c_div_maker = c_div_maker + "<div class='jb_column1'><"+c_data_stream[0].paragraph_text_size+"><p style='text-align: "+ c_data_stream[0].paragraph_alignment +"; color:"+c_data_stream[0].paragraph_top_text_color+"'>"+ c_data_stream[1].Top_Paragraphs[tpar].Paragraph_text +"</p></"+c_data_stream[0].paragraph_text_size+"></div>";							
}					
                    
//-------<(  Paragraph Top )>-------

c_div_maker = c_div_maker + "<"+ c_data_stream[3].Type_of_List +" type='"+c_data_stream[3].ol_type+"' style='list-style-type:"+c_data_stream[3].ul_type+"'>"; 											
//-------<(  List  )>-------											
List_Text_Num = (c_data_stream[8].list_items);	
	
					for(lst = 0; lst < List_Text_Num.length; lst++)
								{
									List_Text_Array[lst] = (List_Text_Num[lst].lstText);
											//quest_char							
                                            c_div_maker = c_div_maker + "<li class='jb_column1' style='margin-left:40px; color:"+ c_data_stream[7].text_color +"; text-align: "+ c_data_stream[2].align_text +";'><"+c_data_stream[3].List_Text_Size+">"+ List_Text_Array[lst] +"</"+c_data_stream[3].List_Text_Size+"></li>";																	
												
								}
                                c_div_maker = c_div_maker + "</"+ c_data_stream[3].Type_of_List +">";											
//-------<(  List  )>-------

//-------<(  Paragraph Bottom )>-------											
for(var bpar = 0; bpar < c_data_stream[9].Bottom_paragraphs.length; bpar++)
						{
												//quest_char
                            c_div_maker = c_div_maker + "<div class='jb_column1'><"+c_data_stream[0].paragraph_text_size+"><p style='font-size:"+c_data_stream[0].paragraph_text_size+";text-align: "+ c_data_stream[0].paragraph_alignment +"; color:"+c_data_stream[0].paragraph_bot_text_color+"'>"+ c_data_stream[9].Bottom_paragraphs[bpar].Paragraph_text +"</p></"+c_data_stream[0].paragraph_text_size+"></div>";							
						}
											
//-------<(  Paragraph Bottom )>-------	


//=========================================

c_div_maker = c_div_maker + "</div>";

c_div_maker = c_div_maker + "</div></div>";
  c_comp_Array[c_ccnum] = c_div_maker;
  comp_Array_test();        
}

  


}


	