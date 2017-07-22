import Mongoose, { Schema } from 'mongoose';

const JournalSchema = Schema({
  createdAt: Date,
  content: String,
  isPosted: Boolean,
  isLoved: Boolean,
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  story: { type: Schema.Types.ObjectId, ref: 'Story' },
});

const Journal = Mongoose.model('Journal', JournalSchema);
export default Journala;
