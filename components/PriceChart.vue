<template>
  <div id="chart"></div>
</template>

<script lang="ts">
import ApexCharts from 'apexcharts'
import btcPriceServiceSubscriber from '~/mixins/btcPriceServiceSubscriber.mixin'

import Vue from 'vue'
export default Vue.extend({
  name: 'priceChart',
  mixins: [btcPriceServiceSubscriber],
  watch: {
    btcPriceHistory: function (newVal) {
      console.log(newVal)
      this.chart.updateSeries([
        {
          data: newVal,
        },
      ])
    },
  },
  data() {
    return {
      chart: null,
    }
  },
  mounted() {
    var options = {
      chart: {
        type: 'line',
      },
      series: [
        {
          name: 'Price ($, USD)',
          data: [],
        },
      ],
    }

    this.chart = new ApexCharts(document.querySelector('#chart'), options)

    this.chart.render()
  },
})
</script>