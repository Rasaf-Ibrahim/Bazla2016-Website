<template>
   
    <nav class="w-full p-2  text-dark_r
         bg-light-3_r">
    
        <div class="flex justify-between">

        <!-- Topbar: Site Title  -->
        <router-link :to="{name:'home'}"
                    class="heading-2_r font-cursive-1 italic ">
                     Bazla2016
        </router-link>
         

        
        


        <!-- Hamburger Menu -->
        <div @click="drawer" class="heading-4_r  cursor-pointer" >

        <svg  class="w-8 h-8 cursor-pointer" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"> <path d="M4 6h16M4 12h16M4 18h16"></path> </svg>

        </div>
     
    
        </div>


        <!-- Admin Panel -->
        
        <div class="flex justify-center">
          
          <router-link :to="{name:'adminPage'}"
                   v-if="loggedIn"
                   @click="sidebarOpen = false"
                    class="bg-dark-1_r text-light_r p-1 btn-transition-scale_r shadow-lg">

          <span>Admin Page</span>
        
          </router-link>

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
      class="font-bold  transform top-0 right-0 w-64 bg-light-3_r fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
      :class="sidebarOpen ? 'translate-y-0' : 'translate-x-full'">
   

      <router-link :to="{name:'home'}"
                   @click="sidebarOpen = false"
                   class="p-4 flex
                   bg-light-2_r 
                   hover-bg-dark-2_r hover:text-white">

          <span>Home</span>
        
      </router-link>


      <router-link :to="{name:'listDay'}"
                   @click="sidebarOpen = false"
                   class="p-4 flex
                   border-t-2 border-gray-500
                   bg-light-2_r 
                   hover-bg-dark-2_r hover:text-white">

          <span>Student List (Day)</span>
        
      </router-link>


      <router-link :to="{name:'allGroupDay'}"
                   @click="sidebarOpen = false"
                   class="p-4 flex
                   border-t-2 border-gray-500
                   bg-light-2_r 
                   hover-bg-dark-2_r hover:text-white">

          <span>Blood Group(Day)</span>
        
      </router-link>



      <!-- Admin Panel -->

      <div class="bg-light-1_r text-center mt-16 p-4 ">
      
      <div class="mb-4 font-bold heading-4_r">
          Admin Panel

      </div>
        

     
      
    

     

     
        <router-link :to="{name:'adminPage'}"
                   v-if="loggedIn"
                   @click="sidebarOpen = false"
                   class="p-4 flex
                   border-t-2 border-gray-500
                   bg-light-2_r 
                   hover-bg-dark-2_r hover:text-white">

          <span>Admin Page</span>
        
      </router-link>



      <router-link :to="{name:'addDay'}"
                   v-if="loggedIn"
                   @click="sidebarOpen = false"
                   class="p-4 flex
                  border-t-2 border-gray-500
                   bg-light-2_r 
                   hover-bg-dark-2_r hover:text-white">

          <span>Add a student (Day) </span>
        
      </router-link>

 

       <router-link :to="{name:'rollDay'}"
                   v-if="loggedIn"
                   @click="sidebarOpen = false"
                   class="p-4 flex
                   border-t-2 border-gray-500
                   bg-light-2_r 
                   hover-bg-dark-2_r hover:text-white">

          <span>Serial by Roll</span>
        
      </router-link>

    


       <!-- Login -->

       <router-link :to="{name:'login'}"
                    v-if="!loggedIn"
                   @click="sidebarOpen = false"
                   class="p-4 flex justify-center
                   border-t-2 border-gray-500
                   bg-dark-3_r text-light_r
                   hover-bg-dark-1_r ">

          <span>Login </span>
        
      </router-link>

      

       <!-- Logout -->
       <div v-if="loggedIn"
          @click="logout"
          class="p-4 flex justify-center
          border-t-2 border-gray-500
          bg-dark-3_r text-light_r
          hover-bg-dark-1_r ">

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