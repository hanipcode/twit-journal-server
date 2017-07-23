import mongoose from 'mongoose';
import UserConnector from './UserConnectors';
import CONFIG from '../config';

mongoose.connect(CONFIG.databaseURL);

module.exports = {
  UserConnector,
};
