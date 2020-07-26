import { Logger } from "log4js";

export class Log4JsConfig {

    static log() : Logger {
      let log4js = require('log4js');
      let logger = log4js.getLogger();
      logger.level = "debug";
      return logger;
    }
}