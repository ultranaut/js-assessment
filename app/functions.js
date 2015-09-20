exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
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

  partial : function(fn) {
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
    var arity = fn.length;
    var acc = [];
    return function curry (arg) {
      acc.push(arg);
      if (arity > 1) {
        arity--;
        return curry;
      }
      return fn.apply(this, acc) ;
    }.bind(this);
  }
};
