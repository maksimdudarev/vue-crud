<template>
  <div id="app" class="small-container">
    <h1>Games</h1>
    <List
      :items="items"
      :travellers="travellers"
    />
  </div>
</template>

<script>
import List from '@/components/game/list.vue'
import { request, requestCut, getItems } from "@/const"

export default {
  name: 'App',
  components: {
    List,
  },
  data() {
    return {
      items: [],
      travellers: [],
    }
  },
  mounted() {
    this.getHandler()
  },
  methods: {
    async getHandler() {
      const data = await getItems(requestCut + 'games')
      this.items = data
      const travellers = await getItems(request)
      this.travellers = travellers
    },
  }
}
</script>