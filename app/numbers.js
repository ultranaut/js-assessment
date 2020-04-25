/* eslint no-bitwise:0 */

exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    return num >> (bit - 1) & 1;
  },

  base10: function(str) {
    return parseInt(str, 2);
  },

  convertToBinary: function(num) {
    const binary = [];
    for (let i = 0; i < 8; i++) {
      binary.unshift(num >> i & 1);
    }
    return binary.join('');
  },

  multiply: function(a, b) {

  }
};
