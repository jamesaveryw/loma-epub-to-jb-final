
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// -------<(  Info Box Begin 02/21/2020 )>-------
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-



function Info_Box(c_compData,c_ccnum,acfl)
{
//	console.log("infobox")

    var c_new_icon;
    var c_child_data = [];
    var c_cmp = [];
	var c_ccData = [[],[]];
	// JW 03-24-21:
	// 1: Closing tag is dependent on whether the info box is interactive or static.
	// Reasoning: Since info boxes can either be buttons or static, and we're using the button tag now for the interactive version, the closing tag isn't always the same.



	
	let closeTag = '</span>';

	if(typeof acfl !== "undefined")
		{

			for(var c_count = 0; c_count < c_compData.length; c_count++)
			{
				
				if(Object.keys(c_compData[c_count]).length > 1)
					{
	
						c_child_data[c_count] = (Object.keys(c_compData[c_count]))
					
						for(var c_child_num = 0; c_child_num < Object.keys(c_compData[c_count]).length; c_child_num++)
							{
								
								c_cmp[c_child_num] =  c_compData[c_count][c_child_data[c_count][c_child_num]];

							}
	
					}
			}

		c_mlf_test();
		
		
						if(c_compData[7].Icon !== "undefined")
							{
								c_new_icon = comp_images + c_compData[7].Icon;
							}
						
						if(c_compData[7].Icon === "undefined")
							{
								c_new_icon = comp_images + c_compData[7].Icon;
							}
	
	//============================
	
	// JW: 03-24-21
	// 1: Added class
	// Reasoning: Need to be able to discern parent of event target later.
	c_div_maker = c_div_maker +  "<div id='infobox_"+c_ccnum+"' class='col-lg-12 col-md-12 col-xs-12 info-comp-container'>";	
	
	
	if(c_compData[9].selectable === "true")	
		{
			c_make_info_modal();
			// JW 03-24-21:
			// 1: Changed span to button so it responds to click and keydown
			// Reasoning: Use semantic tags if possible. Less work to hook up interactive functionality
			// 2: Added class to button.
			// Reasoning: Needed an easy way to change default style of buttons.
			// 3: Added openModal event to onclick.
			// Reasoning: When a modal is opened, we need to keep track of what triggered the modal, move focus to the modal, disable scrolling, and trap focus within the open modal.
			c_div_maker = c_div_maker + "<br><br><button class='info-btn' onclick='c_info_box_event("+c_ccnum+"); openModal(event);' style='cursor: pointer; background-color:"+c_compData[6].Background_Color+"; outline: "+c_compData[4].Border_Thickness+" "+c_compData[3].Border_Style+" "+c_compData[2].Border_Color+"; padding: 20px; display:inline-block';>";

			// JW 03-24-21
			// 1: Change close tag from default </span> to </button> for interactive info boxes.
			// Reasoning: It will be a button tag for interactive and span for static.
			closeTag = '</button>';
			
		}
			else
				
		{

			c_div_maker = c_div_maker + "<br><br><span style='background-color:"+c_compData[6].Background_Color+"; outline: "+c_compData[4].Border_Thickness+" "+c_compData[3].Border_Style+" "+c_compData[2].Border_Color+"; padding: 20px; display:inline-block';>";
		}	
	
	// JW 03-24-21:
	// 1: Changed the closing </span> tag to closeTag var.
	// Reasoning: Sometimes this will be span and sometimes button depending on interactivity of info box.		
	// 2: Changed the <h3> tag to a <p> tag with specific class for base styling.
	// Reasoning: The heading tags should be semantically, not to size text.
	
	//alert(c_compData[7]);

	c_div_maker = c_div_maker + "<img style='text-align:left; display:"+c_compData[8].Icon_On_Off+"; width: 20px ;height:auto' src='"+c_new_icon+ "' alt='"+c_compData[7].Icon_alt+"'/><p class='info-btn-title' style='color:"+c_compData[1].Text_Color+";text-align:"+c_compData[5].Text_Alignment+"'>" + c_compData[0].Info_Box_Text +"</p>"+ closeTag + "<br><br>";	
	
	

	c_div_maker = c_div_maker + "</div>";	

	
		}

	if(typeof acfl === "undefined")	
		{



			for(var c_count = 0; c_count < c_compData.length; c_count++)
			{
				if(Object.keys(c_compData[c_count]).length > 1)
					{
	
						c_child_data[c_count] = (Object.keys(c_compData[c_count]))
					
						for(var c_child_num = 0; c_child_num < Object.keys(c_compData[c_count]).length; c_child_num++)
							{
								
								c_cmp[c_child_num] =  c_compData[c_count][c_child_data[c_count][c_child_num]];

							}
	
					}
			}
	
		
		c_mlf_test();
		
		
						if(c_compData[7].Icon !== "undefined")
							{
								c_new_icon = comp_images + c_compData[7].Icon;
							}
						
						if(c_compData[7].Icon === "undefined")
							{
								c_new_icon = comp_images + c_compData[7].Icon;
							}
	
	//============================
		
	c_div_maker =  "<div id='infobox_"+c_ccnum+"' class='col-lg-12 col-md-12 col-xs-12 info-comp-container'>";	
	
	if(c_compData[9].selectable === "true")	
		{
			c_make_info_modal();
	
			// JW 03-24-21:
			// 1: Changed span to button so it responds to click and keydown
			// Reasoning: Use semantic tags if possible. Less work to hook up interactive functionality
			// 2: Added class to button.
			// Reasoning: Needed an easy way to change default style of buttons.
			// 3: Added openModal event to onclick.
			// Reasoning: When a modal is opened, we need to keep track of what triggered the modal, move focus to the modal, disable scrolling, and trap focus within the open modal.
			c_div_maker = c_div_maker + "<br><br><button class='info-btn' onclick='c_info_box_event("+c_ccnum+"); openModal(event);' style='cursor: pointer; background-color:"+c_compData[6].Background_Color+"; outline: "+c_compData[4].Border_Thickness+" "+c_compData[3].Border_Style+" "+c_compData[2].Border_Color+"; padding: 20px; display:inline-block';>";
			
			// JW 03-24-21
			// 1: Change close tag from default </span> to </button> for interactive info boxes.
			// Reasoning: It will be a button tag for interactive and span for static.
			closeTag = "</button>"
			
		}
			else
				
		{

			c_div_maker = c_div_maker + "<br><br><span style='background-color:"+c_compData[6].Background_Color+"; outline: "+c_compData[4].Border_Thickness+" "+c_compData[3].Border_Style+" "+c_compData[2].Border_Color+"; padding: 20px; display:inline-block';>";
		}	

	// JW 03-24-21:
	// 1: Changed the closing </span> tag to closeTag var.
	// Reasoning: Sometimes this will be span and sometimes button depending on interactivity of info box.			
	// 2: Changed the <h3> tag to a <p> tag with specific class for base styling.
	// Reasoning: The heading tags should be semantically, not to size text.
	c_div_maker = c_div_maker + "<img style='text-align:left; display:"+c_compData[8].Icon_On_Off+"; width: 20px ;height:auto' src='"+c_new_icon+ "' alt='"+c_compData[7].Icon_alt+"'/><p class='info-btn-title' style='color:"+c_compData[1].Text_Color+";text-align:"+c_compData[5].Text_Alignment+"'>" + c_compData[0].Info_Box_Text +"</p>"+ closeTag +"<br><br>";	
		
	c_div_maker = c_div_maker + "</div>";	
	
	c_comp_Array[c_ccnum] = c_div_maker;
	
	
	comp_Array_test();
	c_div_maker = "";
		}





		function c_make_info_modal()
		{
	//-------<(  Modal Box )>-------
	
		// JW: 03-24-21
		// 1: Added a container in between the modal backdrop and the modal content.
		// Reasoning: Need a container to collect all focusable elements in the modal to implement a tab trap and signify to screen readers that this is a modal.
		c_div_maker = c_div_maker + "<div id='c_info_Modal_"+c_ccnum+"' class='c_jb_modal'><div class='c_jb_modal_container' tabindex='-1' 'role'='dialog' 'aria-modal'='true' aria-labelledby='c_info_Modal_title_"+c_ccnum+"'>";	
	//-------<>											
	//Header
	//-------<>
		// JW: 03-25-21
		// 1: Changed title tag from <p> to <h2>.
		// Reasoning: Modal titles need to be semantically marked as heading. Since they exist outside the flow of the rest of the document, the heading will always be <h2> for modals.
		// 2: Added an id attr to <h2>.
		// Reasoning: Modal titles should be programmatically associated modal container.
		c_div_maker = c_div_maker + "<div class='c_jb_modal-hdr-ftr' style='background-color:"+c_compData[9].Header_color+"'><h2 id='c_info_Modal_title_"+c_ccnum+"' style='text-align:"+c_compData[9].title_text_alignment+" ;color:"+c_compData[9].title_text_color+"; font-size:"+c_compData[9].title_text_size+"'>"+c_compData[9].title_text+"</h2></div>";											
	//-------<>												
	//Body
	//-------<>
	//overflow-y: scroll											
	c_div_maker = c_div_maker + "<div class='c_jb_modal-content' style='overflow-y: scroll;background-color:"+c_compData[9].Body_color+"'>";
			for(var c_mdl = 10; c_mdl < c_compData.length; c_mdl++) // id='jb_inf0_modal_main_text'
				{											
	c_div_maker = c_div_maker + "<p style='text-align:"+c_compData[9].body_text_alignment+";color:"+c_compData[9].body_text_color+";font-size:18px'><jb8>"+c_compData[c_mdl].body_text+"</jb8></p>";
	
				}								
	c_div_maker = c_div_maker + "</div>";											
	
	// JW: 03-25-21
	// 1: Removed "javascript:" from onclick.
	// Reasoning: I need to add a second event listner to handle accessibility around closing the modal.
	// 2: Added modalClose event to onclick.
	// Reasoning: Closing a modal should return focus to the element that triggered the modal and allow scrolling again.
	// 3: Added a class to the close button.
	// Reasoning: The ESC key needs to close the modal as well. Use the class to get the onclick attribute and clone the functions included.
	c_div_maker = c_div_maker + "<div class='c_jb_modal-hdr-ftr'><span class='c_jb_close' id='info_btn'></span><button class='modal-close-btn' onclick='close_Info_modal("+c_ccnum+"); modalClose(event);'>Close</button></div>";		
			
			
	c_div_maker = c_div_maker + "</div></div>";		
	//-------<(  Modal Box )>-------
	
	}
	
}
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// -------<(  Info Box End 02/21/2020 )>-------
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-