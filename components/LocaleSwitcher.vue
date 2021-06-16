<template>
  <Dropdown
    :options="locales"
    :default-display="activeLocale"
    class="z-30"
    @selected="changeLocalization"
  />
</template>

<script lang="ts">
import Vue from 'vue'
import { OptionsInterface } from '@/types/index'

export default Vue.extend({
  data() {
    return {
      options: [] as OptionsInterface[],
    }
  },
  computed: {
    locales() {
      if (this.$i18n.locales) {
        console.log('Locals', this.$i18n.locales)
        const mappable = this.$i18n.locales
        return mappable.map((locale: any) => {
          return {
            type: 'button',
            label: locale?.title,
            value: locale?.code,
          }
        })
      }
      return null
    },
    activeLocale() {
      console.log(this.$i18n.localeProperties)
      return this.$i18n.localeProperties.title
    },
  },
  methods: {
    changeLocalization(val: { label: string; value?: string | number }) {
      if (val.value) {
        this.$i18n.setLocale(val.value)
      }
    },
  },
})
</script>
