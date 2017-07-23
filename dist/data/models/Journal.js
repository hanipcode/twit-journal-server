'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var JournalSchema = (0, _mongoose.Schema)({
  createdAt: Date,
  content: String,
  isPosted: { type: Boolean, default: false },
  isLoved: { type: Boolean, default: false },
  user: { type: _mongoose.Schema.Types.ObjectId, ref: 'User' },
  story: { type: _mongoose.Schema.Types.ObjectId, ref: 'Story', default: null } // story reference can be empty (if not yet assigned)
});

var JournalModel = _mongoose2.default.model('Journal', JournalSchema);
exports.default = JournalModel;