
var hamburger =document.querySelector(".hamburger");
var ul =document.querySelector(".navbar-nav1");
var li = document.querySelectorAll(".opacityItem");
var line1 = document.querySelector("#line1");
var line2 = document.querySelector("#line2");
var line3 = document.querySelector("#line3");

hamburger.addEventListener("click" , function(){
    ul.classList.toggle("open-nav");

    li.forEach( link => {
        link.classList.toggle("fade");
    });

    line1.classList.toggle("hover");
    line2.classList.toggle("hover");
    line3.classList.toggle("hover");
});


// slick modal
$(document).ready(function(){
    $('.slider').slick({
        dots:false,
        arrows:true,
        speed:1500,
        infinite: true,
        // autoplay:true,
        slideToShow:1,
        fade: true,
        autoplaySpeed:500,
        prevArrow: '<button type="button" class="prev"><i class="fas fa-chevron-left"></i></button>',
	    nextArrow: '<button type="button" class="next"><i class="fas fa-chevron-right"></i></button>'
    });
});


// modal btn

var modalBtn = document.querySelector(".modalbtn");
var modalBg = document.querySelector(".modal-bg");
var modalClose = document.querySelector(".close");

this.modalBtn.addEventListener("click" , () =>{
      modalBg.classList.add("bg-active");
});

this.modalClose.addEventListener("click" , ()=> {
    modalBg.classList.remove("bg-active");
});