// function handleTextClick() {
//   alert('qwertyuio')
// }

// // document.querySelector('.colored').onclick = handleTextClick;

// document.querySelector('.colored').addEventListener('click', handleTextClick);
const people = [
  { id: "1", fullname: "Jack Daniels", balance: 1000 },
  { id: "2", fullname: "John Doe", balance: 2000 },
  { id: "3", fullname: "Bill Simmons", balance: 1500 },
  { id: "4", fullname: "Kate Ivanova", balance: 2300 },
];

function createPeopleOnPage() {
  const parent = document.getElementById("wrapper");

  for (let person of people) {
    const myElem = document.createElement("p");

    myElem.textContent = person.fullname;
    myElem.setAttribute("data-id", person.id);

    myElem.addEventListener("click", function (event) {
      const id = event.target.getAttribute("data-id");
      console.log("ID: " + id);

      const myPerson = people.find((person) => person.id === id);
      console.log("$" + myPerson.balance);
    });

    parent.appendChild(myElem);
  }
}


const myLink = document.querySelector('a');

myLink.addEventListener('click', (event) => {
  event.preventDefault();
  createPeopleOnPage();
});

// function addEventListener(eventType, callback) {
//   if (EVENT.TYPE === eventType) {
//     callback(EVENT);
//   }
// }



document.querySelector('input').addEventListener('click', () => {
  sessionStorage.setItem('hillel', 'Fullstack JS September');


  localStorage.setItem('students', JSON.stringify(people))

});

document.querySelector('#get').addEventListener('click', () => {
  console.log(sessionStorage.getItem('hillel'));

  const dataFromLS = JSON.parse(localStorage.getItem('students'));
  console.log(dataFromLS);

})