"use strict";

const cars = require("./cars.json");

//prints all cars
for (let car of cars) {
  if (car.model.toLowerCase() === "hoppa") {
    console.log(car);
  }
}

function getWithModel(model) {
  let carsFound = [];
  for (let car of cars) {
    if (car.model.toLowerCase() === model.toLowerCase()) {
      carsFound.push(car);
    }
  }
  return carsFound;
}

console.log(getWithModel("hoppa"));
console.log("########### kaarat ##########");
console.log(getWithModel("kaara"));
console.log("########### x ##########");
console.log(getWithModel("x"));

function getWithLicence(licence) {
  for (let car of cars) {
    if (car.licence.toUpperCase() === licence.toUpperCase()) {
      return car;
    }
  }
  return null;
}

let foundCar = getWithLicence("ABC-1");

console.log(foundCar);
console.log(getWithLicence("x"));
