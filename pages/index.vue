

<template>
  <div class="w-full">
    <!-- <section class="w-full bg-yellow-400">
      <div class="max-w-7xl mx-2">
        <div class="py-20">
          <h1 class="text-3xl font-bold pb-3">{{ $t('hero_headline') }}</h1>
          <h2 class="text-lg font-semibold">{{ $t('hero_subHeadline') }}</h2 class="text-lg">
        </div>
      </div>
    </section> -->
    <!-- <section class="bg-gray-50 h-screen py-8">
      <div v-for="article in $t('articles')" :key="article.title" class="py-2 ">
        <nuxt-link :to="localePath(article.path)">
          <ArticleCard :number="article.number" :title="article.title" :subTitles="article.subTitles" />
        </nuxt-link>
      </div>
    </section> -->

    <satoshi-ticker />

    <!-- <div class="pt-9">
      <nuxt-link :to="localePath('/')">{{ $t('welcome') }}</nuxt-link>
      <br />
      <nuxt-link
        :to="localePath('/bitcoin-101')"
        class="text-gray-700 font-medium hover:text-indigo-700 px-4 py-2 rounded-lg"
        >Bitcoin 101</nuxt-link
      >
    </div> -->
  </div>
</template>

<i18n>
  {
    "en-us": {
      "welcome": "Welcome",
      "hero_headline": "You Know You Don't Want To Miss Out On Bitcoin",
      "hero_subHeadline": "Learn the basics with our (free) no B.S. guide.",
      "articles": [
        {
          "number": 1,
          "path": "/bitcoin-101",
          "title": "Bitcoins, Satoshis, and Why Should I Care?",
          "subTitles": [
              "What is Bitcoin?",
              "What is a Satoshi?",
              "Why should I care?"
            ]
        },
        {
          "number": 2,
          "path": "/buying-your-first-satoshis",
          "title": "My First Satoshi",
          "subTitles": [
              "How do I get Satoshis?",
              "What are the best exchanges?",
              "What else do I need to know?"
            ]
        },
        {
          "number": 3,
          "path": "/",
          "title": "How Do I Keep My Satoshis Safe?",
          "subTitles": [
              "Why do I need to be concerned with this?",
              "What options do I have?",
              "What else do I need to know?"
            ]
        },
        {
          "number": 4,
          "path": "/",
          "title": "Okay, So How Do I Pay For Things?",
          "subTitles": [
              "Who accepts Satoshis?",
              "How do I find them?",
              "What else do I need to know before getting started?"
            ]
        },
        {
          "number": 5,
          "path": "/",
          "title": "What Is HODL, and Why Do I Care?",
          "subTitles": [
              "What is HODL?",
              "Why should I do it?",
              "Why I should NOT do it?"
            ]
        },
        {
          "number": 6,
          "path": "/",
          "title": "What Does the Future Hold For Satoshis?",
          "subTitles": [
              "How do I get Satoshis?",
              "What are the best exchanges?",
              "What else do I need to know?"
            ]
        }
      ]
    },
    "es-us": {
      "welcome": "Bienvenido",
      "hero_headline": "Sabes que no quieres perderte Bitcoin",
      "hero_subHeadline": "Aprenda lo básico con nuestro (gratis) no tonterías guía.",
      "articles": [
    {
      "number": 1,
      "path": "/bitcoin-101",
      "title": "Bitcoins, Satoshis y ¿Por qué debería importarme?",
      "subTitles": [
        "¿Qué es Bitcoin?",
        "¿Qué es un Satoshi?",
        "¿Por qué debería importarme?"
      ]
    },
    {
      "number": 2,
      "path": "/ Comprando-sus-primeros-satoshis",
      "title": "Mi primer Satoshi",
      "subTitles": [
        "¿Cómo ¿Recibo Satoshis?",
        "¿Cuáles son los mejores intercambios?",
        "¿Qué más necesito saber?"
      ]
    },
    {
      "number": 3,
      "path": "/",
      "title": "¿Qué es Bitcoin?0",
      "subTitles": [
        "¿Qué es Bitcoin?1",
        "¿Qué es Bitcoin?2",
        "¿Qué más necesito saber?"
      ]
    },
    {
      "number": 4,
      "path": "/",
      "title": "¿Qué es Bitcoin?3",
      "subTitles": [
        "¿Qué es Bitcoin?4",
        "¿Qué es Bitcoin?5",
        "¿Qué es Bitcoin?6"
      ]
    },
    {
      "number": 5,
      "path": "/",
      "title": "¿Qué es Bitcoin?7",
      "subTitles": [
        "¿Qué es Bitcoin?8",
        "¿Qué es Bitcoin?9",
        "¿Qué es un Satoshi?0"
      ]
    },
    {
      "number": 6,
      "path": "/",
      "title": "¿Qué es un Satoshi?1",
      "subTitles": [
        "¿Cómo ¿Recibo Satoshis?",
        "¿Cuáles son los mejores intercambios?",
        "¿Qué más necesito saber?"
      ]
    }
  ]
    }
  }
</i18n>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  components: {},
  name: 'index',
  data() {
    return {}
  },
  methods: {
    log(val: any) {
      console.log(val)
    },
  },
})
</script>
