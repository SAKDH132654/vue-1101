<template>
	<div class="logOut">
		<div>
			<button @click="logout">退出当前账号</button>
		</div>
	</div>
</template>

<script>
	export default{
		methods:{
			logout(){
				this.$http({
					url:'http://www.520mg.com/member/index_login.php',
					method:'post',
					data:'dopost=exit',
					withCredentials:true,
				}).then(res=>{
					console.log(res.data)
					if(res.data.status==1){
						this.$store.commit("setLog",false);
						this.$router.push(`/`);
					}
				})
			}
		}
		
	}
</script>

<style>
</style>
