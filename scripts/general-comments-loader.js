/**
 * Created by emran on 12/27/16.
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
    span.setAttribute('dir', 'rtl');
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
    span.setAttribute('dir', 'rtl');
    span.innerHTML = text;
    div1.appendChild(span);
    let h6 = emranHelper.newElement('h6', 'text-muted');
    h6.innerHTML = date;
    div1.appendChild(h6);

    let div2 = emranHelper.newDiv('col-md-2');
    item.appendChild(div2);
    let img = emranHelper.newElement('img', 'loading');
    img.setAttribute('src', avatarUrl);
    div2.appendChild(img);

    return item;
}