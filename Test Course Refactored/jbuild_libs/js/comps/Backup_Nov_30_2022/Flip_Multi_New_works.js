var flip_card_data = [];
var flp_function_name;
var fcard_data = [];
var contents_array = [];
var contents_values_array = [];
var card_data = []
//var card_decor_array = [];

var comp_in_flipcard;

var hnflp = [];
var pgflp = [];
var card_decor_whole_array = [[],[]];
//// var fbcards;
var fbcrd_array = [];
var card_01_cut = [];
var card_02_cut = [];
var card_03_cut = [];
var cctnmbr;


function Flip_Multi_New(c_flip_data_stream,c_ccnum)
{
  c_div_maker = "";	
     flip_card_data = c_flip_data_stream;
    var card_decor_array = c_flip_data_stream[0]


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
            fcard_data[t_card]


              switch(contents_values_array[t_card])
                {
                  case "Paragraphs_New":
                  //  console.log("================================");
                  //  console.log("Paragraphs_New");
                  //  console.log("contents_values_array["+t_card+"]: " + contents_values_array[t_card]);
                  //  console.log("fcard_data["+t_card+"]: " + fcard_data[t_card]);
                 //   console.log("================================");

     /*
            hnflp = flip_card_data[dtnum][contents_values_array[dtnum]];
          //  console.log("hnflp: " + Object.values(hnflp).length);

           // c_div_maker = c_div_maker + "<div style=''><h1>"+hnflp[0].sngl_Heading+"</h1></div>"; 

                

        c_div_maker = c_div_maker + "<div role='main' aria-label='"+ hnflp[0].sngl_Heading +"' id='Heading_"+dtnum+"' class='col-lg-12 col-md-12 col-xs-12' style='width:100%; margin-top:"+hnflp[2].top_margin+";background-color: "+ hnflp[6].background_color +"; border-top-color:"+hnflp[7].top_line_color+"; border-top-width:"+hnflp[7].top_line_weight+"; border-top-style:"+hnflp[7].top_line_style+"; border-bottom-color:"+hnflp[9].bottom_line_color+"; border-bottom-width:"+hnflp[9].bottom_line_weight+"; border-bottom-style:"+hnflp[9].bottom_line_style+"'><"+hnflp[3].size+">";
										
											
         c_div_maker = c_div_maker + "<p style='background-color:"+hnflp[8].border_background_color+"; margin-top:"+hnflp[8].border_top_margin+"; padding:"+hnflp[8].border_padding+"; border-radius:"+hnflp[8].border_inside_radius+"; border-color:"+hnflp[8].border_inside_color+"; border-width:"+hnflp[8].border_inside_weight+"; border-style:"+hnflp[8].border_inside_style+" ; width:"+hnflp[8].border_width+"; color: "+ hnflp[5].color +"; font-weight: "+ hnflp[4].style +";text-align: "+ hnflp[1].alignment +"'>"+ hnflp[0].sngl_Heading +"</p></"+hnflp[3].size+">";

         c_div_maker = c_div_maker + "</div>";
*/



                  break;

                  case "Heading_New":
                 //   console.log("================================");
                 //   console.log("Heading_New");
                 //   console.log("contents_values_array["+t_card+"]: " + contents_values_array[t_card]);
                 //   console.log("fcard_data["+t_card+"]: " + fcard_data[t_card]);
                 //   console.log("================================");
                  break;

                  case "List_text_paragraph":
                 //   console.log("================================");
                 //   console.log("List_text_paragraph");
                 //   console.log("contents_values_array["+t_card+"]: " + contents_values_array[t_card]);
                 //   console.log("fcard_data["+t_card+"]: " + fcard_data[t_card]);
                 //   console.log("================================");
                  break;

                  case "image_w_text":
                  //  console.log("================================");
                  //  console.log("image_w_text");
                  //  console.log("contents_values_array["+t_card+"]: " + contents_values_array[t_card]);
                  //  console.log("fcard_data["+t_card+"]: " + fcard_data[t_card]);
                  //  console.log("================================");
                  break;
                }

          }

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
c_div_maker = "";
c_div_maker = c_div_maker + "<div class='container c_lesson_width' style='margin-top:20px;height:auto;background-color:"+flip_card_data[0].main_background_color+"'>";//start


        for(var flb = 0; flb < String(Object.values(fcard_data[1][0][0]).length); flb++)
        {

          contents_array[flb] = (Object.values(fcard_data[1][0][0]))[flb];

        }
      
//===============================================================
          switch(Object.values(flip_card_data).length)
              {
                 case 3:
                          crdn = 12;
                          cctnmbr = 1;
                 break;

                 case 5:
                          crdn = 6;
                          cctnmbr = 2;
                 break

                 case 7:
                          crdn = 4;
                          cctnmbr = 3;
                 break;
              }

var cct = 0;

 

for(var crdcnt = 1; crdcnt <= cctnmbr; crdcnt++)
              {

cct = cct + 1  

switch(cct)
    {
      case 1:
          fbcrd_array = [1,2];
      break;

      case 2:
        fbcrd_array = [3,4];
      break;

      case 3:
        fbcrd_array = [5,6];
      break;
    }

   

c_div_maker = c_div_maker + "<div class='col-lg-"+crdn+" col-md-"+crdn+" col-xs-12' style='max-width:120ch; line-height:1.5;height:375px;background-color:"+card_decor_whole_array[cct][0]+"'>";
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=   "+card_decor_whole_array[cct][0]+"
c_div_maker = c_div_maker + "<p style='margin-top:10px;color:"+card_decor_whole_array[cct][3]+";text-align:"+card_decor_whole_array[cct][5]+"'><"+card_decor_whole_array[cct][6]+">"+card_decor_whole_array[cct][4]+"</"+card_decor_whole_array[cct][6]+"></p>";              
       c_div_maker = c_div_maker + "<div id='card_"+c_ccnum+"_"+crdcnt+"' style='perspective: 2280px; position: relative;height:350px;'>"; 
                 
           c_div_maker = c_div_maker + "<div class='front alert alert-info' style='overflow-y:auto; backface-visibility: hidden; transform-style: preserve-3d; position: absolute; z-index: 1; height: 100%; width: 100%; transition: all 0.5s ease-out 0s; transform: rotateY(0deg); background-color:"+card_decor_whole_array[cct][1]+"' onClick='javascript:rf_flip("+c_ccnum+","+crdcnt+")'>"; //c_ccnum
              
        //-------<( Add content here )>----
        
          flip_card_contents(contents_values_array[cct],fbcrd_array[0])
              cct = cct + 1
                          c_div_maker = c_div_maker + "</div>";

            c_div_maker = c_div_maker + "<div class='back well well-lg' style='overflow-y:auto; backface-visibility: hidden; transform-style: preserve-3d; position: relative; z-index: 0; height: 100%; width: 100%; transform: rotateY(-180deg); transition: all 0.5s ease-out 0s;background-color:"+card_decor_whole_array[cct][2]+"'>";
        //-------<( Add content here )>----
        
        
         flip_card_contents(contents_values_array[cct],fbcrd_array[1])
            cct = cct + 1
                c_div_maker = c_div_maker + "</div>"; 
                
                
                
       c_div_maker = c_div_maker + "</div>";

       c_div_maker = c_div_maker + "<p style='margin-top:10px;color:"+card_decor_whole_array[cct][7]+";text-align:"+card_decor_whole_array[cct][9]+"'><"+card_decor_whole_array[cct][10]+">"+card_decor_whole_array[cct][8]+"</"+card_decor_whole_array[cct][10]+"></p>"; 
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=        
c_div_maker = c_div_maker + "</div>";

              }

c_div_maker = c_div_maker + "</div>";//finish

c_comp_Array[c_ccnum] = c_div_maker;
comp_Array_test();
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
}

function flip_card_contents(fcc,dtnum)
{
 
  console.log("fcc: " + fcc + " / dtnum: " + dtnum);

//console.log(flip_card_data[dtnum][contents_values_array[dtnum]])


///////c_div_maker = c_div_maker + "<div style='background-color:#ffffff; height:88%'>"; //300px


switch(fcc)
  {
    case "Paragraphs_New":
      pgflp = flip_card_data[dtnum][contents_values_array[dtnum]];
    //  console.log(Object.values(pgflp))

    //  console.log(pgflp.length)


     // c_div_maker = c_div_maker + "<div>Paragraph New</div>";

//Paragraph_txt

console.log("Paragraph_new");


            c_div_maker = c_div_maker + "<div class='col-lg-12 col-md-12 col-xs-12' style='height:auto; padding: 0px 20px; background-color:"+pgflp[0].background_color+"; border-top-color:"+pgflp[0].border_color+"; border-top-width:"+pgflp[0].border_weight+"; border-top-style:"+pgflp[0].border_style+"; border-bottom-color:"+pgflp[0].border_color+"; border-bottom-width:"+pgflp[0].border_weight+"; border-bottom-style:"+pgflp[0].border_style+"; border-radius:"+pgflp[0].border_radius+"; margin-top:"+pgflp[0].top_margin+";'>"; 

            for(var pn = 1; pn < pgflp.length; pn++)
            {
               // console.log(pn)
               // console.log(pgflp[pn].Paragraph_txt);
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

 
    break;

    case "Heading_New":
      //console.log("Heading_New");
   ////   hnflp = flip_card_data[dtnum][contents_values_array[dtnum]];
         hnflp = flip_card_data[dtnum][contents_values_array[dtnum]];
        // c_div_maker = c_div_maker + "<div>Heading New</div>";     

        
        c_div_maker = c_div_maker + "<div role='main' aria-label='"+ hnflp[0].sngl_Heading +"' id='Heading_"+dtnum+"' class='col-lg-12 col-md-12 col-xs-12' style='width:100%; margin-top:"+hnflp[2].top_margin+";background-color: "+ hnflp[6].background_color +"; border-top-color:"+hnflp[7].top_line_color+"; border-top-width:"+hnflp[7].top_line_weight+"; border-top-style:"+hnflp[7].top_line_style+"; border-bottom-color:"+hnflp[9].bottom_line_color+"; border-bottom-width:"+hnflp[9].bottom_line_weight+"; border-bottom-style:"+hnflp[9].bottom_line_style+"'><"+hnflp[3].size+">";
										
											
         c_div_maker = c_div_maker + "<p style='background-color:"+hnflp[8].border_background_color+"; margin-top:"+hnflp[8].border_top_margin+"; padding:"+hnflp[8].border_padding+"; border-radius:"+hnflp[8].border_inside_radius+"; border-color:"+hnflp[8].border_inside_color+"; border-width:"+hnflp[8].border_inside_weight+"; border-style:"+hnflp[8].border_inside_style+" ; width:"+hnflp[8].border_width+"; color: "+ hnflp[5].color +"; font-weight: "+ hnflp[4].style +";text-align: "+ hnflp[1].alignment +"'>"+ hnflp[0].sngl_Heading +"</p></"+hnflp[3].size+">";

         c_div_maker = c_div_maker + "</div>";


    break;
    
    case "List_text_paragraph":
    //  console.log("List_text_paragraph");
    c_div_maker = c_div_maker + "<div>List_text_paragraph</div>";
    break;
    
    case "image_w_text":
    //  console.log("image_w_text");
    c_div_maker = c_div_maker + "<div>List_text_paragraph</div>";
    break;    
  }



//c_div_maker = c_div_maker + "</div>"; // ???

}

/*
function card_builder(cntbld)
{
    var tbld = (cntbld);

    for(var bd = 0; bd < tbld; bd++)
      {
        //console.log("bd: " + bd);
      }
}
*/


function rf_flip(comp_num,crdnm)
{
       // alert(comp_num + " | "+ crdnm);

     // document.getElementById("card-" + crdnm).style.display = "none";
     
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
