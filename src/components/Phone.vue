<template>
	<div class="p-container" >
		<img :src="phoneInfo.image" alt="">
		<h3>{{ phoneInfo.title }}</h3>
		<p>{{ phoneInfo.info }}</p>
		<span>{{ phoneInfo.price }}元</span>
	</div>
</template>

<script>
	export default{
		props:["phoneInfo"]
	}
</script>

<style>
	.p-container{
		width: 220px;
		text-align: center;
		margin: 10px;
		background-color: white;
		padding-bottom: 10px;
	}
	.p-container img{
		width: 100%;
	}
</style>
