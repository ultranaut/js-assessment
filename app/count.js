exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    let counter = start;
    let timeoutId;

    const doCount = () => {
      console.log(counter);
      if (counter++ < end) {
        timeoutId = setTimeout(doCount, 100);
      }
    };

    doCount();

    return {
      'cancel': () => timeoutId && clearTimeout(timeoutId)
    };
  }
};
