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

<style lang="scss">
// .stylebot-code-editor-iframe {
//   // height: calc(100% - 5px);
  

//   iframe {
//     width: 100%;
//     height: 100%;
//     border: none;
//     position: relative;
//   }
// }



.stylebot-code-editor-iframe {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: none;
}

.monaco-editor .view-lines {
    font-family: OperatorMono-Light,Menlo, Monaco, "Courier New", monospace;
    font-weight: normal;
    font-size: 17px;
    font-feature-settings: "liga" 0, "calt" 0;
    line-height: 18px;
    padding: 0 10px;
}
</style>
