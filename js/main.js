
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
let modalBtn = document.querySelectorAll(".modalbtn");
let modalBg = document.querySelectorAll(".modal-bg");
let modalClose = document.querySelectorAll(".close");
for(let i = 0; i < 3 ; i++){
    modalBtn[i].addEventListener("click" , () =>{
        modalBg[i].classList.add("bg-active");
    });
}
for(let i = 0; i < 3; i++){
    modalClose[i].addEventListener("click" , () =>{
        modalBg[i].classList.remove("bg-active")
    });
    
}

