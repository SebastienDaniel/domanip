var notHTML = require("./errors/notHTML"),
    isElement = require("./tests/isElement");

function goDown(e, c) {
    var children = e.children,
        res,
        i = 0;

    if (children.length) {
        // loop as long as res is falsey
        while (i < children.length && !!res) {
            if (isElement(children[i])) {
                res = goDown(children[i], c);
            }

            i++;
        }
    }

    return res;
}

/**
 * @method descendUntil
 * @summary traverses the DOM by traveling down childNodes, iteratively, until the provided condition returns true
 *
 * @param {object} e - HTML element to start with
 * @param {Function} c - condition test function which will recursively be called with an HTML element argument
 * @returns {object|undefined} node where condition is true, otherwise undefined
 */
module.exports = function descendUntil(e, c) {
    if (!isElement(e)) {
        throw notHTML("descendUntil", e);
    }

    if (typeof c !== "function") {
        throw TypeError("descendUntil expects a callback function as second argument. Provided\n" + c + " (" + typeof c + ")");
    }

    return goDown(e, c);
};
