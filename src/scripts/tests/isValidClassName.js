/**
 * @summary checks if the provided string is a valid CSS class name
 * @param str {string} string to test against
 * @returns {boolean} result of the test
 */
module.exports = function isValidClassName(str) {
    return new RegExp("^[a-zA-Z]+[0-9a-zA-Z\-\_]*$").test(str);
};
