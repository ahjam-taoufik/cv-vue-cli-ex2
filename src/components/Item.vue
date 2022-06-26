
<template>
  <div>
      <ul>
        <li v-for="(item,index) in list" v-bind:key="index" class="card mb-2 box" >
        {{item}}
         <div class="but btn btn-danger" v-on:click="deleteItem(index)">X</div>
        </li>
     </ul>
  </div>
</template>

<script>
export default {
   props:['list','deleteItem']
};
</script>

<style scoped>
 .box{
  width: 100%;
  height:100px;
  padding:20px ;
 }
  .but{
    top:5px;
    right:5px;
    position:absolute
  }
 
</style>
