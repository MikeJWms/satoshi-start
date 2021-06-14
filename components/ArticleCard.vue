<template>
  <div class="bg-white mx-0 border px-4 py-5 hover:bg-yellow-50 relative">
    <span class="self-center text-6xl text-gray-200">{{ number }}</span>

    <div class="my-4 mr-4">
      <h3 class="text-3xl font-semibold text-gray-700 pb-4 underline">
        {{ title }}
      </h3>
      <div v-for="subTitle in subTitles" :key="subTitle">
        <h4 class="text-gray-500 text-lg pl-2">{{ subTitle }}</h4>
      </div>
    </div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      class="h-6 text-yellow-400 absolute left-auto right-3 bottom-3"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M9 5l7 7-7 7"
      />
    </svg>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    number: {
      type: Number,
      default: 0,
    },
    title: {
      type: String,
      default: '',
    },
    subTitles: {
      type: [Array, Object],
      default: () => [''],
    },
  },
})
</script>
