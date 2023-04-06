<template>
  <div class="stylebot-code-editor-iframe">
    <iframe :src="src" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'CodeEditorIframe',

  data(): { src: string } {
    return {
      src: chrome.runtime.getURL('monaco-editor/iframe/index.html'),
    };
  },
});
</script>

<!-- <style lang="scss">
.stylebot-code-editor-iframe {
  height: calc(100% - 10px);
  // height: 100%;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
    position: relative;
  }
}
</style> -->

<style lang="scss">
.stylebot-code-editor-iframe {
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  border: none;
}

.stylebot-code-editor-iframe iframe {
  height: 100%;
  width: 100%;
  position: relative;
  border: none;
}
</style>