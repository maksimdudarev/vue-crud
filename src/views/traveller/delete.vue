<template>
  <div id="app">
    <h1>Delete</h1>
    <Item
      :itemExternal="item"
      @action:item="deleteItem"
      :disabled=true
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
    async deleteItem(item) {
      try {
        await fetch(`${this.request}/${item.id}`, {
          method: "DELETE"
        })
      } catch (error) {
        console.error(error)
      }
    },
  },
}
</script>