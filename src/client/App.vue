<template>
  <div id="app">
    <label for="artist">Artist</label>
    <input type="text" v-model="artist" name="artist">
    <label for="track">Track</label>
    <input type="text" v-model="track" name="track">
    <button @click="getCover().catch(showError)" type="button">Get Cover Art</button>

    <div class="markdown-body" v-for="(log, index) in logs" :key="index">
      <log :log="log"></log>
    </div>
  </div>
</template> 

<script>
import api from './api';
import Log from './components/Log';

export default {
  name: 'app',
  components: { Log },
  data() {
    return {
      artist: '',
      track: '',
      image: '',
      logs: []
    };
  },
  async created() {
    this.updateLogs();
  },
  methods: {
    showError(error) {
      alert(error.response.data.message);
    },
    async getCover() {
      if (!this.artist || !this.track) {
        alert('Please type an artist and a track');
        return;
      }

      const cover = await api.coverArt({
        artist: this.artist,
        track: this.track
      });
      this.image = cover;
    },
    async updateLogs() {
      this.logs = await api.getLogs();
    }
  },
  watch: {
    image() {
      this.updateLogs();
    }
  }
};
</script>

<style>
#app {
  height: 90vh;
  width: 90vw;
  padding-left: 10vw;
  padding-top: 10vh;
}
</style>
