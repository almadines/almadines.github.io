(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"/e88":function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},"0THn":function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("q1tI"),a=n.n(r),o=n("/MKj");n("t3i4");var c=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){return a.a.createElement("div",{className:"input-group mb-3 counter-wrapper"},a.a.createElement("input",{type:"text",className:"form-control",value:this.props.count}),a.a.createElement("div",{className:"input-group-append"},a.a.createElement("button",{onClick:this.props.increment,className:"btn btn-outline-secondary",type:"button"},"Increment!")))},r}(a.a.Component),u=Object(o.connect)((function(e){return{count:e.count}}),(function(e){return{increment:function(){return e({type:"INCREMENT",value:"hi"})}}}))(c)},B7F5:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("q1tI"),a=n.n(r),o=(n("xfY5"),n("+ZDr")),c=n.n(o);n("lw3w"),n("emEt").default.enqueue,a.a.createContext({});n("je2q");var u=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){return a.a.createElement("div",{className:"layout-wrapper"},a.a.createElement("div",{className:"layout-side-nav"},a.a.createElement("h3",{className:"display-4"},"Nav:"),a.a.createElement("ul",{className:"list-unstyled"},a.a.createElement("li",null,a.a.createElement(c.a,{to:"/"},"Main page")),a.a.createElement("li",null,a.a.createElement(c.a,{to:"/sub-page/"},"Sub page")))),a.a.createElement("div",{className:"layout-main-content"},this.props.children))},r}(a.a.Component)},bjTE:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=n("0THn"),c=n("B7F5"),u=n("lQHm"),i=n.n(u);n("eLMh");var p=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){return a.a.createElement(c.a,null,a.a.createElement("h1",{className:"display-1"},"Sub page!"),a.a.createElement(o.a,null),a.a.createElement("img",{src:i.a}))},r}(a.a.Component);t.default=p},eLMh:function(e,t,n){},je2q:function(e,t,n){},lQHm:function(e,t,n){e.exports=n.p+"static/kitten-a947855eefcc52d1a558faa5b3c52e60.jpg"},lw3w:function(e,t,n){var r;e.exports=(r=n("rzlk"))&&r.default||r},qncB:function(e,t,n){var r=n("XKFU"),a=n("vhPU"),o=n("eeVq"),c=n("/e88"),u="["+c+"]",i=RegExp("^"+u+u+"*"),p=RegExp(u+u+"*$"),s=function(e,t,n){var a={},u=o((function(){return!!c[e]()||"​"!="​"[e]()})),i=a[e]=u?t(l):c[e];n&&(a[n]=i),r(r.P+r.F*u,"String",a)},l=s.trim=function(e,t){return e=String(a(e)),1&t&&(e=e.replace(i,"")),2&t&&(e=e.replace(p,"")),e};e.exports=s},rzlk:function(e,t,n){"use strict";n.r(t);n("91GP");var r=n("q1tI"),a=n.n(r),o=n("IOVJ");t.default=function(e){var t=e.location,n=e.pageResources;return n?a.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json)):null}},t3i4:function(e,t,n){},xfY5:function(e,t,n){"use strict";var r=n("dyZX"),a=n("aagx"),o=n("LZWt"),c=n("Xbzi"),u=n("apmT"),i=n("eeVq"),p=n("kJMx").f,s=n("EemH").f,l=n("hswa").f,f=n("qncB").trim,m=r.Number,E=m,N=m.prototype,v="Number"==o(n("Kuth")(N)),d="trim"in String.prototype,h=function(e){var t=u(e,!1);if("string"==typeof t&&t.length>2){var n,r,a,o=(t=d?t.trim():f(t,3)).charCodeAt(0);if(43===o||45===o){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===o){switch(t.charCodeAt(1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+t}for(var c,i=t.slice(2),p=0,s=i.length;p<s;p++)if((c=i.charCodeAt(p))<48||c>a)return NaN;return parseInt(i,r)}}return+t};if(!m(" 0o1")||!m("0b1")||m("+0x1")){m=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof m&&(v?i((function(){N.valueOf.call(n)})):"Number"!=o(n))?c(new E(h(t)),n,m):h(t)};for(var y,g=n("nh4g")?p(E):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),I=0;g.length>I;I++)a(E,y=g[I])&&!a(m,y)&&l(m,y,s(E,y));m.prototype=N,N.constructor=m,n("KroJ")(r,"Number",m)}}}]);
//# sourceMappingURL=component---src-pages-sub-page-tsx-f8b5e5f4c15e37406d33.js.map