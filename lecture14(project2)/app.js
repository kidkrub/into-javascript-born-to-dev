let number = prompt('enter number between 1-1000');
let random = Math.floor(Math.random() * 1000);
document.getElementById('input').innerText = 'input number is ' + number;
document.getElementById('random').innerText = 'correct number is ' + random;
if (input == random) {
  document.getElementById('result').innerText = 'you won';
} else {
  document.getElementById('result').innerText = 'you lose';
}
