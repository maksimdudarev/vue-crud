import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Foo from './Foo.vue'
import Travellers from './views/Travellers.vue'

import App from './App.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  {
    path: '/helloworld',
    name: 'HelloWorld',
    component: HelloWorld
  },
  { path: '/foo', component: Foo },
  {
    path: '/travellers',
    component: Travellers
  }
]

const router = new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
