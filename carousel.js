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
            console.log('INDEX1:')
        Images[index - 1].className = "slideImg visibleImgIn";
            console.log('In: ' + index-1)
        Images[Images.length - 1].className = "slideImg visibleImgOut";
            console.log('Out: ' + Images.length - 1)
    } else {
            console.log('INDEX1:')
        Images[index - 1].className = "slideImg visibleImgIn";
            console.log('In: ' + index-1)
        Images[index - 2].className = "slideImg visibleImgOut";
            console.log('Out: ' + index-2)
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
