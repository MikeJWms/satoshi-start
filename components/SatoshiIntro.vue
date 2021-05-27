<template>
  <div>
    <p>
      Satoshi is the name given to the smallest Bitcoin unit. This is the
      equivalent of how cents work for dollars or euros. The main difference is
      that the satoshi to bitcoin ratio is 100 million. That means that there
      are 100 million satoshis (sometimes shortened to "sats") per 1 BTC.
    </p>
    <p>
      Now we know that 1 BTC is equal to 100 million satoshis. This can be
      certainly helpful to make small payments. Nowadays, $20 in BTC are equal
      to <span>{{ usdToBtc(20) }}</span> BTC ($<span>{{ btcToUsd }}</span> per
      BTC). If we use satoshis, $20 would be equal to
      <span>{{ usdToSats(20) }}</span> satoshis. Thus, it becomes faster and
      easier to use the Satoshi unit rather than the whole BTC unit.
    </p>
  </div>
</template>

<script lang="ts">
import btcPriceServiceSubscriber from '~/mixins/btcPriceServiceSubscriber.mixin'

import Vue from 'vue'
export default Vue.extend({
  name: 'satoshiIntro',
  mixins: [btcPriceServiceSubscriber],
})
</script>