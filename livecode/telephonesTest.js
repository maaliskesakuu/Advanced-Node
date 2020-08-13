"use strict";

const persons = require("./telephones.json");

//prints all persons and their phonenumbers
for (let person of persons) {
  console.log(`${person.firstname} ${person.lastname}`);
  // console.log(person.firstname + ' ' + person.lastname
  // );
  for (let phone of person.phones) {
    console.log(`\t${phone.type} ${phone.number}`);
  }
}

for (let person of persons) {
  console.log(`${person.lastname}`);
  const typeArray = [];
  for (let phone of person.phones) {
    if (!typeArray.includes(phone.type)) {
      typeArray.push(phone.type);
    }
  }
  console.log(`\t${typeArray.join("\n\t")}`);
  console.log(typeArray.join(" -##- "));
  console.log(typeArray.join(" + "));
}

for (let person of persons) {
  for (let phone of person.phones) {
    if (phone.type === 'home') {
      console.log(`${person.firstname} ${person.lastname} ${phone.number}`)
    }
  }
}
