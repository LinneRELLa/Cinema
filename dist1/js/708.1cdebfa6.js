"use strict";(self["webpackChunktest"]=self["webpackChunktest"]||[]).push([[708],{6708:function(t,a,e){e.r(a),e.d(a,{default:function(){return c}});var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"allfilms"},[e("transition",{attrs:{appear:"",name:"animate__animated animate__slideInLeft","leave-active-class":"animate__bounceOutRight"}},[t.aloading?e("div",{staticClass:"loading"},[e("i",{staticClass:"el-icon-edit"})]):t._e()]),t._l(t.films,(function(a){return e("div",{staticClass:"filmcard"},[e("img",{staticClass:"cover",attrs:{src:a.封面}}),t._v(" "+t._s(a.FilmName)+" "),e("br"),e("br"),e("br"),e("router-link",{attrs:{to:{name:"FilmEdit",query:a}}},[e("span",[t._v("编辑电影")])]),e("router-link",{attrs:{to:{name:"ScheduleEdit",query:{fn:a.片号}}}},[e("span",[t._v("编辑排片")])])],1)})),e("div",{staticClass:"filmcard"},[e("br"),e("br"),e("br"),e("router-link",{attrs:{to:{name:"FilmEdit",query:{FilmName:"","片号":"服务器生成","片长":0,"类型":"","评价":"50,50,50,50,50","封面":"http://r.photo.store.qq.com/psc?/V53ZbwIa09kn2Q0usRF00zmUxK3YRSXK/45NBuzDIW489QBoVep5mcVunig8u.neSyFzJnAVs2NYv4wCXzHcQ3BzquOmk*KqXAfzHAWskCYzYX.5*g1FzXCwCQeV2I1kgE39BxGyNK1A!/r"}}}},[e("span",[e("i",{staticClass:"el-icon-circle-plus-outline"}),t._v(" 添加")])]),e("span")],1)],2)},s=[],n={name:"FilmToEdit",components:{},mounted(){this.update()},deactivated(){clearInterval(this.timer)},activated(){this.timer=setInterval((()=>{console.log("EDIT更新"),this.update()}),3e4)},data(){return{films:null,aloading:1}},methods:{update(){this.axios({url:"api/FilmsToEdit",method:"post"}).then((t=>{setTimeout((()=>{this.aloading=0}),500),this.films=t.data}))}}},l=n,r=e(1001),o=(0,r.Z)(l,i,s,!1,null,"9102136c",null),c=o.exports}}]);