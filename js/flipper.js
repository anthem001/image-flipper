var ImageRotator = function(delay) {

    this.images = document.getElementById('slider');
	this.images.style.visibility = "visible";
    this.currentIterator = 0;
    this.imageTimeout = delay;
    this.dlArray = this.images.getElementsByTagName("dl");
    this.numSliderImages = this.dlArray.length;
    this.init(delay);

};

ImageRotator.prototype = function() {

    var init = function (delay) {
    
        var that = this;
        this.createButtons();
        this.displayImage(0);
        
        window.setInterval(function() {

            that.displayImage();

        }, delay);

    },

    /* hides all images to start */
    hideAllImages = function() {

        var i = 0;
        while (i < this.numSliderImages) {
            this.dlArray[i].style.display = "none";
            i++;
        }

    }, 

    /* displays image */
    displayImage = function() {

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

    }, 

    /* creates buttons from dl tags */
    createButtons = function() {

        var dl = document.createElement('dl');
        dl.id = "imageButtonList";
        this.images.appendChild(dl);
        var goToNum = this.goToNum;
        var imageButtonList = document.getElementById("imageButtonList");

        for (var i = 0; i < this.numSliderImages; i++) {

            var that = this;
            var iteratorAdjust = i + 1;
            var link = document.createElement('button');
            

            link.setAttribute('id', 'button' + i);
            link.innerHTML = iteratorAdjust;
            imageButtonList.appendChild(link);

            imageButtonList.childNodes[i].onclick = function (e){

                var num = buttonClicked(e);
                that.goToNum(num); 

            };


        }
    }, 

    /* go to specific cell number */
    goToNum = function(num) {

        var adjustNum = num - 1;
        this.hideAllImages();
        this.currentIterator = adjustNum;
        this.dlArray[adjustNum].style.display = "block";
        this.highlightButton();
        this.currentIterator++;

    }, 

    /* button click event handler, returns number clicked */
    buttonClicked = function (e) {

        e = e || window.event;
         
        if(e.preventDefault){
        
            e.preventDefault();

        }
        
        var target = e.srcElement || e.target;
        var num = target.innerHTML;
        return num;

    },


    highlightButton = function() {

        this.clearHighlight();
        var imageButtonList = document.getElementById("imageButtonList").childNodes;
        var currentButton = imageButtonList[this.currentIterator];
        currentButton.style.backgroundColor = "#004990";
        currentButton.style.color = "#FFF";
        currentButton.style.fontWeight = "900";

    }, 

    clearHighlight = function() {
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
        goToNum : goToNum,
        init : init

    };
}();