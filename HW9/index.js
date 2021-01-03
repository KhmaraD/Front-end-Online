const lowerLimit = 10;
const upperLimit = 20;
const zeroDateFormat = 10;

// Task 1
function convert() {
    let arr = [];
    for ( let elem of arguments ) {
        if ( typeof elem === 'string') {
            arr.push(parseInt(elem));
        } else {
            arr.push('' + elem);
        }
    }
    return arr;
}

// Task 2
function executeforEach(arr, func) {
    for ( let elem of arr ) {
        func(elem);
    }
}

// Task 3
function mapArray(arr, func) {
    let result = [];
    executeforEach(arr, function(elem) {
        result.push(func(parseInt(elem)))
    });
    return result;
}

// Task 4
function filterArray(arr, func) {
    let result = [];
    executeforEach(arr, function(elem) {
        if ( func(elem) ) {
            result.push(elem);
        }
    });
    return result;
}

// Task 5
function containsValue(arr, value) {
    let result = false;
    executeforEach(arr, function(elem) {
        if (elem === value) {
            result = true;
        }
    });
    return result;
}

// Task 6
function flipOver(str) {
    let reverseStr = '';
    for ( let i = str.length-1; i >= 0; i-- ) {
        reverseStr += str[i];
    }
    return reverseStr;
}

// Task 7
function makeListFromRange(range) {
    let array = [];
    for ( let i = range[0]; i <= range[1]; i++ ) {
        array.push(i);
    }
    return array;
}

// Task 8
function getArrayOfKeys(arr, key) {
    let arrayKey = [];
    executeforEach(arr, function(elem) {
        arrayKey.push(elem[key]);
    });
    return arrayKey;
}

// Task 9
function substitute(arr) {
    let resultArr = [];
    mapArray(arr, function(elem) {
        if ( elem > lowerLimit && elem < upperLimit ) {
            resultArr.push('*');
        } else {
            resultArr.push(elem);
        }
    });
    return resultArr;
}

// Task 10
function getPastDay(inputDate, daysNumber) {
    let date = new Date(inputDate);
    date.setDate(inputDate.getDate() - daysNumber);
    return date.getDate();
}

// Task 11
function formatDate(date) {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    
    function zeroPad(num) {
        if (num < zeroDateFormat ) {
            return '0' + num;
        } else {
            return num;
        }
    }
    
    return `${year}/${zeroPad(month)}/${zeroPad(day)} ${zeroPad(hour)}:${zeroPad(minutes)}`;
}
