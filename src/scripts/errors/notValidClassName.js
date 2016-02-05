module.exports = function notValidClassName(func, name) {
    func = func || "notValidClassName";

    return new TypeError(func + " expected a HTML class name\nProvided invalid class: " + name + " (" + typeof name + ")");
};
