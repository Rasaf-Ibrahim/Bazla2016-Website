import { createRouter, createWebHistory } from 'vue-router'



// Common Pages
import home from '../views/home.vue'








// Day Shift
import addDay from '../views//day/addDay.vue'
import editDay from '../views/day/editDay.vue'
import deleteDay from '../views/day/deleteDay.vue'
import listDay from '../views/day/listDay'
import detailsDay from '../views/day/detailsDay'
import allGroupDay from '../views/day/blood/allGroupDay'
import aPositiveDay from '../views/day/blood/aPositiveDay'
import aNegativeDay from '../views/day/blood/aNegativeDay'
import abPositiveDay from '../views/day/blood/abPositiveDay'
import abNegativeDay from '../views/day/blood/abNegativeDay'
import bPositiveDay from '../views/day/blood/bPositiveDay'
import bNegativeDay from '../views/day/blood/bNegativeDay'
import oPositiveDay from '../views//day/blood/oPositiveDay'
import oNegativeDay from '../views/day/blood/oNegativeDay'






// Admin Pages
import login from '../views/login.vue'
import adminPage from '../views/admin/adminPage.vue'


import rollDay from '../views/admin/rollDay.vue'

// Firebase
import firebase from 'firebase' 




let router = createRouter({

routes: [

// Common Pages

  {
    path: '/',
    name: 'home',
    component: home
    
  },
  
  
  
  

  {
    path: '/login',
    name: 'login',
    component: login,
    meta: {
      requiresGuest: true
    }
    
  },





  // ***** Day Shift ***** 


 {
    path: '/day/add',
    name: 'addDay',
    component: addDay,
    meta: {
     requiresAuth: true
    }
  },

  {
    path: '/day/edit/:id',
    name: 'editDay',
    component: editDay,
    meta: {
      requiresAuth: true
    }
  },

  {
    path: '/day/delete/:id',
    name: 'deleteDay',
    component: deleteDay,
    meta: {
      requiresAuth: true
    }
  },

  {
    path: '/day/student-list',
    name: 'listDay',
    component: listDay
    
  },

  {
    path: '/day/:id',
    name: 'detailsDay',
    component: detailsDay
  },

  
  {
    path: '/day/blood-group',
    name: 'allGroupDay',
    component: allGroupDay
    
  },

  {
    path: '/day/blood-group/aPositive',
    name: 'aPositiveDay',
    component: aPositiveDay
    
  },

  {
    path: '/day/blood-group/aNegative',
    name: 'aNegativeDay',
    component: aNegativeDay
    
  },
  {
    path: '/day/blood-group/abPositive',
    name: 'abPositiveDay',
    component: abPositiveDay
    
  },

  {
    path: '/day/blood-group/abNegative',
    name: 'abNegativeDay',
    component: abNegativeDay
    
  },
  {
    path: '/day/blood-group/bPositive',
    name: 'bPositiveDay',
    component: bPositiveDay
    
  },

  {
    path: '/day/blood-group/bNegative',
    name: 'bNegativeDay',
    component: bNegativeDay
    
  },
  {
    path: '/day/blood-group/oPositive',
    name: 'oPositiveDay',
    component: oPositiveDay
    
  },

  {
    path: '/day/blood-group/oNegative',
    name: 'oNegativeDay',
    component: oNegativeDay
    
  },


   // ***** Admin Pages ***** 


  {
    path: '/roll',
    name: 'rollDay',
    component: rollDay,
    meta: {
      requiresAuth: true
    }
    
  },
  {
    path: '/admin-page',
    name: 'adminPage',
    component: adminPage,
    meta: {
      requiresAuth: true
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
