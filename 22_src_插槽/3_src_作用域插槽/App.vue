<template>
  <div class="container">
    <Category title="游戏">
      <template scope="{games}">
        <ul>
          <li v-for="item in games" :key="item.index">{{ item }}</li>
        </ul>
      </template>
    </Category>
    <Category title="游戏">
      <template scope="{games}">
        <ol>
          <li v-for="item in games" :key="item.index">{{ item }}</li>
        </ol>
      </template>
    </Category>
    <Category title="游戏">
      <template slot-scope="{games}">
          <h4 v-for="item in games" :key="item.index">{{ item }}</h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category.vue";
export default {
  name: "App",
  components: { Category },
};
</script>

<style scoped>
.container,
.foot {
  display: flex;
  justify-content: space-around;
}

video {
  width: 100%;
}
img {
  width: 100%;
}
</style>
