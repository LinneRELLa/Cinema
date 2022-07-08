const ws=require('nodejs-websocket')

let count =0

function broadcast(server,msg){
server.connections.forEach(x=>{
	x.send(msg)
})


}

const server=ws.createServer(c=>{
count++;

c.userName='用户'+count


broadcast(server,c.userName+'进入聊天室');


console.log('connected')
c.on('text',data=>{
	broadcast(server,c.userName+'说:'+data);
})
c.on('close',()=>{
count--;
})

c.on('error',()=>{
	console.log('连接断开');
})


})

server.listen(20233)












