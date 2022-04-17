const express=require('express')
const config=require('./config.js')
const jwt=require('jsonwebtoken')
const db=require('./sqlcon.js')

const router=express.Router()



router.post('/',(req,res,next)=>{

/*const token = jwt.sign(req.body, config.jwtkey,{
  expiresIn: 60*60,  //过期时间,一个小时
});*/
/*const info=jwt.verify(token, config.jwtkey, (error, authData) => {
return authData;
})*/
const info={ac:req.body.Account,
pass:req.body.pass}


function 	userexist(info){return new Promise((resolve,reject)=>{
db.query(`SELECT * FROM \`用户\` where Account="${info.ac}"`,(err,results)=>{
	if(err){
resolve(err);
	}
if (!results.length){

reject({msg:'账号不存在',
          status:0});
console.log(req.body);

}
else{
info.msg='账号存在,验证密码';

}
resolve(info);
}

	)
	})}

function passcorrect(info){

return new Promise((resolve,reject)=>{
db.query(`SELECT Password FROM \`用户\` where Account="${info.ac}"`,(err,results)=>{
	if(err){
resolve(err);
	}
if(results[0].Password==info.pass){

info.msg='登录成功！';
info.token=jwt.sign({ac:info.ac}, config.jwtkey,{expiresIn: "1d"});
info.untoken=jwt.verify(info.token, config.jwtkey, (error, authData) => 

{  

return authData;
})

}
else{
	reject(
		{msg:'密码错误！',
          status:0}      );
}
resolve({ac:info.ac,
token:info.token,
msg:info.msg,
status:1})
}

	)
	})

}










a=Promise.resolve(info);
a
 .then(userexist)
 .then(passcorrect)
 .then((value)=>{res.send(value)})
 .catch((err)=>{res.send(err)});

})

module.exports=router;








/*
const p=new Promise((resolve,reject)=>{
	setTimeout(()=>{console.log(1);reject(2);},5000)
}


)
p
.then((value)=>{console.log(value)})
.then(value=>{console.log(value)},reason=>{console.log(reason)})





*/