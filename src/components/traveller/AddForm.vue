<template>
  <div id="add-form">
    <form @submit.prevent="handleSubmit">
      <label>Name</label>
      <input
        ref="first"
        type="text"
        :class="{ 'has-error': submitting && invalidName }"
        v-model="item.name"
        @focus="clearStatus"
        @keypress="clearStatus"
      />      
      <label>Email</label>
      <input
        type="text"
        :class="{ 'has-error': submitting && invalidEmail }"
        v-model="item.email"
        @focus="clearStatus"
      />      
      <p v-if="error && submitting" class="error-message">
        ❗Please fill out all required fields
      </p>
      <p v-if="success" class="success-message">
        ✅ Successfully added
      </p>
      <button>Add</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'add-form',
    data() {
      return {
        submitting: false,
        error: false,
        success: false,
        item: {
          name: '',
          email: '',
        },
      }
    },
    methods: {
      handleSubmit() {
        this.submitting = true
        this.clearStatus()
        
        if (this.invalidName || this.invalidEmail) {
          this.error = true
          return
        }

        this.$emit('add:item', this.item)
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
        return this.item.email === ''
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