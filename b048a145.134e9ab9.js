(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{231:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(9),o=(n(0),n(278)),i={id:"hmr",title:"HMR",sidebar_label:"HMR"},l={id:"version-4.x/legacy-guides/hmr",title:"HMR",description:"HMR is a way to speed up development built with webpack. You could retain local state of your application after each time the code was changed, save some time and allow your bundler to update only needed modules, tweak styling, etc.",source:"@site/versioned_docs/version-4.x/legacy-guides/hmr.md",permalink:"/yoshi/docs/legacy-guides/hmr",editUrl:"https://github.com/wix/yoshi/edit/master/website/versioned_docs/version-4.x/legacy-guides/hmr.md",version:"4.x",lastUpdatedBy:"Artem Yavorsky",lastUpdatedAt:1589303241,sidebar_label:"HMR"},c=[{value:"<code>hmr: true</code> (default)",id:"hmr-true-default",children:[]},{value:"<code>hmr: &quot;auto&quot;</code>",id:"hmr-auto",children:[]},{value:"<code>hmr: false</code>",id:"hmr-false",children:[{value:"Caveats:",id:"caveats",children:[]}]}],p={rightToc:c};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"HMR is a way to speed up development built with webpack. You could retain local state of your application after each time the code was changed, save some time and allow your bundler to update only needed modules, tweak styling, etc."),Object(o.b)("h2",{id:"hmr-true-default"},Object(o.b)("inlineCode",{parentName:"h2"},"hmr: true")," (default)"),Object(o.b)("p",null,"In most cases enabling it in the config is not enough.\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://webpack.js.org/api/hot-module-replacement/"}),"You should configure it in a proper way")),Object(o.b)("p",null,"Moreover, for React application you should also use ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/gaearon/react-hot-loader"}),"react-hot-loader")," with ",Object(o.b)("inlineCode",{parentName:"p"},"react-hot-loader/babel")," plugin:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Add react-hot-loader/babel to your babel config:")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'"plugins": ["react-hot-loader/babel"]\n')),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"Wrap your root component into ",Object(o.b)("inlineCode",{parentName:"li"},"hot")," HOC:")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"App.js")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'import { hot } from "react-hot-loader";\nconst App = () => <div>Hello World!</div>;\n\nexport default hot(module)(App);\n')),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"index.js")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'import { render } from "react-dom";\nimport App from "./App";\n\nrender(App, rootEl);\n')),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"Run ",Object(o.b)("inlineCode",{parentName:"li"},"yoshi start"))),Object(o.b)("p",null,"For more info read ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/gaearon/react-hot-loader#install"}),"react-hot-loader documentation"),"."),Object(o.b)("h2",{id:"hmr-auto"},Object(o.b)("inlineCode",{parentName:"h2"},'hmr: "auto"')),Object(o.b)("p",null,"You can configure hmr manually, according to the steps above, or you can use the new experimental feature ",Object(o.b)("inlineCode",{parentName:"p"},'hmr: "auto"'),"."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Note: This feature is available since yoshi 2")),Object(o.b)("p",null,"Just add this option to your config and yoshi will provide the transformations needed for your entry files to make HMR work in a correct way."),Object(o.b)("p",null,"During ",Object(o.b)("inlineCode",{parentName:"p"},"yoshi start")," command it will ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/wix/yoshi/pull/189"}),"add ",Object(o.b)("inlineCode",{parentName:"a"},"babel-plugin-transform-hmr-runtime")),". This plugin will add ",Object(o.b)("inlineCode",{parentName:"p"},"react-hot-reload")," to your imports, check ",Object(o.b)("inlineCode",{parentName:"p"},"import"),"ed ",Object(o.b)("inlineCode",{parentName:"p"},"from 'react-dom'")," ",Object(o.b)("inlineCode",{parentName:"p"},"render")," method and try to wrap your root Component into special Higher Order Component provided by ",Object(o.b)("inlineCode",{parentName:"p"},"react-hot-reload"),".\nIt also adds:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"if (module.hot) {\n  module.hot.accept();\n}\n")),Object(o.b)("p",null,"to your entry files and initializes HMR."),Object(o.b)("h2",{id:"hmr-false"},Object(o.b)("inlineCode",{parentName:"h2"},"hmr: false")),Object(o.b)("p",null,"Using this option, you opt out from using hot module replacement."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"NOTE:")," If you want to also opt out from ",Object(o.b)("inlineCode",{parentName:"p"},"liveReload")," configure ",Object(o.b)("inlineCode",{parentName:"p"},"{ liveReload: false }")," in your yoshi config."),Object(o.b)("h3",{id:"caveats"},"Caveats:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"It does not work yet with ",Object(o.b)("inlineCode",{parentName:"li"},"render(React.createElement('div'), el)"),". Just with JSX elements. But we are working on this."),Object(o.b)("li",{parentName:"ul"},"Despite that it isn't somehow affect production, it's not stable yet. So you could try it and ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/wix/yoshi/issues"}),"open an issue")," in case of bugs. \ud83d\ude4f")))}b.isMDXComponent=!0},278:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},u=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=b(n),s=r,m=u["".concat(i,".").concat(s)]||u[s]||d[s]||o;return n?a.a.createElement(m,l({ref:t},p,{components:n})):a.a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);