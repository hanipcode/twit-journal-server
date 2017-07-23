import UserModel from '../models/User';

class UserConnectors {
  constructor() {}
  findUser(twitterId) {
    return UserModel.findOne({ twitterId });
  }
  findUserByStory(storyId) {
    return UserModel.findOne({ story: storyId });
  }
  createUser(twitterId) {
    return UserModel.create({ twitterId }).then(user => {
      return user;
    });
  }
}

export default UserConnectors;
