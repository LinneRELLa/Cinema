"use strict";(self["webpackChunktest"]=self["webpackChunktest"]||[]).push([[708],{6708:function(t,i,a){a.r(i),a.d(i,{default:function(){return c}});var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"allfilms"},[a("transition",{attrs:{appear:"",name:"animate__animated animate__slideInLeft","leave-active-class":"animate__bounceOutRight"}},[t.aloading?a("div",{staticClass:"loading"},[a("i",{staticClass:"el-icon-edit"})]):t._e()]),t._l(t.films,(function(i){return a("div",{staticClass:"filmcard"},[a("img",{staticClass:"cover",attrs:{src:i.封面}}),t._v(" "+t._s(i.FilmName)+" "),a("br"),a("br"),a("br"),a("router-link",{attrs:{to:{name:"FilmEdit",query:i}}},[a("span",[t._v("编辑电影")])]),a("router-link",{attrs:{to:{name:"ScheduleEdit",query:{fn:i.片号}}}},[a("span",[t._v("编辑排片")])])],1)})),a("div",{staticClass:"filmcard"},[a("br"),a("br"),a("br"),a("router-link",{attrs:{to:{name:"FilmEdit",query:{FilmName:"","片号":"服务器生成","片长":0,"类型":"","评价":"50,50,50,50,50","封面":"http://r.photo.store.qq.com/psc?/V53ZbwIa09kn2Q0usRF00zmUxK3YRSXK/45NBuzDIW489QBoVep5mcVunig8u.neSyFzJnAVs2NYv4wCXzHcQ3BzquOmk*KqXAfzHAWskCYzYX.5*g1FzXCwCQeV2I1kgE39BxGyNK1A!/r"}}}},[a("span",[a("i",{staticClass:"el-icon-circle-plus-outline"}),t._v(" 添加")])]),a("span")],1)],2)},n=[],s={name:"FilmToEdit",components:{},mounted:function(){this.update()},deactivated:function(){clearInterval(this.timer)},activated:function(){var t=this;this.timer=setInterval((function(){console.log("EDIT更新"),t.update()}),3e4)},data:function(){return{films:null,aloading:1}},methods:{update:function(){var t=this;this.axios({url:"api/FilmsToEdit",method:"post"}).then((function(i){setTimeout((function(){t.aloading=0}),500),t.films=i.data}))}}},l=s,r=a(1001),o=(0,r.Z)(l,e,n,!1,null,"9102136c",null),c=o.exports}}]);