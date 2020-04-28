import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

import App from './App.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import(/* */ './components/MainLayout.vue'),
    children: [
      {
        path: 'helloworld',
        name: 'HelloWorld',
        component: HelloWorld
      },
      {
        path: 'travellers',
        name: 'Travellers',
        component: () => import(/* */ './views/traveller/index.vue')
      },
      {
        path: 'travellers/add',
        component: () => import(/* */ './views/traveller/add.vue')
      },
      {
        path: 'travellers/edit/:id',
        component: () => import(/* */ './views/traveller/edit.vue')
      },
      {
        path: 'travellers/delete/:id',
        component: () => import(/* */ './views/traveller/delete.vue')
      },
      {
        path: 'games',
        name: 'Games',
        component: () => import(/* */ './views/game/index.vue')
      },
      {
        path: 'emails',
        component: () => import(/* */ './views/user/EmailsSubscriptions.vue')
      },
      {
        path: 'profile',
        components: {
          default: () => import(/* */ './views/user/Profile.vue'),
          helper: () => import(/* */ './views/user/ProfilePreview.vue')
        }
      }
    ]
  },
]


const router = new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
