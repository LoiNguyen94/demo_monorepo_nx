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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Body\": function() { return /* binding */ Body; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ \"../../node_modules/antd/es/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"../../node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar _s = $RefreshSig$();\nvar Meta = antd__WEBPACK_IMPORTED_MODULE_3__.Card.Meta;\nfunction Body(param) {\n    var data = param.data;\n    var _this = this;\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n    // console.log(data);\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Row, {\n        style: {\n            margin: 0\n        },\n        gutter: [\n            16,\n            16\n        ],\n        children: data.map(function(item) {\n            return item.photo && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Col, {\n                lg: 4,\n                sm: 6,\n                xs: 8,\n                style: {\n                    display: 'flex',\n                    justifyContent: 'center'\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Card, {\n                    hoverable: true,\n                    style: {\n                        width: 240\n                    },\n                    cover: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        alt: \"example\",\n                        src: item === null || item === void 0 ? void 0 : item.photo,\n                        width: 240,\n                        height: 230,\n                        priority: true\n                    }, void 0, false, void 0, void 0),\n                    actions: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: item === null || item === void 0 ? void 0 : item.price\n                        }, \"price\", false, void 0, void 0),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            alt: \"example\",\n                            src: '/pluscart.png',\n                            width: 24,\n                            height: 24,\n                            priority: true\n                        }, \"plus\", false, void 0, void 0), \n                    ],\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Meta, {\n                        title: item === null || item === void 0 ? void 0 : item.name,\n                        description: item === null || item === void 0 ? void 0 : item.category\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\loi_p\\\\Desktop\\\\test\\\\demo_monorepo_nx\\\\apps\\\\consumer\\\\pages\\\\product\\\\body.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 17\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\loi_p\\\\Desktop\\\\test\\\\demo_monorepo_nx\\\\apps\\\\consumer\\\\pages\\\\product\\\\body.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 15\n                }, _this)\n            }, item.id, false, {\n                fileName: \"C:\\\\Users\\\\loi_p\\\\Desktop\\\\test\\\\demo_monorepo_nx\\\\apps\\\\consumer\\\\pages\\\\product\\\\body.tsx\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\loi_p\\\\Desktop\\\\test\\\\demo_monorepo_nx\\\\apps\\\\consumer\\\\pages\\\\product\\\\body.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this));\n}\n_s(Body, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Body;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Body);\nvar _c;\n$RefreshReg$(_c, \"Body\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0L2JvZHkudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFpQztBQUNJO0FBRVA7O0FBRTlCLEdBQUssQ0FBR0ssSUFBSSxHQUFLRiwyQ0FBTDtBQUVMLFNBQVNHLElBQUksQ0FBQyxLQUFRLEVBQUUsQ0FBQztRQUFUQyxJQUFJLEdBQU4sS0FBUSxDQUFOQSxJQUFJOzs7SUFDekJQLGdEQUFTLENBQUMsUUFBUSxHQUFGLENBQUM7SUFDZixFQUFxQjtJQUN2QixDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRUwsTUFBTSw2RUFDSEMscUNBQUc7UUFBQ08sS0FBSyxFQUFFLENBQUM7WUFBQ0MsTUFBTSxFQUFFLENBQUM7UUFBQyxDQUFDO1FBQUVDLE1BQU0sRUFBRSxDQUFDO0FBQUEsY0FBRTtBQUFFLGNBQUU7UUFBQSxDQUFDO2tCQUN4Q0gsSUFBSSxDQUFDSSxHQUFHLENBQ1AsUUFBUSxDQUFQQyxJQUFTO1lBQ1JBLE1BQU0sQ0FBTkEsSUFBSSxDQUFDQyxLQUFLLGdGQUNQWCxxQ0FBRztnQkFDRlksRUFBRSxFQUFFLENBQUM7Z0JBQ0xDLEVBQUUsRUFBRSxDQUFDO2dCQUNMQyxFQUFFLEVBQUUsQ0FBQztnQkFDTFIsS0FBSyxFQUFFLENBQUM7b0JBQ05TLE9BQU8sRUFBRSxDQUFNO29CQUNmQyxjQUFjLEVBQUUsQ0FBUTtnQkFDMUIsQ0FBQztzR0FJQWYsc0NBQUk7b0JBQ0hnQixTQUFTO29CQUNUWCxLQUFLLEVBQUUsQ0FBQzt3QkFBQ1ksS0FBSyxFQUFFLEdBQUc7b0JBQUMsQ0FBQztvQkFDckJDLEtBQUssOEVBQ0ZqQixtREFBSzt3QkFDSmtCLEdBQUcsRUFBQyxDQUFTO3dCQUNiQyxHQUFHLEVBQUVYLElBQUksYUFBSkEsSUFBSSxLQUFKQSxJQUFJLENBQUpBLENBQVcsR0FBWEEsSUFBSSxDQUFKQSxDQUFXLEdBQVhBLElBQUksQ0FBRUMsS0FBSzt3QkFDaEJPLEtBQUssRUFBRSxHQUFHO3dCQUNWSSxNQUFNLEVBQUUsR0FBRzt3QkFDWEMsUUFBUTs7b0JBR1pDLE9BQU8sRUFBRSxDQUFDO29HQUNQQyxDQUFHO3NDQUFjZixJQUFJLGFBQUpBLElBQUksS0FBSkEsSUFBSSxDQUFKQSxDQUFXLEdBQVhBLElBQUksQ0FBSkEsQ0FBVyxHQUFYQSxJQUFJLENBQUVnQixLQUFLOzJCQUFwQixDQUFPO29HQUNmeEIsbURBQUs7NEJBRUprQixHQUFHLEVBQUMsQ0FBUzs0QkFDYkMsR0FBRyxFQUFFLENBQWU7NEJBQ3BCSCxLQUFLLEVBQUUsRUFBRTs0QkFDVEksTUFBTSxFQUFFLEVBQUU7NEJBQ1ZDLFFBQVE7MkJBTEosQ0FBTTtvQkFPZCxDQUFDOzBHQUVBcEIsSUFBSTt3QkFBQ3dCLEtBQUssRUFBRWpCLElBQUksYUFBSkEsSUFBSSxLQUFKQSxJQUFJLENBQUpBLENBQVUsR0FBVkEsSUFBSSxDQUFKQSxDQUFVLEdBQVZBLElBQUksQ0FBRWtCLElBQUk7d0JBQUVDLFdBQVcsRUFBRW5CLElBQUksYUFBSkEsSUFBSSxLQUFKQSxJQUFJLENBQUpBLENBQWMsR0FBZEEsSUFBSSxDQUFKQSxDQUFjLEdBQWRBLElBQUksQ0FBRW9CLFFBQVE7Ozs7Ozs7Ozs7O2VBM0JqRHBCLElBQUksQ0FBQ3FCLEVBQUU7Ozs7Ozs7Ozs7O0FBa0MxQixDQUFDO0dBcERlM0IsSUFBSTtLQUFKQSxJQUFJO0FBc0RwQiwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Byb2R1Y3QvYm9keS50c3g/YjU0ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFJvdywgQ29sLCBDYXJkIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IEVsbGlwc2lzT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuXHJcbmNvbnN0IHsgTWV0YSB9ID0gQ2FyZDtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBCb2R5KHsgZGF0YSB9KSB7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxSb3cgc3R5bGU9e3sgbWFyZ2luOiAwIH19IGd1dHRlcj17WzE2LCAxNl19PlxyXG4gICAgICB7ZGF0YS5tYXAoXHJcbiAgICAgICAgKGl0ZW06IGFueSkgPT5cclxuICAgICAgICAgIGl0ZW0ucGhvdG8gJiYgKFxyXG4gICAgICAgICAgICA8Q29sXHJcbiAgICAgICAgICAgICAgbGc9ezR9XHJcbiAgICAgICAgICAgICAgc209ezZ9XHJcbiAgICAgICAgICAgICAgeHM9ezh9XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cclxuICAgICAgICAgICAgICAvLyAgIHNwYW49ezR9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICAgICAgaG92ZXJhYmxlXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogMjQwIH19XHJcbiAgICAgICAgICAgICAgICBjb3Zlcj17XHJcbiAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cImV4YW1wbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17aXRlbT8ucGhvdG99XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezI0MH1cclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezIzMH1cclxuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYWN0aW9ucz17W1xyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGtleT1cInByaWNlXCI+e2l0ZW0/LnByaWNlfTwvZGl2PixcclxuICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PVwicGx1c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiZXhhbXBsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXsnL3BsdXNjYXJ0LnBuZyd9XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezI0fVxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17MjR9XHJcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlcclxuICAgICAgICAgICAgICAgICAgLz4sXHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxNZXRhIHRpdGxlPXtpdGVtPy5uYW1lfSBkZXNjcmlwdGlvbj17aXRlbT8uY2F0ZWdvcnl9IC8+XHJcbiAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIClcclxuICAgICAgKX1cclxuICAgIDwvUm93PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJvZHk7XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJSb3ciLCJDb2wiLCJDYXJkIiwiSW1hZ2UiLCJNZXRhIiwiQm9keSIsImRhdGEiLCJzdHlsZSIsIm1hcmdpbiIsImd1dHRlciIsIm1hcCIsIml0ZW0iLCJwaG90byIsImxnIiwic20iLCJ4cyIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImhvdmVyYWJsZSIsIndpZHRoIiwiY292ZXIiLCJhbHQiLCJzcmMiLCJoZWlnaHQiLCJwcmlvcml0eSIsImFjdGlvbnMiLCJkaXYiLCJwcmljZSIsInRpdGxlIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiY2F0ZWdvcnkiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/product/body.tsx\n");

/***/ })

});