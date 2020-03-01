webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index/index.tsx":
/*!*******************************!*\
  !*** ./pages/index/index.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WrapHome; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _src_Styled_Home__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../src/Styled/Home */ "./src/Styled/Home.ts");
/* harmony import */ var _src_Actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../src/Actions */ "./src/Actions/index.ts");
/* harmony import */ var _src_Components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../src/Components */ "./src/Components/index.ts");







var _jsxFileName = "/Users/dalbang/Develop/git/koko/front/pages/index/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7__["createElement"];
// #region Global Imports



 // #endregion Global Imports
// #region Local Imports



 // #endregion Local Imports
// #region Interface Imports

// #endregion Interface Imports
var Home = function Home(_ref) {
  Object(_babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_6__["default"])(_ref);

  var home = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"])(function (state) {
    return state.home;
  });
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useDispatch"])();

  var renderHashTagButtons = function renderHashTagButtons(activeTag) {
    return home.hashTags.map(function (tag) {
      return __jsx(_src_Components__WEBPACK_IMPORTED_MODULE_13__["HashTagButton"], {
        key: tag,
        tag: tag,
        isActive: activeTag === tag,
        onClick: function onClick() {
          return dispatch(_src_Actions__WEBPACK_IMPORTED_MODULE_12__["HomeActions"].GetPost({
            key: tag
          }));
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      });
    });
  };

  var renderFeeds = function renderFeeds() {
    return home.posts.map(function (feed, i) {
      return __jsx(_src_Components__WEBPACK_IMPORTED_MODULE_13__["Feed"], {
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
          lineNumber: 45
        },
        __self: this
      });
    });
  };

  return __jsx(_src_Styled_Home__WEBPACK_IMPORTED_MODULE_11__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "PetKoKo")), __jsx(_src_Styled_Home__WEBPACK_IMPORTED_MODULE_11__["Top"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }), __jsx(_src_Styled_Home__WEBPACK_IMPORTED_MODULE_11__["Middle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx(_src_Styled_Home__WEBPACK_IMPORTED_MODULE_11__["MiddleLeft"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx(_src_Styled_Home__WEBPACK_IMPORTED_MODULE_11__["MiddleLeftButtons"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, renderHashTagButtons(home.activeTag))), __jsx(_src_Styled_Home__WEBPACK_IMPORTED_MODULE_11__["MiddleRight"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx(_src_Styled_Home__WEBPACK_IMPORTED_MODULE_11__["TopText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, "#", home.activeTag), __jsx(_src_Styled_Home__WEBPACK_IMPORTED_MODULE_11__["FeedBoxs"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, renderFeeds()))));
};

Home.getInitialProps = function _callee(ctx) {
  var req, store;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          req = ctx.req, store = ctx.store;

          if (req) {
            _context.next = 18;
            break;
          }

          _context.t0 = _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a;
          _context.t1 = store;
          _context.next = 6;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.awrap(_src_Actions__WEBPACK_IMPORTED_MODULE_12__["HomeActions"].GetHashTag({
            key: "koko"
          }));

        case 6:
          _context.t2 = _context.sent;
          _context.t3 = _context.t1.dispatch.call(_context.t1, _context.t2);
          _context.next = 10;
          return _context.t0.awrap.call(_context.t0, _context.t3);

        case 10:
          _context.t4 = _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a;
          _context.t5 = store;
          _context.next = 14;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.awrap(_src_Actions__WEBPACK_IMPORTED_MODULE_12__["HomeActions"].GetPost({
            key: store.getState().home.activeTag
          }));

        case 14:
          _context.t6 = _context.sent;
          _context.t7 = _context.t5.dispatch.call(_context.t5, _context.t6);
          _context.next = 18;
          return _context.t4.awrap.call(_context.t4, _context.t7);

        case 18:
          return _context.abrupt("return", {});

        case 19:
        case "end":
          return _context.stop();
      }
    }
  });
};

var WrapHome =
/*#__PURE__*/
function (_App) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(WrapHome, _App);

  function WrapHome() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, WrapHome);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(WrapHome).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(WrapHome, [{
    key: "render",
    value: function render() {
      return __jsx(Home, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      });
    }
  }]);

  return WrapHome;
}(next_app__WEBPACK_IMPORTED_MODULE_10___default.a);



/***/ })

})
//# sourceMappingURL=index.js.907c5c8bab1b4b6bd763.hot-update.js.map