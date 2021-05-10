<template>
   
<nav class="bg-transparent 
     border-b
     p-2 w-full ">


    <!-- Topbar: Site Title & Hamburger Menu -->

    <div class="flex justify-between">

 
        <router-link :to="{name:'home'}"
                    class="heading-2_r font-cursive-1 italic ">
                     Bazla2016
        </router-link>
         
    
        <div @click="drawer">
    
        <svg  class="w-8 h-8 cursor-pointer " fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"> <path d="M4 6h16M4 12h16M4 18h16"></path> </svg>

        </div>

    </div>


    <!-- Topbar : Admin Page -->
    
    <div class="flex justify-center">
      
      <router-link :to="{name:'adminPage'}"
               v-if="loggedIn"
               @click="sidebarOpen = false"
                class="bg-light-1_r text-dark_r p-1 btn-transition-scale_r shadow-lg">

      <span>Admin Page</span>
    
      </router-link>

    </div>

 





    

<!-- Vue Animation -->

<transition
  enter-class="opacity-0"
  enter-active-class="ease-out transition-medium"
  enter-to-class="opacity-100"
  leave-class="opacity-100"
  leave-active-class="ease-out transition-medium"
  leave-to-class="opacity-0"
>
  <div
    @keydown.esc="sidebarOpen = false"
    v-show="sidebarOpen"
    class="z-10 fixed inset-0 transition-opacity"
  >
    <div
      @click="sidebarOpen = false"
      class="absolute inset-0 bg-black opacity-50"
      tabindex="0"
    ></div>
  </div>
</transition>




<!-- Sidebar -->

<aside :class="sidebarOpen ? 'translate-y-0' : 'translate-x-full'"
       class="bg-dark-3_r text-light_r 
       font-bold  
       transform top-0 right-0 w-64 fixed h-full overflow-auto ease-in-out      transition-all duration-300 z-30">



  <!-- Sidebar: User Navigation -->

  <div class="mt-4">

  <router-link :to="{name:'home'}"
               @click="sidebarOpen = false"
               class="p-4 flex 
               hover-bg-light-2_r hover-text-dark_r">

      <svg  class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>

      <span>Home</span>
    
  </router-link>






  <router-link :to="{name:'listDay'}"
               @click="sidebarOpen = false"
               class="p-4 flex
               border-t-2 border-gray-300 
               hover-bg-light-2_r hover-text-dark_r">

      <svg  class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" /></svg>         

      <span>Student List</span>
      <span class="text-xs ml-1 self-center border-b-2 border-green-500">Day</span>
    
  </router-link>


  <router-link :to="{name:'listDay'}"
               @click="sidebarOpen = false"
               class="p-4 flex
               border-t-2 border-gray-300 
               hover-bg-light-2_r hover-text-dark_r">

      <svg  class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" /></svg>         

      <span>Student List</span>
      <span class="text-xs ml-1 self-center border-b-2 border-red-500">Morning</span>
    
  </router-link>

  </div>



  <!--  Admin Panel < Sidebar -->

  <div class="text-center mt-16 p-4">

    <!-- Title < Admin Panel < Sidebar -->
  
  <div class="font-bold heading-4_r
       mb-4 py-2
       border-t-4 border-b-4
       flex">

       <svg class="h-6 w-6 mr-2" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" /></svg>
       <span>Admin Panel</span> 

  </div>
    

    <!-- Navigation < Admin Panel < Sidebar -->


   <!-- Login -->

   <router-link :to="{name:'login'}"
                v-if="!loggedIn"
               @click="sidebarOpen = false"
               class="p-4 flex justify-center
               bg-light-3_r text-dark_r
               hover-bg-dark-1_r hover-text-light_r">

      <svg  class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
      <span>Login </span>
    
  </router-link>

  

   <!-- Logout -->
   <div v-if="loggedIn"
      @click="logout"
      class="p-4 flex justify-center
               bg-light-3_r text-dark_r
               hover-bg-dark-1_r hover-text-light_r ">

      <svg class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" /></svg>

      <span>Logout</span>
    
    </div>

</div>  <!-- End Admin Panel -->

</aside>


</nav>

</template>




<script>
import firebase from "firebase"

    export default {
     
        
    data() {
      return {
        sidebarOpen: false,
        loggedIn: false
      
      };
    },
     

     created () {
       firebase.auth().onAuthStateChanged(user=> {
         if(user){
           this.loggedIn = true;
         }  
         else{
           this.loggedIn=false;
         }
       })
     },
   

    methods: {
      drawer() {
        this.sidebarOpen = !this.sidebarOpen;
      },

      logout() {
        firebase.auth().signOut().then(()=>{
          this.$router.go({ name: 'home'})
          this.sidebarOpen=false
        })
      },
    },
    


    }
</script>

<style scoped>



</style>