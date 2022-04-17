/*这是一个用于解密token的中间件，会将结果挂载到req.untoken上,如果token失效则将untoken设置为0*/

const jwt=require('jsonwebtoken')
const config=require('./config.js')






function unToken(req,res,next){
console.log('reqqq'+req.header('Token'));
req.untoken=jwt.verify(req.header('Token'), config.jwtkey, (error, authData) => {
	if(error){
return '0';
	}
	else{

console.log('中间件:'+authData);
return authData;

}
})

next();

}
module.exports=unToken;