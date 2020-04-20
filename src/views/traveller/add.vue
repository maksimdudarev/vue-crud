<template>
  <div id="app">
    <h1>Add</h1>
    <Item
      :itemExternal="item"
      @action:item="addHandler"
    />
  </div>
</template>

<script>
import Item from '@/components/traveller/item.vue'
import { request, addItem } from "@/const";

export default {
  name: 'App',
  components: {
    Item,
  },
  data() {
    return {
      item: {
        name: '',
        email: '',
      },
    }
  },
  methods: {
    addHandler(item) {
      addItem(request, item)
      this.$router.push('/travellers')
    },
  }
}
</script>