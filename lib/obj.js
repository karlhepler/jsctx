module.exports.bindAll = (obj, context) => {
  const bound = Object.create(null);
  for (const prop in obj) {
    bound[prop] = obj[prop].bind(context);
  }
  return bound;
};
