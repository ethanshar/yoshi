(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{154:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return c}));var o=n(2),i=n(9),a=(n(0),n(278)),r={id:"migration-guide",title:"Version 4 Migration guide",sidebar_label:"Version 4 Migration guide"},s={id:"version-4.x/migration-guide",title:"Version 4 Migration guide",description:"Like any major release, Yoshi v4 comes with some breaking changes. It's recommended to go over them to make the migration go easily. If you encounter any problems, please [open an issue](https://github.com/wix/yoshi/issues/new/choose).",source:"@site/versioned_docs/version-4.x/migration-guide.md",permalink:"/yoshi/docs/migration-guide",editUrl:"https://github.com/wix/yoshi/edit/master/website/versioned_docs/version-4.x/migration-guide.md",version:"4.x",lastUpdatedBy:"Ran Yitzhaki",lastUpdatedAt:1589375528,sidebar_label:"Version 4 Migration guide",sidebar:"version-4.x/docs",previous:{title:"Split Chunks",permalink:"/yoshi/docs/development/split-chunks"}},l=[{value:"Bump dependencies",id:"bump-dependencies",children:[]},{value:"Babel config is no longer required",id:"babel-config-is-no-longer-required",children:[]},{value:"<code>yoshi start</code> does not run tests by default",id:"yoshi-start-does-not-run-tests-by-default",children:[]},{value:"TypeScript definitions for Yoshi",id:"typescript-definitions-for-yoshi",children:[]},{value:"SVGs that are <code>require()</code>&#39;d now has a <code>.default</code> property",id:"svgs-that-are-required-now-has-a-default-property",children:[]},{value:"Jest test files locations have been changed",id:"jest-test-files-locations-have-been-changed",children:[]},{value:"Puppeteer actions in Jest have a shorter default timeout",id:"puppeteer-actions-in-jest-have-a-shorter-default-timeout",children:[]},{value:"<code>yoshi test</code> runs Jest by default",id:"yoshi-test-runs-jest-by-default",children:[]},{value:"App flow",id:"app-flow",children:[]}],p={rightToc:l};function c(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Like any major release, Yoshi v4 comes with some breaking changes. It's recommended to go over them to make the migration go easily. If you encounter any problems, please ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/wix/yoshi/issues/new/choose"}),"open an issue"),"."),Object(a.b)("p",null,"This is the migration guide from v3 to v4. If you're still using Yoshi v1 or v2, follow their respective migration guides (",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://wix.github.io/yoshi/blog/2018/03/15/yoshi-2"}),"v1"),", ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://wix.github.io/yoshi/blog/2018/06/3/yoshi-3"}),"v2"),") first."),Object(a.b)("h3",{id:"bump-dependencies"},"Bump dependencies"),Object(a.b)("p",null,"Inside any Yoshi project, run:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"npm install --save-dev yoshi@4\n")),Object(a.b)("p",null,"If you depend on ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/wix/yoshi/tree/version_4.x/packages/yoshi-style-dependencies"}),"yoshi-style-dependencies"),", ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/wix/yoshi/tree/version_4.x/packages/yoshi-angular-dependencies"}),"yoshi-angular-dependencies")," or ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/wix/yoshi/tree/version_4.x/packages/jest-yoshi-preset"}),"jest-yoshi-preset"),", make sure to bump them too:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"npm install --save-dev yoshi-style-dependencies@4\n")),Object(a.b)("p",null,"And/or:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"npm install --save-dev yoshi-angular-dependencies@4\n")),Object(a.b)("p",null,"And/or:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"npm install --save-dev jest-yoshi-preset@4\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Finally, for TypeScript projects, Yoshi now requires TypeScript with a minimum version of 2.9.0.")),Object(a.b)("h3",{id:"babel-config-is-no-longer-required"},"Babel config is no longer required"),Object(a.b)("p",null,"Previously, every project needed to configure their own Babel presets and rules. While giving projects flexibility, it created duplicated boilerplate and made it harder to create a good experience. Yoshi now configures Babel internally."),Object(a.b)("p",null,"If your project is a Babel project, please make sure to remove your ",Object(a.b)("inlineCode",{parentName:"p"},".babelrc")," file.",Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("strong",{parentName:"p"},"Note")," if you have custom babel configuration - it will not be supported anymore"),Object(a.b)("h3",{id:"yoshi-start-does-not-run-tests-by-default"},Object(a.b)("inlineCode",{parentName:"h3"},"yoshi start")," does not run tests by default"),Object(a.b)("p",null,"Jest is now the default test runner. Running its immersive watch mode along with ",Object(a.b)("inlineCode",{parentName:"p"},"npm start")," hides the dev server output. We recommend that you use ",Object(a.b)("inlineCode",{parentName:"p"},"yoshi start")," to start your local development environment and that you run your tests in a separate terminal."),Object(a.b)("p",null,"If you're still interested in running your tests in the same terminal, use ",Object(a.b)("inlineCode",{parentName:"p"},"yoshi start --with-tests"),". Also, if you previously worked with ",Object(a.b)("inlineCode",{parentName:"p"},"--no-tests"),", just remove it."),Object(a.b)("h3",{id:"typescript-definitions-for-yoshi"},"TypeScript definitions for Yoshi"),Object(a.b)("p",null,"Currently, every TypeScript project has to define build related types:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"// sass\ndeclare module '*.scss';\n\n// json\ndeclare module '*.json';\n\n// png\ndeclare module '*.png';\n")),Object(a.b)("p",null,"Those types are defined as ",Object(a.b)("inlineCode",{parentName:"p"},"any")," and require the developer to add new ones when they use a new type of asset supported by Yoshi. Instead, Yoshi now supplies its own ",Object(a.b)("inlineCode",{parentName:"p"},"types.d.ts")," and each asset has its own type definition."),Object(a.b)("p",null,"Then, change your ",Object(a.b)("inlineCode",{parentName:"p"},"tsconfig.json"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-diff"}),'{\n  "compilerOptions": {\n-    "lib": ["dom", "es2016", "es2017"],\n+    "lib": ["dom", "esnext"],\n+    "resolveJsonModule": true,\n    "..."\n  },\n}\n')),Object(a.b)("p",null,"Finally, replace old types you had on assets (normally in ",Object(a.b)("inlineCode",{parentName:"p"},"src/external-types.d.ts"),") to ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/wix/yoshi/blob/v4.11.1/packages/yoshi/types.d.ts"}),"the ones provided by Yoshi"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-diff"}),"-declare module '*.scss';\n-declare module '*.json';\n+import \"yoshi/types\";\n\ninterface Window {\n  __BASEURL__: string;\n}\n")),Object(a.b)("h3",{id:"svgs-that-are-required-now-has-a-default-property"},"SVGs that are ",Object(a.b)("inlineCode",{parentName:"h3"},"require()"),"'d now has a ",Object(a.b)("inlineCode",{parentName:"h3"},".default")," property"),Object(a.b)("p",null,"Previously, we could ",Object(a.b)("inlineCode",{parentName:"p"},"require")," (this does not include using ",Object(a.b)("inlineCode",{parentName:"p"},"import"),") SVG files like this:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),'const logo = require("./logo.svg");\n\nconst App = () => <img src={logo} />;\n')),Object(a.b)("p",null,"If you want to keep this specific use-case working, you'll need to update it like the following:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),'const logo = require("./logo.svg");\n\nconst App = () => <img src={logo.default} />;\n')),Object(a.b)("h3",{id:"jest-test-files-locations-have-been-changed"},"Jest test files locations have been changed"),Object(a.b)("p",null,"(",Object(a.b)("strong",{parentName:"p"},"Only relevant for projects using ",Object(a.b)("inlineCode",{parentName:"strong"},"jest-yoshi-preset")),")"),Object(a.b)("p",null,"We've changed the test file glob patterns to be more flexible:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"We recommend that you change the directory ",Object(a.b)("inlineCode",{parentName:"p"},"test")," -> ",Object(a.b)("inlineCode",{parentName:"p"},"__tests__")," which places it at the top and makes it easier to identify because of the ",Object(a.b)("inlineCode",{parentName:"p"},"__")," prefix and suffix.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"We changed the test setup to only have two environments instead of 3:"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"e2e")," - An environment that will start your server and a puppeteer page."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"spec")," - An environment for running unit and component tests which set up JSDOM.")))),Object(a.b)("p",null,"Files that end with ",Object(a.b)("inlineCode",{parentName:"p"},".e2e.(js|ts)")," will use e2e environment, while files that end with ",Object(a.b)("inlineCode",{parentName:"p"},".spec.(js|ts)")," will use spec environment, regardless of where in the project those files are in. We also changed the names and setup files so they don't collide with the new test extensions:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"<rootDir>/test/setup.component.(j|t)s"),": JSDOM (component)"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"<rootDir>/test/setup.server.(j|t)s"),": Bootstrap (server)"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"<rootDir>/test/setup.e2e.(j|t)s"),": Puppeteer (e2e)")),Object(a.b)("p",null,"Have changed to:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"<rootDir>/__tests__/spec-setup.(j|t)s"),": Setup for .spec tests (Component and Unit tests)"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"<rootDir>/__tests__/e2e-setup.(j|t)s"),": Setup for .e2e tests (Browser an Server e2e tests)")),Object(a.b)("p",null,"To make migration easier, please start by running a helper script, which will change your project's files to the new glob patterns:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"curl https://gist.githubusercontent.com/ronami/1608dc49efc166bb6e15a21f7073cb79/raw | node\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Note:")," If you're using ",Object(a.b)("inlineCode",{parentName:"p"},"MATCH_ENV=component")," it should be replaced with ",Object(a.b)("inlineCode",{parentName:"p"},"MATCH_ENV=spec")),Object(a.b)("h3",{id:"puppeteer-actions-in-jest-have-a-shorter-default-timeout"},"Puppeteer actions in Jest have a shorter default timeout"),Object(a.b)("p",null,"(",Object(a.b)("strong",{parentName:"p"},"Only relevant for projects using ",Object(a.b)("inlineCode",{parentName:"strong"},"jest-yoshi-preset")),")"),Object(a.b)("p",null,"Normally, Jest E2E tests have a 10-second timeout. This means that if an async test did not finish in that time, it will count as a failing test. It will be difficult to know which async operation caused our test to fail, only that our test has failed because of a timeout."),Object(a.b)("p",null,"We've noticed that in most cases, we hit this timeout when waiting for a Puppeteer operation (For example, calling ",Object(a.b)("inlineCode",{parentName:"p"},"await page.waitForSelector('#unknown')"),"). This is because Puppeteer has a default timeout of 30 seconds. Combined with Jest's shorter 10 seconds timeout, we never reach it."),Object(a.b)("p",null,"To help solve it, we've decided to change Puppeteer default timeout to 5 seconds."),Object(a.b)("p",null,"If you have a specific operation that needs a longer timeout, simply pass a longer timeout for it:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),'await page.waitForSelector("#longer", { timeout: 10000 });\n')),Object(a.b)("p",null,"See ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/GoogleChrome/puppeteer/blob/v1.13.0/docs/api.md#pagesetdefaulttimeouttimeout"}),"Puppeteer's docs")," if you want to change this value back."),Object(a.b)("h3",{id:"yoshi-test-runs-jest-by-default"},Object(a.b)("inlineCode",{parentName:"h3"},"yoshi test")," runs Jest by default"),Object(a.b)("p",null,"We want to encourage as many developers as possible to use Jest as their testing platform. From v4, running ",Object(a.b)("inlineCode",{parentName:"p"},"yoshi test")," will run Jest instead of Mocha and Protractor."),Object(a.b)("p",null,"To use the previous default, make the following change (only if you're not using Jest):"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-diff"}),"-yoshi test\n+yoshi test --mocha --protractor\n")),Object(a.b)("h3",{id:"app-flow"},"App flow"),Object(a.b)("p",null,"We recommend every app project (this includes client and full-stack apps, ",Object(a.b)("strong",{parentName:"p"},"but not libraries"),") to start using this app flow. To migrate, please follow ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/yoshi/docs/app-flow"}),"this guide"),"."))}c.isMDXComponent=!0},278:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var o=n(0),i=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),c=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},b=function(e){var t=c(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,r=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=c(n),d=o,h=b["".concat(r,".").concat(d)]||b[d]||u[d]||a;return n?i.a.createElement(h,s({ref:t},p,{components:n})):i.a.createElement(h,s({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var p=2;p<a;p++)r[p]=n[p];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);