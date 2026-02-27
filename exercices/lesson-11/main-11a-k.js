/* Exericise 11a
const nums = [10, 20, 30];

nums[2] = 99;

console.log(nums);
*/

/* Exercise 11b
console.log(getLastValue([1, 20, 22, 24, 5]));
console.log(getLastValue(['eu', 'quero', 'passar', 'nessa', 'vida']))

function getLastValue(array) {
  const lastIndex = array.length - 1;
  return array[lastIndex];
}
*/

/*
console.log(arraySwap([1, 20, 22, 24, 5]));
console.log(arraySwap(['hi', 'hello', 'good']));

function arraySwap(array) {
  let change = array[0];
  array[0] = array[array.length - 1];
  array[array.length - 1] = change;
  return array;
}
*/


/* Exercise 11d
for (let i = 0; i <= 10; i++) {
  console.log(i);
  i++;
}
*/

/* Exercise 11e
for (let i = 5; i >= 0; i--){
  console.log(i);
  i +- 1;
}
*/


/* Exercise 11f
let num = 0;

while (num <= 10) {
  console.log(num);
  num += 2;
}

let num2 = 5;
while (num2 >= 0) {
  console.log(num2)
  num2--;
}
*/

/* Exercise 11g
const nums = [1, 2, 3];
const result = [];

for (let i = 0; i < nums.length; i++){
  result.push(nums[i] + 1)
}

console.log(result);
*/


/* Exercise 11h
console.log(addOne([1, 2, 3]));
console.log(addOne([-2, -1,  0, 99]));

function addOne(array) {
  result = [];
  for (let i = 0; i < array.length; i++){
    result.push(array[i] + 1);
  }
  return result;
}
*/

/* Exercise 11j
console.log(addNum([1, 2, 3], 2));
console.log(addNum([1, 2, 3], 3));
console.log(addNum([-2, -1, 0, 99], 2));

function addNum(array, num) {
  result = []
  for (let i = 0; i < array.length; i++) {
    result.push(array[i] + num)
  }
  return result;
}
*/


console.log(countPositive([1, -3, 5]));
console.log(countPositive([-2, 3, -5, 7, 10]));

function countPositive(nums) {
  let result = 0;

  for (let i = 0; i < nums.length; i++){
    if (nums[i] > 0){
      result++;
    }
  }
  return result;
}