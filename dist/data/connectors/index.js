'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _UserConnectors = require('./UserConnectors');

var _UserConnectors2 = _interopRequireDefault(_UserConnectors);

var _JournalConnectors = require('./JournalConnectors');

var _JournalConnectors2 = _interopRequireDefault(_JournalConnectors);

var _StoryConnectorrs = require('./StoryConnectorrs');

var _StoryConnectorrs2 = _interopRequireDefault(_StoryConnectorrs);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.connect(_config2.default.databaseURL);

module.exports = {
  UserConnector: _UserConnectors2.default,
  JournalConnector: _JournalConnectors2.default,
  StoryConnector: _StoryConnectorrs2.default
};