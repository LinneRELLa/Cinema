"use strict";(self["webpackChunktest"]=self["webpackChunktest"]||[]).push([[101],{4101:function(t,e,s){s.r(e),s.d(e,{default:function(){return m}});var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"root"}},[s("transition",{attrs:{appear:"",name:"animate__animated animate__slideInLeft","leave-active-class":"animate__bounceOutRight"}},[t.loading?s("div",{staticClass:"loading"},[s("i",{staticClass:"el-icon-s-comment loadicon"})]):t._e()]),s("div",{staticClass:"total"},t._l(t.data,(function(e){return s("router-link",{key:e[0].片号,attrs:{to:{path:"/RecordDetail",query:{No:e[0].片号,Name:e[0].FilmName}}}},[s("div",{staticClass:"cont"},[s("div",{staticClass:"front"},[s("img",{staticClass:"fronts",attrs:{src:Number(e[0].片号),alt:""}})]),s("div",[t.loading?t._e():s("LineChart",{attrs:{data:e[0].总评}})],1),s("div",{staticClass:"innercont"},[s("div",{staticClass:"leftcontent"},[s("div",{staticClass:"title"},[t._v(t._s(e[0].FilmName))]),s("div",{staticClass:"redacont"},[e[0].总评?s("REDA",{attrs:{data:e[0].总评,editable:0,small:!0}}):t._e()],1)]),e[0].UID?s("div",{key:e[0].时间,staticClass:"rt"},[s("div",{staticClass:"content"},[s("div",{staticClass:"newest"},[t._v("最新评价")]),s("div",{staticClass:"touxiang"},[e[0].头像?s("el-image",{attrs:{src:e[0].头像}}):t._e()],1),s("div",{staticClass:"name"},[t._v(" "+t._s(e[0].昵称)),s("br"),s("span",{staticStyle:{color:"gray"}},[t._v(t._s(t.ti(e[0].时间)))])]),s("br"),s("br"),s("div",{staticClass:"comment"},[t._v(t._s(e[0].短评))])]),s("div",{staticClass:"redacont1"},[e[0].打分?s("REDA",{attrs:{data:e[0].打分,editable:0,tiny:!0}}):t._e()],1)]):t._e()])])])})),1)],1)},r=[],i=s(650),o=s(9856),n={mounted(){},name:"Record",deactivated(){},created(){this.Firstget().then((()=>{this.data=this.SortedRecord(),this.$nextTick((()=>{this.lazyload()}))}))},data(){return{data:[],loading:1}},methods:{lazyload(){const t=function(t,e){for(let s of t){const t=s.target.src.split("/")[s.target.src.split("/").length-1];if(s.isIntersecting&&Number(t))for(let e of this.data)t==e[0].片号&&(s.target.src=e[0].封面,console.log(t))}}.bind(this),e=new IntersectionObserver(t,{root:document.querySelectorAll("#root")[1],threshold:1}),s=document.querySelectorAll(".fronts");console.log(s);for(let a of s)e.observe(a)},SortedRecord(){if(this.$store.state.Record.length){let t=this.$store.state.Record.sort(((t,e)=>t.片号-e.片号)),e=[],s=0;for(let r in t)null==t[r].时间&&(t[r].时间=0),0==r?(e[s]=[],e[s].push(t[r])):(t[r].片号==t[r-1].片号||(e[s].sort(((t,e)=>1*moment(e.时间).format("X")-1*moment(t.时间).format("X"))),s++,e[s]=[]),e[s].push(t[r]));function a(t){let e=0,s=t.split(",");for(var a=s.length-1;a>=0;a--)e+=parseInt(s[a]);return e}return e[s].sort(((t,e)=>1*moment(e.时间).format("X")-1*moment(t.时间).format("X"))),e.sort(((t,e)=>a(e[0].总评)-a(t[0].总评))),e}return[]},Firstget(){return this.axios({method:"post",url:"api/Record"}).then((t=>{this.loading=0,this.$store.dispatch("record",t.data)}))},ti(t){return moment(t).format("YYYY-M-D H:mm:ss")}},components:{REDA:i.Z,LineChart:o.Z},activated(){this.data=this.SortedRecord()}},l=n,c=s(1001),d=(0,c.Z)(l,a,r,!1,null,"59a63afd",null),m=d.exports}}]);