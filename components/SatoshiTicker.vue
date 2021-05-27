<template>
  <div class="">
    <div v-if="!isNaN(satToUsd)" class="">
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
import btcPriceServiceSubscriber from '~/mixins/btcPriceServiceSubscriber.mixin'
// import { mapGetters } from 'vuex'

interface btcPriceObj {
  price?: string
  symbol?: string
}

export default Vue.extend({
  name: 'satoshiTicker',
  mixins: [btcPriceServiceSubscriber],
})
</script>

<style>
.custom-height-container {
  height: calc(100vh - 4rem);
}
</style>