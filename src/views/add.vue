<template>

    <div class="max-w-90% sm:max-w-md lg:max-w-lg mx-auto">


        <!-- Title -->
        <h1 class="heading-2_r font-cursive-2
          text-center m-6 md:m-8">
            Add a New Student
        </h1> 

 
        <!-- Form -->

        <form @submit.prevent="save" 
              class="mt-6 mb-8 bg-dark-2_r shadow-md py-8 px-8
              rounded-lg border-2 border-color_r">
 

            
            
             <!-- ID -->

            <input v-model="id"
                    class="bg-dark-3_r
                    w-full py-2 px-4  m-2
                    rounded-lg 
                    focus:outline-none border-2 
                    focus-border-color_r"

                    type="text"
                    placeholder="ID"
                    required />

           <!-- Name -->

            <input v-model="name"
                    class="bg-dark-3_r
                    w-full py-2 px-4  m-2
                    rounded-lg 
                    focus:outline-none border-2 
                    focus-border-color_r"

                    type="text"
                    placeholder="Name"
                    required />

           <!-- Phone Number -->

            <input v-model="phone_number"
                    class="bg-dark-3_r
                    w-full py-2 px-4  m-2
                    rounded-lg 
                    focus:outline-none border-2 focus-border-color_r"

                    type="text" 
                    placeholder="Phone Number"/>

           <!-- Facebook Link -->

            <input v-model="facebook_link"
                    class="bg-dark-3_r
                    w-full py-2 px-4  m-2
                    rounded-lg 
                    focus:outline-none border-2 focus-border-color_r"

                    type="text" 
                    placeholder="Facebook Link"/>


           <!-- Instagram Link -->

            <input v-model="instagram_link"
                    class="bg-dark-3_r
                    w-full py-2 px-4  m-2
                    rounded-lg 
                    focus:outline-none border-2 focus-border-color_r"

                    type="text" 
                    placeholder="Instagram Link"/>


           <!-- Twitter Link -->

            <input v-model="twitter_link"
                    class="bg-dark-3_r
                    w-full py-2 px-4  m-2
                    rounded-lg 
                    focus:outline-none border-2 focus-border-color_r"

                    type="text" 
                    placeholder="Twitter Link"/>


           <!-- Current Address -->

            <input v-model="current_address"
                    class="bg-dark-3_r
                    w-full py-2 px-4  m-2
                    rounded-lg 
                    focus:outline-none border-2 focus-border-color_r"

                    type="text" 
                    placeholder="Current Address"/>

           <!-- Permanent Address -->

            <input v-model="permanent_address"
                    class="bg-dark-3_r
                    w-full py-2 px-4  m-2
                    rounded-lg 
                    focus:outline-none border-2 focus-border-color_r"

                    type="text" 
                    placeholder="Permanent Address"/>

            
            <!-- Educational Institution -->

            <input v-model="university"
                    class="bg-dark-3_r
                    w-full py-2 px-4  m-2
                    rounded-lg 
                    focus:outline-none border-2 focus-border-color_r"

                    type="text" 
                    placeholder="Educational Institution"/>


            <!-- Major Subject -->

            <input v-model="university_department"
                    class="bg-dark-3_r
                    w-full py-2 px-4  m-2
                    rounded-lg 
                    focus:outline-none border-2 focus-border-color_r"

                    type="text" 
                    placeholder="Major Subject"/>


             <!-- Blood Group -->

            <input v-model="blood_group"
                    class="bg-dark-3_r
                    w-full py-2 px-4  m-2
                    rounded-lg 
                    focus:outline-none border-2 focus-border-color_r"

                    type="text" 
                    placeholder="Blood Group"/>

                











                <button class="btn_r btn-transition-scale_r btn-color_r
                         w-full py-2 px-4 rounded-lg m-2"
                         type="submit">
                        Submit
                </button>


            </form>

        </div>


                 
</template>

<script>
 import { database } from '../firebaseConfig';
    export default {
        name: 'add',
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

        methods: {
            save() {
                database.collection('info').add({
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
                .then(docRef => this.$router.push('/info'))
                .catch(error => console.log(err))
            }
        },


    }
</script>

<style scoped>

</style>