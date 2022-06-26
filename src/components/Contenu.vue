<template>
  <div class="container mt-5">
    <h1>page de Contenu</h1>
    <img v-bind:src="urlImg" alt="">
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      urlImg: null,
    };
  },
  mounted() {
    axios.get('https://api.thecatapi.com/v1/images/search').then((res) => {
      this.urlImg = res.data[0].url;
    });
  },
};
</script>

<style scoped>
h1 {
  margin-top: 100px;
 
}
 img{
    height: 300px;
    width: 300px;
  }
</style>
