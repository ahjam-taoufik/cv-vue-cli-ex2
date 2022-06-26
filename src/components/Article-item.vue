<template>
  <div>
    <div class="card" v-if="post">
      <div class="crad-header">{{ post.id }}</div>
      <div class="card-body">
        <div class="card-title">{{ post.title }}</div>
        <div class="card-text">{{ post.body }}</div>
      </div>
    </div>
      <button v-on:click="retour" class="btn btn-warning">Retour au home page</button>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Article-item',
  data() {
    return {
      id: this.$route.params.id,
      post: null,
    };
  },
async mounted() {
   await axios
      .get(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
      .then((res) => {
        this.post = res.data;
      });
  },
   methods:{
        retour:function(){
            this.$router.push('/')
        }
    }
};
</script>

<style scoped></style>
