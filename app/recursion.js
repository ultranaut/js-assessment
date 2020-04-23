exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    const found = [];
    const tree = [];

    const getFiles = (dir) => {
      tree.push(dir.dir);
      const contents = dir.files;
      for (let i = 0, len = contents.length; i < len; i++) {
        const item = contents[i];
        if (typeof item === 'string') {
          if (!dirName || tree.includes(dirName)) {
            found.push(item);
          }
        }
        else {
          getFiles(item);
        }
      }
      tree.pop();
    };

    getFiles(data);
    return found;
  },

  permute: function(arr) {
    const perms = [];

    const permutate = (arry, acc = []) => {
      const len = arry.length;

      if (len === 0) {
        perms.push(acc);
      }
      else {
        for (let i = 0; i < len; i++) {
          const cpy = arry.slice();
          cpy.splice(i, 1);
          permutate(cpy, [...acc, arry[i]]);
        }
      }
      return perms;
    };

    return permutate(arr);
  },

  fibonacci: function(n) {
    const memo = [];

    const f = (idx) => {
      let ret;

      if (memo[idx]) {
        ret = memo[idx];
      }
      else if (idx < 2) {
        ret = idx;
      }
      else {
        ret = f(idx - 1) + f(idx - 2);
      }
      memo[idx] = ret;
      return ret;
    };

    return f(n);
  },

  validParentheses: function(n) {
    const valids = [];

    const addParenthesis = (acc = '', openers = 0, closers = 0) => {
      if (acc.length === n * 2) {
        valids.push(acc);
        return;
      }
      if (openers < n) { addParenthesis(acc + '(', openers + 1, closers); }
      if (closers < openers) { addParenthesis(acc + ')', openers, closers + 1); }
    };

    addParenthesis();
    return valids;

    /*
    const pairs = '()'.repeat(n).split('');
    const perms = this.permute(pairs);

    for (let i = 0, len = perms.length; i < len; i++) {
      const currentPerm = perms[i];
      const lefties = [];
      for (let j = 0; j < currentPerm.length; j++) {
        const mychar = currentPerm[j];

        if (mychar === '(') {
          lefties.push(mychar);
        }
        else {
          lefties.length && lefties.pop();
        }
      }
      if (lefties.length === 0) {
        const parenStr = currentPerm.join('');
        if (!valids.includes(parenStr)) {
          valids.push(parenStr);
        }
      }
    }
    return valids;
    */
  }
};
