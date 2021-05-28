<template>
  <div class="max-w-7xl mx-auto">
    <!-- <NuxtLink to="/testPage">Test Page</NuxtLink> -->
    <div class="w-full grid md:grid-cols-2 gap-4 mx-auto p-4">
      <Card class="flex-1">
        <template v-slot:title><h2>What is a Satoshi?</h2></template>
        <template v-slot:content>
          <SatoshiIntro />
        </template>
      </Card>
      <Card class="flex-1 w-full">
        <template v-slot:title><h2>Satoshi Conversions</h2></template>
        <template v-slot:content>
          <satoshi-ticker />
        </template>
      </Card>
    </div>
    <!-- <Card>
      <template v-slot:content>
        <PriceHistory class="w-full max-h-96" />
      </template>
    </Card> -->
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
