var index = 1;

function showImage(n) {
    var Images = document.getElementsByClassName("slideImg");

    if (n > Images.length) {
        index = 1;
    }

    if (n < 1) {
        index = Images.length;
    }

    for (i=0; i < Images.length; i++) {
        Images[i].className ="slideImg hiddenImg";
    }

    Images[index -1].className = "slideImg visibleImg";
}


function timedSliding () {
    index++;
    showImage(index);
}


function slideRight(ElementID) {

}

function slideLeft(ElementID) {

}


document.getElementById("leftArrow").addEventListener("click", function (){
    index--;
    showImage(index);
})

document.getElementById("rightArrow").addEventListener("click", function (){
    index++;
    showImage(index);
})


setInterval(timedSliding,3000);
