<template>
  <div>
     <p v-on:click="isLiked= !isLiked"  :class="className" >{{numberlike}} like</p>
  </div>
</template>

<script>
  export default {
    data(){
      return{ 
        numberlike:0,
        class:"liked",
        isLiked:false 
      }
    },
    computed:{
      className:function(){
        return (this.isLiked)? this.class:''
      },
      addliked:function(){
        return this.numberlike
      }
    },
    watch:{
      isLiked:function(){
        if(this.isLiked){
          this.numberlike++
        }else{
           this.numberlike--
        }
      }
    }
    
  }
</script>

<style  scoped>

.liked{
  color:blue
}

</style>