(self.webpackChunkweb3_react=self.webpackChunkweb3_react||[]).push([[478],{4840:function(r,t,e){"use strict";e.r(t),e.d(t,{multicallWrapper:function(){return s},resolverMulticallWrapper:function(){return i},universalWrapper:function(){return c}});var n=e(885),a=e(4165),u=e(5861),o=e(3829),c={raw:function(){var r=(0,u.Z)((0,a.Z)().mark((function r(t,e,n){var u,c;return(0,a.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return u=t.contracts,r.next=3,null===u||void 0===u?void 0:u.getUniversalResolver();case 3:return c=r.sent,r.abrupt("return",{to:c.address,data:c.interface.encodeFunctionData("resolve",[(0,o.d)(e),n])});case 5:case"end":return r.stop()}}),r)})));return function(t,e,n){return r.apply(this,arguments)}}(),decode:function(){var r=(0,u.Z)((0,a.Z)().mark((function r(t,e){var n,u,o;return(0,a.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.contracts,r.next=3,null===n||void 0===n?void 0:n.getUniversalResolver();case 3:if(u=r.sent,(o=u.interface.decodeFunctionResult("resolve",e))&&o[0]){r.next=7;break}return r.abrupt("return");case 7:return r.abrupt("return",{data:o[0],resolver:o[1]});case 8:case"end":return r.stop()}}),r)})));return function(t,e){return r.apply(this,arguments)}}()},i={raw:function(){var r=(0,u.Z)((0,a.Z)().mark((function r(t,e){var n,u,o;return(0,a.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.contracts,r.next=3,null===n||void 0===n?void 0:n.getPublicResolver();case 3:return u=r.sent,o=e.map((function(r){return r.data})),r.abrupt("return",{to:u.address,data:u.interface.encodeFunctionData("multicall",[o])});case 6:case"end":return r.stop()}}),r)})));return function(t,e){return r.apply(this,arguments)}}(),decode:function(){var r=(0,u.Z)((0,a.Z)().mark((function r(t,e){var n,u,o;return(0,a.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.contracts,r.next=3,null===n||void 0===n?void 0:n.getPublicResolver();case 3:if(u=r.sent,o=u.interface.decodeFunctionResult("multicall",e)){r.next=7;break}return r.abrupt("return");case 7:return r.abrupt("return",o);case 8:case"end":return r.stop()}}),r)})));return function(t,e){return r.apply(this,arguments)}}()},s={raw:function(){var r=(0,u.Z)((0,a.Z)().mark((function r(t,e){var n,u,o,c=arguments;return(0,a.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.contracts,u=c.length>2&&void 0!==c[2]&&c[2],r.next=4,null===n||void 0===n?void 0:n.getMulticall();case 4:return o=r.sent,r.abrupt("return",{to:o.address,data:o.interface.encodeFunctionData("tryAggregate",[u,e.map((function(r){return{target:r.to,callData:r.data}}))])});case 6:case"end":return r.stop()}}),r)})));return function(t,e){return r.apply(this,arguments)}}(),decode:function(){var r=(0,u.Z)((0,a.Z)().mark((function r(t,e){var u,o,c,i,s;return(0,a.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(u=t.contracts,e){r.next=3;break}return r.abrupt("return");case 3:return r.next=5,null===u||void 0===u?void 0:u.getMulticall();case 5:return o=r.sent,r.prev=6,c=o.interface.decodeFunctionResult("tryAggregate",e),i=(0,n.Z)(c,1),s=i[0],r.abrupt("return",s);case 11:return r.prev=11,r.t0=r.catch(6),r.abrupt("return");case 14:case"end":return r.stop()}}),r,null,[[6,11]])})));return function(t,e){return r.apply(this,arguments)}}()}},3829:function(r,t,e){"use strict";e.d(t,{d:function(){return a}});var n=e(8957),a=function(r){return"0x".concat(n.name.encode(r).toString("hex"))}},3897:function(r){r.exports=function(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n},r.exports.__esModule=!0,r.exports.default=r.exports},4704:function(r,t,e){var n=e(6116);r.exports=function(r,t){var e="undefined"!==typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(!e){if(Array.isArray(r)||(e=n(r))||t&&r&&"number"===typeof r.length){e&&(r=e);var a=0,u=function(){};return{s:u,n:function(){return a>=r.length?{done:!0}:{done:!1,value:r[a++]}},e:function(r){throw r},f:u}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,i=!1;return{s:function(){e=e.call(r)},n:function(){var r=e.next();return c=r.done,r},e:function(r){i=!0,o=r},f:function(){try{c||null==e.return||e.return()}finally{if(i)throw o}}}},r.exports.__esModule=!0,r.exports.default=r.exports},6116:function(r,t,e){var n=e(3897);r.exports=function(r,t){if(r){if("string"===typeof r)return n(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(r):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?n(r,t):void 0}},r.exports.__esModule=!0,r.exports.default=r.exports}}]);
//# sourceMappingURL=batchWrappers.b6ac2852.chunk.js.map