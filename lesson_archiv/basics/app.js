const myElem = document.querySelector('.main p:first-child');
const title = myElem.getAttribute('title');
console.log(title);
myElem.setAttribute('id', 'qwerty');

document.getElementById('qwerty').textContent += 'Hello from 27th lesson in Hillel School';

// const students = document.getElementsByClassName('students');
const students = document.querySelectorAll('.students');

const colors = [
  'red', 'yellow', 'green', 'blue', 'black'
];

let i = 1;
for (let student of students) {
  student.textContent = i + ' ' + student.textContent
  student.style.backgroundColor = colors[i-1];
  i++;
}

////////

const parent = document.querySelector('.main');

const myDiv = document.createElement('div');
myDiv.innerHTML = '<span>I am generated element on the page.</span>';
myDiv.classList.add('dynamic');

parent.appendChild(myDiv);



const phones = [
  'iPhone',
  'Samsung Galaxy S24',
  'Huawei',
  'LG old one',
  '6qwertyui'
];

const phoneElementsParent = document.querySelector('ul.phones');

for(let phone of phones) {
  const phoneElement = document.createElement('li');
  phoneElement.textContent = phone;

  phoneElementsParent.appendChild(phoneElement);
}