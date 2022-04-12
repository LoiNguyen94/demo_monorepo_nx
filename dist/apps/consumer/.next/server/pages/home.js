"use strict";
(() => {
var exports = {};
exports.id = 229;
exports.ids = [229,165];
exports.modules = {

/***/ 227:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Index": () => (/* binding */ Index),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(577);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _monomio_func_shares__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(990);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);

// import { useEffect } from 'react';




const { Meta  } = antd__WEBPACK_IMPORTED_MODULE_3__.Card;
function Index({ data  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    //   useEffect(() => {
    //   }, []);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.PageHeader, {
                className: "site-page-header",
                onBack: ()=>router.back()
                ,
                title: "Trang chủ",
                subTitle: "Tất cả sản phẩm trang chủ"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Row, {
                style: {
                    marginLeft: 0,
                    marginRight: 0
                },
                gutter: [
                    16,
                    16
                ],
                children: data && data.map((item)=>{
                    return item.photo && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Col, {
                        lg: 4,
                        sm: 6,
                        xs: 8,
                        style: {
                            display: 'flex',
                            justifyContent: 'center'
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Card, {
                            hoverable: true,
                            style: {
                                width: 240
                            },
                            cover: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                alt: "example",
                                src: item === null || item === void 0 ? void 0 : item.photo,
                                width: 240,
                                height: 230,
                                priority: true
                            }),
                            actions: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    children: (0,_monomio_func_shares__WEBPACK_IMPORTED_MODULE_4__/* .formatMoneyVND */ .oH)(item === null || item === void 0 ? void 0 : item.market_price)
                                }, "price"),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                    alt: "example",
                                    src: '/pluscart.png',
                                    width: 24,
                                    height: 24,
                                    priority: true
                                }, "plus"), 
                            ],
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Meta, {
                                title: item === null || item === void 0 ? void 0 : item.name,
                                description: item === null || item === void 0 ? void 0 : item.category
                            })
                        })
                    }, item.id);
                })
            })
        ]
    }));
}
async function getStaticProps(context) {
    // Fetch data from external API
    const res = await fetch(`https://dev-api.itaphoa.com/customer/products`);
    const data = await res.json();
    // Pass data to the page via props
    return {
        props: {
            data
        }
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);


/***/ }),

/***/ 990:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ funcChangeColor),
/* harmony export */   "oH": () => (/* binding */ formatMoneyVND)
/* harmony export */ });
/* unused harmony exports funcShares, roundToX */
function funcShares() {
    return 'func-shares';
}
function funcChangeColor() {
    const colors = [
        '#32a852',
        '#32a852',
        '#a8328c',
        '#2637d4'
    ];
    return colors[Math.floor(Math.random() * 4)];
}
const roundToX = (num, X = 2)=>{
    return num.toFixed();
};
const formatMoneyVND = (num)=>{
    return roundToX(num, 0).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + ' ₫';
};


/***/ }),

/***/ 725:
/***/ ((module) => {

module.exports = require("antd");

/***/ }),

/***/ 28:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

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
var __webpack_exports__ = __webpack_require__.X(0, [577], () => (__webpack_exec__(227)));
module.exports = __webpack_exports__;

})();