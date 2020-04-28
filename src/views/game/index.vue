<template>
  <div id="app" class="small-container">
    <h1>Games</h1>
    <List
      :items="items"
      :travellers="travellers"
      :places="places"
    />
  </div>
</template>

<script>
import List from '@/components/game/list.vue'
import { request, getItems } from "@/const"

export default {
  name: 'App',
  components: {
    List,
  },
  data() {
    return {
      items: [],
      travellers: [],
      places: [],
    }
  },
  mounted() {
    this.getHandler()
  },
  methods: {
    async getHandler() {
      const data = await getItems(request + 'games')
      this.items = data
      const travellers = await getItems(request + 'travellers')
      this.travellers = travellers
      const places = await getItems(request + 'places')
      this.places = places
    },
  }
}
</script>