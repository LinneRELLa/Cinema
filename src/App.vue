<template>

 
<div id="root">

	<div id="top">{{icon}} <a href="javascript:window.opener=null;window.open('','_self');window.close();"><div class="quit" >×</div></a></div>


	<div id="bottom">
	<div id="left">
	
		<router-link replace :to="`/SheduleLists`" class="icon" active-class="active-icon" ref="default"
       

		><i class="el-icon-s-ticket"/>购票</router-link>
        <router-link replace :to="`/AccountInfo`" class="icon" active-class="active-icon"><i class="el-icon-user"/>用户</router-link>

 <router-link replace :to="`/Edit/FilmToEdit`" class="icon" active-class="active-icon"><i class="el-icon-edit"/>排片</router-link>

  <router-link replace :to="`/Record`" class="icon" active-class="active-icon"><i class="el-icon-s-comment"/>评价</router-link>

	</div>
	<div id="rightout">


<div id="rightin">


<keep-alive :include="/^((?!RD).)+$/">
<router-view ></router-view>
</keep-alive>
</div>
</div>
</div>
  </div>

</template>
<script>



/*import 'animate.css'*/



	export default {
	/*	
*/
name:'App',


data(){





	return {icon:'R',
	response:{},
	sloaded:0,
	keepalive:['Record','FilmToEdit','SheduleLists']
}
},




mounted(){
	/*
	this.$refs.default.$el.click();*/
	this.$bus.$on('sloaded',(status)=>{

    this.sloaded=status;
    

	})
},
methods:{

	jieliu(){




	}
}
/*computed(){



}*/


	
}


</script>

<style lang="less" scoped>
@dborder:1px solid rgba(242,242,242,0.6);
.contentmiddle(){

	display: flex;
	justify-content: center;
	align-items: center;
}

a:visited{
text-decoration: none;
color: none;
}
	#root{
		width:100%;height:100%;justify-content:space-around;border:1px solid #000;align-content:flex-start;
		flex-direction: column;



		}
		#root #top{height:20px;width:100%;border:1px solid #000;
			color: white;
			background:black;
}


#top{
font-family: 'Vivaldi';


			}
			#root #left{
background:rgba(36,40,47,0.7);
				width:200px;border:1px solid @dborder;
display: flex;
flex-direction: column;
align-items: center;


.icon{

width: 80%;
text-align: center;
font-size: 30px;

text-decoration: none;
/*color: white;*/
border-radius: 5px;
color: white;
margin-top: 10px;

}
.icon:hover{color:rgba(133,133,254);}
.active-icon{
	background:rgb(71,73,76);
}

			}


#bottom{display: flex;

height: calc(100% - 20px);

}

#rightin{
	overflow: hidden;
	flex: 1;
	display: flex;

}

#rightout{

	overflow: hidden;
	flex: 1;
	display: flex;
}









</style>

<style lang="less">
.contentmiddle(){

	display: flex;
	justify-content: center;
	align-items: center;
}

		.loading{
		z-index: 3;
		background:black;
		color: white;
	position: absolute;
		width: 100%;
		height: 100%;
		font-size: 120px;
		.contentmiddle();
		font-family: 'Edwardian Script ITC';
		

	}
	.loadicon{animation: loadAnime 1s ease alternate infinite;}
	@keyframes loadAnime{
		0%{opacity: 0;}
		100%{opacity: 1;}
	}
	*::-webkit-scrollbar {
		display: none;
	}

a {
    text-decoration: none;
    color:white;
}
	
	#top{-webkit-app-region: drag}
	.quit{

	-webkit-app-region: no-drag;
	font-size:26px;color:white;
	line-height: 100%;

	height: 100%;
user-select:none;
position: absolute;
right: 4px;
top:-4px;
&:hover{color: rgb(33,120,255);}
			}
</style>

<!-- 
用于组件测试 -->

<!-- <template>

   
<div id="root">

</div>


</template>
<script>

import SheduleLists from './components/SheduleLists'

	export default {

name:'App',
	components:{
		SheduleLists
	}
}


</script>

<style lang="less" scoped>


</style> -->