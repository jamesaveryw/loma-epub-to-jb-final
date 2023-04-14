// @ts-nocheck
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// -------<(  Component Begin 03/02/2020 )>-------
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
var image_count = 0;

var MI_Setup_Array = [];
var pg_wdth;

var mi_Wdth;
var alt_text_Array = [];
var alt_text_Large = [[],[]];
var zf_loc = "../../../"
var mlt_images = [];
var m_image_array = [[],[]];
var imgDeck_array = ["0","12","6","4"];
var mxHeight = "360";


        function Image_Multi(c_data_stream,c_ccnum)
        {


            MI_Setup_Array = Object.values(c_data_stream[0]);
            comp_ids[c_ccnum] = "Multi_Image_Comp_" + c_ccnum;

            if(c_data_stream[1].image_file.length > 4){image_count = (image_count + 1);}
            if(c_data_stream[2].image_file.length > 4){image_count = (image_count + 1);}
            if(c_data_stream[3].image_file.length > 4){image_count = (image_count + 1);}


            c_div_maker = c_div_maker + "<div aria-label='Multi image viewer with "+image_count+" images' id='Multi_Image_Comp_"+c_ccnum+"' class='col-lg-12 col-md-12 col-xs-12' style='height: auto ;margin-top: 20px;height:auto; background-color:"+MI_Setup_Array[0]+";border:"+MI_Setup_Array[4]+" "+MI_Setup_Array[2]+" "+MI_Setup_Array[3]+"; border-radius:"+MI_Setup_Array[1]+"'><p class='sr-only'>Multi image viewer with "+image_count+" images'</p>"; 

                alt_text_Large[c_ccnum] = ["0",c_data_stream[1].image_file_tag,c_data_stream[2].image_file_tag,c_data_stream[3].image_file_tag]


for (var imgCt = 1; imgCt <= image_count; imgCt++) 
{
    
if(c_data_stream[imgCt].image_file.length > 5)
    {
        mlt_images[imgCt] = c_data_stream[imgCt].image_file;
    }

    if(c_data_stream[imgCt].image_file_tag.length < 125)
        {
            alt_text_Array[imgCt] = c_data_stream[imgCt].image_file_tag
        } 
    if(c_data_stream[imgCt].image_file_tag.length >= 125)
        {
            alt_text_Array[imgCt] = "Select Image Description Button for more information"
        }

        if(document.body.clientWidth <= 414)
            {
                mi_Wdth = "100%"

            }
                else
            {
                mi_Wdth = c_data_stream[imgCt].image_width;
            }


    c_div_maker = c_div_maker + "<div role='heading' class='col-lg-"+imgDeck_array[image_count]+" col-md-"+imgDeck_array[image_count]+" col-xs-12' style='border:"+c_data_stream[imgCt].image_border_width+" "+c_data_stream[imgCt].image_border_style+" "+c_data_stream[imgCt].image_border_color+"; border-radius:"+c_data_stream[imgCt].image_border_radius+"; height:auto;width:"+pg_wdth+"; margin-top:"+c_data_stream[imgCt].image_top_margin+"'>";

    c_div_maker = c_div_maker + "<button aria-label='Image number "+imgCt+" of Multi image viewer. Select image to zoom in. "+alt_text_Array[imgCt]+"' class='btn_w_image' id='mi_btn_"+c_ccnum+"_"+imgCt+"' tabindex='0' onclick='show_image("+c_ccnum+","+imgCt+")'><img style='max-height: 300px; width:"+mi_Wdth+"' id='jbImg_"+c_ccnum+"_"+imgCt+"' alt='"+alt_text_Array[imgCt]+"' src='"+image_locale+"" + c_data_stream[imgCt].image_file +"' ></button>";

    if(c_data_stream[imgCt].image_file_tag.length >= 125)  
        {


            c_div_maker = c_div_maker + "<div style='margin-top:10px'><button id='mi_alt_btn_"+c_ccnum+"_"+imgCt+"' tabindex='0' id='mlt_btn' class='btn btn-primary btn-sm' onclick='alt_tag_image("+c_ccnum+","+imgCt+",3)'>Image Description</button></div>";
        } 

    c_div_maker = c_div_maker + "</div>"; 
} 

m_image_array[c_ccnum] = mlt_images;

mlt_images = [];
            c_div_maker = c_div_maker + "</div>";
            c_comp_Array[c_ccnum] = c_div_maker;
                
            comp_Array_test();
            image_count = 0;
            c_div_maker = "";

        }      

function show_image(cmp_nmbr,imgVnum)
        {
            var cit_id = ("mi_btn_"+cmp_nmbr+"_"+imgVnum);

           var oImg = ""+image_locale+"" + m_image_array[cmp_nmbr][imgVnum];
            open_image_modal(oImg, cit_id)
        }
        
function si_image_zoom(si_image)
        {
            show_keyterm();
        }
        
function jb_info_display(jbid)
        {
          //  console.log("%c"+jbid+"", "color:cyan; font-size:20px");
        }

