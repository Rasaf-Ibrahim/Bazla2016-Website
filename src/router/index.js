import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import info from '../views/info.vue'
import detail from '../views/detail.vue'
import update from '../views/update.vue'
import add from '../views/add.vue'
import login from '../views/login.vue'
import firebase from 'firebase' 




let router = createRouter({

routes: [
  {
    path: '/',
    name: 'home',
    component: home
    
  },
  {
    path: '/info',
    name: 'info',
    component: info
    
  },
  {
    path: '/:id',
    name: 'detail',
    component: detail
    
  },
  {
    path: '/add',
    name: 'add',
    component: add,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/edit/:id',
    name: 'update',
    component: update,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: login,
    meta: {
      requiresGuest: true
    }
    
  },


],

  history: createWebHistory(process.env.BASE_URL)

});

router.beforeEach((to,from,next)=>{
  
  if(to.matched.some(record=> record.meta.requiresAuth)){

    if(!firebase.auth().currentUser){
      next({
        path:'/login',
        query: {
          redirect: to.fullPath
        }

      })
    }
  
   else{
     next();
   }

  }

  else if(to.matched.some(record=> record.meta.requiresGuest)){
    if(firebase.auth().currentUser){
      next({
        path:'/',
        query: {
          redirect: to.fullPath
        }

      })
    }
  
   else{
     next();
   }

  }
  
  else{
    next();
  }
  
 
});


export default router
