var sbpl;
var aplmt;
var tl_alt_array = [];


function Timeline(tl_data_stream,c_ccnum) //acfl
{

        for(var tia = 7; tia < tl_data_stream.length; tia++)
            {
               
                if(typeof tl_data_stream[tia].timeline_img_alt !== "undefined")
                    {
                        if(tl_data_stream[tia].timeline_img_alt.length > 125)
                        {
                            tl_alt_array[tia] = tl_data_stream[tia].timeline_img_alt;
                        }
                    }


                
               

            }

 tl_alt_array[c_ccnum] = tl_alt_array


c_div_maker = c_div_maker + "<div class='col-lg-12 col-md-12 col-xs-12' style='z-index: 0; background-color: " + tl_data_stream[3].timeline_background_color + "; margin-top: "+ tl_data_stream[4].top_margin +"'><span class='timeline_line' style='background-color:"+tl_data_stream[5].Vertical_Line_Color+"'> </span><div style='background-color: " + tl_data_stream[2].timeline_heading_b_color + "; text-align: "+tl_data_stream[0].timeline_heading_alignment+"; padding: 10px; z-index: 1; position: relative;'><h2 style='color:"+ tl_data_stream[1].timeline_font_heading_color +";'>" + tl_data_stream[0].timeline_heading + "</h2></div>";	


for(var tl = 7; tl < tl_data_stream.length; tl++)
        {

            console.log()


                switch(tl % 2)
                    {
                        case 1:
                                sbpl = "right";
                                aplmt = ("transparent" +tl_data_stream[5].Info_Back+ " transparent transparent"); 
                        break;

                        case 0:
                                sbpl = "left"; 
                                aplmt = ("transparent transparent transparent "+tl_data_stream[5].Info_Back);
                        break;
                    }
                                 //The line below containing timeline_container " needs have the space.
                    c_div_maker = c_div_maker + "<div class='timeline_container "+sbpl+"'><span class='timeline_circle_"+sbpl+"' style='background-color:"+tl_data_stream[5].Circle_Color+";border: "+tl_data_stream[5].Circle_Weight+" solid "+tl_data_stream[5].Circle_Outline_Color+"'></span><span class='"+sbpl+"_arrow' style='border-color: "+aplmt+";'> </span><div class='content' style='background-color:"+tl_data_stream[5].Info_Back+"'>";  // <h3>"+ tl_data_stream[tl].box_Heading +"</h3>";

                    c_div_maker = c_div_maker + "<h3 style='text-align:"+tl_data_stream[6].Box_Heading_alignment+"; font-weight:"+tl_data_stream[6].Box_Heading_weight+"; font-style:"+tl_data_stream[6].Box_Heading_style+";text-decoration: "+tl_data_stream[6].Box_Heading_underline+";font-size:"+tl_data_stream[6].Box_Heading_Size+";color:"+tl_data_stream[6].Box_heading_text_color+"'>"+ tl_data_stream[tl].box_Heading +"</h3>";


        switch(tl_data_stream[tl].box_Contents.slice(-4))
            {
                case ".jpg":
                case ".png":
                   // console.log(tl_data_stream[tl].timeline_img_alt.length);

                   if(typeof tl_data_stream[tia].timeline_img_alt !== "undefined")
                   {
                   
                    var altvalue = tl_data_stream[tl].timeline_img_alt.length;
                  

                    switch(true)
                        {
                            case altvalue <= 125:
                                c_div_maker = c_div_maker + "<div style='text-align:"+tl_data_stream[6].box_Contents_Image_alignment+"'><img src='"+image_locale+"" + tl_data_stream[tl].box_Contents + "' width='80%' height='auto' alt='"+tl_data_stream[tl].timeline_img_alt+"'></div>";
                            break;

                            case altvalue > 125:
                                c_div_maker = c_div_maker + "<div style='text-align:"+tl_data_stream[6].box_Contents_Image_alignment+"'><img src='"+image_locale+"" + tl_data_stream[tl].box_Contents + "' width='80%' height='auto' alt='Select image for more informtion' role='button' onclick='alt_tag_lib("+c_ccnum+","+2+","+tl+")'></div>"; 
                                //tl    onclick='survey_next_question("+sda+","+ssq_a+")
                            break;
                        }
                      }   

                break;

                case ".mp4":
                    c_div_maker = c_div_maker + "<div style='text-align:"+tl_data_stream[6].box_Contents_alignment+"'><video class='jb_mx_wd' style='margin-top: 20px' width='100%;' controls><source src='"+ tl_data_stream[tl].box_Contents +"' id='vid_source' type='video/mp4'></video></div>";

                break;
                // src='"+ tl_data_stream[tl].box_Contents + "'
                // src='"+audio_files+"" + tl_data_stream[tl].box_Contents + "'
                case ".mp3": 
                    c_div_maker = c_div_maker +"<div style='text-align:"+tl_data_stream[6].box_Contents_alignment+"'><audio controls style='width: 100%;'><source src='"+audio_files+"" + tl_data_stream[tl].box_Contents + "' type='audio/mpeg'></audio></div>";
                break;

                default: 
                c_div_maker = c_div_maker + "<div style='color:"+tl_data_stream[5].Info_Back+";text-align:"+tl_data_stream[6].box_Contents_alignment+"'><"+tl_data_stream[6].box_Contents_font_size+">"+ tl_data_stream[tl].box_Contents +"</"+tl_data_stream[6].box_Contents_font_size+"></div>";
                break;
            }

          c_div_maker = c_div_maker + "</div></div>";
          

        }



c_div_maker = c_div_maker + "</div>";

c_comp_Array[c_ccnum] = c_div_maker;
comp_Array_test();
c_div_maker = "";
    }

