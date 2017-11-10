import mongoose from 'mongoose';

const Schema = mongoose.Schema;
mongoose.promise = global.Promise;

const logSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now
  },
  params: {
    artist: {
      type: String,
      required: 'Please supply an artist'
    },
    track: {
      type: String,
      required: 'Please supply a track'
    }
  },
  response: {
    type: String
  },
  responseToUser: {
    type: String
 }
});

export default mongoose.model('Log', logSchema);
