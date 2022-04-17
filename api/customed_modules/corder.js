const express=require('express')
const config=require('./config.js')
const jwt=require('jsonwebtoken')
const db=require('./sqlcon.js')

const router=express.Router()



router.post('/',(req,res,next)=>{

const info={
	untoken:req.untoken,
	ac:req.untoken.ac,
	ScheduleNo:req.body.Schno,
	SeatNo:req.body.Seatno

}


function getUser(info)      {
	return new Promise((resolve,reject)=>{
	if(info.untoken!=0){
db.query(`select * from 用户 where Account =${info.ac}`,
(err,response)=>{
	if(err){
		reject(err);
	}
	else{
		info.ac=response[0];
		resolve(info)
    

		}
      })             }  })

									}


function createorder(info){
	return new Promise((resolve,reject)=>{
	db.query(`select * from scheduleinfo where 排片号=${info.ScheduleNo}`,(err,res)=>{
if(err){

reject(err)

}
else{


	info.sche=res[0];
let x=info.sche.LeftSeat.split('')[info.SeatNo]
if(x==1){
	reject({msg:'座位被抢走啦！'})
}



if(info.ac['余额']>res[0].票价){
let rest=info.ac['余额']-res[0].票价;
let sql=`update 用户 set 余额=${rest} where UID = ${info.ac.UID}`;

db.query(sql,(err,res)=>{
if(err){
	resolve(err)
}else{






let sql1=`insert into 订单 
(\`UID\`,\`排片号\`,\`座位号\`,\`Status\`)
values
('${info.ac.UID}','${info.ScheduleNo}','${info.SeatNo}',${1})

`;
db.query(sql1,(err,res)=>{

if(!err){
	resolve(info);
}
else{reject(err)}

})
}



})

}
else{
	reject({msg:'余额不足'});
}

}


	})
}		)							}


function seatchange(info){

	return new Promise((resolve,reject)=>{
let x=info.sche.LeftSeat.split('')
	x.splice(info.SeatNo,1,'1');

	db.query(
`update \`排片\`
set LeftSeat='${x.join('')}'
where 排片号=${info.ScheduleNo}
`,(err,res)=>{
	if(!err){
let sql=`update 用户 set \`阅片量\`
=${++info.ac.阅片量}
where UID = ${info.ac.UID}
`;
db.query(sql,(err,ress)=>{

if(!err){
	resolve({msg:'成功啦'})
}
else{
	reject(err)
}


})




	}
	else{
		reject(err)
	}
}


		)


})
}



getUser(info)
.then(createorder)
.then(seatchange)
.then((value)=>{res.send(value)})

.catch((err)=>{
	res.send(err);
})

})

module.exports=router;