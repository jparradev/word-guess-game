


//Variables######################################################

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var userGuesses = [];

var wins = 0;
var losses = 0;
var guessesRemaining = 10;
var letter = "";



//Functions######################################################



function print() {
    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " + losses);
    $("#guesses").text("Guesses Remaining: " + guessesRemaining);
    $("#letters").text("Letters Guessed: " + userGuesses);
};


var randomNumber = Math.floor(Math.random() * alphabet.length);
var computerChoice = alphabet[randomNumber]
console.log(computerChoice)



//Script#########################################################


document.onkeypress = function (event) {
    var playerGuess = event.key.toLowerCase();


    if (playerGuess === computerChoice && guessesRemaining > 0) {
        wins++;
        $("#announcement").text("WINNER!!! The correct answer was " + computerChoice.toUpperCase());
        randomNumber = Math.floor(Math.random() * alphabet.length);
        computerChoice = alphabet[randomNumber];
        console.log(computerChoice);
        userGuesses = [];
        guessesRemaining = 10;
    } else {
        guessesRemaining--;
        $("#announcement").text(playerGuess.toUpperCase() + " is not the letter...");
    }

    if (guessesRemaining === 0) {
        losses++
        $("#announcement").text("Game Over, Try Again");
        userGuesses = [];
        guessesRemaining = 10;
        randomNumber = Math.floor(Math.random() * alphabet.length);
        computerChoice = alphabet[randomNumber];
        console.log(computerChoice);
    }

    if (userGuesses.indexOf(playerGuess) >= 0) {
        $("#announcement").text("You aready selected that letter.");
        guessesRemaining++;
    } else {
        userGuesses.push(playerGuess);
        console.log(userGuesses);
    }
    print();
}    