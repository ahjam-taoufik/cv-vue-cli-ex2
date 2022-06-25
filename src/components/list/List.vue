<template>
  <div>
  
  
     <button v-on:click="changementtxt" class="btn btn-primary">changement txt depuis enfant</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    changementtxt:function(){
        this.$emit('emitchangementtxt','nouvelle txt');
    }
  },
  props: [],
};
</script>

<style scoped src="./list.css"></style>
