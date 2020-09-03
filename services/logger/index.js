/*

type logger {
  info(message, data = {})
  debug(message, data = {})
  error(message, data = {})
}

*/

module.exports = (name, context) => {
  switch (name) {
    case "console":
      // This is over the fence. No dependency injection here.
      const createConsole = require("./console");
      return createConsole(context);
    default:
      throw new Error("Invalid Logger");
  }
};
