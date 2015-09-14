exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var out = '';
    var count = 0;
    var current;

    for (var i = 0; i < str.length; i++) {
      if (str[i] !== current) {
        current = str[i];
        count = 0;
      }
      if (count < amount) {
        out += current;
        count++;
      }
    }
    return out;
  },


  wordWrap: function(str, cols) {
    var words = str.split(' ');
    var lines = [];
    var currentLine = '';


    while (words.length > 0) {
      // if current line is empty, add word regardless of length
      if (currentLine.length === 0) {
        currentLine = words.shift();
      }
      else {
        // if adding current word puts us over the limit, push line
        // onto lines array and reset line to empty string, current
        // word will get handled on next interation
        if (currentLine.length + 1 + words[0].length > cols) {
          lines.push(currentLine);
          currentLine = '';
        }
        // otherwise tack current word onto line and carry on
        else {
          currentLine += ' ' + words.shift();
        }
      }
    }
    // push current line onto lines array
    if (currentLine.length > 0) {
      lines.push(currentLine);
    }

    return lines.join('\n');
  },

  reverseString: function(str) {
    return str.split('').reverse().join('');

  }
};
