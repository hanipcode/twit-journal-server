import Mongoose, { Schema } from 'mongoose';

const StorySchema = Schema({
  createdAt: Date,
  journal: [{ type: Schema.Types.ObjectId, ref: 'Journal' }],
  user: { type: Schema.Types.ObjectId, ref: 'User' },
});

const StoryModel = Mongoose.model('Story', StorySchema);
export default StoryModel;
