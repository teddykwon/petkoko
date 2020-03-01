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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var video_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! video.js */ "./node_modules/video.js/dist/video.es.js");
/* harmony import */ var video_js_dist_video_js_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! video.js/dist/video-js.css */ "./node_modules/video.js/dist/video-js.css");
/* harmony import */ var video_js_dist_video_js_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(video_js_dist_video_js_css__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "/Users/dalbang/Develop/git/koko/front/src/Components/Video/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


 // Styles


var Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].video.withConfig({
  displayName: "Video__Container",
  componentId: "w766rt-0"
})(["position:absolute;bottom:50px;right:50px;width:240px;height:300px;"]);
var Video = function Video(props) {
  var videoRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

  var _useState = useState(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      requireRedraw = _useState2[0],
      setRequireRedraw = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var videoNode = videoRef.current;
    var player;

    if (!requireRedraw) {
      player = Object(video_js__WEBPACK_IMPORTED_MODULE_3__["default"])(videoNode.current, {
        autoplay: true,
        controls: true,
        sources: [{
          src: props.videoUrl,
          type: "video/mp4"
        }]
      }, function onPlayerReady() {
        console.log("onPlayerReady");
      });
    }

    return function () {
      if (!player) {
        return;
      } // Video.js has a player.dispose() function that is meant to cleanup a previous video
      // We can't use this because it does some weird stuff to remove the video element from the page
      // This makes it really hard to use because the ref we keep still thinks it's on the page
      // requireRedraw just makes it so the video component is removed from the page _by react_
      // Then it's set to false immediately after so we can re-mount a new player


      setRequireRedraw(true);
    };
  }, [props.videoUrl, setRequireRedraw, requireRedraw]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (requireRedraw) {
      setRequireRedraw(false);
    }
  }, [requireRedraw]);
  return __jsx("div", {
    "data-vjs-player": true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx(Container, {
    ref: videoRef,
    className: "video-js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx("div", {
    className: "c-player__controls",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "Play"), __jsx("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "Pause"))));
};

/***/ })

})
//# sourceMappingURL=index.js.43135fef489c7e1f2c81.hot-update.js.map