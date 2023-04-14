//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// -------<(  PDF_Box Component )>-------
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
var pdf_logo;
var pdf_data_stream = [];
var pdf_file_array = [];
function PDF_Box(pdf_data_stream,c_ccnum)
{
    
    pdf_file_array[c_ccnum] = pdf_data_stream[1].Pdf_File;

    //console.log("pdf_file_array["+ c_ccnum +"]: " + pdf_file_array[c_ccnum])

    if(typeof moduleFolder !== "undefined")
            {
                pdf_logo = comp_images + pdf_data_stream[0].Pdf_Icon;
            }

    if(typeof moduleFolder === "undefined")
            {
                pdf_logo = comp_images + pdf_data_stream[0].Pdf_Icon; 

            }



//c_div_maker = "";

console.log(pdf_data_stream);

c_div_maker = c_div_maker + "<div id='PDF_num_"+c_ccnum+"' class='col-lg-12 col-md-12 col-xs-12 info-comp-container' style='margin-top:10px;'>";


c_div_maker = c_div_maker + "<div style='display:inline-block; width:80%; background-color:"+pdf_data_stream[0].Background_Color+";outline: "+pdf_data_stream[0].Border_Thickness+" "+pdf_data_stream[0].Border_Style+" "+pdf_data_stream[0].Border_Color+"; padding:"+pdf_data_stream[0].Padding+"'>";
		
// JW: 2023-02-08
// added id
c_div_maker = c_div_maker + "<div><p id='PDF_num_"+c_ccnum+"-label'>"+pdf_data_stream[0].Pdf_Box_Text+"</p></div>";

// JW: 2023-02-08
// add div with role link, tabindex, and aria label and description
// moved onclick to div
// added onkeydown
// passing event with click and keydown
c_div_maker = c_div_maker + "<div class='pdf-link' role='link' tabindex='0' aria-labelledby='PDF_num_"+c_ccnum+"-label' aria-describedby='PDF_num_"+c_ccnum+"-desc' onclick='open_pdf_file("+ c_ccnum +",event)' onkeydown='open_pdf_file("+ c_ccnum +",event)'><img src='"+pdf_logo+"' width='50px' height='50px' style='cursor: pointer;' alt='Adobe PDF icon'></div>"; //pdf_setup.Pdf_File
c_div_maker = c_div_maker + "<div id='PDF_num_"+c_ccnum+"-desc' style='margin-top:10px;'><p><span class='jb1'>"+pdf_data_stream[0].Pdf_Body_Text+"</span></p></div>";

//"+pdf_data_stream[1].Pdf_File+"
c_div_maker = c_div_maker + "</div></div>";

c_comp_Array[c_ccnum] = c_div_maker;

comp_Array_test();
c_div_maker = "";
}


function open_pdf_file(op_pdf_file, e)

{
    if (e.type === "click" || (e.type === "keydown" && e.which === keyCodes.RETURN)) {
        window.open(pdf_files + pdf_file_array[op_pdf_file]);

        //xAPI stuff
        if(typeof moduleFolder !== "undefined")
        {
            var pdfStatement = {
                "type": "PDF",
                "verb": "viewed",
                "module": bCurrentMod + 1,
                "lesson": bCurrentLsn + 1,
            // "page": bCurrentPag + 1,
                "page": np_num,
                "activity": "http://activitystrea.ms/schema/1.0/file",
                "objectID": pdf_file_array[op_pdf_file]
            };
        
            if(isXAPI){
        
                LRSSend(pdfStatement);
        
            }
        
            return false;

        }

    } 

}