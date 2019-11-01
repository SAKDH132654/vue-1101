<template>
	<div class="downLoad">
		<h2><slot></slot></h2>
		<table border="2PX" cellpadding="" cellspacing="" class="table">
			<tr><th>版本号</th><th>出版日期</th><th>当前下载</th></tr>
			<tr v-for="item in items"><th>{{item.version}}</th><th>{{item.update}}</th><th><a href="#">下载</a></th></tr>
			
		</table>
	</div>
	
</template>

<script>
	export default{
		props:["items"]
	}
</script>

<style>
	.table{	
		text-align: center;
		width: 600px;
		margin: 0 auto;
	}
	
</style>
