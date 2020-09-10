"use strict";

const Datastorage = require("./datastorage/dataStorageLayer");

const dataStorage = new Datastorage();

dataStorage.getAll().then(result => console.log(result));

dataStorage.get(1).then(result => console.log(result));

dataStorage.get(100).then(result => console.log(result));

const newEmployee = {
  "employeeId": 3,
  "firstname": "Mary",
  "lastname": "Stormy",
  "department":"secr",
  "salary": 9999.99
}

// dataStorage.insert(newEmployee).then(result => console.log(result));

// dataStorage.remove(3).then(result => console.log(result));

const updatedEmployee = {
  "employeeId": 3,
  "firstname": "Maryx",
  "lastname": "Stormyx",
  "department":"secrx",
  "salary": 8888.99
}

dataStorage.update(updatedEmployee).then(result => console.log(result));