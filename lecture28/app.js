function toCelsius(fahrenheit) {
  let value = ((fahrenheit - 32) * 5) / 9;
  return value.toFixed(2) + '°C';
}

function toFahrenheit(celsius) {
  let value = (celsius * 9) / 5 + 32;
  return value.toFixed(2) + '°F';
}

function display(elementId, value) {
  document.getElementById(elementId).innerHTML = value;
}

function showCelsius(value) {
  display('result', toCelsius(value));
}

function showFahrenheit(value) {
  display('result', toFahrenheit(value));
}
