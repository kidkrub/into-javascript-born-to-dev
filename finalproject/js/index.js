(() => {
  var taxexplain = document.getElementById('total_tax');
  var tooltip = new bootstrap.Tooltip(taxexplain);
})();

function getValue(elemId) {
  return document.getElementById(elemId).value;
}

function setValue(elemId, value) {
  return (document.getElementById(elemId).value = value);
}

function clearText(elemId) {
  document.getElementById(elemId).innerHTML = '';
}

function setText(elemId, text) {
  document.getElementById(elemId).innerText = text;
}

function clearErrors() {
  clearText('deposit_error');
  clearText('interest_error');
  clearText('days_error');
}

function clearResults() {
  clearText('total_interest');
  clearText('total_tax');
  clearText('total_result');
}

function inputValidator() {
  clearErrors();
  let hasError = false;

  let depositAmount = parseFloat(getValue('deposit_amount'));
  if (isNaN(depositAmount)) {
    setText('deposit_error', 'กรุณาระบุจำนวนเงินฝากเป็นตัวเลขเท่านั้น');
    hasError = true;
  }

  let interestRate = parseFloat(getValue('interest_rate'));
  if (isNaN(interestRate)) {
    setText('interest_error', 'กรุณาระบุดอกเบี้ยเป็นตัวเลขเท่านั้น');
    hasError = true;
  }

  let days = parseInt(getValue('days'));
  if (isNaN(days)) {
    setText('days_error', 'กรุณาระบุจำนวนวันเป็นตัวเลขเท่านั้น');
    hasError = true;
  }

  return { depositAmount, interestRate, days, hasError };
}

function calculateDepositInterest() {
  let { depositAmount, interestRate, days, hasError } = inputValidator();
  if (hasError) {
    clearResults();
    return;
  }
  let interest = (depositAmount * (interestRate / 100) * (days / 365)).toFixed(
    3
  );
  let tax = 0;
  if (interest > 20000) {
    tax = (interest * 0.15).toFixed(3);
  }
  setText('total_interest', interest + ' บาท');
  setText('total_tax', '- ' + tax + ' บาท');
  setText('total_result', (interest - tax).toFixed(3) + ' บาท');
}

function clearAllData() {
  setValue('deposit_amount', '');
  setValue('interest_rate', '');
  setValue('days', '');
}
