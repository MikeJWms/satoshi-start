<template>
  <div
    class="custom-height-container w-full px-3 flex relative mx-auto container max-w-7xl"
  >
    <h1 class="text-2xl text-gray-700 pt-5 absolute">
      {{ $t('heading') }}
    </h1>

    <div v-if="!isNaN(satToUsd)" class="flex w-full justify-center self-center">
      <div class="block">
        <div class="flex items-end justify-center">
          <span>
            <SatoshiSymbol class="text-gray-600 h-6 block pb-1" />
          </span>
          <span class="pl-2 text-gray-900 text-4xl font-semibold">
            {{ satTo1Usd }}
          </span>
          <span class="self-center pl-2">=</span>
          <span class="pl-2">$</span>
          <span class="text-gray-900 text-4xl">1</span>
          <span>usd</span>
        </div>
        <div class="flex items-end justify-center">
          <span>
            <SatoshiSymbol class="text-gray-600 h-6 block pb-1" />
          </span>
          <span class="pl-2 text-gray-900 text-4xl font-semibold">
            {{ satTo10Usd }}
          </span>
          <span class="self-center pl-2">=</span>
          <span class="pl-2">$</span>
          <span class="text-gray-900 text-4xl">10</span>
          <span>usd</span>
        </div>
        <div class="flex items-end justify-center">
          <span>
            <SatoshiSymbol class="text-gray-600 h-6 block pb-1" />
          </span>
          <span class="pl-2 text-gray-900 text-4xl font-semibold">
            {{ satTo100Usd }}
          </span>
          <span class="self-center pl-2">=</span>
          <span class="pl-2">$</span>
          <span class="text-gray-900 text-4xl">100</span>
          <span>usd</span>
        </div>
      </div>
    </div>
  </div>
</template>

<i18n>
{
	"en-us": {
		"heading": "How much are Satoshis worth?"
	},
	"es-us": {
		"heading": "¿Cuánto valen los Satoshis?"
	}
}
</i18n>

<script lang="ts">
import Vue from 'vue'

interface btcPriceObj {
  price?: string
  symbol?: string
}

export default Vue.extend({
  data() {
    return {
      cryptoPrices: { price: '', symbol: '' },
      poll: 0,
    }
  },
  async fetch() {
    console.log('current state of crypto Prices: ', this.cryptoPrices)
    this.cryptoPrices = await this.$axios
      .$get('https://api.binance.com/api/v3/ticker/price?symbol=BTCTUSD')
      .then((data: any) => {
        console.log('initial load: ', data)
        return data
      })
  },
  mounted() {
    this.poll = window.setInterval(async () => {
      this.cryptoPrices = await this.$axios
        .$get('https://api.binance.com/api/v3/ticker/price?symbol=BTCTUSD')
        .then((data: any) => {
          console.log(data)
          return data
        })
      await new Promise((resolve) => {
        setTimeout(resolve, 2000)
      })
    }, 2000)
  },
  destroyed() {
    console.log('Trying to kill poll... interval id: ', this.poll)
    clearInterval(this.poll)
  },
  computed: {
    satToUsd: function (): number {
      const satoshiToUSD = parseFloat(this.cryptoPrices.price) / 100000000
      return satoshiToUSD
    },
    satTo1Usd: function (): string {
      return (1 / this.satToUsd).toFixed(0)
    },
    satTo10Usd: function (): string {
      return (10 / this.satToUsd).toFixed(0)
    },
    satTo100Usd: function (): string {
      return (100 / this.satToUsd).toFixed(0)
    },
  },
})
</script>

<style>
.custom-height-container {
  height: calc(100vh - 4rem);
}
</style>