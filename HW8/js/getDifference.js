function isBigger(x, y) {
    return x > y;
}

function getDifference(a, b) {
    if (isBigger(a, b)) {
        return a - b;
    } else {
        return b - a;
    }
}

console.log(getDifference(5, 3));
