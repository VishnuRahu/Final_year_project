"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/announcements/page",{

/***/ "(app-pages-browser)/./app/announcements/_components/banner/index.tsx":
/*!********************************************************!*\
  !*** ./app/announcements/_components/banner/index.tsx ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/card */ \"(app-pages-browser)/./components/ui/card.tsx\");\n/* harmony import */ var _radix_ui_react_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @radix-ui/react-icons */ \"(app-pages-browser)/./node_modules/@radix-ui/react-icons/dist/react-icons.esm.js\");\n\n\n\nconst Banner = (param)=>{\n    let { announcement } = param;\n    const { title, description, uploaded_time, author } = announcement;\n    const formatDate = (dateString)=>{\n        const date = new Date(dateString);\n        const options = {\n            day: \"numeric\",\n            month: \"short\",\n            year: \"numeric\",\n            hour: \"numeric\",\n            minute: \"numeric\",\n            hour12: false\n        };\n        // Format the date using the options\n        let formattedDate = new Intl.DateTimeFormat(\"en-GB\", options).format(date);\n        // Remove the last comma\n        formattedDate = formattedDate.replace(/,\\s*$/, \"\");\n        return formattedDate;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_1__.Card, {\n            className: \"transition-colors duration-300 ease-in-out hover:bg-blue-100 hover:shadow-md\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_1__.CardHeader, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" flex items-center space-x-4 \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"border rounded-full p-2 bg-blue-400 text-white\",\n                                children: [\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_icons__WEBPACK_IMPORTED_MODULE_2__.BellIcon, {}, void 0, false, {\n                                        fileName: \"D:\\\\simple usecases\\\\next\\\\Final_year_project\\\\frontend\\\\app\\\\announcements\\\\_components\\\\banner\\\\index.tsx\",\n                                        lineNumber: 44,\n                                        columnNumber: 90\n                                    }, undefined),\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\simple usecases\\\\next\\\\Final_year_project\\\\frontend\\\\app\\\\announcements\\\\_components\\\\banner\\\\index.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex-1 space-y-1\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_1__.CardTitle, {\n                                        children: [\n                                            \" \",\n                                            title,\n                                            \" \"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\simple usecases\\\\next\\\\Final_year_project\\\\frontend\\\\app\\\\announcements\\\\_components\\\\banner\\\\index.tsx\",\n                                        lineNumber: 46,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_1__.CardDescription, {\n                                        children: [\n                                            \" \",\n                                            author,\n                                            \" | \",\n                                            formatDate(uploaded_time),\n                                            \" \"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\simple usecases\\\\next\\\\Final_year_project\\\\frontend\\\\app\\\\announcements\\\\_components\\\\banner\\\\index.tsx\",\n                                        lineNumber: 47,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\simple usecases\\\\next\\\\Final_year_project\\\\frontend\\\\app\\\\announcements\\\\_components\\\\banner\\\\index.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\simple usecases\\\\next\\\\Final_year_project\\\\frontend\\\\app\\\\announcements\\\\_components\\\\banner\\\\index.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\simple usecases\\\\next\\\\Final_year_project\\\\frontend\\\\app\\\\announcements\\\\_components\\\\banner\\\\index.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_1__.CardContent, {\n                    children: [\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"rounded-md border p-4\",\n                            children: [\n                                \" \",\n                                description,\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\simple usecases\\\\next\\\\Final_year_project\\\\frontend\\\\app\\\\announcements\\\\_components\\\\banner\\\\index.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 31\n                        }, undefined),\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\simple usecases\\\\next\\\\Final_year_project\\\\frontend\\\\app\\\\announcements\\\\_components\\\\banner\\\\index.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\simple usecases\\\\next\\\\Final_year_project\\\\frontend\\\\app\\\\announcements\\\\_components\\\\banner\\\\index.tsx\",\n            lineNumber: 41,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false);\n};\n_c = Banner;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Banner);\nvar _c;\n$RefreshReg$(_c, \"Banner\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9hbm5vdW5jZW1lbnRzL19jb21wb25lbnRzL2Jhbm5lci9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBZ0c7QUFDaEQ7QUFhaEQsTUFBTU0sU0FBMEI7UUFBQyxFQUFFQyxZQUFZLEVBQUU7SUFFN0MsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLFdBQVcsRUFBRUMsYUFBYSxFQUFFQyxNQUFNLEVBQUUsR0FBR0o7SUFFdEQsTUFBTUssYUFBYSxDQUFDQztRQUNoQixNQUFNQyxPQUFPLElBQUlDLEtBQUtGO1FBQ3RCLE1BQU1HLFVBQXNDO1lBQzFDQyxLQUFLO1lBQ0xDLE9BQU87WUFDUEMsTUFBTTtZQUNOQyxNQUFNO1lBQ05DLFFBQVE7WUFDUkMsUUFBUTtRQUNWO1FBRUEsb0NBQW9DO1FBQ3BDLElBQUlDLGdCQUFnQixJQUFJQyxLQUFLQyxjQUFjLENBQUMsU0FBU1QsU0FBU1UsTUFBTSxDQUFDWjtRQUNyRSx3QkFBd0I7UUFDeEJTLGdCQUFnQkEsY0FBY0ksT0FBTyxDQUFDLFNBQVM7UUFDL0MsT0FBT0o7SUFFWDtJQUdBLHFCQUNJO2tCQUNJLDRFQUFDdkIscURBQUlBO1lBQUM0QixXQUFVOzs4QkFDWiw4REFBQ3pCLDJEQUFVQTs4QkFDUCw0RUFBQzBCO3dCQUFJRCxXQUFVOzswQ0FDWCw4REFBQ0M7Z0NBQUlELFdBQVU7O29DQUFpRDtrREFBQyw4REFBQ3ZCLDJEQUFRQTs7Ozs7b0NBQUc7Ozs7Ozs7MENBQzdFLDhEQUFDd0I7Z0NBQUlELFdBQVU7O2tEQUNYLDhEQUFDeEIsMERBQVNBOzs0Q0FBQzs0Q0FBRUk7NENBQU07Ozs7Ozs7a0RBQ25CLDhEQUFDTixnRUFBZUE7OzRDQUFDOzRDQUFFUzs0Q0FBTzs0Q0FBSUMsV0FBV0Y7NENBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFJcEUsOERBQUNULDREQUFXQTs7d0JBQUM7c0NBQUMsOERBQUM2Qjs0QkFBRUYsV0FBVTs7Z0NBQXdCO2dDQUFFbkI7Z0NBQVk7Ozs7Ozs7d0JBQUs7Ozs7Ozs7Ozs7Ozs7O0FBS3RGO0tBekNNSDtBQTJDTiwrREFBZUEsTUFBTUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvYW5ub3VuY2VtZW50cy9fY29tcG9uZW50cy9iYW5uZXIvaW5kZXgudHN4P2RmYzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FyZCwgQ2FyZENvbnRlbnQsIENhcmREZXNjcmlwdGlvbiwgQ2FyZEhlYWRlciwgQ2FyZFRpdGxlIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9jYXJkXCJcclxuaW1wb3J0IHsgQmVsbEljb24gfSBmcm9tIFwiQHJhZGl4LXVpL3JlYWN0LWljb25zXCJcclxuICBcclxuaW50ZXJmYWNlIEFubm91bmNlbWVudCB7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICAgIHVwbG9hZGVkX3RpbWU6IHN0cmluZztcclxuICAgIGF1dGhvcjogc3RyaW5nO1xyXG59XHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gICAgYW5ub3VuY2VtZW50OiBBbm5vdW5jZW1lbnQ7XHJcbn1cclxuXHJcbmNvbnN0IEJhbm5lcjogUmVhY3QuRkM8UHJvcHM+ID0gKHsgYW5ub3VuY2VtZW50IH0pID0+IHtcclxuXHJcbiAgICBjb25zdCB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgdXBsb2FkZWRfdGltZSwgYXV0aG9yIH0gPSBhbm5vdW5jZW1lbnQ7XHJcblxyXG4gICAgY29uc3QgZm9ybWF0RGF0ZSA9IChkYXRlU3RyaW5nOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShkYXRlU3RyaW5nKTtcclxuICAgICAgICBjb25zdCBvcHRpb25zOiBJbnRsLkRhdGVUaW1lRm9ybWF0T3B0aW9ucyA9IHtcclxuICAgICAgICAgIGRheTogJ251bWVyaWMnLFxyXG4gICAgICAgICAgbW9udGg6ICdzaG9ydCcsXHJcbiAgICAgICAgICB5ZWFyOiAnbnVtZXJpYycsXHJcbiAgICAgICAgICBob3VyOiAnbnVtZXJpYycsXHJcbiAgICAgICAgICBtaW51dGU6ICdudW1lcmljJyxcclxuICAgICAgICAgIGhvdXIxMjogZmFsc2UsIC8vIFVzZSAyNC1ob3VyIGZvcm1hdFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIEZvcm1hdCB0aGUgZGF0ZSB1c2luZyB0aGUgb3B0aW9uc1xyXG4gICAgICAgIGxldCBmb3JtYXR0ZWREYXRlID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoJ2VuLUdCJywgb3B0aW9ucykuZm9ybWF0KGRhdGUpO1xyXG4gICAgICAgIC8vIFJlbW92ZSB0aGUgbGFzdCBjb21tYVxyXG4gICAgICAgIGZvcm1hdHRlZERhdGUgPSBmb3JtYXR0ZWREYXRlLnJlcGxhY2UoLyxcXHMqJC8sICcnKTtcclxuICAgICAgICByZXR1cm4gZm9ybWF0dGVkRGF0ZTtcclxuXHJcbiAgICB9O1xyXG4gICAgICBcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cInRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dCBob3ZlcjpiZy1ibHVlLTEwMCBob3ZlcjpzaGFkb3ctbWRcIj5cclxuICAgICAgICAgICAgICAgIDxDYXJkSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtNCBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXIgcm91bmRlZC1mdWxsIHAtMiBiZy1ibHVlLTQwMCB0ZXh0LXdoaXRlXCI+IDxCZWxsSWNvbiAvPiA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgc3BhY2UteS0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZFRpdGxlPiB7dGl0bGV9IDwvQ2FyZFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmREZXNjcmlwdGlvbj4ge2F1dGhvcn0gfCB7Zm9ybWF0RGF0ZSh1cGxvYWRlZF90aW1lKX0gPC9DYXJkRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPENhcmRDb250ZW50PiA8cCBjbGFzc05hbWU9XCJyb3VuZGVkLW1kIGJvcmRlciBwLTRcIj4ge2Rlc2NyaXB0aW9ufSA8L3A+IDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhbm5lciJdLCJuYW1lcyI6WyJDYXJkIiwiQ2FyZENvbnRlbnQiLCJDYXJkRGVzY3JpcHRpb24iLCJDYXJkSGVhZGVyIiwiQ2FyZFRpdGxlIiwiQmVsbEljb24iLCJCYW5uZXIiLCJhbm5vdW5jZW1lbnQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwidXBsb2FkZWRfdGltZSIsImF1dGhvciIsImZvcm1hdERhdGUiLCJkYXRlU3RyaW5nIiwiZGF0ZSIsIkRhdGUiLCJvcHRpb25zIiwiZGF5IiwibW9udGgiLCJ5ZWFyIiwiaG91ciIsIm1pbnV0ZSIsImhvdXIxMiIsImZvcm1hdHRlZERhdGUiLCJJbnRsIiwiRGF0ZVRpbWVGb3JtYXQiLCJmb3JtYXQiLCJyZXBsYWNlIiwiY2xhc3NOYW1lIiwiZGl2IiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/announcements/_components/banner/index.tsx\n"));

/***/ })

});