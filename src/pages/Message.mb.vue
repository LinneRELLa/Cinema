<template>
	
	<div id="bkg">
 <div ref="ola">{{x}}</div>
 <button @click="z">aa</button>
 
	</div>
</template>


<script>
	const Process=()=>import('../components/Process');
 
	export default{
  name:'Message',
  components:{
    Process,
  },
  
data(){
return {x:1}
}
  ,
methods:{
z(){
    this.$nextTick(()=>{
      console.log(this.$refs.ola.innerHTML)
    })
  this.x+='a';
     this.$nextTick(()=>{
      console.log(this.$refs.ola.innerHTML)
    })
       this.x+='a';
          this.$nextTick(()=>{
      console.log(this.$refs.ola.innerHTML)
    })
            this.x+='a';  this.x+='a';  this.x+='a';  this.x+='a';
}
},

created(){
console.log('cr')
console.log(this)
  





  const vc=this;


}
}
</script>

<style>
  .tasks{
  
  
    width: 600px;
    min-height: 200px;
    max-height: 400px;
    overflow: auto;
    position: relative;
  }
.task:nth-of-type(1){


}

  .task:hover{
background: rgba(229,240,254,0.9);
  }

#mask{
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  z-index: 3;
}
.toollip{
   position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  width: 500px;
  height: 413px;
  background: rgba(255,255,255,1);
  z-index: 4;
  border-radius: 3px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0 30px;
  flex-direction: column;
}
.title{
  font-size: 16px;
  font-weight: 400;
color: black;
  padding: 15px 40px;
}
#bkg{
  background: rgba(250,250,250);
  width: 100%;
    min-width: 728px;
 
}
.btn:hover{
  cursor: pointer;
  color: rgba(10,10,10,0.5);

}
.btn{
 color: black;

}

#MessageRight{
  overflow: hidden;
  
  height: 100%;
  font-size: 128px;
  color: black;
  font-family: 'Vivaldi';
  position: relative;

}

#MessageLeft{

  float: left;
  border-right: 1px solid rgba(4,4,4,0.3);
height:100%;
}
#Msgup{
animation: come 1s ease ;

}
#Msgdown{
animation: come1 1s ease;
}

@keyframes come{
  0%{transform: perspective(2000px) 
  
    translate3d(30px,30px,0);}
  100%{transform: perspective(2000px) 
  
    ;}
}
@keyframes come1{
  0%{transform: perspective(2000px) 
    translate3d(-30px,-30px,0)
 ;}
  100%{transform: perspective(2000px) 
    translate3d(0,0,0)

    ;

   }
}
.Logo{
  transform-style: preserve-3d;
  position: absolute;
margin: -64px -64px;
  left: 50%;
  top: 50%;

}
.tasktitle{
  
width: calc(100% - 20px);
background: rgb(250,250,250);
padding: 0 10px;

}
.content{
   display: flex;justify-content: space-between;font-size: 13px;color: rgb(211,214,218);
}
.operate{
  font-size: 20px;
  text-align: center;
}
.input{
  width: calc(100% - 70px);
  border: 1px solid rgb(230,230,230);
  border-radius: 3px;
  height:36px;
  padding-left: 50px;
  padding-right: 20px;
}
.textarea{
    width: 100%;
  border: 1px solid rgb(230,230,230);
  border-radius: 3px;
}
.textarea:focus-visible{
  border: 1px solid rgb(63,133,255);
}
textarea:focus{
  border: 1px solid rgb(63,133,255);
  outline: none;
}
input:focus{
  border: 1px solid rgb(63,133,255);
  outline: none;
}
.outin{width: 100%;}
.outin::before{
content: "电脑";

display: inline-block;

width: 40px;

height:40px;
line-height: 40px;


position: absolute;
left: 40px;


}
.Rdnd{
  height: 44px;
  width: 100%;
  text-align:center;
  cursor: pointer;
  background: rgb(245,245,245);
  line-height: 44px;
  margin: 20px 0;
  color:rgb(204,204,211);
}
.Rdnd-active{
    height: 44px;
  width: 100%;
  text-align:center;
  cursor: pointer;
  background: rgb(38,112,234);
  line-height: 44px;
  margin: 20px 0;
  color:white;

}
#dnd{
  border: none;
  border-radius: 3px;
  background: rgba(231,239,251,0.8);
  color: rgba(63,133,255);
  cursor: pointer;
  font-size: 18px;
}
#dnd:hover{
  background: rgba(231,239,251,1);
}
#msg{
    border: none;
  border-radius: 3px;
  background: rgba(231,239,251,0.8);
  color: rgba(63,133,255);
  font-size: 18px;
  float: left;
  user-select: none;
  margin: 0 20px;
}
</style>