"use strict";

const persons = require("./telephones.json");

const getTypes = () => {
  let Types = [];
  for (let person of persons) {
    for (let phone of person.phones) {
      if (!Types.includes(phone.type)) {
        Types.push(phone.type);
      }
    }
  }
  return;
  // return console.log(Types)
};

// getTypes();


