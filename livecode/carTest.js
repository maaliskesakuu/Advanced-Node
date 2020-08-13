"use strict";

const { get, get2 } = require("./carStorage");

console.log(get("model", "Hoppa"));
console.log(get("licence", "ABC-1"));

for (let car of get("model", "Kaara")) {
  console.log(`model: ${car.model}: ${car.licence}`);
}

// throws an error: Missing parameter
// console.log(get2());

// const cars = require("./cars.json");

// //prints all cars
// for (let car of cars) {
//   if (car.model.toLowerCase() === "hoppa") {
//     console.log(car);
//   }
// }

// function getWithModel(model) {
//   let carsFound = [];
//   for (let car of cars) {
//     if (car.model.toLowerCase() === model.toLowerCase()) {
//       carsFound.push(car);
//     }
//   }
//   return carsFound;
// }

// console.log(getWithModel("hoppa"));
// console.log("########### kaarat ##########");
// console.log(getWithModel("kaara"));
// console.log("########### x ##########");
// console.log(getWithModel("x"));

// function getWithLicence(licence) {
//   for (let car of cars) {
//     if (car.licence.toUpperCase() === licence.toUpperCase()) {
//       return car;
//     }
//   }
//   return null;
// }

// function getWithLicence(licence) {
//   let carWithLicence = [];
//   for (let car of cars) {
//     if (car.licence.toUpperCase() === licence.toUpperCase()) {
//       carWithLicence.push(car);
//     }
//   }
//   return carWithLicence;
// }

// let foundCar = getWithLicence("ABC-1");

// console.log(foundCar);
// console.log(getWithLicence("x"))
