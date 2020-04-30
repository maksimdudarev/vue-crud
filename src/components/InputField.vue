<template>
  <div id="field">
    <label for="input" class="capitalize">{{ property }}</label>
    <input
      type="text"
      :class="{ 'has-error': hasError }"
      id="input"
      v-model=item[property]
      :disabled=disabled
      @focus="clearStatus"
      @keypress="clearStatus"
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
    methods: {
      clearStatus() {
        this.$emit('action:clear')
      }
    },
  }
</script>

<style scoped>
  .capitalize {
    text-transform:capitalize;
  }
</style>