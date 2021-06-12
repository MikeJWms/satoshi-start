<template>
  <div class="max-w-7xl mx-auto">
    <!-- <NuxtLink to="/testPage">Test Page</NuxtLink> -->
    <div class="w-full grid md:grid-cols-2 gap-4 mx-auto p-4">
      <Card class="">
        <template v-slot:title><h2>What is a Satoshi?</h2></template>
        <template v-slot:content>
          <SatoshiIntro />
        </template>
      </Card>
      <Card class="">
        <template v-slot:title><h2>Satoshi Conversions</h2></template>
        <template v-slot:content>
          <satoshi-ticker />
        </template>
      </Card>
      <Card class="md:col-span-2">
        <template v-slot:title><h2>Real-Time Price</h2></template>
        <template v-slot:content>
          <PriceChart class="w-full max-h-96" />
        </template>
      </Card>
    </div>
  </div>
</template>

<i18n>
  {
    "en-us": {
      
    },
    "es-us": {
      
    }
  }
</i18n>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  components: {},
  name: 'index',
  data() {
    return {}
  },
  methods: {
    log(val: any) {
      console.log(val)
    },
  },
})
</script>
