(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{198:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(9),o=(n(0),n(278)),i={id:"exposing-route",title:"Exposing a Route",sidebar_label:"Exposing a Route"},c={id:"version-4.x/yoshi-server/exposing-route",title:"Exposing a Route",description:"Since server functions are consumed from the client, we'll use route functions to expose routes to the outside world. Route functions are similar to server functions and support expressing routes (along with URL parameters) via the filesystem:",source:"@site/versioned_docs/version-4.x/yoshi-server/exposing-route.md",permalink:"/yoshi/docs/yoshi-server/exposing-route",editUrl:"https://github.com/wix/yoshi/edit/master/website/versioned_docs/version-4.x/yoshi-server/exposing-route.md",version:"4.x",lastUpdatedBy:"Artem Yavorsky",lastUpdatedAt:1589303241,sidebar_label:"Exposing a Route",sidebar:"version-4.x/yoshi-server",previous:{title:"Consuming Data from the Server",permalink:"/yoshi/docs/yoshi-server/consuming-data-from-the-server"},next:{title:"React Binding",permalink:"/yoshi/docs/yoshi-server/react-binding"}},l=[{value:"Route with params",id:"route-with-params",children:[]},{value:"Index route",id:"index-route",children:[]},{value:"Rendering an <code>ejs</code> template from a route",id:"rendering-an-ejs-template-from-a-route",children:[]},{value:"context (this)",id:"context-this",children:[]},{value:"route",id:"route",children:[]}],s={rightToc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Since server functions are consumed from the client, we'll use route functions to expose routes to the outside world. Route functions are similar to server functions and support expressing routes (along with URL parameters) via the filesystem:"),Object(o.b)("p",null,"Files in ",Object(o.b)("inlineCode",{parentName:"p"},"src/routes")," will be mapped to a route on the server with a URL that matches the filesystem. For example, ",Object(o.b)("inlineCode",{parentName:"p"},"src/routes/users/create.js")," will translate into ",Object(o.b)("inlineCode",{parentName:"p"},"/users/create"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'//src/routes/app.js\nimport { route } from "yoshi-server";\n\nexport default route(async function() {\n  return {\n    name: "world!"\n  };\n});\n')),Object(o.b)("p",null,"We can then call this route on:"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"http://www.mydomain.com/app")),Object(o.b)("h3",{id:"route-with-params"},"Route with params"),Object(o.b)("p",null,"Named parameters can be used by wrapping the filename or directory name with ",Object(o.b)("inlineCode",{parentName:"p"},"[]")," and are available to the route function as ",Object(o.b)("inlineCode",{parentName:"p"},"this.params"),". For example: ",Object(o.b)("inlineCode",{parentName:"p"},"src/routes/users/[userid].js")," will map into ",Object(o.b)("inlineCode",{parentName:"p"},"/users/:userid"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'//src/routes/users/[userid].js\nimport { route } from "yoshi-server";\n\nexport default route(async function() {\n  return {\n    data: `hello ${this.params.userid}`\n  };\n});\n')),Object(o.b)("p",null,"We can then call this route on:"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"http://www.mydomain.com/users/123")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Note"),": You can have multiple params (all available under ",Object(o.b)("inlineCode",{parentName:"p"},"this.params"),"):"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"//src/routes/users/[userid]/apps/[appid].js")," -> ",Object(o.b)("inlineCode",{parentName:"p"},"http://www.mydomain.com/users/123/apps/myAppId")),Object(o.b)("h3",{id:"index-route"},"Index route"),Object(o.b)("p",null,"Default route ('/') can be used by adding an ",Object(o.b)("inlineCode",{parentName:"p"},"index.[j|t]s")," file:\n",Object(o.b)("inlineCode",{parentName:"p"},"//src/routes/index.js")),Object(o.b)("p",null,"You will then be able to access it on:"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"http://www.mydomain.com")),Object(o.b)("h3",{id:"rendering-an-ejs-template-from-a-route"},"Rendering an ",Object(o.b)("inlineCode",{parentName:"h3"},"ejs")," template from a route"),Object(o.b)("p",null,"Rendering EJS templates can be done by calling the renderView() function. It accepts the ",Object(o.b)("inlineCode",{parentName:"p"},"response")," object, a template path and the data, and will render the template."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'import { renderView, route } from "yoshi-server";\n\nexport default route(async function() {\n  renderView(this.res, "app", {\n    title: "hello world"\n  });\n\n  return html;\n});\n')),Object(o.b)("h3",{id:"context-this"},"context (this)"),Object(o.b)("p",null,"Our context exposes the following properties:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"name"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"type"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"req"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(r.a)({parentName:"td"},{href:"https://github.com/types/express/blob/master/lib/request.d.ts"}),"Request")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(r.a)({parentName:"td"},{href:"http://expressjs.com"}),"Express's")," request object")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"res"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(r.a)({parentName:"td"},{href:"https://github.com/types/express/blob/master/lib/request.d.ts"}),"Response")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(r.a)({parentName:"td"},{href:"http://expressjs.com"}),"Express's")," response object")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"initData"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"any"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"An object returned from a ",Object(o.b)("inlineCode",{parentName:"td"},"src/init-server.js")," / ",Object(o.b)("inlineCode",{parentName:"td"},"src/init-server.ts")," file. This data is usefull when you need to read / fetch data on server initialization (for example, read a configuration file).")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"params"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"{ ","[param: string]",": any }"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"a key value dictionary of url params")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"context"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"BootstrapContext"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(r.a)({parentName:"td"},{href:"https://github.com/wix-platform/wix-node-platform"}),"wix-bootstrap-ng"),"'s ",Object(o.b)("a",Object(r.a)({parentName:"td"},{href:"https://github.com/wix-platform/wix-node-platform/tree/master/bootstrap/wix-bootstrap-ng#context"}),"context")," object.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"config"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"any"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"an object containg the project's ",Object(o.b)("inlineCode",{parentName:"td"},".erb")," configuration file. Loading this object is done by convention, assuming the ",Object(o.b)("inlineCode",{parentName:"td"},".erb")," file will be called the same as the project's name in ",Object(o.b)("inlineCode",{parentName:"td"},"package.json")," (stripping organization name, if exists). see example below.")))),Object(o.b)("p",null,"Config object example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'//package.json\n{\n  "name": "@wix/my-cool-project",\n  ...\n}\n')),Object(o.b)("p",null,"Then your ",Object(o.b)("inlineCode",{parentName:"p"},".erb")," file should be:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'// templates/my-cool-project.json.erb\n{\n  "hello": "world"\n}\n')),Object(o.b)("p",null,"And anywhere in your route / server functions:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"console.log(this.config.hello); //logs 'world'\n")),Object(o.b)("h3",{id:"route"},"route"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"route")," is a helper function used to add typing for our context (this). This will work both in Javascript and Typescript code."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'import { route } from "yoshi-server";\n\nexport default route(async function() {\n  // Adds type completions for `this`\n  console.log(this.req);\n\n  return {\n    name: "world!"\n  };\n});\n')))}b.isMDXComponent=!0},278:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(n),d=r,m=p["".concat(i,".").concat(d)]||p[d]||u[d]||o;return n?a.a.createElement(m,c({ref:t},s,{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);