<template>
  <div id="app" class="small-container">
    <!-- {{ item.name }}
    <br>
    {{ item2.name }}
    <br>
    {{ item3.name }}
    <br>
    {{ item4.name }}
    <br>
    {{ item5.name }} -->
    <h1>Travellers</h1>
    <List
      :items="items"
    />
  </div>
</template>

<script>
import List from '@/components/traveller/list.vue'
import { request, getItems } from "@/const"

export default {
  name: 'App',
  components: {
    List,
  },
  data() {
    return {
      items: [],
      // requestOld: 'http://formulaone-dev.us-west-2.elasticbeanstalk.com:8000/api/travellers',
      // item: null,
      // item2: null,
      // item3: null,
      // item4: null,
      // item5: null,
    }
  },
  mounted() {
    this.getHandler()
    console.log('test')
  },
  methods: {
    async getHandler() {
      // this.item = item;
      // this.item.name = 'foo';

      // this.item2 = item;
      // this.item2.name = "baz";

      // this.item3 = new createItem();
      // this.item3.name = 'foobar'

      // this.item4 = new createItem();
      // this.item4.name = 'bazfoo'

      // // Another option is to use Object.assign
      // this.item5 = Object.assign({}, item);
      // this.item5.name = request;

      const data = await getItems(request + 'travellers')
      this.items = data
      //console.log(this.items[this.items.length-1])
      //return data
    },
  }
}
</script>

<style scoped>
  /* div {
    border: 5px dotted;
    margin-right: .75rem;
    padding: .3rem;
  } */
</style>