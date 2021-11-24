/* 
GAME RULES:
- The game has 2 players, playing in rounds 
- In each turn, a player roll a dice as many times as he wishes. Each result get added to his ROUND score 
-BUT , if the player rolls a 1, his ROUND score gets lost. After that, its the next player's turn
- the player can choose to "HOLD" which means that his ROUND score gets added to his GLOBAL score. after that its the next player's turn 
- the first player to reach 100 points on GLOBAL score wins the game 
*/

var scores, roundScore, activePlayer, gamePlaying;

init();

document.querySelector('.dice').style.display = 'none'; 

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.querySelector('.btn-roll').addEventListener('click', function() {
    if (gamePlaying) {
        // 1. Random number 
    var dice = Math.floor(Math.random() * 6) + 1;

    //2. Display the result 
    var diceDom = document.querySelector('.dice');
    diceDom.style.display = 'block';
    diceDom.src = 'dice-' + dice + '.png';

    //3. update the round score if the roled number was NOT a 1
    if (dice !== 1) {
        //Add score 
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }else {
        //Next player 
       nextPlayer();
    }

    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) { 
         //Add current score to GLOBAL score
    scores[activePlayer] += roundScore;
    
    //Update the UI 
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    //check if the player won 
    if (scores[activePlayer] >= 100) {
        document.querySelector('#name-' + activePlayer).textContent = 'Winner';
        document.querySelector('.dice').style.display = 'none';
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

    document.querySelector('.dice').style.display = 'none';
}
document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    document.querySelector('.dice').style.display = 'none';

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


/**
 * Change the game to follow these rules:
 * 1. A player losses his ENTIRE score when he rolls two 6 in a row. after that, its the next players turn (Hint: Always save the previous dice roll in a seperate variable ) 
 * 2. Add an input field to the html where players can set the winning score, so that they can change the predefined score of 100(Hint: you can read that value with .value property in javaSCript.)
 * 3. Add another dice to the game to the game so that there are two dices now. The player looses his current score whwn one of them ia a 1(Hint: you will need css to position the second dice so take a look at the CSS code for the first one )
 */
