<template>
  <div id="field">
    <label>Name</label>
    <input
      type="text"
      v-model="item.name"
    />
  </div>
</template>

<script>
  export default {
    name: 'field',
    props: {
      item: {},
    },
  }
</script>