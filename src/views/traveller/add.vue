<template>
  <div id="app">
    <h1>Add</h1>
    <Add @add:item="addItem" />
  </div>
</template>

<script>
import Add from '@/components/traveller/AddForm.vue'

export default {
  name: 'App',
  components: {
    Add,
  },
  data() {
    return {
      items: [],
      request: 'http://formulaone-dev.us-west-2.elasticbeanstalk.com:8000/api/travellers',
    }
  },
  methods: {
    async addItem(item) {
      try {
        const response = await fetch(this.request, {
          method: 'POST',
          body: JSON.stringify(item),
          headers: { 'Content-type': 'application/json; charset=UTF-8' },
        })
        const data = await response.json()
        this.items = [...this.items, data]
      } catch (error) {
        console.error(error)
      }
    },
  }
}
</script>