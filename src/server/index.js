import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config({ path: 'variables.env' });

mongoose.connect(process.env.DATABASE, {
  useMongoClient: true
});

mongoose.Promise = global.Promise;

// TODO: Import Models
import './models/Log';

mongoose.connection.on('error', err => {
  console.error('There were some errors: ', err);
});

import app from './app';

app.set('port', process.env.PORT || 3000);

const server = app.listen(app.get('port'), () => {
  console.log(`Application running on: ${server.address().port}`);
});
