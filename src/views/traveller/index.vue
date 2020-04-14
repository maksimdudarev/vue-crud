<template>
  <div id="app" class="small-container">
    <h1>Travellers</h1>
    <router-link to="/travellers/add" tag="button">Add</router-link>
    <Index
      :items="items"
      @delete:item="deleteItem"
      @edit:item="editItem"
      @get:item="getItem"
    />
  </div>
</template>

<script>
import Index from '@/components/traveller/list.vue'

export default {
  name: 'App',
  components: {
    Index,
  },
  data() {
    return {
      items: [],
      item: {},
      request: 'http://formulaone-dev.us-west-2.elasticbeanstalk.com:8000/api/travellers',
    }
  },
  mounted() {
    this.getItems()
  },
  methods: {
    async getItems() {
      try {
        const response = await fetch(this.request)
        const data = await response.json()
        this.items = data
      } catch (error) {
        console.error(error)
      }
    },
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
    async deleteItem(id) {
      try {
        await fetch(`${this.request}/${id}`, {
          method: "DELETE"
        })
        this.items = this.items.filter(i => i.id !== id)
      } catch (error) {
        console.error(error)
      }
    },
    async editItem(id, item) {
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
  }
}
</script>