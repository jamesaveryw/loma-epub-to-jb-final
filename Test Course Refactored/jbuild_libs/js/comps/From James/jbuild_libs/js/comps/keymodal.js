//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// -------<(  Component Begin 04/30/2020 )>-------
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

function keymodal(c_data_stream,c_ccnum)
{

c_div_maker = "";	

c_div_maker = c_div_maker + "<div id='keyModal' class='C_jb_modal'>";
            
//<span class='keyterm'>				
//ADA_check_Array[100] = "Make Sure the key terms have been updated with the new Key Term v2 snippet";				
//<!-- Modal content -->
            
c_div_maker = c_div_maker + "<div id='jb_header_text' class='c_jb_modal-hdr-ftr' style='color:#000000;font-size:20px'></div>";				
            
c_div_maker = c_div_maker + "<div class='c_jb_modal-content' style='overflow-y:auto'>";
          
c_div_maker = c_div_maker + "</div>";	
            
c_div_maker = c_div_maker + "<div class='jb_modal-hdr-ftr'><span class='jb_close' id='kt_btn'><button onclick='javascript:close_keyterm()'><jb1>" + closeButton + "</jb1></button></span></div>";	//Close		
            
c_div_maker = c_div_maker + "</div>";					
            
c_comp_Array[c_ccnum] = c_div_maker;

comp_Array_test();
}

