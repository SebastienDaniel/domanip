var notHTML = require("./errors/notHTML"),
    hasClass = require("./tests/hasClass"),
    addClass = require("./addClass"),
    removeClass = require("./removeClass"),
    isElement = require("./tests/isElement");

/**
 * @method toggleClass
 * @summary Toggles the provided className based on following conditions:
 *
 *  - if className present on element, replace it with second provided className, otherwise remove it
 *  - if className not present on element, add it
 *  - if second className present on element, replace it with first className
 * @param {string} c1 - first className to toggle (add, remove or replace if c2 provided)
 * @param {Element} e - HTML element to affect
 * @param {string} [c2] - second className to use in replacement of c1 or to be replaced by c1
 * @returns {boolean} - success of operation
 */
module.exports = function swapClass(c1, e, c2) {
    var hasC1,
        hasC2;

    if (!c1 || typeof c1 !== "string") {
        throw Error("swapClass expects a string className. Provided\n" + c1 + " (" + typeof c1 + ")");
    }

    if (!isElement(e)) {
        throw notHTML("swapClass", e);
    }

    hasC1 = hasClass(c1, e);
    hasC2 = hasClass(c2, e);

    // if both class names are on element
    if (hasC1 && hasC2) {
        throw new Error("toggleClass cannot toggle when both class names are present on element. \nclasses: " + e.className + "\ntoggling:" + c1 + ", " + c2 + "\nelement: " + e);
    }

    // if c1, toggle it
    if (hasC1) {
        if (c2) {
            // replace with that, else remove class
            e.className = e.className.replace(c1, c2);
        } else {
            removeClass(c1, e);
        }

        return true;
    }

    // if c2, toggle it
    if (hasC2) {
        if (c1) {
            // replace with that, else remove class
            e.className = e.className.replace(c2, c1);
        } else {
            removeClass(c1, e);
        }

        return true;
    }

    // if neither class present, add first class
    if (!hasC1 && !hasC2) {
        addClass(c1, e);
        return true;
    }
};
