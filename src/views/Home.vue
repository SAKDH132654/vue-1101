<template>
	<div class="home">
		<!--<img alt="Vue logo" src="../assets/logo.png">
		<HelloWorld msg="Welcome to Your Vue.js App"/> -->
		<div class="swipper-container">
			<swipper :items="swipperList"></swipper>
		</div>
		<div class="phone-container">
			<div v-for="item in phoneList">
			
				<router-link :to="`/detail/ ${item.id}`">
				
				<phone :phoneInfo="item" ></phone>
			
				</router-link>
			</div>
		</div>
	
	</div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Swipper from '@/components/Swipper.vue'
import Phone from '@/components/Phone.vue'
export default {
	name: 'home',
	data(){
		return{
			swipperList:[
				"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b642c13442fc0ca455394f34e59a22b3.jpg?thumb=1&w=1226&h=460&f=webp&q=90",
				"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/30bb7101afd301b77d8558bf43dff8b0.jpg?thumb=1&w=1226&h=460&f=webp&q=90",
				"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a4f5e5eb570bd8c932c41d111ecb4838.jpg?w=2452&h=920",
				"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a845ff7f63615deed337967fd1d412e7.jpg?thumb=1&w=1226&h=460&f=webp&q=90",
			  
			],
			phoneList:[
				{
					id:11,
					title:"小米9 Pro 5G",
					image:"http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ca9b4f81af709935556bef9aa21a90e8.jpg?thumb=1&w=250&h=250&f=webp&q=90",
					info:"5G双卡全网通，骁龙855Plus",
					price:3699,
				},
				{
					id:22,
					title:"Redmi 8",
					image:"http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d295c4fb500d163a7045dc715b47f808.jpg?thumb=1&w=250&h=250&f=webp&q=90",
					info:"5000mAh超长续航",
					price:799,
				},
				{
					id:33,
					title:"Redmi Note 8 Pro",
					image:"http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6f2493e6c6fe8e2485c407e5d75e3651.jpg?thumb=1&w=250&h=250&f=webp&q=90",
					info:"Redmi Note 8 Pro",
					price:1399,
				},
				{
					id:44,
					title:"Redmi Note 8",
					image:"http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4c87947d104ee5833913e4c520108f16.jpg?thumb=1&w=250&h=250&f=webp&q=90",
					info:"5G双卡全网通，骁龙855Plus",
					price:999,
				},
				{
					id:55,
					title:"Redmi K20 Pro 尊享版",
					image:"http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8737a33c78a94bc36afb860ab23b3939.jpg?thumb=1&w=250&h=250&f=webp&q=90",
					info:"骁龙855 Plus， 弹出全面屏",
					price:2699,
				},
				{
					id:66,
					title:"Redmi Note 7",
					image:"http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0ce61b71e2f81df62bd0c05aaa901d22.jpg?thumb=1&w=250&h=250&f=webp&q=90",
					info:"4800万拍照千元机",
					price:1099,
				},
				{
					id:77,
					title:"Redmi 7 ",
					image:"http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9aab8a7fa9005ef918c9aa2d5f17c806.jpg?thumb=1&w=250&h=250&f=webp&q=90",
					info:"4000mAh超长续航",
					price:899,
				},
				{
					id:88,
					title:"Redmi 7A",
					image:"http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3c1af9783bdc53ed843af5655ca92009.jpg?thumb=1&w=250&h=250&f=webp&q=90",
					info:"小巧大电量 持久流畅",
					price:579,
				}
			]
		}
	},
	components: {
		// HelloWorld
		Swipper,
		Phone
	
	}
}
</script>

<style>
	
	.home{
		width: 1000px;
		margin: 0 auto;
		background-color: #f5f5f5;
	}
	
	.phone-container{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}
</style>