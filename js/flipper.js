var imageSlider = function(){
    this.sliderImages = $('#slider dl');
    this.imageCount = this.sliderImages.size();
};

imageSlider.prototype = function(){
    /* hides all images  */
    var hideImages = function(){
        this.sliderImages.each(function (index){
           $(this).hide();
        });
    },
    /* mechanism to show specific image */
    slide = function(myIterator){              
        this.sliderImages.each(function (index){
            if(index == myIterator)
            {
                $(this).show();
            }
        });
    };
        return {
            //public members
            slide: slide,
            hideImages: hideImages
        };
}();

var imageIterator = function(){
    this.slider = new imageSlider();
    this.slider.hideImages();
    this.imageCount = this.slider.imageCount;
    this.currentIterator = 0;   
    this.buttonNav = new buttonNav();
    this.buttonNav.createButtons();
};

imageIterator.prototype = function(){
    var iterateImages = function(){
        if(this.currentIterator < this.imageCount )
        {
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
        }
        else
        {
            this.currentIterator = 0;
        }        
    },
    goToNum = function(id){
        var correctId = id -1;
        this.slider.hideImages();
        this.slider.slide(correctId);
        this.buttonNav.clearHighlight();
        this.buttonNav.highlightButton(id);   
        this.currentIterator = id -1; 
        iterateImages();      
    },
    addClicks = function ()
    {
        var slider = this.slider;
        var buttonNav = this.buttonNav;
        $(".imageButton a").click(function() {
                var numbers = $(this).text();
    			imageIterate.goToNum(numbers);  
            });
    };

    return {
        iterateImages: iterateImages,
        addClicks: addClicks,
        goToNum: goToNum

    };

}();


/* this will create the clickable buttons */
var buttonNav = function(){
    this.slider = new imageSlider();
    this.imageCount = this.slider.imageCount;
};

buttonNav.prototype = function(){
    var createButtons = function(){
        var imageNum = this.imageCount;  
        var slider = this.slider;                  
        $("#slider").append("<dl id='imageButtonList'>");
        for(var i=0;i<imageNum;i++)
        {
            var iteratorAdjust = i+1;
            $("#imageButtonList").append("<span class='imageButton'><a href='#'>"+iteratorAdjust+"</a></span>");
            
        }
       // $("#slider").append("</span>");
    },   
    clearHighlight = function(){
        $(".imageButton").css("background-color", "#efefef");
        $(".imageButton").children().css("color", "black");
    },
   highlightButton = function(buttonToHighlight){
       var highlightButton = $(".imageButton:contains('"+buttonToHighlight+"')");
       highlightButton.css("background-color", "#004990");
       highlightButton.children().css("color", "white");
   };

    return {
        createButtons: createButtons,
        highlightButton: highlightButton,
        clearHighlight: clearHighlight
    };

}();

var rotateInterval = 6000;
var thisInterval = setInterval(imagesRotateTimeout, rotateInterval);
var imageIterate = new imageIterator();
imagesRotateTimeout();

function imagesRotateTimeout()
{
    imageIterate.iterateImages();  
    imageIterate.addClicks();
}

