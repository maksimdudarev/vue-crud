<template>
  <div id="app">
    <div class="us">
      <h2>User Settings</h2>
      <UserSettingsNav/>
      <router-view class ="us__content"/>
      <router-view name="helper" class="us__content us__content--helper"/>
    </div>
  </div>
</template>

<script>
import UserSettingsNav from '@/components/UserSettingsNav.vue'

export default {
  name: 'App',
  components: {
    UserSettingsNav,
  },
  data() {
    return {
      item: {},
    }
  },
  methods: {
  },
}
</script>