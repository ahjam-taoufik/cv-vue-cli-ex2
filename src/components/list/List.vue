<template>
  <div>
    <ul>
      <li v-for="(film, index) in films" v-bind:key="index">
        <div class="card">
          <div class="card-body">
            name : {{ film.name }}
            <br/>
            year : {{ film.year }}
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
     
    };
  },
  props: ['films'],
};
</script>

<style scoped src="./list.css"></style>
