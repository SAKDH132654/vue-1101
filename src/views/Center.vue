<template>
	<div class="center">
		<h2>个人中心</h2>
		<p>用户名:{{user.M_UserName}}</p>
		<p>荣誉:{{user.M_Honor}}</p>
		<p>注册时间:{{user.M_JoinTime}}</p>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				user:{}
			}
		},
		created(){
			this.getUserInfo()
		},
		methods:{
			getUserInfo(){
				this.$http({
					url:'http://www.520mg.com/member/ajax_login.php',
					method:"get",
					withCredentials:true,
				}).then(res=>{
					console.log(res.data);
					this.user=res.data;
				})
			}
		},
	}
</script>

<style>
</style>
