<template>
  <div id="field">
    <label for="input" class="capitalize">{{ property }}</label>
    <input
      type="text"
      :class="{ 'has-error': hasError }"
      id="input"
      v-model=item[property]
      :disabled=disabled
    />
  </div>
</template>

<script>
  export default {
    name: 'field',
    props: {
      item: {},
      property: {},
      disabled: {},
      hasError: {},
    },
  }
</script>

<style scoped>
  .capitalize {
    text-transform:capitalize;
  }
</style>