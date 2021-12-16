<template>
  <div class="category">
    <h3>{{title}}分类</h3>
    <slot>我是插槽</slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props:['title']
};
</script>

<style>
    .category{
        background-color: skyblue;
        width: 200px;
        height: 300px;
    }
</style>
