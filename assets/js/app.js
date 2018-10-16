// SPACE THEMED TRIVIA
// document.ready? Followed by window.onload?

// Display the guesses during and at end of game
var corGCount = $("#corGuessed");
var incorGCount = $("#incorGuessed");
var question = $("#q-and-a");

    var space = [
        {
        question: "In what year did Neil Armstrong step foot on the moon?",
        answer: [
            1965,
            1968,
            1969,
            1973,
        ],
        correctAnswer: 1969,
        },
        {
        question: "True or False: The Earth is 93 million miles away from the Sun",
        answer: [
            "True",
            "False",
        ],
        correctAnswer: true,
        },
        {
        question: "All stars uses this element as it's fuel (hint: it's the most abundant element in the universe!)",
        answer: [
            "Helium",
            "Iron",
            "Hydrogen",
            "Oxygen",
        ],
        correctAnswer: "Hydrogen",
        },
    ]

    window.onload = function() {
        // start timer
        $("#start").on("click", game.start); 
        // -- Next to build --- 
        // set start button to hidden when clicked
        // Start button will initiate question q-and-a sequence

        // set Start button to populate page with question and answers
        // display q's and a's in: div id=q-and-a 
    };

    var timerRunning = false;
    var game = {
        corGuess: 0, // Correct guesses
        incorGuess: 0, // Incorrect guesses
        time: 60,
        
        countDown: function() {
            // decrement time by 1
            game.time--;

            /* Get the current time, pass that into the game.timeConverter function */
            // result saved in var "converted"
            var converted = game.timeConverter(game.time);
            console.log(converted);

            // Display variable in "display" div.
            $("#display").text(converted);
        },
        
        start: function() {
            if (!timerRunning) {
                // setInverval will decrement 1 every 1 second
                setInterval(game.countDown, 1000 * 1);
                timerRunning = true;
                }
            else if (game.time == 0){
                alert("Out of Time! Game Over!");
            }
            console.log('start func running...');
            /* implement for loop on for loop to access the space object and it's arrays of questions create a whole separate function to handle this? */
        },
        endGame: function() {
            corGCount.text(corGuess);
            incorGCount.text(incorGuess);
        },
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

