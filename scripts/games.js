/**
 * Created by emran on 12/27/16.
 */
$.get("F95/games/" + emranHelper.getParameterByName('game') + '/header', function (data, status) {
    if (status !== 'success') {
        alert('مشکل در ارتباط با سرور');
        return;
    }

    let response = JSON.parse(data).response;

    if (!response.ok) {
        alert('مشکل در بارگذازی صفحه');
        return;
    }

    let game = response.result.game;

    $('#game-title').html(game.title);
    $('#rate-label').html(persianizer.reshapeNums(Number.parseFloat(game.rate)));
    $('#raters-label').html(persianizer.reshapeNums(game.number_of_comments));
    $('#header-img').attr('src', game.small_image);
    $('header').css('background-img', game.large_image);
    $('#game-genre').html(game.categories.join('، '));
    starRating.starRatingElement(Math.round(game.rate), 5, $('#rate-star-div')[0]);
});