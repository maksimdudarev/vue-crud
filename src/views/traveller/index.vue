<template>
  <div id="app" class="small-container">
    <h1>Travellers</h1>
    <router-link to="/travellers/add" tag="button">Add</router-link>
    <List
      :items="items"
      @edit:item="editItem"
    />
  </div>
</template>

<script>
import List from '@/components/traveller/list.vue'

export default {
  name: 'App',
  components: {
    List,
  },
  data() {
    return {
      items: [],
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