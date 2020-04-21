exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    return arr.reduce((sum, curr) => sum + curr);
  },

  remove: function(arr, item) {
    return arr.filter((curr) => curr !== item);
  },

  removeWithoutCopy: function(arr, item) {
    let i = 0;
    while (i < arr.length) {
      if (arr[i] === item) { arr.splice(i, 1); }
      else { i++; }
    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    return arr.reduce((count, curr) => {
      count += item === curr;
      return count;
    }, 0);
  },

  duplicates: function(arr) {
    return arr.reduce((dupes, curr, idx) => {
      if (arr.indexOf(curr) < idx && !dupes.includes(curr)) {
        dupes.push(curr);
      }
      return dupes;
    }, []);
  },

  square: function(arr) {
    return arr.map((curr) => curr * curr);
  },

  findAllOccurrences: function(arr, target) {
    return arr.reduce((ids, curr, idx) => {
      if (curr === target) {
        ids.push(idx);
      }
      return ids;
    }, []);
  }
};
