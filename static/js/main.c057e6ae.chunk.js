(this["webpackJsonpmuseable-react"]=this["webpackJsonpmuseable-react"]||[]).push([[1],{117:function(t,e,n){t.exports=n(196)},129:function(t,e,n){},195:function(t,e,n){},196:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(27),o=n.n(c),i=n(17),u=n(8),s=n(78),l=n(11),b=n(76),m=n(77),p=n(65),f=n(20),d=n(12),h=n(32),y={artist:{name:"",stats:{listeners:"",playcount:""},similar:{artist:[{name:""}]},bio:{summary:""}},blank:null,topTracks:{toptracks:{track:[{name:"",url:"",playcount:"",listeners:""}]}},topAlbums:{topalbums:{album:[{name:"",url:"",playcount:""}]}}};function v(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case h.a:return Object(d.a)(Object(d.a)({},t),{},{artist:e.payload});case h.c:return Object(d.a)(Object(d.a)({},t),{},{topTracks:e.payload});case h.b:return Object(d.a)(Object(d.a)({},t),{},{topAlbums:e.payload});default:return t}}var j=n(23),O=(n(129),n(28)),E=n(51),k=n.n(E),g=n(22),w=n.n(g),A=n(200);function _(t){var e=t.isActive,n=void 0!==e&&e,a=t.className,c=t.children,o=w()(a,Object(O.a)({},k.a.wrapper,n));return r.a.createElement("div",{className:o},n&&r.a.createElement("div",{className:k.a.loaderContainer},r.a.createElement(A.a,{conten:"Loading",active:!0,inverted:!0,size:"huge"})),c)}var S=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,346))})),T=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,344))})),R="/museable/",C="/artist";n(195),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var B,I,N=Object(u.a)({basename:"/"}),P=function(t,e){var n=[null,b.a,Object(p.a)(e)].filter(Boolean);return Object(l.createStore)(function(t){var e={artist:v,router:Object(f.b)(t)};return Object(l.combineReducers)(e)}(e),t,Object(m.composeWithDevTools)(l.applyMiddleware.apply(void 0,Object(s.a)(n))))}({},N),x=document.getElementById("root");B=function(t){return r.a.createElement(f.a,{history:t.history},r.a.createElement(a.Suspense,{fallback:r.a.createElement(_,{isActive:!0})},r.a.createElement(j.c,null,r.a.createElement(j.a,{exact:!0,path:R,component:S}),r.a.createElement(j.a,{exact:!0,path:"".concat(C,"/:artist"),component:T}))))},I=x,o.a.render(r.a.createElement(i.a,{store:P},r.a.createElement(B,{history:N,dispatch:P.dispatch})),I),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},32:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"b",(function(){return c})),n.d(e,"d",(function(){return i})),n.d(e,"f",(function(){return u})),n.d(e,"e",(function(){return s}));var a="SEARCH_ARTIST_INFO",r="SEARCH_TOP_TRACKS",c="SEARCH_TOP_ALBUMS",o="https://ws.audioscrobbler.com/2.0/?method=artist",i=function(t){return function(e){fetch("".concat(o,".getInfo&artist=").concat(t,"&api_key=130ae9b7414a48be61355c187bac5b57&format=json")).then((function(t){return t.json()})).then((function(t){return e({type:a,payload:t.artist})}))}},u=function(t){return function(e){fetch("".concat(o,".gettoptracks&artist=").concat(t,"&api_key=130ae9b7414a48be61355c187bac5b57&format=json")).then((function(t){return t.json()})).then((function(t){return e({type:r,payload:t})}))}},s=function(t){return function(e){fetch("".concat(o,".gettopalbums&artist=").concat(t,"&api_key=130ae9b7414a48be61355c187bac5b57&format=json")).then((function(t){return t.json()})).then((function(t){return e({type:c,payload:t})}))}}},51:function(t,e,n){}},[[117,2,3]]]);
//# sourceMappingURL=main.c057e6ae.chunk.js.map