!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("VdtnetTable",[],t):"object"==typeof exports?exports.VdtnetTable=t():e.VdtnetTable=t()}("undefined"!=typeof self?self:this,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=0)}({"//wg":function(e,t,n){var r=n("QJWk");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n("rjj0")("2f3df5b6",r,!0,{})},0:function(e,t,n){e.exports=n("lVK7")},"6y0c":function(e,t,n){var r=n("VU/8")(n("GDQz"),n("XCp7"),!1,function(e){n("//wg")},null,null);e.exports=r.exports},"FZ+f":function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),s=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(s).concat([o]).join("\n")}var a;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var s=this[o][0];"number"==typeof s&&(r[s]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},GDQz:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"VdtnetTable",props:{className:{type:String,default:"table table-striped table-bordered dt-responsive nowrap w-100"},url:{type:String},opts:{type:Object},fields:{type:Object},jquery:{type:Object},selectable:{type:Boolean}},data:function(){return{options:{dom:"<'row'<'col-sm-12 col-md-4'l><'text-right col-sm-12 col-md-6'B><'col-sm-12 col-md-2'f>><'row'<'col-sm-12'tr>><'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",columns:[],buttons:[]},dataTable:null}},computed:{jq:function(){return this.jquery||window.jQuery}},created:function(){var e=this,t=e.jq;if(e.opts&&(e.options=t.extend({},e.opts,e.options)),e.url&&(e.options.ajax=e.url),e.fields){var n=e.fields,r=e.options.columns;for(var o in n){var s=n[o];s.name=s.name||o;var a={searchable:s.searchable,title:s.label||o,width:s.width,data:s.name,visible:s.visible,className:s.className};s.width&&(a.width=s.width),s.defaultContent&&(a.defaultContent=s.defaultContent),s.sortable&&(a.orderable=s.sortable),s.render&&(a.render=s.render),r.push(a)}}e.selectable&&(e.options.columns=[{orderable:!1,className:"select-checkbox",data:null,defaultContent:"",title:'<input type="checkbox" class="select-all-checkbox">',targets:0}].concat(e.options.columns),e.options.select=t.extend(e.options.select||{},{style:"os",selector:"td:first-child"}),e.options.order||(e.options.order=[[1,"asc"]]))},mounted:function(){var e=this,t=e.jq,n=t(e.$refs.table);e.dataTable=n.DataTable(e.options),e.selectable&&(n.on("click","th input.select-all-checkbox",function(n){t(n.target).is(":checked")?e.dataTable.rows().select():e.dataTable.rows().deselect()}),e.dataTable.on("select deselect",function(){e.dataTable.rows({selected:!0}).count()!==e.dataTable.rows().count()?t("th.select-checkbox").removeClass("selected"):t("th.select-checkbox").addClass("selected")})),n.on("click","[data-action]",function(n){n.preventDefault(),n.stopPropagation();for(var r=t(n.target),o=r,s=o.attr("data-action");!s;){if(o.hasClass("vdtnet-container"))return;s=(o=o.parent()).attr("data-action")}if(s){var a=o.closest("tr");if(a){a.hasClass("child")&&(a=a.prev());var i=e.dataTable.row(a),c=i.data();e.$emit(s,{data:c,row:i,that:o})}else e.$emit(s,{target:r})}})}}},QJWk:function(e,t,n){(e.exports=n("FZ+f")(!1)).push([e.i,".select-all-checkbox,.select-checkbox{cursor:pointer}",""])},"VU/8":function(e,t){e.exports=function(e,t,n,r,o,s){var a,i=e=e||{},c=typeof e.default;"object"!==c&&"function"!==c||(a=e,i=e.default);var l,d="function"==typeof i?i.options:i;if(t&&(d.render=t.render,d.staticRenderFns=t.staticRenderFns,d._compiled=!0),n&&(d.functional=!0),o&&(d._scopeId=o),s?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},d._ssrRegister=l):r&&(l=r),l){var u=d.functional,f=u?d.render:d.beforeCreate;u?(d._injectStyles=l,d.render=function(e,t){return l.call(t),f(e,t)}):d.beforeCreate=f?[].concat(f,l):[l]}return{esModule:a,exports:i,options:d}}},XCp7:function(e,t){e.exports={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"vdtnet-container"},[t("div",{staticClass:"container-fluid vdtnet-head"},[this._t("HEAD")],2),this._v(" "),t("div",{staticClass:"vtdnet-body"},[this._m(0)]),this._v(" "),t("div",{staticClass:"container-fluid vdtnet-foot"},[this._t("FOOT")],2)])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("table",{ref:"table",class:e.className},[n("thead",[n("tr",e._l(e.options.columns,function(t,r){return n("th",{key:r,class:t.className},[e._t("HEAD_"+t.name,[n("div",{domProps:{innerHTML:e._s(t.title)}})],{field:t,i:r})],2)}))])])}]}},lVK7:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("6y0c"),o=n.n(r);t.default=o.a},rjj0:function(e,t,n){var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o=n("tTVk"),s={},a=r&&(document.head||document.getElementsByTagName("head")[0]),i=null,c=0,l=!1,d=function(){},u=null,f="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(e){for(var t=0;t<e.length;t++){var n=e[t],r=s[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(b(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var a=[];for(o=0;o<n.parts.length;o++)a.push(b(n.parts[o]));s[n.id]={id:n.id,refs:1,parts:a}}}}function v(){var e=document.createElement("style");return e.type="text/css",a.appendChild(e),e}function b(e){var t,n,r=document.querySelector("style["+f+'~="'+e.id+'"]');if(r){if(l)return d;r.parentNode.removeChild(r)}if(p){var o=c++;r=i||(i=v()),t=g.bind(null,r,o,!1),n=g.bind(null,r,o,!0)}else r=v(),t=function(e,t){var n=t.css,r=t.media,o=t.sourceMap;r&&e.setAttribute("media",r);u.ssrId&&e.setAttribute(f,t.id);o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}e.exports=function(e,t,n,r){l=n,u=r||{};var a=o(e,t);return h(a),function(t){for(var n=[],r=0;r<a.length;r++){var i=a[r];(c=s[i.id]).refs--,n.push(c)}t?h(a=o(e,t)):a=[];for(r=0;r<n.length;r++){var c;if(0===(c=n[r]).refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete s[c.id]}}}};var m,y=(m=[],function(e,t){return m[e]=t,m.filter(Boolean).join("\n")});function g(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=y(t,o);else{var s=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(s,a[t]):e.appendChild(s)}}},tTVk:function(e,t){e.exports=function(e,t){for(var n=[],r={},o=0;o<t.length;o++){var s=t[o],a=s[0],i={id:e+":"+o,css:s[1],media:s[2],sourceMap:s[3]};r[a]?r[a].parts.push(i):n.push(r[a]={id:a,parts:[i]})}return n}}})});
//# sourceMappingURL=index.js.map