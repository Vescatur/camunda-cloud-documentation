(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{243:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,m=p["".concat(c,".").concat(d)]||p[d]||b[d]||a;return n?o.a.createElement(m,i(i({ref:t},s),{},{components:n})):o.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},320:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/zeebe-k8s-helm-09fe39b9192ae0bcf2bf1268a937aaea.png"},72:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return l}));var r=n(2),o=n(6),a=(n(0),n(243)),c={id:"index",title:"Overview"},i={unversionedId:"product-manuals/zeebe/kubernetes/index",id:"product-manuals/zeebe/kubernetes/index",isDocsHomePage:!1,title:"Overview",description:"Zeebe on K8s",source:"@site/docs/product-manuals/zeebe/kubernetes/index.md",slug:"/product-manuals/zeebe/kubernetes/index",permalink:"/docs/product-manuals/zeebe/kubernetes/index",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/docs/product-manuals/zeebe/kubernetes/index.md",version:"current",sidebar:"camundaCloud",previous:{title:"Disk Space",permalink:"/docs/product-manuals/zeebe/operations/disk-space"},next:{title:"Prerequisites",permalink:"/docs/product-manuals/zeebe/kubernetes/prerequisites"}},u=[],s={rightToc:u};function l(e){var t=e.components,c=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,c,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("img",{alt:"Zeebe on K8s",src:n(320).default})),Object(a.b)("p",null,"This section covers the fundamentals of how to run Zeebe in Kubernetes. There are several alternatives on how to deploy applications to a Kubernetes Cluster, but the following sections are using Helm charts to deploy a set of components into your cluster. "),Object(a.b)("p",null,"Helm allows you to choose exactly what chart (set of components) do you want to install and how these components needs to be configured. These Helm Charts are continuously being improved and released to the Official ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"http://helm.zeebe.io"}),"Zeebe Helm Chart Repository http://helm.zeebe.io")),Object(a.b)("p",null,"You are free to choose your Kubernetes provider, our Helm charts are not cloud provider specific and we encourage ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"http://github.com/zeebe-io/zeebe-full-helm/issues"}),"reporting issues here")," if you find them. "),Object(a.b)("p",null,"You can also join us in ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://zeebe-slack-invite.herokuapp.com/"}),"Slack at:  https://zeebe-slack-invite.herokuapp.com/")),Object(a.b)("p",null,"This document is divided in the following sections:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/product-manuals/zeebe/kubernetes/prerequisites"}),"Prerequisites")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/product-manuals/zeebe/kubernetes/installing-helm"}),"Getting to know and Installing Zeebe Helm Charts")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/product-manuals/zeebe/kubernetes/accessing-operate"}),"Accessing Operate from outside our Kubernetes Cluster"))))}l.isMDXComponent=!0}}]);