<template>
  <div id="app">
    <h1>Edit</h1>
    <Item
      :itemExternal="item"
      @action:item="editItem"
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
      item: {},
      request: 'http://formulaone-dev.us-west-2.elasticbeanstalk.com:8000/api/travellers',
    }
  },
  mounted() {
    this.getItem(this.$route.params.id)
  },  
  methods: {
    async getItem(id) {
      try {
        const response = await fetch(`${this.request}/${id}`)
        const data = await response.json()
        console.log(data)
        this.item = data
      } catch (error) {
        console.error(error)
      }
    },
    async editItem(item, id) {
      try {
        const response = await fetch(`${this.request}/${id}`, {
          method: 'PUT',
          body: JSON.stringify(item),
          headers: { 'Content-type': 'application/json; charset=UTF-8' },
        })
        const data = await response.json()
        this.items = this.items.map(i => (i.id === id ? data : i))
      } catch (error) {
        console.error(error)
      }
    },
  },
}
</script>