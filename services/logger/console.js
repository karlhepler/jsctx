module.exports.info = function info(message, data = {}) {
  console.log(`${this.num}. [INFO] ${message}`, {
    meta: this.meta,
    data,
  });
};

module.exports.debug = function debug(message, data = {}) {
  console.log(`${this.num}. [DEBUG] ${message}`, {
    meta: this.meta,
    data,
  });
};

module.exports.error = function error(message, data = {}) {
  console.log(`${this.num}. [ERROR] ${message}`, {
    meta: this.meta,
    data,
  });
};
