"use strict";

const http = require("http");

const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(`
  <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Request object</title>
      </head>
      <body>
        <h1>request info</h1>
        <h2>headers: ${JSON.stringify(req.headers)}</h2>
        <h2>host: ${req.headers.host}</h2>
        <h2>agent: ${req.headers['user-agent']}</h2>
        <h2>method: ${req.method}</h2>
        <h2>url: ${req.url}</h2>
        <h2>pathname: ${require('url').parse(req.url).pathname}</h2>
      </body>
    </html>
  `)
  res.end();
});

server.listen(port, host, () => console.log(`Server ${host} listening ${port}`))
