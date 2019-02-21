

// Create the constructor
var Letter = function(a) {
  // store the underlying character for the letter
  this.character = a
  // store whether that letter has been guessed yet
  this.guessed = false;
  
  // check if the character the user entered is the underlying character. change boolean to true if it is. 
  this.isCharacter = function(userChar){
    if (userChar === this.character) {
      this.guessed = true;
    }
  }
  // return the underlying character if the letter has been guessed, or a  an underscore)if the letter has not been guessed

  this.showCharacter = function() {
    if (this.guessed == true) {
        return this.character;
    }
    if (this.guessed == false) {
      return "_";

    }
  }
}
  
module.exports= Letter;