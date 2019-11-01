<template>
  <div class="joke">
    <h1>笑话页面</h1>
	
	<div v-for="item in joks">
		<div class="item" v-if="item.title">
			<h2>{{item.title}}</h2>
			<p>{{item.summary}}</p>
			
		</div>
	</div>
	
	<button :disabled="flag" class="more"@click="getMore" type="primary">加载更多</button>
  </div>
</template>
<script>
	// import axios from 'axios'
	export default{
		data(){
			return{
				joks:[],
				page:1,
				flag:false
			}
		},
		created() {
			this.getJokes(this.page)
		},
		methods:{
			getMore(){
				this.page++;
				this.getJokes(this.page);
			},
			getJokes(page){
				this.flag=true
				this.$http({
					method:'get',
					url:`http://biger.applinzi.com/duan/list.php?page=${this.page}`,
				}).then(res=>{
					console.log(res.data.result);
					this.joks=this.joks.concat(res.data.result);
					this.flag=false
				})
				
			}
		}
	}
	
</script>
<style scoped lang="less">
	.joke{
		width: 1000px;
		margin: 0 auto;
		.item{
			margin-top: 50px;
			border-bottom: 2px dotted #464646;
		}
		.more{
			width: 100%;
			height:50px;
			margin-top: 60px;
			margin-bottom: 60px;
		}
	
	}
</style>