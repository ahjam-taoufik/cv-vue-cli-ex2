<template>
  <div>
    <p>{{titre}} </p>
  </div>
</template>

<script>
   import {bus} from '../../main'
export default {
  data() {
    return {
      titre: "le titre de l'application",
    };
  },
  created() {
     bus.$on('emitchangementTitre',(data)=>{
          this.titre=data
     })
     console.log('ok');

  }
};
</script>

<style scoped>
p {
  background: #333;
  color: antiquewhite;
  height: 50px;
  font-size: 30px;
  text-align: center;
}
</style>
