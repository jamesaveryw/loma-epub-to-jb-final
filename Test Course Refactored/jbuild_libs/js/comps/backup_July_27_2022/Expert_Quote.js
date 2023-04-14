//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// -------<(  Component Begin 03/02/2020 )>-------
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

function Expert_Quote(c_data_stream,c_ccnum) 
{
    var xprt_setup = c_data_stream[0];
    var xprt_test;
    var xprt_fields = [];
    var xprt_data = [];
    c_div_maker = "";

   xprt_test = Object.keys(c_data_stream[0]);


for(var xp = 0; xp < xprt_test.length; xp++)
    {
      xprt_data[xp] = xprt_test[xp];

       
      xprt_fields[xp] = c_data_stream[0][xprt_data[xp]];

    }



    c_div_maker = c_div_maker + "<div id='expert_quote_ "+c_ccnum+"' class='col-lg-12 col-md-12 col-xs-12 expert_bmargin' style='width:100%; margin-top:"+xprt_setup.top_margin+"; margin-bottom:"+xprt_setup.bottom_margin+"'>"; // Whole start 									

    c_div_maker = c_div_maker + "<div class='expertContainer' style='height:auto;'>"; // container 

            c_div_maker = c_div_maker + "<div class='panel-group'>"; 
            c_div_maker = c_div_maker + "<div class='panel panel-primary'>"; 


            if(xprt_setup.heading_bold === "yes")
                {
                    xprt_setup.heading = "<b>" + xprt_setup.heading + "</b>";
                }

            if(xprt_setup.Heading_italic === "yes")
                {
                    xprt_setup.heading = "<i>" + xprt_setup.heading + "</i>";
                }
            


            c_div_maker = c_div_maker + "<div class='panel-heading' style='text-align:left; background-color:"+xprt_setup.heading_back_color+"; color:"+xprt_setup.heading_font_color+"'><jb7>"+xprt_setup.heading+"</jb7></div>";

            c_div_maker = c_div_maker + "<div class='panel-body'>";
                
            if(xprt_setup.quote_bold === "yes")
                {
                    xprt_setup.quote = "<b>" + xprt_setup.quote + "</b>";
                }	

                c_div_maker = c_div_maker + "<div class='col-lg-12 col-md-12 col-xs-12 ex_qt' style='max-height:320px; overflow-y: auto'>"; 
                   
                    c_div_maker = c_div_maker + "<jb7 style='color:#000000'>"+xprt_setup.quote+"</jb7>";
                  c_div_maker = c_div_maker + "</div>"; 
            c_div_maker = c_div_maker + "</div>";  

		   
			
			if(xprt_setup.expert_info_bold === "yes")
                {
                    xprt_setup.expert_info = "<b>" + xprt_setup.expert_info + "</b>";
                }

            if(xprt_setup.expert_info_italic === "yes")
                {
                    xprt_setup.expert_info = "<i>" + xprt_setup.expert_info + "</i>";
                }

				c_div_maker = c_div_maker + "<div class='panel-footer' style='height:120px; background-color:"+xprt_setup.expert_info_back_color+"'>";

				c_div_maker = c_div_maker + "<div style='text-align:left'><img src='"+image_locale+""+xprt_setup.image+"' class='ex_img pull-left' alt=''/><jb7 style='display: inline-block;color:"+xprt_setup.expert_info_color+"'>"+ xprt_setup.expert_info+"</jb7></div>";




				
            c_div_maker = c_div_maker + "</div>";
            c_div_maker = c_div_maker + "</div>";

    c_div_maker = c_div_maker + "</div>";

c_div_maker = c_div_maker + "</div>";
c_div_maker = c_div_maker + "</div>";

c_comp_Array[c_ccnum] = c_div_maker;

comp_Array_test();

c_div_maker = "";
}
