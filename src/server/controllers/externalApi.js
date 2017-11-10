import api from '../api';

export const getCoverArt = async (req, res) => {
  const { newLog } = req.body;
  const resp = await api.getCoverArt({
    artist: newLog.params.artist,
    track: newLog.params.track
  });
  const response = resp.data.message.body;
  const responseToUser = response.track.album_coverart_100x100;
  newLog.set({ response: JSON.stringify(response) });
  newLog.set({ responseToUser });
  await newLog.save();
  res.json({ albumCover: responseToUser });
};
