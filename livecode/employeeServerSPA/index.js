"use strict";

const Datastorage = require("./datastorage/dataStorageLayer");

const dataStorage = new Datastorage();

dataStorage.getAll().then(result => console.log(result));

dataStorage.get(1).then(result => console.log(result));
