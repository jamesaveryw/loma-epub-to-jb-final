
var flip_card_data = [];
var flp_function_name;
var fcard_data = [];
var contents_array = [];
var contents_values_array = [];
var card_data = []
//var card_decor_array = [];
var card_decor_whole_array = [[],[]];
var card_01_cut = [];
var card_02_cut = [];
var card_03_cut = [];

function Flip_Multi_New(c_flip_data_stream,c_ccnum)
{
     flip_card_data = c_flip_data_stream;
    var card_decor_array = c_flip_data_stream[0]

var card_01_cut = Object.values(flip_card_data[0]).slice(2,13);
var card_02_cut = Object.values(flip_card_data[0]).slice(13,24);
var card_03_cut = Object.values(flip_card_data[0]).slice(24,35);

card_decor_whole_array[1] = card_01_cut;
card_decor_whole_array[2] = card_02_cut;
card_decor_whole_array[3] = card_03_cut;

//console.log(Object.keys(flip_card_data[0]).length)


    for(var t_card = 1; t_card < Object.values(flip_card_data).length; t_card++)
          {
 

              fcard_data[t_card] = Object.values(flip_card_data[t_card]);
 

            var comp_in_flipcard = String(Object.keys(flip_card_data[t_card]));

             contents_values_array[t_card] = comp_in_flipcard;

          }
//border-color:black;border-width:4px; border-style:solid; padding:10px
//============================================================================= col-lg-12 col-md-12 col-xs-12 
c_div_maker = "";
c_div_maker = c_div_maker + "<div class='container c_lesson_width' style='margin-top:0px;height:auto;background-color:"+flip_card_data[0].main_background_color+"'>";//start
    //class='container'


        for(var flb = 0; flb < String(Object.values(fcard_data[1][0][0]).length); flb++)
        {

          contents_array[flb] = (Object.values(fcard_data[1][0][0]))[flb];

        }
//===============================================================
console.log("Object.values(flip_card_data).length: " + Object.values(flip_card_data).length);
 //crdid       
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
                 //console.log("crdcnt: " + crdcnt);
                 //console.log(Object.keys(flip_card_data[0]).length);


//card_decor_whole_array[1]

/*
		     "card_01_background_color":"", // Leave blank for no color 
		     "card_01_front_color":"orange", // Leave blank for default beige color  
		     "card_01_back_color":"green", // Leave blank for default beige color  
			   "card_01_header_text_color":"", 
			   "card_01_header_title":"", //Modal 01 Front 
			   "card_01_header_align":"center", 
			   "card_01_header_font":"jb1", // Use: jb1 - jb6 
			   "card_01_footer_text_color":"", 
			   "card_01_footer_title":"",//select image to flip 
			   "card_01_footer_align":"center", 
			   "card_01_footer_font":"jb1", // Use: jb1 - jb6	margin-bottom: 40px
*/
cct = cct + 1  
console.log("card_decor_whole_array[cct][1]: " + card_decor_whole_array[cct][1]);

c_div_maker = c_div_maker + "<div class='col-lg-"+crdn+" col-md-"+crdn+" col-xs-12' style='max-width:120ch; line-height:1.5;background-color:"+card_decor_whole_array[cct][0]+"'>";
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=   "+card_decor_whole_array[cct][0]+"
c_div_maker = c_div_maker + "<p style='margin-top:10px;color:"+card_decor_whole_array[cct][3]+"'><"+card_decor_whole_array[cct][6]+">"+card_decor_whole_array[cct][4]+"</"+card_decor_whole_array[cct][6]+"></p>";              
       c_div_maker = c_div_maker + "<div id='card_"+c_ccnum+"_"+crdcnt+"' style='perspective: 2280px; position: relative;height:350px;'>"; 
                 
           c_div_maker = c_div_maker + "<div class='front alert alert-info' style='backface-visibility: hidden; transform-style: preserve-3d; position: absolute; z-index: 1; height: 100%; width: 100%; transition: all 0.5s ease-out 0s; transform: rotateY(0deg); background-color:"+card_decor_whole_array[cct][1]+"' onClick='javascript:rf_flip("+c_ccnum+","+crdcnt+")'>"; //c_ccnum
              
                //-------<( Add content here )>----
               // console.log("front card: " + cct)
                flip_card_contents(contents_values_array[cct],cct)
                          c_div_maker = c_div_maker + "</div>";

            c_div_maker = c_div_maker + "<div class='back well well-lg' style='backface-visibility: hidden; transform-style: preserve-3d; position: relative; z-index: 0; height: 100%; width: 100%; transform: rotateY(-180deg); transition: all 0.5s ease-out 0s;background-color:"+card_decor_whole_array[cct][2]+"'>";
                //-------<( Add content here )>----
               // cct = cct + 1 
              // console.log("back card: " + cct)
                flip_card_contents(contents_values_array[cct],cct)
                c_div_maker = c_div_maker + "</div>"; 
                
                
                
       c_div_maker = c_div_maker + "</div>";

       c_div_maker = c_div_maker + "<p style='margin-top:10px;color:"+card_decor_whole_array[cct][7]+"'><"+card_decor_whole_array[cct][10]+">"+card_decor_whole_array[cct][8]+"</"+card_decor_whole_array[cct][10]+"></p>"; 
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=        
c_div_maker = c_div_maker + "</div>";

              }




//===============================================================        
/*
switch(Object.values(flip_card_data).length)
          {
            case 3:
              c_div_maker = c_div_maker + "<div style='max-width:120ch; line-height:1.5';>";//container start   class='container'
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=               
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=              
//-------<( One Card Begin )>-------
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
c_div_maker = c_div_maker + "<div id='card_"+c_ccnum+"_"+1+"' style='perspective: 2280px; position: relative;height:350px;'>"; 
 
        c_div_maker = c_div_maker + "<div class='front alert alert-info' style='backface-visibility: hidden; transform-style: preserve-3d; position: absolute; z-index: 1; height: 100%; width: 100%; transition: all 0.5s ease-out 0s; transform: rotateY(0deg); background-color:"+flip_card_data[0].card_01_front_color+"' onClick='javascript:rf_flip("+c_ccnum+","+1+")'>"; //c_ccnum

//-------<( Add content here )>----

flip_card_contents(contents_values_array[1],1)


       //   c_div_maker = c_div_maker + card_data; 

          c_div_maker = c_div_maker + "</div>";
         
          c_div_maker = c_div_maker + "<div class='back well well-lg' style='backface-visibility: hidden; transform-style: preserve-3d; position: relative; z-index: 0; height: 100%; width: 100%; transform: rotateY(-180deg); transition: all 0.5s ease-out 0s;background-color:"+flip_card_data[0].card_01_back_color+"'>";
         
   
//-------<( Add content here )>----
flip_card_contents(contents_values_array[2],2)


//c_div_maker = c_div_maker + "</div>";
          c_div_maker = c_div_maker + "</div>";
          c_div_maker = c_div_maker + "</div>";
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
//-------<( One Card End )>-------
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
            break;

            case 5:
//-------<( Two Cards )>-------
c_div_maker = c_div_maker + "<div class='col-lg-6 col-md-6 col-xs-12' style='max-width:120ch; line-height:1.5;'>";
//class='container'

      c_div_maker = c_div_maker + "<div id='card_"+c_ccnum+"_"+1+"' class='card' style='perspective: 2280px; position: relative;height:350px; width:90%'>"; 

//=======
          c_div_maker = c_div_maker + "<div class='front alert alert-info' style='backface-visibility: hidden; transform-style: preserve-3d; position: absolute; z-index: 1; height: 100%; width: 100%; transition: all 0.5s ease-out 0s; transform: rotateY(0deg); background-color:"+flip_card_data[0].card_01_front_color+"' onClick='javascript:rf_flip("+c_ccnum+","+1+")'>";

              flip_card_contents(contents_values_array[1],1)
          c_div_maker = c_div_maker + "</div>";

      c_div_maker = c_div_maker + "<div class='back well well-lg' style='backface-visibility: hidden; transform-style: preserve-3d; position: relative; z-index: 0; height: 100%; width: 100%; transform: rotateY(-180deg); transition: all 0.5s ease-out 0s;background-color:"+flip_card_data[0].card_01_back_color+"'>";
  flip_card_contents(contents_values_array[2],2)
c_div_maker = c_div_maker + "</div>";

//=======
//c_div_maker = c_div_maker + "</div>";

c_div_maker = c_div_maker + "</div>";

c_div_maker = c_div_maker + "</div>";
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
 
c_div_maker = c_div_maker + "<div class='col-lg-6 col-md-6 col-xs-12'>";

        c_div_maker = c_div_maker + "<div id='card_"+c_ccnum+"_"+2+"' class='card' style='perspective: 2280px; position: relative;height:350px; width:90%'>"; 
//=======

c_div_maker = c_div_maker + "<div class='front alert alert-info' style='backface-visibility: hidden; transform-style: preserve-3d; position: absolute; z-index: 1; height: 100%; width: 100%; transition: all 0.5s ease-out 0s; transform: rotateY(0deg); background-color:"+flip_card_data[0].card_01_front_color+"' onClick='javascript:rf_flip("+c_ccnum+","+2+")'>";

  flip_card_contents(contents_values_array[3],3)

c_div_maker = c_div_maker + "</div>";

c_div_maker = c_div_maker + "<div class='back well well-lg' style='backface-visibility: hidden; transform-style: preserve-3d; position: relative; z-index: 0; height: 100%; width: 100%; transform: rotateY(-180deg); transition: all 0.5s ease-out 0s;background-color:"+flip_card_data[0].card_01_back_color+"'>";
  flip_card_contents(contents_values_array[4],4)
c_div_maker = c_div_maker + "</div>";

//=======  
   
c_div_maker = c_div_maker + "</div>";
c_div_maker = c_div_maker + "</div>";
//-------<( Two Cards )>------- 
            break;

            case 7:
//-------<( Three Cards )>-------
c_div_maker = c_div_maker + "<div class='col-lg-4 col-md-4 col-xs-12' style='max-width:120ch; line-height:1.5;'>";
//   class='container'

      c_div_maker = c_div_maker + "<div id='card_"+c_ccnum+"_"+1+"' class='card' style='perspective: 2280px; position: relative;height:350px; width:90%'>"; 

//=======
          c_div_maker = c_div_maker + "<div class='front alert alert-info' style='backface-visibility: hidden; transform-style: preserve-3d; position: absolute; z-index: 1; height: 100%; width: 100%; transition: all 0.5s ease-out 0s; transform: rotateY(0deg); background-color:"+flip_card_data[0].card_01_front_color+"' onClick='javascript:rf_flip("+c_ccnum+","+1+")'>";

              flip_card_contents(contents_values_array[1],1)
          c_div_maker = c_div_maker + "</div>";

      c_div_maker = c_div_maker + "<div class='back well well-lg' style='backface-visibility: hidden; transform-style: preserve-3d; position: relative; z-index: 0; height: 100%; width: 100%; transform: rotateY(-180deg); transition: all 0.5s ease-out 0s;background-color:"+flip_card_data[0].card_01_back_color+"'>";
  flip_card_contents(contents_values_array[2],2)
c_div_maker = c_div_maker + "</div>";

//=======
//c_div_maker = c_div_maker + "</div>";

c_div_maker = c_div_maker + "</div>";

c_div_maker = c_div_maker + "</div>";
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
 
c_div_maker = c_div_maker + "<div class='col-lg-4 col-md-4 col-xs-12'>";

        c_div_maker = c_div_maker + "<div id='card_"+c_ccnum+"_"+2+"' class='card' style='perspective: 2280px; position: relative;height:350px; width:90%'>"; 
//=======

c_div_maker = c_div_maker + "<div class='front alert alert-info' style='backface-visibility: hidden; transform-style: preserve-3d; position: absolute; z-index: 1; height: 100%; width: 100%; transition: all 0.5s ease-out 0s; transform: rotateY(0deg); background-color:"+flip_card_data[0].card_01_front_color+"' onClick='javascript:rf_flip("+c_ccnum+","+2+")'>";

  flip_card_contents(contents_values_array[3],3)

c_div_maker = c_div_maker + "</div>";

c_div_maker = c_div_maker + "<div class='back well well-lg' style='backface-visibility: hidden; transform-style: preserve-3d; position: relative; z-index: 0; height: 100%; width: 100%; transform: rotateY(-180deg); transition: all 0.5s ease-out 0s;background-color:"+flip_card_data[0].card_01_back_color+"'>";
  flip_card_contents(contents_values_array[4],4)
c_div_maker = c_div_maker + "</div>";

//=======  
   
c_div_maker = c_div_maker + "</div>";
c_div_maker = c_div_maker + "</div>";

//@@@@@@@@@@@@@@@@@@@@
c_div_maker = c_div_maker + "<div class='col-lg-4 col-md-4 col-xs-12'>";

        c_div_maker = c_div_maker + "<div id='card_"+c_ccnum+"_"+3+"' class='card' style='perspective: 2280px; position: relative;height:350px; width:90%'>"; 
//=======

c_div_maker = c_div_maker + "<div class='front alert alert-info' style='backface-visibility: hidden; transform-style: preserve-3d; position: absolute; z-index: 1; height: 100%; width: 100%; transition: all 0.5s ease-out 0s; transform: rotateY(0deg); background-color:"+flip_card_data[0].card_01_front_color+"' onClick='javascript:rf_flip("+c_ccnum+","+3+")'>";

  flip_card_contents(contents_values_array[5],5)

c_div_maker = c_div_maker + "</div>";

c_div_maker = c_div_maker + "<div class='back well well-lg' style='backface-visibility: hidden; transform-style: preserve-3d; position: relative; z-index: 0; height: 100%; width: 100%; transform: rotateY(-180deg); transition: all 0.5s ease-out 0s;background-color:"+flip_card_data[0].card_01_back_color+"'>";
  flip_card_contents(contents_values_array[6],6)
c_div_maker = c_div_maker + "</div>";

//=======  
   
c_div_maker = c_div_maker + "</div>";
c_div_maker = c_div_maker + "</div>";
//-------<( Three Cards )>------- 
            break;
          }
*/



 
c_div_maker = c_div_maker + "</div>";//finish

c_comp_Array[c_ccnum] = c_div_maker;
comp_Array_test();
// $("#card_" + clknum + "_" + crdnum).flip();

//=============================================================================
}

//flipcard_snip_array
function flip_card_contents(fcc,dtnum)
{
 






c_div_maker = c_div_maker + "<div style='background-color:#ffffff; height:88%'>"; //300px


switch(fcc)
  {
    case "Paragraphs_New":
 
    break;

    case "Heading_New":

            var hnflp = flip_card_data[dtnum][contents_values_array[dtnum]];


           // c_div_maker = c_div_maker + "<div style=''><h1>"+hnflp[0].sngl_Heading+"</h1></div>"; 

                

        c_div_maker = c_div_maker + "<div role='main' aria-label='"+ hnflp[0].sngl_Heading +"' id='Heading_"+dtnum+"' class='col-lg-12 col-md-12 col-xs-12' style='width:100%; margin-top:"+hnflp[2].top_margin+";background-color: "+ hnflp[6].background_color +"; border-top-color:"+hnflp[7].top_line_color+"; border-top-width:"+hnflp[7].top_line_weight+"; border-top-style:"+hnflp[7].top_line_style+"; border-bottom-color:"+hnflp[9].bottom_line_color+"; border-bottom-width:"+hnflp[9].bottom_line_weight+"; border-bottom-style:"+hnflp[9].bottom_line_style+"'><"+hnflp[3].size+">";
										
											
         c_div_maker = c_div_maker + "<p style='background-color:"+hnflp[8].border_background_color+"; margin-top:"+hnflp[8].border_top_margin+"; padding:"+hnflp[8].border_padding+"; border-radius:"+hnflp[8].border_inside_radius+"; border-color:"+hnflp[8].border_inside_color+"; border-width:"+hnflp[8].border_inside_weight+"; border-style:"+hnflp[8].border_inside_style+" ; width:"+hnflp[8].border_width+"; color: "+ hnflp[5].color +"; font-weight: "+ hnflp[4].style +";text-align: "+ hnflp[1].alignment +"'>"+ hnflp[0].sngl_Heading +"</p></"+hnflp[3].size+">";

         c_div_maker = c_div_maker + "</div>";

    break;
    
    case "List_text_paragraph":

    break;
    
    case "image_w_text":

    break;    
  }



c_div_maker = c_div_maker + "</div>";



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



