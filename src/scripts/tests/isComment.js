/**
 * @memberof utilities
 * @summary checks if the provided object is an HTMLelement
 * @param o {object}
 * @returns {boolean}
 */
module.exports = function isHTMLElement(o) {
    return typeof o === "object" && o.nodeType === 8;
};
