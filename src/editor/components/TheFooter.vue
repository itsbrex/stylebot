<template>
  <b-row class="footer" align-v="center" no-gutters>
    <b-col><the-editor-mode-actions /></b-col>
  </b-row>
</template>

<script lang="ts">
import Vue from 'vue';
import TheEditorModeActions from './footer/TheEditorModeActions.vue';

export default Vue.extend({
  name: 'TheFooter',

  components: {
    TheEditorModeActions,
  },
});
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  height: 60px;
  position: relative;
  text-align: center;
  background-color: #1e1e1e;
  color: #f1f1f1;
  // color: var(--main-foreground);
  // background: var(--main-background);
}
</style>
