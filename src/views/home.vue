<template>

    <div class="mt-8 md:mt-16
         grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 
         text-center  ">


         <router-link :to="('/info')" 
                       class="border-2 
                       w-64 p-8 justify-self-center
                       bg-dark-2_r hover-bg-light-3_r hover-text-dark_r
                       btn-transition-scale_r">

                       Info            

        </router-link>


        <router-link :to="('/add')" 
                        class="border-2 
                       w-64 p-8 justify-self-center
                       bg-dark-2_r hover-bg-light-3_r hover-text-dark_r
                       btn-transition-scale_r">

                       Add            

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