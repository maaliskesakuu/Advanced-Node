"use strict";

const url = require("url");
const path = require("path");

module.exports = (baseDir, dataStorage) => {
  const { sendJson, getPostData } = require("../library/requestHandler");

  return async (req, res) => {
    const route = decodeURIComponent(url.parse(req.url).pathname);

    try {
      if (route === "/getOne") {
        const result = await getPostData(req, "application/json");
        const queryResult = await dataStorage.get(result.employeedId);
        sendJson(res, queryResult);
      } else if (route === "/delete") {
        const result = await getPostData(req, "application/json");
        const queryResult = await dataStorage.remove(result.employeedId);
        sendJson(res, queryResult);
      } else if (route === "/insert") {
        const result = await getPostData(req, "application/json");
        const queryResult = await dataStorage.insert(queryResult);
        sendJson(res, queryResult);
      } else if (route === "/update") {
        const result = await getPostData(req, "application/json");
        const queryResult = await dataStorage.update(queryResult);
        sendJson(res, queryResult);
      }else {
        writeLog("Post route not found");
      }
    } catch (err) {
      writeLog(err.message);
    }
  };
};
