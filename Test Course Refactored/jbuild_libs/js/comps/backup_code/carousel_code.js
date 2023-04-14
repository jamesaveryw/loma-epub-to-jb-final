//-------------------------------------------------------------------------------------------------------------	
//-------<( Carousel code begin )>-------											
//-------------------------------------------------------------------------------------------------------------											


    var jcc_car_data = sSelections[jcc].Carousel;

var mag_lens;											

if(typeof moduleFolder !== "undefined")
{
mag_lens = "jbuild_libs/images/zoom.png";
plus_icon = "jbuild_libs/images/plus_icon.png";
minus_icon = "jbuild_libs/images/minus_sign.png";
fit_icon = "jbuild_libs/images/resize_full.png";				
}

if(typeof moduleFolder === "undefined")
{
mag_lens = "../../../jbuild_libs/images/zoom.png";
plus_icon = "../../../jbuild_libs/images/plus_icon.png";
minus_icon = "../../../jbuild_libs/images/minus_sign.png";
fit_icon = "../../../jbuild_libs/images/resize_full.png";
}									


//for(var jcc_car = 1; jcc_car < jcc_car_data.length; jcc_car++)
//alert(jcc_car_data[jcc_car].Slide.dialog_text);
        
//caro_modal_text											
for(var mdl_title = 1; mdl_title < jcc_car_data.length; mdl_title++)
{
if(typeof jcc_car_data[mdl_title].Slide.dialog_text !== "undefined")
{
//alert("jcc: " + jcc);
caro_modal_info[mdl_title] = jcc_car_data[mdl_title].Slide.dialog_text;
//alert(caro_modal_info[mdl_title]);
//alert(caro_modal_info);

}

}
        
caro_modal_text[jcc] = caro_modal_info;	
caro_modal_info = [];											
        
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='jccImgModal' class='img_modal' style='margin-top:36px'>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='img_modal_hdr_ftr'><p id='img_modal_text' style='color: #ffffff; text-align:left'></p></div>";											
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='img_modal_content' style='overflow-y:auto'>";	

Jcc_Comp_Maker = Jcc_Comp_Maker + "<img id='modal_image' style='margin-top:"+jcc_car_data[0].slide_top_margin+"; width:90%; height:90%' src='' x alt=''>";												
        
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";	
        
        
//alert("jcc_car: " + jcc_car);										
//-------<( Footer begin )>
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='img_modal_hdr_ftr'>";	//col-lg-12 col-md-12 col-xs-12
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div><span class='zicon'><img alt='Select to zoom in' src='"+plus_icon+"' onClick='javascript:zin_image("+jcc+")'></span><span class='zicon'><img alt='Select to zoom out' src='"+minus_icon+"' onClick='javascript:zout_image("+jcc+")'></span> <span class='zicon'><img alt='Select to zoom out' src='"+fit_icon+"' onClick='javascript:fit_image("+jcc+")'></span>  <span class='jb_close' id='img_btn'><button onclick='javascript:close_img()'><jb1>" + closeButton + "</jb1></button></span></div>";// Close										
        
        
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
//-------<( Footer end )>											
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";												
        
//alert("jcc_car: " + jcc_car);											
//onclick='javascript:Page_Selection("+tc_con+",0)'											
        
    

    
    car_slide_array[jcc] = jcc_car_data.length - 1;
car_zoom_image_array = [];	
for(var jcc_car_ctr = 1; jcc_car_ctr < jcc_car_data.length; jcc_car_ctr++)
{
//alert("jcc_car_ctr: " + jcc_car_ctr + " : Jcc = " + jcc);

car_zoom_image_array[jcc_car_ctr]	= jcc_car_data[jcc_car_ctr].Slide.Image;

//alert("jcc_car_ctr: " + jcc_car_ctr + " : jcc_car_data.length: " + jcc_car_data.length);

if(jcc_car_ctr === (jcc_car_data.length) - 1)
{
//alert(car_zoom_image_array);
car_zoom_array[jcc] = car_zoom_image_array
//alert(car_zoom_array);
}
}
        
        
        
        
for(var cbe = 0; cbe < car_slide_array[jcc]; cbe++)
{

car_array[cbe] = String(String(jcc) + "_" + (cbe + 1));
if(cbe === (car_slide_array[jcc]) - 1)
{

cur_slide_number[jcc] = car_array;
car_array = [];
}

}											
        
        
car_rpt[jcc] = jcc_car_data[0].repeat;										

Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12' style='width:100%'>";
    
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='carousel_margin jb_car_acc_wd'><div id='"+jcc + "_" +"jcCarousel' class='carousel slide' data-ride='false' data-interval='false' data-wrap='"+jcc_car_data[0].repeat+"' style='background-color:"+jcc_car_data[0].back_color+"; margin-top:"+jcc_car_data[0].top_margin+"'>";	
// Carousel indicators 
if((jcc_car_data[0].repeat !== "true") && (jcc_car_data[0].repeat !== "false") )											
{
old_caro = "true";
}
        
if((jcc_car_data[0].repeat === "true") || (old_caro === "true")	)										
{											
/* The below code will add indicators to the carousel, however they interfere with the image zoom. fix later										
Jcc_Comp_Maker = Jcc_Comp_Maker + "<ol class='carousel-indicators' style='bottom: -10px; margin-bottom:10px;'>"; //margin-bottom:10px;
var car_count;								
for(var jcc_car_ind = 1; jcc_car_ind < jcc_car_data.length; jcc_car_ind++)
{
if(jcc_car_ind === 1)
{
    car_count = (jcc_car_ind - 1);  //  href='#"+jcc + "_" +"jcCarousel'
    
    Jcc_Comp_Maker = Jcc_Comp_Maker + "<li data-target='#"+jcc + "_" +"jcCarousel' data-slide-to='"+(Number(car_count))+"' class='active'></li>"; 
}
    else
{
    car_count = (jcc_car_ind - 1);
    Jcc_Comp_Maker = Jcc_Comp_Maker + "<li data-target='#"+jcc + "_" +"jcCarousel' data-slide-to='"+(Number(car_count)) +"'></li>";
}

}
Jcc_Comp_Maker = Jcc_Comp_Maker + "</ol>";
*/
}											
        
        
        
// Wrapper for carousel items -->

//overflow-y: auto; overflow-x: hidden

if($(document).width() <= 414)											
{
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='carousel-inner' style='width:100%;height:340px; overflow-y: auto; z-index:200px'>";		
}

        
if($(document).width() > 414)
{
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='carousel-inner' style='width:88%;height:340px; overflow-y: auto; z-index:200px'>";							}				

for(var jcc_car = 1; jcc_car < jcc_car_data.length; jcc_car++)
{


if(jcc_car === 1) // <img src="../Mod_01/images/boom.jpg" alt="First Slide">
{
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='"+jcc+"_"+jcc_car+"' style='padding-left:"+jcc_car_data[jcc_car].Slide.Padding+";padding-right:"+jcc_car_data[jcc_car].Slide.Padding+"' class='item active'>";

if(typeof jcc_car_data[jcc_car].Slide.Image_tag === "undefined")
{
//alert("The ADA for the carousel needs to be added");
ADA_check_Array[jcc] = "Alt tags for images inside the carousel needs to be added"

}

if(jcc_car_data[jcc_car].Slide.Image.length > 0)
{ 


Alt_Tag_Carousel_Data[jcc_car] = jcc_car_data[jcc_car].Slide.Image_tag;
if(typeof jcc_car_data[jcc_car].Slide.Image_tag === "undefined")
{

Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='text-align:"+jcc_car_data[jcc_car].Slide.Image_Placement+"'><img style='margin-top:"+jcc_car_data[0].slide_top_margin+"; width:"+jcc_car_data[jcc_car].Slide.image_size+"' src='"+img_loc+""+jcc_car_data[jcc_car].Slide.Image+"' x alt=''>";

if(typeof jcc_car_data[jcc_car].Slide.image_zoom !== "undefined")
{
if(jcc_car_data[jcc_car].Slide.image_zoom === "true")
{
    Jcc_Comp_Maker = Jcc_Comp_Maker + "<div><img alt='Select to enlarge image' src='"+mag_lens+"' onClick='javascript:imgZoom("+jcc+","+jcc_car+")' style='margin-top:8px'></div>";
}
}
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
}


if(typeof jcc_car_data[jcc_car].Slide.Image_tag !== "undefined")
{

var iz = jcc_car_data[jcc_car].Slide.Image		

if(jcc_car_data[jcc_car].Slide.Image_tag.length <= 125)
{


Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='text-align:"+jcc_car_data[jcc_car].Slide.Image_Placement+"'><img style='margin-top:"+jcc_car_data[0].slide_top_margin+"; width:"+jcc_car_data[jcc_car].Slide.image_size+"' src='"+img_loc+""+jcc_car_data[jcc_car].Slide.Image+"' x alt='"+jcc_car_data[jcc_car].Slide.Image_tag+"'>";

//alert("typeof jcc_car_data[jcc_car].Slide.image_zoom: " + typeof jcc_car_data[jcc_car].Slide.image_zoom);				

if(typeof jcc_car_data[jcc_car].Slide.image_zoom !== "undefined")
{
if(jcc_car_data[jcc_car].Slide.image_zoom === "true")
{
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div><img alt='Select to enlarge image' src='"+mag_lens+"' onClick='javascript:imgZoom("+jcc+","+jcc_car+")' style='margin-top:8px'></div>";	
}
}


Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";			

}

if(jcc_car_data[jcc_car].Slide.Image_tag.length > 125)
{

Alt_Tag_Image_Data[jcc_car] = jcc_car_data[jcc_car].Slide.Image_tag;
Alt_Tag_Image_name[jcc_car]	= jcc_car_data[jcc_car].Slide.Image_tag;



Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='text-align:"+jcc_car_data[jcc_car].Slide.Image_Placement+"'><img style='margin-top:"+jcc_car_data[0].slide_top_margin+"; width:"+jcc_car_data[jcc_car].Slide.image_size+"' src='"+img_loc+""+jcc_car_data[jcc_car].Slide.Image+"' x alt='Select image for more information' role='button' onclick='alt_tag_lib("+jcc_car+")'>";

if(typeof jcc_car_data[jcc_car].Slide.image_zoom !== "undefined")
{
if(jcc_car_data[jcc_car].Slide.image_zoom === "true")
{
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div><img alt='Select to enlarge image' src='"+mag_lens+"' onClick='javascript:imgZoom("+jcc+","+jcc_car+")' style='margin-top:8px'></div>";	
}
}							

Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";					
}


}					

}


//"Image_tag":"",

Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='width: 75%; background-color:"+jcc_car_data[1].Slide.background_color+"; padding:"+jcc_car_data[jcc_car].Slide.Padding+"; text-align:"+jcc_car_data[0].Text_align+"; color:"+jcc_car_data[1].Slide.Text_Color+";'><"+jcc_car_data[jcc_car].Slide.Text_Font_Size+">"+jcc_car_data[jcc_car].Slide.Text+"</"+jcc_car_data[jcc_car].Slide.Text_Font_Size+"></div>";			

Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";

}

if(jcc_car > 1)
{

//if(jcc_car_data[jcc_car].Slide.Image.length !== 0)			
//	{
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='"+jcc+"_"+jcc_car+"' style='padding-left:"+jcc_car_data[jcc_car].Slide.Padding+";padding-right:"+jcc_car_data[jcc_car].Slide.Padding+"' class='item'>";

Alt_Tag_Carousel_Data[jcc_car] = jcc_car_data[jcc_car].Slide.Image_tag;
//-------					
if(jcc_car_data[jcc_car].Slide.Image.length > 0)
{ 					
//-------	


if(typeof jcc_car_data[jcc_car].Slide.Image_tag === "undefined")
{
//mag_test(jcc,jcc_car);

Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='text-align:"+jcc_car_data[jcc_car].Slide.Image_Placement+"'><img style='margin-top:"+jcc_car_data[0].slide_top_margin+"; width:"+jcc_car_data[jcc_car].Slide.image_size+"' src='"+img_loc+""+jcc_car_data[jcc_car].Slide.Image+"' x alt=''></div>";

if(typeof jcc_car_data[jcc_car].Slide.image_zoom !== "undefined")
{
if(jcc_car_data[jcc_car].Slide.image_zoom === "true")
{
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div><img alt='Select to enlarge image' src='"+mag_lens+"' onClick='javascript:imgZoom("+jcc+","+jcc_car+")' style='margin-top:8px'></div>";
}
}

Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";

}					


if(typeof jcc_car_data[jcc_car].Slide.Image_tag !== "undefined")
{

if(jcc_car_data[jcc_car].Slide.Image_tag.length <= 125)
{						
//mag_test(jcc,jcc_car);

Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='text-align:"+jcc_car_data[jcc_car].Slide.Image_Placement+"'><img style='margin-top:"+jcc_car_data[0].slide_top_margin+"; width:"+jcc_car_data[jcc_car].Slide.image_size+"' src='"+img_loc+""+jcc_car_data[jcc_car].Slide.Image+"' x alt='"+jcc_car_data[jcc_car].Slide.Image_tag+"'>";

if(typeof jcc_car_data[jcc_car].Slide.image_zoom !== "undefined")
{
if(jcc_car_data[jcc_car].Slide.image_zoom === "true")
    {
        Jcc_Comp_Maker = Jcc_Comp_Maker + "<div><img alt='Select to enlarge image' src='"+mag_lens+"' onClick='javascript:imgZoom("+jcc+","+jcc_car+")' style='margin-top:8px'></div>";
    }
}
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
}	

if(jcc_car_data[jcc_car].Slide.Image_tag.length > 125)
{
//mag_test(jcc,jcc_car);

Alt_Tag_Image_Data[jcc_car] = jcc_car_data[jcc_car].Slide.Image_tag;
Alt_Tag_Image_name[jcc_car] = jcc_car_data[jcc_car].Slide.Image;

Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='text-align:"+jcc_car_data[jcc_car].Slide.Image_Placement+"'><img style='margin-top:"+jcc_car_data[0].slide_top_margin+"; width:"+jcc_car_data[jcc_car].Slide.image_size+"' src='"+img_loc+""+jcc_car_data[jcc_car].Slide.Image+"' x alt='Select image for more information'  role='button' onclick='alt_tag_lib("+jcc_car+")'>";

if(typeof jcc_car_data[jcc_car].Slide.image_zoom !== "undefined")
{
if(jcc_car_data[jcc_car].Slide.image_zoom === "true")
    {
        Jcc_Comp_Maker = Jcc_Comp_Maker + "<div><img alt='Select to enlarge image' src='"+mag_lens+"' onClick='javascript:imgZoom("+jcc+","+jcc_car+")' style='margin-top:8px'></div>";
    }
}
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
}						

}					

//-------
}			
//-------					



Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='width: 75%; background-color:"+jcc_car_data[1].Slide.background_color+"; padding:"+jcc_car_data[jcc_car].Slide.Padding+"; text-align:"+jcc_car_data[0].Text_align+"; color:"+jcc_car_data[1].Slide.Text_Color+";'><"+jcc_car_data[jcc_car].Slide.Text_Font_Size+">"+jcc_car_data[jcc_car].Slide.Text+"</"+jcc_car_data[jcc_car].Slide.Text_Font_Size+"></div>";	

Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
//}
}		

}
        
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";	
        
//car_rpt[jcc]
// jcc_car_data[0].repeat === "true"											
        
//Carousel controls -->
Jcc_Comp_Maker = Jcc_Comp_Maker + "<a id='prev_"+jcc+"' class='carousel-control left' style='left: 0%;width:60px' href='#"+jcc + "_" +"jcCarousel' data-slide='prev' onClick='javascript:car_click("+jcc+",0,car_rpt["+jcc+"],0)'>";
        
if(car_rpt[jcc] === "true")
{
Jcc_Comp_Maker = Jcc_Comp_Maker + "<span id='car_left_"+jcc+"' class='glyphicon glyphicon-chevron-left'></span>"; 					
}
        
if(car_rpt[jcc] === "false")
{
Jcc_Comp_Maker = Jcc_Comp_Maker + "<span style='visibility: hidden;' id='car_left_"+jcc+"' class='glyphicon glyphicon-chevron-left'></span>"; 					
}											

Jcc_Comp_Maker = Jcc_Comp_Maker + "</a>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "<a class='carousel-control right' href='#"+jcc + "_" +"jcCarousel' data-slide='next' onClick='javascript:car_click("+jcc+",1,car_rpt["+jcc+"],1)' style='width:60px'>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "<span id='car_right_"+jcc+"' class='glyphicon glyphicon-chevron-right'></span>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "</a>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";											

//Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";	

        
    
//-------------------------------------------------------------------------------------------------------------	
//-------<( Carousel code end )>-------											
//-------------------------------------------------------------------------------------------------------------