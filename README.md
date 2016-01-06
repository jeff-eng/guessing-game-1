# guessing-game
Homework assignment for codefellows 201 day 3

This game consists of 2 parts: a series of verbal questions and a number-guessing game.

For the verbal portion, questions are stored in an array that contains each question. Questions inside that are formatted like [question, answer, response if correct, response if incorrect]. A for loop iterates through the array that contains the questions and determines whether the user's answer is consistent with the second element of each question array. If it is, it displays the 'response if correct', otherwise it displays the 'response if incorrect'.

The second portion of the game is contained in a function called numberGuess that generates a number at random between 1 and 100 and prompts the user to guess it. Then, it calls a second function, checkGuess, inside a while loop. The function checkGuess  determines whether the number was equal to, greater than, or less than the random number--if it is equal, it returns false to break the loop, otherwise it returns true to keep the loop going.

Current problems include, but are likely not limited to:
The question list for the verbal portion seems pretty clunky.
When you answer a verbal question, if the input isn't of the required form, it asks you the question again, but the error message is contained at the end of every string, which is pretty clunky.
