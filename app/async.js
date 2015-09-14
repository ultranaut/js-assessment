/* global Promise */

exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
    return new Promise(function (res, rej) {
      setTimeout(res.bind(this, value), 100);
    });
  },

  manipulateRemoteData : function(url) {
    return new Promise(function (res, rej) {
      var xhr = new XMLHttpRequest();
      xhr.open('get', url);
      xhr.onload = function () {
        if (xhr.status === 200) {
          res(xhr.responseText);
        }
        else {
          rej(Error('oops'));
        }
      };
      xhr.onerror = function () {
        rej(Error('network error'));
      };

      xhr.send();
    }).then(function (data) {
      var obj = JSON.parse(data);
      var people = obj.people.map(function (person) {
        return person.name;
      });
      return people.sort();
    });
  }
};
