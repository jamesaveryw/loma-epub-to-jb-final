

var acc_setup_array = [];
var acc_tab_array = [];
var ac_function_name;
var acc_Count = 0;
var acc_multi = [[],[]];
var acc_label_array = [];
var backdrop_color_Array = [];
var pvid_array_count = [[],[]];
let tab_array = [];
let whole_tab_array = [[],[]];

function Accordion(c_ac_data_stream, c_ccnum) {

//% 2
	
//console.log(Object.values(c_ac_data_stream))
//console.log(c_ac_data_stream.length);

let [CurAcc] = [c_ac_data_stream];




//console.log("one: " + CurAcc[2].Acc_Label);

//const lable = CurAcc[2];
console.log(CurAcc);


	c_div_maker = "";
	c_div_maker = c_div_maker + "<div id='jb_accordion_comp_"+c_ccnum+"' class='col-lg-12 col-md-12 col-xs-12 container' style='margin-top:20px;'>";
	c_div_maker = c_div_maker + "<div class='c_jb_car_acc_wd jb_accord_" + c_ccnum + " panel-group' id='jb_accordion_" + c_ccnum + "'>"; // Panel-Group 

	//c_div_maker = c_div_maker + "<div class='panel-group'>";
	c_div_maker = c_div_maker + "<div class='panel panel-default'>";
	c_div_maker = c_div_maker + "<div class='panel-heading'>";
//	c_div_maker = c_div_maker + "<h4 class='panel-title'>";

	//c_div_maker = c_div_maker + "<jb2 class='panel-title' role='heading'><button class='btn' style='margin-top:20px' data-toggle='collapse' data-parent='#jb_accordion_" + c_ccnum + "'' href='#collapse" + c_ccnum + "_" + 1 + "' onclick='acc_select(" + c_ccnum + "," + acc_tab_cnt + ")' aria-controls='collapse" + c_ccnum + "_" + acc_Count + "'>" + c_ac_data_stream[acc_tab_cnt].Acc_Label + "</button>"; // make acc_label_array 2d

	c_div_maker = c_div_maker + "  <a data-toggle='collapse' href='#collapse1'>"+CurAcc[2].Acc_Label+"</a>";
	//c_div_maker = c_div_maker + "	</jb2>";
	c_div_maker = c_div_maker + "  </div>";
	c_div_maker = c_div_maker + "  <div id='collapse1' class='panel-collapse collapse'>";
	c_div_maker = c_div_maker + "	<div class='panel-body'>Panel Body</div>";
	//c_div_maker = c_div_maker + "	<div class='panel-footer'>Panel Footer</div>";
	c_div_maker = c_div_maker + "  </div>";
	c_div_maker = c_div_maker + "</div>";
	//c_div_maker = c_div_maker + "</div>";




	/*
	for(let c = 2; c < CurAcc.length; c++)
				{
					if(c % 2 === 0)
						{
							tab_array[c] = CurAcc[c].Acc_Label;
						}
						whole_tab_array[c_ccnum] = tab_array;
						//console.log(whole_tab_array[c_ccnum]);
				}
*/

				c_div_maker = c_div_maker + "</div>";

	c_div_maker = c_div_maker + "</div>";

	c_comp_Array[c_ccnum] = c_div_maker;
	comp_Array_test();

}

/*
        <div class="panel-group">
          <div class="panel panel-default">
            <div class="panel-heading">
              <h4 class="panel-title">
                <a data-toggle="collapse" href="#collapse1">Collapsible panel</a>
              </h4>
            </div>
            <div id="collapse1" class="panel-collapse collapse">
              <div class="panel-body">Panel Body</div>
              <div class="panel-footer">Panel Footer</div>
            </div>
          </div>
        </div>
*/





/*
var acc_setup_array = [];
var acc_tab_array = [];
var ac_function_name;
var acc_Count;
var acc_multi = [[],[]];
var acc_label_array = [];
var backdrop_color_Array = [];
var pvid_array_count = [[],[]];




function Accordion(c_ac_data_stream, c_ccnum) {
	var acc_set = c_ac_data_stream[0];
	var ac_comp_data;


console.log("Label_Alignment: " + c_ac_data_stream[0].Label_Alignment)


	acc_cur_num = c_ccnum;

	acc_setup_array = acc_set;
	
//console.log(acc_setup_array);

	if (typeof c_ac_data_stream[1].Dropdown_Background_Color === "string") {

		delete c_ac_data_stream[1].Dropdown_Background_Color; // removes the Dropdown_Background_Color if present
		c_ac_data_stream.splice(0, 1) // removes the item from the array

	}

	acc_Count = 0;

	c_div_maker = "";
	c_div_maker = c_div_maker + "<div id='jb_accordion_comp_"+c_ccnum+"' class='col-lg-12 col-md-12 col-xs-12 container' style='margin-top:20px;'>"; // Accordion Start
	c_div_maker = c_div_maker + "<div class='c_jb_car_acc_wd' jb_accord_" + c_ccnum + " panel-group' id='jb_accordion_" + c_ccnum + "'>"; // Panel-Group Open
	comp_ids[c_ccnum] = "jb_accordion_comp_" + c_ccnum;

	// 
	for (var acc_tab_cnt = 1; acc_tab_cnt < c_ac_data_stream.length; acc_tab_cnt++) {
//console.log("c_ac_data_stream: " + c_ac_data_stream[0].Label_Alignment );
		switch (acc_tab_cnt % 2) {
			case 1: // Tab Data

				acc_Count = (acc_Count + 1);




//console.log("c_ac_data_stream[acc_tab_cnt].Acc_Label_Background_color: " + c_ac_data_stream[acc_tab_cnt].Acc_Label_Background_color);

				c_div_maker = c_div_maker + "<div class='panel'>"; //  Tab panel start
				c_div_maker = c_div_maker + "<div class='panel-heading' style='background-color:" + c_ac_data_stream[acc_tab_cnt].Acc_Label_Background_color + "'>"; // Heading Start

				
				// JW 02-24-21:
				// 1: Added role="heading" and aria-level="[num] to <jb2>
				// Reasoning: The element surrounding the heading button should have a heading role and level.
				// NOTE: The heading level is set by accessibility.js based on the nearest previous heading on 
				// the page.
				// 2: Switch from <a> to <button>
				// Reasoning: Accordion tab headers should be triggered with either the Enter or Space key.
				// Anchors only respond to the Enter key. Buttons respond to both the Enter and Space keys.
				// NOTE: Added new CSS to a11y.css to update styling so this looks like it did when it was
				// an anchor tag.
				// 3: Added aria-controls attr to button
				// Reasoning: Screenreaders use this attribute to associate the button with the content it 
				// will reveal when activated.
				c_div_maker = c_div_maker + "<jb2 class='panel-title' role='heading'><button style='color:" + c_ac_data_stream[acc_tab_cnt].Acc_Label_Color + "' data-toggle='collapse' data-parent='#jb_accordion_" + c_ccnum + "'' href='#collapse" + c_ccnum + "_" + acc_Count + "' onclick='pvid(" + c_ccnum + "," + acc_Count + ")' aria-controls='collapse" + c_ccnum + "_" + acc_Count + "'>" + c_ac_data_stream[acc_tab_cnt].Acc_Label + "</button>"; // make acc_label_array 2d	



				c_div_maker = c_div_maker + "</div>";

				break;

			case 0: // Component Data

				var comp_in_accordion = String(Object.keys(c_ac_data_stream[acc_tab_cnt]));

				var ex_comp_data = String(Object.keys(c_ac_data_stream[acc_tab_cnt]));

				c_div_maker = c_div_maker + "<div id='collapse" + c_ccnum + "_" + acc_Count + "' class='panel-collapse collapse' style='background-color:" + c_ac_data_stream[acc_tab_cnt].Drop_Back_Color + "'>";

				c_div_maker = c_div_maker + "<div class='panel-body new_accordion'>"; // 5 Inside Open

				acc_function_name = comp_in_accordion;



				var c_acc_function = window[acc_function_name];
/ *
				console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-")
				console.log("acc_tab_cnt = " + acc_tab_cnt);
				console.log("ex_comp_data = " + ex_comp_data);
				console.log("acc_Count = " + acc_Count);
				console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-")
* /
				c_acc_function(c_ac_data_stream[acc_tab_cnt][ex_comp_data], acc_Count, 1);

				c_div_maker = c_div_maker + "</div>";
				c_div_maker = c_div_maker + "</div>";

				c_div_maker = c_div_maker + "</div>";


				break;



		}

	}


	c_div_maker = c_div_maker + "</div>";
	c_div_maker = c_div_maker + "</div>";

	c_comp_Array[c_ccnum] = c_div_maker;
	comp_Array_test();


}

function pvid(cmpnm, acv) {
	pvid_array_count[cmpnm] = acc_vid_array;

	for (var pvid_count = 1; pvid_count < acc_vid_array.length; pvid_count++) {
		if (typeof acc_vid_array[pvid_count] !== "undefined") {
			document.getElementById(acc_vid_array[pvid_count]).pause();
		}

		if (typeof sa_vid_array[pvid_count] !== "undefined") {
			document.getElementById(sa_vid_array[pvid_count]).pause();
		}
	}

}
*/