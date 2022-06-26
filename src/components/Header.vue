<template>
    <div>
        <ul class="nav">
            <li class="btn btn-primary btn-custom"><router-link to="/" exact>Home</router-link></li>
            <li class="btn btn-primary btn-custom"><router-link to="/p1">page1</router-link></li>
        </ul>
        

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style  scoped>
  .btn-custom {
    margin: 20px;
    color:aliceblue
  }
  .btn-custom a{
    margin: 20px;
    color:aliceblue
  }

</style>