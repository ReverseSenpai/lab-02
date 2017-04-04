'use strict';

var okonomiyaki = prompt('Do you think i like okonomiyaki?');
if (okonomiyaki.trim().toLowerCase() == 'yes'){
  alert('You are correct');
}else{
  alert('You know nothing');
}
console.log(okonomiyaki);
var league = prompt('Do you think I love video games?');
if (league.trim().toLowerCase() == 'yes'){
  alert('You are correct');
}else{
  alert('You know nothing');
}
console.log(league);
var bone = prompt('Have i ever broken a bone?');
if (bone.trim().toLowerCase() == 'no'){
  alert('You are correct');
} else {
  alert('You know nothing');
}
console.log(bone);
var anime = prompt('Do i watch anime?');
if (anime.trim().toLowerCase() == 'yes'){
  alert('You are correct');
}else{
  alert('You know nothing');
}
console.log(anime);
var height= prompt('Do you think im at least 6 feet tall?');
if (height.trim().toLowerCase() == 'yes'){
  alert ('You are correct');
}else{
  alert('You know nothing')
}
console.log(height);
if (okonomiyaki== 'yes' &league=='yes'&bone=='no'&anime=='yes'&height=='yes'){
  alert('Wow you really know me!');
}else{
  alert('Since you dont know that much about me heres some info :D');
}
