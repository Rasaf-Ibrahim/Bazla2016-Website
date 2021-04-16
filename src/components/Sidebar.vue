<template>
   
    <nav class="w-full p-2  text-dark_r
         bg-light-3_r">
    
        <div class="flex justify-between">

        <!-- Topbar: Site Title  -->
        <router-link :to="('/')"
                    class="heading-2_r font-cursive-1 italic ">
                     RB16Day
        </router-link>

        


        <!-- Hamburger Menu -->
        <div @click="drawer" class="heading-4_r  cursor-pointer" >

        <svg  class="w-8 h-8 cursor-pointer" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"> <path d="M4 6h16M4 12h16M4 18h16"></path> </svg>

        </div>
     
    
        </div>
   

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

    <aside
      class="font-bold  transform top-0 right-0 w-64 bg-light-1_r fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
      :class="sidebarOpen ? 'translate-y-0' : 'translate-x-full'">
   

      <router-link :to="('/')"
                   @click="sidebarOpen = false"
                   class="p-4 flex
                   bg-light-2_r 
                   hover-bg-dark-2_r hover:text-white">

          <span>Home</span>
        
      </router-link>


      <router-link :to="('/info')"
                   @click="sidebarOpen = false"
                   class="p-4 flex
                   border-t-2 border-gray-500
                   bg-light-2_r 
                   hover-bg-dark-2_r hover:text-white">

          <span>Info</span>
        
      </router-link>





      <div class="bg-red-800 text-center py-2 mt-16 text-white">
        Admin Panel
      
      </div>

      <router-link :to="('/add')"
                   @click="sidebarOpen = false"
                   class="p-4 flex
                  border-t-2 border-gray-500
                   bg-light-2_r 
                   hover-bg-dark-2_r hover:text-white">

          <span>Add a student </span>
        
      </router-link>


       <router-link :to="('/login')"
                   @click="sidebarOpen = false"
                   class="p-4 flex
                   border-t-2 border-gray-500
                   bg-light-2_r 
                   hover-bg-dark-2_r hover:text-white">

          <span>Login </span>
        
      </router-link>

      <div @click="logout"
          class="p-4 flex
          border-t-2 border-gray-500
          bg-light-2_r 
          hover-bg-dark-2_r hover:text-white">

          <span>Logout</span>
        
        </div>


       
        

      
    

    




      
  
    </aside>
  </nav>









</template>




<script>
import firebase from "firebase"

    export default {
        name: 'Sidebar',
        
         data() {
      return {
        sidebarOpen: false,
        isloggedIn:false,
        admin: false,
      


  
      };
    },
    methods: {
      drawer() {
        this.sidebarOpen = !this.sidebarOpen;
      },

      logout() {
        firebase.auth().signOut().then(()=>{
          this.$router.push('/')
          this.sidebarOpen=false
        })
      },
    },
    


    }
</script>

<style scoped>



</style>