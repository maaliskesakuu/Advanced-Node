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
      writeLog(err.message)
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
      writeLog(err.message)
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

  addToStorage(employee) {
    const result = this.getFromStorage(+employee.employeeId);
    if (result.length === 0) {
      this.storage.push(employee);
      return true;
    } else {
      return false;
    }
  }

  deleteFromStorage(id) {
    for (let i = 0; i < this.storage.length; i++) {
      if (this.storage[i].employeeId == +id) {
        this.storage.splice(i, 1);
        return true;
      }
    }
    return false;
  }

  updateStorage(employee) {
    for (let i = 0; i < this.storage.length; i++) {
      if (this.storage[i].employeeId == +employee.employeeId) {
		  Object.assign(this.storage[i], employee);
		  return true;
      }
	}
	  return false;
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

  insert(employee) {
    return new Promise(async resolve => {
      await this.readStorage();
      if (this.addToStorage(employee)) {
        await this.writeStorage();
        resolve({ message: "insert OK" });
      } else {
        resolve({ message: "already in use" });
      }
    });
  }

  remove(employeeId) {
    return new Promise(async resolve => {
      await this.readStorage();
      if (this.deleteFromStorage(employeeId)) {
        await this.writeStorage();
        resolve({ message: "delete OK" });
      } else {
        resolve({ message: "Not deleted" });
      }
    });
  }

  update(employee) {
    return new Promise(async resolve => {
      await this.readStorage();
      if (this.updateStorage(employee)) {
        await this.writeStorage();
        resolve({ message: "update OK" });
      } else {
        resolve({ message: "Not updated" });
      }
    });
  }
};
