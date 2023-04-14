/******************************************************
*******************************************************
HELPERS.JS
*******************************************************
******************************************************/
/*******************************************************
*******************DEBUGGING FUNCTIONS******************
Set DEBUG_MODE_ENABLED to true if you want to display 
debugging messages. Then use debug() instead of 
console.log() for debug messages.
*******************************************************/
var debug;
var DEBUG_MODE_ENABLED = true;
if (DEBUG_MODE_ENABLED) {
	debug = printDebugMessage;
} else {
	debug = doNothing;
}

// DEBUG ON
function printDebugMessage(message) {
	
	console.log(message);
}
// DEBUG OFF
function doNothing() { }
/*******************************************************
*********************END DEBUGGING**********************
*******************************************************/

console.log("helpers js");
/*******************************************************
***********************GET BROWSER**********************
Returns browser, os, and reading system (if reading 
system is available)
*******************************************************/
navigator.sayswho = (function(){
    var ua= navigator.userAgent, tem, 
    M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if(/trident/i.test(M[1])){
        tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE '+(tem[1] || '');
    }
    if(M[1]=== 'Chrome'){
        tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
        if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
    }
    M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
    return M.join(' ');
})();

var browser = navigator.sayswho;
var os = navigator.platform;
var readingSystem;
var layoutStyle;
var rsVersion;
if (navigator.epubReadingSystem) {
	readingSystem = navigator.epubReadingSystem.name;
	rsVersion = navigator.epubReadingSystem.version;
	layoutStyle = navigator.epubReadingSystem.layoutStyle;
}
/*******************************************************
*********************END GET BROWSER********************
*******************************************************/

// requests html from a file location
// within the ebook
var getHTML = function (url, callback) {
	// Feature detection
	if (!window.XMLHttpRequest) {
		return;
	}

	// Create new request
	var xhr = new XMLHttpRequest();				

	// Setup callback
	xhr.onload = function () {
		if (callback && typeof (callback) === 'function') {
			callback(this.responseXML);
		}
	};

	// Get the HTML
	xhr.open('GET', url);
	xhr.responseType = 'document';
	xhr.send();
};

/*******************************************************
**********************FIND ANCESTOR*********************
returns the ancestor of element based on class, node 
type, or ID.
*******************************************************/
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
}
/*******************************************************
********************END FIND ANCESTOR*******************
*******************************************************/


/*******************************************************
**********************SET WIDTH*********************
sets max-width of images
*******************************************************/
function setWidth(img) {
    var width  = img.naturalWidth;
	img.setAttribute("style", "max-width:" + width + "px;");	
}
/*******************************************************
**********************END SET WIDTH*********************
*******************************************************/


/*******************************************************
**********************SET ATTRS*********************
sets a series of attributes
setAttrs(element, {'attribute': 'value', 'attribute': 'value'});
*******************************************************/
function setAttrs(el, attrs) {
	for (var key in attrs) {
		el.setAttribute(key, attrs[key]);
	}
}
/*******************************************************
**********************END SET ATTRS*********************
*******************************************************/


/*******************************************************
**************************SLICE*************************
returns an array of elements collected by 
querySelectorAll
*******************************************************/
function slice(nodes) {
	return Array.prototype.slice.call(nodes);
}
/*******************************************************
************************END SLICE***********************
*******************************************************/

function arraysEqual(a, b) {
	if (a === b) return true;
	if (a == null || b == null) return false;
	if (a.length != b.length) return false;

	for (var i = 0; i < a.length; ++i) {
		a[i] = a[i].replace(/<p [^>]+>/g, "");
		a[i] = a[i].replace(/<p>/g, "");
		a[i] = a[i].replace(/<\/p>/g, "");
		b[i] = b[i].replace(/<p [^>]+>/g, "");
		b[i] = b[i].replace(/<p>/g, "");
		b[i] = b[i].replace(/<\/p>/g, "");
		if (a[i] !== b[i]) return false;
	}
	return true;
}

/*******************************************************
*******************RESPONSIVE HEADERS*******************
adds the header content to each cell to display tables
vertically on small screens
*******************************************************/
function ResponsiveCellHeaders(table) {
	var i;
	var j;
	var THarray = [];
	var THarrayTested = [];
	var headerRows = slice(table.querySelectorAll('tr.header'));
	if (headerRows.length == 0) return;
	var dataRow = table.querySelector('tr.data');
	var secondTds = slice(dataRow.getElementsByTagName("td"));
	var trs = slice(table.getElementsByTagName("tr"));
	
	for (var h = 0; h < headerRows.length; h++) {
		var currentRow = [];
		var ths = slice(headerRows[h].getElementsByTagName("th"));
		// save text from first row th cells
		for (i = 0; i < ths.length; i++) {
			var headingText = ths[i].innerHTML;
			if (ths[i].getAttribute('colspan')) {
				var colspan = ths[i].getAttribute('colspan');
				currentRow.push(headingText);
				for (j = 0; j < colspan - 1; j++) {
					currentRow.push("");
				}
			}
			else if (ths[i].innerText.match(/(^\s+$|\s?&#160\s?|\s?&nbsp;\s?)/) || ths[i].innerText == "") {
				continue;
			}
			else {
				currentRow.push(headingText);
			}
		}
		THarray.push(currentRow);
	}

	for (i = 0; i < THarray.length - 1; i++) {
		debug("testing for dupes");
		var arraysMatch = arraysEqual(THarray[i], THarray[i+1]);
		debug(arraysMatch)
		if (arraysMatch == true) {
			THarray.splice(i+1, 1);
		}
	}


	// alter TH array if there are more first row 
	// th cells than second row td cells
	// NOTE: This happens when there's a header
	// column as well as a header row
	if (THarray[0].length > secondTds.length) {
		debug(table.querySelector("tr > th:nth-child(1)"));
		for (i = 0; i < THarray.length; i++) {
			var diff = THarray[i].length - secondTds.length;
			THarray[i].splice(0, diff);
		}
	}

	// cycle through the rest of the rows to add
	// header text to each cell
	for (i = 0; i < trs.length; i++) {
		var tds = slice(trs[i].getElementsByTagName("td"));
		// the first row won't have any td cells
		// if it was a header row
		if (tds.length == 0 || tds.length < THarray[0].length) continue;
		for (j = 0; j < THarray[0].length; j++) {
			if (tds[j].classList.contains("empty")) {
				continue;
			}

			var headers = "";
			for (k = 0; k < THarray.length; k++) {
				if (THarray[k][j].match(/(^\s+$|\s?&#160\s?|\s?&nbsp;\s?)/) || THarray[k][j] == "") {
					continue;
				}
				else {
					headers += '<span class="resp-th">' + THarray[k][j] + '</span>';
				}
			}
			headers = headers.replace(/<p [^>]+>/g, "");
			headers = headers.replace(/<p>/g, "");
			headers = headers.replace(/<\/p>/g, "");
			headers = headers.replace(/<br\s?\/?>/g, "");
			tds[j].innerHTML = headers + tds[j].innerHTML;
		}
	}
}
/*******************************************************
*****************END RESPONSIVE HEADERS*****************
*******************************************************/




/******************************************************
*******************************************************
ACCESSIBILITY.JS
*******************************************************
******************************************************/
var i;
var focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';
var focusableElements;
var firstTabStop;
var lastTabStop;
console.log("accessibility js");
var keyCodes = {
    "left": 37,
    "up": 38,
    "right": 39,
    "down": 40,
    "pageUp": 33,
    "pageDown": 34,
    "end": 35,
    "home": 36,
    "space": 32,
    "enter": 13,
    "tab": 9,
    "escape": 27
};

function ariaTabTrap(e) {
    var modalId = this.getAttribute('id');

    // Check for TAB key press
    if (e.keyCode === keyCodes.tab) {
        

        // if there's only one tabe stop, just prevent default
        if (firstTabStop === lastTabStop) {
            e.preventDefault();
        }
        // SHIFT + TAB
        else if (e.shiftKey) {
            if (document.activeElement === firstTabStop) {
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
}

function AddTableARIA(tblContainer) {
    var allTables = slice(tblContainer.querySelectorAll('table'));
    
    var allRowGroups = slice(tblContainer.querySelectorAll('thead, tbody, tfoot'));
    for (i = 0; i < allRowGroups.length; i++) {
        allRowGroups[i].setAttribute('role','rowgroup');
    }
    var allRows = slice(tblContainer.querySelectorAll('tr'));
    for (i = 0; i < allRows.length; i++) {
		allRows[i].setAttribute('role','row');
		if (!allRows[i].querySelector('td') && slice(allRows[i].querySelectorAll('th')).length == 1) {
            allRows[i].classList.add('title');
		}
        else if (!allRows[i].querySelector('td')) {
            allRows[i].classList.add('header');
		}
		else {
			allRows[i].classList.add('data');
		}
    }
    var allCells = slice(tblContainer.querySelectorAll('td'));
    for (i = 0; i < allCells.length; i++) {
		allCells[i].setAttribute('role','cell');
		if (allCells[i].innerText.match(/(^\s+$|\s?&#160\s?|\s?&nbsp;\s?)/) || allCells[i].innerText == "") {
			allCells[i].classList.add("empty");
		}
    }
    var allHeaders = slice(tblContainer.querySelectorAll('th'));
    for (i = 0; i < allHeaders.length; i++) {
        allHeaders[i].setAttribute('role','columnheader');
    }
    // this accounts for scoped row headers
    var allRowHeaders = slice(tblContainer.querySelectorAll('th[scope=row]'));
    for (i = 0; i < allRowHeaders.length; i++) {
        allRowHeaders[i].setAttribute('role','rowheader');
	}
	
	for (i = 0; i < allTables.length; i++) {
        var currentTable = allTables[i];
        if (!currentTable.classList.contains('equation') && !currentTable.classList.contains('equation-left') && !currentTable.classList.contains('equation-right') && !currentTable.classList.contains('choice-table')) {
			currentTable.onload = ResponsiveCellHeaders(currentTable);
			currentTable.setAttribute('role', 'table');
		}
    }
}



/******************************************************
*******************************************************
VIDEO-PLAYER.JS
*******************************************************
******************************************************/
// Video Player wrapper
function videoPlayer(videoContainer) {
	console.log("video player");
	// Video
	var video = videoContainer.querySelector("video");

	// Video Title Overlay
	var videoOverlay = videoContainer.querySelector('.v-title-overlay');

	// Video Controls
	var videoControls = videoContainer.querySelector('.video-controls');

	// Buttons
	var playButton = videoContainer.querySelector(".play-pause");
	var playButtonBg = videoContainer.querySelector(".play-pause-bg");
	var muteButton = videoContainer.querySelector(".mute");
	var fullScreenButton = videoContainer.querySelector(".full-screen");
	var speedButton = videoContainer.querySelector(".vid-speed");

	// Sliders
	//var progressContainer = videoContainer.querySelector(".progress-wrapper");
	/*var progressHolder = videoContainer.querySelector(".progress_box");
	var playProgressBar = videoContainer.querySelector(".play_progress");*/
	var progressBar = videoContainer.querySelector('.progress-bar');
	//var progressTT = videoContainer.querySelector('.progress-tooltip');
	//var progressLoaded = videoContainer.querySelector('.progress-loaded');
	var progressPlayed = videoContainer.querySelector('.progress-played');
	var progressThumb = videoContainer.querySelector('.progress-thumb');
	var volumeBar = videoContainer.querySelector('.volume-bar');

	// Speed Controls
	var speedPop = videoContainer.querySelector(".speed-pop");
	var speedRates = videoContainer.querySelectorAll("ul.vid-speeds li");
	// starting playback rate is always 1
	var curRate = 1;

	// Time Display
	var duration = videoContainer.querySelector(".time-display .duration");
	var time = videoContainer.querySelector(".time-display .time");

	// Vars used to update current time
	var curTime;
	//var prevTime;

	// Booleans
	//var playProgressInterval = false;
	//var isVideoFullScreen = false;
	var stop = false;
	//var firstPlay = true;
	//var tipVideo = false;

	var focusElementBeforeAction;
	var aspectRatio;
	var hideControlsTimeout;

	
	var imgUrl = videoContainer.querySelector(".fs-icon").src;
	var baseURL = imgUrl.replace(/(.*\/EPUB)\/img.*/g, "$1");

	var vp = {

		initialize : function() {

			// Can't request fullscreen mode in IE 10 and earlier
			// get outta here, dude.
			if (/msie/i.test(browser)) {
                if (/10/i.test(browser)) {
					videoContainer.className += " ie10";
                } else {
					return;
				}
			}	
			
			// vp object
			var that = this;

			// CSS trigger for JS
			videoContainer.classList.add('js');

			// remove controls
			video.removeAttribute("controls");
			// set height and width based on container
			/*if (os == "iPad") {
				var vidWidth = videoContainer.offsetWidth;
				var vidHeight = vidWidth * 0.5625;
				video.setAttribute('width', vidWidth);
				video.setAttribute('height', vidHeight);
			}*/

			// Set Start Time
			var refresh = setInterval(function() {
				
				if (video.readyState > 0) {
					var minutes = parseInt(video.duration / 60, 10);
					var seconds = Math.round(video.duration % 60);

					if (seconds < 10) { seconds = "0" + seconds; }

					// (Put the minutes and seconds in the display)
					duration.innerHTML = minutes + ":" + seconds;
					time.innerHTML = "0:00";
					progressThumb.setAttribute('aria-valuemax', video.duration);
					aspectRatio = video.clientHeight / video.clientWidth;
					

					clearInterval(refresh);
				}
			}, 200);

			
			videoOverlay.style.height = video.offsetHeight + 75 + 'px';

			// Set volume icon
			this.volIcon(video.volume);

			// When play, pause buttons are pressed.
			this.handleButtonPresses();
			
			// When the full screen button is pressed...
			fullScreenButton.addEventListener("click", this.toggleFS, true);
			fullScreenButton.addEventListener("keydown", this.toggleFS, true);
			
			// add scrubbing
			this.videoScrubbing();

			// progress thumb key listeners
			this.handleKeyDown();

			// Event listener for the mute button
			muteButton.addEventListener("click", this.unMute, false);
			muteButton.addEventListener("keydown", this.unMute, false);

			// Event listener for the volume slider
			volumeBar.addEventListener("change", this.volChange, false);

			// Event listeners for play/pause/hover
			video.addEventListener("mouseover", this.showVidHover, false);
			playButtonBg.addEventListener("mouseover", this.showVidHover, false);
			video.addEventListener('mouseout', this.hideVidHover, false);
			playButtonBg.addEventListener('mouseout', this.hideVidHover, false);

			// Event listeners for playback speed
			speedPop.addEventListener('mouseleave', this.spHide, false);
			for (i = 0; i < speedRates.length; i++) {
				speedRates[i].addEventListener('click', this.changeRate, false);
				speedRates[i].addEventListener('keydown', this.changeRate, false);
			}

			// listen for full screen changes so we can remove the
			// .full class when we leave fullscreen mode
			document.addEventListener("fullscreenchange", function () {
				vp.toggleFullCls();
			}, false);
			document.addEventListener("mozfullscreenchange", function () {
				vp.toggleFullCls();
			}, false);
			document.addEventListener("webkitfullscreenchange", function () {
				vp.toggleFullCls();
			}, false);
			document.addEventListener("MSFullscreenChange", function () {
				vp.toggleFullCls();
			}, false);

			if (videoContainer.className.indexOf("add-tips") > -1 && readingSystem != "iBooks") {
				tipVideo = true;
				this.launchTips();
			}
			
		}, 

		launchTips : function() {
			
			var tipContainer = document.createElement('div');
			tipContainer.className = "tip-container";
			var tipPara = document.createElement('p');
			tipPara.className = "tips";
			tipPara.innerText = "TIP: You can change the speed of the video or pause if you need more or less time.";
			tipContainer.appendChild(tipPara);
			videoContainer.appendChild(tipContainer);

			var tipPop = setInterval(function() {

				if (video.currentTime >= 2) {
					if (tipContainer.className.indexOf("visible") == -1) {
						tipContainer.className = tipContainer.className + " visible";
						playButton.className = playButton.className + " highlight";
						speedButton.className = speedButton.className + " highlight";
					}
					clearInterval(tipPop);
				}
			}, 50);

			var tipClose = setInterval(function() {
				if (video.currentTime >= 6) {
					if (tipContainer.className.indexOf("visible") > -1) {
						tipContainer.className = tipContainer.className.replace(" visible", "");
						playButton.className = playButton.className.replace(" highlight", "");
						speedButton.className = speedButton.className.replace(" highlight", "");
					}
					clearInterval(tipClose);
				}
			}, 50);

		},

		showVidHover : function() {
			
			playButtonBg.style.opacity = 0.2;
		},


		hideVidHover : function() {
			
			playButtonBg.removeAttribute('style');
		},

		toggleFS : function(event) {
			
			if (event.type == 'click' || (event.type == 'keydown' && (event.keyCode == keyCodes.enter || event.keyCode == keyCodes.space))) {
				
				if (videoContainer.className.indexOf('ie10') > -1 && videoContainer.className.indexOf('full') == -1) {
				// possible solution for ipad issue
				// if ((videoContainer.className.indexOf('ie10') > -1 || document.querySelector('section[role="doc-part"]').classList.contains('ipad')) && videoContainer.className.indexOf('full') == -1) {
					//alert("1");

					var controlHeight = videoControls.offsetHeight;
					var videoHeight = (window.innerHeight - controlHeight - 44);
					
					var videoWidth = (videoHeight / aspectRatio);
					
					videoContainer.setAttribute('style', 'max-height:' + window.innerHeight - 40 + 'px;');
					video.setAttribute('style', 'max-height:' + videoHeight + 'px;max-width:' + videoWidth + 'px;');
					vp.toggleFullCls();
					videoContainer.scrollIntoView(false);

				} else if (videoContainer.className.indexOf('ie10') > -1 && videoContainer.className.indexOf('full') > -1) {
				// possible solution for ipad issue
				// } else if ((videoContainer.className.indexOf('ie10') > -1 || document.querySelector('section[role="doc-part"]').classList.contains('ipad')) && videoContainer.className.indexOf('full') > -1) {
					//alert("2");

					videoContainer.removeAttribute('style');
					vp.toggleFullCls();
				} else if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement) {
					//alert("3");
					
					if (document.exitFullscreen) {
						document.exitFullscreen(); // Edge
					} 
					else if (document.msExitFullscreen) {
						document.msExitFullscreen(); // IE 11
					}
					else if (document.mozCancelFullScreen) {
						document.mozCancelFullScreen(); // Firefox
					} 
					else if (document.webkitExitFullscreen) {
						document.webkitExitFullscreen(); // Chrome and Safari
					}
					if (videoControls.className.indexOf("visible") > -1) {
						videoControls.className = videoControls.className.replace(" visible", "");
					}

					//fullScreenButton.setAttribute('aria-label', 'full screen');
					//fsImg.setAttribute('src', 'imgs/fullscreen.png');
					
					videoContainer.removeEventListener("mousemove", vp.showControls, true);

					videoContainer.removeEventListener("keydown", vp.showControls, true);

				}
				else {
					
					//alert("4");
					if (video.requestFullscreen) {
						videoContainer.requestFullscreen(); // Edge
					} 
					else if (video.msRequestFullscreen) {
						videoContainer.msRequestFullscreen(); // IE 11
					}
					else if (video.mozRequestFullScreen) {
						videoContainer.mozRequestFullScreen(); // Firefox
					} 
					else if (video.webkitRequestFullscreen) {
						videoContainer.webkitRequestFullscreen(); // Chrome and Safari
					}
					video.focus();
					//fullScreenButton.setAttribute('aria-label', 'exit full screen');
					//fsImg.setAttribute('src', 'imgs/esc_fullscreen.png');
					
					//vp.showControls();

					videoContainer.addEventListener("mousemove", vp.showControls, true);

					videoContainer.addEventListener("keydown", vp.showControls, true);


				}
			}

		},


		toggleFullCls : function() {
			
			var fsImg = fullScreenButton.querySelector('img');
			if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || (videoContainer.className.indexOf("ie10") > -1 && videoContainer.className.indexOf("full") == -1)) {
				
				if (videoContainer.className.indexOf("full") == -1) {
					videoContainer.className += " full";
					fullScreenButton.setAttribute('aria-label', 'exit full screen');
					fsImg.setAttribute('src', baseURL + '/imgs/esc_fullscreen.png');
				} 
			}
			else {
				
				if (videoContainer.className.indexOf("full") > -1)  {
					videoContainer.className = videoContainer.className.replace(" full", "");
					fullScreenButton.setAttribute('aria-label', 'full screen');
					fsImg.setAttribute('src', baseURL + '/imgs/fullscreen.png');
				}
			}
		},


		showControls : function(event) {
			
			
			if (event.type === "mousemove" || event.keyCode === keyCodes.tab || event.keyCode === keyCodes.up || event.keyCode === keyCodes.right || event.keyCode === keyCodes.down || event.keyCode === keyCodes.left || event.keyCode === keyCodes.pageUp || event.keyCode === keyCodes.pageDown || event.keyCode === keyCodes.end || event.keyCode === keyCodes.home || event.keyCode === keyCodes.space || event.keyCode === keyCodes.enter) {
				clearTimeout(hideControlsTimeout);

				if (videoControls.className.indexOf("visible") == -1) {
					videoControls.classList.add("visible");
				}
				
				vp.hideControls();
				
			}
		},

		hideControls : function() {
			
			hideControlsTimeout = setTimeout(function () {
				
				videoControls.classList.remove("visible");
			}, 4000);
		},
		
		
		handleButtonPresses : function() {
			// When the video or play button is clicked, play/pause the video.
			video.addEventListener('click', this.playPause, false);
			video.addEventListener('keydown', this.playPause, false);
			playButton.addEventListener('click', this.playPause, false);
			playButton.addEventListener('keydown', this.playPause, false);
			playButtonBg.addEventListener('click', this.playPause, false);
			playButtonBg.addEventListener('keydown', this.playPause, false);
			// When the play button is pressed, 
			// switch to the "Pause" symbol.
			video.addEventListener('play', this.vidPlay, false);
			
			// When the pause button is pressed, 
			// switch to the "Play" symbol.
			video.addEventListener('pause', this.vidPause, false);
			
			// When the video has concluded, pause it
			// ans switch to the "Restart" symbol
			video.addEventListener('ended', this.vidEnd, false);

			// When the playback speed button is clicked
			// show the speed options
			speedButton.addEventListener('click', this.showHideSpeed, false);
			speedButton.addEventListener('keydown', this.showHideSpeed, false);
			

		},
		
		
		playPause : function(event) {
			if (event.type == 'click' || (event.type == 'keydown' && (event.keyCode == keyCodes.enter || event.keyCode == keyCodes.space))) {
				/*if (firstPlay == true) {
					var overlay = videoContainer.querySelector('div.v-title-overlay');
					
					overlay.className += " playing";
					firstPlay = false;
				}*/
				if ( video.paused || video.ended ) {				
					if ( video.ended ) { video.currentTime = 0; }
					video.play();
				}
				else { video.pause(); }
			}
		},


		showHideSpeed : function(event) {
			if (event.type == 'click' || (event.type == 'keydown' && (event.keyCode == keyCodes.enter || event.keyCode == keyCodes.space))) {
				event.preventDefault();
			
				// toggle hide class
				if (speedPop.className.indexOf("hide") == -1) {
					speedPop.className += " hide";
					speedPop.style.display = "none";
					speedPop.removeAttribute('aria-expanded');
					speedPop.querySelector('ul.vid-speeds').setAttribute('aria-hidden', true);
					focusElementBeforeAction.focus();		
				}
				else {
					
					focusElementBeforeAction = document.activeElement;

					speedPop.style.display = "block";
					speedPop.className = speedPop.className.replace(" hide", "");
					speedPop.setAttribute('aria-expanded', 'true');
					
					speedPop.querySelector('ul.vid-speeds').setAttribute('aria-hidden', false);
					speedPop.querySelector('li.active').focus();
					speedPop.addEventListener('keydown', vp.speedMenuKeyHandler, true);
					
					//var speedRates = videoContainer.querySelectorAll("ul.vid-speeds li");
					//speedRates
				}
			}
		},

		speedMenuKeyHandler : function(event) {
			var currentFocus = document.activeElement;
			var key = event.keyCode;
			var flag = false;
			switch (key) {

				case keyCodes.down:
					event.preventDefault();
					if (currentFocus.nextElementSibling) {
						currentFocus.nextElementSibling.focus();
					} else {
						currentFocus.parentNode.firstElementChild.focus();
					}
					flag = true;
					break;

				case keyCodes.up:
					event.preventDefault();
					if (currentFocus.previousElementSibling) {
						currentFocus.previousElementSibling.focus();
					} else {
						currentFocus.parentNode.lastElementChild.focus();						
					}
					flag = true;
					break;

				case keyCodes.escape:
					vp.spHide(event, true);
					break;
				
				case keyCodes.tab:
					if ((event.shiftKey && !currentFocus.previousElementSibling) || !event.shiftKey && !currentFocus.nextElementSibling) {
						vp.spHide(event, false);
					} 
					break;

				default:
					break;


			}
			

			if (flag) {
				
				event.preventDefault();
				event.stopPropagation();
			}
		},

		
		spHide : function(event, returnFocus) {
			

			// only add hide class if it's not already there
			if (speedPop.className.indexOf("hide") == -1) {
				speedPop.className += " hide";
				speedPop.style.display = "none";
				speedPop.removeAttribute('aria-expanded');
				speedPop.querySelector('ul.vid-speeds').setAttribute('aria-hidden', true);
			}
			if (returnFocus) {
				focusElementBeforeAction.focus();
				event.preventDefault();
				event.stopPropagation();

			}
		},



		changeRate : function(event) {
			if (event.type == "click" || (event.type == 'keydown' && (event.keyCode == keyCodes.enter || event.keyCode == keyCodes.space))) {
				event.preventDefault();
				// get new playback rate
				var newRate = this.getAttribute('data-pb-rate');
				// convert pb rate to 2 decimal number
				var newRateTxt = parseFloat(newRate).toFixed(2);
				// update pb rate text element
				speedButton.querySelector('.txt').innerHTML = newRateTxt + 'x';

				// use the current pb rate to find the previous active list element
				var prevRateItem = videoContainer.querySelector('li[data-pb-rate="' + curRate + '"]');
				// make inactive
				prevRateItem.removeAttribute("class");

				// make new list elemnt active
				if (this.className.indexOf("active") == -1) {
					this.className += " active";
				}

				// change the pb rate and curRate variable
				video.playbackRate = newRate;
				curRate = newRate;

				// bg music sounds bad if pb rate isn't 1			
				if (curRate != 1) {
					video.muted = true;
					vp.volIcon(0);
				}

				// hide speed rate popup
				vp.spHide(event, true);
			} else if (event.keyCode === keyCodes.escape) {
				
				//vp.spHide(event, true);
			}
		},


		vidPlay : function() {
			
		
			// remove the overlay if it's visible
			if (videoOverlay.className.indexOf("playing") == -1) {
				videoOverlay.className = videoOverlay.className + " playing";
			}

			// Update the button icon to 'Play'ay
			if (playButton.querySelector(".pause-icon").className.indexOf("active") == -1) {
				playButton.querySelector(".pause-icon").className += " active";
				playButton.setAttribute('aria-label', 'pause');
			}
			playButton.querySelector(".play-icon").className = playButton.querySelector(".play-icon").className.replace(" active", "");
			playButton.querySelector(".restart-icon").className = playButton.querySelector(".restart-icon").className.replace(" active", "");



			if (playButtonBg.querySelector(".pause-icon").className.indexOf("active") == -1) {
				playButtonBg.querySelector(".pause-icon").className += " active";
				playButtonBg.setAttribute('aria-label', 'pause');
			}
			playButtonBg.querySelector(".play-icon").className = playButton.querySelector(".play-icon").className.replace(" active", "");
			playButtonBg.querySelector(".restart-icon").className = playButton.querySelector(".restart-icon").className.replace(" active", "");
			stop = false;
			vp.trackPlayProgress();
		},


		vidPause : function(event) {

			// Update the button icon to 'Pause'
			if (playButton.querySelector(".play-icon").className.indexOf("active") == -1) {
				playButton.querySelector(".play-icon").className += " active";
				playButton.setAttribute('aria-label', 'play');
			}
			playButton.querySelector(".pause-icon").className = playButton.querySelector(".pause-icon").className.replace(" active", "");
			playButton.querySelector(".restart-icon").className = playButton.querySelector(".restart-icon").className.replace(" active", "");



			// Update the button icon to 'Pause'
			if (playButtonBg.querySelector(".play-icon").className.indexOf("active") == -1) {
				playButtonBg.querySelector(".play-icon").className += " active";
				playButtonBg.setAttribute('aria-label', 'play');
			}
			playButtonBg.querySelector(".pause-icon").className = playButton.querySelector(".pause-icon").className.replace(" active", "");
			playButtonBg.querySelector(".restart-icon").className = playButton.querySelector(".restart-icon").className.replace(" active", "");

			// Turn on seek bar tracking
			stop = "pause";
		},


		vidEnd : function() {

			//vp.pause();
			stop = "end";

			// Update the button icon to 'Restart'
			if (playButton.querySelector(".restart-icon").className.indexOf("active") == -1) {
				playButton.querySelector(".restart-icon").className += " active";
				playButton.setAttribute('aria-label', 'restart');
			}
			playButton.querySelector(".play-icon").className = playButton.querySelector(".play-icon").className.replace(" active", "");
			playButton.querySelector(".pause-icon").className = playButton.querySelector(".pause-icon").className.replace(" active", "");



			// Update the button icon to 'Restart'
			if (playButtonBg.querySelector(".restart-icon").className.indexOf("active") == -1) {
				playButtonBg.querySelector(".restart-icon").className += " active";
				playButtonBg.setAttribute('aria-label', 'restart');
			}
			playButtonBg.querySelector(".play-icon").className = playButton.querySelector(".play-icon").className.replace(" active", "");
			playButtonBg.querySelector(".pause-icon").className = playButton.querySelector(".pause-icon").className.replace(" active", "");
			
			// make sure the time updates to the duration at the end
			//time.innerHTML = duration.innerHTML;
		},
		
		
		// Every 50 milliseconds, update the play progress. 
		trackPlayProgress : function() {
			
			var progress = setInterval(function() {
				vp.updatePlayProgress();
				if (stop === "pause" || stop === "end") {
					clearInterval(progress);
					
					if (stop == "end") {
						time.innerText = duration.innerText;
					}
				}
			}, 50);
		},
	
		updatePlayProgress : function(){
			// update the progress bar
			//playProgressBar.style.width = ((video.currentTime / video.duration) * (progressHolder.offsetWidth)) + "px";
			progressPlayed.style.width = ((video.currentTime / video.duration) * 100) + "%";
			progressThumb.style.left = ((video.currentTime / video.duration) * 100) + "%";

			// if the video has ended, then rewinded, change the restart to a play button
			if (playButton.querySelector(".restart-icon").className.indexOf('active') > -1 && video.currentTime < video.duration) {
				playButton.querySelector(".restart-icon").className = playButton.querySelector(".restart-icon").className.replace(' active', '');
				playButtonBg.querySelector(".restart-icon").className = playButtonBg.querySelector(".restart-icon").className.replace(' active', '');
				
				playButton.querySelector(".play-icon").className = playButton.querySelector(".play-icon").className + ' active';playButtonBg.querySelector(".play-icon").className = playButtonBg.querySelector(".play-icon").className + ' active';
			}
			
			// update the time
			curTime = Math.floor(video.currentTime);
			vp.setDisplayTime(curTime);
			
			prevTime = curTime;
		},

		setDisplayTime : function(curTime) {
			var minutes = parseInt(curTime / 60, 10);
			var seconds = Math.round(curTime % 60);
			var aValueTxt;
			if (seconds < 10) { seconds = "0" + seconds; }

			time.innerHTML = minutes + ":" + seconds;

			if (minutes > 0) {
				aValueTxt = minutes + " minutes, " + seconds + " seconds";
			} else {
				aValueTxt = seconds + " seconds";
			}

			setAttrs(progressThumb, {'aria-valuenow': curTime, 'aria-valuetext': aValueTxt});
		},
		
		
		// Video was stopped, so stop updating progress.
		stopTrackingPlayProgress : function(){
			
		},
		
		handleKeyDown : function() {
			
			
			progressThumb.addEventListener('keydown', function(e) {
				
				
				var flag = false;
				var currentVal = parseInt(progressThumb.getAttribute('aria-valuenow'));
				switch (e.keyCode) {
					case keyCodes.left:
					case keyCodes.down:
					e.preventDefault();
						vp.nudgePlayThumb(currentVal - 1);
						flag = true;
						break;
				
					case keyCodes.right:
					case keyCodes.up:
						vp.nudgePlayThumb(currentVal + 1);
						flag = true;
						break;
				
					case keyCodes.pageDown:
						vp.nudgePlayThumb(currentVal - 10);
						flag = true;
						break;
				
					case keyCodes.pageUp:
						vp.nudgePlayThumb(currentVal + 10);
						flag = true;
						break;
				
					case keyCodes.home:
						vp.nudgePlayThumb(0);
						flag = true;
						break;
				
					case keyCodes.end:
						vp.nudgePlayThumb(video.duration);
						flag = true;
						break;
					
					case keyCodes.space:
						vp.playPause();
						flag = true;
						break;
				
					default:
						break;
				}

				if (flag) {
					
					e.preventDefault();
					e.stopPropagation();
				}
			});
		},

		nudgePlayThumb : function(value) {
			if (value > progressThumb.getAttribute('aria-valuemax')) {
				value = progressThumb.getAttribute('aria-valuemax');
			} else if (value < progressThumb.getAttribute('aria-valuemin')) {
				value = progressThumb.getAttribute('aria-valuemin');
			}

			var moveLeft = ((value / video.duration) * 100) + "%";
			//progressThumb.setAttribute('aria-valuenow', value);
			progressThumb.style.left = moveLeft;
			progressPlayed.style.width = moveLeft;
			video.currentTime = value;
			vp.setDisplayTime(value);

			
			//
		},
		
		
		videoScrubbing : function() {

			var handleMouseMove = function (e) {
				vp.setPlayProgress( e.pageX );
				vp.trackPlayProgress();
			};

			var handleMouseUp = function (event) {
				document.removeEventListener('mousemove', handleMouseMove);
				document.removeEventListener('mouseup', handleMouseUp);
			
			};

			// listen for thumb movement
			progressThumb.addEventListener("mousedown", function(e) {
				// assign listener for mouse move after thumb is clicked
				document.addEventListener('mousemove', handleMouseMove);
				// when mouse is released, stop listening
				document.addEventListener('mouseup', handleMouseUp);

			  }, true);
			  
			progressBar.addEventListener("click", function(e) {				
				vp.setPlayProgress(e.pageX);
				vp.trackPlayProgress();
			}, true);
		},
		
		setPlayProgress : function( clickX ) {
			var viewportBox = progressBar.getBoundingClientRect();
			var elLeft = viewportBox.left;
			var elWidth = progressBar.offsetWidth;
			var newPercent = (clickX - elLeft) / elWidth;
			video.currentTime = newPercent * video.duration;
			progressPlayed.style.width = (newPercent * 100) + "px";
			progressThumb.focus();
		},
		
		
		/*findPosX : function(progressContainer) {
			var curleft = progressContainer.offsetLeft;
			while( progressContainer == progressContainer.offsetParent ) {
				curleft += progressContainer.offsetLeft;
			}
			return curleft;
		},*/


		unMute : function(event) {
			if (event.type == 'click' || (event.type == 'keydown' && (event.keyCode == keyCodes.enter || event.keyCode == keyCodes.space))) {
				if (video.muted == false && video.volume > 0) {
					// Mute the video
					video.muted = true;
					// Update the button text
					vp.volIcon(0);
				} 
				// volume isn't muted but set to 0
				else if (video.volume == 0) {
					volumeBar.value = 1;
					vp.volChange();
					// Update the button text
					//vp.volIcon(video.volume);
				}
				// volume is muted
				else {
					// Unmute the video
					video.muted = false;
					// Update the button text
					vp.volIcon(video.volume);
				}
			}
		},


		volChange : function() {
			// Update the video volume
			video.muted = false;
			video.volume = volumeBar.value;
			vp.volIcon(video.volume);
		},


		volIcon : function(value) {
			var volIcons = videoContainer.querySelectorAll(".volume-icon");

			for (i = 0; i < volIcons.length; i++) {
				volIcons[i].classList.remove("active");
			}

			if (value === 0) {
				//
				videoContainer.querySelector(".vol-0").classList.add("active");
				alert(videoContainer.querySelector(".vol-0").classList);

			}
			else if (value === 1) {
				//
				videoContainer.querySelector(".vol-3").classList.add("active");
			}
			else if (value < 0.5) {
				//
				videoContainer.querySelector(".vol-1").classList.add("active");
			}
			else {
				//
				videoContainer.querySelector(".vol-2").classList.add("active");
			}

		}

	};

	vp.initialize();
}



/******************************************************
*******************************************************
PQ-PLAYER.JS
*******************************************************
******************************************************/
function pqPlayer(pqSec) {


	/***************************************************
	
	STRING VARS
	
	***************************************************/
	var arrStrings = new Array();
	
	arrStrings['courseLinks'] = '<span class="no_w"><span class="spanlink" onclick="javascript: window.parent.Mod_number(' + (modulenumber - 1) + ')"; role="link" tabindex="0">Module ' + modulenumber + '</span></span> | <span class="spanlink" onclick="javascript: window.parent.showWelcome();" role="link" tabindex="0">Home</span> | <span class="spanlink" onclick="javascript: window.parent.showDash();" role="link" tabindex="0">Dashboard</span>';
	
	arrStrings.strScoreReport0 = "Performance Report";arrStrings.strScoreReport1 = "The questions that you missed have a red “X” <img src=\"media/times-circle-xs.png\" style='vertical-align:text-top;width:20px' alt=\"\"/> in the question list in the slide-out menu. Questions that you answered correctly have a green check mark  <img src=\"media/checkmark-xs.png\" style='vertical-align:text-top;width:20px' alt=\"\" />. Use the question list to review any questions you wish to review. Click the Restart button <img src=\"media/restart-bk.png\" style='vertical-align:text-top;width:20px' alt=\"\" /> if you want to start over with this set of questions.";arrStrings.strScoreReport2 = "Congratulations on your perfect score!";arrStrings.strScoreReport3 = "Your score for each question is based on your first selected answer if answer choice feedback was on when you answered the question, or your last selected answer if feedback was off.";arrStrings.strScoreReport4 = "Chapter";arrStrings.strScoreReport5 = "Correct";arrStrings.strScoreReport6 = "Score";arrStrings.strScoreReport7 = "See below for a more detailed report.";arrStrings.strScoreReport8 = "Use the table below to review Learning Objectives for the questions you missed.";arrStrings.strScoreReport9 = "The table below shows your score for each chapter of the textbook, along with a list of the learning objectives covered by the questions you missed.";arrStrings.strScoreReport10 = "Overall Score";arrStrings.strScoreReport11 = "Learning Objectives";arrStrings.strScoreReport12 = "Restart the Questions";arrStrings.strScoreReport13 = "Learning Objective(s)";arrStrings.strScoreReport14 = "Learning Objective";arrStrings.strScoreReport15 = "Question";arrStrings.strScoreReportWorking = "Working on it …";arrStrings.strScoreReportF2 = "Your score is below the minimum passing score of " + intPassingScore + "%.";arrStrings.strScoreReportP2 = "Congratulations! You passed! ";arrStrings.strScoreReportEOM9 = "The table below shows your score for each lesson of the module, along with a list of the learning objectives covered by the questions you missed.";arrStrings.strScoreReportEOM9H = "The table below shows your score for each chapter of the module, along with a list of the learning objectives covered by the questions you missed.";arrStrings.strScoreReportEOM4 = "Lesson";arrStrings['strScoreReportHybridFail'] = '<span class="spanlink" onclick="javascript: window.parent.myFailOptions();" role="link" tabindex="0">See what my options are</span>';
	arrStrings['strScoreReportHybridFail1'] = 'Sorry, you did not pass this module exam. Review the module’s study materials before trying again. Make a note of each learning objective listed below, and give extra attention to the materials that cover those learning objectives as you study to retake the module exam. <span class="maroon">You will not be able to return to this report once you navigate away from it.</span>';
	arrStrings['strScoreReportEOMHome'] = 'Click or tap one of the following links to return to the course: ' + arrStrings['courseLinks'] + '</p>';
	arrStrings['strScoreReportTimeExpired'] = 'The allowable amount of time to complete the exam expired, and the exam has been submitted for grading.';
	
	arrStrings.strOf = "of";arrStrings.strReference = "Reference:";arrStrings.strReference1 = "LO ";arrStrings.strReference2 = "LOs ";arrStrings.strQuestion = "Question";arrStrings.errMsg2 = "<h2 class=\'swaphd\'>You have not answered all of the questions.</h2><p class=\'swap\'>The unanswered questions have been highlighted in yellow in the question list. Unanswered questions will be marked as incorrect if you continue to the score report.</p><p class=\'swap'>Do you want to continue to the score report?</p>";arrStrings.btnYes = "Yes";arrStrings.btnYesTitle = "Yes";arrStrings.btnNo = "No";arrStrings.btnNoTitle = "No";arrStrings['fbMsg'] = '<h2 class="swaphd">Would you like answer choice feedback on?</h2><p class="swap">Typically, you’d want feedback on to get the full benefit of the study questions, but you can turn it off if you prefer to simulate an actual test-taking experience.</p>';
	arrStrings['fbMsgSE'] = '<p class="swap">If you choose to turn feedback off, a timer will be set allowing an average of 2 minutes per question to complete the sample examination (the same amount of time you will have on the real exam). You will have to complete the entire exam in one session. If you exit the session before completing all of the questions, your progress will be lost and you will have to start over.</p>';
	arrStrings.btnOn = "On";arrStrings.btnOnTitle = "On";arrStrings.btnOff = "Off";arrStrings.btnOffTitle = "Off";arrStrings.btnHelpTitle = "Help";arrStrings.btnPreviousTitle = "Previous Question";arrStrings.btnNextTitle = "Next Question";arrStrings.btnGradeTitle = "Submit Exam For Grading";arrStrings['btnReportTitle'] = 'Performance Report';
	arrStrings.btnRestartTitle = "Restart";arrStrings.btnFeedbackTitle = "Toggle Feedback On/Off";arrStrings.btnMarkTitle = "Mark Question for Review";arrStrings['welcomeBack'] = '<p class="swap2"><b>Welcome back.</b> Answers recorded during the previous study session have been restored from a web browser ‘cookie’ on this computer. <span style="color:#0069ad;text-decoration:underline;cursor:pointer;" onclick="javascript:initializeExam(true);" role="link" tabindex="0">Click to restart</span>, or press <span class="bold">r</span>, if you would prefer to erase the previous answers and start a new study session.</p>';
	arrStrings.strCorrect = "Correct!";arrStrings.strIncorrect = "Incorrect";arrStrings.btnBeginTitle = "Begin Examination";arrStrings.strTimer = "Timer: ";
	arrStrings.strHomeNavTitle = "Home";arrStrings.strHomeNav = "Home";arrStrings.strPrevious = "Prev";arrStrings.strNext = "Next";arrStrings.strFeedback = "Feedback";arrStrings.strMark = "Mark";arrStrings.strHelp = "Help&#160;";arrStrings.strGrade = "Submit";arrStrings.strRestart = "Restart";arrStrings.strReport = "Report";arrStrings.strBegin = "Begin";
	arrStrings['strFBoff'] = 'Note: Answer choice feedback is currently switched off. To switch it on, click the <span class="ucb">' + arrStrings['strFeedback'] + '</span> button.';
	
	arrStrings.mnuHome = "Home";arrStrings.mnuContent = "Course Content";arrStrings.mnuExamPrep = "Exam Prep";arrStrings.mnuPQLanding = "Practice Questions";arrStrings.mnuCSLanding = "Case Studies";arrStrings.mnuSE = "Sample Examination";arrStrings.mnuISA = "Interactive Study Aid";arrStrings.mnuHelp = "Help";arrStrings.mnuFeedback = "Feedback";arrStrings.mnuEmail = "Email";arrStrings.mnuTerms = "Terms of Use";arrStrings.mnuPrivacy = "Privacy Policy";arrStrings.mnuExit = "Exit";arrStrings.hide = "Hide";arrStrings.show = "Show";arrStrings.strFeedbackEnabled = "Feedback has been enabled.";arrStrings.strFeedbackDisabled = "Feedback has been disabled.";
	arrStrings.footertext1 = "Copyright &#169; ";arrStrings.footertext2 = " LL Global, Inc. All rights reserved.<span id=\"tp\"> | <a href=\"../terms.html\">Terms of Use</a> | <a href=\"../privacy.html\">Privacy Policy</a></span>";
	arrStrings.ariaMenu = "Main menu";arrStrings.ariaBtnRestart = "restart the questions";arrStrings.ariaBtnMark = "mark question for review";arrStrings.ariaBtnHelp = "help";arrStrings.ariaBtnFeedback = "toggle feedback on or off";arrStrings.ariaBtnPrev = "previous question";arrStrings.ariaBtnNext = "next question";arrStrings.ariaBtnSubmit = "submit for grading";arrStrings.ariaQL = "question list";arrStrings.ariaQLItem = "Question ";arrStrings.ariaQLToggle = "toggle question list";arrStrings.ariaCloseFB = "close feedback";arrStrings.ariaCloseHelp = "close help";arrStrings.ariaMarked = "marked for review";arrStrings.ariaAnswered = "answered";arrStrings.ariaUnanswered = "unanswered";arrStrings.ariaAnsChoices = "answer choices";arrStrings.ariaCorrect = "correct";arrStrings.ariaIncorrect = "incorrect";arrStrings.ariaLOs = "learning objectives";arrStrings.ariaPR = "Performance report";arrStrings.ariaBtnBegin = "begin examination";
	arrStrings['Hybridwelcomehead'] = '<h2 class="score" id="welcomehead">Module Exam</h2>';
	arrStrings['Hybridwelcomeintro'] = '<p class="score">This Module Exam consists of ' + numQ + ' objective questions. You have <b>two attempts</b> to achieve the minimum passing score of ' + intPassingScore + '%.</p>';
	arrStrings['Hybridwelcomeintro'] += '<p class="score bold">Taking The Exam</p>';
	arrStrings['Hybridwelcomeintro'] += '<ul><li>For each question, select the most appropriate answer choice.</li>';
	arrStrings['Hybridwelcomeintro'] += '<li>Use the <span class="ucb">' + arrStrings['strNext'] + ' <img src="../examincludes/media/next-bk.png" alt="" /></span> button to advance to the next question, or select any question from the question list.</li>';
	arrStrings['Hybridwelcomeintro'] += '<li>You can return to a previous question and change your answer choice at any time before you <span class="ucb">' + arrStrings['strGrade'] + ' <img src="../examincludes/media/submit-bk.png" alt="" /></span> the exam for grading.</li></ul>';
	arrStrings['Hybridwelcomeintro'] += '<p class="score">For additional information about taking a Module Exam, view the help info <span class="spanlink" onclick="javascript:openHelp();" role="link">here</span>.</p>';
	arrStrings['Hybridwelcomeintro'] += '<div class="wrapper"><div class="epigraph"><p class="score pcenter bold">Important Note:</p><p class="score">You must complete the exam in one session for your progress to be recorded. <span class="maroon">If you exit the session before completing all of the questions, your progress will be lost, <span class="bold">but you will still be charged with one of your two exam attempts.</span></span></p></div></div>';
	arrStrings['Hybridwelcomeintro'] += '<p class="score" id="pDuration">You will have <span class="timerb" id="examduration">{duration}</span> minutes to complete the examination. The exam countdown timer appears on the right side of the screen above the exam questions. <span class="maroon">If time expires, the exam will automatically be submitted for grading. Any questions left unanswered when time expires will be marked incorrect.</span></p>';
	arrStrings['Hybridwelcomeintro'] += '<p class="score bold" id="pReady"><span id="studentname"></span>This is attempt <span id="eomattempt"></span> for your Module ' + modulenumber + ' exam. When you are ready to begin, click or tap the <span class="ucb">' + arrStrings['strBegin'] + ' <img src="../examincludes/media/begin-bk.png" alt="" /></span> button above. Otherwise, click or tap one of the following links to return to the course: ' + arrStrings['courseLinks'] + '</p>';
	arrStrings['Hybridwelcomeintro'] += '<p class="score bold maroon" id="pFailed">You have already attempted this module exam more than once. You are allowed only two attempts. For more information: <span style="color: #0069ad; text-decoration: underline; cursor: pointer;" onclick="javascript: window.parent.myFailOptions();" role="link" tabindex="0">See what my options are</span></p>';
	arrStrings['Hybridwelcomeintro'] += '<p class="score bold maroon" id="pPassed">You have already passed this module exam. You cannot take it again. Click or tap one of the following links to return to the course: ' + arrStrings['courseLinks'] + '</p>';
	
	arrStrings['welcomeintroLRSError'] = '<p class="score bold maroon">Unable to connect to LOMA’s learning system. Cannot continue. Click or tap one of the following links to return to the course: ' + arrStrings['courseLinks'] + '</p>';
	
	
	arrStrings['welcomehead'] = '<h2 class="score" id="welcomehead">Module Exam</h2>';
	arrStrings['welcomeintro'] = '<p class="score">This Module Exam consists of ' + numQ + ' objective questions. The minimum passing score is ' + intPassingScore + '%.</p>';
	arrStrings['welcomeintro'] += '<p class="score bold">Taking The Exam</p>';
	arrStrings['welcomeintro'] += '<ul><li>For each question, select the most appropriate answer choice.</li>';
	arrStrings['welcomeintro'] += '<li>Use the <span class="ucb">' + arrStrings['strNext'] + ' <img src="../examincludes/media/next-bk.png" alt="" /></span> button to advance to the next question, or select any question from the question list.</li>';
	arrStrings['welcomeintro'] += '<li>You can return to a previous question and change your answer choice at any time before you <span class="ucb">' + arrStrings['strGrade'] + ' <img src="../examincludes/media/submit-bk.png" alt="" /></span> the exam for grading.</li></ul>';
	arrStrings['welcomeintro'] += '<p class="score">For additional information about taking this exam, view the help info <span class="spanlink" onclick="javascript:openHelp();" role="link">here</span>.</p>';
	arrStrings['welcomeintro'] += '<div class="wrapper"><div class="epigraph"><p class="score pcenter bold">Important Note:</p><p class="score">You must complete the exam in one session for your progress to be recorded. <span class="maroon">If you exit the session before completing all of the questions, your progress will be lost and you will have to start the exam again from the beginning.</span></p></div></div>';
	arrStrings['welcomeintro'] += '<p class="score bold" id="pReady"><span id="studentname"></span>This is attempt <span id="eomattempt"></span> for your Module ' + modulenumber + ' exam. When you are ready to begin, click or tap the <span class="ucb">' + arrStrings['strBegin'] + ' <img src="../examincludes/media/begin-bk.png" alt="" /></span> button above. Otherwise, click or tap one of the following links to return to the course: ' + arrStrings['courseLinks'] + '</p>';
	arrStrings['welcomeintro'] += '<p class="score bold maroon" id="pPassed">You have already passed this module exam. You cannot take it again. Click or tap one of the following links to return to the course: ' + arrStrings['courseLinks'] + '</p>';
	
	arrStrings['helpTxt1'] = 'How to Use LOMA Study Questions';
	arrStrings['helpTxt2'] = 'The Question List';
	arrStrings['helpTxt3'] = 'To access the question list, click or tap the question list menu toggle button';
	arrStrings['helpTxt4'] = 'Color-coding<span class="sr-only">, or an ARIA label if using a screen reader,</span> indicates the status of each question.';
	arrStrings['helpTxtTH1sr'] = 'Question Marker';
	arrStrings['helpTxtTH2sr'] = 'Explanation';
	arrStrings['helpTxt5sr'] = 'white or ARIA label with question number only';
	arrStrings['helpTxt5'] = 'Question has not been answered.';
	arrStrings['helpTxt6sr'] = 'blue or ARIA label with question number followed by "answered"';
	arrStrings['helpTxt6'] = 'Question has been answered.';
	arrStrings['helpTxt7sr'] = 'grey or ARIA label with question number followed by "marked for review"';
	arrStrings['helpTxt7'] = 'Question has been marked for review.';
	arrStrings['helpTxt8sr'] = 'yellow or ARIA label with question number followed by "unanswered"';
	arrStrings['helpTxt8'] = 'Question will be marked incorrect in the performance report if left unanswered.';
	arrStrings['helpTxt9sr'] = 'green or ARIA label with question number followed by "correct"';
	arrStrings['helpTxt9'] = 'Question has been graded and was answered correctly.';
	arrStrings['helpTxt10sr'] = 'red or ARIA label with question number followed by "incorrect"';
	arrStrings['helpTxt10'] = 'Question has been graded but was answered incorrectly.';
	arrStrings['helpTxt11'] = 'Navigating and Answering the Study Questions';
	arrStrings['helpTxt12'] = 'You can navigate the questions with the mouse or keyboard, or with a tap on a touchscreen. Click or tap the <span class="ucb">';
	arrStrings['helpTxt13'] = arrStrings['strPrevious'] + '</span> button to return to the previous question or the <span class="ucb">' + arrStrings['strNext'];
	arrStrings['helpTxt14'] = '</span> button to advance to the next question. Or click/tap the number of the question you want to go to in the <span class="bold">Question List</span>. With the keyboard, press the <span class="bold">n</span> key to advance to the next question. Press the <span class="bold">p</span> key to return to the previous question.';
	arrStrings['helpTxt15'] = 'Similarly, you can answer the questions with the keyboard, a mouse click, or a tap on a touchscreen. Click or tap the answer choice you want to select. With the keyboard, press the number key that corresponds to the answer choice you want to select.';
	arrStrings['helpTxt16'] = 'If you would like to mark a question for review so you can return to it later, click the <span class="ucb">';
	arrStrings['helpTxt161'] = ' ' + arrStrings['strMark'] + '</span> button or press the <span class="bold">m</span> key.';
	arrStrings['helpTxt17'] = 'If you return to a question you have already answered, your selected answer will be highlighted with a green checkmark';
	arrStrings['helpTxt18'] = 'or red X';
	arrStrings['helpTxt19'] = 'if feedback is enabled and depending on whether it is the correct answer or not. If feedback is disabled, your selected answer will be highlighted with a blue dot';
	arrStrings['helpTxt20'] = 'Note: if the keyboard doesn’t work, try clicking or tapping the question window first to make sure it’s the active window.';
	
	arrStrings['helpTxt21'] = 'Answer Choice Feedback';
	arrStrings['helpTxt22'] = 'Use the <span class="ucb">';
	arrStrings['helpTxt23'] = ' ' + arrStrings['strFeedback'] + '</span> button, or press the <span class="bold">f</span> key, to toggle answer choice feedback on or off. Typically, you’d want to leave feedback on to get the full benefit of the study questions, but you can turn it off if you prefer to simulate an actual test-taking experience.';
	arrStrings['helpTxt24'] = 'To close the feedback popup window, click or tap it. Or, if the feedback popup is not covering the answer choices, click or tap another answer choice to close the current popup and open the popup for that answer choice.';
	
	arrStrings['helpTxt25'] = 'Seeing How You Did';
	arrStrings['helpTxt26'] = 'Click the <span class="ucb">' + arrStrings['strGrade'];
	arrStrings['helpTxt27'] = '</span> button, or press the <span class="bold">s</span> key, to go to the performance report. You’ll be warned if you have left any questions unanswered.';
	arrStrings['helpTxt28'] = 'The question list will be color-coded as shown above with your result on each question. Use the question list to review questions that you missed or any other questions. Click the <span class="ucb">';
	arrStrings['helpTxt29'] = ' ' + arrStrings['strRestart'] + '</span> button, or press the <span class="bold">r</span> key, to clear your selected answers and start fresh with this set of study questions.';
	arrStrings['helpTxt30'] = 'If answer choice feedback was on, your score is based on the first choice you selected for a question. If answer choice feedback was off, your score is based on your last selected choice.';
	arrStrings['helpTxt31'] = 'Cookies';
	arrStrings['helpTxt32'] = 'If your browser is set up to allow “cookies” to be stored on your computer, your answers during a study session will be stored in a cookie and restored the next time you come back to the study questions. You’ll be given the opportunity to clear the stored answers and start a new study session.';
	arrStrings['helpTxt33'] = 'Exit Help';
	
	
	arrStrings['helpTxtEOM1'] = 'LOMA Module Exam Help';
	arrStrings['helpTxtEOM11'] = 'Navigating and Answering the Module Exam Questions';
	arrStrings['helpTxtEOM19'] = 'If you return to a question you have already answered, your selected answer will be highlighted with a blue dot';
	arrStrings['helpTxtEOM28'] = 'The performance report will indicate if you passed or if your score was below the minimum passing score. If you did not pass, make a note of each learning objective listed in the report, and give extra attention to the materials that cover those learning objectives as you study to retake the module exam. You will not be able to return to the performance report once you navigate away from it.';
	
	arrStrings['helpTxtPSE21'] = 'Feedback or Timed Mode';
	arrStrings['helpTxtPSE22'] = 'When you start or restart a Sample Examination, a popup asks if you would like answer choice feedback on or off. Typically, you’d want to leave feedback on to get the full benefit of the study questions, but you can turn it off if you prefer to simulate an actual test-taking experience.';
	arrStrings['helpTxtPSE23'] = 'If you chose to turn feedback off, a countdown timer allows an average of 2 minutes per question to complete the sample examination (the same amount of time you will have on the real exam). You must complete the entire exam in one session. If you exit the session before completing all of the questions, your progress will be lost and you will have to start over.';
	arrStrings['helpTxtPSE24'] = 'If you chose to turn feedback on, the feedback will popup each time you select an answer choice in a question. To close the feedback popup window, click or tap it. Or, if the feedback popup is not covering the answer choices, click or tap another answer choice to close the current popup and open the popup for that answer choice.';
	arrStrings['helpTxtPSE32'] = 'If you chose to show answer choice feedback and your browser is set up to allow “cookies” to be stored on your computer, your answers during a study session will be stored in a cookie and restored the next time you come back to the study questions. You’ll be given the opportunity to clear the stored answers and start a new study session.';
	
	arrStrings['helpTxtPPQ24B'] = 'If feedback is on, you cannot advance to the next question until you select the correct answer of the current question.';
	
	arrStrings['alertNoLRSEOM'] = 'Unable to connect to LOMA’s learning system. \n\nPlease close the course window and relaunch it before attempting to continue.';
	
	arrStrings['failedToSaveState'] = 'Failed to save exam progress. Error: ';
	
	arrStrings['gStateError'] = '<p class="score bold maroon">An error occurred connecting to LOMA’s learning system. Cannot continue. Click or tap one of the following links to return to the course: ' + arrStrings['courseLinks'] + '</p>';
	
	arrStrings['fbMsgHIOCEOL'] = '<h2 class="swaphd">End of Lesson Practice Questions</h2><p class="swapmb">You have completed the Content for this lesson. The following questions can help make sure you understand the concepts covered in the lesson.</p>';
	/***************************************************
	
	END STRING VARS
	
	***************************************************/
	/***************************************************

	GLOBAL VARS

	***************************************************/

	var i;
	var lrs;
	// keeps track of which question is displayed
	var questionIndex = 0;
	// keeps track of student's answer selections
	var scoreKeep = [];
	// keeps track of score for a single chapter
	var scoreChapter = [];
	// keeps track of number of questions per chapter
	var scoreChapterCounts = [];
	// keeps track of which questions are marked for review
	var reviewKeep = [];
	// keeps track of number of correct answers overall
	var correctAnswers = 0;
	// percent score
	var pctScore = 0;
	// set up LO tracking object
	var missedByChObj = {};

	var prevQ = 0;
	// keeps track of the number of questions answered
	var answered = 0;
	// keeps track of if all questions have been answered
	var unansB;
	// whether or not we've already submitted the quiz
	var reviewB = 0;
	// is feedback on
	var showFB;
	// is the question list open
	var showQL = 0; 
	// when to show the fb is on alert
	var alertFBOff = true;
	// is this a restored session
	var restored;

	// doesn't seem to be doing anything; nothing ever changes it
	var reviewModeB = false;
	// question by original order
	var arrQuestionOrder = [];
	// question by order delivered
	var arrDeliveredExam = [];
	// stores the strID for current question
	var strQID = '0';
	// stores the language
	var lang;

	// temp array for list of all LO codes (with duplicates)
	//var tempLOArray = [];
	// temp array for list of all LO text (with duplicates)
	//var tempLOTxtArray = [];
	// Object containing single LO code + LO text
	var loObject = {};
	// array of all LO codes + LO text
	var loArray = [];
	// easy access to previous and next buttons for when feedback is on
	var prevBtn;
	var nextBtn;
	var qListItems;
	// cookies
	var readCook;
	var fbCook;
	var revCook;
	var revMode;
	var qlCook;
	var baseURL;

	//list of forms already delivered to student
	var deliveredForms = '';
	//which question pool is selected
	var poolIndex;
	//name of form delivered
	var formName;
	//id of form delivered
	var formID = 0;
	//values for assessment and question timers
	var startDate = 0;
	var arrQuestionTime = [];
	var qStopWatch;
	var bNoStopWatch = false;
	var assessmentTime = 0;
	var bQuestionsAnswered = false;
	
	// to keep track of focused elements when
	// dialog boxes open
	var focusedElementBeforeModal;
	// string to find all focusable elements
	var focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';
	var focusableElements;
	var firstTabStop;
	var lastTabStop;

	/***************************************************

	END GLOBAL VARS

	***************************************************/

	
	/***************************************************

	ARIA AND HELPER FUNCTIONS

	***************************************************/
	
	Array.prototype.shuffle = function() {
		var s = [];
		while (this.length) s.push(this.splice(Math.random() * this.length, 1));
		while (s.length) this.push(s.pop());
		return this;
	};

	function ariaButtonKey(e) {
		if (e.keyCode == keyCodes.enter || e.keyCode == keyCodes.space) {
			e.preventDefault(); 
			var id = e.target.getAttribute("id");
			
			var ansN;
			if (/arow/.test(id)) {
				ansN = id.replace('arow', '');
				ansN = parseInt(ansN);
				id = id.replace(/\d$/, "");
			}
			
			
			switch (id) {
				case "btnRestart": 
				case "pr-btnRestart":
					pqse.initializeExam(true);
					break;
				
				case "btnMark": 
					pqse.markReview(questionIndex);
					break;
				
				case "btnHelp": 
					pqse.openHelp();
					break;
				
				case "btnFeedback": 
					pqse.toggleFeedback(true);
					break;
				
				case "btnPrevious": 
					pqse.showQuestion(questionIndex - 1, e);
					break;
				
				case "btnNext": 
					pqse.showQuestion(questionIndex + 1, e);
					break;
				
				case "btnGrade": 
					pqse.checkGrade();
					break;
				
				case "menu-toggle":
					pqse.toggleQuestionList();
					break;

				case "arow":
					pqse.recordAns(ansN);
					break;
				
				case "c-close":
					pqse.hideAll();
					break;

				case "x-close":
					pqse.hideAll();
					break;
				
				case "closehelp":
					pqse.hideHelp();
					break;
				
				default:
					var newQIndex = parseInt(id.replace("ql", ""));
					pqse.showQuestion(newQIndex, e);
			}
		}
	}
	
	function ariaTabTrap(e) {
		
		var modalId = this.getAttribute('id');

		// Check for TAB key press
		if (e.keyCode === keyCodes.tab) {

			// SHIFT + TAB
			if (e.shiftKey) {
				if (document.activeElement === firstTabStop) {
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
		if (e.keyCode === keyCodes.escape) {
			if (modalId == "feedback") {
				pqse.setFeedback(1, e);
			}
			else if (modalId == "splash") {
				pqse.confirmGetScore(false);
			}
			else if (modalId == "correct" || modalId == "incorrect") {
				pqse.hideAll();
			}
			else if (modalId == "help") {
				pqse.hideHelp();
			}
		}
	}

	function skipMenu(e) {
		
		e.preventDefault();

		document.querySelector(e.target.getAttribute('href')).focus();
	}
	
	/***************************************************

	END ARIA AND HELPER FUNCTIONS

	***************************************************/

	
	var pqse = {
	
			
		/***************************************************

		INITIALIZE

		***************************************************/

		initializeExam : function(restartB) {
			
			
			


			window.onresize = this.showBottomNav; 
			document.addEventListener("keypress", this.HandleKey, true);


			// read cookies
			readCook = this.readCookie(title + '_answers');
			fbCook = this.readCookie(title + '_showFB');
			revCook = this.readCookie(title + '_review');
			revMode = this.readCookie(title + '_revmode');
			//qlCook = this.readCookie(title + '_qlist');


			// reset some vars
			arrQuestionTime = [];
			qStopWatch = 0;
			assessmentTime = 0;
			bNoStopWatch = false;
			questionIndex = 0;
			scoreKeep = [];
			scoreChapter = [];
			prevQ = 0;
			reviewB = 0;


			//initialize LMS and LRS
			/*if (!lrs) {
				lrslmsStartup();
			}

			if (lrs) {
				//retrieve from LRS list of forms already delivered
				gState();
			}*/

			// reset answer list and marker list and question time
			for (var i = 0; i < numQ; i++) {
				scoreKeep[i] = -1;
				reviewKeep[i] = 0;
				arrQuestionTime[i] = 0;
			}


			// reset chapter scores and chapter q count
			if (arrNumChap) {
				for (var z = 0; z < numTexts; z++) {
					numChap = arrNumChap[z];
					for (i = 0; i < numChap; i++) {
						var t = z + '.' + i;
						scoreChapter[t] = 0;
						scoreChapterCounts[t] = 0;
					}
				}
			}


			// set language
			switch (strTestLocaleId) {

				case 'en-US':
					lang = '1000';
					break;
				case 'fr-CA':
					lang = '2000';
					break;
				case 'es-MX':
					lang = '3000';
					break;
				case 'zh-CN':
					lang = '4000';
					break;
				case 'zh-TW':
					lang = '5000';
					break;
				case 'pt-BR':
					lang = '6000';
					break;
				case 'id-ID':
					lang = '7000';
					break;
				case 'ko-KR':
					lang = '8000';
					break;
				case 'ar-EG':
					lang = '9000';
					break;
				case 'th-TH':
					lang = '10000';
					break;
				default:
					lang = '1000';

			}

			// Collect all LOs in Array
			/*for (i = 0; i < arrPoolQuestions.length; i++) {

				// get the LO array from ch JS file
				var los = arrQuestions[arrPoolQuestions[i]].arrLOs;

				// cycle through LO array and push to temp array
				for (var j = 0; j < los.length; j++) {
					tempLOArray.push(los[j]);
				}

				// save the index of the CR
				var qCr = arrQuestions[arrPoolQuestions[i]].intCR - 1;

				// get the answer feedback for the CR
				var ansFB = arrQuestions[arrPoolQuestions[i]].arrAnswerFeedback[qCr];

				// create a regex to get the LO out of the feedback
				var regex = /<p class="explanations"><b>[^:]+:\s?(.*?)<\/b><\/p>$/;
				var found = regex.exec(ansFB);

				// push the LO text to an array (some questions have more than one LO)
				if (found && los.length == 1) {
					tempLOTxtArray.push(found[1]);
				} else if (found && los.length > 1) {

					var multiLO = found[1].split("; ");
					for (var k = 0; k < multiLO.length; k++) {
						tempLOTxtArray.push(multiLO[k]);
					}
				}

			}

			// remove duplicate LOs and save to perm array
			for (i = 0; i < tempLOArray.length; i++) {

				if (loArray.indexOf(tempLOArray[i]) == -1) {
					loArray.push(tempLOArray[i]);
					// create object to keep track of score for LO
					var lo = {};
					//lo.code = tempLOArray[i];
					lo.questions = 0;
					lo.correct = 0;
					lo.fullTxt = tempLOTxtArray[i];

					// add to LO object
					loObject[tempLOArray[i]] = lo;
				}

			}*/
			
			var imgUrl = document.querySelector("#btnFeedback img").src;
			if (readingSystem == "iBooks") {
				baseURL = '../..';
			}
			else {
				baseURL = imgUrl.replace(/(.*\/EPUB)\/img.*/g, "$1");
			}

			//disable text selection, set labels and titles from strings in exam JS file
			var elm = document.getElementById('examitem');
			if (elm) {
				//elm.onselectstart = function() { return false; };
				//elm.onmousedown = function () {return false;};
			}
			
			document.getElementById('to-main-content').addEventListener('click', skipMenu.bind(this));

			this.setStrings();
			this.buildHelp();

			// Create the list of questions
			var txt = "";
			//txt = '<ul id="quest-list" class="ul_qlist" role="menu" aria-label="' + arrStrings.ariaQL + '">';
			for (i = 0; i < numQ; i++) {
				txt += '<li class="qlist item" id="ql' + i + '" role="menuitem" aria-label="' + arrStrings.ariaQLItem + (i + 1) + '" aria-disabled="false" tabindex="0">' + (i + 1) + '<span class="marker"></span></li>\n';
			}
			//txt += '</ul>';
			document.getElementById('quest-list').innerHTML = txt;

			var mainBtns = slice(document.querySelectorAll("[role='button']"));
			for (i = 0; i < mainBtns.length; i++) {
				mainBtns[i].addEventListener('keydown', ariaButtonKey);
			}
		
			var qlItems = slice(document.querySelectorAll("ul#quest-list li.qlist.item"));
			for (i = 0; i < qlItems.length; i++) {
				qlItems[i].addEventListener('keydown', ariaButtonKey);
				qlItems[i].addEventListener('click', pqse.showQuestion);
				qlItems[i].querySelector('span.marker').addEventListener('click', function(){
					//do nothing
					//used for bubbling
				}, true);
			}

			// reset cookies if restart was selected 
			if (restartB == true || !readCook) {

				this.eraseCookie(title + '_answers');
				this.eraseCookie(title + '_review');
				//eraseCookie(title + '_showFB');
				this.eraseCookie(title + '_revmode');
				revMode = 0;

				// this is a new session
				restored = false;
				this.hideAll();
				this.hideWelcome();
				this.resetExamData();

			}

			else if (readCook) {

				// this is a restored session
				restored = true;
				this.restoreAnswers(readCook, revCook);
			}

			

			this.populateSettings();

			// Add event listeners to static elements
			if (restartB == false) {
				this.staticEventList();
			}

		},

		/***************************************************

		END INITIALIZE

		***************************************************/



		/***************************************************

		START STATICEVENTLIST

		***************************************************/

		staticEventList : function() {

			var scoreYes = document.getElementById('submitYes');
			scoreYes.addEventListener('click', function() {
				pqse.confirmGetScore(true);
			});
			var scoreNo = document.getElementById('submitNo');
			scoreNo.addEventListener('click', function() {
				pqse.confirmGetScore(false);
			});

			var fbOn = document.getElementById('fbOn');
			fbOn.addEventListener('click', function() {
				pqse.setFeedback(1);
			});
			var fbOff = document.getElementById('fbOff');
			fbOff.addEventListener('click', function() {
				pqse.setFeedback(0);
			});

			var btnRestart = document.getElementById('btnRestart');
			btnRestart.addEventListener('click', function() {
				pqse.initializeExam(true);
			});

			var btnMark = document.getElementById('btnMark');
			btnMark.addEventListener('click', function() {
				pqse.markReview(questionIndex);
			});

			var btnHelp = document.getElementById('btnHelp');
			btnHelp.addEventListener('click', function() {
				pqse.openHelp();
			});

			var btnFB = document.getElementById('btnFeedback');
			btnFB.addEventListener('click', function() {
				pqse.toggleFeedback(true);
			});

			var btnPrev = document.getElementById('btnPrevious');
			btnPrev.addEventListener('click', pqse.showQuestion);
			var btnNext = document.getElementById('btnNext');
			btnNext.addEventListener('click', pqse.showQuestion);

			/*var btnPrev = document.getElementById('btnPrevious');
			btnPrev.addEventListener('click', function() {
				pqse.showQuestion(event);
			});
			var btnNext = document.getElementById('btnNext');
			btnNext.addEventListener('click', function() {
				pqse.showQuestion(event);
			});*/

			var btnSubmit = document.getElementById('btnGrade');
			btnSubmit.addEventListener('click', function() {
				pqse.checkGrade();
			});

			var btnQListTog = document.getElementById('menu-toggle');
			btnQListTog.addEventListener('click', function() {
				
				pqse.toggleQuestionList(event);
			}, false);

			var btnHideWel = document.getElementById('closewelcome');
			btnHideWel.addEventListener('click', function() {
				pqse.hideWelcome();
			});

			var btnCloseCor = document.getElementById('correct');
			btnCloseCor.addEventListener('click', function() {
				pqse.hideAll();
			});
			var btnCloseIncor = document.getElementById('incorrect');
			btnCloseIncor.addEventListener('click', function() {
				pqse.hideAll();
			});

		/*	pqse.navButtons(nextBtn, 1);
			pqse.navButtons(prevBtn, 1);

			for (i = 0; i < qListItems.length; i++) {
				pqse.navButtons(qListItems[i], 1);
			}*/
		},

		/***************************************************

		END STATICEVENTLIST

		***************************************************/



		/***************************************************

		SHOW BOTTOM NAV AND SET HEIGHTS

		***************************************************/

		showBottomNav : function() {
			var navbarHeight;
			var footerHeight;
			var textHeight;
			

			var navbar = document.getElementById('navbar');
			if (navbar) {
				navbarHeight = navbar.offsetHeight;
			} else {
				navbarHeight = 0;
			}
			var header = document.getElementById('header');
			if (header) {
				headerHeight = header.offsetHeight;
			} else {
				headerHeight = 0;
			}
			var footer = document.getElementById('footer');
			if (footer) {
				footerHeight = footer.offsetHeight;
			} else {
				footerHeight = 0;
			}


			/*var epubContent = document.getElementById("epubContent");
			if (epubContent) { 
				epubContent.className += epubContent.className += " override no-marg";
			}
			var qlheight = document.body.clientHeight - 197;
			var examheight = document.body.clientHeight - 217;



			var divexam = document.getElementById('exam');
			if (divexam) {divexam.style.height = examheight + 'px';}*/


			if (headerHeight > 0) {
				var bannerText = document.getElementById('bannertext');
				var bannerText2 = document.getElementById('bannertextshort');
				if (bannerText) {
					textHeight = bannerText.offsetHeight;
					if (headerHeight - textHeight > 0) {
						bannerText.style.position = 'relative';
						bannerText.style.top = ((headerHeight / 2) - (textHeight / 2)) + 'px';
					}
				}
				if (bannerText2) {
					textHeight = bannerText2.offsetHeight;
					if (headerHeight - textHeight > 0) {
						bannerText2.style.position = 'relative';
						bannerText2.style.top = ((headerHeight / 2) - (textHeight / 2)) + 'px';
					}
				}

			}

			if (footerHeight > 0) {
				var footerText = document.getElementById('footertext');
				if (footerText) {
					textHeight = footerText.offsetHeight;
					if (footerHeight - textHeight > 0) {
						footerText.style.position = 'relative';
						footerText.style.top = ((footerHeight / 2) - (textHeight / 2)) + 'px';
					}
				}
			}

			var dropdown = document.getElementById('dropdown-content');
			var navMenu = document.getElementById('navMenu');
			if (dropdown && navMenu) {
				dropdown.style.top = navMenu.top + navMenu.offsetHeight + 'px';
				dropdown.style.right = navMenu.left + navMenu.offsetWidth - dropdown.offsetWidth + 'px';
			}
		},

		/***************************************************

		END SHOW BOTTOM NAV AND SET HEIGHTS

		***************************************************/

		sizeContent : function() {

			

			var examContHeight = document.getElementById("exam").offsetHeight;
			var helpContHeight = document.getElementById("help").offsetHeight;
			var qListIheight = document.querySelector(".ul_qlist > li.qlist.item").offsetHeight * numQ + 16;
			var divqlistHeight;

			
			var divQLHeight = examContHeight;
			/*if (restored && reviewB) {
				var divqlistHeight = examContHeight + 115;
			}*/
			if (helpContHeight) { 
				
				
				divqlistHeight = helpContHeight + 100;
				
				var closeHelpHeight = document.getElementById("closehelp").offsetHeight;
				//var preventHeight = helpContHeight - closeHelpHeight;
				//document.getElementById("prevent").style.height = preventHeight + 'px';
			}
			else if (examContHeight > qListIheight) {
				divqlistHeight = examContHeight + 100;
			}
			else {        
				divqlistHeight = qListIheight + 68;
			}

			var divQL = document.getElementById('QuestionList');
			if (divQL) {divQL.style.height = divqlistHeight + 'px';}
			var divqlist = document.getElementById('qlist');
			if (divqlist) {divqlist.style.height = divqlistHeight + 'px';}
			var fullContainer = document.getElementById('tcCHdiv');
			if (fullContainer) { 
				
				
				fullContainer.style.height = divqlistHeight + 'px'; 
			}

			if (readingSystem === 'iBooks' && layoutStyle === 'paginated') {
				if (divQL) { divQL.style.height = window.innerHeight - document.querySelector('.qlist-header').offsetHeight + 'px';}
				if (fullContainer) { fullContainer.style.height = window.innerHeight - document.querySelector('.qlist-header').offsetHeight + 'px';}
			}
		},

		/***************************************************

		SET STRINGS

		***************************************************/

		setStrings : function() {
			var elm;

			elm = document.getElementById('correct');
			if (elm) {
				elm.onselectstart = function() { return false; };
			}
			elm = document.getElementById('incorrect');
			if (elm) {
				elm.onselectstart = function() { return false; };
			}
			elm = document.getElementById('btnHomeNav');
			if (elm) {
				elm.innerHTML = arrStrings.btnHomeNav;
				elm.title = arrStrings.btnHomeNavTitle;
				elm.onselectstart = function() { return false; };
				elm.onmousedown = function() { return false; };
			}
			elm = document.querySelector('#navbar div[role="navigation"]');
			if (elm) {
				elm.setAttribute('aria-label', arrStrings.ariaMenu);
			}
			elm = document.getElementById('menu-toggle');
			if (elm) {
				elm.setAttribute('aria-label', arrStrings.ariaQLToggle);
			}
			elm = document.getElementById('correct');
			if (elm) {
				elm.setAttribute('aria-label', arrStrings.ariaCloseFB);
			}
			elm = document.getElementById('incorrect');
			if (elm) {
				elm.setAttribute('aria-label', arrStrings.ariaCloseFB);
			}
			elm = document.getElementById('btnPrevious');
			if (elm) {
				elm.title = arrStrings.btnPreviousTitle;
				elm.setAttribute('aria-label', arrStrings.ariaBtnPrev);
				elm.onselectstart = function() { return false; };
				elm.onmousedown = function() { return false; };
			}
			elm = document.querySelector('#btnPrevious span.label');
			if (elm) {
				elm.innerHTML = arrStrings.strPrevious;
				elm.onselectstart = function() { return false; };
				elm.onmousedown = function() { return false; };
			}
			elm = document.getElementById('btnNext');
			if (elm) {
				elm.title = arrStrings.btnNextTitle;
				elm.setAttribute('aria-label', arrStrings.ariaBtnNext);
				elm.onselectstart = function() { return false; };
				elm.onmousedown = function() { return false; };
			}
			elm = document.querySelector('#btnNext span.label');
			if (elm) {
				elm.innerHTML = arrStrings.strNext;
				elm.onselectstart = function() { return false; };
				elm.onmousedown = function() { return false; };
			}
			elm = document.getElementById('btnGrade');
			if (elm) {
				elm.title = arrStrings.btnGradeTitle;
				elm.setAttribute('aria-label', arrStrings.ariaBtnSubmit);
				elm.onselectstart = function() { return false; };
				elm.onmousedown = function() { return false; };
			}
			elm = document.querySelector('#btnGrade span.label');
			if (elm) {
				elm.innerHTML = arrStrings.strGrade;
				elm.onselectstart = function() { return false; };
				elm.onmousedown = function() { return false; };
			}
			elm = document.getElementById('btnRestart');
			if (elm) {
				elm.title = arrStrings.btnRestartTitle;
				elm.setAttribute('aria-label', arrStrings.ariaBtnRestart);
				elm.onselectstart = function() { return false; };
				elm.onmousedown = function() { return false; };
			}
			elm = document.querySelector('#btnRestart span.label');
			if (elm) {
				elm.innerHTML = arrStrings.strRestart;
				elm.onselectstart = function() { return false; };
				elm.onmousedown = function() { return false; };
			}
			elm = document.getElementById('btnFeedback');
			if (elm) {
				elm.title = arrStrings.btnFeedbackTitle;
				elm.setAttribute('aria-label', arrStrings.ariaBtnFeedback);
				elm.onselectstart = function() { return false; };
				elm.onmousedown = function() { return false; };
			}
			elm = document.querySelector('#btnFeedback span.label');
			if (elm) {
				elm.innerHTML = arrStrings.strFeedback;
				elm.onselectstart = function() { return false; };
				elm.onmousedown = function() { return false; };
			}
			elm = document.getElementById('btnMark');
			if (elm) {
				elm.title = arrStrings.btnMarkTitle;
				elm.setAttribute('aria-label', arrStrings.ariaBtnMark);
				elm.onselectstart = function() { return false; };
				elm.onmousedown = function() { return false; };
			}
			elm = document.querySelector('#btnMark span.label');
			if (elm) {
				elm.innerHTML = arrStrings.strMark;
				elm.onselectstart = function() { return false; };
				elm.onmousedown = function() { return false; };
			}
			elm = document.getElementById('btnHelp');
			if (elm) {
				elm.title = arrStrings.btnHelpTitle;
				elm.setAttribute('aria-label', arrStrings.ariaBtnHelp);
				elm.onselectstart = function() { return false; };
				elm.onmousedown = function() { return false; };
			}
			elm = document.querySelector('#btnHelp span.label');
			if (elm) {
				elm.innerHTML = arrStrings.strHelp;
				elm.onselectstart = function() { return false; };
				elm.onmousedown = function() { return false; };
			}
			elm = document.getElementById('submitYes');
			if (elm) {
				elm.value = arrStrings.btnYes;
				elm.title = arrStrings.btnYesTitle;
			}
			elm = document.getElementById('submitNo');
			if (elm) {
				elm.value = arrStrings.btnNo;
				elm.title = arrStrings.btnNoTitle;
			}
			elm = document.getElementById('errMsg2');
			if (elm) {
				elm.innerHTML = arrStrings.errMsg2;
			}
			elm = document.getElementById('fbOn');
			if (elm) {
				elm.value = arrStrings.btnOn;
				elm.title = arrStrings.btnOnTitle;
			}
			elm = document.getElementById('fbOff');
			if (elm) {
				elm.value = arrStrings.btnOff;
				elm.title = arrStrings.btnOffTitle;
			}
			elm = document.getElementById('fbMsg');
			if (elm) {
				elm.innerHTML = arrStrings.fbMsg;
			}
			elm = document.getElementById('target1');
			if (elm) {
				elm.innerHTML = arrStrings.welcomeBack;
				elm.querySelector('span').addEventListener('click', function() {
					pqse.initializeExam(true);
				}, false);
			}
			elm = document.getElementById('cf');
			if (elm) {
				elm.innerHTML = arrStrings.strCorrect;
			}
			elm = document.getElementById('wf');
			if (elm) {
				elm.innerHTML = arrStrings.strIncorrect;
			}
			elm = document.getElementById('footertext');
			if (elm) {
				elm.innerHTML = arrStrings.footertext1 + strCopyright + arrStrings.footertext2;
			}

		},

		/***************************************************

		END STRINGS

		***************************************************/



		/***************************************************

		BUILD HELP

		***************************************************/

		buildHelp : function() {

			

			var help = document.getElementById('help');

			var helpContents = '<div id="closehelp" class="imglayer" role="button" aria-label="' + arrStrings.ariaCloseHelp + '" tabindex="0"><p>×</p></div><h2 class="score" tabindex="-1">' + arrStrings.helpTxt1 + '</h2>';


			var hQList = '<h3 class="help">' + arrStrings.helpTxt2 + '</h3><p class="score">' + arrStrings.helpTxt3 + ' <img src="' + baseURL + '/imgs/hamburger.png" alt=""/>. ' + arrStrings.helpTxt4 + '</p>';
			var hQListTbl = '<table class="tbl_qlisthlp"><tr class="sr-only"><th scope="col">Question Marker</th><th scope="col">Explanation</th></tr><tr><td class="qlist_item">1<span class=\"sr-only">, ' + arrStrings.helpTxt5sr + '</span></td><td class="tdhelp">' + arrStrings.helpTxt5 + '</td></tr><tr><td class="qlist_item_a">2<span class=\"sr-only">, ' + arrStrings.helpTxt6sr + '</span><span class="marker"></span></td><td class="tdhelp">' + arrStrings.helpTxt6 + '</td></tr><tr><td class="qlist_item_r">3<span class=\"sr-only">, ' + arrStrings.helpTxt7sr + '</span><span class="marker"></span></td><td class="tdhelp">' + arrStrings.helpTxt7 + '</td></tr><tr><td class="qlist_item_oops">4<span class=\"sr-only">, ' + arrStrings.helpTxt8sr + '</span><span class="marker"><span class="icon"> !</span></span></td><td class="tdhelp">' + arrStrings.helpTxt8 + '</td></tr><tr><td class="qlist_item_c">5<span class=\"sr-only">, ' + arrStrings.helpTxt9sr + '</span><span class="marker"><span class="icon"> &#10004;</span></span></td><td class="tdhelp">' + arrStrings.helpTxt9 + '</td></tr><tr><td class="qlist_item_x">6<span class=\"sr-only">, ' + arrStrings.helpTxt10sr + '</span><span class="marker"><span class="icon"> &#215;</span></span></td><td class="tdhelp">' + arrStrings.helpTxt10 + '</td></tr></table>';
			hQList += hQListTbl;
			helpContents += hQList;

			var hNav = '<h3 class="help">' + arrStrings.helpTxt11 + '</h3><p class="score">' + arrStrings.helpTxt12 + ' <img src="' + baseURL + '/imgs/prev-bk.png" alt="" /> ' + arrStrings.helpTxt13 + ' <img src="' + baseURL + '/imgs/next-bk.png" alt="" /> ' + arrStrings.helpTxt14 + '</p><p class="score">' + arrStrings.helpTxt15 + '</p><p class="score">' + arrStrings.helpTxt16 + ' <img src="' + baseURL + '/imgs/pencil-bk.png" alt="" />.</p><p class="score">' + arrStrings.helpTxt17 + ' <img src="' + baseURL + '/imgs/checkmark-xs.png" alt="" /> ' + arrStrings.helpTxt18 + ' <img src="' + baseURL + '/imgs/times-circle-xs.png" alt="" />, ' + arrStrings.helpTxt19 + ' <span class="fill"></span>.</p><p class="score">' + arrStrings.helpTxt20 + '</p>';
			helpContents += hNav;

			var hFB = '<h3 class="help">' + arrStrings.helpTxt21 + '</h3><p class="score">' + arrStrings.helpTxt22 + ' <img src="' + baseURL + '/imgs/feedback-bk.png" alt="" /> ' + arrStrings.helpTxt23 + '</p><p class="score">' + arrStrings.helpTxt24 + '</p>';
			helpContents += hFB;

			var hGrade = '<h3 class="help">' + arrStrings.helpTxt25 + '</h3><p class="score">' + arrStrings.helpTxt26 + ' <img src="' + baseURL + '/imgs/submit-bk.png" alt="" /> ' + arrStrings.helpTxt27 + '</p><p class="score">' + arrStrings.helpTxt28 + ' <img src="' + baseURL + '/imgs/restart-bk.png" alt="" /> ' + arrStrings.helpTxt29 + '</p><p class="score">' + arrStrings.helpTxt30 + '</p>';
			helpContents += hGrade;

			var hCookies = '<h3 class="help">' + arrStrings.helpTxt31 + '</h3><p class="score">' + arrStrings.helpTxt32 + '</p>';
			helpContents += hCookies;


			help.innerHTML = helpContents;

			document.getElementById("closehelp").addEventListener('click', function() {
				pqse.hideHelp();
			});
			document.getElementById('closehelp').addEventListener("keydown", ariaButtonKey);

		},

		/***************************************************

		END BUILD HELP

		***************************************************/



		/***************************************************

		COOKIES

		***************************************************/

		writeCookie : function() {

			

			//write the answers cookie
			var ansCook = arrQuestionOrder.join('~') + '||' + scoreKeep.join('~') + '||' + arrQuestionTime.join('~') + '||' + poolIndex + '||' + assessmentTime;
			
			pqse.createCookie(title + '_answers', ansCook, 180);
		},

		createCookie : function(name, value, days) {

			
			var expires;
			if (days) {
				var date = new Date();
				date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
				expires = "; expires=" + date.toGMTString();
			} else {
				expires = "";
			}
			document.cookie = name + "=" + value + expires + "; path=/";

		},

		readCookie : function(name) {

			

			var nameEQ = name + "=";
			var ca = document.cookie.split(';');
			for (i = 0; i < ca.length; i++) {
				var c = ca[i];
				while (c.charAt(0) == ' ') c = c.substring(1, c.length);
				if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
			}
			return null;

		},

		eraseCookie : function(name) {

			// 

			pqse.createCookie(name, "", -1);

		},

		/***************************************************

		END COOKIES

		***************************************************/



		/***************************************************

		HIDE/OPEN FUNCTIONS

		***************************************************/

		openHelp : function() {

			
			
			pqse.hideAll();
			pqse.hideWelcome();
	
			focusedElementBeforeModal = document.activeElement;
			var help = document.getElementById('help');
			//help.style.display = 'block';
			help.setAttribute("aria-hidden", false);
			//document.getElementById('help').innerHTML = arrStrings['helpTxt'];
		
			focusableElements = slice(help.querySelectorAll(focusableElementsString));
			firstTabStop = focusableElements[0];
			lastTabStop = focusableElements[focusableElements.length - 1];
		
			help.addEventListener("keydown", ariaTabTrap.bind(help), false);
			help.focus();
			
			//document.getElementById('examitem').style.display = 'none';
			document.getElementById("examitem").setAttribute("aria-hidden", true);
			pqse.sizeContent();

		},

		hideWelcome : function() {

			

			var target0 = document.getElementById('welcome');
			if (target0) { target0.style.display = "none"; }
			var target1 = document.getElementById('splash');
			if (target1) { target1.style.display = "none"; }

		},

		hideHelp : function() {

			

			var target0 = document.getElementById('help');
			if (target0) { 
				//target0.style.display = "none";
				target0.setAttribute("aria-hidden", true);
			}
			var target1 = document.getElementById('examitem');
			if (target1) { 
				//target1.style.display = "block";
				target1.setAttribute("aria-hidden", false);
			}

			if (focusedElementBeforeModal) {
				focusedElementBeforeModal.focus();
				focusedElementBeforeModal = null;
			}

		},

		hideAll : function() {

			

			document.getElementById('expc').innerHTML = "";
			document.getElementById('expw').innerHTML = "";
			document.getElementById('correct').style.display = "none";
			document.getElementById('incorrect').style.display = "none";
			var fbAlert = document.getElementById('fbalert');
			if (fbAlert) {
				fbAlert.style.display = "none";
			}

			if (focusedElementBeforeModal) {
				focusedElementBeforeModal.focus();
				focusedElementBeforeModal = null;
			}

		},

		/***************************************************

		END HIDE/OPEN FUNCTIONS

		***************************************************/



		/***************************************************

		RESET EXAM DATA

		***************************************************/

		resetExamData : function() {

			

			pqse.BuildLearnerExam();
			answered = 0;
			for (i = 0; i < numQ; i++) {
				scoreKeep[i] = -1;
				arrQuestionOrder[i] = arrDeliveredExam[i];
			}

		},

		/***************************************************

		END RESET EXAM DATA

		***************************************************/



		/***************************************************

		BUILD LEARNER EXAM

		***************************************************/

		BuildLearnerExam : function() {

			

			var intTestQuestionNum;
			var objCurPool = {};
			var intSelQuestionNum;
			var strTemp;
			var intNumQuestions;
			var intFirstQuestionNum;
			var intSelectCount;
			var intSelPool;
			arrDeliveredExam = [];
			var j;

			intTestQuestionNum = -1;
			
			//get number of pools (forms) from which the exam can be built
			numPools = arrPools.length;
			if (numPools > 1) {
				//first check if the number of delivered forms equals numPools (indicating student has taken all available forms)
				if ((deliveredForms.match(/,/g) || []).length == numPools) {
					intSelPool = GetRandomInt(0, numPools - 1);
					poolIndex = intSelPool;
					objCurPool = arrPools[poolIndex];
				} else {
					var availablePools = [];
					for (var x = 0; x < numPools; x++) {
						//check if this form has been delivered already to the student
						//include it in the availablePools if it hasn't
						var n = deliveredForms.search(arrPools[x].formName);
						if (n == -1) {
							availablePools.push(x);
						}
					}
					numPools = availablePools.length;
					intSelPool = GetRandomInt(0, numPools - 1);
					poolIndex = availablePools[intSelPool];
					objCurPool = arrPools[poolIndex];
				}
			} else {
				objCurPool = arrPools[0];
				poolIndex = 0;
			}
			
			
			formName = objCurPool.formName;
			formID = objCurPool.formID;

			// Generate the arrDeliveredExam array by picking intSelectCount number of questions from the test question Pool
			//objCurPool = arrPools[0];
			intNumQuestions = objCurPool.arrPoolQuestions.length;
			intSelectCount = intNumQuestions;
			intFirstQuestionNum = 0;
			var arrCases = [];
			var arrCasesID = [];
			var intCaseCount = 0;
			var arrEasy = [];
			var arrEasyID = [];

			if (randomize == 1) {
				//randomizing, so pick two of the first five as easy items to display first
				//save them to the arrEasy array to splice into the first and second position in the exam array later
				if (intNumQuestions > 5) {
					var intFirstEasy = 0;
					var intEasyPool = 5;
					var objEasyPool = arrPools[0];

					for (j = 0; j < 2; j++) {
						intSelQuestionNum = pqse.GetRandomInt(intFirstEasy, intEasyPool - 1);
						arrEasyID[j] = objEasyPool.arrPoolQuestions[intSelQuestionNum];
						strTemp = objEasyPool.arrPoolQuestions[intFirstEasy];
						objEasyPool.arrPoolQuestions[intFirstEasy] = objEasyPool.arrPoolQuestions[intSelQuestionNum];
						objEasyPool.arrPoolQuestions[intSelQuestionNum] = strTemp;

						intFirstEasy = intFirstEasy + 1;
					}
				}
			}

			//fill arrDeliveredExam with items
			for (j = 0; j < intSelectCount; j++) {
				if (randomize == 1) {
					//we're randomizing, so if this question is part of a minicase or is an easy one, don't add it here
					//we'll splice it into the array below in it's correct position
					if (arrQuestions[objCurPool.arrPoolQuestions[j]].intMinicase > -1) {
						arrCases[intCaseCount] = j;
						arrCasesID[intCaseCount] = objCurPool.arrPoolQuestions[j];
						intCaseCount = intCaseCount + 1;
					} else if (pqse.arraycontains(arrEasyID, objCurPool.arrPoolQuestions[j]) == true) {
						//do nothing; we'll splice this one into the array later
					} else {
						intTestQuestionNum = intTestQuestionNum + 1;
						arrDeliveredExam[intTestQuestionNum] = objCurPool.arrPoolQuestions[j];
					}
				} else {
					intTestQuestionNum = intTestQuestionNum + 1;
					arrDeliveredExam[intTestQuestionNum] = objCurPool.arrPoolQuestions[j];
				}

				strTemp = objCurPool.arrPoolQuestions[intFirstQuestionNum];
				objCurPool.arrPoolQuestions[intFirstQuestionNum] = objCurPool.arrPoolQuestions[j];
				objCurPool.arrPoolQuestions[j] = strTemp;
				intFirstQuestionNum = intFirstQuestionNum + 1;
			}

			// Randomize question order
			if (randomize == 1) {
				arrDeliveredExam.shuffle();
				//now splice in the easy items to the first two positions
				for (j = 0; j < arrEasyID.length; j++) {
					arrDeliveredExam.splice(j, 0, arrEasyID[j]);
				}
				//now look for any minicases and put them back in their original position
				for (j = 0; j < intCaseCount; j++) {
					arrDeliveredExam.splice(arrCases[j], 0, arrCasesID[j]);
				}
			} else {
				//don't randomize, sort arrDeliveredExam ascending
				//arrDeliveredExam.sort();
			}

		},

		/***************************************************

		END BUILD LEARNER EXAM

		***************************************************/



		/***************************************************

		RESTORE ANSWERS

		***************************************************/

		restoreAnswers : function() {

			

			// split the answer cookie
			var arrTemp = [];
			arrTemp = readCook.split("||");
			
			// set the question order from the cookie
			arrQuestionOrder = arrTemp[0].split("~");

			// set the answer array from the cookie
			var ansArray = [];
			ansArray = arrTemp[1].split('~');
			
			var revMarkers;

			// if any answered had been marked for review,
			// create a review array from the cookie
			var revTemp = [];
			if (revCook) {
				revTemp = revCook.split("||");
				revMarkers = revTemp[1].split('~');
			}

			for (i = 0; i < ansArray.length; i++) {
				arrDeliveredExam[i] = arrQuestionOrder[i];

				// if the question was answered, 
				// add it to the score keeper and highlight the cell
				if (ansArray[i] > 0) {
					scoreKeep[i] = ansArray[i];
					// highlight question list cell to show answered questions
					pqse.setCellHighlight(i);
					answered++;
				} 
				// otherwise set the score keeper to unaswered
				else {
					scoreKeep[i] = -1;
				}

				// if the question was marked review, 
				// restore the marker
				if (revMarkers && revMarkers[i] == 1) {
					reviewKeep[i] = revMarkers[i];
					var qMarked = document.getElementById('ql' + i);
					var qMarkedLbl = qMarked.getAttribute('aria-label');
					qMarkedLbl = qMarkedLbl + ", " + arrStrings.ariaMarked;
					qMarked.className = document.getElementById('ql' + i).className + " qlist_item_r";
					qMarked.setAttribute('aria-label', qMarkedLbl);
				}
			}

			//log the question durations from the cookie
			if (typeof arrTemp[2] === 'undefined') {
				for (i = 0; i < numQ; i++) {
				arrQuestionTime[i] = 0;
				}
			} else {
				var qtArray = arrTemp[2].split('~');
				for (i = 0; i < qtArray.length; i++) {
					arrQuestionTime[i] = parseInt(qtArray[i]);
				}
			}	
			
			//get the index of the question pool that was used
			if (typeof arrTemp[3] === 'undefined') {
				poolIndex = 0;
			} else {
				poolIndex = parseInt(arrTemp[3]);
			}
			
			//get the assessment time stored in the cookie
			if (typeof arrTemp[4] === 'undefined') {
				assessmentTime = 0;
			} else {
				assessmentTime = parseInt(arrTemp[4]);
			}
		
			formName = arrPools[poolIndex].formName;
			//poolIRI = arrPools[poolIndex].IRI;
			formID = arrPools[poolIndex].formID;
			intNumQuestions = arrPools[poolIndex].arrPoolQuestions.length;

			document.getElementById('welcome').style.display = 'block';

		},

		/***************************************************

		END RESTORE ANSWERS

		***************************************************/



		/***************************************************

		SET CELL HIGHLIGHT

		***************************************************/

		setCellHighlight : function(ql_id) {

			
			
			// highlight question list cell to show it's been answered
			var elm = document.getElementById('ql' + ql_id);
			var elmLbl = elm.getAttribute("aria-label");
			if (elm) {
				elm.classList.add("qlist_item_a");
				if (elm.className.indexOf('oops') > -1) {
					elm.classList.remove('qlist_item_oops');
					elm.querySelector('span.marker').removeChild(elm.querySelector('span.icon'));
				}
				if (!/answered/.test(elmLbl)) {
					elmLbl = elmLbl + ", " + arrStrings.ariaAnswered;
					elm.setAttribute("aria-label", elmLbl);
				}
			}
			if (showQL == false) {
				var elm2 = document.getElementById('ql1000');
				if (elm2) {
					elm2.className = "qlist_item_a no_b";
				}
			}

		},

		/***************************************************

		END SET CELL HIGHLIGHT

		***************************************************/




		/***************************************************

		MARK FOR REVIEW

		***************************************************/

		markReview : function(which) {
			
			var reviewQues = document.getElementById("ql" + which);
			var label = reviewQues.getAttribute('aria-label');
			var newLabel;

			if (!which) {
				which = questionIndex;
			}

			if (-1 !== reviewQues.className.indexOf("qlist_item_r")) {
				reviewQues.className = reviewQues.className.replace(" qlist_item_r", "");    
				reviewKeep[questionIndex] = 0;
				newLabel = label.replace(", " + arrStrings.ariaMarked, "");
				reviewQues.setAttribute('aria-label', newLabel);
			}
			else {
				reviewQues.classList.add('qlist_item_r');
				//reviewQues.className = reviewQues.className + " qlist_item_r"; 
				
				
				if (reviewQues.className.indexOf('oops') > -1) {
					reviewQues.classList.remove('qlist_item_oops');
					reviewQues.querySelector('span.marker').removeChild(reviewQues.querySelector('span.icon'));
				}
				reviewKeep[questionIndex] = 1;
				newLabel = label + ", " + arrStrings.ariaMarked;
				reviewQues.setAttribute('aria-label', newLabel);
			}

			var reviewCook = arrQuestionOrder.join('~') + "||" + reviewKeep.join('~');
			pqse.createCookie(title + '_review', reviewCook, 180);

		},

		/***************************************************

		END MARK FOR REVIEW

		***************************************************/



		/***************************************************

		POPULATE SETTINGS

		***************************************************/

		populateSettings : function() {

			

			// get next/prev buttons and qlist buttons
			prevBtn = document.getElementById("btnPrevious");
			nextBtn = document.getElementById("btnNext");
			qListItems = document.querySelectorAll("#QuestionList .ul_qlist li");

			// review mode settings
			if (revMode == 1) { reviewB = 1; }
			// write review mode cookie
			pqse.createCookie(title + '_revmode', reviewB, 180);

			
			// feedback settings
			if (fbCook == null) {
				pqse.askFB();
				if (!reviewB) { document.getElementById("btnRestart").style.display = "none"; }
			} 
			else {
				
				pqse.setFeedback(fbCook);
			}

			
			// question list settings
			// if cookie doesn't exist and we have a larger screen
			if (/*qlCook == null && */window.innerWidth > 768) {
				pqse.toggleQuestionList();
			}
			// if cookie does exist and we're toggled the wrong way,
			// call the toggle function
			/*else {
				if (qlCook == 0 && (showQL)) { 
					pqse.toggleQuestionList(); 
				}
				else if (qlCook == 1 && (showQL == false)) {
					pqse.toggleQuestionList(); 
				}
			}*/


			// new session
			if (!reviewB) {
				//start the assessment duration clock
				startDate = (new Date()).getTime();
				pqse.showQuestion();
			}
			// restored session
			else if (reviewB) {
				pqse.gradeMe();
			}


		},

		/***************************************************

		END POPULATE SETTINGS

		***************************************************/



		/***************************************************

		FEEDBACK FUNCTIONS

		***************************************************/

		askFB : function() {

			

			focusedElementBeforeModal = document.activeElement;
			var scrn = document.getElementById('screen');
			var feedback = document.getElementById('feedback');
			scrn.style.top = "0px";
			scrn.style.left = "0px";
			scrn.style.display = "block";
			feedback.style.display = "block";

			focusableElements = slice(feedback.querySelectorAll(focusableElementsString));
			firstTabStop = focusableElements[0];
			lastTabStop = focusableElements[focusableElements.length - 1];
		
			feedback.addEventListener('keydown', ariaTabTrap.bind(feedback), false);
			firstTabStop.focus();
			document.getElementById("tcCHdiv").setAttribute("aria-hidden", true);
		

		},


		setFeedback : function(choice) {

			

			var feedback = document.getElementById('feedback');
			document.getElementById("tcCHdiv").setAttribute("aria-hidden", false);
			showFB = parseInt(choice);

			document.getElementById('screen').style.display = 'none';
			document.getElementById('feedback').style.display = 'none';
			feedback.removeEventListener('keydown', ariaTabTrap.bind(feedback), false);
			pqse.createCookie(title + '_showFB', showFB, 180);

			pqse.btnSettings("load");

			document.getElementById("tcCHdiv").removeAttribute('aria-hidden');

		},

		toggleFeedback : function(shutoffAlertB) {
			
			
			showFB = (showFB == 0) ? 1 : 0; 

			//showFB = !showFB;
			
			var elm = document.getElementById('target1');

			if (showFB) {
				if (elm) {
					elm.innerHTML = arrStrings.strFeedbackEnabled;
				}
			} else {
				if (elm) {
					elm.innerHTML = arrStrings.strFeedbackDisabled;
				}
			}
			if (shutoffAlertB) { alertFBOff = false; }
			pqse.hideAll();
			pqse.hideHelp();

			pqse.createCookie(title + '_showFB', showFB, 180);

			pqse.btnSettings("fbTogg");

			var wel = document.getElementById('welcome');
			if (wel) { wel.style.display = 'block'; }

		},

		/***************************************************

		END FEEDBACK FUNCTIONS

		***************************************************/



		/***************************************************

		SHOW/HIDE QUESTION LIST

		***************************************************/

		toggleQuestionList : function(e) {

			

			showQL = !showQL;

			var menuToggle = document.getElementById("menu-toggle");
			// 

			/*if (menuToggle.className.indexOf("checked") > -1) {
				menuToggle.className = menuToggle.className.replace(" checked", "");
				pqse.createCookie(title + '_qlist', 0, 180);
			} 
			else if (menuToggle.className.indexOf("checked") == -1) {
				menuToggle.className += " checked";
				pqse.createCookie(title + '_qlist', 1, 180);
			}*/
			

			if (menuToggle.getAttribute("aria-expanded") == "true") {
				menuToggle.removeAttribute("aria-expanded");
				//pqse.createCookie(title + '_qlist', 0, 180);
			} else {
				menuToggle.setAttribute("aria-expanded", true);
				//pqse.createCookie(title + '_qlist', 1, 180);
			}
			
		},

		/***************************************************

		END SHOW/HIDE QUESTION LIST

		***************************************************/



		/***************************************************

		SHOW QUESTION

		***************************************************/

		showQuestion : function(e) {
			
				
			if (reviewB == 0) {
				pqse.UpdateQStopWatch();
				pqse.UpdateAssessmentTime();
				if (bQuestionsAnswered) { 
					pqse.writeCookie(); 
				}
			}

			if (e == "reload") { 
				pqse.hideHelp();
				pqse.hideAll();
			}
			else if (typeof e == "object") { 
				
				if (questionIndex != 0) { pqse.hideWelcome(); }
				if (e.target.className.indexOf("qlist") > -1) {
					questionIndex = e.target.getAttribute('id').replace("ql", "");
					questionIndex = parseInt(questionIndex);
					
				}
				else if (e.target.className.indexOf('marker') > -1) {
					questionIndex = e.target.parentNode.getAttribute('id').replace("ql", "");
					questionIndex = parseInt(questionIndex);
				}
				else if ((e.key == 'n') || e.target.getAttribute('id') == 'btnNext' || (!e.key && e.target.getAttribute('id') != 'btnNext' && findAncestor(e.target, 'class', "navcell").getAttribute('id') == 'btnNext')) {
					questionIndex++;
				}
				else if (e.key == 'p' || e.target.getAttribute('id') == 'btnPrevious' || (!e.key && e.target.getAttribute('id') != 'btnPrevious' && findAncestor(e.target, 'class', "navcell").getAttribute('id') == 'btnPrevious')) {
					questionIndex--;
				}
				pqse.btnSettings("newQ"); 
				pqse.hideHelp();
				pqse.hideAll();
			}
			else if (typeof e == "number") {
				questionIndex = e;
			}
			else {
				questionIndex = 0;
			}

			//loop around if we're at the first or last question
			// and fb is off or if in Review mode

			if (!showFB || reviewB || numChap > 1) {
				if (questionIndex < 0) {
					questionIndex = (numQ - 1);
				} else {
					if (questionIndex > (numQ - 1)) { questionIndex = 0; }
				}
			}

			//get the strID for questionIndex 
			strQID = arrDeliveredExam[questionIndex];

			var choices = [];
			var thisChoice;
			var examItem;
			var displayNum = questionIndex + 1;
			var stem;
			var tref;

			//build exam item
			examItem = '<form>\n';

			// reference bar 
			examItem += '<div class="ref-bar"><p class=\'qref\'>' + arrStrings.strQuestion + ' ' + displayNum + '&#160;' + arrStrings.strOf + '&#160;' + numQ + '</p>';
			tref = arrQuestions[strQID].arrLOs;
			if (tref) {
				var trefString = tref.join(', ');
				if (tref.length > 1) {
					examItem += '<p class=\'textref\'><b>' + arrStrings.strReference + '</b> ' + arrStrings.strReference2 + ' ' + trefString + '</p></div>';
				} else {
					examItem += '<p class=\'textref\'><b>' + arrStrings.strReference + '</b> ' + arrStrings.strReference1 + ' ' + trefString + '</p></div>';
				}
			}


			// if the question is a mini case, add wrapper
			// and mini case text
			if (arrQuestions[strQID].intMinicase != -1) {
				if (arrMinicases[arrQuestions[strQID].intMinicase]) {
					examItem += '<div class=\'microcase\'>' + arrMinicases[(arrQuestions[strQID].intMinicase)] + '</div>';
				}
			}

			// add question stem
			stem = arrQuestions[strQID].strStem;
			examItem += stem;

			// add question choices
			choices = arrQuestions[strQID].arrAnsChoices;
			if (choices) {
				/*examItem += "<div class=\"anstable\">";
				if (choices[-1]) {
					examItem += "<div class=\"ansrow\"><div class=\"anshead\">&nbsp;</div><div class=\"anshead\">" + choices[-1] + "</div></div>";
				}*/
				

				var answerIds = [];
				for (i = 0; i < choices.length; i++) {
					var answerId = "arow" + (i + 1);
					answerIds.push(answerId);
				}
				answerIds = answerIds.join(" ");
				examItem += "<div class=\"anstable\" role=\"radiogroup\" aria-owns=\"" + answerIds + "\" aria-label=\"" + arrStrings.ariaAnsChoices + "\" tabindex=\"0\">";
				if (choices[-1]) {
					examItem += "<div class=\"ansrow\"><div class=\"anshead\"></div><div class=\"anshead\">" + choices[-1] + "</div></div>";
				}
				
				// loop through answer choices to build
				for (i = 0; i < choices.length; i++) {
					thisChoice = choices[i];

					// if the question has already been answered
					if (scoreKeep[questionIndex] == (i + 1)) {
						//highlight the student's selected answer choice
						examItem += "<div id=\"arow" + (i + 1) + "\" class=\"ansrow\" role=\"radio\" aria-checked=\"true\" tabindex=\"0\">";

						// if feedback is off, show neutral markers
						if (!showFB) {
							
							examItem += "<div class=\"anscell sr\" id=\"a" + (i + 1) + "\"><div class=\"marker\"></div></div><div class=\"anscell\">" + thisChoice + "</div>";
						// if feedback is on, show cor/incor markers
						} else {
							if (scoreKeep[questionIndex] == arrQuestions[strQID].intCR) {
								examItem += "<div class=\"anscell cr\" id=\"a" + (i + 1) + "\"><div class=\"marker\"><img src=\"" + baseURL + "/imgs/times-circle-xs.png\" class=\"xr hidden\" alt=\"" + arrStrings.ariaIncorrect + "\" aria-hidden=\"true\" /><img src=\"" + baseURL + "/imgs/checkmark-xs.png\" class=\"cr show\" alt=\"" + arrStrings.ariaCorrect + "\" aria-hidden=\"false\" /></div></div><div class=\"anscell\">" + thisChoice + "</div>";
							} else {
								examItem += "<div class=\"anscell xr\" id=\"a" + (i + 1) + "\"><div class=\"marker\"><img src=\"" + baseURL + "/imgs/times-circle-xs.png\" class=\"xr show\" alt=\"" + arrStrings.ariaIncorrect + "\" aria-hidden=\"true\" /><img src=\"" + baseURL + "/imgs/checkmark-xs.png\" class=\"cr hidden\" alt=\"" + arrStrings.ariaCorrect + "\" aria-hidden=\"false\" /></div></div><div class=\"anscell\">" + thisChoice + "</div>";
							}
						}
						examItem += "</div>";
					// if the question hasn't already been answered
					} else {
						examItem += "<div id=\"arow" + (i + 1) + "\" class=\"ansrow\" role=\"radio\" aria-checked=\"false\" tabindex=\"0\">";
						examItem += "<div class=\"anscell\" id=\"a" + (i + 1) + "\"><div class=\"marker\"><img src=\"" + baseURL + "/imgs/times-circle-xs.png\" class=\"xr hidden\" alt=\"" + arrStrings.ariaIncorrect + "\" aria-hidden=\"true\" /><img src=\"" + baseURL + "/imgs/checkmark-xs.png\" class=\"cr hidden\" alt=\"" + arrStrings.ariaCorrect + "\" aria-hidden=\"true\" /></div></div><div class=\"anscell\">" + thisChoice + "</div>";
						examItem += "</div>";
					}
				}

				// close the answer table div
				examItem += "</div>";
			}

			// close the form
			examItem += '</form>';

			
			// update src url for questions
			examItem = examItem.replace('src="media', 'src="' + baseURL);

			examItem = examItem.replace(/&nbsp;/g, ' ');
			examItem = examItem.replace(/ < /g, ' &lt; ');
			examItem = examItem.replace(/ > /g, ' &gt; ');
			examItem = examItem.replace(/ & /g, ' &#38; ');

			// add the question to the examitem div
			document.getElementById('examitem').innerHTML = examItem;

			// add eventlistener to radio items
			var currentAnswers = slice(document.querySelectorAll('div.ansrow[role="radio"]'));
		
			for (i = 0; i < currentAnswers.length; i++) {
				currentAnswers[i].addEventListener('keydown', ariaButtonKey.bind(this));
				var selAns = i + 1;
				currentAnswers[i].addEventListener('click', pqse.recordAns.bind(this, selAns.toString()));
			}

			pqse.sizeContent();
			
			//updateTables(document.getElementById('examitem'));
			
			// move focus to the quesiton so user doesn't
			// have to tab through the entire qlist to 
			// get to the content
			if (fbCook || showFB != undefined) {  
				document.getElementById("examitem").focus();
			}

			var elm;

			// change the active question in the question list
			elm = document.getElementById('ql' + prevQ);
			if (elm) { elm.className = elm.className.replace(" active", ""); }
			elm = document.getElementById('ql' + questionIndex);
			if (elm) { elm.className = elm.className + " active"; }
			prevQ = questionIndex;

			// if the selected question's cell in the question 
			// list is off the bottom of the screen, 
			// scroll the question list
			/*elm.scrollIntoView(true);
			document.getElementById("QuestionList").scrollTop -= 58;*/
			
			var objDiv;

			if (elm) {
				if (elm.offsetTop > (document.body.clientHeight - 140)) {
					objDiv = document.getElementById('QuestionList');
					objDiv.scrollTop = objDiv.scrollTop + elm.offsetHeight;
				} else {
					if (elm.offsetTop == 0) {
						objDiv = document.getElementById('QuestionList');
						objDiv.scrollTop = 0;
					}
				}
				if (questionIndex == (numQ - 1)) {
					objDiv = document.getElementById('QuestionList');
					objDiv.scrollTop = objDiv.scrollHeight;
				}
			}

			if (reviewB == 0) {
				//start the stop watch for the question
				qStopWatch = (new Date()).getTime();
				
			}
			
			// fix extended answer choices via <wbr> tags
			var cells = slice(document.querySelectorAll('.anshead,.anscel'));
			for (i = 0; i < cells.length; i++) {
				var text = cells[i].innerHTML;
				var regEx = /([A-Za-z])\/([A-Za-z])/;
				var newText = text.replace(regEx, '$1/<wbr />$2');
				cells[i].innerHTML = newText;
			}

		},

		/***************************************************

		END SHOW QUESTION

		***************************************************/



		/***************************************************

		RECORD ANSWERS

		***************************************************/

		recordAns : function(selAns) {
			var ans;
			var which;
			
			
			if (typeof selAns === "object") {
				ans = selAns.children[0];
				which = ans.getAttribute("id").replace("a", "");
			}
			else if (typeof selAns === "string") {
				var answerId = "a" + selAns;
				ans = document.getElementById(answerId);
				which = parseInt(selAns);
			}
			else if (typeof selAns === "number") {
				var answerId = "a" + selAns;
				ans = document.getElementById(answerId);
				which = selAns;
			}
			
			var arow = document.getElementById('arow' + (which));
			
			var radiogroup = arow.parentNode;
			var siblings = slice(radiogroup.childNodes);

			for (i = 0; i < siblings.length; i++) {
				siblings[i].setAttribute('aria-checked', 'false');
			}
			arow.setAttribute('aria-checked', 'true');

			var x;

			pqse.hideAll();
			pqse.hideHelp();



			if (showFB) {
				focusedElementBeforeModal = document.activeElement;
				//display feedback, if user chose to display it
				var strFeedback = arrQuestions[strQID].arrAnswerFeedback[which - 1];
				if (strFeedback) {
					strFeedback = strFeedback.replace(/&nbsp;/g, ' ');
					strFeedback = strFeedback.replace(/ < /g, ' &lt; ');
					strFeedback = strFeedback.replace(/ > /g, ' &gt; ');
					strFeedback = strFeedback.replace(/ & /g, ' &#38; ');

					// change the class so generic markers don't show
					var sr = document.getElementsByClassName("anscell sr");
					for (i = 0; i < sr.length; i++) {
						sr[i].className = 'anscell';
					}

					// if it's the correct answer
					if (which == arrQuestions[strQID].intCR) {
						// keep track of number of questions answered
						answered++;

						// if it's not a sample exam
						if (numChap == 1) {

							// disable/enable buttons and qlist links
							pqse.btnSettings("answered");
						
						}
						// display correct answer feedback
						document.getElementById('expc').innerHTML = strFeedback;
						var c = document.getElementById('correct');
						if (c) {
							c.style.display = "block";
						}
						// display the CR icon
						if (ans && (os == "iPhone" || os == "iPad")) {
							ans.querySelector('.marker').innerHTML = "&#10004;"
							ans.className = 'anscell cr';
						}
						else if (ans) {
							ans.className = 'anscell cr';
							var cor = ans.querySelector("img.cr");
							cor.className = cor.className.replace(" hidden", "") + " show";
							cor.setAttribute('aria-hidden', 'false');
						}
						c.focus();    
						focusableElements = slice(c.querySelectorAll(focusableElementsString));
						firstTabStop = focusableElements[0];
						lastTabStop = focusableElements[focusableElements.length - 1];
						c.addEventListener('keydown', ariaTabTrap.bind(c), false);
						document.getElementById("c-close").addEventListener('keydown', ariaButtonKey.bind(this));
					} else {
						// display incorrect answer feedback
						document.getElementById('expw').innerHTML = strFeedback;
						x = document.getElementById('incorrect');
						if (x) {
							x.style.display = "block";
						}
						// display the XR icon
						if (ans && (os == "iPhone" || os == "iPad")) {
							ans.querySelector('.marker').innerHTML = "&#10060;";
							ans.className = 'anscell xr';
						}
						else if (ans) {
							ans.className = 'anscell xr';
							var inCor = ans.querySelector("img.xr");
							inCor.className = inCor.className.replace(" hidden", "") + " show";
							inCor.setAttribute('aria-hidden', 'false');
						}
						x.focus();
						focusableElements = slice(x.querySelectorAll(focusableElementsString));
						firstTabStop = focusableElements[0];
						lastTabStop = focusableElements[focusableElements.length - 1];
						x.addEventListener('keydown', ariaTabTrap.bind(x), false);
						document.getElementById("x-close").addEventListener('keydown', ariaButtonKey.bind(this));
					}
				}
			} else { // not displaying feedback

				// only up the answered iteration if the question wasn't answered before
				if (scoreKeep[questionIndex] == -1) {
					answered++;
				}

				// tell the student FB is off if this is the first time
				if (alertFBOff) {
					var alertDiv = document.createElement("div");
					alertDiv.id = "fbalert";
					alertDiv.innerHTML = '<p class="noscript">' + arrStrings.strFBoff + '</p>';
					document.getElementById("examitem").appendChild(alertDiv);
					alertFBOff = false;
				}

				//clear all previously selected ans choices
				x = document.getElementsByClassName("anscell sr");
				for (i = 0; i < x.length; i++) {
					x[i].className = 'anscell';
				}
				var y = document.getElementsByClassName("anscell cr");
				for (i = 0; i < y.length; i++) {
					y[i].className = 'anscell';
				}
				var z = document.getElementsByClassName("anscell xr");
				for (i = 0; i < z.length; i++) {
					z[i].className = 'anscell';
				}

				// add sr class so the marker shows
				if (ans) {
					ans.className = ans.className + ' sr';
				}
			}

			//record student's answer, if we're not in reviewmode
			if (reviewB == false) {
				if (!(showFB)) {
					// write a new cookie every time they change answers
					scoreKeep[questionIndex] = which;
					pqse.setCellHighlight(questionIndex);
					pqse.writeCookie();
				} else {
					// only write a cookie if it's the first 
					// time the student answers
					if (scoreKeep[questionIndex] > 0) {
						pqse.setCellHighlight(questionIndex);
						// do nothing else; we've already recorded the selected answer
					} else {
						scoreKeep[questionIndex] = which;
						pqse.setCellHighlight(questionIndex);
						pqse.writeCookie();
					}
				}
				//update the question stopwatch and assessment time and write a cookie
				bQuestionsAnswered = true;
				pqse.UpdateQStopWatch();
				pqse.UpdateAssessmentTime();
				pqse.writeCookie();
				//now, reset the question stopwatch
				qStopWatch = (new Date()).getTime();
				//and reset the startDate for the assessment time
				startDate = (new Date()).getTime();
			}

		},

		/***************************************************

		END RECORD ANSWERS

		***************************************************/



		/***************************************************

		KEY HANDLER

		***************************************************/

		HandleKey : function(event) {
			
			if (document.getElementById('screen').style.display == 'block' || document.getElementById('noteModal')) {
				// the 'modal' screen is visible
				return;
			}
			var nqNum = questionIndex + 1;
			var nq = document.getElementById("ql" + nqNum);

			var key, keychar, validkeys;
			validkeys = '12345';
			key = event.keyCode ? event.keyCode : event.which ? event.which : event.charCode;

			// restart
			if (key == 82 || key == 114) {
				pqse.initializeExam(true);
			}
			// mark/unmark for review
			if (key == 77 || key == 109) {
				pqse.markReview(questionIndex);
			}
			// open help
			if (key == 72 || key == 104) {
				pqse.openHelp();
			}
			// toggle feedback 
			if (key == 70 || key == 102) {
				pqse.toggleFeedback(true);
			}
			// next question
			if ((key == 78 || key == 110) && ((numChap > 1 || reviewB || !showFB || (nq && nq.getAttribute("aria-disabled") == "false" && nqNum < numQ)))) { //n, go to next question 
				pqse.showQuestion(event);
				return false;
			}
			// previous question
			if ((key == 80 || key == 112) && (numChap > 1 || !showFB || questionIndex > 0 || reviewB)) { //p key, go to previous question 
				pqse.showQuestion(event);
				return false;
			}
			// submit/grade/performance report
			if (key == 83 || key == 115) {
				pqse.checkGrade();
			}
			// answer choices
			keychar = String.fromCharCode(key);
			if (validkeys.indexOf(keychar) != -1) {
				pqse.recordAns(keychar);
			}
		},

		/***************************************************

		END KEY HANDLER

		***************************************************/



		/***************************************************

		ENABLE/DISABLE BUTTONS

		***************************************************/

		btnSettings : function(when) {

			

			var nbClass = nextBtn.className;
			var pbClass = prevBtn.className;
			var nextQIndex = questionIndex + 1;
			var nextQ = document.getElementById("ql" + nextQIndex);

			if (!reviewB) {

				document.getElementById("btnRestart").style.display = "none";
				document.getElementById("btnMark").style.display = "";

				document.getElementById("btnFeedback").style.display = "";
				document.querySelector("#btnGrade span.label").innerHTML = arrStrings.strGrade;
				document.getElementById("btnGrade").style.display = "";

			}

			// if called when page first loads
			if (when == "load") {

				if (reviewB) {

					//document.getElementById("btnGrade").style.display = "none";
					document.getElementById("btnGrade").setAttribute('aria-disabled', 'true');

				}

				// if feedback is on and we're not in review
				if (showFB && !reviewB && numChap == 1) {

					document.querySelector("#btnGrade span.label").innerHTML = arrStrings.strGrade;
					document.getElementById("btnGrade").removeAttribute('aria-disabled');

					// prev button is always off on first
					// load when FB is on
					pqse.navButtons(prevBtn, 0);


					var firstUnans;
					for (i = 0; i < qListItems.length; i++) {
						
						
						// find the first unanswered question
						if (scoreKeep[i] == -1 && firstUnans == undefined) {
							//pqse.navButtons(qListItems[i], 1);
							
							firstUnans = i;
						}
						// disable all questions after the first unanswered
						else if (i > firstUnans) {
							
							
							pqse.navButtons(qListItems[i], 0);
						}
		
					}
		
					// if no questions have been answered,
					// the next button should be disabled
					if (answered == 0) {
						pqse.navButtons(nextBtn, 0);
					}

					// if no questions have been answered,
					// the next button should be disabled
					/*if (answered == 0) {
						pqse.navButtons(nextBtn, 0);
					}
					else {
						pqse.navButtons(nextBtn, 1);
					}*/

				}
				// if feedback is off or we're in review mode,
				// enable all nav buttons
				/*else if (!showFB || reviewB) {
					pqse.navButtons(nextBtn, 1);
					pqse.navButtons(prevBtn, 1);
					for (i = 0; i < qListItems.length; i++) {
						pqse.navButtons(qListItems[i], 1);
					}
				}*/

			}

			// if called when new question is displayed
			else if (when == "newQ" && showFB && !reviewB && numChap == 1) {
				
				

				// previous button is disabled if it's the first question
				if (questionIndex == 0) {
					pqse.navButtons(prevBtn, 0);
				}
				// enable previous button if it's any other question
				else if (questionIndex > 0) {
					pqse.navButtons(prevBtn, 1);

				}
				// if the question hasn't been answered or 
				// it's the last question, disable the next button
				if (scoreKeep[questionIndex] == -1 || questionIndex + 1 == numQ) {
					pqse.navButtons(nextBtn, 0);
				}
				// if the current question is less than the 
				// number answered, enable the next button
				else if (questionIndex < answered) {
					pqse.navButtons(nextBtn, 1);
				}
				if (scoreKeep[questionIndex] > 0 && questionIndex < numQ - 1) {
					pqse.navButtons(nextQ, 1);
				}
		
			}

			// if called when new question is displayed
			// and in review mode
			else if (when == "newQ" && reviewB) {

				// change the grade button to say report
				// and show it
				document.querySelector("#btnGrade span.label").innerHTML = arrStrings.strReport;
				//document.getElementById("btnGrade").style.display = "";
				document.getElementById("btnGrade").removeAttribute('aria-disabled');

			}

			// if called when question is answered correctly
			else if (when == "answered" && showFB && numChap == 1) {
				
				

				// enable the next button (unless it's the last q)
				// and the next question in the qlist, 
				if (nextQ && answered != numQ) {
					pqse.navButtons(nextQ, 1);
					pqse.navButtons(nextBtn, 1);
				}
				
			}

			// if called when feedback is toggled
			else if (when == "fbTogg") {

				if (showFB && !reviewB && numChap == 1) {

					
					
					

					var showQ;

					for (i = 0; i < qListItems.length; i++) {
						
						// find the first unaswered question
						if (scoreKeep[i] == -1 && showQ == undefined) {
							showQ = i;
							
							// show the first unanswered question,
							// even if the current question has been 
							// answered
							/*if (questionIndex > i) {
								
								pqse.showQuestion(i);
							}

							// otherwise reload the question so
							// the answer markers change
							else {
								
								pqse.showQuestion("reload");
							}*/
						}
						// disable the rest of the questions in the
						// qlist after the first unanswered
						else if (i > showQ) {
							pqse.navButtons(qListItems[i], 0);
						}

					}
					// disable prev button if it's the first question
					if (showQ == 0) {
						pqse.navButtons(prevBtn, 0); 
					}
					// disable the next button if the current
					// question index is the same as the
					// number of questions answered
					if (showQ == answered) {
						pqse.navButtons(nextBtn, 0);
					}
					pqse.showQuestion(showQ);
				}
				else if (!showFB) {

					/*var qListIs = document.querySelectorAll('ul.ul_qlist li');
					for (i = 0; i < qListIs.length; i++) {
						qListIs[i].addEventListener('click', function() {
							pqse.showQuestion(event);
						});
					}*/

					// enable everything
					for (i = 0; i < qListItems.length; i++) {
						pqse.navButtons(qListItems[i], 1);
					}
					pqse.navButtons(prevBtn, 1);
					pqse.navButtons(nextBtn, 1);
					// reload the question so the answer makers change
					pqse.showQuestion("reload");

				}
				else if (numChap > 1) {
					// reload the question so the answer makers change
					pqse.showQuestion(questionIndex);
					
				}
			
			}

			// if called when grading
			else if (when == "grade") {

				// enable everything after grademe
				if (showFB && numChap == 1) {

					for (i = 0; i < qListItems.length; i++) {
						pqse.navButtons(qListItems[i], 1);
					}
					pqse.navButtons(prevBtn, 1);
					pqse.navButtons(nextBtn, 1);

				}
			}

			// if the navbar isn't already visable, show it
			if (document.querySelector(".nav-menu-container").className.indexOf("opac") == -1) {
				document.querySelector(".nav-menu-container").className += " opac";
			}

		},

		navButtons : function(button, toggle) {

			

			// change class depending on toggle var
				/* var btnClass = button.className;
			if (toggle) {
				if (btnClass.indexOf("disable") > -1) { button.className = btnClass.replace(" disable", ""); }
				button.addEventListener('click', pqse.showQuestion, false);
			}
			else if (!toggle) {
				if (btnClass.indexOf("disable") == -1) { button.className += " disable"; }

				button.removeEventListener('click', pqse.showQuestion, false);
			} */

			if (toggle && button.getAttribute("aria-disabled") == "true") {
				
				
				button.setAttribute("aria-disabled", "false");
				button.addEventListener('click', pqse.showQuestion, false);
				button.addEventListener('keydown', ariaButtonKey);
			}
			else if (!toggle && button.getAttribute("aria-disabled") == "false") {
				
				
				
				button.setAttribute("aria-disabled", "true");
				button.removeEventListener('click', pqse.showQuestion, false);
				button.removeEventListener('keydown', ariaButtonKey);
			}

		},

		/***************************************************

		END ENABLE/DISABLE BUTTONS

		***************************************************/


		/***************************************************

		GRADING FUNCTIONS

		***************************************************/

		checkGrade : function() {

			unansB = false;
			// Check for unanswered questions
			for (i = 0; i < numQ; i++) {
				if (scoreKeep[i] == -1) {
					unansB = true;

					// highlight unanswered questions
					var elm = document.getElementById('ql' + i);
					if (elm) { 
						elm.className = elm.className + " qlist_item_oops"; 
						elm.querySelector('span.marker').innerHTML = "<span class='icon'> !</span>";
						elm.classList.remove('qlist_item_r');
						var elmLbl = elm.getAttribute('aria-label');
						
						
						
						if (!/, unanswered/.test(elmLbl)) {
							var newElmLbl = elmLbl + ", " + arrStrings.ariaUnanswered;
							elm.setAttribute("aria-label", newElmLbl);
						}
					}
				}
			}

			// if any questions are unaswered
			if (unansB && reviewB == false) {
				focusedElementBeforeModal = document.activeElement;
				pqse.hideWelcome();
				pqse.hideAll();
				pqse.hideHelp();

				// show the question list
				if (showQL == false) {
					//show the question list if it's hidden
					pqse.toggleQuestionList();
				}
				var scrn = document.getElementById('screen');
				var splash = document.getElementById('splash');
				scrn.style.top = "0px";
				scrn.style.left = "0px";
				scrn.style.display = "block";
				splash.style.display = "block";
				
				focusableElements = slice(splash.querySelectorAll(focusableElementsString));
				firstTabStop = focusableElements[0];
				lastTabStop = focusableElements[focusableElements.length - 1];
				splash.addEventListener('keydown', ariaTabTrap.bind(splash), false);
				document.getElementById("tcCHdiv").setAttribute("aria-hidden", true);
				lastTabStop.focus();
				//splash calls confirmGetScore
			} else {

				// go straight to grading if all 
				// questions are answered
				pqse.gradeMe();
			}

		},

		confirmGetScore : function(ret) {

			// asks to proceed
			document.getElementById('screen').style.display = 'none';
			document.getElementById('splash').style.display = 'none';
			document.getElementById('splash').removeEventListener('keydown', ariaTabTrap.bind(document.getElementById('splash')), false);
			document.getElementById("tcCHdiv").setAttribute("aria-hidden", false);

			// grade the quiz, if ok
			if (ret) { pqse.gradeMe(); }

		},

		buildSVG : function(pctScore) {

			
			var donutSize;
			if (window.innerWidth > 768) {
				donutSize = 400;
			} else {
				donutSize = 275;
			}

			// create svg elements
			var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
			var donut = document.createElementNS("http://www.w3.org/2000/svg", "circle");
			var hole = document.createElementNS("http://www.w3.org/2000/svg", "circle");
			var viewbox = "0 0 " + donutSize + " " + donutSize;

			// set svg element attributes
			svg.setAttribute("viewBox", viewbox);
			svg.setAttribute("class", "chart");
			var donutRad = donutSize / 2;
			donut.setAttribute("class", "donut");
			donut.setAttribute("r", donutRad);
			donut.setAttribute("cx", donutRad);
			donut.setAttribute("cy", donutRad);
			donut.setAttribute("fill", "#E6E6E5");
			if (pctScore > 70) {
				donut.setAttribute("stroke", "#3C8C3C");
			} else {
				donut.setAttribute("stroke", "#D32D27");
			}
			var holeRad = donutSize / 2.85;
			hole.setAttribute("class", "hole");
			hole.setAttribute("r", holeRad);
			hole.setAttribute("cx", donutRad);
			hole.setAttribute("cy", donutRad);
			hole.setAttribute("fill", "#FFFFFF");

			// append circles
				svg.appendChild(donut);
				svg.appendChild(hole);

				// append svg
				document.querySelector(".scalable").appendChild(svg);

				setTimeout(function() {
				pqse.fillDonut(pctScore, donutSize);
			}, 100);

		}, 

		fillDonut : function(pctScore, donutSize) {

			
			var total = 2 * Math.PI * (donutSize / 2);
			var pie = document.querySelector('.donut');
			var result = ((pctScore * total) / 100);
			pie.style.strokeDasharray = result + ' ' + total;

		},

		gradeMe : function() {

			//var pctScore;
			var scaled;
			var success = false;
			var txt;
			var selected;
			var lbl;
			var cr;
			var j;
			correctAnswers = 0;

			var shQuizName = quizname.replace(/([^–]+) – .*/, '$1');
			txt = '<h2 class="score">' + arrStrings.strScoreReport0 + '<span class="exam-title">' + shQuizName + '</span></h2>';
			txt += '<p class="score">' + arrStrings.strScoreReportWorking + '</p>';
			document.getElementById('examitem').innerHTML = txt;
		
			if (reviewB == 0) {
				//update question and assessment durations
				pqse.UpdateQStopWatch();
				pqse.UpdateAssessmentTime();
				//set this flag, so that we no longer update duration by question
				bNoStopWatch = true;
				//calculate assessment duration in ISO8601 format
				var strSessionTime = pqse.ComputeTime(startDate);
				
			}

			questionIndex = -1;

			pqse.hideAll();
			pqse.hideHelp();
			if (!reviewB) { pqse.hideWelcome(); }

			pqse.btnSettings("grade");

			if (showQL == false) {
				//show the question list if it's hidden
				pqse.toggleQuestionList();
			}

			//clear selected highlight in question list (chevron caret graphic) from prevQ, if any
			/*var elm = document.getElementById('caret' + prevQ);
			if (elm) { elm.className = "caret"; }*/

			var los;
			// Grade answers and 
			// highlight question list cells with green or red
			for (i = 0; i < numQ; i++) {

				// update number of questions for each LO
				los = arrQuestions[arrDeliveredExam[i]].arrLOs;
				for (j = 0; j < los.length; j++) {
					//loObject[los[j]].questions++;
					if (loArray.indexOf(los[j]) == -1) {
						
						loArray.push(los[j]);
						// create object to keep track of score for LO
						var lo = {};
						//lo.code = tempLOArray[i];
						lo.questions = 0;
						lo.correct = 0;
						if (arrlotext[los[j]]) {
							lo.fullTxt = arrlotext[los[j]];	
						}
						// add to LO object
						loObject[los[j]] = lo;
					} else {
						// already added to loObject, but need to reset .questions and .correct
						loObject[los[j]].questions = 0;
						loObject[los[j]].correct = 0;
						
					}
				}
			}
	
			// set LO tracking variables
			var missedByQObj = {};
			var missedByQArr = [];
			var missedByChArr = [];
			for (j = 1; j <= numChap; j++) {
				var missedCh = {};
				missedCh.LOs = [];
				missedByChObj[j] = missedCh;
			}

			// Grade answers and 
			// highlight question list cells with green or red
			for (i = 0; i < numQ; i++) {

				// update number of questions for each LO
				los = arrQuestions[arrDeliveredExam[i]].arrLOs;
				for (j = 0; j < los.length; j++) {
					loObject[los[j]].questions++;
				}

				selected = scoreKeep[i];
				cr = arrQuestions[arrDeliveredExam[i]].intCR;
				var elm = document.getElementById('ql' + i);
				var elmLbl = elm.getAttribute('aria-label');
				elmLbl = elmLbl.replace(/, .*?$/, "");
				var newElmLbl;
				/*if (selected == -1) {
					// question wasn't answered, mark it wrong
					if (elm) { 
						elm.className += " qlist_item_x";
						newElmLbl = elmLbl + ", " + arrStrings.ariaIncorrect;
						elm.setAttribute('aria-label', newElmLbl);
					}
					//missedQs.push(arrQuestions[arrDeliveredExam[i]]);
				}*/
				if (selected == cr) {
					correctAnswers++;
					for (j = 0; j < los.length; j++) {
						loObject[los[j]].correct++;
					}
					if (numChap > 1) {
						scoreChapter[(arrQuestions[arrDeliveredExam[i]].textbook) + '.' + (arrQuestions[arrDeliveredExam[i]].chapter - 1)]++;
						scoreChapterCounts[(arrQuestions[arrDeliveredExam[i]].textbook) + '.' + (arrQuestions[arrDeliveredExam[i]].chapter - 1)]++;
					}
					if (elm) { 
						elm.className = "qlist item qlist_item_c";
						newElmLbl = elmLbl + ", " + arrStrings.ariaCorrect;
						elm.setAttribute('aria-label', newElmLbl);
						elm.querySelector('span.marker').innerHTML = "<span class='icon'>&#10004;</span>";
					}
				} else {
					if (elm) { 
						elm.className = "qlist item qlist_item_x";
						newElmLbl = elmLbl + ", " + arrStrings.ariaIncorrect;
						elm.setAttribute('aria-label', newElmLbl);
						elm.querySelector('span.marker').innerHTML = "<span class='icon'>&#215;</span>";
					}

					// track LOs for missed questions
					var missedQ = {};
					var missedLO = arrQuestions[arrDeliveredExam[i]].arrLOs;
					missedQ.LOs = missedLO;
					var qNumber = parseInt(i) + 1;
					missedByQArr.push(qNumber);
					missedByQObj[qNumber] = missedQ;

					if (numChap > 1) {
						scoreChapterCounts[(arrQuestions[arrDeliveredExam[i]].textbook) + '.' + (arrQuestions[arrDeliveredExam[i]].chapter - 1)]++;

						// add LOs to Chapter LO tracking Object
						var chNumber = arrQuestions[arrDeliveredExam[i]].chapter;
						for (j = 0; j < missedLO.length; j++) {
							missedByChObj[chNumber].LOs.push(missedLO[j]);
						}
					}
				}
			}

			//calculate and display the score
			pctScore = Math.round(100 * (correctAnswers / numQ));
			scaled = pctScore / 100; 
			if (pctScore >= intPassingScore) { 
				success = true;
			}

			//send to LRS
			/*if (lrs && reviewB == 0) {
				var ihome = document.getElementById('homeicon');
				if (ihome) {
					ihome.style.opacity = "0";
				}

				//send data needed to post score statement to sState, which will then call lrsBatchPosting, which will then call createScoreReport
				sState(success, correctAnswers, scaled, numQ, strSessionTime, pctScore);
			} else {*/
				pqse.createScoreReport();
			//}
		},

		createScoreReport : function() {
		var j;

		var loPops = '';
		var shQuizName = quizname.replace(/([^–]+) – .*/, '$1');
		txt = '<h2 class="score">' + arrStrings.strScoreReport0 + '<span class="exam-title">' + shQuizName + '</span></h2>';

		txt += '<div class="overall"><div class="donut-container"><h3 class="overall-score">' + arrStrings.strScoreReport10 + '</h3><p class="score-container"><span class="num-score">' + correctAnswers + ' ' + arrStrings.strOf + ' ' + numQ + '</span><span class="pct-score">' + pctScore + '%</span></p><div class="scalable"></div></div>';


		txt += '<div class="expl-container"><h3 class="lo-scores">' + arrStrings.strScoreReport11 + '</h3>';
		if (correctAnswers >= numQ) {
			txt += '<p class="score">' + arrStrings.strScoreReport2 + '</p>';
		}

		txt += '<p class="score">' + arrStrings.strScoreReport3 + '</p>';

		txt += '<div class="btn-container"><div class="restart"  id="pr-btnRestart" title="Restart" tabindex="0" role="button">' + arrStrings.strScoreReport12 + ' <img src="' + baseURL + '/imgs/restart.png" alt="" /></div></div>';

		if (numChap > 1) {
			// do chapter-by-chapter score
			var chpPct;
			for (var z = 0; z < numTexts; z++) {

				txt += '<p class="score">' + arrStrings.strScoreReport9 + '</p>';
				txt += '<div class="tbl-container">';

				txt += '<table class="chapterscore"><thead>';
				txt += '<tr><th class="tdscore">' + arrStrings.strScoreReport4 + '</th><th class="tdscore">' + arrStrings.strScoreReport5 + '</th><th class="tdscore">' + arrStrings.strScoreReport6 + '</th><th class="tdscore">' + arrStrings.strScoreReport13;
				txt += '</thead><tbody>';

				numChap = arrNumChap[z];

				for (i = 0; i < numChap; i++) {
					var t = z + '.' + i;
					if (scoreChapterCounts[t] > 0) {
						chpPct = Math.round(100 * (scoreChapter[t] / scoreChapterCounts[t]));
						lbl = i + 1;
						txt += '<tr><td class="tdscore">' + lbl + '</td><td class="tdscore">' + scoreChapter[t] + ' ' + arrStrings.strOf + ' ' + scoreChapterCounts[t] + '</td>';
						if (chpPct >= 70) {
							txt += '<td class="tdscore_p">' + chpPct + '%</td>';
						} else {
							txt += '<td class="tdscore_f">' + chpPct + '%</td>';
						}
					} else {
						lbl = i + 1;
						txt += '<tr><td class="tdscore">' + lbl + '</td><td>0 ' + arrStrings.strOf + ' 0</td><td class="tdscore">--</td>';
						txt += '<td class="colorbar">&nbsp;</td></tr>';
					}
					var LOs = missedByChObj[i + 1].LOs;
					LOs.sort();
					var chMissedLOs = [];
					for (j = 0; j < LOs.length; j++) {
						if (chMissedLOs.indexOf(LOs[j]) == -1) {
							chMissedLOs.push(LOs[j]);
						}
					}

					var chLOs = chMissedLOs.join(', ');
					txt += '<td class="los">'; 

					for (j = 0; j < chMissedLOs.length; j++) {
						txt += '<span class="lo" tabindex="0" aria-label="' + arrStrings.ariaLOs + ' ' + chMissedLOs + '">' + chMissedLOs[j] + '</span> ';
					}
					txt += '</td></tr>';
				}

				txt += '</tbody></table></div></div></div>';
			}

		} else {

			txt += '<p class="score">' + arrStrings.strScoreReport8 + '</p>';
			txt += '<div class="tbl-container">';


			// display question breakdown
			var qTable = '<table class="lo-head"><thead><tr><th class="lo">' + arrStrings.strScoreReport15 + '</th><th class="score">' + arrStrings.strScoreReport13 + '</th></tr></thead><tbody>';


			var qListGraded = document.querySelectorAll('ul.ul_qlist > li');
			for (i = 0; i < qListGraded.length; i++) {
				if (os == "iPhone") {
					qListGraded[i].querySelector('.marker').classList.add('ios');
				}
				if (/item_c/.test(qListGraded[i].className)) {
					qTable += '<tr><td class="qlist_item_c">' + qListGraded[i].innerHTML + '<img src="'  + baseURL + '/imgs/checkmark-xs.png" class="c-marker" alt="' + arrStrings.ariaCorrect + '" /></td><td>';
				} else if (/item_x/.test(qListGraded[i].className)) {
					qTable += '<tr><td class="qlist_item_x">' + qListGraded[i].innerHTML + '<img src="' + baseURL + '/imgs/times-circle-xs.png" class="x-marker" alt="' + arrStrings.ariaIncorrect + '" /></td><td>';
				}
				for (j = 0; j < arrQuestions[arrDeliveredExam[i]].arrLOs.length; j++) {
					var tt = i + '-' + j;
					qTable += '<span class="lo" tabindex="0" aria-label="' + arrStrings.ariaLOs + ' ' + arrQuestions[arrDeliveredExam[i]].arrLOs[j] + '" aria-describedby="lo-tt' + tt + '">' + arrQuestions[arrDeliveredExam[i]].arrLOs[j] + '</span> ';
					
					
					if (loObject[arrQuestions[arrDeliveredExam[i]].arrLOs[j]].fullTxt) {
						
						loPops += '<div id="lo-tt' + tt + '" aria-hidden="true" class="lo-tooltip" role="alert"><p class="lo-title">' + arrStrings.strScoreReport14 + " " + arrQuestions[arrDeliveredExam[i]].arrLOs[j] + ':</p><p>' + loObject[arrQuestions[arrDeliveredExam[i]].arrLOs[j]].fullTxt + '</p></div>';
					}
				}
				qTable += '</td></tr>';
			}
			qTable += '</tbody></table>' + loPops + '</div></div></div>';
			txt += qTable;
		}

		
		document.getElementById('examitem').innerHTML = txt;

		// add LO pop event listeners
		//var LOListItems = document.querySelectorAll("td span.lo");
		var loSpans = slice(document.querySelectorAll("td span.lo"));
		for (i = 0; i < loSpans.length; i++) {
			//var loText = loSpans[i].innerText;
			var currentLO = loSpans[i].innerText;
			var currentLOId = loSpans[i].getAttribute('aria-describedby');
			//loSpans[i].addEventListener('focus', pqse.hoverLO.bind(loSpans[i], currentLO, currentLOId));
			//loSpans[i].addEventListener('keydown', pqse.closeLO.bind(loSpans[i], currentLOId));
			//loSpans[i].addEventListener("mouseover", pqse.hoverLO.bind(loSpans[i], currentLO, currentLOId));
			//loSpans[i].addEventListener("mouseout", pqse.closeLO.bind(loSpans[i], currentLOId));
			loSpans[i].addEventListener('click', pqse.hoverLO.bind(loSpans[i], currentLO, currentLOId));
			
			loSpans[i].addEventListener('keydown', pqse.hoverLO.bind(loSpans[i], currentLO, currentLOId));
			//pqse.hoverLO.bind(loSpans[i], currentLO, currentLOId));
			/*loSpans[i].addEventListener("touchstart", function() {
				pqse.hoverLO(event, loText);
			});*/
		}

		document.getElementById('pr-btnRestart').addEventListener("click", function() {
			pqse.initializeExam(true);
		});
		document.getElementById('pr-btnRestart').addEventListener('keydown', ariaButtonKey);

		pqse.buildSVG(pctScore);

		pqse.sizeContent();

		//hide standard buttons and show restart button
		//document.getElementById('btnGrade').style.display = "none";
		document.getElementById("btnGrade").setAttribute('aria-disabled', 'true');
		document.getElementById("btnGrade").querySelector(".label").innerHTML = "REPORT";
		document.getElementById("btnGrade").setAttribute("title", "Performance Report");
		document.getElementById("btnGrade").setAttribute("aria-label", arrStrings.ariaPR);
		document.getElementById('btnMark').style.display = "none";
		document.getElementById("btnFeedback").style.display = "none";
		document.getElementById('btnRestart').style.display = "";
		reviewB = 1;
		pqse.createCookie(title + '_revmode', reviewB, 180);

		},

		/***************************************************

		END GRADING FUNCTIONS

		***************************************************/



		/***************************************************

		LO POPUP/CLOSE FUNCTIONS

		***************************************************/

		hoverLO : function(lo, loId, e) {
			
			
			
			if (e.type == "keydown" && (e.keyCode != 13 && e.keyCode != 32)) {
				return;
			} 

			//only do this if we have the fullTxt of the lo
			if (!loObject[lo].fullTxt) {
				return false;
			}
			
			var loPop = document.getElementById(loId);
			var tblContainer = document.querySelector('div.tbl-container');
			var tblBox = tblContainer.getBoundingClientRect();
			var targetBox = e.srcElement.getBoundingClientRect(); 
			var x = targetBox.left - tblBox.left - 175;
			var y = targetBox.top - tblBox.top + 55;

			if (document.querySelector('.lo-tooltip[aria-hidden="false"]')) {
				
				var openID = document.querySelector('.lo-tooltip[aria-hidden="false"]');
				pqse.closeLO.call(openID, null);
			}
			
			//loPop.setAttribute('style', 'left:' + x + 'px;top:' + y + 'px;');
			loPop.setAttribute('aria-hidden', 'false');
			loPop.addEventListener('click', pqse.closeLO.bind(loPop)); 
			this.addEventListener('keydown', pqse.closeLO.bind(loPop));

		},

		buildLOPop : function(lo) {
			var loPop = document.createElement("div");
			loPop.setAttribute("id", "lo-pop");
			var loPopPara1 = document.createElement("p");
			loPopPara1.setAttribute("class", "lo-title");
			loPopPara1.innerHTML = arrStrings.strScoreReport14 + " " + lo + ":";
			var loPopPara2 = document.createElement("p");
			loPopPara2.innerHTML = loObject[lo].fullTxt;
			loPop.appendChild(loPopPara1);
			loPop.appendChild(loPopPara2);
			loPop.addEventListener("click", pqse.closeLO.bind(loSpans[i], currentLOId));
			document.addEventListener("keydown", pqse.closeLO.bind(loSpans[i], currentLOId));
			return loPop;

		},

		closeLO : function(e) {
			
			//var loPop = document.getElementById(loId);

			if (e && e.type == "keydown" && e.keyCode != 27) {
				return;
			} 

			this.setAttribute('aria-hidden', 'true');
			
			var ttIDSel = '[aria-describedby="' + this.getAttribute('id') + '"]';
			document.querySelector(ttIDSel).removeEventListener('keydown', pqse.closeLO.bind(this));
			this.removeEventListener('click', pqse.closeLO.bind(this));
			
		},

		/***************************************************

		END LO POPUP/CLOSE FUNCTIONS

		***************************************************/



		/***************************************************

		SHUFFLE FUNCTIONS

		***************************************************/

		
		arraycontains : function(a, obj) {
			i = a.length;
			while (i--) {
				if (a[i] === obj) {
					return true;
				}
			}
			return false;
		},

		GetRandomInt : function(intLowBound, intHighBound) {
			var intRand;
			intRand = intLowBound + Math.floor(Math.random() * (intHighBound - intLowBound + 1));
			return intRand;
		},

		/***************************************************

		END SHUFFLE FUNCTIONS

		***************************************************/



		/***************************************************

		EMAIL FUNCTIONS

		***************************************************/
		sendEmail : function() {

			var strQID = '';
			if (randomize == 1) {
				//randomizing, so add strQID to subject line
				strQID = " (" + arrDeliveredExam[questionIndex] + ")";
			}
			var num = questionIndex + 1;
			var subject = "Course Portal Feedback: " + quizname + ", question " + num + strQID;
			var uri = "mailto:learning@loma.org?subject=";
			uri += encodeURIComponent(subject);
			location.href = uri;

		},

		sendEmailPQ : function() {

			var courseName = '';
			var elm = document.getElementById("bannertextshort");
			if (elm) {
				courseName = ": " + elm.innerHTML;
			}
			var subject = "Course Portal Feedback" + courseName;
			var uri = "mailto:learning@loma.org?subject=";
			uri += encodeURIComponent(subject);
			location.href = uri;

		},

		/***************************************************

		END EMAIL FUNCTIONS

		***************************************************/

		/***************************************************

		DURATION FUNCTIONS

		***************************************************/

		UpdateQStopWatch : function() {
			if (qStopWatch != 0 && bNoStopWatch == false) {
				//add question elapsed time to arrQuestionTime[questionIndex] Array
				var currentTime = (new Date()).getTime();
				arrQuestionTime[questionIndex] += currentTime - qStopWatch;
				
			}
		},

		UpdateAssessmentTime : function() {
			if (bNoStopWatch == false) {	
				var currentTime = (new Date()).getTime();
				assessmentTime += (currentTime - startDate);
			}
		},

		ComputeTime : function(startDate) {
			var formattedTime;
			if (startDate != 0) {
				//var currentDate = (new Date()).getTime();
				//var elapsedSeconds = ((currentDate - startDate) / 1000);
				var elapsedSeconds = assessmentTime / 1000;
				formattedTime = pqse.ConvertTotalSeconds(elapsedSeconds);
			}
			else {
				//formattedTime = "00:00:00.0";
				formattedTime = "PT0H0M0S";
			}
			return formattedTime;
		},

		ConvertTotalSeconds : function(ts) {
			var sec = (ts % 60);

			ts -= sec;
			var tmp = (ts % 3600);  //# of seconds in the total # of minutes
			ts -= tmp;              //# of seconds in the total # of hours

			sec = Math.round(sec * 100) / 100;

			//var strSec = new String(sec);
			var strSec = sec.toString();
			var hour;
			var min;
			if ((ts % 3600) != 0)
				hour = 0;
			else hour = (ts / 3600);
			if ((tmp % 60) != 0)
				min = 0;
			else min = (tmp / 60);

			//var rtnVal = hour + ":" + min + ":" + strSec;
			//ISO 8601 format
			var rtnVal = "PT" + hour + "H" + min + "M" + strSec + "S";

			return rtnVal;
		}

		/***************************************************

		END DURATION FUNCTIONS

		***************************************************/
	};  


	pqse.initializeExam(false);
}



/******************************************************
*******************************************************
 APPLE.JS
*******************************************************
******************************************************/
function checkIbooks() {
   
    // add classes
    document.querySelector('section[role="doc-part"]').classList.add('ibooks');
    if (os == "iPad") {
        document.querySelector('section[role="doc-part"]').classList.add('ipad');
    }
    else if (os == "iPhone") {
        document.querySelector('section[role="doc-part"]').classList.add('iphone');
    }
    else {
        document.querySelector('section[role="doc-part"]').classList.add('desktop');
    }

    if (document.getElementById('modalAlertBox')) {
        document.getElementById('modalAlertBox').classList.add('ibooks');
    }
    ibooksMedia();
    document.body.addEventListener('resize', ibooksMedia, true);

} // end checkIbooks

function ibooksMedia(e) {
    debug(document.body.clientWidth);
    if (document.body.clientWidth < 768) {
        document.querySelector('section[role="doc-part"]').classList.add('ibm');
    }
}


function appleModalFix(element, modalBox) {
	debug("apple modal fix")
    var modalBoxLeft;
    // mobile versions don't have two-page
    // view, so just need to adjust vertically
    if (os == "iPhone" || os == "iPad") {
    
        //modalOverlay.classList.add('iphone');
        var elRect = element.getBoundingClientRect();
        var modalOverlay = document.getElementById("modalOverlay");
        var section = findAncestor(element, 'node', "section");
        var secRect = section.getBoundingClientRect();


        modalBox.setAttribute('aria-hidden', 'false');
        modalOverlay.setAttribute('aria-hidden', 'false');
       
        // if the modal content is too big for current 
        // section, then more calculation is needed
        if (elRect.top - 40 + modalBox.offsetHeight > secRect.bottom) {
            modalBox.style.top = (secRect.bottom - modalBox.offsetHeight - 10) + 'px';
        }
        // otherwise just subtract 40 from buttom top
        // to place the modal on screen
        else {
            modalBox.style.top = (elRect.top - 40) + 'px';
        }

    // desktops have two-page view, so we need
    // to adjust horizontally
    } else {
        var parent;
        var buttonType = element.classList.value;

        // get parent based on what was clicked
        switch (buttonType) {
            case 'id-button':
            case 'ts-button':
                parent = findAncestor(element, 'class', 'figure');
                break;

            case 'btn':
                parent = findAncestor(element, 'class', 'question-container');
                break;
            case 'endnote':
				var spanParent = findAncestor(element, 'class', 'ens');
				parent = spanParent.parentNode;
                break;
        }

        // if the nodeType isn't an element, 
        // or the parent has a float on it, 
        // we need to find an alternative parent
        while (parent.nodeType != 1 || (window.getComputedStyle(parent).float == 'right' || window.getComputedStyle(parent).float == 'left')) {
            // get siblings of "parent"
            var siblings = parent.parentNode.childNodes;
            // get the index of "parent" in
            // sibling array
            var index = Array.prototype.indexOf.call(siblings, parent);
            
            // assign previous sibling of "parent"
            parent = siblings[index - 1];

        }
        // get bounding box of element and 
        // assign left/right placement and width
        var elementBB = element.getBoundingClientRect();
        var elementLeft = elementBB.left;
        var elementWidth = elementBB.width;
        var elementRight = elementBB.right;

        // get bounding box of parent and 
        // assign left/right placement and width
        var parentBB = parent.getBoundingClientRect();
        var parentLeft = parentBB.left;
        var parentWidth = parentBB.width;
        var parentRight = parentBB.right;

        // get bounding box of modal and
        // assign left placement and width
        var modalBoxBB = modalBox.getBoundingClientRect();
        var modalBoxWidth = modalBoxBB.width;
        // left placement of the modal (modal has a shift to center)
        // so half the modal width plus half the different between the parent 
        // width and modal width plus the left placement of the parent
        if (elementRight < parentRight) {
            modalBoxLeft = ((parentWidth - modalBoxWidth) / 2) + (modalBoxWidth / 2) + parentLeft;
        }
        else if (elementRight > parentRight) {
            modalBoxLeft = ((parentWidth - modalBoxWidth) / 2) + (modalBoxWidth / 2) + parentLeft + parentWidth + 50;
        }
        
        modalBox.style.left = modalBoxLeft + 'px';
    }
}


	
/******************************************************
*******************************************************
 EBOOK.JS
*******************************************************
******************************************************/
var js = true; // ebook player
var dev = false; // ebook player
var initialized = false; // ebook player

var kbMobile = false; // ebook player

var courseTitle = "LOMA 357";

var modNum = "Module 1";

var currentFocus;
var container;

if (js == true) {

	container = document.getElementById("epubContent");

	if (readingSystem !== "iBooks" && dev == false) {
		// hide static pq version before the page displays
		if (container && container.querySelector('section.pq') &&
			container.className.indexOf('interactive-pq') == -1) {
			container.querySelector('.static-pq-container').setAttribute('aria-hidden', 'true');
			container.querySelector('section.pq').className = container.querySelector('section.pq').className + " interactive-pq";
			container.querySelector('section.pq').setAttribute('aria-hidden', 'false');
		}



		var wrapperReady = setInterval(function () {
			// check if Kotobee Reader container is ready
			if (window.getComputedStyle(document.getElementById("epubContainer")).getPropertyValue("opacity") == 1) {
				// set overflow
				clearInterval(wrapperReady);
				readingSystem = "kotobee";
				document.querySelector('section[role="doc-part"]').classList.add('kotobee');
				document.getElementById("epubContainer").setAttribute('style', 'overflow-y: auto!important');

				// track whether mobile or not
				if (document.body.classList.contains('mobile')) {
					debug("mobile")
					kbMobile = true;
					document.querySelector('section[role="doc-part"]').classList.add('kbMobile');
				}
				
				// initiate epub
				ready();

				// remove unneeded tabs in Kotobee Reader
				var mediaTab = document.querySelector('[ng-if="::config.mediaTab"]');
				if (mediaTab) {
					var viewTab;

					// media tab
					var mediaTabParent = findAncestor(mediaTab, 'class', 'tabs');
					mediaTabParent.removeChild(mediaTab);

					// fullscreen tab
					var fsTab = document.querySelector('[ng-click="fullscreen()"]');

					// view mode
					if (kbMobile) {
						viewTab = document.querySelector('[ng-if="config.viewModeOptional"]');
					} else {
						viewTab = document.querySelector('[ng-if="::config.viewModeOptional"]');
					}

					// page scrolling
					var scrollTab = document.querySelector('[ng-change="singlePageScrollChanged()"]');
					// settings menu
					var optionsParent = findAncestor(fsTab, 'class', 'ng-binding');
					optionsParent.removeChild(fsTab);
					optionsParent.removeChild(viewTab);
					optionsParent.removeChild(scrollTab);
				}

				// update title
				var chapterMenu = document.getElementById("chapterMenu");
				chapterMenu.querySelector('.info .title').innerHTML = courseTitle + ": " + modNum;

			}
		}, 900);
	// if iBooks or dev version
	} else if (readingSystem === "iBooks" || dev == true) {
		// add event listeners to call ready()
		document.addEventListener("DOMContentLoaded", function () {
			

			// show interactive questions and delete static version of questions
			// if ereader doesn't support JS, they'll just get static versions
			var hiddenEls = document.body.querySelectorAll(".hidden");
			var visibleEls = document.body.querySelectorAll(".visible");
			for (i = 0; i < hiddenEls.length; i++) {
				hiddenEls[i].classList.remove("hidden");
			}
			for (i = 0; i < visibleEls.length; i++) {
				visibleEls[i].parentNode.removeChild(visibleEls[i]);
			}
				
			var figures = document.body.querySelectorAll("figure");
			for (i = 0; i < figures.length; i++) {
				if (figures[i].getAttribute("data-mwidth")) {
					var maxWidth = figures[i].getAttribute("data-mwidth");
					figures[i].querySelector("img").setAttribute("style", maxWidth);
				}
			}
			// initiate epub
			ready();

		}, false);
	}

}


function ready() {
	// globals
	var radioButtons;
	var modalBox = document.getElementById('modalAlertBox');
	var modalOverlay = document.getElementById('modalOverlay');
	var email = "education%40loma.org";
	
	var imgURL;
	var baseURL;

	var bookId = "LOMA357";
debug("function ready");
	
				
	if (readingSystem !== "iBooks") {
		//updateTables();
		//window.addEventListener('resize', updateTables);
	}


	var ebook = {

		initialize: function () {
			var i;
			if (!document.querySelector('section.cover-page')) {
				imgURL = document.querySelector('.hidden-logo').src;
				debug(imgURL);
				baseURL = imgURL.replace(/(.*\/EPUB)\/img.*/g, "$1");
			}
			else {
				imgURL = '';
				baseURL = '';
			}

			// show interactive questions and delete static version of questions
			// if ereader doesn't support JS, they'll just get static versions
			var hiddenEls = document.body.querySelectorAll(".hidden");
			var visibleEls = document.body.querySelectorAll(".visible");
			for (i = 0; i < hiddenEls.length; i++) {
				hiddenEls[i].classList.remove("hidden");
			}
			for (i = 0; i < visibleEls.length; i++) {
				visibleEls[i].parentNode.removeChild(visibleEls[i]);
			}
				
			var figures = document.body.querySelectorAll("figure");
			for (i = 0; i < figures.length; i++) {
				if (figures[i].getAttribute("data-mwidth")) {
					var maxWidth = figures[i].getAttribute("data-mwidth");
					figures[i].querySelector("img").setAttribute("style", maxWidth);
				}
			}

			if (modalBox) {
				modalBox.addEventListener("keydown", ebook.closeModal, true);
				modalBox.querySelector('.header').addEventListener("click", ebook.closeModal, true);
				modalBox.querySelector('.header').addEventListener("keydown", ebook.closeModal, true);
				modalBox.addEventListener("keydown", ariaTabTrap.bind(modalBox), true);
				modalOverlay.onselectstart = function() { return false; };
                modalOverlay.onmousedown = function () {return false;};
			}
		
			// Find paras with margin-indents inserted by kotobee
			// and add class to create additional formatting
			var styleParas = slice(document.querySelectorAll('p[style]'));
			for (i = 0; i < styleParas.length; i++) {
				
				var style = styleParas[i].getAttribute('style');
				var styleArray = style.split(';');
				var newStyle = "";
				styleParas[i].removeAttribute('style');

				for (var j = 0; j < styleArray.length; j++) {
					
					var regex40 = RegExp('margin-left: ?40px');
					var regex80 = RegExp('margin-left: ?80px');
					var regex120 = RegExp('margin-left: ?120px')
					if (regex40.test(styleArray[j])) {
						styleParas[i].classList.add('indent1');
						
					} else if (regex80.test(styleArray[j])) {
						styleParas[i].classList.add('indent2');
						
					} else if (regex120.test(styleArray[j])) {
						styleParas[i].classList.add('indent3');
						
					} else if (styleArray[j] == "" || styleArray[j] == undefined || styleArray[j] == null) {
						
						continue;
					} else {
						newStyle = newStyle + styleArray[j] + ';';
					}
				}
				if (newStyle != "") {
					styleParas[i].setAttribute('style', newStyle);
				}
			}
			// add aria roles to tables
			AddTableARIA(document);

			/**** EVENT LISTENERS GALORE ****/
			// resets initialize so JS loads after clicking a link
			var links = document.querySelectorAll('a.return');
			for (i = 0; i < links.length; i++) {
				links[i].addEventListener('click', this.handleLink, true);
			}

			// Add click event listeners to interactive elements
			//eventListener(".gt,.en,.btn,.return");
			var alertLinks = document.querySelectorAll(".endnote,.btn,.id-button,.ts-button");
			for (i = 0; i < alertLinks.length; i++) {
				alertLinks[i].addEventListener('click', this.openModal, true);
				alertLinks[i].addEventListener('keydown', this.openModal, true);
			}

			// Add click even listeners to MC answer choices 
			// IE won't mark radios as checked if they aren't directly clicked
			var MCansChoices = document.body.querySelectorAll("ol.choices > li[role='radio']");
			for (i = 0; i < MCansChoices.length; i++) {
				MCansChoices[i].addEventListener('click', this.selectInput, true);
				MCansChoices[i].addEventListener('keydown', this.radioKeyDown.bind(MCansChoices[i]), true);
			}

			// Add click even listeners to MS answer choices 
			// IE won't mark radios as checked if they aren't directly clicked
			var MSansChoices = document.body.querySelectorAll("ol.choices > li[role='checkbox']");
			for (i = 0; i < MSansChoices.length; i++) {
				MSansChoices[i].addEventListener('click', this.selectInput, true);
				MSansChoices[i].addEventListener('keydown', this.radioKeyDown.bind(MSansChoices[i]), true);
			}

			// Add event listeners for DD questions
			var ddButtons = slice(document.querySelectorAll('span.dd-button'));
			var listBoxes = slice(document.querySelectorAll('ul.lb-options'));
			for (i = 0; i < ddButtons.length; i++) {
				ddButtons[i].addEventListener('click', this.showDropDown, true);
				ddButtons[i].addEventListener('keydown', this.showDropDown);
				listBoxes[i].addEventListener('blur', this.hideDropDown);
				listBoxes[i].addEventListener('keydown', this.hideDropDown);
				document.body.addEventListener('click', this.hideAllDDs);
				ddButtons[i].addEventListener('keydown', this.selectOption.bind(listBoxes[i]));
				listBoxes[i].addEventListener('focus', this.checkFocus.bind(listBoxes[i]));
				listBoxes[i].addEventListener('keydown', this.selectOption.bind(listBoxes[i]));
				listBoxes[i].addEventListener('click', this.selectOption.bind(listBoxes[i]));
			}


			/// Gather all the videos
			var videos = document.querySelectorAll(".video-container");
			/// Run all videos through videoPlayer function
			for (i = 0; i < videos.length; i++) {
				if (readingSystem == "iBooks") {
					videos[i].removeChild(videos[i].querySelector('.v-title-overlay'));
					//videos[i].querySelector('video').setAttribute('width', '852');
					//videos[i].querySelector('video').setAttribute('height', '480');
				} else {
					videos[i].onload = videoPlayer(videos[i]);
				}
			}

			// TODO: Collect all readingSystem === "iBooks" into a single file
			// iBooks needs some tweaks
			if (readingSystem === "iBooks") {
				checkIbooks();
			}

			// run the pqPlayer if we're in section.pq
			if (document.querySelector('section.pq')) {
				pqPlayer(this);
			}

		}, // end initialize

		handleLink: function () {
			if (document.getElementById("epubContainer")) {
				var wrapperReady = setInterval(function () {
					debug("special link handling");
					if (window.getComputedStyle(document.getElementById("epubContainer")).getPropertyValue("opacity") == 1) {
						initialized = false;
						debug("initializing");
						ready();

						clearInterval(wrapperReady);
					}
				}, 500);
			}
		},

		openModal: function (e) {

			key = e.keyCode ? e.keyCode : e.which ? e.which : e.charCode;
			if (e.type == 'click' || (e.type == 'keydown' && (key == keyCodes.enter || key == keyCodes.space))) {
				var element = this;
				event.preventDefault();
				// save element that triggered modal
				currentFocus = document.activeElement;

				// get modal content
				var modalContent = ebook.addModalContent(element);

				// Wait for modal content
				var mcRefresh = setInterval(function () {
					if (modalContent) {
						clearInterval(mcRefresh);
						// append content
						modalBox.querySelector('.modalAlertContent').innerHTML = "";
						modalBox.querySelector('.modalAlertContent').appendChild(modalContent);
						AddTableARIA(modalBox);

						// submit button is trigger
						if (element.classList.contains("btn")) {
							debug(modalBox);
							var modalClass = modalBox.querySelector("p").className;
							// add class to change border color depending on in/correct
							switch (modalClass) {
								case "correct":
									modalBox.classList.add("fb-correct");
									break;
								case "incorrect":
									modalBox.classList.add("fb-incorrect");
									break;
								case "warning":
									modalBox.classList.add("warning");
									break;
							}
						}
						// transcript or image description is trigger
						else if (element.classList.contains('id-button') || element.classList.contains('ts-button')) {
							modalBox.classList.add('description');
						}

						// apple books requires different modal placement
						if (modalBox.classList.contains('ibooks')) {
							appleModalFix(element, modalBox);
						}

						// scrollContainer is the container Kotobee
						// drops the EPUB in
						var scrollContainer = document.querySelector('#epubContainer div.scroll');
						if (scrollContainer) {
							debug("setting height");
							// KOTOBEE
							// hack to get get the modal to show 
							// up in the middle of the screen
							var windowHeight = window.innerHeight;
							var readerHeaderHeight = document.getElementById('readerHeader').offsetHeight;
							var tabMenuHeight = document.getElementById('tabMenu').offsetHeight;
							var contentHeight = windowHeight - readerHeaderHeight - tabMenuHeight;
							
							var epubContainer = document.getElementById('epubContainer');
							var containerPos = epubContainer.scrollTop;
							debug(contentHeight);
							debug(readerHeaderHeight);
							// Desktop calculations
							if (!kbMobile) {
								// do not move. this has to be set
								// before the modalHeight var is set
								modalBox.setAttribute('aria-hidden', 'false');
								modalOverlay.setAttribute('aria-hidden', 'false');
								var modalHeight = modalBox.offsetHeight;
								debug(containerPos);
								
								if (modalHeight > contentHeight) {
									debug("modalHeight bigger")
									modalBox.style.height = (contentHeight * 0.9) + 'px';
									modalHeight = contentHeight * 0.9;
								}
								modalBox.style.top = ((contentHeight / 2) + containerPos - (readerHeaderHeight / 2)) + 'px';
								debug(modalBox.style.top);
								document.body.classList.add('loma-modal-open');
								epubContainer.setAttribute('style', 'overflow-y: hidden!important');
								epubContainer.scrolltop = containerPos;

							} else if (kbMobile) {
								debug("mobile");
								modalBox.classList.add('mobile');
								epubContainer = document.querySelector('#epubContainer div.scroll');
								var containerTrans = epubContainer.style.transform;
								var regEx = /translate3d\(\d+px, -?(\d+(?:\.\d+)?)px, \d+px\) scale\(\d+\)/;
								var matches = regEx.exec(containerTrans);
								containerPos = parseInt(matches[1]);
								modalBox.style.top = containerPos + 'px';
								
								// TODO: Move these outside the if statement
								// so as not to repeat code. Depends on how this
								// is handled in appleModalFix function
								modalBox.setAttribute('aria-hidden', 'false');
								modalOverlay.setAttribute('aria-hidden', 'false');
							}
						} else {
							modalBox.setAttribute('aria-hidden', 'false');
							modalOverlay.setAttribute('aria-hidden', 'false');
						}

						// focus on the close button
						modalBox.querySelector('.header span').focus();

						// set focusableElements for modal tab trap
						var focusableElements = slice(modalBox.querySelectorAll(focusableElementsString));
						firstTabStop = focusableElements[0];
						lastTabStop = focusableElements[focusableElements.length - 1];

						// fix table display for any content inside
						// of the modal
						//updateTables(modalContent);
					}
				}, 200);

				

			}


		}, // end openModal


		closeModal: function (e) {
			var key = e.keyCode;
			
			if ((typeof e == "object" && e.type == 'click') ||
				(e.type == 'keydown' && e.target.getAttribute('aria-label') == 'Close' && (key == 13 || key == 32)) ||
				key == 27) {
					
				e.preventDefault();

				// remove classes from modal
				modalBox.classList.remove('mobile');
				if (modalBox.classList.contains("ibooks")) {
					modalBox.className = "ibooks";
				}
				else {
					modalBox.className = "";
				}
				// hide from screen readers
				modalBox.setAttribute('aria-hidden', 'true');

				// remove classes and attrs from modal overlay
				var modalOverlay = document.getElementById("modalOverlay");
				modalOverlay.setAttribute('aria-hidden', 'true');
				document.body.classList.remove('loma-modal-open');
				// removes position styles so next modal 
				// popup has fresh attrs
				modalBox.removeAttribute('style');
				// removes overflow-y hidden from container 
				// so scrolling is enabled again
				if (document.getElementById('epubContainer')) document.getElementById('epubContainer').setAttribute('style', 'overflow-y: auto!important');

				// re-focus on the modal trigger button
				currentFocus.focus();
			}


		}, // end closeModal


		addModalContent: function (element) {
			var modalContent = document.createElement("div");
			modalContent.className = "content";
			var returnLink;

			if (element.classList.contains("endnote")) {
				id = element.getAttribute("data-note");

				// set url of endnotes.xhtml
				var enURL;
				if (readingSystem == "iBooks") {
					enURL = '../raw/endnotes.xhtml';
				} else {
					enURL = baseURL + '/xhtml/raw/endnotes.xhtml';
				}

				// request HTML from endnotes.xhtml file
				getHTML(enURL, function (response) {
					// find the endnote we're looking for
					// and save content to modal container
					var endnote = response.getElementById(id);
					returnLink = endnote.querySelector(".return");
					// we don't want the return link included in the pop up
					if (returnLink) endnote.removeChild(returnLink);
					modalContent.innerHTML = endnote.innerHTML;
				});

			} else if (element.classList.contains("btn")) {
				id = element.getAttribute("data-answer");

				var keyURL;
				if (readingSystem == "iBooks") {
					keyURL = '../raw/answer-key.xhtml';
				} else {
					keyURL = baseURL + '/xhtml/raw/answer-key.xhtml';
				}

				// request HTML from answer-key.xhtml file
				getHTML(keyURL, function (response) {
					// find the question key we're looking for
					// and save content to modal container
					var currentKey = response.getElementById(id);

					modalContent = ebook.checkAnswer(element, modalContent, currentKey);
				});

			} else if (element.classList.contains("id-button") || element.classList.contains("ts-button")) {
				// save vid/fig id
				var desId = element.getAttribute('data-description');
				
				// set url of descriptions.xhtml
				var descURL;
				if (readingSystem == "iBooks") {
					descURL = '../raw/descriptions.xhtml';
				} else {
					descURL = baseURL + '/xhtml/raw/descriptions.xhtml';
				}

				// request HTML from descriptions.xhtml file
				getHTML(descURL, function (response) {
					// find the description we're looking for
					// and save content to modal container
					var description = response.getElementById(desId);
					var title = description.querySelector('.fig-title').innerHTML;
					var content = description.querySelector('.inner-content');
					modalContent.innerHTML = '<p class="md-title" id="modalTitle">' + title + '</p>' + content.innerHTML;
				});

			}

			return modalContent;

		}, // end addModalContent


		checkAnswer: function (element, modalContent, currentKey) {
			// save choices from answer-key
			var keyChoices = currentKey.querySelectorAll('ol.choices-static li');
			// save the feedback container
			var feedbackEl = currentKey.querySelector('.q-feedback');

			var results;

			// get question-container, id, and question type
			var questionContainer = findAncestor(element, 'class', "question-container");
			var qId = questionContainer.getAttribute("id");
			var qType = questionContainer.getAttribute("data-qtype");

			
			var checked = questionContainer.querySelector("li[aria-checked='true']");
			// store all answer choices from the question
			var answerChoices = questionContainer.querySelectorAll('li[role="radio"],li[role="checkbox"],span.dd-button');

			// DDs are always "checked"
			if (qType === "dd") {
				checked = true;
			}

			// only get results if something was checked
			if (checked) {
				var modalHead;
				// Get results based on question type and
				// build the feedback content
				switch (qType) {

					case "mc":
						
						results = ebook.mcQuestion(keyChoices, feedbackEl, answerChoices);

						break;

					case "ms":

						results = ebook.msQuestion(keyChoices, feedbackEl, answerChoices);

						break;

					case "dd":

						results = ebook.ddQuestion(keyChoices, feedbackEl, answerChoices);
						
						break;

				}

				// check if feedback already has "Correct/Sorry header"
				if (results.feedback.match(/(Sorry, |Correct!)/)) {
					modalContent.innerHTML = "<p class=\"" + results.correct + "\">" + results.feedback + "</p>";
				} else {
					if (results.correct === "correct") {
						modalHead = "<span class=\"head\" id=\"modalTitle\">Correct!</span>";
					} else {
						modalHead = "<span class=\"head\" id=\"modalTitle\">Sorry, that's incorrect.</span>";
					}
					modalContent.innerHTML = "<p class=\"" + results.correct + "\">" + modalHead + results.feedback + "</p>";
				}
				
				var correctMarker = ".answer-marker.correct";
				var incorrectMarker = ".answer-marker.incorrect";

				// mark answer correct or incorrect
				for (var c = 0; c < answerChoices.length; c++) {
					var choiceLI = answerChoices[c];

					// for MS and MC auestions
					if (qType === "ms" || qType === "mc") {
						// save the check marker
						var checkCircle = choiceLI.querySelector(".check");

						// question is correct and marked as answered
						if (choiceLI.className === "cr" && checkCircle.classList.contains('answered')) {
							// hack for iOS
							if (os == "iPhone" || os == "iPad") {
								choiceLI.querySelector('.check').innerHTML = "&#10004;";
							} else {
								choiceLI.querySelector(correctMarker).className = choiceLI.querySelector(correctMarker).className.replace(" hide", "");
							}

						// question is incorrect and marked as answered
						} else if (checkCircle.classList.contains('answered')) {
							if (os == "iPhone" || os == "iPad") {
								choiceLI.querySelector('.check').innerHTML = "&#10060;";
							} else {
								choiceLI.querySelector(incorrectMarker).className = choiceLI.querySelector(incorrectMarker).className.replace(" hide", "");
							}

						}
					// for DD questions -- Correct
					} else if (choiceLI.className === "cor") {

						choiceLI.querySelector(correctMarker).className = choiceLI.querySelector(correctMarker).className.replace(" hide", "");

					// for DD questions -- Incorrect
					} else if (choiceLI.className === "incor") {

						choiceLI.querySelector(incorrectMarker).className = choiceLI.querySelector(incorrectMarker).className.replace(" hide", "");

					}
				}

				// If no answer found, have student report
				if (!results.answer) {
					modalContent.innerHTML = "<p class=\"warning\" id=\"modalTitle\">Oops!</p> <p class=\"definition\">Something went wrong. We don't know what the correct answer is. Please <a href=\"mailto:" + email + "?subject=" + bookId + "Question ID, " + qId + ", has no correct answer\">email us</a>.</p>";
				}
				// disable MS questions after submitting
				if (questionContainer.querySelector('[role="group"]')) {
					var msChoices = slice(questionContainer.querySelectorAll('[role="checkbox"]'));
					for (i = 0; i < msChoices.length; i++) {
						msChoices[i].setAttribute('aria-disabled', 'true');
						msChoices[i].removeAttribute('tabindex');
						msChoices[i].removeEventListener('click', this.selectInput, true);
						msChoices[i].removeEventListener('keydown', this.selectInput, true);
					}
					questionContainer.querySelector('[role="group"]').setAttribute('aria-disabled', 'true');
					questionContainer.querySelector('p.reveal span.btn').setAttribute('aria-disabled', 'true');
					questionContainer.querySelector('p.reveal span.btn').removeAttribute('tabindex');
					questionContainer.querySelector('p.reveal span.btn').removeEventListener('click', this.openModal, true);
					questionContainer.querySelector('p.reveal span.btn').removeEventListener('keydown', this.openModal, true);
				}
			}

			// if MC or MS and nothing was selected, show error message
			else if (qType === "mc" || qType === "ms") {
				modalContent.innerHTML = "<p class=\"warning\" id=\"modalTitle\">Oops!</p> <p class=\"definition\">Please select an answer before clicking \"Submit\".</p>";
			}

			// if dd and a dd wasn't answer, show error message
			else if (qType === "dd") {
				modalContent.innerHTML = "<p class=\"warning\" id=\"modalTitle\">Oops!</p> <p class=\"definition\">Please answer all dropdowns before clicking \"Submit\".</p>";
			}

			return modalContent;

		},



		mcQuestion: function (keyChoices, feedbackEl, answerChoices) {
			var foundAnswer = false;
			var correct;
			var feedback;

			// cycle through question choices
			for (i = 0; i < answerChoices.length; i++) {
				var currentChoice = answerChoices[i];
				var id = currentChoice.getAttribute("id");

				// see if the choice was checked
				var checked;
				if (currentChoice.getAttribute('aria-checked') == 'true') {
					checked = true;
				} else {
					checked = false;
				}

				// cycle through answer key choices
				for (var j = 0; j < keyChoices.length; j++) {
					// id should match key choice + 'static'
					if (keyChoices[j].getAttribute('id') === id + '-static') {

						// add cr class to correct answer
						if (keyChoices[j].classList.contains('cr')) {
							currentChoice.className = "cr";
							foundAnswer = true;
						}

						if (checked) {

							// add answered class and cor/incor class to checked answer
							currentChoice.querySelector('.check').classList.add('answered');
							if (keyChoices[j].classList.contains('cr')) {
								correct = "correct";
							} else {
								correct = "incorrect";
							}
							// feedback could either be in a para or a list
							if (feedbackEl && (feedbackEl.tagName == 'p' || feedbackEl.tagName == 'div')) {
								feedback = feedbackEl.innerHTML;
							}
							else if (feedbackEl && feedbackEl.tagName == 'ul') {
								feedback = feedbackEl.querySelector("#" + id).innerHTML;
							}
						}
					}
				}
			}

			return {
				correct: correct,
				feedback: feedback,
				answer: foundAnswer
			};

		}, // end mcQuestion


		msQuestion: function (keyChoices, feedbackEl, answerChoices) {
			var foundAnswer = false;
			var correct;
			var feedback;

			// cycle through question choices
			var crIter = 0;
			for (i = 0; i < answerChoices.length; i++) {
				var currentChoice = answerChoices[i];
				var id = currentChoice.getAttribute("id");

				// see if choice was checked
				var checked;
				if (currentChoice.getAttribute('aria-checked') == 'true') {
					checked = true;
				} else {
					checked = false;
				}

				// add answered class if checked
				if (checked) {
					currentChoice.querySelector('.check').classList.add('answered');
				}

				// cycle through answer key choices
				for (var j = 0; j < keyChoices.length; j++) {
					// id should match key choice + 'static'
					if (keyChoices[j].getAttribute('id') === id + '-static') {
						
						// add cr class to correct answer
						if (keyChoices[j].classList.contains('cr')) {
							answerChoices[i].className = "cr";
							foundAnswer = true;
						}

						// keep track of how many answers are the cr
						if ((keyChoices[j].classList.contains('cr') && currentChoice.getAttribute('aria-checked') == 'true') || (!keyChoices[j].classList.contains('cr') && currentChoice.getAttribute('aria-checked') == 'false')) {
							crIter++;
						}

					}
				}
			}

			// the length of correct answers and 
			// list of choices answered correctly
			// should be the same for q to be 
			// marked correct
			if (crIter === answerChoices.length) {
				correct = "correct";
			} else {
				correct = "incorrect";
			}

			// MS doesn't use lists as feedback
			if (feedbackEl && feedbackEl.tagName == 'p') {
				feedback = feedbackEl.innerHTML;
			}

			return {
				correct: correct,
				feedback: feedback,
				answer: foundAnswer
			};

		}, // end msQuestion



		ddQuestion: function (keyChoices, feedbackEl, answerChoices) {
			var foundAnswer = true;
			var correct = "correct";
			debug(keyChoices);
			debug(feedbackEl);
			debug(answerChoices);
			// cycle through question choices
			for (i = 0; i < answerChoices.length; i++) {
				var currentChoice = answerChoices[i];
				var id = currentChoice.getAttribute("id");
				id = id.replace(/-button/, "");
				// save the value of the current choice
				// and the parent of the current choice
				var value = currentChoice.innerHTML.toLowerCase();
				var choiceParent = currentChoice.parentNode;

				// cycle through answer key choices
				for (var j = 0; j < keyChoices.length; j++) {

					// id should match key choice
					if (keyChoices[j].getAttribute('id') === id) {
						debug(keyChoices[j]);
						// if question has been answered before
						// remove correct response for displaying again
						if (choiceParent.querySelector('span.response')) {
							choiceParent.querySelector('span.response').remove();
							choiceParent.className = "match-wrapper";
						}

						// check if the key choice matches 
						// the answer chosen
						if (keyChoices[j].querySelector('span.response').innerHTML !== value) {
							choiceParent.classList.add("incor");
							correct = "incorrect";
						} else if (keyChoices[j].querySelector('span.response').innerHTML == value) {
							choiceParent.classList.add("cor");
						}

						// add correct response after the question
						var correctResp = document.createElement("span");
						var respText = document.createTextNode(keyChoices[i].querySelector('span.response').innerHTML);
						correctResp.className = "response";
						correctResp.appendChild(respText);
						choiceParent.appendChild(correctResp);
					}

				}
			}
			
			// DD doesn't use lists as feedback
			if (feedbackEl && feedbackEl.tagName == 'p') {
				feedback = feedbackEl.innerHTML;
			}

			return {
				correct: correct,
				feedback: feedback,
				answer: foundAnswer
			};

		}, // end ddQuestion


		selectInput: function (event) {
			// 'this' is set with call
			var element = this;
			event.preventDefault();
			element.focus();

			// uncheck if already checked
			if (element.getAttribute('aria-checked') == "true") {
				element.setAttribute('aria-checked', 'false');
			} else {
				// uncheck any checked siblings
				var siblings = slice(element.parentNode.querySelectorAll('li[role="radio"]'));
				for (i = 0; i < siblings.length; i++) {
					siblings[i].setAttribute('aria-checked', 'false');
					siblings[i].setAttribute('tabindex', '-1');
				}
				// check current element
				element.setAttribute('aria-checked', 'true');
				element.setAttribute('tabindex', '0');
			}

		}, // end selectInput


		radioKeyDown: function (event) {
			
			key = event.keyCode ? event.keyCode : event.which ? event.which : event.charCode;
			
			// collect radio buttons of current question
			radioButtons = slice(event.target.parentNode.querySelectorAll('li[role="radio"]'));

			// set which button is checked based on keydown
			switch (key) {
				case keyCodes.space: // space
				case keyCodes.enter: // enter
					event.preventDefault();
					ebook.selectInput.call(this, event);
					//flag = true;
					break;

				case keyCodes.up: // up
				case keyCodes.left: // left
					event.preventDefault();
					ebook.setCheckedToPreviousItem.call(this, event);
					//flag = true;
					break;

				case keyCodes.down: // down
				case keyCodes.right: // right
					event.preventDefault();
					ebook.setCheckedToNextItem.call(this, event);
					//flag = true;
					break;

				default:
					break;
			}

		}, // end radioKeyDown

		setCheckedToPreviousItem: function (event) {
			// 'this' is set with call
			var currentItem = this;
			var index;

			// first option is already checked,
			// check last item
			if (currentItem === radioButtons[0]) {
				ebook.selectInput.call(radioButtons[radioButtons.length - 1], event);
			} else {
				index = radioButtons.indexOf(currentItem);
				ebook.selectInput.call(radioButtons[index - 1], event);
			}
		},

		setCheckedToNextItem: function (event) {
			// 'this' is set with call
			var currentItem = this;
			var index;
			// if last item is already checked,
			// check first itme
			if (currentItem === radioButtons[radioButtons.length - 1]) {	
				ebook.selectInput.call(radioButtons[0], event);
			} else {
				index = radioButtons.indexOf(currentItem);
				ebook.selectInput.call(radioButtons[index + 1], event);
			}
		},

		showDropDown: function (evt) {
			var ddBtn = evt.target;
			var ddBtnId = evt.target.getAttribute('id');
			var optionId = ddBtnId.replace(/button/, "options");
			var optionsList = document.getElementById(optionId);

			// open the dropdown if clicked or enter/spacebar key tapped
			if (evt.type == 'click' || evt.keyCode == keyCodes.enter || evt.keyCode == keyCodes.space) {
				optionsList.setAttribute('aria-hidden', 'false');
				ddBtn.setAttribute('aria-expanded', 'true');
				optionsList.focus();
			}
		},

		hideDropDown: function (evt) {
			var optionsList = evt.target;
			var optionId = evt.target.getAttribute('id');
			var ddBtnId = optionId.replace(/options/, "button");
			var ddBtn = document.getElementById(ddBtnId);

			// close dropdown if tabbing away or esc/enter key tapped
			if (evt.type == 'keydown' && evt.keyCode == keyCodes.enter || evt.keyCode == keyCodes.escape) {
				optionsList.setAttribute('aria-hidden', 'true');
				ddBtn.removeAttribute('aria-expanded');
				ddBtn.focus();
			} else if (evt.type == 'blur') {
				optionsList.setAttribute('aria-hidden', 'true');
				ddBtn.removeAttribute('aria-expanded');
			}
		},

		hideAllDDs: function (evt) {
			// close the dropdown if anything outside the dd is clicked
			if (!evt.target.className.match('dd-button')) {
				var openDDs = slice(document.querySelectorAll('ul.lb-options[aria-hidden="false"]'));
				for (i = 0; i < openDDs.length; i++) {
					var openId = openDDs[i].getAttribute('id');
					var ddBtnId = openId.replace(/options/, 'button');
					var ddBtn = document.getElementById(ddBtnId);
					openDDs[i].setAttribute('aria-hidden', 'true');
					ddBtn.removeAttribute('aria-expanded');
				}
			}
		},

		checkFocus: function (evt) {
			// if no active-descendant attr, return
			if (evt.target.getAttribute('active-descendant')) {
				return;
			}

			// set focus to first option
			var firstItem = this.querySelector('[role="option"]');
			if (firstItem) {
				ebook.setFocus(firstItem);
			}
		},

		selectOption: function (evt) {
			var select;
			var close = false;
			var baseId;

			// keydown event
			if (evt.type == 'keydown') {
				var key = evt.keyCode;

				// up/down will advance page in Kotobee and Apple Books
				if (key == keyCodes.up || key == keyCodes.down) {
					evt.preventDefault();
				}
				var container = findAncestor(evt.target, 'class', 'match-wrapper');

				// if number or up/down keys are tapped on the button
				// expand the drop down
				if (evt.target.getAttribute('role') == 'button' && ((key > 48 && key < 58) || (key > 96 && key < 106) || key == keyCodes.up || key == keyCodes.down)) {
					evt.target.setAttribute('aria-expanded', 'true');
					var lbOptions = container.querySelector('.lb-options');
					lbOptions.setAttribute('aria-hidden', 'false');
					lbOptions.focus();
				}

				// if one of the options has focus, get it's ID
				// for base and the current index of the choices
				if (container.querySelector('.focused')) {
					var curOpId = container.querySelector('.focused').getAttribute('id');
					var curOpIndex = curOpId.replace(/.*?(\d+)$/, '$1');
					baseId = curOpId.replace(/^(.*?)\d+$/, '$1');
				}

				// set the select var based on which key is pressed
				// select var will determine which option is selected
				if (key == keyCodes.up) {
					if (document.getElementById(baseId + curOpIndex--)) {
						select = document.getElementById(baseId + curOpIndex--);
					}
				} else if (key == keyCodes.down) {
					if (document.getElementById(baseId + curOpIndex++)) {
						select = document.getElementById(baseId + curOpIndex--);
					}
				} else if (document.getElementById(baseId + 0) && (key == 49 || key == 97)) {
					select = document.getElementById(baseId + 0);
				} else if (document.getElementById(baseId + 1) && (key == 50 || key == 98)) {
					select = document.getElementById(baseId + 1);
				} else if (document.getElementById(baseId + 2) && (key == 51 || key == 99)) {
					select = document.getElementById(baseId + 2);
				} else if (document.getElementById(baseId + 3) && (key == 52 || key == 100)) {
					select = document.getElementById(baseId + 3);
				} else if (document.getElementById(baseId + 4) && (key == 53 || key == 101)) {
					select = document.getElementById(baseId + 4);
				} else if (document.getElementById(baseId + 5) && (key == 54 || key == 102)) {
					select = document.getElementById(baseId + 5);
				} else if (document.getElementById(baseId + 6) && (key == 55 || key == 103)) {
					select = document.getElementById(baseId + 6);
				} else if (document.getElementById(baseId + 7) && (key == 56 || key == 104)) {
					select = document.getElementById(baseId + 7);
				} else if (document.getElementById(baseId + 8) && (key == 57 || key == 105)) {
					select = document.getElementById(baseId + 8);
				}
			// click event
			} else if (evt.type == 'click' && evt.target.getAttribute('role') == 'option') {
				select = evt.target;
				// only automatically close the DD if this
				// was a click event
				close = true;
			}

			if (select) {
				// set the focus to the select var 
				ebook.setFocus(select, close);
			}
		},

		setFocus: function (element, close) {
			var container = findAncestor(element, 'class', 'match-wrapper');
			var list = container.querySelector('.lb-options');
			var button = container.querySelector('.dd-button');
			// remove focus from previous
			ebook.removeFocus(document.getElementById(list.getAttribute('active-descendant')));
			element.setAttribute('aria-selected', 'true');
			element.classList.add('focused');

			// set focus to new
			list.setAttribute('active-descendant', element.getAttribute('id'));
			button.innerHTML = element.innerHTML;

			// close the dd if flagged
			if (close) {
				list.setAttribute('aria-hidden', 'true');
				button.removeAttribute('aria-expanded');
			}
		},

		removeFocus: function (element) {
			// in case element isn't defined, return
			if (!element) {
				return;
			}

			// remove selected attr and focused class
			element.removeAttribute('aria-selected');
			element.classList.remove('focused');
		}

	}; // end ebook player

	if (initialized == false) {
		ebook.initialize();
		initialized = true;
	}

} // end function ready()