/**
 * Created by emran on 12/24/16.
 */
$(document).ready(function () {

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
            let item = new MainCarouselItem(slide.title, slide.small_image);
            $("#main-carousel").append(item);
        }

        // New games carousel
        for (let newGame of homepage.new_games) {
            let item = new NewGameCarouselItem(newGame.title, newGame.categories.join('، '), Math.floor(newGame.rate), newGame.small_image);
            $("#new-games-carousel").append(item);
        }

        startCarousels();

        // Comments
        for (let comment of homepage.comments) {
            let item = new CommentItem(comment.text, comment.date, comment.player.avatar);
            $("#comments-div").append(item);
        }

        // Tutorials
        for (let tut of homepage.tutorials) {
            let item = new TutorialItem(tut.title, tut.date, tut.game.small_image);
            $("#tutorials-div").append(item);
        }

    });
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
    a.setAttribute('href', '#');

    let divItem = emranHelper.newDiv('item');
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

    let starsDiv = emranHelper.newDiv('stars-div');
    starsDiv.setAttribute('dir', 'rtl');
    detailsDiv.appendChild(starsDiv);

    let i = 0;
    for (; i < stars; i++) {
        let star = emranHelper.newElement('span', 'glyphicon glyphicon-star small-text blue-star');
        starsDiv.appendChild(star);
    }

    for (; i < totalStars; i++) {
        let star = emranHelper.newElement('span', 'glyphicon glyphicon-star small-text');
        starsDiv.appendChild(star);
    }

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

/**
 * <div class="row item">
 <div class="col-md-10">
 <span class="text-info small-text">بهترین بازی تمام عمرم</span><br/>
 <h6 class="text-muted">دوشنبه ۱۷ آبان ۹۵</h6>
 </div>
 <div class="col-md-2">
 <img class="round-img" src="images/421645.jpg"/>
 </div>
 </div>
 * @param text
 * @param date
 * @constructor
 */
function CommentItem(text, date, avatarUrl) {
    let item = emranHelper.newDiv('row item');

    let div1 = emranHelper.newDiv('col-md-10');
    item.appendChild(div1);
    let span = emranHelper.newElement('span', 'text-info small-text');
    span.innerHTML = text;
    div1.appendChild(span);
    let h6 = emranHelper.newElement('h6', 'text-muted');
    h6.innerHTML = date;
    div1.appendChild(h6);

    let div2 = emranHelper.newDiv('col-md-2');
    item.appendChild(div2);
    let img = emranHelper.newElement('img', 'round-img');
    img.setAttribute('src', avatarUrl);
    div2.appendChild(img);

    return item;
}

/**
 * <div class="row item">
 <div class="col-md-10">
 <span class="text-info small-text">بهترین بازی تمام عمرم</span><br/>
 <h6 class="text-muted">دوشنبه ۱۷ آبان ۹۵</h6>
 </div>
 <div class="col-md-2">
 <img src="images/421645.jpg"/>
 </div>
 </div>
 * @param text
 * @param date
 * @param avatarUrl
 * @return {Element}
 * @constructor
 */
function TutorialItem(text, date, avatarUrl) {
    let item = emranHelper.newDiv('row item');

    let div1 = emranHelper.newDiv('col-md-10');
    item.appendChild(div1);
    let span = emranHelper.newElement('span', 'text-info small-text');
    span.innerHTML = text;
    div1.appendChild(span);
    let h6 = emranHelper.newElement('h6', 'text-muted');
    h6.innerHTML = date;
    div1.appendChild(h6);

    let div2 = emranHelper.newDiv('col-md-2');
    item.appendChild(div2);
    let img = emranHelper.newElement('img');
    img.setAttribute('src', avatarUrl);
    div2.appendChild(img);

    return item;
}







