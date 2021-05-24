<template>
  <Dropdown
    :options="locales"
    :defaultDisplay="activeLocale"
    @selected="changeLocalization"
    class="z-30"
  />
</template>

<script lang="ts">
import Vue from 'vue'
import { optionsInterface } from '@/types/index'

export default Vue.extend({
  data() {
    return {
      options: <optionsInterface>[],
    }
  },
  computed: {
    locales: function () {
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
    },
    activeLocale: function () {
      console.log(this.$i18n.localeProperties)
      return this.$i18n.localeProperties.title
    },
  },
  methods: {
    changeLocalization(val: { label: string; value?: string | number }) {
      if (val.value) {
        this.$i18n.setLocale(<string>val.value)
      }
    },
  },
})
</script>