const config=require('./config.js');
const mysql=require('mysql');
const db=mysql.createPool(config.mysql);

module.exports=db;