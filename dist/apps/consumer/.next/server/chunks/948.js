exports.id = 948;
exports.ids = [948];
exports.modules = {

/***/ 624:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "footer_container__nBaUr"
};


/***/ }),

/***/ 13:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "header_container__UKFp7"
};


/***/ }),

/***/ 948:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "$_": () => (/* reexport */ Footer),
  "h4": () => (/* reexport */ Header),
  "rb": () => (/* reexport */ TestCom)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ../../libs/ui-shared/src/lib/header/header.module.scss
var header_module = __webpack_require__(13);
var header_module_default = /*#__PURE__*/__webpack_require__.n(header_module);
// EXTERNAL MODULE: ../../node_modules/next/image.js
var next_image = __webpack_require__(577);
;// CONCATENATED MODULE: ../../libs/ui-shared/src/assets/wobby.png
/* harmony default export */ const wobby = ({"src":"/_next/static/media/wobby.ef294728.png","height":160,"width":185,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAA6UlEQVR42mP4fHoGEwMDA8PhPgbbWysYKs/PZli3tYltTlcogxADDOzdusTp4xH//78vFv3/dzX4/5s9DP93dSq0M8DA7QXB+7+fNP3//pTtjz+ztX78X8f8/94mhmkMDAwMDFuyZJw+72L4/2Stzt/X/cn/383R+vv/AMP/G5sSrzLIPxdgYGBw532wk+HYnSan/yeTlvx5fNDtz7tDrv+vnT3ztjmzQpyBgYGBoZiBW//uNr3/l6+1/795MPH/w/V2/w9vXjuBAQZmmjMYv3rUfO///wU3Xl3Jun5/BcPjQ60MhgwMDAwAYixufXFIKjIAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ../../libs/ui-shared/src/lib/header/header.tsx




function Header(props) {
    const { type , bg  } = props;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (header_module_default()).container,
        style: bg ? {
            backgroundColor: bg
        } : {},
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                children: [
                    "Đ\xe2y l\xe0 c\xe1i đầu d\xf9ng chung đang được import ở ",
                    type
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                src: wobby,
                alt: "Picture of the author",
                width: 100,
                height: 100
            })
        ]
    }));
}
/* harmony default export */ const header = ((/* unused pure expression or super */ null && (Header)));

// EXTERNAL MODULE: ../../libs/ui-shared/src/lib/footer/footer.module.scss
var footer_module = __webpack_require__(624);
var footer_module_default = /*#__PURE__*/__webpack_require__.n(footer_module);
;// CONCATENATED MODULE: ../../libs/ui-shared/src/lib/footer/footer.tsx




function Footer(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (footer_module_default()).container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                children: [
                    "Đ\xe2y l\xe0 c\xe1i đu\xf4i d\xf9ng chung đang được import ở ",
                    props.type
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                src: wobby,
                alt: "Picture of the author",
                width: 100,
                height: 100
            })
        ]
    }));
}
/* harmony default export */ const footer = ((/* unused pure expression or super */ null && (Footer)));

;// CONCATENATED MODULE: ../../libs/ui-shared/src/lib/extra/testcom.tsx

function TestCom(props) {
    const { getPro , setPro , slice  } = props;
    const randomNumber = ()=>{
        const data = {
            id: 1,
            value: Math.floor(Math.random() * 1114)
        };
        setPro(slice(data));
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: 'container',
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    "Dữ liệu",
                    JSON.stringify(getPro)
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                onClick: randomNumber,
                children: "Click để truyền gi\xe1 trị"
            })
        ]
    }));
}
/* harmony default export */ const testcom = ((/* unused pure expression or super */ null && (TestCom)));

;// CONCATENATED MODULE: ../../libs/ui-shared/src/index.ts





/***/ })

};
;