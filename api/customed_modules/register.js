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
const info={
	ac:req.body.Account,
pass:req.body.pass,
name:req.body.name

}


function 	userexist(info){return new Promise((resolve,reject)=>{
db.query(`SELECT * FROM \`用户\` where Account="${info.ac}"`,(err,results)=>{
	if(err){
resolve(err);
	}
if (results.length){

reject({msg:'账号已存在',
          status:0});
console.log(req.body);

}
else{
info.msg='账号不存在';

}
resolve(info);
}

	)
	})}

function passcorrect(info){

return new Promise((resolve,reject)=>{
db.query(`insert into \`用户\` 
	(Account,Password,昵称)

	values

	('${info.ac}','${info.pass}','${info.name}')`,(err,results)=>{
		console.log(`insert into \`用户\` 
	(Account,Password,昵称)

	values

	('${info.ac}','${info.pass}','${info.name}')`);
	if(err){
reject(err);
	}
	else{

		resolve({msg:'注册成功,即将跳转登录',
             status:1
	})
	}



	})

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


