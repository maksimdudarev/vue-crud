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
import Item from '@/components/traveller/item.vue'
import { request, getItem, deleteItem } from "@/const";

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
      const data = await getItem(request, id)
      this.item = data
    },
    deleteHandler(item) {
      deleteItem(request, item)
    },
  },
}
</script>