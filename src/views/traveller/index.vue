<template>
  <div id="app" class="small-container">
    <h1>Travellers</h1>
    <TravellerIndex
      :items="travellers"
      @delete:item="deleteTraveller"
      @edit:item="editTraveller"
    />
  </div>
</template>

<script>
import TravellerIndex from '@/components/traveller/list.vue'

export default {
  name: 'App',
  components: {
    TravellerIndex,
  },
  data() {
    return {
      travellers: [],
      request: 'http://formulaone-dev.us-west-2.elasticbeanstalk.com:8000/api/travellers',
    }
  },
  mounted() {
    this.getTravellers()
  },
  methods: {
    async getTravellers() {
      try {
        const response = await fetch(this.request)
        const data = await response.json()
        this.travellers = data
      } catch (error) {
        console.error(error)
      }
    },
    async deleteTraveller(id) {
      try {
        await fetch(`${this.request}/${id}`, {
          method: "DELETE"
        });
        this.travellers = this.travellers.filter(i => i.id !== id);
      } catch (error) {
        console.error(error);
      }
    },
    async editTraveller(id, item) {
      try {
        const response = await fetch(`${this.request}/${id}`, {
          method: 'PUT',
          body: JSON.stringify(item),
          headers: { 'Content-type': 'application/json; charset=UTF-8' },
        })
        const data = await response.json()
        this.travellers = this.travellers.map(i => (i.id === id ? data : i))
      } catch (error) {
        console.error(error)
      }
    },
  }
}
</script>