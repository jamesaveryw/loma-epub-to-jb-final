var c_flip_data_stream = [];
var card_construct;
var cards_setup = [[],[]]
var crdSetup = [];

function Flip_Multi_New_3(c_flip_data_stream,c_ccnum)
{
    ccnum_current = c_ccnum;

    crdSetup = Object.values(c_flip_data_stream[0]).slice(2);

    cards_setup[1] = crdSetup.slice(0,(crdSetup.length / 3));
    cards_setup[2] = crdSetup.slice((crdSetup.length / 3),((crdSetup.length / 3) * 2));
    cards_setup[3] = crdSetup.slice(((crdSetup.length / 3) * 2),((crdSetup.length / 3) * 3));

//   console.log("Freaking work: " + crdSetup);


   // var card_decor_array = c_flip_data_stream[0]
    let total_cards = ((Number(Object.keys(c_flip_data_stream).length) - 1) / 2)
        switch(total_cards)
            {
                case 1:
                        card_construct = 12;
                break;

                case 2:
                        card_construct = 6;
                break;

                case 3:
                        card_construct = 4;
                break;
            }
//card_03_background_color



////console.log(card_construct);
//console.log(total_cards * 2);
    c_div_maker = "";	

//=========================
c_div_maker = c_div_maker + "<div class='col-lg-12 col-md-12 col-xs-12' style='margin-top:20px;height:200px;background-color:"+c_flip_data_stream[0].main_background_color+"'>";//start
//=========================
console.log(total_cards);

for (let i = 1; i <= total_cards; i++) { 
   
    if(total_cards === 1)
        {
            c_div_maker = c_div_maker + "<div style='max-width:120ch; line-height:1.5;height:auto;background-color:"+cards_setup[i][0]+"'>";
        }
    if(total_cards > 1)
        {
            c_div_maker = c_div_maker + "<div class='col-lg-"+card_construct+" col-md-"+card_construct+" col-xs-12' style='max-width:120ch; line-height:1.5;height:100px;background-color:"+cards_setup[i][0]+"'>";
        }
//==================
if(crdlp === 1){cwd = '750px'} 
if(crdlp === 2){cwd = '750px'}
if(crdlp === 3){cwd = '550px'}


c_div_maker = c_div_maker + "<div style='perspective: 2280px; position: relative;height:350px;width:"+cwd+"'>"; 

c_div_maker = c_div_maker + "<div id='front_"+c_ccnum+"_"+cct+"' aria-hidden='false' class='front alert alert-info' tabindex='-1' style='overflow-y:auto; backface-visibility: hidden; transform-style: preserve-3d; position: absolute; z-index: 1; height: 100%; width: 100%; transition: all 0.5s ease-out 0s; transform: rotateY(0deg); background-color:"+card_decor_whole_array[cct][1]+"' onClick='rf_flip("+c_ccnum+","+cct+",1)' onkeydown='rf_flip("+c_ccnum+","+cct+",1)'>"; 
  
cctch = (cctch + 1)

flip_card_contents(contents_values_array[cctch],cctch)
               c_div_maker = c_div_maker + "</div>";
 c_div_maker = c_div_maker + "<div id='back_"+c_ccnum+"_"+cct+"' class='back well well-lg' tabindex='-1' style='overflow-y:auto; backface-visibility: hidden; transform-style: preserve-3d; position: relative; z-index: 0; height: 100%; width: 100%; transform: rotateY(-180deg); transition: all 0.5s ease-out 0s;background-color:"+card_decor_whole_array[cct][2]+"' aria-hidden='true'>";
 cctch = (cctch + 1)
flip_card_contents(contents_values_array[cctch],cctch)       
      c_div_maker = c_div_maker + "</div>"; 

c_div_maker = c_div_maker + "</div>";
c_div_maker = c_div_maker + "<p style='margin-top:10px;color:"+card_decor_whole_array[cct][7]+";text-align:"+card_decor_whole_array[cct][9]+"'><"+card_decor_whole_array[cct][10]+">"+card_decor_whole_array[cct][8]+"</"+card_decor_whole_array[cct][10]+"></p>"; 
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= 

//c_div_maker = c_div_maker + "<div><button onclick='rf_flip("+c_ccnum+","+cct+")'>Click to flip</button></div>";

c_div_maker = c_div_maker + "</button>";
//c_div_maker = c_div_maker + "</div>";
c_div_maker = c_div_maker + "</div>";

//==================
    c_div_maker = c_div_maker + "</div>";
  } 



//c_div_maker = c_div_maker + "<div class='col-lg-"+crdn+" col-md-"+crdn+" col-xs-12' style='max-width:120ch; line-height:1.5;height:auto;background-color:"+card_decor_whole_array[cct][0]+"'>";

//c_div_maker = c_div_maker + "</div>";

//<div id="card-container" tabindex="0" role="button">




    c_div_maker = c_div_maker + "</div>";//finish   
    c_comp_Array[c_ccnum] = c_div_maker;
comp_Array_test();

}


