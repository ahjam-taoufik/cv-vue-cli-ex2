<template>
  <div>
    <ul>
      <li v-for="(fruit, index) in fruits" v-bind:key="index">{{ fruit }}</li>
    </ul>
    <p>paragraph depuis List</p>

    <ul>
      <li v-for="(prenom, index) in prenoms" v-bind:key="index">
        {{ prenom }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fruits: ['orange', 'fraise', 'pomme'],
    };
  },
  props: ['prenoms'],
};
</script>

<style scoped src="./list.css"></style>
