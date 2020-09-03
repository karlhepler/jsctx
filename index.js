const { env } = process;
const express = require("express");
const math = require("./lib/math");
const handleFoo = require("./handlers/foo");
const createLogger = require("./services/logger");

// Define global context
const context = Object.create(null);
context.meta = { main: __filename, num: 0 };

// Initialize the app
const app = express();

// Increment request number
app.use((req, res, next) => {
  context.meta.num++;
  next();
});

// Initialize request context
app.use((req, res, next) => {
  req.context = Object.create(context);
  req.context.meta.url = req.url;
  next();
});

// Add log to request context
app.use((req, res, next) => {
  req.context.logger = createLogger.bind(req.context)(env.LOG_DRIVER);
  next();
});

// Log each request
app.use((req, res, next) => {
  req.context.logger.info(`${req.method} ${req.url}`);
  next();
});

// Handle requests
app.get("/foo", handleFoo);

// Server listens
app.listen(env.PORT, () => {
  console.log(`Listening on port ${env.PORT}`);
  console.log(`http://localhost:${env.PORT}`);
});
