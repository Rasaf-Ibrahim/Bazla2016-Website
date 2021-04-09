<template>
    <div class="max-w-98% sm:max-w-90% md:max-w-75%  mx-auto">


        <!-- Name (Title)-->
        <div class="heading-1_r font-cursive-2
            text-green-800 
            text-center m-8 ">
            {{name}}
        </div>
        

         
           

        <div  class="bg-gray-100 shadow
                      text-center 
                      heading-4_r">



                <!-- Address -->

                <div class="heading-3_r text-white bg-green-600">
                     Address
                </div>

                <div class="bg-gray-300 ">
                        Current Address
                </div>

                <div class="min-h-7 xl:min-h-8" >
                        {{current_address}}
                </div>
            
                <!-- Using min-height so that it creates a space even when data is missing. Property of min-height is set according to heading-4's line-height property. -->

                <div class="bg-gray-300 ">
                        Permanent Address
                </div>

                <div class="min-h-7 xl:min-h-8" >
                        {{permanent_address}}
                </div>


        </div>


        <!-- Back Button -->
        <router-link to="/info">

            <button class="mt-8
                    btn_r btn-transition-scale_r
                  bg-indigo-800 hover:bg-indigo-600 text-white ">
                   Back
            </button>
        
        </router-link>

    </div>

    

</template>

<script>

import database from '../components/firebaseinit'
    export default {
        name: 'detail',
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

       beforeRouteEnter(to, from, next) {
         database.collection('info').where('id', '==', to.params.id).get().then(Snapshot => {
             Snapshot.forEach(doc=> {
                 next( vm => {

                    vm.id = doc.data().id,
                    vm.name = doc.data().name,
                    vm.current_address = doc.data().current_address,
                    vm.permanent_address = doc.data().permanent_address,
                    vm.university = doc.data().university,
                    vm.university_department = doc.data.university_department,
                    vm.job_institution = doc.data().job_institution,
                    vm.job_title = doc.data().job_title,
                    vm.phone_number = doc.data().phone_number,
                    vm.facebook_link = doc.data().facebook_link,
                    vm.instagram_link = doc.data().instagram_link,
                    vm.twitter_link = doc.data().twitter_link,
                    vm.blood_group = doc.data().blood_group

                 })

             })
         })

  },
        computed: {
             '$route': 'fetchdata'
        },

        methods: {
            fetchdata() {
                database.collection('info').where('id', '==', this.$route.params.id).get().then(Snapshot => {
                    Snapshot.forEach(doc => {
                        this.id = doc.data().id,
                        this.name = doc.data().name,
                        this.current_address = doc.data().current_address,
                        this.permanent_address = doc.data().permanent_address,
                        this.university = doc.data().university,
                        this.university_department = doc.data.university_department,
                        this.job_institution = doc.data().job_institution,
                        this.job_title = doc.data().job_title,
                        this.phone_number = doc.data().phone_number,
                        this.facebook_link = doc.data().facebook_link,
                        this.instagram_link = doc.data().instagram_link,
                        this.twitter_link = doc.data().twitter_link,
                        this.blood_group = doc.data().blood_group
                    })
                })  
             }
        },
    
     


    }
</script>

<style scoped>

</style>