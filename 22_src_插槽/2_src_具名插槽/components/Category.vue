<template>
  <div class="category">
    <h3>{{title}}分类</h3>
     <slot name="center">我是插槽center</slot>
     <slot name="footer">我是插槽footer</slot>
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
    h3,h4{
    text-align: center;
    background-color: orange;
  }
</style>
