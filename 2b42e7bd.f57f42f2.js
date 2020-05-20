(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{171:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var o=n(2),r=n(9),a=(n(0),n(281)),i={id:"hmr",title:"HMR",sidebar_label:"HMR"},l={id:"development/hmr",title:"HMR",description:"HMR is a way to speed up development built with webpack. You could retain local state of your application after each time the code was changed, save some time and allow your bundler to update only needed modules, tweak styling, etc.",source:"@site/docs/development/hmr.md",permalink:"/yoshi/docs/next/development/hmr",editUrl:"https://github.com/wix/yoshi/edit/master/website/docs/development/hmr.md",version:"next",lastUpdatedBy:"Artem Yavorsky",lastUpdatedAt:1589624505,sidebar_label:"HMR",sidebar:"docs",previous:{title:"Debugging",permalink:"/yoshi/docs/next/development/debugging"},next:{title:"Moment.js optimization",permalink:"/yoshi/docs/next/development/momentjs-optimization"}},c=[{value:"<code>hmr: true</code> (default)",id:"hmr-true-default",children:[]},{value:"<code>hmr: &quot;auto&quot;</code>",id:"hmr-auto",children:[]},{value:"<code>hmr: false</code>",id:"hmr-false",children:[{value:"Caveats:",id:"caveats",children:[]}]}],p={rightToc:c};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"HMR is a way to speed up development built with webpack. You could retain local state of your application after each time the code was changed, save some time and allow your bundler to update only needed modules, tweak styling, etc."),Object(a.b)("h2",{id:"hmr-true-default"},Object(a.b)("inlineCode",{parentName:"h2"},"hmr: true")," (default)"),Object(a.b)("p",null,"In most cases enabling it in the config is not enough.\n",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://webpack.js.org/api/hot-module-replacement/"}),"You should configure it in a proper way")),Object(a.b)("p",null,"Moreover, for React application you should also use ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/gaearon/react-hot-loader"}),"react-hot-loader")," with ",Object(a.b)("inlineCode",{parentName:"p"},"react-hot-loader/babel")," plugin:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Add react-hot-loader/babel to your babel config:")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'"plugins": ["react-hot-loader/babel"]\n')),Object(a.b)("ol",{start:2},Object(a.b)("li",{parentName:"ol"},"Wrap your root component into ",Object(a.b)("inlineCode",{parentName:"li"},"hot")," HOC:")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"App.js")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),'import { hot } from "react-hot-loader";\nconst App = () => <div>Hello World!</div>;\n\nexport default hot(module)(App);\n')),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"index.js")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),'import { render } from "react-dom";\nimport App from "./App";\n\nrender(App, rootEl);\n')),Object(a.b)("ol",{start:3},Object(a.b)("li",{parentName:"ol"},"Run ",Object(a.b)("inlineCode",{parentName:"li"},"yoshi start"))),Object(a.b)("p",null,"For more info read ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/gaearon/react-hot-loader#install"}),"react-hot-loader documentation"),"."),Object(a.b)("h2",{id:"hmr-auto"},Object(a.b)("inlineCode",{parentName:"h2"},'hmr: "auto"')),Object(a.b)("p",null,"You can configure hmr manually, according to the steps above, or you can use the new experimental feature ",Object(a.b)("inlineCode",{parentName:"p"},'hmr: "auto"'),"."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Note: This feature is available since yoshi 2")),Object(a.b)("p",null,"Just add this option to your config and yoshi will provide the transformations needed for your entry files to make HMR work in a correct way."),Object(a.b)("p",null,"During ",Object(a.b)("inlineCode",{parentName:"p"},"yoshi start")," command it will ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/wix/yoshi/pull/189"}),"add ",Object(a.b)("inlineCode",{parentName:"a"},"babel-plugin-transform-hmr-runtime")),". This plugin will add ",Object(a.b)("inlineCode",{parentName:"p"},"react-hot-reload")," to your imports, check ",Object(a.b)("inlineCode",{parentName:"p"},"import"),"ed ",Object(a.b)("inlineCode",{parentName:"p"},"from 'react-dom'")," ",Object(a.b)("inlineCode",{parentName:"p"},"render")," method and try to wrap your root Component into special Higher Order Component provided by ",Object(a.b)("inlineCode",{parentName:"p"},"react-hot-reload"),".\nIt also adds:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"if (module.hot) {\n  module.hot.accept();\n}\n")),Object(a.b)("p",null,"to your entry files and initializes HMR."),Object(a.b)("h2",{id:"hmr-false"},Object(a.b)("inlineCode",{parentName:"h2"},"hmr: false")),Object(a.b)("p",null,"Using this option, you opt out from using hot module replacement."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"NOTE:")," If you want to also opt out from ",Object(a.b)("inlineCode",{parentName:"p"},"liveReload")," configure ",Object(a.b)("inlineCode",{parentName:"p"},"{ liveReload: false }")," in your yoshi config."),Object(a.b)("h3",{id:"caveats"},"Caveats:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"It does not work yet with ",Object(a.b)("inlineCode",{parentName:"li"},"render(React.createElement('div'), el)"),". Just with JSX elements. But we are working on this."),Object(a.b)("li",{parentName:"ul"},"Despite that it isn't somehow affect production, it's not stable yet. So you could try it and ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/wix/yoshi/issues"}),"open an issue")," in case of bugs. \ud83d\ude4f")))}b.isMDXComponent=!0},281:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),b=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},u=function(e){var t=b(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=b(n),s=o,m=u["".concat(i,".").concat(s)]||u[s]||d[s]||a;return n?r.a.createElement(m,l({ref:t},p,{components:n})):r.a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);