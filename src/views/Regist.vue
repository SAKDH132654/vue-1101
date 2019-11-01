<template>
	<div class="regist">
		<h2>注册界面</h2>
		用户名: <input type="text" v-model="user.name">
		<br>
		密  码: <input type="password" v-model="user.pwd1">
		<br>
		确认密码: <input type="password" v-model="user.pwd2">
		<br>
		邮  件: <input type="email" v-model="user.email">
		<br>
		<button @click="regist()">注册</button>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				user:{
					name:"",
					pwd1:"",
					pwd2:"",
					email:"",
				}
			}
		},
		methods:{
			regist(){
				if(this.user.name==""||this.user.pwd1==""||this.user.pwd2==""||this.user.email=="")
				{
					alert("所有数据不许为空!")
				}
				else if(this.user.pwd1!=this.user.pwd2)
				{
					alert("密码不一致")
				}
				else
				{
					this.$http({
						url:'http://www.520mg.com/member/reg_new2.php',
						method:"post",
						withCredentials:true,
						data:`userid=${this.user.name}&userpwd=${this.user.pwd1}&email=${this.user.email}`
					}).then(res=>{
						
						alert(res.data.msg);
						
						if(res.data.status==1){
							console.log(res.data);
							this.$router.push(`/login`)
						}
						else
						{
							alert("用户名已经存在！")
						}
					}).catch(err=>{
						alert("网络连接超时。。。")
					})
				}
			}
		}
	}
</script>

<style>
</style>
