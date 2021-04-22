<template>

    <!-- Title -->
        <h1 class="heading-2_r font-cursive-2
          text-center m-6 md:m-8">
            Blood Group (Day)
        </h1> 


    <div class="mt-8 md:mt-16 mb-16
         navigation-card-grandparent-sm_r
         font-cursive-2 ">

        <!-- A -->
         <router-link :to="('/day/blood-group/aPositive')" 
                       class="navigation-card-parent-sm_r
                       heading-3_r
                       bg-green-200 text-dark_r
                       hover:bg-green-300
                        border-color_r
                        btn-transition-scale_r">

            <div >
                A+
            </div>
            
        </router-link>


        <router-link :to="('/day/blood-group/aNegative')" 
                       class="navigation-card-parent-sm_r
                       heading-3_r
                       bg-red-200 text-dark_r
                       hover:bg-red-300
                        border-color_r
                        btn-transition-scale_r">

            <div >
                A-
            </div>
            
        </router-link> 


        <!-- AB -->

         <router-link :to="('/day/blood-group/abPositive')" 
                       class="navigation-card-parent-sm_r
                       heading-3_r
                       bg-green-200 text-dark_r
                       hover:bg-green-300
                        border-color_r
                        btn-transition-scale_r">

            <div >
                AB+
            </div>
            
        </router-link>


        <router-link :to="('/day/blood-group/abNegative')" 
                       class="navigation-card-parent-sm_r
                       heading-3_r
                       bg-red-200 text-dark_r
                       hover:bg-red-300
                        border-color_r
                        btn-transition-scale_r">

            <div >
                AB-
            </div>
            
        </router-link>  


         <!-- B --->

         <router-link :to="('/day/blood-group/bPositive')" 
                       class="navigation-card-parent-sm_r
                       heading-3_r
                       bg-green-200 text-dark_r
                       hover:bg-green-300
                        border-color_r
                        btn-transition-scale_r">

            <div >
                B+
            </div>
            
        </router-link>


        <router-link :to="('/day/blood-group/bNegative')" 
                       class="navigation-card-parent-sm_r
                       heading-3_r
                       bg-red-200 text-dark_r
                       hover:bg-red-300
                        border-color_r
                        btn-transition-scale_r">

            <div >
                B-
            </div>
            
        </router-link>   

        
         <!--  -->
         <router-link :to="('/day/blood-group/oPositive')" 
                       class="navigation-card-parent-sm_r
                       heading-3_r
                       bg-green-200 text-dark_r
                       hover:bg-green-300
                        border-color_r
                        btn-transition-scale_r">

            <div >
                O+
            </div>
            
        </router-link>


       
        <router-link :to="('/day/blood-group/oNegative')" 
                       class="navigation-card-parent-sm_r
                       heading-3_r
                       bg-red-200 text-dark_r
                       hover:bg-red-300
                        border-color_r
                        btn-transition-scale_r">

            <div >
                O-
            </div>
            
        </router-link>       


  
    </div>


  
</template>

