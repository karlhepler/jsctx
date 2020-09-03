// Need to define the logger interface.

/*
 
 type logger {
   info(message, data = {})
   debug(message, data = {})
   error(message, data = {})
 }
 
 */

// THE SERVICE NEEDS THE REQUEST INFORMATION.
// IT HAS TO BE.

// Providers need access to global state.
// There needs to be a single global context as well.
// It is accessible by everything and is the same accross requests.
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
