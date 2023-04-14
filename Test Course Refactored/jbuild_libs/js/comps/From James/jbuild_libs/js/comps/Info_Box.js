
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// -------<(  Info Box Begin 02/21/2020 )>-------
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
function Info_Box(c_compData,c_ccnum,acfl)
{

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
		
		
						if(c_ModLessonFolder !== "undefined")
							{
								c_new_icon = "jbuild_libs/images/" + c_compData[7].Icon;
							}
						
						if(c_ModLessonFolder === "undefined")
							{
								c_new_icon = "../../../jbuild_libs/images/" + c_compData[7].Icon;
							}
	
	//============================
	
	// JW: 03-24-21
	// 1: Added class
	// Reasoning: Need to be able to discern parent of event target later.
	c_div_maker = c_div_maker +  "<div id='infobox_ "+c_ccnum+"' class='col-lg-12 col-md-12 col-xs-12 info-comp-container'>";	
	
	
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
		
		
						if(c_ModLessonFolder !== "undefined")
							{
								c_new_icon = "jbuild_libs/images/" + c_compData[7].Icon;
							}
						
						if(c_ModLessonFolder === "undefined")
							{
								c_new_icon = "../../../jbuild_libs/images/" + c_compData[7].Icon;
							}
	
	//============================
		
	c_div_maker =  "<div id='infobox_ "+c_ccnum+"' class='col-lg-12 col-md-12 col-xs-12 info-comp-container'>";	
	
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
			c_div_maker = c_div_maker + "<br><br><button class='info-btn' onclick='let activeFocus;
			// global empty array for focusable elements
			let focusableElements = [];
			const focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';
			const keyCodes = Object.freeze({
				'TAB': 9,
				'RETURN': 13,
				'ESC': 27,
				'SPACE': 32,
				'PAGEUP': 33,
				'PAGEDOWN': 34,
				'END': 35,
				'HOME': 36,
				'LEFT': 37,
				'UP': 38,
				'RIGHT': 39,
				'DOWN': 40
			});
			
			/*************** HELPERS ***************/
			/***************************************/
			// create array from from querySelector
			// Example: let arrayOfElements = slice(document.querySelectorAll('selector'));
			function slice(nodes) {
				return Array.prototype.slice.call(nodes);
			}
			
			// find nearest element based on target and selector
			// Example: let nearestEl = nearestElement(target, selectors);
			function findNearestHeader(targetElement) {
				// set heading level to null
				let headingLevel = null;
				// set heading selectors
				let selectors = 'h1, h2, h3, h4, h5, h6, [role="heading"]';
				// see if closest header is in this element's parent
				let closestHeader = targetElement.closest(selectors);
			
				// if no closest header so far, traverse through siblings
				if (closestHeader === null) {
					// get parent node of target element
					let parent = targetElement.parentNode;
			
					// set new parent to sibling and check if new parent has any headings
					// keep looking if it doesn't
					while ((parent = parent.previousSibling) && parent.querySelectorAll(selectors).length === 0);
			
					// if we found a sibling with a header
					if (parent && parent.querySelectorAll(selectors).length > 0) {
						// save all headings
						let headers = slice(parent.querySelectorAll(selectors));
						// set closest heading to last heading in array
						closestHeader = headers[headers.length - 1];
			
						// if the heading is an <h> tag, grab the number from
						// the element tag name
						if (closestHeader.tagName.match(/h(\d)/i)) {
							headingLevel = parseInt(closestHeader.tagName.replace(/h(\d)/i, '$1'));
						}
						// if the heading is using role="heading", it should also have
						// aria-level attr. Grab the level from the attr
						else if (closestHeader.getAttribute('aria-level')) {
							headingLevel = parseInt(closestHeader.getAttribute('aria-level'));
						}
					}
			
					// otherwise headingLevel is still null
					
				}
				
				return headingLevel;
			}
			
			// set list of attributes on element
			// Example: setAttrs(element, {'attribute-name': 'value', 'attribute-name': 'value', 'attribute-name': 'value'});
			function setAttrs(el, attrs) {
				for (let key in attrs) {
					el.setAttribute(key, attrs[key]);
				}
			}
			
			// returns the ancestor of element based on class, node 
			// type, or ID.
			function findAncestor(el, type, selector) {
				if (type == 'class') {
					while ((el = el.parentNode) && !el.classList.contains(selector));
			
					return el;
				}
				else if (type == 'node') {
					while ((el = el.parentNode) && el.tagName != selector);
					
					return el;
				}
				else if (type == 'id') {
					while ((el = el.parentNode) && el.getAttribute('id') != selector);
					
					return el;
				}
				else {
					return null;
				}
			}
			/***************************************/
			/***************************************/
			
			// Document loaded
			$(document).ready(function(){
				// console.log("a11y ready");
			
				// Make sure JB Engine has loaded page
				var jbReady = setInterval(function(){
					// console.log("checking engine build ready");
					if (document.querySelectorAll('#JcComponents > .Main_div_settings')) {
						clearInterval(jbReady);
						
						// changes accordion heading level based on 
						// previous heading leves in document
						accordions();
						// changes the keyterm span to a button
						// so ENTER and SPACE also activate it
						keyterms();
					}
				}, 500);
			});
			
			function accordions() {
				// save all accordions to an array
				let accordions = slice(document.querySelectorAll('.c_jb_car_acc_wd'));
			
				for (let accordion of accordions) {
					// determine previous heading level on page
					// add one to get the accordion's heading level
					let level = findNearestHeader(accordion) + 1;
					// save all headings to an array
					let headings = accordion.querySelectorAll('[role="heading"]');
					for (let heading of headings) {
						// set the aria-level attr for the heading;
						heading.setAttribute('aria-level', level);
					}
				}
			}
			
			function keyterms() {
				// save all keyterms to an arry
				let keyTerms = slice(document.querySelectorAll('.keyterm'));
			
				for (let keyTerm of keyTerms) {
					// create a new button element for key terms
					let newKeyTerm = document.createElement('button');
					// copy html to new button element
					newKeyTerm.innerHTML = keyTerm.innerHTML;
					// add class to new button element
					newKeyTerm.classList.add('keyterm');
					// replace span with button element
					keyTerm.parentNode.replaceChild(newKeyTerm, keyTerm);
					
					// only attach open modal if page is being 
					// served inside the portal
					if (document.querySelector('header')) {
						newKeyTerm.addEventListener('click', openModal);
					}
			
					// TODO: After portal refactor, need to hook up event listener
					// to activate the keyterm button
				}
			}
			
			function openModal(e) {
				console.log("open modal");
				// set active element to return focus to
				activeFocus = document.activeElement;
				let target = e.currentTarget;
				let targetClass = target.getAttribute('class');
				let parentClass;
				let parent;
				let modalContClass;
				let modalCont;
			
				// test targetClass to determine parent class and modal container class
				switch (true) {
					case (/info-btn/).test(targetClass):
						parentClass = 'info-comp-container';
						modalContClass = 'c_jb_modal_container';
						break;
			
					case (/keyterm/.test(targetClass)):
						parentClass = 'C_jb_modal';
						modalContClass = 'c_jb_modal_container';
						break;
					
					default:
						parentClass = undefined;
						break;
				}
			
				// if we found a parent class, save the modal container
				// and collect all focusable elements
				if (parentClass) {
					// use parentClass to find the ancestor element with that class
					parent = findAncestor(target, 'class', parentClass);
					// use modalContClass to grab the modal container
					modalCont = parent.querySelector(`. ${modalContClass}`);openModal
					// focus on modal container
					modalCont.focus();
					// collect all focusable elements in the modal
					focusableElements = slice(modalCont.querySelectorAll(focusableElementsString));
					// set first and last tab stops
					firstTabStop = focusableElements[0];
					lastTabStop = focusableElements[focusableElements.length - 1];
			
					modalCont.addEventListener('keydown', modalTrap);
				}
			
				// add class to body to prevent scrolling
				document.body.classList.add('modal-open');
				// when in the portal, the scroll is set to this div
				// document.getElementById('JcComponents').classList.add('modal-open');
			}
			
			function modalClose(e) {
				// return focus to trigger after modal closes
				activeFocus.focus();
				// add class to body to prevent scrolling
				document.body.classList.remove('modal-open');
				// when in the portal, the scroll is set to this div
				// document.getElementById('JcComponents').classList.add('modal-open');
			}
			
			function modalTrap(e) {
				 console.log("modal trap triggered");
				// Check for TAB key press
				if (e.which === keyCodes.TAB) {
					// if there's only one tab stop, just prevent default
					if (firstTabStop === lastTabStop && document.activeElement == firstTabStop) {
						e.preventDefault();
					}
					// SHIFT + TAB
					else if (e.shiftKey) {
						if (document.activeElement === firstTabStop || document.activeElement.getAttribute("tabindex") == -1) {
							e.preventDefault();
							lastTabStop.focus();
						}
			
					// TAB
					} else {
						if (document.activeElement === lastTabStop) {
							e.preventDefault();
							firstTabStop.focus();
						}
					}
				}
			
				// ESCAPE to close modal
				if (e.which === keyCodes.ESC) {
					// get the close button for the modal
					let closeBtn = document.querySelector('.modal-close-btn');
					// save the click functions
					let funcs = closeBtn.getAttribute('onclick').split(' ');
					
					// clone function calls so escape key does the same 
					// thing the close button does
					for (const func of funcs) {
						// save the function call
						let funcCall = func.replace(/([^\(]+)\([^\)]+\);?/, '$1');
						// save the function parameters
						let funcParams = func.replace(/[^\(]+\(([^\)]+)\);?/, '$1').replace(/"/, '').split(',');
						let newFuncParams = []
						// convert paramters to ints if they are numbers
						for (let funcParam of funcParams) {
							if (funcParam.match(/^\d+$/)) {
								funcParam = parseInt(funcParam);
							}
							newFuncParams.push(funcParam);
						}
						
						// create new function call
						var fn = window[funcCall];
						// apply the function call
						if (typeof fn === "function") fn.apply(null, newFuncParams);
					}
							
				}
			}("+c_ccnum+"); openModal(event);' style='cursor: pointer; background-color:"+c_compData[6].Background_Color+"; outline: "+c_compData[4].Border_Thickness+" "+c_compData[3].Border_Style+" "+c_compData[2].Border_Color+"; padding: 20px; display:inline-block';>";
			
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