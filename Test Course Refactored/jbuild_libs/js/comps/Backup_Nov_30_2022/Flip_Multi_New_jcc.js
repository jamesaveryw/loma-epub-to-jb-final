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
var clk_num = 0;

function Flip_Multi_New(c_flip_data_stream,c_ccnum)
{
  for(var ojk = 0; ojk < Object.keys(c_flip_data_stream[0]).length; ojk++)  // this gets the names of all of the items in the [0] part of the json file
  {
    card_setup_array[ojk] = (Object.keys(c_flip_data_stream[0]))[ojk];
  }

card_setup_array = card_setup_array.slice(2);

card_fb_settings_array[1] = card_setup_array.slice(0,11);
card_fb_settings_array[2] = card_setup_array.slice(11,22);
card_fb_settings_array[3] = card_setup_array.slice(22,33);

for(var csetdata = 1; csetdata <= 3; csetdata++)
        {
           
            for(var gcdata = 0; gcdata < card_fb_settings_array[csetdata].length; gcdata++)
                {
                   flipcard_multi_snippet_array[gcdata] = c_flip_data_stream[0][card_fb_settings_array[csetdata][gcdata]]
                }

                card_setup_all_array[csetdata] = flipcard_multi_snippet_array;
                flipcard_multi_snippet_array = [];

        }




  
  //c_div_maker = "";

/*
  c_div_maker = c_div_maker + "<div id='flip_num_"+jcc+"' class='col-lg-12 col-md-12 col-xs-12'  style='margin-top:"+flip_card_data[0].top_margin+";height:"+flip_card_data[0].flip_box_height+"'>";


  c_div_maker = c_div_maker + "</div>";
  */
}
	
/*
function Flip_Multi_New(c_flip_data_stream,c_ccnum)
{

c_div_maker = "";
for(var ojk = 0; ojk < Object.keys(c_flip_data_stream[0]).length; ojk++)  // this gets the names of all of the items in the [0] part of the json file
    {


      card_setup_array[ojk] = (Object.keys(c_flip_data_stream[0]))[ojk];

    }

card_setup_array = card_setup_array.slice(2);

card_fb_settings_array[1] = card_setup_array.slice(0,11);
card_fb_settings_array[2] = card_setup_array.slice(11,22);
card_fb_settings_array[3] = card_setup_array.slice(22,33);




for(var csetdata = 1; csetdata <= 3; csetdata++)
        {
           
            for(var gcdata = 0; gcdata < card_fb_settings_array[csetdata].length; gcdata++)
                {
                   flipcard_multi_snippet_array[gcdata] = c_flip_data_stream[0][card_fb_settings_array[csetdata][gcdata]]
                }

                card_setup_all_array[csetdata] = flipcard_multi_snippet_array;
                flipcard_multi_snippet_array = [];

        }


c_div_maker = c_div_maker + "<div class='c_jb_car_acc_wd' id='flip_num_"+c_ccnum+"' style='margin-top:"+c_flip_data_stream[0].top_margin+";height:"+c_flip_data_stream[0].flip_box_height+"; background-color:"+c_flip_data_stream[0].main_background_color+"; margin-bottom:20px;'>";  // Start Begin  

switch(c_flip_data_stream.length)
{
    case 3:
      c_card = Math.floor(c_flip_data_stream.length / 2);
      
      c_div_maker = c_div_maker + "<div class='col-lg-12 col-md-12 col-xs-12 jb_car_acc_wd' style='background-color:"+card_setup_all_array[c_card][0]+"'>";  // Card Begins
    
      
        //-------<( flip_card_data[0].card_01_header_title )>-------
        c_div_maker = c_div_maker + "<div style='height:40px;margin:auto; padding:10px;text-align:"+card_setup_all_array[c_card][5]+"'><"+card_setup_all_array[c_card][6]+" style='color:"+card_setup_all_array[c_card][3]+"'>"+card_setup_all_array[c_card][4]+"</"+card_setup_all_array[c_card][6]+"></div>";	
        //-------<( flip_card_data[0].card_01_header_title )>-------

        c_div_maker = c_div_maker + "<div id='card_"+c_ccnum+"_"+1+"' class='card' style='margin-bottom:40px;perspective: 2280px; position: relative; transform-style: preserve-3d;height:320px;width:96%'>";  

         
        c_div_maker = c_div_maker + "<div class='front alert alert-warning' role='button' onclick='clicker("+c_ccnum+",1)' style='overflow: auto; backface-visibility: hidden; transform-style: preserve-3d; position: absolute; z-index: 1; height: 100%; width: 100%; transition: all 0.5s ease-out 0s;background-color:"+card_setup_all_array[c_card][1]+";'>"; // 2	


     
            for(var crd_dta = 1; crd_dta < c_flip_data_stream.length;crd_dta++)
                  {
                      switch(crd_dta % 2)
                        {
                        //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-  
                          case 1:  // Front of card
                        //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-  



                         comp_in_flipcard_array[crd_dta] = String(Object.keys(c_flip_data_stream[crd_dta]));

                                c_div_maker = c_div_maker + "<div class='jb_car_acc_wd' style='background-color:"+card_setup_all_array[c_card][0]+"'>"; //  Begin	card front
                         



                              flip_function_name = String(Object.keys(c_flip_data_stream[crd_dta]));
                                
                              c_flip_function = window[flip_function_name];
 
                              c_flip_function(c_flip_data_stream[crd_dta][comp_in_flipcard_array[crd_dta]],crd_dta,1);  // Need to make this dynamic and work for 2 to 3 cards
                                
                                c_div_maker = c_div_maker + "</div>";

                                c_div_maker = c_div_maker + "</div>";
                          break;
                          //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-  
                          case 0:  // Back of card
                          //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-  
                          
                          comp_in_flipcard_array[crd_dta] = String(Object.keys(c_flip_data_stream[crd_dta]));        

                          c_div_maker = c_div_maker + "<div class='back alert alert-warning' style='overflow: auto; backface-visibility: hidden; transform-style: preserve-3d; position: relative; z-index: 0; height: 100%; width: 100%; transform: rotateY(-180deg); transition: all 0.5s ease-out 0s;background-color:"+card_setup_all_array[c_card][6]+"'>";
                          
                          c_div_maker = c_div_maker + "<div style='backface-visibility: hidden;'>"; // 5
                          
                          flip_function_name = String(Object.keys(c_flip_data_stream[crd_dta]));
                          c_flip_function = window[flip_function_name];
 
                          c_flip_function(c_flip_data_stream[crd_dta][comp_in_flipcard_array[crd_dta]],crd_dta,1);



                          c_div_maker = c_div_maker + "</div>";
                          break;


                        }


                  }
                            c_div_maker = c_div_maker + "</div>"; // Card Ends
                        c_div_maker = c_div_maker + "</div>";

                  c_div_maker = c_div_maker + "</div>"; // Start End                  

    break;
    
    case 5:
      c_card = Math.floor(c_flip_data_stream.length / 2);
      
for(var t_cards = 1; t_cards <= c_card; t_cards++)
                  {
                    if(t_cards === 1)
                        {


c_div_maker = c_div_maker + "<div class='col-lg-6 col-md-6 col-xs-12 c_jb_car_acc_wd' style='background-color:"+card_setup_all_array[t_cards][0]+"'>";  // Card Begins
    


       
                           //-------<( flip_card_data[0].card_01_header_title )>-------
                           c_div_maker = c_div_maker + "<div style='height:40px;margin:auto; padding:10px;text-align:"+card_setup_all_array[t_cards][5]+"'><"+card_setup_all_array[t_cards][6]+" style='color:"+card_setup_all_array[t_cards][3]+"'>"+card_setup_all_array[t_cards][4]+"</"+card_setup_all_array[t_cards][6]+"></div>";	
                           //-------<( flip_card_data[0].card_01_header_title )>-------

                           c_div_maker = c_div_maker + "<div id='card_"+c_ccnum+"_"+t_cards+"' class='card' style='margin-bottom:40px;perspective: 2280px; position: relative; transform-style: preserve-3d;height:320px;width:96%'>"; // 1 


                           c_div_maker = c_div_maker + "<div class='front alert alert-warning' role='button' onclick='clicker("+c_ccnum+","+t_cards+")' style='overflow: auto; backface-visibility: hidden; transform-style: preserve-3d; position: absolute; z-index: 1; height: 100%; width: 100%; transition: all 0.5s ease-out 0s;background-color:"+card_setup_all_array[t_cards][1]+";'>"; // 2	   


                          for(var crd_dta = 1; crd_dta <= 2;crd_dta++)
                              {// 1 === front of card :  0 === back of card

                                  switch(crd_dta % 2)
                                    {
                                      case 1:
                                        comp_in_flipcard_array[crd_dta] = String(Object.keys(c_flip_data_stream[crd_dta]));

                                               c_div_maker = c_div_maker + "<div class='jb_car_acc_wd' style='background-color:"+card_setup_all_array[c_card][0]+"'>"; //  Begin	card front
                                        
               
               
               
                                             flip_function_name = String(Object.keys(c_flip_data_stream[crd_dta]));
                                               
                                             c_flip_function = window[flip_function_name];
                
                                             c_flip_function(c_flip_data_stream[crd_dta][comp_in_flipcard_array[crd_dta]],crd_dta,1);  // Need to make this dynamic and work for 2 to 3 cards
                                               
                                               c_div_maker = c_div_maker + "</div>";
            
                                         c_div_maker = c_div_maker + "</div>";
                                      break;

                                      case 0:
                                        comp_in_flipcard_array[crd_dta] = String(Object.keys(c_flip_data_stream[crd_dta]));        

                                        c_div_maker = c_div_maker + "<div class='back alert alert-warning' style='overflow: auto; backface-visibility: hidden; transform-style: preserve-3d; position: relative; z-index: 0; height: 100%; width: 100%; transform: rotateY(-180deg); transition: all 0.5s ease-out 0s;background-color:"+card_setup_all_array[c_card][6]+"'>";
                                        
                                        c_div_maker = c_div_maker + "<div style='backface-visibility: hidden;'>"; // 5
                                        
                                        flip_function_name = String(Object.keys(c_flip_data_stream[crd_dta]));
                                        c_flip_function = window[flip_function_name];
               
                                        c_flip_function(c_flip_data_stream[crd_dta][comp_in_flipcard_array[crd_dta]],crd_dta,1);
              
              
              
                                        c_div_maker = c_div_maker + "</div>";
                                      break;
                                    }
                              }
                         
                              c_div_maker = c_div_maker + "</div>";
                              c_div_maker = c_div_maker + "</div>";
                        }


                        if(t_cards === 2)
                        {
                          c_div_maker = c_div_maker + "<div class='col-lg-6 col-md-6 col-xs-12 jb_car_acc_wd' style='background-color:"+card_setup_all_array[t_cards][0]+"'>";  // Card 2 Begins
                        //-------<( flip_card_data[0].card_01_header_title )>-------
                        c_div_maker = c_div_maker + "<div style='height:40px;margin:auto; padding:10px;text-align:"+card_setup_all_array[t_cards][5]+"'><"+card_setup_all_array[t_cards][6]+" style='color:"+card_setup_all_array[t_cards][3]+"'>"+card_setup_all_array[t_cards][4]+"</"+card_setup_all_array[t_cards][6]+"></div>";	
                        //-------<( flip_card_data[0].card_01_header_title )>-------
                        c_div_maker = c_div_maker + "<div id='card_"+c_ccnum+"_"+t_cards+"' class='card' style='margin-bottom:40px;perspective: 2280px; position: relative; transform-style: preserve-3d;height:320px;width:96%'>"; // 1 


                        c_div_maker = c_div_maker + "<div class='front alert alert-warning' role='button' onclick='clicker("+c_ccnum+","+t_cards+")' style='overflow: auto; backface-visibility: hidden; transform-style: preserve-3d; position: absolute; z-index: 1; height: 100%; width: 100%; transition: all 0.5s ease-out 0s;background-color:"+card_setup_all_array[t_cards][1]+";'>"; 
  
                        for(var crd_dta = 3; crd_dta <= 4;crd_dta++)
                        {// 1 === front of card :  0 === back of card
                        
                            switch(crd_dta % 2)
                              {
                                case 1:
                                  comp_in_flipcard_array[crd_dta] = String(Object.keys(c_flip_data_stream[crd_dta]));

                                         c_div_maker = c_div_maker + "<div class='jb_car_acc_wd' style='background-color:"+card_setup_all_array[c_card][0]+"'>"; //  Begin	card front
                                  
         
         
         
                                       flip_function_name = String(Object.keys(c_flip_data_stream[crd_dta]));
                                         
                                       c_flip_function = window[flip_function_name];
          
                                       c_flip_function(c_flip_data_stream[crd_dta][comp_in_flipcard_array[crd_dta]],crd_dta,1);  // Need to make this dynamic and work for 2 to 3 cards
                                         
                                         c_div_maker = c_div_maker + "</div>";
      
                                   c_div_maker = c_div_maker + "</div>";
                                break;

                                case 0:
                                  comp_in_flipcard_array[crd_dta] = String(Object.keys(c_flip_data_stream[crd_dta]));        

                                  c_div_maker = c_div_maker + "<div class='back alert alert-warning' style='overflow: auto; backface-visibility: hidden; transform-style: preserve-3d; position: relative; z-index: 0; height: 100%; width: 100%; transform: rotateY(-180deg); transition: all 0.5s ease-out 0s;background-color:"+card_setup_all_array[c_card][6]+"'>";
                                  
                                  c_div_maker = c_div_maker + "<div style='backface-visibility: hidden;'>"; // 5
                                  
                                  flip_function_name = String(Object.keys(c_flip_data_stream[crd_dta]));
                                  c_flip_function = window[flip_function_name];
         
                                  c_flip_function(c_flip_data_stream[crd_dta][comp_in_flipcard_array[crd_dta]],crd_dta,1);
        
        
        
                                  c_div_maker = c_div_maker + "</div>";
                                break;
                              }

                              
                        }                      

                        c_div_maker = c_div_maker + "</div>";                        
                        }
c_div_maker = c_div_maker + "</div>";

                                           
                  }

                  c_div_maker = c_div_maker + "</div>";  
    break;

    case 7:

      c_card = Math.floor(c_flip_data_stream.length / 2);
      


for(var t_cards = 1; t_cards <= c_card; t_cards++)
                  {
                    if(t_cards === 1)
                        {
                            

c_div_maker = c_div_maker + "<div class='col-lg-4 col-md-4 col-xs-12 c_jb_car_acc_wd' style='background-color:"+card_setup_all_array[t_cards][0]+"'>";  // Card Begins
    
       
                           //-------<( flip_card_data[0].card_01_header_title )>-------
                          c_div_maker = c_div_maker + "<div style='height:40px;margin:auto; padding:10px;text-align:"+card_setup_all_array[t_cards][5]+"'><"+card_setup_all_array[t_cards][6]+" style='color:"+card_setup_all_array[t_cards][3]+"'>"+card_setup_all_array[t_cards][4]+"</"+card_setup_all_array[t_cards][6]+"></div>";	
                           //-------<( flip_card_data[0].card_01_header_title )>-------

                           c_div_maker = c_div_maker + "<div id='card_"+c_ccnum+"_"+t_cards+"' class='card' style='margin-bottom:40px;perspective: 2280px; position: relative; transform-style: preserve-3d;height:320px;width:96%'>"; // 1 


                           c_div_maker = c_div_maker + "<div class='front alert alert-warning' role='button' onclick='clicker("+c_ccnum+","+t_cards+")' style='overflow: auto; backface-visibility: hidden; transform-style: preserve-3d; position: absolute; z-index: 1; height: 100%; width: 100%; transition: all 0.5s ease-out 0s;background-color:"+card_setup_all_array[t_cards][1]+";'>"; // 2	   


                          for(var crd_dta = 1; crd_dta <= 2;crd_dta++)
                              {// 1 === front of card :  0 === back of card

                                  switch(crd_dta % 2)
                                    {
                                      case 1:
                                        comp_in_flipcard_array[crd_dta] = String(Object.keys(c_flip_data_stream[crd_dta]));

                                               c_div_maker = c_div_maker + "<div class='jb_car_acc_wd' style='background-color:"+card_setup_all_array[c_card][0]+"'>"; //  Begin	card front
                                        
               
               
               
                                             flip_function_name = String(Object.keys(c_flip_data_stream[crd_dta]));
                                               
                                             c_flip_function = window[flip_function_name];
                
                                             c_flip_function(c_flip_data_stream[crd_dta][comp_in_flipcard_array[crd_dta]],crd_dta,1);  // Need to make this dynamic and work for 2 to 3 cards
                                               
                                               c_div_maker = c_div_maker + "</div>";
            
                                         c_div_maker = c_div_maker + "</div>";
                                      break;

                                      case 0:
                                        comp_in_flipcard_array[crd_dta] = String(Object.keys(c_flip_data_stream[crd_dta]));        

                                        c_div_maker = c_div_maker + "<div class='back alert alert-warning' style='overflow: auto; backface-visibility: hidden; transform-style: preserve-3d; position: relative; z-index: 0; height: 100%; width: 100%; transform: rotateY(-180deg); transition: all 0.5s ease-out 0s;background-color:"+card_setup_all_array[c_card][6]+"'>";
                                        
                                        c_div_maker = c_div_maker + "<div style='backface-visibility: hidden;'>"; // 5
                                        
                                        flip_function_name = String(Object.keys(c_flip_data_stream[crd_dta]));
                                        c_flip_function = window[flip_function_name];
               
                                        c_flip_function(c_flip_data_stream[crd_dta][comp_in_flipcard_array[crd_dta]],crd_dta,1);
              
              
              
                                        c_div_maker = c_div_maker + "</div>";
                                      break;
                                    }
                              }
                         
                              c_div_maker = c_div_maker + "</div>";
                              c_div_maker = c_div_maker + "</div>";



c_div_maker = c_div_maker + "</div>";  
                        }
                    

                    if(t_cards === 2)
                        {
                       

c_div_maker = c_div_maker + "<div class='col-lg-4 col-md-4 col-xs-12 c_jb_car_acc_wd' style='background-color:"+card_setup_all_array[t_cards][0]+"'>";  // Card Begins
    


       
                           //-------<( flip_card_data[0].card_01_header_title )>-------
                         c_div_maker = c_div_maker + "<div style='height:40px;margin:auto; padding:10px;text-align:"+card_setup_all_array[t_cards][5]+"'><"+card_setup_all_array[t_cards][6]+" style='color:"+card_setup_all_array[t_cards][3]+"'>"+card_setup_all_array[t_cards][4]+"</"+card_setup_all_array[t_cards][6]+"></div>";	
                           //-------<( flip_card_data[0].card_01_header_title )>-------
                           c_div_maker = c_div_maker + "<div id='card_"+c_ccnum+"_"+t_cards+"' class='card' style='margin-bottom:40px;perspective: 2280px; position: relative; transform-style: preserve-3d;height:320px;width:96%'>"; // 1 


                           c_div_maker = c_div_maker + "<div class='front alert alert-warning' role='button' onclick='clicker("+c_ccnum+","+t_cards+")' style='overflow: auto; backface-visibility: hidden; transform-style: preserve-3d; position: absolute; z-index: 1; height: 100%; width: 100%; transition: all 0.5s ease-out 0s;background-color:"+card_setup_all_array[t_cards][1]+";'>"; // 2	   


                          for(var crd_dta = 3; crd_dta <= 4;crd_dta++)
                              {// 1 === front of card :  0 === back of card

                                  switch(crd_dta % 2)
                                    {
                                      case 1:
                                        comp_in_flipcard_array[crd_dta] = String(Object.keys(c_flip_data_stream[crd_dta]));

                                               c_div_maker = c_div_maker + "<div class='jb_car_acc_wd' style='background-color:"+card_setup_all_array[c_card][0]+"'>"; //  Begin	card front
                                        
               
               
               
                                             flip_function_name = String(Object.keys(c_flip_data_stream[crd_dta]));
                                               
                                             c_flip_function = window[flip_function_name];
                
                                             c_flip_function(c_flip_data_stream[crd_dta][comp_in_flipcard_array[crd_dta]],crd_dta,1);  // Need to make this dynamic and work for 2 to 3 cards
                                               
                                               c_div_maker = c_div_maker + "</div>";
            
                                         c_div_maker = c_div_maker + "</div>";
                                      break;

                                      case 0:
                                        comp_in_flipcard_array[crd_dta] = String(Object.keys(c_flip_data_stream[crd_dta]));        

                                        c_div_maker = c_div_maker + "<div class='back alert alert-warning' style='overflow: auto; backface-visibility: hidden; transform-style: preserve-3d; position: relative; z-index: 0; height: 100%; width: 100%; transform: rotateY(-180deg); transition: all 0.5s ease-out 0s;background-color:"+card_setup_all_array[c_card][6]+"'>";
                                        
                                        c_div_maker = c_div_maker + "<div style='backface-visibility: hidden;'>"; // 5
                                        
                                        flip_function_name = String(Object.keys(c_flip_data_stream[crd_dta]));
                                        c_flip_function = window[flip_function_name];
               
                                        c_flip_function(c_flip_data_stream[crd_dta][comp_in_flipcard_array[crd_dta]],crd_dta,1);
              
              
              
                                        c_div_maker = c_div_maker + "</div>";
                                      break;
                                    }
                              }
                         
                              c_div_maker = c_div_maker + "</div>";
                              c_div_maker = c_div_maker + "</div>";

                           
c_div_maker = c_div_maker + "</div>";                             
                        }
                    
                    
                    if(t_cards === 3)
                        {


c_div_maker = c_div_maker + "<div class='col-lg-4 col-md-4 col-xs-12 c_jb_car_acc_wd' style='background-color:"+card_setup_all_array[t_cards][0]+"'>";  // Card Begins
    


       
                           //-------<( flip_card_data[0].card_01_header_title )>-------
                          c_div_maker = c_div_maker + "<div style='height:40px;margin:auto; padding:10px;text-align:"+card_setup_all_array[t_cards][5]+"'><"+card_setup_all_array[t_cards][6]+" style='color:"+card_setup_all_array[t_cards][3]+"'>"+card_setup_all_array[t_cards][4]+"</"+card_setup_all_array[t_cards][6]+"></div>";	
                           //-------<( flip_card_data[0].card_01_header_title )>-------

                           c_div_maker = c_div_maker + "<div id='card_"+c_ccnum+"_"+t_cards+"' class='card' style='margin-bottom:40px;perspective: 2280px; position: relative; transform-style: preserve-3d;height:320px;width:96%'>"; // 1 


                           c_div_maker = c_div_maker + "<div class='front alert alert-warning' role='button' onclick='clicker("+c_ccnum+","+t_cards+")' style='overflow: auto; backface-visibility: hidden; transform-style: preserve-3d; position: absolute; z-index: 1; height: 100%; width: 100%; transition: all 0.5s ease-out 0s;background-color:"+card_setup_all_array[t_cards][1]+";'>"; // 2	   


                          for(var crd_dta = 5; crd_dta <= 6;crd_dta++)
                              {// 1 === front of card :  0 === back of card

                                  switch(crd_dta % 2)
                                    {
                                      case 1:
                                        comp_in_flipcard_array[crd_dta] = String(Object.keys(c_flip_data_stream[crd_dta]));

                                               c_div_maker = c_div_maker + "<div class='jb_car_acc_wd' style='background-color:"+card_setup_all_array[c_card][0]+"'>"; //  Begin	card front
                                        
               
               
               
                                             flip_function_name = String(Object.keys(c_flip_data_stream[crd_dta]));
                                               
                                             c_flip_function = window[flip_function_name];
                
                                             c_flip_function(c_flip_data_stream[crd_dta][comp_in_flipcard_array[crd_dta]],crd_dta,1);  // Need to make this dynamic and work for 2 to 3 cards
                                               
                                               c_div_maker = c_div_maker + "</div>";
            
                                         c_div_maker = c_div_maker + "</div>";
                                      break;

                                      case 0:
                                        comp_in_flipcard_array[crd_dta] = String(Object.keys(c_flip_data_stream[crd_dta]));        

                                        c_div_maker = c_div_maker + "<div class='back alert alert-warning' style='overflow: auto; backface-visibility: hidden; transform-style: preserve-3d; position: relative; z-index: 0; height: 100%; width: 100%; transform: rotateY(-180deg); transition: all 0.5s ease-out 0s;background-color:"+card_setup_all_array[c_card][6]+"'>";
                                        
                                        c_div_maker = c_div_maker + "<div style='backface-visibility: hidden;'>"; // 5
                                        
                                        flip_function_name = String(Object.keys(c_flip_data_stream[crd_dta]));
                                        c_flip_function = window[flip_function_name];
               
                                        c_flip_function(c_flip_data_stream[crd_dta][comp_in_flipcard_array[crd_dta]],crd_dta,1);
              
              
              
                                        c_div_maker = c_div_maker + "</div>";
                                      break;
                                    }
                              }
                         
                              c_div_maker = c_div_maker + "</div>";
                              c_div_maker = c_div_maker + "</div>";



//c_div_maker = c_div_maker + "</div>";                           
                        }
                    }                    


                  
    break;

    
}

// Added as a test
c_div_maker = c_div_maker + "</div>";
// Added as a test


c_comp_Array[c_ccnum] = c_div_maker;
         
comp_Array_test();


}





function clicker(clknum,crdnum)
{

  $("#card_" + clknum + "_" + crdnum).flip();

	if(document.getElementById("keyModal").style.display !== 5)
		{
			$("#card_" + clknum + "_" + crdnum).flip();
		}
	
	if(document.getElementById("keyModal").style.display === 5)
		{

		}
	
}
*/