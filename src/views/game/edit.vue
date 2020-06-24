<template>
  <div id="app">
    <h1>Edit</h1>
    <Item
      :itemExternal="item"
      @action:item="editHandler"
    />
  </div>
</template>

<script>
import Item from '@/components/game/item.vue'
import { request, getItem, editItem } from "@/const"

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
    async editHandler(item) {
      await editItem(request + 'games', item)
      this.$router.push('/games')
    },
  },
}
</script>