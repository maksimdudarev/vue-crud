<template>
  <div id="app">
    <h1>Delete</h1>
    <Item
      :itemExternal="item"
      @action:item="deleteHandler"
      :disabled=true
    />
  </div>
</template>

<script>
import Item from '@/components/game/item.vue'
import { request, getItem, deleteItem } from "@/const"

export default {
  name: 'App',
  components: {
    Item,
  },
  data() {
    return {
      item: {},
    }
  },
  mounted() {
    this.getHandler(this.$route.params.id)
  },  
  methods: {
    async getHandler(id) {
      const data = await getItem(request + 'games', id)
      this.item = data
    },
    async deleteHandler(item) {
      await deleteItem(request + 'games', item)
      this.$router.push('/games')
    },
  },
}
</script>