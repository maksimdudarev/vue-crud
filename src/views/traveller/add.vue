<template>
  <div id="app">
    <h1>Add</h1>
    <Item
      :itemExternal="item"
      @action:item="addItem"
    />
  </div>
</template>

<script>
import Item from '@/components/traveller/item.vue'

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
      request: 'http://formulaone-dev.us-west-2.elasticbeanstalk.com:8000/api/travellers',
    }
  },
  methods: {
    async addItem(item) {
      try {
        await fetch(this.request, {
          method: 'POST',
          body: JSON.stringify(item),
          headers: { 'Content-type': 'application/json; charset=UTF-8' },
        })
      } catch (error) {
        console.error(error)
      }
    },
  }
}
</script>