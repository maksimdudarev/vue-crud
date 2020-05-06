<template>
  <div id="item">
    <hr />
    <form @submit.prevent="handleSubmit">
      <div>
        <label>Date</label>
        <input
          ref="first"
          type="datetime"
          :class="{ 'has-error': submitting && invalidDate }"
          v-model="item.date"
          :disabled=disabled
          @focus="clearStatus"
          @keypress="clearStatus"
        />      
      </div>
      <div>
        <label>Traveller.Name</label>
        <input
          type="text"
          :class="{ 'has-error': submitting && invalidTraveller }"
          v-model="item.travellerId"
          :disabled=disabled
          @focus="clearStatus"
        />      
      </div>
      <div>
        <label>Points</label>
        <input
          type="number"
          :class="{ 'has-error': submitting && invalidPoints }"
          v-model="item.points"
          :disabled=disabled
          @focus="clearStatus"
        />      
      </div>
      <div>
        <InputField
          property="promotion"
          type="checkbox"
          :hasError=hasError
          :item=item
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
        <router-link to="/games" tag="button">Cancel</router-link>
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
        
        if (this.invalidDate || this.invalidPoints || this.invalidPromotion) {
          this.error = true
          return
        }

        this.$emit('action:item', this.item)
        this.$refs.first.focus()

        this.item = {
          date: '',
          points: '',
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
      invalidDate() {
        return this.item.date === ''
      },
      invalidPoints() {
        return this.item.points === ''
      },
      invalidPromotion() {
        return this.item.promotion === ''
      },
      invalidTraveller() {
        return this.item.travellerId === ''
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