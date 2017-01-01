/**
 * Created by emran on 1/1/17.
 */
$.get('F95/games?q=' + emranHelper.getParameterByName('q'), function (data, status) {
    let response = checkResponse(data, status);
    if (!response)
        return;

    let games = response.result.games;

    let c3 = 0;
    let row;

    for (let g of games) {
        if (c3 % 3 == 0) {
            row = $('<div class="row"></div>');
            $('#content-div .col-md-6').append(row);
        }
        let gameItem = $('<a><div class="game-item" dir="ltr"><img src="http://cdn.zoomg.ir/2016/11/bf222635-75e2-4c6e-8635-9e5415dc9332.jpg"> <div class="item-details-div" dir="rtl"><h4 class="item-title">بازی Dishonored 2</h4><h4 class="item-category">تیراندازی، اول شخص، اکشن</h4> <div class="stars-div" dir="rtl"><span class="glyphicon glyphicon-star small-text blue-star"></span><span class="glyphicon glyphicon-star small-text blue-star"></span><span class="glyphicon glyphicon-star small-text blue-star"></span><span class="glyphicon glyphicon-star small-text blue-star"></span><span class="glyphicon glyphicon-star small-text"></span></div></div></div></a>')
        gameItem.find('img').attr('src', g.large_image);
        gameItem.find('.item-title').html(g.title);
        gameItem.find('.item-category').html(g.categories.join('، '));
        gameItem.attr('href', 'games.html?game=' + g.title);
        setStars(gameItem.find('.glyphicon-star'), g.rate, 'blue-star', '');

        row.append(gameItem);
        c3++;
    }
});

/**
 * Parses and returns the server response. if a problem found, returns null.
 * @param data
 * @param status
 * @return {*}
 */
function checkResponse(data, status) {
    if (status !== 'success') {
        alert('مشکل در ارتباط با سرور');
        return null;
    }

    let response = JSON.parse(data).response;

    if (!response.ok) {
        alert('مشکل در بارگذازی صفحه');
        return null;
    }

    return response;
}


function setStars(starElements, value, activeClass = 'gold_star', passiveClass = 'light_gray_star') {
    let i;
    for (i = 0; i < value; i++) {
        $(starElements[i]).removeClass(passiveClass);
        $(starElements[i]).addClass(activeClass);
    }

    for (; i < starElements.length; i++) {
        $(starElements[i]).removeClass(activeClass);
        $(starElements[i]).addClass(passiveClass);
    }

}