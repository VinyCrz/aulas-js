/* Forma usando loops
let words = ['hello', 'world', 'search', 'good'];

let index = creationWords(words);
console.log(index);

words = ['not', 'found'];

index = creationWords(words);
console.log(index)

function creationWords (){
  for (let i = 0; i < words.length; i++){
    if (words[i] === 'search')
      return i;
  }
  return -1;
}


let words = ['hello', 'world', 'search', 'good'];

let index = words.indexOf('search');
console.log(index);

words = ['not', 'found']

index = words.indexOf('search');
console.log(index);

*/

/*
console.log(findIndex(['green', 'red', 'blue', 'red'], 'red'));
console.log(findIndex(['green', 'red', 'blue', 'red'], 'yellow'));

function findIndex(array, word) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === word) {
      return i;
    }
  }
  return -1;
}
*/

/*
console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));

function removeEgg(foods) {
  const result = [];
  let eggRemoved = 0;
  for (i = foods.length - 1; i >= 0; i--){
    if (foods[i] === 'egg' && eggRemoved < 2) {
      eggRemoved++;
      continue
    }
  result.push(foods[i]);
  }
  return result;
}
*/

