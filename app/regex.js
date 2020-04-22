exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    const re = /\d/;
    return re.test(str);
  },

  containsRepeatingLetter: function(str) {
    const re = /([a-zA-Z])\1/;
    return re.test(str);
  },

  endsWithVowel: function(str) {
    const re = /[aeiou]$/i;
    return re.test(str);
  },

  captureThreeNumbers: function(str) {
    const re = /\d{3}/;
    const matches = re.exec(str);
    return matches ? matches[0] : false;
  },

  matchesPattern: function(str) {
    const re = /^\d{3}-\d{3}-\d{4}$/;
    return re.test(str);
  },

  isUSD: function(str) {
    const re = /^\$\d{1,3}(,\d{3})*(\.\d{2})?$/;
    return re.test(str);
  }
};
