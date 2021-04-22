import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './tailwind css/index.css'
import firebase from 'firebase'
import './firebaseConfig'


let app;

firebase.auth().onAuthStateChanged(user=>{
    if(!app){
       app= createApp(App).use(store).use(router).mount('#app')
    }
})


