
//global 
var remainingguesses
var userChar
var Word = require("./word.js");

var inquirer = require("inquirer");
var currentWord;

var guessedLetters = []
//

newGame();
function newGame() {
  //reset guessedLetters to the whole alphabet 
  guessedLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  //reset remaining guesses to 10
  remainingguesses = 10
  var wordArr = ["mako"]
  // Randomly select a word for the game
  const randomWord = wordArr[Math.floor(Math.random() * wordArr.length)];
  // console.log(randomWord);
  //  uses the `Word` constructor to store it
  currentWord = new Word(randomWord);
  currentWord.guess(userChar);
  promptuser();
  
 

}

// remove the letter the user just guessed from the array of letters to chose from 
function removeLetter(){
  var guessedLettersIndex = guessedLetters.indexOf(userChar)
  guessedLetters.splice(guessedLettersIndex, 1);
}

function promptuser() {
  removeLetter();
  if (remainingguesses > 0) {
    inquirer.prompt([
      {
        type: "list",
        name: "letterguessed",
        message: "Guess a letter to solve the word",
        //show choices that have not been guessed already
        choices: guessedLetters,

      }

    ]).then(function (user) {
      //console.log("user.letterguessed: " +user.letterguessed);
      userChar = user.letterguessed;
      handlechoice(userChar);
      //console.log("Word: " +Word);

   
    });
  }
}

function handlechoice(userChar) {
  
  remainingguesses--;
  currentWord.guess(userChar);
  //console.log("currentWord.underscoreVal: " + currentWord.underscoreVal)
  if (currentWord.underscoreVal == -1) {
    // yay - ask if they want to play another game 
    inquirer.prompt([
      {
        type: "confirm",
        name: "anothergame",
        message: "Yay! you win! Do you want to play again?",


      }
    ]).then(function (user) {

      if (user.anothergame == true) {
        newGame(); //start another game
      }
      if (user.anothergame == false) {
        console.log("thanks for playing!");
        //end game
      }
    });
  }
  if (remainingguesses > 0 && currentWord.underscoreVal !== -1 ) {
    promptuser(userChar);
  }

  if (remainingguesses == 3) {
    console.log("Three guesses left! Choose carefully")
  }

  if (remainingguesses <= 0) {
    inquirer.prompt([
      {
        type: "confirm",
        name: "anothergame",
        message: "No more guesses, gave over! Do you want to play again?",


      }
    ]).then(function (user) {

      if (user.anothergame == true) {
        newGame(); //start another game
      }
      if (user.anothergame == false) {
        console.log("thanks for playing!");
        //end game
      }
    });
  }
}




