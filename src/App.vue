<template>

  <Sidebar/>
  <!-- <home/> -->
  <router-view/>


</template>



<script>
import home from './views/home'
import Sidebar from './components/Sidebar'



  export default {
    name:'App',
    components: {home, Sidebar}

    
  }

        Sidebar</script>

