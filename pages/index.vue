<template>
  <div class="max-w-7xl mx-auto">
    <!-- <NuxtLink to="/testPage">Test Page</NuxtLink> -->
    <div class="w-full grid md:grid-cols-2 gap-4 mx-auto p-4">
      <Card class="">
        <template #title
          ><h2>{{ $t('satoshi-intro-title') }}</h2></template
        >
        <template #content>
          <SatoshiIntro />
        </template>
      </Card>
      <Card class="">
        <template #title
          ><h2>{{ $t('satoshi-ticker-title') }}</h2></template
        >
        <template #content>
          <satoshi-ticker />
        </template>
      </Card>
      <Card class="md:col-span-2">
        <template #title
          ><h2>{{ $t('price-chart-title') }}</h2></template
        >
        <template #content>
          <PriceChart class="w-full max-h-96" />
        </template>
      </Card>
    </div>
  </div>
</template>

<i18n>
  {
    "en-us": {
      "satoshi-intro-title": "What is a Satoshi?",
      "satoshi-ticker-title": "Satoshi Conversions",
      "price-chart-title": "Real-Time Price Chart"
      
    },
    "es-us": {
      "satoshi-intro-title": "¿Qué es un satoshi?",
      "satoshi-ticker-title": "Conversiones de Satoshi",
      "price-chart-title": "Gráfico de precios en tiempo real"
    }
  }
</i18n>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Index',
  components: {},
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
