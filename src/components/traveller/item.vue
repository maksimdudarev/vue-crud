<template>
  <div id="item-form">
    <hr />
    <form @submit.prevent="handleSubmit">
      <div>
        <label>Name</label>
        <input
          ref="first"
          type="text"
          :class="{ 'has-error': submitting && invalidName }"
          v-model="item.name"
          :disabled=disabled
          @focus="clearStatus"
          @keypress="clearStatus"
        />      
      </div>
      <div>
        <label>Email</label>
        <input
          type="text"
          :class="{ 'has-error': submitting && invalidEmail }"
          v-model="item.email"
          :disabled=disabled
          @focus="clearStatus"
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
  export default {
    name: 'item-form',
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
        
        if (this.invalidName || this.invalidEmail) {
          this.error = true
          return
        }

        this.$emit('action:item', this.item, this.item.id)
        this.$refs.first.focus()

        this.item = {
          name: '',
          email: '',
        }
        this.error = false
        this.success = true
        this.submitting = false        
      },
      clearStatus() {
        this.success = false
        this.error = false
      }
    },
    computed: {
      invalidName() {
        return this.item.name === ''
      },

      invalidEmail() {
        return this.item.email === '' && ! this.disabled
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