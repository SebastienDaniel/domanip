module.exports = function notHTML(func, el) {
    func = func || "notHTML";

    return new TypeError(func + " expected an HTML element\nProvided: " + el + " (" + typeof el + ")");
};
