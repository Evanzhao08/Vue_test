<template>
  <div>
    <ul>
      <li v-for="{id,title} in messageList" :key="id">
        <!-- 跳转路由 并携带query参数，to的字符串写法-->
        <!-- <router-link :to="`/home/message/detail?id=${id}&title=${title}`">{{title}}</router-link>&nbsp;&nbsp; -->
        <!-- 跳转路由 并携带query参数，to的对象写法-->
        <router-link :to="{
           path:'/home/message/detail',
            query:{
              id,
              title
              }
          }">
          {{title}}
        </router-link>
      </li>
    </ul>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    name:'Message',
     data() {
    return {
      messageList:[
        {id:'001',title:'消息001'},
        {id:'002',title:'消息002'},
        {id:'003',title:'消息003'},
      ]
    }
  },
};
</script>
