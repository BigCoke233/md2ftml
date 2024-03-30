/*! For license information please see 684.4e6bb340.js.LICENSE.txt */
(self.webpackChunk_md2ftml_spa=self.webpackChunk_md2ftml_spa||[]).push([["684"],{12403:function(r,t,n){"use strict";n.r(t),n.d(t,{createAsyncPipeline:function(){return d},createManager:function(){return D},createPipeline:function(){return l},createWaterfall:function(){return y}});var e=n("83316"),o=n("9161"),u=n("6462"),i=n("16044"),a=n("19337"),c=function(r){var t=function(n,e){return r(n,e,function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;return t(n+1,r)})};return{start:function(r){return t(0,r)},dispatch:t}},f=Symbol.for("MODERN_PIPELINE"),s=function(r){if("function"==typeof r)return r;if(r&&"function"==typeof r.middleware)return r.middleware;throw Error("".concat(r," is not a Middleware"))},l=function(){var r,t=[],n=function(r){return c(function(n,e,o){if(n>=t.length){if(r)return r(e);throw Error("Expect returning a value, but all middlewares just calling next()")}return t[n](e,o)})},o=n(),i=function(r,t){var e;return((e=t)?n(null==e?void 0:e.onLast):o).start(r)},a=(r={},(0,e._)(r,f,!0),(0,e._)(r,"use",function(){for(var r=arguments.length,n=Array(r),e=0;e<r;e++)n[e]=arguments[e];return t.push.apply(t,(0,u._)(n.map(s))),a}),(0,e._)(r,"run",i),(0,e._)(r,"middleware",function(r,t){return i(r,{onLast:t})}),r);return a},d=function(){var r=l();return(0,o._)({},r)},p=Symbol.for("MODERN_WATERFALL"),v=function(r){if("function"==typeof r)return r;if(r&&"function"==typeof r.middleware)return r.middleware;throw Error("".concat(r," is not a Brook or { brook: Brook }"))},y=function(){var r=l(),t=(0,i._)((0,o._)({},r),(0,e._)({use:function(){for(var n=arguments.length,e=Array(n),o=0;o<n;o++)e[o]=arguments[o];return r.use.apply(r,(0,u._)(e.map(v).map(m))),t},run:function(t,n){return r.run(t,(0,i._)((0,o._)({},n),{onLast:function(r){return r}}))},middleware:function(t){return r.run(t,{onLast:function(r){return r}})}},p,!0));return t},m=function(r){return function(t,n){return n(r(t))}},_=Symbol.for("MODERN_ASYNC_WATERFALL"),h=function(r){if("function"==typeof r)return r;if(r&&"function"==typeof r.middleware)return r.middleware;throw Error("".concat(r," is not a AsyncBrook or { brook: AsyncBrook }"))},g=function(){var r=d(),t=(0,i._)((0,o._)({},r),(0,e._)({use:function(){for(var n=arguments.length,e=Array(n),o=0;o<n;o++)e[o]=arguments[o];return r.use.apply(r,(0,u._)(e.map(h).map(b))),t},run:function(t,n){return r.run(t,(0,i._)((0,o._)({},n),{onLast:function(r){return r}}))},middleware:function(t){return r.run(t,{onLast:function(r){return r}})}},_,!0));return t},b=function(r){return function(t,n){return Promise.resolve(r(t)).then(function(r){return n(r)})}},w=Symbol.for("MODERN_WORKFLOW"),R=function(){var r=l(),t=(0,i._)((0,o._)({},r),(0,e._)({use:function(){for(var n=arguments.length,e=Array(n),o=0;o<n;o++)e[o]=arguments[o];return r.use.apply(r,(0,u._)(e.map(E))),t},run:function(t){return r.run(t,{onLast:function(){return[]}}).filter(Boolean)}},w,!0));return t},E=function(r){return function(t,n){return[r(t)].concat((0,u._)(n(t)))}},x=Symbol.for("MODERN_PARALLEL_WORKFLOW"),O=function(){var r=l(),t=(0,i._)((0,o._)({},r),(0,e._)({run:function(t){return Promise.all(r.run(t,{onLast:function(){return[]}})).then(function(r){return r.filter(Boolean)})},use:function(){for(var n=arguments.length,e=Array(n),o=0;o<n;o++)e[o]=arguments[o];return r.use.apply(r,(0,u._)(e.map(S))),t}},x,!0));return t},S=function(r){return function(t,n){return[r(t)].concat((0,u._)(n(t)))}},j=Symbol.for("MODERN_ASYNC_WORKFLOW"),P=function(){var r=d(),t=(0,i._)((0,o._)({},r),(0,e._)({use:function(){for(var n=arguments.length,e=Array(n),o=0;o<n;o++)e[o]=arguments[o];return r.use.apply(r,(0,u._)(e.map(A))),t},run:function(t){var n,e=r.run(t,{onLast:function(){return[]}});return(n=e)&&"function"==typeof n.then?e.then(function(r){return r.filter(Boolean)}):e.filter(Boolean)}},j,!0));return t},A=function(r){return function(t,n){return Promise.resolve(r(t)).then(function(r){return Promise.resolve(n(t)).then(function(t){return[r].concat((0,u._)(t))})})}},M=function(r){},L=function(r){return null!==r&&"object"==typeof r},k="SYNC_PLUGIN_SYMBOL",C={name:"untitled",pre:[],post:[],rivals:[],required:[],usePlugins:[],registerHook:{}},D=function(r,t){var n,e=0,u=(0,o._)({},r),c=function(){return n},f=function(r){u=(0,o._)({},r,u)},s=function(r){var t,n;return L(r)&&(t=r,n=k,t.hasOwnProperty(n))&&r[k]===k},l=(0,i._)((0,o._)({},t),{useHookRunners:c}),d=function(r){var t=[],p=function(r){var n,e;if(n=t,e=r,!n.some(function(r){return r.name===e.name}))t.push((0,o._)({},r))},v=function(){for(var r=arguments.length,t=Array(r),n=0;n<r;n++)t[n]=arguments[n];return t.forEach(function(r){if(s(r))p(r);else if("function"==typeof r){var t=r();p(y(t.setup,t))}else L(r)&&p(y(r.setup,r))}),m},y=function(){var r,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(null===(r=n.usePlugins)||void 0===r?void 0:r.length)&&n.usePlugins.forEach(function(r){v(y(r.setup,r))}),n.registerHook&&f(n.registerHook),(0,i._)((0,o._)((0,i._)((0,o._)({},C),{name:"No.".concat(e++," plugin")}),n),{SYNC_PLUGIN_SYMBOL:k,setup:t})},m={createPlugin:y,isPlugin:s,usePlugin:v,init:function(){var e,i=(e=t,(0,a.pluginDagSort)(e.slice())),c=(0,o._)({},l,r);return M(i),n=N(i.map(function(r){return r.setup(c)}),u)},clear:function(){t=[]},run:function(r){return r()},registerHook:f,useRunner:c,clone:d};return m};return d()},N=function(r,t){var n={},e=$(t);if(t){var u=function(t){r.forEach(function(r){(null==r?void 0:r[t])&&e[t].use(r[t])}),n[t]=function(r,n){return e[t].run(r,(0,o._)({},n))}};for(var i in e)u(i)}return n},T=function(r){var t,n,e,o,u,i;if(null==(t=r)?void 0:t[p])return y();if(null==(n=r)?void 0:n[_])return g();if(null==(e=r)?void 0:e[w])return R();if(null==(o=r)?void 0:o[j])return P();if(null==(u=r)?void 0:u[x])return O();if(null==(i=r)?void 0:i[f])return l();throw Error("Unknown hook: ".concat(r))},$=function(r){if(!r)return r;var t={};for(var n in r)t[n]=T(r[n]);return t}},39624:function(r,t,n){"use strict";n.r(t);var e=n("29246");n.es(e,t)},29246:function(r,t,n){"use strict";n.r(t),n.d(t,{renderNestedRoute:function(){return d}});var e=n("92769"),o=n("9161"),u=n("16044"),i=n("66153"),a=n("97458"),c=n("52983"),f=n("80534"),s=n("95467"),l=n("61174"),d=function(r){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},v=r.children,y=r.index,m=r.id,_=r.component,h=r.isRoot,g=r.lazyImport,b=r.config,w=r.handle,R=n.parent,E=n.DeferredDataComponent,x=n.props,O=void 0===x?{}:x,S=n.reporter,j={caseSensitive:r.caseSensitive,path:r.path,id:r.id,loader:function(r,t){var n,o=r.loader;if(!o)return function(){return"function"==typeof r.lazyImport&&r.lazyImport(),null};return n=(0,e._)(function(n){var e,u,a;return(0,i._)(this,function(i){switch(i.label){case 0:return"function"==typeof r.lazyImport&&r.lazyImport(),e=(0,l.time)(),[4,o(n)];case 1:return u=i.sent(),a=e(),"undefined"==typeof document&&t&&(null==t||t.reportTiming("".concat(s.LOADER_REPORTER_NAME,"-").concat(r.id),a)),[2,u]}})}),function(r){return n.apply(this,arguments)}}(r,S),action:r.action,hasErrorBoundary:r.hasErrorBoundary,shouldRevalidate:r.shouldRevalidate,handle:(0,o._)({},w,"object"==typeof b?null==b?void 0:b.handle:{}),index:r.index,element:r.element,errorElement:r.errorElement};if(r.error){var P=(0,a.jsx)(r.error,{});j.errorElement=P}if(_){if((null==R?void 0:R.loading)&&g){var A=R.loading;t=p(_)?(0,a.jsx)(_,{fallback:(0,a.jsx)(A,{})}):(0,a.jsx)(c.Suspense,{fallback:(0,a.jsx)(A,{}),children:(0,a.jsx)(_,{})})}else t=p(_)&&g?(0,a.jsx)(_,{}):h?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(_,(0,o._)({},O)),"undefined"==typeof document&&E&&(0,a.jsx)(E,{nonce:null==O?void 0:O.nonce})]}):g?(0,a.jsx)(c.Suspense,{fallback:null,children:(0,a.jsx)(_,{})}):(0,a.jsx)(_,{})}else r.loading=null==R?void 0:R.loading,j.element=(0,a.jsx)(f.Outlet,{});t&&(j.element=t);var M=null==v?void 0:v.map(function(t){return d(t,{parent:r,reporter:S})});return y?(0,a.jsx)(f.Route,(0,u._)((0,o._)({},j),{index:!0}),m):(0,a.jsx)(f.Route,(0,u._)((0,o._)({},j),{index:!1,children:M}),m)};function p(r){return r&&"Loadable"===r.displayName&&r.preload&&"function"==typeof r.preload}},41606:function(r,t,n){"use strict";n.r(t),n.d(t,{parsedJSONFromElement:function(){return e}});var e=function(r){var t=document.querySelectorAll("#".concat(r));if(0!==t.length){var n=t[t.length-1];if(n)try{return JSON.parse((null==n?void 0:n.textContent)||"")}catch(t){console.error("parse ".concat(r," error"),t)}}}},38840:function(r,t,n){"use strict";n.r(t);var e=n("81607");n.es(e,t)},96036:function(r,t,n){"use strict";n.r(t);var e=n("80534");n.es(e,t)},61174:function(r,t,n){"use strict";n.r(t),n.d(t,{time:function(){return i}});var e=n("40509");function o(r){var t=.001*new Date().getTime(),n=Math.floor(t),e=Math.floor(t%1*1e9);return r&&(n-=r[0],(e-=r[1])<0&&(n--,e+=1e9)),[n,e]}var u=function(r){var t=(0,e._)(o(r),2);return 1e3*t[0]+t[1]/1e6},i=function(){var r=o();return function(){return u(r)}}},64210:function(r,t,n){"use strict";n.r(t),n.d(t,{bootstrap:function(){return R},createApp:function(){return w}});var e,o=n("92769"),u=n("94721"),i=n("9161"),a=n("89334"),c=n("6462"),f=n("66153"),s=n("97458"),l=n("52983"),d=n.n(l),p=n("10063"),v=n.n(p),y=n("95467"),m=n("50099"),_=n("91633"),h=n("62704"),g=new WeakMap,b=function(r){return{loaderManager:(0,h.createLoaderManager)({}),runner:r,isBrowser:!0,routeManifest:"undefined"!=typeof window&&window[y.ROUTE_MANIFEST]}},w=function(r){var t=r.plugins,n=r.props,e=_.runtime.clone();return e.usePlugin.apply(e,(0,c._)(t)),function(r){var t=e.init(),o=function(n){var e,o=d().createElement(r||d().Fragment,r?(0,i._)({},n):null,r?n.children:d().cloneElement(n.children,(0,i._)({},null===(e=n.children)||void 0===e?void 0:e.props,n))),u=(0,l.useContext)(m.RuntimeReactContext);return t.provide({element:o,props:(0,i._)({},n),context:u},{onLast:function(r){return r.element}})};r&&v()(o,r);var u=t.hoc({App:o},{onLast:function(r){var e=r.App;return v()(function(r){var o=r.context,u=(0,a._)(r,["context"]),c=o;!(null==c?void 0:c.runner)&&(c=b(t),t.init({context:c},{onLast:function(r){var t,n=r.context;return null==e?void 0:null===(t=e.init)||void 0===t?void 0:t.call(e,n)}}));var f=(0,i._)({},u,n);return(0,s.jsx)(m.RuntimeReactContext.Provider,{value:c,children:(0,s.jsx)(e,(0,i._)({},f))})},e)}});return g.set(u,t),u}};var R=(e=(0,o._)(function(r,t,n,e){var o,a,c,s,l,p,v,y,m,_,R,E,x,O,S;return(0,f._)(this,function(f){switch(f.label){case 0:var j;if(o=r,!(a=g.get(o))&&(o=w({plugins:[]})(o),a=g.get(o)),c=b(a),s=function(r){return a.init({context:r},{onLast:function(r){var t,n=r.context;return null==o?void 0:null===(t=o.init)||void 0===t?void 0:t.call(o,n)}})},!t)return[2,d().createElement(o,{context:c})];if(!("undefined"!=typeof window&&"nodejs"!==window.name))return[3,4];if(!("string"==typeof(j=t)||"undefined"!=typeof HTMLElement&&(0,u._)(j,HTMLElement)))return[3,2];return m=Object.keys(y=(null==(v=window._SSR_DATA)?void 0:null===(l=v.data)||void 0===l?void 0:l.loadersData)||{}).reduce(function(r,t){var n=y[t];return!1!==n.loading?r:(r[t]=n,r)},{}),Object.assign(c,(0,i._)({loaderManager:(0,h.createLoaderManager)(m,{skipStatic:!0})},v?{ssrContext:null==v?void 0:v.context}:{})),c.initialData=null==v?void 0:null===(p=v.data)||void 0===p?void 0:p.initialData,[4,s(c)];case 1:if((_=f.sent())&&(c.initialData=_),R="string"!=typeof t?t:document.getElementById(t||"root"),!e)throw Error("The `bootstrap` need provide `ReactDOM` parameter");return E=function(r){if(n)n.render(r);else if(e.createRoot)e.createRoot(R).render(r);else throw Error("The `bootstrap` `ReactDOM` parameter needs to provide the `createRoot` method")},x=function(r,t){if(!e.hydrateRoot)throw Error("The `bootstrap` `ReactDOM` parameter needs to provide the `hydrateRoot` method");e.hydrateRoot(R,r)},[2,a.client({App:o,context:c,ModernRender:E,ModernHydrate:x},{onLast:function(r){var t=r.App;E(d().createElement(t,{context:c}))}})];case 2:throw Error("`bootstrap` needs id in browser environment, it needs to be string or element");case 3:return[3,6];case 4:return Object.assign(c,{ssrContext:t,isBrowser:!1,loaderManager:(0,h.createLoaderManager)({},{skipNonStatic:t.staticGenerate,skipStatic:!t.staticGenerate})}),O=function(r){if("undefined"!=typeof Response&&(0,u._)(r,Response)&&r.status>=300&&r.status<=399){var t=r.status,n=r.headers.get("Location")||"/",e=c.ssrContext;return e&&(e.res.statusCode=t,e.res.setHeader("Location",n),e.redirection=e.redirection||{},e.redirection.status=t,e.redirection.url=n),!0}return!1},[4,s(c)];case 5:if(S=f.sent(),!O(S))return c.initialData=S,[2,a.server({App:o,context:c})];f.label=6;case 6:return[2]}})}),function(r,t,n,o){return e.apply(this,arguments)})},78549:function(r,t,n){"use strict";n.r(t),n.d(t,{RuntimeReactContext:function(){return o.RuntimeReactContext}});var e=n("64210");n.es(e,t);var o=n("50099"),u=n("12403");n.es(u,t)},62704:function(r,t,n){"use strict";n.r(t),n.d(t,{createLoaderManager:function(){return v}});var e,o,u=n("92769"),i=n("94721"),a=n("40509"),c=n("6462"),f=n("66153"),s=n("21700"),l=n.n(s),d=function(){var r=new Map;return function(t){var n=r.get(t);if(n)return n;var e=JSON.stringify(t);return l()(e,"params should be not null value"),r.set(t,e),e}};(e=o||(o={}))[e.idle=0]="idle",e[e.loading=1]="loading",e[e.fulfilled=2]="fulfilled",e[e.rejected=3]="rejected";var p=function(r){var t,n,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{loading:!1,reloading:!1,data:void 0,error:void 0},o=arguments.length>2?arguments[2]:void 0,a=arguments.length>3&&void 0!==arguments[3]&&arguments[3],s=0,l=e.data,d=e.error,p=!1,v=new Set;var y=(t=(0,u._)(function(){return(0,f._)(this,function(r){return a||1===s?[2,n]:(s=1,_(),[2,n=o().then(function(r){l=r,d=null,s=2}).catch(function(r){d=r,l=null,s=3}).finally(function(){n=null,p=!0,_()})])})}),function(){return t.apply(this,arguments)}),m=function(){return{loading:!p&&1===s,reloading:p&&1===s,data:l,error:(0,i._)(d,Error)?"".concat(d.message):d,_error:d}},_=function(){(0,c._)(v).forEach(function(r){r(s,m())})};return{get result(){return m()},get promise(){return n},onChange:function(r){return v.add(r),function(){v.delete(r)}},load:y}},v=function(r){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=n.skipStatic,o=void 0!==e&&e,c=n.skipNonStatic,s=void 0!==c&&c,l=new Map,v=d();return{hasPendingLoaders:function(){var r=!0,t=!1,n=void 0;try{for(var e,o=l.values()[Symbol.iterator]();!(r=(e=o.next()).done);r=!0){var u=e.value.promise;if((0,i._)(u,Promise))return!0}}catch(r){t=!0,n=r}finally{try{!r&&null!=o.return&&o.return()}finally{if(t)throw n}}return!1},awaitPendingLoaders:(t=(0,u._)(function(){var r,t,n,e,o,u,c,s,d,p;return(0,f._)(this,function(f){switch(f.label){case 0:r=[],t=!0,n=!1,e=void 0;try{for(o=l[Symbol.iterator]();!(t=(u=o.next()).done);t=!0)s=(c=(0,a._)(u.value,2))[0],p=(d=c[1]).promise,(0,i._)(p,Promise)&&r.push([s,d])}catch(r){n=!0,e=r}finally{try{!t&&null!=o.return&&o.return()}finally{if(n)throw e}}return[4,Promise.all(r.map(function(r){return r[1].promise}))];case 1:return f.sent(),[2,r.reduce(function(r,t){var n=(0,a._)(t,2),e=n[0],o=n[1];return r[e]=o.result,r},{})]}})}),function(){return t.apply(this,arguments)}),add:function(t,n){var e=v(n.params),u=l.get(e),i=n._cache;if(!u||!1===i){var a=s&&!n.static,c=o&&n.static;u=p(e,void 0!==r[e]?r[e]:{data:n.initialData},t,a||c),l.set(e,u)}return e},get:function(r){return l.get(r)}}}},91633:function(r,t,n){"use strict";n.r(t),n.d(t,{runtime:function(){return s}});var e=n("12403"),o=(0,e.createPipeline)(),u=(0,e.createPipeline)(),i=(0,e.createAsyncPipeline)(),a=(0,e.createAsyncPipeline)(),c=(0,e.createAsyncPipeline)(),f={hoc:o,provide:u,client:i,server:a,init:c,pickContext:(0,e.createPipeline)()},s=(0,e.createManager)(f);s.createPlugin},32326:function(r,t,n){"use strict";n.r(t),n.d(t,{bootstrap:function(){return e.bootstrap},createApp:function(){return e.createApp}});var e=n("78549")},86579:function(r,t,n){"use strict";n.r(t),n.d(t,{default:function(){return e.default}});var e=n("98620");n.es(e,t)},98190:function(r,t,n){"use strict";n.r(t),n.d(t,{DefaultNotFound:function(){return o}});var e=n("97458"),o=function(){return(0,e.jsx)("div",{style:{margin:"150px auto",textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center"},children:"404"})}},96482:function(r,t,n){"use strict";function e(){return null}n.r(t),n.d(t,{default:function(){return e}})},87189:function(r,t,n){"use strict";n.r(t),n.d(t,{modifyRoutes:function(){return e}});var e=(0,n("12403").createWaterfall)()},98620:function(r,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i},handleRouteModule:function(){return u.handleRouteModule},handleRouteModuleError:function(){return u.handleRouteModuleError}});var e=n("38724"),o=n("96036");n.es(o,t);var u=n("27417"),i=e.routerPlugin},38724:function(r,t,n){"use strict";n.r(t),n.d(t,{routerPlugin:function(){return _}});var e=n("9161"),o=n("16044"),u=n("6462"),i=n("97458"),a=n("52983"),c=n("96036"),f=n("10063"),s=n.n(f),l=n("41606"),d=n("78549"),p=n("87189"),v=n("13785"),y={routes:[]},m=!0,_=function(r){var t=r.serverBase,n=void 0===t?[]:t,f=r.supportHtml5History,m=void 0===f||f,_=r.basename,h=void 0===_?"":_,g=r.routesConfig,b=r.createRoutes,w=[];return y=g,window._SERVER_DATA=(0,l.parsedJSONFromElement)("__MODERN_SERVER_DATA__"),{name:"@modern-js/plugin-router",registerHook:{modifyRoutes:p.modifyRoutes},setup:function(r){return{init:function(r,t){var n=r.context;return n.router={useMatches:c.useMatches,useLocation:c.useLocation,useHref:c.useHref},Object.defineProperty(n,"routes",{get:function(){return w}}),t({context:n})},hoc:function(t,f){var l,p=t.App;if(!y&&!b)return f({App:p});var _=(l=function(t){var i,f,s=(null===(f=window._SERVER_DATA)||void 0===f?void 0:f.router.baseUrl)||(i=location.pathname,n.find(function(r){return 0===i.search(r)})||"/"),l="/"===s?(0,v.urlJoin)(s,h):s,p=window._ROUTER_DATA,_=(0,a.useContext)(d.RuntimeReactContext),g=_.unstable_getBlockNavState;return(0,a.useMemo)(function(){(null==p?void 0:p.errors)&&(p=(0,o._)((0,e._)({},p),{errors:(0,v.deserializeErrors)(p.errors)})),w=b?b():(0,c.createRoutesFromElements)((0,v.renderRoutes)({routesConfig:y,props:t})),w=r.useHookRunners().modifyRoutes(w);var n=m?(0,c.createBrowserRouter)(w,{basename:l,hydrationData:p}):(0,c.createHashRouter)(w,{basename:l,hydrationData:p}),i=n.subscribe;return n.subscribe=function(r){return i(function(){for(var t=arguments.length,n=Array(t),e=0;e<t;e++)n[e]=arguments[e];if(!(g&&g()))return r.apply(void 0,(0,u._)(n))})},Object.defineProperty(_,"remixRouter",{get:function(){return n},configurable:!0}),n},[y,t,l,p,g])},function(r){var t=l(r);return(0,i.jsx)(p,(0,o._)((0,e._)({},r),{children:(0,i.jsx)(c.RouterProvider,{router:t})}))});return(p&&(_=s()(_,p)),null==g?void 0:g.globalApp)?f({App:s()(_,g.globalApp)}):f({App:_})},pickContext:function(r,t){var n=r.context,u=r.pickedContext,i=n.remixRouter;if(!i)return t({context:n,pickedContext:u});var a={navigate:i.navigate,get location(){return i.state.location}};return t({context:n,pickedContext:(0,o._)((0,e._)({},u),{router:a})})}}}}}},27417:function(r,t,n){"use strict";n.r(t),n.d(t,{handleRouteModule:function(){return o},handleRouteModuleError:function(){return u}});var e=n("95467"),o=function(r,t){return"undefined"!=typeof document&&(window[e.ROUTE_MODULES][t]=r),r},u=function(r){return console.error(r),null}},13785:function(r,t,n){"use strict";n.r(t),n.d(t,{deserializeErrors:function(){return v},renderRoutes:function(){return d},urlJoin:function(){return p}});var e=n("9161"),o=n("89334"),u=n("40509"),i=n("97458"),a=n("96036"),c=n("38840"),f=n("39624"),s=n("98190"),l=n("96482");function d(r){var t=r.routesConfig,n=r.props,u=r.ssrMode,c=r.reporter;if(!t)return null;var d=t.routes,p=t.globalApp;return d?function(r,t){var n=t.globalApp,u=t.ssrMode,c=t.props,d=t.reporter,p=function(r){var t=r.Component,u=(0,o._)(r,["Component"]);return n?(0,i.jsx)(n,(0,e._)({Component:t},u)):(0,i.jsx)(t,(0,e._)({},u))},v=[],y=!0,m=!1,_=void 0;try{for(var h,g=r[Symbol.iterator]();!(y=(h=g.next()).done);y=!0){var b=h.value;if("nested"===b.type){var w=(0,f.renderNestedRoute)(b,{DeferredDataComponent:"stream"===u?l.default:void 0,props:c,reporter:d});v.push(w)}else{var R=(0,i.jsx)(a.Route,{path:b.path,element:(0,i.jsx)(p,{Component:b.component})},b.path);v.push(R)}}}catch(r){m=!0,_=r}finally{try{!y&&null!=g.return&&g.return()}finally{if(m)throw _}}return v.push((0,i.jsx)(a.Route,{path:"*",element:(0,i.jsx)(s.DefaultNotFound,{})},"*")),v}(d,{globalApp:p,ssrMode:u,props:n,reporter:c}):null}var p=function(){for(var r=arguments.length,t=Array(r),n=0;n<r;n++)t[n]=arguments[n];var e=RegExp("".concat("/","{1,}"),"g");return function(r){var t=r;return t&&"string"==typeof t?(t.startsWith(".")&&(t=t.slice(1)),!t.startsWith("/")&&(t="/".concat(t)),t.endsWith("/")&&"/"!==t&&(t=t.slice(0,t.length-1)),t):t}(t.join("/").replace(e,"/"))};function v(r){if(!r)return null;var t=Object.entries(r),n={},e=!0,o=!1,i=void 0;try{for(var a,f=t[Symbol.iterator]();!(e=(a=f.next()).done);e=!0){var s=(0,u._)(a.value,2),l=s[0],d=s[1];if(d&&"RouteErrorResponse"===d.__type)n[l]=new c.UNSAFE_ErrorResponseImpl(d.status,d.statusText,d.data,!0===d.internal);else if(d&&"Error"===d.__type){var p=Error(d.message);p.stack=d.stack,n[l]=p}else n[l]=d}}catch(r){o=!0,i=r}finally{try{!e&&null!=f.return&&f.return()}finally{if(o)throw i}}return n}},50099:function(r,t,n){"use strict";n.r(t),n.d(t,{RuntimeReactContext:function(){return o}});var e=n("52983"),o=(0,e.createContext)({});(0,e.createContext)({})},95467:function(r,t,n){"use strict";n.r(t),n.d(t,{LOADER_REPORTER_NAME:function(){return u},ROUTE_MANIFEST:function(){return e},ROUTE_MODULES:function(){return o}});var e="_MODERNJS_ROUTE_MANIFEST",o="_routeModules",u="server-loader"},19337:function(r,t,n){"use strict";n.r(t),n.d(t,{pluginDagSort:function(){return e}});var e=function(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"name",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"pre",e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"post",o=function(n){var e=r.find(function(r){return"string"==typeof n?r[t]===n:r[t]===n[t]});if(!e)throw Error("plugin ".concat(n," not existed"));return e},u=[];r.forEach(function(i){var a,c;null===(a=i[n])||void 0===a||a.forEach(function(n){r.find(function(r){return r.name===n})&&u.push([o(n)[t],o(i)[t]])}),null===(c=i[e])||void 0===c||c.forEach(function(n){r.find(function(r){return r.name===n})&&u.push([o(i)[t],o(n)[t]])})});for(var i=r.filter(function(r){return!u.find(function(n){return n[1]===r[t]})}),a=[];i.length;)!function(){var n=i.shift();a.push(o(n)),u=u.filter(function(r){return r[0]!==o(n)[t]}),i=r.filter(function(r){return!a.find(function(n){return n[t]===r[t]})}).filter(function(r){return!u.find(function(n){return n[1]===r[t]})})}();if(u.length){var c={};throw u.forEach(function(r){c[r[0]]=!0,c[r[1]]=!0}),Error("plugins dependencies has loop: ".concat(Object.keys(c).join(",")))}return a}},10063:function(r,t,n){"use strict";var e=n("99415"),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},u={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},a={};function c(r){return e.isMemo(r)?i:a[r.$$typeof]||o}a[e.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},a[e.Memo]=i;var f=Object.defineProperty,s=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,v=Object.prototype;r.exports=function r(t,n,e){if("string"!=typeof n){if(v){var o=p(n);o&&o!==v&&r(t,o,e)}var i=s(n);l&&(i=i.concat(l(n)));for(var a=c(t),y=c(n),m=0;m<i.length;++m){var _=i[m];if(!u[_]&&!(e&&e[_])&&!(y&&y[_])&&!(a&&a[_])){var h=d(n,_);try{f(t,_,h)}catch(r){}}}}return t}},21700:function(r){"use strict";r.exports=function(r,t,n,e,o,u,i,a){if(!r){var c;if(void 0===t)c=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var f=[n,e,o,u,i,a],s=0;(c=Error(t.replace(/%s/g,function(){return f[s++]}))).name="Invariant Violation"}throw c.framesToPop=1,c}}},4507:function(r,t){"use strict";var n="function"==typeof Symbol&&Symbol.for,e=n?Symbol.for("react.element"):60103,o=n?Symbol.for("react.portal"):60106,u=n?Symbol.for("react.fragment"):60107,i=n?Symbol.for("react.strict_mode"):60108,a=n?Symbol.for("react.profiler"):60114,c=n?Symbol.for("react.provider"):60109,f=n?Symbol.for("react.context"):60110,s=n?Symbol.for("react.async_mode"):60111,l=n?Symbol.for("react.concurrent_mode"):60111,d=n?Symbol.for("react.forward_ref"):60112,p=n?Symbol.for("react.suspense"):60113,v=n?Symbol.for("react.suspense_list"):60120,y=n?Symbol.for("react.memo"):60115,m=n?Symbol.for("react.lazy"):60116,_=n?Symbol.for("react.block"):60121,h=n?Symbol.for("react.fundamental"):60117,g=n?Symbol.for("react.responder"):60118,b=n?Symbol.for("react.scope"):60119;function w(r){if("object"==typeof r&&null!==r){var t=r.$$typeof;switch(t){case e:switch(r=r.type){case s:case l:case u:case a:case i:case p:return r;default:switch(r=r&&r.$$typeof){case f:case d:case m:case y:case c:return r;default:return t}}case o:return t}}}function R(r){return w(r)===l}t.AsyncMode=s,t.ConcurrentMode=l,t.ContextConsumer=f,t.ContextProvider=c,t.Element=e,t.ForwardRef=d,t.Fragment=u,t.Lazy=m,t.Memo=y,t.Portal=o,t.Profiler=a,t.StrictMode=i,t.Suspense=p,t.isAsyncMode=function(r){return R(r)||w(r)===s},t.isConcurrentMode=R,t.isContextConsumer=function(r){return w(r)===f},t.isContextProvider=function(r){return w(r)===c},t.isElement=function(r){return"object"==typeof r&&null!==r&&r.$$typeof===e},t.isForwardRef=function(r){return w(r)===d},t.isFragment=function(r){return w(r)===u},t.isLazy=function(r){return w(r)===m},t.isMemo=function(r){return w(r)===y},t.isPortal=function(r){return w(r)===o},t.isProfiler=function(r){return w(r)===a},t.isStrictMode=function(r){return w(r)===i},t.isSuspense=function(r){return w(r)===p},t.isValidElementType=function(r){return"string"==typeof r||"function"==typeof r||r===u||r===l||r===a||r===i||r===p||r===v||"object"==typeof r&&null!==r&&(r.$$typeof===m||r.$$typeof===y||r.$$typeof===c||r.$$typeof===f||r.$$typeof===d||r.$$typeof===h||r.$$typeof===g||r.$$typeof===b||r.$$typeof===_)},t.typeOf=w},99415:function(r,t,n){"use strict";r.exports=n("4507")},11708:function(r,t,n){"use strict";n.r(t),n.d(t,{router:function(){return e.default}});var e=n("86579")},70300:function(r,t,n){"use strict";n.r(t);var e,o=n("9161");n("52983");var u=n("78520"),i=n("32326"),a=n("17785"),c=n("11708"),f="undefined"!=typeof window&&"nodejs"!==window.name,s=null;e=(0,o._)({},(!1).config,"function"==typeof config?config():{}),(s=(0,i.createApp)({plugins:[(0,c.router)((0,o._)({},{serverBase:["/"],routesConfig:{routes:a.routes,globalApp:!1}},null==e?void 0:e.router))]})()).init||"undefined"==typeof appInit||(s.init=appInit),f&&(0,i.bootstrap)(s,"root",null,u),t.default=s},17785:function(r,t,n){"use strict";n.r(t),n.d(t,{routes:function(){return i}});var e=n("52983"),o=n("86579"),u=n("90652");"undefined"!=typeof document&&(window._routeModules={});var i=[{path:"/",children:[{_component:"@_modern_js_src/routes/page",index:!0,id:"page",type:"nested",lazyImport:()=>Promise.all([n.e("424"),n.e("484")]).then(n.bind(n,"62859")).then(r=>(0,o.handleRouteModule)(r,"page")).catch(o.handleRouteModuleError),component:(0,e.lazy)(()=>Promise.all([n.e("424"),n.e("484")]).then(n.bind(n,"62859")).then(r=>(0,o.handleRouteModule)(r,"page")).catch(o.handleRouteModuleError))}],isRoot:!0,_component:"@_modern_js_src/routes/layout",id:"layout",type:"nested",lazyImport:()=>Promise.resolve().then(n.bind(n,"90652")).then(r=>(0,o.handleRouteModule)(r,"layout")).catch(o.handleRouteModuleError),component:u.default}]},89998:function(r,t,n){"use strict";function e(){return(e=Object.assign?Object.assign.bind():function(r){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(r[e]=n[e])}return r}).apply(this,arguments)}n.r(t),n.d(t,{default:function(){return e}})},35865:function(r,t,n){"use strict";function e(r,t){if(null==r)return{};var n,e,o={},u=Object.keys(r);for(e=0;e<u.length;e++)n=u[e],!(t.indexOf(n)>=0)&&(o[n]=r[n]);return o}n.r(t),n.d(t,{default:function(){return e}})},42563:function(r,t,n){"use strict";function e(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=Array(t);n<t;n++)e[n]=r[n];return e}n.r(t),n.d(t,{_array_like_to_array:function(){return e}})},66866:function(r,t,n){"use strict";function e(r){if(Array.isArray(r))return r}n.r(t),n.d(t,{_array_with_holes:function(){return e}})},38994:function(r,t,n){"use strict";n.r(t),n.d(t,{_array_without_holes:function(){return o}});var e=n("42563");function o(r){if(Array.isArray(r))return(0,e._array_like_to_array)(r)}},92769:function(r,t,n){"use strict";function e(r,t,n,e,o,u,i){try{var a=r[u](i),c=a.value}catch(r){n(r);return}a.done?t(c):Promise.resolve(c).then(e,o)}function o(r){return function(){var t=this,n=arguments;return new Promise(function(o,u){var i=r.apply(t,n);function a(r){e(i,o,u,a,c,"next",r)}function c(r){e(i,o,u,a,c,"throw",r)}a(void 0)})}}n.r(t),n.d(t,{_:function(){return o}})},83316:function(r,t,n){"use strict";function e(r,t,n){return t in r?Object.defineProperty(r,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[t]=n,r}n.r(t),n.d(t,{_:function(){return e},_define_property:function(){return e}})},94721:function(r,t,n){"use strict";function e(r,t){return null!=t&&"undefined"!=typeof Symbol&&t[Symbol.hasInstance]?!!t[Symbol.hasInstance](r):r instanceof t}n.r(t),n.d(t,{_:function(){return e}})},37637:function(r,t,n){"use strict";function e(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}n.r(t),n.d(t,{_iterable_to_array:function(){return e}})},37185:function(r,t,n){"use strict";function e(r,t){var n,e,o=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=o){var u=[],i=!0,a=!1;try{for(o=o.call(r);!(i=(n=o.next()).done)&&(u.push(n.value),!t||u.length!==t);i=!0);}catch(r){a=!0,e=r}finally{try{!i&&null!=o.return&&o.return()}finally{if(a)throw e}}return u}}n.r(t),n.d(t,{_iterable_to_array_limit:function(){return e}})},31032:function(r,t,n){"use strict";function e(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}n.r(t),n.d(t,{_non_iterable_rest:function(){return e}})},65825:function(r,t,n){"use strict";function e(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}n.r(t),n.d(t,{_non_iterable_spread:function(){return e}})},9161:function(r,t,n){"use strict";n.r(t),n.d(t,{_:function(){return o}});var e=n("83316");function o(r){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable}))),o.forEach(function(t){(0,e._define_property)(r,t,n[t])})}return r}},16044:function(r,t,n){"use strict";n.r(t),n.d(t,{_:function(){return e}});function e(r,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):(function(r,t){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(r);n.push.apply(n,e)}return n})(Object(t)).forEach(function(n){Object.defineProperty(r,n,Object.getOwnPropertyDescriptor(t,n))}),r}},89334:function(r,t,n){"use strict";n.r(t),n.d(t,{_:function(){return o}});var e=n("78885");function o(r,t){if(null==r)return{};var n,o,u=(0,e._object_without_properties_loose)(r,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(r);for(o=0;o<i.length;o++){if(n=i[o],!(t.indexOf(n)>=0))Object.prototype.propertyIsEnumerable.call(r,n)&&(u[n]=r[n])}}return u}},78885:function(r,t,n){"use strict";function e(r,t){if(null==r)return{};var n,e,o={},u=Object.keys(r);for(e=0;e<u.length;e++)n=u[e],!(t.indexOf(n)>=0)&&(o[n]=r[n]);return o}n.r(t),n.d(t,{_object_without_properties_loose:function(){return e}})},40509:function(r,t,n){"use strict";n.r(t),n.d(t,{_:function(){return a}});var e=n("66866"),o=n("37185"),u=n("31032"),i=n("82479");function a(r,t){return(0,e._array_with_holes)(r)||(0,o._iterable_to_array_limit)(r,t)||(0,i._unsupported_iterable_to_array)(r,t)||(0,u._non_iterable_rest)()}},6462:function(r,t,n){"use strict";n.r(t),n.d(t,{_:function(){return a}});var e=n("38994"),o=n("37637"),u=n("65825"),i=n("82479");function a(r){return(0,e._array_without_holes)(r)||(0,o._iterable_to_array)(r)||(0,i._unsupported_iterable_to_array)(r)||(0,u._non_iterable_spread)()}},66153:function(r,t,n){"use strict";n.r(t),n.d(t,{_:function(){return e.__generator}});var e=n("50952")},82479:function(r,t,n){"use strict";n.r(t),n.d(t,{_unsupported_iterable_to_array:function(){return o}});var e=n("42563");function o(r,t){if(r){if("string"==typeof r)return(0,e._array_like_to_array)(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);if("Object"===n&&r.constructor&&(n=r.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return(0,e._array_like_to_array)(r,t)}}}}]);