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
                Images[index ].className            = "slideImg slideOut-LtoR";
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


//add event listener for the dots similar to the above arrow click
//slide should jump to the Index = dot's n


document.getElementById("dot2").addEventListener("click", function (){
    index = 3;
    showImage(index);
})

setTimeout(timedSliding());
// setInterval(timedSliding,1000);
