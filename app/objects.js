exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers =  {
  alterContext : function(fn, obj) {
    return fn.call(obj);
  },

  alterObjects : function(constructor, greeting) {
    constructor.prototype.greeting = greeting; 
  },

  iterate : function(obj) {
    var ownProps = [];
    for (var prop in obj)  {
      if (obj.hasOwnProperty(prop)) {
        ownProps.push(prop + ': ' + obj[prop]);
      }
    }
    return ownProps;
  }
};
