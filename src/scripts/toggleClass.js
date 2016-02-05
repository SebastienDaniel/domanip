var isValidClassName = require("./tests/isValidClassName"),
    notHTML = require("./errors/notHTML"),
    notClassName = require("./errors/notValidClassName"),
    hasClass = require("./tests/hasClass"),
    addClass = require("./addClass"),
    removeClass = require("./removeClass"),
    isElement = require("./tests/isElement");

module.exports = function swapClass(c1, e, c2) {
    if (!isElement(e)) {
        throw notHTML("addClass", e);
    }

    if (!isValidClassName(c1)) {
        throw notClassName("addClass", c1);
    }

    if (!isValidClassName(c2)) {
        throw notClassName("addClass", c2);
    }

    // if class is present
    if (hasClass(c1, e)) {
        // if replacement class provided, replace with that, else remove class
        if (c2) {
            e.className = e.className.replace(c1, c2);
        } else {
            removeClass(c1, e);
        }

        return true;
    } else {
        addClass(c1, e);
        return false;
    }
};
