var imageSlider = function() {
	var sliderImage = document.getElementById("slider");
	var dlArray = [];
	if(sliderImage) {
		dlArray = sliderImage.getElementsByTagName("dl");
	}
	this.sliderImages = dlArray;
	this.imageCount = this.sliderImages.length;
};

imageSlider.prototype = ( function() {
		/* hides all images  */

		var hideImages = function() {
			var i = 0;
			while(i < this.imageCount) {
				this.sliderImages[i].style.display = "none";
				i++;
			}
		},
		/* mechanism to show specific image */
		slide = function(myIterator) {
			var s = 0;
			while(s < this.imageCount) {
				if(s === myIterator) {
					this.sliderImages[s].style.display = "block";
				}
				s++;
			}
		};
		return {
			//public members
			slide : slide,
			hideImages : hideImages
		};
	}());

var addClicks = function() {
	this.imageIterator = new imageIterator();
	this.allLinks = document.getElementsByTagName("a"), i;
	this.thisNode = [];
};

addClicks.prototype = function() {

	for(i in this.allLinks) {

		if((" " + this.allLinks[i].className + " ").indexOf(" buttonImage ") > -1) {

			this.allLinks[i].onclick = function() {
				this.imageIterator.goToNum(this.innerHTML);
			};

		}
	}
}();

var imageIterator = function() {
	this.slider = new imageSlider();

	this.slider.hideImages();
	this.imageCount = this.slider.imageCount;
	this.currentIterator = 0;
	this.buttonNav = new buttonNav();
	this.buttonNav.createButtons();
		
};

imageIterator.prototype = ( function() {
		var iterateImages = function() {
			if(this.currentIterator < this.imageCount) {
				//rehide images
				this.slider.hideImages();
				//show specific image
				this.slider.slide(this.currentIterator);
				//highlight specific button
				this.buttonNav.clearHighlight();
				this.buttonNav.highlightButton(this.currentIterator + 1);
				//iterate the index
				//console.log(this.currentIterator);
				this.currentIterator++;
			} else {
				this.currentIterator = 0;
			}
			this.addClicks = new addClicks();
		}, goToNum = function(id) {
			/* broken */
			console.log(this.currentIterator);
			var correctId = id - 1;
			this.slider.hideImages();
			this.slider.slide(correctId);
			this.buttonNav.clearHighlight();
			this.buttonNav.highlightButton(id);
			this.currentIterator = id - 1;
			iterateImages();
		};

		return {
			iterateImages : iterateImages,
			addClicks : addClicks,
			goToNum : goToNum

		};

	}());

/* this will create the clickable buttons */
var buttonNav = function() {
	this.slider = new imageSlider();
	this.imageCount = this.slider.imageCount;
};

buttonNav.prototype = ( function() {
		var createButtons = function() {
			var imageNum = this.imageCount;
			var slider = this.slider;
			$("#slider").append("<dl id='imageButtonList'>");
			for(var i = 0; i < imageNum; i++) {
				var iteratorAdjust = i + 1;
				$("#imageButtonList").append("<span class='imageButton'><a href='#' class='buttonImage'>" + iteratorAdjust + "</a></span>");

			}
			// $("#slider").append("</span>");
		}, clearHighlight = function() {
			$(".imageButton").css("background-color", "#efefef");
			$(".imageButton").children().css("color", "black");
		}, highlightButton = function(buttonToHighlight) {
			var highlightButton = $(".imageButton:contains('" + buttonToHighlight + "')");
			highlightButton.css("background-color", "#004990");
			highlightButton.children().css("color", "white");
		};

		return {
			createButtons : createButtons,
			highlightButton : highlightButton,
			clearHighlight : clearHighlight
		};

	}());

var rotateInterval = 6000;
var thisInterval = setInterval(imagesRotateTimeout, rotateInterval);
var imageIterate = new imageIterator();
imagesRotateTimeout();

function imagesRotateTimeout() {
	imageIterate.iterateImages();

}

