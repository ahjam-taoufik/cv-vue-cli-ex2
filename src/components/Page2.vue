<template>
    <div>
       <h1>this is  page 2 </h1>
       <p>article : {{id}} </p>
    </div>
</template>

<script>
    export default {
        name:'Page2',
        data(){
            return{
                id:this.$route.params.id
            }
        }
        
    }
</script>

<style  scoped>

</style>