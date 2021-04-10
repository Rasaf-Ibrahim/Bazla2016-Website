<template>

    <div class="max-w-90% sm:max-w-75% md:max-w-60% lg:max-w-50% xl:max-w-40% mx-auto">


        <!-- Title -->
        <h1 class="heading-1_r font-cursive-2
            text-green-800 
            text-center m-8 ">
            Login
        </h1> 

 
        <!-- Form -->

        <form class="mt-6 bg-white shadow-md py-8 px-8
              rounded-lg border-2 border-indigo-200">

                

                <input class="bg-gray-100 
                        w-full py-2 px-4  m-2
                        rounded-lg 
                        focus:outline-none border-2 focus:border-indigo-200"

                        type="email"
                        placeholder="Email" />
                

                <button class="btn_r btn-transition-scale_r      
                        hover:bg-indigo-600 text-white bg-indigo-800
                         hover:text-white
                         w-full py-2 px-4 rounded-lg m-2"
                        Login
                        type="submit">
                </button>


            </form>

        </div>


                 
</template>

<script>
    export default {
        name:'login',
        
    }
</script>

<style  scoped>

</style>