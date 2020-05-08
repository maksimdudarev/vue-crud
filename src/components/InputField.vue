<template>
  <div id="field">
    <label for="input" class="capitalize">{{ property }}</label>
    <input
      :type=type
      :class="{ 'has-error': hasError }"
      id="input"
      v-bind:value=item[property]
      v-on:input="item[property] = type === 'number' ? parseInt($event.target.value, 10) : $event.target.value"
      :disabled=disabled
      @focus="clearStatus"
      @keypress="clearStatus"
      :required=required
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
      required: {},
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