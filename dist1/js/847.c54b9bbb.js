"use strict";(self["webpackChunktest"]=self["webpackChunktest"]||[]).push([[847],{7847:function(e,t,a){a.r(t),a.d(t,{default:function(){return l}});var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"acroot"}},[a("transition",{attrs:{appear:"",name:"animate__animated animate__slideInLeft","leave-active-class":"animate__bounceOutRight"}},[e.aloading?a("div",{staticClass:"loading"},[a("i",{staticClass:"el-icon-user loadicon"})]):e._e()]),a("router-view",{staticClass:"view"})],1)},o=[],i={beforeRouteUpdate(e,t,a){"AccountInfo"==t.path.split("/")[1]&&"/AccountInfo"==e.path&&1!=e.query.force||a()},activated(){this.axios({method:"post",url:"/api/ac/infos"}).then((e=>{setTimeout((()=>{this.aloading=0}),500),"expired"!=e.data?(this.$store.dispatch("ac",e.data),this.$router.replace({name:"infos"})):(console.log("exp"),localStorage.removeItem("RORELTOKEN"),this.$router.replace({name:"login"}))}),(e=>{console.log("err")}))},name:"AccountInfo",data(){return{aloading:1,response:""}}},s=i,r=a(1001),c=(0,r.Z)(s,n,o,!1,null,"0d61dfc9",null),l=c.exports}}]);