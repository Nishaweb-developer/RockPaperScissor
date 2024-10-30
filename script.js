    let score = JSON.parse(localStorage.getItem('score')) || {
        wins: 0,
        losses: 0,
        ties: 0
    };


    function updateScore() {
        document.querySelector('.js-score').innerHTML = `Wins:${score.wins}  
        Losses:${score.losses}     
        Tie:${score.ties}`;

    }

    updateScore();
    localStorage.setItem('score', JSON.stringify(score));

    function calcRandomNumber() {
        const RandomNumber = Math.random();



        if (RandomNumber >= 0 && RandomNumber < 1 / 3) {
            return 'Rock';
        }
        else if (RandomNumber >= 1 / 3 && RandomNumber < 2 / 3) {
            return 'Paper'
        }
        else if (RandomNumber >= 2 / 3 && RandomNumber < 1) {
            return 'Scissors'
        }
    }

    function Play(UserClick) {
        var ComputerMove = calcRandomNumber();
        var result;
        if (UserClick === 'Scissors') {


            if (ComputerMove === 'Rock') {
                result = 'You lose!'
            }
            else if (ComputerMove === 'Paper') {
                result = 'You Win!'
            }
            else if (ComputerMove === 'Scissors') {
                result = 'Tie!'
            }



        }

        else if (UserClick === 'Rock') {


            if (ComputerMove === 'Paper') {
                result = 'You lose!'
            }
            else if (ComputerMove === 'Rock') {
                result = 'Tie!'
            }
            else if (ComputerMove === 'Scissors') {
                result = 'You Win!'
            }


        }

        else if (UserClick === 'Paper') {


            if (ComputerMove === 'Paper') {
                result = 'You lose!'
            }
            else if (ComputerMove === 'Rock') {
                result = 'Tie!'
            }
            else if (ComputerMove === 'Scissors') {
                result = 'You Win!'
            }



        }

        if (result === 'You Win!') {
            score.wins = score.wins + 1;
        }
        else if (result === 'You lose!') {
            score.losses = score.losses + 1;
        }
        else if (result === "Tie!") {
            score.ties = score.ties + 1;
        }

        updateScore();
        localStorage.setItem('score', JSON.stringify(score));

        document.querySelector('.js-result').innerHTML = result;
        document.querySelector('.js-move').innerHTML =
            `You 
        <img class="move-icon" src="images/${UserClick}-emoji.png">
        <img class="move-icon" src="images/${ComputerMove}-emoji.png">
        Computer`;



    }
