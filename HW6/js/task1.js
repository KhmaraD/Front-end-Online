function isInteger(num) {
  return (num ^ 0) === num;
}

let flag = true;
let tipAmount, totalSum;
const hundered = 100;
const decimalPlaces = 2;

const checkNumber = Number(prompt('Enter the check amount'));
const tipPercentage = Number(prompt('Enter Tip Percentage'));

if ( !(isFinite(checkNumber) && isFinite(tipPercentage)) ) {
    flag = false;
} else if ( tipPercentage < 0 || tipPercentage > hundered ) {
    flag = false;
} else if ( checkNumber < 0 ) {
    flag = false;
}

if ( flag ) {
    tipAmount = checkNumber * tipPercentage / hundered;
    totalSum = parseFloat(checkNumber) + parseFloat(tipAmount);
    if ( !isInteger(tipAmount) ) {
        tipAmount = tipAmount.toFixed(decimalPlaces);
    }
    if ( !isInteger(totalSum) ) {
        totalSum = totalSum.toFixed(decimalPlaces);
    }
    alert('Check number: ' + checkNumber + '\n' +
        'Tip: ' + tipPercentage + '%\n' + 
        'Tip amount: ' + tipAmount + '\n' + 
        'Total sum to pay: ' + totalSum);
} else {
    alert('Invalid input data');
}
