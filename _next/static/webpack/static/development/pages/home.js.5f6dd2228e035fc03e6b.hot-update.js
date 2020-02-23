webpackHotUpdate("static/development/pages/home.js",{

/***/ "./pages/home/index.tsx":
/*!******************************!*\
  !*** ./pages/home/index.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _server_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../server/i18n */ "./server/i18n.ts");
/* harmony import */ var _src_Styled_Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/Styled/Home */ "./src/Styled/Home.ts");
/* harmony import */ var _src_Actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/Actions */ "./src/Actions/index.ts");
/* harmony import */ var _src_Components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../src/Components */ "./src/Components/index.ts");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];
// #region Global Imports

 // #endregion Global Imports
// #region Local Imports




 // #endregion Local Imports
// #region Interface Imports

// #endregion Interface Imports
var Home = function Home(_ref) {
  var t = _ref.t,
      i18n = _ref.i18n;
  var home = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.home;
  });
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  var renderHashTagButtons = function renderHashTagButtons(activeTag) {
    return ["puppy", "dog"].map(function (tag) {
      return __jsx(_src_Components__WEBPACK_IMPORTED_MODULE_6__["HashTagButton"], {
        key: tag,
        tag: tag,
        isActive: activeTag === tag,
        onClick: function onClick() {
          return alert("");
        }
      });
    });
  };

  var renderFeeds = function renderFeeds() {
    return [{
      vendorType: "TIKTOK",
      tags: ["댕댕이", "강아지"],
      title: "#포메라니안 #puppylove #doglife #doga #puppet #dost #반려동물 #고양이 #마이펫 #dogtricks #강아지 #puppy #puppydog #dogs #doggo #dog #멍멍이 #pugpuppy #아기강아지",
      content: {
        type: "VIDEO",
        thumbnailImageUrl: "https://p16-tiktokcdn-com.akamaized.net/obj/v0201/869f1e8b47839774413cd9e7b16194f2",
        link: "https://www.tiktok.com/@dogcastle1/video/6787215908818390274",
        originUrl: null
      },
      author: {
        name: "DOGCASTLE",
        profileImageUrl: null
      }
    }, {
      vendorType: "TIKTOK",
      tags: ["댕댕이", "강아지"],
      title: "#포메라니안 #puppylove #doglife #doga #puppet #dost #반려동물 #고양이 #마이펫 #dogtricks #강아지 #puppy #puppydog #dogs #doggo #dog #멍멍이 #pugpuppy #아기강아지",
      content: {
        type: "VIDEO",
        thumbnailImageUrl: "https://p16-tiktokcdn-com.akamaized.net/obj/v0201/869f1e8b47839774413cd9e7b16194f2",
        link: "https://www.tiktok.com/@dogcastle1/video/6787215908818390274",
        originUrl: null
      },
      author: {
        name: "DOGCASTLE",
        profileImageUrl: null
      }
    }, {
      vendorType: "TIKTOK",
      tags: ["댕댕이", "강아지"],
      title: "#포메라니안 #puppylove #doglife #doga #puppet #dost #반려동물 #고양이 #마이펫 #dogtricks #강아지 #puppy #puppydog #dogs #doggo #dog #멍멍이 #pugpuppy #아기강아지",
      content: {
        type: "VIDEO",
        thumbnailImageUrl: "https://p16-tiktokcdn-com.akamaized.net/obj/v0201/869f1e8b47839774413cd9e7b16194f2",
        link: "https://www.tiktok.com/@dogcastle1/video/6787215908818390274",
        originUrl: null
      },
      author: {
        name: "DOGCASTLE",
        profileImageUrl: null
      }
    }, {
      vendorType: "TIKTOK",
      tags: ["댕댕이", "강아지"],
      title: "#포메라니안 #puppylove #doglife #doga #puppet #dost #반려동물 #고양이 #마이펫 #dogtricks #강아지 #puppy #puppydog #dogs #doggo #dog #멍멍이 #pugpuppy #아기강아지",
      content: {
        type: "VIDEO",
        thumbnailImageUrl: "https://p16-tiktokcdn-com.akamaized.net/obj/v0201/869f1e8b47839774413cd9e7b16194f2",
        link: "https://www.tiktok.com/@dogcastle1/video/6787215908818390274",
        originUrl: null
      },
      author: {
        name: "DOGCASTLE",
        profileImageUrl: null
      }
    }].map(function (feed) {
      return __jsx(_src_Components__WEBPACK_IMPORTED_MODULE_6__["Feed"], {
        key: feed,
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
        }
      });
    });
  };

  return __jsx(_src_Styled_Home__WEBPACK_IMPORTED_MODULE_4__["Container"], null, __jsx(_src_Styled_Home__WEBPACK_IMPORTED_MODULE_4__["Top"], null), __jsx(_src_Styled_Home__WEBPACK_IMPORTED_MODULE_4__["Middle"], null, __jsx(_src_Styled_Home__WEBPACK_IMPORTED_MODULE_4__["MiddleLeft"], null, __jsx(_src_Styled_Home__WEBPACK_IMPORTED_MODULE_4__["MiddleLeftButtons"], null, renderHashTagButtons("puppy"))), __jsx(_src_Styled_Home__WEBPACK_IMPORTED_MODULE_4__["MiddleRight"], null, __jsx(_src_Styled_Home__WEBPACK_IMPORTED_MODULE_4__["TopText"], null, "#puppy"), __jsx(_src_Styled_Home__WEBPACK_IMPORTED_MODULE_4__["FeedBoxs"], null, renderFeeds()))));
};

Home.getInitialProps = function _callee(ctx) {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(ctx.store.dispatch(_src_Actions__WEBPACK_IMPORTED_MODULE_5__["HomeActions"].GetApod({
            params: {
              hd: true
            }
          })));

        case 2:
          return _context.abrupt("return", {
            namespacesRequired: ["common"]
          });

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
};

var Extended = Object(_server_i18n__WEBPACK_IMPORTED_MODULE_3__["withTranslation"])("common")(Home);
/* harmony default export */ __webpack_exports__["default"] = (Extended);

/***/ })

})
//# sourceMappingURL=home.js.5f6dd2228e035fc03e6b.hot-update.js.map