<template>
  <div>
    {{ txt }}
    <list v-bind:person="person" ></list>
  </div>
</template>

<script>
import List from './list/List.vue';
export default {
  data() {
    return {
      txt: 'Votre Contenu IcI',
      person:"taoufik",
      
    };
  },
  components: {
    list: List,
  },
};
</script>

<style scoped></style>
