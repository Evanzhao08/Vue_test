<template>
  <div>
    <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input
          type="text"
          v-model="keyWord"
          placeholder="enter the name you search"
        />&nbsp;<button @click="searchUsers">Search</button>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Search",
  data() {
    return {
      keyWord: "",
    };
  },
  methods: {
    searchUsers() {
      this.$bus.$emit("ListItems", {isFirst:false,isLoading:true,errMsg:'',users:[]});
      axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
        (response) => {
          console.log("请求成功了", response.data);
        //  this.$bus.$emit("ListItems", { users: response.data.items });
          this.$bus.$emit("ListItems", {isLoading:false,errMsg:'',users:response.data.items});
        },
        (error) => {
          console.log("请求失败了", error.message);
          this.$bus.$emit("ListItems", {isLoading:false,errMsg:error.message,users:[]});
        }
      );
    },
  },
};
</script>

<style scoped>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}
</style>
