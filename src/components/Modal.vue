<template>
  <div class="bloc-modale" v-if="reveal" >
      <div class="overlay"></div>
      <div class="modale card">
          <div class="btn-modale btn btn-danger"  v-on:click="toggle">X</div>
      <h3>content Modale content Modale</h3>
    </div>
  </div>
</template>

<script>
export default {
    props:['reveal','toggle'],
 
};
</script>

<style>
.bloc-modale {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.overlay {
  background: rgba(31, 30, 30, 0.815);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
}
.modale{
    padding:60px;
    /* position: fixed; */
    bottom:15%;
}

.btn-modale {
    right: 5px;
    top: 5px;
    position: absolute;
}
</style>
