(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{107:function(e,t,n){var a={"./":21,"./develop":55,"./develop.json":55,"./index":21,"./index.ts":21,"./local":56,"./local.json":56,"./production":57,"./production.json":57};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id=107},108:function(e,t,n){},116:function(e,t,n){},117:function(e,t,n){},118:function(e,t,n){},127:function(e,t,n){},128:function(e,t,n){},129:function(e,t){},142:function(e,t,n){},143:function(e,t,n){},144:function(e,t,n){},145:function(e,t,n){},146:function(e,t,n){"use strict";n.r(t);var a,r=n(0),o=n.n(r),c=n(35),i=n.n(c),s=n(8),u=n(9),l=n(62),p=n.n(l),d=n(21),m=d.default.NODE_ENV.isDevelopment()?3e4:3e3,O=p.a.create({baseURL:"".concat(d.default.BASE_API_URL),timeout:m,withCredentials:!0}),v=function(){function e(){Object(s.a)(this,e)}return Object(u.a)(e,null,[{key:"addRequest",value:function(e,t){return O.interceptors.request.use(e,t)}},{key:"addResponse",value:function(e,t){return O.interceptors.response.use(e,t)}}]),e}(),h=O,f=(v.addResponse(function(e){return e},function(e){if(!e.response||401!==e.response.status)return Promise.reject(e)}),n(108),n(31)),E=n(64),b=n(80),N=n(65),j=n(14),y=n(32),g=n(82),P=Object(g.a)(),T=[P],k=n(38),C=n.n(k),_=n(28);!function(e){e.GET_POST="GET_POST",e.SET_POST="SET_POST",e.POST_POSITION_CHANGE="POST_POSITION_CHANGE",e.CHANGE_DISCOVER_POST_OPEN_STATE="CHANGE_DISCOVER_POST_OPEN_STATE"}(a||(a={}));var S={posts:[],currentPosition:0,isPostOpen:!1},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.GET_POST:return Object(_.a)({},e);case a.SET_POST:return Object(_.a)({},e,{posts:t.posts});case a.POST_POSITION_CHANGE:return Object(_.a)({},e,{currentPosition:t.position});case a.CHANGE_DISCOVER_POST_OPEN_STATE:return Object(_.a)({},e,{isPostOpen:t.isPostOpen,currentPosition:null!=t.position?t.position:e.currentPosition});default:return e}},I={},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I;return(arguments.length>1?arguments[1]:void 0).type,e},D={key:"main",storage:C.a,whitelist:[]},x={key:"main",storage:C.a,whitelist:[]},A={key:"post",storage:C.a,whitelist:[]},U=Object(j.combineReducers)({mainState:Object(y.a)(x,w),postState:Object(y.a)(A,R)}),L=Object(y.a)(D,U),V=n(15),G=n.n(V),B=n(25);function H(e){return{type:a.GET_POST,hashTag:e}}function M(e){return{type:a.POST_POSITION_CHANGE,position:e}}var K,W,F=n(37),q=n(33);!function(e){e.UNKNOWN_ERROR="UNKNOWN_ERROR",e.BAD_CONNECTION="BAD_CONNECTION"}(W||(W={}));var J=(K={},Object(q.a)(K,W.UNKNOWN_ERROR,"\uc54c \uc218 \uc5c6\ub294 \uc624\ub958\ub85c \uc2e4\ud328\ud558\uc600\uc2b5\ub2c8\ub2e4."),Object(q.a)(K,W.BAD_CONNECTION,"\ub124\ud2b8\uc6cc\ud06c \uc0c1\ud0dc\uac00 \ubd88\uc548\uc815\ud569\ub2c8\ub2e4. \uc7a0\uc2dc \ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc2ed\uc2dc\uc624."),K);function z(e){return Q.apply(this,arguments)}function Q(){return(Q=Object(F.a)(G.a.mark(function e(t){var n,a,r,o,c,i,s,u,l,p,d,m,O;return G.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.url,a=t.method,r=void 0===a?"GET":a,o=t.contentType,c=void 0===o?"application/x-www-form-urlencoded":o,i=t.data,s=void 0===i?{}:i,e.prev=1,"multipart/form-data"===c||"POST"!==r||(c="application/json",s=JSON.stringify(s)),e.next=6,h.request({url:n,method:r,params:/GET|DELETE/.test(r)?s:"",data:"POST"===r?s:"",headers:{Accept:"application/json","Content-Type":c}});case 6:if(u=e.sent,!(l=u.data).success){e.next=12;break}return e.abrupt("return",{success:!0,content:l.content||null});case 12:return e.abrupt("return",{success:!1,content:l.content||null,code:l.code||"",message:l.message||""});case 13:e.next=24;break;case 15:if(e.prev=15,e.t0=e.catch(1),!e.t0.response){e.next=23;break}return p=e.t0.response,d=p.status,m=p.data,O=404===d?J[W.BAD_CONNECTION]:m.message,/404|500/.test(d),e.abrupt("return",{success:!1,content:null,code:d,message:O});case 23:return e.abrupt("return",{success:!1,content:null,code:W.UNKNOWN_ERROR,message:J[W.UNKNOWN_ERROR]});case 24:case"end":return e.stop()}},e,null,[[1,15]])}))).apply(this,arguments)}var X=function(){var e=Object(F.a)(G.a.mark(function e(t){var n,a,r;return G.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.key,a=t.hashTag,e.next=3,z({url:"/post",method:"GET",data:{key:n,hashTag:a}});case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),Y=G.a.mark($),Z=G.a.mark(ee);function $(e){var t;return G.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(B.b)(function(){return X({key:"koko",hashTag:e.hashTag})});case 2:return t=n.sent,n.next=5,Object(B.d)((r=t.content,{type:a.SET_POST,posts:r}));case 5:case"end":return n.stop()}var r},Y)}function ee(){return G.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(B.a)([Object(B.e)(a.GET_POST,$)]);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},Z)}var te=G.a.mark(ne);function ne(){return G.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(B.a)([Object(B.c)(ee)]);case 2:case"end":return e.stop()}},te)}var ae,re=n(11),oe=n(10),ce=n(12),ie=n(30),se=n(26),ue=(n(116),n(66)),le=n.n(ue),pe=function(e){var t=e.width,n=void 0===t?"auto":t,a=e.height,r=void 0===a?"auto":a;return o.a.createElement(o.a.Fragment,null,o.a.createElement("img",{src:le.a,width:n,height:r}))};n(117),n(118);!function(e){e.HOME="/",e.DISCOVER="/discover"}(ae||(ae={}));var de=function(e){function t(){return Object(s.a)(this,t),Object(re.a)(this,Object(oe.a)(t).apply(this,arguments))}return Object(ce.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.createElement("section",{className:"lnb"},r.createElement("ul",null,r.createElement("li",null,r.createElement(ie.b,{to:ae.HOME,exact:!0,activeClassName:"active"},"Trending")),r.createElement("li",null,r.createElement(ie.b,{to:ae.DISCOVER,exact:!0,activeClassName:"active"},"Discover"))))}}]),t}(r.Component),me=function(e){function t(){return Object(s.a)(this,t),Object(re.a)(this,Object(oe.a)(t).apply(this,arguments))}return Object(ce.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"gnb"},o.a.createElement("div",{className:"logo"},o.a.createElement(pe,null)),o.a.createElement(de,null))}}]),t}(o.a.Component),Oe=function(e){function t(){return Object(s.a)(this,t),Object(re.a)(this,Object(oe.a)(t).apply(this,arguments))}return Object(ce.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.createElement("div",{className:"wrap"},r.createElement(me,null),r.createElement("div",{className:"content"},this.props.children))}}]),t}(r.Component),ve=(n(127),n(68)),he=(n(128),function(e){function t(){return Object(s.a)(this,t),Object(re.a)(this,Object(oe.a)(t).apply(this,arguments))}return Object(ce.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.author,n=e.vendorType;return o.a.createElement("footer",{className:"profile"},o.a.createElement("div",{className:"profile-image"},o.a.createElement("div",null,o.a.createElement("img",{src:t.profileImageUrl})),o.a.createElement("div",{className:"vendor-image"},"TIKTOK"===n&&o.a.createElement("img",{src:"/images/logo_tiktok@3x.png"}),"INSTAGRAM"===n&&o.a.createElement("img",{src:"/images/logo_insta@3x.png"}))),o.a.createElement("div",{className:"profile-desc"},o.a.createElement("div",{className:"profile-name"},t.name),o.a.createElement("div",{className:"post-date"},"2020.02.02")))}}]),t}(o.a.Component)),fe=n(72),Ee=n(81),be=(n(142),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(re.a)(this,(e=Object(oe.a)(t)).call.apply(e,[this].concat(r)))).player=void 0,n.videoNode=void 0,n}return Object(ce.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.videoUrl,a=t.onVideoEnd,r={autoplay:!0,controls:!0,inactivityTimeout:500,poster:t.posterUrl,sources:[{src:n,type:"video/mp4"}],controlBar:{fullscreenToggle:!1}};this.player=Object(Ee.a)(this.videoNode,r,function(){e.player&&(e.player.userActive(!1),e.player.on("ended",function(){a&&a()}))})}},{key:"componentDidUpdate",value:function(e,t,n){this.player&&(this.player.poster(this.props.posterUrl),this.player.src({src:this.props.videoUrl,type:"video/mp4"}))}},{key:"componentWillUnmount",value:function(){this.player&&this.player.dispose()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"".concat(this.props.className," video-koko")},o.a.createElement("div",{"data-vjs-player":!0},o.a.createElement("video",{ref:function(t){return e.videoNode=t},className:"video-js"})))}}]),t}(o.a.Component));function Ne(){var e=Object(ve.a)(["\n            &:before {\n                background-image : ",";\n            }\n        "]);return Ne=function(){return e},e}var je=fe.a.div(Ne(),function(e){return"url(".concat(e.backgroundImage,")")}),ye=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(re.a)(this,Object(oe.a)(t).call(this,e))).handleOnClick=function(){n.props.onClick&&n.props.onClick()},n.onLoadImage=function(){n.setState({onLoad:!0})},n.state={onLoad:!1},n}return Object(ce.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.postType,n=e.title,a=e.vendorType,r=e.content,c=e.author,i=e.videoPlay,s=e.onVideoEnd;this.state.onLoad;return o.a.createElement("div",{className:"post ".concat(t||""),onClick:this.handleOnClick},i?o.a.createElement(be,{className:"post-video",videoUrl:r.videoUrl,posterUrl:r.thumbnailImageUrl,onVideoEnd:s}):o.a.createElement(je,{className:"post-image",backgroundImage:r.thumbnailImageUrl},o.a.createElement("div",{className:"post-image-background"},o.a.createElement("img",{onLoad:this.onLoadImage,src:r.thumbnailImageUrl,alt:n}))),o.a.createElement(he,{author:c,vendorType:a}))}}]),t}(o.a.Component),ge=n(76),Pe=n.n(ge),Te=n(77),ke=n.n(Te),Ce=(n(143),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(re.a)(this,(e=Object(oe.a)(t)).call.apply(e,[this].concat(r)))).handleOnClick=function(){n.props.onClick&&n.props.onClick()},n}return Object(ce.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.type,n=(e.width,e.height,e.className),a=void 0===n?"":n,r=e.hide,c=void 0!==r&&r;return o.a.createElement("div",null,o.a.createElement("button",{className:"arrow arrow-".concat(t," ").concat(c&&"arrow-hide"," ").concat(a),onClick:this.handleOnClick},"prev"===t&&o.a.createElement("img",{src:Pe.a,alt:"prev"}),"next"===t&&o.a.createElement("img",{src:ke.a,alt:"next"})))}}]),t}(o.a.Component)),_e=n(124),Se=function(e){function t(){return Object(s.a)(this,t),Object(re.a)(this,Object(oe.a)(t).apply(this,arguments))}return Object(ce.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=_e.parse(document.location.search).redirect;"/"===document.location.pathname&&e&&this.props.history.push(e),this.props.getPostList()}},{key:"render",value:function(){var e=this.props,t=e.posts,n=e.currentPosition,a=this.props.changePostPosition;return r.createElement("div",{className:"home-post"},t&&t.length>0&&r.createElement(ye,{title:t[n].title,content:t[n].content,author:t[n].author,vendorType:t[n].vendorType}),r.createElement("div",{className:"home-arrow"},r.createElement(Ce,{type:"prev",hide:0===n,onClick:function(){return a(n-1)}}),r.createElement(Ce,{type:"next",hide:n===t.length,onClick:function(){return a(n+1)}})))}}]),t}(r.Component),Re={getPostList:H,changePostPosition:M},Ie=Object(se.e)(Object(f.b)(function(e){return{posts:e.postState.posts,currentPosition:e.postState.currentPosition}},Re)(Se)),we=(n(144),n(78)),De=n.n(we),xe=n(79),Ae=n.n(xe),Ue=(n(145),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(re.a)(this,(e=Object(oe.a)(t)).call.apply(e,[this].concat(r)))).handleOnClick=function(){n.props.onClick&&n.props.onClick()},n}return Object(ce.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("button",{className:"icon-close",onClick:this.handleOnClick},o.a.createElement("img",{src:Ae.a,alt:"close"}))}}]),t}(o.a.Component)),Le={default:5,1200:4,1000:3,794:2},Ve={default:3,1000:2,794:1},Ge=function(e){function t(){return Object(s.a)(this,t),Object(re.a)(this,Object(oe.a)(t).apply(this,arguments))}return Object(ce.a)(t,e),Object(u.a)(t,[{key:"postClick",value:function(e){this.props.changeDiscoverPostOpenState(!0,e)}},{key:"postClose",value:function(){this.props.changeDiscoverPostOpenState(!1)}},{key:"videoEnd",value:function(){var e=this.props,t=e.currentPosition;t!==e.posts.length-1?this.props.changePostPosition(t+1):this.props.changePostPosition(0)}},{key:"componentDidMount",value:function(){var e=this.props,t=e.posts,n=e.getPostList;0===t.length&&n()}},{key:"render",value:function(){var e=this,t=this.props,n=t.posts,a=t.isPostOpen,r=t.currentPosition,c=this.props.changePostPosition;return o.a.createElement("div",{className:"discover-post"},o.a.createElement(De.a,{breakpointCols:a?Ve:Le,className:"discover-post-grid",columnClassName:"grid-column"},n&&n.length>0&&n.map(function(t,n){return o.a.createElement(ye,{key:n,postType:"overlay",title:t.title,content:t.content,author:t.author,vendorType:t.vendorType,onClick:function(){return e.postClick(n)}})})),a&&o.a.createElement("div",{className:"post-detail"},o.a.createElement("div",{className:"post-detail-header"},o.a.createElement(Ue,{onClick:function(){return e.postClose()}}),o.a.createElement("div",{className:"post-detail-arrow"},o.a.createElement(Ce,{type:"prev",hide:0===r,onClick:function(){return c(r-1)}}),o.a.createElement(Ce,{type:"next",hide:r===n.length-1,onClick:function(){return c(r+1)}}))),o.a.createElement(ye,{title:n[r].title,content:n[r].content,author:n[r].author,vendorType:n[r].vendorType,videoPlay:!0,onVideoEnd:function(){return e.videoEnd()}})))}}]),t}(o.a.Component),Be={getPostList:H,changeDiscoverPostOpenState:function(e,t){return{type:a.CHANGE_DISCOVER_POST_OPEN_STATE,isPostOpen:e,position:t}},changePostPosition:M},He=Object(f.b)(function(e){return{posts:e.postState.posts,currentPosition:e.postState.currentPosition,isPostOpen:e.postState.isPostOpen}},Be)(Ge),Me=function(e){function t(){return Object(s.a)(this,t),Object(re.a)(this,Object(oe.a)(t).apply(this,arguments))}return Object(ce.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement(ie.a,null,o.a.createElement(se.c,null,o.a.createElement(Oe,null,o.a.createElement(se.a,{exact:!0,path:ae.HOME,component:Ie}),o.a.createElement(se.a,{exact:!0,path:ae.DISCOVER,component:He}))))}}]),t}(r.Component),Ke=function(){var e=Object(N.composeWithDevTools)({name:"react-boilerplate"});d.default.NODE_ENV.isDevelopment();var t=Object(j.createStore)(L,e(j.applyMiddleware.apply(void 0,Object(b.a)(T))));return P.run(ne),{store:t,persistor:Object(y.b)(t,void 0)}}(),We=Ke.store,Fe=Ke.persistor,qe=function(){return o.a.createElement(f.a,{store:We},o.a.createElement(E.a,{persistor:Fe},o.a.createElement(Me,null)))};i.a.render(o.a.createElement(qe,null),document.getElementById("root"))},21:function(e,t,n){"use strict";n.r(t),n.d(t,"PROFILE",function(){return a}),n.d(t,"NODE_ENV",function(){return r});var a,r,o=n(28);!function(e){e.LOCAL="local",e.DEVELOP="develop",e.PERF="perf",e.PRODUCTION="production"}(a||(a={})),function(e){e.DEVELOPMENT="development",e.PRODUCTION="production"}(r||(r={}));console.log("NODE_ENV :","production"),console.log("PROFILE :","production");var c=n(107)("./".concat("production"));t.default=Object(o.a)({},c,{NODE_ENV:{getValue:function(){return"production"},isDevelopment:function(){return"production"===r.DEVELOPMENT},isProduction:function(){return"production"===r.PRODUCTION}},PROFILE:{getValue:function(){return"production"},isDevelopment:function(){return"production"===a.DEVELOP},isProduction:function(){return"production"===a.PRODUCTION}},ASSET_URL:"locals",PUBLIC_URL:""})},55:function(e){e.exports={BASE_URL:"/",BASE_API_URL:"/"}},56:function(e){e.exports={BASE_URL:"/",BASE_API_URL:"/api"}},57:function(e){e.exports={BASE_URL:"/",BASE_API_URL:"/api"}},66:function(e,t,n){e.exports=n.p+"locals/media/logo.7f619d2b.svg"},76:function(e,t,n){e.exports=n.p+"locals/media/ic-arrow-previous.af88a4c5.svg"},77:function(e,t,n){e.exports=n.p+"locals/media/ic-arrow-next.9b9d6a7d.svg"},79:function(e,t,n){e.exports=n.p+"locals/media/ic-x.54710614.svg"},84:function(e,t,n){e.exports=n(146)}},[[84,1,2]]]);
//# sourceMappingURL=main.44e2933b.chunk.js.map