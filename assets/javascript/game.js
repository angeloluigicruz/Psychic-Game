//Lettters of alphabet
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Variables
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var lettersGuessed = [];
var computerGuess = [];

window.onload = function() {
	var cpuGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	computerGuess.push(cpuGuess);
	console.log(computerGuess[0]);
}

document.onkeyup = function(event) {
	var userGuess = event.key;
	lettersGuessed.push(userGuess);
    console.log(computerGuess[0]);
    

//else if statements
if ((userGuess === computerGuess[0]) && (guessesLeft > 0)) {
	wins++;
	guessesLeft = 9;
	lettersGuessed.length = 0;
	computerGuess.length = 0;
	var cpuGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	computerGuess.push(cpuGuess);
	console.log(computerGuess[0]);
}

else if ((userGuess !== computerGuess[0]) && (guessesLeft > 0)) {
	guessesLeft = guessesLeft-1;
}

else {
	losses++;
	guessesLeft = 9;
	lettersGuessed.length = 0;
	computerGuess.length = 0;
	var cpuGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	computerGuess.push(cpuGuess);
	console.log(computerGuess[0]);
}

var html = "<p>Guess what letter I'm thinking of!</p>" +
          "<p>Wins: " + wins + "</p>" +
          "<p>Losses: " + losses + "</p>" +
          "<p>Guesses left: " + guessesLeft + "</p>" +
          "<p>Your guesses so far: " + lettersGuessed + "</p>";
 
document.querySelector("#game").innerHTML = html;

}