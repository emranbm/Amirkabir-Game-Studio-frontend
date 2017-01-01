/**
 * Created by emran on 12/24/16.
 */
$.get("F95/home", function (data, status) {
    if (status !== 'success') {
        alert('مشکل در ارتباط با سرور');
        return;
    }

    let response = JSON.parse(data).response;

    if (!response.ok) {
        alert('مشکل در بارگذازی صفحه');
        return;
    }

    let homepage = response.result.homepage;

    // Main carousel
    for (let slide of homepage.slider) {
        let item = new MainCarouselItem(slide.title, slide.large_image);
        $("#main-carousel").append(item);
    }

    // New games carousel
    for (let newGame of homepage.new_games) {
        let item = new NewGameCarouselItem(newGame.title, newGame.categories.join('، '), Math.floor(newGame.rate), newGame.small_image);
        $("#new-games-carousel").append(item);
    }

    startCarousels();

});

////

/**
 *
 <div class="item">
 <img src="imageUrl">
 <h4 dir="rtl" class="stick-bottom">title</h4>
 </div>
 * @param title
 * @param imageUrl
 * @return {Element}
 * @constructor
 */
function MainCarouselItem(title, imageUrl) {
    let item = emranHelper.newDiv('item');
    let img = emranHelper.newElement('img');
    img.setAttribute('src', imageUrl);
    item.appendChild(img);
    let h4 = emranHelper.newElement('h4', 'stick-bottom');
    h4.setAttribute('dir', 'rtl');
    h4.innerHTML = title;
    item.appendChild(h4);

    // let owlItem = emranHelper.newDiv('owl-item cloned', )

    return item;
}

/**
 * <a href="#">
 <div dir="ltr" class="item">
 <img src="images/grand-theft-auto-five-game-wallpapers-dekstop-backgrounds.jpg">
 <div class="item-details-div">
 <h4 class="item-title">GTA V</h4>
 <h4 class="item-category">ورزشی، فوتبال</h4>
 <div dir="rtl" class="stars-div">
 <span class="glyphicon glyphicon-star small-text blue-star"></span>
 <span class="glyphicon glyphicon-star small-text blue-star"></span>
 <span class="glyphicon glyphicon-star small-text blue-star"></span>
 <span class="glyphicon glyphicon-star small-text"></span>
 <span class="glyphicon glyphicon-star small-text"></span>
 </div>
 </div>
 </div>
 </a>
 * @constructor
 */
function NewGameCarouselItem(title, category, stars, imageUrl, totalStars = 5) {
    let a = emranHelper.newElement('a');
    a.setAttribute('href', 'games.html?game=' + title);

    let divItem = emranHelper.newDiv('game-item');
    divItem.setAttribute('dir', 'ltr');
    a.appendChild(divItem);

    let img = emranHelper.newElement('img');
    img.setAttribute('src', imageUrl);
    divItem.appendChild(img);

    let detailsDiv = emranHelper.newDiv('item-details-div');
    detailsDiv.setAttribute('dir', 'rtl');
    divItem.appendChild(detailsDiv);

    let h4Title = emranHelper.newElement('h4', 'item-title');
    h4Title.innerHTML = title;
    detailsDiv.appendChild(h4Title);

    let h4Category = emranHelper.newElement('h4', 'item-category');
    h4Category.innerHTML = category;
    detailsDiv.appendChild(h4Category);

    let starsDiv = starRating.starRatingElement(stars, totalStars);
    detailsDiv.appendChild(starsDiv);

    return a;

}

function startCarousels() {
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
    let Owl = mainCarousel.owlCarousel({
        loop: true,
        responsiveClass: true,
        animateOut: true,
        autoplay: true,
        animateInClass: true,
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
}







