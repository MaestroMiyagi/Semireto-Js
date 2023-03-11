
const form = document.getElementById('person-form');
const submitButton = document.getElementById('submit-button');
const tablePeople = document.getElementById('people-wrapper');


let people = [];


const addPerson = () => {

  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const email = document.getElementById('name').value;

  const person = {
    firstName: firstName,
    lastName: lastName,
    email: email
  };

  people.push(person);
  updateTable();
}

const deletePerson = (index) => {
  people.splice(index, 1);
  updateTable();
}
/* Pendiente de optimización */
const  updateTable = () => {
  tablePeople.innerHTML = '';

  people.forEach((person, index) => {
    const row = document.createElement('tr');

    const indexCell = document.createElement('td');
    indexCell.textContent = index + 1;
    row.appendChild(indexCell);

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = person.firstName;
    row.appendChild(firstNameCell);

    const lastNameCell = document.createElement('td');
    lastNameCell.textContent = person.lastName;
    row.appendChild(lastNameCell);

    const emailCell = document.createElement('td');
    emailCell.textContent = person.email;
    row.appendChild(emailCell);

    const deleteCell = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Borrar';
    deleteButton.addEventListener('click', () => deletePerson(index));
    deleteCell.appendChild(deleteButton);
    row.appendChild(deleteCell);

    tablePeople.appendChild(row);
  });
}

submitButton.addEventListener('click', addPerson);