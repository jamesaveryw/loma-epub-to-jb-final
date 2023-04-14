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
		
c_div_maker = c_div_maker + "<div><p>"+pdf_data_stream[0].Pdf_Box_Text+"</p></div>";

c_div_maker = c_div_maker + "<img src='"+pdf_logo+"' width='50px' height='50px' style='cursor: pointer;' alt='Adobe PDF icon' onclick='open_pdf_file("+ c_ccnum +")'>"; //pdf_setup.Pdf_File
c_div_maker = c_div_maker + "<div style='margin-top:10px;'><p><jb1>"+pdf_data_stream[0].Pdf_Body_Text+"</jb1></p></div>";

//"+pdf_data_stream[1].Pdf_File+"
c_div_maker = c_div_maker + "</div></div>";

c_comp_Array[c_ccnum] = c_div_maker;

comp_Array_test();
c_div_maker = "";
}


function open_pdf_file(op_pdf_file)

{

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