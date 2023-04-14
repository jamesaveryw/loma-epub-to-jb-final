
var acc_setup_array = [];
var acc_tab_array = [];
var ac_function_name;
var acc_Count;
var acc_multi = [[],[]];
var acc_label_array = [];
var backdrop_color_Array = [];

function Accordion(c_ac_data_stream,c_ccnum)
{


//alert("c_ac_data_stream.length: " + String(Object.keys(c_ac_data_stream))  )

var acc_set = c_ac_data_stream[0];
var ac_comp_data;

acc_Count = 0;

acc_setup_array[3] = c_ac_data_stream[1].Dropdown_Background_Color;

c_div_maker = "";
c_div_maker = c_div_maker + "<div class='col-lg-12 col-md-12 col-xs-12'>"; //c_jb_car_acc_wd
c_div_maker = c_div_maker + "<div class='c_jb_car_acc_wd' jb_accord_" + c_ccnum +"'>";
											
c_div_maker = c_div_maker + "<div style='margin-top: "+acc_set.top_margin+";' class='panel-group jb_car_acc_wd' id='jb_accordion_" + c_ccnum + "'>";//jb_mx_wd

for(var acc_tab_cnt = 2; acc_tab_cnt < c_ac_data_stream.length;acc_tab_cnt++)
{
	//alert("acc_tab_cnt: " + acc_tab_cnt);

	//alert("acc_tab_cnt % 2: " + acc_tab_cnt % 2);	

switch(acc_tab_cnt % 2)
	{
		
			case 0:

				acc_Count = (acc_Count + 1);

				acc_label_array[acc_Count] = c_ac_data_stream[acc_tab_cnt].Acc_Label;
				backdrop_color_Array[acc_Count] = c_ac_data_stream[acc_tab_cnt].Drop_Back_Color;
				


c_div_maker = c_div_maker + "<div class='panel'>"; // style='margin-top: 20px'   Acc_Label_Color
c_div_maker = c_div_maker + "<div class='panel-heading' style='background-color:"+c_ac_data_stream[acc_tab_cnt].Acc_Label_Background_color+"'>";   //<a href="www.mysite.com" onclick="return theFunction();">Item</a>

c_div_maker = c_div_maker + "<jb2 class='panel-title'><a style='color:"+c_ac_data_stream[acc_tab_cnt].Acc_Label_Color+"' data-toggle='collapse' data-parent='#jb_accordion_" + c_ccnum +"'' href='#collapse"+acc_Count+"' onclick='pvid("+acc_Count+")'>"+acc_label_array[acc_Count]+"</a>";
c_div_maker = c_div_maker + "</div>";

		
			break;

			case 1:
						var comp_in_accordion = String(Object.keys(c_ac_data_stream[acc_tab_cnt]));


						var ex_comp_data = String(Object.keys(c_ac_data_stream[acc_tab_cnt]));
							
						if(acc_setup_array[3].length !== 0)
						{
							c_div_maker = c_div_maker + "<div id='collapse"+acc_Count+"' class='panel-collapse collapse' style='background-color:"+acc_setup_array[3]+"'>"; 
						}

						if(acc_setup_array[3].length === 0)	
							{
								c_div_maker = c_div_maker + "<div id='collapse"+acc_Count+"' class='panel-collapse collapse' style='background-color:"+backdrop_color_Array[acc_Count]+"'>"; 
							}						


							c_div_maker = c_div_maker + "<div class='panel-body'>"; 
								//var ibox_count = (acc_Count + 100);

								acc_function_name = comp_in_accordion;
								
								var c_acc_function = window[acc_function_name];

								c_acc_function(c_ac_data_stream[acc_tab_cnt][ex_comp_data],acc_Count,1);

								c_div_maker = c_div_maker + "</div>";
								c_div_maker = c_div_maker + "</div>";




	/*		
					switch(String(Object.keys(c_ac_data_stream[acc_tab_cnt])))
						{
							case "Info_Box":

							var IB_data = String(Object.keys(c_ac_data_stream[acc_tab_cnt]));
							
						//	c_div_maker = c_div_maker + "<div id='collapse"+acc_Count+"' class='panel-collapse collapse'>";
						if(acc_setup_array[3].length !== 0)
						{
							c_div_maker = c_div_maker + "<div id='collapse"+acc_Count+"' class='panel-collapse collapse' style='background-color:"+acc_setup_array[3]+"'>"; //acc_tab_cnt
						}

					if(acc_setup_array[3].length === 0)	
						{
							c_div_maker = c_div_maker + "<div id='collapse"+acc_Count+"' class='panel-collapse collapse' style='background-color:"+backdrop_color_Array[acc_Count]+"'>"; //Drop_Back_Color
						}						


							c_div_maker = c_div_maker + "<div class='panel-body'>"; //<br><br><button onclick='tbutton(1)'>Test 1</button>
								var ibox_count = (acc_Count + 100);
								Info_Box(c_ac_data_stream[acc_tab_cnt][IB_data],ibox_count,1);


								//c_div_maker = c_div_maker + "</div>";
								c_div_maker = c_div_maker + "</div>";
								c_div_maker = c_div_maker + "</div>";

								//c_div_maker = c_div_maker + "</div>";							



							break;

							case "Video_Files_New":                        
							var ac_vid_test = String(Object.keys(c_ac_data_stream[acc_tab_cnt])); 

							if(acc_setup_array[3].length !== 0)
								{
									c_div_maker = c_div_maker + "<div id='collapse"+acc_Count+"' class='panel-collapse collapse' style='background-color:"+acc_setup_array[3]+"'>"; //acc_tab_cnt
								}

							if(acc_setup_array[3].length === 0)	
								{
									c_div_maker = c_div_maker + "<div id='collapse"+acc_Count+"' class='panel-collapse collapse' style='background-color:"+backdrop_color_Array[acc_Count]+"'>"; //Drop_Back_Color
								}

								c_div_maker = c_div_maker + "<div class='panel-body'>"; //<br><br><button onclick='tbutton(1)'>Test 1</button>

								//var vid_trans_count = (acc_Count + 100);	

								Video_Files_New(c_ac_data_stream[acc_tab_cnt][ac_vid_test],acc_Count,1);
								//Video_Files_New(c_ac_data_stream[acc_tab_cnt][ac_vid_test],vid_trans_count,1);

								c_div_maker = c_div_maker + "</div>";
								c_div_maker = c_div_maker + "</div>";
								//c_div_maker = c_div_maker + "</div>";

								//c_div_maker = c_div_maker + "</div>";


							break;

							case "Single_Image":
								var ac_single_image = String(Object.keys(c_ac_data_stream[acc_tab_cnt])); 

								if(acc_setup_array[3].length !== 0)
									{
										c_div_maker = c_div_maker + "<div id='collapse"+acc_Count+"' class='panel-collapse collapse' style='background-color:"+acc_setup_array[3]+"'>"; //acc_tab_cnt
									}
	
								if(acc_setup_array[3].length === 0)	
									{
										c_div_maker = c_div_maker + "<div id='collapse"+acc_Count+"' class='panel-collapse collapse' style='background-color:"+backdrop_color_Array[acc_Count]+"'>"; //Drop_Back_Color
									}
	
									c_div_maker = c_div_maker + "<div class='panel-body'>"; //<br><br><button onclick='tbutton(1)'>Test 1</button>
	
									//var vid_trans_count = (acc_Count + 100);	
	
									Single_Image(c_ac_data_stream[acc_tab_cnt][ac_single_image],acc_Count,1);
									//Video_Files_New(c_ac_data_stream[acc_tab_cnt][ac_vid_test],vid_trans_count,1);
	
									c_div_maker = c_div_maker + "</div>";
									c_div_maker = c_div_maker + "</div>";									
							break;
*/

					//	}



			break;


	}


}


//c_div_maker = c_div_maker + "</div></div>";

c_div_maker = c_div_maker + "</div>";

c_comp_Array[c_ccnum] = c_div_maker;

comp_Array_test();

}


function pvid(acv)
{
	//alert(acv);
	//alert(acv + 100);
	//var current_acc_vid = "vid_source_ac_" + (acv + 100);

	for(var pvid_count = 1; pvid_count < acc_vid_array.length; pvid_count++)
		{
		
			document.getElementById(acc_vid_array[pvid_count]).pause();
		}

}


function acc_clicked(cur_ac_num,cur_acc_count)
{

//  <button type="button" class="btn btn-info" data-toggle="collapse" data-target="#demo">Simple collapsible</button>
//<div id="demo" class="collapse">

	//alert("cur_ac_num: " + cur_ac_num + " | cur_acc_count: " + cur_acc_count);
	
	
}

