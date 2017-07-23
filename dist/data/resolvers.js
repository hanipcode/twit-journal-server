'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _connectors = require('./connectors');

var resolvers = {
  Query: {
    user: function user(_, _ref) {
      var twitterId = _ref.twitterId;

      var User = new _connectors.UserConnector();
      return User.findUser(twitterId);
    }
  },
  User: {
    journal: function journal(user) {
      var Journal = new _connectors.JournalConnector();
      return Journal.findJournalByUser(user.id);
    },
    story: function story(user) {
      var Story = new _connectors.StoryConnector();
      return Story.findStoryByUser(user.id);
    }
  },
  Story: {
    journal: function journal(story) {
      var Journal = new _connectors.JournalConnector();
      return Journal.findJournalByStory(story.journal.id);
    },
    user: function user(story) {
      var User = new _connectors.UserConnector();
      return User.findUserByStory(story.id);
    }
  },
  Mutation: {
    createUser: function createUser(_, _ref2) {
      var twitterId = _ref2.twitterId;

      var User = new _connectors.UserConnector();
      return User.createUser(twitterId);
    },
    createJournal: function createJournal(_, _ref3) {
      var userId = _ref3.userId,
          content = _ref3.content;

      var Journal = new _connectors.JournalConnector();
      return Journal.createJournal(userId, content);
    },
    assignToStory: function assignToStory(_, _ref4) {
      var storyId = _ref4.storyId,
          userId = _ref4.userId,
          journalIds = _ref4.journalIds;

      var Story = new _connectors.StoryConnector();
      return Story.assignJournals(storyId, userId, journalIds);
    },
    loveJournal: function loveJournal(_, _ref5) {
      var journalId = _ref5.journalId;

      var Journal = new _connectors.JournalConnector();
      return Journal.loveJournal(journalId);
    },
    postJournal: function postJournal(_, _ref6) {
      var journalId = _ref6.journalId;

      var Journal = new _connectors.JournalConnector();
      return Journal.postJournal(journalId);
    }
  }
};

exports.default = resolvers;