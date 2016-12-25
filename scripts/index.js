/**
 * Created by emran on 12/24/16.
 */
$(document).ready(function () {
    let mainCarousel = $('#main-carousel');
    mainCarousel.owlCarousel({
        loop: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
                dots: false
            },
            600: {
                items: 3,
                nav: false,
                dots: false
            },
            1000: {
                items: 6,
                loop: true,
                dots: false
            }
        }
    });

    let newGamesCarousel = $('#new-games-carousel');
    newGamesCarousel.owlCarousel({
        responsiveClass: true,
        margin: 15,
        responsive: {
            0: {
                items: 1,
                nav: true,
                dots: true
            },
            600: {
                items: 2,
                nav: true,
                dots: true
            },
            1000: {
                items: 4,
                loop: false,
                dots: true
            }
        }
    });

    // $.get("http://api.ie.ce-it.ir/F95/home", function(data, status){
    //     alert("Data: " + data + "\nStatus: " + status);
    // });
});