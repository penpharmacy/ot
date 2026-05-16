const RATE = 300;

const staffList = [
  "ส",
  "อ",
  "บ",
  "พง",
  "เพ็ญ",
  "แปง",
  "กิ้ม",
  "หลิว"
];

const tbody = document.getElementById("tbody");

function renderRows() {

  tbody.innerHTML = "";

  staffList.forEach((name,index)=>{

    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${name}</td>

      <td>
        <input type="number" step="0.5" value="0" class="assigned">
      </td>

      <td>
        <input type="number" step="0.5" value="0" class="actual">
      </td>

      <td class="diff">0</td>

      <td>
        <span class="money">0 บาท</span>
      </td>
    `;

    tbody.appendChild(tr);
  });

  addEvents();
}

function addEvents(){

  const rows = tbody.querySelectorAll("tr");

  rows.forEach(row=>{

    const assigned = row.querySelector(".assigned");
    const actual = row.querySelector(".actual");

    assigned.addEventListener("input",calculate);
    actual.addEventListener("input",calculate);

  });

}

function calculate(){

  const rows = tbody.querySelectorAll("tr");

  let totalAssigned = 0;
  let totalActual = 0;
  let totalMoney = 0;

  rows.forEach(row=>{

    const assigned = parseFloat(row.querySelector(".assigned").value) || 0;
    const actual = parseFloat(row.querySelector(".actual").value) || 0;

    const diff = actual - assigned;
    const money = diff * RATE;

    totalAssigned += assigned;
    totalActual += actual;
    totalMoney += money;

    const diffCell = row.querySelector(".diff");
    diffCell.textContent = diff.toFixed(1);

    if(diff > 0){
      diffCell.className = "diff diff-plus";
    }else if(diff < 0){
      diffCell.className = "diff diff-minus";
    }else{
      diffCell.className = "diff";
    }

    const moneyBox = row.querySelector(".money");

    moneyBox.textContent = money.toLocaleString() + " บาท";

    if(money > 0){
      moneyBox.className = "money plus";
    }else if(money < 0){
      moneyBox.className = "money minus";
    }else{
      moneyBox.className = "money";
    }

  });

  document.getElementById("totalAssigned").textContent =
    totalAssigned.toFixed(1);

  document.getElementById("totalActual").textContent =
    totalActual.toFixed(1);

  document.getElementById("totalMoney").textContent =
    totalMoney.toLocaleString() + " บาท";
}

renderRows();
