//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// -------<(  Component Begin 03/02/2020 )>-------
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

var comp_id;
var comp_data = [[],[]];
var list_data = [];
var Paragraph_Top;
var Paragraph_Bot;
var Paragraph_List;
var img_alt_tag = [];
var IWT_Image_Width;
var image_view_count = 0;
var image_view_array = [[],[]];
var image_temp = [];

function image_w_text(c_data_stream,c_ccnum,acfl)
{
 
    for(var imds = 0; imds < c_data_stream.length; imds++)
        {
            comp_data[imds] = Object.values(c_data_stream[imds]);
        }
    
    for(var lstnbr = 0; lstnbr < comp_data[3][1].length;lstnbr++)
        {
            list_data[lstnbr] = comp_data[3][1][lstnbr].img_lstText
            
        }

        if(document.body.clientWidth <= 414){IWT_Image_Width = "100%"}
        if(document.body.clientWidth > 414){IWT_Image_Width = comp_data[2][0]}  

//-------<(  Accordion Code Begin  )>-------  
if(typeof acfl !== "undefined")
{
    comp_id = ("IMG_WTL_Acc_"+acc_cur_num+"_" + c_ccnum);

        c_div_maker = c_div_maker +  "<div id='"+comp_id+"' class='col-lg-12 col-md-12 col-xs-12 c_jb_car_acc_wd' style='margin-top:10px; background-color:"+comp_data[7][0]+"'>";
        c_div_maker = c_div_maker + "<div style='max-width:960px;'>";

            image_placement(c_ccnum)
        c_div_maker = c_div_maker + "</div>";
        c_div_maker = c_div_maker + "</div>";
}
//-------<(  Accordion Code End  )>-------

//-------<(  Stand Alone Code Begin  )>-------
if(typeof acfl === "undefined")	// Stand alone 
{
    comp_id = ("IMG_WTL_" + c_ccnum +"_" + c_ccnum);
    c_div_maker = "";
    c_div_maker = c_div_maker + "<div style='max-width:960px;'>";
        c_div_maker = c_div_maker +  "<div id='"+comp_id+"' class='col-lg-12 col-md-12 col-xs-12 c_jb_car_acc_wd' style='margin-top:10px; background-color:"+comp_data[7][0]+"'>";
        

            image_placement(c_ccnum)
        c_div_maker = c_div_maker + "</div>";
        c_div_maker = c_div_maker + "</div>";
        c_comp_Array[c_ccnum] = c_div_maker;

comp_Array_test();

}
//-------<(  Stand Alone Code Begin  )>-------

}

function text_placement()
{

    Paragraph_Top = "<div><p style='text-align:left; color:"+comp_data[4][0]+"'>"+comp_data[3][0]+"</p></div>";

    Paragraph_Bot = "<div><p style='text-align:left; color:"+comp_data[4][0]+"'>"+comp_data[3][11]+"</p></div>";
    
    Paragraph_List = "<"+comp_data[3][4]+" type='"+comp_data[3][5]+"'>";
           for(var lstdta = 0; lstdta < list_data.length; lstdta++)
            {
                Paragraph_List = Paragraph_List + "<li style='text-align:left; color:"+comp_data[4][0]+"'>"+list_data[lstdta]+"</li>";
            }
    Paragraph_List = Paragraph_List + "</"+comp_data[3][4]+">";

    switch(comp_data[3][2])
            {
                case "top":
                    c_div_maker = c_div_maker + Paragraph_List;
                    c_div_maker = c_div_maker + Paragraph_Top;
                    c_div_maker = c_div_maker + Paragraph_Bot;
                break;

                case "middle":
                    c_div_maker = c_div_maker + Paragraph_Top;
                    c_div_maker = c_div_maker + Paragraph_List;
                    c_div_maker = c_div_maker + Paragraph_Bot;
                break;                

                case "bottom":
                    c_div_maker = c_div_maker + Paragraph_Top;
                    c_div_maker = c_div_maker + Paragraph_Bot;
                    c_div_maker = c_div_maker + Paragraph_List;
                break;
            }

}

function image_placement(curcmp)
{


if(comp_data[0][1].length > 125){img_alt_tag[curcmp] = "Select Image Description Button for more information"};
if(comp_data[0][1].length < 125){img_alt_tag[curcmp] = comp_data[0][1]};
var imgAlttext = comp_data[0][1];
var img2str = comp_data[0][0];

    if(comp_data[1][0] === "right" || comp_data[1][0] === "left")
        {
            if(comp_data[1][0] === "left")
            {
                // image_view_array[acc_cur_num][c_ccnum] = comp_data[0][0];

                c_div_maker = c_div_maker + "<div class='col-lg-6 col-md-6 col-xs-12' style='text-align:"+comp_data[1][1]+";'>";
                    c_div_maker = c_div_maker + "<img style='width:"+comp_data[2][0]+"' src='images/"+comp_data[0][0]+"' alt='"+img_alt_tag[curcmp]+"' onclick='show_L_image(\""+String(img2str)+"\")'>";
                    alt_text_button(curcmp);
                c_div_maker = c_div_maker + "</div>";

                c_div_maker = c_div_maker + "<div class='col-lg-6 col-md-6 col-xs-12' style='text-align:"+comp_data[1][1]+";'>";
                    text_placement();
                c_div_maker = c_div_maker + "</div>";
            }
 
            if(comp_data[1][0] === "right")
            {
               // image_view_array[acc_cur_num][c_ccnum] = comp_data[0][0];

                c_div_maker = c_div_maker + "<div class='col-lg-6 col-md-6 col-xs-12' style='text-align:"+comp_data[1][1]+";'>";
                    text_placement();
                c_div_maker = c_div_maker + "</div>";

                c_div_maker = c_div_maker + "<div class='col-lg-6 col-md-6 col-xs-12' style='text-align:"+comp_data[1][1]+";'>";
                    c_div_maker = c_div_maker + "<img style='width:"+comp_data[2][0]+"' src='images/"+comp_data[0][0]+"' alt='"+img_alt_tag[curcmp]+"' onclick='show_L_image(\""+String(img2str)+"\")'>";    
                    alt_text_button(curcmp);
                c_div_maker = c_div_maker + "</div>";
            }             
            

                
        } //<button style="background: url(myimage.png)"

    if(comp_data[1][0] === "top" || comp_data[1][0] === "bottom")
            {
                if(comp_data[1][0] === "top")
                    {
                       // onclick='show_L_image(\""+String(img2str)+"\")'

                        c_div_maker = c_div_maker + "<div class='col-lg-12 col-md-12 col-xs-12'>";
                            c_div_maker = c_div_maker + "<button onclick='show_L_image(\""+String(img2str)+"\")'><img src='images/"+comp_data[0][0]+"' alt='"+img_alt_tag[curcmp]+"'></button>";
                            alt_text_button(curcmp);
                            text_placement();
                        c_div_maker = c_div_maker + "</div>"; 
                    }

                if(comp_data[1][0] === "bottom")
                    {
                       // image_view_array[acc_cur_num][c_ccnum] = comp_data[0][0];

                        c_div_maker = c_div_maker + "<div class='col-lg-12 col-md-12 col-xs-12'>";
                            text_placement();
                            c_div_maker = c_div_maker + "<img src='images/"+comp_data[0][0]+"' alt='"+img_alt_tag[curcmp]+"' onclick='show_L_image(\""+String(img2str)+"\")'>";
                            alt_text_button(curcmp);
                        c_div_maker = c_div_maker + "</div>"; 
                    }                    
            }

}

function make_iwtModal()
{
    c_div_maker = c_div_maker + "<div id='iwtModal_"+c_ccnum+"' class='c_jb_modal'><div class='c_jb_modal_container' tabindex='-1' 'role'='dialog' 'aria-modal'='true' aria-labelledby='iwtModal_title_"+c_ccnum+"'>";

    c_div_maker = c_div_maker + "</div></div>";
}





/*
function c_make_info_modal()
		{
	//-------<(  Modal Box )>-------
	
		// JW: 03-24-21
		// 1: Added a container in between the modal backdrop and the modal content.
		// Reasoning: Need a container to collect all focusable elements in the modal to implement a tab trap and signify to screen readers that this is a modal.
		c_div_maker = c_div_maker + "<div id='c_info_Modal_"+c_ccnum+"' class='c_jb_modal'><div class='c_jb_modal_container' tabindex='-1' 'role'='dialog' 'aria-modal'='true' aria-labelledby='c_info_Modal_title_"+c_ccnum+"'>";	
	//-------<>											
	//Header
	//-------<>
		// JW: 03-25-21
		// 1: Changed title tag from <p> to <h2>.
		// Reasoning: Modal titles need to be semantically marked as heading. Since they exist outside the flow of the rest of the document, the heading will always be <h2> for modals.
		// 2: Added an id attr to <h2>.
		// Reasoning: Modal titles should be programmatically associated modal container.
		c_div_maker = c_div_maker + "<div class='c_jb_modal-hdr-ftr' style='background-color:"+c_compData[9].Header_color+"'><h2 id='c_info_Modal_title_"+c_ccnum+"' style='text-align:"+c_compData[9].title_text_alignment+" ;color:"+c_compData[9].title_text_color+"; font-size:"+c_compData[9].title_text_size+"'>"+c_compData[9].title_text+"</h2></div>";											
	//-------<>												
	//Body
	//-------<>
	//overflow-y: scroll											
	c_div_maker = c_div_maker + "<div class='c_jb_modal-content' style='overflow-y: scroll;background-color:"+c_compData[9].Body_color+"'>";
			for(var c_mdl = 10; c_mdl < c_compData.length; c_mdl++) // id='jb_inf0_modal_main_text'
				{											
	c_div_maker = c_div_maker + "<p style='text-align:"+c_compData[9].body_text_alignment+";color:"+c_compData[9].body_text_color+";font-size:18px'><jb8>"+c_compData[c_mdl].body_text+"</jb8></p>";
	
				}								
	c_div_maker = c_div_maker + "</div>";											
	
	// JW: 03-25-21
	// 1: Removed "javascript:" from onclick.
	// Reasoning: I need to add a second event listner to handle accessibility around closing the modal.
	// 2: Added modalClose event to onclick.
	// Reasoning: Closing a modal should return focus to the element that triggered the modal and allow scrolling again.
	// 3: Added a class to the close button.
	// Reasoning: The ESC key needs to close the modal as well. Use the class to get the onclick attribute and clone the functions included.
	c_div_maker = c_div_maker + "<div class='c_jb_modal-hdr-ftr'><span class='c_jb_close' id='info_btn'></span><button class='modal-close-btn' onclick='close_Info_modal("+c_ccnum+"); modalClose(event);'>Close</button></div>";		
			
			
	c_div_maker = c_div_maker + "</div></div>";		
	//-------<(  Modal Box )>-------
	
	}
*/





function alt_text_button(atb)
{
    if(comp_data[0][1].length > 125)
    {

            c_div_maker = c_div_maker + "<div style='margin-top:10px;margin-left:"+IWT_Image_Width+"%; margin-right:"+IWT_Image_Width+"%'><button id='iwt_btn' class='btn btn-primary btn-sm' onclick='alt_tag_text(\""+String(comp_data[0][1])+"\")'>Image Description</button></div>"; //onclick='alt_tag_image("+atb+",0,2)'
    } //\""+String(imgAlttext)+"\"

}

function show_L_image(cmp_nmbr)
        {
           // console.log("show_L_image was called: " + cmp_nmbr);
           var lstImg = "images/" + cmp_nmbr;
            open_image_modal(lstImg)
            document.getElementById("imageModal").autufocus();
            
        }