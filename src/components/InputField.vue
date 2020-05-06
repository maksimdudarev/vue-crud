<template>
  <div id="field">
    <label for="input" class="capitalize">{{ property }}</label>
    <input
      :type=type
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
      type: {},
      hasError: {},
      item: {},
      property: {},
      disabled: {},
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