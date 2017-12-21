exports.objectStamper = function objectStamper({ props = {}, init, methods = {} } = {}) {

  return function stampFn(...args) {
    let stamp = {
      ...props,
      ...methods
    };
    if (typeof init === 'function') {
      init.call(stamp, ...args);
    }
    return stamp;
  };
};

