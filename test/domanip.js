(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.domanip = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * @summary add a CSS class to an HTML element
 *
 * @param c className to add
 * @param e targeted HTML element
 * @returns {string} - the new className of the element
 * true if a change occurred <br/>
 * false if class (c) was already present
 */
var isValidClassName = require("./tests/isValidClassName"),
    notHTML = require("./errors/notHTML"),
    notClassName = require("./errors/notValidClassName"),
    hasClass = require("./tests/hasClass"),
    isElement = require("./tests/isElement");

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

},{"./errors/notHTML":4,"./errors/notValidClassName":5,"./tests/hasClass":8,"./tests/isElement":9,"./tests/isValidClassName":10}],2:[function(require,module,exports){
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
 * traverses the DOM by traveling up parentNodes until the provided condition returns true
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

},{"./errors/notHTML":4,"./tests/isElement":9}],3:[function(require,module,exports){
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
 * traverses the DOM by traveling down childNodes, iteratively, until the provided condition returns true
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

},{"./errors/notHTML":4,"./tests/isElement":9}],4:[function(require,module,exports){
module.exports = function notHTML(func, el) {
    func = func || "notHTML";

    return new TypeError(func + " expected an HTML element\nProvided: " + el + " (" + typeof el + ")");
};

},{}],5:[function(require,module,exports){
module.exports = function notValidClassName(func, name) {
    func = func || "notValidClassName";

    return new TypeError(func + " expected a HTML class name\nProvided invalid class: " + name + " (" + typeof name + ")");
};

},{}],6:[function(require,module,exports){
// Common Tasks (ct) library
/**
 * @namespace utilities
 * @type {object}
 */

// public API
module.exports = {
    addClass: require("./addClass"),
    removeClass: require("./removeClass"),
    toggleClass: require("./toggleClass"),
    ascendUntil: require("./ascendUntil"),
    descendUntil: require("./descendUntil")
};

},{"./addClass":1,"./ascendUntil":2,"./descendUntil":3,"./removeClass":7,"./toggleClass":11}],7:[function(require,module,exports){
/**
 * @summary remove a CSS class from an HTMl element
 *
 * @param c className to add
 * @param e targeted HTML element
 * @returns {boolean}
 * true if a change occurred <br/>
 * false if class (c) was not present
 */
var isValidClassName = require("./tests/isValidClassName"),
    notHTML = require("./errors/notHTML"),
    notClassName = require("./errors/notValidClassName"),
    hasClass = require("./tests/hasClass"),
    isElement = require("./tests/isElement");

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

},{"./errors/notHTML":4,"./errors/notValidClassName":5,"./tests/hasClass":8,"./tests/isElement":9,"./tests/isValidClassName":10}],8:[function(require,module,exports){
module.exports = function hasClass(c, el) {
    return new RegExp("(?:^| )" + c + "(?:$| )").test(el.className);
};

},{}],9:[function(require,module,exports){
/**
 * @memberof utilities
 * @summary checks if the provided object is an HTMLelement
 * @param o {object}
 * @returns {boolean}
 */
module.exports = function isHTMLElement(o) {
    return typeof o === "object" && o.nodeType === 1;
};

},{}],10:[function(require,module,exports){
/**
 * @summary checks if the provided string is a valid CSS class name
 * @param str {string} string to test against
 * @returns {boolean} result of the test
 */
module.exports = function isValidClassName(str) {
    return new RegExp("^[a-zA-Z]+[0-9a-zA-Z\-\_]*$").test(str);
};

},{}],11:[function(require,module,exports){
/**
 * adds, removes or replaces a className from an element
 */
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

},{"./addClass":1,"./errors/notHTML":4,"./errors/notValidClassName":5,"./removeClass":7,"./tests/hasClass":8,"./tests/isElement":9,"./tests/isValidClassName":10}]},{},[6])(6)
});