<template>

    <div class="max-w-90% sm:max-w-md lg:max-w-lg mx-auto">


        <!-- Title -->
        <h1 class="heading-2_r font-cursive-2
          text-center m-6 md:m-8">
            Login
        </h1> 

 
        <!-- Form -->

        <form @submit.prevent="login"
              class="mt-6 mb-8 bg-dark-2_r shadow-md py-8 px-8
              rounded-lg border-2 border-color_r">
 

            
            
             <!-- Email -->

            <input  v-model="email"
                    class="bg-dark-3_r
                    w-full py-2 px-4  m-2
                    rounded-lg 
                    focus:outline-none border-2 
                    focus-border-color_r"

                    type="text"
                    placeholder="Email"
                    required />


           <!-- Password -->

            <input  v-model="password"
                    class="bg-dark-3_r
                    w-full py-2 px-4  m-2
                    rounded-lg 
                    focus:outline-none border-2 focus-border-color_r"

                    type="text" 
                    placeholder="Password"
                    required/>


            <button 
                    class="btn_r btn-transition-scale_r btn-color_r
                    w-full py-2 px-4 rounded-lg m-2"
                    type="submit">
                    Submit
            </button>

        </form>

    </div>

    
                 
</template>

<script>

import firebase from 'firebase'

    export default {
        name:'login',

        data() {
            return {
                email: '',
                password: ''
            }
        },

        methods: {
            login(event) {
                
                
                firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(admin=>{
                    alert(`Hello Admin! You are logged in. Now do whatever the heck you want!`);
                    this.$router.push('/');
            },
            err =>{
                alert(err.message);
            }
         );


         event.preventDefault();

        }
        
    }
    }
</script>

<style  scoped>

</style>