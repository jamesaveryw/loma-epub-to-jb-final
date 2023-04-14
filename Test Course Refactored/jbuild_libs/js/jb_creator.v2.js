var jcc_Setup;
var jcc_page_data;
var jcc_Main_Page = [];
var jcc_page_content;
var jcc_function_call;
var jcc_Select = [];
var snglBld = [];
var comp_count;

var Jcc_Content = [];

var divData = [];
var dividerData = [];
var c_info_box_Data = [];
var c_heading_Data = [];
var current_comp_number = [];
var Jcc_Comp_Maker = [];
var Jcc_Component_File = [];
var Jcc_Lesson_File;

var Jcc_Comp = [];
var Jcc_Two;
var jcc_Three;
var script;
var c_ModLessonFolder;

var p_modulelessonFolder;
var c_current_comp_num;

var c_components_Array = [];
var c_complete_component_Array = [[],[]];
var c_jcb_Array = [];
var c_ccnum;


 //Create the full path to the html file...	
 //	moduleFolder = portalSetup.Course_Folder + "/Modules/Mod_0" + (mdl_num + 1) + "/";

function Lesson_Data_File(Jcc)
{
	

	
	
	jcc_Setup = Object.keys(Jcc[0]);
	jcc_page_data = Object.keys(Jcc[0][jcc_Setup[0]]); // Page_Setup
	Jcc_Content = Object.keys(Jcc[0][jcc_Setup[1]]);
	
	
	
	

	for(var hdrtest = 0; hdrtest < Jcc_Content.length ; hdrtest++)
		{
			//alert( Jcc_Content[hdrtest] );
			
			//alert( Object.keys(Jcc[0][jcc_Setup[1]][Jcc_Content[hdrtest]]) );  // this gets the name of the component

			Jcc_Comp[hdrtest] = Object.keys(Jcc[0][jcc_Setup[1]][Jcc_Content[hdrtest]])
			
			
			//alert("Comp: " + Jcc_Comp[hdrtest]);
			
			//alert("Obj: " +  Object(Jcc[0][jcc_Setup[1]][Jcc_Content[hdrtest]]) )
			//alert(Jcc[0][jcc_Setup[1]][Jcc_Content[hdrtest]].length)
		}
	
	//	
	//document.getElementById("Main_Page").style.background = Jcc[0][jcc_Setup[0]][jcc_page_data[0]];
	//document.getElementById("pTitle").style.color = Jcc[0][jcc_Setup[0]][jcc_page_data[1]];
	
	////document.getElementById("Page_Title").innerHTML = Jcc[0][jcc_Setup[0]][jcc_page_data[2]];
	////document.getElementById("Lesson_Title_Text").innerHTML = Jcc[0][jcc_Setup[0]][jcc_page_data[3]];

	
/*	
	
*/	
	
	
	
	for(var comp_num = 0; comp_num < Jcc_Content.length; comp_num++)
		{

			//alert("Jcc_Content.length: " + Jcc_Content.length);
			
			Jcc_Component_File[comp_num] = Jcc[0][jcc_Setup[1]][Jcc_Content[comp_num]];

			
			switch(String(Object.keys(Jcc_Component_File[comp_num])))	
							   
				{
						
					case "Info_Box":
						
						//c_component_Array[comp_num] = 
					//current_comp_number[comp_num] = comp_num;
					//	c_current_comp_num = comp_num;
					c_info_box_Data = Jcc_Component_File[comp_num].Info_Box;
						
					c_components_Array[comp_num] = "c_Info_Box(c_info_box_Data,comp_num)";   //(c_info_box_Data,comp_num);	
						
						//alert("Info_Box current_comp_number[comp_num]: " + current_comp_number[comp_num]);
						//comp_count = comp_num;

						var c_info_box_script = document.createElement('script');
/*						
							c_info_box_script.onload = function ()
							{	
								//alert("Info box c_current_comp_num: " + c_current_comp_num);
								
								//c_Info_Box(c_info_box_Data,comp_num)
								
								//c_current_comp_num = 0;
							};
*/
							c_info_box_script.src = "../../../jbuild_libs/js/comps/Info_Box.js";

							document.body.appendChild(c_info_box_script);
						
					break;
						
						
					case "Heading_New":
				console.log('inserting Heading_New')
						//current_comp_number[comp_num] = comp_num;
						//c_current_comp_num = comp_num;
						//alert("Heading current_comp_number[comp_num]: " + current_comp_number[comp_num]);
						
						c_heading_Data = Jcc_Component_File[comp_num].Heading_New;
						c_components_Array[comp_num] = "c_Header(c_heading_Data,comp_num)";     //(c_heading_Data,comp_num);
						
						//comp_count = comp_num;
						
						
						var c_heading_script = document.createElement('script');
				/*		
							c_heading_script.onload = function () {
								//alert("Heading New c_current_comp_num: " + c_current_comp_num);
								c_Header(c_heading_Data,comp_num);
								//c_current_comp_num = 0;
							};
							
				*/
							c_heading_script.src = "../../../jbuild_libs/js/comps/Heading_New.js";
							document.body.appendChild(c_heading_script);
						
					break;						
						
/*						
					case "Divider":
					current_comp_number[comp_num] = comp_num;
					//alert("Divider case: " + comp_num);	
					dividerData = Jcc_Component_File[comp_num].Divider;

						comp_count = comp_num;

						var divider_script = document.createElement('script');
							divider_script.onload = function () {
								//alert("comp_count: " + comp_count);
								//Divider(dividerData,comp_count);
								Divider(dividerData,current_comp_number);
							};
							divider_script.src = "Jb_Libraries/js/comps/Divider.js";

							//document.head.appendChild(script);
							document.body.appendChild(divider_script);
						
					break;
						
	
*/					
					
				}

		
			
		}
	
/*	
window.onload = function () {
    if (localStorage.getItem("hasCodeRunBefore") === null) {
        /** Your code here. * * /
        localStorage.setItem("hasCodeRunBefore", true);
    }
}	
*/

for(var e_script=0; e_script < c_components_Array.length; e_script++)
	{
		switch(c_components_Array[e_script])
			{
				case "c_Header(c_heading_Data,comp_num)":
					
					//alert(localStorage.getItem("c_Header"));	
					
					//alert("c_Header e_script: " + e_script);
					c_ccnum = e_script;
							c_heading_script.onload = function () {
								c_Header(c_heading_Data,e_script);
							};
					
				break;	
					
				case "c_Info_Box(c_info_box_Data,comp_num)":
					//alert(localStorage.getItem("c_Info_Box"));
					//alert("c_Info_Box e_script: " + e_script);
					c_ccnum = e_script;
							c_info_box_script.onload = function ()
							{	
								c_Info_Box(c_info_box_Data,e_script);
							};
							
				break;						
			}
		
		
		
	}

	
}
//==================================================================================
//==================================================================================






function Jcc_Component_Builder(JCB) //,ccnum
{
//alert("JCB: " + JCB);
		//c_jcb_Array[c_cur_lesson_length] = JCB;	
//alert(c_jcb_Array.length);

if(c_jcb_Array.length === 0)
	{
		//alert("c_jcb_Array.length: " + c_jcb_Array.length);
		c_jcb_Array[c_jcb_Array.length] = JCB;
		

	}
	
if(c_jcb_Array.length > 0)
	{
		//alert("c_jcb_Array.length: " + c_jcb_Array.length);
		c_jcb_Array[c_jcb_Array.length] = JCB;
	}	

/*
for(var c_cur_lesson_length = 0; c_cur_lesson_length < Jcc_Content.length; c_cur_lesson_length++)
		{
			//alert(c_cur_lesson_length);
			
			//c_jcb_Array[c_cur_lesson_length] = JCB;
			
		}
*/	
Jcc_Comp_Maker = "<div class='col-lg-12 col-md-12 col-xs-12'>"; //style='height:100px; background-color:red'	

//alert(c_jcb_Array.length);	
Jcc_Comp_Maker = Jcc_Comp_Maker + c_jcb_Array;
	//Jcc_Comp_Maker = Jcc_Comp_Maker + JCB;
	
	
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>"
document.getElementById("JcComponents").innerHTML = Jcc_Comp_Maker;

}

function c_mlf_test()
{
	c_ModLessonFolder = (typeof p_modulelessonFolder);
}

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//-------<( info box modal open and close )>-------
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
function c_info_box_event(ibe)
{
	//$('#myModal_'+ ibe).modal('show');
	document.getElementById("c_info_Modal_"+ ibe).style.display = "block";
	document.getElementById("c_info_Modal_"+ ibe).style.marginTop = "80px";	
	
/*	
	var infoboxid = ("infobox_" + ibe);


var infopopStatement = {

                "type": "infopop",
                "verb": "viewed",
                "module": bCurrentMod + 1,
                "lesson": bCurrentLsn + 1,
                //"page": bCurrentPag + 1,
				"page": np_num,
                "activity": "http://id.tincanapi.com/activitytype/resource",
                "objectID": infoboxid,
}	
	
	if(typeof isXAPI !== "undefined"){

		LRSSend(infopopStatement);

	}	
	
*/	

}

	
function close_Info_modal(cim)
	{
		document.getElementById("c_info_Modal_"+ cim).style.display = "none";
		//document.getElementById("c_info_Modal_"+ ibe).style.marginTop = "80px";
	}
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//-------<( info box modal open and close )>-------
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-