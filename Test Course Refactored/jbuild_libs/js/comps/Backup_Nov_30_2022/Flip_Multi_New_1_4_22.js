var flip_count;
var flip_card_array = [];
//var c_flip_function;
var flip_function_name;
var comp_in_flipcard_array = [];
var flipcard_multi_snippet_array = [];
var card_setup_array = [];
var card_set_val = [];
var card_fb_settings_array = [];
var card_setup_all_array = [[],[]]
var c_card;
var clk_num = 0;

function Flip_Multi_New(c_flip_data_stream,c_ccnum)
{
    card_setup_array = Object.values(c_flip_data_stream[0]);
    card_set_val = card_setup_array.slice(2);
//Global Settings
    card_fb_settings_array[0] = card_setup_array.slice(0,2);
//Global Settings

//Cards Setup
    card_fb_settings_array[1] = card_set_val.slice(0,11);
    card_fb_settings_array[2] = card_set_val.slice(11,22);
    card_fb_settings_array[3] = card_set_val.slice(22,33);
//Cards Setup
    for(let csfa = 1; csfa < card_fb_settings_array.length; csfa++)
        {

        }
        c_div_maker = "";
        c_div_maker = c_div_maker + "<div class='col-lg-12 col-md-12 col-xs-12' id='flip_num_"+c_ccnum+"' style='margin-top:"+card_fb_settings_array[0][1]+";height:350px; background-color:"+card_fb_settings_array[0][0]+"; margin-bottom:20px;'>";  // Start Begin 
        
       // card_construct(Math.floor(c_flip_data_stream.length / 2));


            switch(Math.floor(c_flip_data_stream.length / 2))
                {
                    case 1:

                    /*
                        c_div_maker = c_div_maker + "<div class='col-lg-12 col-md-12 col-xs-12' id='flip_num_1_"+c_ccnum+"'>";  
                            c_div_maker = c_div_maker + "<div style='background-color:red; height:350px;width:33%'>";
                                // Place the component
                            c_div_maker = c_div_maker + "</div>";
                        c_div_maker = c_div_maker + "</div>";
                    */
                    break;

                    case 2:
                        c_div_maker = c_div_maker + "<div class='col-lg-12 col-md-12 col-xs-12'>";
                        c_div_maker = c_div_maker + "<div class='col-lg-6 col-md-6 col-xs-6' id='flip_num_1_"+c_ccnum+"'>";
                            c_div_maker = c_div_maker + "<div style='background-color:green; height:350px;width:50%'>";
                                // Place the component
                            c_div_maker = c_div_maker + "</div>";
                        c_div_maker = c_div_maker + "</div>";

                        c_div_maker = c_div_maker + "<div class='col-lg-6 col-md-6 col-xs-6' id='flip_num_2_"+c_ccnum+"'>";
                            c_div_maker = c_div_maker + "<div style='background-color:orange; height:350px;width:50%'>";
                                // Place the component 
                            c_div_maker = c_div_maker + "</div>";
                        c_div_maker = c_div_maker + "</div>";
                        
                        c_div_maker = c_div_maker + "</div>";
                    break;

                    case 3:

                        c_div_maker = c_div_maker + "<div class='col-lg-12 col-md-12 col-xs-12'>";

                        c_div_maker = c_div_maker + "<div class='col-lg-3 col-md-3 col-xs-3' id='flip_num_1_"+c_ccnum+"'>";
                            c_div_maker = c_div_maker + "<div style='text-align:center; background-color:white; height:350px;width:100%'>";
                                // Place the component
                            c_div_maker = c_div_maker + "</div>";
                        c_div_maker = c_div_maker + "</div>";

                        c_div_maker = c_div_maker + "<div class='col-lg-3 col-md-3 col-xs-3' id='flip_num_2_"+c_ccnum+"'>";
                            c_div_maker = c_div_maker + "<div style='text-align:center; background-color:gray; height:350px;width:100%'>";
                                // Place the component 
                            c_div_maker = c_div_maker + "</div>";
                        c_div_maker = c_div_maker + "</div>"; 

                        c_div_maker = c_div_maker + "<div class='col-lg-3 col-md-3 col-xs-3' id='flip_num_3_"+c_ccnum+"'>";
                            c_div_maker = c_div_maker + "<div style='text-align:center; background-color:magenta; height:350px;width:100%'>";
                                // Place the component 
                            c_div_maker = c_div_maker + "</div>";
                        c_div_maker = c_div_maker + "</div>";   
                        
                        c_div_maker = c_div_maker + "</div>";
                    break;
                }


        c_div_maker = c_div_maker + "</div>"; // Start End
        c_comp_Array[c_ccnum] = c_div_maker;
        comp_Array_test();
        


/*        
      console.log("--------------------------------------------------------------------");
      //console.log("card_set_val: " + card_set_val);
      console.log("card_fb_settings_array[0]: " + card_fb_settings_array[0]);
      console.log("--------------------------------------------------------------------");
      console.log("card_fb_settings_array[1]: " + card_fb_settings_array[1]);
      console.log("--------------------------------------------------------------------");
      console.log("card_fb_settings_array[2]: " + card_fb_settings_array[2]);
      console.log("--------------------------------------------------------------------");
      console.log("card_fb_settings_array[3]: " + card_fb_settings_array[3]);
*/  

function card_construct(cct)
{
    
    switch(cct)
        {
            case 1:
                c_div_maker = c_div_maker + "<div class='col-lg-12 col-md-12 col-xs-12' id='flip_num_1_"+c_ccnum+"'>";  
                    c_div_maker = c_div_maker + "<div style='background-color:red; height:350px;width:33%'>";
                        // Place the component
                    c_div_maker = c_div_maker + "</div>";
                c_div_maker = c_div_maker + "</div>";
            break;

            case 2:
                c_div_maker = c_div_maker + "<div class='col-lg-6 col-md-6 col-xs-6' id='flip_num_1_"+c_ccnum+"'>";
                    c_div_maker = c_div_maker + "<div style='background-color:green; height:350px;width:50%'>";
                        // Place the component
                    c_div_maker = c_div_maker + "</div>";
                c_div_maker = c_div_maker + "</div>";

                c_div_maker = c_div_maker + "<div class='col-lg-6 col-md-6 col-xs-6' id='flip_num_2_"+c_ccnum+"'>";
                    c_div_maker = c_div_maker + "<div style='background-color:orange; height:350px;width:50%'>";
                        // Place the component 
                    c_div_maker = c_div_maker + "</div>";
                c_div_maker = c_div_maker + "</div>";                
            break;

            case 3:
                c_div_maker = c_div_maker + "<div class='col-lg-3 col-md-3 col-xs-3' id='flip_num_1_"+c_ccnum+"'>";
                    c_div_maker = c_div_maker + "<div style='text-align:center; background-color:white; height:350px;width:100%'>";
                        // Place the component
                    c_div_maker = c_div_maker + "</div>";
                c_div_maker = c_div_maker + "</div>";

                c_div_maker = c_div_maker + "<div class='col-lg-3 col-md-3 col-xs-3' id='flip_num_2_"+c_ccnum+"'>";
                    c_div_maker = c_div_maker + "<div style='text-align:center; background-color:gray; height:350px;width:100%'>";
                        // Place the component 
                    c_div_maker = c_div_maker + "</div>";
                c_div_maker = c_div_maker + "</div>"; 

                c_div_maker = c_div_maker + "<div class='col-lg-3 col-md-3 col-xs-3' id='flip_num_3_"+c_ccnum+"'>";
                    c_div_maker = c_div_maker + "<div style='text-align:center; background-color:magenta; height:350px;width:100%'>";
                        // Place the component 
                    c_div_maker = c_div_maker + "</div>";
                c_div_maker = c_div_maker + "</div>";                 
            break;
        }




}


}








function Flip_Multi_New_orig(c_flip_data_stream,c_ccnum)
{




c_div_maker = "";
//console.log("--------------------------------------------------------------------");


for(var ojk = 0; ojk < Object.keys(c_flip_data_stream[0]).length; ojk++)  // this gets the names of all of the items in the [0] part of the json file
    {


      card_setup_array[ojk] = (Object.keys(c_flip_data_stream[0]))[ojk];
 
      //console.log("card_setup_array["+ojk+"]: " + card_setup_array[ojk]);


    }
//console.log("--------------------------------------------------------------------");    

//console.log("card_setup_array["+0+"]: " + card_setup_array[0]);
//console.log("c_flip_data_stream[0].main_background_color: " + c_flip_data_stream[0].main_background_color);

card_setup_array = card_setup_array.slice(2);

card_fb_settings_array[1] = card_setup_array.slice(0,11);
card_fb_settings_array[2] = card_setup_array.slice(11,22);
card_fb_settings_array[3] = card_setup_array.slice(22,33);

//console.log("card_fb_settings_array length: " + card_fb_settings_array.length)

// /*
//console.log("--------------------------------------------------------------------");

//console.log("card_01_background_color: " + c_flip_data_stream[0][card_fb_settings_array[1][0]]) //.card_fb_settings_array[1][0])



for(let crdlgth = 1; crdlgth < card_fb_settings_array.length; crdlgth++)
    {
     // console.log("--------------------------------------------------------------------");
      for(let crdstp = 0; crdstp < card_fb_settings_array[crdlgth].length; crdstp++)
          {
           // console.log(c_flip_data_stream[0][card_fb_settings_array[crdlgth][crdstp]]);
          }
     // console.log("--------------------------------------------------------------------");
    }





// */
/*
for(var csetdata = 1; csetdata <= 3; csetdata++)
        {
           
            for(var gcdata = 0; gcdata < card_fb_settings_array[csetdata].length; gcdata++)
                {
                   flipcard_multi_snippet_array[gcdata] = c_flip_data_stream[0][card_fb_settings_array[csetdata][gcdata]]
                }

                card_setup_all_array[csetdata] = flipcard_multi_snippet_array;
                flipcard_multi_snippet_array = [];

        }
*/


//c_div_maker = c_div_maker + "<div class='c_jb_car_acc_wd' id='flip_num_"+c_ccnum+"' style='margin-top:"+c_flip_data_stream[0].top_margin+";height:350px; background-color:"+c_flip_data_stream[0].main_background_color+"; margin-bottom:20px;'>";  // Start Begin 

// /* class='col-lg-12 col-md-12 col-xs-12'

c_div_maker = c_div_maker + "<div class='col-lg-12 col-md-12 col-xs-12' id='flip_num_"+c_ccnum+"' style='margin-top:"+c_flip_data_stream[0].top_margin+";height:350px; background-color:"+c_flip_data_stream[0].main_background_color+"; margin-bottom:20px;'>";  // Start Begin 

//c_card = Math.floor(c_flip_data_stream.length / 2);
console.log("c_flip_data_stream.length: " + Math.floor(c_flip_data_stream.length / 2)) // 3 5 7

/*
array.filter(value => value % 2 === 0);
*/






c_div_maker = c_div_maker + "</div>"; // Start End
// */
c_comp_Array[c_ccnum] = c_div_maker;
         
comp_Array_test();


	
}
