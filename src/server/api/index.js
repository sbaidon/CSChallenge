import axios from 'axios';

axios.defaults.baseURL = 'https://api.musixmatch.com/ws/1.1';

export default {
  getCoverArt({ artist, track }) {
    console.log(
      axios.defaults.baseURL +
        `/matchter.track.get?apikey=${
          process.env.API_KEY
        }&q_artist=${encodeURIComponent(artist)}&q_track=${encodeURIComponent(
          track
        )}&format=jsonp&callback=callback`
    );
    return axios.get(
      `/matcher.track.get?q_artist=${encodeURIComponent(
        artist
      )}&q_track=${encodeURIComponent(track)}&apikey=${process.env.API_KEY}&`
    );
  }
};
// https://api.musixmatch.com/ws/1.1/matcher.track.get?format=jsonp&callback=callback&q_artist=eminem&q_track=lose%20yourself&apikey=93a2212f90813181749d876653b89e5d
// https://api.musixmatch.com/ws/1.1/matcher.track.get?format=jsonp&callback=callback&q_artist=eminem&q_track=lose%20yourself&apikey=93a2212f90813181749d876653b89e5d
