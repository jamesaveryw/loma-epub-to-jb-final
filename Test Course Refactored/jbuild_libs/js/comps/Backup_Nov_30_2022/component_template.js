//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// -------<(  Component Begin 03/02/2020 )>-------
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

function Single_Image(c_data_stream,c_ccnum)
{

/*
                   c_data_stream[0].bottom_margin
                   c_div_maker = c_div_maker + "";

*/

c_div_maker = "";	

c_div_maker = c_div_maker + "<div id='c_image_ID_"+c_ccnum+"' class='col-lg-12 col-md-12 col-xs-12'>";

//<img src="smiley.gif" alt="Smiley face" height="42" width="42">

c_div_maker = c_div_maker + "<div style='padding:"+c_data_stream[0].image_padding+"; margin-top:"+ c_data_stream[0].top_margin +";background-color:"+c_data_stream[0].background_color+"'>";

c_div_maker = c_div_maker + "</div>";

c_comp_Array[c_ccnum] = c_div_maker;

comp_Array_test();
}

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// -------<(  Component End 03/02/2020 )>-------
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-