"use strict";

const { read, write } = require("../library/fileHandler");

const fs = require("fs");
const path = require("path");

const storageFile = path.join(__dirname, "employees.json");

module.exports = class Datastorage {
  constructor() {
    fs.readFile(storageFile, (err, data) => {
      if (err) {
        this.storage = {};
      } else {
        this.storage = JSON.parse(data);
      }
    });
  }

  async readStorage() {
    try {
      const data = await read(storageFile);
      this.storage = JSON.parse(data.fileData);
    } catch (err) {
      // writeLog(err.message)
    }
  }

  async writeStorage() {
    try {
      await write(
        storageFile,
        JSON.stringify(this.storage, null, 4), // beautifies with some indentation
        {
          encoding: "utf8",
          flag: "w",
        }
      );
    } catch (err) {
      // writeLog(err.message)
    }
  }

  getFromStorage(id) {
    for (let employee of this.storage) {
      if (employee.employeeId == +id) {
        return [employee];
      }
    }
    return [];
  }

  //"public" API
  getAll() {
    return new Promise(async resolve => {
      await this.readStorage();
      resolve(this.storage);
    });
  }

  get(id) {
    return new Promise(async resolve => {
      await this.readStorage();
      const result = this.getFromStorage(id);
      if (result.length > 0) {
        resolve(result);
      } else {
        resolve({ message: "not found" });
      }
    });
  }
};
