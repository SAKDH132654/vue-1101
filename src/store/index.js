import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import Cookie from 'js-cookie'

export default new Vuex.Store({
	
	//相当于VUE中的data
	//获取数据 this.$store.state.good
	state: {
		good:[],
		isLog:false
	},
	
	// 类似于computed
	//  this.$store.getters.geetLog
	getters:{
		getLog(state){
			return state.isLog||Cookie.get("islog");
		}
	},
	
	// mutations 相当于VUE methods
	// 调用方法 this.$store.commit("函数名",参数列表)
	mutations: {
		setLog(state,log){
			state.isLog= log;
			if(log){
				Cookie.set("islog",true,{expires:7})
			}
			else{
				Cookie.remove("islog")
			};
		},
		
		// 第一个参数必须为state
		addToCarts(state,item){
			let canAdd = true;
			state.good.forEach(g=>{
		  		if(g.id == item.id)
		  		{
		  			g.num+=item.num;
		  			canAdd=false;
		  		}
			})
			if(canAdd){
				
				state.good.push(item)
			}
		},
		del(state,item){
			let index = state.good.indexOf(item);
			state.good.splice(index,1)
		}
		
	},
	actions: {
	},
	modules: {
	}
})
