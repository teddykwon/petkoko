webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/Components/Video/index.tsx":
/*!****************************************!*\
  !*** ./src/Components/Video/index.tsx ***!
  \****************************************/
/*! exports provided: Video */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Video", function() { return Video; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var video_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! video.js */ "./node_modules/video.js/dist/video.es.js");
/* harmony import */ var video_js_dist_video_js_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! video.js/dist/video-js.css */ "./node_modules/video.js/dist/video-js.css");
/* harmony import */ var video_js_dist_video_js_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(video_js_dist_video_js_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/dalbang/Develop/git/koko/front/src/Components/Video/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // Styles


var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].video.withConfig({
  displayName: "Video__Container",
  componentId: "w766rt-0"
})(["position:absolute;bottom:50px;right:50px;width:240px;height:300px;"]);
var Video = function Video(props) {
  var player;
  var videoNode = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!player) {
      player.dispose();
    }

    player = Object(video_js__WEBPACK_IMPORTED_MODULE_2__["default"])(videoNode.current, {
      autoplay: true,
      controls: true,
      sources: [{
        src: props.videoUrl,
        type: "video/mp4"
      }]
    }, function onPlayerReady() {
      console.log("onPlayerReady");
    });
  }, []);
  return __jsx("div", {
    "data-vjs-player": true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx(Container, {
    ref: videoNode,
    className: "video-js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("div", {
    className: "c-player__controls",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Play"), __jsx("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "Pause"))));
};

/***/ })

})
//# sourceMappingURL=index.js.fd13e9f83166cf92316a.hot-update.js.map