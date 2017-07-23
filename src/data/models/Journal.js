import Mongoose, { Schema } from 'mongoose';

const JournalSchema = Schema({
  createdAt: Date,
  content: String,
  isPosted: { type: Boolean, default: false },
  isLoved: { type: Boolean, default: false },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  story: { type: Schema.Types.ObjectId, ref: 'Story', default: null }, // story reference can be empty (if not yet assigned)
});

const JournalModel = Mongoose.model('Journal', JournalSchema);
export default JournalModel;
