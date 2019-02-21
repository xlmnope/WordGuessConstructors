# WordGuessConstructors

## Overview 
This is a command line interface (CLI) game of Hangman! 
Each game, a random word is selected by the computer. To win the game, the player must guess all of the letters in the word, using less than 10 guesses. 

---
## Demo
This is a link to a demo of the game: ![Word Guess Cli](Images/01-WordGuess-Cli.gif)

---
### Why did I make this?: 
* This was an optional assignment for UCSD's Full Stack Bootcamp. Building this application allowed me to practice using Javascript constructors. 


### How to play:
* To play this game, clone the repo to your computer. In your terminal, navigate to the project folder (WordGuessConstructors). Type "node index.js" into the command line. 
* The terminal will then prompt you to choose a letter. Choose a letter by using the up and down arrow keys. 

### Game Rules: 
* To win the game, the player must guess all of the letters in the word, using less than 10 guesses. 
* The only information the player is given is the number of letters in the word, and the position of any correct letter guesses. 
* Example: If the random word is Hawaii, the computer will display _ _ _ _ _ _. If the player guesses the letter H, the computer will then display "H _ _ _ _ _". 


