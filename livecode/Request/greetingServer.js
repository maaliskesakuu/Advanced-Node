"use strict";

const http = require("http");
const url = require("url");

const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";

const server = http.createServer((req, res) => {
  const urldata = url.parse(req.url, true);
  console.log(urldata.query);
  const name = urldata.query.name;
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`<h1>Hi ${name}!<h1>`);
});

server.listen(port, host, () =>
  console.log(`Server ${host} listening port ${port}`)
);
