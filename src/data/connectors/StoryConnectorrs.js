import { Schema } from 'mongoose';
import StoryModel from '../models/Story';
import JournalModel from '../models/Journal';
import UserModel from '../models/User';
const ObjectId = Schema.Types.ObjectId;

class StoryConnectors {
  constructor() {}
  findStoryByUser(userId) {
    return StoryModel.find({ user: userId });
  }
  findStoryByJournal(journalId) {
    return StoryModel.find({ user: journalId });
  }
  assignJournals(storyId, userId, journalIds) {
    const createdAt = new Date().getTime();
    if (!storyId) {
      return new Promise((resolve, reject) => {
        UserModel.findOne({ id: ObjectId(userId) }).populate('journal').exec((err, user) => {
          const journalInUser = user.journal.filter(value => journalIds.includes(value.id));
          console.log(journalInUser);
          return StoryModel.create({ createdAt, user, journal: journalInUser }, (err, story) =>
            resolve(story)
          );
        });
      });
    }
    return StoryModel.findOne({ id: ObjectId(storyId) }).populate('journal').exec((err, story) => {
      if (err) {
        return;
      }
      journals.forEach(value => {
        story.journal.push(journals);
      });
      return story.save();
    });
  }
}

export default StoryConnectors;
