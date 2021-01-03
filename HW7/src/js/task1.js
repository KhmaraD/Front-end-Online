const minSymbols = 4;
const hours = new Date().getHours();
const eveningTime = 20;
const morningTime = 8;

const login = prompt('Enter your login');

if ( login === '' || login === null ) {
    alert('Canceled.');
} else if ( login.length < minSymbols ) {
    alert('I don\'t know any users having name length less than 4 symbols');
} else if ( login.length >= minSymbols ) {

    if ( login === 'Admin' || login === 'User' ) {
        const password = prompt('Enter your password');
        
        if ( password === '' ) {
            alert('Canceled.');
        } else if ( login === 'Admin' && password === 'RootPass') {
            if ( hours < eveningTime && hours > morningTime ) {
                alert('Good day, dear Admin!');
            } else {
                alert('Good evening, dear Admin!');
            }
        } else if ( login === 'User' && password === 'UserPass') {
            if ( hours < eveningTime && hours > morningTime ) {
                alert('Good day, dear User!');
            } else {
                alert('Good evening, dear User!');
            }
        } else {
            alert('Wrong password!');
        }
    } else {
        alert('I don’t know you');
    }   
}