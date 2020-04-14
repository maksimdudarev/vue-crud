<template>
  <div id="app">
    <h1>Delete</h1>
    <Item
      :item="item"
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
  methods: {
  }
}
</script>