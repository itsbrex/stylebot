<template>
  <the-stylebot-resizer>
    <the-header />

    <div
      class="stylebot-body"
      :style="colorPickerVisible ? 'pointer-events: none' : ''"
    >
      <the-basic-editor v-if="mode === 'basic'" />
      <the-magic-editor v-else-if="mode === 'magic'" />
      <the-code-editor v-else-if="mode === 'code' && !resizing" />
    </div>

    <the-footer />
  </the-stylebot-resizer>
</template>

<script lang="ts">
import Vue from 'vue';

import TheBasicEditor from './TheBasicEditor.vue';
import TheCodeEditor from './TheCodeEditor.vue';
import TheFooter from './TheFooter.vue';
import TheHeader from './TheHeader.vue';
import TheMagicEditor from './TheMagicEditor.vue';
import TheStylebotResizer from './TheStylebotResizer.vue';

import { StylebotEditingMode } from '@stylebot/types';

export default Vue.extend({
  name: 'TheStylebot',

  components: {
    TheHeader,
    TheFooter,
    TheBasicEditor,
    TheMagicEditor,
    TheCodeEditor,
    TheStylebotResizer,
  },

  computed: {
    resizing(): boolean {
      return this.$store.state.resizing;
    },

    mode(): StylebotEditingMode {
      return this.$store.state.options.mode;
    },

    colorPickerVisible(): boolean {
      return this.$store.state.colorPickerVisible;
    },
  },
});
</script>

<style lang="scss">
.stylebot {
  top: 0;
  padding: 0;
  line-height: 20px;
  background-color: #1e1e1e;
  color: #f1f1f1;
  // color: var(--main-foreground) !important; // TODO: fix this
  // background: var(--main-background) !important;
}


.stylebot-body {
  // flex: 1;
  position: relative;
  // overflow: hidden;
  height: 90%;
  color: var(--main-foreground) !important;
  background: var(--main-background) !important;
}
</style>
