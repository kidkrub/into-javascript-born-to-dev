let round = prompt('How many times you want to play?');
for (let i = 0; i < round; i++) {
  let userinput = prompt('"head" or "tail"');
  let answer = '';
  if (Math.floor(Math.random() * 10 > 4)) {
    answer = 'head';
  } else {
    answer = 'tail';
  }
  if (userinput) {
    if (userinput == answer) {
      alert('Congratulations !');
    } else {
      alert('Sorry');
    }
  }
}
