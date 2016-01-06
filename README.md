# guessing-game
Homework assignment for codefellows 201 day 3

This game consists of 2 parts: a series of verbal questions and a number-guessing game.

In the verbal portion, a function iterates through an array of questions using a for loop. Each question is stored as ['question to ask', 'y/n', 'response if correct', 'response if incorrect', 'error message']. Inside the for loop is a while loop, which prompts the user to respond to the question in the 0th element of the question array. Their response is compared to the 1st element of the array, and if they were correct, it displays the response in the second element of the question array. If they are incorrect, it displays the response in the third element of the question array. If they answer the question in an invalid format, it displays the error message and asks the question again. 

The second portion of the game is contained in a function called numberGuess that generates a number at random between 1 and 100 and prompts the user to guess it. Then, it calls a second function, checkGuess, inside a while loop. The function checkGuess  determines whether the number was equal to, greater than, or less than the random number--if it is equal, it returns false to break the loop, otherwise it returns true to keep the loop going.

Current problems include, but are likely not limited to:
The question list for the verbal portion seems pretty clunky.
When you answer a verbal question, if the input isn't of the required form, it asks you the question again, but the error message is contained at the end of every string, which is pretty clunky.
