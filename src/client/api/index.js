import axios from 'axios';

export default {
  async coverArt({ artist, track }) {
    const { data: coverArt } = await axios.get('/api/coverart', {
      params: {
        artist,
        track
      }
    });
    return coverArt;
  },
  async getLogs() {
    const { data: logs } = await axios.get('/api/logs');
    return logs;
  }
};
