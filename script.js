    // let score = JSON.parse(localStorage.getItem('score')) || {
    //     wins: 0,
    //     losses: 0,
    //     ties: 0
    // };


    // function updateScore() {
    //     document.querySelector('.js-score').innerHTML = `Wins:${score.wins}  
    //     Losses:${score.losses}     
    //     Tie:${score.ties}`;

    // }

    // updateScore();
    // localStorage.setItem('score', JSON.stringify(score));

    // function calcRandomNumber() {
    //     const RandomNumber = Math.random();



    //     if (RandomNumber >= 0 && RandomNumber < 1 / 3) {
    //         return 'rock';
    //     }
    //     else if (RandomNumber >= 1 / 3 && RandomNumber < 2 / 3) {
    //         return 'paper'
    //     }
    //     else if (RandomNumber >= 2 / 3 && RandomNumber < 1) {
    //         return 'scissors'
    //     }
    // }

    // function Play(UserClick) {
    //     var ComputerMove = calcRandomNumber();
    //     var result;
    //     if (UserClick === 'scissors') {


    //         if (ComputerMove === 'rock') {
    //             result = 'You lose!'
    //         }
    //         else if (ComputerMove === 'paper') {
    //             result = 'You Win!'
    //         }
    //         else if (ComputerMove === 'scissors') {
    //             result = 'Tie!'
    //         }



    //     }

    //     else if (UserClick === 'rock') {


    //         if (ComputerMove === 'paper') {
    //             result = 'You lose!'
    //         }
    //         else if (ComputerMove === 'rock') {
    //             result = 'Tie!'
    //         }
    //         else if (ComputerMove === 'scissors') {
    //             result = 'You Win!'
    //         }


    //     }

    //     else if (UserClick === 'paper') {


    //         if (ComputerMove === 'paper') {
    //             result = 'You lose!'
    //         }
    //         else if (ComputerMove === 'rock') {
    //             result = 'Tie!'
    //         }
    //         else if (ComputerMove === 'scissors') {
    //             result = 'You Win!'
    //         }



    //     }

    //     if (result === 'You Win!') {
    //         score.wins = score.wins + 1;
    //     }
    //     else if (result === 'You lose!') {
    //         score.losses = score.losses + 1;
    //     }
    //     else if (result === "Tie!") {
    //         score.ties = score.ties + 1;
    //     }

    //     updateScore();
    //     localStorage.setItem('score', JSON.stringify(score));

    //     document.querySelector('.js-result').innerHTML = result;
    //     document.querySelector('.js-move').innerHTML =
    //         `You 
    //     <img class="move-icon" src="images/${UserClick}-emoji.png">
    //     <img class="move-icon" src="images/${ComputerMove}-emoji.png">
    //     Computer`;



    // }
