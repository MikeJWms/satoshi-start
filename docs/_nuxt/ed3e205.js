(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{347:function(e,t,r){"use strict";r.r(t);var n=r(5),c=(r(36),r(0).a.extend({asyncData:function(e){return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$content,n=e.params,t.next=3,r("articles",n.slug).where({"author.name":{$regex:[n.author,"i"]}}).without("body").sortBy("createdAt","asc").fetch();case 3:return c=t.sent,t.abrupt("return",{articles:c});case 5:case"end":return t.stop()}}),t)})))()}})),o=r(21),component=Object(o.a)(c,(function(){var e=this.$createElement;return(this._self._c||e)("div")}),[],!1,null,null,null);t.default=component.exports}}]);