/* 
GAME RULES:
/**
 * Change the game to follow these rules:
 * 1. A player losses his ENTIRE score when he rolls two 6 in a row. after that, its the next players turn (Hint: Always save the previous dice roll in a seperate variable ) 
 * 2. Add an input field to the html where players can set the winning score, so that they can change the predefined score of 100(Hint: you can read that value with .value property in javaSCript.)
 * 3. Add another dice to the game to the game so that there are two dices now. The player looses his current score whwn one of them ia a 1(Hint: you will need css to position the second dice so take a look at the CSS code for the first one )
 */

var scores, roundScore, activePlayer, gamePlaying;

init();
var lastDice;

document.querySelector('.dice').style.display = 'none'; 

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.querySelector('.btn-roll').addEventListener('click', function() {
    if (gamePlaying) {
        // 1. Random number 
    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;

    //2. Display the result 
    document.getElementById('dice-1').style.display = 'block';
    document.getElementById('dice-2').style.display = 'block';
    document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
    document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';
    //3. update the round score if the roled number was NOT a 1
    if (dice1 !== 1 && dice2 !== 1) {
        //Add score 
        roundScore += dice1 + dice2;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }else {
        //Next player 
       nextPlayer();
    }

  /*  if (dice === 6 && lastDice === 6) {
        //Player looses score
        scores[activePlayer] = 0;
        document.querySelector('#score-' + activePlayer).textContent = '0';
        nextPlayer();
    } else if (dice !== 1) {
        //Add score 
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }else {
        //Next player 
       nextPlayer();
    }
    lastDice = dice;
    */

    }
    
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) { 
         //Add current score to GLOBAL score
    scores[activePlayer] += roundScore;
    
    //Update the UI 
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    var input = document.querySelector('.final-score').value;
    var winningScore;
    //Undefined, 0, null or "" are COERCED to flase 
    // Anything else is COERCED to true 
    if(input) {
        winningScore = input;
    } else {
        winningScore = 100;
    }

    //check if the player won 
    if (scores[activePlayer] >= winningScore) {
        document.querySelector('#name-' + activePlayer).textContent = 'Winner';
        document.getElementById('dice-1').style.display = 'none';
        document.getElementById('dice-2').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active'); 
        gamePlaying = false;
    } else {
        //Next player 
    nextPlayer();
        
    }
    }    
});

function nextPlayer() {
    //Nextplayer
    activePlayer == 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');


    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');

    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
}
document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = ' none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'player 1';
    document.getElementById('name-1').textContent = 'player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}


