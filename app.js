var userName = prompt("What is your name?");

var questionList = [['Is my first name Frazier?', 'y',"That's right! My name is Frazier!", "Nope! My name actually is Frazier"]];
var correctAnsCount = 0;
var thisQuestion;
var userAnswer;

for (i=0; i<questionList.length; i++){
  thisQuestion = questionList[i];
  console.log(thisQuestion);
  userAnswer = prompt(thisQuestion[0]).toLowerCase();
  if (userAnswer === 'y' || userAnswer === 'n') {
    console.log('test statement');
  } else {
    alert('Critical error!');
  }
}


/* var ans1 = prompt("What is my first name?");
console.log("User answer to Q1: " + ans1);
if (ans1.toLowerCase() === "frazier"){
  alert("Good job " + userName + "!");
} else {
  alert("Wrong! My name is Frazier, not " + ans1 + ". Remember that " + userName);
}

var ans2 = prompt("Is my favorite color green?");
console.log("User answer to Q2: "+ ans2);
if (ans2.toLowerCase() === 'y' || ans2.toLowerCase() == 'yes'){
  alert("Good job " + userName + "!");
} else {
  alert("Wrong! My favorite color is green, not " + ans2 + ". Remember that " + userName);
}

var ans3 = prompt("What state was I born in?");
console.log("User answer to Q3: "+ ans3);
if (ans3.toLowerCase() === "new york"){
  alert("Good job " + userName + "!");
} else {
  alert("Wrong! I was born in New York, not " + ans3 + ". Remember that " + userName);
}
*/

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
  var numToGuess = Math.floor(Math.random()*2 + 1);
  var whetherIncorrect = true;
  var promptString = 'Guess a number between 1 and 2';
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


/*var ans4 = Number(prompt("What number between 1 and 5 am I thinking of?"));

console.log("User answer to Q4: "+ ans4);
if (ans4 === numToGuess){
  alert("Good job " + userName + "!");
} else if(ans4 >= numToGuess) {
  alert("Too high " + userName + "! I was thinking of " + numToGuess + ".");
} else if (ans4 <= numToGuess) {
  alert("Too low " + userName + "! I was thinking of " + numToGuess + ".");
} else {
  alert("Critical error!! " + userName + " evacuate immediately!");
}*/
