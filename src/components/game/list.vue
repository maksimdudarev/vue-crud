<template>
  <div id="list">
    <p v-if="items.length < 1" class="empty-table">
      No items
    </p>
    <table v-else>
      <thead>
        <tr>
          <th>Date</th>
          <th>Traveller.Name</th>
          <th>Place.Name</th>
          <th>Points</th>
          <th>Promotion</th>
          <th><router-link to="/games/add" tag="button">Add</router-link></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td>{{ item.date }}</td>
          <td>{{ travellers.find(i => i.id === item.travellerId).name }}</td>
          <td>{{ places.find(i => i.id === item.placeId).name }}</td>
          <td>{{ item.points }}</td>
          <td>{{ item.promotion }}</td>
          <td>
            <router-link :to="{path: `/games/edit/${item.id}`}" tag="button">Edit</router-link>
            <router-link :to="{path: `/games/delete/${item.id}`}" tag="button">Delete</router-link>
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
      travellers: Array,
      places: Array,
    },
  }
</script>

<style scoped>
  button {
    margin: 0 0.5rem 0 0;
  }
</style>