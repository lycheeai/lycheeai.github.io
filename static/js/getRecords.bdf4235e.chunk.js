"use strict";(self.webpackChunkweb3_react=self.webpackChunkweb3_react||[]).push([[854],{3022:function(t,e,n){n.r(e),n.d(e,{default:function(){return c}});var r=n(4165),a=n(5861),u=n(8922);function c(t,e,n){return o.apply(this,arguments)}function o(){return(o=(0,a.Z)((0,r.Z)().mark((function t(e,n,a){var c,o;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=e.getProfile,"name"===(o=(0,u.Hc)(n)).type||"label"===o.type){t.next=4;break}throw new Error("Input must be an ENS name");case 4:return t.next=6,c(n,a);case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},8922:function(t,e,n){n.d(e,{Hc:function(){return i}});var r=n(2982),a=n(3580),u=n(1477),c=n(9675),o=function(t){var e=t.split(".");if(e.some((function(t){return 0==t.length})))throw new Error("Name cannot have empty labels");var n=e.map((function(t){return"[root]"===t||(0,u.cy)(t)?t:(0,c.W)(t)})).join(".");return(0,u.dG)(n),n},i=function(t){var e=function(t){var e=t.split(".");return o(e[e.length-1])}(t),n=/[^.]+$/;try{o(t)}catch(i){return{type:"unknown"}}if(-1!==t.indexOf(".")){var u=t.split("."),c=t.match(n)?t.match(n)[0]:"";return e?"eth"===c&&(0,r.Z)(u[u.length-2]).length<3?{type:"name",info:"short"}:{type:"name",info:"supported"}:{type:"name",info:"unsupported"}}return(0,a.isAddress)(t)?{type:"address"}:{type:"label"}}}}]);
//# sourceMappingURL=getRecords.bdf4235e.chunk.js.map