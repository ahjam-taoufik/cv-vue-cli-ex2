<template>
  <div>
  
     <button v-on:click="changementTitre" class="btn btn-primary">changement titre depuis </button>
  </div>
</template>

<script>
 import {bus} from '../../main'
export default {
  data() {
    return {};
  },
  methods: {
    changementTitre:function(){
        bus.$emit('emitchangementTitre','nouvelle titre');
    }
  },
  props: [],
};
</script>

<style scoped src="./list.css"></style>
