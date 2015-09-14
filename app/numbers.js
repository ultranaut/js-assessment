exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    return (num & 1 << (bit - 1)) ? 1 : 0;
  },

  base10: function(str) {
    return parseInt(str, 2);
  },

  convertToBinary: function(num) {
    var bits = [];

    for (var i = 8; i > 0; i--) {
      bits.push(this.valueAtBit(num, i));
    }
    return bits.join('');
  },

  multiply: function(a, b) {

  }
};
