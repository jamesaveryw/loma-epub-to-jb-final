function Paragraphs_New(para_data_stream,c_ccnum,acfl)
{
   

        var imgck = para_data_stream[0].background_image;

 
    c_div_maker = "";	

switch(imgck === null || imgck.match(/^ *$/) !== null)
    {
        case true:

            c_div_maker = c_div_maker + "<div class='col-lg-12 col-md-12 col-xs-12' style='height:auto; padding: 0px 20px; background-color:"+para_data_stream[0].background_color+"; border-top-color:"+para_data_stream[0].border_color+"; border-top-width:"+para_data_stream[0].border_weight+"; border-top-style:"+para_data_stream[0].border_style+"; border-bottom-color:"+para_data_stream[0].border_color+"; border-bottom-width:"+para_data_stream[0].border_weight+"; border-bottom-style:"+para_data_stream[0].border_style+"; border-radius:"+para_data_stream[0].border_radius+"; margin-top:"+para_data_stream[0].top_margin+";'>";        
        break;

        case false:

            var bk_image = (image_locale + para_data_stream[0].background_image);
       
        c_div_maker = c_div_maker + "<div class='col-lg-12 col-md-12 col-xs-12' style='background: linear-gradient(rgba(220, 220, 220, 0.8), rgba(220, 220, 220, 0.8)), rgba(220,220,220,0.8) url("+bk_image+");height:auto; padding: 0px 20px; background-color:"+para_data_stream[0].background_color+"; border-top-color:"+para_data_stream[0].border_color+"; border-top-width:"+para_data_stream[0].border_weight+"; border-top-style:"+para_data_stream[0].border_style+"; border-bottom-color:"+para_data_stream[0].border_color+"; border-bottom-width:"+para_data_stream[0].border_weight+"; border-bottom-style:"+para_data_stream[0].border_style+"; border-radius:"+para_data_stream[0].border_radius+"; margin-top:"+para_data_stream[0].top_margin+";'>";

        break;
    }





for(var pn = 1; pn < para_data_stream.length; pn++)
{

    switch(para_data_stream[0].columns)
        {
            case "1":
                c_div_maker = c_div_maker + "<p class='jb_column1' style='color:"+para_data_stream[0].Paragraph_Font_color+"; text-align:"+para_data_stream[0].Paragraph_align+";line-height:"+para_data_stream[0].line_spacing+"'><"+para_data_stream[0].Paragraph_Font_Size+">"+ para_data_stream[pn].Paragraph_txt +"</"+para_data_stream[0].Paragraph_Font_Size+"></p>";
            break;

            case "2":
                c_div_maker = c_div_maker + "<p class='jb_column2' style='color:"+para_data_stream[0].Paragraph_Font_color+"; text-align:"+para_data_stream[0].Paragraph_align+";line-height:"+para_data_stream[0].line_spacing+"'><"+para_data_stream[0].Paragraph_Font_Size+">"+ para_data_stream[pn].Paragraph_txt +"</"+para_data_stream[0].Paragraph_Font_Size+"></p>";
            break;
        }


	 

}

    c_div_maker = c_div_maker + "</div>";

c_comp_Array[c_ccnum] = c_div_maker;

comp_Array_test();
c_div_maker = "";
}