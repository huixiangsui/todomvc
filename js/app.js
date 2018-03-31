// (function (window) {
// 	'use strict';

// 	// Your starting point. Enjoy the ride!

// })(window);
;(function(){
	const todos = [
		{
			id:1,
			title:'吃饭',
			done:true
		},
		{
			id:2,
			title:'吃1',
			done:false
		},
		{
			id:3,
			title:'吃2',
			done:true
		},
		{
			id:4,
			title:'吃3',
			done:false
		}
	]
	new Vue({
		el:"#todoapp",
		data:{
			todos:todos,
			inputText:'',
			currentEdit:null
		},
		methods:{
			addTodo:function(e){
				// console.log(222)
				// 单独拿到文本框数据
				const {inputText,todos} = this
				//获取唯一的id

				const id = todos[todos.length-1].id+1
				//添加到数组中
				todos.push({
					id,
					title:this.inputText,
					done:false
				})
			},
			removeTodo:function(index){
				// console.log(111111)
				this.todos.splice(index,1)
			},
			getEditing:function(item){
				// console.log(3333)
				this.currentEdit = item
			},
			saveEdit(index){

			}
		}
	})
})()