//-------
// Vars
//-------
var comp_data = [];
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// -------<(  New Comp Begin 00/00/2021 )>------- M/D/Y
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

function acc_test(c_compData,c_ccnum,acfl)
{

    comp_data = Object.values(c_compData[0]);

//console.log("comp_dataL : " + comp_data[1]);
//-------<(  Accordion Code Begin  )>-------
if(typeof acfl !== "undefined")
{
        c_div_maker = c_div_maker +  "<div id='compName_"+c_ccnum+"' class='col-lg-12 col-md-12 col-xs-12'>";
               data_placement()
        c_div_maker = c_div_maker + "</div>";
}
//-------<(  Accordion Code End  )>-------

//-------<(  Stand Alone Code Begin  )>-------
if(typeof acfl === "undefined")	// Stand alone
{
        c_div_maker =  "<div id='compName_"+c_ccnum+"' class='col-lg-12 col-md-12 col-xs-12'>";
            data_placement()
        c_div_maker = c_div_maker + "</div>";
        c_comp_Array[c_ccnum] = c_div_maker;

comp_Array_test();
}
//-------<(  Stand Alone Code Begin  )>-------
}
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// -------<(  New Comp End 00/00/2021 )>------- M/D/Y
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

function data_placement()
{
    c_div_maker = c_div_maker + "<h3 style='color:#000000;text-align:center'>" + comp_data[0] +"</h3></span><br><br>";
    c_div_maker = c_div_maker + "<img src='images/"+comp_data[1]+"' alt=''>"; 
}


