webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index/index.tsx":
/*!*******************************!*\
  !*** ./pages/index/index.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_magic_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-magic-grid */ "./node_modules/react-magic-grid/dist/react-magic-grid.es.js");
/* harmony import */ var _src_Styled_Home__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../src/Styled/Home */ "./src/Styled/Home.ts");
/* harmony import */ var _src_Actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../src/Actions */ "./src/Actions/index.ts");
/* harmony import */ var _src_Components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../src/Components */ "./src/Components/index.ts");


var _jsxFileName = "/Users/dalbang/Develop/git/koko/front/pages/index/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2__["createElement"];
// #region Global Imports


 //@ts-ignore

 // #endregion Global Imports
// #region Local Imports



 // #endregion Local Imports
// #region Interface Imports

// #endregion Interface Imports
var Home = function Home(_ref) {
  Object(_babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref);

  var home = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.home;
  });
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();

  var renderHashTagButtons = function renderHashTagButtons(activeTag) {
    return home.hashTags.map(function (tag) {
      return __jsx(_src_Components__WEBPACK_IMPORTED_MODULE_8__["HashTagButton"], {
        key: tag,
        tag: tag,
        isActive: activeTag === tag,
        onClick: function onClick() {
          return dispatch(_src_Actions__WEBPACK_IMPORTED_MODULE_7__["HomeActions"].GetPost({
            key: tag
          }));
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      });
    });
  };

  var renderFeeds = function renderFeeds() {
    return home.posts.map(function (feed, i) {
      return __jsx(_src_Components__WEBPACK_IMPORTED_MODULE_8__["Feed"], {
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
          lineNumber: 46
        },
        __self: this
      });
    });
  };

  return __jsx(_src_Styled_Home__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "PetKoKo")), __jsx(_src_Styled_Home__WEBPACK_IMPORTED_MODULE_6__["Top"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }), __jsx(_src_Styled_Home__WEBPACK_IMPORTED_MODULE_6__["Middle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx(_src_Styled_Home__WEBPACK_IMPORTED_MODULE_6__["MiddleLeft"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx(_src_Styled_Home__WEBPACK_IMPORTED_MODULE_6__["MiddleLeftButtons"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, renderHashTagButtons(home.activeTag))), __jsx(_src_Styled_Home__WEBPACK_IMPORTED_MODULE_6__["MiddleRight"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx(_src_Styled_Home__WEBPACK_IMPORTED_MODULE_6__["TopText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "#", home.activeTag), __jsx(react_magic_grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    items: home.posts.length,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, renderFeeds()))));
};

Home.getInitialProps = function _callee(ctx) {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.t0 = _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a;
          _context.t1 = ctx.store;
          _context.next = 4;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_src_Actions__WEBPACK_IMPORTED_MODULE_7__["HomeActions"].GetHashTag({
            key: "koko"
          }));

        case 4:
          _context.t2 = _context.sent;
          _context.t3 = _context.t1.dispatch.call(_context.t1, _context.t2);
          _context.next = 8;
          return _context.t0.awrap.call(_context.t0, _context.t3);

        case 8:
          _context.t4 = _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a;
          _context.t5 = ctx.store;
          _context.next = 12;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_src_Actions__WEBPACK_IMPORTED_MODULE_7__["HomeActions"].GetPost({
            key: ctx.store.getState().home.activeTag
          }));

        case 12:
          _context.t6 = _context.sent;
          _context.t7 = _context.t5.dispatch.call(_context.t5, _context.t6);
          _context.next = 16;
          return _context.t4.awrap.call(_context.t4, _context.t7);

        case 16:
          return _context.abrupt("return", {});

        case 17:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.7b2e4896c12eb9b5310d.hot-update.js.map