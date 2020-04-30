<template>
  <div id="item">
    <hr />
    <form @submit.prevent="handleSubmit">
      <div>
        <!-- <label for="name">Name</label>
        <input
          id="name"
          ref="first"
          type="text"
          :class="{ 'has-error': submitting && invalidName }"
          v-model="item.name"
          :disabled=disabled
          @focus="clearStatus"
          @keypress="clearStatus"
        /> -->
        <InputField
          ref="first"
          :item=item
          property="name"
          :hasError=hasError
          :disabled=disabled
          @action:clear="clearStatus"
        />
      </div>
      <p v-if="error && submitting" class="error-message">
        ❗Please fill out all required fields
      </p>
      <p v-if="success" class="success-message">
        ✅ Success
      </p>
      <div>
        <button>Accept</button> ::
        <router-link to="/travellers" tag="button">Cancel</router-link>
      </div>
    </form>
  </div>
</template>

<script>
  import InputField from '@/components/InputField.vue'

  export default {
    name: 'item',
    components: {
      InputField,
    },
    props: {
      itemExternal: {},
      disabled: {},
    },
    data() {
      return {
        submitting: false,
        error: false,
        success: false,
        item: { ...this.itemExternal },
      }
    },
    watch: {
      itemExternal() {
        this.item = { ...this.itemExternal }
      },      
    },
    methods: {
      handleSubmit() {
        this.submitting = true
        this.clearStatus()
        
        if (this.invalidName) {
          this.error = true
          return
        }

        this.$emit('action:item', this.item)
        this.$refs.first.focus()

        this.item = {
          name: '',
        }
        this.submitting = false        
        this.error = false
        this.success = true
      },
      clearStatus() {
        this.error = false
        this.success = false
      }
    },
    computed: {
      invalidName() {
        return this.item.name === ''
      },
      hasError() {
        return this.submitting && this.invalidName
      },
    },    
  }
</script>

<style scoped>
  form {
    margin-bottom: 2rem;
  }

  [class*='-message'] {
    font-weight: 500;
  }

  .error-message {
    color: #d33c40;
  }

  .success-message {
    color: #32a95d;
  }
</style>