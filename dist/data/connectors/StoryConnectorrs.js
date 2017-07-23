'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mongoose = require('mongoose');

var _Story = require('../models/Story');

var _Story2 = _interopRequireDefault(_Story);

var _Journal = require('../models/Journal');

var _Journal2 = _interopRequireDefault(_Journal);

var _User = require('../models/User');

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ObjectId = _mongoose.Schema.Types.ObjectId;

var StoryConnectors = function () {
  function StoryConnectors() {
    _classCallCheck(this, StoryConnectors);
  }

  _createClass(StoryConnectors, [{
    key: 'findStoryByUser',
    value: function findStoryByUser(userId) {
      return _Story2.default.find({ user: userId });
    }
  }, {
    key: 'findStoryByJournal',
    value: function findStoryByJournal(journalId) {
      return _Story2.default.find({ user: journalId });
    }
  }, {
    key: 'assignJournals',
    value: function assignJournals(storyId, userId, journalIds) {
      var createdAt = new Date().getTime();
      if (!storyId) {
        return new Promise(function (resolve, reject) {
          _User2.default.findOne({ id: ObjectId(userId) }).populate('journal').exec(function (err, user) {
            var journalInUser = user.journal.filter(function (value) {
              return journalIds.includes(value.id);
            });
            console.log(journalInUser);
            return _Story2.default.create({ createdAt: createdAt, user: user, journal: journalInUser }, function (err, story) {
              return resolve(story);
            });
          });
        });
      }
      return _Story2.default.findOne({ id: ObjectId(storyId) }).populate('journal').exec(function (err, story) {
        if (err) {
          return;
        }
        journals.forEach(function (value) {
          story.journal.push(journals);
        });
        return story.save();
      });
    }
  }]);

  return StoryConnectors;
}();

exports.default = StoryConnectors;