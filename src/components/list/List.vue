<template>
  <div>
    <ul>
      <li v-for="(film, index) in films" v-bind:key="index">
        <div class="card">
          <div class="card-body">
            name : {{ film.name }}
            <br />
            year : {{ film.year }}
          </div>
        </div>
      </li>
    </ul>
    <p>{{ txt }}</p>
      <button v-on:click="deleteFilm" class="btn btn-primary">Delete One Film</button>
     <button v-on:click="deleteTxt" class="btn btn-primary">Delete txt</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    deleteFilm: function () {
     // eslint-disable-next-line vue/no-mutating-props
     this.films.pop()
    },
    deleteTxt: function () {
      // eslint-disable-next-line vue/no-mutating-props
      this.txt = '';
    },
  },
  props: ['films', 'txt'],
};
</script>

<style scoped src="./list.css"></style>
