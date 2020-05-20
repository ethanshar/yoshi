(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{261:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(2),s=n(9),o=(n(0),n(281)),a={id:"disable-css-modules",title:"Disable CSS Modules",sidebar_label:"Disable CSS Modules"},i={id:"version-4.x/styles-and-assets/disable-css-modules",title:"Disable CSS Modules",description:"There are situations when you are using css modules inside you project, but you need to disable them in specific places (for example, when importing css from 3rd party vendor).",source:"@site/versioned_docs/version-4.x/styles-and-assets/disable-css-modules.md",permalink:"/yoshi/docs/styles-and-assets/disable-css-modules",editUrl:"https://github.com/wix/yoshi/edit/master/website/versioned_docs/version-4.x/styles-and-assets/disable-css-modules.md",version:"4.x",lastUpdatedBy:"Artem Yavorsky",lastUpdatedAt:1589624505,sidebar_label:"Disable CSS Modules",sidebar:"version-4.x/docs",previous:{title:"Node API",permalink:"/yoshi/docs/node-api"},next:{title:"Stylelint Setup",permalink:"/yoshi/docs/styles-and-assets/stylelint-setup"}},c=[{value:"Importing css from node_modules",id:"importing-css-from-node_modules",children:[]}],l={rightToc:c};function u(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"There are situations when you are using css modules inside you project, but you need to disable them in specific places (for example, when importing css from 3rd party vendor)."),Object(o.b)("p",null,"In those cases you can wrap your css with ",Object(o.b)("inlineCode",{parentName:"p"},":global"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-css"}),":global {\n  .global-class-name {\n    color: green;\n  }\n}\n")),Object(o.b)("p",null,"Please find more details ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/css-modules/css-modules#exceptions"}),"here"),"."),Object(o.b)("h2",{id:"importing-css-from-node_modules"},"Importing css from node_modules"),Object(o.b)("p",null,"In case you want to import a css from your node modules, just ",Object(o.b)("inlineCode",{parentName:"p"},"@import")," it inside your scss file, and wrap it with ",Object(o.b)("inlineCode",{parentName:"p"},":global"),":"),Object(o.b)("p",null,"Importing style.scss from '3rd-party-module/x/style.scss':"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-scss"}),'@import "3rd-party-module/x/style.scss";\n')),Object(o.b)("p",null,"In case you are importing a regular 'css' file, just omit file extension:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-scss"}),'@import "3rd-party-module/x/style";\n')))}u.isMDXComponent=!0},281:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),s=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=s.a.createContext({}),u=function(e){var t=s.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},p=function(e){var t=u(e.components);return s.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,m=p["".concat(a,".").concat(b)]||p[b]||d[b]||o;return n?s.a.createElement(m,i({ref:t},l,{components:n})):s.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var l=2;l<o;l++)a[l]=n[l];return s.a.createElement.apply(null,a)}return s.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);