import mongoose from 'mongoose';
import configs from './index';
import log from '../utils/logger';

const connectToDb = async () => {
  try {
    await mongoose.connect(configs.dbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    log.info('Connect to database successfully');
  } catch (error) {
    log.error('Cannot connect to database', error);
    console.log(error);
    process.exit(1);
  }
};

export default connectToDb;
