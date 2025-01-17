const tableContainer = document.getElementById("pifagor-table");

const table = document.createElement("table");

const size = 9;
for (let i = 0; i <= size; i++) {
  const row = document.createElement("tr");

  for (let j = 0; j <= size; j++) {
    const cell = document.createElement(i === 0 || j === 0 ? "th" : "td");
    if (i === 0 && j === 0) {
      cell.textContent = "";
    } else if (i === 0) {
      cell.textContent = j;
    } else if (j === 0) {
      cell.textContent = i;
    } else {
      cell.textContent = i * j;
    }
    row.appendChild(cell);
  }

  table.appendChild(row);
}

tableContainer.appendChild(table);
