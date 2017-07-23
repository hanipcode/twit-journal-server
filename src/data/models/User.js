import Mongoose, { Schema } from 'mongoose';

const UserSchema = Schema({
  twitterId: {
    type: String,
    unique: true,
  },
  journal: [{ type: Schema.Types.ObjectId, ref: 'Journal', default: [] }],
  story: [{ type: Schema.Types.ObjectId, ref: 'Story', default: [] }],
});

const UserModel = Mongoose.model('User', UserSchema);

export default UserModel;
