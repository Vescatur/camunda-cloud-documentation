(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{110:function(e,t,o){"use strict";o.d(t,"a",(function(){return s})),o.d(t,"b",(function(){return m}));var n=o(0),r=o.n(n);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function u(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var i=r.a.createContext({}),d=function(e){var t=r.a.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):c(c({},t),e)),o},s=function(e){var t=d(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),s=d(o),b=n,m=s["".concat(l,".").concat(b)]||s[b]||p[b]||a;return o?r.a.createElement(m,c(c({ref:t},i),{},{components:o})):r.a.createElement(m,c({ref:t},i))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,l=new Array(a);l[0]=b;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var i=2;i<a;i++)l[i]=o[i];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,o)}b.displayName="MDXCreateElement"},71:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return l})),o.d(t,"metadata",(function(){return c})),o.d(t,"rightToc",(function(){return u})),o.d(t,"default",(function(){return d}));var n=o(2),r=o(6),a=(o(0),o(110)),l={id:"overview",title:"Cloud Console Overview"},c={unversionedId:"product-manuals/cloud-console/overview",id:"product-manuals/cloud-console/overview",isDocsHomePage:!1,title:"Cloud Console Overview",description:"Workflow Engineered For The Cloud",source:"@site/docs/product-manuals/cloud-console/overview.md",slug:"/product-manuals/cloud-console/overview",permalink:"/camunda-cloud-documentation/docs/product-manuals/cloud-console/overview",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/product-manuals/cloud-console/overview.md",version:"current",sidebar:"camundaCloud",previous:{title:"Install the NodeJS Client",permalink:"/camunda-cloud-documentation/docs/product-manuals/clients/nodejs/install-the-nodejs-client"},next:{title:"Create a Camunda Cloud Account",permalink:"/camunda-cloud-documentation/docs/product-manuals/cloud-console/manage-cloud-account/create-camunda-cloud-account"}},u=[{value:"Workflow Engineered For The Cloud",id:"workflow-engineered-for-the-cloud",children:[]},{value:"Outlook",id:"outlook",children:[]}],i={rightToc:u};function d(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},i,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"workflow-engineered-for-the-cloud"},"Workflow Engineered For The Cloud"),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://camunda.com/products/cloud/"}),"Camunda Cloud")," delivers a scalable, on-demand workflow platform:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Design, automate and manage your business-critical processes"),Object(a.b)("li",{parentName:"ul"},"Scale to meet performance and throughput requirements"),Object(a.b)("li",{parentName:"ul"},"Improve developer productivity"),Object(a.b)("li",{parentName:"ul"},"Seamlessly integrate with your tools")),Object(a.b)("p",null,"Currently, Camunda Cloud offers the following components, which materialise in a Zeebe cluster:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://zeebe.io/"}),"Zeebe"),": Workflow Engine"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.zeebe.io/operations/"}),"Operate"),": Monitoring and Operating Tool")),Object(a.b)("p",null,"Workflows are created and parameterized with the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/zeebe-io/zeebe-modeler"}),"Zeebe Modeler"),"- a desktop application that is not available as SaaS. ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://cawemo.com/"}),"Cawemo")," can also be used for modeling, but please note that Zeebe does not yet support all BPMN symbols."),Object(a.b)("h2",{id:"outlook"},"Outlook"),Object(a.b)("p",null,"In future, the following products will also become part of Camunda Cloud:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Cawemo: collaborative modeling of workflows. Cawemo can already be used independently, but has no link to Camunda Cloud yet."),Object(a.b)("li",{parentName:"ul"},"Tasklist and Optimize: Similar to the products for Camunda BPM, there will be a version in the cloud that works with Zeebe.")))}d.isMDXComponent=!0}}]);