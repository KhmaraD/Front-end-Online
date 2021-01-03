function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randomNumber;
let choseNumber;
let totalPrize = 0;
let startPrize = 100;
let maxPrize = startPrize;
let prizeForRound;
let startNumberRange = 5;
let maxNumberRange = startNumberRange;
let replay = false;
let continueGame = false;
const maxAttempts = 3;
const rateIncrease = 5;
const rate = 2;
const exceptionZero = -1;

const play = confirm('Do you want to play a game?');

if ( play ) {
    do {    
        do {
            prizeForRound = maxPrize;
            randomNumber = getRandomIntInclusive(0, maxNumberRange);
                        
            for ( let round = maxAttempts; round > 0; ) {
                choseNumber = prompt('Choose a roulette pocket number from 0 to '
                    + maxNumberRange +
                    '\nAttempts left: ' + round + 
                    '\nTotal prize: ' + totalPrize + '$' +
                    '\nPossible prize on current attempt: ' +
                    prizeForRound + '$', '');
                
                if ( choseNumber === '' || choseNumber === null ) { 
                    choseNumber = exceptionZero;
                }
                
                if ( Number(choseNumber) === randomNumber ) {
                    round = 0;
                    totalPrize += prizeForRound;
                    alert('Congratulations! Your prize is: ' + prizeForRound +'$!');
                    continueGame = confirm('Do you want to continue?');
                } else {
                    round -= 1;
                    prizeForRound /= rate;
                    alert('You did not guess, the next attempt!');
                    continueGame = false;
                }
            }
            maxPrize *= rate;
            maxNumberRange += rateIncrease;
        } while ( continueGame === true);
        
        alert('Thank you for your participation. Your prize is: ' + totalPrize + '$!');
        replay = confirm('Do you want to play again?');
        maxPrize = startPrize;
        totalPrize = 0;
        maxNumberRange = startNumberRange;
    } while ( replay === true );
} else {
    alert('You did not become a billionaire, but can.');
}
