<template>
    <div class="max-w-98% sm:max-w-90% md:max-w-75%  mx-auto
         mb-16">


        <!-- Title -->
        <h1 class="heading-2_r font-cursive-2
          text-center m-6 md:m-8">
            AB+
        </h1>

  
        <!-- Search (Filter by name) -->

        <div class="flex justify-center sm:inline-block">
      
            <div class="relative mb-2">

                <span class="absolute inset-y-0 left-0 flex items-center pl-2">
        
                    <svg class="w-6 h-6 text-black" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" ><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        
                </span>

                <input v-model="search"  
                       class="p-2 pl-10  
                       text-dark_r bg-light-2_r 
                       rounded-md 
                       focus:outline-none border-2  focus-border-color_r" 
                       type="text" 
                       placeholder="Type Name..">
             </div>
   
        </div>    
 











        <!-- Name and Details button -->
        <div v-for="student in filteredStudents" :key="student.firebase_id"
             class="flex justify-between items-center 
             p-2
             border-t-2 border-l-2 border-r-2  border-color_r shadow-xl
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
 import { database } from '../../../firebaseConfig';

    export default {
   
        data() {
            return {
                students: [],
                search: '',
               
            }
        },

        created() {
            database.collection('info').where('blood_group', '==', 'AB+').onSnapshot((snapshotChange) => {
                this.students = [];
                snapshotChange.forEach((doc) => {
                    this.students.push({
                        firebase_id: doc.id,
                        id: doc.data().id,
                        name: doc.data().name,
                        blood_group: doc.data().blood_group,
                    })
                });
            })
        },

      computed: {
    filteredStudents() {
      let filteredStudents = this.students.filter((student) => {
        return student.name.toLowerCase().includes(this.search.toLowerCase());
      })
      let orderedStudents = filteredStudents.sort((a, b) => {
        return b.upvoted - a.upvoted;
      })
      return orderedStudents;
    }
  },
        

        

    };
</script>

<style scoped>

</style>