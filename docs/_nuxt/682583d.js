(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{312:function(t,e,o){"use strict";o(35),o(22),o(34),o(47),o(29),o(48);var n=o(15),r=(o(23),o(69));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}e.a={beforeMount:function(){this.$store.dispatch("btcPrice/subscribeToBtcPrice",{componentName:this.$options.name,subscribe:!0})},beforeDestroy:function(){this.$store.dispatch("btcPrice/subscribeToBtcPrice",{componentName:this.$options.name,subscribe:!1})},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(r.b)({btcToUsd:"btcPrice/btcToUsd",satToUsd:"btcPrice/satToUsd",satTo1Usd:"btcPrice/satTo1Usd",satTo10Usd:"btcPrice/satTo10Usd",satTo100Usd:"btcPrice/satTo100Usd",btcPriceHistory:"btcPrice/btcPriceHistory"})),methods:{usdToBtc:function(t){return t*(1/this.btcToUsd)},usdToSats:function(t){return Math.round(t*(1e8/this.btcToUsd))}}}},324:function(t,e,o){"use strict";o.r(e);var n=o(312),r=o(0).a.extend({name:"satoshiIntro",mixins:[n.a]}),c=o(21),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("p",[t._v('\n    Satoshi is the name given to the smallest Bitcoin unit. This is the\n    equivalent of how cents work for dollars or euros. The main difference is\n    that the satoshi to bitcoin ratio is 100 million. That means that there\n    are 100 million satoshis (sometimes shortened to "sats") per 1 BTC.\n  ')]),t._v(" "),o("p",[t._v("\n    Now we know that 1 BTC is equal to 100 million satoshis. This can be\n    certainly helpful to make small payments. Nowadays, $20 in BTC are equal\n    to "),o("span",[t._v(t._s(t.usdToBtc(20)))]),t._v(" BTC ($"),o("span",[t._v(t._s(t.btcToUsd))]),t._v(" per\n    BTC). If we use satoshis, $20 would be equal to\n    "),o("span",[t._v(t._s(t.usdToSats(20)))]),t._v(" satoshis. Thus, it becomes faster and\n    easier to use the Satoshi unit rather than the whole BTC unit.\n  ")])])}),[],!1,null,null,null);e.default=component.exports}}]);