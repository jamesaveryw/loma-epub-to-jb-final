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

function Flip_Multi_New(c_flip_data_stream,c_ccnum)
{





  c_div_maker = "";	
     flip_card_data = c_flip_data_stream;
    var card_decor_array = c_flip_data_stream[0]

    crdlp = ((Object.keys(c_flip_data_stream).length - 1 ) / 2);

    crdn =  12 / ((Object.keys(c_flip_data_stream).length - 1 ) / 2);

//console.log("crdn: " + crdn);


    var ctr_num = 0;
    for(var crt = 0;crt < Object.keys(flip_card_data[0]).length;crt++)
    {
       // console.log("crt: " + crt);
    
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

  /*  
    var card_01_cut = Object.values(flip_card_data[0]).slice(2,13);
    var card_02_cut = Object.values(flip_card_data[0]).slice(13,24);
    var card_03_cut = Object.values(flip_card_data[0]).slice(24,35);
  */  
    card_decor_whole_array[1] = card_01_cut;
    card_decor_whole_array[2] = card_02_cut;
    card_decor_whole_array[3] = card_03_cut;



  ////  fbcards = ((c_flip_data_stream.length) - 1);


          for(var t_card = 1; t_card < Object.values(flip_card_data).length; t_card++)
          {
            fcard_data[t_card] = Object.values(flip_card_data[t_card]);
            comp_in_flipcard = String(Object.keys(flip_card_data[t_card]));
            contents_values_array[t_card] = comp_in_flipcard;
            fbcrd_array[t_card] = Object.values(flip_card_data[t_card]);

          }


      ////  console.log("Morbo: " + ((Object.values(flip_card_data).length) - 1) );

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- c_lesson_width
c_div_maker = "";

////console.log("crdlp: " + crdlp)

if(crdlp === 1)
        {
  c_div_maker = c_div_maker + "<div class='container flip_con' style='margin-top:20px;height:auto;background-color:"+flip_card_data[0].main_background_color+"'>";//start
        }

if(crdlp > 1)
{
//=========================
c_div_maker = c_div_maker + "<div class='col-lg-12 col-md-12 col-xs-12' style='margin-top:20px;height:auto;background-color:"+flip_card_data[0].main_background_color+"'>";//start
//=========================
}



//crdlp
for(cct = 1; cct <= crdlp; cct++) {
//console.log("cct: " + cct);     onClick='javascript:
//onClick='javascript:view_lesson("+gtMain[0]

c_div_maker = c_div_maker + "<div class='col-lg-"+crdn+" col-md-"+crdn+" col-xs-12' style='max-width:120ch; line-height:1.5;height:auto;background-color:"+card_decor_whole_array[cct][0]+"'>";
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=   "+card_decor_whole_array[cct][0]+"
c_div_maker = c_div_maker + "<p style='margin-top:10px;color:"+card_decor_whole_array[cct][3]+";text-align:"+card_decor_whole_array[cct][5]+"'><"+card_decor_whole_array[cct][6]+">"+card_decor_whole_array[cct][4]+"</"+card_decor_whole_array[cct][6]+"></p>"; 
   

       c_div_maker = c_div_maker + "<div aria-label='Select card "+cct+" to flip' type='button' tabindex='0' id='card_"+c_ccnum+"_"+cct+"' style='perspective: 2280px; position: relative;height:350px;'>"; 
 // onClick='rf_flip("+c_ccnum+","+cct+",event)' onkeydown='rf_flip("+c_ccnum+","+cct+",event)' 

           c_div_maker = c_div_maker + "<div class='front alert alert-info' style='overflow-y:auto; backface-visibility: hidden; transform-style: preserve-3d; position: absolute; z-index: 1; height: 100%; width: 100%; transition: all 0.5s ease-out 0s; transform: rotateY(0deg); background-color:"+card_decor_whole_array[cct][1]+"' onClick='rf_flip("+c_ccnum+","+cct+",event)' onkeydown='rf_flip("+c_ccnum+","+cct+",event)'>"; //c_ccnum
             
           cctch = (cctch + 1)

        flip_card_contents(contents_values_array[cctch],cctch)
                          c_div_maker = c_div_maker + "</div>";
            c_div_maker = c_div_maker + "<div class='back well well-lg' style='overflow-y:auto; backface-visibility: hidden; transform-style: preserve-3d; position: relative; z-index: 0; height: 100%; width: 100%; transform: rotateY(-180deg); transition: all 0.5s ease-out 0s;background-color:"+card_decor_whole_array[cct][2]+"'>";
            cctch = (cctch + 1)
        flip_card_contents(contents_values_array[cctch],cctch)       
                 c_div_maker = c_div_maker + "</div>"; 
       
       c_div_maker = c_div_maker + "</div>";
       c_div_maker = c_div_maker + "<p style='margin-top:10px;color:"+card_decor_whole_array[cct][7]+";text-align:"+card_decor_whole_array[cct][9]+"'><"+card_decor_whole_array[cct][10]+">"+card_decor_whole_array[cct][8]+"</"+card_decor_whole_array[cct][10]+"></p>"; 
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= 

c_div_maker = c_div_maker + "<div><button onclick='rf_flip("+c_ccnum+","+cct+")'>Click to flip</button></div>";

c_div_maker = c_div_maker + "</div>";



}
//=========================
//=========================
c_div_maker = c_div_maker + "</div>";//finish

c_comp_Array[c_ccnum] = c_div_maker;
comp_Array_test();
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
}


function flip_card_contents(fcc,dtnum)
{
switch(fcc)
  {
    case "Paragraphs_New":
      pgflp = flip_card_data[dtnum][contents_values_array[dtnum]];

            c_div_maker = c_div_maker + "<div class='col-lg-12 col-md-12 col-xs-12' style='height:auto; padding: 0px 20px; background-color:"+pgflp[0].background_color+"; border-top-color:"+pgflp[0].border_color+"; border-top-width:"+pgflp[0].border_weight+"; border-top-style:"+pgflp[0].border_style+"; border-bottom-color:"+pgflp[0].border_color+"; border-bottom-width:"+pgflp[0].border_weight+"; border-bottom-style:"+pgflp[0].border_style+"; border-radius:"+pgflp[0].border_radius+"; margin-top:"+pgflp[0].top_margin+";'>"; 

            for(var pn = 1; pn < pgflp.length; pn++)
            {
                  switch(pgflp[0].columns)
                    {
                      case "1":
                        c_div_maker = c_div_maker + "<p class='jb_column1' style='color:"+pgflp[0].Paragraph_Font_color+"; text-align:"+pgflp[0].Paragraph_align+";line-height:"+pgflp[0].line_spacing+"'><"+pgflp[0].Paragraph_Font_Size+">"+ pgflp[pn].Paragraph_txt +"</"+pgflp[0].Paragraph_Font_Size+"></p>";
                      break;

                      case "2":
                        c_div_maker = c_div_maker + "<p class='jb_column2' style='color:"+pgflp[0].Paragraph_Font_color+"; text-align:"+pgflp[0].Paragraph_align+";line-height:"+pgflp[0].line_spacing+"'><"+pgflp[0].Paragraph_Font_Size+">"+ pgflp[pn].Paragraph_txt +"</"+pgflp[0].Paragraph_Font_Size+"></p>";
                      break;
                    }




            }
            c_div_maker = c_div_maker + "</div>";
 
    break;

    case "Heading_New":
         hnflp = flip_card_data[dtnum][contents_values_array[dtnum]];
        
        c_div_maker = c_div_maker + "<div role='main' aria-label='"+ hnflp[0].sngl_Heading +"' id='Heading_"+dtnum+"' class='col-lg-12 col-md-12 col-xs-12' style='width:100%; margin-top:"+hnflp[2].top_margin+";background-color: "+ hnflp[6].background_color +"; border-top-color:"+hnflp[7].top_line_color+"; border-top-width:"+hnflp[7].top_line_weight+"; border-top-style:"+hnflp[7].top_line_style+"; border-bottom-color:"+hnflp[9].bottom_line_color+"; border-bottom-width:"+hnflp[9].bottom_line_weight+"; border-bottom-style:"+hnflp[9].bottom_line_style+"'><"+hnflp[3].size+">";
										
											
         c_div_maker = c_div_maker + "<p style='background-color:"+hnflp[8].border_background_color+"; margin-top:"+hnflp[8].border_top_margin+"; padding:"+hnflp[8].border_padding+"; border-radius:"+hnflp[8].border_inside_radius+"; border-color:"+hnflp[8].border_inside_color+"; border-width:"+hnflp[8].border_inside_weight+"; border-style:"+hnflp[8].border_inside_style+" ; width:"+hnflp[8].border_width+"; color: "+ hnflp[5].color +"; font-weight: "+ hnflp[4].style +";text-align: "+ hnflp[1].alignment +"'>"+ hnflp[0].sngl_Heading +"</p></"+hnflp[3].size+">";

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
          c_div_maker = c_div_maker + "<div class='jb_column1'><"+ltpflp[0].paragraph_text_size+"><p style='text-align: "+ ltpflp[0].paragraph_alignment +"; color:"+ltpflp[0].paragraph_top_text_color+"'>"+ ltpflp[1].Top_Paragraphs[tpar].Paragraph_text +"</p></"+ltpflp[0].paragraph_text_size+"></div>";							
      }					
                            
      //-------<(  Paragraph Top )>-------
      
      c_div_maker = c_div_maker + "<"+ ltpflp[3].Type_of_List +" type='"+ltpflp[3].ol_type+"' style='list-style-type:"+ltpflp[3].ul_type+"'>";
    //  console.log("ltpflp[8].list_items: " + ltpflp[8].list_items);
      	
      //-------<(  List  )>-------											
      List_Text_Num = (ltpflp[8].list_items);	
      
                for(lst = 0; lst < List_Text_Num.length; lst++)
                      {
         // /* 
                        List_Text_Array[lst] = (List_Text_Num[lst].lstText);
                            //quest_char							
                                                  c_div_maker = c_div_maker + "<li class='jb_column1' style='margin-left:40px; color:"+ ltpflp[7].text_color +"; text-align: "+ ltpflp[2].align_text +";'><"+ltpflp[3].List_Text_Size+">"+ List_Text_Array[lst] +"</"+ltpflp[3].List_Text_Size+"></li>";																	
       //  */                        
                      }
                   
                                      c_div_maker = c_div_maker + "</"+ ltpflp[3].Type_of_List +">";											
      //-------<(  List  )>-------
      
      //-------<(  Paragraph Bottom )>-------											
      for(var bpar = 0; bpar < ltpflp[9].Bottom_paragraphs.length; bpar++)
                  {
                              //quest_char
                                  c_div_maker = c_div_maker + "<div class='jb_column1'><"+ltpflp[0].paragraph_text_size+"><p style='font-size:"+ltpflp[0].paragraph_text_size+";text-align: "+ ltpflp[0].paragraph_alignment +"; color:"+ltpflp[0].paragraph_bot_text_color+"'>"+ ltpflp[9].Bottom_paragraphs[bpar].Paragraph_text +"</p></"+ltpflp[0].paragraph_text_size+"></div>";							
                  }
                            
      //-------<(  Paragraph Bottom )>-------	
      
      
      //=========================================
      c_div_maker = c_div_maker + "</div> ";
      
      c_div_maker = c_div_maker + "</div></div>";
      //===================
    //  console.log("List_text_paragraph");
    /*
    c_div_maker = c_div_maker + "<div class='col-lg-12 col-md-12 col-xs-12' style=' background-color:"+ltpflp[5].background_color+"; margin-top:" + ltpflp[4].top_margin+";'>";
    c_div_maker = c_div_maker + "<p>"+ltpflp[0].List_Heading+"</p>";
    c_div_maker = c_div_maker + "</div>";
      */ 
    break;
 
    case "image_w_text":
      iwtflp = flip_card_data[dtnum][contents_values_array[dtnum]];

list_data = iwtflp[3].image_list;

   c_div_maker = c_div_maker +  "<div tabindex='0' id='IMG_WTL_flip_"+dtnum+"' class='col-lg-12 col-md-12 col-xs-12 c_jb_car_acc_wd' style='margin-top:10px; background-color:"+iwtflp[7]+"'><p class='sr-only'>Image with text component'</p>";
c_div_maker = c_div_maker + "<div style='max-width:960px;'>";

  iwt_placement(dtnum)
c_div_maker = c_div_maker + "</div>";
c_div_maker = c_div_maker + "</div>";
//================



    break;    
  }

 // @@@@@@@@@@@@@@@@@@@

//c_div_maker = c_div_maker + "</div>"; // ???

}

/*
this.addEventListener("keydown", jcck);

function jcck(e)
{
  

}

document.addEventListener('keydown', logKey);

function logKey(e)
{
    console.log("e.code: " + e.code);
}

*/



/*
function flpCrd(comp_number,crd_number,event)
{
//  if (event.type === 'click' || (event.type === 'keydown' && (event.keyCode === 13 || event.keyCode === 32))) {

    
              console.log("rf_flip was called");


              //  $("card_" + crdnm).flip();
              //$("#card-1").flip();
              $("#card_"+ comp_number +"_" + crd_number).flip();

              $("#card-fluid").flip({
                axis: 'y',
              //  trigger: 'click',
          // forceWidth: false,
          //  forceHeight: false
              }).find('.front, .back').css({
          // 'width': '100%',
          // 'height': '100%'
          });


 //    }
}
*/

/*
function flpCrd(comp_number,crd_number,event)
{
  if (event.type === 'click' || (event.type === 'keydown' && (event.keyCode === 13 || event.keyCode === 32))) {
        
        console.log("comp_number: " + comp_number + " | crd_number: " + crd_number);
    
          rf_flip(comp_number,crd_number)
     }
}
*/
function rf_flip(comp_number,crd_number,event)
{



  console.log("rf_flip was called");
  $("#card_"+ comp_number +"_" + crd_number).flip();
}

function rf_flip_org(comp_num,crdnm) //event
      {

     //   if (event.type === 'click' || (event.type === 'keydown' && (event.keyCode === 13 || event.keyCode === 32))) {
         // rf_flip(comp_number,crd_number)
     //  }

          console.log("rf_flip was called");
            //  $("card_" + crdnm).flip();
            //$("#card-1").flip();
            $("#card_"+ comp_num +"_" + crdnm).flip();

            $("#card-fluid").flip({
              axis: 'y',
            //  trigger: 'click',
        // forceWidth: false,
        //  forceHeight: false
            }).find('.front, .back').css({
        // 'width': '100%',
        // 'height': '100%'
        });
      }
 //}

function iwt_placement(iwtnum)
{


  switch(iwtflp[1].image_position)
  {
    case "left":


      c_div_maker = c_div_maker + "<div class='col-lg-6 col-md-6 col-xs-12' style='text-align:"+iwtflp[1].image_aligmnent+";'>";
      c_div_maker = c_div_maker + "<button aria-label='Select image to zoom in' class='btn_w_image' id='' onclick='FL_show_L_image(\""+String(iwtflp[0].image_name)+"\","+iwtnum+")'><img style='width:"+iwtflp[2].image_size+"' src='"+image_locale+""+iwtflp[0].image_name+"' alt=''></button>";    
          FL_alt_text_button(iwtnum);
      c_div_maker = c_div_maker + "</div>";

      c_div_maker = c_div_maker + "<div class='col-lg-6 col-md-6 col-xs-12' style='text-align:"+iwtflp[1].image_aligmnent+";'>";
      FL_text_placement();
      c_div_maker = c_div_maker + "</div>";


/*
      c_div_maker = c_div_maker + "<div class='col-lg-6 col-md-6 col-xs-12'>";
        c_div_maker = c_div_maker + "<button aria-label='Select image to zoom in' class='btn_w_image' id='' onclick='FL_show_L_image(\""+String(iwtflp[0].image_name)+"\","+iwtnum+")' ><img style='width:"+iwtflp[2].image_size+"' src='"+image_locale+""+iwtflp[0].image_name+"' alt=''></button>";  
        // FL_alt_text_button(curcmp);  
      c_div_maker = c_div_maker + "</div>";

      c_div_maker = c_div_maker + "<div class='col-lg-6 col-md-6 col-xs-12' style='text-align:"+iwtflp[1].image_aligmnent+";position:absolute; top:0'>";
      FL_text_placement();
  c_div_maker = c_div_maker + "</div>";
*/

    break;

    case "right":
      c_div_maker = c_div_maker + "<div class='col-lg-6 col-md-6 col-xs-12' style='text-align:"+iwtflp[1].image_aligmnent+";'>";
      FL_text_placement();
      c_div_maker = c_div_maker + "</div>";

      c_div_maker = c_div_maker + "<div class='col-lg-6 col-md-6 col-xs-12' style='text-align:"+iwtflp[1].image_aligmnent+";'>";
      c_div_maker = c_div_maker + "<button aria-label='Select image to zoom in' class='btn_w_image' id='' onclick='FL_show_L_image(\""+String(iwtflp[0].image_name)+"\","+iwtnum+")'><img style='width:"+iwtflp[2].image_size+"' src='"+image_locale+""+iwtflp[0].image_name+"' alt=''></button>";    
        FL_alt_text_button(iwtnum);
      c_div_maker = c_div_maker + "</div>";



    break;

    case "top":

  c_div_maker = c_div_maker + "<div class='col-lg-12 col-md-12 col-xs-12' >";
      FL_text_placement();
      c_div_maker = c_div_maker + "</div>";


    
     
      c_div_maker = c_div_maker + "<div class='col-lg-12 col-md-12 col-xs-12' style='text-align:"+iwtflp[1].image_aligmnent+";'>";
      c_div_maker = c_div_maker + "<button aria-label='Select image to zoom in' class='btn_w_image' id='' onclick='FL_show_L_image(\""+String(iwtflp[0].image_name)+"\","+iwtnum+")'><img style='width:"+iwtflp[2].image_size+"' src='"+image_locale+""+iwtflp[0].image_name+"' alt=''></button>";    
          FL_alt_text_button(iwtnum);
      c_div_maker = c_div_maker + "</div>";

    
      
    break;

    case "bottom":
      c_div_maker = c_div_maker + "<div class='col-lg-12 col-md-12 col-xs-12' style='text-align:"+iwtflp[1].image_aligmnent+";'>";
      FL_text_placement();
      c_div_maker = c_div_maker + "</div>";

      c_div_maker = c_div_maker + "<div class='col-lg-12 col-md-12 col-xs-12' style='text-align:"+iwtflp[1].image_aligmnent+";'>";
      c_div_maker = c_div_maker + "<button aria-label='Select image to zoom in' class='btn_w_image' id='' onclick='FL_show_L_image(\""+String(iwtflp[0].image_name)+"\","+iwtnum+")'><img style='width:"+iwtflp[2].image_size+"' src='"+image_locale+""+iwtflp[0].image_name+"' alt=''></button>";    
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
              // console.log(list_data[lstdta].img_lstText)


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


          c_div_maker = c_div_maker + "<div style='margin-top:10px;margin-left:"+IWT_Image_Width+"%; margin-right:"+IWT_Image_Width+"%'><button id='"+atb+"' class='btn btn-primary btn-sm' onclick='alt_tag_text(\""+String(iwtflp[0].image_w_text_tag)+"\",\""+String(iwt_btn_id)+"\")'>Image Description</button></div>"; //onclick='alt_tag_image("+atb+",0,2)'

          console.log("Make the alt tag button")
    } 
//onclick='alt_tag_text(\""+String(iwtflp[0].image_w_text_tag)+"\",\""+String(iwt_btn_id)+"\")'
}


function FL_show_L_image(cmp_img,cmp_id)
        {
           var lstImg = image_locale + cmp_img;
        //  var iwt_id = (cur_iwt_img_id);

           open_image_modal(lstImg,cmp_id)
          // open_image_modal()
           // document.getElementById("imageModal").autofocus();
            
        }



