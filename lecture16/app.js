let score = prompt('Input Score');
let grade = 'F';
if (score >= 80) {
  grade = 'A';
} else if (score >= 70) {
  grade = 'B';
} else if (score >= 60) {
  grade = 'C';
} else if (score >= 50) {
  grade = 'D';
}
document.getElementById('result').innerText = 'Your grade is ' + grade;
