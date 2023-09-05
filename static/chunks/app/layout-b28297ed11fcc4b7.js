(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{4104:function(t,e,r){Promise.resolve().then(r.bind(r,871)),Promise.resolve().then(r.t.bind(r,2941,23)),Promise.resolve().then(r.t.bind(r,3177,23)),Promise.resolve().then(r.t.bind(r,6819,23))},871:function(t,e,r){"use strict";r.r(e),r.d(e,{Providers:function(){return y}});var n=r(7437),o=r(3198),i=r(7190);function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function c(t){if(void 0===t)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function p(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var d=function(t){var e;function r(){!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,r);for(var t,e,n,o=arguments.length,i=Array(o),s=0;s<o;s++)i[s]=arguments[s];return n=(t=(e=u(r)).call.apply(e,[this].concat(i)))&&("object"===a(t)||"function"==typeof t)?t:c(this),p(c(n),"state",{bootstrapped:!1}),p(c(n),"_unsubscribe",void 0),p(c(n),"handlePersistorState",function(){n.props.persistor.getState().bootstrapped&&(n.props.onBeforeLift?Promise.resolve(n.props.onBeforeLift()).finally(function(){return n.setState({bootstrapped:!0})}):n.setState({bootstrapped:!0}),n._unsubscribe&&n._unsubscribe())}),n}return!function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(r,t),s(r.prototype,[{key:"componentDidMount",value:function(){this._unsubscribe=this.props.persistor.subscribe(this.handlePersistorState),this.handlePersistorState()}},{key:"componentWillUnmount",value:function(){this._unsubscribe&&this._unsubscribe()}},{key:"render",value:function(){return"function"==typeof this.props.children?this.props.children(this.state.bootstrapped):this.state.bootstrapped?this.props.children:this.props.loading}}]),e&&s(r,e),r}(r(2265).PureComponent);p(d,"defaultProps",{children:null,loading:null});let f=(0,r(1267).p5)(i.tO),y=t=>(0,n.jsxs)(o.zt,{store:i.tO,children:[t.children,(0,n.jsx)(d,{loading:null,persistor:f})]})},643:function(t,e,r){"use strict";r.d(e,{Dg:function(){return i},LL:function(){return c},Xq:function(){return u},tr:function(){return l}});var n=r(663),o=r(9222);let i=(0,n.hg)("get/product",async(t,e)=>{try{let t=await o.Z.get("https://dummyjson.com/carts");return t.data&&(localStorage.setItem("product",JSON.stringify(t.data)),console.log(t.data)),t.data}catch(t){return e.rejectWithValue("error with createAsyncThunk ) ".concat(t," "))}}),a=(0,n.oM)({name:"product",initialState:{carts:[],productsCarts:[],status:"idle",totalPriceUser:0,cartQuantity:0},reducers:{reset:t=>{t.status="loading"},decreaseCartQuantity:(t,e)=>{var r;if(t.productsCarts.find(t=>t.id===e.payload.id)){let r=t.productsCarts.map(t=>{if(t.id!==e.payload.id)return{...t};{let e=t.quantity-1,r=e*t.price;return{...t,quantity:e,totalPrice:r}}});t.productsCarts=r,t.productsCarts.filter(t=>0!==t.quantity)}else console.log(e.payload),e.payload.quantity=1,t.productsCarts.push(e.payload);t.cartQuantity=null===(r=t.productsCarts)||void 0===r?void 0:r.reduce((t,e)=>e.quantity+t,0)},addToCart:(t,e)=>{var r,n;if(t.productsCarts.find(t=>t.id===e.payload.id)){let r=t.productsCarts.map(t=>{if(t.id!==e.payload.id)return{...t};{let e=t.quantity+1,r=e*t.price;return{...t,quantity:e,totalPrice:r}}});t.productsCarts=r}else e.payload.quantity=1,t.productsCarts.push(e.payload);t.cartQuantity=null===(r=t.productsCarts)||void 0===r?void 0:r.reduce((t,e)=>e.quantity+t,0),t.totalPriceUser=null===(n=t.productsCarts)||void 0===n?void 0:n.reduce((e,r)=>{let n=t.productsCarts.find(t=>r.id===t.id),o=Math.trunc(e+((null==n?void 0:n.price)||0)*r.quantity);return o},0)},clearCart:t=>{t.productsCarts=[],t.cartQuantity=0,t.totalPriceUser=0},getUserPayment:(t,e)=>{t.totalPriceUser=e.payload}},extraReducers:{[i.pending.toString()]:(t,e)=>{t.status="loading"},[i.fulfilled.toString()]:(t,e)=>{t.status="idle"}}}),{reset:s,addToCart:u,clearCart:c,decreaseCartQuantity:l,getUserPayment:p}=a.actions;e.ZP=a.reducer},7190:function(t,e,r){"use strict";r.d(e,{I0:function(){return f},tO:function(){return d},v9:function(){return y}});var n=r(1267),o=r(1850),i=r(7373),a=r(663),s=r(3198),u=r(643);let c={key:"root",version:1,storage:o.Z},l=(0,i.UY)({product:u.ZP}),p=(0,n.OJ)(c,l),d=(0,a.xC)({reducer:p,middleware:t=>t({serializableCheck:{ignoredActions:[n._P,n.I2,n.E7,n.ex,n.e,n.Nz]}})});(0,n.p5)(d);let f=()=>(0,s.I0)(),y=s.v9},3177:function(){},6819:function(){},2941:function(t){t.exports={style:{fontFamily:"'__Inter_20951f', '__Inter_Fallback_20951f'",fontStyle:"normal"},className:"__className_20951f"}}},function(t){t.O(0,[401,971,596,744],function(){return t(t.s=4104)}),_N_E=t.O()}]);