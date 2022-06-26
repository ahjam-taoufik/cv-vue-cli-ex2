<template>
    <div>
       <h1>this is  page 1</h1>
      <button v-on:click="retour" class="btn btn-warning">Retour au home page</button> </button>

    </div>
</template>

<script>
    export default {
           name:'Page1',
    methods:{
        retour:function(){
            this.$router.push('/')
        }
    }
        
    }
</script>

<style  scoped>

</style>