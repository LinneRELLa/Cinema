<template>
  <div id="con" ref="con"></div>
</template>






<script>
  export default{

    mounted(){
	const con=this.$refs.con;
   const canvas=document.createElement('canvas')
   const ctx=canvas.getContext('2d')
   canvas.width=canvas.height=280;
   ctx.strokeStyle='white'
   ctx.moveTo(20,canvas.height-20)
  
   ctx.lineTo(20,20)
   ctx.stroke()
   ctx.moveTo(20,canvas.height-20)
   ctx.lineTo(canvas.width-20,canvas.height-20)
   ctx.stroke()
   
 
   const grid=(canvas.width-20)/10
   function grids(first){
   for(let x =1;x<9;x++){
   const	gap=grid*x
   	ctx.beginPath()
   ctx.lineWidth=0.1;
     ctx.moveTo(20+gap,40)
  
   ctx.lineTo(20+gap,canvas.height-40)
   ctx.stroke()
     ctx.moveTo(40,20+gap)
  
   ctx.lineTo(canvas.width-40,20+gap)
   ctx.stroke()

if(first){
    ctx.textBaseline = "middle"
   	ctx.font="italic white small-caps 18px arial";
   	ctx.fillStyle='white'
ctx.fillText(x,20+gap,canvas.height-10)

}
   }
 }
 grids(true)
function maxi(a){
return a.reduce((p,c)=>{return Math.max(p,c)})
}

const a=[]
  for (let i=0;i<=8;i++) {
  	a.push(Math.random()*100)
  }



   function async(array,clock){
   let max=maxi(array)+20;
    
      let x=60
	 let y=(1-array[0]/max)*(canvas.height-80)
     
	
xspeed=(canvas.width-80)/array.length/clock
     let i=0;
     function draw(array,clock){
     	 ctx.beginPath()
     ctx.lineWidth=2
     ctx.globalAlpha=0.5
     	ctx.moveTo(x,y)
       
     
     if(i<clock*array.length){
     	if(i%clock==0){

     		index=Math.floor(i/clock)
 
            
         

         yspeed=(array[index+1]-array[index])/max*(canvas.height-80)/clock;


          const angle=Math.PI*2-Math.atan(yspeed/xspeed)
              
            ctx.beginPath()
     		
       
          ctx.globalAlpha=1  
      ctx.arc(x,y,2,angle,angle+Math.PI*2)
      ctx.fillStyle='black'
      ctx.fill()



      
     	}

     y=y-yspeed
     x=x+xspeed


 ctx.lineTo(x,y);
  ctx.globalAlpha=1
   ctx.lineWidth=1
       ctx.stroke()
    i+=1;
    
    requestAnimationFrame(()=>{draw(array,clock)});

     }


     }
   
  draw(array,clock);
  
   }

   






function sync(array,i,clock,max){


    
      let x=60
	 let y=(1-array[0]/max)*(canvas.height-80)





const xgap=(canvas.width-80)/array.length;

for(let z=0;z<array.length;z++){
	console.log('s')
const ygap=(array[z+1]-array[z])/max*(canvas.height-80);


          const angle=Math.PI*2-Math.atan(ygap/xgap)
              
   

	 ctx.beginPath()
	 ctx.globalAlpha=1;
	 ctx.lineWidth=1

 if(z==0){
  y-=i/clock*ygap
 
}
ctx.moveTo(x,y)
 if(z==0){
y+=i/clock*ygap
}
if(z!=0||i==0){
 ctx.arc(x,y,2,angle,angle+Math.PI*2)
      ctx.fillStyle='black'
      ctx.fill()
}
      
x=x+xgap;

y=y-ygap;
if(z==0){
	x-=i/clock*xgap
 
}
ctx.lineTo(x,y)


ctx.stroke()
	 
	

}


}

const b=[30,40,60,20,10]
let ci=0;
function change(array,clock,z,max){
  array.push(array[array.length-1])
 const tail=array[array.length-1]

 

  redraw(array,clock)
  function redraw(array,clock){
ctx.clearRect(40,40,canvas.width-60,canvas.height-60)
grids(false)
 array[array.length-1]+=(z-tail)/clock
sync(array,ci,clock,max)

ci++;

if(ci<clock){
requestAnimationFrame(()=>{redraw(array,clock)})
}
else{
   array.shift()
   ci=0;
   console.log(array)
  change(b,180,Math.random()*80,max)
}

}

}
let m=maxi(b)+20
change(b,180,40,120)
   con.appendChild(canvas);
 }}
</script>

</body>
</html>