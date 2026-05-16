function formatMoney(num) {
  return Number(num).toLocaleString('th-TH', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}

function calculateOntop() {

  const saleAmount = parseFloat(document.getElementById('saleAmount').value) || 0;
  const ontopPercent = parseFloat(document.getElementById('ontopPercent').value) || 0;
  const bonusAmount = parseFloat(document.getElementById('bonusAmount').value) || 0;

  const ontopMoney = (saleAmount * ontopPercent) / 100;
  const totalMoney = ontopMoney + bonusAmount;

  document.getElementById('ontopResult').textContent =
    formatMoney(ontopMoney) + ' บาท';

  document.getElementById('totalResult').textContent =
    formatMoney(totalMoney) + ' บาท';
}
