<template>
  <div class="demo">
      <h2>学校名称:{{name}}</h2>
      <h2>学校地址:{{address}}</h2>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name:'School',
    data() {
        return {
            name:'史莱克学院',
            address:'长安城'
        }
    },
    mounted() {
       this.pubId = pubsub.subscribe('hello',function(a,b){
            console.log('有人发布了hello消息',a,b)
        })
    },
    beforeDestroy() {
        pubsub.unsubscribe(this.pubId)
    },
}
</script>
<style scoped>
    .demo {
        background-color: seagreen;
        padding: 30px;   
    }
</style>