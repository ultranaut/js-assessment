exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
    return arr.reduce(function (sum, curr) {
      return sum + curr; 
    });
  },

  remove : function(arr, item) {
    while (arr.indexOf(item) !== -1) {
      arr.splice(arr.indexOf(item), 1);
    }
    return arr;
  },

  removeWithoutCopy : function(arr, item) {
    while (arr.indexOf(item) !== -1) {
      arr.splice(arr.indexOf(item), 1);
    }
    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    var len = arr.length;
    var count = 0;

    for (var i = 0; i < len; i++) {
      if (arr[i] === item) {
        count++;
      }
    }
    return count;
  },

  duplicates : function(arr) {
    var dupes = [];
    var len = arr.length;
    var curr;
    for (var i = 0; i < len; i++) {
      curr = arr[i];
      if (arr.indexOf(curr, i + 1) !== -1) {
        if (dupes.indexOf(curr) === -1) {
          dupes.push(curr);
        }
      }
    }
    return dupes;
  },

  square : function(arr) {
    return arr.map(function (val) {
      return val * val;
    });
  },

  findAllOccurrences : function(arr, target) {
    var len = arr.length;
    var occurences = [];
    var start = 0;
    var idx;
    while (arr.indexOf(target, start) !== -1) {
      idx = arr.indexOf(target, start);
      occurences.push(idx);
      start = idx + 1;
    }
    return occurences;
  }
};
