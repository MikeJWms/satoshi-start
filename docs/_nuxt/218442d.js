(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{313:function(t,e,r){"use strict";r(35),r(22),r(34),r(47),r(29),r(48);var c=r(15),o=(r(23),r(69));function n(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}e.a={beforeMount:function(){this.$store.dispatch("btcPrice/subscribeToBtcPrice",{componentName:this.$options.name,subscribe:!0})},beforeDestroy:function(){this.$store.dispatch("btcPrice/subscribeToBtcPrice",{componentName:this.$options.name,subscribe:!1})},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.b)({btcToUsd:"btcPrice/btcToUsd",satToUsd:"btcPrice/satToUsd",satTo1Usd:"btcPrice/satTo1Usd",satTo10Usd:"btcPrice/satTo10Usd",satTo100Usd:"btcPrice/satTo100Usd",btcPriceHistory:"btcPrice/btcPriceHistory"})),methods:{usdToBtc:function(t){return t*(1/this.btcToUsd)},usdToSats:function(t){return Math.round(t*(1e8/this.btcToUsd))}}}},329:function(t,e,r){"use strict";r.r(e);r(201);var c=r(0),o=r(326),n=r.n(o),d=r(313),h=c.a.extend({name:"PriceChart",mixins:[d.a],data:function(){return{chart:null}},watch:{btcPriceHistory:function(t){console.log(t),this.chart.updateSeries([{data:t}])}},mounted:function(){this.chart=new n.a(document.querySelector("#chart"),{chart:{type:"line"},series:[{name:"Price (USD / Satoshi)",data:[]}],yaxis:{labels:{formatter:function(t){return"".concat((t/100).toFixed(10),"¢")},title:{text:"Price"}}},xaxis:{labels:{show:!1,hideOverlappingLabels:!0,showDuplicates:!1},title:{text:"Time"}}}),this.chart.render()}}),l=r(21),component=Object(l.a)(h,(function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"chart"}})}),[],!1,null,null,null);e.default=component.exports}}]);