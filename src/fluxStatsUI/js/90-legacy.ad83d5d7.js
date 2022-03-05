(self["webpackChunkfluxstats"]=self["webpackChunkfluxstats"]||[]).push([[90],{7090:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return O}});var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[t._m(0),a("p",{staticClass:"category"}),a("div",[a("loading",{attrs:{active:t.isLoading,"can-cancel":!0},on:{"update:active":function(e){t.isLoading=e}}})],1),a("div",{staticClass:"col-12"},[a("card",[a("div",[a("div",{staticClass:"col-12 d-flex justify-content-center justify-content-sm-between flex-wrap"},[a("el-select",{staticClass:"select-default mb-3",staticStyle:{width:"200px"},attrs:{placeholder:"Per page"},model:{value:t.pagination.perPage,callback:function(e){t.$set(t.pagination,"perPage",e)},expression:"pagination.perPage"}},t._l(t.pagination.perPageOptions,(function(t){return a("el-option",{key:t,staticClass:"select-default",attrs:{label:t,value:t}})})),1),a("el-input",{staticClass:"mb-3",staticStyle:{width:"200px"},attrs:{type:"search",placeholder:"Search Round Time","aria-controls":"datatables"},model:{value:t.searchQuery,callback:function(e){t.searchQuery=e},expression:"searchQuery"}})],1),a("div",{staticClass:"col-sm-12"},[a("el-table",{staticStyle:{width:"100%"},attrs:{stripe:"",data:t.queriedData,border:""}},t._l(t.tableColumns,(function(t){return a("el-table-column",{key:t.label,attrs:{"min-width":t.minWidth,prop:t.prop,label:t.label}})})),1)],1)]),a("div",{staticClass:"col-12 d-flex justify-content-center justify-content-sm-between flex-wrap",attrs:{slot:"footer"},slot:"footer"},[a("div",{},[a("p",{staticClass:"card-category"},[t._v("Showing "+t._s(t.from+1)+" to "+t._s(t.to)+" of "+t._s(t.total)+" entries")])]),a("l-pagination",{staticClass:"pagination-no-border",attrs:{"per-page":t.pagination.perPage,total:t.pagination.total},model:{value:t.pagination.currentPage,callback:function(e){t.$set(t.pagination,"currentPage",e)},expression:"pagination.currentPage"}})],1)])],1)])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-12"},[a("h2",{staticClass:"title"},[t._v("Info")])])}];function i(t){if(Array.isArray(t))return t}function s(t,e){var a=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=a){var n,r,i=[],s=!0,o=!1;try{for(a=a.call(t);!(s=(n=a.next()).done);s=!0)if(i.push(n.value),e&&i.length===e)break}catch(l){o=!0,r=l}finally{try{s||null==a["return"]||a["return"]()}finally{if(o)throw r}}return i}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,n=new Array(e);a<e;a++)n[a]=t[a];return n}function l(t,e){if(t){if("string"===typeof t)return o(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?o(t,e):void 0}}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t,e){return i(t)||s(t,e)||l(t,e)||u()}var p,h=a(3796),f=a(5034),d=a.n(f),g=a(3364),m=a.n(g),b=a(5614),v=a.n(b),y=a(7186),C=a.n(y),w=(a(8309),a(7042),a(4916),a(4765),a(7941),a(9720),a(6160)),x=a(4221),P=a(9669),S=a.n(P),k=a(7398),T=a.n(k),_={components:(p={LPagination:w.tl},(0,h.Z)(p,C().name,C()),(0,h.Z)(p,v().name,v()),(0,h.Z)(p,m().name,m()),(0,h.Z)(p,d().name,d()),(0,h.Z)(p,"Loading",T()),p),data:function(){return{pagination:{perPage:5,currentPage:1,perPageOptions:[5,10,25,50],total:0},searchQuery:"",propsToSearch:["roundTime"],tableColumns:[{prop:"roundTime",label:"Round Time",minWidth:200},{prop:"cumulus",label:"Cumulus",minWidth:250},{prop:"nimbus",label:"Nimbus",minWidth:100},{prop:"stratus",label:"Stratus",minWidth:120}],tableData:[],fuseSearch:null,isLoading:!1}},computed:{pagedData:function(){return this.tableData.slice(this.from,this.to)},queriedData:function(){var t;if(""!==this.searchQuery){var e=[];t=this.fuseSearch.search("=".concat(this.searchQuery));for(var a=0;a<Object.keys(t).length;a++)e.push(t[a].item);t=e,this.paginationTotal(t.length)}else this.paginationTotal(this.tableData.length),t=this.tableData;return t.slice(this.from,this.to)},to:function(){var t=this.from+this.pagination.perPage;return this.total<t&&(t=this.total),t},from:function(){return this.pagination.perPage*(this.pagination.currentPage-1)},total:function(){return this.paginationTotal(this.tableData.length),this.tableData.length}},methods:{paginationTotal:function(t){this.pagination.total=t}},mounted:function(){var t=this;this.isLoading=!0,S().get("https://stats.runonflux.io/fluxhistorystats").then((function(e){t.isLoading=!1;for(var a=0,n=Object.entries(e.data.data);a<n.length;a++){var r=c(n[a],2),i=r[0],s=r[1];t.tableData.push({roundTime:i,cumulus:s.cumulus,nimbus:s.nimbus,stratus:s.stratus})}t.fuseSearch=new x.Z(t.tableData,{useExtendedSearch:!0,keys:["roundTime"]})}))}},D=_,j=a(1001),L=(0,j.Z)(D,n,r,!1,null,null,null),O=L.exports},4699:function(t,e,a){var n=a(9781),r=a(1702),i=a(1956),s=a(5656),o=a(5296).f,l=r(o),u=r([].push),c=function(t){return function(e){var a,r=s(e),o=i(r),c=o.length,p=0,h=[];while(c>p)a=o[p++],n&&!l(r,a)||u(h,t?[a,r[a]]:r[a]);return h}};t.exports={entries:c(!0),values:c(!1)}},9720:function(t,e,a){var n=a(2109),r=a(4699).entries;n({target:"Object",stat:!0},{entries:function(t){return r(t)}})}}]);
//# sourceMappingURL=90-legacy.ad83d5d7.js.map