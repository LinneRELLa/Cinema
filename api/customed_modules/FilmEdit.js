const express=require('express')
const config=require('./config.js')
const jwt=require('jsonwebtoken')
const db=require('./sqlcon.js')


const router=express.Router()



router.post('/',(req,res,next)=>{

if(req.untoken==0)
{
	res.send('expired')
}
else{

  if(req.untoken.ac=='3223961933'){
                 if(req.body.片号=='服务器生成')   {
                 	db.query(`insert into 电影
                         (FilmName,类型,片长,封面,评价)
                         values
                         ('${req.body.FilmName}','${req.body.类型}',${req.body.片长},'${req.body.封面}','${req.body.评价}')

                 		`,(err)=>{if(!err){
                 			res.send('插入成功')
                 		}})
                 } 
                 else{
            
                 	db.query(`update 电影 set FilmName='${req.body.FilmName}',类型='${req.body.类型}',片长=${req.body.片长},封面='${req.body.封面}',评价='${req.body.评价}'
                        where 片号=${req.body.片号}

                 		`,(err)=>{


                 		if(!err){
                 			res.send(`修改${req.body.FilmName}成功`)
                 		}else{
                 			res.send(err);
                 		}

                 	})
                 }

  }
  else{
  	res.send('权限不足')
  }
    
 

   


}
}
)
module.exports=router;