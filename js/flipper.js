var ImageRotator = function() {
	this.images = document.getElementById("slider");
	this.currentIterator = 0;
	this.imageTimeout = 5000;
	this.dlArray = this.images.getElementsByTagName("dl");
	this.numSliderImages = this.dlArray.length;
	this.createButtons();
};

ImageRotator.prototype = function() {
	var hideAllImages = function() {
		var i = 0;
		while (i < this.numSliderImages) {
			this.dlArray[i].style.display = "none";
			i++;
		}
	}, displayImage = function() {
		if (this.currentIterator < this.numSliderImages) {
			//rehide images
			this.hideAllImages();
			//show specific image
			this.dlArray[this.currentIterator].style.display = "block";
			this.highlightButton();
			//iterate the index
			this.currentIterator++;
		} else {
			this.currentIterator = 0;
		}
	}, createButtons = function() {
		var dl = document.createElement('dl');
		dl.id = "imageButtonList";
		this.images.appendChild(dl);
		var goToNum = this.goToNum;
		var imageButtonList = document.getElementById("imageButtonList");
		for (var i = 0; i < this.numSliderImages; i++) {
			var iteratorAdjust = i + 1;
			var link = document.createElement('button');
			link.setAttribute('id', 'button' + i);
			link.innerHTML = iteratorAdjust;
			imageButtonList.appendChild(link);

			var buttons = imageButtonList.childNodes[i];
			buttons.onclick = function() {
				buttonMove();
			};
		}
	}, goToNum = function(num) {
		var adjustNum = num - 1;
		this.hideAllImages();
		this.currentIterator = adjustNum;
		this.dlArray[adjustNum].style.display = "block";
		this.highlightButton();
		this.currentIterator++;
	}, highlightButton = function() {
		this.clearHighlight();
		var imageButtonList = document.getElementById("imageButtonList").childNodes;
		var currentButton = imageButtonList[this.currentIterator];
		currentButton.style.backgroundColor = "#004990";
		currentButton.style.color = "#FFF";
		currentButton.style.fontWeight = "900";

	}, clearHighlight = function() {
		var imageButtonList = document.getElementById("imageButtonList").childNodes;
		for ( i = 0; i < imageButtonList.length; i++) {
			var currentButton = imageButtonList[i];
			currentButton.style.backgroundColor = "#efefef";
			currentButton.style.color = "#000";
			currentButton.style.fontWeight = "normal";
		}
	};

	return {
		hideAllImages : hideAllImages,
		displayImage : displayImage,
		createButtons : createButtons,
		highlightButton : highlightButton,
		clearHighlight : clearHighlight,
		goToNum : goToNum
	};
}();

//set timeout
var timeOut = 5000;

//init
var thisrotator = new ImageRotator();
var myTimeout; ( function() {
		thisrotator.displayImage(0);
		myTimeout = window.setInterval(function() {
			thisrotator.displayImage();
		}, timeOut);
	}());

function buttonMove(e) {
	e = e || window.event;
	thisrotator.goToNum(e.srcElement.innerHTML);
}
