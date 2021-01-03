const str = prompt('Enter the word');
const two = 2;

let len = str.length;
let index = Math.floor(len / two);

if ( len === 0 || isFinite(str) ) {
    alert('Invalid value');
} else if ( len === 1 || len === two ) {
    alert(str);
} else if ( len % two !== 0 ) {
    alert(str.charAt(index));
} else {
    let preIndex = index - 1;
    alert(str.charAt(preIndex) + str.charAt(index));
}
