// Run function of key thing numOfGuesses-- amount of times
var numOfGuesses = 9
//Selectors
var wins = 0
var losses = 0
var computerChoice = ["a", "s", "d", "f", "g", "h", "j", "k", "l", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "z", "x", "c", "v", "b", "n", "m"]
var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
var userGuesses = [];


//Array of possible computer choices

// Randomly chooses a choice from the options array. This is the Computer's guess.


var start = "Press Any Key To Start"

document.getElementById("pressStart").innerHTML = start;

document.onkeyup = function(ok){

function game() {
    computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
    userGuesses = []
    numOfGuesses = 9
    document.getElementById("left").innerHTML = (numOfGuesses);
    document.getElementById("wins").innerHTML = (wins);
    document.getElementById("losses").innerHTML = (losses)
console.log(computerGuess)
}

game()
// for (var i = 0; i < 9; i++) {
    //When user releases a key run function
    document.onkeyup = function (event) {

        // Determines which key was pressed.
        var userGuess = event.key;

        console.log(userGuess)
        console.log(numOfGuesses)
        if (userGuess === computerGuess) {
            wins++;
            game();
            return;
        }

        else if (numOfGuesses - 1 == 0) {
            losses++
            game();
            return;
        }
        else if (userGuesses.indexOf(userGuess) >= 0 || computerChoice.indexOf(userGuess)<0){

        }

        else {
            numOfGuesses = (numOfGuesses - 1);
            document.getElementById("left").innerHTML = (numOfGuesses);
            userGuesses.push(event.key);
        }

        document.getElementById("Used").innerHTML = "Your guesses so far: " + (userGuesses);

    }
    //Array.Push to add items to var when not an array    

}
//}



//may need to remove the else if statement to get back to functionality