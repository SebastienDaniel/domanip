var notHTML = require("./errors/notHTML"),
    isElement = require("./tests/isElement");

function goUp(e, c) {
    if (c(e)) {
        return e;
    } else if (isElement(e.parentNode)) {
        return goUp(e.parentNode, c);
    }
}

/**
 * @method ascendUntil
 * @summary traverses the DOM by traveling up parentNodes until the provided condition returns true
 *
 * @param {object} e - HTML element to start with
 * @param {Function} c - condition test function which will recursively be called with an HTML element argument
 * @returns {object|undefined} node where condition is true, otherwise undefined
 */
module.exports = function ascendUntil(e, c) {
    if (!isElement(e)) {
        throw notHTML("ascendUntil", e);
    }

    if (typeof c !== "function") {
        throw TypeError("ascendUntil expects a callback function as second argument. Provided\n" + c + " (" + typeof c + ")");
    }

    return goUp(e, c);
};
