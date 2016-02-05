var isValidClassName = require("./tests/isValidClassName"),
    notHTML = require("./errors/notHTML"),
    notClassName = require("./errors/notValidClassName"),
    hasClass = require("./tests/hasClass"),
    isElement = require("./tests/isElement");

/**
 * @method removeClass
 * @summary remove a CSS class from an HTMl element
 *
 * @param {string} c - className to add
 * @param {object} e - HTML element to affect
 * @returns {boolean} - whether the className has been removed or not (returns false if className wasn't present)
 */
module.exports = function removeClass(c, e) {
    if (!isElement(e)) {
        throw notHTML("addClass", e);
    }

    if (!isValidClassName(c)) {
        throw notClassName("addClass", c);
    }

    // if class name not present, stop
    if (hasClass(c, e)) {
        e.className = e.className.split(" ").filter(function(cl) {
            return cl !== c;
        }).reduce(function(pV, cV, i, a) {
            return (pV.length ? pV + " " : pV) + cV;
        }, "");

        return true;
    } else {
        return false;
    }
};
