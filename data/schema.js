import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import dateScalar from './type/Date';

const typeDefs = `

scalar Date

type User  {
	id: Int
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
`;

const scalarResolver = {
  Date: dateScalar,
};

const mocks = {
  String: () => 'Ini string',
  Query: () => ({
    user: (_, args) => {
      return { twitterId: args.twitterId };
    },
  }),
  User: () => ({ twitterId: 'maamamamamam' }),
  Journal: () => {
    return {
      createdAt: new Date(Date.now()),
      content: 'Hai ini content lho',
    };
  },
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers: scalarResolver,
  allowUndefinedInResolve: true, // optional
  printErrors: true,
});
addMockFunctionsToSchema({ schema, mocks, preserveResolvers: true });

export default schema;
