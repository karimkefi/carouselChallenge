var index = 1;

function showImage(n) {
    var Images = document.getElementsByClassName("slideImg");

    console.log('Index: ' + index);

    if (n > Images.length) {
        index = 1;
    }

    if (n < 1) {
        index = Images.length;
    }

    for (i=0; i < Images.length; i++) {
        Images[i].className ="slideImg hiddenImg";
    }

    if(index === 1) {
        console.log('here i am')
        Images[index - 1].className = "slideImg visibleImgIn";
        Images[Images.length - 1].className = "slideImg visibleImgOut";
    } else {
        Images[index - 1].className = "slideImg visibleImgIn";
        Images[index - 2].className = "slideImg visibleImgOut";
    }

}

function timedSliding () {
    index++;
    showImage(index);
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
