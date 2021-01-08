let number = prompt('enter number between 1-100');
document.getElementById('input').innerText = 'input number is ' + number;
document.getElementById('result').innerText = 'correct number is ' + Math.floor(Math.random() * 100);
