webpackJsonp([34],{520:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(80),o=r(a),l=n(82),u=r(l),s=n(63),c=r(s),i=n(38),f=r(i),d=n(10),p=r(d),h=n(1),m=r(h),y=n(2),_=r(y),b=n(3),v=r(b),k=n(4),g=r(k),x=n(728),C=r(x);n(79),n(83),n(64),n(39),n(739);var O=n(0),P=r(O),j=n(21),N=n(66),E=r(N),w=n(26),S=n(756),B=r(S),F=C.default.CheckboxItem,I=function(e){function t(e){(0,m.default)(this,t);var n=(0,v.default)(this,(t.__proto__||(0,p.default)(t)).call(this,e));return n.onSearchValueChage=function(e){n.setState({searchValue:(0,w._trim)(e)})},n.onSearch=function(){n.setState({persn:"",persnName:"",deptDesc:""},function(){var e=n.state.searchValue;if(!e.trim())return void f.default.info("\u8f93\u5165\u5185\u5bb9\u4e0d\u80fd\u4e3a\u7a7a\uff01");n.props.dispatch({type:"addressBook/searchPersons",payload:{searchValue:e,type:"2"}})})},n.onHandleClear=function(){n.props.history.go(-1)},n.onUserNameChange=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.persn,r=e.persnName,a=e.deptDesc;n.setState({persn:t,persnName:r,deptDesc:a})},n.onConfirm=function(){var e=n.state;if(!n.state.persn)return void f.default.info("\u672a\u9009\u62e9\u52a0\u7b7e\u4eba\uff01");n.props.dispatch({type:"approval/saveAsignPerson",payload:e}),n.props.history.go(-1)},n.state={persn:"",persnName:"",deptDesc:"",searchValue:""},n}return(0,g.default)(t,e),(0,_.default)(t,[{key:"componentDidMount",value:function(){this.autoFocusInst.focus()}},{key:"render",value:function(){var e=this,t=this.props.addressBook.searchPersons,n=void 0===t?[]:t,r=this.state,a=r.persn,l=r.persnName,s=r.deptDesc;return P.default.createElement("div",{className:B.default.addressBookPage},P.default.createElement("div",{className:B.default.search,onClick:this.onHandleSearch},P.default.createElement(c.default,{placeholder:"\u641c\u7d22\uff08\u52a0\u7b7e\u4eba\u59d3\u540d\u6216\u6240\u5728\u90e8\u95e8\uff09",ref:function(t){e.autoFocusInst=t},value:this.state.searchValue,onChange:this.onSearchValueChage,onClear:this.onHandleClear,onSubmit:this.onSearch})),P.default.createElement("div",null,n.length>0&&P.default.createElement(o.default,{className:B.default.searchPersonList},n.map(function(t,n){return P.default.createElement(F,{key:n,checked:a===t.persn,onClick:function(){return e.onUserNameChange(t)}},P.default.createElement("div",{className:B.default.listPerson,style:a===t.persn?{color:"#000"}:null},P.default.createElement("div",{className:B.default.ItemName},t.persnName),P.default.createElement("div",{className:B.default.ItemBranch},t.deptDesc)))})),!n.length&&!this.props.loading.effects["addressBook/searchPersons"]&&P.default.createElement(E.default,{content:"\u65e0\u67e5\u8be2\u7ed3\u679c"}),P.default.createElement(u.default,{toast:!0,animating:!!this.props.loading.effects["addressBook/searchPersons"]}),l&&s&&P.default.createElement("div",{className:B.default.footerFixed},P.default.createElement(o.default,null,P.default.createElement("div",{className:B.default.list},P.default.createElement("div",{className:B.default.personInfo},P.default.createElement("div",{className:B.default.name},l),P.default.createElement("div",{className:B.default.branch},s)),P.default.createElement("div",{className:B.default.listConfirm,onClick:this.onConfirm},"\u786e\u5b9a"))))))}}]),t}(P.default.Component);t.default=(0,j.connect)(function(e){return{addressBook:e.addressBook,approval:e.approval,loading:e.loading}})(I),e.exports=t.default},616:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),o=r(a),l=n(2),u=r(l),s=n(3),c=r(s),i=n(4),f=r(i),d=n(11),p=r(d),h=n(730),m=r(h),y=n(0),_=r(y),b=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&(n[r[a]]=e[r[a]]);return n},v=function(e){function t(){return(0,o.default)(this,t),(0,c.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,f.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.style,r=b(e,["className","style"]),a=r.prefixCls,o=r.children,l=(0,p.default)(a+"-wrapper",t);"class"in r&&delete r.class;var u=_.default.createElement("label",{className:l,style:n},_.default.createElement(m.default,r),o);return this.props.wrapLabel?u:_.default.createElement(m.default,this.props)}}]),t}(_.default.Component);t.default=v,v.defaultProps={prefixCls:"am-checkbox",wrapLabel:!0},e.exports=t.default},728:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(729),o=r(a),l=n(616),u=r(l),s=n(738),c=r(s);u.default.CheckboxItem=c.default,u.default.AgreeItem=o.default,t.default=u.default,e.exports=t.default},729:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(5),o=r(a),l=n(1),u=r(l),s=n(2),c=r(s),i=n(3),f=r(i),d=n(4),p=r(d),h=n(11),m=r(h),y=n(0),_=r(y),b=n(134),v=r(b),k=n(616),g=r(k),x=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&(n[r[a]]=e[r[a]]);return n},C=function(e){function t(){return(0,u.default)(this,t),(0,f.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,p.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this.props,t=e.style,n=x(e,["style"]),r=n.prefixCls,a=n.className,l=(0,m.default)(r+"-agree",a);return _.default.createElement("div",(0,o.default)({},(0,v.default)(n),{className:l,style:t}),_.default.createElement(g.default,(0,o.default)({},n,{className:r+"-agree-label"})))}}]),t}(_.default.Component);t.default=C,C.defaultProps={prefixCls:"am-checkbox"},e.exports=t.default},730:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(731);n.d(t,"default",function(){return r.a})},731:function(e,t,n){"use strict";var r=n(5),a=n.n(r),o=n(15),l=n.n(o),u=n(46),s=n.n(u),c=n(1),i=n.n(c),f=n(2),d=n.n(f),p=n(3),h=n.n(p),m=n(4),y=n.n(m),_=n(0),b=n.n(_),v=n(6),k=n.n(v),g=n(732),x=n.n(g),C=n(11),O=n.n(C),P=function(e){function t(e){i()(this,t);var n=h()(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));j.call(n);var r="checked"in e?e.checked:e.defaultChecked;return n.state={checked:r},n}return y()(t,e),d()(t,[{key:"componentWillReceiveProps",value:function(e){"checked"in e&&this.setState({checked:e.checked})}},{key:"shouldComponentUpdate",value:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return x.a.shouldComponentUpdate.apply(this,t)}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls,r=t.className,o=t.style,u=t.name,c=t.type,i=t.disabled,f=t.readOnly,d=t.tabIndex,p=t.onClick,h=t.onFocus,m=t.onBlur,y=s()(t,["prefixCls","className","style","name","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur"]),_=Object.keys(y).reduce(function(e,t){return"aria-"!==t.substr(0,5)&&"data-"!==t.substr(0,5)&&"role"!==t||(e[t]=y[t]),e},{}),v=this.state.checked,k=O()(n,r,(e={},l()(e,n+"-checked",v),l()(e,n+"-disabled",i),e));return b.a.createElement("span",{className:k,style:o},b.a.createElement("input",a()({name:u,type:c,readOnly:f,disabled:i,tabIndex:d,className:n+"-input",checked:!!v,onClick:p,onFocus:h,onBlur:m,onChange:this.handleChange},_)),b.a.createElement("span",{className:n+"-inner"}))}}]),t}(b.a.Component);P.propTypes={prefixCls:k.a.string,className:k.a.string,style:k.a.object,name:k.a.string,type:k.a.string,defaultChecked:k.a.oneOfType([k.a.number,k.a.bool]),checked:k.a.oneOfType([k.a.number,k.a.bool]),disabled:k.a.bool,onFocus:k.a.func,onBlur:k.a.func,onChange:k.a.func,onClick:k.a.func,tabIndex:k.a.string,readOnly:k.a.bool},P.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){}};var j=function(){var e=this;this.handleChange=function(t){var n=e.props;n.disabled||("checked"in n||e.setState({checked:t.target.checked}),n.onChange({target:a()({},n,{checked:t.target.checked}),stopPropagation:function(){t.stopPropagation()},preventDefault:function(){t.preventDefault()}}))}};t.a=P},732:function(e,t,n){function r(e,t,n){return!a(e.props,t)||!a(e.state,n)}var a=n(733),o={shouldComponentUpdate:function(e,t){return r(this,e,t)}};e.exports=o},733:function(e,t,n){"use strict";var r=n(734);e.exports=function(e,t,n,a){var o=n?n.call(a,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var l=r(e),u=r(t),s=l.length;if(s!==u.length)return!1;a=a||null;for(var c=Object.prototype.hasOwnProperty.bind(t),i=0;i<s;i++){var f=l[i];if(!c(f))return!1;var d=e[f],p=t[f],h=n?n.call(a,d,p,f):void 0;if(!1===h||void 0===h&&d!==p)return!1}return!0}},734:function(e,t,n){function r(e){return null!=e&&o(_(e))}function a(e,t){return e="number"==typeof e||d.test(e)?+e:-1,t=null==t?y:t,e>-1&&e%1==0&&e<t}function o(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=y}function l(e){for(var t=s(e),n=t.length,r=n&&e.length,l=!!r&&o(r)&&(f(e)||i(e)),u=-1,c=[];++u<n;){var d=t[u];(l&&a(d,r)||h.call(e,d))&&c.push(d)}return c}function u(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function s(e){if(null==e)return[];u(e)||(e=Object(e));var t=e.length;t=t&&o(t)&&(f(e)||i(e))&&t||0;for(var n=e.constructor,r=-1,l="function"==typeof n&&n.prototype===e,s=Array(t),c=t>0;++r<t;)s[r]=r+"";for(var d in e)c&&a(d,t)||"constructor"==d&&(l||!h.call(e,d))||s.push(d);return s}var c=n(735),i=n(736),f=n(737),d=/^\d+$/,p=Object.prototype,h=p.hasOwnProperty,m=c(Object,"keys"),y=9007199254740991,_=function(e){return function(t){return null==t?void 0:t[e]}}("length"),b=m?function(e){var t=null==e?void 0:e.constructor;return"function"==typeof t&&t.prototype===e||"function"!=typeof e&&r(e)?l(e):u(e)?m(e):[]}:l;e.exports=b},735:function(e,t){function n(e){return!!e&&"object"==typeof e}function r(e,t){var n=null==e?void 0:e[t];return l(n)?n:void 0}function a(e){return o(e)&&d.call(e)==u}function o(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function l(e){return null!=e&&(a(e)?p.test(i.call(e)):n(e)&&s.test(e))}var u="[object Function]",s=/^\[object .+?Constructor\]$/,c=Object.prototype,i=Function.prototype.toString,f=c.hasOwnProperty,d=c.toString,p=RegExp("^"+i.call(f).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.exports=r},736:function(e,t){function n(e){return a(e)&&h.call(e,"callee")&&(!y.call(e,"callee")||m.call(e)==i)}function r(e){return null!=e&&l(e.length)&&!o(e)}function a(e){return s(e)&&r(e)}function o(e){var t=u(e)?m.call(e):"";return t==f||t==d}function l(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=c}function u(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function s(e){return!!e&&"object"==typeof e}var c=9007199254740991,i="[object Arguments]",f="[object Function]",d="[object GeneratorFunction]",p=Object.prototype,h=p.hasOwnProperty,m=p.toString,y=p.propertyIsEnumerable;e.exports=n},737:function(e,t){function n(e){return!!e&&"object"==typeof e}function r(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=m}function a(e){return o(e)&&d.call(e)==u}function o(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function l(e){return null!=e&&(a(e)?p.test(i.call(e)):n(e)&&s.test(e))}var u="[object Function]",s=/^\[object .+?Constructor\]$/,c=Object.prototype,i=Function.prototype.toString,f=c.hasOwnProperty,d=c.toString,p=RegExp("^"+i.call(f).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),h=function(e,t){var n=null==e?void 0:e[t];return l(n)?n:void 0}(Array,"isArray"),m=9007199254740991,y=h||function(e){return n(e)&&r(e.length)&&"[object Array]"==d.call(e)};e.exports=y},738:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(){}Object.defineProperty(t,"__esModule",{value:!0});var o=n(5),l=r(o),u=n(15),s=r(u),c=n(1),i=r(c),f=n(2),d=r(f),p=n(3),h=r(p),m=n(4),y=r(m),_=n(11),b=r(_),v=n(0),k=r(v),g=n(80),x=r(g),C=n(616),O=r(C),P=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&(n[r[a]]=e[r[a]]);return n},j=x.default.Item,N=function(e){function t(){return(0,i.default)(this,t),(0,h.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,y.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.listPrefixCls,r=(t.onChange,t.disabled),o=t.checkboxProps,u=t.onClick,c=P(t,["listPrefixCls","onChange","disabled","checkboxProps","onClick"]),i=c.prefixCls,f=c.className,d=c.children,p=(0,b.default)(i+"-item",f,(0,s.default)({},i+"-item-disabled",!0===r));r||(c.onClick=u||a);var h={};return["name","defaultChecked","checked","onChange","disabled"].forEach(function(t){t in e.props&&(h[t]=e.props[t])}),k.default.createElement(j,(0,l.default)({},c,{prefixCls:n,className:p,thumb:k.default.createElement(O.default,(0,l.default)({},o,h))}),d)}}]),t}(k.default.Component);t.default=N,N.defaultProps={prefixCls:"am-checkbox",listPrefixCls:"am-list",checkboxProps:{}},e.exports=t.default},739:function(e,t,n){"use strict";n(20),n(79),n(740)},740:function(e,t){},756:function(e,t){e.exports={"snk-1px":"snk-1px___2jV2e","snk-1px-t":"snk-1px-t___2AWbn","snk-1px-b":"snk-1px-b___3Nen8","snk-1px-tb":"snk-1px-tb___3Rb8k","snk-1px-l":"snk-1px-l___10h3h","snk-1px-r":"snk-1px-r___vDJnJ","snk-1px-lb":"snk-1px-lb___3-zYW",flex:"flex___1JouH","flex-between":"flex-between___MIvqy","flex-center":"flex-center___19uFk",addressBookPage:"addressBookPage___2cwAF",search:"search___1o7Up",listTitle:"listTitle___21fi0",listPerson:"listPerson___3rz_W",listPersonName:"listPersonName___1JVt1",containBorder:"containBorder___1msnG",footerFixed:"footerFixed___Nijoh",list:"list___1EHM8",personInfo:"personInfo___1SFyH",branch:"branch___1BTa_",listConfirm:"listConfirm___2q6CT",searchPersonList:"searchPersonList___1G5Ba"}}});