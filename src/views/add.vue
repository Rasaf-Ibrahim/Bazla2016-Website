<template>
    <div>


        <!-- Title -->
        <h1 class="heading-1_r font-cursive-2
            text-green-800 
            text-center m-8 ">
            Add a New Student
        </h1>

            <form @submit.prevent="save">

                <input v-model="id" 
                       type="text" required>

                 <label>ID</label>



                  <input v-model="name" 
                         type="text" required>

                 <label>Name</label>








            </form>





    </div>
</template>

<script>
    export default {
        name: 'add',
        data() {
            return {
                
            }
        },


    }
</script>

<style scoped>

</style>