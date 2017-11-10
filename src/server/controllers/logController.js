import mongoose from 'mongoose';

const Log = mongoose.model('Log');

export const saveLog = async (req, res, next) => {
  if (!req.body.artist || !req.body.track) {
    next({ message: 'Body is missing artist, track parameters' }, false);
    return;
  }
  const params = { artist: req.body.artist, track: req.body.track };
  const newLog = await new Log({ params: params }).save();
  req.body.newLog = newLog;
  next();
};
