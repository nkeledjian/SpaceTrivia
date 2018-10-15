// Initialize player scores
var corGuess = 0; // Correct guesses
var incorGuess = 0; // Incorrect guesses
// Display the guesses during and at end of game
var corGCount = $("#corGuessed");
var incorGCount = $("#incorGuessed");


// div id=q-and-a - populate with question and answers

    // 
    // store each question in string variable? or in array?

    // Potential solution - use an object:
    // Perhaps each question could be its own object
    // then assign answers for each question object as a key

    // if user clicks on answer with a value that matches a given correct key for the answer - count as correct answer; update the corGuess var

    // else incorrect answer; update incorGuess var

    // End-game - display number of corGuess and incorGuess
    function endGame() {
        corGCount.text(corGuess);
        incorGCount.text(incorGuess);
      }


    // store all game functions within window.onload?
    window.onload = function() {
        // start timer
        $("#start").on("click", timer.start); 
        // -- Next to build --- 
        // set start button to hidden when clicked
        // Start button will initiate question q-and-a sequence
    };

    // ---COUNTDOWN TIMER START---

    // prevents the clock from being sped up unnecessarily
    var timerRunning = false;
    // Our timer object
    var timer = {

    time: 60,
    start: function() {
        // setInverval will repeat timer.count every 1 second
        if (!timerRunning) {
        setInterval(timer.count, 1000 * 1);
        timerRunning = true;
        }
    },
    count: function() {

        // decrement time by 1
        timer.time--;

        /* Get the current time, pass that into the timer.timeConverter function */
        // result saved in a variable.
        var converted = timer.timeConverter(timer.time);
        console.log(converted);

        // Display variable in "display" div.
        $("#display").text(converted);
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
    }
  };
// ---COUNTDOWN TIMER END---