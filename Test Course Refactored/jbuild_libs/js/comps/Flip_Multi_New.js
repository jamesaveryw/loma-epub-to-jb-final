var flip_card_data = [];
var flp_function_name;
var fcard_data = [];
var contents_array = [];
var contents_values_array = [];
var card_data = []
var Paragraph_Top;
var Paragraph_Bot;
var Paragraph_List;
var list_data = [];
var IWT_Image_Width;
//var card_decor_array = [];

var comp_in_flipcard;
var crdlp;
var crdn;
var cctch = 0;
var cwd;
//2,4,6

var hnflp = [];
var ltpflp = [];
var iwtflp = [];
var pgflp = [];
var card_decor_whole_array = [[],[]];
//// var fbcards;
var fbcrd_array = [];
var card_01_cut = [];
var card_02_cut = [];
var card_03_cut = [];
var cctnmbr;
var List_Text_Num = [];
var List_Text_Array = [];

var cct;
var cPnumber;
var crd_flipped;
var flip_card_aria_label = "front";
var ccnum_current;
var flipcheck = 0;
var imt_flip_back;
var fc_button_array = [];
var fc_button_id_array = [[],[]];

function Flip_Multi_New(c_flip_data_stream,c_ccnum)
{

  ccnum_current = c_ccnum;


var tcards = ((Object.values(c_flip_data_stream).length) - 1) / 2


for(let bid = 1; bid <=  tcards; bid++)
    {

      fc_button_array[bid] = ("card_" +ccnum_current+ "_" +bid)
    }
    fc_button_id_array[ccnum_current] = fc_button_array;

    


  c_div_maker = "";	
     flip_card_data = c_flip_data_stream;
    var card_decor_array = c_flip_data_stream[0]

    crdlp = ((Object.keys(c_flip_data_stream).length - 1 ) / 2);

    crdn =  12 / ((Object.keys(c_flip_data_stream).length - 1 ) / 2);

    console.log("crdn: " + crdn);

    var ctr_num = 0;
    for(var crt = 0;crt < Object.keys(flip_card_data[0]).length;crt++)
    {
    
        if(Object.keys(flip_card_data[0])[crt].substring(0, 4) !== "card")
            {
              ctr_num = ctr_num + 1;
            }
    }



    var calc_cut = (((Object.keys(flip_card_data[0]).length) -  ctr_num) / 3 )
    var calc_cuta = ((Object.keys(flip_card_data[0]).length)-calc_cut)

    var card_01_cut = Object.values(flip_card_data[0]).slice(ctr_num,(calc_cut + ctr_num));
    var card_02_cut = Object.values(flip_card_data[0]).slice((calc_cut + ctr_num),calc_cuta);
    var card_03_cut = Object.values(flip_card_data[0]).slice(calc_cuta,Object.keys(flip_card_data[0]).length);
 
    card_decor_whole_array[1] = card_01_cut;
    card_decor_whole_array[2] = card_02_cut;
    card_decor_whole_array[3] = card_03_cut;


          for(var t_card = 1; t_card < Object.values(flip_card_data).length; t_card++)
          {
            fcard_data[t_card] = Object.values(flip_card_data[t_card]);
            comp_in_flipcard = String(Object.keys(flip_card_data[t_card]));
            contents_values_array[t_card] = comp_in_flipcard;
            fbcrd_array[t_card] = Object.values(flip_card_data[t_card]);

          }


if(crdlp === 1)
        {
  c_div_maker = c_div_maker + "<div class='cardcontainer flip_con' style='margin-top:20px;height:auto;background-color:"+flip_card_data[0].main_background_color+"'>";//start  container
        }

if(crdlp > 1)
{

//=========================
c_div_maker = c_div_maker + "<div class='col-lg-12 col-md-12 col-xs-12' style='margin-top:20px;height:auto;background-color:"+flip_card_data[0].main_background_color+"'>";//start
//=========================
}

for(cct = 1; cct <= crdlp; cct++) {

  

c_div_maker = c_div_maker + "<div class='col-lg-"+crdn+" col-md-"+crdn+" col-xs-12' style='max-width:120ch; line-height:1.5;height:auto;background-color:"+card_decor_whole_array[cct][0]+"'>";

// JW: 2022-12-20
// Changed button to div.
// Moved tabindex, aria-label and event listerns to div below.
c_div_maker = c_div_maker + "<div id='card_"+c_ccnum+"_"+cct+"' class='btn_w_image c_lesson_width'>";
// c_div_maker = c_div_maker + "<button id='card_"+c_ccnum+"_"+cct+"' tabindex='0' aria-label='Select front of card "+cct+" to flip' class='btn_w_image c_lesson_width' onclick='rf_flip("+c_ccnum+","+cct+",0)' onkeydown='rf_flip("+c_ccnum+","+cct+",0)'>";


// JW: 2022-12-20
// Changed card_decor_whole_array[cct][6] to the class instead of element name. Non-semantic HTML tags can confuse screen readers
c_div_maker = c_div_maker + "<p style='margin-top:10px;color:"+card_decor_whole_array[cct][3]+";text-align:"+card_decor_whole_array[cct][5]+"'><span class='"+card_decor_whole_array[cct][6]+"'>"+card_decor_whole_array[cct][4]+"</span></p>"; 
// c_div_maker = c_div_maker + "<p style='margin-top:10px;color:"+card_decor_whole_array[cct][3]+";text-align:"+card_decor_whole_array[cct][5]+"'><"+card_decor_whole_array[cct][6]+">"+card_decor_whole_array[cct][4]+"</"+card_decor_whole_array[cct][6]+"></p>"; 

let flipCardNum = course.onReplaceTemplateVar('default_content', 'Labels.flipCardNum');
flipCardNum = flipCardNum.replace(/\[\[x\]\]/, cct);
flipCardNum = flipCardNum.replace(/\[\[y\]\]/, crdlp);
// JW: 2022-12-20
// Added role=group, aria-roledescription=flip card. Doing so creates a "custom" component that screen reader users can understand.
// Changed aria-label to "Flip".
// Added aria-description set to "Select to flip".
// Simplified the card instructions and moved to default_content so they can be translated.
// Added event as an argument to rf_flip event listeners.
 c_div_maker = c_div_maker + "<div class='card-container' role='group' aria-roledescription='" + course.onReplaceTemplateVar('default_content', 'Labels.flipCard') + "' aria-label='" + flipCardNum + "' aria-description='" + course.onReplaceTemplateVar('default_content', 'Labels.selectToFlip') + "' style='perspective: 2280px; position: relative;height:350px;width:auto' onclick='rf_flip("+c_ccnum+","+cct+",0,event)' onkeydown='rf_flip("+c_ccnum+","+cct+",0,event)'>"; //width:"+cwd+" commented out on 04/25/2022

          // JW: 20220-12-20
          // Added role=group and aria-roledescription=side.
          // Added aria-label set to "Front".
          // Removed event listeners. Those are already set on the flip card container div above and
          // the mouseover event isn't needed at all.
          c_div_maker = c_div_maker + "<div id='front_"+c_ccnum+"_"+cct+"' tabindex='0' aria-label='" + course.onReplaceTemplateVar('default_content', 'Labels.front') + "' aria-hidden='false' role='group' aria-roledescription='side' class='front alert alert-info' style='overflow-y:auto; backface-visibility: hidden; transform-style: preserve-3d; position: absolute; height: 100%; width: 100%; background-color:"+card_decor_whole_array[cct][1]+"'>"; 
           // c_div_maker = c_div_maker + "<div id='front_"+c_ccnum+"_"+cct+"' aria-hidden='false' class='front alert alert-info' tabindex='-1' style='overflow-y:auto; backface-visibility: hidden; transform-style: preserve-3d; position: absolute; z-index: 1; height: 100%; width: 100%; transition: all 0.5s ease-out 0s; transform: rotateY(0deg); background-color:"+card_decor_whole_array[cct][1]+"' onClick='rf_flip("+c_ccnum+","+cct+",1)' onkeydown='rf_flip("+c_ccnum+","+cct+",1)' onmouseover='flip_check()'>"; 
             
           cctch = (cctch + 1)

        flip_card_contents(contents_values_array[cctch],cctch)
                          c_div_maker = c_div_maker + "</div>";
            // JW: 2022-12-20
            // Added role=group and aria-roledescription=side.
            // Added aria-label set to "Back".
            c_div_maker = c_div_maker + "<div id='back_"+c_ccnum+"_"+cct+"' tabindex='-1' aria-label='" + course.onReplaceTemplateVar('default_content', 'Labels.back') + "' aria-hidden='true' role='group' aria-roledescription='side' class='back well well-lg invisible' style='overflow-y:auto; -webkit-backface-visibility: hidden; backface-visibility: hidden; position: absolute; height: 100%; width: 100%; transform: rotateY(180deg); background-color:"+card_decor_whole_array[cct][2]+"'>";
            // c_div_maker = c_div_maker + "<div id='back_"+c_ccnum+"_"+cct+"' class='back well well-lg' tabindex='-1' style='overflow-y:auto; backface-visibility: hidden; transform-style: preserve-3d; position: relative; z-index: 0; height: 100%; width: 100%; transform: rotateY(-180deg); transition: all 0.5s ease-out 0s;background-color:"+card_decor_whole_array[cct][2]+"' aria-hidden='true'>";
            cctch = (cctch + 1)
        flip_card_contents(contents_values_array[cctch],cctch)       
                 c_div_maker = c_div_maker + "</div>"; 
       
       c_div_maker = c_div_maker + "</div>";
       c_div_maker = c_div_maker + "<p style='margin-top:10px;color:"+card_decor_whole_array[cct][7]+";text-align:"+card_decor_whole_array[cct][9]+"'><span class='"+card_decor_whole_array[cct][10]+"'>"+card_decor_whole_array[cct][8]+"</span></p>"; 
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= 

c_div_maker = c_div_maker + "</div>";
c_div_maker = c_div_maker + "</div>";

}

//=========================
c_div_maker = c_div_maker + "</div>";//finish

c_comp_Array[c_ccnum] = c_div_maker;
comp_Array_test();
cctch = 0;
c_div_maker = "";
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
}


function flip_card_contents(fcc,dtnum)
{

switch(fcc)
  {
    case "Paragraphs_New":
      pgflp = flip_card_data[dtnum][contents_values_array[dtnum]];

      // JW: 2022-12-21
      // Removed tabindex
            c_div_maker = c_div_maker + "<div class='col-lg-12 col-md-12 col-xs-12' style='height:auto; padding: 0px 20px; background-color:"+pgflp[0].background_color+"; border-top-color:"+pgflp[0].border_color+"; border-top-width:"+pgflp[0].border_weight+"; border-top-style:"+pgflp[0].border_style+"; border-bottom-color:"+pgflp[0].border_color+"; border-bottom-width:"+pgflp[0].border_weight+"; border-bottom-style:"+pgflp[0].border_style+"; border-radius:"+pgflp[0].border_radius+"; margin-top:"+pgflp[0].top_margin+";'>"; 

            for(var pn = 1; pn < pgflp.length; pn++)
            {
                  switch(pgflp[0].columns)
                    {
                      case "1":
                        c_div_maker = c_div_maker + "<p class='jb_column1' style='color:"+pgflp[0].Paragraph_Font_color+"; text-align:"+pgflp[0].Paragraph_align+";line-height:"+pgflp[0].line_spacing+"'><span class='"+pgflp[0].Paragraph_Font_Size+"'>"+ pgflp[pn].Paragraph_txt +"</span></p>";
                      break;

                      case "2":
                        c_div_maker = c_div_maker + "<p class='jb_column2' style='color:"+pgflp[0].Paragraph_Font_color+"; text-align:"+pgflp[0].Paragraph_align+";line-height:"+pgflp[0].line_spacing+"'><span class='"+pgflp[0].Paragraph_Font_Size+"'>"+ pgflp[pn].Paragraph_txt +"</span></p>";
                      break;
                    }




            }
            c_div_maker = c_div_maker + "</div>";
 
    break;

    case "Heading_New":
         hnflp = flip_card_data[dtnum][contents_values_array[dtnum]];
        
        // JW: 2022-12-21
        // Removed tabindex
        // Removed role=main (main is reserved for the element that serves as main content of page--only one per page).
        c_div_maker = c_div_maker + "<div aria-label='"+ hnflp[0].sngl_Heading +"' id='Heading_"+dtnum+"' class='col-lg-12 col-md-12 col-xs-12' style='width:100%; margin-top:"+hnflp[2].top_margin+";background-color: "+ hnflp[6].background_color +"; border-top-color:"+hnflp[7].top_line_color+"; border-top-width:"+hnflp[7].top_line_weight+"; border-top-style:"+hnflp[7].top_line_style+"; border-bottom-color:"+hnflp[9].bottom_line_color+"; border-bottom-width:"+hnflp[9].bottom_line_weight+"; border-bottom-style:"+hnflp[9].bottom_line_style+"'><div class='"+hnflp[3].size+">";
										
											
         c_div_maker = c_div_maker + "<p style='background-color:"+hnflp[8].border_background_color+"; margin-top:"+hnflp[8].border_top_margin+"; padding:"+hnflp[8].border_padding+"; border-radius:"+hnflp[8].border_inside_radius+"; border-color:"+hnflp[8].border_inside_color+"; border-width:"+hnflp[8].border_inside_weight+"; border-style:"+hnflp[8].border_inside_style+" ; width:"+hnflp[8].border_width+"; color: "+ hnflp[5].color +"; font-weight: "+ hnflp[4].style +";text-align: "+ hnflp[1].alignment +"'>"+ hnflp[0].sngl_Heading +"</p></div>";

         c_div_maker = c_div_maker + "</div>";


    break;
    
    case "List_text_paragraph":
      ltpflp = flip_card_data[dtnum][contents_values_array[dtnum]];
      //===================

      c_div_maker = c_div_maker + "<div class='col-lg-12 col-md-12 col-xs-12' style=' background-color:"+ltpflp[5].background_color+"; margin-top:" + ltpflp[4].top_margin+";'>";

      c_div_maker = c_div_maker + "<div class='c_lesson_width'>";
     
      
      c_div_maker = c_div_maker + "<div style='border-style:"+ltpflp[0].border_style+"; border-color:"+ltpflp[0].border_color+"; border-width:"+ltpflp[0].border_width+"; border-radius:"+ltpflp[0].border_radius+"; width:100%; padding:10px'>";
      
      //-------<(  Heading )>-------		          quest_char									
      c_div_maker = c_div_maker + "<div class='jb_column1'><"+ltpflp[0].heading_size+" style='border-bottom-style: "+ltpflp[0].heading_underline+"; border-bottom-color:"+ltpflp[0].heading_underline_color+" ;border-bottom-width: "+ltpflp[0].heading_underline_height+"; color:"+ltpflp[0].heading_color+"; font-style: "+ltpflp[0].heading_style+"; text-align: "+ ltpflp[0].heading_alignment +"'>"+ ltpflp[0].List_Heading +"</"+ltpflp[0].heading_size+"></div>";
      //-------<(  Heading )>-------
      //-------<(  Paragraph Top )>-------
     
      for(var tpar = 0; tpar < ltpflp[1].Top_Paragraphs.length; tpar++)
      {
          
                            //quest_char
          c_div_maker = c_div_maker + "<div class='jb_column1'><p style='text-align: "+ ltpflp[0].paragraph_alignment +"; color:"+ltpflp[0].paragraph_top_text_color+"'><span class='"+ltpflp[0].paragraph_text_size+"'>"+ ltpflp[1].Top_Paragraphs[tpar].Paragraph_text +"</p></span></div>";							
      }					
                            
      //-------<(  Paragraph Top )>-------
      
      c_div_maker = c_div_maker + "<"+ ltpflp[3].Type_of_List +" type='"+ltpflp[3].ol_type+"' style='list-style-type:"+ltpflp[3].ul_type+"'>";

      	
      //-------<(  List  )>-------											
      List_Text_Num = (ltpflp[8].list_items);	
      
                for(lst = 0; lst < List_Text_Num.length; lst++)
                      {

                        List_Text_Array[lst] = (List_Text_Num[lst].lstText);
							
                                                  c_div_maker = c_div_maker + "<li class='jb_column1' style='margin-left:40px; color:"+ ltpflp[7].text_color +"; text-align: "+ ltpflp[2].align_text +";'><span class='"+ltpflp[3].List_Text_Size+"'>"+ List_Text_Array[lst] +"</span></li>";																	
                      
                      }
                   
                                      c_div_maker = c_div_maker + "</"+ ltpflp[3].Type_of_List +">";											
      //-------<(  List  )>-------
      
      //-------<(  Paragraph Bottom )>-------											
      for(var bpar = 0; bpar < ltpflp[9].Bottom_paragraphs.length; bpar++)
                  {

                                  c_div_maker = c_div_maker + "<div class='jb_column1'><p style='font-size:"+ltpflp[0].paragraph_text_size+";text-align: "+ ltpflp[0].paragraph_alignment +"; color:"+ltpflp[0].paragraph_bot_text_color+"'><span class='"+ltpflp[0].paragraph_text_size+"'>"+ ltpflp[9].Bottom_paragraphs[bpar].Paragraph_text +"</span></p></div>";							
                  }
                            
      //-------<(  Paragraph Bottom )>-------	
      
      
      //=========================================
      c_div_maker = c_div_maker + "</div> ";
      
      c_div_maker = c_div_maker + "</div></div>";
      //===================

    break;
 
    case "image_w_text":
      iwtflp = flip_card_data[dtnum][contents_values_array[dtnum]];

list_data = iwtflp[3].image_list;
//========================

switch(Object.values(iwtflp[7]).length)
{
  case 1:
    imt_flip_back = 'rgba(255,255,255,0.5)'
  break;

  default:
    imt_flip_back = iwtflp[7];
  break;
}


// JW: 2022-12-21
// Removed tabindex
c_div_maker = c_div_maker +  "<div id='IMG_WTL_flip_"+dtnum+"' class='col-lg-12 col-md-12 col-xs-12 c_jb_car_acc_wd' style='margin-top:10px; background-color:"+imt_flip_back+"'>";             


// JW: 2023-01-12
// Calling iwt_placement instead. The way this is, no text from the image_w_text snippet is rendered.
iwt_placement(dtnum);
// c_div_maker = c_div_maker + "<div class='col-lg-6 col-md-6 col-xs-12' style='text-align:"+iwtflp[1].image_aligmnent+";'><input aria-label='Select image to zoom in' type='image' onfocus='disable_rf_flip("+ccnum_current+","+dtnum+")' onfocusout='enable_rf_flip("+ccnum_current+","+dtnum+")' img style='width:100%;' src='"+image_locale+""+iwtflp[0].image_name+"' alt='Image of Rush Power Windows album cover' onmouseover='disable_rf_flip("+ccnum_current+","+dtnum+")'  onclick='show_L_image(\""+String(iwtflp[0].image_name)+"\","+ccnum_current+")' onmouseout='enable_rf_flip("+ccnum_current+","+dtnum+")'  >";  //onkeypress='disable_rf_flip("+ccnum_current+","+dtnum+")'

// c_div_maker = c_div_maker + "</div>";


c_div_maker = c_div_maker + "</div>";

    break;    
  }

}




function iwt_placement(iwtnum)
{


  switch(iwtflp[1].image_position)
  {
    case "left":

      c_div_maker = c_div_maker + "<div class='col-lg-6 col-md-6 col-xs-12' style='text-align:"+iwtflp[1].image_aligmnent+";'>";
      // JW: 2023-01-13
      // Removed button element
      "<img style='width:"+iwtflp[2].image_size+"' src='"+image_locale+""+iwtflp[0].image_name+"' alt='" + iwtflp[0].image_w_text_tag + "' />"
      // c_div_maker = c_div_maker + "<button aria-label='Select image to zoom in' class='btn_w_image' id='' onclick='FL_show_L_image(\""+String(iwtflp[0].image_name)+"\","+iwtnum+")'><img style='width:"+iwtflp[2].image_size+"' src='"+image_locale+""+iwtflp[0].image_name+"' alt=''></button>";    
          FL_alt_text_button(iwtnum);
      c_div_maker = c_div_maker + "</div>";

      c_div_maker = c_div_maker + "<div class='col-lg-6 col-md-6 col-xs-12' style='text-align:"+iwtflp[1].image_aligmnent+";'>";
      FL_text_placement();
      c_div_maker = c_div_maker + "</div>";




    break;

    case "right":
      c_div_maker = c_div_maker + "<div class='col-lg-6 col-md-6 col-xs-12' style='text-align:"+iwtflp[1].image_aligmnent+";'>";
      FL_text_placement();
      c_div_maker = c_div_maker + "</div>";

      c_div_maker = c_div_maker + "<div class='col-lg-6 col-md-6 col-xs-12' style='text-align:"+iwtflp[1].image_aligmnent+";'>";
      c_div_maker = c_div_maker + "<img style='width:"+iwtflp[2].image_size+"' src='"+image_locale+""+iwtflp[0].image_name+"' alt='" + iwtflp[0].image_w_text_tag + "' />";    
        FL_alt_text_button(iwtnum);
      c_div_maker = c_div_maker + "</div>";



    break;

    case "top":

  c_div_maker = c_div_maker + "<div class='col-lg-12 col-md-12 col-xs-12' >";
      FL_text_placement();
      c_div_maker = c_div_maker + "</div>";


    
     
      c_div_maker = c_div_maker + "<div class='col-lg-12 col-md-12 col-xs-12' style='text-align:"+iwtflp[1].image_aligmnent+";'>";
      c_div_maker = c_div_maker + "<img style='width:"+iwtflp[2].image_size+"' src='"+image_locale+""+iwtflp[0].image_name+"' alt='" + iwtflp[0].image_w_text_tag + "' />";    
          FL_alt_text_button(iwtnum);
      c_div_maker = c_div_maker + "</div>";

    
      
    break;

    case "bottom":
      c_div_maker = c_div_maker + "<div class='col-lg-12 col-md-12 col-xs-12' style='text-align:"+iwtflp[1].image_aligmnent+";'>";
      FL_text_placement();
      c_div_maker = c_div_maker + "</div>";

      c_div_maker = c_div_maker + "<div class='col-lg-12 col-md-12 col-xs-12' style='text-align:"+iwtflp[1].image_aligmnent+";'>";
      c_div_maker = c_div_maker + "<img style='width:"+iwtflp[2].image_size+"' src='"+image_locale+""+iwtflp[0].image_name+"' alt='" + iwtflp[0].image_w_text_tag + "' />";    
          FL_alt_text_button(iwtnum);
      c_div_maker = c_div_maker + "</div>";
  

    break;

  }



}

function FL_text_placement()
{

    Paragraph_Top = "<div><p style='text-align:left; color:"+iwtflp[4].image_text_color+"'>"+iwtflp[3].image_text+"</p></div>";

    Paragraph_Bot = "<div><p style='text-align:left; color:"+iwtflp[4].image_text_color+"'>"+iwtflp[3].image_text_below+"</p></div>";
   
        
    
    Paragraph_List = "<"+iwtflp[3].Type_of_List+" type='"+iwtflp[3].ul_type+"'>";
           for(var lstdta = 0; lstdta < list_data.length; lstdta++)
            {

               Paragraph_List = Paragraph_List + "<li style='text-align:left; color:"+iwtflp[4].image_text_color+"'>"+list_data[lstdta].img_lstText+"</li>";
            }
    Paragraph_List = Paragraph_List + "</"+iwtflp[3].Type_of_List+">";
c_div_maker = c_div_maker + "<div style='text-align:center'>";
    switch(iwtflp[3].list_position)
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
c_div_maker = c_div_maker + "</div>";
}







function FL_alt_text_button(atb)
{
  
    if(iwtflp[0].image_w_text_tag.length > 125)
    {
console.log("document.body.clientWidth: " + document.body.clientWidth);
          if(document.body.clientWidth <= 414){IWT_Image_Width = "100%"}
          if(document.body.clientWidth > 414){IWT_Image_Width = iwtflp[2].image_size}  


          c_div_maker = c_div_maker + "<div style='margin-top:10px;margin-left:"+IWT_Image_Width+"%; margin-right:"+IWT_Image_Width+"%'><button id='"+atb+"' class='btn btn-primary btn-sm' onclick='alt_tag_text(\""+String(iwtflp[0].image_w_text_tag)+"\",\""+String(iwt_btn_id)+"\")'>Image Description</button></div>"; 

          console.log("Make the alt tag button")
    } 

}


function FL_show_L_image(cmp_img,cmp_id,cmpnm,crdnum)
        {
//card_"+c_ccnum+"_"+cct+"
          console.log("@@@@@@@@@@@@@@@@@@@@@@@@")
          console.log("card_"+c_ccnum+"_"+cmp_img);
          console.log("@@@@@@@@@@@@@@@@@@@@@@@@")


           var lstImg = image_locale + cmp_img;


           open_image_modal(lstImg,cmp_id)
            
        }

function rf_flip(comp_number,crd_number,cdface,e) //event
{
        let trigger;
        // check if the target triggered something else, e.g., key term, inline source
        // if it did, don't run this code
        let conditions = [
          [ e.target.tagName == 'A', findAncestor(e.target, 'node', 'A') ],
          [ e.target.tagName == 'BUTTON', findAncestor(e.target, 'node', 'BUTTON') ],
          [ e.target.getAttribute('role') == 'button', findAncestor(e.target, 'attr', 'role', 'button') ],
          [ e.target.getAttribute('role') == 'link', findAncestor(e.target, 'attr', 'role', 'link') ]
        ]

        for (let condition of conditions) {
          trigger = (condition[0]) ? e.target : condition[1];
          if (trigger) break;
        }
        // let trigger = (e.target.tagName == 'A') ? e.target : findAncestor(e.target, 'node', 'A');
        // if (!trigger) {
        //   trigger = (e.target.getAttribute('role') == 'button') ? e.target : findAncestor(e.target, 'attr', 'role', 'button');
        //   if (!trigger) {
        //     trigger = (e.target.getAttribute('role') == 'link') ? e.target : findAncestor(e.target, 'attr', 'role', 'link');
        //   }
        // }


        if (!trigger && (e.type == 'click' || (e.key == " " || e.key == "Enter"))) {
          if (e.key) {
            e.preventDefault();
          }
          let card = (e.target.classList.contains('card-container')) ? e.target : findAncestor(e.target, 'class', 'card-container');
          if (card.classList.contains('flipCard')) {
            card.classList.remove('flipCard');
            card.querySelector('.front').setAttribute('aria-hidden', 'false');
            card.querySelector('.front').classList.remove('delay');
            card.querySelector('.front').classList.remove('invisible');
            card.querySelector('.back').setAttribute('aria-hidden', 'true');
            card.querySelector('.back').classList.add('delay');
            card.querySelector('.back').classList.add('invisible');
            card.querySelector('.front').focus();
            card.querySelector('.front').setAttribute('tabindex', '0');
            card.querySelector('.back').setAttribute('tabindex', '-1');
          }
          else {
            card.classList.add('flipCard');
            card.querySelector('.back').setAttribute('aria-hidden', 'false');
            card.querySelector('.back').classList.remove('delay');
            card.querySelector('.back').classList.remove('invisible');
            card.querySelector('.front').setAttribute('aria-hidden', 'true');
            card.querySelector('.front').classList.add('delay');
            card.querySelector('.front').classList.add('invisible');
            card.querySelector('.back').focus();
            card.querySelector('.back').setAttribute('tabindex', '0');
            card.querySelector('.front').setAttribute('tabindex', '-1');
          }
        }
        cPnumber = comp_number;
        crd_flipped = crd_number;
}

function flip_checker(flpck)
{
  console.log("comp number: " +cPnumber+  " crd_flipped: " + crd_flipped);
      for(var fckr = 1; fckr <= 3; fckr++)
        {

          console.log("fckr: " + fckr);
        }


      switch(flpck)
        {
          case true:
            flip_card_aria_label = "back";

            document.getElementById("card_" + cPnumber + "_" +crd_flipped).setAttribute("aria-label", "Select back of card "+crd_flipped+" to flip")
            document.getElementById("front_" + cPnumber+"_"+crd_flipped).setAttribute("aria-hidden", "true")
            document.getElementById("back_" + cPnumber+"_"+crd_flipped).setAttribute("aria-hidden", "false")

          break;

          case false:
            flip_card_aria_label = "front";
            document.getElementById("card_" + cPnumber + "_" +crd_flipped).setAttribute("aria-label", "Select front of card "+crd_flipped+" to flip")
            document.getElementById("front_" + cPnumber+"_"+crd_flipped).setAttribute("aria-hidden", "false")
            document.getElementById("back_" + cPnumber+"_"+crd_flipped).setAttribute("aria-hidden", "true")
          break;
        }  



}

function focusTest(ftone,fttwo)
{
  console.log("Focus Works!: " + ftone + " | " + fttwo);
}

function doSomething(){
  alert("didSomething");
}

var functionHolder;
function disable_rf_flip(mac,sec){
  if(!functionHolder) functionHolder = window.rf_flip;
  window.rf_flip = function(){};

  var cdr;
switch(sec)
  {
    case 1:
    case 2:  
          cdr = 1;
    break;

    case 3:
    case 4:  
          cdr = 2;
    break;
    case 5:
    case 6:    
          cdr = 3;
    break;    
  }

document.getElementById("card_"+mac+"_"+cdr).disabled = true;

document.getElementById("card_"+mac+"_"+cdr).tabIndex = -1;

flip_image = ("card_"+mac+"_"+cdr);



  flipcheck = 1;
}

function enable_rf_flip(mac,sec){
  flip_image = "undefined";
  var cdr;
switch(sec)
  {
    case 1:
    case 2:  
          cdr = 1;
    break;

    case 3:
    case 4:  
          cdr = 2;
    break;
    case 5:
    case 6:    
          cdr = 3;
    break;    
  }
console.log("card_"+mac+"_"+cdr);
document.getElementById("card_"+mac+"_"+cdr).disabled = false;
// document.getElementById("card_"+mac+"_"+cdr).focus;

  window.rf_flip = functionHolder;
}

function flip_check()
{

}

