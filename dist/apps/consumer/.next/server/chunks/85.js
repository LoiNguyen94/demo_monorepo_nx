exports.id = 85;
exports.ids = [85];
exports.modules = {

/***/ 468:
/***/ ((module) => {

// Exports
module.exports = {
	"rainbow": "product_rainbow__wly67"
};


/***/ }),

/***/ 85:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Body": () => (/* binding */ Body),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _product_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(468);
/* harmony import */ var _product_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_product_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(577);
/* harmony import */ var _monomio_func_shares__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(990);






const { Meta  } = antd__WEBPACK_IMPORTED_MODULE_2__.Card;
function Body({ data  }) {
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
    // console.log(data[0]?.market_price);
    }, []);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Row, {
        style: {
            marginLeft: 0,
            marginRight: 0
        },
        gutter: [
            16,
            16
        ],
        children: data && data.map((item)=>{
            return item.photo && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Col, {
                lg: 4,
                sm: 6,
                xs: 8,
                style: {
                    display: 'flex',
                    justifyContent: 'center'
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Card, {
                    hoverable: true,
                    style: {
                        width: 240
                    },
                    cover: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
                        alt: "example",
                        src: item === null || item === void 0 ? void 0 : item.photo,
                        width: 240,
                        height: 230,
                        priority: true
                    }),
                    actions: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_product_module_scss__WEBPACK_IMPORTED_MODULE_4___default().rainbow),
                            children: (0,_monomio_func_shares__WEBPACK_IMPORTED_MODULE_5__/* .formatMoneyVND */ .oH)(item === null || item === void 0 ? void 0 : item.market_price)
                        }, "price"),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Body);


/***/ }),

/***/ 990:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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


/***/ })

};
;