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
      <h1>Cars</h1>`
    
  let partB = `
    <h2>${cars[0].model} ${cars[0].licence}</h2>
    <h2>${cars[1].model} ${cars[1].licence}</h2>
    <h2>${cars[2].model} ${cars[2].licence}</h2>
    <h2>${cars[3].model} ${cars[3].licence}</h2>
  `
  
  let partC = `
    </body>
  </html>`

  return partA + partB + partC;
}
 
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-type": "text/html;charset=utf8" });
  res.write(createHTML());
  res.end();
});

server.listen(port, host, () => {
  console.log(`Server ${host} is listening the port ${port}`);
});
