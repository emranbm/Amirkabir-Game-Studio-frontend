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

        for (let slide of homepage.slider) {
            let item = new MainCarouselItem(slide.title, slide.small_image);
            $("#main-carousel").append(item);
        }

        startCarousels();
    });
});

////

/**
 *
 <div class="item">
 <img src="imagePath">
 <h4 dir="rtl" class="stick-bottom">title</h4>
 </div>
 * @param title
 * @param imagePath
 * @return {Element}
 * @constructor
 */
function MainCarouselItem(title, imagePath) {
    let item = emranHelper.newDiv('item');
    let img = emranHelper.newElement('img');
    img.setAttribute('src', imagePath);
    item.appendChild(img);
    let h4 = emranHelper.newElement('h4', 'stick-bottom');
    h4.setAttribute('dir', 'rtl');
    h4.innerHTML = title;
    item.appendChild(h4);

    // let owlItem = emranHelper.newDiv('owl-item cloned', )

    return item;
}

function carouselAddItem(carousel, content, position) {
    // prepare content
    // content = carousel.prepare(content);
    position = position === undefined ? carousel._items.length : carousel.normalize(position, true);

    carousel.trigger('add', {content: content, position: position});

    if (carousel._items.length === 0 || position === this._items.length) {
        carousel.$stage.append(content);
        carousel._items.push(content);
        carousel._mergers.push(content.find('[data-merge]').andSelf('[data-merge]').attr('data-merge') * 1 || 1);
    } else {
        carousel._items[position].before(content);
        carousel._items.splice(position, 0, content);
        carousel._mergers.splice(position, 0, content.find('[data-merge]').andSelf('[data-merge]').attr('data-merge') * 1 || 1);
    }

    carousel.invalidate('items');

    carousel.trigger('added', {content: content, position: position});
};

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