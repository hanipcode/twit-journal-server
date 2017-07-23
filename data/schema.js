import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import dateScalar from './type/Date';
import resolvers from './resolvers';

const typeDefs = `

scalar Date

type User  {
	id: String
	twitterId: String
	journal: [Journal]
	story: [Story]
}
type Story {
	id: String
	createdAt: String
  journal: [Journal]
  user: User
}
type Journal {
	id: String
	createdAt: Date
	content: String
	isPosted: Boolean
	isLoved: Boolean
	user: User
	story: Story
}
type Query {
	user(twitterId: String): User
}
type Mutation {
  createUser(twitterId: String!): User
  createJournal(userId: String!, content: String!): Journal
  assignToStory(storyId: String, userId: String!, journalIds: [String]!): Story
  loveJournal(journalId: String!): Journal
  postJournal(journalId: String!): Journal
}
type schema {
  query: Query
  mutation: Mutation
}
`;

const scalarResolver = {
  Date: dateScalar,
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers: Object.assign(resolvers, scalarResolver),
  allowUndefinedInResolve: true, // optional
  printErrors: true,
});

export default schema;
