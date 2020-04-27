import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import UserEmailsSubscriptions from './components/UserEmailsSubscriptions.vue'
import UserSettings from './components/UserSettings.vue'
import UserProfile from './components/UserProfile.vue'
import UserProfilePreview from './components/UserProfilePreview.vue'

import App from './App.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  {
    path: '/helloworld',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/travellers',
    component:  () => import(/* */ './views/traveller/index.vue')
  },
  {
    path: '/travellers/add',
    component: () => import(/* */ './views/traveller/add.vue')
  },
  {
    path: '/travellers/edit/:id',
    component: () => import(/* */ './views/traveller/edit.vue')
  },
  {
    path: '/travellers/delete/:id',
    component: () => import(/* */ './views/traveller/delete.vue')
  },
  {
    path: '/settings',
    // You could also have named views at tho top
    component: UserSettings,
    children: [
      {
        path: 'emails',
        component: UserEmailsSubscriptions
      },
      {
        path: 'profile',
        components: {
          default: UserProfile,
          helper: UserProfilePreview
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
