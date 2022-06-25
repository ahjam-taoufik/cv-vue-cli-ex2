<template>
    <div>
       <ul>
         <li v-for="(fruit ,index) in fruits" v-bind:key="index" >{{fruit}} </li>
       </ul>
       <p>paragraph depuis List</p>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                fruits:['orange','fraise','pomme']
            }
        }
        
    }
</script>

<style scoped src="./list.css" >
   li{
     list-style-type: none;
   }
   
</style>