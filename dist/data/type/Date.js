'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var _language = require('graphql/language');

exports.default = new _graphql.GraphQLScalarType({
  name: 'Date',
  description: 'Date custom scalar type',
  parseValue: function parseValue(value) {
    return new Date(value); // value from the client
  },
  serialize: function serialize(value) {
    return value.getTime(); // value sent to the client
  },
  parseLiteral: function parseLiteral(ast) {
    if (ast.kind === _language.Kind.INT) {
      return parseInt(ast.value, 10); // ast value is always in string format
    }
    return null;
  }
});