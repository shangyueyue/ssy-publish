webpackJsonp([1],{47:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(38),n=s(r),o=a(27),c=s(o),u=a(5),i=s(u);a(39);var l=a(766),p=s(l),d=a(129),f=s(d),b=a(26),D=a(772),m={baseInfoDatas:{},satelliteInfoDatas:{},arrangementDatas:{},costListDatas:[],borrowListDatas:[],imageFileDatas:[],approvalProcessDatas:[],requestParams:{}};t.default={namespace:"fundApproval",state:(0,b.deepClone)(m),reducers:{saveList:function(e,t){var a=t.payload;return(0,i.default)({},e,a)},restList:function(){return(0,b.deepClone)(m)}},effects:{getListInfo:c.default.mark(function e(t,a){var s,r,o,u,i,l,d,f,m,v,y,x,g,O,k,I,j,L=t.payload,h=void 0===L?{}:L,F=a.call,w=a.put;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s=h,r=h.bdtyp,o=h.billdno,u=h.processInstanceid,i={bdtyp:r,billdno:o,processInstanceid:u,loadType:"1"},e.next=6,F(p.default.getListInfo,i);case 6:return l=e.sent,d=l||{},f=d.tdzhd,m=d.tdzit,v=d.tpydetail,y=d.taskit,x=(0,b.responseDatasFilter)(D.baseInfoObj,f),g=(0,b.responseDatasFilter)(D.satelliteInfoObj,f),O=(0,b.responseDatasFilter)(D.arrangementObj,f),k=(0,b.responseDatasFilter)(D.costListObj,m),I=(0,b.responseDatasFilter)(D.borrowListObj,v),j=(0,b.responseDatasFilter)(D.approvalProcessObj,y),e.next=16,w({type:"saveList",payload:{baseInfoDatas:x,satelliteInfoDatas:g,arrangementDatas:O,costListDatas:k,borrowListDatas:I,approvalProcessDatas:j,requestParams:s}});case 16:return e.abrupt("return",f.guid);case 19:e.prev=19,e.t0=e.catch(0),n.default.info("\u4fe1\u606f\u52a0\u8f7d\u5931\u8d25",1);case 22:case"end":return e.stop()}},e,this,[[0,19]])}),getImageFiles:c.default.mark(function e(t,a){var s,r,o,u,i,l=t.payload,p=void 0===l?{}:l,d=a.call,b=a.put;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return s=p,r=void 0,e.prev=2,e.next=5,d(f.default.fetchImageFile,s);case 5:r=e.sent,e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(2),n.default.info("\u56fe\u7247\u6587\u4ef6\u52a0\u8f7d\u5931\u8d25"),e.abrupt("return");case 12:o=[],e.prev=13,u=JSON.parse(r)||{},o=u.results,e.next=21;break;case 18:return e.prev=18,e.t1=e.catch(13),e.abrupt("return");case 21:return i=o.map(function(e){return{url:e.downloadUrl,filename:e.srcName}}),e.next=24,b({type:"saveList",payload:{imageFileDatas:i}});case 24:case"end":return e.stop()}},e,this,[[2,8],[13,18]])})},subscriptions:{}},e.exports=t.default},766:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(1),n=s(r),o=a(2),c=s(o),u=a(81),i=s(u),l=function(){function e(){(0,n.default)(this,e)}return(0,c.default)(e,null,[{key:"getListInfo",value:function(e){return i.default.post("/rest/getDzdFormInfo",e)}},{key:"submitApprovalForm",value:function(e){return i.default.post("/rest/formExamine",e)}}]),e}();t.default=l,e.exports=t.default},772:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.baseInfoObj={persnName:"",deptDesc:"",dzdat:""},t.satelliteInfoObj={dzdno:"",bukrsDesc:"",kostlDesc:"",bgtypDesc:"",fictrDesc:"",bxio:"",fipexDesc:"",class1Desc:"",class2Desc:"",sgtxt:""},t.arrangementObj={frdat:"",todat:"",cname:"",pname:"",ctdesc:"",actnm:"",prnum:"",bukrs:"",iffly:"",flyno:"",htext:""},t.costListObj={expidDesc:"",exptyDesc:"",frdat:"",todat:"",fipexDesc:"",class2Desc:"",class3Desc:"",price:"",quant:"",fictrDesc:"",dmbtr:"",itext:""},t.borrowListObj={batypDesc:"",accnm:"",dmbtr:"",accnt:"",bankname:"",bankrovDesc:"",bankcityDesc:"",hbank:"",itext:""},t.approvalProcessObj={assignByName:"",taskDisplayName:"",approvelComment:"",approvelResult:"",completedOn:""}}});