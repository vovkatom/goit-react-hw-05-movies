"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[387],{3387:function(n,t,r){r.r(t),r.d(t,{default:function(){return g}});var e,a,c=r(5861),u=r(9439),i=r(7757),s=r.n(i),o=r(2791),p=r(7689),f=r(1022),d=r(168),h=r(6444),v=h.ZP.ul(e||(e=(0,d.Z)(["\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  margin-bottom: 20px;\n\n  @media screen and (max-width: 768px) {\n    grid-template-columns: repeat(1, 1fr);\n    margin: 40px;\n  }\n"]))),l=h.ZP.li(a||(a=(0,d.Z)(["\n  //margin-top: 20px;\n  img {\n    border-radius: 5px;\n  }\n"]))),m=r(5353),x=r(184),g=function(){var n=(0,p.UO)().movieId,t=(0,o.useState)([]),r=(0,u.Z)(t,2),e=r[0],a=r[1];return(0,o.useEffect)((function(){var t=function(){var t=(0,c.Z)(s().mark((function t(){var r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,f.uV)(n);case 3:r=t.sent,a(r),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[n]),(0,x.jsxs)(x.Fragment,{children:[0!==e.length&&(0,x.jsxs)("div",{children:[(0,x.jsx)("h2",{children:"Movie Cast"}),(0,x.jsx)(v,{children:e.map((function(n){return(0,x.jsxs)(l,{children:[(0,x.jsx)("img",{width:"200px",height:"300px",src:n.profile_path?"https://image.tmdb.org/t/p/w300".concat(n.profile_path):"".concat(m),alt:n.original_name}),(0,x.jsx)("p",{children:n.name})]},n.id)}))})]}),0===e.length&&(0,x.jsx)("div",{children:"We don't have any cast for this movie."})]})}},1022:function(n,t,r){r.d(t,{Hx:function(){return d},Y5:function(){return o},o1:function(){return p},uV:function(){return f},wr:function(){return s}});var e=r(5861),a=r(7757),c=r.n(a),u=r(1243);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var i={params:{api_key:"a4e0e6c94492c515df52f4a6ebcc54c7",language:"en-US"}},s=function(){var n=(0,e.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("trending/movie/day",i);case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t),i);case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/search/movie?query=".concat(t),i);case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"/credits?"),i);case 2:return r=n.sent,n.abrupt("return",r.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"/reviews?"),i);case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},5353:function(n,t,r){n.exports=r.p+"static/media/placeholder.766050a83a9c288363de.png"}}]);
//# sourceMappingURL=387.29d40636.chunk.js.map