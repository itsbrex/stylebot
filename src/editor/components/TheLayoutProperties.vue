<template>
  <div>
    <visibility />
    <box-model class="" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import BoxModel from './layout/BoxModel.vue';
import Visibility from './layout/Visibility.vue';

export default Vue.extend({
  name: 'TheLayoutProperties',

  components: {
    BoxModel,
    Visibility,
  },
});
</script>
