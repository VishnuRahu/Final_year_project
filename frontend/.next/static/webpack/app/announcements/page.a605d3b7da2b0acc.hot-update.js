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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/card */ \"(app-pages-browser)/./components/ui/card.tsx\");\n/* harmony import */ var _radix_ui_react_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @radix-ui/react-icons */ \"(app-pages-browser)/./node_modules/@radix-ui/react-icons/dist/react-icons.esm.js\");\n\n\n\nconst Banner = (param)=>{\n    let { announcement } = param;\n    const { title, description, uploaded_time, author } = announcement;\n    const formatDate = (dateString)=>{\n        const date = new Date(dateString);\n        const options = {\n            day: \"numeric\",\n            month: \"short\",\n            year: \"numeric\",\n            hour: \"numeric\",\n            minute: \"numeric\",\n            hour12: false\n        };\n        // Format the date using the options\n        let formattedDate = new Intl.DateTimeFormat(\"en-GB\", options).format(date);\n        // Remove the last comma\n        formattedDate = formattedDate.replace(/,\\s*$/, \"\");\n        return formattedDate;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_1__.Card, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_1__.CardHeader, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" flex items-center space-x-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"border rounded-full p-2 bg-blue-600\",\n                                children: [\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_icons__WEBPACK_IMPORTED_MODULE_2__.BellIcon, {}, void 0, false, {\n                                        fileName: \"D:\\\\simple usecases\\\\next\\\\Final_year_project\\\\frontend\\\\app\\\\announcements\\\\_components\\\\banner\\\\index.tsx\",\n                                        lineNumber: 44,\n                                        columnNumber: 79\n                                    }, undefined),\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\simple usecases\\\\next\\\\Final_year_project\\\\frontend\\\\app\\\\announcements\\\\_components\\\\banner\\\\index.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex-1 space-y-1\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_1__.CardTitle, {\n                                        children: [\n                                            \" \",\n                                            title,\n                                            \" \"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\simple usecases\\\\next\\\\Final_year_project\\\\frontend\\\\app\\\\announcements\\\\_components\\\\banner\\\\index.tsx\",\n                                        lineNumber: 46,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_1__.CardDescription, {\n                                        children: [\n                                            \" \",\n                                            author,\n                                            \" | \",\n                                            formatDate(uploaded_time),\n                                            \" \"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\simple usecases\\\\next\\\\Final_year_project\\\\frontend\\\\app\\\\announcements\\\\_components\\\\banner\\\\index.tsx\",\n                                        lineNumber: 47,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\simple usecases\\\\next\\\\Final_year_project\\\\frontend\\\\app\\\\announcements\\\\_components\\\\banner\\\\index.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\simple usecases\\\\next\\\\Final_year_project\\\\frontend\\\\app\\\\announcements\\\\_components\\\\banner\\\\index.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\simple usecases\\\\next\\\\Final_year_project\\\\frontend\\\\app\\\\announcements\\\\_components\\\\banner\\\\index.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_1__.CardContent, {\n                    children: [\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"rounded-md border p-4\",\n                            children: [\n                                \" \",\n                                description,\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\simple usecases\\\\next\\\\Final_year_project\\\\frontend\\\\app\\\\announcements\\\\_components\\\\banner\\\\index.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 31\n                        }, undefined),\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\simple usecases\\\\next\\\\Final_year_project\\\\frontend\\\\app\\\\announcements\\\\_components\\\\banner\\\\index.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\simple usecases\\\\next\\\\Final_year_project\\\\frontend\\\\app\\\\announcements\\\\_components\\\\banner\\\\index.tsx\",\n            lineNumber: 41,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false);\n};\n_c = Banner;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Banner);\nvar _c;\n$RefreshReg$(_c, \"Banner\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9hbm5vdW5jZW1lbnRzL19jb21wb25lbnRzL2Jhbm5lci9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBZ0c7QUFDaEQ7QUFhaEQsTUFBTU0sU0FBMEI7UUFBQyxFQUFFQyxZQUFZLEVBQUU7SUFFN0MsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLFdBQVcsRUFBRUMsYUFBYSxFQUFFQyxNQUFNLEVBQUUsR0FBR0o7SUFFdEQsTUFBTUssYUFBYSxDQUFDQztRQUNoQixNQUFNQyxPQUFPLElBQUlDLEtBQUtGO1FBQ3RCLE1BQU1HLFVBQXNDO1lBQzFDQyxLQUFLO1lBQ0xDLE9BQU87WUFDUEMsTUFBTTtZQUNOQyxNQUFNO1lBQ05DLFFBQVE7WUFDUkMsUUFBUTtRQUNWO1FBRUEsb0NBQW9DO1FBQ3BDLElBQUlDLGdCQUFnQixJQUFJQyxLQUFLQyxjQUFjLENBQUMsU0FBU1QsU0FBU1UsTUFBTSxDQUFDWjtRQUNyRSx3QkFBd0I7UUFDeEJTLGdCQUFnQkEsY0FBY0ksT0FBTyxDQUFDLFNBQVM7UUFDL0MsT0FBT0o7SUFFWDtJQUdBLHFCQUNJO2tCQUNJLDRFQUFDdkIscURBQUlBOzs4QkFDRCw4REFBQ0csMkRBQVVBOzhCQUNQLDRFQUFDeUI7d0JBQUlDLFdBQVU7OzBDQUNYLDhEQUFDRDtnQ0FBSUMsV0FBVTs7b0NBQXNDO2tEQUFDLDhEQUFDeEIsMkRBQVFBOzs7OztvQ0FBRzs7Ozs7OzswQ0FDbEUsOERBQUN1QjtnQ0FBSUMsV0FBVTs7a0RBQ1gsOERBQUN6QiwwREFBU0E7OzRDQUFDOzRDQUFFSTs0Q0FBTTs7Ozs7OztrREFDbkIsOERBQUNOLGdFQUFlQTs7NENBQUM7NENBQUVTOzRDQUFPOzRDQUFJQyxXQUFXRjs0Q0FBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUlwRSw4REFBQ1QsNERBQVdBOzt3QkFBQztzQ0FBQyw4REFBQzZCOzRCQUFFRCxXQUFVOztnQ0FBd0I7Z0NBQUVwQjtnQ0FBWTs7Ozs7Ozt3QkFBSzs7Ozs7Ozs7Ozs7Ozs7QUFLdEY7S0F6Q01IO0FBMkNOLCtEQUFlQSxNQUFNQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9hbm5vdW5jZW1lbnRzL19jb21wb25lbnRzL2Jhbm5lci9pbmRleC50c3g/ZGZjMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJkLCBDYXJkQ29udGVudCwgQ2FyZERlc2NyaXB0aW9uLCBDYXJkSGVhZGVyLCBDYXJkVGl0bGUgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2NhcmRcIlxyXG5pbXBvcnQgeyBCZWxsSWNvbiB9IGZyb20gXCJAcmFkaXgtdWkvcmVhY3QtaWNvbnNcIlxyXG4gIFxyXG5pbnRlcmZhY2UgQW5ub3VuY2VtZW50IHtcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgdXBsb2FkZWRfdGltZTogc3RyaW5nO1xyXG4gICAgYXV0aG9yOiBzdHJpbmc7XHJcbn1cclxuXHJcbnR5cGUgUHJvcHMgPSB7XHJcbiAgICBhbm5vdW5jZW1lbnQ6IEFubm91bmNlbWVudDtcclxufVxyXG5cclxuY29uc3QgQmFubmVyOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBhbm5vdW5jZW1lbnQgfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHsgdGl0bGUsIGRlc2NyaXB0aW9uLCB1cGxvYWRlZF90aW1lLCBhdXRob3IgfSA9IGFubm91bmNlbWVudDtcclxuXHJcbiAgICBjb25zdCBmb3JtYXREYXRlID0gKGRhdGVTdHJpbmc6IHN0cmluZyk6IHN0cmluZyA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGRhdGVTdHJpbmcpO1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbnM6IEludGwuRGF0ZVRpbWVGb3JtYXRPcHRpb25zID0ge1xyXG4gICAgICAgICAgZGF5OiAnbnVtZXJpYycsXHJcbiAgICAgICAgICBtb250aDogJ3Nob3J0JyxcclxuICAgICAgICAgIHllYXI6ICdudW1lcmljJyxcclxuICAgICAgICAgIGhvdXI6ICdudW1lcmljJyxcclxuICAgICAgICAgIG1pbnV0ZTogJ251bWVyaWMnLFxyXG4gICAgICAgICAgaG91cjEyOiBmYWxzZSwgLy8gVXNlIDI0LWhvdXIgZm9ybWF0XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gRm9ybWF0IHRoZSBkYXRlIHVzaW5nIHRoZSBvcHRpb25zXHJcbiAgICAgICAgbGV0IGZvcm1hdHRlZERhdGUgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCgnZW4tR0InLCBvcHRpb25zKS5mb3JtYXQoZGF0ZSk7XHJcbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBsYXN0IGNvbW1hXHJcbiAgICAgICAgZm9ybWF0dGVkRGF0ZSA9IGZvcm1hdHRlZERhdGUucmVwbGFjZSgvLFxccyokLywgJycpO1xyXG4gICAgICAgIHJldHVybiBmb3JtYXR0ZWREYXRlO1xyXG5cclxuICAgIH07XHJcbiAgICAgIFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZEhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXIgcm91bmRlZC1mdWxsIHAtMiBiZy1ibHVlLTYwMFwiPiA8QmVsbEljb24gLz4gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIHNwYWNlLXktMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRUaXRsZT4ge3RpdGxlfSA8L0NhcmRUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkRGVzY3JpcHRpb24+IHthdXRob3J9IHwge2Zvcm1hdERhdGUodXBsb2FkZWRfdGltZSl9IDwvQ2FyZERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZEhlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudD4gPHAgY2xhc3NOYW1lPVwicm91bmRlZC1tZCBib3JkZXIgcC00XCI+IHtkZXNjcmlwdGlvbn0gPC9wPiA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYW5uZXIiXSwibmFtZXMiOlsiQ2FyZCIsIkNhcmRDb250ZW50IiwiQ2FyZERlc2NyaXB0aW9uIiwiQ2FyZEhlYWRlciIsIkNhcmRUaXRsZSIsIkJlbGxJY29uIiwiQmFubmVyIiwiYW5ub3VuY2VtZW50IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInVwbG9hZGVkX3RpbWUiLCJhdXRob3IiLCJmb3JtYXREYXRlIiwiZGF0ZVN0cmluZyIsImRhdGUiLCJEYXRlIiwib3B0aW9ucyIsImRheSIsIm1vbnRoIiwieWVhciIsImhvdXIiLCJtaW51dGUiLCJob3VyMTIiLCJmb3JtYXR0ZWREYXRlIiwiSW50bCIsIkRhdGVUaW1lRm9ybWF0IiwiZm9ybWF0IiwicmVwbGFjZSIsImRpdiIsImNsYXNzTmFtZSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/announcements/_components/banner/index.tsx\n"));

/***/ })

});