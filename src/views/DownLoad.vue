<template>
	<div class="download">
		<download-table :items="pycharmList">Pycharm</download-table>
		<download-table :items="hBuilderXList">HBuilderX</download-table>
	</div>
</template>

<script>
	import DownloadTable from "@/components/DownloadTable.vue"
	
	export default{
		components:{
			DownloadTable
		},
		data(){
			return{
				pycharmList:[
					{
						version:"4.6.8",
						update:"2017-07"
					
					},
					{
						version:"4.6.9",
						update:"2018-08"
					
					},
					{
						version:"4.7.8",
						update:"2019-09"
					
					}
				],
				hBuilderXList:[
					{
						version:"3.2.0",
						update:"2017-07"
					},
					{
						version:"3.2.1",
						update:"2018-07"
					},
					{
						version:"3.2.2",
						update:"2019-07"
					}
					
				]
			}
		}
	}
</script>

<style>
</style>
