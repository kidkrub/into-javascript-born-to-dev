function getValue(elemId) {
  return document.getElementById(elemId).value;
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
  console.log(depositAmount);
  if (!depositAmount) {
    setText('deposit_error', 'กรุณาระบุจำนวนเงินฝาก');
    hasError = true;
  }

  let interestRate = parseFloat(getValue('interest_rate'));
  console.log(interestRate);
  if (!interestRate) {
    setText('interest_error', 'กรุณาระบุดอกเบี้ย');
    hasError = true;
  }
  let days = parseInt(getValue('days'));
  console.log(days);
  if (!days) {
    setText('days_error', 'กรุณาระบุจำนวนวัน');
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
