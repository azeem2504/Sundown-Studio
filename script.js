const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var elemC = document.querySelector("#elem-cont")
var fixed = document.querySelector("#fixed-image")
elemC.addEventListener("mouseenter", function(){
    fixed.style.display = "block";
})
elemC.addEventListener("mouseleave",function(){
    fixed.style.display = "none";
})
var elem = document.querySelectorAll("#elem")
elem.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var image = e.getAttribute("data-image")
        fixed.style.backgroundImage = `url(${image})`
    })
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 0,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

var loader = document.querySelector("#loader")
setTimeout(function(){
    loader.style.top = "-100%"
},4000)

var menu = document.querySelector("#menu")
var full = document.querySelector("#full-scr")
var imag = document.querySelector("nav img")
var flag = 0
menu.addEventListener("click", function (){
    if(flag == 0){
        full.style.top = 0
        imag.style.opacity = 0
        flag = 1
    }else{
        full.style.top = "-100%"
        imag.style.opacity = 1
        flag = 0
    }
})
  