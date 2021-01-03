function isBigger(x, y) {
    return x > y;
}

function countPoints(gameResults) {
    return gameResults.reduce((totalPoints, current) => {
        if ( isBigger(current[0], current[2]) ) {
            totalPoints += 3;
        } else if ( current[0] === current[2] ) {
            totalPoints += 1;
        }
        return totalPoints;
    }, 0)
}

console.log(countPoints(['3:1', '1:0', '0:0', '1:2', '4:0', '2:3', '1:1', '0:1', '2:1', '1:0']));
