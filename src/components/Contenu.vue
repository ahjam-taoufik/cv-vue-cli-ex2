<template>
  <div>
    {{ txt }}
    <list v-bind:prenom="prenom" ></list>
  </div>
</template>

<script>
import List from './list/List.vue';
export default {
  data() {
    return {
      txt: 'Votre Contenu IcI',
      prenom:'taoufik'
    };
  },
  components: {
    list: List,
  },
};
</script>

<style scoped></style>
