function letterCount(str, letter) {
    let counter = 0;
    str = str.toLowerCase();
    
    for ( let i = 0; i < str.length; i++ ) {
        if ( str[i] === letter) {
            counter += 1;
        }
    }
    return counter;
}

console.log(letterCount("Barry", "b"));
