exports.objectStamper = function objectStamper({props = {}, init, methods = {}} = {}) {

  if (Object.keys(props).length === 0 && !init && Object.keys(methods).length === 0) {
    return {
      compose(fn) {
        return Object.assign({}, fn())
      }
    }
  }
  return function stampFn(...args) {
    let stamp = {
      ...props,
      ...methods,
      compose(fn) {
        return Object.assign({}, this, fn())
      }
    };
    if (typeof init === 'function') {
      init.call(stamp, ...args);
    }
    return stamp;
  };
};

