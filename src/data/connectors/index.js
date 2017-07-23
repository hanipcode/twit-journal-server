import mongoose from 'mongoose';
import UserConnector from './UserConnectors';
import JournalConnector from './JournalConnectors';
import StoryConnector from './StoryConnectorrs';
import CONFIG from '../config';

mongoose.connect(CONFIG.databaseURL);

module.exports = {
  UserConnector,
  JournalConnector,
  StoryConnector,
};
