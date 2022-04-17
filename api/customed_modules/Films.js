const express=require('express')
const config=require('./config.js')
const db=require('./sqlcon.js')
const router=express.Router()



router.post('/',(req,res,next)=>{


   db.query(`select * from scheduleinfo`,(err,result)=>{
    
    if(err){
     res.send(err)
    }
    else{
    	setTimeout(()=>{
res.send(result)},1000)
    }

   })


})

module.exports=router;