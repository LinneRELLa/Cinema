import router from './router'
import {dynamicRoutes} from './router'

export default function (){
	const _this=this;
	_this.$store.dispatch('setRouter',router.options.routes);
      this.axios({

   method:'post',
  url:'/api/ac/infos',

}).then((res)=>{

if(res.data!='expired'){


this.$store.dispatch('ac',res.data);

dynamicRoutes.forEach(e=>{


	if(_this.$store.state.AC[0]['等级']>=e.meta.level){
		console.log(e)
	router.addRoute(e);	
 	router.options.routes.push(e)
     _this.$store.dispatch('setRouter',router.options.routes);
}})

}
else{
  console.log('exp')
  localStorage.removeItem('RORELTOKEN');

}

},
  (err)=>{
    console.log('err');
  })




}