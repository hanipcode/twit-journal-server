import mongoose, { Schema } from 'mongoose';
import casual from 'casual';
import _ from 'lodash';
import Journal from './models/Journal';
import User from './models/User';
import Story from './models/Story';

const ObjectId = Schema.Types.ObjectId;
mongoose.connect('mongodb://localhost/twit-journal');

User.findOneAndUpdate(
  { twitterId: 'muh_hanif07' },
  {},
  { upsert: true, new: true },
  (err, myUser) => {
    _.range(5).forEach(() => {
      const storySeed = new Story({
        createdAt: casual.unix_time,
        user: myUser._id,
      });
      _.range(5).forEach(() => {
        const journalSeed = new Journal({
          createdAt: casual.unix_time,
          content: casual.sentences(5),
          isPosted: casual.coin_flip,
          isLoved: casual.coin_flip,
          user: myUser._id,
          story: storySeed.objectId,
        });
        journalSeed.save();
        storySeed.journal.push(journalSeed);
        myUser.journal.push(journalSeed);
        storySeed.save();
      });
      myUser.story.push(storySeed);
    });
    myUser.save();
  }
);
