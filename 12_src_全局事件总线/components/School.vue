<template>
  <div class="demo">
      <h2>学校名称:{{name}}</h2>
      <h2>学校地址:{{address}}</h2>
  </div>
</template>

<script>
export default {
    name:'School',
    data() {
        return {
            name:'史莱克学院',
            address:'长安城'
        }
    },
    mounted() {
        this.$bus.$on('hello',(data)=>{
            console.log("接收学生信息:"+data);
        })
    },
    beforeDestroy() {
        this.$bus.$off('hello')
    },
}
</script>
<style scoped>
    .demo {
        background-color: seagreen;
        padding: 30px;   
    }
</style>