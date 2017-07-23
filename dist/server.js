'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _apolloServerExpress = require('apollo-server-express');

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _schema = require('./data/schema');

var _schema2 = _interopRequireDefault(_schema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GRAPHQL_PORT = 8080;

var app = (0, _express2.default)();

app.use('/graphql', _bodyParser2.default.json(), (0, _apolloServerExpress.graphqlExpress)({ schema: _schema2.default, pretty: true }));
app.use('/graphiql', (0, _apolloServerExpress.graphiqlExpress)({ endpointURL: '/graphql' }));

app.listen(GRAPHQL_PORT, function () {
  return console.log('The server is run smoothly bro');
});

module.exports = app;