exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    let curr = '';
    let count = 0;
    let ret = '';
    for (let i = 0; i < str.length; i++) {
      const mychar = str[i];
      if (mychar === curr) {
        if (count < amount) {
          count++;
          ret += mychar;
        }
      }
      else {
        count = 1;
        curr = mychar;
        ret += mychar;
      }
    }
    return ret;
  },

  wordWrap: function(str, cols) {
    const words = str.split(' ');
    let ret = '';
    let line = '';

    while (words.length > 0) {
      const word = words.shift();
      if (line.length === 0) {
        line += word;
      }
      else if (line.length + word.length + 1 <= cols) {
        line += ' ' + word;
      }
      else {
        ret += line + '\n';
        line = word;
      }
    }
    ret += line;

    return ret;
  },

  reverseString: function(str) {
    return str.split('').
      reverse().
      join('');
  }
};
