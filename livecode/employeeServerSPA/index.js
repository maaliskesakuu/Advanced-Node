"use strict";

const http = require("http");
const fs = require("fs");

const Datastorage = require("./datastorage/dataStorageLayer");

const dataStorage = new Datastorage();

//Global logger
const output = fs.createWriteStream("./logfile.log");
const { Console } = require("console");
global.writeLog = new Console({ stdout: output, stderr: output }).log;
// ############

// to test logfile.log, hello appears in that file
// writeLog("hello");

// to test change dataStorageLayer.js line 8 employees.json to something incorrect
// dataStorage.get(1).then(result => console.log(result))

const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";

const handleGetRequests = require("./routeHandlers/routeHandlerGet")(
  __dirname,
  dataStorage
);

const server = http.createServer(async (req, res) => {
  try {
    switch (req.method.toUpperCase()) {
      case "GET":
        handleGetRequests(req, res);
        break;
      // case "POST":
      //   handlePostRequest(req, res);
      //   break;
      default:
        writeLog("Method not in use");
        res.end();
    }
  } catch (error) {
    writeLog(error.message);
    res.end();
  }
});

server.listen(port, host, () =>
  writeLog(`Server ${host} started on port ${port}`)
);
