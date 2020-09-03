//post handlers
"use strict";

const path = require("path");
const url = require("url");

const {
  read,
  send,
  sendJson,
  getPostData,
  redirectError,
} = require("./handler");

module.exports = baseDir => {
  const get = require(path.join(baseDir, "carstorage", "carstorage.js"));

  return async (req, res) => {
    const route = decodeURIComponent(url.parse(req.url).pathname);
    try {
      if (route === "/jsonencoded") {
        const result = await getPostData(req, "application/json");
        const car = await get("licence", result.licence);
        sendJson(res, car);
      } else if (route = "/urlencoded") {
        const result = await getPostData(
          req,
          "application/x-www-form-urlencoded"
        );
        const car = await get("licence", result.licence);
        sendJson(res, car);
      } else {
        redirectError(res, "Resource not found");
      }
    } catch (err) {
      redirectError(res, err.message);
    }
  };
};
