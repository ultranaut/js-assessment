exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName, inTarget) {
    inTarget = typeof inTarget === 'undefined' ? false : inTarget;
    dirName = typeof dirName === 'undefined' ? null : dirName;

    // if dirName is set and we're not already in the target dir 
    // and this is the target dir OR dirName hasn't been set, then
    // set inTarget to true
    if ((dirName && !inTarget && data.dir === dirName) || !dirName) {
      inTarget = true;
    }

    var list = [];
    var files = data.files;
    for (var i = 0; i < files.length; i++) {
      var item = files[i];
      if (typeof item === 'string' && inTarget) {
        if (inTarget) { list.push(item); }
      }
      else if (typeof item === 'object') {
        list = list.concat(this.listFiles(item, dirName, inTarget));
      }
    }
    return list;
  },

  permute: function(arr, acc, perms) {
    acc = typeof acc === 'undefined' ? [] : acc;
    perms = typeof perms === 'undefined' ? [] : perms;

    if (arr.length === 1) {
      acc = acc.concat(arr);
      perms.push(acc);
    }
    else {
      for (var i = 0; i < arr.length; i++) {
        var el = arr[i];
        var subArr = arr.slice();
        subArr.splice(i, 1);
        var newAcc = acc.slice();
        newAcc.push(el);
        this.permute(subArr, newAcc, perms);
      }
    }

    return perms;
  },

  fibonacci: (function() {
    var cache = [0, 1];
    return function (n) {
      if (!(n in cache)) {
        cache[n] = this.fibonacci(n - 1) + this.fibonacci(n - 2);
      }
      return cache[n];
    };
  })(),

  validParentheses: function(n) {
    var pair = '()';
    var acc = [];
    var uniques = {};

    if (n === 1) {
      return [pair];
    }

    var patterns = this.validParentheses(n - 1);
    for (var i = 0; i < patterns.length; i++) {
      var pattern = patterns[i];
      for (var j = 0; j <= pattern.length; j++) {
        var variation = pattern.slice(0, j) + pair + pattern.slice(j);
        if (!(variation in uniques)) {
          uniques[variation] = true;
          acc.push(variation);
        }
      }
    }
    return acc;
  }
};
