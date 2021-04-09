<template>

    <div class="max-w-98% sm:max-w-90% md:max-w-75%  mx-auto">

        <h1 class="heading-1_r font-cursive-2
            text-green-800 
            text-center m-8 ">
            Login
        </h1> 

        <div class="bg-white shadow-md py-8 px-8
             rounded-lg border-2 bor ">


                <form class="mt-6">
                    <div class="my-5 text-sm">
                        <label for="username" class="block text-black">Username</label>
                        <input type="text" autofocus id="username" class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Username" />
                    </div>


                    <button class="btn_r btn-transition-scale_r   hover:bg-green-600 text-white bg-green-800 hover:text-white  ">Login</button>
                </form>

                 

            

            </div>
        </div>



  
</template>

<script>
    export default {
        name:'login',
        
    }
</script>

<style lang="scss" scoped>

</style>