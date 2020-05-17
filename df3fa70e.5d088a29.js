(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{256:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return i})),r.d(n,"metadata",(function(){return c})),r.d(n,"rightToc",(function(){return s})),r.d(n,"default",(function(){return p}));var t=r(2),o=r(9),a=(r(0),r(278)),i={id:"node-api",title:"Node API",sidebar_label:"Node API"},c={id:"version-4.x/node-api",title:"Node API",description:"## Yoshi Serve",source:"@site/versioned_docs/version-4.x/node-api.md",permalink:"/yoshi/docs/node-api",editUrl:"https://github.com/wix/yoshi/edit/master/website/versioned_docs/version-4.x/node-api.md",version:"4.x",lastUpdatedBy:"Artem Yavorsky",lastUpdatedAt:1589303241,sidebar_label:"Node API",sidebar:"version-4.x/docs",previous:{title:"Yoshi Config",permalink:"/yoshi/docs/yoshi-config"},next:{title:"Disable CSS Modules",permalink:"/yoshi/docs/styles-and-assets/disable-css-modules"}},s=[{value:"Yoshi Serve",id:"yoshi-serve",children:[{value:"Monorepo",id:"monorepo",children:[]}]}],l={rightToc:s};function p(e){var n=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},l,r,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"yoshi-serve"},"Yoshi Serve"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"yoshi-common")," exposes ",Object(a.b)("inlineCode",{parentName:"p"},"serve")," functionality through Node API."),Object(a.b)("p",null,"Serve runs your ",Object(a.b)("inlineCode",{parentName:"p"},"index-dev"),"/",Object(a.b)("inlineCode",{parentName:"p"},"dev/server")," file and serves your ",Object(a.b)("inlineCode",{parentName:"p"},"dist/statics")," directory as a local CDN."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Note: You need to build the statics before running serve. You can do that with ",Object(a.b)("inlineCode",{parentName:"p"},"yoshi build"),".")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"serve")," method returns a Promise."),Object(a.b)("p",null,"Example of usage:"),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-javascript"}),'const serve = require("yoshi-common/serve");\n\nserve()\n  .then(() => {\n    console.log("Server and CDN started successfully");\n  })\n  .catch(errorReason => {\n    console.log(errorReason);\n  });\n')),Object(a.b)("h3",{id:"monorepo"},"Monorepo"),Object(a.b)("p",null,"In case you are using ",Object(a.b)("inlineCode",{parentName:"p"},"yoshi-flow-monorepo")," and want to serve all the apps in the monorepo, you can do so using the following api:"),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-javascript"}),'const serve = require("yoshi-flow-monorepo/serve");\n\nserve()\n  .then(() => {\n    console.log("All Servers and CDNs started successfully");\n  })\n  .catch(errorReason => {\n    console.log(errorReason);\n  });\n')))}p.isMDXComponent=!0},278:function(e,n,r){"use strict";r.d(n,"a",(function(){return u})),r.d(n,"b",(function(){return m}));var t=r(0),o=r.n(t);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),p=function(e){var n=o.a.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):c({},n,{},e)),r},u=function(e){var n=p(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=Object(t.forwardRef)((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),b=t,m=u["".concat(i,".").concat(b)]||u[b]||d[b]||a;return r?o.a.createElement(m,c({ref:n},l,{components:r})):o.a.createElement(m,c({ref:n},l))}));function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,i=new Array(a);i[0]=b;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:t,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);