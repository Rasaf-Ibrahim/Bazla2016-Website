<template>

    <div class="max-w-90% sm:max-w-md lg:max-w-lg mx-auto">


        <!-- Title -->
        <h1 class="heading-2_r font-cursive-2
          text-center m-6 md:m-8">
            Edit
        </h1> 

 
        <!-- Form -->

        <form @submit.prevent="updateform" 
              class="mt-6 mb-8 bg-dark-2_r shadow-md py-8 px-8
              rounded-lg border-2 border-color_r">


            <!-- ID -->

            <input v-model="student.id"
                    class="bg-dark-3_r 
                    w-full py-2 px-4  m-2
                    rounded-lg 
                    focus:outline-none border-2 focus-border-color_r"

                    type="text"
                    placeholder="ID"
                    required />

           <!-- Name -->

            <input v-model="student.name"
                    class="bg-dark-3_r
                    w-full py-2 px-4  m-2
                    rounded-lg 
                    focus:outline-none border-2 focus-border-color_r"

                    type="text"
                    placeholder="Name"
                    required />

           <!-- Phone Number -->

            <input v-model="student.phone_number"
                    class="bg-dark-3_r
                    w-full py-2 px-4  m-2
                    rounded-lg 
                    focus:outline-none border-2 focus-border-color_r"

                    type="text" 
                    placeholder="Phone Number"/>

           <!-- Facebook Link -->

            <input v-model="student.facebook_link"
                    class="bg-dark-3_r
                    w-full py-2 px-4  m-2
                    rounded-lg 
                    focus:outline-none border-2 focus-border-color_r"

                    type="text" 
                    placeholder="Facebook Link"/>


           <!-- Instagram Link -->

            <input v-model="student.instagram_link"
                    class="bg-dark-3_r
                    w-full py-2 px-4  m-2
                    rounded-lg 
                    focus:outline-none border-2 focus-border-color_r"

                    type="text" 
                    placeholder="Instagram Link"/>


           <!-- Twitter Link -->

            <input v-model="student.twitter_link"
                    class="bg-dark-3_r
                    w-full py-2 px-4  m-2
                    rounded-lg 
                    focus:outline-none border-2 focus-border-color_r"

                    type="text" 
                    placeholder="Twitter Link"/>


           <!-- Current Address -->

            <input v-model="student.current_address"
                    class="bg-dark-3_r
                    w-full py-2 px-4  m-2
                    rounded-lg 
                    focus:outline-none border-2 focus-border-color_r"

                    type="text" 
                    placeholder="Current Address"/>

           <!-- Permanent Address -->

            <input v-model="student.permanent_address"
                    class="bg-dark-3_r
                    w-full py-2 px-4  m-2
                    rounded-lg 
                    focus:outline-none border-2 focus-border-color_r"

                    type="text" 
                    placeholder="Permanent Address"/>

            
            <!-- Educational Institution -->

            <input v-model="student.university"
                    class="bg-dark-3_r
                    w-full py-2 px-4  m-2
                    rounded-lg 
                    focus:outline-none border-2 focus-border-color_r"

                    type="text" 
                    placeholder="Educational Institution"/>


            <!-- Major Subject -->

            <input v-model="student.university_department"
                    class="bg-dark-3_r
                    w-full py-2 px-4  m-2
                    rounded-lg 
                    focus:outline-none border-2 focus-border-color_r"

                    type="text" 
                    placeholder="Major Subject"/>


             <!-- Blood Group -->

            <input v-model="student.blood_group"
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

           methods: {
            updateform(event) {
                event.preventDefault()
                database.collection('info').doc(this.$route.params.id)
                .update(this.student).then(() => {
                    console.log("User successfully updated!");
                    this.$router.push({ name: 'detail', params: { id: this.id_firebase.id }})
                }).catch((error) => {
                    console.log(error);
                });
            }
        }

      }




       
</script>

<style scoped>

</style>