<!--
 * @Author: Evan Zhao
 * @Date: 2021-12-05 21:33:23
 * @LastEditTime: 2021-12-10 22:54:31
 * @FilePath: \Vue_test1\src\App.vue
-->
<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader @addTodo="addTodo" />
        <MyList
          :todos="todos"
        />
        <MyFooter  :todos="todos"  @checkAllTodo="checkAllTodo"/>
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
import MyFooter from "./components/MyFooter.vue";
import MyList from "./components/MyList.vue";

export default {
  name: "App",
  components: { MyHeader, MyFooter, MyList },
  data() {
    return {
      todos: JSON.parse(localStorage.getItem('todos'))||[]
    };
  },
  methods: {
    addTodo(x) {
      console.log("我是App组件，我收到的数据是:" + x);
      this.todos.unshift(x);
    },
    //
    checkTodo(id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) todo.done = !todo.done;
      });
    },
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => {
        return todo.id !== id;
      });
      console.log(123);
    },
    checkAllTodo(done){
      this.todos.forEach((todo)=>{
        todo.done = done
      })
    }
  },
  mounted() {
    this.$bus.$on('checkTodo',
      this.checkTodo
    ),
    this.$bus.$on('deleteTodo',
      this.deleteTodo
    )
  },
  beforeDestroy() {
    this.$bus.$off('checkTodo','deleteTodo')
  },
  watch:{
    todos:{
      deep:true,
      handler(value){
        localStorage.setItem('todos',JSON.stringify(value))
      }
      
    }
  }
};
</script>

<style>
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
