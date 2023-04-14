let activeFocus;
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
        // save all headings to an arrayc_info_box_event
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
}