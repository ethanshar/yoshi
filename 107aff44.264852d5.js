(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{115:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return r})),n.d(t,"default",(function(){return c}));var a=n(1),i=n(6),l=(n(0),n(228)),b={id:"legacy-flow",title:"Legacy Flow",sidebar_label:"Legacy Flow"},o={id:"legacy-flow",title:"Legacy Flow",description:"## CLI",source:"@site/docs/legacy-flow.md",permalink:"/yoshi/docs/next/legacy-flow",editUrl:"https://github.com/wix/yoshi/edit/master/website/docs/legacy-flow.md",version:"next",lastUpdatedBy:"Ran Yitzhaki",lastUpdatedAt:1589209600,sidebar_label:"Legacy Flow",sidebar:"docs",previous:{title:"Business-Manager Flow",permalink:"/yoshi/docs/next/business-manager-flow"},next:{title:"Getting Started",permalink:"/yoshi/docs/next/yoshi-server/getting-started"}},r=[{value:"CLI",id:"cli",children:[{value:"Global options",id:"global-options",children:[]},{value:"start",id:"start",children:[]},{value:"build",id:"build",children:[]},{value:"test",id:"test",children:[]},{value:"lint",id:"lint",children:[]},{value:"release",id:"release",children:[]}]},{value:"Configuration",id:"configuration",children:[{value:"extends",id:"extends",children:[]},{value:"separateCss",id:"separatecss",children:[]},{value:"splitChunks",id:"splitchunks",children:[]},{value:"cssModules",id:"cssmodules",children:[]},{value:"tpaStyle",id:"tpastyle",children:[]},{value:"enhancedTpaStyle",id:"enhancedtpastyle",children:[]},{value:"separateStylableCss",id:"separatestylablecss",children:[]},{value:"clientProjectName",id:"clientprojectname",children:[]},{value:"keepFunctionNames",id:"keepfunctionnames",children:[]},{value:"entry",id:"entry",children:[]},{value:"servers.cdn",id:"serverscdn",children:[]},{value:"externals",id:"externals",children:[]},{value:"startUrl",id:"starturl",children:[]},{value:"specs",id:"specs",children:[]},{value:"exports",id:"exports",children:[]},{value:"transpileTests",id:"transpiletests",children:[]},{value:"hmr",id:"hmr",children:[]},{value:"liveReload",id:"livereload",children:[]},{value:"performance",id:"performance",children:[]},{value:"resolveAlias",id:"resolvealias",children:[]},{value:"hooks",id:"hooks",children:[]},{value:"umdNamedDefine",id:"umdnameddefine",children:[]}]}],s={rightToc:r};function c(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"cli"},"CLI"),Object(l.b)("h3",{id:"global-options"},"Global options"),Object(l.b)("h4",{id:"--help---h-"},Object(l.b)("inlineCode",{parentName:"h4"},"--help")," ( ",Object(l.b)("inlineCode",{parentName:"h4"},"-h")," )"),Object(l.b)("p",null,"Output usage information"),Object(l.b)("p",null,"Default: ",Object(l.b)("inlineCode",{parentName:"p"},"./dist/index.js")),Object(l.b)("h4",{id:"--verbose"},Object(l.b)("inlineCode",{parentName:"h4"},"--verbose")),Object(l.b)("p",null,"Yoshi will print verbose logs and error messages."),Object(l.b)("p",null,"Default: ",Object(l.b)("inlineCode",{parentName:"p"},"true")," in CI"),Object(l.b)("h3",{id:"start"},"start"),Object(l.b)("p",null,"This will run the specified (server) ",Object(l.b)("inlineCode",{parentName:"p"},"entryPoint")," file and mount a CDN server."),Object(l.b)("h4",{id:"options"},"options"),Object(l.b)("h5",{id:"--entry-point---e-"},Object(l.b)("inlineCode",{parentName:"h5"},"--entry-point")," ( ",Object(l.b)("inlineCode",{parentName:"h5"},"-e")," ) ",Object(l.b)("img",{src:"https://img.shields.io/badge/deprecated-yellow"})),Object(l.b)("p",null,"Entry point for the app."),Object(l.b)("p",null,"Default: ",Object(l.b)("inlineCode",{parentName:"p"},"index.js")),Object(l.b)("h5",{id:"--server"},Object(l.b)("inlineCode",{parentName:"h5"},"--server")," ",Object(l.b)("img",{src:"https://img.shields.io/badge/deprecated-yellow"})),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"An alias for ",Object(l.b)("inlineCode",{parentName:"p"},"entry-point")," configuration option.")),Object(l.b)("p",null,"Entry point for the app server. Supported only by ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/yoshi/docs/next/app-flow"}),"app flow"),"."),Object(l.b)("p",null,"Default: ",Object(l.b)("inlineCode",{parentName:"p"},"index.js")),Object(l.b)("h5",{id:"--manual-restart"},Object(l.b)("inlineCode",{parentName:"h5"},"--manual-restart")),Object(l.b)("p",null,"Get SIGHUP on change and manage application reboot manually"),Object(l.b)("p",null,"Default: ",Object(l.b)("inlineCode",{parentName:"p"},"false")),Object(l.b)("h5",{id:"--with-tests"},Object(l.b)("inlineCode",{parentName:"h5"},"--with-tests")),Object(l.b)("p",null,"Spawn ",Object(l.b)("inlineCode",{parentName:"p"},"npm test")," after start"),Object(l.b)("p",null,"Default: ",Object(l.b)("inlineCode",{parentName:"p"},"false")),Object(l.b)("h5",{id:"--no-server"},Object(l.b)("inlineCode",{parentName:"h5"},"--no-server")),Object(l.b)("p",null,"Do not spawn the app server"),Object(l.b)("p",null,"Default: ",Object(l.b)("inlineCode",{parentName:"p"},"false")),Object(l.b)("h5",{id:"--debug"},Object(l.b)("inlineCode",{parentName:"h5"},"--debug")),Object(l.b)("p",null,"Allow server debugging, debugger will be available at 127.0.0.1:","[port]"),Object(l.b)("p",null,"Default: ",Object(l.b)("inlineCode",{parentName:"p"},"0")),Object(l.b)("h5",{id:"--debug-brk"},Object(l.b)("inlineCode",{parentName:"h5"},"--debug-brk")),Object(l.b)("p",null,"Allow server debugging, debugger will be available at 127.0.0.1:","[port]",", process won't start until debugger will be attached"),Object(l.b)("p",null,"Default: ",Object(l.b)("inlineCode",{parentName:"p"},"0")),Object(l.b)("h5",{id:"--production"},Object(l.b)("inlineCode",{parentName:"h5"},"--production")),Object(l.b)("p",null,"Start using unminified production build (the tests would not run in this mode)"),Object(l.b)("p",null,"Default: ",Object(l.b)("inlineCode",{parentName:"p"},"0")),Object(l.b)("p",null,"The following are the default values for the CDN server's port, mount directory and whether to serve statics over https or regular http. You can change them in your ",Object(l.b)("inlineCode",{parentName:"p"},"package.json"),":"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'"yoshi": {\n  "servers": {\n    "cdn": {\n      "port": 3200,\n      "dir": "dist/statics",\n      "ssl": false\n    }\n  }\n}\n')),Object(l.b)("h5",{id:"--url"},Object(l.b)("inlineCode",{parentName:"h5"},"--url")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Similar to the ",Object(l.b)("inlineCode",{parentName:"p"},"startUrl")," configuration option. If both are specified ",Object(l.b)("inlineCode",{parentName:"p"},"--url")," will be used.")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Note: You can disable browser opening functionality by using ",Object(l.b)("inlineCode",{parentName:"p"},"BROWSER=none")," env variable.")),Object(l.b)("p",null,"Opens the browser on a supplied url, also supports multiple urls separated by comma."),Object(l.b)("p",null,"Default: ",Object(l.b)("inlineCode",{parentName:"p"},"http://localhost:3000")),Object(l.b)("h3",{id:"build"},"build"),Object(l.b)("h4",{id:"options-1"},"options"),Object(l.b)("h5",{id:"--analyze"},Object(l.b)("inlineCode",{parentName:"h5"},"--analyze")),Object(l.b)("p",null,"run webpack-bundle-analyzer plugin."),Object(l.b)("h5",{id:"--stats"},Object(l.b)("inlineCode",{parentName:"h5"},"--stats")),Object(l.b)("p",null,"output webpack stats file to ",Object(l.b)("inlineCode",{parentName:"p"},"dist/webpack-stats.json")," (see also ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/yoshi/docs/next/legacy-guides/bundle-analyze"}),"bundle analysis"),")|"),Object(l.b)("h5",{id:"--source-map"},Object(l.b)("inlineCode",{parentName:"h5"},"--source-map")),Object(l.b)("p",null,"Explicitly emit bundle source maps."),Object(l.b)("p",null,"This task will perform the following:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Compile using ",Object(l.b)("inlineCode",{parentName:"li"},"TypeScript")," (",Object(l.b)("inlineCode",{parentName:"li"},"*.ts"),") or ",Object(l.b)("inlineCode",{parentName:"li"},"babel")," (",Object(l.b)("inlineCode",{parentName:"li"},"*.js"),") files into ",Object(l.b)("inlineCode",{parentName:"li"},"dist/"),"."),Object(l.b)("li",{parentName:"ol"},"Copy assets to ",Object(l.b)("inlineCode",{parentName:"li"},"dist")," folder (ejs/html/images...).")),Object(l.b)("p",null,"You can specify multiple entry points in your ",Object(l.b)("inlineCode",{parentName:"p"},"package.json")," file. This gives the ability build multiple bundles at once. More info about Webpack entries can be found ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"http://webpack.github.io/docs/configuration.html#entry"}),"here"),"."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'"yoshi": {\n  "entry": {\n    "a": "./a",\n    "b": "./b",\n    "c": ["./c", "./d"]\n  }\n}\n')),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Note:")," if you have multiple entries you should consider using the ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://gist.github.com/sokra/1522d586b8e5c0f5072d7565c2bee693"}),Object(l.b)("inlineCode",{parentName:"a"},"optimization.splitChunks"))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Note2:")," the decision whether to use ",Object(l.b)("inlineCode",{parentName:"p"},"TypeScript")," or ",Object(l.b)("inlineCode",{parentName:"p"},"babel")," is done by searching ",Object(l.b)("inlineCode",{parentName:"p"},"tsconfig.json")," inside the root directory."),Object(l.b)("h3",{id:"test"},"test"),Object(l.b)("p",null,"Executes tests using ",Object(l.b)("inlineCode",{parentName:"p"},"jest")," as default."),Object(l.b)("h4",{id:"options-2"},"options"),Object(l.b)("h5",{id:"--jest"},Object(l.b)("inlineCode",{parentName:"h5"},"--jest")),Object(l.b)("p",null,"Run tests with Jest - this is the default"),Object(l.b)("h5",{id:"--mocha"},Object(l.b)("inlineCode",{parentName:"h5"},"--mocha")),Object(l.b)("p",null,"Run unit tests with Mocha"),Object(l.b)("p",null,"You can set environment variable ",Object(l.b)("inlineCode",{parentName:"p"},"MOCHA_TIMEOUT")," to set the timeout for mocha tests.\ndefaults to 30000ms"),Object(l.b)("h5",{id:"--jasmine"},Object(l.b)("inlineCode",{parentName:"h5"},"--jasmine")),Object(l.b)("p",null,"Run unit tests with Jasmine"),Object(l.b)("h5",{id:"--karma"},Object(l.b)("inlineCode",{parentName:"h5"},"--karma")),Object(l.b)("p",null,"Run tests with Karma (browser)"),Object(l.b)("h5",{id:"--protractor"},Object(l.b)("inlineCode",{parentName:"h5"},"--protractor")),Object(l.b)("p",null,"Run e2e tests with Protractor (e2e)"),Object(l.b)("h5",{id:"--watch"},Object(l.b)("inlineCode",{parentName:"h5"},"--watch")),Object(l.b)("p",null,"Run tests on watch mode (works for mocha, jasmine, jest & karma)"),Object(l.b)("h5",{id:"--debug-1"},Object(l.b)("inlineCode",{parentName:"h5"},"--debug")),Object(l.b)("p",null,"Allow test debugging (works for mocha, jest & protractor)"),Object(l.b)("h5",{id:"--debug-brk-1"},Object(l.b)("inlineCode",{parentName:"h5"},"--debug-brk")),Object(l.b)("p",null,"Allow test debugging (works for mocha, jest & protractor), process won't start until debugger will be attached"),Object(l.b)("h5",{id:"--coverage"},Object(l.b)("inlineCode",{parentName:"h5"},"--coverage")),Object(l.b)("p",null,"Collect and output code coverage"),Object(l.b)("h4",{id:"examples"},"Examples"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Jest test setup:"),Object(l.b)("p",{parentName:"li"},"Every other argument you'll pass to ",Object(l.b)("inlineCode",{parentName:"p"},"yoshi test")," will be forwarded to jest, For example:"),Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"yoshi test --forceExit foo.spec.js")),Object(l.b)("p",{parentName:"li"},"Will run jest on ",Object(l.b)("inlineCode",{parentName:"p"},"foo.spec.js")," file and will apply ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://jestjs.io/docs/en/cli#forceexit"}),Object(l.b)("inlineCode",{parentName:"a"},"forceExit")),"."),Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"Note:")," ",Object(l.b)("inlineCode",{parentName:"p"},"--debug & --debug-brk")," won't be transfer to jest, but instead will be ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://jestjs.io/docs/en/troubleshooting#tests-are-failing-and-you-don-t-know-why"}),"used in yoshi for test debugging"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Mocha tests setup:"),Object(l.b)("p",{parentName:"li"},"You can add a ",Object(l.b)("inlineCode",{parentName:"p"},"test/mocha-setup.js")," file, with mocha tests specific setup. Mocha will ",Object(l.b)("inlineCode",{parentName:"p"},"require")," this file, if exists.\nExample for such ",Object(l.b)("inlineCode",{parentName:"p"},"test/mocha-setup.js"),":"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'import "babel-polyfill";\nimport "isomorphic-fetch";\nimport sinonChai from "sinon-chai";\nimport chaiAsPromised from "chai-as-promised";\nimport chai from "chai";\n\nchai.use(sinonChai);\nchai.use(chaiAsPromised);\n'))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Karma tests setup:"),Object(l.b)("p",{parentName:"li"},"When running tests using Karma, make sure you have the right configurations in your ",Object(l.b)("inlineCode",{parentName:"p"},"package.json")," as described in ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"#wixspecs"}),Object(l.b)("inlineCode",{parentName:"a"},"yoshi.specs"))," section. In addition, if you have a ",Object(l.b)("inlineCode",{parentName:"p"},"karma.conf.js")," file, the configurations will be merged with our ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"yoshi/config/karma.conf.js"}),"built-in configurations"),".")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Jasmine tests setup:"),Object(l.b)("p",{parentName:"li"},"Specifying a custom glob for test files is possible by configuring ",Object(l.b)("inlineCode",{parentName:"p"},"package.json")," as described in ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"#wixspecs"}),Object(l.b)("inlineCode",{parentName:"a"},"yoshi.specs")),". The default glob matches ",Object(l.b)("inlineCode",{parentName:"p"},".spec.")," files in all folders."),Object(l.b)("p",{parentName:"li"},"If you wish to load helpers, import them all in a file placed at ",Object(l.b)("inlineCode",{parentName:"p"},"'test/setup.js'"),"."))),Object(l.b)("h3",{id:"lint"},"lint"),Object(l.b)("h4",{id:"options-3"},"options"),Object(l.b)("h5",{id:"--fix"},Object(l.b)("inlineCode",{parentName:"h5"},"--fix")),Object(l.b)("p",null,"Automatically fix lint problems"),Object(l.b)("p",null,"Default: ",Object(l.b)("inlineCode",{parentName:"p"},"false")),Object(l.b)("h5",{id:"--format"},Object(l.b)("inlineCode",{parentName:"h5"},"--format")),Object(l.b)("p",null,"Use a specific formatter for eslint/tslint"),Object(l.b)("p",null,"Default: ",Object(l.b)("inlineCode",{parentName:"p"},"stylish")),Object(l.b)("h5",{id:"files"},Object(l.b)("inlineCode",{parentName:"h5"},"[files...]")),Object(l.b)("p",null,"Optional list of files (space delimited) to run lint on"),Object(l.b)("p",null,"Default: empty"),Object(l.b)("p",null,"Executes linters based on the project type:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://palantir.github.io/tslint/"}),Object(l.b)("inlineCode",{parentName:"a"},"TSLint"))," for TypeScript projects (a ",Object(l.b)("inlineCode",{parentName:"li"},"tslint.json")," configuration file is required)"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://eslint.org/"}),Object(l.b)("inlineCode",{parentName:"a"},"ESLint"))," for Babel projects (an ",Object(l.b)("inlineCode",{parentName:"li"},".eslintrc")," configuration file is required)")),Object(l.b)("h3",{id:"release"},"release"),Object(l.b)("h4",{id:"options-4"},"options"),Object(l.b)("h5",{id:"--minor"},Object(l.b)("inlineCode",{parentName:"h5"},"--minor")),Object(l.b)("p",null,"bump a minor version instead of a patch"),Object(l.b)("p",null,"Default: ",Object(l.b)("inlineCode",{parentName:"p"},"false")),Object(l.b)("p",null,"Bump the patch version in ",Object(l.b)("inlineCode",{parentName:"p"},"package.json")," using ",Object(l.b)("inlineCode",{parentName:"p"},"wnpm-release"),". --\x3e"),Object(l.b)("h2",{id:"configuration"},"Configuration"),Object(l.b)("p",null,"Configurations are meant to be inside ",Object(l.b)("inlineCode",{parentName:"p"},"package.json")," under ",Object(l.b)("inlineCode",{parentName:"p"},"yoshi")," section or by passing flags to common tasks, for example:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "name": "my-project",\n  "version": "0.0.1",\n  "yoshi": {\n    "entry": {\n      "app": "./app2.js"\n    }\n  }\n}\n')),Object(l.b)("p",null,"Alternatively, you can create a file named ",Object(l.b)("inlineCode",{parentName:"p"},"yoshi.config.js")," in your project's root directory, and export an object with the configuration you need. For example:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'module.exports = {\n  entry: {\n    app: "./app2.js"\n  }\n};\n')),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Yoshi will prefer configuration from ",Object(l.b)("inlineCode",{parentName:"p"},"package.json")," over ",Object(l.b)("inlineCode",{parentName:"p"},"yoshi.config.js")," file.")),Object(l.b)("h3",{id:"extends"},"extends"),Object(l.b)("p",null,"A path to a package that sets up defaults for ",Object(l.b)("inlineCode",{parentName:"p"},"yoshi"),"'s config. The project's config can override those defaults."),Object(l.b)("p",null,"The purpose of this option is to allow reusing configurations that are the same across multiple (similar) projects."),Object(l.b)("p",null,"Here's an example of how a simple ",Object(l.b)("inlineCode",{parentName:"p"},"extends")," file looks like:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'module.exports = {\n  defaultConfig: {\n    exports: "[name]",\n    externals: {\n      lodash: "lodash"\n    }\n  }\n};\n')),Object(l.b)("h3",{id:"separatecss"},"separateCss"),Object(l.b)("p",null,"By default, your ",Object(l.b)("inlineCode",{parentName:"p"},"require"),"d css will bundled to a separate ",Object(l.b)("inlineCode",{parentName:"p"},"app.css")," bundle. You can leave your css in main js bundle by adding the following to your ",Object(l.b)("inlineCode",{parentName:"p"},"package.json"),":"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'"yoshi": {\n  "separateCss": false\n}\n')),Object(l.b)("h3",{id:"splitchunks"},"splitChunks"),Object(l.b)("p",null,"Configure webpack's ",Object(l.b)("inlineCode",{parentName:"p"},"optimization.splitChunks")," option. It's an opt-in feature that creates a separate file (known as a chunk), consisting of common modules shared between multiple entry points."),Object(l.b)("p",null,"Supports both ",Object(l.b)("inlineCode",{parentName:"p"},"false")," value ",Object(l.b)("em",{parentName:"p"},"(default)"),", ",Object(l.b)("inlineCode",{parentName:"p"},"true")," and a ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://gist.github.com/sokra/1522d586b8e5c0f5072d7565c2bee693#configuration"}),"configuration object"),":"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'"yoshi": {\n  "splitChunks": true\n  }\n')),Object(l.b)("h3",{id:"cssmodules"},"cssModules"),Object(l.b)("p",null,"We use ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/css-modules/css-modules"}),"css modules")," as default. You can disable this option any time by adding the following to wix section inside your ",Object(l.b)("inlineCode",{parentName:"p"},"package.json"),":"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'"yoshi": {\n  "cssModules": false\n}\n')),Object(l.b)("p",null,"You also use the ",Object(l.b)("inlineCode",{parentName:"p"},"prod")," keyword to only separate css on CI and production, this is useful for speeding up HMR on local dev environments."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'"yoshi": {\n  "separateCss": "prod"\n}\n')),Object(l.b)("p",null,"Disabling cssModules on a specific css file is possible by adding ",Object(l.b)("inlineCode",{parentName:"p"},".global")," before file extension.\nFor example:"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"./Counter.global.scss")," //no css modules for this file"),Object(l.b)("p",null,"Using css modules inside your component is easy:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'import s from "./Counter.scss"; // import css/scss\n\n<p className={s.mainColor}>{counterValue}</p>;\n')),Object(l.b)("p",null,"Using css when css modules are turned off:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'import "./Counter.scss"; // import css/scss\n\n<p className="mainColor">{counterValue}</p>;\n')),Object(l.b)("h3",{id:"tpastyle"},"tpaStyle"),Object(l.b)("p",null,"Set to true to build with TPA style."),Object(l.b)("h3",{id:"enhancedtpastyle"},"enhancedTpaStyle"),Object(l.b)("p",null,"Set to true to build with enhanced TPA style."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("img",Object(a.a)({parentName:"li"},{src:"https://img.shields.io/badge/status-experimental-ff69b4.svg",alt:"status experimental"})))),Object(l.b)("h3",{id:"separatestylablecss"},"separateStylableCss"),Object(l.b)("p",null,"Output the stylable css into ",Object(l.b)("inlineCode",{parentName:"p"},"app.stylable.bundle.css")," file."),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"By default, the Stylable CSS output will be bundled to the JS bundle (using the ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/wix/stylable/tree/master/packages/webpack-plugin#plugin-configuration-options"}),Object(l.b)("inlineCode",{parentName:"a"},"includeCSSInJS")," option"),").")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'"yoshi": {\n  "separateStylableCss": true\n}\n')),Object(l.b)("h3",{id:"clientprojectname"},"clientProjectName"),Object(l.b)("p",null,"The name of the client project."),Object(l.b)("h3",{id:"keepfunctionnames"},"keepFunctionNames"),Object(l.b)("p",null,"Set to true to keep function names when uglifying"),Object(l.b)("h3",{id:"entry"},"entry"),Object(l.b)("p",null,"Explanation is in ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"#build"}),"cli/build")," section."),Object(l.b)("h3",{id:"serverscdn"},"servers.cdn"),Object(l.b)("p",null,"Configuration for the CDN server. The default config is:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "yoshi": {\n    "servers": {\n      "cdn": {\n        "ssl": false,\n        "port": 3200,\n        "dir": "dist/statics",\n        "url": "http://localhost:3200"\n      }\n    }\n  }\n}\n')),Object(l.b)("h4",{id:"ssl"},"ssl"),Object(l.b)("p",null,"By setting ssl to true your CDN server will start with HTTPS. You may have to approve the certificates by manually going to ",Object(l.b)("inlineCode",{parentName:"p"},"https://localhost:3200")," on your browser."),Object(l.b)("h4",{id:"url"},"url"),Object(l.b)("p",null,"Yoshi will take care to switch between http and https when using ssl, but you can also manually set the url with this option."),Object(l.b)("h3",{id:"externals"},"externals"),Object(l.b)("p",null,"Prevent bundling of certain imported packages and instead retrieve these external dependencies at runtime (as a script tags)"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "yoshi": {\n    "externals": {\n      "react": "React"\n    }\n  }\n}\n')),Object(l.b)("h3",{id:"starturl"},"startUrl"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Similar to ",Object(l.b)("inlineCode",{parentName:"p"},"yoshi start --url")," cli option\nIf both are specified ",Object(l.b)("inlineCode",{parentName:"p"},"--url")," will be used.")),Object(l.b)("p",null,"opens the browser on the specified url.\nSupports a url string or an array of url strings."),Object(l.b)("h3",{id:"specs"},"specs"),Object(l.b)("p",null,"Specs globs are configurable. ",Object(l.b)("inlineCode",{parentName:"p"},"browser")," is for karma, ",Object(l.b)("inlineCode",{parentName:"p"},"node")," is for mocha and jasmine."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "yoshi": {\n    "specs": {\n      "browser": "dist/custom/globs/**/*.spec.js",\n      "node": "dist/custom/globs/**/*.spec.js"\n    }\n  }\n}\n')),Object(l.b)("p",null,"For example:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "yoshi": {\n    "specs": {\n      "browser": "dist/src/client/**/*.spec.js",\n      "node": "dist/src/server/**/*.spec.js"\n    }\n  }\n}\n')),Object(l.b)("h3",{id:"exports"},"exports"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Please use ",Object(l.b)("strong",{parentName:"p"},"exports")," and not export, there is a bug that the search doesn't work")),Object(l.b)("p",null,"If set, export the bundle as library. ",Object(l.b)("inlineCode",{parentName:"p"},"yoshi.exports")," is the name."),Object(l.b)("p",null,"Use this if you are writing a library and want to publish it as single file. Library will be exported with ",Object(l.b)("inlineCode",{parentName:"p"},"UMD")," format."),Object(l.b)("h3",{id:"transpiletests"},"transpileTests"),Object(l.b)("p",null,"An option to not transpile tests with Babel (via ",Object(l.b)("inlineCode",{parentName:"p"},"@babel/register"),"). Defaults to ",Object(l.b)("inlineCode",{parentName:"p"},"true"),"."),Object(l.b)("h3",{id:"hmr"},"hmr"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Boolean")," | ",Object(l.b)("inlineCode",{parentName:"p"},'"auto"')),Object(l.b)("p",null,"Set to ",Object(l.b)("inlineCode",{parentName:"p"},"false")," in order to disable hot module replacement. (defaults to true)"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},'"auto"')," is an experimental feature which provides zero configuration HMR for react. It will include ",Object(l.b)("inlineCode",{parentName:"p"},"react-hot-loader")," to the top of the entry file and will wrap React's root component in special Higher Order Component which enables hot module reload for react. Also it will call ",Object(l.b)("inlineCode",{parentName:"p"},"module.hot.accept")," on the project's entry file."),Object(l.b)("h3",{id:"livereload"},"liveReload"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Boolean")),Object(l.b)("p",null,"If true, instructs the browser to physically refresh the entire page if / when webpack indicates that a hot patch cannot be applied and a full refresh is needed."),Object(l.b)("h3",{id:"performance"},"performance"),Object(l.b)("p",null,"Allows to use the Webpack Performance Budget feature.\nThe configuration object is the same as in webpack.\nFor more info, you can read the ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://webpack.js.org/configuration/performance/"}),"webpack docs"),"."),Object(l.b)("h3",{id:"resolvealias"},"resolveAlias"),Object(l.b)("p",null,"Allows you to use the Webpack Resolve Alias feature.\nThe configuration object is the same as in Webpack, note that the paths are relative to Webpack's context.\nFor more info, you can read the ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://webpack.js.org/configuration/resolve/#resolve-alias"}),"webpack docs"),"."),Object(l.b)("h3",{id:"hooks"},"hooks"),Object(l.b)("p",null,"Run a shell script at a specific time in yoshi's execution."),Object(l.b)("p",null,"For example:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "yoshi": {\n    "hooks": {\n      "prelint": "echo running-before-lint"\n    }\n  }\n}\n')),Object(l.b)("p",null,"Next time you'll run ",Object(l.b)("inlineCode",{parentName:"p"},"yoshi lint"),", this command will execute and only then the linter will run."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"supported hooks:")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"prelint")," - Runs before the linter")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Missing a hook?")," Feel free to open issues/PRs for more hooks if needed."),Object(l.b)("h3",{id:"umdnameddefine"},"umdNamedDefine"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Boolean")),Object(l.b)("p",null,"If option is ",Object(l.b)("inlineCode",{parentName:"p"},"true")," AMD modules of the UMD build will have names. Otherwise an anonymous define is used(the same as in ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://webpack.js.org/configuration/output/#output-umdnameddefine"}),"webpack"),").\nBy default it is ",Object(l.b)("inlineCode",{parentName:"p"},"true"),"."))}c.isMDXComponent=!0},228:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return j}));var a=n(0),i=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),c=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},p=function(e){var t=c(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,b=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,j=p["".concat(b,".").concat(d)]||p[d]||u[d]||l;return n?i.a.createElement(j,o({ref:t},s,{components:n})):i.a.createElement(j,o({ref:t},s))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,b=new Array(l);b[0]=d;var o={};for(var r in t)hasOwnProperty.call(t,r)&&(o[r]=t[r]);o.originalType=e,o.mdxType="string"==typeof e?e:a,b[1]=o;for(var s=2;s<l;s++)b[s]=n[s];return i.a.createElement.apply(null,b)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);