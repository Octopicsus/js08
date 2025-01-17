function createDomElement(tagName, textContent, container) {
  const newElement = document.createElement(tagName);
  newElement.textContent = textContent;
  container.appendChild(newElement);
  return newElement;
}

document.addEventListener("DOMContentLoaded", () => {
  createDomElement("h1", "Hello, World!", document.body);
});

