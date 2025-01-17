document.addEventListener("DOMContentLoaded", () => {
  const imageCount = 3;
  const randomIndex = Math.floor(Math.random() * imageCount) + 1; //
  const imagePath = `/hw_01/03-Random-img/img/${randomIndex}.png`;

  const cardImage = document.getElementById("randomImage");
  cardImage.style.backgroundImage = `url(${imagePath})`;
  scaleImage(1.8);
});

function scaleImage(scale) {
 const cardImage = document.getElementById("randomImage"); 
  cardImage.style.transform = `scale(${scale})`;
}
