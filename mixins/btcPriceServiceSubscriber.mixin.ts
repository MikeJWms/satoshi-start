import { mapGetters } from 'vuex'
export default {
	beforeMount() {
		this.$store.dispatch('btcPrice/subscribeToBtcPrice', { componentName: this.$options.name, subscribe: true })
	},
	beforeDestroy() {
		this.$store.dispatch('btcPrice/subscribeToBtcPrice', { componentName: this.$options.name, subscribe: false })
	},
	computed: {
		...mapGetters({
			btcToUsd: 'btcPrice/btcToUsd',
			satToUsd: 'btcPrice/satToUsd',
			satTo1Usd: 'btcPrice/satTo1Usd',
			satTo10Usd: 'btcPrice/satTo10Usd',
			satTo100Usd: 'btcPrice/satTo100Usd',
		}),
	},
	methods: {
		usdToBtc: function (usd: number): number {
			return usd * (1 / this.btcToUsd)
		},
		usdToSats: function (usd: number): number {
			return Math.round(usd * (100000000 / this.btcToUsd))
		},
	}
}