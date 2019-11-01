<template>
	<div >
		<h1>购物车</h1>
		<div class="cart">
			<table border="2px" cellpadding="15px" cellspacing="2px">
				<tr> <th>商品名字</th> <th>商品单价</th><th>商品数量</th> <th>操作</th></tr>
				<tr v-for=" item in $store.state.good"> 
					<td>{{item.title}}</td>
					<td>{{item.price}}</td>
					<td><button @click="item.num--" :disabled="item.num==1">-</button> {{item.num}} <button @click="item.num++">+</button></td> 
					<td><button @click="del(item)">移除</button></td>
				</tr>
			</table>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				// total:0
			}
		},
		methods:{
			del(item){
				this.$store.commit("del",item)
			}
		}
	}
</script>

<style scoped >
	.cart{
		display: flex;
		justify-content: center;
	}
	
</style>
