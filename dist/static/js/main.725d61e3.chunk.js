(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/logo.ee7cd8ed.svg"},function(e,t,n){e.exports=n(20)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(3),l=n.n(c),i=(n(16),n(1)),s=n(2),u=n(6),r=n(5),m=n(7),d=(n(17),n(4)),p=(n(18),function(e){function t(e){return Object(i.a)(this,t),Object(u.a)(this,Object(r.a)(t).call(this,e))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"checkToast",value:function(e){switch(e){case 0:return o.a.createElement("div",{className:"icon"},o.a.createElement("div",{className:"success-icon"}));case 1:return o.a.createElement("div",{className:"icon"},o.a.createElement("div",{className:"fail-icon"}));case 2:return o.a.createElement("div",{className:"icon"},o.a.createElement("div",{className:"warning-icon"}));case 3:return o.a.createElement("div",{className:"loading-icon"},o.a.createElement("span",null),o.a.createElement("span",null),o.a.createElement("span",null),o.a.createElement("span",null),o.a.createElement("span",null),o.a.createElement("span",null),o.a.createElement("span",null),o.a.createElement("span",null),o.a.createElement("span",null),o.a.createElement("span",null),o.a.createElement("span",null),o.a.createElement("span",null));default:return null}}},{key:"render",value:function(){var e=this.props.setting,t=e.type,n=e.content,a=e.opacity,c={background:"rgba(0,0,0,".concat(void 0===a?0:a,")")};return o.a.createElement("div",{className:"mask",style:c},o.a.createElement("div",{className:"toast"},this.checkToast(t),o.a.createElement("div",{className:"msg"},n)))}}]),t}(o.a.Component)),v=function(){function e(){Object(i.a)(this,e)}return Object(s.a)(e,null,[{key:"toast",value:function(e){var t=this,n={type:0,content:"\u9ed8\u8ba4\u4fe1\u606f",time:2e3,opacity:0,onSucc:function(){}};n="string"==typeof e?Object(d.a)({},n,{content:e,type:4}):Object(d.a)({},n,e),this.show(0,n),3!==n.type&&setTimeout(function(){t.hide(),n.onSucc()},n.time)}},{key:"dialog",value:function(e){var t={type:0,title:"\u6211\u662f\u9ed8\u8ba4title",content:"\u6211\u662f\u9ed8\u8ba4content",btnSucc:"\u6211\u662f\u9ed8\u8ba4btn",CloseShow:!1,onClose:function(){console.log("\u8499\u5c42\u56de\u8c03")},onSucc:function(){console.log("\u6210\u529f\u56de\u8c03")},onFail:function(){console.log("\u5931\u8d25\u56de\u8c03")}};t=Object(d.a)({},t,e),this.show(1,t)}},{key:"show",value:function(e,t){var n=document.createElement("div"),a=document.createAttribute("id");this.toastEle="pluginEle-"+(new Date).getTime(),a.value=this.toastEle,n.setAttributeNode(a),document.body.appendChild(n),l.a.render(o.a.createElement(p,{setting:t}),n)}},{key:"hide",value:function(){var e=document.querySelector("#"+this.toastEle);e&&(l.a.unmountComponentAtNode(e),document.body.removeChild(e))}}]),e}();v.toastEle="";n(19);var h=function(e){function t(e){return Object(i.a)(this,t),Object(u.a)(this,Object(r.a)(t).call(this,e))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.setting,t=(e.type,e.content),n=e.opacity,a=e.title,c=e.btnSucc,l=e.btnFail,i=e.onClose,s=e.onSucc,u=e.onFail,r={background:"rgba(0,0,0,".concat(n,")")};return o.a.createElement("div",{className:"mask vue-alert",onClick:function(e){i(e)},style:r},o.a.createElement("div",{className:"alert"},o.a.createElement("div",{className:"title1"},a),o.a.createElement("p",{className:"title2"},t),o.a.createElement("div",{className:"btnlist onepx-top-border"},o.a.createElement("div",{className:"ok",onClick:function(e){s(e)}},c),o.a.createElement("div",{className:"abort onepx-left-border",onClick:function(e){u(e)}},l))))}}]),t}(o.a.Component),f=function(){function e(){Object(i.a)(this,e)}return Object(s.a)(e,null,[{key:"toast",value:function(e){var t=this,n={type:0,content:"\u9ed8\u8ba4\u4fe1\u606f",time:2e3,opacity:0,onSucc:function(){}};n="string"==typeof e?Object(d.a)({},n,{content:e}):Object(d.a)({},n,e),this.show(0,n),3!==n.type&&setTimeout(function(){t.hide(),n.onSucc()},n.time)}},{key:"dialog",value:function(e){var t={type:0,title:"\u6211\u662f\u9ed8\u8ba4title",content:"\u6211\u662f\u9ed8\u8ba4content",btnSucc:"\u6211\u662f\u9ed8\u8ba4btn",CloseShow:!1,onClose:function(){console.log("\u8499\u5c42\u56de\u8c03")},onSucc:function(){console.log("\u6210\u529f\u56de\u8c03")},onFail:function(){console.log("\u5931\u8d25\u56de\u8c03")}};t=Object(d.a)({},t,e),this.show(t)}},{key:"show",value:function(e){var t=document.createElement("div"),n=document.createAttribute("id");this.toastEle="pluginEle-"+(new Date).getTime(),n.value=this.toastEle,t.setAttributeNode(n),document.body.appendChild(t),l.a.render(o.a.createElement(h,{setting:e}),t)}},{key:"hide",value:function(){var e=document.querySelector("#"+this.toastEle);e&&(l.a.unmountComponentAtNode(e),document.body.removeChild(e))}}]),e}();f.toastEle="";var E=n(9),b=n.n(E),g=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"toast",value:function(){v.toast({type:0,content:"\u6211\u662f\u9ed8\u8ba4Toast",time:1e3,opacity:.5,onSucc:function(){console.log("\u6211\u662fToast\u7684\u56de\u8c03\uff01")}})}},{key:"dialog",value:function(){f.dialog({type:0,opacity:.5,title:"\u6211\u662ftitle",content:"\u6211\u662fcontent",btnSucc:"\u6211\u662f\u6210\u529f",btnFail:"\u6211\u662f\u53d6\u6d88",onClose:function(e){console.log("\u6211\u662f\u8499\u5c42\u7684\u5173\u95ed\u56de\u8c03\uff01"),f.hide()},onSucc:function(e){e.stopPropagation(),v.toast("\u6211\u662f\u9ed8\u8ba4Toast")},onFail:function(e){e.stopPropagation(),console.log("\u6211\u662f\u5931\u8d25\u7684\u56de\u8c03\uff01")}})}},{key:"loading",value:function(){v.toast({type:3,content:"\u6211\u662f\u9ed8\u8ba4loading",time:1e3,opacity:.5,onSucc:function(){console.log("\u6211\u662floading\u7684\u56de\u8c03\uff01")}}),setTimeout(function(){v.hide()},3e3)}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"App-header"},o.a.createElement("img",{src:b.a,className:"App-logo2"})),o.a.createElement("div",null,o.a.createElement("button",{onClick:this.toast},"\u70b9\u51fb\u5f39\u51faToast")),o.a.createElement("div",null,o.a.createElement("button",{onClick:this.dialog},"\u70b9\u51fb\u5f39\u51fadialog")),o.a.createElement("div",null,o.a.createElement("button",{onClick:this.loading},"\u70b9\u51fb\u5f39\u51faloading"))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,1,2]]]);
//# sourceMappingURL=main.725d61e3.chunk.js.map