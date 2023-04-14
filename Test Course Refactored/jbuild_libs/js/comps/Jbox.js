
var c_child_data = [];
var Jbox_Data = [];

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// -------<(  Jbox Begin 03/17/2021 )>-------
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

function Jbox(c_compData,c_ccnum,acfl)
{



Jbox_Data = Object.values(c_compData[0]);


c_div_maker = "";

console.log("Jbox_Data.length: " + Jbox_Data.length);

if(typeof acfl !== "undefined")
{
        c_div_maker = c_div_maker + "<div class='col-lg-12 col-md-12 col-xs-12'>";

       // c_div_maker = c_div_maker + "<img style='width:"+Jbox_Data[6]+"; border-radius:"+Jbox_Data[2]+";border:"+Jbox_Data[5]+" "+Jbox_Data[3]+" "+Jbox_Data[4]+"' src='images/"+Jbox_Data[0]+"' alt=''>";

       c_div_maker = c_div_maker + "<p>Why are you not working?</p>";


       //     c_div_maker = c_div_maker + "<div style='background-color:"+Jbox_Data[1]+"'><img style='width:"+Jbox_Data[6]+"; border-radius:"+Jbox_Data[2]+";border:"+Jbox_Data[5]+" "+Jbox_Data[3]+" "+Jbox_Data[4]+"' src='images/"+Jbox_Data[0]+"' alt=''></div>";

        c_div_maker = c_div_maker + "</div>";
          
        // console.log("c_div_maker: " + c_div_maker) 
}


if(typeof acfl === "undefined")
{
        if(c_div_maker.length <= 0){c_div_maker = "<div class='col-lg-12 col-md-12 col-xs-12'>"};
        if(c_div_maker.length > 0){c_div_maker = c_div_maker + "<div class='col-lg-12 col-md-12 col-xs-12'>"};

           // c_div_maker = c_div_maker + "<div style='background-color:"+Jbox_Data[1]+"'><img style='width:"+Jbox_Data[6]+";border-radius:"+Jbox_Data[2]+";border:"+Jbox_Data[5]+" "+Jbox_Data[3]+" "+Jbox_Data[4]+"' src='images/"+Jbox_Data[0]+"' alt=''></div>";

           c_div_maker = c_div_maker + "<p>These are the comps outside the Accordion "+c_ccnum+"</p>";

            c_div_maker = c_div_maker + "</div>";

           c_comp_Array[c_ccnum] = c_div_maker;
            
            
          comp_Array_test();  
}

}

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// -------<(  Jbox End 03/17/2021 )>-------
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-