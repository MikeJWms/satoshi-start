import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { RootState } from '~/store'
import { BTCPrice } from '~/types/index'

export const state = () => ({
	btcPrices: [] as BTCPrice[],
	subscribers: new Set(),
	pollingTimer: null as NodeJS.Timeout
})

export type BTCPriceStore = ReturnType<typeof state>

export const getters: GetterTree<BTCPriceStore, RootState> = {
	btcToUsd: function (state): number {
		return state.btcPrices[state.btcPrices.length - 1]?.price
	},
	satToUsd: function (state, getters): number {
		return getters.btcToUsd / 100000000
	},
	satTo1Usd: function (state, getters): string {
		return (1 / getters.satToUsd).toFixed(0)
	},
	satTo10Usd: function (state, getters): string {
		return (10 / getters.satToUsd).toFixed(0)
	},
	satTo100Usd: function (state, getters): string {
		return (100 / getters.satToUsd).toFixed(0)
	},
	btcPriceHistory: function (state, getters): { x: Date, y: number }[] {
		return state.btcPrices.map((price) => {
			return { x: price.timestamp, y: price.price }
		})
	}
}

export const mutations: MutationTree<BTCPriceStore> = {
	SUBSCRIBE_COMPONENT: (state, componentName: string) => {
		state.subscribers.add(componentName)
	},
	UNSUBSCRIBE_COMPONENT: (state, componentName: string) => {
		state.subscribers.delete(componentName)
	},
	UPDATE_POLLING_TIME: (state, payload) => {
		state.pollingTimer = payload
	},
	CANCEL_POLLING_TIMER: (state) => {
		clearInterval(state.pollingTimer)
	},
	UPDATE_BTC_PRICES: (state, payload) => {
		state.btcPrices.push(payload)
	}
}

export const actions: ActionTree<BTCPriceStore, RootState> = {

	// general manager for btc price subscription logic
	async subscribeToBtcPrice(context, payload: { componentName: string, subscribe: boolean }) {
		if (!payload) return // protects agains case where on inital load, this action can be called w/ no paylaod 

		if (payload.subscribe) {
			// subscribe the component from the service
			context.commit('SUBSCRIBE_COMPONENT', payload.componentName)
			// check - if this was the first subscriber, start BTC price service
			if (context.state.subscribers.size == 1) { context.dispatch('getPriceInfo') }
		}
		else {
			// unsubscribe the component from the service
			context.commit('UNSUBSCRIBE_COMPONENT', payload.componentName)
			// check - if there are no current subscribers, stop BTC price service
			if (context.state.subscribers.size == 0) { context.commit('CANCEL_POLLING_TIMER') }
		}
	},

	// creates an interval to poll the BTC price api
	async getPriceInfo(context) {
		// "prime the pump" - since setInterval wont fire for it's interval time, we'll get the data flowing with this...
		context.dispatch('getBtcPriceFromAPI')
			.then((data) => context.commit('UPDATE_BTC_PRICES', data))

		let pollingTimer = setInterval(async () => {
			context.commit('UPDATE_BTC_PRICES', await context.dispatch('getBtcPriceFromAPI'))
		}, 5000)
		context.commit('UPDATE_POLLING_TIME', pollingTimer)
	},

	// request to the BTC price api - TODO: move to another file where all API request functions can hangout
	async getBtcPriceFromAPI() {
		const btcPrice = await this.$axios
			.$get('https://api.binance.com/api/v3/ticker/price?symbol=BTCTUSD')
			.then((data: any) => {
				const processedData: BTCPrice = {
					price: parseFloat(data.price),
					timestamp: new Date()
				}
				return processedData
			})
			.catch((error) => {
				console.log(error)
			})
		return btcPrice
	},
}