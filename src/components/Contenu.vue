<template>
  <div>
    {{ txt }}
    <list></list>
  </div>
</template>

<script>
import List from './list/List.vue';
export default {
  data() {
    return {
      txt: 'Votre Contenu IcI',
    };
  },
  components: {
    list: List,
  },
};
</script>

<style scoped>
  

</style>
