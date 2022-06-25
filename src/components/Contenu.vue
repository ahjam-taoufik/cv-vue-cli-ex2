<template>
  <div class="container mt-5">
    <list v-bind:films="films1" v-bind:txt="txt1"></list>
    <list v-bind:films="films1" v-bind:txt="txt1"></list>
  </div>
</template>

<script>
import List from './list/List.vue';
export default {
  data() {
    return {
      films1: [
        { name: 'gladiator', year: 2000 },
        { name: 'seven', year: 1999 },
        { name: 'taken', year: 2010 },
      ],
      txt1: 'Votre Contenu IcI',
    };
  },
  components: {
    list: List,
  },
};
</script>

<style scoped></style>
