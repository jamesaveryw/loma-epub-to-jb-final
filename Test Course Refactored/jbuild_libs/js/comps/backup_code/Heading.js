//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// -------<(  Heading Begin 02/21/2020 )>-------
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

//function c_Header(c_headerData,c_ccnum)
function Heading(c_headerData,c_ccnum)
{


c_div_maker = "";	

c_div_maker = c_div_maker + "<div id='Heading_old_"+c_ccnum+"' class='col-lg-12 col-md-12 col-xs-12' style='width:100%; margin-top:"+c_headerData[2].top_margin+";background-color: "+ c_headerData[6].background_color +"; border-color:"+c_headerData[7].border_color+"; border-weight:"+c_headerData[8].border_weight+"; border-style:"+c_headerData[9].border_style+"; border-radius:"+c_headerData[10].border_radius+"'>";
	
//max-width: 90ch;  class='jb2'											

c_div_maker = c_div_maker + "<div><"+c_headerData[3].size+"><p style='text-align:"+c_headerData[1].alignment+"'>"+c_headerData[0].sngl_Heading+"</p</"+c_headerData[3].size+"></div>";

							
											
c_div_maker = c_div_maker + "</div>";

////alert(c_div_maker);

c_comp_Array[c_ccnum] = c_div_maker;

comp_Array_test();

}

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// -------<(  Heading End 02/21/2020 )>-------
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-