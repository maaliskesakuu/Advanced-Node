"use strict";

const http = require("http");
const url = require("url");

const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";
const fs = require("fs");
const path = require("path");

const { get, getAll } = require("./persons.js");

const homePath = path.join(__dirname, "home.html");

const server = http.createServer((req, res) => {
  const urldata = url.parse(req.url, true);
  const name = urldata.query.name;
  const route = decodeURIComponent(urldata.pathname.toLowerCase());
  let result = [];

  if (route === "/") {
    fs.readFile(homePath, "utf8", (err, data) => {
      if (err) {
        res.setStatus = 404;
        res.end(err.message); //just for debugging
      } else {
        res.writeHead(200, {
          "Content-Type": "text/html",
          "Content-Length": Buffer.byteLength(data, "UTF8"),
        });
        res.end(data);
      }
    });
  } else {
    if (route === "/persons") {
      result = getAll();
    } else if (route === "/persons/firstname") {
      result = get("firstname", name);
    } else if (route === "/persons/lastname") {
      result = get("lastname", name);
    } else if (route === "/persons/age") {
      result = get("age", +name); //+changes to age a number
    } else {
      result = { message: "key not found" };
    }
    res.writeHead(200, {
      "Content-Type": "application/json; charset=utf8",
      "Access-Control-Allow-Origin": "*",
    });
    res.end(JSON.stringify(result));
  }
});

server.listen(port, host, () =>
  console.log(`Server ${host} listening port ${port}`)
);
