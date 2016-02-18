module.exports = function getElementPosition(e) {
    var xPosition = 0,
        yPosition = 0;

    if (typeof e !== "object" || e.nodeType !== 1) {
        throw TypeError("getElementPosition expects HTMl element as argument. Provided\n" + e + " (" + typeof e + ")");
    }

    while (e) {
        xPosition += (e.offsetLeft - e.scrollLeft + e.clientLeft);
        yPosition += (e.offsetTop - e.scrollTop + e.clientTop);
        e = e.offsetParent;
    }
    return { x: xPosition, y: yPosition };
};
