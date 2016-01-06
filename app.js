var userName = prompt("What is your name?");


//checks to see whether the user's answer to a verbal question is correct
var checkAnswer = function (theirAnswer, rightAnswer){
  console.log("checkAnswer was called");

  if (theirAnswer === 'y' || theirAnswer === 'n') {
    if (theirAnswer === rightAnswer){
      return [true , 2];
    } else {
      return [true , 3];
    }
  } else {
    console.log('Critical error! Enter yes or no next time!');
    return [false , 4];

  }

}

//iterates through a list of questions and asks each one
var guessingGame = function(){
  var question1 = ['Is my first name Frazier?', 'y',"That's right! My name is Frazier! Good job " + userName +'!', "Nope! My name actually is Frazier. Better luck next time " + userName +'.', 'Please answer either yes or no next time.'];
  var question2 = ['Was I born in Washington?', 'n', "That's right! I was actually born in New York. Good job " + userName +'!', "Nope! I was actually born in New York. Better luck next time " + userName +'.', 'Please answer either yes or no next time.'];
  var question3 =['Is my favorite color green?', 'y', "That's right! My favorite color is green. Good job " + userName +'!', "Nope! My favorite color actually is green. Better luck next time " + userName +'.', 'Please answer either yes or no next time.'];
  var questionList = [question1, question2, question3];
  var correctAnsCount = 0;
  var thisQuestion;
  var userAnswer;
  var checkAnswerResult;

  for (i=0; i<questionList.length; i++){
    var answeredFlag = false;
    thisQuestion = questionList[i];
    console.log(thisQuestion);


    while (answeredFlag === false){
      userAnswer = prompt(thisQuestion[0]).toLowerCase();
      if (userAnswer === 'yes') {
        userAnswer = 'y';
      } else if (userAnswer === 'no') {
        userAnswer = 'n';
      }

      checkAnswerResult = checkAnswer(userAnswer, thisQuestion[1]);
      if (checkAnswerResult[1] === 2){
        correctAnsCount++;
      }
      console.log(checkAnswerResult);
      alert(thisQuestion[checkAnswerResult[1]]);
      answeredFlag = checkAnswerResult[0];

    }
  }
  alert('You guessed ' + correctAnsCount + ' questions correctly! Great job ' + userName + '!');
}




//this will check whether the guessed number is right or not
var checkGuess = function(myGuess, numberToGuess){
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
  var checkAnswerResult;
  var numToGuess = Math.floor(Math.random()*2 + 1);
  var whetherIncorrect = true;
  var promptString = 'Guess a number between 1 and 2';
  console.log('The number to guess is ' + numToGuess);

  while (whetherIncorrect){
    userGuess = Number(prompt(promptString));
    console.log('They user guessed ' + userGuess);
    checkAnswerResult=checkGuess(userGuess, numToGuess);
    whetherIncorrect = checkAnswerResult[0];
    promptString = checkAnswerResult[1];
  }
  alert('You guessed it ' + userName + '!!!!');
}


//actually call the functions
guessingGame();
numberGuess();
