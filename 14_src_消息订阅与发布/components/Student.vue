<template>
  <div class="test">
      <h2>学生姓名:{{name}}</h2>
      <h2>学生性别:{{sex}}</h2>
      <button @click="sendStudentName">发送学生信息</button>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
    export default {
        name:'Student',
        data() {
            return {
                name:'张三',
                sex:'男'
            }
        },
        methods: {
            sendStudentName(){
                pubsub.publish('hello',this.name)
            }
        },
    }
</script>

<style lang="less">
    .test{
        background-color: burlywood;
        padding: 20px;
    }
</style>