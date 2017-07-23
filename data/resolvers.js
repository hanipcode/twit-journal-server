import { UserConnector } from './connectors';

const resolvers = {
  Query: {
    user(_, args) {
      const User = new UserConnector();
      return User.findUser(args.twitterId);
    },
  },
};

export default resolvers;
