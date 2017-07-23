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
	id: Int
	createdAt: String
	journal: [Journal]
}
type Journal {
	id: Int
	createdAt: Date
	content: String
	isPosted: Boolean
	isLoved: Boolean
	user: User
	story: Story
}
type Query {
	user(twitterId: String): User
	journal: String
}
type schema {
  query: Query
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
