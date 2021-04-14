document.addEventListener("scroll", function(){
    const navbar = document.querySelector("header");
    navbar.classList.toggle("sticky", window.scrollY > 80);
});

const menuToggle = document.querySelector('.menu-toggle input');
const navs = document.querySelector('section');
const resTogg = document.querySelector('.menu-toggle');
menuToggle.addEventListener("click", function() {
    navs.classList.toggle('show');
    resTogg.classList.toggle('res-toggs');
});


$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        margin:10,
        responsive:{
            0:{
                loop:true,
                items:1
            },
            600:{
                loop:true,
                items:2
            },
            1000:{
                items:3
            }
        }
    });
  });