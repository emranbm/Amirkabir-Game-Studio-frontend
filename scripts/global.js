/**
 * Created by emran on 11/11/16.
 */
window.onload = function () {

    var elements = document.getElementsByClassName("text-box");

    for (var i = 0; i < elements.length; i++) {
        (function a(i) {
            elements[i].onfocus = function () {
                elements[i].previousElementSibling.style.color = "#E03A72";
            };

            elements[i].addEventListener('focusout', function () {
                elements[i].previousElementSibling.style.color = "#5e5e5c";
            });
        })(i);
    }
};