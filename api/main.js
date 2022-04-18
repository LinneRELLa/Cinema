const express=require('express')
const app=express()
const path = require('path');

var https = require('https');
var http = require('http');
var fs = require('fs');


const key=fs.readFileSync('./key/www.rellal.com.key');
const cert=fs.readFileSync('./key/www.rellal.com.crt');
const options={ket,cert}



/*CORS中间件*/
const cors=require('./customed_modules/CORS.js')
app.use(cors);
/*app.use(express.urlencoded({extended:false}));*/
var bodyParser = require('body-parser');
app.use(bodyParser.json({limit:'1mb'}));  //body-parser 解析json格式数据
app.use(bodyParser.urlencoded({            //此项必须在 bodyParser.json 下面,为参数编码
  extended: true
}));




const Login=require('./customed_modules/Login.js')



/*api-登录接口*/
app.use('/api/Login',Login);


const Register=require('./customed_modules/register.js')

app.use('/api/Register',Register);

/*middleware-解密token*/
const untoken=require('./customed_modules/tokenVerify.js')
/*api-获取信息*/
const info=require('./customed_modules/info.js')
app.use('/api/info',untoken,info)

const Films=require('./customed_modules/Films.js')
app.use('/api/Films',Films)

const infos=require('./customed_modules/acinfo.js')
app.use('/api/ac',untoken,infos)

const Orders=require('./customed_modules/Orders.js')
app.use('/api/ac/orders',untoken,Orders)

const buyticket=require('./customed_modules/corder.js')
app.use('/api/ac/buyticket',untoken,buyticket)

const FilmEdit=require('./customed_modules/FilmEdit.js')
app.use('/api/ac/FilmEdit',untoken,FilmEdit)


const FilmsToEdit=require('./customed_modules/FilmsToEdit.js')
app.use('/api/FilmsToEdit',FilmsToEdit)

const Record=require('./customed_modules/Record.js')
app.use('/api/Record',Record)




https.createServer(options,app).listen(900)