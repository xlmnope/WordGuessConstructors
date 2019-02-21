
// * **Word.js**: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:

// * An array of `new` Letter objects representing the letters of the underlying word



//requrire letter js
var Letter = require("./letter.js");
var letters = [];
var underscore;
var Word = function(word, userChar) {
  //console.log("word " + word);
  //separate each character to be part of an array
  // * An array of `new` Letter objects representing the letters of the underlying word
  var splitword = word.split("");
  //console.log('split word: '+ splitword);
  //loop through the array and make new letter 
  for (var i = 0; i < splitword.length; i++) {
     letters.push( new Letter(word[i]));

  }
  // * A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)
  this.guess = function(userChar){
    //console.log("userChar in guess function: "+ userChar);
    for (var i = 0; i < letters.length; i++) {
    letters[i].isCharacter(userChar);
    }
    this.showCharacter();
  }
  // * A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.
  //for each letter in the word either show the letter or a _
  this.showCharacter = function(){
    var guessedWord = []
    for (var i = 0; i < letters.length; i++) {
      guessedWord.push(letters[i].showCharacter());
      }
    underscore = guessedWord.indexOf("_");
    //console.log("index of _" + guessedWord.indexOf("_"));
    //console.log("underscore value" + underscore);
    console.log(guessedWord);
    this.underscore();
  }
  this.underscore = function(){
    this.underscoreVal = underscore;
  }
}

module.exports= Word;

