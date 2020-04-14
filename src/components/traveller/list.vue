<template>
  <div id="index-table">
    <p v-if="items.length < 1" class="empty-table">
      No items
    </p>
    <table v-else>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td v-if="editing === item.id">
            <input type="text" v-model="item.name" />
          </td>
          <td v-else>{{ item.name }}</td>
          <td v-if="editing === item.id">
            <input type="text" v-model="item.email" />
          </td>
          <td v-else>{{ item.email }}</td>
          <td v-if="editing === item.id">
            <button @click="editItem(item)">Save</button>
            <button
              @click="cancelEdit(item)"
              class="muted-button"
            >Cancel</button>
          </td>
          <td v-else>
            <button @click="editMode(item)">Edit</button>
            <button @click="$emit('delete:item', item.id)">Delete</button>
          </td>
          <td>
            <router-link :to="{path: `/travellers/edit/${item.id}`}" tag="button">Edit</router-link>
            <router-link :to="{path: `/travellers/delete/${item.id}`}" tag="button">Delete</router-link>
            <button @click="$emit('get:item', item.id)">Details</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'index-table',
    props: {
    items: Array,
    item: {},
    },
    data() {
      return {
        editing: null,
      }
    },
    methods: {
      editMode(item) {
        this.cachedItem = Object.assign({}, item)
        this.editing = item.id
      },
      cancelEdit(item) {
        Object.assign(item, this.cachedItem)
        this.editing = null
      },
      editItem(item) {
        if (item.name === '' || item.email === '') return
        this.$emit('edit:item', item.id, item)
        this.editing = null
      },
    }    
  }
</script>

<style scoped>
  button {
    margin: 0 0.5rem 0 0;
  }
</style>