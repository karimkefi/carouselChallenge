var index = 1;
var start = true;
var arrow = "right";

function showImage(n) {
    var Images = document.getElementsByClassName("slideImg");
    var Caption = document.getElementsByClassName("imgCaption");

    if (n > Images.length) {
        index = 1;
    }

    if (n < 1) {
        index = Images.length;
    }

    //Set every image to hidden
    for (i=0; i < Images.length; i++) {
        Images[i].className = "slideImg hidden";
        Caption[i].className = "imgCaption hidden"
    }

    //what to do when images are sliding Right to Left
    if (arrow === "right") {
        if(start) {
                Images[index - 1].className             = "slideImg slideIN-RtoL";
                Caption[index - 1].className            = "imgCaption caption-In";
        } else {
            if(index === 1) {
                Images[Images.length - 1].className     = "slideImg slideOut-RtoL";
                Caption[Images.length - 1].className    = "imgCaption hidden";
                Images[index - 1].className             = "slideImg slideIN-RtoL";
                Caption[index - 1].className            = "imgCaption caption-In";
            } else {
                Images[index - 2].className             = "slideImg slideOut-RtoL";
                Caption[index - 2].className            = "imgCaption hidden";
                Images[index - 1].className             = "slideImg slideIN-RtoL";
                Caption[index - 1].className            = "imgCaption caption-In";
            }
        }
    }

    //what to do when images are sliding Left to Right
    if(arrow === "left") {
        if(start) {
                Images[index - 1].className             = "slideImg slideIN-LtoR";
                Caption[index - 1].className            = "imgCaption caption-In";

        } else {
            if(index === 5) {
                Images[Images.length - 1].className     = "slideImg slideIN-LtoR";
                Caption[Images.length - 1].className    = "imgCaption caption-In";
                Images[index - Images.length].className = "slideImg slideOut-LtoR";
                Caption[index - Images.length].className = "imgCaption hidden";
            } else {
                Images[index - 1].className             = "slideImg slideIN-LtoR";
                Caption[index - 1].className            = "imgCaption caption-In";
                Images[index].className                 = "slideImg slideOut-LtoR";
                Caption[index].className                = "imgCaption hidden";
            }
        }

    }

    start = false;
}

function timedSliding () {
    showImage(index);
    arrow = "right";
    index++;
}


document.getElementById("leftArrow").addEventListener("click", function (){
    index--;
    arrow = "left";
    showImage(index);
})

document.getElementById("rightArrow").addEventListener("click", function (){
    index++;
    arrow = "right";
    showImage(index);
})


function slideToTarget(targetIndex) {
    var target = targetIndex;

    if(index < target) {
        arrow = "right";
    }

    if(index > target) {
        arrow = "left";
    }
    index = target;
    showImage(index);
}


var elementHTMLCollection = document.getElementsByClassName("dot")
var elementArray = Array.from(elementHTMLCollection)

elementArray.forEach(function(element){

    var indextarget = element.getAttribute("data-slideTo")

    element.addEventListener("click", function (){
        slideToTarget(indextarget);
    })

})


setTimeout(timedSliding());
// setInterval(timedSliding,5000);
