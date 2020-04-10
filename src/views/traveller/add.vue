<template>
  <div id="app">
    <h1>Add</h1>
    <TravellerAdd @add:item="addTraveller" />
  </div>
</template>

<script>
import TravellerAdd from '@/components/traveller/AddForm.vue'

export default {
  name: 'App',
  components: {
    TravellerAdd,
  },
  data() {
    return {
      travellers: [],
      request: 'http://formulaone-dev.us-west-2.elasticbeanstalk.com:8000/api/travellers',
    }
  },
  methods: {
    async addTraveller(item) {
      try {
        const response = await fetch(this.request, {
          method: 'POST',
          body: JSON.stringify(item),
          headers: { 'Content-type': 'application/json; charset=UTF-8' },
        })
        const data = await response.json()
        this.travellers = [...this.travellers, data]
      } catch (error) {
        console.error(error)
      }
    },
  }
}
</script>