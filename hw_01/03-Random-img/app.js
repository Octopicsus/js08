document.addEventListener("DOMContentLoaded", () => {
    const imageCount = 3; 
    const randomIndex = Math.floor(Math.random() * imageCount) + 1; // 
    const imagePath = `/hw_01/03-Random-img/img/${randomIndex}.png`; 
  
    const imageElement = document.getElementById("randomImage");
    imageElement.src = imagePath; 
  });
  