webpackHotUpdate("static/development/pages/_error.js",{

/***/ "./pages/_error/index.tsx":
/*!********************************!*\
  !*** ./pages/_error/index.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];
// #region Global Imports


// #endregion Interface Imports
var Error = function Error(_ref) {
  var t = _ref.t,
      statusCode = _ref.statusCode;
  return __jsx("div", null, statusCode);
};

Error.getInitialProps = function _callee(_ref2) {
  var res, err, statusCode;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          res = _ref2.res, err = _ref2.err;

          if (res) {
            statusCode = res.statusCode;
          } else if (err) {
            statusCode = err.statusCode;
          }

          return _context.abrupt("return", {
            namespacesRequired: ["common"],
            statusCode: statusCode
          });

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Error);

/***/ })

})
//# sourceMappingURL=_error.js.466f3952b441403122f4.hot-update.js.map