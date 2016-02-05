module.exports = function hasClass(c, el) {
    return new RegExp("(?:^| )" + c + "(?:$| )").test(el.className);
};
