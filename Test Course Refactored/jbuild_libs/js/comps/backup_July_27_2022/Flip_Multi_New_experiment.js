var flip_card_data = [];

var crdlp;

function Flip_Multi_New(c_flip_data_stream,c_ccnum)
{
   
    flip_card_data = c_flip_data_stream;
    console.log(flip_card_data)
    crdlp = ((Object.keys(c_flip_data_stream).length - 1 ) / 2);
    c_div_maker = "";	

    c_div_maker = c_div_maker + "<div class='container flip_con' style='margin-top:20px;height:auto;background-color:"+flip_card_data[0].main_background_color+"'>";//start
/*
//=========================
    if(crdlp === 1)
    {
        c_div_maker = c_div_maker + "<div class='container flip_con' style='margin-top:20px;height:auto;background-color:"+flip_card_data[0].main_background_color+"'>";//start
    }

    if(crdlp > 1)
    {
        c_div_maker = c_div_maker + "<div class='col-lg-12 col-md-12 col-xs-12' style='margin-top:20px;height:auto;background-color:"+flip_card_data[0].main_background_color+"'>";//start
  
    }
//=========================  src='"+image_locale+""+HectorMaria.jpg+"'
*/
console.log("image_locale: " + image_locale);
        c_div_maker = c_div_maker + "<div id='card-1' style='perspective: 1110px; position: relative;'> ";
        c_div_maker = c_div_maker + "<div class='front' style='overflow-y:auto; backface-visibility: hidden; transform-style: preserve-3d; position: absolute; z-index: 1; height: 100%; width: 100%; transition: all 0.5s ease-out 0s; transform: rotateY(0deg);'>";
        c_div_maker = c_div_maker + "<img src='"+image_locale+"HectorMaria.jpg' style='backface-visibility: hidden;'>";
        c_div_maker = c_div_maker + "</div>";
        c_div_maker = c_div_maker + "<div class='back' style='overflow-y:auto; backface-visibility: hidden; transform-style: preserve-3d; position: relative; z-index: 0; height: 100%; width: 100%; transform: rotateY(-180deg); transition: all 0.5s ease-out 0s;'><img src='"+image_locale+"HectorMaria.jpg' style='backface-visibility: hidden;'>";
        c_div_maker = c_div_maker + "</div>";
        c_div_maker = c_div_maker + "</div>";
        c_div_maker = c_div_maker + "</div>";


        c_div_maker = c_div_maker + "<button id='1' onclick='btn_flip(1)'>Click to flip</button>";



//=========================
    c_div_maker = c_div_maker + "</div>";//finish
//=========================
    c_comp_Array[c_ccnum] = c_div_maker;

console.log("c_comp_Array["+c_ccnum+"]: " + c_comp_Array[c_ccnum]);

    comp_Array_test();


}


function btn_flip(bf)
{
  $('#card-'+bf).flip(true);
}


function btn_flip_2()
{
  $('#card-1').flip(false);
}

      $('#card-1').flip({
        trigger: 'manual'
      });