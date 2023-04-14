//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// -------<(  Divider Component )>-------
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
var flipper;
function Divider(c_data_stream,c_ccnum)
{
c_div_maker = "";	

c_div_maker = c_div_maker + "<div id='c_image_ID_"+c_ccnum+"' class='col-lg-12 col-md-12 col-xs-12'>";

if (c_data_stream[0].divider_image !== "")
	{
		if(c_data_stream[3].flip === "false"){flipper = "0deg"}
		if(c_data_stream[3].flip === "true"){flipper = "180deg"}

		c_div_maker = c_div_maker + "<img id='' style='transform: rotate("+ flipper +"); margin:-10px; overflow:hidden; width: 100%;' src='"+comp_images+"" + c_data_stream[0].divider_image + ".png' height='"+ c_data_stream[1].height + "width:"+ c_data_stream[1].width +"; ' alt=''/>";
 	}

if(c_data_stream[5].Line_Display === "true")
	{
			 c_div_maker = c_div_maker + "<div style='margin-top:"+c_data_stream[5].top_margin+";border-top-color:"+c_data_stream[5].Line_Color+"; border-top-style:"+c_data_stream[5].Line_Style+"; border-top-width: "+c_data_stream[5].Line_height+"; width:"+c_data_stream[1].width+"'></div>";
	}	 

	console.log("c_data_stream[5]: " + c_data_stream[5].Line_Color);
c_div_maker = c_div_maker + "</div>";

c_comp_Array[c_ccnum] = c_div_maker;

comp_Array_test();
}

