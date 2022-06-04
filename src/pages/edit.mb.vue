<template>
	<div id="root">







	<div class="rightc">
<keep-alive include="FilmToEdit">

		<router-view>
			
		</router-view>
</keep-alive>
	</div>















	</div>

</template>
<script type="text/javascript">
	export default{
name:'Edit',
created(){
setTimeout(()=>{this.aloading=0},1000);
},
data(){
	return {aloading:1}
}




	}




</script>
<style lang="less" scoped>
	.lefttab{width: 200px;
		background: rgba(36,40,47,0.8);
		text-align: center;
		font-size: 25px;
		height: 100%;
		flex-grow: 0;}
	#root{width: 100%;
		height: 100%;
		overflow: hidden;
display: flex;
flex-wrap: nowrap;
flex-direction: row;
justify-content: space-around;
position: relative;

	}
.rightc{
	flex: 1;
height: 100%;
	
	width: 100%;
	background:rgba(36, 40, 47, 0.8);
overflow: auto;
}


</style>