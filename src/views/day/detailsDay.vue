<template>
    <div class="max-w-98% sm:max-w-90% md:max-w-75%  mx-auto
         mb-16">


    

        <!-- Name (Title)-->
        <div class="heading-2_r font-cursive-2
          text-center m-6 md:m-8">
            {{student.name}}
        </div>
        
        


         
        <!-- Info -->

        <div  class="bg-dark-2_r shadow
                      text-center 
                      heading-4_r">



            <!-- Phone number -->

            <div class="bg-light-3_r text-dark_r py-2">
                 Mobile Number
            </div>

             <div class="min-h-7 xl:min-h-8 " >
                  {{student.mobile}}
            </div>
            

     

         

            <!-- Social Media -->

            <div class="bg-light-3_r text-dark_r py-2">
                 Social Media
            </div>
 
            <div  class="min-h-7 xl:min-h-8
                  flex justify-evenly items-center">


                <a :href="facebook"> 

                    <svg class="h-7 w-7 p-1 bg-light-1_r "  viewBox="126.445 2.281 589 589"><circle cx="420.945" cy="296.781" r="294.5" fill="#3c5a9a"/><path d="M516.704 92.677h-65.239c-38.715 0-81.777 16.283-81.777 72.402.189 19.554 0 38.281 0 59.357H324.9v71.271h46.174v205.177h84.847V294.353h56.002l5.067-70.117h-62.531s.14-31.191 0-40.249c0-22.177 23.076-20.907 24.464-20.907 10.981 0 32.332.032 37.813 0V92.677h-.032z" fill="#fff"/></svg>
 
                </a>


                <a :href="instagram">

                    <svg class="h-7 w-7 p-1 bg-light-1_r" viewBox="0 0 16 16"><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="1.464" y1="14.536" x2="14.536" y2="1.464"><stop offset="0" stop-color="#FFC107"/><stop offset=".507" stop-color="#F44336"/><stop offset=".99" stop-color="#9C27B0"/></linearGradient><path d="M11 0H5a5 5 0 00-5 5v6a5 5 0 005 5h6a5 5 0 005-5V5a5 5 0 00-5-5zm3.5 11c0 1.93-1.57 3.5-3.5 3.5H5c-1.93 0-3.5-1.57-3.5-3.5V5c0-1.93 1.57-3.5 3.5-3.5h6c1.93 0 3.5 1.57 3.5 3.5v6z" fill="url(#a)"/><linearGradient id="b" gradientUnits="userSpaceOnUse" x1="5.172" y1="10.828" x2="10.828" y2="5.172"><stop offset="0" stop-color="#FFC107"/><stop offset=".507" stop-color="#F44336"/><stop offset=".99" stop-color="#9C27B0"/></linearGradient><path d="M8 4a4 4 0 100 8 4 4 0 000-8zm0 6.5A2.503 2.503 0 015.5 8c0-1.379 1.122-2.5 2.5-2.5s2.5 1.121 2.5 2.5c0 1.378-1.122 2.5-2.5 2.5z" fill="url(#b)"/><linearGradient id="c" gradientUnits="userSpaceOnUse" x1="11.923" y1="4.077" x2="12.677" y2="3.323"><stop offset="0" stop-color="#FFC107"/><stop offset=".507" stop-color="#F44336"/><stop offset=".99" stop-color="#9C27B0"/></linearGradient><circle cx="12.3" cy="3.7" r=".533" fill="url(#c)"/></svg>
                
                </a>


                <a :href="twitter"> 

                    <svg  class="h-7 w-7 p-1 bg-light-1_r" viewBox="0 0 16 16"><path d="M16 3.539a6.839 6.839 0 01-1.89.518 3.262 3.262 0 001.443-1.813 6.555 6.555 0 01-2.08.794 3.28 3.28 0 00-5.674 2.243c0 .26.022.51.076.748a9.284 9.284 0 01-6.761-3.431 3.285 3.285 0 001.008 4.384A3.24 3.24 0 01.64 6.578v.036a3.295 3.295 0 002.628 3.223 3.274 3.274 0 01-.86.108 2.9 2.9 0 01-.621-.056 3.311 3.311 0 003.065 2.285 6.59 6.59 0 01-4.067 1.399c-.269 0-.527-.012-.785-.045A9.234 9.234 0 005.032 15c6.036 0 9.336-5 9.336-9.334 0-.145-.005-.285-.012-.424A6.544 6.544 0 0016 3.539z" fill="#03A9F4"/></svg>

                </a>


            </div>


            
            

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



             <router-link :to="{name:'editDay', params:{id:id_firebase.id}}">

                <button class="btn_r btn-transition-scale_r btn-color_r">
                        Edit
                </button>
        
            </router-link>


            <router-link :to="{name:'deleteDay', params:{id:id_firebase.id}}">

                <button class="btn_r btn-transition-scale_r btn-color_r">
                        Delete
                </button>
        
            </router-link>


        </div>

        

    </div>

    

</template>


<script>

 import { database } from '../../firebaseConfig';
 

    export default {


       data() {
        return {
                student: {},
                id_firebase: {}
    
            }
        },

        created() {
            let db = database.collection('day').doc(this.$route.params.id);
            db.get().then((doc) => {
                this.id_firebase = doc;
                this.student = doc.data();
                
            }).catch((error) => {
                console.log(error)
            })
        },

        computed: {

            facebook() {
                return [this.student.facebook_link]
            },

            twitter() {
                return [this.student.twitter_link]
            },

            instagram() {
                return [this.student.instagram_link]
            }


         },

         




      }


       
</script>

<style scoped>

</style>