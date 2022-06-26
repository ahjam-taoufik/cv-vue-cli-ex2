<template>
  <div class="container mt-5">
    <form>
      <div class="form-group">
        <label for="name">Name of framework</label>
        <input v-model="name"  type="text" class="form-control" />
        <button v-on:click.prevent="submit" class="btn btn-primary mt-3">
          Add framwork
        </button>
      </div>
    </form>
      <item v-bind:list="list" v-bind:deleteItem="deleteItem"></item>
  </div>
</template>

<script>
  import Item from './Item.vue'
export default {
  data() {
    return {
      name: '',
      list:[]
    };
  },
  methods: {
    submit: function () {
        if(this.name=='')return null;
      this.list.push(this.name);
      this.name=""
    },
    deleteItem:function (index) {
        this.list.splice(index,1)
    }
  },
  components:{
    'item':Item

  }
};
</script>

<style scoped>
h1 {
  margin-top: 100px;
}
</style>
