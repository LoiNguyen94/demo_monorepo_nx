"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/product",{

/***/ "./pages/product/body.tsx":
/*!********************************!*\
  !*** ./pages/product/body.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Body\": function() { return /* binding */ Body; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ \"../../node_modules/antd/es/index.js\");\n/* harmony import */ var _product_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product.module.scss */ \"./pages/product/product.module.scss\");\n/* harmony import */ var _product_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_product_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"../../node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Meta = antd__WEBPACK_IMPORTED_MODULE_3__.Card.Meta;\nfunction Body(param) {\n    var data = param.data;\n    var _this = this;\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n    // console.log(data);\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Row, {\n        style: {\n            margin: 0\n        },\n        gutter: [\n            16,\n            16\n        ],\n        children: data.map(function(item) {\n            var ref;\n            return item.photo && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Col, {\n                lg: 4,\n                sm: 6,\n                xs: 8,\n                style: {\n                    display: 'flex',\n                    justifyContent: 'center'\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Card, {\n                    hoverable: true,\n                    style: {\n                        width: 240\n                    },\n                    cover: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        alt: \"example\",\n                        src: item === null || item === void 0 ? void 0 : item.photo,\n                        width: 240,\n                        height: 230,\n                        priority: true\n                    }, void 0, false, void 0, void 0),\n                    actions: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_product_module_scss__WEBPACK_IMPORTED_MODULE_4___default().rainbow),\n                            children: item === null || item === void 0 ? void 0 : (ref = item.price_list) === null || ref === void 0 ? void 0 : ref.price\n                        }, \"price\", false, void 0, void 0),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            alt: \"example\",\n                            src: '/pluscart.png',\n                            width: 24,\n                            height: 24,\n                            priority: true\n                        }, \"plus\", false, void 0, void 0), \n                    ],\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Meta, {\n                        title: item === null || item === void 0 ? void 0 : item.name,\n                        description: item === null || item === void 0 ? void 0 : item.category\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\loi_p\\\\Desktop\\\\test\\\\demo_monorepo_nx\\\\apps\\\\consumer\\\\pages\\\\product\\\\body.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 17\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\loi_p\\\\Desktop\\\\test\\\\demo_monorepo_nx\\\\apps\\\\consumer\\\\pages\\\\product\\\\body.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 15\n                }, _this)\n            }, item.id, false, {\n                fileName: \"C:\\\\Users\\\\loi_p\\\\Desktop\\\\test\\\\demo_monorepo_nx\\\\apps\\\\consumer\\\\pages\\\\product\\\\body.tsx\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\loi_p\\\\Desktop\\\\test\\\\demo_monorepo_nx\\\\apps\\\\consumer\\\\pages\\\\product\\\\body.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this));\n}\n_s(Body, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Body;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Body);\nvar _c;\n$RefreshReg$(_c, \"Body\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0L2JvZHkudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ0k7QUFDSztBQUNaOztBQUU5QixHQUFLLENBQUdNLElBQUksR0FBS0gsMkNBQUw7QUFFTCxTQUFTSSxJQUFJLENBQUMsS0FBUSxFQUFFLENBQUM7UUFBVEMsSUFBSSxHQUFOLEtBQVEsQ0FBTkEsSUFBSTs7O0lBQ3pCUixnREFBUyxDQUFDLFFBQVEsR0FBRixDQUFDO0lBQ2YsRUFBcUI7SUFDdkIsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUVMLE1BQU0sNkVBQ0hDLHFDQUFHO1FBQUNRLEtBQUssRUFBRSxDQUFDO1lBQUNDLE1BQU0sRUFBRSxDQUFDO1FBQUMsQ0FBQztRQUFFQyxNQUFNLEVBQUUsQ0FBQztBQUFBLGNBQUU7QUFBRSxjQUFFO1FBQUEsQ0FBQztrQkFDeENILElBQUksQ0FBQ0ksR0FBRyxDQUNQLFFBQVEsQ0FBUEMsSUFBUztnQkEyQkdBLEdBQWdCO1lBMUIzQkEsTUFBTSxDQUFOQSxJQUFJLENBQUNDLEtBQUssZ0ZBQ1BaLHFDQUFHO2dCQUNGYSxFQUFFLEVBQUUsQ0FBQztnQkFDTEMsRUFBRSxFQUFFLENBQUM7Z0JBQ0xDLEVBQUUsRUFBRSxDQUFDO2dCQUNMUixLQUFLLEVBQUUsQ0FBQztvQkFDTlMsT0FBTyxFQUFFLENBQU07b0JBQ2ZDLGNBQWMsRUFBRSxDQUFRO2dCQUMxQixDQUFDO3NHQUlBaEIsc0NBQUk7b0JBQ0hpQixTQUFTO29CQUNUWCxLQUFLLEVBQUUsQ0FBQzt3QkFBQ1ksS0FBSyxFQUFFLEdBQUc7b0JBQUMsQ0FBQztvQkFDckJDLEtBQUssOEVBQ0ZqQixtREFBSzt3QkFDSmtCLEdBQUcsRUFBQyxDQUFTO3dCQUNiQyxHQUFHLEVBQUVYLElBQUksYUFBSkEsSUFBSSxLQUFKQSxJQUFJLENBQUpBLENBQVcsR0FBWEEsSUFBSSxDQUFKQSxDQUFXLEdBQVhBLElBQUksQ0FBRUMsS0FBSzt3QkFDaEJPLEtBQUssRUFBRSxHQUFHO3dCQUNWSSxNQUFNLEVBQUUsR0FBRzt3QkFDWEMsUUFBUTs7b0JBR1pDLE9BQU8sRUFBRSxDQUFDO29HQUNQQyxDQUFHOzRCQUFhQyxTQUFTLEVBQUV6QixxRUFBZ0I7c0NBQ3pDUyxJQUFJLGFBQUpBLElBQUksS0FBSkEsSUFBSSxDQUFKQSxDQUFnQixHQUFoQkEsSUFBSSxDQUFKQSxDQUFnQixJQUFoQkEsR0FBZ0IsR0FBaEJBLElBQUksQ0FBRWlCLFVBQVUsY0FBaEJqQixHQUFnQixLQUFoQkEsSUFBSSxDQUFKQSxDQUFnQixHQUFoQkEsSUFBSSxDQUFKQSxDQUFnQixHQUFoQkEsR0FBZ0IsQ0FBRWtCLEtBQUs7MkJBRGpCLENBQU87b0dBR2YxQixtREFBSzs0QkFFSmtCLEdBQUcsRUFBQyxDQUFTOzRCQUNiQyxHQUFHLEVBQUUsQ0FBZTs0QkFDcEJILEtBQUssRUFBRSxFQUFFOzRCQUNUSSxNQUFNLEVBQUUsRUFBRTs0QkFDVkMsUUFBUTsyQkFMSixDQUFNO29CQU9kLENBQUM7MEdBRUFwQixJQUFJO3dCQUFDMEIsS0FBSyxFQUFFbkIsSUFBSSxhQUFKQSxJQUFJLEtBQUpBLElBQUksQ0FBSkEsQ0FBVSxHQUFWQSxJQUFJLENBQUpBLENBQVUsR0FBVkEsSUFBSSxDQUFFb0IsSUFBSTt3QkFBRUMsV0FBVyxFQUFFckIsSUFBSSxhQUFKQSxJQUFJLEtBQUpBLElBQUksQ0FBSkEsQ0FBYyxHQUFkQSxJQUFJLENBQUpBLENBQWMsR0FBZEEsSUFBSSxDQUFFc0IsUUFBUTs7Ozs7Ozs7Ozs7ZUE3QmpEdEIsSUFBSSxDQUFDdUIsRUFBRTs7Ozs7Ozs7Ozs7QUFvQzFCLENBQUM7R0F0RGU3QixJQUFJO0tBQUpBLElBQUk7QUF3RHBCLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdC9ib2R5LnRzeD9iNTRkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUm93LCBDb2wsIENhcmQgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3Byb2R1Y3QubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcblxyXG5jb25zdCB7IE1ldGEgfSA9IENhcmQ7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQm9keSh7IGRhdGEgfSkge1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Um93IHN0eWxlPXt7IG1hcmdpbjogMCB9fSBndXR0ZXI9e1sxNiwgMTZdfT5cclxuICAgICAge2RhdGEubWFwKFxyXG4gICAgICAgIChpdGVtOiBhbnkpID0+XHJcbiAgICAgICAgICBpdGVtLnBob3RvICYmIChcclxuICAgICAgICAgICAgPENvbFxyXG4gICAgICAgICAgICAgIGxnPXs0fVxyXG4gICAgICAgICAgICAgIHNtPXs2fVxyXG4gICAgICAgICAgICAgIHhzPXs4fVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgLy8gICBzcGFuPXs0fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICAgIGhvdmVyYWJsZVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDI0MCB9fVxyXG4gICAgICAgICAgICAgICAgY292ZXI9e1xyXG4gICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJleGFtcGxlXCJcclxuICAgICAgICAgICAgICAgICAgICBzcmM9e2l0ZW0/LnBob3RvfVxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXsyNDB9XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyMzB9XHJcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGFjdGlvbnM9e1tcclxuICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9XCJwcmljZVwiIGNsYXNzTmFtZT17c3R5bGVzWydyYWluYm93J119PlxyXG4gICAgICAgICAgICAgICAgICAgIHtpdGVtPy5wcmljZV9saXN0Py5wcmljZX1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+LFxyXG4gICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICBrZXk9XCJwbHVzXCJcclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJleGFtcGxlXCJcclxuICAgICAgICAgICAgICAgICAgICBzcmM9eycvcGx1c2NhcnQucG5nJ31cclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17MjR9XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyNH1cclxuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eVxyXG4gICAgICAgICAgICAgICAgICAvPixcclxuICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPE1ldGEgdGl0bGU9e2l0ZW0/Lm5hbWV9IGRlc2NyaXB0aW9uPXtpdGVtPy5jYXRlZ29yeX0gLz5cclxuICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgKVxyXG4gICAgICApfVxyXG4gICAgPC9Sb3c+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQm9keTtcclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsIlJvdyIsIkNvbCIsIkNhcmQiLCJzdHlsZXMiLCJJbWFnZSIsIk1ldGEiLCJCb2R5IiwiZGF0YSIsInN0eWxlIiwibWFyZ2luIiwiZ3V0dGVyIiwibWFwIiwiaXRlbSIsInBob3RvIiwibGciLCJzbSIsInhzIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiaG92ZXJhYmxlIiwid2lkdGgiLCJjb3ZlciIsImFsdCIsInNyYyIsImhlaWdodCIsInByaW9yaXR5IiwiYWN0aW9ucyIsImRpdiIsImNsYXNzTmFtZSIsInByaWNlX2xpc3QiLCJwcmljZSIsInRpdGxlIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiY2F0ZWdvcnkiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/product/body.tsx\n");

/***/ })

});