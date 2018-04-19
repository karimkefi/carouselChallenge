var index = 1;
var start = true;
var arrow = "right"

function showImage(n) {
    var Images = document.getElementsByClassName("slideImg");

    if (n > Images.length) {
        index = 1;
    }

    if (n < 1) {
        index = Images.length;
    }

    //Set every image to hidden
    for (i=0; i < Images.length; i++) {
        Images[i].className ="slideImg hiddenImg";
    }

    console.log('Function before If Index: ' + index);
    console.log(arrow)
    console.log('Start:' + start)

    //what to do when images are sliding Right to Left
    if (arrow === "right") {
        if(start) {
            Images[index - 1].className = "slideImg slideIN-RtoL";
            console.log('In (R to L): ' + (index-1));
        } else {
            if(index === 1) {
                Images[Images.length - 1].className = "slideImg slideOut-RtoL";
                console.log('Out (R to L): ' + (Images.length-1));
                Images[index - 1].className         = "slideImg slideIN-RtoL";
                console.log('In (R to L): ' + (index-1));
            } else {
                Images[index - 2].className         = "slideImg slideOut-RtoL";
                console.log('Out (R to L): ' + (index-2));
                Images[index - 1].className         = "slideImg slideIN-RtoL";
                console.log('In (R to L): ' + (index-1));
            }
        }
    }

    //what to do when images are sliding Left to Right
    if(arrow === "left") {
        if(start) {
            Images[index - 1].className = "slideImg slideIN-LtoR";
            console.log('In (L to R): ' + (index-1));
        } else {
            if(index === 5) {
                Images[Images.length - 1].className = "slideImg slideIN-LtoR";
                console.log('In (L to R): ' + (Images.length-1));
                Images[index - Images.length].className         = "slideImg slideOut-LtoR";
                console.log('Out (L to R): ' + (index));
            } else {
                Images[index - 1].className         = "slideImg slideIN-LtoR";
                console.log('In (L to R): ' + (index-1));
                Images[index].className            = "slideImg slideOut-LtoR";
                console.log('Out (L to R): ' + (index));
            }
        }

    }

    start = false;
}

function timedSliding () {
    showImage(index);
    // index++;
}


document.getElementById("leftArrow").addEventListener("click", function (){
    index--;
    arrow = "left"
    showImage(index);
})

document.getElementById("rightArrow").addEventListener("click", function (){
    index++;
    arrow = "right"
    showImage(index);
})



function slideToTarget(targetIndex) {
    var target = targetIndex;

    if(index < target) {
        arrow = "right";
    }

    if(index > target) {
        arrow = "left"
    }
    index = target;

    console.log('target = ' + target)
    console.log('index = ' + index)
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
// setInterval(timedSliding,1000);
