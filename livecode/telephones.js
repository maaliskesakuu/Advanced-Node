"use strict";

const phoneRegister = require("./telephones.json");

exports.getTypes = () => {
  let types = [];
  for (let person of phoneRegister) {
    for (let phone of person.phones) {
      if (!types.includes(phone.type)) {
        types.push(phone.type);
      }
    }
  }
  return types;
};

exports.getNumbersByType = (firstname, lastname, type) => {
  if (firstname && lastname && type) {
    const numbers = [];
    for (let person of phoneRegister) {
      if (person.firstname === firstname && person.lastname === lastname) {
        for (let phone of person.phones) {
          if (phone.type === type) {
            numbers.push(phone.number);
          }
        }
      }
    }
    return numbers;
  } else {
    throw new Error("missing parameter");
  }
};

exports.getAllNumbersByType = type => {
  if (!type) throw new Error("missing parameter");

  const numbersFound = [];
  for (let person of phoneRegister) {
    for (let phone of person.phones) {
      if (phone.type === type) {
        numbersFound.push({
          firstname: person.firstname,
          lastname: person.lastname,
          number: {
            type: phone.type,
            tel: phone.number,
          },
        });
      }
    }
  }
  return numbersFound;
};

exports.getAllNumbers = () => phoneRegister;

exports.getName = number => {
  for (let person of phoneRegister) {
    for (let phone of person.phones) {
      if (phone.number === number) {
        return {
          firstname: person.firstname,
          lastname: person.lastname,
        };
      }
    }
  }
  return null;
};
