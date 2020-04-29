<template>
  <div id="field">
    <label for="input" class="capitalize">{{ property }}</label>
    <input
      type="text"
      id="input"
      v-model="item[property]"
    />
  </div>
</template>

<script>
  export default {
    name: 'field',
    props: {
      item: {},
      property: {},
    },
  }
</script>

<style scoped>
  .capitalize {
    text-transform:capitalize;
  }
</style>