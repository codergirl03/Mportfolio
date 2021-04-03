
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
