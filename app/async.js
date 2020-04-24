exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(value), 100);
    });
  },

  manipulateRemoteData: function(url) {
    const parseData = ({people}) => {
      const names = people.map((person) => person.name);
      return names.sort();
    };

    return fetch(url).
      then((response) => response.json()).
      then(parseData);
  }
};
