
var para_array_data = [];


function Paragraphs_New(para_data_stream,c_ccnum,acfl)
{
    para_array_data = para_data_stream;


    if(typeof acfl !== "undefined")
        {
           // console.log(para_data_stream[0].heading)
            c_div_maker = c_div_maker + "<div id='para_ac_ID_"+c_ccnum+"' class='col-lg-12 col-md-12 col-xs-12' style='width:100% height:250px; background-color:"+para_data_stream[0].background_color+";height:auto; padding: 0px 20px;background-color:"+para_data_stream[0].background_color+"; border-top-color:"+para_data_stream[0].border_color+"; border-top-width:"+para_data_stream[0].border_weight+"; border-top-style:"+para_data_stream[0].border_style+"; border-bottom-color:"+para_data_stream[0].border_color+"; border-bottom-width:"+para_data_stream[0].border_weight+"; border-bottom-style:"+para_data_stream[0].border_style+"; border-radius:"+para_data_stream[0].border_radius+"; margin-top:"+para_data_stream[0].top_margin+";'><"+para_data_stream[0].heading_font_size+">"+para_data_stream[0].heading+"</"+para_data_stream[0].heading_font_size+">"; //</div>


                para_ac_set(1);
            
                c_div_maker = c_div_maker + "</div>";
        }

    if(typeof acfl === "undefined")
        {
            c_div_maker = c_div_maker + "<div id='para_ID_"+c_ccnum+"' class='col-lg-12 col-md-12 col-xs-12' style='width:100% height:250px; background-color:"+para_data_stream[0].background_color+";height:auto; padding: 0px 20px;background-color:"+para_data_stream[0].background_color+"; border-top-color:"+para_data_stream[0].border_color+"; border-top-width:"+para_data_stream[0].border_weight+"; border-top-style:"+para_data_stream[0].border_style+"; border-bottom-color:"+para_data_stream[0].border_color+"; border-bottom-width:"+para_data_stream[0].border_weight+"; border-bottom-style:"+para_data_stream[0].border_style+"; border-radius:"+para_data_stream[0].border_radius+"; margin-top:"+para_data_stream[0].top_margin+";'><"+para_data_stream[0].heading_font_size+">"+para_data_stream[0].heading+"</"+para_data_stream[0].heading_font_size+">"; //</div>

            para_ac_set(0);
            c_div_maker = c_div_maker + "</div>";

            c_comp_Array[c_ccnum] = c_div_maker;
            comp_Array_test(); 
            c_div_maker = "";  
        }



/*
  c_comp_Array[c_ccnum] = c_div_maker;
  comp_Array_test(); 
  c_div_maker = "";   
*/


}


function para_ac_set(pdef)
    {
       // console.log("columns = " + para_array_data[0].columns)
        var col_num;
            for(var pd_info = 1; pd_info < para_array_data.length; pd_info++)
                {
                    switch(para_array_data[0].columns)
                    {
                        case "1":
                                col_num = "jb_column1"
                        break;

                        case "2":
                                col_num = "jb_column2"
                        break;
                    }
                    
                    if(para_array_data[pd_info].Paragraph_txt.length !== 0)
                        {
                            c_div_maker = c_div_maker + "<div class='c_lesson_width "+col_num+"' style='text-align:"+para_array_data[0].Paragraph_align+";color:"+para_array_data[0].Paragraph_Font_color+"; text-align:"+para_array_data[0].Paragraph_align+";line-height:"+para_array_data[0].line_spacing+"'><"+para_array_data[0].Paragraph_Font_Size+">"+para_array_data[pd_info].Paragraph_txt+"</"+para_array_data[0].Paragraph_Font_Size+"></div>";
                        }

// style='color:"+para_array_data[0].Paragraph_Font_color+"; text-align:"+para_array_data[0].Paragraph_align+";line-height:"+para_array_data[0].line_spacing+"'                        

                    /*
                    "++"
                        paradata[0].Paragraph_align
                        paradata[0].Paragraph_Font_Size
                        paradata[0].Paragraph_Font_color
                        paradata[0].Paragraph_Font_style
                        paradata[0].Paragraph_Font_variant
                        paradata[0].Paragraph_Font_weight

                        paradata[0].
                    */
                    
                }

        //console.log("pdef: " + pdef);
    }




function Paragraphs_New_old(para_data_stream,c_ccnum,acfl)
{
   
// console.log("para_data_stream.length: " + para_data_stream.length)

//if(para_data_stream[0].background_image !== "")
//    {
        var imgck = para_data_stream[0].background_image;
// console.log( imgck === null || imgck.match(/^ *$/) !== null);


 
    c_div_maker = "";	

switch(imgck === null || imgck.match(/^ *$/) !== null)
    {
        case true:

            c_div_maker = c_div_maker + "<div id='para_ID_"+c_ccnum+"' class='col-lg-12 col-md-12 col-xs-12' style='height:auto; padding: 0px 20px; background-color:"+para_data_stream[0].background_color+"; border-top-color:"+para_data_stream[0].border_color+"; border-top-width:"+para_data_stream[0].border_weight+"; border-top-style:"+para_data_stream[0].border_style+"; border-bottom-color:"+para_data_stream[0].border_color+"; border-bottom-width:"+para_data_stream[0].border_weight+"; border-bottom-style:"+para_data_stream[0].border_style+"; border-radius:"+para_data_stream[0].border_radius+"; margin-top:"+para_data_stream[0].top_margin+";'>";        
        break;

        case false:
         ////   console.log("image_locale: " + image_locale);
            var bk_image = (image_locale + para_data_stream[0].background_image);
         ////   console.log("bk_image: " + bk_image);
        //src='"+image_locale+""+comp_data[0][0]+"'' alt='"+img_alt_tag[curcmp]+"'
       
        c_div_maker = c_div_maker + "<div id='para_ac_ID_"+c_ccnum+"' class='col-lg-12 col-md-12 col-xs-12' style='background: linear-gradient(rgba(220, 220, 220, 0.8), rgba(220, 220, 220, 0.8)), rgba(220,220,220,0.8) url("+bk_image+");height:auto; padding: 0px 20px; background-color:"+para_data_stream[0].background_color+"; border-top-color:"+para_data_stream[0].border_color+"; border-top-width:"+para_data_stream[0].border_weight+"; border-top-style:"+para_data_stream[0].border_style+"; border-bottom-color:"+para_data_stream[0].border_color+"; border-bottom-width:"+para_data_stream[0].border_weight+"; border-bottom-style:"+para_data_stream[0].border_style+"; border-radius:"+para_data_stream[0].border_radius+"; margin-top:"+para_data_stream[0].top_margin+";'>";

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

/*

c_div_maker = c_div_maker + "<p class='jb_column1' style='color:"+para_data_stream[0].Paragraph_Font_color+"; text-align:"+para_data_stream[0].Paragraph_align+";line-height:"+para_data_stream[0].line_spacing+"'><"+para_data_stream[0].Paragraph_Font_Size+">"+ sSelections[jcc][snglBld[jcc]][newpara].Paragraph_txt +"</"+para_data_stream[0].Paragraph_Font_Size+"></p>";	
*/


/*
c_div_maker = c_div_maker + "<div class='col-lg-12 col-md-12 col-xs-12' style='background: linear-gradient(rgba(220, 220, 220, 0.8), rgba(220, 220, 220, 0.8)), rgba(220,220,220,0.8) url("+img_loc + paraSetup[0].background_image+"); width:100%; height: auto; background-position: center center; background-size: cover; padding: 0px 20px; border-top-color:"+paraSetup[0].border_color+"; border-top-width:"+paraSetup[0].border_weight+"; border-top-style:"+paraSetup[0].border_style+"; border-bottom-color:"+paraSetup[0].border_color+"; border-bottom-width:"+paraSetup[0].border_weight+"; border-bottom-style:"+paraSetup[0].border_style+"; border-radius:"+paraSetup[0].border_radius+"; margin-top:"+paraSetup[0].top_margin+";'>";	
*/


    c_div_maker = c_div_maker + "</div>";

c_comp_Array[c_ccnum] = c_div_maker;

comp_Array_test();
}