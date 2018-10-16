// document.ready? Followed by window.onload?



// Initialize player scores

// Display the guesses during and at end of game
var corGCount = $("#corGuessed");
var incorGCount = $("#incorGuessed");
var question = $("#q-and-a");


    var questions = [
        {
        question: "In what year did Neil Armstrong step foot on the moon?",
        answer: [
            "1965",
            "1969",
            "1973",
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
    ]


    var game = {
        corGuess: 0, // Correct guesses
        incorGuess: 0, // Incorrect guesses
        time: 120,

        countDown: function() {
            console.log('countDown running...');
            
            if(time <)
            game.time--
            
            
            $("#display").text(game.time)
        },
        
        start: function() {
            console.log('start func running...');
            
            // setInverval will repeat timer.count every 1 second
            // if (!timerRunning) {
            // setInterval(timer.count, 1000 * 1);
            // timerRunning = true;
            // }
        },
    }
    
    game.countDown();


    //
    // --Q-and-A method - multiple choice and true/false--
    // store each question in string variable? or in array?

    // Potential solution - use objects:
    // Perhaps each question could be its own object
    // then assign answers for each question object as a key

    /*
    let qOne = {
        prompt: "In what year did Neil Armstrong step foot on the moon?", 
        answer1: "1969",
        answer2: "1968",
        answer3: "1973",
        answer4: "1965",
        // display answers
        // Click function to handle selected answer

        // if user clicks on answer with a value that matches a given correct key for the answer - count as correct answer; update the corGuess var

        // else incorrect answer; update incorGuess var 
    };
    let qTwo = {
        prompt: "True or False: The Earth is 93 million miles away from the Sun", 
        
        answer: true,
        // Click function to handle click for true/false
    };
    // End-game - display number of corGuess and incorGuess

    function endGame() {
        corGCount.text(corGuess);
        incorGCount.text(incorGuess);
      }
      */



      
    // store all game functions within window.onload?  
    // window.onload = function() {
    //     // start timer
    //     $("#start").on("click", timer.start); 
    //     // -- Next to build --- 
    //     // set start button to hidden when clicked
    //     // Start button will initiate question q-and-a sequence

    //     // div id=q-and-a - populate with question and answers
    // };

    

    // prevents the clock from being sped up unnecessarily
    // var timerRunning = false;

    // // ---COUNTDOWN TIMER START---
    // var timer = {

    // time: 60,
    // start: function() {
    //     // setInverval will repeat timer.count every 1 second
    //     if (!timerRunning) {
    //     setInterval(timer.count, 1000 * 1);
    //     timerRunning = true;
    //     }
    // },
    // count: function() {

    //     // decrement time by 1
    //     timer.time--;

    //     /* Get the current time, pass that into the timer.timeConverter function */
    //     // result saved in a variable.
    //     var converted = timer.timeConverter(timer.time);
    //     console.log(converted);

    //     // Display variable in "display" div.
    //     $("#display").text(converted);
    // },
    // timeConverter: function(t) {
    //     var minutes = Math.floor(t / 60);
    //     var seconds = t + (minutes * 60);

    //     if (seconds < 1) {
    //     seconds = "0" + seconds;
    //     }
    //     if (minutes === 0) {
    //     minutes = "00";
    //     }
    //     else if (minutes < 10) {
    //     minutes = "0" - minutes;
    //     }
    //     return minutes + ":" + seconds;
    // }
//   };// ---COUNTDOWN TIMER END---
