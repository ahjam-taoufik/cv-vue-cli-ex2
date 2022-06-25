<template>
  <div class="container mt-5">
    <list v-bind:films="films1" ></list>
     <button v-on:click="deleteFilm" class="btn btn-primary">Delete One Film</button>
     
    <list v-bind:films="films1" ></list>
     <button v-on:click="deleteFilm" class="btn btn-primary">Delete One Film</button>
  </div>
</template>

<script>
import List from './list/List.vue';
export default {
  data() {
    return {
      txt: 'Votre Contenu IcI',
      films1:[
        {name:'gladiator', year:2000},
        {name:'seven', year:1999},
        {name:'taken', year:2010}
      ],
      
    };
  },
  components: {
    list: List,
  },
  methods: {
    deleteFilm:function(){
        this.films1.pop()
    }
  }
};
</script>

<style scoped></style>
