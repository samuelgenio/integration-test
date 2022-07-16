import express from "express";
import { readdirSync } from "fs";
import path from "path";

export default class RoutesDiscovery {

  static loadRoute(dirName = "api") {

    const router = express.Router();

    readdirSync(path.join(__dirname, `../routes/${dirName}`)).forEach((fileName) => {
      const fullPath = path.join(__dirname, `../routes/${dirName}`, fileName);
      require(fullPath)(router);
    });

    return router;
    
  }
}