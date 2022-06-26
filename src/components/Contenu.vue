<template>
  <div class="container mt-5">
    <h1>page de Contenu</h1>
    <p>{{textContenu}}</p>
    <list v-on:emitchangementtxt="changetxt($event)" ></list>
    <modale  v-bind:reveal="reveal" v-bind:toggle="toggle"></modale>
    <button v-on:click="toggle">show modal</button>
    
  </div>
</template>

<script>
import List from './list/List.vue';
import Modale from './Modal.vue'
export default {
  data() {
    return {
     
      textContenu:'ce ci est un contenu dans le pere component',
      reveal:false
    
    };
  },
  methods:{
     changetxt:function(val){
        this.textContenu=val
     },
     toggle:function(){
        this.reveal= !this.reveal
     }
  },
  components: {
    list: List,
    modale:Modale
  },
};
</script>

<style scoped>
  h1{
    margin-top: 100px;
  }


</style>
