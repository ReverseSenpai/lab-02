 'use strict';
var yourName= prompt('whats your name?');
var score = 0;
var okonomiyaki = prompt('Do you think i like okonomiyaki?');
if (okonomiyaki.trim().toLowerCase() == 'yes'){
  alert('You are correct');
  score ++;
}else{
  alert('You know nothing');
}
console.log(okonomiyaki);
var league = prompt('Do you think I love video games?');
if (league.trim().toLowerCase() == 'yes'){
  alert('You are correct');
  score ++;
}else{
  alert('You know nothing');
}
console.log(league);
var bone = prompt('Have i ever broken a bone?');
if (bone.trim().toLowerCase() == 'no'){
  alert('You are correct');
  score ++;
} else {
  alert('You know nothing');
}
console.log(bone);
var anime = prompt('Do i watch anime?');
if (anime.trim().toLowerCase() == 'yes'){
  alert('You are correct');
  score ++;
}else{
  alert('You know nothing');
}
console.log(anime);
var height= prompt('Do you think im at least 6 feet tall?');
if (height.trim().toLowerCase() == 'yes'){
  alert ('You are correct');
  score ++;
}else{
  alert('You know nothing')
var height= prompt('Do you think im at least 6 feet tall?');
if (height.trim().toLowerCase() == 'yes'){
  alert ('You are correct');
  score ++;
}else{
  alert('You know nothing')
 }
console.log(height);
}
var correctNumber =13;
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
    score ++;
  } else if (guess > 13){
    alert ('too high guess again');
  } else if (guess < 13){
    alert ('too low guess again');
  }

}
var done = false
var guess;
for (var guesses = 6; guesses > 0 && !done; guesses--) {
  guess = prompt('Guess what countries that I have visited?. 6 chances this time');
  for (var i=0; i<places.length; i++) {
    if (guess === places[i]) {
        done= true;
        alert('Correct. I have visited; Ireland, Italy. Scotland, and Paris.');
        score ++;
      } else if (i === places.length-1  && !done && guesses === 1) {
        alert('Unlucky. I have been to; Ireland, Italy, Scotland. and Paris.')
      } else if (i === places.length-1  && !done) {
        alert('guess again')
      }
  }
}
var score= alert('Congrats ' + yourName +(' you got ')+ score +(' points'));
