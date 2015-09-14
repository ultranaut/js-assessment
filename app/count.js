exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
    var timeoutId;
    var currCount = start;

    function count() {
      console.log(currCount++);
      if (currCount <= end) {
        timeoutId = setTimeout(function () {
          count();
        }, 100);
      }
    }
    count(start);

    return {
      cancel: function () { clearTimeout(timeoutId); }
    };
  }
};
