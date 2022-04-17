const express=require('express')
const app=express()


const CORS=function(req,res,next){
console.log("req"+req)
res.setHeader('Access-Control-Allow-Origin','*')

res.setHeader('Access-Control-Allow-Headers','Content-type, application/json;charset=utf-8');
res.setHeader('Access-Control-Allow-Headers','content-type,Oxy,Token')

next()
}


module.exports=CORS

	;

