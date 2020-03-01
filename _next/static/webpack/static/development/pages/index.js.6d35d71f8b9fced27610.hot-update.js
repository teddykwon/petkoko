webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/Services/API/Post/index.ts":
/*!****************************************!*\
  !*** ./src/Services/API/Post/index.ts ***!
  \****************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../.. */ "./src/Services/index.ts");

// #region Local Imports
 // #endregion Local Imports
// #region Interface Imports

// #endregion Interface Imports
var PostService = {
  GetHashTag: function GetHashTag(payload) {
    var response;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function GetHashTag$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(___WEBPACK_IMPORTED_MODULE_1__["Http"].Request("GET", "/hash-tag", payload.params));

          case 2:
            response = _context.sent;
            return _context.abrupt("return", response);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    });
  },
  GetPost: function GetPost(payload) {
    var response;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function GetPost$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(___WEBPACK_IMPORTED_MODULE_1__["Http"].Request("GET", "/post", payload.params));

          case 2:
            response = _context2.sent;
            return _context2.abrupt("return", response);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    });
  }
};

/***/ })

})
//# sourceMappingURL=index.js.6d35d71f8b9fced27610.hot-update.js.map