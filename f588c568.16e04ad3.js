(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{268:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var o=n(2),r=n(9),i=(n(0),n(278)),a={id:"momentjs-optimization",title:"Moment.js optimization",sidebar_label:"Moment.js optimization"},c={id:"version-3.x/guides/momentjs-optimization",title:"Moment.js optimization",description:"If you require `moment.js` in your client-side code `webpack` will put all of `moment.js`'s locale files into your bundle (over 90 different locales). This causes a significant bundle increase and it's usually unnecessary.",source:"@site/versioned_docs/version-3.x/guides/momentjs-optimization.md",permalink:"/yoshi/docs/3.x/guides/momentjs-optimization",editUrl:"https://github.com/wix/yoshi/edit/master/website/versioned_docs/version-3.x/guides/momentjs-optimization.md",version:"3.x",lastUpdatedBy:"Artem Yavorsky",lastUpdatedAt:1589303241,sidebar_label:"Moment.js optimization",sidebar:"version-3.x-docs",previous:{title:"HMR",permalink:"/yoshi/docs/3.x/guides/hmr"},next:{title:"Split Chunks",permalink:"/yoshi/docs/3.x/guides/split-chunks"}},s=[],l={rightToc:s};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"If you require ",Object(i.b)("inlineCode",{parentName:"p"},"moment.js")," in your client-side code ",Object(i.b)("inlineCode",{parentName:"p"},"webpack")," will put all of ",Object(i.b)("inlineCode",{parentName:"p"},"moment.js"),"'s locale files into your bundle (over 90 different locales). This causes a significant bundle increase and it's usually unnecessary."),Object(i.b)("p",null,"To avoid it, a require to ",Object(i.b)("inlineCode",{parentName:"p"},"moment.js")," will only load ",Object(i.b)("inlineCode",{parentName:"p"},"moment.js")," without any locales. If you need to have some of its locales, you can require them yourself like that:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"const moment = require('moment');\nrequire('moment/locale/ja');\n\nmoment.locale('ja');\n...\n")),Object(i.b)("p",null,"You can read more about it here: ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/jmblog/how-to-optimize-momentjs-with-webpack/blob/master/README.md"}),"https://github.com/jmblog/how-to-optimize-momentjs-with-webpack/blob/master/README.md")))}u.isMDXComponent=!0},278:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var o=n(0),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},m=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=u(n),b=o,d=m["".concat(a,".").concat(b)]||m[b]||p[b]||i;return n?r.a.createElement(d,c({ref:t},l,{components:n})):r.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);