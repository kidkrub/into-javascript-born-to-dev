let qrt = prompt('quantity');
let sum = 0;
for (let i = 1; i <= qrt; i++) {
  let item_price = prompt('item price');
  sum += parseInt(item_price);
  document.getElementById('price-list').innerHTML +=
    'item : ' + i + ' price = ' + item_price + '<br>';
}
document.getElementById('result').innerHTML = 'Total :' + sum;
