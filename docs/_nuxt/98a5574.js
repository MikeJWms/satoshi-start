(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{313:function(e,t,o){"use strict";o(35),o(22),o(34),o(47),o(29),o(48);var n=o(15),r=(o(23),o(69));function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,o)}return t}t.a={beforeMount:function(){this.$store.dispatch("btcPrice/subscribeToBtcPrice",{componentName:this.$options.name,subscribe:!0})},beforeDestroy:function(){this.$store.dispatch("btcPrice/subscribeToBtcPrice",{componentName:this.$options.name,subscribe:!1})},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(r.b)({btcToUsd:"btcPrice/btcToUsd",satToUsd:"btcPrice/satToUsd",satTo1Usd:"btcPrice/satTo1Usd",satTo10Usd:"btcPrice/satTo10Usd",satTo100Usd:"btcPrice/satTo100Usd",btcPriceHistory:"btcPrice/btcPriceHistory"})),methods:{usdToBtc:function(e){return e*(1/this.btcToUsd)},usdToSats:function(e){return Math.round(e*(1e8/this.btcToUsd))}}}},314:function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"en-us":{"section_1":"Satoshi is the name given to the smallest Bitcoin unit. This is the equivalent of how cents work for dollars or euros. The main difference is that the satoshi to bitcoin ratio is 100 million. That means that there are 100 million satoshis (sometimes shortened to \\"sats\\") per 1 BTC.","section_2-0":"Now we know that 1 BTC is equal to 100 million satoshis. This can be certainly helpful to make small payments. Nowadays, $20 in BTC are equal to ","section_2-1":" BTC ($","section_2-2":"per BTC). If we use satoshis, $20 would be equal to ","section_2-3":" satoshis. Thus, it becomes faster and easier to use the Satoshi unit rather than the whole BTC unit."},"es-us":{"section_1":"Satoshi es el nombre que se le da a la unidad más pequeña de Bitcoin. Este es el equivalente a cómo funcionan los centavos por dólares o euros. La principal diferencia es que la relación entre satoshi y bitcoin es de 100 millones. Eso significa que hay 100 millones de satoshis (a veces abreviado a \\"sats \\") por 1 BTC.","section_2-0":"Ahora sabemos que 1 BTC es igual a 100 millones de satoshis. Sin duda, esto puede ser útil para realizar pequeños pagos. Hoy en día, $ 20 en BTC equivalen a ","section_2-1":" BTC ($","section_2-2":"por BTC). Si usamos satoshis, $ 20 sería igual a ","section_2-3":" satoshis. Por lo tanto, se vuelve más rápido y fácil usar la unidad Satoshi en lugar de toda la unidad BTC. "}}'),delete e.options._Ctor}},320:function(e,t,o){"use strict";var n=o(314),r=o.n(n);t.default=r.a},327:function(e,t,o){"use strict";o.r(t);var n=o(0),r=o(313),c=n.a.extend({name:"SatoshiIntro",mixins:[r.a]}),l=o(21),d=o(320),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("p",[e._v("\n    "+e._s(e.$t("section_1"))+"\n  ")]),e._v(" "),o("p",[e._v("\n    "+e._s(e.$t("section_2-0"))),o("span",[e._v(e._s(e.usdToBtc(20)))]),e._v(e._s(e.$t("section_2-1"))),o("span",[e._v(e._s(e.btcToUsd))]),e._v("\n    "+e._s(e.$t("section_2-2"))+"\n    "),o("span",[e._v(e._s(e.usdToSats(20)))]),e._v(" "+e._s(e.$t("section_2-3"))+"\n  ")])])}),[],!1,null,null,null);"function"==typeof d.default&&Object(d.default)(component);t.default=component.exports}}]);