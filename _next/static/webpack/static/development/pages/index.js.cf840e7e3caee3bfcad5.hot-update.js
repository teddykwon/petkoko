webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/Components/Basic/FeedBox/index.tsx":
/*!************************************************!*\
  !*** ./src/Components/Basic/FeedBox/index.tsx ***!
  \************************************************/
/*! exports provided: FeedBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedBox", function() { return FeedBox; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Author__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Author */ "./src/Components/Basic/FeedBox/Author/index.tsx");
var _jsxFileName = "/Users/dalbang/Develop/git/koko/front/src/Components/Basic/FeedBox/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "FeedBox__Container",
  componentId: "sc-5vbvoc-0"
})(["position:relative;cursor:pointer;width:calc(25% - 24px);@media (max-width:1440px){width:calc(33% - 24px);}@media (max-width:768px){width:calc(50% - 24px);}@media (max-width:600px){width:100%;}"]);
var BackgroundImage = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
  displayName: "FeedBox__BackgroundImage",
  componentId: "sc-5vbvoc-1"
})(["width:100%;height:auto;border-radius:8px;"]);
var FeedBox = function FeedBox(props) {
  var content = props.content,
      author = props.author;
  return __jsx(Container, {
    onClick: props.onClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx(BackgroundImage, {
    src: content.thumbnailUrl,
    alt: props.title,
    onLoad: function onLoad() {
      return window.dispatchEvent(new Event('resize'));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), __jsx(_Author__WEBPACK_IMPORTED_MODULE_2__["Author"], {
    vendorType: props.vendorType,
    postedAt: props.postedAt,
    name: author.name,
    profileImgUrl: author.profileImgUrl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }));
};

/***/ })

})
//# sourceMappingURL=index.js.cf840e7e3caee3bfcad5.hot-update.js.map