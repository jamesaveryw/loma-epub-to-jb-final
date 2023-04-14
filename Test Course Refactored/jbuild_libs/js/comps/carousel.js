var car_data_xapi = [];
var car_config_array = [];
var car_slide_array = [];
var car_slides_data = [];
var car_final_array = [[],[]];
var car_slide_pop = [];
var car_sld_array = [];
var car_color_array = [];
var car_array = [];

//back_color
//Text_Color

                                  //console.log("0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0");
                                  //console.log("car_config_array: " + car_data[0].back_color);

                                 // console.log("car_slide_pop: " + car_slide_pop[sld_data].Text_Color);
                                  //console.log("0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0");


function Carousel(car_data,c_ccnum)
{
  car_array = car_data;
  //console.log("0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0");
  //console.log("car_data[0].back_color: " + car_data[0].back_color);

    for(var bctc = 1; bctc < car_data.length; bctc++)
      {
        car_color_array[bctc] = car_data[bctc].Slide.Text_Color;
        //console.log("bctc: " + car_data[bctc].Slide.Text_Color);
      }

      //console.log("car_color_array: " + car_color_array);
  //console.log("0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0"); 
  car_data_xapi[c_ccnum] = car_data;
  for(var cca = 0; cca < Object.keys(car_data[0]).length ;cca++)
  {
      car_config_array[cca] = car_data[0][Object.keys(car_data[0])[cca]];
  }

  car_sld_array = Object.keys( car_data[1][Object.keys(car_data[1])])

  car_slides_data = car_sld_array[0].split(',')

  c_div_maker = c_div_maker + "<div class='carousel_margin c_jb_car_acc_wd'><div class='col-lg-12 col-md-12 col-xs-12 carousel slide' data-ride='false' data-interval='false' style='margin-top:"+car_config_array[1]+"; '>";

  c_div_maker = c_div_maker + "<div id='"+c_ccnum + "_" +"jcCarousel' class='carousel slide'  data-wrap='"+car_config_array[5]+"' data-interval='false' style='margin-top:"+car_config_array[4]+"; margin-bottom:20px;height:360px; background-color: "+car_config_array[2]+"'>";
// height was +car_config_array[0]+



  c_div_maker = c_div_maker + "<div tabindex='0' aria-label='Carousel' class='carousel-inner' style='width:70%;height:360px; overflow-y: auto; z-index:200px'>";
                                                                                                  // height was +car_config_array[0]+
  //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-



  //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  for(var sld = 1; sld < Object.keys(car_data).length ;sld++)
  {

      for(var sld_data = 0; sld_data < car_sld_array.length; sld_data++)
              {
 
                  if(sld === 1)
                    {

                      c_div_maker = c_div_maker + "<div id='car_"+c_ccnum+"_"+sld+"' class='item active' style='background-color: "+car_config_array[2]+"'>"; 
                          for(var sld_data = 0; sld_data < Object.keys( car_data[sld][Object.keys(car_data[sld])]).length; sld_data++)
                                  {
                                    car_slide_pop.push(car_data[sld].Slide[car_sld_array[sld_data]])
                                  }

                                  //console.log("car_color_array["+sld+"]: " + car_color_array[sld]);
                                  
                                

                                  color_test(car_data[0].back_color,car_color_array[sld],sld);
                                  //console.log("car_config_array[2]: " + car_config_array[2]);
                                  //console.log("car_slide_pop[5]: " + car_slide_pop[5]);                                  
                            if(car_slide_pop[0].length > 8)
                            {
                                c_div_maker = c_div_maker + "<img class='car_contain' src='"+image_locale+""+car_slide_pop[0]+"' alt='"+car_slide_pop[2]+"' style='width:"+car_slide_pop[1]+"; margin-top:10px'>";
                            }


                                  c_div_maker = c_div_maker + "<p style='padding:"+car_slide_pop[6]+"; text-align: "+car_config_array[3]+"; color:"+car_slide_pop[5]+"; width:60%;'>"+car_array[sld].Slide.Text+"</p>";
                                  

                                  //car_array
                                  console.log(car_array[sld].Slide.Text);
                                  //console.log("car_slide_pop[3]: " + car_slide_pop[3]);  

                                  c_div_maker = c_div_maker + "</div>";

                                  car_slide_pop = [];
                    }
             
                  if(sld > 1)
                    {
                      

                      c_div_maker = c_div_maker + "<div id='car_"+c_ccnum+"_"+sld+"' class='item' style='background-color: "+car_config_array[2]+"'>";

                      for(var sld_data = 0; sld_data < Object.keys( car_data[sld][Object.keys(car_data[sld])]).length; sld_data++)
                      {
                        
                        car_slide_pop.push(car_data[sld].Slide[car_sld_array[sld_data]])

                      }
                                 
                      if(car_slide_pop[0].length > 8)
                      {
                        c_div_maker = c_div_maker + "<img class='car_contain' src='"+image_locale+""+car_slide_pop[0]+"' alt='"+car_slide_pop[2]+"' style='width:"+car_slide_pop[1]+"; margin-top:10px'>";
                      }
                      
                              

                                  //console.log("car_color_array["+sld+"]: " + car_color_array[sld]);

                                  color_test(car_data[0].back_color,car_color_array[sld],sld);

                              //console.log("car_config_array[2]: " + car_config_array[2]);
                              //console.log("car_slide_pop[5]: " + car_slide_pop[5]);



                                  c_div_maker = c_div_maker + "<p style='padding:"+car_slide_pop[6]+";text-align: "+car_config_array[3]+"; color:"+car_slide_pop[5]+"; width:60%;'>"+car_array[sld].Slide.Text+"</p>"; //car_slide_pop[3]
                                  
                                 // console.log(car_array[sld].Slide.Text);
                                  //console.log("car_slide_pop[3]: " + car_slide_pop[3]);

                                  c_div_maker = c_div_maker + "</div>";

                                  car_slide_pop = [];
                     }

              }  

  }

  c_div_maker = c_div_maker + "</div>";


c_div_maker = c_div_maker + "<button class='left carousel-control' onClick='javascript:car_info("+c_ccnum+",0)' href='#"+c_ccnum + "_jcCarousel' data-slide='prev' style='background-color:"+car_config_array[2]+";margin-left: 25%;'>";

    +car_config_array[2]+"'></button>";


  c_div_maker = c_div_maker + "<span id='ac_"+c_ccnum+"_left' class='glyphicon glyphicon-chevron-left' style='visibility:hidden'></span>";
  c_div_maker = c_div_maker + "<span class='sr-only'>Previous</span>";
  c_div_maker = c_div_maker + "</button>";


  c_div_maker = c_div_maker + "<button class='right carousel-control' onClick='javascript:car_info("+c_ccnum+",1)' href='#"+c_ccnum + "_jcCarousel' data-slide='next' style='background-color:"+car_config_array[2]+";'>"; //href='#myCarousel' /* Commented out to make Carousel Accesible */
  c_div_maker = c_div_maker + "<span id='ac_"+c_ccnum+"_right' class='glyphicon glyphicon-chevron-right'></span>";
  c_div_maker = c_div_maker + "<span class='sr-only'>Next</span>";
  c_div_maker = c_div_maker + "</button>";

     c_div_maker = c_div_maker + "</div>"; /* Commented out to make Carousel Accesible */

  c_div_maker = c_div_maker + "</div>";


c_div_maker = c_div_maker + "</div>";
c_comp_Array[c_ccnum] = c_div_maker;
comp_Array_test(); 
c_div_maker = "";

}



var tot_slides;
var slides_viewed = [];
var last_slide_viewed = [];
var cur_car = 0;
function car_info(car_name,sdir) 
{



tot_slides = (car_data_xapi[car_name].length  - 1);




for(var ccr = 1; ccr <= (car_data_xapi[car_name].length  - 1); ccr++)
    {

      if(sdir === 0)
      {


          if(document.getElementById('car_'+car_name+'_'+ ccr).className === "item active")
            {
               
                if(ccr - 1 > 0)
                  {
                    cur_car = (ccr - 1);
                  }
              
            }
          
      }

        if(sdir === 1)
            {
                  if(document.getElementById('car_'+car_name+'_'+ ccr).className === "item active")
                  {
                      if(ccr < car_data_xapi[car_name].length  - 1)
                        {
                            cur_car = (ccr + 1);


                         
                        }
                    
                  }
            }




    }
    $('#' + car_name + '_jcCarousel').on('slid.bs.carousel', function () {
     
      if(cur_car === 1)
          {
            document.getElementById("ac_"+car_name+"_left").style.visibility = "hidden";
          }
     
      if(cur_car > 1)
          {
              document.getElementById("ac_"+car_name+"_left").style.visibility = "visible";
          }
  
      if(cur_car === car_data_xapi[car_name].length  - 1)
          {
              document.getElementById("ac_"+car_name+"_right").style.visibility = "hidden";
          } 
       
      if(cur_car < car_data_xapi[car_name].length  - 1)    
          {
              document.getElementById("ac_"+car_name+"_right").style.visibility = "visible";
          }          
   
    })



}


//car_data[sld][Object.keys(car_data[sld])]
//car_array
function color_test(sld_back,sld_text,sldnum)
{
         var cltcn = sld_back.slice(1)
         var aRgbHex = cltcn.match(/.{1,2}/g);
         var aRgb = [
         parseInt(aRgbHex[0], 16),
         parseInt(aRgbHex[1], 16),
         parseInt(aRgbHex[2], 16)
         ];
     
     
     //Text_Color   car_color_array 
     //console.log("0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0");
    // console.log("car_array: " + car_array);// car_color_array[cmpnumbr]);
     

       // for(var carr = 1; carr < car_array.length; carr++)
       //       {
       //         console.log(car_array[carr].Slide.Text_Color);
       //       }
//console.log("0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0");


     
   //  car_color_array[bctc]
           if(aRgb[0] && aRgb[2] >= 128)
             {
               car_slide_pop[5] = "#000000";
              // console.log(car_array[sldnum].Slide.Text_Color);
             }
     
             if(aRgb[0] && aRgb[2] < 128)
             {
               car_slide_pop[5] = "#ffffff";
              // console.log(car_array[sldnum].Slide.Text_Color);
             }


}


function call_car_xapi(car_id, tot_slds, sld_viewed)
{

    //console.log(car_id +" : " + tot_slds +" : " + sld_viewed)
    //console.log("=====================================================================")

}

/*
function hex2rgb(cltcn)
{

    var aRgbHex = cltcn.match(/.{1,2}/g);
    var aRgb = [
    parseInt(aRgbHex[0], 16),
    parseInt(aRgbHex[1], 16),
    parseInt(aRgbHex[2], 16)
    ];


//Text_Color   
console.log("0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0");
console.log("car_color_array[bctc]: " + car_color_array);
console.log("0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0");

car_color_array[bctc]
      if(aRgb[0] && aRgb[2] >= 128)
        {
          car_slide_pop[5] = "#000000";
        }

        if(aRgb[0] && aRgb[2] < 128)
        {
          car_slide_pop[5] = "#ffffff";
        }

   // console.log(aRgb[0]);
  //  console.log(aRgb[2]);
}

*/