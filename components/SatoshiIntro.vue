<template>
  <div>
    <p>
      {{ $t('section_1') }}
    </p>
    <p>
      {{ $t('section_2-0') }}<span>{{ usdToBtc(20) }}</span
      >{{ $t('section_2-1') }}<span>{{ btcToUsd }}</span>
      {{ $t('section_2-2') }}
      <span>{{ usdToSats(20) }}</span> {{ $t('section_2-3') }}
    </p>
  </div>
</template>

<i18n>
  {
    "en-us": {
      "section_1": "Satoshi is the name given to the smallest Bitcoin unit. This is the equivalent of how cents work for dollars or euros. The main difference is that the satoshi to bitcoin ratio is 100 million. That means that there are 100 million satoshis (sometimes shortened to \"sats\") per 1 BTC.",
      "section_2-0": "Now we know that 1 BTC is equal to 100 million satoshis. This can be certainly helpful to make small payments. Nowadays, $20 in BTC are equal to ",
      "section_2-1": " BTC ($",
      "section_2-2": "per BTC). If we use satoshis, $20 would be equal to ",
      "section_2-3": " satoshis. Thus, it becomes faster and easier to use the Satoshi unit rather than the whole BTC unit."
    },
    "es-us": {
      "section_1": "Satoshi es el nombre que se le da a la unidad más pequeña de Bitcoin. Este es el equivalente a cómo funcionan los centavos por dólares o euros. La principal diferencia es que la relación entre satoshi y bitcoin es de 100 millones. Eso significa que hay 100 millones de satoshis (a veces abreviado a \"sats \") por 1 BTC.",
      "section_2-0": "Ahora sabemos que 1 BTC es igual a 100 millones de satoshis. Sin duda, esto puede ser útil para realizar pequeños pagos. Hoy en día, $ 20 en BTC equivalen a ",
      "section_2-1": " BTC ($",
      "section_2-2": "por BTC). Si usamos satoshis, $ 20 sería igual a ",
      "section_2-3": " satoshis. Por lo tanto, se vuelve más rápido y fácil usar la unidad Satoshi en lugar de toda la unidad BTC. "
    }
  }
</i18n>

<script lang="ts">
import Vue from 'vue'
import btcPriceServiceSubscriber from '~/mixins/btcPriceServiceSubscriber.mixin'

export default Vue.extend({
  name: 'SatoshiIntro',
  mixins: [btcPriceServiceSubscriber],
})
</script>
