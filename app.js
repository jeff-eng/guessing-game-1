var userName = prompt("What is your name?");
var question1 = ['Is my first name Frazier?', 'y',"That's right! My name is Frazier! Good job " + userName +'!', "Nope! My name actually is Frazier. Better luck next time " + userName +'.'];
var question2 = ['Was I born in Washington?', 'n', "That's right! I was actually born in New York. Good job " + userName +'!', "Nope! I was actually born in New York. Better luck next time " + userName +'.'];
var question3 =['Is my favorite color green?', 'y', "That's right! My favorite color is green. Good job " + userName +'!', "Nope! My favorite color actually is green. Better luck next time " + userName +'.'];
var questionList = [question1, question2, question3];
var correctAnsCount = 0;
var thisQuestion;
var userAnswer;


//Iterates through the questions, determining whether the user answered the question correctly or not
for (i=0; i<questionList.length; i++){
  thisQuestion = questionList[i];
  console.log(thisQuestion);
  userAnswer = prompt(thisQuestion[0]).toLowerCase();
  if (userAnswer === 'yes') {
    userAnswer = 'y';
  } else if (userAnswer === 'no') {
    userAnswer = 'n';
  }

  if (userAnswer === 'y' || userAnswer === 'n') {
    if (userAnswer === thisQuestion[1]){
      console.log(thisQuestion[2]);
      alert(thisQuestion[2]);
    } else {
      console.log(thisQuestion[3]);
      alert(thisQuestion[3]);
    }
  } else {
    alert('Critical error! Enter yes or no next time!');
  }
}


//This will check whether the answer is right or not
var checkAnswer = function(myGuess, numberToGuess){
  //console.log('The checkAnswer function was called');
  //console.log('The number to guess is ' + numberToGuess);
  if (myGuess === numberToGuess){
    //console.log('The user guessed correctly');
    return [false, 'The user guessed correctly'] ;
  } else if (myGuess >= numberToGuess) {
    //console.log('The user guessed too high');
    return [true, 'You guessed too high ' + userName + '. Please guess again.'] ;
  } else if (myGuess <= numberToGuess) {
    //console.log('The user guessed too low');
    return [true, 'You guessed too low ' + userName + '. Please guess again.'];
  } else if (isNaN(myGuess)){
    //console.log('Please enter a number');
    return [true, 'Please enter a number next time ' + userName + '.'];
  } else {
    alert('Critical error!');
  }
}

//This will run the guess a number game
var numberGuess = function (){
  var userGuess;
  var numToGuess = Math.floor(Math.random()*100 + 1);
  var whetherIncorrect = true;
  var promptString = 'Guess a number between 1 and 100';
  console.log('The number to guess is ' + numToGuess);

  while (whetherIncorrect){
    userGuess = Number(prompt(promptString));
    console.log('They user guessed ' + userGuess);
    whetherIncorrect = checkAnswer(userGuess, numToGuess)[0];
    promptString = checkAnswer(userGuess, numToGuess)[1];
  }
  alert('You guessed it ' + userName + '!!!!');
}
numberGuess();
