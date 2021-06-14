<template>
  <div id="chart"></div>
</template>

<script lang="ts">
import Vue from 'vue'
import ApexCharts from 'apexcharts'
import btcPriceServiceSubscriber from '~/mixins/btcPriceServiceSubscriber.mixin'

export default Vue.extend({
  name: 'PriceChart',
  mixins: [btcPriceServiceSubscriber],
  data() {
    return {
      chart: null,
    }
  },
  watch: {
    btcPriceHistory(newVal) {
      console.log(newVal)
      this.chart.updateSeries([
        {
          data: newVal,
        },
      ])
    },
  },
  mounted() {
    const options = {
      chart: {
        type: 'line',
      },
      series: [
        {
          name: 'Price (USD / Satoshi)',
          data: [],
        },
      ],
      yaxis: {
        labels: {
          formatter: (value) => {
            return `${(value / 100).toFixed(10)}¢`
          },
          title: {
            text: 'Price',
          },
        },
      },
      xaxis: {
        labels: {
          show: false,
          hideOverlappingLabels: true,
          showDuplicates: false,
        },
        title: {
          text: 'Time',
        },
      },
    }

    this.chart = new ApexCharts(document.querySelector('#chart'), options)

    this.chart.render()
  },
})
</script>
