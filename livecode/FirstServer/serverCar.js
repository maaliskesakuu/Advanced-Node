"use strict";

const cars = require("./car.json");

const http = require("http");
const port = process.env.port || 3000;
const host = process.env.port || 3000;

const createHTML = () => {
  let partA = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>Car data</title>
    </head>
    <body>
      <h1>Cars</h1>`;

  let partB = "";
  for (let car of cars) {
    partB += `<h2>${car.model}: ${car.licence}</h2>`;
  }

  let partC = `
    </body>
  </html>`;

  return partA + partB + partC;
};

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-type": "text/html;charset=utf8" });
  res.write(createHTML());
  res.end();
});

server.listen(port, host, () => {
  console.log(`Server ${host} is listening the port ${port}`);
});
