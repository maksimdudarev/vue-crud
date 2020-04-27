<template>
  <div id="app">
    <div class="us">
      <h2>Main Layout</h2>
      <NavMenu/>
      <router-view class ="us__content"/>
      <router-view name="helper" class="us__content us__content--helper"/>
    </div>
  </div>
</template>

<script>
import NavMenu from '@/components/NavMenu.vue'

export default {
  name: 'App',
  components: {
    NavMenu,
  },
}
</script>

<style scoped>
  .us {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto;
    grid-template-areas: 
      "header header"
      "nav content"
      "nav helper"
      ;
  }
  h2 {
    grid-area: header;
  }
  .us__content {
    grid-area: content;
    height: 350px;
    overflow: auto;
  }
  .us__content--helper {
    grid-area: helper;
  }
</style>