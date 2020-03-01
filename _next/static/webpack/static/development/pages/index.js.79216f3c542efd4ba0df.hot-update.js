webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index/index.tsx":
/*!*******************************!*\
  !*** ./pages/index/index.tsx ***!
  \*******************************/
/*! exports provided: Home */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home", function() { return Home; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _src_Styled_Home__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../src/Styled/Home */ "./src/Styled/Home.ts");
/* harmony import */ var _src_Actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../src/Actions */ "./src/Actions/index.ts");
/* harmony import */ var _src_Components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../src/Components */ "./src/Components/index.ts");






var _jsxFileName = "/Users/dalbang/Develop/git/koko/front/pages/index/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6__["createElement"];
// #region Global Imports



 // #endregion Global Imports
// #region Local Imports



 // #endregion Local Imports
// #region Interface Imports

// #endregion Interface Imports
var Home =
/*#__PURE__*/
function (_App) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Home, _App);

  function Home() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Home);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Home).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Home, [{
    key: "render",
    value: function render() {
      var home = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(function (state) {
        return state.home;
      });
      var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"])();

      var renderHashTagButtons = function renderHashTagButtons(activeTag) {
        return home.hashTags.map(function (tag) {
          return __jsx(_src_Components__WEBPACK_IMPORTED_MODULE_12__["HashTagButton"], {
            key: tag,
            tag: tag,
            isActive: activeTag === tag,
            onClick: function onClick() {
              return dispatch(_src_Actions__WEBPACK_IMPORTED_MODULE_11__["HomeActions"].GetPost({
                key: tag
              }));
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 49
            },
            __self: this
          });
        });
      };

      var renderFeeds = function renderFeeds() {
        return home.posts.map(function (feed, i) {
          return __jsx(_src_Components__WEBPACK_IMPORTED_MODULE_12__["Feed"], {
            key: i,
            vendorType: feed.vendorType,
            tags: feed.tags,
            title: feed.title,
            postedAt: "2020.02.02",
            author: {
              name: feed.author.name,
              profileImgUrl: feed.author.profileImageUrl
            },
            content: {
              thumbnailUrl: feed.content.thumbnailImageUrl,
              originUrl: feed.content.originUrl,
              link: feed.content.link,
              type: feed.content.type
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 59
            },
            __self: this
          });
        });
      };

      return __jsx(_src_Styled_Home__WEBPACK_IMPORTED_MODULE_10__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, __jsx("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, "PetKoKo")), __jsx(_src_Styled_Home__WEBPACK_IMPORTED_MODULE_10__["Top"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }), __jsx(_src_Styled_Home__WEBPACK_IMPORTED_MODULE_10__["Middle"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, __jsx(_src_Styled_Home__WEBPACK_IMPORTED_MODULE_10__["MiddleLeft"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, __jsx(_src_Styled_Home__WEBPACK_IMPORTED_MODULE_10__["MiddleLeftButtons"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, renderHashTagButtons(home.activeTag))), __jsx(_src_Styled_Home__WEBPACK_IMPORTED_MODULE_10__["MiddleRight"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, __jsx(_src_Styled_Home__WEBPACK_IMPORTED_MODULE_10__["TopText"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, "#", home.activeTag), __jsx(_src_Styled_Home__WEBPACK_IMPORTED_MODULE_10__["FeedBoxs"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, renderFeeds()))));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var ReduxNextPageContext, _ctx, req, store;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getInitialProps$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              ReduxNextPageContext = _ref.ctx;
              _ctx = ctx, req = _ctx.req, store = _ctx.store;

              if (req) {
                _context.next = 19;
                break;
              }

              _context.t0 = _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a;
              _context.t1 = store;
              _context.next = 7;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_src_Actions__WEBPACK_IMPORTED_MODULE_11__["HomeActions"].GetHashTag({
                key: "koko"
              }));

            case 7:
              _context.t2 = _context.sent;
              _context.t3 = _context.t1.dispatch.call(_context.t1, _context.t2);
              _context.next = 11;
              return _context.t0.awrap.call(_context.t0, _context.t3);

            case 11:
              _context.t4 = _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a;
              _context.t5 = store;
              _context.next = 15;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_src_Actions__WEBPACK_IMPORTED_MODULE_11__["HomeActions"].GetPost({
                key: store.getState().home.activeTag
              }));

            case 15:
              _context.t6 = _context.sent;
              _context.t7 = _context.t5.dispatch.call(_context.t5, _context.t6);
              _context.next = 19;
              return _context.t4.awrap.call(_context.t4, _context.t7);

            case 19:
              return _context.abrupt("return", {});

            case 20:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }]);

  return Home;
}(next_app__WEBPACK_IMPORTED_MODULE_9___default.a);
;

Home.getInitialProps = function _callee(ctx) {
  var req, store;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          req = ctx.req, store = ctx.store;

          if (req) {
            _context2.next = 18;
            break;
          }

          _context2.t0 = _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a;
          _context2.t1 = store;
          _context2.next = 6;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_src_Actions__WEBPACK_IMPORTED_MODULE_11__["HomeActions"].GetHashTag({
            key: "koko"
          }));

        case 6:
          _context2.t2 = _context2.sent;
          _context2.t3 = _context2.t1.dispatch.call(_context2.t1, _context2.t2);
          _context2.next = 10;
          return _context2.t0.awrap.call(_context2.t0, _context2.t3);

        case 10:
          _context2.t4 = _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a;
          _context2.t5 = store;
          _context2.next = 14;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_src_Actions__WEBPACK_IMPORTED_MODULE_11__["HomeActions"].GetPost({
            key: store.getState().home.activeTag
          }));

        case 14:
          _context2.t6 = _context2.sent;
          _context2.t7 = _context2.t5.dispatch.call(_context2.t5, _context2.t6);
          _context2.next = 18;
          return _context2.t4.awrap.call(_context2.t4, _context2.t7);

        case 18:
          return _context2.abrupt("return", {});

        case 19:
        case "end":
          return _context2.stop();
      }
    }
  });
};

/***/ })

})
//# sourceMappingURL=index.js.79216f3c542efd4ba0df.hot-update.js.map