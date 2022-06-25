<template>
  <div class="container mt-5">
    <p>{{textContenu}}</p>
    <list v-on:emitchangementtxt="changetxt($event)" ></list>
  </div>
</template>

<script>
import List from './list/List.vue';
export default {
  data() {
    return {
     
      textContenu:'ce ci est un contenu dans le pere component'
    };
  },
  methods:{
     changetxt:function(val){
        this.textContenu=val
     }
  },
  components: {
    list: List,
  },
};
</script>

<style scoped></style>
