exports = (typeof window === 'undefined') ? global : window;

exports.flowControlAnswers = {
  fizzBuzz : function(num) {
    // write a function that receives a number as its argument;
    // if the number is divisible by 3, the function should return 'fizz';
    // if the number is divisible by 5, the function should return 'buzz';
    // if the number is divisible by 3 and 5, the function should return
    // 'fizzbuzz';
    //
    // otherwise the function should return the number, or false if no number
    // was provided or the value provided is not a number

    if (typeof num === 'undefined' || Number.isNaN(+num)) {
      return false;
    }
    var out = '';
    if (num % 3 === 0) out += 'fizz';
    if (num % 5 === 0) out += 'buzz';
    if (out === '') out = num;
    return out;
  }
};
