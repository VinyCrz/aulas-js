/* 12a - 12b
const add = function (){
  console.log(2 + 3);
};

add();
add();

function runTwice(fun) {
  fun();
  fun();
}

runTwice (function() {
  console.log('12b')
});

runTwice(add);
*/

function updateButton() {
  const button = document.querySelector('.js-finish-button');

  button.innerHTML = 'Loading...'
  setTimeout(function(){
    button.innerHTML = 'Finished';
  }, 1500);
}

function addButton() {
  const buttonAddCart = document.querySelector('.js-message')
  buttonAddCart.innerHTML = 'Added';

  setTimeout(function() {
    buttonAddCart.innerHTML = '';
  }, 2000)
}

