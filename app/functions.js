exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
      // var sayIt = function(greeting, name, punctuation) {
      //   sayItCalled = true;
      //   return greeting + ', ' + name + (punctuation || '!');
      // };
    return fn.apply(this, arr);

  },

  speak : function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction : function(str) {
    return function (more) {
      return str + ', ' + more;
    };
  },

  makeClosures : function(arr, fn) {
    return arr.map(function (el, idx) {
      return function () { return el*el; };
    });

  },

  partial : function(fn, str1, str2) {
    var args = Array.prototype.slice.call(arguments).slice(1);
    return function () {
      var myargs = args.concat(Array.prototype.slice.call(arguments));
      return fn.apply(this, myargs);
    };
  },

  useArguments : function() {
    var args = Array.prototype.slice.call(arguments);
    return args.reduce(function (sum, val) {
      return sum + val;
    });

  },

  callIt : function(fn) {
    return this.partial.apply(null, Array.prototype.slice.call(arguments))();
  },

  partialUsingArguments : function(fn) {
    return this.partial.apply(null, Array.prototype.slice.call(arguments));
  },

  curryIt : function(fn) {

  }
};
