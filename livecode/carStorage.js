"use strict";

const cars = require("./cars.json");

exports.get = (key, value) => {
  const carsFound = [];
  for (let car of cars) {
    if (car[key] === value) {
      carsFound.push(car);
    }
  }
  return carsFound;
};

exports.get2 = (key, value) => {
  if (key && value) {
    const carsFound = [];
    for (let car of cars) {
      if (car[key] === value) {
        carsFound.push(car);
      }
    }
    return carsFound;
  } else {
    throw new Error("Missing parameter");
  }
};
