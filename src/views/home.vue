<template>

    <div class="mt-8 md:mt-16
         grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 
         text-center 
         font-cursive-2 ">


         <router-link :to="('/info')" 
                       class="border-2 border-color_r rounded-xl
                       w-56  p-8 justify-self-center
                       bg-light-3_r hover:bg-transparent 
                       heading-3_r text-dark_r hover-text-light_r
                       btn-transition-scale_r
                       flex flex-col items-center">

                         
            <svg  class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" /></svg>
        
            <div>Info</div>
            
        </router-link>


        <router-link :to="('/add')" 
                       class="border-2 border-color_r rounded-xl
                       w-56  p-8 justify-self-center
                       bg-light-3_r hover:bg-transparent 
                       heading-3_r text-dark_r hover-text-light_r
                       btn-transition-scale_r
                       flex flex-col items-center">

             <svg  class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            <div>Add a Student</div>
            
        </router-link>
    

        


       
  
    </div>






  
</template>

<script>
  
  export default {
      name: 'home',
      
      data() {
        return {

          id: 'null',
          name: 'null',
          current_address: 'null',
          permanent_address: 'null',
          university: 'null',
          university_department: 'null',
          job_institution: 'null',
          job_title: 'null',
          blood_group: 'null',
          phone_number: 'null',
          facebook_link: 'null',
          instagram_link: 'null',
          twitter_link: 'null'

        }
      },


        
    }



</script>

<style scoped>

</style>