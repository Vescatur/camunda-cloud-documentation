(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{127:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(a),d=n,h=p["".concat(c,".").concat(d)]||p[d]||b[d]||o;return a?r.a.createElement(h,i(i({ref:t},s),{},{components:a})):r.a.createElement(h,i({ref:t},s))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<o;s++)c[s]=a[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},144:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/Operate-Dashboard-Deployed-Workflow-b570c7231e4027ddd85f05e015269258.png"},170:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/Operate-Dashboard-No-Workflows-1adc381f3a460075206cf95451f85601.png"},57:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return u}));var n=a(2),r=a(6),o=(a(0),a(127)),c={id:"install-and-start",title:"Install & Start Operate"},i={unversionedId:"product-manuals/operate/userguide/install-and-start",id:"product-manuals/operate/userguide/install-and-start",isDocsHomePage:!1,title:"Install & Start Operate",description:"Running via Docker (Local Development)",source:"@site/docs/product-manuals/operate/userguide/install-and-start.md",slug:"/product-manuals/operate/userguide/install-and-start",permalink:"/camunda-cloud-documentation/docs/product-manuals/operate/userguide/install-and-start",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/docs/product-manuals/operate/userguide/install-and-start.md",version:"current",sidebar:"camundaCloud",previous:{title:"Introduction",permalink:"/camunda-cloud-documentation/docs/product-manuals/operate/userguide/index"},next:{title:"Getting Familiar With Operate",permalink:"/camunda-cloud-documentation/docs/product-manuals/operate/userguide/basic-operate-navigation"}},l=[{value:"Running via Docker (Local Development)",id:"running-via-docker-local-development",children:[]},{value:"Running with Kubernetes (Production)",id:"running-with-kubernetes-production",children:[]},{value:"Manual Configuration (Local Development)",id:"manual-configuration-local-development",children:[{value:"Download Operate and a compatible version of Zeebe.",id:"download-operate-and-a-compatible-version-of-zeebe",children:[]},{value:"Download Elasticsearch",id:"download-elasticsearch",children:[]},{value:"Run Elasticsearch",id:"run-elasticsearch",children:[]},{value:"Run Zeebe",id:"run-zeebe",children:[]},{value:"Run Operate",id:"run-operate",children:[]}]},{value:"Access the Operate Web Interface",id:"access-the-operate-web-interface",children:[]}],s={rightToc:l};function u(e){var t=e.components,c=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,c,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"running-via-docker-local-development"},"Running via Docker (Local Development)"),Object(o.b)("p",null,"The easiest way to run Operate in development is with Docker. This gives you a consistent, reproducible environment and an out-of-the-box integrated experience for experimenting with Zeebe and Operate."),Object(o.b)("p",null,"To do this, you need ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.docker.com"}),"Docker Desktop")," installed on your development machine."),Object(o.b)("p",null,"The ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/zeebe-io/zeebe-docker-compose"}),"zeebe-docker-compose")," repository contains an ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/zeebe-io/zeebe-docker-compose/tree/master/operate"}),"operate")," profile that starts a single Zeebe broker with Operate and all its dependencies. ",Object(o.b)("strong",{parentName:"p"},"See the README file in the repository for instructions to start Zeebe and Operate using Docker.")),Object(o.b)("p",null,"If you are using Docker, once you follow the instructions in the repository, skip ahead to the section ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"#access-the-operate-web-interface"}),'"Access the Operate Web Interface\u201d'),"."),Object(o.b)("h2",{id:"running-with-kubernetes-production"},"Running with Kubernetes (Production)"),Object(o.b)("p",null,"We will update this section after Operate is available for production use. "),Object(o.b)("p",null,"Running Operate with Kubernetes will be recommended for production deployments. "),Object(o.b)("h2",{id:"manual-configuration-local-development"},"Manual Configuration (Local Development)"),Object(o.b)("p",null,"Here, we\u2019ll walk you through how to download and run an Operate distribution manually, without using Docker. "),Object(o.b)("p",null,"Note that the Operate web UI is available by default at ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://localhost:8080"}),"http://localhost:8080"),", so please be sure this port is available. "),Object(o.b)("h3",{id:"download-operate-and-a-compatible-version-of-zeebe"},"Download Operate and a compatible version of Zeebe."),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/zeebe-io/zeebe/releases"}),"Operate and Zeebe distributions are available for download on the same release page. ")," "),Object(o.b)("p",null,"Note that each version of Operate is compatible with a specific version of Zeebe. For example: Zeebe 0.18.0 and Operate-1.0.0-alpha11 are compatible. "),Object(o.b)("p",null,"On the Zeebe release page, compatible versions of Zeebe and Operate are grouped together. Please be sure to download and use compatible versions. This is handled for you if you use the Docker profile from our repository. "),Object(o.b)("h3",{id:"download-elasticsearch"},"Download Elasticsearch"),Object(o.b)("p",null,"Operate uses open-source Elasticsearch as its underlying data store, and so to run Operate, you need to download and run Elasticsearch. "),Object(o.b)("p",null,"Operate is currently compatible Elasticsearch 6.8.1. ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.elastic.co/downloads/past-releases/elasticsearch-6-8-1"}),"You can download Elasticsearch here.")," "),Object(o.b)("h3",{id:"run-elasticsearch"},"Run Elasticsearch"),Object(o.b)("p",null,"To run Elasticsearch, execute the following commands in Terminal or another command line tool of your choice:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"cd elasticsearch-*\nbin/elasticearch\n")),Object(o.b)("p",null,"You\u2019ll know Elasticsearch has started successfully when you see a message similar to:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"[INFO ][o.e.l.LicenseService     ] [-IbqP-o] license [72038058-e8ae-4c71-81a1-e9727f2b81c7] mode [basic] - valid\n")),Object(o.b)("h3",{id:"run-zeebe"},"Run Zeebe"),Object(o.b)("p",null,"To run Zeebe, execute the following commands:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"cd zeebe-broker-*\n./bin/broker\n")),Object(o.b)("p",null,"You\u2019ll know Zeebe has started successfully when you see a message similar to:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"[partition-0] [0.0.0.0:26501-zb-actors-0] INFO  io.zeebe.raft - Joined raft in term 0\n[exporter] [0.0.0.0:26501-zb-actors-1] INFO  io.zeebe.broker.exporter.elasticsearch - Exporter opened\n")),Object(o.b)("h3",{id:"run-operate"},"Run Operate"),Object(o.b)("p",null,"To run Operate, execute the following commands:"),Object(o.b)("p",null,"`cd camunda-operate-distro-1.0.0-*``"),Object(o.b)("p",null,"bin/operate"),Object(o.b)("p",null,"You\u2019ll know Operate has started successfully when you see messages similar to:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"DEBUG 1416 --- [       Thread-6] o.c.o.e.w.BatchOperationWriter           : 0 operations locked\nDEBUG 1416 --- [       Thread-4] o.c.o.z.ZeebeESImporter                  : Latest loaded position for alias [zeebe-record-deployment] and partitionId [0]: 0\nINFO 1416 --- [       Thread-4] o.c.o.z.ZeebeESImporter                  : Elasticsearch index for ValueType DEPLOYMENT was not found, alias zeebe-record-deployment. Skipping.\n")),Object(o.b)("h2",{id:"access-the-operate-web-interface"},"Access the Operate Web Interface"),Object(o.b)("p",null,"The Operate web interface is available at ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://localhost:8080"}),"http://localhost:8080"),". "),Object(o.b)("p",null,"The first screen you'll see is a sign-in page. Use the credentials ",Object(o.b)("inlineCode",{parentName:"p"},"demo")," / ",Object(o.b)("inlineCode",{parentName:"p"},"demo")," to sign in. "),Object(o.b)("p",null,"After you sign in, you'll see an empty dashboard if you haven't yet deployed any workflows:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"operate-dash-no-workflows",src:a(170).default})),Object(o.b)("p",null,"If you ",Object(o.b)("em",{parentName:"p"},"have")," deployed workflows or created workflow instances, you'll see those on your dashboard:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"operate-dash-with-workflows",src:a(144).default})))}u.isMDXComponent=!0}}]);