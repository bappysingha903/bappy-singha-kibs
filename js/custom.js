 $(function () {



     //     navbar js
     $(".navbutton").on('click', function () {
         $(this).toggleClass("active");
     });



     $(".navbutton").on('click', function () {
         $(".side_nav").toggleClass("nav_active");
     });




     //     slick slider
     $('.get_banners').slick({
         autoplay: true,
         autoplaySpeed: 2000,
         arrows: true,
         dots: true,
         nextArrow: '.right_angle',
         prevArrow: '.left_angle'
     });

     //     client slider

     $('.client_slider').slick({
         autoplay: true,
         arrows: false,
         dots: true,
         infinite: true,
         speed: 500,
         fade: true,
         cssEase: 'linear'

     });


     //    mixitup js

     var mixer = mixitup('.mixitup_gal');


     /*=================================
        .......PRELOADER JS.......
    ===================================*/

     $(window).on('load', function (event) {
         $('.preloader').delay(2000).fadeOut(1000);
     });




     //smooth scroll
     var scroll = new SmoothScroll('a[href*="#"]', {
         speed: 2000,
         speedAsDuration: true,
     });


     //     sticky menu
     $(window).on('scroll', function (event) {
         var scroll = $(window).scrollTop();
         if (scroll < 100) {
             $(".sticky-top").removeClass("navcss");
         } else {
             $(".sticky-top").addClass("navcss");
         }
     });

     //    BACK TO TOP BUTTON


     $(window).on('scroll', function (event) {
         if ($(this).scrollTop() > 1000) {
             $('.back-to-top').fadeIn(200)
         } else {
             $('.back-to-top').fadeOut(200)
         }
     });
     $('.back-to-top').on('click', function (event) {
         event.preventDefault();

         $('html, body').animate({
             scrollTop: 0,
         }, 2000);
     });


 });
