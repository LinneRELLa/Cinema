const express=require('express')
const config=require('./config.js')
const jwt=require('jsonwebtoken')
const db=require('./sqlcon.js')


const router=express.Router()



router.post('/infos',(req,res,next)=>{

if(req.untoken==0)
{
	res.send('expired')
}
else{
   db.query(`select * from \`用户\` where Account=${req.untoken.ac}`,(err,result)=>{
    
    if(err){
     res.send('出错了！')
    }
    else{
res.send(result);
    }

   })


}
}
)
module.exports=router;