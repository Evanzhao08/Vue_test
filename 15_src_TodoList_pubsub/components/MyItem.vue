<!--
 * @Author: Evan Zhao
 * @Date: 2021-12-06 23:35:06
 * @LastEditTime: 2021-12-10 23:47:21
 * @FilePath: \Vue_test1\src\components\MyItem.vue
-->
<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
  </li>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
  name: "MyItem",
  //声明接受todo对象
  props:['todo'],
  methods: {
    handleCheck(id){
      console.log(id)
      //通知APP组件将对应的todo对象的done值取反
     // this.checkTodo(id)
     this.$bus.$emit('checkTodo',id)
    },
    handleDelete(id){
      if(confirm('确定删除吗？')){
        //this.deleteTodo(id)
        //this.$bus.$emit('deleteTodo',id)
       this.pubId = pubsub.publish('deleteTodo',id)
      }
    }
  },
  mounted() {
    pubsub.unsubscribe(this.pubId)
  },
};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
li:hover{
  background-color: #ddd;
}
li:hover button{
  display: block;
}
</style>
