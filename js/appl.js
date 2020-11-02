var sliderWidth = document.querySelector(".slider").clientWidth
var sliderLength = document.querySelectorAll(".slider li").length
var sliderUl=document.querySelector(".slider ul")
sliderUl.style.width = sliderWidth * sliderLength + "px"
var next=document.querySelector(".next")
var prev=document.querySelector(".prev")

var c=0
prev.onclick=function(){
    clearInterval(myInterval)
    c--;
    if(c== -1){
        c=sliderLength-1;
    }
    sliderUl.style.left =-(c* sliderWidth)+"px"
}

next.onclick=function(){
    clearInterval(myInterval)
    nextSlider();
}
function nextSlider(){
    c++;
    if(c>=sliderLength){
        c=0
    }
    sliderUl.style.left=-(c*sliderWidth)+"px"
}
var myInterval= setInterval(function(){
    nextSlider();
},4000)