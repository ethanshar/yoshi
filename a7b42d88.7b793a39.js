(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{229:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return a})),t.d(r,"metadata",(function(){return s})),t.d(r,"rightToc",(function(){return c})),t.d(r,"default",(function(){return l}));var n=t(2),i=t(9),o=(t(0),t(281)),a={id:"middlewares",title:"Middlewares",sidebar_label:"Middlewares"},s={id:"version-4.x/yoshi-server/middlewares",title:"Middlewares",description:"Yoshi Server provides built-in middlewares that parse the incoming request. Those middlewares are:",source:"@site/versioned_docs/version-4.x/yoshi-server/middlewares.md",permalink:"/yoshi/docs/yoshi-server/middlewares",editUrl:"https://github.com/wix/yoshi/edit/master/website/versioned_docs/version-4.x/yoshi-server/middlewares.md",version:"4.x",lastUpdatedBy:"Artem Yavorsky",lastUpdatedAt:1589624505,sidebar_label:"Middlewares",sidebar:"version-4.x/yoshi-server",previous:{title:"Initializing Server Data",permalink:"/yoshi/docs/yoshi-server/initializing-server-data"},next:{title:"Custom Server",permalink:"/yoshi/docs/yoshi-server/custom-server"}},c=[],p={rightToc:c};function l(e){var r=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Yoshi Server provides built-in middlewares that parse the incoming request. Those middlewares are:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/expressjs/cookie-parser"}),Object(o.b)("inlineCode",{parentName:"a"},"cookie-parser"))," - parse Cookie header and populate ",Object(o.b)("inlineCode",{parentName:"li"},"req.cookies")," with an object keyed by the cookie names."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/wix-platform/wix-node-platform/tree/master/express/wix-express-require-https"}),Object(o.b)("inlineCode",{parentName:"a"},"wix-express-require-https"))," - redirects requests made through http to http."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/wix-platform/wix-node-platform/blob/master/express/wix-express-csrf/README.md"}),Object(o.b)("inlineCode",{parentName:"a"},"wix-express-csrf"))," - provides csrf protection.")),Object(o.b)("h1",{id:"express-middlewares-support"},"Express Middlewares Support"),Object(o.b)("p",null,"Yoshi Server provides the ",Object(o.b)("inlineCode",{parentName:"p"},"runMiddleware")," function, which lets you run an ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:""}),"express middleware")," from your server function/route."),Object(o.b)("p",null,"For example, ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS"}),"configuring CORS (cross-origin)")," for your server function can be done by leveraging the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/expressjs/cors"}),"cors")," package."),Object(o.b)("p",null,"Let's add ",Object(o.b)("inlineCode",{parentName:"p"},"cors")," to the our server function:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import Cors from 'cors'\nimport { method, runMiddleware } from \"yoshi-server\";\n\n// Initializing the cors middleware\nconst cors = Cors(); // Enable all CORS requests\n\nexport const greeting = method(function(age: number) {\n  // Run the middleware\n  await runMiddleware(this.req, this.res, cors)\n\n  return {\n    name: `world! ${age}`,\n    age\n  };\n});\n")),Object(o.b)("h1",{id:"applying-a-middleware-for-multiple-server-functions--routes"},"Applying a middleware for multiple server functions / routes"),Object(o.b)("p",null,"To apply a middlware to multiple server functions/routes, check the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"custom-server"}),"Custom Server")," documentation."))}l.isMDXComponent=!0},281:function(e,r,t){"use strict";t.d(r,"a",(function(){return d})),t.d(r,"b",(function(){return m}));var n=t(0),i=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=i.a.createContext({}),l=function(e){var r=i.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):s({},r,{},e)),t},d=function(e){var r=l(e.components);return i.a.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return i.a.createElement(i.a.Fragment,{},r)}},b=Object(n.forwardRef)((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(t),b=n,m=d["".concat(a,".").concat(b)]||d[b]||u[b]||o;return t?i.a.createElement(m,s({ref:r},p,{components:t})):i.a.createElement(m,s({ref:r},p))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,a=new Array(o);a[0]=b;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var p=2;p<o;p++)a[p]=t[p];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);