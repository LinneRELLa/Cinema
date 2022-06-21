

import Vue from 'vue'
import less from 'less'
import router from 'vue-router'

/*
import ElementUI from 'element-ui';
import Element from 'element-ui';*/

/*import 'element-ui/lib/theme-chalk/index.css';*/
import animate from 'animate.css'
import Vuex from 'vuex'
import moment from 'moment'
import axios from 'axios'
import App from './App.vue'
import Appmb from './App.mb.vue'
import RealRouter from './router'
import MobileRouter from './routerm'

import './CSS/element-ui-reset.less'

const ISMOBILE = function () {
  let flag = navigator.userAgent.match(
    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  );
  return flag;
};







axios.defaults.baseURL='https://www.rellal.com:900';

axios.interceptors.request.use(config => {
  let url = config.url.split('/')[2];
  let RORELTOKEN=localStorage.getItem('RORELTOKEN')
  let token=RORELTOKEN==null?'':JSON.parse(RORELTOKEN).token
  if(url=='ac'){


  	config.headers.Token=token
  }
  return config;
},);




console.log(moment("13:30","HH:mm")._d)
import store from './store'


/*Vue.use(animate)*/

/*Vue.use(moment)


Vue.use(less)*/


/*Vue.use(ElementUI)*/
/*Vue.use(Element)
*/


Vue.use(router)
Vue.use(Vuex)
Vue.config.productionTip = false

new Vue({

beforeCreate(){
	Vue.prototype.$bus=this;
	/*全局事件总线*/
	Vue.prototype.axios = axios;
  Vue.prototype.simpleclone=function(target) {
       let tr=Array.isArray(target)?[]:{}
       for(let x in target){
        if(typeof target[x]=='object'){
            tr[x]=this.simpleclone(target[x])
        }
        else{
tr[x]=target[x]
        }
       }
return tr;
  }.bind(this)
},
created(){
  /*登录*/
  this.axios({

   method:'post',
  url:'/api/ac/infos',

}).then((res)=>{

if(res.data!='expired'){
this.$store.dispatch('ac',res.data);

}
else{
  console.log('exp')
  localStorage.removeItem('RORELTOKEN');

}

},
  (err)=>{
    console.log('err');
  })

},

  render: h => h(ISMOBILE()?Appmb:App),
  
  router: ISMOBILE() ? MobileRouter : RealRouter,
  store,

}).$mount('#App')
