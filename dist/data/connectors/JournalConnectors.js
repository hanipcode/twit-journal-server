'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mongoose = require('mongoose');

var _Journal = require('../models/Journal');

var _Journal2 = _interopRequireDefault(_Journal);

var _User = require('../models/User');

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ObjectId = _mongoose.Schema.Types.ObjectId;

var JournalConnectors = function () {
  function JournalConnectors() {
    _classCallCheck(this, JournalConnectors);
  }

  _createClass(JournalConnectors, [{
    key: 'findJournalByUser',
    value: function findJournalByUser(userId) {
      return _Journal2.default.find({ user: userId }).populate('story, user');
    }
  }, {
    key: 'findJournalByStory',
    value: function findJournalByStory(storyId) {
      return _Journal2.default.find({ story: storyId }).populate('user, story');
    }
  }, {
    key: 'createJournal',
    value: function createJournal(userId, content) {
      var createdAt = new Date().getTime();
      return new Promise(function (resolve, reject) {
        _User2.default.findOne({ id: ObjectId(userId) }).populate('journal').exec(function (err, user) {
          if (err) return;
          return _Journal2.default.create({ user: user, createdAt: createdAt, content: content }).then(function (data) {
            user.journal.push(data);
            user.save();
            resolve(data);
          });
        });
      });
    }
  }, {
    key: 'loveJournal',
    value: function loveJournal(journalId) {
      var query = { id: ObjectId(journalId) };
      return _Journal2.default.findOne(query).exec(function (err, journal) {
        journal.isLoved = !journal.isLoved;
        journal.markModified('isLoved');
        return journal.save();
      });
    }
  }, {
    key: 'postJournal',
    value: function postJournal(journalId) {
      var query = { id: ObjectId(journalId) };
      // is posted can only be togled once
      return _Journal2.default.findOneAndUpdate(query, { $set: { isPosted: true } });
    }
  }]);

  return JournalConnectors;
}();

exports.default = JournalConnectors;