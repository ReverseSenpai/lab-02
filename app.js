'use strict';
var count = 0;
function checkAnswer1(){
  var okonomiyaki = prompt('Do you think i like okonomiyaki?');
  if (okonomiyaki.trim().toLowerCase() == 'yes'){
    alert('You are correct');
    count ++;
  } else {
    alert('You know nothing');
  }
}
function checkAnswer2(){
  var league = prompt('Do you think I love video games?');
  if (league.trim().toLowerCase() == 'yes'){
    alert('You are correct');
    count ++;
  } else {
    alert('You know nothing');
  }
}
function checkAnswer3(){
  var bone = prompt('Have i ever broken a bone?');
  if (bone.trim().toLowerCase() == 'no'){
    alert('You are correct');
    count++;
  } else {
    alert('You know nothing');
  }
}
function checkAnswer4(){
  var anime = prompt('Do i watch anime?');
  if (anime.trim().toLowerCase() == 'yes'){
    alert('You are correct');
    count ++;
  } else {
    alert('You know nothing');
  }
}
function checkAnswer5(){
  var height= prompt('Do you think im at least 6 feet tall?');
  if (height.trim().toLowerCase() == 'yes'){
    alert ('You are correct');
    count++;
  } else {
    alert('You know nothing')
  }
}
function checkAnswer6(){var correctNumber =13;
var notDone = true;
var places = ["Paris","Scotland","Ireland","Italy"];
var done = false;
var guess;
for (var guesses=4; guesses > 0 && notDone; guesses--) {
 guess = prompt('Can you guess my favorite number? You get 4 chances');
 guess = parseInt(guess);
 if (guess === correctNumber) {
   notDone = false;
   alert('Correct!');
   count ++;
 } else if (guess > 13){
   alert ('too high guess again');
 } else if (guess < 13){
   alert ('too low guess again');
    }
  }
}
function checkAnswer7(){
var places = ['Ireland', 'Scotland', 'Paris', 'Italy']
var done = false
var guess;
for (var guesses = 6; guesses > 0 && !done; guesses--) {
 guess = prompt('Guess what countries that I have visited?. 6 chances this time');
 for (var i=0; i<places.length; i++) {
   if (guess === places[i]) {
       done= true;
       alert('Correct. I have visited; Ireland, Italy. Scotland, and Paris.');
       count ++;
     } else if (i === places.length-1  && !done && guesses === 1) {
       alert('Unlucky. I have been to; Ireland, Italy, Scotland. and Paris.')
     } else if (i === places.length-1  && !done) {
       alert('guess again')
     }
   }
 }
}
function correct(){
  var name = prompt('What is your name?');
  alert(name + ' you got ' + count + ' correct!');
}
checkAnswer1();
checkAnswer2();
checkAnswer3();
checkAnswer4();
checkAnswer5();
checkAnswer6();
checkAnswer7();
correct();
