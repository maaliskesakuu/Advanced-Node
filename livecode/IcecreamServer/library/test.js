"use strict";

const { read } = require("./fileHandler");

const filePath = "./fileHandler.js";

read(filePath)
  .then(result => console.log(result.fileData, result.mime))
  .catch(err => console.log(err.message));
