<!--
 * @Author: Evan Zhao
 * @Date: 2021-12-06 23:35:06
 * @LastEditTime: 2021-12-10 22:45:16
 * @FilePath: \Vue_test1\src\components\MyList.vue
-->
<template>
  <ul class="todo-main">
    <MyItem
      v-for="todoObj in todos"
      :key="todoObj.id"
      :todo="todoObj"
    />
  </ul>
</template>

<script>
import MyItem from "./MyItem.vue";
export default {
  name: "MyList",
  props: ["todos"],
  components: { MyItem },
};
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
