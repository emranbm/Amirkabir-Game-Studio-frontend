/**
 * Created by emran on 12/30/16.
 */

window.starRating = {};

starRating.starRatingElement = (value, total = 5, starsDiv) => {
    if (!starsDiv)
        starsDiv = emranHelper.newDiv();

    if (starsDiv.className)
        starsDiv.className += ' stars-div2';
    else
        starsDiv.className = 'stars-div';

    starsDiv.setAttribute('dir', 'rtl');

    let i = 0;
    for (; i < value; i++) {
        let star = emranHelper.newElement('span', 'glyphicon glyphicon-star small-text blue-star');
        starsDiv.appendChild(star);
    }

    for (; i < total; i++) {
        let star = emranHelper.newElement('span', 'glyphicon glyphicon-star small-text');
        starsDiv.appendChild(star);
    }

    return starsDiv;
};