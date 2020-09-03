module.exports = (context) => {
  return {
    info: info.bind(context),
    debug: debug.bind(context),
    error: error.bind(context),
  };
};

function info(message, data = {}) {
  console.log(`${this.num}. [INFO] ${message}`, {
    meta: this.meta,
    data,
  });
}

function debug(message, data = {}) {
  console.log(`${this.num}. [DEBUG] ${message}`, {
    meta: this.meta,
    data,
  });
}

function error(message, data = {}) {
  console.log(`${this.num}. [ERROR] ${message}`, {
    meta: this.meta,
    data,
  });
}
