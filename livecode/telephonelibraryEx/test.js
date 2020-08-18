"use strict";

const {
  getTypes,
  getNumbersByType,
  getAllNumbersByType,
  getAllNumbers,
  getName
} = require("./telephones");

console.log(getTypes());

console.log(getNumbersByType("Matt", "River", "work"));

console.log(getAllNumbersByType("home"));

// the one below catches the error and prints the error message
try {
  console.log(getAllNumbersByType());
} catch (err) {
  console.log(err.message);
}

console.log(getAllNumbers());

console.log(JSON.stringify(getAllNumbers()));

console.log(getName('56834923'))
