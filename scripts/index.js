/**
 * Created by emran on 12/24/16.
 */
$(document).ready(function () {
    let carousel = $('.owl-carousel');
    carousel.owlCarousel({
        loop:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true,
                dots:false
            },
            600:{
                items:3,
                nav:false,
                dots:false
            },
            1000:{
                items:6,
                loop:true,
                dots:false
            }
        }
    });
});