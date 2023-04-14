
var acc_setup_array = [];
var acc_tab_array = [];
var ac_function_name;
function Accordion(c_ac_data_stream,c_ccnum)
{
  //alert(Object.keys(c_ac_data_stream));


//alert(c_ac_data_stream[0]);
var acc_set = c_ac_data_stream[0];
var ac_comp_data;


//alert("acc_set.Label_Alignment: " + acc_set.Label_Alignment);





acc_setup_array[3] = c_ac_data_stream[1].Dropdown_Background_Color;

//acc_setup_array[5] = c_ac_data_stream[0].top_margin;

//acc_tab_array[0] = c_ac_data_stream[2].Acc_Label; 

//alert("c_ac_data_stream.length: " + c_ac_data_stream.length);
//alert("acc_tab_array[0]: " + acc_tab_array[0]);

c_div_maker = "";

c_div_maker = c_div_maker + "<div class='col-lg-12 col-md-12 col-xs-12'>";


// the following are to be used with the new fileds :: border-style:"+acc_ck.Border_Style+"; border-color:"+acc_ck.Border_Color+"; border-width:"+acc_ck.Border_Thickness+"; border-radius:"+acc_ck.Border_Radius+";						
											
c_div_maker = c_div_maker + "<div style='margin-top: "+acc_set.top_margin+";' class='panel-group jb_car_acc_wd' id='jb_accordion_" + c_ccnum + "'>";//jb_mx_wd



for(var acc_tab_cnt = 2; acc_tab_cnt < c_ac_data_stream.length;acc_tab_cnt++)
{
	//alert("acc_tab_cnt: " + acc_tab_cnt);
	
//#ed8c01


	if(acc_tab_cnt % 2 === 0)
		{
			//alert("acc_tab_cnt: " + acc_tab_cnt);
			
			//alert(c_ac_data_stream[acc_tab_cnt].Acc_Label);

			c_div_maker = c_div_maker + "<div onclick='acc_clicked("+c_ccnum+","+acc_tab_cnt+");' class='panel'><div class='panel-heading' data-toggle='collapse' data-parent='#jb_accordion_" + c_ccnum +"' data-target='#collapse"+c_ccnum+"_"+acc_tab_cnt+"' style='background-color:"+acc_set.Label_Background_Color+";border-radius:"+acc_set.Tab_Radius+"'><class='panel-title' style='color:"+acc_set.Label_Color+";text-align:"+acc_set.Label_Alignment+"'><a data-toggle='collapse' data-parent='#jb_accordion_" + c_ccnum +"' href='#collapse"+c_ccnum+"_"+acc_tab_cnt+"'><para_head class='jb4'>"+c_ac_data_stream[acc_tab_cnt].Acc_Label+"</para_head></a></div>";	





			//acc_tab_array[0] = c_ac_data_stream[2].Acc_Label;
		}	
	
	if(acc_tab_cnt % 2 === 1)
		{
			//alert(String(Object.keys(c_ac_data_stream[acc_tab_cnt])));

			ac_comp_data = c_ac_data_stream[acc_tab_cnt];

			

			switch(String(Object.keys(c_ac_data_stream[acc_tab_cnt])))
				{
					case "Video_Files_New":

					var ac_vid_test = c_ac_data_stream[acc_tab_cnt];

						//alert(c_ac_data_stream[3].Video);
							
							//alert(c_ac_data_stream[acc_tab_cnt]);

							//alert("ac_comp_data: " + String(Object.keys(ac_comp_data)) );
							
							//alert( ac_vid_test.Video     );//  [Video] )
							
							//var new_vid = c_data_video[0];

							
					
							//alert("Video call");
							//Video_Files_New();
					break;
				}



/*
			var ac_data_data_stream = "";
			//c_data_data_stream = Jcc_Component_File[comp_num][Object.keys( Jcc_Component_File[comp_num])];
			//c_function_name = String(orig_Array[comp_num]);
			ac_function_name = String(Object.keys(c_ac_data_stream[acc_tab_cnt]));
			var ac_comp_string = ac_function_name;
			var ac_comp_function = window[ac_comp_string];


alert("ac_comp_string: " + ac_comp_string);
alert("ac_comp_function; " + ac_comp_function);



			ac_comp_function(c_data_data_stream,c_ccnum);
*/

			
		////////////////
		

/*

		c_data_data_stream = Jcc_Component_File[comp_num][Object.keys( Jcc_Component_File[comp_num])];
	   // alert("c_data_data_stream: " + c_data_data_stream);


		c_function_name = String(orig_Array[comp_num]);

		//window[c_lesson_map[comp_num]](c_data_data_stream,comp_num);
		
			// function we want to run
				//var fnstring = "runMe";
				
				var c_comp_string = c_function_name;


				///////alert("c_comp_string: " + c_comp_string);

				// find object
				//var fn = window[fnstring];
				
				var c_comp_function = window[c_comp_string];



				c_comp_function(c_data_data_stream,comp_num);

*/				
//////////////







			
			
			//alert("Boom!");

			//alert("acc_tab_cnt: " + acc_tab_cnt);	
			//alert("c_ac_data_stream[acc_tab_cnt]: " + String(Object.keys(c_ac_data_stream[acc_tab_cnt])) );

			//c_div_maker = c_div_maker + "<div><a>"+String(Object.keys(c_ac_data_stream[acc_tab_cnt]))+"</a></div>"

			c_div_maker = c_div_maker + "</div>";
			//  String(Object.keys(acc_array[acc_cnt]));
		}	

	

	
	//alert("acc_tab_cnt: " + acc_tab_cnt);
}



for(var acc_test = 0; acc_test < acc_setup_array.length; acc_test++)
{

	//alert(acc_setup_array[acc_test]);

}





c_div_maker = c_div_maker + "</div></div>";



c_comp_Array[c_ccnum] = c_div_maker;

comp_Array_test();

}

function acc_clicked(cur_ac_num,cur_acc_count)
{
    alert("cur_ac_num: " + cur_ac_num + " | cur_acc_count: " + cur_acc_count);
}

