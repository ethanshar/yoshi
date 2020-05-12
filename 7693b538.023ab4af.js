(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{164:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var r=n(1),a=n(6),o=(n(0),n(228)),i={id:"consuming-data-from-the-server",title:"Consuming Data from the Server",sidebar_label:"Consuming Data from the Server"},c={id:"version-4.x/yoshi-server/consuming-data-from-the-server",title:"Consuming Data from the Server",description:"### Server functions",source:"@site/versioned_docs/version-4.x/yoshi-server/consuming-data-from-the-server.md",permalink:"/yoshi/docs/yoshi-server/consuming-data-from-the-server",editUrl:"https://github.com/wix/yoshi/edit/master/website/versioned_docs/version-4.x/yoshi-server/consuming-data-from-the-server.md",version:"4.x",lastUpdatedBy:"Yaniv Efraim",lastUpdatedAt:1589279308,sidebar_label:"Consuming Data from the Server",sidebar:"version-4.x/yoshi-server",previous:{title:"Getting Started",permalink:"/yoshi/docs/yoshi-server/getting-started"},next:{title:"Exposing a Route",permalink:"/yoshi/docs/yoshi-server/exposing-route"}},s=[{value:"Server functions",id:"server-functions",children:[]},{value:"React Bindings",id:"react-bindings",children:[]},{value:"method",id:"method",children:[]},{value:"context (this)",id:"context-this",children:[]}],l={rightToc:s};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"server-functions"},"Server functions"),Object(o.b)("p",null,"In Yoshi Server, a server function is a way of exposing data from your server to the client."),Object(o.b)("p",null,"Server Functions are named exports, inside a file with an ",Object(o.b)("inlineCode",{parentName:"p"},"*.api.[j|t]s")," extension:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'import { method } from "yoshi-server";\n\nexport const greeting = method(function(name: string) {\n  return {\n    greet: `hello ${name}!`,\n    name\n  };\n});\n')),Object(o.b)("p",null,"A Server function can be invoked from the client by importing and calling it with arguments."),Object(o.b)("hr",null),Object(o.b)("p",null,"For example, let's initialize ",Object(o.b)("inlineCode",{parentName:"p"},"yoshi-server-client")," in our main ",Object(o.b)("inlineCode",{parentName:"p"},"client.ts")," file, and pass it as a prop to our components:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'import React from "react";\nimport ReactDOM from "react-dom";\nimport HttpClient from "yoshi-server-client";\nimport Component from "./component";\n\nconst client = new HttpClient({ baseUrl: "/_api/projectName" });\n\nReactDOM.render(\n  <Component httpClient={client} />,\n  document.getElementById("root")\n);\n')),Object(o.b)("p",null,"Now we import our server function and call it using a ",Object(o.b)("inlineCode",{parentName:"p"},"httpClient.request")," call:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'// component.tsx\nimport React from "react";\nimport { HttpClient } from "yoshi-server-client";\nimport { greet } from "./api/greeting.api";\n\ninterface PropsType {\n  httpClient: HttpClient;\n}\n\nexport default class App extends React.Component<PropsType> {\n  state = { text: "" };\n  async componentDidMount() {\n    const { httpClient } = this.props;\n    // trigger an http request that will "run" `greet(\'world\')` on the server.\n    const result = await httpClient.request({ method: greet, args: ["world"] });\n    this.setState({ text: result.greeting });\n  }\n\n  render() {\n    return (\n      <div>\n        <h2 id="my-text">{this.state.text}</h2>\n      </div>\n    );\n  }\n}\n')),Object(o.b)("p",null,"How does it work?"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"When importing a server function, we have a Webpack loader that returns an object with types (try running: ",Object(o.b)("inlineCode",{parentName:"li"},"console.log(greet);")," on the client and see for yourself)."),Object(o.b)("li",{parentName:"ul"},"Yoshi Server runtime triggers a post call to ",Object(o.b)("inlineCode",{parentName:"li"},"/_api_"),", with details about the request, and arguments (open the network tab and see for yourself)."),Object(o.b)("li",{parentName:"ul"},"Server file is not bundled with client code!"),Object(o.b)("li",{parentName:"ul"},"When using Typescript, the response and the request arguments are fully typed!")),Object(o.b)("h3",{id:"react-bindings"},"React Bindings"),Object(o.b)("p",null,"Instead of passing ",Object(o.b)("inlineCode",{parentName:"p"},"httpClient")," all over, consider using the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"react-binding"}),"React Bindings"),"."),Object(o.b)("h3",{id:"method"},"method"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"method")," is a helper function used to add typing for our context (this). It works both in Javascript and Typescript code."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'import { method } from "yoshi-server";\n\nexport const greeting = method(function(age: number) {\n  // Adds type completions for `this`\n  console.log(this.req);\n\n  return {\n    name: `world! ${age}`,\n    age\n  };\n});\n')),Object(o.b)("h3",{id:"context-this"},"context (this)"),Object(o.b)("p",null,"If you need to access data (such as request, response, Bootstrap Context, and more) from your server function, these are the values that are available on context (this):"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"name"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"type"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"req"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(r.a)({parentName:"td"},{href:"https://github.com/types/express/blob/master/lib/request.d.ts"}),"Request")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(r.a)({parentName:"td"},{href:"http://expressjs.com"}),"Express's")," request object")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"res"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(r.a)({parentName:"td"},{href:"https://github.com/types/express/blob/master/lib/request.d.ts"}),"Response")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(r.a)({parentName:"td"},{href:"http://expressjs.com"}),"Express's")," response object")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"initData"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"any"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"An object returned from a ",Object(o.b)("inlineCode",{parentName:"td"},"src/init-server.js")," / ",Object(o.b)("inlineCode",{parentName:"td"},"src/init-server.ts")," file. This data is useful when you need to read/fetch data on server initialization (for example, read a configuration file).")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"context"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"BootstrapContext"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(r.a)({parentName:"td"},{href:"https://github.com/wix-platform/wix-node-platform"}),"wix-bootstrap-ng"),"'s ",Object(o.b)("a",Object(r.a)({parentName:"td"},{href:"https://github.com/wix-platform/wix-node-platform/tree/master/bootstrap/wix-bootstrap-ng#context"}),"context")," object.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"config"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"any"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"an object containing the project's ",Object(o.b)("inlineCode",{parentName:"td"},".erb")," configuration file. Loading this object is done by convention, assuming the ",Object(o.b)("inlineCode",{parentName:"td"},".erb")," file is called the same as the project's name in ",Object(o.b)("inlineCode",{parentName:"td"},"package.json")," (stripping organization name, if exists). see the example below.")))),Object(o.b)("p",null,"Config object example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'//package.json\n{\n  "name": "@wix/my-cool-project",\n  ...\n}\n')),Object(o.b)("p",null,"Then your ",Object(o.b)("inlineCode",{parentName:"p"},".erb")," file should be:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'// templates/my-cool-project.json.erb\n{\n  "hello": "world"\n}\n')),Object(o.b)("p",null,"And anywhere in your route / server functions:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"console.log(this.config.hello); // logs 'world'\n")))}b.isMDXComponent=!0},228:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=b(n),u=r,d=p["".concat(i,".").concat(u)]||p[u]||m[u]||o;return n?a.a.createElement(d,c({ref:t},l,{components:n})):a.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);