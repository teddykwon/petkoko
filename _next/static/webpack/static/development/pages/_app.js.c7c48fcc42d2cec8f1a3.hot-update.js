webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/set.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/arrayWithoutHoles.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/iterableToArray.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/nonIterableSpread.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/toConsumableArray.js":
false,

/***/ "./node_modules/core-js/library/fn/array/from.js":
false,

/***/ "./node_modules/core-js/library/fn/date/now.js":
false,

/***/ "./node_modules/core-js/library/fn/json/stringify.js":
false,

/***/ "./node_modules/core-js/library/fn/set.js":
false,

/***/ "./node_modules/core-js/library/modules/_array-from-iterable.js":
false,

/***/ "./node_modules/core-js/library/modules/_collection-strong.js":
false,

/***/ "./node_modules/core-js/library/modules/_collection-to-json.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.array.from.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.date.now.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.set.js":
false,

/***/ "./node_modules/core-js/library/modules/es7.set.from.js":
false,

/***/ "./node_modules/core-js/library/modules/es7.set.of.js":
false,

/***/ "./node_modules/core-js/library/modules/es7.set.to-json.js":
false,

/***/ "./node_modules/next/dist/build/webpack/loaders/next-plugin-loader.js?middleware=unstable-enhance-app-server!./":
false,

/***/ "./node_modules/next/dist/build/webpack/loaders/next-plugin-loader.js?middleware=unstable-get-styles-server!./":
false,

/***/ "./node_modules/next/dist/next-server/lib/constants.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/document-context.js":
false,

/***/ "./node_modules/next/dist/next-server/server/utils.js":
false,

/***/ "./node_modules/next/dist/pages/_document.js":
false,

/***/ "./node_modules/next/dist/server/htmlescape.js":
false,

/***/ "./node_modules/next/document.js":
false,

/***/ "./node_modules/string-hash/index.js":
false,

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
false,

/***/ "./node_modules/styled-jsx/dist/server.js":
false,

/***/ "./node_modules/styled-jsx/dist/style.js":
false,

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
false,

/***/ "./node_modules/styled-jsx/server.js":
false,

/***/ "./pages/_app/index.tsx":
/*!******************************!*\
  !*** ./pages/_app/index.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");
/* harmony import */ var _src_Definitions_Styled__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../src/Definitions/Styled */ "./src/Definitions/Styled/index.ts");
/* harmony import */ var _src_Redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../src/Redux */ "./src/Redux/index.ts");
/* harmony import */ var _static_css_reset_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../static/css/reset.scss */ "./static/css/reset.scss");
/* harmony import */ var _static_css_reset_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_static_css_reset_scss__WEBPACK_IMPORTED_MODULE_13__);






var __jsx = react__WEBPACK_IMPORTED_MODULE_6__["createElement"];
// #region Global Imports





// #endregion Global Imports
// #region Local Imports


 // #endregion Local Imports

var WebApp =
/*#__PURE__*/
function (_App) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(WebApp, _App);

  function WebApp() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, WebApp);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(WebApp).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(WebApp, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps,
          store = _this$props.store;
      return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_8__["Provider"], {
        store: store
      }, __jsx(styled_components__WEBPACK_IMPORTED_MODULE_9__["ThemeProvider"], {
        theme: _src_Definitions_Styled__WEBPACK_IMPORTED_MODULE_11__["theme"]
      }, __jsx(Component, pageProps)));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var Component, ctx, pageProps;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getInitialProps$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              Component = _ref.Component, ctx = _ref.ctx;

              if (!Component.getInitialProps) {
                _context.next = 7;
                break;
              }

              _context.next = 4;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Component.getInitialProps(ctx));

            case 4:
              _context.t0 = _context.sent;
              _context.next = 8;
              break;

            case 7:
              _context.t0 = {};

            case 8:
              pageProps = _context.t0;
              return _context.abrupt("return", {
                pageProps: pageProps
              });

            case 10:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }]);

  return WebApp;
}(next_app__WEBPACK_IMPORTED_MODULE_7___default.a);

/* harmony default export */ __webpack_exports__["default"] = (Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_10__["default"])(_src_Redux__WEBPACK_IMPORTED_MODULE_12__["makeStore"])(WebApp));

/***/ })

})
//# sourceMappingURL=_app.js.c7c48fcc42d2cec8f1a3.hot-update.js.map