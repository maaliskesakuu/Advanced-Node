"use strict";

const persons = require("./persons.json");

function get(key, value) {
  const found = [];
  if (key && value) {
    for (let person of persons) {
      if (person[key] === value) {
        found.push(person);
      }
    }
  }
  return found;
}

function getAll() {
  return persons;
}

module.exports = { get, getAll };
