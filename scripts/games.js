/**
 * Created by emran on 12/27/16.
 */

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

const GAME_TITLE = emranHelper.getParameterByName('game');

$.get("F95/games/" + GAME_TITLE + '/header', function (data, status) {

    let response = checkResponse(data, status);
    if (!response)
        return;

    let game = response.result.game;

    $('#game-title').html(game.title);
    $('#rate-label').html(persianizer.reshapeNums(Number.parseFloat(game.rate)));
    $('#raters-label').html(persianizer.reshapeNums(game.number_of_comments));
    $('#header-img').attr('src', game.small_image);
    $('header').css('background', "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('" + game.large_image + "') center center no-repeat");
    $('#game-genre').html(game.categories.join('، '));
    starRating.starRatingElement(Math.round(game.rate), 5, $('#rate-star-div')[0]);

    infoTabClick(null);
});

function infoTabClick(e) {
    if (infoTabClick.cache)
        return $('.tab-content').html(infoTabClick.cache);

    $.get("F95/games/" + GAME_TITLE + "/info", function (data, status) {
        let response = checkResponse(data, status);
        if (!response)
            return;

        infoTabClick.cache = response.result.game.info;
        infoTabClick(e);
    })
}








