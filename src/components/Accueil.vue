<template>
  <div>
        <div class="card" v-for="(post, index) in posts" v-bind:key="index">
        <div class="crad-header">{{post.id}}</div>
        <div class="card-body">
            <router-link :to='`/article/${post.id}`'>
                <div class="card-title">{{post.title}}</div>
            </router-link>
            <div class="card-text">{{post.body}}</div>
        </div>
        </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      posts: [],
    };
  },
  async created() {
    await axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
      //   for(const item of res.data){
      //       this.posts.push(item)
      //   }
      this.posts = res.data;
    });
  },
};
</script>

<style scoped></style>
