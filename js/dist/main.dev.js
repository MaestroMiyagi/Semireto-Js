"use strict";

var form = document.getElementById('person-form');
var submitButton = document.getElementById('submit-button');
var tablePeople = document.getElementById('people-wrapper');
var people = [];

var addPerson = function addPerson() {
  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;
  var email = document.getElementById('name').value;
  var person = {
    firstName: firstName,
    lastName: lastName,
    email: email
  };
  people.push(person);
  updateTable();
};

var deletePerson = function deletePerson(index) {
  people.splice(index, 1);
  updateTable();
};

var updateTable = function updateTable() {
  tablePeople.innerHTML = '';
  people.forEach(function (person, index) {
    var row = document.createElement('tr');
    var indexCell = document.createElement('td');
    indexCell.textContent = index + 1;
    row.appendChild(indexCell);
    var firstNameCell = document.createElement('td');
    firstNameCell.textContent = person.firstName;
    row.appendChild(firstNameCell);
    var lastNameCell = document.createElement('td');
    lastNameCell.textContent = person.lastName;
    row.appendChild(lastNameCell);
    var emailCell = document.createElement('td');
    emailCell.textContent = person.email;
    row.appendChild(emailCell);
    var deleteCell = document.createElement('td');
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Borrar';
    deleteButton.addEventListener('click', function () {
      return deletePerson(index);
    });
    deleteCell.appendChild(deleteButton);
    row.appendChild(deleteCell);
    tablePeople.appendChild(row);
  });
};

submitButton.addEventListener('click', addPerson);