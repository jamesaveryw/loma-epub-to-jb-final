alert("New Comp");

function New_Comp(sp_data_stream,c_ccnum) //acfl
{

    c_div_maker = c_div_maker + "<div id='new_"+ c_ccnum +"' class='col-lg-12 col-md-12 col-xs-12' style='margin-top: "+ sp_data_stream[2].top_margin +"'>";
    c_div_maker = c_div_maker + "</div>";

c_comp_Array[c_ccnum] = c_div_maker;
comp_Array_test();

}