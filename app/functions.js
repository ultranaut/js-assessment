/* eslint prefer-reflect: 0, prefer-spread: 0 */

exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn.apply(null, arr);
  },

  speak: function(fn, obj) {
    return fn.apply(obj);
  },

  functionFunction: function(str) {
    return (val) => str + ', ' + val;
  },

  makeClosures: function(arr, fn) {
    const rvalue = [];
    for (let i = 0; i < arr.length; i++) {
      rvalue.push(() => fn(arr[i]));
    }
    return rvalue;
  },

  partial: function(fn, str1, str2) {
    return (...args) => fn(str1, str2, ...args);
  },

  useArguments: function(...args) {
    return args.reduce((sum, curr) => sum + curr );
  },

  callIt: function(fn) {
    const args = Array.prototype.slice.call(arguments, 1, arguments.length);
    return fn.apply(null, args);
  },

  partialUsingArguments: function(fn) {
    const args1 = Array.prototype.slice.call(arguments, 1, arguments.length);
    return (...args) => fn(...args1, ...args);
  },

  curryIt: function(fn) {
    const arity = fn.length;
    const argPile = [];

    const currier = (arg) => {
      argPile.push(arg);
      if (argPile.length === arity) {
        return fn.apply(null, argPile);
      }

      return currier;
    };
    return currier;
  }
};
