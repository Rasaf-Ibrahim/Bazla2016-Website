<template>
    <div class="max-w-98% sm:max-w-90% md:max-w-75%  mx-auto
         mb-16">


        <!-- Title -->
        <h1 class="heading-2_r font-cursive-2
          text-center m-6 md:m-8">
            Student Info
        </h1>


        <!-- <input  v-model="search" type="text" class="text-dark_r" placeholder="Type Name.."> -->
       

        <!-- Name and Details button -->
        <div v-for="student in students" :key="student.firebase_id"
             class="flex justify-between items-center 
             p-2
             border-t-2 border-l-2  border-color_r shadow-xl
             bg-dark-2_r hover-bg-dark-3_r transition_r">
             


            <span class="mx-6  
                  heading-4_r ">
                  {{student.name}}
            </span>



           <router-link :to="{ name:'detail', params: {id: student.firebase_id}}"   
                        class="btn_r btn-transition-scale_r btn-color_r">

                         Details

            </router-link>




            


        </div>

    </div>
</template>

<script> 
 import { database } from '../firebaseConfig';

    export default {
        name: 'info',
        data() {
            return {
                students: [],
                search: ''
            }
        },

        created() {
            database.collection('info').orderBy('name').onSnapshot((snapshotChange) => {
                this.students = [];
                snapshotChange.forEach((doc) => {
                    this.students.push({
                        firebase_id: doc.id,
                        id: doc.data().id,
                        name: doc.data().name,
                        current_address: doc.data().current_address,
                        permanent_address: doc.data().permanent_address,
                        university: doc.data().university,
                        university_department: doc.data().university_department,
                        job_institution: doc.data().job_institution,
                        job_title: doc.data().job_title,
                        phone_number: doc.data().phone_number,
                        facebook_link: doc.data().facebook_link,
                        instagram_link: doc.data().instagram_link,
                        twitter_link: doc.data().twitter_link,
                        blood_group: doc.data().blood_group,
                    })
                });
            })
        },

    //     computed: {
    //         filter() {
    //             return info.value.filter((student) => {
    //     return (
    //       student.name
    //         .toLowerCase()
    //         .indexOf(searchQuery.value.toLowerCase()) != -1
    //     );
    //   });
    //         }
    //     },

    };
</script>

<style scoped>

</style>