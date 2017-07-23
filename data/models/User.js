import Mongoose, { Schema } from 'mongoose';

const UserSchema = Schema({
  twitterId: String,
  journal: [{ type: Schema.Types.ObjectId, ref: 'Journal' }],
  story: [{ type: Schema.Types.ObjectId, ref: 'Story' }],
});

const UserModel = Mongoose.model('User', UserSchema);

export default UserModel;
