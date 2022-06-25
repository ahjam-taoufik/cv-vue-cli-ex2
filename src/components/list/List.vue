<template>
  <div>
    <ul>
      <li v-for="(fruit, index) in fruits" v-bind:key="index">{{ fruit }}</li>
    </ul>
    <p>paragraph depuis List</p>

      <p> {{ person }}</p>   <!-- from props direct -->
      <p> {{ reversePerson().person}}</p>  <!-- from methods -->
      <p> {{ reversePerson().revers}}</p>  <!-- from methods -->
 
     
  </div>
</template>

<script>
export default {
  data() {
    return {
      fruits: ['orange', 'fraise', 'pomme'],
    };
  },
  props: ['person'],
  methods: {
    reversePerson:function(){
        return {
            person:this.person,
            revers:this.person.split('').reverse().join('')
        }
    }
  }
};
</script>

<style scoped src="./list.css"></style>
