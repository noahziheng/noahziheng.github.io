(function(t){function e(e){for(var r,o,i=e[0],u=e[1],s=e[2],l=0,f=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);p&&p(e);while(f.length)f.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(c.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},o={app:0},a={app:0},c=[];function i(t){return u.p+"js/"+({about:"about",notfound:"notfound",weixin:"weixin"}[t]||t)+"."+{about:"b9806518",notfound:"9561a88e",weixin:"d4fc54e1"}[t]+".js"}function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={about:1,weixin:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var r="css/"+({about:"about",notfound:"notfound",weixin:"weixin"}[t]||t)+"."+{about:"34e0f32f",notfound:"31d6cfe0",weixin:"3b2a84f6"}[t]+".css",a=u.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var s=c[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===a))return e()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){s=f[i],l=s.getAttribute("data-href");if(l===r||l===a)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var r=e&&e.target&&e.target.src||a,c=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[t],p.parentNode.removeChild(p),n(c)},p.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(p)})).then((function(){o[t]=0})));var r=a[t];if(0!==r)if(r)e.push(r[2]);else{var c=new Promise((function(e,n){r=a[t]=[e,n]}));e.push(r[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(t);var f=new Error;s=function(e){l.onerror=l.onload=null,clearTimeout(p);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[t]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/",u.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var f=0;f<s.length;f++)e(s[f]);var p=l;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"1a2b":function(t,e,n){"use strict";n("eaab")},2965:function(t,e,n){"use strict";n("6251")},"33a6":function(t,e,n){},"5c0b":function(t,e,n){"use strict";n("e332")},6251:function(t,e,n){},"6f18":function(t,e,n){"use strict";n("33a6")},"799d":function(t){t.exports=JSON.parse('{"name":"隔壁老玄","name_sub":"Noah Gao","desc":"一个 Web 开发者，偶尔还搞搞物联网","aboutme":"关于我","tip_weixin":"欢迎关注我的微信公众号～","lost":"您已迷失！","wait":"正在跳转，稍等片刻～","education":{"title":"教育经历","tust_name":"天津科技大学","tust_desc":"本科 自动化专业"},"work":{"future_tag":"尚未入职","working_tag":"在职","title":"工作经验","ali_name":"阿里巴巴集团","ali_desc":"前端工程师，淘系技术部","xcf_name":"北京下厨房科技有限公司","xcf_desc":"前端开发实习生","ali_intern_name":"阿里巴巴集团","ali_intern_desc":"实习前端工程师，天猫技术部"},"paper":{"title":"学术论文","cpci_name":"嵌入式 Linux 环境与单片机系统通信实例研究 -- 以树莓派和STM32为例","cpci_tag":"CPCI","cpci_desc":"ICAROB 2019","chn_name":"实验室实时监测装置的设计","chn_tag":"中文期刊","chn_desc":"《数字化用户》"},"projects":{"title":"我的项目","github":"开源部分可以到 <a href=\\"https://github.com/noahziheng\\" style=\\"text-decoration: none;color: #2c3e50b5;\\">我的 Github</a> 查看，欢迎 Follow","private":"或者可以到 <a href=\\"https://blog.noahgao.net/\\" style=\\"text-decoration: none;color: #2c3e50b5;\\">这里</a> 看到包括大学期间私有项目的一个简表～"}}')},c952:function(t,e,n){"use strict";n("e194")},cd49:function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=n("a925"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:{fullscreen:t.fullscreenFlag},attrs:{id:"app"}},["home"!==t.$route.name?n("font-awesome-icon",{staticClass:"back-btn",attrs:{icon:"arrow-left",size:"lg"},on:{click:function(e){return t.$router.replace({name:"home"})}}}):t._e(),n("lang-select"),n("router-view",{staticClass:"main-view",class:{fullscreen:t.fullscreenFlag}}),n("page-footer")],1)},c=[],i=(n("6b54"),n("2397"),n("7f7f"),n("7514"),n("d225")),u=n("b0b4"),s=n("4e2b"),l=n("308d"),f=n("6bb5"),p=n("9ab4"),h=n("60a3"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lang-select"},[n("span",{class:{"lang-active":"en"===t.$i18n.locale},attrs:{id:"lang-span-en"},on:{click:function(e){return t.handleSelect("en")}}},[t._v("En")]),t._v("/\n  "),n("span",{class:{"lang-active":"zh"===t.$i18n.locale},attrs:{id:"lang-span-cn"},on:{click:function(e){return t.handleSelect("zh")}}},[t._v("中")])])},b=[];function m(t){var e=v();return function(){var n,r=Object(f["a"])(t);if(e){var o=Object(f["a"])(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l["a"])(this,n)}}function v(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var g=function(t){Object(s["a"])(n,t);var e=m(n);function n(){return Object(i["a"])(this,n),e.apply(this,arguments)}return Object(u["a"])(n,[{key:"handleSelect",value:function(t){this.$i18n.locale=t}}]),n}(h["b"]);g=Object(p["a"])([h["a"]],g);var y=g,_=y,j=(n("1a2b"),n("2877")),w=Object(j["a"])(_,d,b,!1,null,"870f680c",null),O=w.exports,x=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},C=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"},[n("p",[t._v("♥ Built with Love")]),n("p",[n("a",{attrs:{href:"https://beian.miit.gov.cn"}},[t._v("津ICP备16007205号-1")])]),n("p",[n("a",{attrs:{href:"http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=12010302001093"}},[t._v("津公网安备 12010302001093号")])])])}];function k(t){var e=R();return function(){var n,r=Object(f["a"])(t);if(e){var o=Object(f["a"])(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l["a"])(this,n)}}function R(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var S=function(t){Object(s["a"])(n,t);var e=k(n);function n(){return Object(i["a"])(this,n),e.apply(this,arguments)}return n}(h["b"]);S=Object(p["a"])([h["a"]],S);var E=S,P=E,$=(n("6f18"),Object(j["a"])(P,x,C,!1,null,"f65f754c",null)),D=$.exports;n("f5df");function L(t){var e=T();return function(){var n,r=Object(f["a"])(t);if(e){var o=Object(f["a"])(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l["a"])(this,n)}}function T(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var A=function(t){Object(s["a"])(n,t);var e=L(n);function n(){return Object(i["a"])(this,n),e.apply(this,arguments)}return Object(u["a"])(n,[{key:"fullscreenFlag",get:function(){var t=this,e=["about"];return!e.find((function(e){return e===t.$route.name}))}}]),n}(h["b"]);A=Object(p["a"])([Object(h["a"])({components:{LangSelect:O,PageFooter:D}})],A);var z=A,F=z,I=(n("5c0b"),Object(j["a"])(F,a,c,!1,null,null,null)),N=I.exports,M=n("8c4f"),W=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("img",{staticClass:"avatar",attrs:{src:n("e94e")}}),r("div",{staticClass:"info"},[r("h1",[t._v(t._s(t.$t("name")))]),r("h3",{staticClass:"name-sub"},[t._v(t._s(t.$t("name_sub")))]),r("p",{staticClass:"desc"},[t._v(t._s(t.$t("desc")))]),r("router-link",{attrs:{to:"/about"}},[r("button",{staticClass:"about-btn"},[t._v(t._s(t.$t("aboutme")))])]),r("website-nav")],1)])},B=[],G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[t._l(t.sites,(function(e,r){return[n("a",{key:r,attrs:{href:e.href},on:{click:function(n){e.onclick&&e.onclick(n,t.$router)}}},["juejin"===e.icon?n("JuejinLogo",{staticClass:"icon-juejin"}):n("font-awesome-icon",{attrs:{icon:[e.icon_prefix||"fab",e.icon],size:"2x"}})],1)]}))],2)},J=[],U={functional:!0,render:function(t,e){var n=e._c;return n("svg",{class:[e.data.class,e.data.staticClass],style:[e.data.style,e.data.staticStyle],attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36.03 28.67"}},[n("path",{attrs:{fill:"currentColor",d:"M21.29 2.58L18 0l-3.41 2.7-.17.14L18 5.71l3.61-2.87zm12.42 10L18 25 2.32 12.61 0 14.47l18 14.2 18-14.21zm-15.7 1L9.46 6.87 7.15 8.73 18 17.29l10.88-8.57-2.32-1.86z"}})])}};function q(t){var e=H();return function(){var n,r=Object(f["a"])(t);if(e){var o=Object(f["a"])(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l["a"])(this,n)}}function H(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var K=function(t){Object(s["a"])(n,t);var e=q(n);function n(){var t;return Object(i["a"])(this,n),t=e.apply(this,arguments),t.sites=[{icon:"weixin",href:"",onclick:function(t,e){t.preventDefault(),t.stopPropagation(),e.push({name:"weixin"})}},{icon:"github",href:"https://github.com/noahziheng"},{icon:"juejin",href:"https://juejin.im/user/583bdbf1a22b9d006c1514f8"},{icon_prefix:"fas",icon:"archive",href:"https://blog.noahgao.net"},{icon:"weibo",href:"https://weibo.com/noah1719"},{icon:"zhihu",href:"https://www.zhihu.com/people/noah-gao/activities"}],t}return n}(h["b"]);K=Object(p["a"])([Object(h["a"])({components:{JuejinLogo:U}})],K);var X=K,Y=X,Z=(n("2965"),Object(j["a"])(Y,G,J,!1,null,"e9c74e92",null)),Q=Z.exports;function V(t){var e=tt();return function(){var n,r=Object(f["a"])(t);if(e){var o=Object(f["a"])(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l["a"])(this,n)}}function tt(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var et=function(t){Object(s["a"])(n,t);var e=V(n);function n(){return Object(i["a"])(this,n),e.apply(this,arguments)}return n}(h["b"]);et=Object(p["a"])([Object(h["a"])({components:{WebsiteNav:Q}})],et);var nt=et,rt=nt,ot=(n("c952"),Object(j["a"])(rt,W,B,!1,null,"e5e44b34",null)),at=ot.exports;r["default"].use(M["a"]);var ct=new M["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:at},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/weixin",name:"weixin",component:function(){return n.e("weixin").then(n.bind(null,"4cbc"))}},{path:"*",name:"notfound",component:function(){return n.e("notfound").then(n.bind(null,"9703"))}}]}),it=n("799d"),ut=n("e312"),st={zh:it,en:ut},lt=n("ecee"),ft=n("01e5"),pt=n("cc3e"),ht=n("2f23"),dt=n("eb55"),bt=n("b246"),mt=n("5e9c"),vt=n("ad3d");lt["c"].add(ft["faArrowLeft"],pt["faArchive"],ht["faWeixin"],dt["faGithub"],bt["faZhihu"],mt["faWeibo"]),r["default"].component("font-awesome-icon",vt.FontAwesomeIcon),r["default"].config.productionTip=!1,r["default"].use(o["a"]);var gt=new o["a"]({locale:"en",fallbackLocale:"en",messages:st});new r["default"]({router:ct,i18n:gt,render:function(t){return t(N)}}).$mount("#app")},e194:function(t,e,n){},e312:function(t){t.exports=JSON.parse('{"name":"Noah Gao","name_sub":"隔壁老玄","desc":"A Web and IoT Developer","aboutme":"About Me","tip_weixin":"Follow me on WeChat.","lost":"You\'re lost!","wait":"Wait a moment plz~","education":{"title":"Education","tust_name":"Tianjin University of Science and Technology","tust_desc":"Undergraduate, Major is Automation"},"work":{"future_tag":"Future","working_tag":"Working","title":"Work","ali_name":"Alibaba Group","ali_desc":"Front-End Developer, Tao-Technoloy","xcf_name":"Xiachufang Technology","xcf_desc":"Front-End Developer Intern","ali_intern_name":"Alibaba Group","ali_intern_desc":"Front-End Developer Intern, Tmall Technoloy"},"paper":{"title":"Paper","cpci_name":"Case Study on Communication between Embedded Linux Environment and Micro-controller","cpci_tag":"CPCI","cpci_desc":"ICAROB 2019","chn_name":"实验室实时监测装置的设计","chn_tag":"Chinese periodical","chn_desc":"《数字化用户》"},"projects":{"title":"Projects","github":"Follow me on <a href=\\"https://github.com/noahziheng\\" style=\\"text-decoration: none;color: #2c3e50b5;\\">my Github</a>","private":"Or read the <a href=\\"https://blog.noahgao.net/projects-archives\\" style=\\"text-decoration: none;color: #2c3e50b5;\\">simple list</a>, it includes some private projects by my college"}}')},e332:function(t,e,n){},e94e:function(t,e,n){t.exports=n.p+"img/avatar.94efde2d.jpeg"},eaab:function(t,e,n){}});
//# sourceMappingURL=app.a4666202.js.map