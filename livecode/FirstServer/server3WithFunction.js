"use strict";

const person = require("./person.json");

const http = require("http");
const port = process.env.PORT || 3000;
const host = process.env.HOST || 3000;

function createHTML() {
  let partA = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>Person data</title>
    </head>
    <body>
      <h1>Person</h1>`;

  let partB = `
      <h2>${person.firstname} ${person.lastname}</h2>`;

  let partC = `
    </body>
  </html>`;

  return partA + partB + partC;
}

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-type": "text/html; charset=utf8" });
  res.write(createHTML());
  res.end();
});

server.listen(port, host, () => console.log(`Server ${host} port ${port}`));
