var ImageRotator = function () {
    
    var sliderImages = document.getElementById("slider");
    
    if (sliderImages)
    {
        this.dlArray = sliderImages.getElementsByTagName("dl");
        this.numSliderImages  = this.dlArray.length;
    }
};

ImageRotator.prototype = function () {
    
    var hideAllImages = function () {
        var i=0;
        console.log(this.numSliderImages);
        while(i<this.numSliderImages)
        {
            this.dlArray[i].style.display = "none";
            i++;
        }
    };
    
    return {
        hideAllImages: hideAllImages
    };
}();
    
    
var thisrotator = new ImageRotator();
thisrotator.hideAllImages();
​