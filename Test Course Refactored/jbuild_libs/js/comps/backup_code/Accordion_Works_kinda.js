
var acc_setup_array = [];
var acc_tab_array = [];
var ac_function_name;
var acc_Count;
var acc_multi = [[],[]];
var acc_label_array = [];

function Accordion(c_ac_data_stream,c_ccnum)
{
  //alert(Object.keys(c_ac_data_stream));


//alert(c_ac_data_stream[0]);
var acc_set = c_ac_data_stream[0];
var ac_comp_data;
//var accordion_maker;

//alert("acc_set.Label_Alignment: " + acc_set.Label_Alignment);

acc_Count = 0;



acc_setup_array[3] = c_ac_data_stream[1].Dropdown_Background_Color;




//acc_setup_array[5] = c_ac_data_stream[0].top_margin;

//acc_tab_array[0] = c_ac_data_stream[2].Acc_Label; 

//alert("c_ac_data_stream.length: " + c_ac_data_stream.length);
//alert("acc_tab_array[0]: " + acc_tab_array[0]);

c_div_maker = "";




c_div_maker = c_div_maker + "<div class='col-lg-12 col-md-12 col-xs-12 jb_accord_" + c_ccnum +"'>";






// the following are to be used with the new fileds :: border-style:"+acc_ck.Border_Style+"; border-color:"+acc_ck.Border_Color+"; border-width:"+acc_ck.Border_Thickness+"; border-radius:"+acc_ck.Border_Radius+";						
											
c_div_maker = c_div_maker + "<div style='margin-top: "+acc_set.top_margin+";' class='panel-group jb_car_acc_wd' id='jb_accordion_" + c_ccnum + "'>";//jb_mx_wd



for(var acc_tab_cnt = 2; acc_tab_cnt < c_ac_data_stream.length;acc_tab_cnt++)
{
	//alert("acc_tab_cnt: " + acc_tab_cnt);

	//alert("acc_tab_cnt % 2: " + acc_tab_cnt % 2);	



switch(acc_tab_cnt % 2)
	{
		
			case 0:

				//alert("acc_tab_cnt: " + acc_tab_cnt);

				acc_Count = (acc_Count + 1);
				//alert("c_ac_data_stream["+acc_tab_cnt+"].Acc_Label: " + c_ac_data_stream[acc_tab_cnt].Acc_Label);			

/*
				<div class="panel-group" id="accordion"> <!-- class="panel-group" id="accordion" begin  -->

				<div class="panel panel-default"> <!-- Tab 1 begin -->
				  <div class="panel-heading">
					<h4 class="panel-title">
					  <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">Collapsible Group 1</a>
					</h4>
				  </div>
				  <div id="collapse1" class="panel-collapse collapse">
					<div class="panel-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
					sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
					<button onclick="tbutton(1)">Test</button>
				  </div>
				  
				</div> <!-- Tab 1 end -->
*/

				//acc_Count = (acc_Count + 1);
				////acc_multi[c_ccnum] = acc_Count;	
				//alert("acc_Count: " + acc_Count);
				acc_label_array[acc_Count] = c_ac_data_stream[acc_tab_cnt].Acc_Label;
																									// href='#jb_ac_"+c_ccnum+"_"+acc_Count+"'
																									// onclick='acc_clicked("+c_ccnum+","+acc_Count+");
				c_div_maker = c_div_maker + "<div href='#jb_ac_"+c_ccnum+"_"+acc_Count+"' data-toggle='collapse' class='panel'><div class='panel-heading' data-parent='#jb_accordion_" + c_ccnum +"' data-target='#collapse"+c_ccnum+"_"+acc_Count+"' style='background-color:"+acc_set.Label_Background_Color+";border-radius:"+acc_set.Tab_Radius+"'><class='panel-title' style='color:"+acc_set.Label_Color+";text-align:"+acc_set.Label_Alignment+"'><a data-toggle='collapse' data-parent='#jb_accordion_" + c_ccnum +"' href='#collapse"+c_ccnum+"_"+acc_Count+"'><para_head class='jb4'>"+acc_label_array[acc_Count]+"</para_head></a></div>"; //</div>

/*
c_div_maker = c_div_maker + "<div class='panel panel-default'>";
c_div_maker = c_div_maker + "<div class='panel-heading'>";
c_div_maker = c_div_maker + "<jb2 class='panel-title'><a data-toggle='collapse' data-parent='#jb_accordion_" + c_ccnum +"'' href='#collapse1'>Tab 1</a>";
c_div_maker = c_div_maker + "</div>";
c_div_maker = c_div_maker + "<div id='collapse1' class='panel-collapse collapse'>";

//<video id='vid_source_"+c_ccnum+"' class='c_lesson_width' width='100%;' controls onplay='video_number("+c_ccnum+")'><source src='"+c_ac_data_stream[acc_tab_cnt][ac_vid_test][0].Video+"' id='vid_source' type='video/mp4'></video>

c_div_maker = c_div_maker + "<div class='panel-body'>  </div><br><br><button onclick='tbutton(1)'>Test 1</button>";
c_div_maker = c_div_maker + "</div>";
c_div_maker = c_div_maker + "</div>";
*/


			
			break;

			case 1:
					
					switch(String(Object.keys(c_ac_data_stream[acc_tab_cnt])))
						{
							case "Info_Box":
								c_div_maker = c_div_maker + "<div id='jb_ac_"+c_ccnum+"_"+acc_Count+"' class='panel-collapse collapse'><div class='panel-body'></div>";
								
								c_div_maker = c_div_maker + "</div></div>";
								//Jcc_Comp_Maker = Jcc_Comp_Maker +  "<div style='background-color:"+acc_setup_array[3]+";' id='collapse"+jcc+"_"+acc_Count+"' class='panel-collapse collapse'><div class='panel-body'>"+ jb_Acc_Con +"</div></div>";

							break;

							case "Video_Files_New":                        //onClick='javascript:view_lesson("+gtMain[0]+","+gtMain[1]+",\"TC\")'

								c_div_maker = c_div_maker + "<div id='jb_ac_"+c_ccnum+"_"+acc_Count+"' class='panel-collapse collapse'>";  // jb_ac_"+c_ccnum+"_"+acc_Count+"
								c_div_maker = c_div_maker + "<div class='panel-body'>";


								var ac_vid_test = String(Object.keys(c_ac_data_stream[acc_tab_cnt])); //  c_ac_data_stream[acc_tab_cnt];

								//alert("From Accordion" + c_ac_data_stream[acc_tab_cnt][ac_vid_test]);
								//jc_vid();

								Video_Files_New(c_ac_data_stream[acc_tab_cnt][ac_vid_test],c_ccnum,"acc");
								
								//Video_Files_New(c_ac_data_stream[acc_tab_cnt][ac_vid_test],c_ccnum,1);
							/*
								c_div_maker = c_div_maker + "<video id='vid_source_"+c_ccnum+"' class='c_lesson_width' width='100%;' controls onplay='video_number("+c_ccnum+")'><source src='"+c_ac_data_stream[acc_tab_cnt][ac_vid_test][0].Video+"' id='vid_source' type='video/mp4'></video>"; // Works

								c_div_maker = c_div_maker + "<br><br><div>This is a paragraph description</div>"; // Works
							*/		
								
								
									//alert(c_ac_data_stream[acc_tab_cnt].Video_Files_New[0].Video);

									//alert(c_ac_data_stream[acc_tab_cnt][ac_vid_test][0].Video);  // Works


								c_div_maker = c_div_maker + "</div>";
								c_div_maker = c_div_maker + "</div></div>";

							break;



						}




//alert(String(Object.keys(c_ac_data_stream[acc_tab_cnt])));

			break;


	}

	//Jcc_Comp_Maker = Jcc_Comp_Maker + "<div onclick='acc_clicked("+jcc+","+acc_Count+");' class='panel'><div class='panel-heading' data-toggle='collapse' data-parent='#jb_accordion_" + jcc +"' data-target='#collapse"+jcc+"_"+acc_Count+"' style='background-color:"+acc_setup_array[2]+";border-radius:"+acc_setup_array[4]+"'><"+acc_ck.Label_Font_Size+" class='panel-title' style='color:"+acc_setup_array[1]+";text-align:"+acc_setup_array[0]+"'><a data-toggle='collapse' data-parent='#jb_accordion_" + jcc +"' href='#collapse"+jcc+"_"+acc_Count+"'><para_head>"+sSelections[jcc][snglBld[jcc]][accm].Acc_Label+"</para_head></a></"+acc_ck.Label_Font_Size+"></div>";		

}


/*
for(var acc_test = 0; acc_test < acc_setup_array.length; acc_test++)
{

	//alert(acc_setup_array[acc_test]);

}
*/




c_div_maker = c_div_maker + "</div></div>";



c_comp_Array[c_ccnum] = c_div_maker;

comp_Array_test();

}

function acc_clicked(cur_ac_num,cur_acc_count)
{

//  <button type="button" class="btn btn-info" data-toggle="collapse" data-target="#demo">Simple collapsible</button>
//<div id="demo" class="collapse">

	alert("cur_ac_num: " + cur_ac_num + " | cur_acc_count: " + cur_acc_count);
	
	
}

