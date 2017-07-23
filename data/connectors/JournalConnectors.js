import { Schema } from 'mongoose';
import JournalModel from '../models/Journal';
import UserModel from '../models/User';

const ObjectId = Schema.Types.ObjectId;

class JournalConnectors {
  constructor() {}
  findJournalByUser(userId) {
    return JournalModel.find({ user: userId }).populate('story, user');
  }
  findJournalByStory(storyId) {
    return JournalModel.find({ story: storyId }).populate('user, story');
  }
  createJournal(userId, content) {
    const createdAt = new Date().getTime();
    return new Promise((resolve, reject) => {
      UserModel.findOne({ id: ObjectId(userId) }).populate('journal').exec((err, user) => {
        if (err) return;
        return JournalModel.create({ user, createdAt, content }).then(data => {
          user.journal.push(data);
          user.save();
          resolve(data);
        });
      });
    });
  }
  loveJournal(journalId) {
    const query = { id: ObjectId(journalId) };
    return JournalModel.findOne(query).exec((err, journal) => {
      journal.isLoved = !journal.isLoved;
      journal.markModified('isLoved');
      return journal.save();
    });
  }
  postJournal(journalId) {
    const query = { id: ObjectId(journalId) };
    // is posted can only be togled once
    return JournalModel.findOneAndUpdate(query, { $set: { isPosted: true } });
  }
}

export default JournalConnectors;
