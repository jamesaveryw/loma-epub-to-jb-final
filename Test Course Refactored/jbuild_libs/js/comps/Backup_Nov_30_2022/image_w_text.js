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
var IWT_Image_Width;iwt_btn_id
var image_view_count = 0;
var image_view_array = [[],[]];
var image_temp = [];
var comp_number;
var iwt_btn_id;
var lrgalt = [];

function image_w_text(c_data_stream,c_ccnum,acfl)
{
   // alert("image_w_text was called");
    iwt_btn_id = "iwt_btn_"+c_ccnum;

    cur_iwt_img_id[c_ccnum] = "iwt_img_" + c_ccnum

    for(var imds = 0; imds < c_data_stream.length; imds++)
        {
            comp_data[imds] = Object.values(c_data_stream[imds]);
        }
   
//console.log("-------<( comp_data[3][1]: " + typeof comp_data[3][1]); 

if(typeof comp_data[3][1] !== "undefined")
        {
            for(var lstnbr = 0; lstnbr < comp_data[3][1].length;lstnbr++)
            {
                list_data[lstnbr] = comp_data[3][1][lstnbr].img_lstText
                
            }
    
            if(document.body.clientWidth <= 414){IWT_Image_Width = "100%"}
            if(document.body.clientWidth > 414){IWT_Image_Width = comp_data[2][0]}  
        }



//console.log("typeof acfl: " + typeof acfl)

//-------<(  Accordion Code Begin  )>-------  
if(typeof acfl !== "undefined")
{
   // c_div_maker = "";
    //alert("IMG_WTL_Acc_"+acc_cur_num+"_" + c_ccnum);
    //console.log("Image_w_text: From accordion acc_tab_cnt: " + acc_tab_cnt);
   // console.log("============================");
   // comp_id = ("IMG_WTL_Acc_"+acc_cur_num+"_" + c_ccnum);
  
   //console.log("c_data_stream: " + c_data_stream);

//console.log(comp_id);
   // console.log("============================");


   // console.log("comp_id from Image_w_text for accordion: " + comp_id);

  //  comp_ids[c_ccnum] = comp_id;

        c_div_maker = c_div_maker +  "<div tabindex='0' id='"+comp_id+"' class='col-lg-12 col-md-12 col-xs-12 c_jb_car_acc_wd' style='margin-top:10px; background-color:"+comp_data[7][0]+"'><p class='sr-only'>Image with text component'</p>";
        //class='sr-only'
        
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
    comp_ids[c_ccnum] = comp_id;
   // c_div_maker = "";
    c_div_maker = c_div_maker + "<div style='max-width:960px;'>";
        c_div_maker = c_div_maker +  "<div id='"+comp_id+"' class='col-lg-12 col-md-12 col-xs-12 c_jb_car_acc_wd' style='margin-top:10px; '>"; //background-color:"+comp_data[7][0]+"
        

            image_placement(c_ccnum)
        c_div_maker = c_div_maker + "</div>";
        c_div_maker = c_div_maker + "</div>";
        c_comp_Array[c_ccnum] = c_div_maker;

comp_Array_test();
c_div_maker = "";
////console.log(comp_data)


comp_data = [[],[]];
//console.log("=======")
//console.log(comp_data)
//console.log("=======")
}
//-------<(  Stand Alone Code Begin  )>-------

}

function text_placement()
{

  //  console.log("DOOOOM!!!: " + comp_data[3]);

  if(comp_data[3].length === 1)
    {
        c_div_maker = c_div_maker + "<div><p style='text-align:left; color:"+comp_data[4][0]+"'>"+comp_data[3][0]+"</p></div>";
    }

    if(comp_data[3].length > 1)
    {

    Paragraph_Top = "<div><p style='text-align:left; color:"+comp_data[4][0]+"'>"+comp_data[3][0]+"</p></div>";

    Paragraph_Bot = "<div><p style='text-align:left; color:"+comp_data[4][0]+"'>"+comp_data[3][11]+"</p></div>";
    
    Paragraph_List = "<"+comp_data[3][4]+" type='"+comp_data[3][5]+"'>";
           for(var lstdta = 0; lstdta < list_data.length; lstdta++)
            {
               // console.log("list_data["+lstdta+"]: " + list_data[lstdta]);
                Paragraph_List = Paragraph_List + "<li style='text-align:left; color:"+comp_data[4][0]+"'>"+list_data[lstdta]+"</li>";
            }
    Paragraph_List = Paragraph_List + "</"+comp_data[3][4]+">";
    list_data = [];
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
                //C:\JBuilder_Portal\ACS_101\Modules\Mod_01\images
                //../JBuilder_Portal/ACS_101/Modules/Mod_01/images

                

                c_div_maker = c_div_maker + "<div class='col-lg-6 col-md-6 col-xs-12' style='text-align:"+comp_data[1][1]+";'>";
                    c_div_maker = c_div_maker + "<button aria-label='Select image to zoom in' class='btn_w_image' id='"+cur_iwt_img_id[curcmp]+"' onclick='show_L_image(\""+String(img2str)+"\",1)'><img style='width:"+comp_data[2][0]+"' src='"+image_locale+""+comp_data[0][0]+"'' alt='"+img_alt_tag[curcmp]+"'></button>";
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
                    c_div_maker = c_div_maker + "<button aria-label='Select image to zoom in' class='btn_w_image' id='"+cur_iwt_img_id[curcmp]+"' onclick='show_L_image(\""+String(img2str)+"\","+curcmp+")'><img style='width:"+comp_data[2][0]+"' src='"+image_locale+""+comp_data[0][0]+"' alt='"+img_alt_tag[curcmp]+"'></button>";    
                    alt_text_button(curcmp);
                c_div_maker = c_div_maker + "</div>";
            }             
            

                
        } //<button style="background: url(myimage.png)"

    if(comp_data[1][0] === "top" || comp_data[1][0] === "bottom")
            {
                if(comp_data[1][0] === "top")
                    {
                       // onclick='show_L_image(\""+String(img2str)+"\")' ,IWTL

                        c_div_maker = c_div_maker + "<div class='col-lg-12 col-md-12 col-xs-12'>";
                            c_div_maker = c_div_maker + "<button aria-label='Select image to zoom in' class='btn_w_image' id='"+cur_iwt_img_id[curcmp]+"' onclick='show_L_image(\""+String(img2str)+"\",1)'><img style='width:"+comp_data[2][0]+"' src='"+image_locale+""+comp_data[0][0]+"' alt='"+img_alt_tag[curcmp]+"'></button>";
                            alt_text_button(curcmp);
                            text_placement();
                        c_div_maker = c_div_maker + "</div>"; 
                    }

                if(comp_data[1][0] === "bottom")
                    {
                       // image_view_array[acc_cur_num][c_ccnum] = comp_data[0][0];

                        c_div_maker = c_div_maker + "<div class='col-lg-12 col-md-12 col-xs-12'>";
                            text_placement();
                            c_div_maker = c_div_maker + "<button aria-label='Select image to zoom in' class='btn_w_image' id='"+cur_iwt_img_id[curcmp]+"' onclick='show_L_image(\""+String(img2str)+"\",1)'><img style='width:"+comp_data[2][0]+"' src='"+image_locale+""+comp_data[0][0]+"' alt='"+img_alt_tag[curcmp]+"'></button>";
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

function alt_text_button(atb)
{
    
    if(comp_data[0][1].length > 125)   // \""+String(iwt_btn_id)+"\"
    {

      //  console.log("----------------------------------> " + String(comp_data[0][1]) );  //    +"\",\""+String(iwt_btn_id) );
       // var lrgalt = String(comp_data[0][1])+"\",\""+String(iwt_btn_id)
        lrgalt[atb] = (comp_data[0][1]);

       // console.log("lrgalt["+atb+"]:----------------------------------> " + lrgalt[atb] + "<----------------------------------");


       // var iwt_btn_id = String("iwt_btn_"+comp_number);
      //  console.log("iwt_btn_id: " + iwt_btn_id); ////iwt_btn_"+comp_number
        ////    c_div_maker = c_div_maker + "<div style='margin-top:10px;margin-left:"+IWT_Image_Width+"%; margin-right:"+IWT_Image_Width+"%'><button id='"+iwt_btn_id+"' class='btn btn-primary btn-sm' onclick='alt_tag_text(1,"+lrgalt+")'>Image Description</button></div>"; //onclick='alt_tag_image("+atb+",0,2)'


            c_div_maker = c_div_maker + "<div style='margin-top:10px;margin-left:"+IWT_Image_Width+"%; margin-right:"+IWT_Image_Width+"%'>";

            c_div_maker = c_div_maker + "<button id='"+iwt_btn_id+"' class='btn btn-primary btn-sm' onclick='alt_tag_text("+atb+")'>Image Description</button>";
//onclick='alt_tag_text(1,"+lrgalt[atb]+")'

            c_div_maker = c_div_maker + "</div>";

    } //\""+String(imgAlttext)+"\"      // onclick='alt_tag_text("+lrgalt+")'







//onclick='alt_tag_text(\""+String(comp_data[0][1])+"\",\""+String(iwt_btn_id)+"\")
}

function show_L_image(cmp_img,cmp_id)
        {
           var lstImg = image_locale + cmp_img;
           var iwt_id = (cur_iwt_img_id);
           open_image_modal(lstImg,cmp_id)
            
        }