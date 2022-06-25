<template>
  <div>
    <ul>
      <li v-for="(fruit, index) in fruits" v-bind:key="index">{{ fruit }}</li>
    </ul>
    <p>paragraph depuis List</p>

      <p> {{ person }}</p>   <!-- from props direct -->
    
 
     
  </div>
</template>

<script>
export default {
  data() {
    return {
      fruits: ['orange', 'fraise', 'pomme'],
    };
  },
  props:{
    person:{
        type:String,//Function, Object , Number 
        required:true
    }
  }
  
  
};
</script>

<style scoped src="./list.css"></style>
