<template>
  <div id="app" class="small-container">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>Travellers</h1>

    <traveller-index
      :items="travellers"
      @delete:item="deleteTraveller"
      @edit:item="editTraveller"
    />
    <traveller-add @add:item="addTraveller" />

    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TravellerIndex from '@/components/traveller/Index.vue'
import TravellerAdd from '@/components/traveller/Add.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    TravellerIndex,
    TravellerAdd,
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

button {
  background: #009435;
  border: 1px solid #009435;
}

.small-container {
  max-width: 680px;
}
</style>
