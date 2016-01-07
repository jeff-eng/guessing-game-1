var userName = prompt("What is your name?");
var counter = 0;
var res1 = document.getElementById('firstAnswer');
var res2 = document.getElementById('secondAnswer');
var res3 = document.getElementById('thirdAnswer');
var res4 = document.getElementById('fourthAnswer');
var res5 = document.getElementById('fifthAnswer');

//First Question Function
var ans1Function = function () {
var ans1 = prompt("Is my first name Frazier?").toLowerCase();
if (ans1 === 'yes'){
  ans1 = 'y';
} else if (ans1 === 'no'){
  ans1 = 'n';
}
console.log("User answer to Q1: " + ans1);
if (ans1 === "y"){
  res1.textContent = ("Good job " + userName + "! The answer is indeed " + ans1);
  counter++;
} else {
  res1.textContent = ("Wrong! My name actually is Frazier. Remember that " + userName);
}
}

//second question function
var ans2Function = function() {
var ans2 = prompt("Is my favorite color blue?").toLowerCase();
if (ans2 === 'yes'){
  ans2 = 'y';
} else if (ans2 === 'no'){
  ans2 = 'n';
}
console.log("User answer to Q2: "+ ans2);
if (ans2 === 'n'){
  res2.textContent = ("Good job " + userName + "! My favorite color is green.");
  counter++;
} else {
  res2.textContent = ("Wrong! My favorite color is green. Remember that " + userName);
}
}

//third question function
var ans3Function = function() {
var ans3 = prompt("Was I born in Washington?").toLowerCase();
if (ans3 === 'yes'){
  ans3 = 'y';
} else if (ans3 === 'no'){
  ans3 = 'n';
}
console.log("User answer to Q3: "+ ans3);
if (ans3 === "n"){
  res3.textContent = ("Good job " + userName + "! I was born in New York.");
  counter++;
} else {
  res3.textContent = ("Wrong! I was born in New York. Remember that " + userName);
}
}

//fourth question function
var ans4Function = function () {
var guessed = false;
var ans4;
var numToGuess = Math.floor(Math.random()*5 + 1);
console.log("User answer to Q4: "+ ans4);
while (guessed === false) {
  ans4 = Number(prompt("What number between 1 and 5 am I thinking of?"));

  if (ans4 === numToGuess){
    res4.textContent = ("Good job " + userName + "!");
    counter++;
    guessed = true;
  } else if(ans4 >= numToGuess) {
    res4.textContent = ("Too high " + userName + "! Guess again.");
  } else if (ans4 <= numToGuess) {
    res4.textContent = ("Too low " + userName + "! Guess again.");
  } else {
    res4.textContent = ("Critical error!! " + userName + " evacuate immediately!");
  }
}
}

//fifth question function
var ans5Function = function () {
var cities = ["seattle", "missoula", "phoenix", "krakow"];
var question5 = prompt("what cities have I been to in the past year? Guess one").toLowerCase();
for (i = 0; i < cities.length; i++) {
  if (question5 === cities[i]) {
    res5.textContent = ("That is great! I have indeed been to " + cities[i] + " in the past year");
    counter++;
    break;
  } else {
    res5.textContent = ("Sorry, you're wrong. But it's ok, you are likely used to that.");
  };
  }

}

//function calls found in lines below
ans1Function();
ans2Function();
ans3Function();
ans4Function();
ans5Function();

//final congratulatory alert
alert('Congratulations ' + userName + ' you got ' + counter + ' questions correct!');
