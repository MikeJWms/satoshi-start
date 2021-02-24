<template>
  <div>
    <p>Hello from SomeComponent.vue</p>
    <nuxt-content :document="doc" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data(){
    return {
      doc: <any>null
    }
  },
  async created() {
    this.doc = await this.$content("hello").fetch();
  }
})
</script>