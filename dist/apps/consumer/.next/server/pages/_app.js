"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 640:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(184);
// EXTERNAL MODULE: ./store/slices/countSlice.ts
var countSlice = __webpack_require__(949);
// EXTERNAL MODULE: ./store/slices/addProductSlice.ts
var addProductSlice = __webpack_require__(455);
;// CONCATENATED MODULE: ./store/reducers.ts



const reducers = (0,toolkit_.combineReducers)({
    count: countSlice/* default */.ZP,
    AddProduct: addProductSlice/* default */.Z
});
/* harmony default export */ const store_reducers = (reducers);

;// CONCATENATED MODULE: external "next-redux-wrapper"
const external_next_redux_wrapper_namespaceObject = require("next-redux-wrapper");
;// CONCATENATED MODULE: ./store/store.ts



// export const initializeStore = () => {
//   return configureStore({
//     reducer: rootReducers,
//   });
// };
const makeStore = (context)=>(0,toolkit_.configureStore)({
        reducer: store_reducers
    })
;
const wrapper = (0,external_next_redux_wrapper_namespaceObject.createWrapper)(makeStore, {
    debug: true
});

;// CONCATENATED MODULE: ./pages/_app.tsx



// import { Provider } from 'react-redux';
// import withRedux from 'next-redux-wrapper';
// import { initializeStore } from './../store/store';\

function CustomApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "Welcome to consumer!"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                className: "app",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            })
        ]
    }));
}
// export default CustomApp;
/* harmony default export */ const _app = (wrapper.withRedux(CustomApp));


/***/ }),

/***/ 455:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ setProduct),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = [
    {
        id: 0,
        name: 'default'
    }, 
];
const counterSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: 'AddProduct',
    initialState,
    reducers: {
        setProduct (state, action) {
            state = action.payload;
            return state;
        }
    }
});
const { setProduct  } = counterSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (counterSlice.reducer);


/***/ }),

/***/ 949:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "nP": () => (/* binding */ increment),
/* harmony export */   "Mj": () => (/* binding */ decrement),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    value: 0
};
const counterSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: 'counter',
    initialState,
    reducers: {
        increment (state, action) {
            state.value += 1;
            // return { ...state, ...action.payload };
            return state;
        },
        decrement (state, action) {
            state.value -= 1;
            // return { ...state, ...action.payload };
            return state;
        }
    }
});
const { increment , decrement  } = counterSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (counterSlice.reducer);


/***/ }),

/***/ 184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(640));
module.exports = __webpack_exports__;

})();