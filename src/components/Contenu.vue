<template>
  <div>
    {{ txt }}
    <list v-bind:prenoms="prenomTable" ></list>
  </div>
</template>

<script>
import List from './list/List.vue';
export default {
  data() {
    return {
      txt: 'Votre Contenu IcI',
      prenomTable:['taoufik','ali','mohammed']
    };
  },
  components: {
    list: List,
  },
};
</script>

<style scoped></style>
