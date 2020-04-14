<template>
  <div id="item-table">
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="i in items" :key="i.id">
          <td>{{ i.name }}</td>
          <td>{{ i.email }} array</td>
        </tr>
        <tr>
          <td>{{ item.name }}</td>
          <td>{{ item.email }} element</td>
        </tr>
        <tr>
          <td>test</td>
          <td>2</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'item-table',
    props: {
    items: Array,
    item: {},
    },
  }
</script>