(function(e){function t(t){for(var n,a,i=t[0],m=t[1],s=t[2],u=0,p=[];u<i.length;u++)a=i[u],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&p.push(r[a][0]),r[a]=0;for(n in m)Object.prototype.hasOwnProperty.call(m,n)&&(e[n]=m[n]);c&&c(t);while(p.length)p.shift()();return l.push.apply(l,s||[]),o()}function o(){for(var e,t=0;t<l.length;t++){for(var o=l[t],n=!0,i=1;i<o.length;i++){var m=o[i];0!==r[m]&&(n=!1)}n&&(l.splice(t--,1),e=a(a.s=o[0]))}return e}var n={},r={app:0},l=[];function a(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=n,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(o,n,function(t){return e[t]}.bind(null,n));return o},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],m=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var c=m;l.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"10ed":function(e,t,o){},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("router-view")],1)},l=[],a=o("2877"),i={},m=Object(a["a"])(i,r,l,!1,null,null,null),s=m.exports,c=o("8c4f"),u=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"zhuye"},[e._m(0),o("div",{staticClass:"main"},[o("div",{staticClass:"middle"},[o("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules}},[o("el-form-item",{attrs:{label:"姓名","label-width":"80px",prop:"student_name"}},[o("el-input",{attrs:{placeholder:"请输入姓名"},model:{value:e.form.student_name,callback:function(t){e.$set(e.form,"student_name",t)},expression:"form.student_name"}})],1),o("el-form-item",{attrs:{label:"学号","label-width":"80px",prop:"student_num"}},[o("el-input",{attrs:{placeholder:"请输入学号"},model:{value:e.form.student_num,callback:function(t){e.$set(e.form,"student_num",t)},expression:"form.student_num"}})],1),o("el-form-item",{attrs:{label:"班级","label-width":"80px",prop:"student_class"}},[o("el-input",{attrs:{placeholder:"请输入班级"},model:{value:e.form.student_class,callback:function(t){e.$set(e.form,"student_class",t)},expression:"form.student_class"}})],1),o("el-form-item",{attrs:{label:"实验名称","label-width":"80px",prop:"experiment_name"}},[o("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择实验名称"},model:{value:e.form.experiment_name,callback:function(t){e.$set(e.form,"experiment_name",t)},expression:"form.experiment_name"}},[o("el-option",{attrs:{label:"劈尖测细丝实验",value:"劈尖测细丝实验"}})],1)],1),o("el-form-item",{staticStyle:{"text-align":"center"}},[o("el-button",{staticClass:"btn",staticStyle:{"text-align":"center"},attrs:{type:"primary"},on:{click:function(t){return e.login()}}},[e._v("进入测试")])],1)],1)],1)])])},p=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"img"},[o("img",{attrs:{src:"https://z3.ax1x.com/2021/06/30/RDF0RH.png"}})])}],f=o("1da1"),d=(o("96cf"),{data:function(){return{form:{student_name:"",student_num:"",student_class:"",experiment_name:""},rules:{student_name:[{required:!0,message:"请输入姓名",trigger:"blur"},{min:2,max:19,message:"请正确输入姓名",trigger:"blur"}],student_num:[{required:!0,message:"请输入学号",trigger:"blur"},{min:11,max:11,message:"请输入正确的学号",trigger:"blur"}],student_class:[{required:!0,message:"请输入班级",trigger:"blur"}],experiment_name:[{required:!0,message:"请选择实验名称",trigger:"blur"}]},checked:""}},methods:{login:function(){var e=this;this.$refs.form.validate(function(){var t=Object(f["a"])(regeneratorRuntime.mark((function t(o){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(o){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.$http.post("api/experiment/student",e.form);case 4:n=t.sent,r=n.data,console.log(r),200==r.code&&(window.sessionStorage.setItem("student_id",r.data[0].id),e.$router.push("/test"));case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}}}),_=d,b=(o("f5b2"),Object(a["a"])(_,u,p,!1,null,"8cce99da",null)),v=b.exports,x=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"main"},[o("div",[o("h3",[e._v("实验数据记录与处理")]),o("p"),o("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,"span-method":e.arraySpanMethod,border:""}},[o("el-table-column",{attrs:{prop:"name",label:""}}),o("el-table-column",{attrs:{prop:"amount1",label:"Xi"},scopedSlots:e._u([{key:"default",fn:function(t){return["11"==t.row.amount1?o("el-input",{model:{value:e.form2.completion_m,callback:function(t){e.$set(e.form2,"completion_m",t)},expression:"form2.completion_m"}}):e._e(),"1"==t.row.amount1?o("div",[o("el-input",{model:{value:e.form2.completion_1,callback:function(t){e.$set(e.form2,"completion_1",t)},expression:"form2.completion_1"}})],1):e._e(),"7"==t.row.amount1?o("div",[o("el-input",{model:{value:e.form2.completion_l1,callback:function(t){e.$set(e.form2,"completion_l1",t)},expression:"form2.completion_l1"}})],1):e._e()]}}])}),o("el-table-column",{attrs:{prop:"amount2",label:"Xi+20"},scopedSlots:e._u([{key:"default",fn:function(t){return["2"==t.row.amount2?o("div",[o("el-input",{model:{value:e.form2.completion_2,callback:function(t){e.$set(e.form2,"completion_2",t)},expression:"form2.completion_2"}})],1):e._e(),"8"==t.row.amount2?o("div",[o("el-input",{model:{value:e.form2.completion_l2,callback:function(t){e.$set(e.form2,"completion_l2",t)},expression:"form2.completion_l2"}})],1):e._e()]}}])}),o("el-table-column",{attrs:{prop:"amount3",label:"Xi+40"},scopedSlots:e._u([{key:"default",fn:function(t){return["3"==t.row.amount3?o("el-input",{model:{value:e.form2.completion_3,callback:function(t){e.$set(e.form2,"completion_3",t)},expression:"form2.completion_3"}}):e._e(),"9"==t.row.amount3?o("div",[o("el-input",{model:{value:e.form2.completion_l3,callback:function(t){e.$set(e.form2,"completion_l3",t)},expression:"form2.completion_l3"}})],1):e._e()]}}])}),o("el-table-column",{attrs:{prop:"amount4",label:"Xi+60"},scopedSlots:e._u([{key:"default",fn:function(t){return["4"==t.row.amount4?o("el-input",{model:{value:e.form2.completion_4,callback:function(t){e.$set(e.form2,"completion_4",t)},expression:"form2.completion_4"}}):e._e()]}}])}),o("el-table-column",{attrs:{prop:"amount5",label:"Xi+80"},scopedSlots:e._u([{key:"default",fn:function(t){return["4"==t.row.amount4?o("el-input",{model:{value:e.form2.completion_5,callback:function(t){e.$set(e.form2,"completion_5",t)},expression:"form2.completion_5"}}):e._e()]}}])}),o("el-table-column",{attrs:{prop:"amount6",label:"Xi+100"},scopedSlots:e._u([{key:"default",fn:function(t){return["4"==t.row.amount4?o("el-input",{model:{value:e.form2.completion_6,callback:function(t){e.$set(e.form2,"completion_6",t)},expression:"form2.completion_6"}}):e._e()]}}])})],1),o("div",{staticClass:"count"},[o("p",[e._v("计算劈尖中细丝的直径D=")]),o("el-form",{ref:"form",attrs:{model:e.form}},[o("el-form-item",{staticClass:"zhijin"},[o("el-input",{model:{value:e.form2.completion_d,callback:function(t){e.$set(e.form2,"completion_d",t)},expression:"form2.completion_d"}})],1)],1),o("p",[e._v("(mm)")])],1),o("div",[o("h3",[e._v("思考题")]),o("div",[o("p",[e._v("1.两束光在空间相遇产生干涉的条件是：")]),o("el-radio-group",{model:{value:e.form2.completion_xz1,callback:function(t){e.$set(e.form2,"completion_xz1",t)},expression:"form2.completion_xz1"}},[o("el-radio",{attrs:{label:"A"}},[e._v("A.频率相同")]),o("el-radio",{attrs:{label:"B"}},[e._v("B.振动方向相同")]),o("el-radio",{attrs:{label:"C"}},[e._v("C.相位差恒定，且满足一定条件")]),o("el-radio",{attrs:{label:"D"}},[e._v("D.ABC都是")])],1)],1),o("div",[o("p",[e._v("1.两束光在空间相遇产生干涉的条件是：")]),o("el-radio-group",{model:{value:e.form2.completion_xz2,callback:function(t){e.$set(e.form2,"completion_xz2",t)},expression:"form2.completion_xz2"}},[o("el-radio",{attrs:{label:"A"}},[e._v("A.频率相同")]),o("el-radio",{attrs:{label:"B"}},[e._v("B.振动方向相同")]),o("el-radio",{attrs:{label:"C"}},[e._v("C.相位差恒定，且满足一定条件")]),o("el-radio",{attrs:{label:"D"}},[e._v("D.ABC都是")])],1)],1)]),o("div",[o("h3",[e._v("判断题")]),o("div",[o("p",[e._v("1.牛顿环和劈尖分别属于等厚干涉和等倾干涉 。")]),o("el-radio-group",{model:{value:e.form2.completion_pd1,callback:function(t){e.$set(e.form2,"completion_pd1",t)},expression:"form2.completion_pd1"}},[o("el-radio",{attrs:{label:"1"}},[e._v("对")]),o("el-radio",{attrs:{label:"0"}},[e._v("错")])],1)],1),o("div",[o("p",[e._v("2.劈尖实验，视场很亮，但是调不出干涉条纹，其原因可能是反光玻璃片放反。")]),o("el-radio-group",{model:{value:e.form2.completion_pd2,callback:function(t){e.$set(e.form2,"completion_pd2",t)},expression:"form2.completion_pd2"}},[o("el-radio",{attrs:{label:"1"}},[e._v("对")]),o("el-radio",{attrs:{label:"0"}},[e._v("错")])],1)],1),o("div",[o("p",[e._v("3.劈尖实验中，若发现视场半明半暗，则原因是光源亮度不够。")]),o("el-radio-group",{model:{value:e.form2.completion_pd3,callback:function(t){e.$set(e.form2,"completion_pd3",t)},expression:"form2.completion_pd3"}},[o("el-radio",{attrs:{label:"1"}},[e._v("对")]),o("el-radio",{attrs:{label:"0"}},[e._v("错")])],1)],1)]),o("div",{staticClass:"btn"},[o("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.send()}}},[e._v("提交")])],1)],1)])},h=[],g=(o("ac1f"),o("1276"),{data:function(){return{form2:{completion_1:"",completion_l1:"",completion_2:"",completion_l2:"",completion_3:"",completion_l3:"",completion_4:"",completion_5:"",completion_6:"",completion_m:"",completion_d:"",grade_xp:"",student_id:"",completion_xz1:"",completion_xz2:"",completion_pd1:"",completion_pd2:"",completion_pd3:""},form:{radio1:"",radio2:"",radio3:"",radio4:"",radio5:""},tableData:[{name:"读数",amount1:"1",amount2:"2",amount3:"3",amount4:"4",amount5:"5",amount6:"6"},{name:"60条暗条纹的宽度（mm）",amount1:"7",amount2:"8",amount3:"9"},{name:"m/Δl=3×60/L1+L2+L3",amount1:"11"}]}},created:function(){this.form2.student_id=window.sessionStorage.getItem("student_id")},methods:{arraySpanMethod:function(e){e.row,e.column;var t=e.rowIndex,o=e.columnIndex;if(2===t){if(0===o)return[1,2];if(1===o)return[1,5]}else if(1===t){if(1===o)return[1,2];if(2===o)return[1,2];if(3===o)return[1,2]}},send:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){var o,n,r,l,a,i,m;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:for(o=(e.form2.completion_xz1+e.form2.completion_xz2+e.form2.completion_pd1+e.form2.completion_pd2+e.form2.completion_pd3).split(""),n=["D","A","0","1","0"],r=0,l=0;l<o.length;l++)o[l]==n[l]&&(r+=6);return e.form2.grade_xp=r,t.next=7,e.$http.post("api/experiment/completion",e.form2);case 7:a=t.sent,i=a.data,console.log(i),200==i.code&&(e.$message({message:"上传成功！",type:"success"}),m=window.sessionStorage.getItem("student_id"),window.location.href="http://120.55.71.155/api/experiment/pdf?student_id="+m);case 11:case"end":return t.stop()}}),t)})))()}}}),w=g,y=(o("b549"),Object(a["a"])(w,x,h,!1,null,"dbfc7678",null)),k=y.exports;n["default"].use(c["a"]);var $=[{path:"/",redirect:"/login"},{path:"/login",name:"login",component:v},{path:"/test",component:k,name:"test"}],S=new c["a"]({mode:"hash",base:"",routes:$}),O=S,j=(o("10ed"),o("5c96")),C=o.n(j),z=(o("0fae"),o("bc3a")),D=o.n(z);n["default"].prototype.$massage=j["Message"],n["default"].use(C.a),n["default"].prototype.$http=D.a,D.a.defaults.baseURL="http://120.55.71.155/",n["default"].config.productionTip=!1,new n["default"]({router:O,render:function(e){return e(s)}}).$mount("#app")},"5f28":function(e,t,o){},b549:function(e,t,o){"use strict";o("f95f")},f5b2:function(e,t,o){"use strict";o("5f28")},f95f:function(e,t,o){}});
//# sourceMappingURL=app.69d5874d.js.map