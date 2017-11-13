import mongoose from 'mongoose';

const Log = mongoose.model('Log');

export const saveLog = async (req, res, next) => {
  const { artist, track } = req.query;
  if (!artist || !track) {
    throw new Error('Artist or track not found');
  }
  const params = { artist, track };
  const newLog = await new Log({ params: params }).save();
  req.newLog = newLog;
  next();
};

export const getLogs = async (req, res, next) => {
  const logs = await Log.find();
  return res.json(logs);
};
