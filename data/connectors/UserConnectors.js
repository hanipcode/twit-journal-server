import UserModel from '../models/User';

class UserConnectors {
  constructor() {}
  findUser(twitterId) {
    const user = UserModel.findOne({ twitterId }, (error, data) => {
      return data;
    });
    return user;
  }
}

export default UserConnectors;
