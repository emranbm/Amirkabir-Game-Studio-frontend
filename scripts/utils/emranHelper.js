/**
 * Created by emran on 12/27/16.
 */

window.emranHelper = {};

/**
 * Removes the given class from the element.
 * @param element
 * @param className
 */
emranHelper.removeClass = (element, className) => {
    if (element.removeClass)
        element.removeClass(className);
    else
        element.className = element.className.replace(new RegExp(className + "| " + className + "|" + className + " "), "")
};

/**
 * Determines whether an element has a particular class or not.
 * @param element
 * @param className
 * @returns {boolean} True if the element has the given class. False otherwise.
 */
emranHelper.hasClass = (element, className) => {
    // console.log(element.id + "###" + element.className + " has the class " + className + " ::: " + new RegExp(className).test(element.className));
    let elementClassName = element.attr ? element.attr('class') : element.className;
    return new RegExp(className).test(elementClassName);
};

/**
 * A helper function to create an element in a single line.
 * @param tagName
 * @param className
 * @param id
 * @returns {Element}
 */
emranHelper.newElement = (tagName, className, id) => {
    let element = document.createElement(tagName);
    if (className)
        element.className = className;
    if (id)
        element.id = id;

    return element;
};

/**
 * Creates a div element having the given class and id.
 * @param className
 * @param id
 * @returns {Element}
 */
emranHelper.newDiv = (className, id) => {
    return emranHelper.newElement('div', className, id);
};

emranHelper.getParameterByName = (name, url) => {
    if (!url) {
        url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
};