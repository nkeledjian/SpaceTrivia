// SPACE THEMED TRIVIA
// document.ready? Followed by window.onselect?

// Display the guesses during and at end of game
var corGCount = $("#corGuessed");
var incorGCount = $("#incorGuessed");

    // var space = [
    //     {
    //     question: "In what year did Neil Armstrong step foot on the moon?",
    //     answer: [
    //         1965,
    //         1968,
    //         1969,
    //         1973,
    //     ],
    //     correctAnswer: 1969,
    //     },
    //     {
    //     question: "True or False: The Earth is 93 million miles away from the Sun",
    //     answer: [
    //         "True",
    //         "False",
    //     ],
    //     correctAnswer: true,
    //     },
    //     {
    //     question: "All stars use this element as it's main source of fuel (hint: it's the most abundant element in the universe!)",
    //     answer: [
    //         "Helium",
    //         "Iron",
    //         "Hydrogen",
    //         "Oxygen",
    //     ],
    //     correctAnswer: "Hydrogen",
    //     },
    // ]
    
    window.onload = function() {
        // start timer
        $("#start").on("click", game.start); 
        
        // -- Next to build --- 

        // set start sequence at first radio button selection?
        
    };

    var timerRunning = false;
    var game = {
        corGuess: 0, // Correct guesses
        incorGuess: 0, // Incorrect guesses
        time: 60,
        
        countDown: function() {
            // decrement time by 1
            game.time--;
            if(game.time === 0){
                console.log('end the game');
                game.endGame();
            }
            /* Get the current time, pass that into the game.timeConverter function */
            // result saved in var "converted"
            var converted = game.timeConverter(game.time)
            // Display variable in "display" div.
            $("#display").text(converted);
        },
        select: function(){
            $('#select1 input:radio').click(function(){
                if ($(this).val() === '3'){
                    game.corGuess++;
                    corGCount.text(game.corGuess);
                    console.log("+1pt Correct", game.corGuess);
                    }
                else if ($(this).val() != '3'){
                    game.incorGuess++;
                    incorGCount.text(game.incorGuess);
                    console.log("+1pt incorrect", game.incorGuess);
                    }
            })
            $('#select2 input:radio').click(function(){
                if ($(this).val() === '1'){
                    game.corGuess++;
                    corGCount.text(game.corGuess);
                    console.log("+1pt Correct", game.corGuess);
                    }
                else if ($(this).val() != '1'){
                    game.incorGuess++;
                    incorGCount.text(game.incorGuess);
                    console.log("+1pt incorrect", game.incorGuess);
                    }
            })
            $('#select3 input:radio').click(function(){
                if ($(this).val() === '3'){
                    game.corGuess++;
                    corGCount.text(game.corGuess);
                    console.log("+1pt Correct", game.corGuess);
                    }
                else if ($(this).val() != '3'){
                    game.incorGuess++;
                    incorGCount.text(game.incorGuess);
                    console.log("+1pt incorrect", game.incorGuess);
                    }
            })
            $('#select4 input:radio').click(function(){
                if ($(this).val() === '3'){
                    game.corGuess++;
                    corGCount.text(game.corGuess);
                    console.log("+1pt Correct", game.corGuess);
                    }
                else if ($(this).val() != '3'){
                    game.incorGuess++;
                    incorGCount.text(game.incorGuess);
                    console.log("+1pt incorrect", game.incorGuess);
                    }
            })
        },
        start: function() {
            console.log('start called');
            
            if (!timerRunning) {
                // setInverval will decrement 1 every 1 second
                setInterval(game.countDown, 1000 * 1);
                timerRunning = true;
                }
            else if (game.time == 0){
                // endGame(); - no more questions? display results page
                alert("Out of Time! Game Over!");
                game.endGame();
            }
            game.select();
        },
        
        endGame: function() {
            /* Considering adding score clearing instructions for the endGame function */
            console.log("Scores Updated and GAME OVER");
            // UPDATE SCORE
            corGCount.text(game.corGuess);
            incorGCount.text(game.incorGuess);
        },
        // This converts game.time to look like a digital timer - still needs a bit of tweaking to work with more than 60 seconds of time
        timeConverter: function(t) {
            var minutes = Math.floor(t / 60);
            var seconds = t + (minutes * 60);

            if (seconds < 1) {
            seconds = "0" + seconds;
            }
            if (minutes === 0) {
            minutes = "00";
            }
            else if (minutes < 10) {
            minutes = "0" - minutes;
            }
            return minutes + ":" + seconds;
        },
    }