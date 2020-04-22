import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import Live from '../pages/Live.vue'
import Indent from '../pages/Indent.vue'
import My from '../pages/My.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes:[
      {
          path:"/",
          redirect:"/home"
      },
      {
          path:"/home",
          component:Home
      },
      {
        path:'/live',
        component:Live
      },
      {
        path:'/indent',
        component:Indent
      },
      {
        path:'/my',
        component:My
      },
  ]
})


// const routes = [
//   {
//     path: '/home',
    
//     component: Home
//   },
// ]

// const router = new VueRouter({
//   routes
// })

// export default router
