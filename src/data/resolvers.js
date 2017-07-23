import { UserConnector, JournalConnector, StoryConnector } from './connectors';

const resolvers = {
  Query: {
    user(_, { twitterId }) {
      const User = new UserConnector();
      return User.findUser(twitterId);
    },
  },
  User: {
    journal(user) {
      const Journal = new JournalConnector();
      return Journal.findJournalByUser(user.id);
    },
    story(user) {
      const Story = new StoryConnector();
      return Story.findStoryByUser(user.id);
    },
  },
  Story: {
    journal(story) {
      const Journal = new JournalConnector();
      return Journal.findJournalByStory(story.journal.id);
    },
    user(story) {
      const User = new UserConnector();
      return User.findUserByStory(story.id);
    },
  },
  Mutation: {
    createUser(_, { twitterId }) {
      const User = new UserConnector();
      return User.createUser(twitterId);
    },
    createJournal(_, { userId, content }) {
      const Journal = new JournalConnector();
      return Journal.createJournal(userId, content);
    },
    assignToStory(_, { storyId, userId, journalIds }) {
      const Story = new StoryConnector();
      return Story.assignJournals(storyId, userId, journalIds);
    },
    loveJournal(_, { journalId }) {
      const Journal = new JournalConnector();
      return Journal.loveJournal(journalId);
    },
    postJournal(_, { journalId }) {
      const Journal = new JournalConnector();
      return Journal.postJournal(journalId);
    },
  },
};

export default resolvers;
