<template>
	<div class="detail">
		<h2>{{goods.title}}</h2>
		<img :src="goods.image" alt="">
		<br>
		<button @click="goods.num--" :disabled="this.goods.num==1">-</button> {{goods.num}} <button @click="goods.num++">+</button>  <button @click="addCart()">加入购物车</button>
		<br>
		<router-link :to="`/detail/${this.$route.params.id}/baby`">宝贝详情</router-link>  <router-link :to="`/detail/${this.$route.params.id}/coments`">宝贝评论</router-link>
		<router-view></router-view>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				goods:null,
				// num:1
			}
		},
		methods:{
			addCart(){
				this.$store.commit("addToCarts",{
					id:this.goods.id,
					title:this.goods.title,
					price:this.goods.price,
					num:this.goods.num,
				})
			}
		},
		created(){
			console.log(this.$route.params.id)
			this.goods={
				id:this.$route.params.id,
				title:`商品 ${this.$route.params.id}`,
				price:parseInt(Math.random()*10000),
				image:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d295c4fb500d163a7045dc715b47f808.jpg?thumb=1&w=200&h=200&f=webp&q=90",
				num:1,
			}	
		},
	}
</script>

<style>
</style>
