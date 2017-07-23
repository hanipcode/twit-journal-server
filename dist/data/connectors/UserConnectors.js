'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _User = require('../models/User');

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UserConnectors = function () {
  function UserConnectors() {
    _classCallCheck(this, UserConnectors);
  }

  _createClass(UserConnectors, [{
    key: 'findUser',
    value: function findUser(twitterId) {
      return _User2.default.findOne({ twitterId: twitterId });
    }
  }, {
    key: 'findUserByStory',
    value: function findUserByStory(storyId) {
      return _User2.default.findOne({ story: storyId });
    }
  }, {
    key: 'createUser',
    value: function createUser(twitterId) {
      return _User2.default.create({ twitterId: twitterId }).then(function (user) {
        return user;
      });
    }
  }]);

  return UserConnectors;
}();

exports.default = UserConnectors;