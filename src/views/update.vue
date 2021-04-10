<template>

    <div class="max-w-90% sm:max-w-75% md:max-w-60% lg:max-w-50% xl:max-w-40% mx-auto">


        <!-- Title -->
        <h1 class="heading-1_r font-cursive-2
            text-green-800 
            text-center m-8 ">
            Edit
        </h1> 

 
        <!-- Form -->

        <form @submit.prevent="updateinfo" 
              class="mt-6 bg-white shadow-md py-8 px-8
              rounded-lg border-2 border-indigo-200">


                <!-- ID -->

                <input v-model="id"
                       class="bg-gray-100 
                        w-full py-2 px-4  m-2
                        rounded-lg 
                        focus:outline-none border-2 focus:border-indigo-200"

                        type="text"
                       
                        required />



                    <!-- Name -->
                    

                <input v-model="name"
                       class="bg-gray-100 
                        w-full py-2 px-4  m-2
                        rounded-lg 
                        focus:outline-none border-2 focus:border-indigo-200"

                        type="text"
                     
                        required />
                

                











                <button class="btn_r btn-transition-scale_r      
                        hover:bg-indigo-600 text-white bg-indigo-800
                         hover:text-white
                         w-full py-2 px-4 rounded-lg m-2"
                         type="submit">
                        Submit
                </button>


            </form>

        </div>


                 
</template>

<script>
import database from '../components/firebaseinit'
    export default {
        name: 'update',
        data() {
            return {

               id: null,
               name: null,
               current_address: null,
               permanent_address: null,
               university: null,
               university_department: null,
               job_institution: null,
               job_title: null,
               blood_group: null,
               phone_number: null,
               facebook_link: null,
               instagram_link: null,
               twitter_link: null

         }
        },

       beforeRouteEnter(to, from, next) {
         database.collection('info').where('id', '==', to.params.id).get().then(querySnapshot => {
             querySnapshot.forEach(doc=> {
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
                database.collection('info').where('id', '==', this.$route.params.id).get().then(querySnapshot => {
                    querySnapshot.forEach(doc => {
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
             },


            updateinfo() {
            database.collection('info').where('id', '==', this.$route.params.id).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
            doc.ref.update({
                    id: this.id,
                    name: this.name,
                    current_address: this.current_address,
                    permanent_address: this.permanent_address, 
                    university: this.university,
                    university_department: this.university_department,
                    job_institution: this.job_institution, 
                    job_title: this.job_title,
                    Phone_number: this.phone_number,
                    facebook_link: this.facebook_link, 
                    instagram_link: this.instagram_link, 
                    twitter_link: this.twitter_link, 
                    blood_group: this.blood_group  
            })
            .then(() => {
              this.$router.push({ name: 'detail', params: { id: this.id }})
            });
          })
        })
      }
    }    
}
</script>

<style scoped>

</style>