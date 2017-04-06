 'use strict';

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
      } else if (i === places.length-1  && !done && guesses === 1) {
        alert('Unlucky. I have been to; Ireland, Italy, Scotland. and Paris.')
      } else if (i === places.length-1  && !done) {
        alert('guess again')
      }
  }
}











// var okonomiyaki = prompt('Do you think i like okonomiyaki?');
// if (okonomiyaki.trim().toLowerCase() == 'yes'){
//   alert('You are correct');
// }else{
//   alert('You know nothing');
// }
// console.log(okonomiyaki);
// var league = prompt('Do you think I love video games?');
// if (league.trim().toLowerCase() == 'yes'){
//   alert('You are correct');
// }else{
//   alert('You know nothing');
// }
// console.log(league);
// var bone = prompt('Have i ever broken a bone?');
// if (bone.trim().toLowerCase() == 'no'){
//   alert('You are correct');
// } else {
//   alert('You know nothing');
// }
// console.log(bone);
// var anime = prompt('Do i watch anime?');
// if (anime.trim().toLowerCase() == 'yes'){
//   alert('You are correct');
// }else{
//   alert('You know nothing');
// }
// console.log(anime);
// var height= prompt('Do you think im at least 6 feet tall?');
// if (height.trim().toLowerCase() == 'yes'){
//   alert ('You are correct');
// }else{
//   alert('You know nothing')
// }
// console.log(height);
// if (okonomiyaki== 'yes' &league=='yes'&bone=='no'&anime=='yes'&height=='yes'){
//   alert('Wow you really know me!');
// }else{
//   alert('Since you dont know that much about me heres some info :D');
// }
// class three code demo


//DATA TYPES IN JS
//primitives
// String
// Number
// Boolean
//
// Object
// Function
// Array
// null
// undefined

// var slug =120;
//  slug=slug * 2;
//  slug -3;
//  slug /2;
//  slug % 4;
//
//  slug+=100
// slug = Math.pow(slug,4)
// Math.floor(234.34); //234
// Math.ceil(234.34); //235
// Math.round(234.49); //234
// Math.round(234.5); //235
//
// var happy = true; //true
// happy= !happy; //false

// null // a programmare chose for the vaule to be  nothing
// undefined // litteraly means nothing has been defined
/*
\n //return (new line car)
\t //tab
\\ //actual
\" //actual double quote
\'actualy single quote
*/
// message= message + '\n go to the market'


//rogue 1;

// if (condition){
//   run this chunk of code
// } else if {
//   run this other chunk of code
// } else {
//   run this final chunk of code
// }
