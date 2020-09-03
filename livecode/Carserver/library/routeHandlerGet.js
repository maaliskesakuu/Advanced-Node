//get handlers
"use strict";

const path = require("path");
const url = require("url");

const { read, send, sendJson, isIn, redirectError } = require("./handler");

module.exports = baseDir => {
  const config = require(path.join(baseDir, "config.json"));
  const get = require(path.join(baseDir, "carstorage", "carstorage.js"));
  // const menupath = path.join(baseDir, "webPages", "menu.html");
  const menuPath = path.join(baseDir, config.WEBPAGES, config.MENU);
  const errPath = path.join(baseDir, config.WEBPAGES, "errorPage.html");

  const resourcePaths = ["/favicon", "/styles/", "/images/", "/js/"];
  const webPagePaths = [`/${config.WEBPAGES}/`];

  return async (req, res) => {
    const route = decodeURIComponent(url.parse(req.url).pathname);
    try {
      if (route === "/") {
        const result = await read(menuPath);
        send(res, result);
      } else if (route === "getAll") {
        sendJson(res, get());
      } else if (isIn(route, ...webPagePaths, ...resourcePaths)){
        const result = await read(path.join(baseDir, route));
        send(res, result);
      } else if (route === "/error") {
        const message = url.parse(req.url, true).query.message;
        const result = await read(errPath);
        result.fileData = result.fileData.replace("**MESSAGE**", message);
        send(res, result);
      } else {
        redirectError(res, "Resource not found");
      }
    } catch (err) {
      redirectError(res, "Not found");
    }
  };
};
