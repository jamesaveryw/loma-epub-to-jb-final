
var acc_setup_array = [];
var acc_tab_array = [];
var ac_function_name;
var acc_Count;
var acc_multi = [[],[]];
var acc_label_array = [];
var backdrop_color_Array = [];
var pvid_array_count = [[],[]];

function Accordion(c_ac_data_stream,c_ccnum)
{
var acc_set = c_ac_data_stream[0];
var ac_comp_data;

acc_Count = 0;

c_div_maker = "";
c_div_maker = c_div_maker + "<div class='col-lg-12 col-md-12 col-xs-12' style='margin-top:20px;'>"; // One Open
c_div_maker = c_div_maker + "<div class='c_jb_car_acc_wd' jb_accord_" + c_ccnum +" panel-group' id='jb_accordion_"+c_ccnum+"'>";// Two Open


for(var acc_tab_cnt = 1; acc_tab_cnt < c_ac_data_stream.length;acc_tab_cnt++)
{

	switch(acc_tab_cnt % 2)
	{
		case 1: // Tab Data

				acc_Count = (acc_Count + 1);

c_div_maker = c_div_maker + "<div class='panel'>"; //  1 Inside Open
c_div_maker = c_div_maker + "<div class='panel-heading' style='background-color:"+c_ac_data_stream[acc_tab_cnt].Acc_Label_Background_color+"'>";  // 2 Inside Open  'JB_Accordion_"+c_ccnum+"'

c_div_maker = c_div_maker + "<jb2 class='panel-title'><a style='color:"+c_ac_data_stream[acc_tab_cnt].Acc_Label_Color+"' data-toggle='collapse' data-parent='#jb_accordion_" + c_ccnum +"'' href='#collapse"+c_ccnum+"_"+acc_Count+"' onclick='pvid("+c_ccnum+","+acc_Count+")'>"+c_ac_data_stream[acc_tab_cnt].Acc_Label+"</a>";  // make acc_label_array 2d

		break;

		case 0: // Component Data

		var comp_in_accordion = String(Object.keys(c_ac_data_stream[acc_tab_cnt]));
		var ex_comp_data = String(Object.keys(c_ac_data_stream[acc_tab_cnt]));
			
			c_div_maker = c_div_maker + "<div id='collapse"+c_ccnum+"_"+acc_Count+"' class='panel-collapse collapse' style='background-color:"+c_ac_data_stream[acc_tab_cnt].Drop_Back_Color+"'>"; 
						         // 4 Inside Open


			c_div_maker = c_div_maker + "<div class='panel-body new_accordion'>"; // 5 Inside Open

				acc_function_name = comp_in_accordion;

				
				var c_acc_function = window[acc_function_name];

				c_acc_function(c_ac_data_stream[acc_tab_cnt][ex_comp_data],acc_Count,1);

				c_div_maker = c_div_maker + "</div>"; // 3 inside Closed
				c_div_maker = c_div_maker + "</div>"; // 4 inside Closed

				
	
		break;
	}
	
	c_div_maker = c_div_maker + "</div>"; // One Closed	

	c_comp_Array[c_ccnum] = c_div_maker;
	comp_Array_test();
}


}

function pvid(cmpnm,acv)
{
	pvid_array_count[cmpnm] = acc_vid_array;

	for(var pvid_count = 1; pvid_count < acc_vid_array.length; pvid_count++)
		{
			if(typeof acc_vid_array[pvid_count] !== "undefined")
				{
					document.getElementById(acc_vid_array[pvid_count]).pause();
				}

			if(typeof sa_vid_array[pvid_count] !== "undefined")
				{
					document.getElementById(sa_vid_array[pvid_count]).pause();
				}	
		}

}
