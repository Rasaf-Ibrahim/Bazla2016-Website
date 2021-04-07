<template>
    <div>


        <!-- Title -->
        <h1 class="heading-1_r font-cursive-2
            text-green-800 
            text-center m-8 ">
            Details
        </h1>




<h1>{{students}}</h1>

    </div>
</template>

<script>

import db from '../components/firebaseinit'
    export default {
        name: 'info',
        data() {
            return {
                students : []
            }
        },
        created () {
            db.collection('info').get().then(querySnapshot =>{
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