<template>
  <div>
    <h1>Log</h1>
    <div class="log">

      <div><p>Response</p><p v-html="markdownify(log.response)"></p></div>
      <div><p>Cover</p><img :src="log.responseToUser"></img></div>
      <div><p>Created at</p><p>{{ log.createdAt }}</p></div>
      <div><p>Info sent by user</p><p v-html="markdownify(log.params)"></p></div>

    </div>
  </div>
</template> 

<script>
import commonmark from 'commonmark';

export default {
  name: 'log',
  props: ['log'],
  data() {
    return {
      writer: new commonmark.HtmlRenderer(),
      reader: new commonmark.Parser()
    };
  },
  methods: {
    markdownify(json) {
      const parsed = typeof json === 'string' ? JSON.parse(json) : json;
      const formatted = JSON.stringify(parsed, null, 2);
      const markdown = this.reader.parse(
        ' ```javascript \n' + formatted + ' \n``` '
      );
      return this.writer.render(markdown);
    }
  }
};
</script>

<style>
.log {
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap;
}
.log > * {
  max-width: 250px;
}

pre {
  height: 250px;
  overflow: scroll;
}
</style>
