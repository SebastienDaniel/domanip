var isValidClassName = require("./tests/isValidClassName"),
    notHTML = require("./errors/notHTML"),
    notClassName = require("./errors/notValidClassName"),
    hasClass = require("./tests/hasClass"),
    isElement = require("./tests/isElement");

/**
 * @method addClass
 * @summary add a CSS class to an HTML element
 *
 * @param {string} c - className to add
 * @param {object} e - HTML element to affect
 * @returns {boolean} - whether the className has been added or not (returns false if className was already present)
 */
module.exports = function addClass(c, e) {
    if (!isElement(e)) {
        throw notHTML("addClass", e);
    }

    if (!isValidClassName(c)) {
        throw notClassName("addClass", c);
    }

    if (e.className && e.className.length > 0) {
        // does class already exist?
        if (hasClass(c, e)) {
            return false;
        } else {
            e.className += " " + c;
        }
    } else {
        e.className = c;
    }

    return true;
};
