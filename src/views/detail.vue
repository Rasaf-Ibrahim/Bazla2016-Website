<template>
    <div class="max-w-98% sm:max-w-90% md:max-w-75%  mx-auto
         mb-16">


        <!-- Name (Title)-->
        <div class="heading-2_r font-cursive-2
          text-center m-6 md:m-8">
            {{student.name}}
        </div>
        
        


         
        <!-- Info -->

        <div  class="bg-dark-3_r shadow
                      text-center 
                      heading-4_r">
            

<!-- Current Address -->

            <div class="bg-light-3_r text-dark_r py-2">
                Current Address
            </div>

            

            <div class="min-h-7 xl:min-h-8" >
                 {{student.current_address}}
            </div>
            
             <!-- Using min-height so that it creates a space even when data is missing. Property of min-height is set according to heading-4's line-height property. -->
             
             <!-- Permanent Address -->

            <div class="bg-light-3_r text-dark_r py-2">
                 Permanent Address
            </div>

            <div class="min-h-7 xl:min-h-8" >
                {{student.permanent_address}}
            </div>




             <!-- Phone number -->

            <div class="bg-light-3_r text-dark_r py-2">
                 Phone Number
            </div>

             <div class="min-h-7 xl:min-h-8 " >
                  {{student.phone_number}}
            </div>
            
            <!-- Social Media -->

            <div class="bg-light-3_r text-dark_r py-2">
                 Social Media
            </div>

            <div class="min-h-7 xl:min-h-8" >
                    
            </div>


            


           
           <!-- Educational Institution -->

            <div class="bg-light-3_r text-dark_r py-2">
                 Educational Institution
            </div>

            <div class="min-h-7 xl:min-h-8" >
                {{student.university}}
            </div>


            <!-- Major Subject -->

            <div class="bg-light-3_r text-dark_r py-2">
                Major Subject
            </div>

            <div class="min-h-7 xl:min-h-8" >
                {{student.university_department}}
            </div>



            <!-- Work Place -->

            <div class="bg-light-3_r text-dark_r py-2">
                 Work Place
            </div>

            <div class="min-h-7 xl:min-h-8" >
                {{student.job_institution}}
            </div>

           <!-- Job Title-->

            <div class="bg-light-3_r text-dark_r py-2">
                 Job Title
            </div>

            <div class="min-h-7 xl:min-h-8" >
                {{student.job_title}}
            </div>



          
           <!-- Blood Group -->

            <div class="bg-light-3_r text-dark_r py-2">
                Blood Group
            </div>

            <div class="min-h-7 xl:min-h-8" >
                {{student.blood_group}}
            </div>
                     


        </div>




        <!-- back & edit button -->

        <div class=" mt-8  flex justify-between">

            <router-link to="/info">

                <button class="btn_r btn-transition-scale_r btn-color_r">
                        Back
                </button>
        
            </router-link>


             <router-link :to="{name:'update', params:{id:id_firebase.id}}">

                <button class="btn_r btn-transition-scale_r btn-color_r">
                        Edit
                </button>
        
            </router-link>


        </div>

    </div>

    

</template>

<script>

 import { database } from '../firebaseConfig';
 

    export default {
        name: 'detail',

       data() {
        return {
                student: {},
                id_firebase: {}
    
            }
        },

        created() {
            let db = database.collection('info').doc(this.$route.params.id);
            db.get().then((doc) => {
                this.id_firebase = doc;
                this.student = doc.data();
                
            }).catch((error) => {
                console.log(error)
            })
        },


    
         

      }


       
</script>

<style scoped>

</style>