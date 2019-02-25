// SPACE THEMED TRIVIA
var corGCount = $("#corGuessed");
var incorGCount = $("#incorGuessed");
    
    window.onload = function() {
        // User will start timer to allow radio button selection
        $("#start").on("click", game.start); 
    };

    var timerRunning = false;
    var game = {
        // Correct guesses
        corGuess: 0,
        // Incorrect guesses
        incorGuess: 0, 
        // Question selection counter - if user selects all 5 questions, game timer stops and presents results in an alert window
        selectCount: 0,
        // User has 1 minute to answer questions
        time: 60,
        
        countDown: function() {
            // decrement time by 1
            if (game.time >= 1) {
                game.time--;
                game.allSelected();
            }
            else if(game.time === 0){
                console.log('out of time - end the game');
                game.endGame();
            }
            /* Get the current time, pass that into the game.timeConverter function */
            // result saved in var "converted"
            var converted = game.timeConverter(game.time)
            // Display variable in "display" div.
            $("#display").text(converted);
        },
        select: function(){
            /* all below functions take a click function associated with id's in the forms that hold the radio buttons - if user selects a radio button that has the correct value, increment correct score. Otherise, if player selects incorrect answer, increment incorrect score */
            $('#select1 input:radio').click(function(){
                if ($(this).val() === '3'){
                    game.corGuess++;
                    // display to correct guess count var corGCount
                    corGCount.text(game.corGuess);
                    console.log("+1pt Correct", game.corGuess);
                    // upon radio button selection, all radio buttons become disabled
                    $('#select1 input').prop('disabled', true);
                    game.selectCount++;
                    console.log("Select Count", game.selectCount);
                    }
                else if ($(this).val() != '3'){
                    game.incorGuess++;
                    // display to incorrect guess count var incorGCount
                    incorGCount.text(game.incorGuess);
                    console.log("+1pt incorrect", game.incorGuess);
                    $('#select1 input').prop('disabled', true);
                    game.selectCount++;
                    console.log("Select Count", game.selectCount);
                    }
            }) // repeat for all question sections
            $('#select2 input:radio').click(function(){
                if ($(this).val() === '1'){
                    game.corGuess++;
                    corGCount.text(game.corGuess);
                    console.log("+1pt Correct", game.corGuess);
                    $('#select2 input').prop('disabled', true);
                    game.selectCount++;
                    console.log("Select Count", game.selectCount);
                    }
                else if ($(this).val() != '1'){
                    game.incorGuess++;
                    incorGCount.text(game.incorGuess);
                    console.log("+1pt incorrect", game.incorGuess);
                    $('#select2 input').prop('disabled', true);
                    game.selectCount++;
                    console.log("Select Count", game.selectCount);
                    }
            })
            $('#select3 input:radio').click(function(){
                if ($(this).val() === '3'){
                    game.corGuess++;
                    corGCount.text(game.corGuess);
                    console.log("+1pt Correct", game.corGuess);
                    $('#select3 input').prop('disabled', true);
                    game.selectCount++;
                    console.log("Select Count", game.selectCount);
                    }
                else if ($(this).val() != '3'){
                    game.incorGuess++;
                    incorGCount.text(game.incorGuess);
                    console.log("+1pt incorrect", game.incorGuess);
                    $('#select3 input').prop('disabled', true);
                    game.selectCount++;
                    console.log("Select Count", game.selectCount);
                    }
            })
            $('#select4 input:radio').click(function(){
                if ($(this).val() === '3'){
                    game.corGuess++;
                    corGCount.text(game.corGuess);
                    console.log("+1pt Correct", game.corGuess);
                    $('#select4 input').prop('disabled', true);
                    game.selectCount++;
                    console.log("Select Count", game.selectCount);
                    }
                else if ($(this).val() != '3'){
                    game.incorGuess++;
                    incorGCount.text(game.incorGuess);
                    console.log("+1pt incorrect", game.incorGuess);
                    $('#select4 input').prop('disabled', true);
                    game.selectCount++;
                    console.log("Select Count", game.selectCount);
                    }
            })
            $('#select5 input:radio').click(function(){
                if ($(this).val() === '4'){
                    game.corGuess++;
                    corGCount.text(game.corGuess);
                    console.log("+1pt Correct", game.corGuess);
                    $('#select5 input').prop('disabled', true);
                    game.selectCount++;
                    console.log("Select Count", game.selectCount);
                    }
                else if ($(this).val() != '4'){
                    game.incorGuess++;
                    incorGCount.text(game.incorGuess);
                    console.log("+1pt incorrect", game.incorGuess);
                    $('#select5 input').prop('disabled', true);
                    game.selectCount++;
                    console.log("Select Count", game.selectCount);
                    }
            })
        },
        // once all questions selected, stop clock and display results via endGame() function
        allSelected: function() {
            if (game.selectCount === 5){
                timerRunning = false;
                console.log('All questions answered - end the game');
                game.endGame();
            }
        },
        start: function() {
            console.log('game started');
            if (!timerRunning) {
                // setInverval will decrement every 1 second
                setInterval(game.countDown, 1000 * 1);
                timerRunning = true;
                }
            game.select();
        },
        endGame: function() {
            alert("---GAME RESULTS---" + "\n" + "Correct Guesses: " + game.corGuess + "\n" + "Incorrect Guesses: " + game.incorGuess +"\n" + "-----------------------")
            // webpage reloads after clicking OK
            document.location.reload();
        },
        /* This converts game.time to look like a digital timer*/
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
            minutes = "00" - minutes;
            }
            return minutes + ":" + seconds;
        },
    }