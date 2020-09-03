const obj = require("../../lib/obj.js");

/*

type logger {
  info(message, data = {})
  debug(message, data = {})
  error(message, data = {})
}

*/

module.exports = function createLogger(name) {
  switch (name) {
    case "console":
      // This is over the fence. No dependency injection here.
      return obj.bindAll(require("./console"), this);
    default:
      throw new Error("Invalid Logger");
  }
};
