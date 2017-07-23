'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserSchema = (0, _mongoose.Schema)({
  twitterId: {
    type: String,
    unique: true
  },
  journal: [{ type: _mongoose.Schema.Types.ObjectId, ref: 'Journal', default: [] }],
  story: [{ type: _mongoose.Schema.Types.ObjectId, ref: 'Story', default: [] }]
});

var UserModel = _mongoose2.default.model('User', UserSchema);

exports.default = UserModel;