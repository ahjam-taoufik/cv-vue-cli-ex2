<template>
    <div>
        <ul>
            <li><router-link to="/" exact>Home</router-link></li>
            <li><router-link to="/p1">page1</router-link></li>
            <li><router-link to="/p2">page2</router-link></li>
        </ul>
        

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style  scoped>
 .router-link-active{
    color:rgb(221, 176, 27);
    background:rgb(248, 237, 87)
 }

</style>