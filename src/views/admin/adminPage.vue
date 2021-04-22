<template >


  <div class="mb-16">

      <!-- Title -->
        <h1 class="heading-2_r font-cursive-2
          text-center m-6 md:m-8">
            Admin Page
        </h1> 




    <div class="mt-8  md:mt-16 
         navigation-card-grandparent-bg_r
         font-cursive-2 ">


         <router-link :to="('/info')" 
                       class="navigation-card-parent-bg_r
                        border-color_r 
                        bg-light-3_r hover:bg-transparent
                        heading-3_r text-dark_r hover-text-light_r
                        btn-transition-scale_r">

                         
            <svg  class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" /></svg>
        
            <div>Info</div>
            
        </router-link>


        <router-link   :to="('/add')" 
                       
                       class="navigation-card-parent-bg_r
                        border-color_r 
                        bg-light-3_r hover:bg-transparent
                        heading-3_r text-dark_r hover-text-light_r
                        btn-transition-scale_r">

             <svg  class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            <div>Add a Student</div>
            
        </router-link>
    
       
       <router-link   :to="('/roll')" 
                       
                      class="navigation-card-parent-bg_r
                       border-color_r 
                       bg-light-3_r hover:bg-transparent
                       heading-3_r text-dark_r hover-text-light_r
                       btn-transition-scale_r">

            <svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>

            <div>Serial By Roll</div>
            
        </router-link>
    


        
     
  
    </div>


    <div class="mt-16 flex justify-center">

       <button @click="countStudents"
                class="bg-light-1_r text-dark_r p-1 btn-transition-scale_r shadow-lg">

            Click me to know total entered students : {{totalStudents}}
        </button>

        
    </div>

   </div>





  
</template>



<script>
import {database} from '../../firebaseConfig'

    export default {

        data() {
            return {
                totalStudents: ''
            }
        },
        
    computed: {
    
    countStudents(){
      database.collection("info").get().then((querySnapshot) => {     
          this.totalStudents = querySnapshot.size;

        //    alert(querySnapshot.size);

         });
    }
  },
    }
</script>

<style lang="scss" scoped>

</style>

