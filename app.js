/*var userName = prompt("What is your name?");

var ans1 = prompt("What is my first name?");
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


var checkAnswer = function(myGuess){
  console.log('The checkAnswer function was called');
  return false;
}


var numberGuess = function (){
  var userGuess;
  var numToGuess = Math.floor(Math.random()*2 + 1);
  var whetherIncorrect = true;
  console.log('The number to guess is ' + numToGuess);


  while (whetherIncorrect){
    userGuess = Number(prompt('Guess a number between 1 and 2'));
    console.log('They user guessed ' + userGuess);
    whetherIncorrect = checkAnswer();
  }

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
