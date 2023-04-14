/*************** HELPERS ***************/
/***************************************/
// create array from from querySelector
// Example: var arrayOfElements = slice(document.querySelectorAll('selector'));
function slice(nodes) {
    return Array.prototype.slice.call(nodes);
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
function findAncestor(el, type, selector, value) {
    
	if (type == 'class') {
		while ((el = el.parentNode) && !el.classList.contains(selector));

		return el;
	}
	else if (type == 'node') {
        console.log(type)
		while ((el = el.parentNode) && el.tagName != selector);
		
		return el;
	}
	else if (type == 'id') {
		while ((el = el.parentNode) && el.getAttribute('id') != selector);
		
		return el;
    }
	else if (type == 'attr') {
		try {
			while ((el = el.parentNode) && !el.getAttribute(selector));
            
            if (value && el.getAttribute('attr') != value) {
                findAncestor(el, type, selector, value);
            }
            else if (value && el.getAttribute('attr') == value) {
                return el;
            }
            else if (!value) {
                return el;
            }
            else {
                return null;
            }
	
            // return el;
		} catch(err) {
			return null;
		}
	}
    else if (type == 'style') {
        try {
            while ((el = el.parentNode) && getComputedStyle(el)[selector] != value);
        } catch(err) {
            return null
        }

        return el;
    }
    else {
        return null;
    }
}

// removes all child nodes from an element
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// finds top position of an element
function findPosition(obj) {
    var currenttop = 0;
    if (obj.offsetParent) {
        do {
            currenttop += obj.offsetTop;
        } while ((obj = obj.offsetParent));
        return [currenttop];
    }
}

// returns true if a character is printable
function isPrintableChar(str) {
    return str.length === 1 && str.match(/\S| /);
}

// traps focus in open modal and allows esc
// to close modal. use with .bind(modalContainer)
// to ensure that "this" is the modalContainer
function portalModalTrap(e) {
    // this is passed via bind on eventListner
	let modalContainer = this;
	// use modal ID to determine what function 
	// closes the modal
	let closeFunc = `close${modalContainer.id.replace(/cover-cont/i, "").charAt(0).toUpperCase()}${modalContainer.id.replace(/cover-cont/i, "").slice(1)}`;

    // Check for TAB key pressed    
    if (e.which === keyCodes.TAB) {
        console.log("tab")
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

    // ESCAPE
    if (e.which === keyCodes.ESC) {

        // don't close the modal if it's terms and 
        // terms haven't been accepted
        if (/terms/i.test(modalContainer.id) && !termsViewed) {
            return;
        }
        else {
            // use apply to call the close function
            window[closeFunc].apply(this);  
        }          	
    }
}

// handles keydown actions in a menu. 
function portalMenuHandler(toggleFunction, e) {
    let target = e.target
    let key = e.key;
    let flag = false;
    let menuitems = slice(this.querySelectorAll('[role="menuitem"]'));
    let firstMenuItem = menuitems[0];
    let lastMenuItem = menuitems[menuitems.length - 1];

    switch (key) {
        case "Esc":
        case "Escape":
            toggleFunction();
            activeFocus.focus();
            flag = true;
            break;

        case "Up":
        case "ArrowUp":
            if (target == firstMenuItem) {
                lastMenuItem.focus();
            }
            else {
                target.previousElementSibling.focus();
            }
            flag = true;
            break;

        case "Down":
        case "ArrowDown":
            if (target == lastMenuItem) {
                firstMenuItem.focus();
            }
            else {
                target.nextElementSibling.focus();
            }
            flag = true;
            break;

        case "Home":
        case "PageUp":
            firstMenuItem.focus();
            flag = true;
            break;

        case "End":
        case "PageDown":
            lastMenuItem.focus();
            flag = true;
            break;

        case "Tab":
            toggleFunction();
            if (e.shiftKey) {
                activeFocus.focus();
            }
            break;

    }

    if (flag) {
        e.stopPropagation();
        e.preventDefault();
    }

}
/***************************************/
/***************************************/