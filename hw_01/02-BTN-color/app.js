const colorPalette = document.getElementById("colorWindow");
const button = document.getElementById("button");

let isDefaultColor = false;

button.textContent = "ON";
colorPalette.style.backgroundColor = "#ffbe0a";

button.addEventListener("click", () => {
  if (isDefaultColor) {
    button.textContent = "OFF";
    colorPalette.style.backgroundColor = "grey";
  } else {
    button.textContent = "ON";
    colorPalette.style.backgroundColor = "#ffbe0a";
  }

  isDefaultColor = !isDefaultColor;
});
