'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _casual = require('casual');

var _casual2 = _interopRequireDefault(_casual);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _Journal = require('./models/Journal');

var _Journal2 = _interopRequireDefault(_Journal);

var _User = require('./models/User');

var _User2 = _interopRequireDefault(_User);

var _Story = require('./models/Story');

var _Story2 = _interopRequireDefault(_Story);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ObjectId = _mongoose.Schema.Types.ObjectId;
_mongoose2.default.connect('mongodb://localhost/twit-journal');

_User2.default.findOneAndUpdate({ twitterId: 'muh_hanif07' }, {}, { upsert: true, new: true }, function (err, myUser) {
  _lodash2.default.range(5).forEach(function () {
    var storySeed = new _Story2.default({
      createdAt: _casual2.default.unix_time,
      user: myUser._id
    });
    _lodash2.default.range(5).forEach(function () {
      var journalSeed = new _Journal2.default({
        createdAt: _casual2.default.unix_time,
        content: _casual2.default.sentences(5),
        isPosted: _casual2.default.coin_flip,
        isLoved: _casual2.default.coin_flip,
        user: myUser._id,
        story: storySeed.objectId
      });
      journalSeed.save();
      storySeed.journal.push(journalSeed);
      myUser.journal.push(journalSeed);
      storySeed.save();
    });
    myUser.story.push(storySeed);
  });
  myUser.save();
});