

/*
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// -------<(  Info Box Begin 02/21/2020 )>-------
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
function c_Info_Box(c_compData,c_ccnum)
{
	////alert("Info c_ccnum: " + c_ccnum);
    var c_new_icon;
    var c_child_data = [];
    var c_cmp = [];
	var c_ccData = [[],[]];
	c_div_maker = "";	

	for(var c_count = 0; c_count < c_compData.length; c_count++)
		{
			if(Object.keys(c_compData[c_count]).length > 1)
				{

					c_child_data[c_count] = (Object.keys(c_compData[c_count]))
				
					for(var c_child_num = 0; c_child_num < Object.keys(c_compData[c_count]).length; c_child_num++)
						{
							
							c_cmp[c_child_num] =  c_compData[c_count][c_child_data[c_count][c_child_num]];
							//alert("c_cmp[c_child_num]: " + c_cmp[c_child_num]);
						}

				}
		}

	
	
function c_make_info_modal()
	{
//-------<(  Modal Box )>-------										

	c_div_maker = c_div_maker + "<div id='c_info_Modal_"+c_ccnum+"' class='c_jb_modal'>";	
//-------<>											
//Header
//-------<>
	c_div_maker = c_div_maker + "<div class='c_jb_modal-hdr-ftr' style='background-color:"+c_compData[9].Header_color+"'><p style='text-align:"+c_compData[9].title_text_alignment+" ;color:"+c_compData[9].title_text_color+"; font-size:"+c_compData[9].title_text_size+"'>"+c_compData[9].title_text+"</p></div>";											
//-------<>												
//Body
//-------<>
//overflow-y: scroll											
c_div_maker = c_div_maker + "<div class='c_jb_modal-content' style='overflow-y: scroll;background-color:"+c_compData[9].Body_color+"'>";
		for(var c_mdl = 10; c_mdl < c_compData.length; c_mdl++) // id='jb_inf0_modal_main_text'
			{											
c_div_maker = c_div_maker + "<p style='text-align:"+c_compData[9].body_text_alignment+";color:"+c_compData[9].body_text_color+";font-size:18px'><jb8>"+c_compData[c_mdl].body_text+"</jb8></p>";

			}								
c_div_maker = c_div_maker + "</div>";											

c_div_maker = c_div_maker + "<div class='c_jb_modal-hdr-ftr'><span class='c_jb_close' id='info_btn'></span><button onclick='javascript:close_Info_modal("+c_ccnum+")'>Close</button></div>";		
		
		
c_div_maker = c_div_maker + "</div>";		
//-------<(  Modal Box )>-------

}
	c_mlf_test();
	
	
					if(c_ModLessonFolder !== "undefined")
						{
							c_new_icon = "jbuild_libs/images/" + c_compData[7].Icon;
						}
					
					if(c_ModLessonFolder === "undefined")
						{
							c_new_icon = "../../../jbuild_libs/images/" + c_compData[7].Icon;
						}

//============================
	
c_div_maker =  "<div id='infobox_ "+c_ccnum+"' class='col-lg-12 col-md-12 col-xs-12'>";	
//alert("c_compData[9].selectable: " + c_compData[9].selectable);	
if(c_compData[9].selectable === "true")	
	{
		c_make_info_modal();

		
		c_div_maker = c_div_maker + "<br><br><span onclick='c_info_box_event("+c_ccnum+");' style='cursor: pointer; background-color:"+c_compData[6].Background_Color+"; outline: "+c_compData[4].Border_Thickness+" "+c_compData[3].Border_Style+" "+c_compData[2].Border_Color+"; padding: 20px; display:inline-block';>";
		
	}
		else
			
	{
		//alert("False Baby!");
		c_div_maker = c_div_maker + "<br><br><span style='background-color:"+c_compData[6].Background_Color+"; outline: "+c_compData[4].Border_Thickness+" "+c_compData[3].Border_Style+" "+c_compData[2].Border_Color+"; padding: 20px; display:inline-block';>";
	}	
	
c_div_maker = c_div_maker + "<img style='text-align:left; display:"+c_compData[8].Icon_On_Off+"; width: 20px ;height:auto' src='"+c_new_icon+ "' alt='"+c_compData[7].Icon_alt+"'/><h3 style='color:"+c_compData[1].Text_Color+";text-align:"+c_compData[5].Text_Alignment+"'>" + c_compData[0].Info_Box_Text +"</h3></span><br><br>";	
	
c_div_maker = c_div_maker + "</div>";	

//alert(c_div_maker);

c_comp_Array[c_ccnum] = c_div_maker;



comp_Array_test();
//alert("c_comp_Array["+c_ccnum+"]: " + c_comp_Array[c_ccnum]);

//c_Lesson_Builder(c_div_maker,c_ccnum);
	
}
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// -------<(  Info Box End 02/21/2020 )>-------
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
*/

/*
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// -------<(  Heading Begin 02/21/2020 )>-------
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

function c_Header(c_headerData,c_ccnum)
{

c_div_maker = "";	

c_div_maker = c_div_maker + "<div id='Heading_"+c_ccnum+"' class='col-lg-12 col-md-12 col-xs-12' style='width:100%; margin-top:"+c_headerData[2].top_margin+";background-color: "+ c_headerData[6].background_color +"; border-top-color:"+c_headerData[7].top_line_color+"; border-top-width:"+c_headerData[7].top_line_weight+"; border-top-style:"+c_headerData[7].top_line_style+"; border-bottom-color:"+c_headerData[9].bottom_line_color+"; border-bottom-width:"+c_headerData[9].bottom_line_weight+"; border-bottom-style:"+c_headerData[9].bottom_line_style+"'><"+c_headerData[3].size+">";
	
//max-width: 90ch;											
											
c_div_maker = c_div_maker + "<p style='background-color:"+c_headerData[8].border_background_color+"; margin-top:"+c_headerData[8].border_top_margin+"; padding:"+c_headerData[8].border_padding+"; border-radius:"+c_headerData[8].border_inside_radius+"; border-color:"+c_headerData[8].border_inside_color+"; border-width:"+c_headerData[8].border_inside_weight+"; border-style:"+c_headerData[8].border_inside_style+" ; width:"+c_headerData[8].border_width+"; color: "+ c_headerData[5].color +"; font-weight: "+ c_headerData[4].style +";text-align: "+ c_headerData[1].alignment +"'>"+ c_headerData[0].sngl_Heading +"</p></"+c_headerData[3].size+">";	//</div>
											
											
c_div_maker = c_div_maker + "</"+c_headerData[3].size+"></div>";

////alert(c_div_maker);

c_comp_Array[c_ccnum] = c_div_maker;

//alert("c_comp_Array["+c_ccnum+"]: " + c_comp_Array[c_ccnum]);

//c_Lesson_Builder(c_div_maker,c_ccnum); //c_ccnum
comp_Array_test();
}

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// -------<(  Heading End 02/21/2020 )>-------
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
*/


/*


function comp_Array_test()
{
	
	if(c_comp_Array.length === Jcc_Content.length)
		{
			//alert("Ready to contruct the page: " + c_comp_Array.length);
			c_Lesson_Builder();
		}
	
}

*/
