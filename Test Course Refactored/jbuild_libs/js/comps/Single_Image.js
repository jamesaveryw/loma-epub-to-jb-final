//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// -------<(  Component Begin 03/02/2020 )>-------
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

var mag_lens;											
/*
		if(typeof moduleFolder !== "undefined")
			{
				mag_lens = "jbuild_libs/images/zoom.png";
				plus_icon = "jbuild_libs/images/plus_icon.png";
				minus_icon = "jbuild_libs/images/minus_sign.png";
				fit_icon = "jbuild_libs/images/resize_full.png";				
			}
*/
		//if(typeof moduleFolder === "undefined")
		//	{
				mag_lens = "../../../jbuild_libs/images/zoom.png";
				plus_icon = "../../../jbuild_libs/images/plus_icon.png";
				minus_icon = "../../../jbuild_libs/images/minus_sign.png";
				fit_icon = "../../../jbuild_libs/images/resize_full.png";
		//	}	

        c_div_maker = "";

function Single_Image(c_data_stream,c_ccnum,acfl)
{


	if(typeof acfl !== "undefined")
		{
           // c_div_maker = "";
            c_div_maker = c_div_maker + "<div id='c_sImage_ID_"+c_ccnum+"'>";

            //alert("Image_alt_tag: " + c_data_stream[0].Image_alt_tag);


           // function hasWhiteSpace(s) {
            //    return s.indexOf(' ') >= 0;
           //   }



            c_div_maker = c_div_maker + "<div style='padding:"+c_data_stream[0].image_padding+"; margin-top:"+ c_data_stream[0].top_margin +";background-color:"+c_data_stream[0].background_color+"'><img style='width:"+c_data_stream[0].image_height+"; height:"+c_data_stream[0].image_height+" ;border-radius:"+c_data_stream[0].border_radius+";border-color:"+ c_data_stream[0].border_color+"; border-style:"+c_data_stream[0].border_style+"; border-width:"+c_data_stream[0].border_weight+"' src='images/" + c_data_stream[0].image_name + "' alt='"+c_data_stream[0].Image_alt_tag+"'/></div>";
 


           c_div_maker = c_div_maker + "<div class='jb3' style='color:"+c_data_stream[0].Image_text_color+"'>"+c_data_stream[0].Image_text+"</div></div>";            
            
            c_comp_Array[c_ccnum] = c_div_maker;  //c_data_stream[0].Image_text_color
        }


     if(typeof acfl === "undefined")
		{
            //alert("Single image not in the accordion");
            c_div_maker = "";	

            c_div_maker = c_div_maker + "<div id='c_sImage_ID_"+c_ccnum+"'>";

//c_div_maker = c_div_maker + "<div style='border-style:solid; border-color:orange; border-weight: 4px'>";

            c_div_maker = c_div_maker + "<div style='padding:"+c_data_stream[0].image_padding+"; margin-top:"+ c_data_stream[0].top_margin +";background-color:"+c_data_stream[0].background_color+"'><img style='width:"+c_data_stream[0].image_height+"; height:"+c_data_stream[0].image_height+" ;border-radius:"+c_data_stream[0].border_radius+";border-color:"+ c_data_stream[0].border_color+"; border-style:"+c_data_stream[0].border_style+"; border-width:"+c_data_stream[0].border_weight+"' src='images/" + c_data_stream[0].image_name + "' alt='Darkside of the moon album cover.'/></div>";

            //sParameter = encodeURIComponent(sParameter.trim()) //"Test%20-%20Text"

           // alert("begin c_data_stream[0].image_name: " + c_data_stream[0].image_name);


           // var str = "Abc: Lorem ipsum sit amet";
           // str = str.split(":").pop();

           var image_char = c_data_stream[0].image_name.split("/").pop();
           var img_fldr = c_data_stream[0].image_name
           img_fldr = img_fldr.substring(0, img_fldr.indexOf('/'));
           
           image_char = encodeURIComponent(image_char.trim()) //"Test%20-%20Text"
           // alert("final name: " + img_fldr+ "/" + image_char);
           
            

        //    var s = '/Controller/Action?id=11112&value=4444';
        //    s = s.substring(0, s.indexOf('?'));
        //    document.write(s);




            c_div_maker = c_div_maker + "<div class='jb3' style='color:"+c_data_stream[0].Image_text_color+"'>"+c_data_stream[0].Image_text+"</div>";


           //hasWhiteSpace(c_data_stream[0].Image_text);



//c_div_maker = c_div_maker + "</div>";


//-------<( Footer begin )>

//alert(c_data_stream[0].zoom_on_off);

switch(c_data_stream[0].zoom_on_off)
{
    case "on":
        c_div_maker = c_div_maker + "<div class='img_modal_hdr_ftr' id='simage_sa_"+c_ccnum+"' style='display:block'>";    
    break;

    case "off":
        c_div_maker = c_div_maker + "<div class='img_modal_hdr_ftr' id='simage_sa_"+c_ccnum+"' style='display:none'>";
    break;
}



     


c_div_maker = c_div_maker + "<div><span class='zicon'><img alt='Select to zoom in' src='"+plus_icon+"' onClick='javascript:si_image_zoom("+c_ccnum+")'></span><span class='zicon'><img alt='Select to zoom out' src='"+minus_icon+"'></span><span class='zicon'><img alt='Select to zoom out' src='"+fit_icon+"'></span></div>";

//c_div_maker = c_div_maker + "<div><span class='zicon'><img alt='Select to zoom in' src='"+plus_icon+"' onClick='javascript:si_image_zoom("+c_ccnum+")'></span><span class='zicon'><img alt='Select to zoom out' src='"+minus_icon+"' onClick='javascript:zout_image("+c_ccnum+")'></span> <span class='zicon'><img alt='Select to zoom out' src='"+fit_icon+"' onClick='javascript:fit_image("+c_ccnum+")'></span>  <span class='jb_close' id='img_btn'><button onclick='javascript:close_img()'><jb1>" + closeButton + "</jb1></button></span></div>";// Close										
                               
                               
c_div_maker = c_div_maker + "</div>";
//-------<( Footer end )>	






            
           //c_div_maker = c_div_maker + "</div>";

//alert("c_data_stream[c_ccnum].Image_text: " + c_data_stream[c_ccnum].Image_text);


         //  c_div_maker = c_div_maker + "<div class='jb3' style='color:"+c_data_stream[0].Image_text_color+"'>"+c_data_stream[0].Image_text+"</div>";
           
           c_div_maker = c_div_maker + "</div>";
           c_div_maker = c_div_maker + "</div>";
            c_comp_Array[c_ccnum] = c_div_maker;
            
            comp_Array_test();
            
        }



}



function si_image_zoom(si_image)
{
       
    show_keyterm();
}
