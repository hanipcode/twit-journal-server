'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StorySchema = (0, _mongoose.Schema)({
  createdAt: Date,
  journal: [{ type: _mongoose.Schema.Types.ObjectId, ref: 'Journal' }],
  user: { type: _mongoose.Schema.Types.ObjectId, ref: 'User' }
});

var StoryModel = _mongoose2.default.model('Story', StorySchema);
exports.default = StoryModel;