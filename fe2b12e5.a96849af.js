(window.webpackJsonp=window.webpackJsonp||[]).push([[371],{441:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return d}));var r=n(3),o=n(7),a=(n(0),n(450)),i={id:"index",title:"Deployment guide",sidebar_label:"Overview"},c={unversionedId:"product-manuals/zeebe/deployment-guide/index",id:"product-manuals/zeebe/deployment-guide/index",isDocsHomePage:!1,title:"Deployment guide",description:"This chapter contains information for users who want to deploy and run Zeebe in a private cloud or on their own hardware.",source:"@site/docs/product-manuals/zeebe/deployment-guide/index.md",slug:"/product-manuals/zeebe/deployment-guide/index",permalink:"/docs/product-manuals/zeebe/deployment-guide/index",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/docs/product-manuals/zeebe/deployment-guide/index.md",version:"current",sidebar_label:"Overview",sidebar:"Product Manuals",previous:{title:"Exporters",permalink:"/docs/product-manuals/zeebe/technical-concepts/exporters"},next:{title:"Local installation",permalink:"/docs/product-manuals/zeebe/deployment-guide/local/install"}},u=[],l={rightToc:u};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This chapter contains information for users who want to deploy and run Zeebe in a private cloud or on their own hardware."),Object(a.b)("p",null,"Zeebe can be run as a Docker image or as a Kubernetes deployment."),Object(a.b)("p",null,"We recommend using Docker during development. This gives you a consistent, repeatable development environment."),Object(a.b)("p",null,"We recommend using either Camunda Cloud or Kubernetes and container images in production. This provides you with predictable and consistent configuration, and the ability to manage deployment using automation tools."),Object(a.b)("p",null,"The deployment guide covers the following topics:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/product-manuals/zeebe/deployment-guide/local/install"}),"Local installation")," - contains instructions and a quick start guide to install Zeebe locally"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/product-manuals/zeebe/deployment-guide/docker/install"}),"Docker container")," - covers running Zeebe in a Docker environment"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/product-manuals/zeebe/deployment-guide/kubernetes/index"}),"Kubernetes deployment")," - gives information on running Zeebe in a Kubernetes environment"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/product-manuals/zeebe/deployment-guide/getting-started/index"}),"Getting started guide")," - shows you how to work with Zeebe."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/product-manuals/zeebe/deployment-guide/configuration/configuration"}),"Configuration")," - explains the configuration options. These configuration options apply to both environments, but not to Camunda Cloud. In Camunda Cloud the configuration is provided for you."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/product-manuals/zeebe/deployment-guide/security/security"}),"Security")," - discusses the security aspects of running Zeebe and how to use them"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/product-manuals/zeebe/deployment-guide/operations/index"}),"Operation")," - outlines topics that become relevant when you want to operate Zeebe in production")))}d.isMDXComponent=!0},450:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),d=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=d(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=d(n),b=r,m=p["".concat(i,".").concat(b)]||p[b]||s[b]||a;return n?o.a.createElement(m,c(c({ref:t},l),{},{components:n})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);