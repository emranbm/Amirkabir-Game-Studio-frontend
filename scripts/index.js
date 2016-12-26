/**
 * Created by emran on 12/24/16.
 */
$(document).ready(function () {

    let newGamesCarousel = $('#new-games-carousel');
    newGamesCarousel.owlCarousel({
        responsiveClass: true,
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


    $.get("F95/home", function (data, status) {
        if (status !== 'success') {
            alert('مشکل در ارتباط با سرور');
            return;
        }

        let response = JSON.parse(data).response;

        if (!response.ok) {
            alert('مشکل در بارگذازی صفحه')
            return;
        }

        //TODO work with response
    });
});