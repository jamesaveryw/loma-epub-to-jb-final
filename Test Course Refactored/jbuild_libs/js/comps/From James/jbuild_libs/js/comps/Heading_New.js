//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// -------<(  Heading Begin 02/21/2020 )>-------
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

function Heading_New(c_headerData,c_ccnum,acfl)
{

    if(typeof acfl !== "undefined")
    {

        c_div_maker = c_div_maker + "<div id='Heading_"+c_ccnum+"' class='col-lg-12 col-md-12 col-xs-12' style='width:100%; margin-top:"+c_headerData[2].top_margin+";background-color: "+ c_headerData[6].background_color +"; border-top-color:"+c_headerData[7].top_line_color+"; border-top-width:"+c_headerData[7].top_line_weight+"; border-top-style:"+c_headerData[7].top_line_style+"; border-bottom-color:"+c_headerData[9].bottom_line_color+"; border-bottom-width:"+c_headerData[9].bottom_line_weight+"; border-bottom-style:"+c_headerData[9].bottom_line_style+"'><"+c_headerData[3].size+">";
										
											
        c_div_maker = c_div_maker + "<p style='background-color:"+c_headerData[8].border_background_color+"; margin-top:"+c_headerData[8].border_top_margin+"; padding:"+c_headerData[8].border_padding+"; border-radius:"+c_headerData[8].border_inside_radius+"; border-color:"+c_headerData[8].border_inside_color+"; border-width:"+c_headerData[8].border_inside_weight+"; border-style:"+c_headerData[8].border_inside_style+" ; width:"+c_headerData[8].border_width+"; color: "+ c_headerData[5].color +"; font-weight: "+ c_headerData[4].style +";text-align: "+ c_headerData[1].alignment +"'>"+ c_headerData[0].sngl_Heading +"</p></"+c_headerData[3].size+">";	
                                                    
                                                    
        c_div_maker = c_div_maker + "</"+c_headerData[3].size+"></div>";
        
        
        c_comp_Array[c_ccnum] = c_div_maker;        
    }

    if(typeof acfl === "undefined")
    {
       

        c_div_maker = "";	

        c_div_maker = c_div_maker + "<div id='Heading_"+c_ccnum+"' class='col-lg-12 col-md-12 col-xs-12' style='width:100%; margin-top:"+c_headerData[2].top_margin+";background-color: "+ c_headerData[6].background_color +"; border-top-color:"+c_headerData[7].top_line_color+"; border-top-width:"+c_headerData[7].top_line_weight+"; border-top-style:"+c_headerData[7].top_line_style+"; border-bottom-color:"+c_headerData[9].bottom_line_color+"; border-bottom-width:"+c_headerData[9].bottom_line_weight+"; border-bottom-style:"+c_headerData[9].bottom_line_style+"'><"+c_headerData[3].size+">";
                                                
                                                    
        c_div_maker = c_div_maker + "<p style='background-color:"+c_headerData[8].border_background_color+"; margin-top:"+c_headerData[8].border_top_margin+"; padding:"+c_headerData[8].border_padding+"; border-radius:"+c_headerData[8].border_inside_radius+"; border-color:"+c_headerData[8].border_inside_color+"; border-width:"+c_headerData[8].border_inside_weight+"; border-style:"+c_headerData[8].border_inside_style+" ; width:"+c_headerData[8].border_width+"; color: "+ c_headerData[5].color +"; font-weight: "+ c_headerData[4].style +";text-align: "+ c_headerData[1].alignment +"'>"+ c_headerData[0].sngl_Heading +"</p></"+c_headerData[3].size+">";	
                                                    
                                                    
        c_div_maker = c_div_maker + "</"+c_headerData[3].size+"></div>";


        c_comp_Array[c_ccnum] = c_div_maker;

        comp_Array_test();
    }



}


//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// -------<(  Heading End 02/21/2020 )>-------
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-