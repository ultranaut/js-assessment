exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
  containsNumber : function(str) {
    return /\d/.test(str);
  },

  containsRepeatingLetter : function(str) {
    return /([a-zA-Z])\1/.test(str);
  },

  endsWithVowel : function(str) {
    return /[aeiou]$/i.test(str);

  },

  captureThreeNumbers : function(str) {
    var result = /(\d{3})/.exec(str);
    if (result !== null) {
      return result[0];
    }
    else {
      return false;
    }
  },

  matchesPattern : function(str) {
    return /^\d{3}\-\d{3}\-\d{4}$/.test(str);
  },

  isUSD : function(str) {
    var regex = /^\$(\d{1,3})(,\d{3})*(\.\d{2})?$/;
    return regex.test(str);
  }
};
