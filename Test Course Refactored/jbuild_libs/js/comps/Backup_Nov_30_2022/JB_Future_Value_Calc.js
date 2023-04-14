//--------------------------------------------------											
//-------<(  JB_Widget_Player Code Begin  )>-------
//-------------------------------------------------- Main_Background_Color

function JB_Future_Value_Calc(pvc_data_stream,c_ccnum) 
{
    fvc = 1;
    //console.log(Object.values(pvc_data_stream[0]).length); 
// /*
var pvc_data = Object.values(pvc_data_stream[0]);

 c_div_maker = c_div_maker + "<div id='Future_Value_Calc_"+ c_ccnum +"' class='col-lg-12 col-md-12 col-xs-12'>";

    c_div_maker = c_div_maker + "<div style='background-color:"+pvc_data[0]+";padding:10px; border-top-style:"+pvc_data[2]+"; border-top-color:"+pvc_data[3]+"; border-top-width:"+pvc_data[4]+"; border-bottom-style:"+pvc_data[5]+"; border-bottom-color:"+pvc_data[6]+"; border-bottom-width:"+pvc_data[7]+"' id='jb_slider_display' class='col-lg-12 col-md-12 col-xs-12' align='center'>";	

 

      c_div_maker = c_div_maker + "<div style='text-align:left;background-color:"+pvc_data[0]+"'><pv_fv_title>"+pvc_data[8]+"</pv_fv_title></div><span></span>";

      c_div_maker = c_div_maker + "<div style='text-align:left' class='jb_mx_wd'>"+pvc_data[9]+"</div>";
// /*  
            c_div_maker = c_div_maker + "<table style='width:100%;border-spacing: 50px;background-color:"+pvc_data[0]+"'>";

                c_div_maker = c_div_maker + "<tr>";																	
                        c_div_maker = c_div_maker + "<td class='pv_fv_td_border' style='color:#0070b0; font-weight: bold;width:20%'><pv_fv>"+pvc_data[10]+"<pv_fv></td>";

                        c_div_maker = c_div_maker + "<td class='pv_fv_td_border'><div class='slidecontainer' style='padding:10px'><input type='range' min='0' max='10' value='5' step='.1' maxlength='3' class='slider' id='fvIntRange' oninput='slider_Int_fv_go_int()' onchange='slider_Int_fv_go_int()'></div><span><pv_fv_lbl>0</pv_fv_lbl></span><span style='float:right'><pv_fv_lbl>10</pv_fv_lbl></span></td>";												
            
                        c_div_maker = c_div_maker + "<td class='pv_fv_td_border' style='width:20%; text-align:center'><span id='fv_iRate' style='border-style:solid; border-color:black; border-weight:medium;padding:10px; background-color:white; display: inline-block; width:60px;font-size:18px; font-weight:bold; color:#000000'></span></td>";	                

                c_div_maker = c_div_maker + "</tr>";
//===========================

                c_div_maker = c_div_maker + "<tr>";					
                        c_div_maker = c_div_maker + "<td class='pv_fv_td_border' style='color:#0070b0; font-weight: bold;width:20%'><pv_fv>"+pvc_data[11]+"<pv_fv></td>";

                        c_div_maker = c_div_maker + "<td class='pv_fv_td_border'><div class='slidecontainer' style='padding:10px'><input type='range' min='0' max='20' value='10' step='1' maxlength='2' class='slider' id='fvYearRange' oninput='slider_Year_fv_go_year()' onchange='slider_Year_fv_go_year()'></div><span><pv_fv_lbl>0</pv_fv_lbl></span><span style='float:right'><pv_fv_lbl>20</pv_fv_lbl></span></td>";											
                
                        c_div_maker = c_div_maker + "<td class='pv_fv_td_border' style='width:20%; text-align:center'><span id='fv_iYear' style='border-style:solid; border-color:black; border-weight:medium;padding:10px; background-color:white; display: inline-block; width:60px;font-size:18px; font-weight:bold;color: #000000'>10</span></td>";								

                c_div_maker = c_div_maker + "</tr>";

                
            c_div_maker = c_div_maker + "</table>";	
//=============
// */
c_div_maker = c_div_maker + "<div id='rotText'><vert_label>"+pvc_data[12]+"</vert_label></div>"; //	id='rotText'						
			//-------<>									
			c_div_maker = c_div_maker + "<div id='grDis' style='width:200px; height:200px; background-color:"+pvc_data[0]+"; border-left-style:solid; border-left-color:#000000; border-left-width:thick; border-bottom-style:solid; border-bottom-color:#000000; border-bottom-width:thick'>"; 
       
				
            c_div_maker = c_div_maker + "<div class='value_fbar_setup' id='value_fbar' style='width:100px; height:100px;background-color:#009539;'><div style='margin-top:-30px;' align='center'><span class='calc_readout' id='calc_fvalue'></span></div></div>";
			
			c_div_maker = c_div_maker + "</div>";

//=============						
            c_div_maker = c_div_maker + "</div>";
      c_div_maker = c_div_maker + "</div>";
    c_div_maker = c_div_maker + "</div>";
 // */
    c_comp_Array[c_ccnum] = c_div_maker;
    comp_Array_test();
}


		                
   

	

/*
case "JB_Future_Value_Calc":
		var Jb_fvc = sSelections[jcc][snglBld[jcc]];	

		fvc = 1;
											
				

Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='background-color:"+Jb_fvc[0].Main_Background_Color+";padding:10px; border-top-style:"+Jb_fvc[0].Top_line_style+"; border-top-color:"+Jb_fvc[0].Top_line_color+"; border-top-width:"+Jb_fvc[0].Top_line_weight+"; border-bottom-style:"+Jb_fvc[0].Bottom_line_style+"; border-bottom-color:"+Jb_fvc[0].Bottom_line_color+"; border-bottom-width:"+Jb_fvc[0].Bottom_line_weight+"' id='jb_slider_display' class='col-lg-12 col-md-12 col-xs-12' align='center'>";											
											
//------- class='col-lg-12 col-md-12 col-xs-12'
 Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='inside_sld'>";	
											
 Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='text-align:left;background-color:"+Jb_fvc[0].Main_Background_Color+"'><pv_fv_title>"+Jb_fvc[0].Title+"</pv_fv_title></div><span></span>";

Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='text-align:left' class='jb_mx_wd'>"+Jb_fvc[0].instructions+"</div>";

				Jcc_Comp_Maker = Jcc_Comp_Maker + "<table style='width:100%;border-spacing: 50px;background-color:"+Jb_fvc[0].Main_Background_Color+"'>";
											
						Jcc_Comp_Maker = Jcc_Comp_Maker + "<tr>";																	
							Jcc_Comp_Maker = Jcc_Comp_Maker + "<td class='pv_fv_td_border' style='color:#0070b0; font-weight: bold;width:20%'><pv_fv>"+Jb_fvc[0].Label_01+"<pv_fv></td>";
							
								

							Jcc_Comp_Maker = Jcc_Comp_Maker + "<td class='pv_fv_td_border'><div class='slidecontainer' style='padding:10px'><input type='range' min='0' max='10' value='5' step='.1' maxlength='3' class='slider' id='fvIntRange' oninput='slider_Int_fv_go_int()' onchange='slider_Int_fv_go_int()'></div><span><pv_fv_lbl>0</pv_fv_lbl></span><span style='float:right'><pv_fv_lbl>10</pv_fv_lbl></span></td>";												
	
											
							Jcc_Comp_Maker = Jcc_Comp_Maker + "<td class='pv_fv_td_border' style='width:20%; text-align:center'><span id='fv_iRate' style='border-style:solid; border-color:black; border-weight:medium;padding:10px; background-color:white; display: inline-block; width:60px;font-size:18px; font-weight:bold; color:#000000'></span></td>";								
											

						Jcc_Comp_Maker = Jcc_Comp_Maker + "</tr>";					

										
											
						Jcc_Comp_Maker = Jcc_Comp_Maker + "<tr>";					
							Jcc_Comp_Maker = Jcc_Comp_Maker + "<td class='pv_fv_td_border' style='color:#0070b0; font-weight: bold;width:20%'><pv_fv>"+Jb_fvc[0].Label_02+"<pv_fv></td>";
							

							Jcc_Comp_Maker = Jcc_Comp_Maker + "<td class='pv_fv_td_border'><div class='slidecontainer' style='padding:10px'><input type='range' min='0' max='20' value='10' step='1' maxlength='2' class='slider' id='fvYearRange' oninput='slider_Year_fv_go_year()' onchange='slider_Year_pv_go_year()'></div><span><pv_fv_lbl>0</pv_fv_lbl></span><span style='float:right'><pv_fv_lbl>20</pv_fv_lbl></span></td>";											
													
							Jcc_Comp_Maker = Jcc_Comp_Maker + "<td class='pv_fv_td_border' style='width:20%; text-align:center'><span id='fv_iYear' style='border-style:solid; border-color:black; border-weight:medium;padding:10px; background-color:white; display: inline-block; width:60px;font-size:18px; font-weight:bold;color: #000000'></span></td>";								
	
													

						Jcc_Comp_Maker = Jcc_Comp_Maker + "</tr>";												
											
				Jcc_Comp_Maker = Jcc_Comp_Maker + "</table>";					

						
	//======================
		
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='rotfText'><vert_label>"+Jb_fvc[0].Graph_Label+"</vert_label></div>"; //	id='rotText'	Bar_Color					
			//-------<>									
			Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='grDis' style='width:200px; height:200px; background-color:"+Jb_fvc[0].Main_Background_Color+"; border-left-style:solid; border-left-color:#000000; border-left-width:thick; border-bottom-style:solid; border-bottom-color:#000000; border-bottom-width:thick'>"; 
											
				
				Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='value_fbar_setup' id='value_fbar' style='width:100px; height:100px;background-color:#009539;'><div style='margin-top:-30px;' align='center'><span class='calc_readout' id='calc_fvalue'></span></div></div>";
			
			Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
			//-------<>									
		
						
							
		Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";									
											
//============================
//-------										
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>"; 											
break;											
											


*/
