exports.id = 983;
exports.ids = [983];
exports.modules = {

/***/ 2488:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 5034))

/***/ }),

/***/ 9189:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 9571, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4282, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6505, 23))

/***/ }),

/***/ 5303:
/***/ (() => {



/***/ }),

/***/ 5034:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Providers: () => (/* binding */ Providers)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8250);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6507);
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5067);
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(112);
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_4__);
/* __next_internal_client_entry_do_not_use__ Providers auto */ 
/* Core */ 
/* Instruments */ 
//


let persistor = (0,redux_persist__WEBPACK_IMPORTED_MODULE_4__.persistStore)(_redux_store__WEBPACK_IMPORTED_MODULE_2__/* .reduxStore */ .tO);
const Providers = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider, {
        store: _redux_store__WEBPACK_IMPORTED_MODULE_2__/* .reduxStore */ .tO,
        children: [
            props.children,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_3__/* .PersistGate */ .r, {
                loading: null,
                persistor: persistor
            })
        ]
    });
};


/***/ }),

/***/ 6282:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dg: () => (/* binding */ getAllProducts),
/* harmony export */   LL: () => (/* binding */ clearCart),
/* harmony export */   Xq: () => (/* binding */ addToCart),
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   tr: () => (/* binding */ decreaseCartQuantity)
/* harmony export */ });
/* unused harmony exports productSlice, reset, getUserPayment */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1388);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3258);


const initialState = {
    carts: [],
    productsCarts: [],
    status: "idle",
    totalPriceUser: 0,
    cartQuantity: 0
};
const getAllProducts = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("get/product", async (userId, thunkApi)=>{
    try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.get("https://dummyjson.com/carts");
        if (response.data) {
            localStorage.setItem("product", JSON.stringify(response.data));
            console.log(response.data);
        }
        return response.data;
    } catch (error) {
        return thunkApi.rejectWithValue(`error with createAsyncThunk ) ${error} `);
    }
});
const productSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "product",
    initialState,
    reducers: {
        reset: (state)=>{
            state.status = "loading";
        },
        decreaseCartQuantity: (state, action)=>{
            if (state.productsCarts.find((item)=>item.id === action.payload.id)) {
                const tempCart = state.productsCarts.map((item)=>{
                    if (item.id === action.payload.id) {
                        let tempQty = item.quantity - 1;
                        let tempTotalPrice = tempQty * item.price;
                        return {
                            ...item,
                            quantity: tempQty,
                            totalPrice: tempTotalPrice
                        };
                    } else {
                        return {
                            ...item
                        };
                    }
                });
                state.productsCarts = tempCart;
                state.productsCarts.filter((item)=>item.quantity !== 0);
            } else {
                console.log(action.payload);
                action.payload.quantity = 1;
                state.productsCarts.push(action.payload);
            }
            state.cartQuantity = state.productsCarts?.reduce((acc, item)=>item.quantity + acc, 0);
        },
        addToCart: (state, action)=>{
            if (state.productsCarts.find((item)=>item.id === action.payload.id)) {
                const tempCart = state.productsCarts.map((item)=>{
                    if (item.id === action.payload.id) {
                        let tempQty = item.quantity + 1;
                        let tempTotalPrice = tempQty * item.price;
                        return {
                            ...item,
                            quantity: tempQty,
                            totalPrice: tempTotalPrice
                        };
                    } else {
                        return {
                            ...item
                        };
                    }
                });
                state.productsCarts = tempCart;
            } else {
                action.payload.quantity = 1;
                state.productsCarts.push(action.payload);
            }
            state.cartQuantity = state.productsCarts?.reduce((acc, item)=>item.quantity + acc, 0);
            state.totalPriceUser = state.productsCarts?.reduce((acc, curItem)=>{
                const value = state.productsCarts.find((item)=>curItem.id === item.id);
                const dollarValue = Math.trunc(acc + (value?.price || 0) * curItem.quantity);
                return dollarValue;
            }, 0);
        },
        clearCart: (state)=>{
            state.productsCarts = [];
            state.cartQuantity = 0;
            state.totalPriceUser = 0;
        },
        getUserPayment: (state, action)=>{
            state.totalPriceUser = action.payload;
        }
    },
    extraReducers: {
        [getAllProducts.pending.toString()]: (state, action)=>{
            state.status = "loading";
        },
        [getAllProducts.fulfilled.toString()]: (state, action)=>{
            state.status = "idle";
        }
    }
});
const { reset, addToCart, clearCart, decreaseCartQuantity, getUserPayment } = productSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (productSlice.reducer);


/***/ }),

/***/ 6507:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I0: () => (/* binding */ useDispatch),
/* harmony export */   tO: () => (/* binding */ reduxStore),
/* harmony export */   v9: () => (/* binding */ useSelector)
/* harmony export */ });
/* unused harmony export persist */
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(112);
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6001);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1388);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8250);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _slices_productSlice_productSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6282);
/* Core */ // 'use client'

 // defaults to localStorage for web
// 



/* Instruments */ // import { reducer } from './rootReducer'
// import { middleware } from './middleware'
const persistConfig = {
    key: "root",
    version: 1,
    storage: redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z
};
const rootReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__.combineReducers)({
    // auth: persistReducer(authPersistConfig,authReducer),
    product: _slices_productSlice_productSlice__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP
});
const persistedReducer = (0,redux_persist__WEBPACK_IMPORTED_MODULE_0__.persistReducer)(persistConfig, rootReducer);
const reduxStore = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__.configureStore)({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    redux_persist__WEBPACK_IMPORTED_MODULE_0__.FLUSH,
                    redux_persist__WEBPACK_IMPORTED_MODULE_0__.REHYDRATE,
                    redux_persist__WEBPACK_IMPORTED_MODULE_0__.PAUSE,
                    redux_persist__WEBPACK_IMPORTED_MODULE_0__.PERSIST,
                    redux_persist__WEBPACK_IMPORTED_MODULE_0__.PURGE,
                    redux_persist__WEBPACK_IMPORTED_MODULE_0__.REGISTER
                ]
            }
        })
});
const persist = (0,redux_persist__WEBPACK_IMPORTED_MODULE_0__.persistStore)(reduxStore);
//  default reduxStore
const useDispatch = ()=>(0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
const useSelector = react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector;


/***/ }),

/***/ 918:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"app\\layout.tsx","import":"Inter","arguments":[{"subsets":["latin"]}],"variableName":"inter"}
var target_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_ = __webpack_require__(2411);
var target_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(target_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(1363);
;// CONCATENATED MODULE: ./lib/providers.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`E:\YOUTUBE\Project\Test task\NEXTREDUX\my-app\lib\providers.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["Providers"];

// EXTERNAL MODULE: ./app/globals.css
var globals = __webpack_require__(7272);
// EXTERNAL MODULE: ./app/main.scss
var main = __webpack_require__(6039);
;// CONCATENATED MODULE: ./app/layout.tsx
/* Components */ 


/* Instruments */ // import styles from './styles/layout.module.css'


function RootLayout(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx(e0, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("html", {
            lang: "en",
            className: "dark",
            children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
                className: (target_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default()).className,
                children: /*#__PURE__*/ jsx_runtime_.jsx("section", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("main", {
                        children: props.children
                    })
                })
            })
        })
    });
}


/***/ }),

/***/ 6330:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2947);


const loadingPage = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "",
        children: "loading..."
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadingPage);


/***/ }),

/***/ 5080:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"64x64"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "icon.ico")

    return [{
      ...imageData,
      url: imageUrl + "?cb79560840041a18",
    }]
  });

/***/ }),

/***/ 7272:
/***/ (() => {



/***/ }),

/***/ 6039:
/***/ (() => {



/***/ })

};
;