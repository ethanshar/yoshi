(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{203:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),i=n(9),a=(n(0),n(284)),o={id:"stylelint-setup",title:"Stylelint Setup",sidebar_label:"Stylelint Setup"},l={id:"version-4.x/styles-and-assets/stylelint-setup",title:"Stylelint Setup",description:"Introduction",source:"@site/versioned_docs/version-4.x/styles-and-assets/stylelint-setup.md",permalink:"/yoshi/docs/styles-and-assets/stylelint-setup",editUrl:"https://github.com/wix/yoshi/edit/master/website/versioned_docs/version-4.x/styles-and-assets/stylelint-setup.md",version:"4.x",lastUpdatedBy:"yanivefraim",lastUpdatedAt:1589887835,sidebar_label:"Stylelint Setup",sidebar:"version-4.x/docs",previous:{title:"Disable CSS Modules",permalink:"/yoshi/docs/styles-and-assets/disable-css-modules"},next:{title:"How to use SVG?",permalink:"/yoshi/docs/styles-and-assets/svg"}},s=[{value:"Introduction",id:"introduction",children:[]},{value:"Installation",id:"installation",children:[]}],c={rightToc:s};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"introduction"},"Introduction"),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://stylelint.io"}),"Stylelint")," is a linter for stylesheet files, like CSS, LESS and SASS. It can also integrate with Prettier, to make sure code style is consistent and more maintainable. For example, consider the following code:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-css"}),".button {\n  color: #fa; /* <- what */\n}\n")),Object(a.b)("p",null,"This CSS code is problematic: color hex codes must be 6 or 3 figures long: ",Object(a.b)("inlineCode",{parentName:"p"},"#000000"),", or its shorthand ",Object(a.b)("inlineCode",{parentName:"p"},"#000"),".\nHow does Chrome handle this undefined behavior? What about IE 11? Safari? Even if it is already well tested and works exactly like we want - ",Object(a.b)("strong",{parentName:"p"},"this is an error-prone code"),", that the common developer shouldn't even bother to know about - and CSS has many of these.\nStylelint solves these code smells by warning us ",Object(a.b)("em",{parentName:"p"},"while writing our code"),", in our favorite environment. \ud83d\udc4f"),Object(a.b)("p",null,"To make this integration easy and consistent across Wix, Yoshi defines ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/wix/yoshi/tree/master/packages/stylelint-config-yoshi"}),Object(a.b)("inlineCode",{parentName:"a"},"stylelint-config-yoshi")),", which is a custom ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://stylelint.io/user-guide/configuration/"}),"Stylelint configuration")," to enable zero-configuration stylesheet linting for any application. It follows the following mindset:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Only fail on errors that can cause production bugs rather than stylistic opinions"),Object(a.b)("li",{parentName:"ul"},"If it's not a critical bug, we try only to add auto-fixable rules (",Object(a.b)("inlineCode",{parentName:"li"},"yoshi lint --fix"),")")),Object(a.b)("h2",{id:"installation"},"Installation"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm install --save-dev stylelint-config-yoshi\n")),Object(a.b)("p",null,"Add the following to your ",Object(a.b)("inlineCode",{parentName:"p"},"package.json"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "stylelint": {\n    "extends": "stylelint-config-yoshi"\n  }\n}\n')),Object(a.b)("p",null,"Finally, configure your ",Object(a.b)("inlineCode",{parentName:"p"},"package.json")," to run Stylelint after ",Object(a.b)("inlineCode",{parentName:"p"},"yoshi lint"),":"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"yoshi lint && stylelint")))}p.isMDXComponent=!0},284:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return y}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),p=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,y=u["".concat(o,".").concat(d)]||u[d]||b[d]||a;return n?i.a.createElement(y,l(l({ref:t},c),{},{components:n})):i.a.createElement(y,l({ref:t},c))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);