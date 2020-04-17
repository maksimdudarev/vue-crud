<template>
  <div id="list">
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
          <td>{{ item.name }}</td>
          <td>{{ item.email }}</td>
          <td>
            <router-link :to="{path: `/travellers/edit/${item.id}`}" tag="button">Edit</router-link>
            <router-link :to="{path: `/travellers/delete/${item.id}`}" tag="button">Delete</router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'list',
    props: {
      items: Array,
    },
  }
</script>

<style scoped>
  button {
    margin: 0 0.5rem 0 0;
  }
</style>