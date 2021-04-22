<template>
  
 <div class="max-w-98% sm:max-w-90% md:max-w-75%  mx-auto
         my-16">

    

    <div class="font-bangla-cursive heading-1_r mb-16">
        ভাই, 
        <span class="bg-red-800"> 
        {{student.name}} 
        </span>
        এর ইনফো ডিলিট করা কি জরুরী? 
    </div>

   <div class="flex justify-center">

   <button @click.prevent="deleteUser(id_firebase.id)"
        class="btn_r btn-transition-scale_r btn-color_r ">
    একদম ডিলিট করতেই হলে আমাকে ক্লিক কর!
   </button>

 </div>

 </div>



    
</template>

<script>
   import { database } from '../../firebaseConfig'

    export default {
        name: 'remove',

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
            deleteUser(id_parameter){
              if (window.confirm("ডিলিট কিন্তু করেই ফেললাম!")) {
                database.collection('info').doc(id_parameter).delete().then(() => {
                    console.log("Document deleted!");
                    this.$router.push('/info')
                })
                .catch((error) => {
                    console.error(error);
                })
              }
            }
        }

        
    }
</script>

<style lang="scss" scoped>

</style>