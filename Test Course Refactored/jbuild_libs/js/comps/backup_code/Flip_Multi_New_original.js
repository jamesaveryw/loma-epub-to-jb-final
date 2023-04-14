var flip_count;
var flip_card_array = [];
var c_flip_function;
var flip_function_name;
var comp_in_flipcard_array = [];
var flipcard_multi_snippet_array = [];
var card_setup_array = [];
var card_fb_settings_array = [];
var card_setup_all_array = [[],[]]
var c_card;
var clk_num;

function Flip_Multi_New(c_flip_data_stream,c_ccnum)
{

 //  alert(c_flip_data_stream[0]);

//alert((Object.keys(c_flip_data_stream[0])).length - 2 )


for(var ojk = 0; ojk < Object.keys(c_flip_data_stream[0]).length; ojk++)  // this gets the names of all of the items in the [0] part of the json file
    {
      //  alert( (Object.keys(c_flip_data_stream[0]))[ojk] )

      card_setup_array[ojk] = (Object.keys(c_flip_data_stream[0]))[ojk];

    }

card_setup_array = card_setup_array.slice(2);

card_fb_settings_array[0] = card_setup_array.slice(0,11);
card_fb_settings_array[1] = card_setup_array.slice(11,22);
card_fb_settings_array[2] = card_setup_array.slice(22,33);

//card_fb_settings_array[1] = card_setup_array.slice(11);


for(var csetdata = 0; csetdata < (c_flip_data_stream.length - 1) / 2; csetdata++)
        {
           //alert("csetdata: " + csetdata);
          // alert("card_fb_settings_array["+csetdata+"]: " + card_fb_settings_array[csetdata])
          // alert(card_fb_settings_array[csetdata].length);
           
            for(var gcdata = 0; gcdata < card_fb_settings_array[csetdata].length; gcdata++)
                {
                  
                  
                   // alert(card_fb_settings_array[csetdata][gcdata])
                  
                   //alert(c_flip_data_stream[0][card_fb_settings_array[csetdata][gcdata]])    

                   flipcard_multi_snippet_array[gcdata] = c_flip_data_stream[0][card_fb_settings_array[csetdata][gcdata]]

                    //alert("csetdata: " + csetdata + " / gcdata: " + gcdata);
                   /////// alert("card_setup_array: " + card_setup_array[gcdata])

                }

                card_setup_all_array[csetdata] = flipcard_multi_snippet_array;

               // alert("card_setup_all_array[csetdata]: " + card_setup_all_array[csetdata])


                flipcard_multi_snippet_array = [];



//c_flip_data_stream[0].card_01_background_color

        }

/*
       "card_01_background_color":"green", // Leave blank for no color
       "card_01_front_color":"0070b0", // Leave blank for default beige color 
       "card_01_back_color":"gray", // Leave blank for default beige color 
        // If header text is needed: No header will display unless "card_01_header_title" has text
           "card_01_header_text_color":"#ffffff", //000000
           "card_01_header_title":"Modal 01 Front", //Modal 01 Front
           "card_01_header_align":"center",
           "card_01_header_font":"jb1", // Use: jb1 - jb6
           //"card_01_header_background_color":"", <- Not used, keep commented out: if needed will add to future version	
        
        // If footer text is needed: No footer will display unless "card_01_footer_title" has text
           "card_01_footer_text_color":"#ffffff", //#ffffff
           "card_01_footer_title":"One select to flip",//select image to flip
           "card_01_footer_align":"center",
           "card_01_footer_font":"jb1", // Use: jb1 - jb6	
*/




//==================================
function card_faces(face_length)
{

//alert("face_data: " + face_data);

//alert(face_length + ": " + String(Object.keys(c_flip_data_stream[face_length])));


for(var cdtst = face_length; cdtst <= (face_length + 1); cdtst++)
        {
           //alert("cdtst: " + String(Object.keys(c_flip_data_stream[cdtst])));
            //alert("cdtst % 2: " + cdtst % 2);

                switch(cdtst % 2)
                    {
                        case 1:

                                    flip_function_name = String(Object.keys(c_flip_data_stream[cdtst]))

                                   c_flip_function = window[flip_function_name];

                        break;

                        case 0:
                                   // alert("Back of card");
                        break;
                    }



            // 1 is the front of the card  0 is the back

        }


}

//==================================

/*
if(typeof c_flip_data_stream[0].card_front_two_snippets !== "undefinded")
{
    flipcard_multi_snippet_array[0] = String(Object.keys(c_flip_data_stream[1]));
    flipcard_multi_snippet_array[1] = String(Object.keys(c_flip_data_stream[2]));
}

if(typeof c_flip_data_stream[0].card_back_two_snippets !== "undefinded")
{
    alert(c_flip_data_stream[0].card_back_two_snippets);

}  

*/


//alert("c_flip_data_stream[0].main_background_color: " + c_flip_data_stream[0].main_background_color);
flip_count = 0;
c_div_maker = "";


//card_setup_all_array[csetdata]

c_div_maker = c_div_maker + "<div class='c_jb_car_acc_wd' id='flip_num_"+c_ccnum+"' style='margin-top:"+c_flip_data_stream[0].top_margin+";height:"+c_flip_data_stream[0].flip_box_height+"; background-color:"+c_flip_data_stream[0].main_background_color+"; margin-bottom:20px;'>";  // Start Begin  
//====================================

//String(Object.keys(c_ac_data_stream[acc_tab_cnt]));

        
// Add the 1 2 and 3 columns here
switch(c_flip_data_stream.length)
{
    case 3:

        c_card = Math.floor(flp_length / 2);
        clk_num = (c_card + 1); 


        alert("c_card: " + c_card + " / clk_num: " + clk_num);

        c_div_maker = c_div_maker + "<div class='col-lg-12 col-md-12 col-xs-12 jb_car_acc_wd'>";  // Cards Begin
        c_div_maker = c_div_maker + "<div class='jb_car_acc_wd' style='background-color:"+c_flip_data_stream[0].card_01_background_color+"'>"; //  Begin	card front

        c_div_maker = c_div_maker + "<div class='jb_car_acc_wd' style='background-color:"+card_setup_all_array[c_card][0]+"'>"; //  Begin	card front




        //-------<( flip_card_data[0].card_01_header_title )>-------
        c_div_maker = c_div_maker + "<div style='height:40px;margin:auto; padding:10px;text-align:"+c_flip_data_stream[0].card_01_header_align+"'><"+c_flip_data_stream[0].card_01_header_font+" style='color:"+c_flip_data_stream[0].card_01_header_text_color+"'>"+c_flip_data_stream[0].card_01_header_title+"</"+c_flip_data_stream[0].card_01_header_font+"></div>";	
        //-------<( flip_card_data[0].card_01_header_title )>-------


        c_div_maker = c_div_maker + "<div id='card_"+c_ccnum+"_"+1+"' class='card' style='perspective: 2280px; position: relative; transform-style: preserve-3d;height:320px;width:96%'>"; // 1 
        

            for(var flp_length = 1; flp_length < c_flip_data_stream.length; flp_length ++)
                {
                   c_flip_function = "";
                            flip_function_name = ""; 


                    switch(flp_length % 2)
                        {
                            case 1: // Front of the card  






                        comp_in_flipcard_array[flp_length] = String(Object.keys(c_flip_data_stream[flp_length]))

                           // if(c_flip_data_stream.length === 3)
                           //     {
                                    c_div_maker = c_div_maker + "<div class='front alert alert-warning' role='button' onclick='clicker("+c_ccnum+",1)' style='overflow: auto; backface-visibility: hidden; transform-style: preserve-3d; position: absolute; z-index: 1; height: 100%; width: 100%; transition: all 0.5s ease-out 0s;background-color:"+c_flip_data_stream[0].card_01_front_color+";'>"; // 2	
                           //     }
                                



                                                                
                                flip_function_name = comp_in_flipcard_array[flp_length];
                                
                                 c_flip_function = window[flip_function_name];
            
                                c_flip_function(c_flip_data_stream[flp_length][comp_in_flipcard_array[flp_length]],flp_length,1);  // Need to make this dynamic and work for 2 to 3 cards
                                c_div_maker = c_div_maker + "</div>";
  
                            break;

                            case 0: // Back of the card



                           
                                comp_in_flipcard_array[flp_length] = String(Object.keys(c_flip_data_stream[flp_length]))        
                               // alert("comp_in_flipcard_array[" + flp_length + "]: " + comp_in_flipcard_array[flp_length])    
                            //if(c_flip_data_stream.length === 3)
                            //   {
                                    c_div_maker = c_div_maker + "<div class='back alert alert-warning' style='overflow: auto; backface-visibility: hidden; transform-style: preserve-3d; position: relative; z-index: 0; height: 100%; width: 100%; transform: rotateY(-180deg); transition: all 0.5s ease-out 0s;background-color:"+c_flip_data_stream[0].card_01_back_color+"'>"; // 4
                            //   }
                                    
                                c_div_maker = c_div_maker + "<div style='backface-visibility: hidden;'>"; // 5

                                flip_function_name = comp_in_flipcard_array[flp_length];
                                
                                 c_flip_function = window[flip_function_name];
            
                                c_flip_function(c_flip_data_stream[flp_length][comp_in_flipcard_array[flp_length]],flp_length,1);  // Need to make this dynamic and work for 2 to 3 cards
                                c_div_maker = c_div_maker + "</div>";
                      
                            break;
                        }

                }


        
//------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------               

            c_div_maker = c_div_maker + "</div>";
       c_div_maker = c_div_maker + "</div>"; // End card front

//-------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------
    if(c_flip_data_stream[0].card_01_footer_title.length > 0)
    {
      c_div_maker = c_div_maker + "<div style='height:40px; color:"+c_flip_data_stream[0].card_01_footer_text_color+";z-index:1000'>"+c_flip_data_stream[0].card_01_footer_title+"</div>";	
    }  
//-------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------

    c_div_maker = c_div_maker + "</div>"; // Cards End
//====================================        
    break;

    case 5:

        //alert("card_setup_all_array[0][0]: " + card_setup_all_array[0][0]);

       // alert("card_fb_settings_array[0]: " + card_fb_settings_array[0]);
        for(var flp_length = 1; flp_length < c_flip_data_stream.length; flp_length ++)
        {

            switch(flp_length % 2)
            {
               
                case 1: // Front of the card  
                //alert("flp_length: " + flp_length);
               // alert("flp_length % 2: " + flp_length % 2 + " / flp_length: " + flp_length);

              //alert(Math.floor(flp_length / 2));
                c_card = Math.floor(flp_length / 2);
                clk_num = (c_card + 1);
                // Math.floor(1.5);

                c_div_maker = c_div_maker + "<div class='col-lg-6 col-md-6 col-xs-12 jb_car_acc_wd'>";
                /*<>-------<>*/   c_div_maker = c_div_maker + "<div class='jb_car_acc_wd' style='background-color:"+card_setup_all_array[c_card][0]+"'>"; //  Begin	card front

//-------<( flip_card_data[0].card_01_header_title )>-------
c_div_maker = c_div_maker + "<div style='height:40px;margin:auto; padding:10px;text-align:"+card_setup_all_array[c_card][5]+"'><"+card_setup_all_array[c_card][6]+" style='color:"+card_setup_all_array[c_card][3]+"'>"+card_setup_all_array[c_card][4]+"</"+card_setup_all_array[c_card][6]+"></div>";	
//-------<( flip_card_data[0].card_01_header_title )>-------

c_div_maker = c_div_maker + "<div id='card_"+c_ccnum+"_"+clk_num+"' class='card' style='perspective: 2280px; position: relative; transform-style: preserve-3d;height:320px;width:96%'>"; // 1 begin

                        comp_in_flipcard_array[flp_length] = String(Object.keys(c_flip_data_stream[flp_length]))
                        flip_function_name = comp_in_flipcard_array[flp_length];
                       // alert("1 flip_function_name: " + flip_function_name);


c_div_maker = c_div_maker + "<div class='front alert alert-warning' role='button' onclick='clicker("+c_ccnum+","+clk_num+")' style='overflow: auto; backface-visibility: hidden; transform-style: preserve-3d; position: absolute; z-index: 1; height: 100%; width: 100%; transition: all 0.5s ease-out 0s;background-color:"+card_setup_all_array[c_card][1]+";'>"; // 2	                       
 



c_div_maker = c_div_maker + "</div>";
                       //alert("flp_length: " + flp_length);
                       c_div_maker = c_div_maker + "</div>";
                       c_div_maker = c_div_maker + "</div>";

                c_div_maker = c_div_maker + "</div>";        
                
                        
                break;
  
                



                case 0:
//c_div_maker = c_div_maker + "<div class='back alert alert-warning' style='overflow: auto; backface-visibility: hidden; transform-style: preserve-3d; position: relative; z-index: 0; height: 100%; width: 100%; transform: rotateY(-180deg); transition: all 0.5s ease-out 0s;background-color:"+card_setup_all_array[c_card][2]+";'>"; // 2	  


//c_div_maker = c_div_maker + "</div>";
                //        comp_in_flipcard_array[flp_length] = String(Object.keys(c_flip_data_stream[flp_length]))
                //        flip_function_name = comp_in_flipcard_array[flp_length];
                       // alert("0 flip_function_name: " + flip_function_name);
                break;
            
            }


        }


        if(card_setup_all_array[c_card][8].length > 0)
        {
          c_div_maker = c_div_maker + "<div style='height:40px; color:"+card_setup_all_array[c_card][7]+";z-index:1000'>"+card_setup_all_array[c_card][8]+"</div>";	
        }  



c_div_maker = c_div_maker + "</div>"; // Cards End



























 /*           
        c_div_maker = c_div_maker + "<div class='col-lg-6 col-md-6 col-xs-12 jb_car_acc_wd'>";  // Cards Begin
                c_div_maker = c_div_maker + "<div class='jb_car_acc_wd' style='background-color:"+c_flip_data_stream[0].card_02_background_color+"'>"; //  Begin	card front

//-------<( flip_card_data[0].card_01_header_title )>-------
c_div_maker = c_div_maker + "<div style='height:40px;margin:auto; padding:10px;text-align:"+c_flip_data_stream[0].card_02_header_align+"'><"+c_flip_data_stream[0].card_02_header_font+" style='color:"+c_flip_data_stream[0].card_02_header_text_color+"'>"+c_flip_data_stream[0].card_02_header_title+"</"+c_flip_data_stream[0].card_02_header_font+"></div>";	
//-------<( flip_card_data[0].card_01_header_title )>-------                
   
        c_div_maker = c_div_maker + "<div id='card_"+c_ccnum+"_"+2+"' class='card' style='perspective: 2280px; position: relative; transform-style: preserve-3d;height:320px;width:96%'>"; // 1 begin

                          //// card_faces(3);

        c_div_maker = c_div_maker + "</div>"; // 1 end        

                c_div_maker = c_div_maker + "</div>"; // Card front End  
                
              
            c_div_maker = c_div_maker + "</div>"; // Cards End
*/         




    break;

    case 7:
       // c_div_maker = c_div_maker + "<div class='col-lg-4 col-md-4 col-xs-12 jb_car_acc_wd'>";  // Cards Begin
    break;
}
           
 


        c_div_maker = c_div_maker + "</div>"; // Start End

c_comp_Array[c_ccnum] = c_div_maker;
            
comp_Array_test();

}







function clicker(clknum,crdnum)
{

  //alert("#card_" + clknum + "_" + crdnum);


  //$("#card_" + clknum + "_" + crdnum).css("visibility", "hidden");

  $("#card_" + clknum + "_" + crdnum).flip();

//document.getElementById("card_" + clknum + "_" + crdnum).style.visibility = "hidden";

   
//alert("card_" + clknum + "_" + crdnum);

 // $("#card_" + clknum + "_" + crdnum).flip();

//alert(document.getElementById("keyModal").style.display.length);	
// /*	
	if(document.getElementById("keyModal").style.display !== 5)
		{
			$("#card_" + clknum + "_" + crdnum).flip();
		}
	
	if(document.getElementById("keyModal").style.display === 5)
		{

		}
// */
	
}
