function Inline_Source_File(c_data_stream,c_ccnum,acfl)
{
   // console.log("Inline_Source_File ---  c_data_stream: " + Object.values(c_data_stream));


    for(var sfa = 0; sfa < c_data_stream.length; sfa++)
        {
            source_Array[sfa] = c_data_stream[sfa].Source_Info;

        }
        c_div_maker = "";
        c_comp_Array[c_ccnum] = c_div_maker;
        comp_Array_test();
        c_div_maker = "";
}



/*
var source_new	= sSelections[jcc][snglBld[jcc]];


//{"Paragraph_text":"<a class='pdf_inline_style' href='javascript:jb_src(3)'><strong><u>Source</u></strong></a>"},



											
	for(var sfa = 0; sfa < source_new.length; sfa++)
		{
			source_Array[sfa] = source_new[sfa].Source_Info;//[sfa];
			//alert("source_Array[sfa]: " + source_Array[sfa]);
		}

        */