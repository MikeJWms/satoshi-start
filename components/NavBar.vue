<template>
  <div>
    <nav class="bg-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <nuxt-link :to="localePath('/')">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="block h-8 w-8"
                  fill="#ffffff"
                  stroke="currentColor"
                  viewBox="0 0 449.881 432.8"
                >
                  <title>SmallMontserratSat</title>
                  <g>
                    <path
                      d="M314.865,357.753l-7.027,28.441-36.125-8.927,6.711-27.158c-73.5-4.239-91.418-9.473-91.586-13.88-.3-7.89,55.677-28.55,115.67-28.566,9.688,0,24.6.548,25.718-3.977,5.571-22.546-98.082-28.861-81.556-95.736,7.155-28.957,34.183-48.109,77.659-43.616l6.9-27.93,36.125,8.927-6.775,27.419c18.521,6.479,35.771,15.908,48.351,27.717l-29.019,39.318c-15.467-13.335-31.05-21.81-46.678-25.671-17.677-4.368-24.583-.638-26.1,5.513-5.319,21.524,98.277,28.09,81.94,94.2C382.235,341.5,356.3,360.656,314.865,357.753Z"
                      transform="translate(-101.774 -45.288)"
                    />
                    <path
                      d="M287.742,46.761C219.2,55.467,139.358,95.242,113.429,158.039c-15.416,37.335-11.1,72.869-11.1,72.871S105.841,259.8,122,286.524c27.952,46.235,103.226,75.344,192.865,71.229q-10.63-24.969-21.263-49.939c-55.823,4.216-103.658-23.164-118.634-63.943-13.8-37.576,5.331-72.829,8.774-78.881,31.938-56.139,112.576-60.477,129.252-60.834,2.061-.044,3.743-.05,4.986-.05,96.194,0,160.945,67.576,160.945,156.725,0,91.976-63.347,157.671-159.074,157.671a226.54,226.54,0,0,1-94.792-20.638l-19.7,57.715c28.161,13.593,72.722,22.509,114.5,22.509,141.242,0,231.8-94.314,231.8-217.257,0-23.431-3.907-79-42.056-129.8C434.056,30.425,296.917,45.6,287.742,46.761Z"
                      transform="translate(-101.774 -45.288)"
                    />
                    <path
                      d="M748.645,378.581"
                      transform="translate(-101.774 -45.288)"
                    />
                  </g>
                  <path
                    d="M382.806,439.968"
                    transform="translate(-101.774 -45.288)"
                  />
                  <path
                    d="M380.323,436.9"
                    transform="translate(-101.774 -45.288)"
                  />
                </svg>
              </nuxt-link>
            </div>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                <!-- <nuxt-link
                  :to="localePath('/satoshi-ticker')"
                  class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                  >Satoshi Ticker</nuxt-link
                >
                <nuxt-link
                  :to="localePath('/')"
                  class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                  >Link 2</nuxt-link
                >
                <nuxt-link
                  :to="localePath('/')"
                  class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                  >Link 3</nuxt-link
                > -->
              </div>
            </div>
          </div>
          <div class="hidden md:block">
            <div class="ml-4 flex items-center md:ml-6">
              <!-- Profile dropdown -->
              <div class="ml-3 relative">
                <LocaleSwitcher />
              </div>
            </div>
          </div>
          <div class="-mr-2 flex md:hidden">
            <!-- Mobile menu button -->
            <button
              @click="toggleMobileMenu"
              class="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span class="sr-only">Open main menu</span>
              <!--
                Heroicon name: outline/menu

                Menu open: "hidden", Menu closed: "block"
              -->
              <svg
                class="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <!--
                Heroicon name: outline/x

                Menu open: "block", Menu closed: "hidden"
              -->
              <svg
                class="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!--
        Mobile menu, toggle classes based on menu state.

        Open: "block", closed: "hidden"
      -->
      <transition
        enter-active-class="transition ease-out duration-100"
        enter-from-class="transform opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100"
        leave-active-class="transition ease-in duration-75"
        leave-from-class="transform opacity-100 scale-100"
        leave-to-class="transform opacity-0 scale-95"
      >
        <div v-show="mobileMenuOpen" class="md:hidden">
          <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
            <!-- <nuxt-link
              :to="localePath('/bitcoin-101')"
              @click.native="toggleMobileMenu"
              class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >Bitcoin 101</nuxt-link
            > -->
            <!-- <nuxt-link
              :to="localePath('/satoshi-ticker')"
              class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
              >Satoshi Ticker</nuxt-link
            > -->
          </div>
          <div class="pt-4 pb-3 border-t border-gray-700">
            <div class="px-2 space-y-1">
              <div class="flex w-full justify-end">
                <LocaleSwitcher class="py-2 z-50" />
              </div>
            </div>
          </div>
        </div>
      </transition>
    </nav>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      mobileMenuOpen: false,
    }
  },
  mounted() {
    document.addEventListener('click', this.closeDropdown)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.closeDropdown)
  },
  watch: {
    $route(to, from) {
      this.mobileMenuOpen = false
    },
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen
    },
    closeDropdown(e: any) {
      if (!this.$el.contains(e.target)) {
        this.mobileMenuOpen = false
      }
    },
  },
})
</script>