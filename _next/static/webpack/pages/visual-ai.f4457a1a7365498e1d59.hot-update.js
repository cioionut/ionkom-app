webpackHotUpdate_N_E("pages/visual-ai",{

/***/ "./pages/visual-ai/index.js":
/*!**********************************!*\
  !*** ./pages/visual-ai/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return DialogSystem; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/layout */ \"./components/layout.tsx\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _ocr_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ocr.module.css */ \"./pages/visual-ai/ocr.module.css\");\n/* harmony import */ var _ocr_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ocr_module_css__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/home/ionut/workspace/ionkom/ionkom-app/pages/visual-ai/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nfunction DialogSystem() {\n  var host = \"https://dialogsys-atis.herokuapp.com\";\n  var apiUrl = \"\".concat(host, \"/api/v1\");\n  var title = \"Visual AI - Read Images using ML | \".concat(_components_layout__WEBPACK_IMPORTED_MODULE_2__[\"siteTitle\"], \" artificial intelligence\");\n  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    home: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 9\n    }\n  }, title), __jsx(\"meta\", {\n    property: \"og:site_name\",\n    content: title,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 11\n    }\n  }), __jsx(\"meta\", {\n    property: \"og:title\",\n    content: \"\".concat(title),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 11\n    }\n  }), __jsx(\"meta\", {\n    property: \"og:url\",\n    content: \"https://ionkom.com/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 11\n    }\n  }), __jsx(\"meta\", {\n    name: \"description\",\n    content: \"Intelligent chatbot service, build dialog systems for your business, automate conversations\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 11\n    }\n  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Container\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Row\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Col\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 11\n    }\n  }, __jsx(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 16\n    }\n  }, \"Visual AI - Optical Character Recognition (OCR)\"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Row\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Col\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 11\n    }\n  }, __jsx(\"p\", {\n    className: _ocr_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.textContent,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }\n  }, \"Visual AI is a collection of pre-trained machine learning models specialized in computer vision. Read and Derive insights from your images in cloud or on premise. Keep the order in your image streams. \"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Row\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Col\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 11\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 16\n    }\n  }, \"Try it for free\"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Row\"], {\n    className: \"mt-5 pt-5\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 9\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Col\"], {\n    md: 6,\n    sm: 12,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 11\n    }\n  }, __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 13\n    }\n  }, \"Detect text in images\"), __jsx(\"p\", {\n    className: _ocr_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.textContent,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 13\n    }\n  }, \"Optical Character Recognition (OCR) can recognize and extract text from images. Our solution can help you to automate text detection in documents.\")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Col\"], {\n    md: 6,\n    sm: 12,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 11\n    }\n  }, __jsx(\"img\", {\n    src: \"/img/contact-2579313_640.jpg\",\n    alt: \"natural language understanding\",\n    width: \"60%\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 13\n    }\n  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Row\"], {\n    className: \"mt-3 pt-3\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 9\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Col\"], {\n    md: 4,\n    sm: 12,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 11\n    }\n  }, __jsx(\"h3\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 13\n    }\n  }, \"Text Detection\"), __jsx(\"p\", {\n    className: _ocr_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.textContent,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 13\n    }\n  }, \"Recognize and extract text from any image. Engage prospects and customers across multiple communication channels.\")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Col\"], {\n    md: 4,\n    sm: 12,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 11\n    }\n  }, __jsx(\"h3\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 13\n    }\n  }, \"Grow sales\"), __jsx(\"p\", {\n    className: _ocr_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.textContent,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 13\n    }\n  }, \"Scale your efforts without increasing employee headcount.\")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Col\"], {\n    md: 4,\n    sm: 12,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 11\n    }\n  }, __jsx(\"h3\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 13\n    }\n  }, \"Support at a glance\"), __jsx(\"p\", {\n    className: _ocr_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.textContent,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 13\n    }\n  }, \"Keeps the conversation balanced and add proactivity when is needed.\"))), __jsx(\"hr\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 9\n    }\n  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Row\"], {\n    className: \"justify-content-center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 9\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Col\"], {\n    xs: \"auto\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 11\n    }\n  }, __jsx(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 13\n    }\n  }, \"Chatbot API demo\")))));\n}\n_c = DialogSystem;\n\nvar _c;\n\n$RefreshReg$(_c, \"DialogSystem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdmlzdWFsLWFpL2luZGV4LmpzP2M1YmMiXSwibmFtZXMiOlsiRGlhbG9nU3lzdGVtIiwiaG9zdCIsInByb2Nlc3MiLCJhcGlVcmwiLCJ0aXRsZSIsInNpdGVUaXRsZSIsInN0eWxlIiwidGV4dENvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdlLFNBQVNBLFlBQVQsR0FBd0I7QUFFckMsTUFBTUMsSUFBSSxHQUFHQyxzQ0FBYjtBQUNBLE1BQU1DLE1BQU0sYUFBTUYsSUFBTixZQUFaO0FBQ0EsTUFBTUcsS0FBSyxnREFBeUNDLDREQUF6Qyw2QkFBWDtBQUVBLFNBQ0UsTUFBQywwREFBRDtBQUFRLFFBQUksTUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFRRCxLQUFSLENBREYsRUFFSTtBQUFNLFlBQVEsRUFBQyxjQUFmO0FBQThCLFdBQU8sRUFBRUEsS0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBR0k7QUFBTSxZQUFRLEVBQUMsVUFBZjtBQUEwQixXQUFPLFlBQUtBLEtBQUwsQ0FBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhKLEVBSUk7QUFBTSxZQUFRLEVBQUMsUUFBZjtBQUF3QixXQUFPLEVBQUMscUJBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKSixFQUtJO0FBQ0ksUUFBSSxFQUFDLGFBRFQ7QUFFSSxXQUFPLEVBQUMsNkZBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxKLENBREYsRUFXRSxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVEQUFMLENBREYsQ0FERixFQUlFLE1BQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFFRSxzREFBSyxDQUFDQyxXQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlOQURGLENBREYsQ0FKRixFQVVFLE1BQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLLE1BQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBTCxDQURGLENBVkYsRUFhRSxNQUFDLG1EQUFEO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsbURBQUQ7QUFBSyxNQUFFLEVBQUUsQ0FBVDtBQUFZLE1BQUUsRUFBRSxFQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFERixFQUVFO0FBQUcsYUFBUyxFQUFFRCxzREFBSyxDQUFDQyxXQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBKQUZGLENBREYsRUFLRSxNQUFDLG1EQUFEO0FBQUssTUFBRSxFQUFFLENBQVQ7QUFBWSxNQUFFLEVBQUUsRUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsT0FBRyxFQUFDLDhCQUROO0FBRUUsT0FBRyxFQUFDLGdDQUZOO0FBR0UsU0FBSyxFQUFDLEtBSFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBTEYsQ0FiRixFQTBCRSxNQUFDLG1EQUFEO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsbURBQUQ7QUFBSyxNQUFFLEVBQUUsQ0FBVDtBQUFZLE1BQUUsRUFBRSxFQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixFQUVFO0FBQUcsYUFBUyxFQUFFRCxzREFBSyxDQUFDQyxXQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlIQUZGLENBREYsRUFLRSxNQUFDLG1EQUFEO0FBQUssTUFBRSxFQUFFLENBQVQ7QUFBWSxNQUFFLEVBQUUsRUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsRUFFRTtBQUFHLGFBQVMsRUFBRUQsc0RBQUssQ0FBQ0MsV0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpRUFGRixDQUxGLEVBU0UsTUFBQyxtREFBRDtBQUFLLE1BQUUsRUFBRSxDQUFUO0FBQVksTUFBRSxFQUFFLEVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURGLEVBRUU7QUFBRyxhQUFTLEVBQUVELHNEQUFLLENBQUNDLFdBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkVBRkYsQ0FURixDQTFCRixFQXdDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBeENGLEVBeUNFLE1BQUMsbURBQUQ7QUFBSyxhQUFTLEVBQUMsd0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsbURBQUQ7QUFBSyxNQUFFLEVBQUMsTUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERixDQURGLENBekNGLENBWEYsQ0FERjtBQWtFRDtLQXhFdUJQLFkiLCJmaWxlIjoiLi9wYWdlcy92aXN1YWwtYWkvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgTGF5b3V0LCB7IHNpdGVUaXRsZSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0J1xuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3csIENvbCwgQnV0dG9uIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuaW1wb3J0IHN0eWxlIGZyb20gJy4vb2NyLm1vZHVsZS5jc3MnXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGlhbG9nU3lzdGVtKCkge1xuXG4gIGNvbnN0IGhvc3QgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19ESUFMT0dTWVNfQVRJUztcbiAgY29uc3QgYXBpVXJsID0gYCR7aG9zdH0vYXBpL3YxYDtcbiAgY29uc3QgdGl0bGUgPSBgVmlzdWFsIEFJIC0gUmVhZCBJbWFnZXMgdXNpbmcgTUwgfCAke3NpdGVUaXRsZX0gYXJ0aWZpY2lhbCBpbnRlbGxpZ2VuY2VgO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dCBob21lPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cbiAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnNpdGVfbmFtZVwiIGNvbnRlbnQ9e3RpdGxlfT48L21ldGE+XG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e2Ake3RpdGxlfWB9PjwvbWV0YT5cbiAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGNvbnRlbnQ9XCJodHRwczovL2lvbmtvbS5jb20vXCI+PC9tZXRhPlxuICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgIGNvbnRlbnQ9J0ludGVsbGlnZW50IGNoYXRib3Qgc2VydmljZSwgYnVpbGQgZGlhbG9nIHN5c3RlbXMgZm9yIHlvdXIgYnVzaW5lc3MsIGF1dG9tYXRlIGNvbnZlcnNhdGlvbnMnXG4gICAgICAgICAgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxSb3c+XG4gICAgICAgICAgPENvbD48aDE+VmlzdWFsIEFJIC0gT3B0aWNhbCBDaGFyYWN0ZXIgUmVjb2duaXRpb24gKE9DUik8L2gxPjwvQ29sPlxuICAgICAgICA8L1Jvdz5cbiAgICAgICAgPFJvdz5cbiAgICAgICAgICA8Q29sPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZS50ZXh0Q29udGVudH0+VmlzdWFsIEFJIGlzIGEgY29sbGVjdGlvbiBvZiBwcmUtdHJhaW5lZCBtYWNoaW5lIGxlYXJuaW5nIG1vZGVscyBzcGVjaWFsaXplZCBpbiBjb21wdXRlciB2aXNpb24uIFJlYWQgYW5kIERlcml2ZSBpbnNpZ2h0cyBmcm9tIHlvdXIgaW1hZ2VzIGluIGNsb3VkIG9yIG9uIHByZW1pc2UuXG4gICAgICAgICAgICBLZWVwIHRoZSBvcmRlciBpbiB5b3VyIGltYWdlIHN0cmVhbXMuIDwvcD5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgPC9Sb3c+XG4gICAgICAgIDxSb3c+XG4gICAgICAgICAgPENvbD48QnV0dG9uPlRyeSBpdCBmb3IgZnJlZTwvQnV0dG9uPjwvQ29sPlxuICAgICAgICA8L1Jvdz5cbiAgICAgICAgPFJvdyBjbGFzc05hbWU9J210LTUgcHQtNSc+XG4gICAgICAgICAgPENvbCBtZD17Nn0gc209ezEyfT5cbiAgICAgICAgICAgIDxoMj5EZXRlY3QgdGV4dCBpbiBpbWFnZXM8L2gyPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZS50ZXh0Q29udGVudH0+T3B0aWNhbCBDaGFyYWN0ZXIgUmVjb2duaXRpb24gKE9DUikgY2FuIHJlY29nbml6ZSBhbmQgZXh0cmFjdCB0ZXh0IGZyb20gaW1hZ2VzLiBPdXIgc29sdXRpb24gY2FuIGhlbHAgeW91IHRvIGF1dG9tYXRlIHRleHQgZGV0ZWN0aW9uIGluIGRvY3VtZW50cy48L3A+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPENvbCBtZD17Nn0gc209ezEyfT5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3JjPScvaW1nL2NvbnRhY3QtMjU3OTMxM182NDAuanBnJ1xuICAgICAgICAgICAgICBhbHQ9J25hdHVyYWwgbGFuZ3VhZ2UgdW5kZXJzdGFuZGluZydcbiAgICAgICAgICAgICAgd2lkdGg9JzYwJSdcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgIDwvUm93PlxuICAgICAgICA8Um93IGNsYXNzTmFtZT0nbXQtMyBwdC0zJz5cbiAgICAgICAgICA8Q29sIG1kPXs0fSBzbT17MTJ9PlxuICAgICAgICAgICAgPGgzPlRleHQgRGV0ZWN0aW9uPC9oMz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGUudGV4dENvbnRlbnR9PlJlY29nbml6ZSBhbmQgZXh0cmFjdCB0ZXh0IGZyb20gYW55IGltYWdlLiBFbmdhZ2UgcHJvc3BlY3RzIGFuZCBjdXN0b21lcnMgYWNyb3NzIG11bHRpcGxlIGNvbW11bmljYXRpb24gY2hhbm5lbHMuPC9wPlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDxDb2wgbWQ9ezR9IHNtPXsxMn0+XG4gICAgICAgICAgICA8aDM+R3JvdyBzYWxlczwvaDM+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlLnRleHRDb250ZW50fT5TY2FsZSB5b3VyIGVmZm9ydHMgd2l0aG91dCBpbmNyZWFzaW5nIGVtcGxveWVlIGhlYWRjb3VudC48L3A+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPENvbCBtZD17NH0gc209ezEyfT5cbiAgICAgICAgICAgIDxoMz5TdXBwb3J0IGF0IGEgZ2xhbmNlPC9oMz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGUudGV4dENvbnRlbnR9PktlZXBzIHRoZSBjb252ZXJzYXRpb24gYmFsYW5jZWQgYW5kIGFkZCBwcm9hY3Rpdml0eSB3aGVuIGlzIG5lZWRlZC48L3A+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgIDwvUm93PlxuICAgICAgICA8aHIvPlxuICAgICAgICA8Um93IGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgICA8Q29sIHhzPSdhdXRvJz5cbiAgICAgICAgICAgIDxoMT5DaGF0Ym90IEFQSSBkZW1vPC9oMT5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgPC9Sb3c+XG4gICAgICAgIHsvKiA8Um93PlxuICAgICAgICAgIDxDb2w+XG4gICAgICAgICAgICA8RGlhbG9nIGNoYXRCb3hUaXRsZT0nRmxpZ2h0IEFzc2lzdGFudCcgYXBpVXJsPXthcGlVcmx9Lz5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgPC9Sb3c+ICovfVxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/visual-ai/index.js\n");

/***/ })

})