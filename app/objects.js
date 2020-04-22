/* eslint prefer-reflect: 0 */

exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
    return fn.apply(obj);
  },

  alterObjects: function(constructor, greeting) {
    constructor.prototype.greeting = greeting;
  },

  iterate: function(obj) {
    const rValue = [];
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        rValue.push(`${key}: ${obj[key]}`);
      }
    }
    return rValue;
  }
};
