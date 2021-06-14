<template>
  <nuxt-content :document="content" />
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  async asyncData(context) {
    // get localization
    // usa-en or usa-es
    console.log('local path', context.app.localePath('index'))
    console.log(context.app.i18n.localeProperties)

    const lang = context.app.i18n.localeProperties.code.split('-')[0]
    const country = context.app.i18n.localeProperties.country

    const content = await context
      .$content(`keystoneContent/${country}-${lang}`, context.params.slug)
      .fetch()

    return {
      content,
    }
  },
})
</script>
