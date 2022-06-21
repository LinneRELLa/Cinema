import axios from 'axios'


const http=axios.create({
	baseURL:'https://www.rellal.com:900',
   timeout:2000,

})

http.interceptors.request.use(config => {
  let url = config.url.split('/')[2];
  let RORELTOKEN=localStorage.getItem('RORELTOKEN')
  let token=RORELTOKEN==null?'':JSON.parse(RORELTOKEN).token
  if(url=='ac'){


  	config.headers.Token=token
  }
  return config;
},);

http.interceptors.request.use(
    config=>{

config.headers.axios=true;
  return config;
    }

	)

const normal=()=>{return http({
	url:'/api'
})}  

export {normal}