<template>
    <div class="max-w-screen-sm md:max-w-3/4 mx-auto
         font-regular-space">


        <!-- Title -->
        <h1 class="heading-1_r font-cursive-2
            text-green-800 
            text-center m-8 ">
            Student Info
        </h1>


        

        <!-- Name and Details button -->
        <div v-for="student in students" :key="student.firebase_id"
             class="flex justify-between items-center 
             p-2
             border-b-2 border-gray-200 shadow
           bg-gray-100 hover:bg-white">
             

            <span class="mx-6  
                  heading-3_r ">
                  {{student.name}}
            </span>


            <button class="btn_r btn-ghost_r 
                  border-green-800 text-green-800 hover:bg-green-800 hover:text-white">
                  Details
            </button>


        </div>

    </div>
</template>

<script>
    import db from '../components/firebaseinit'
    export default {
        name: 'info',
        data() {
            return {
                students: []
            }
        },
        created() {
            db.collection('info').get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    const data = {

                        'firebase_id': doc.id,
                        'id': doc.data().id,
                        'name': doc.data().name,
                        'current_address': doc.data().current_address,
                        'permanent_address': doc.data().permanent_address,
                        'university': doc.data().university,
                        'university_department': doc.data().university_department,
                        'job_institution': doc.data().job_institution,
                        'job_title': doc.data().job_title,
                        'phone_number': doc.data().phone_number,
                        'facebook_link': doc.data().facebook_link,
                        'instagram_link': doc.data().instagram_link,
                        'twitter_link': doc.data().twitter_link,
                        'blood_group': doc.data().blood_group,

                    }
                    this.students.push(data)
                })
            })
        },


    }
</script>

<style scoped>

</style>