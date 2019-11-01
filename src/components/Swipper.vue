<template>
	<div class="s-container" @mouseenter="stop" @mouseleave="resume">
		<!-- <h1>这是一个轮播图</h1> -->
		<div v-for="(item,index) in items" v-show="index==currentIndex">
			<img :src="item" alt="">
		</div>
		
		<div v-for="(item,index) in items" class="point" @click="currentIndex=index"></div>
		
		
	</div>
</template>

<script>
	export default{
		data(){
			return{
				currentIndex:0,
				playing:true,
				interval:null
			}
		},
		created(){
			this.play();
		},
		destroyed() {
			clearInterval(this.interval)
		},
		methods:{
			play(){
				this.interval = setInterval(()=>{
					if(this.playing){
						this.currentIndex++;
						if(this.currentIndex >=this.items.length){
							this.currentIndex=0;
						}
					}
				},3000)
				
			},
			stop(){
				this.playing=false;
				
			},
			resume(){
				this.playing= true;
			}
		},
		
		
		props:["items"]
	}
</script>

<style lang="less">
	.s-container div img{
		width: 100%;
	}
	.point{
		display: inline-block;
		border: 10px solid chocolate;
		border-radius: 20px;
		position: relative;
		margin: 5px;
		top: -60px;
	}
	
</style>
