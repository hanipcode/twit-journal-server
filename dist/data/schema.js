'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphqlTools = require('graphql-tools');

var _Date = require('./type/Date');

var _Date2 = _interopRequireDefault(_Date);

var _resolvers = require('./resolvers');

var _resolvers2 = _interopRequireDefault(_resolvers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var typeDefs = '\n\nscalar Date\n\ntype User  {\n\tid: String\n\ttwitterId: String\n\tjournal: [Journal]\n\tstory: [Story]\n}\ntype Story {\n\tid: String\n\tcreatedAt: String\n  journal: [Journal]\n  user: User\n}\ntype Journal {\n\tid: String\n\tcreatedAt: Date\n\tcontent: String\n\tisPosted: Boolean\n\tisLoved: Boolean\n\tuser: User\n\tstory: Story\n}\ntype Query {\n\tuser(twitterId: String): User\n}\ntype Mutation {\n  createUser(twitterId: String!): User\n  createJournal(userId: String!, content: String!): Journal\n  assignToStory(storyId: String, userId: String!, journalIds: [String]!): Story\n  loveJournal(journalId: String!): Journal\n  postJournal(journalId: String!): Journal\n}\ntype schema {\n  query: Query\n  mutation: Mutation\n}\n';

var scalarResolver = {
  Date: _Date2.default
};

var schema = (0, _graphqlTools.makeExecutableSchema)({
  typeDefs: typeDefs,
  resolvers: Object.assign(_resolvers2.default, scalarResolver),
  allowUndefinedInResolve: true, // optional
  printErrors: true
});

exports.default = schema;